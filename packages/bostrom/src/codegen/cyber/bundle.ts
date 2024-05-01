import * as _0 from "./bandwidth/v1beta1/genesis";
import * as _1 from "./bandwidth/v1beta1/query";
import * as _2 from "./bandwidth/v1beta1/types";
import * as _3 from "./base/query/v1beta1/pagination";
import * as _4 from "./dmn/v1beta1/genesis";
import * as _5 from "./dmn/v1beta1/query";
import * as _6 from "./dmn/v1beta1/tx";
import * as _7 from "./dmn/v1beta1/types";
import * as _8 from "./graph/v1beta1/query";
import * as _9 from "./graph/v1beta1/tx";
import * as _10 from "./graph/v1beta1/types";
import * as _11 from "./grid/v1beta1/genesis";
import * as _12 from "./grid/v1beta1/query";
import * as _13 from "./grid/v1beta1/tx";
import * as _14 from "./grid/v1beta1/types";
import * as _15 from "./rank/v1beta1/genesis";
import * as _16 from "./rank/v1beta1/query";
import * as _17 from "./rank/v1beta1/types";
import * as _18 from "./resources/v1beta1/genesis";
import * as _19 from "./resources/v1beta1/query";
import * as _20 from "./resources/v1beta1/tx";
import * as _21 from "./resources/v1beta1/types";
import * as _118 from "./dmn/v1beta1/tx.amino";
import * as _119 from "./graph/v1beta1/tx.amino";
import * as _120 from "./grid/v1beta1/tx.amino";
import * as _121 from "./resources/v1beta1/tx.amino";
import * as _122 from "./dmn/v1beta1/tx.registry";
import * as _123 from "./graph/v1beta1/tx.registry";
import * as _124 from "./grid/v1beta1/tx.registry";
import * as _125 from "./resources/v1beta1/tx.registry";
import * as _126 from "./bandwidth/v1beta1/query.lcd";
import * as _127 from "./dmn/v1beta1/query.lcd";
import * as _128 from "./graph/v1beta1/query.lcd";
import * as _129 from "./grid/v1beta1/query.lcd";
import * as _130 from "./rank/v1beta1/query.lcd";
import * as _131 from "./resources/v1beta1/query.lcd";
import * as _132 from "./bandwidth/v1beta1/query.rpc.Query";
import * as _133 from "./dmn/v1beta1/query.rpc.Query";
import * as _134 from "./graph/v1beta1/query.rpc.Query";
import * as _135 from "./grid/v1beta1/query.rpc.Query";
import * as _136 from "./rank/v1beta1/query.rpc.Query";
import * as _137 from "./resources/v1beta1/query.rpc.Query";
import * as _138 from "./dmn/v1beta1/tx.rpc.msg";
import * as _139 from "./graph/v1beta1/tx.rpc.msg";
import * as _140 from "./grid/v1beta1/tx.rpc.msg";
import * as _141 from "./resources/v1beta1/tx.rpc.msg";
import * as _207 from "./lcd";
import * as _208 from "./rpc.query";
import * as _209 from "./rpc.tx";
export namespace cyber {
  export namespace bandwidth {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._126,
      ..._132
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._3
      };
    }
  }
  export namespace dmn {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._118,
      ..._122,
      ..._127,
      ..._133,
      ..._138
    };
  }
  export namespace graph {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._119,
      ..._123,
      ..._128,
      ..._134,
      ..._139
    };
  }
  export namespace grid {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._120,
      ..._124,
      ..._129,
      ..._135,
      ..._140
    };
  }
  export namespace rank {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._130,
      ..._136
    };
  }
  export namespace resources {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._121,
      ..._125,
      ..._131,
      ..._137,
      ..._141
    };
  }
  export const ClientFactory = {
    ..._207,
    ..._208,
    ..._209
  };
}