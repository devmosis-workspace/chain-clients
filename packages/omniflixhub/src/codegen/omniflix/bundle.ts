import * as _4 from "../omniflix/itc/v1/genesis";
import * as _5 from "../omniflix/itc/v1/itc";
import * as _6 from "../omniflix/itc/v1/params";
import * as _7 from "../omniflix/itc/v1/query";
import * as _8 from "../omniflix/itc/v1/tx";
import * as _104 from "../omniflix/itc/v1/tx.amino";
import * as _105 from "../omniflix/itc/v1/tx.registry";
import * as _106 from "../omniflix/itc/v1/query.lcd";
import * as _107 from "../omniflix/itc/v1/query.rpc.Query";
import * as _108 from "../omniflix/itc/v1/tx.rpc.msg";
import * as _172 from "./lcd";
import * as _173 from "./rpc.query";
import * as _174 from "./rpc.tx";
export namespace OmniFlix {
  export namespace itc {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108
    };
  }
  export const ClientFactory = {
    ..._172,
    ..._173,
    ..._174
  };
}