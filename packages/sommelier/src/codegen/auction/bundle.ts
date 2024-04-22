import * as _0 from "./v1/auction";
import * as _1 from "./v1/genesis";
import * as _2 from "./v1/proposal";
import * as _3 from "./v1/query";
import * as _4 from "./v1/tx";
import * as _143 from "./v1/tx.amino";
import * as _144 from "./v1/tx.registry";
import * as _145 from "./v1/query.lcd";
import * as _146 from "./v1/query.rpc.Query";
import * as _147 from "./v1/tx.rpc.msg";
import * as _246 from "./lcd";
import * as _247 from "./rpc.query";
import * as _248 from "./rpc.tx";
export namespace auction {
  export const v1 = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147
  };
  export const ClientFactory = {
    ..._246,
    ..._247,
    ..._248
  };
}