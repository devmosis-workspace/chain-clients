import * as _0 from "./epochs/v1beta1/genesis";
import * as _1 from "./epochs/v1beta1/query";
import * as _2 from "./halving/v1beta1/genesis";
import * as _3 from "./halving/v1beta1/halving";
import * as _4 from "./halving/v1beta1/query";
import * as _5 from "./interchainquery/v1beta1/genesis";
import * as _6 from "./interchainquery/v1beta1/messages";
import * as _7 from "./interchainquery/v1beta1/query";
import * as _8 from "./oracle/v1beta1/genesis";
import * as _9 from "./oracle/v1beta1/oracle";
import * as _10 from "./oracle/v1beta1/query";
import * as _11 from "./oracle/v1beta1/tx";
import * as _198 from "./interchainquery/v1beta1/messages.amino";
import * as _199 from "./oracle/v1beta1/tx.amino";
import * as _200 from "./interchainquery/v1beta1/messages.registry";
import * as _201 from "./oracle/v1beta1/tx.registry";
import * as _202 from "./epochs/v1beta1/query.lcd";
import * as _203 from "./halving/v1beta1/query.lcd";
import * as _204 from "./oracle/v1beta1/query.lcd";
import * as _205 from "./epochs/v1beta1/query.rpc.Query";
import * as _206 from "./halving/v1beta1/query.rpc.Query";
import * as _207 from "./oracle/v1beta1/query.rpc.Query";
import * as _208 from "./interchainquery/v1beta1/messages.rpc.msg";
import * as _209 from "./oracle/v1beta1/tx.rpc.msg";
import * as _331 from "./lcd";
import * as _332 from "./rpc.query";
import * as _333 from "./rpc.tx";
export namespace persistence {
  export namespace epochs {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._202,
      ..._205
    };
  }
  export namespace halving {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._203,
      ..._206
    };
  }
  export namespace interchainquery {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._198,
      ..._200,
      ..._208
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._199,
      ..._201,
      ..._204,
      ..._207,
      ..._209
    };
  }
  export const ClientFactory = {
    ..._331,
    ..._332,
    ..._333
  };
}