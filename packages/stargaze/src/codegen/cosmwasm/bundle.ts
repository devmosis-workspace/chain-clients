import * as _159 from "./wasm/v1/authz";
import * as _160 from "./wasm/v1/genesis";
import * as _161 from "./wasm/v1/ibc";
import * as _162 from "./wasm/v1/proposal_legacy";
import * as _163 from "./wasm/v1/query";
import * as _164 from "./wasm/v1/tx";
import * as _165 from "./wasm/v1/types";
import * as _288 from "./wasm/v1/tx.amino";
import * as _289 from "./wasm/v1/tx.registry";
import * as _290 from "./wasm/v1/query.lcd";
import * as _291 from "./wasm/v1/query.rpc.Query";
import * as _292 from "./wasm/v1/tx.rpc.msg";
import * as _302 from "./lcd";
import * as _303 from "./rpc.query";
import * as _304 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._288,
      ..._289,
      ..._290,
      ..._291,
      ..._292
    };
  }
  export const ClientFactory = {
    ..._302,
    ..._303,
    ..._304
  };
}