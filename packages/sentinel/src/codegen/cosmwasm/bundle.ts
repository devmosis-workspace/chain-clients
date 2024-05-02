import * as _122 from "./wasm/v1/authz";
import * as _123 from "./wasm/v1/genesis";
import * as _124 from "./wasm/v1/ibc";
import * as _125 from "./wasm/v1/proposal";
import * as _126 from "./wasm/v1/query";
import * as _127 from "./wasm/v1/tx";
import * as _128 from "./wasm/v1/types";
import * as _209 from "./wasm/v1/tx.amino";
import * as _210 from "./wasm/v1/tx.registry";
import * as _211 from "./wasm/v1/query.lcd";
import * as _212 from "./wasm/v1/query.rpc.Query";
import * as _213 from "./wasm/v1/tx.rpc.msg";
import * as _217 from "./lcd";
import * as _218 from "./rpc.query";
import * as _219 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213
    };
  }
  export const ClientFactory = {
    ..._217,
    ..._218,
    ..._219
  };
}