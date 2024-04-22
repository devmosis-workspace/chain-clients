import * as _11 from "./v1/cellarfees";
import * as _12 from "./v1/genesis";
import * as _13 from "./v1/params";
import * as _14 from "./v1/query";
import * as _153 from "./v1/query.lcd";
import * as _154 from "./v1/query.rpc.Query";
import * as _252 from "./lcd";
import * as _253 from "./rpc.query";
export namespace cellarfees {
  export const v1 = {
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._153,
    ..._154
  };
  export const ClientFactory = {
    ..._252,
    ..._253
  };
}