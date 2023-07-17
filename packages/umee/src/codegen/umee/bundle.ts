import * as _0 from "./incentive/v1/genesis";
import * as _1 from "./incentive/v1/incentive";
import * as _2 from "./incentive/v1/query";
import * as _3 from "./incentive/v1/tx";
import * as _4 from "./leverage/v1/events";
import * as _5 from "./leverage/v1/genesis";
import * as _6 from "./leverage/v1/leverage";
import * as _7 from "./leverage/v1/query";
import * as _8 from "./leverage/v1/tx";
import * as _9 from "./oracle/v1/events";
import * as _10 from "./oracle/v1/genesis";
import * as _11 from "./oracle/v1/oracle";
import * as _12 from "./oracle/v1/query";
import * as _13 from "./oracle/v1/tx";
import * as _14 from "./ugov/v1/events";
import * as _15 from "./ugov/v1/genesis";
import * as _16 from "./ugov/v1/query";
import * as _17 from "./ugov/v1/tx";
import * as _18 from "./uibc/v1/events";
import * as _19 from "./uibc/v1/genesis";
import * as _20 from "./uibc/v1/query";
import * as _21 from "./uibc/v1/quota";
import * as _22 from "./uibc/v1/tx";
import * as _137 from "./incentive/v1/tx.amino";
import * as _138 from "./leverage/v1/tx.amino";
import * as _139 from "./oracle/v1/tx.amino";
import * as _140 from "./ugov/v1/tx.amino";
import * as _141 from "./uibc/v1/tx.amino";
import * as _142 from "./incentive/v1/tx.registry";
import * as _143 from "./leverage/v1/tx.registry";
import * as _144 from "./oracle/v1/tx.registry";
import * as _145 from "./ugov/v1/tx.registry";
import * as _146 from "./uibc/v1/tx.registry";
import * as _147 from "./incentive/v1/query.rpc.Query";
import * as _148 from "./leverage/v1/query.rpc.Query";
import * as _149 from "./oracle/v1/query.rpc.Query";
import * as _150 from "./ugov/v1/query.rpc.Query";
import * as _151 from "./uibc/v1/query.rpc.Query";
import * as _152 from "./incentive/v1/tx.rpc.msg";
import * as _153 from "./leverage/v1/tx.rpc.msg";
import * as _154 from "./oracle/v1/tx.rpc.msg";
import * as _155 from "./ugov/v1/tx.rpc.msg";
import * as _156 from "./uibc/v1/tx.rpc.msg";
import * as _218 from "./rpc.query";
import * as _219 from "./rpc.tx";
export namespace umee {
  export namespace incentive {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._137,
      ..._142,
      ..._147,
      ..._152
    };
  }
  export namespace leverage {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._138,
      ..._143,
      ..._148,
      ..._153
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._139,
      ..._144,
      ..._149,
      ..._154
    };
  }
  export namespace ugov {
    export const v1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._140,
      ..._145,
      ..._150,
      ..._155
    };
  }
  export namespace uibc {
    export const v1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._141,
      ..._146,
      ..._151,
      ..._156
    };
  }
  export const ClientFactory = {
    ..._218,
    ..._219
  };
}