import * as _166 from "./wasm/v1/authz";
import * as _167 from "./wasm/v1/genesis";
import * as _168 from "./wasm/v1/ibc";
import * as _169 from "./wasm/v1/proposal_legacy";
import * as _170 from "./wasm/v1/query";
import * as _171 from "./wasm/v1/tx";
import * as _172 from "./wasm/v1/types";
import * as _303 from "./wasm/v1/tx.amino";
import * as _304 from "./wasm/v1/tx.registry";
import * as _305 from "./wasm/v1/query.lcd";
import * as _306 from "./wasm/v1/query.rpc.Query";
import * as _307 from "./wasm/v1/tx.rpc.msg";
import * as _317 from "./lcd";
import * as _318 from "./rpc.query";
import * as _319 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._307
    };
  }
  export const ClientFactory = {
    ..._317,
    ..._318,
    ..._319
  };
}