import * as _0 from "./feeburn/genesis";
import * as _1 from "./feeburn/params";
import * as _2 from "./feeburn/query";
import * as _3 from "./feeburn/tx";
import * as _154 from "./feeburn/tx.amino";
import * as _155 from "./feeburn/tx.registry";
import * as _156 from "./feeburn/query.lcd";
import * as _157 from "./feeburn/query.rpc.Query";
import * as _158 from "./feeburn/tx.rpc.msg";
import * as _256 from "./lcd";
import * as _257 from "./rpc.query";
import * as _258 from "./rpc.tx";
export namespace chihuahua {
  export const feeburn = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._158
  };
  export const ClientFactory = {
    ..._256,
    ..._257,
    ..._258
  };
}