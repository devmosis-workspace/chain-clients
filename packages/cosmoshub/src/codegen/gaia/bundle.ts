import * as _0 from "./globalfee/v1beta1/genesis";
import * as _1 from "./globalfee/v1beta1/query";
import * as _103 from "./globalfee/v1beta1/query.lcd";
import * as _104 from "./globalfee/v1beta1/query.rpc.Query";
import * as _165 from "./lcd";
import * as _166 from "./rpc.query";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._103,
      ..._104
    };
  }
  export const ClientFactory = {
    ..._165,
    ..._166
  };
}