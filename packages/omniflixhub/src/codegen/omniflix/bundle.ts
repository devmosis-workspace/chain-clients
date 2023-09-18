import * as _4 from "../omniflix/itc/v1/genesis";
import * as _5 from "../omniflix/itc/v1/itc";
import * as _6 from "../omniflix/itc/v1/params";
import * as _7 from "../omniflix/itc/v1/query";
import * as _8 from "../omniflix/itc/v1/tx";
import * as _9 from "../omniflix/marketplace/v1beta1/auction";
import * as _10 from "../omniflix/marketplace/v1beta1/events";
import * as _11 from "../omniflix/marketplace/v1beta1/genesis";
import * as _12 from "../omniflix/marketplace/v1beta1/listing";
import * as _13 from "../omniflix/marketplace/v1beta1/params";
import * as _14 from "../omniflix/marketplace/v1beta1/query";
import * as _15 from "../omniflix/marketplace/v1beta1/tx";
import * as _111 from "../omniflix/itc/v1/tx.amino";
import * as _112 from "../omniflix/marketplace/v1beta1/tx.amino";
import * as _113 from "../omniflix/itc/v1/tx.registry";
import * as _114 from "../omniflix/marketplace/v1beta1/tx.registry";
import * as _115 from "../omniflix/itc/v1/query.lcd";
import * as _116 from "../omniflix/marketplace/v1beta1/query.lcd";
import * as _117 from "../omniflix/itc/v1/query.rpc.Query";
import * as _118 from "../omniflix/marketplace/v1beta1/query.rpc.Query";
import * as _119 from "../omniflix/itc/v1/tx.rpc.msg";
import * as _120 from "../omniflix/marketplace/v1beta1/tx.rpc.msg";
import * as _184 from "./lcd";
import * as _185 from "./rpc.query";
import * as _186 from "./rpc.tx";
export namespace OmniFlix {
  export namespace itc {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._111,
      ..._113,
      ..._115,
      ..._117,
      ..._119
    };
  }
  export namespace marketplace {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._112,
      ..._114,
      ..._116,
      ..._118,
      ..._120
    };
  }
  export const ClientFactory = {
    ..._184,
    ..._185,
    ..._186
  };
}