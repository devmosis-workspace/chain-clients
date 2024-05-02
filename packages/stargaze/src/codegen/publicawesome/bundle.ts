import * as _4 from "./stargaze/alloc/v1beta1/genesis";
import * as _5 from "./stargaze/alloc/v1beta1/params";
import * as _6 from "./stargaze/alloc/v1beta1/query";
import * as _7 from "./stargaze/alloc/v1beta1/tx";
import * as _8 from "./stargaze/cron/v1/cron";
import * as _9 from "./stargaze/cron/v1/genesis";
import * as _10 from "./stargaze/cron/v1/proposal";
import * as _11 from "./stargaze/cron/v1/query";
import * as _12 from "./stargaze/cron/v1/tx";
import * as _13 from "./stargaze/globalfee/v1/genesis";
import * as _14 from "./stargaze/globalfee/v1/globalfee";
import * as _15 from "./stargaze/globalfee/v1/proposal";
import * as _16 from "./stargaze/globalfee/v1/query";
import * as _17 from "./stargaze/globalfee/v1/tx";
import * as _18 from "./stargaze/mint/v1beta1/genesis";
import * as _19 from "./stargaze/mint/v1beta1/mint";
import * as _20 from "./stargaze/mint/v1beta1/query";
import * as _21 from "./stargaze/mint/v1beta1/tx";
import * as _179 from "./stargaze/alloc/v1beta1/tx.amino";
import * as _180 from "./stargaze/cron/v1/tx.amino";
import * as _181 from "./stargaze/globalfee/v1/tx.amino";
import * as _182 from "./stargaze/alloc/v1beta1/tx.registry";
import * as _183 from "./stargaze/cron/v1/tx.registry";
import * as _184 from "./stargaze/globalfee/v1/tx.registry";
import * as _185 from "./stargaze/alloc/v1beta1/query.lcd";
import * as _186 from "./stargaze/cron/v1/query.lcd";
import * as _187 from "./stargaze/globalfee/v1/query.lcd";
import * as _188 from "./stargaze/mint/v1beta1/query.lcd";
import * as _189 from "./stargaze/alloc/v1beta1/query.rpc.Query";
import * as _190 from "./stargaze/cron/v1/query.rpc.Query";
import * as _191 from "./stargaze/globalfee/v1/query.rpc.Query";
import * as _192 from "./stargaze/mint/v1beta1/query.rpc.Query";
import * as _193 from "./stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _194 from "./stargaze/cron/v1/tx.rpc.msg";
import * as _195 from "./stargaze/globalfee/v1/tx.rpc.msg";
import * as _296 from "./lcd";
import * as _297 from "./rpc.query";
import * as _298 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._4,
        ..._5,
        ..._6,
        ..._7,
        ..._179,
        ..._182,
        ..._185,
        ..._189,
        ..._193
      };
    }
    export namespace cron {
      export const v1 = {
        ..._8,
        ..._9,
        ..._10,
        ..._11,
        ..._12,
        ..._180,
        ..._183,
        ..._186,
        ..._190,
        ..._194
      };
    }
    export namespace globalfee {
      export const v1 = {
        ..._13,
        ..._14,
        ..._15,
        ..._16,
        ..._17,
        ..._181,
        ..._184,
        ..._187,
        ..._191,
        ..._195
      };
    }
    export namespace mint {
      export const v1beta1 = {
        ..._18,
        ..._19,
        ..._20,
        ..._21,
        ..._188,
        ..._192
      };
    }
  }
  export const ClientFactory = {
    ..._296,
    ..._297,
    ..._298
  };
}