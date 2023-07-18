import * as _21 from "./mint/v1beta1/genesis";
import * as _22 from "./mint/v1beta1/mint";
import * as _23 from "./mint/v1beta1/query";
import * as _147 from "./mint/v1beta1/query.lcd";
import * as _148 from "./mint/v1beta1/query.rpc.Query";
import * as _215 from "./lcd";
import * as _216 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._147,
      ..._148
    };
  }
  export const ClientFactory = {
    ..._215,
    ..._216
  };
}