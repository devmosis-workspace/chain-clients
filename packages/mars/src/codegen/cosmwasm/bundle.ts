import * as _115 from "./wasm/v1/authz";
import * as _116 from "./wasm/v1/genesis";
import * as _117 from "./wasm/v1/ibc";
import * as _118 from "./wasm/v1/proposal";
import * as _119 from "./wasm/v1/query";
import * as _120 from "./wasm/v1/tx";
import * as _121 from "./wasm/v1/types";
import * as _218 from "./wasm/v1/tx.amino";
import * as _219 from "./wasm/v1/tx.registry";
import * as _220 from "./wasm/v1/query.lcd";
import * as _221 from "./wasm/v1/query.rpc.Query";
import * as _222 from "./wasm/v1/tx.rpc.msg";
import * as _229 from "./lcd";
import * as _230 from "./rpc.query";
import * as _231 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222
    };
  }
  export const ClientFactory = {
    ..._229,
    ..._230,
    ..._231
  };
}