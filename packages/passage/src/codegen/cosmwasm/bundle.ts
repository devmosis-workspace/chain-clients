import * as _75 from "./wasm/v1/authz";
import * as _76 from "./wasm/v1/genesis";
import * as _77 from "./wasm/v1/ibc";
import * as _78 from "./wasm/v1/proposal";
import * as _79 from "./wasm/v1/query";
import * as _80 from "./wasm/v1/tx";
import * as _81 from "./wasm/v1/types";
import * as _166 from "./wasm/v1/tx.amino";
import * as _167 from "./wasm/v1/tx.registry";
import * as _168 from "./wasm/v1/query.lcd";
import * as _169 from "./wasm/v1/query.rpc.Query";
import * as _170 from "./wasm/v1/tx.rpc.msg";
import * as _177 from "./lcd";
import * as _178 from "./rpc.query";
import * as _179 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170
    };
  }
  export const ClientFactory = {
    ..._177,
    ..._178,
    ..._179
  };
}