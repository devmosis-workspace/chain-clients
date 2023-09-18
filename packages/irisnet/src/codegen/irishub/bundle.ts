import * as _0 from "../guardian/genesis";
import * as _1 from "../guardian/guardian";
import * as _2 from "../guardian/query";
import * as _3 from "../guardian/tx";
import * as _4 from "../mint/genesis";
import * as _5 from "../mint/mint";
import * as _6 from "../mint/query";
import * as _135 from "../guardian/tx.amino";
import * as _136 from "../guardian/tx.registry";
import * as _137 from "../guardian/query.lcd";
import * as _138 from "../mint/query.lcd";
import * as _139 from "../guardian/query.rpc.Query";
import * as _140 from "../mint/query.rpc.Query";
import * as _141 from "../guardian/tx.rpc.msg";
import * as _221 from "./lcd";
import * as _222 from "./rpc.query";
import * as _223 from "./rpc.tx";
export namespace irishub {
  export const guardian = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._135,
    ..._136,
    ..._137,
    ..._139,
    ..._141
  };
  export const mint = {
    ..._4,
    ..._5,
    ..._6,
    ..._138,
    ..._140
  };
  export const ClientFactory = {
    ..._221,
    ..._222,
    ..._223
  };
}