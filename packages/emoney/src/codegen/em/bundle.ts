import * as _0 from "./authority/v1/authority";
import * as _1 from "./authority/v1/genesis";
import * as _2 from "./authority/v1/query";
import * as _3 from "./authority/v1/tx";
import * as _4 from "./buyback/v1/genesis";
import * as _5 from "./buyback/v1/query";
import * as _6 from "./inflation/v1/genesis";
import * as _7 from "./inflation/v1/inflation";
import * as _8 from "./inflation/v1/query";
import * as _9 from "./issuer/v1/genesis";
import * as _10 from "./issuer/v1/issuer";
import * as _11 from "./issuer/v1/query";
import * as _12 from "./issuer/v1/tx";
import * as _13 from "./liquidityprovider/v1/genesis";
import * as _14 from "./liquidityprovider/v1/liquidityprovider";
import * as _15 from "./liquidityprovider/v1/query";
import * as _16 from "./liquidityprovider/v1/tx";
import * as _17 from "./market/v1/market";
import * as _18 from "./market/v1/query";
import * as _19 from "./market/v1/tx";
import * as _20 from "./queries/v1/query";
import * as _119 from "./authority/v1/tx.amino";
import * as _120 from "./issuer/v1/tx.amino";
import * as _121 from "./liquidityprovider/v1/tx.amino";
import * as _122 from "./market/v1/tx.amino";
import * as _123 from "./authority/v1/tx.registry";
import * as _124 from "./issuer/v1/tx.registry";
import * as _125 from "./liquidityprovider/v1/tx.registry";
import * as _126 from "./market/v1/tx.registry";
import * as _127 from "./authority/v1/query.lcd";
import * as _128 from "./buyback/v1/query.lcd";
import * as _129 from "./inflation/v1/query.lcd";
import * as _130 from "./issuer/v1/query.lcd";
import * as _131 from "./liquidityprovider/v1/query.lcd";
import * as _132 from "./market/v1/query.lcd";
import * as _133 from "./queries/v1/query.lcd";
import * as _134 from "./authority/v1/query.rpc.Query";
import * as _135 from "./buyback/v1/query.rpc.Query";
import * as _136 from "./inflation/v1/query.rpc.Query";
import * as _137 from "./issuer/v1/query.rpc.Query";
import * as _138 from "./liquidityprovider/v1/query.rpc.Query";
import * as _139 from "./market/v1/query.rpc.Query";
import * as _140 from "./queries/v1/query.rpc.Query";
import * as _141 from "./authority/v1/tx.rpc.msg";
import * as _142 from "./issuer/v1/tx.rpc.msg";
import * as _143 from "./liquidityprovider/v1/tx.rpc.msg";
import * as _144 from "./market/v1/tx.rpc.msg";
import * as _213 from "./lcd";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace em {
  export namespace authority {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._119,
      ..._123,
      ..._127,
      ..._134,
      ..._141
    };
  }
  export namespace buyback {
    export const v1 = {
      ..._4,
      ..._5,
      ..._128,
      ..._135
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._129,
      ..._136
    };
  }
  export namespace issuer {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._120,
      ..._124,
      ..._130,
      ..._137,
      ..._142
    };
  }
  export namespace liquidityprovider {
    export const v1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._121,
      ..._125,
      ..._131,
      ..._138,
      ..._143
    };
  }
  export namespace market {
    export const v1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._122,
      ..._126,
      ..._132,
      ..._139,
      ..._144
    };
  }
  export namespace queries {
    export const v1 = {
      ..._20,
      ..._133,
      ..._140
    };
  }
  export const ClientFactory = {
    ..._213,
    ..._214,
    ..._215
  };
}