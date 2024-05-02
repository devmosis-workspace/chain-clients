import * as _0 from "./admin/v1/query";
import * as _1 from "./admin/v1/tx";
import * as _2 from "./admin/v1/types";
import * as _3 from "./clp/v1/genesis";
import * as _4 from "./clp/v1/params";
import * as _5 from "./clp/v1/querier";
import * as _6 from "./clp/v1/rewards_bucket";
import * as _7 from "./clp/v1/tx";
import * as _8 from "./clp/v1/types";
import * as _9 from "./dispensation/v1/query";
import * as _10 from "./dispensation/v1/tx";
import * as _11 from "./dispensation/v1/types";
import * as _12 from "./epochs/v1/genesis";
import * as _13 from "./epochs/v1/query";
import * as _14 from "./ethbridge/v1/genesis";
import * as _15 from "./ethbridge/v1/query";
import * as _16 from "./ethbridge/v1/tx";
import * as _17 from "./ethbridge/v1/types";
import * as _18 from "./margin/v1/genesis";
import * as _19 from "./margin/v1/params";
import * as _20 from "./margin/v1/query";
import * as _21 from "./margin/v1/tx";
import * as _22 from "./margin/v1/types";
import * as _23 from "./oracle/v1/genesis";
import * as _24 from "./oracle/v1/types";
import * as _25 from "./tokenregistry/v1/genesis";
import * as _26 from "./tokenregistry/v1/query";
import * as _27 from "./tokenregistry/v1/tx";
import * as _28 from "./tokenregistry/v1/types";
import * as _120 from "./admin/v1/tx.amino";
import * as _121 from "./clp/v1/tx.amino";
import * as _122 from "./dispensation/v1/tx.amino";
import * as _123 from "./ethbridge/v1/tx.amino";
import * as _124 from "./margin/v1/tx.amino";
import * as _125 from "./tokenregistry/v1/tx.amino";
import * as _126 from "./admin/v1/tx.registry";
import * as _127 from "./clp/v1/tx.registry";
import * as _128 from "./dispensation/v1/tx.registry";
import * as _129 from "./ethbridge/v1/tx.registry";
import * as _130 from "./margin/v1/tx.registry";
import * as _131 from "./tokenregistry/v1/tx.registry";
import * as _132 from "./clp/v1/querier.lcd";
import * as _133 from "./epochs/v1/query.lcd";
import * as _134 from "./margin/v1/query.lcd";
import * as _135 from "./tokenregistry/v1/query.lcd";
import * as _136 from "./admin/v1/query.rpc.Query";
import * as _137 from "./clp/v1/querier.rpc.Query";
import * as _138 from "./dispensation/v1/query.rpc.Query";
import * as _139 from "./epochs/v1/query.rpc.Query";
import * as _140 from "./ethbridge/v1/query.rpc.Query";
import * as _141 from "./margin/v1/query.rpc.Query";
import * as _142 from "./tokenregistry/v1/query.rpc.Query";
import * as _143 from "./admin/v1/tx.rpc.msg";
import * as _144 from "./clp/v1/tx.rpc.msg";
import * as _145 from "./dispensation/v1/tx.rpc.msg";
import * as _146 from "./ethbridge/v1/tx.rpc.msg";
import * as _147 from "./margin/v1/tx.rpc.msg";
import * as _148 from "./tokenregistry/v1/tx.rpc.msg";
import * as _209 from "./lcd";
import * as _210 from "./rpc.query";
import * as _211 from "./rpc.tx";
export namespace sifnode {
  export namespace admin {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._120,
      ..._126,
      ..._136,
      ..._143
    };
  }
  export namespace clp {
    export const v1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._121,
      ..._127,
      ..._132,
      ..._137,
      ..._144
    };
  }
  export namespace dispensation {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._122,
      ..._128,
      ..._138,
      ..._145
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._12,
      ..._13,
      ..._133,
      ..._139
    };
  }
  export namespace ethbridge {
    export const v1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._123,
      ..._129,
      ..._140,
      ..._146
    };
  }
  export namespace margin {
    export const v1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._124,
      ..._130,
      ..._134,
      ..._141,
      ..._147
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._23,
      ..._24
    };
  }
  export namespace tokenregistry {
    export const v1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._125,
      ..._131,
      ..._135,
      ..._142,
      ..._148
    };
  }
  export const ClientFactory = {
    ..._209,
    ..._210,
    ..._211
  };
}