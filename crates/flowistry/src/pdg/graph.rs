use std::{fmt, path::Path};

use either::Either;
use internment::Intern;
use petgraph::{dot, graph::DiGraph};
use rustc_hir::def_id::LocalDefId;
use rustc_middle::{
  mir::{Body, Location, Place},
  ty::{tls, TyCtxt},
};
use rustc_utils::{mir::borrowck_facts, PlaceExt};

#[derive(PartialEq, Eq, Hash, Clone, Copy)]
pub enum LocationOrStart {
  Location(Location),
  Start,
}

impl LocationOrStart {
  pub fn expect_location(self) -> Location {
    match self {
      LocationOrStart::Location(location) => location,
      LocationOrStart::Start => panic!("LocationOrStart was unexpectedly Start"),
    }
  }
}

impl fmt::Debug for LocationOrStart {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    match self {
      LocationOrStart::Location(loc) => loc.fmt(f),
      LocationOrStart::Start => write!(f, "start"),
    }
  }
}

impl From<Location> for LocationOrStart {
  fn from(value: Location) -> Self {
    LocationOrStart::Location(value)
  }
}

#[derive(PartialEq, Eq, Hash, Clone, Copy)]
pub struct GlobalLocation {
  pub function: LocalDefId,
  pub location: LocationOrStart,
}

impl fmt::Debug for GlobalLocation {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "{:?}::", self.location)?;
    tls::with_opt(|opt_tcx| match opt_tcx {
      Some(tcx) => match tcx.opt_item_name(self.function.to_def_id()) {
        Some(name) => write!(f, "{name}"),
        None => write!(f, "<closure>"),
      },
      None => write!(f, "{:?}", self.function),
    })
  }
}

#[derive(PartialEq, Eq, Hash, Copy, Clone)]
pub struct CallString(Intern<Vec<GlobalLocation>>);

impl CallString {
  pub fn new(locs: Vec<GlobalLocation>) -> Self {
    CallString(Intern::new(locs))
  }

  pub fn root(&self) -> GlobalLocation {
    self.0[0]
  }

  pub fn iter(&self) -> impl Iterator<Item = GlobalLocation> + '_ {
    self.0.iter().copied()
  }
}

impl fmt::Debug for CallString {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    for (i, loc) in self.0.iter().enumerate() {
      if i > 0 {
        write!(f, "->")?;
      }
      loc.fmt(f)?;
    }
    Ok(())
  }
}

#[derive(PartialEq, Eq, Hash, Clone, Copy)]
pub enum DepNode<'tcx> {
  Place { place: Place<'tcx>, at: CallString },
  Op(CallString),
}

impl<'tcx> DepNode<'tcx> {
  pub fn expect_place(self) -> Place<'tcx> {
    match self {
      DepNode::Place { place, .. } => place,
      DepNode::Op(..) => panic!("Expected a place, got an op"),
    }
  }
}

impl fmt::Debug for DepNode<'_> {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    tls::with_opt(|opt_tcx| match opt_tcx {
      Some(tcx) => match self {
        DepNode::Place { place, at } => {
          let place_str = {
            let body =
              borrowck_facts::get_body_with_borrowck_facts(tcx, at.root().function);
            let tcx = unsafe { std::mem::transmute::<TyCtxt<'_>, TyCtxt<'static>>(tcx) };
            let place =
              unsafe { std::mem::transmute::<Place<'_>, Place<'static>>(*place) };
            let body = unsafe {
              std::mem::transmute::<&'_ Body<'_>, &'_ Body<'static>>(&body.body)
            };
            place
              .to_string(tcx, body)
              .unwrap_or_else(|| format!("{place:?}"))
          };
          write!(f, "{place_str} @ {at:?}")
        }
        DepNode::Op(global_loc) => {
          let root = global_loc.root();
          let loc_str = match root.location {
            LocationOrStart::Start => "start".to_string(),
            LocationOrStart::Location(loc) => {
              let body = borrowck_facts::get_body_with_borrowck_facts(tcx, root.function);
              match body.body.stmt_at(loc) {
                Either::Left(stmt) => format!("{:?}", stmt.kind),
                Either::Right(term) => format!("{:?}", term.kind),
              }
            }
          };
          write!(f, "{loc_str} @ ")?;
          match tcx.opt_item_name(root.function.to_def_id()) {
            Some(name) => write!(f, "{name}"),
            None => write!(f, "<closure>"),
          }
        }
      },
      None => todo!(),
    })
  }
}

#[derive(PartialEq, Eq, Hash, Clone, Copy, Debug)]
pub enum DepEdge {
  Control,
  Data,
}

pub struct DepGraph<'tcx> {
  pub graph: DiGraph<DepNode<'tcx>, DepEdge>,
}

impl<'tcx> DepGraph<'tcx> {
  pub fn generate_graphviz(&self, path: impl AsRef<Path>) -> anyhow::Result<()> {
    let graph_dot = format!("{:?}", dot::Dot::with_config(&self.graph, &[]));
    rustc_utils::mir::body::run_dot(path.as_ref(), graph_dot.into_bytes())
  }
}
