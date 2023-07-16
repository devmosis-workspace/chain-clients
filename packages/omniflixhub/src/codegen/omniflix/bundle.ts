import * as _4 from "../omniflix/itc/v1/genesis";
import * as _5 from "../omniflix/itc/v1/itc";
import * as _6 from "../omniflix/itc/v1/params";
import * as _7 from "../omniflix/itc/v1/query";
import * as _8 from "../omniflix/itc/v1/tx";
import * as _103 from "../omniflix/itc/v1/tx.amino";
import * as _104 from "../omniflix/itc/v1/tx.registry";
import * as _105 from "../omniflix/itc/v1/query.rpc.Query";
import * as _106 from "../omniflix/itc/v1/tx.rpc.msg";
import * as _154 from "./rpc.query";
import * as _155 from "./rpc.tx";
export namespace OmniFlix {
  export namespace itc {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._103,
      ..._104,
      ..._105,
      ..._106
    };
  }
  export const ClientFactory = {
    ..._154,
    ..._155
  };
}