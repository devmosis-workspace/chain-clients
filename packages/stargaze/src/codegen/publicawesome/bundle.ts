import * as _4 from "../stargaze/alloc/v1beta1/genesis";
import * as _5 from "../stargaze/alloc/v1beta1/params";
import * as _6 from "../stargaze/alloc/v1beta1/query";
import * as _7 from "../stargaze/alloc/v1beta1/tx";
import * as _8 from "../stargaze/claim/v1beta1/claim_record";
import * as _9 from "../stargaze/claim/v1beta1/genesis";
import * as _10 from "../stargaze/claim/v1beta1/params";
import * as _11 from "../stargaze/claim/v1beta1/query";
import * as _12 from "../stargaze/claim/v1beta1/tx";
import * as _13 from "../stargaze/cron/v1/genesis";
import * as _14 from "../stargaze/cron/v1/proposal";
import * as _15 from "../stargaze/cron/v1/query";
import * as _16 from "../stargaze/globalfee/v1/genesis";
import * as _17 from "../stargaze/globalfee/v1/globalfee";
import * as _18 from "../stargaze/globalfee/v1/proposal";
import * as _19 from "../stargaze/globalfee/v1/query";
import * as _20 from "../stargaze/globalfee/v1/tx";
import * as _130 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _131 from "../stargaze/claim/v1beta1/tx.amino";
import * as _132 from "../stargaze/globalfee/v1/tx.amino";
import * as _133 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _134 from "../stargaze/claim/v1beta1/tx.registry";
import * as _135 from "../stargaze/globalfee/v1/tx.registry";
import * as _136 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _137 from "../stargaze/claim/v1beta1/query.lcd";
import * as _138 from "../stargaze/cron/v1/query.lcd";
import * as _139 from "../stargaze/globalfee/v1/query.lcd";
import * as _140 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _141 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _142 from "../stargaze/cron/v1/query.rpc.Query";
import * as _143 from "../stargaze/globalfee/v1/query.rpc.Query";
import * as _144 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _145 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _146 from "../stargaze/globalfee/v1/tx.rpc.msg";
import * as _212 from "./lcd";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._4,
        ..._5,
        ..._6,
        ..._7,
        ..._130,
        ..._133,
        ..._136,
        ..._140,
        ..._144
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._8,
        ..._9,
        ..._10,
        ..._11,
        ..._12,
        ..._131,
        ..._134,
        ..._137,
        ..._141,
        ..._145
      };
    }
    export namespace cron {
      export const v1 = {
        ..._13,
        ..._14,
        ..._15,
        ..._138,
        ..._142
      };
    }
    export namespace globalfee {
      export const v1 = {
        ..._16,
        ..._17,
        ..._18,
        ..._19,
        ..._20,
        ..._132,
        ..._135,
        ..._139,
        ..._143,
        ..._146
      };
    }
  }
  export const ClientFactory = {
    ..._212,
    ..._213,
    ..._214
  };
}