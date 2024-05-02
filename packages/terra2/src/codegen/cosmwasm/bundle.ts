import * as _151 from "./wasm/v1/authz";
import * as _152 from "./wasm/v1/genesis";
import * as _153 from "./wasm/v1/ibc";
import * as _154 from "./wasm/v1/proposal_legacy";
import * as _155 from "./wasm/v1/query";
import * as _156 from "./wasm/v1/tx";
import * as _157 from "./wasm/v1/types";
import * as _271 from "./wasm/v1/tx.amino";
import * as _272 from "./wasm/v1/tx.registry";
import * as _273 from "./wasm/v1/query.lcd";
import * as _274 from "./wasm/v1/query.rpc.Query";
import * as _275 from "./wasm/v1/tx.rpc.msg";
import * as _286 from "./lcd";
import * as _287 from "./rpc.query";
import * as _288 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275
    };
  }
  export const ClientFactory = {
    ..._286,
    ..._287,
    ..._288
  };
}