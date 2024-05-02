import * as _0 from "./dyncomm/v1beta1/dyncomm";
import * as _1 from "./dyncomm/v1beta1/genesis";
import * as _2 from "./dyncomm/v1beta1/query";
import * as _3 from "./market/v1beta1/genesis";
import * as _4 from "./market/v1beta1/market";
import * as _5 from "./market/v1beta1/query";
import * as _6 from "./market/v1beta1/tx";
import * as _7 from "./oracle/v1beta1/genesis";
import * as _8 from "./oracle/v1beta1/oracle";
import * as _9 from "./oracle/v1beta1/query";
import * as _10 from "./oracle/v1beta1/tx";
import * as _11 from "./treasury/v1beta1/genesis";
import * as _12 from "./treasury/v1beta1/gov";
import * as _13 from "./treasury/v1beta1/query";
import * as _14 from "./treasury/v1beta1/treasury";
import * as _15 from "./tx/v1beta1/service";
import * as _16 from "./vesting/v1beta1/vesting";
import * as _17 from "./wasm/v1beta1/genesis";
import * as _18 from "./wasm/v1beta1/tx";
import * as _19 from "./wasm/v1beta1/wasm";
import * as _142 from "./market/v1beta1/tx.amino";
import * as _143 from "./oracle/v1beta1/tx.amino";
import * as _144 from "./wasm/v1beta1/tx.amino";
import * as _145 from "./market/v1beta1/tx.registry";
import * as _146 from "./oracle/v1beta1/tx.registry";
import * as _147 from "./wasm/v1beta1/tx.registry";
import * as _148 from "./dyncomm/v1beta1/query.lcd";
import * as _149 from "./market/v1beta1/query.lcd";
import * as _150 from "./oracle/v1beta1/query.lcd";
import * as _151 from "./treasury/v1beta1/query.lcd";
import * as _152 from "./dyncomm/v1beta1/query.rpc.Query";
import * as _153 from "./market/v1beta1/query.rpc.Query";
import * as _154 from "./oracle/v1beta1/query.rpc.Query";
import * as _155 from "./treasury/v1beta1/query.rpc.Query";
import * as _156 from "./tx/v1beta1/service.rpc.Service";
import * as _157 from "./market/v1beta1/tx.rpc.msg";
import * as _158 from "./oracle/v1beta1/tx.rpc.msg";
import * as _159 from "./wasm/v1beta1/tx.rpc.msg";
import * as _244 from "./lcd";
import * as _245 from "./rpc.query";
import * as _246 from "./rpc.tx";
export namespace terra {
  export namespace dyncomm {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._148,
      ..._152
    };
  }
  export namespace market {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._142,
      ..._145,
      ..._149,
      ..._153,
      ..._157
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._143,
      ..._146,
      ..._150,
      ..._154,
      ..._158
    };
  }
  export namespace treasury {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._151,
      ..._155
    };
  }
  export namespace tx {
    export const v1beta1 = {
      ..._15,
      ..._156
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._16
    };
  }
  export namespace wasm {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._144,
      ..._147,
      ..._159
    };
  }
  export const ClientFactory = {
    ..._244,
    ..._245,
    ..._246
  };
}