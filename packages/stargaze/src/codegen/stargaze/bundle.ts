import * as _21 from "./mint/v1beta1/genesis";
import * as _22 from "./mint/v1beta1/mint";
import * as _23 from "./mint/v1beta1/query";
import * as _148 from "./mint/v1beta1/query.lcd";
import * as _149 from "./mint/v1beta1/query.rpc.Query";
import * as _216 from "./lcd";
import * as _217 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._148,
      ..._149
    };
  }
  export const ClientFactory = {
    ..._216,
    ..._217
  };
}