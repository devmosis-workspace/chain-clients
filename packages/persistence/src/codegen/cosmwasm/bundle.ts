import * as _150 from "./wasm/v1/authz";
import * as _151 from "./wasm/v1/genesis";
import * as _152 from "./wasm/v1/ibc";
import * as _153 from "./wasm/v1/proposal_legacy";
import * as _154 from "./wasm/v1/query";
import * as _155 from "./wasm/v1/tx";
import * as _156 from "./wasm/v1/types";
import * as _302 from "./wasm/v1/tx.amino";
import * as _303 from "./wasm/v1/tx.registry";
import * as _304 from "./wasm/v1/query.lcd";
import * as _305 from "./wasm/v1/query.rpc.Query";
import * as _306 from "./wasm/v1/tx.rpc.msg";
import * as _337 from "./lcd";
import * as _338 from "./rpc.query";
import * as _339 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._302,
      ..._303,
      ..._304,
      ..._305,
      ..._306
    };
  }
  export const ClientFactory = {
    ..._337,
    ..._338,
    ..._339
  };
}