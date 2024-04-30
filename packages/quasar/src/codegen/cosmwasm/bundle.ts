import * as _134 from "./wasm/v1/authz";
import * as _135 from "./wasm/v1/genesis";
import * as _136 from "./wasm/v1/ibc";
import * as _137 from "./wasm/v1/proposal_legacy";
import * as _138 from "./wasm/v1/query";
import * as _139 from "./wasm/v1/tx";
import * as _140 from "./wasm/v1/types";
import * as _282 from "./wasm/v1/tx.amino";
import * as _283 from "./wasm/v1/tx.registry";
import * as _284 from "./wasm/v1/query.lcd";
import * as _285 from "./wasm/v1/query.rpc.Query";
import * as _286 from "./wasm/v1/tx.rpc.msg";
import * as _299 from "./lcd";
import * as _300 from "./rpc.query";
import * as _301 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._286
    };
  }
  export const ClientFactory = {
    ..._299,
    ..._300,
    ..._301
  };
}