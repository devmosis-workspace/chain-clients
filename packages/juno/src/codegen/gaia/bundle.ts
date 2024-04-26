import * as _0 from "./globalfee/v1beta1/genesis";
import * as _1 from "./globalfee/v1beta1/query";
import * as _2 from "./globalfee/v1beta1/tx";
import * as _182 from "./globalfee/v1beta1/tx.amino";
import * as _183 from "./globalfee/v1beta1/tx.registry";
import * as _184 from "./globalfee/v1beta1/query.lcd";
import * as _185 from "./globalfee/v1beta1/query.rpc.Query";
import * as _186 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _319 from "./lcd";
import * as _320 from "./rpc.query";
import * as _321 from "./rpc.tx";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186
    };
  }
  export const ClientFactory = {
    ..._319,
    ..._320,
    ..._321
  };
}