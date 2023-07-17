import * as _0 from "./compute/v1beta1/genesis";
import * as _1 from "./compute/v1beta1/msg";
import * as _2 from "./compute/v1beta1/query";
import * as _3 from "./compute/v1beta1/types";
import * as _4 from "./emergencybutton/v1beta1/genesis";
import * as _5 from "./emergencybutton/v1beta1/params";
import * as _6 from "./emergencybutton/v1beta1/query";
import * as _7 from "./emergencybutton/v1beta1/tx";
import * as _8 from "./intertx/v1beta1/query";
import * as _9 from "./intertx/v1beta1/tx";
import * as _10 from "./registration/v1beta1/genesis";
import * as _11 from "./registration/v1beta1/msg";
import * as _12 from "./registration/v1beta1/query";
import * as _13 from "./registration/v1beta1/types";
import * as _14 from "./registration/v1beta1/remote_attestation/types";
import * as _159 from "./compute/v1beta1/msg.amino";
import * as _160 from "./emergencybutton/v1beta1/tx.amino";
import * as _161 from "./intertx/v1beta1/tx.amino";
import * as _162 from "./compute/v1beta1/msg.registry";
import * as _163 from "./emergencybutton/v1beta1/tx.registry";
import * as _164 from "./intertx/v1beta1/tx.registry";
import * as _165 from "./compute/v1beta1/query.rpc.Query";
import * as _166 from "./emergencybutton/v1beta1/query.rpc.Query";
import * as _167 from "./intertx/v1beta1/query.rpc.Query";
import * as _168 from "./registration/v1beta1/query.rpc.Query";
import * as _169 from "./compute/v1beta1/msg.rpc.msg";
import * as _170 from "./emergencybutton/v1beta1/tx.rpc.msg";
import * as _171 from "./intertx/v1beta1/tx.rpc.msg";
import * as _240 from "./rpc.query";
import * as _241 from "./rpc.tx";
export namespace secret {
  export namespace compute {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._159,
      ..._162,
      ..._165,
      ..._169
    };
  }
  export namespace emergencybutton {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._160,
      ..._163,
      ..._166,
      ..._170
    };
  }
  export namespace intertx {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._161,
      ..._164,
      ..._167,
      ..._171
    };
  }
  export namespace registration {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._168
    };
    export namespace remote_attestation {
      export const v1beta1 = {
        ..._14
      };
    }
  }
  export const ClientFactory = {
    ..._240,
    ..._241
  };
}