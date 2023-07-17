import * as _3 from "./v1/cork";
import * as _4 from "./v1/genesis";
import * as _5 from "./v1/proposal";
import * as _6 from "./v1/query";
import * as _7 from "./v1/tx";
import * as _114 from "./v1/tx.amino";
import * as _115 from "./v1/tx.registry";
import * as _116 from "./v1/query.rpc.Query";
import * as _117 from "./v1/tx.rpc.msg";
import * as _165 from "./rpc.query";
import * as _166 from "./rpc.tx";
export namespace cork {
  export const v1 = {
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._114,
    ..._115,
    ..._116,
    ..._117
  };
  export const ClientFactory = {
    ..._165,
    ..._166
  };
}