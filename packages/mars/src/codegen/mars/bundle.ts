import * as _0 from "./incentives/v1beta1/genesis";
import * as _1 from "./incentives/v1beta1/query";
import * as _2 from "./incentives/v1beta1/store";
import * as _3 from "./incentives/v1beta1/tx";
import * as _4 from "./safety/v1beta1/genesis";
import * as _5 from "./safety/v1beta1/query";
import * as _6 from "./safety/v1beta1/tx";
import * as _121 from "./incentives/v1beta1/tx.amino";
import * as _122 from "./safety/v1beta1/tx.amino";
import * as _123 from "./incentives/v1beta1/tx.registry";
import * as _124 from "./safety/v1beta1/tx.registry";
import * as _125 from "./incentives/v1beta1/query.rpc.Query";
import * as _126 from "./safety/v1beta1/query.rpc.Query";
import * as _127 from "./incentives/v1beta1/tx.rpc.msg";
import * as _128 from "./safety/v1beta1/tx.rpc.msg";
import * as _190 from "./rpc.query";
import * as _191 from "./rpc.tx";
export namespace mars {
  export namespace incentives {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._121,
      ..._123,
      ..._125,
      ..._127
    };
  }
  export namespace safety {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._122,
      ..._124,
      ..._126,
      ..._128
    };
  }
  export const ClientFactory = {
    ..._190,
    ..._191
  };
}