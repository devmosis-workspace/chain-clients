import * as _0 from "./wasm/v1/genesis";
import * as _1 from "./wasm/v1/ibc";
import * as _2 from "./wasm/v1/proposal";
import * as _3 from "./wasm/v1/query";
import * as _4 from "./wasm/v1/tx";
import * as _5 from "./wasm/v1/types";
import * as _134 from "./wasm/v1/tx.amino";
import * as _135 from "./wasm/v1/tx.registry";
import * as _136 from "./wasm/v1/query.lcd";
import * as _137 from "./wasm/v1/query.rpc.Query";
import * as _138 from "./wasm/v1/tx.rpc.msg";
import * as _229 from "./lcd";
import * as _230 from "./rpc.query";
import * as _231 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138
    };
  }
  export const ClientFactory = {
    ..._229,
    ..._230,
    ..._231
  };
}