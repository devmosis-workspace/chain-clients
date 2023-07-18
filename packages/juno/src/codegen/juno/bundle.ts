import * as _0 from "./feeshare/v1/feeshare";
import * as _1 from "./feeshare/v1/genesis";
import * as _2 from "./feeshare/v1/query";
import * as _3 from "./feeshare/v1/tx";
import * as _4 from "./mint/genesis";
import * as _5 from "./mint/mint";
import * as _6 from "./mint/query";
import * as _108 from "./feeshare/v1/tx.amino";
import * as _109 from "./feeshare/v1/tx.registry";
import * as _110 from "./feeshare/v1/query.lcd";
import * as _111 from "./mint/query.lcd";
import * as _112 from "./feeshare/v1/query.rpc.Query";
import * as _113 from "./mint/query.rpc.Query";
import * as _114 from "./feeshare/v1/tx.rpc.msg";
import * as _175 from "./lcd";
import * as _176 from "./rpc.query";
import * as _177 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._108,
      ..._109,
      ..._110,
      ..._112,
      ..._114
    };
  }
  export const mint = {
    ..._4,
    ..._5,
    ..._6,
    ..._111,
    ..._113
  };
  export const ClientFactory = {
    ..._175,
    ..._176,
    ..._177
  };
}