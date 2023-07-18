import * as _0 from "./epochs/v1beta1/genesis";
import * as _1 from "./epochs/v1beta1/query";
import * as _2 from "./halving/v1beta1/genesis";
import * as _3 from "./halving/v1beta1/halving";
import * as _4 from "./halving/v1beta1/query";
import * as _5 from "./interchainquery/v1beta1/genesis";
import * as _6 from "./interchainquery/v1beta1/messages";
import * as _7 from "./interchainquery/v1beta1/query";
import * as _131 from "./interchainquery/v1beta1/messages.amino";
import * as _132 from "./interchainquery/v1beta1/messages.registry";
import * as _133 from "./epochs/v1beta1/query.lcd";
import * as _134 from "./halving/v1beta1/query.lcd";
import * as _135 from "./epochs/v1beta1/query.rpc.Query";
import * as _136 from "./halving/v1beta1/query.rpc.Query";
import * as _137 from "./interchainquery/v1beta1/messages.rpc.msg";
import * as _222 from "./lcd";
import * as _223 from "./rpc.query";
import * as _224 from "./rpc.tx";
export namespace persistence {
  export namespace epochs {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._133,
      ..._135
    };
  }
  export namespace halving {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._134,
      ..._136
    };
  }
  export namespace interchainquery {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._131,
      ..._132,
      ..._137
    };
  }
  export const ClientFactory = {
    ..._222,
    ..._223,
    ..._224
  };
}