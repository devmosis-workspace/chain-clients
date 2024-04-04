import * as _196 from "./wasm/v1/authz";
import * as _197 from "./wasm/v1/genesis";
import * as _198 from "./wasm/v1/ibc";
import * as _199 from "./wasm/v1/proposal_legacy";
import * as _200 from "./wasm/v1/query";
import * as _201 from "./wasm/v1/tx";
import * as _202 from "./wasm/v1/types";
import * as _340 from "./wasm/v1/tx.amino";
import * as _341 from "./wasm/v1/tx.registry";
import * as _342 from "./wasm/v1/query.lcd";
import * as _343 from "./wasm/v1/query.rpc.Query";
import * as _344 from "./wasm/v1/tx.rpc.msg";
import * as _351 from "./lcd";
import * as _352 from "./rpc.query";
import * as _353 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._340,
      ..._341,
      ..._342,
      ..._343,
      ..._344
    };
  }
  export const ClientFactory = {
    ..._351,
    ..._352,
    ..._353
  };
}