import * as _21 from "./mint/v1beta1/genesis";
import * as _22 from "./mint/v1beta1/mint";
import * as _23 from "./mint/v1beta1/query";
import * as _142 from "./mint/v1beta1/query.rpc.Query";
import * as _192 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._142
    };
  }
  export const ClientFactory = {
    ..._192
  };
}