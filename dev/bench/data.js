window.BENCHMARK_DATA = {
  "lastUpdate": 1693521776926,
  "repoUrl": "https://github.com/brownsys/flowistry",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad9b274d2581010f09a1831498d371269d03367a",
          "message": "Merge pull request #51 from connorff/bench-deployment-fix\n\nFix bench results not saving in `gh-pages` branch",
          "timestamp": "2022-05-24T20:09:51-07:00",
          "tree_id": "ecf3c2149a7af5e3c4fda938ffce84b186383e14",
          "url": "https://github.com/willcrichton/flowistry/commit/ad9b274d2581010f09a1831498d371269d03367a"
        },
        "date": 1653449030827,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 188483,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 199393,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 1040475,
            "range": "± 2447",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1029423,
            "range": "± 9261",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 5946607,
            "range": "± 37512",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 6795282,
            "range": "± 29803",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 173521788,
            "range": "± 9959790",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 214154032,
            "range": "± 14299122",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 5622815,
            "range": "± 48241",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 6748239,
            "range": "± 33431",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 169385735,
            "range": "± 12084469",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 225421603,
            "range": "± 1422615",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 186693,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 212346,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 969547,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 1084583,
            "range": "± 9753",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 26632578,
            "range": "± 474291",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 30327366,
            "range": "± 369608",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 936391281,
            "range": "± 2981111",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1109044680,
            "range": "± 7778235",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 7136916,
            "range": "± 25835",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 7860429,
            "range": "± 24995",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 108128355,
            "range": "± 431560",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 119282541,
            "range": "± 640485",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "committer": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "distinct": true,
          "id": "eba2701ef36b924f117f4e669fbb2eaffa308eb5",
          "message": "Bump to 0.5.23",
          "timestamp": "2022-05-24T20:10:43-07:00",
          "tree_id": "31b0e39ef6db85499cd1605de02ec1a72183ff53",
          "url": "https://github.com/willcrichton/flowistry/commit/eba2701ef36b924f117f4e669fbb2eaffa308eb5"
        },
        "date": 1653449105369,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 181666,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 196872,
            "range": "± 1243",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 998689,
            "range": "± 3939",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1054455,
            "range": "± 3477",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 5888391,
            "range": "± 57518",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 6775773,
            "range": "± 25102",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 192209019,
            "range": "± 2396932",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 233292415,
            "range": "± 3179640",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 5639396,
            "range": "± 13896",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 6762322,
            "range": "± 10999",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 188910090,
            "range": "± 3368251",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 245757040,
            "range": "± 9187810",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 185951,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 208557,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 951473,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 1062893,
            "range": "± 2077",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 28697028,
            "range": "± 859560",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 31243582,
            "range": "± 840825",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 949269133,
            "range": "± 1476054",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1140715776,
            "range": "± 4007105",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 6947722,
            "range": "± 14625",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 7666129,
            "range": "± 13461",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 111324221,
            "range": "± 563748",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 121343503,
            "range": "± 719298",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "committer": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "distinct": true,
          "id": "10d911810b7ed2dc5d887af4b3c5cf3b681b66da",
          "message": "Use lifetimes in type instead of accessible fields for doing alias analysis of opaque types",
          "timestamp": "2022-05-28T10:24:32-07:00",
          "tree_id": "66270f1258b5092f47422a3bcb2b902aa29446a5",
          "url": "https://github.com/willcrichton/flowistry/commit/10d911810b7ed2dc5d887af4b3c5cf3b681b66da"
        },
        "date": 1653759765669,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 215144,
            "range": "± 7879",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 235973,
            "range": "± 8252",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 1176700,
            "range": "± 59201",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1322489,
            "range": "± 90847",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 7349186,
            "range": "± 949382",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 7662046,
            "range": "± 470751",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 236981980,
            "range": "± 15466055",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 344138487,
            "range": "± 22347175",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 6719573,
            "range": "± 448229",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 7940896,
            "range": "± 364685",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 233080987,
            "range": "± 6501851",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 359245148,
            "range": "± 19178317",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 198803,
            "range": "± 8905",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 231373,
            "range": "± 11887",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 1080004,
            "range": "± 82005",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 1205484,
            "range": "± 82588",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 34229558,
            "range": "± 1327735",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 38530162,
            "range": "± 1965682",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 1124966750,
            "range": "± 17575525",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1474262182,
            "range": "± 43141434",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 7915021,
            "range": "± 397196",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 8454038,
            "range": "± 352899",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 121990996,
            "range": "± 4206946",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 133847168,
            "range": "± 4259041",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "committer": {
            "email": "wcrichto@cs.stanford.edu",
            "name": "Will Crichton",
            "username": "willcrichton"
          },
          "distinct": true,
          "id": "611b7972de10eb2ea38b945e3eda5402d34594fa",
          "message": "Fix IgnoreMut regression",
          "timestamp": "2022-05-28T11:03:26-07:00",
          "tree_id": "6113943ecf324c7e5e081917fc03cc73f3e87fa4",
          "url": "https://github.com/willcrichton/flowistry/commit/611b7972de10eb2ea38b945e3eda5402d34594fa"
        },
        "date": 1653761953273,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 208539,
            "range": "± 8071",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 225486,
            "range": "± 7696",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 1181521,
            "range": "± 35013",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1236424,
            "range": "± 33763",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 6591305,
            "range": "± 149631",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 7493060,
            "range": "± 204734",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 211923599,
            "range": "± 7711592",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 254796668,
            "range": "± 18458241",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 6278985,
            "range": "± 204328",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 7670730,
            "range": "± 227614",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 207180074,
            "range": "± 13076884",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 272579106,
            "range": "± 14229224",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 204188,
            "range": "± 7373",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 235872,
            "range": "± 9381",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 1035007,
            "range": "± 33381",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 1155587,
            "range": "± 39453",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 31378335,
            "range": "± 1933542",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 34540992,
            "range": "± 1341085",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 1051541657,
            "range": "± 12082957",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1248402087,
            "range": "± 14765849",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 7629711,
            "range": "± 235089",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 8250191,
            "range": "± 269625",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 123696694,
            "range": "± 4501649",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 130249327,
            "range": "± 3294628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "justbldr@amazon.com",
            "name": "Justus Adam",
            "username": "JustusAdam"
          },
          "committer": {
            "email": "justbldr@amazon.com",
            "name": "Justus Adam",
            "username": "JustusAdam"
          },
          "distinct": true,
          "id": "f3b27bb1e06a13c599ea56beca7aa047f7d291e5",
          "message": "Configurable alias analysis",
          "timestamp": "2023-07-18T15:48:03-07:00",
          "tree_id": "f60948b87b23b8c6bf93247e6108517866fded68",
          "url": "https://github.com/brownsys/flowistry/commit/f3b27bb1e06a13c599ea56beca7aa047f7d291e5"
        },
        "date": 1689721256873,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 213895,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 237112,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 1109073,
            "range": "± 1587",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1209253,
            "range": "± 25860",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 5649262,
            "range": "± 56607",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 6564421,
            "range": "± 37845",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 169803668,
            "range": "± 7524924",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 211855897,
            "range": "± 8236966",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 5542529,
            "range": "± 38691",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 6873436,
            "range": "± 137846",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 167506212,
            "range": "± 7367968",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 225637954,
            "range": "± 703261",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 397014,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 436387,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 2046502,
            "range": "± 3495",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 2239072,
            "range": "± 3199",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 26946176,
            "range": "± 515493",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 31996342,
            "range": "± 522124",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 946358335,
            "range": "± 3438945",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1206069051,
            "range": "± 4920259",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 4605767,
            "range": "± 10309",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 5364123,
            "range": "± 21272",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 80021256,
            "range": "± 927949",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 90949693,
            "range": "± 649562",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "justbldr@amazon.com",
            "name": "Justus Adam",
            "username": "JustusAdam"
          },
          "committer": {
            "email": "justbldr@amazon.com",
            "name": "Justus Adam",
            "username": "JustusAdam"
          },
          "distinct": true,
          "id": "570b6342ec9c2f42b1424fe4c4d57eb5a1f7cd60",
          "message": "Merge remote-tracking branch 'fork/master' into upstream-update",
          "timestamp": "2023-08-30T16:54:09-07:00",
          "tree_id": "e3337b6865844860da2943f03c844d9ad3f66080",
          "url": "https://github.com/brownsys/flowistry/commit/570b6342ec9c2f42b1424fe4c4d57eb5a1f7cd60"
        },
        "date": 1693440306138,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 197632,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 217679,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 1027767,
            "range": "± 3894",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1119969,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 5385788,
            "range": "± 55986",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 6474341,
            "range": "± 47670",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 163542714,
            "range": "± 1793448",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 208751598,
            "range": "± 2939527",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 5348266,
            "range": "± 35933",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 6648857,
            "range": "± 36394",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 163604969,
            "range": "± 2586747",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 225849986,
            "range": "± 2616872",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 341196,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 402943,
            "range": "± 12554",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 1660013,
            "range": "± 3034",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 1975768,
            "range": "± 6523",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 26824482,
            "range": "± 514955",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 31100639,
            "range": "± 612236",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 896154307,
            "range": "± 5819718",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1147124854,
            "range": "± 7276839",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 2629040,
            "range": "± 3104",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 3731168,
            "range": "± 120422",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 39183199,
            "range": "± 469874",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 56197656,
            "range": "± 367351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "justbldr@amazon.com",
            "name": "Justus Adam",
            "username": "JustusAdam"
          },
          "committer": {
            "email": "justbldr@amazon.com",
            "name": "Justus Adam",
            "username": "JustusAdam"
          },
          "distinct": true,
          "id": "8a0ce4166d51b44b20b5f64b48c74f40c028b7d0",
          "message": "Move polonius engine import",
          "timestamp": "2023-08-31T15:30:18-07:00",
          "tree_id": "c05f1800df38bb9267c8f0517c5d3bbf38791229",
          "url": "https://github.com/brownsys/flowistry/commit/8a0ce4166d51b44b20b5f64b48c74f40c028b7d0"
        },
        "date": 1693521771142,
        "tool": "cargo",
        "benches": [
          {
            "name": "Locations (min)/Flow",
            "value": 232044,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (min)/Flow + Deps",
            "value": 260192,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow",
            "value": 1207226,
            "range": "± 2296",
            "unit": "ns/iter"
          },
          {
            "name": "Locations (max)/Flow + Deps",
            "value": 1321206,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow",
            "value": 6739481,
            "range": "± 78383",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (min)/Flow + Deps",
            "value": 8105867,
            "range": "± 123952",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow",
            "value": 205477174,
            "range": "± 986503",
            "unit": "ns/iter"
          },
          {
            "name": "Unique Lifetimes (max)/Flow + Deps",
            "value": 264309345,
            "range": "± 1304572",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow",
            "value": 6682664,
            "range": "± 96729",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (min)/Flow + Deps",
            "value": 8323257,
            "range": "± 128343",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow",
            "value": 206802152,
            "range": "± 2386292",
            "unit": "ns/iter"
          },
          {
            "name": "Infoflow (max)/Flow + Deps",
            "value": 289447689,
            "range": "± 2772518",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow",
            "value": 389956,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "Places (min)/Flow + Deps",
            "value": 476320,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow",
            "value": 1906974,
            "range": "± 3241",
            "unit": "ns/iter"
          },
          {
            "name": "Places (max)/Flow + Deps",
            "value": 2303218,
            "range": "± 3985",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow",
            "value": 35198525,
            "range": "± 392273",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (min)/Flow + Deps",
            "value": 41383971,
            "range": "± 468822",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow",
            "value": 1025947257,
            "range": "± 4888131",
            "unit": "ns/iter"
          },
          {
            "name": "Same Lifetime (max)/Flow + Deps",
            "value": 1376830484,
            "range": "± 10193235",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow",
            "value": 3212183,
            "range": "± 3540",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (min)/Flow + Deps",
            "value": 4554104,
            "range": "± 5487",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow",
            "value": 49462825,
            "range": "± 516962",
            "unit": "ns/iter"
          },
          {
            "name": "Nested Structs (max)/Flow + Deps",
            "value": 70153932,
            "range": "± 991012",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}