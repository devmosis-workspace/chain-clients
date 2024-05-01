import * as _92 from "./wasm/v1/authz";
import * as _93 from "./wasm/v1/genesis";
import * as _94 from "./wasm/v1/ibc";
import * as _95 from "./wasm/v1/proposal";
import * as _96 from "./wasm/v1/query";
import * as _97 from "./wasm/v1/tx";
import * as _98 from "./wasm/v1/types";
import * as _202 from "./wasm/v1/tx.amino";
import * as _203 from "./wasm/v1/tx.registry";
import * as _204 from "./wasm/v1/query.lcd";
import * as _205 from "./wasm/v1/query.rpc.Query";
import * as _206 from "./wasm/v1/tx.rpc.msg";
import * as _213 from "./lcd";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206
    };
  }
  export const ClientFactory = {
    ..._213,
    ..._214,
    ..._215
  };
}