import * as _0 from "./incentives/v1beta1/genesis";
import * as _1 from "./incentives/v1beta1/query";
import * as _2 from "./incentives/v1beta1/store";
import * as _3 from "./incentives/v1beta1/tx";
import * as _4 from "./safety/v1beta1/genesis";
import * as _5 from "./safety/v1beta1/query";
import * as _6 from "./safety/v1beta1/tx";
import * as _122 from "./incentives/v1beta1/tx.amino";
import * as _123 from "./safety/v1beta1/tx.amino";
import * as _124 from "./incentives/v1beta1/tx.registry";
import * as _125 from "./safety/v1beta1/tx.registry";
import * as _126 from "./incentives/v1beta1/query.lcd";
import * as _127 from "./safety/v1beta1/query.lcd";
import * as _128 from "./incentives/v1beta1/query.rpc.Query";
import * as _129 from "./safety/v1beta1/query.rpc.Query";
import * as _130 from "./incentives/v1beta1/tx.rpc.msg";
import * as _131 from "./safety/v1beta1/tx.rpc.msg";
import * as _211 from "./lcd";
import * as _212 from "./rpc.query";
import * as _213 from "./rpc.tx";
export namespace mars {
  export namespace incentives {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._122,
      ..._124,
      ..._126,
      ..._128,
      ..._130
    };
  }
  export namespace safety {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._123,
      ..._125,
      ..._127,
      ..._129,
      ..._131
    };
  }
  export const ClientFactory = {
    ..._211,
    ..._212,
    ..._213
  };
}