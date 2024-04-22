import * as _20 from "./v1/genesis";
import * as _21 from "./v1/query";
import * as _160 from "./v1/query.lcd";
import * as _161 from "./v1/query.rpc.Query";
import * as _257 from "./lcd";
import * as _258 from "./rpc.query";
export namespace incentives {
  export const v1 = {
    ..._20,
    ..._21,
    ..._160,
    ..._161
  };
  export const ClientFactory = {
    ..._257,
    ..._258
  };
}