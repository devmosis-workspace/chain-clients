import * as _190 from "./wasm/v1/authz";
import * as _191 from "./wasm/v1/genesis";
import * as _192 from "./wasm/v1/ibc";
import * as _193 from "./wasm/v1/proposal";
import * as _194 from "./wasm/v1/query";
import * as _195 from "./wasm/v1/tx";
import * as _196 from "./wasm/v1/types";
import * as _335 from "./wasm/v1/tx.amino";
import * as _336 from "./wasm/v1/tx.registry";
import * as _337 from "./wasm/v1/query.lcd";
import * as _338 from "./wasm/v1/query.rpc.Query";
import * as _339 from "./wasm/v1/tx.rpc.msg";
import * as _346 from "./lcd";
import * as _347 from "./rpc.query";
import * as _348 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._335,
      ..._336,
      ..._337,
      ..._338,
      ..._339
    };
  }
  export const ClientFactory = {
    ..._346,
    ..._347,
    ..._348
  };
}