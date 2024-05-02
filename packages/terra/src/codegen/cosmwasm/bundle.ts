import * as _127 from "./wasm/v1/authz";
import * as _128 from "./wasm/v1/genesis";
import * as _129 from "./wasm/v1/ibc";
import * as _130 from "./wasm/v1/proposal";
import * as _131 from "./wasm/v1/query";
import * as _132 from "./wasm/v1/tx";
import * as _133 from "./wasm/v1/types";
import * as _239 from "./wasm/v1/tx.amino";
import * as _240 from "./wasm/v1/tx.registry";
import * as _241 from "./wasm/v1/query.lcd";
import * as _242 from "./wasm/v1/query.rpc.Query";
import * as _243 from "./wasm/v1/tx.rpc.msg";
import * as _250 from "./lcd";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243
    };
  }
  export const ClientFactory = {
    ..._250,
    ..._251,
    ..._252
  };
}