import * as _143 from "./wasm/v1/authz";
import * as _144 from "./wasm/v1/genesis";
import * as _145 from "./wasm/v1/ibc";
import * as _146 from "./wasm/v1/proposal";
import * as _147 from "./wasm/v1/query";
import * as _148 from "./wasm/v1/tx";
import * as _149 from "./wasm/v1/types";
import * as _257 from "./wasm/v1/tx.amino";
import * as _258 from "./wasm/v1/tx.registry";
import * as _259 from "./wasm/v1/query.lcd";
import * as _260 from "./wasm/v1/query.rpc.Query";
import * as _261 from "./wasm/v1/tx.rpc.msg";
import * as _288 from "./lcd";
import * as _289 from "./rpc.query";
import * as _290 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._261
    };
  }
  export const ClientFactory = {
    ..._288,
    ..._289,
    ..._290
  };
}