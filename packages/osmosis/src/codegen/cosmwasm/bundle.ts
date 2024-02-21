import * as _241 from "./wasm/v1/authz";
import * as _242 from "./wasm/v1/genesis";
import * as _243 from "./wasm/v1/ibc";
import * as _244 from "./wasm/v1/proposal_legacy";
import * as _245 from "./wasm/v1/query";
import * as _246 from "./wasm/v1/tx";
import * as _247 from "./wasm/v1/types";
import * as _424 from "./wasm/v1/tx.amino";
import * as _425 from "./wasm/v1/tx.registry";
import * as _426 from "./wasm/v1/query.lcd";
import * as _427 from "./wasm/v1/query.rpc.Query";
import * as _428 from "./wasm/v1/tx.rpc.msg";
import * as _435 from "./lcd";
import * as _436 from "./rpc.query";
import * as _437 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._424,
      ..._425,
      ..._426,
      ..._427,
      ..._428
    };
  }
  export const ClientFactory = {
    ..._435,
    ..._436,
    ..._437
  };
}