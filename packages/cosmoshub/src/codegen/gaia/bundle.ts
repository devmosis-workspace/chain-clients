import * as _0 from "./globalfee/v1beta1/genesis";
import * as _1 from "./globalfee/v1beta1/query";
import * as _104 from "./globalfee/v1beta1/query.lcd";
import * as _105 from "./globalfee/v1beta1/query.rpc.Query";
import * as _166 from "./lcd";
import * as _167 from "./rpc.query";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._104,
      ..._105
    };
  }
  export const ClientFactory = {
    ..._166,
    ..._167
  };
}