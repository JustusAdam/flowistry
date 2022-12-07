use rustc_borrowck::consumers::{BodyWithBorrowckFacts, self};
use rustc_hir::def_id::LocalDefId;
use rustc_middle::{
  mir::{MirPass, Body},
  ty::{
    self,
    query::{query_values::mir_borrowck, ExternProviders, Providers},
    TyCtxt,
  },
};

use crate::{block_timer, cached::Cache, mir::utils::SimplifyMir};

// For why we need to do override mir_borrowck, see:
// https://github.com/rust-lang/rust/blob/485ced56b8753ec86936903f2a8c95e9be8996a1/src/test/run-make-fulldeps/obtain-borrowck/driver.rs
pub fn override_queries(
  _session: &rustc_session::Session,
  local: &mut Providers,
  _external: &mut ExternProviders,
) {
  local.mir_borrowck = mir_borrowck;
}

pub struct CachedSimplifedBodyWithFacts<'tcx> {
  body_with_facts: BodyWithBorrowckFacts<'tcx>,
  simplified_body: Body<'tcx>,
}

impl <'tcx> CachedSimplifedBodyWithFacts<'tcx> {
  pub fn simplified_body(&self) -> &Body<'tcx> {
    &self.simplified_body
  }
  pub fn borrowckd_body(&self) -> &Body<'tcx> {
    &self.body_with_facts.body
  }
  pub fn input_facts(&self) -> &consumers::PoloniusInput {
    &self.body_with_facts.input_facts
  }
  pub fn output_facts(&self) -> &consumers::PoloniusOutput {
    &self.body_with_facts.output_facts
  }
  pub fn location_table(&self) -> &consumers::LocationTable {
    &self.body_with_facts.location_table
  }
  pub fn body_with_facts(&self) -> &BodyWithBorrowckFacts<'tcx> {
    &self.body_with_facts
  }
}

thread_local! {
  static MIR_BODIES: Cache<LocalDefId, CachedSimplifedBodyWithFacts<'static>> = Cache::default();
}

fn mir_borrowck<'tcx>(tcx: TyCtxt<'tcx>, def_id: LocalDefId) -> mir_borrowck<'tcx> {
  block_timer!(&format!(
    "get_body_with_borrowck_facts for {}",
    tcx.def_path_debug_str(def_id.to_def_id())
  ));

  let body_with_facts = rustc_borrowck::consumers::get_body_with_borrowck_facts(
    tcx,
    ty::WithOptConstParam::unknown(def_id),
  );


  let mut simplified_body = body_with_facts.body.clone();
  SimplifyMir.run_pass(tcx, &mut simplified_body);

  let cached_body = CachedSimplifedBodyWithFacts {
    body_with_facts, simplified_body
  };

  // SAFETY: The reader casts the 'static lifetime to 'tcx before using it.
  let cached_body: CachedSimplifedBodyWithFacts<'static> =
    unsafe { std::mem::transmute(cached_body) };

  MIR_BODIES.with(|cache| {
    cache.get(def_id, |_| cached_body);
  });

  let mut providers = Providers::default();
  rustc_borrowck::provide(&mut providers);
  let original_mir_borrowck = providers.mir_borrowck;
  original_mir_borrowck(tcx, def_id)
}

pub fn get_body_with_borrowck_facts<'tcx>(
  tcx: TyCtxt<'tcx>,
  def_id: LocalDefId,
) -> &'tcx CachedSimplifedBodyWithFacts<'tcx> {
  let _ = tcx.mir_borrowck(def_id);
  MIR_BODIES.with(|cache| {
    let body = cache.get(def_id, |_| unreachable!());
    unsafe {
      std::mem::transmute::<
        &CachedSimplifedBodyWithFacts<'static>,
        &'tcx CachedSimplifedBodyWithFacts<'tcx>,
      >(body)
    }
  })
}
