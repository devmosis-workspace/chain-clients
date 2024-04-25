import * as _0 from "./globalfee/v1beta1/genesis";
import * as _1 from "./globalfee/v1beta1/query";
import * as _2 from "./globalfee/v1beta1/tx";
import * as _175 from "./globalfee/v1beta1/tx.amino";
import * as _176 from "./globalfee/v1beta1/tx.registry";
import * as _177 from "./globalfee/v1beta1/query.lcd";
import * as _178 from "./globalfee/v1beta1/query.rpc.Query";
import * as _179 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _307 from "./lcd";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179
    };
  }
  export const ClientFactory = {
    ..._307,
    ..._308,
    ..._309
  };
}