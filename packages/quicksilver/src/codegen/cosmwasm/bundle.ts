import * as _144 from "./wasm/v1/authz";
import * as _145 from "./wasm/v1/genesis";
import * as _146 from "./wasm/v1/ibc";
import * as _147 from "./wasm/v1/proposal_legacy";
import * as _148 from "./wasm/v1/query";
import * as _149 from "./wasm/v1/tx";
import * as _150 from "./wasm/v1/types";
import * as _303 from "./wasm/v1/tx.amino";
import * as _304 from "./wasm/v1/tx.registry";
import * as _305 from "./wasm/v1/query.lcd";
import * as _306 from "./wasm/v1/query.rpc.Query";
import * as _307 from "./wasm/v1/tx.rpc.msg";
import * as _338 from "./lcd";
import * as _339 from "./rpc.query";
import * as _340 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._307
    };
  }
  export const ClientFactory = {
    ..._338,
    ..._339,
    ..._340
  };
}