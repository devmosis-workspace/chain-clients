import * as _0 from "./incentives/v1beta1/genesis";
import * as _1 from "./incentives/v1beta1/query";
import * as _2 from "./incentives/v1beta1/store";
import * as _3 from "./incentives/v1beta1/tx";
import * as _4 from "./safety/v1beta1/genesis";
import * as _5 from "./safety/v1beta1/query";
import * as _6 from "./safety/v1beta1/tx";
import * as _129 from "./incentives/v1beta1/tx.amino";
import * as _130 from "./safety/v1beta1/tx.amino";
import * as _131 from "./incentives/v1beta1/tx.registry";
import * as _132 from "./safety/v1beta1/tx.registry";
import * as _133 from "./incentives/v1beta1/query.lcd";
import * as _134 from "./safety/v1beta1/query.lcd";
import * as _135 from "./incentives/v1beta1/query.rpc.Query";
import * as _136 from "./safety/v1beta1/query.rpc.Query";
import * as _137 from "./incentives/v1beta1/tx.rpc.msg";
import * as _138 from "./safety/v1beta1/tx.rpc.msg";
import * as _223 from "./lcd";
import * as _224 from "./rpc.query";
import * as _225 from "./rpc.tx";
export namespace mars {
  export namespace incentives {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._129,
      ..._131,
      ..._133,
      ..._135,
      ..._137
    };
  }
  export namespace safety {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._130,
      ..._132,
      ..._134,
      ..._136,
      ..._138
    };
  }
  export const ClientFactory = {
    ..._223,
    ..._224,
    ..._225
  };
}