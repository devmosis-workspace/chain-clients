import * as _15 from "./v2/cork";
import * as _16 from "./v2/genesis";
import * as _17 from "./v2/proposal";
import * as _18 from "./v2/query";
import * as _19 from "./v2/tx";
import * as _155 from "./v2/tx.amino";
import * as _156 from "./v2/tx.registry";
import * as _157 from "./v2/query.lcd";
import * as _158 from "./v2/query.rpc.Query";
import * as _159 from "./v2/tx.rpc.msg";
import * as _254 from "./lcd";
import * as _255 from "./rpc.query";
import * as _256 from "./rpc.tx";
export namespace cork {
  export const v2 = {
    ..._15,
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159
  };
  export const ClientFactory = {
    ..._254,
    ..._255,
    ..._256
  };
}