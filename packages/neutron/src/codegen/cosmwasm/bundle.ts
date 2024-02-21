import * as _226 from "./wasm/v1/authz";
import * as _227 from "./wasm/v1/genesis";
import * as _228 from "./wasm/v1/ibc";
import * as _229 from "./wasm/v1/proposal_legacy";
import * as _230 from "./wasm/v1/query";
import * as _231 from "./wasm/v1/tx";
import * as _232 from "./wasm/v1/types";
import * as _410 from "./wasm/v1/tx.amino";
import * as _411 from "./wasm/v1/tx.registry";
import * as _412 from "./wasm/v1/query.lcd";
import * as _413 from "./wasm/v1/query.rpc.Query";
import * as _414 from "./wasm/v1/tx.rpc.msg";
import * as _427 from "./lcd";
import * as _428 from "./rpc.query";
import * as _429 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._410,
      ..._411,
      ..._412,
      ..._413,
      ..._414
    };
  }
  export const ClientFactory = {
    ..._427,
    ..._428,
    ..._429
  };
}