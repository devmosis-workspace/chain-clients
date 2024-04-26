import * as _168 from "./wasm/v1/authz";
import * as _169 from "./wasm/v1/genesis";
import * as _170 from "./wasm/v1/ibc";
import * as _171 from "./wasm/v1/proposal_legacy";
import * as _172 from "./wasm/v1/query";
import * as _173 from "./wasm/v1/tx";
import * as _174 from "./wasm/v1/types";
import * as _314 from "./wasm/v1/tx.amino";
import * as _315 from "./wasm/v1/tx.registry";
import * as _316 from "./wasm/v1/query.lcd";
import * as _317 from "./wasm/v1/query.rpc.Query";
import * as _318 from "./wasm/v1/tx.rpc.msg";
import * as _331 from "./lcd";
import * as _332 from "./rpc.query";
import * as _333 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._314,
      ..._315,
      ..._316,
      ..._317,
      ..._318
    };
  }
  export const ClientFactory = {
    ..._331,
    ..._332,
    ..._333
  };
}