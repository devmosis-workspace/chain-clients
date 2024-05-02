import * as _0 from "./auth/v1alpha1/tx";
import * as _1 from "./bank/v1alpha1/tx";
import * as _2 from "./bounty/v1/bounty";
import * as _3 from "./bounty/v1/genesis";
import * as _4 from "./bounty/v1/query";
import * as _5 from "./bounty/v1/tx";
import * as _6 from "./cert/v1alpha1/cert";
import * as _7 from "./cert/v1alpha1/genesis";
import * as _8 from "./cert/v1alpha1/query";
import * as _9 from "./cert/v1alpha1/tx";
import * as _10 from "./cvm/v1alpha1/genesis";
import * as _11 from "./cvm/v1alpha1/query";
import * as _12 from "./cvm/v1alpha1/tx";
import * as _13 from "./gov/v1alpha1/genesis";
import * as _14 from "./gov/v1alpha1/gov";
import * as _15 from "./gov/v1alpha1/query";
import * as _16 from "./oracle/v1alpha1/genesis";
import * as _17 from "./oracle/v1alpha1/oracle";
import * as _18 from "./oracle/v1alpha1/query";
import * as _19 from "./oracle/v1alpha1/tx";
import * as _20 from "./shield/v1alpha1/genesis";
import * as _21 from "./shield/v1alpha1/query";
import * as _22 from "./shield/v1alpha1/shield";
import * as _23 from "./shield/v1alpha1/tx";
import * as _123 from "./auth/v1alpha1/tx.amino";
import * as _124 from "./bank/v1alpha1/tx.amino";
import * as _125 from "./bounty/v1/tx.amino";
import * as _126 from "./cert/v1alpha1/tx.amino";
import * as _127 from "./cvm/v1alpha1/tx.amino";
import * as _128 from "./oracle/v1alpha1/tx.amino";
import * as _129 from "./shield/v1alpha1/tx.amino";
import * as _130 from "./auth/v1alpha1/tx.registry";
import * as _131 from "./bank/v1alpha1/tx.registry";
import * as _132 from "./bounty/v1/tx.registry";
import * as _133 from "./cert/v1alpha1/tx.registry";
import * as _134 from "./cvm/v1alpha1/tx.registry";
import * as _135 from "./oracle/v1alpha1/tx.registry";
import * as _136 from "./shield/v1alpha1/tx.registry";
import * as _137 from "./bounty/v1/query.lcd";
import * as _138 from "./cert/v1alpha1/query.lcd";
import * as _139 from "./cvm/v1alpha1/query.lcd";
import * as _140 from "./gov/v1alpha1/query.lcd";
import * as _141 from "./oracle/v1alpha1/query.lcd";
import * as _142 from "./shield/v1alpha1/query.lcd";
import * as _143 from "./bounty/v1/query.rpc.Query";
import * as _144 from "./cert/v1alpha1/query.rpc.Query";
import * as _145 from "./cvm/v1alpha1/query.rpc.Query";
import * as _146 from "./gov/v1alpha1/query.rpc.Query";
import * as _147 from "./oracle/v1alpha1/query.rpc.Query";
import * as _148 from "./shield/v1alpha1/query.rpc.Query";
import * as _149 from "./auth/v1alpha1/tx.rpc.msg";
import * as _150 from "./bank/v1alpha1/tx.rpc.msg";
import * as _151 from "./bounty/v1/tx.rpc.msg";
import * as _152 from "./cert/v1alpha1/tx.rpc.msg";
import * as _153 from "./cvm/v1alpha1/tx.rpc.msg";
import * as _154 from "./oracle/v1alpha1/tx.rpc.msg";
import * as _155 from "./shield/v1alpha1/tx.rpc.msg";
import * as _216 from "./lcd";
import * as _217 from "./rpc.query";
import * as _218 from "./rpc.tx";
export namespace shentu {
  export namespace auth {
    export const v1alpha1 = {
      ..._0,
      ..._123,
      ..._130,
      ..._149
    };
  }
  export namespace bank {
    export const v1alpha1 = {
      ..._1,
      ..._124,
      ..._131,
      ..._150
    };
  }
  export namespace bounty {
    export const v1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._125,
      ..._132,
      ..._137,
      ..._143,
      ..._151
    };
  }
  export namespace cert {
    export const v1alpha1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._126,
      ..._133,
      ..._138,
      ..._144,
      ..._152
    };
  }
  export namespace cvm {
    export const v1alpha1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._127,
      ..._134,
      ..._139,
      ..._145,
      ..._153
    };
  }
  export namespace gov {
    export const v1alpha1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._140,
      ..._146
    };
  }
  export namespace oracle {
    export const v1alpha1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._128,
      ..._135,
      ..._141,
      ..._147,
      ..._154
    };
  }
  export namespace shield {
    export const v1alpha1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._129,
      ..._136,
      ..._142,
      ..._148,
      ..._155
    };
  }
  export const ClientFactory = {
    ..._216,
    ..._217,
    ..._218
  };
}