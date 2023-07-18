import * as _6 from "../iov/configuration/v1beta1/msgs";
import * as _7 from "../iov/configuration/v1beta1/query";
import * as _8 from "../iov/configuration/v1beta1/types";
import * as _9 from "../iov/escrow/v1beta1/events";
import * as _10 from "../iov/escrow/v1beta1/genesis";
import * as _11 from "../iov/escrow/v1beta1/params";
import * as _12 from "../iov/escrow/v1beta1/query";
import * as _13 from "../iov/escrow/v1beta1/test";
import * as _14 from "../iov/escrow/v1beta1/tx";
import * as _15 from "../iov/escrow/v1beta1/types";
import * as _16 from "../iov/starname/v1beta1/genesis";
import * as _17 from "../iov/starname/v1beta1/query";
import * as _18 from "../iov/starname/v1beta1/tx";
import * as _19 from "../iov/starname/v1beta1/types";
import * as _139 from "../iov/escrow/v1beta1/tx.amino";
import * as _140 from "../iov/starname/v1beta1/tx.amino";
import * as _141 from "../iov/escrow/v1beta1/tx.registry";
import * as _142 from "../iov/starname/v1beta1/tx.registry";
import * as _143 from "../iov/configuration/v1beta1/query.lcd";
import * as _144 from "../iov/escrow/v1beta1/query.lcd";
import * as _145 from "../iov/starname/v1beta1/query.lcd";
import * as _146 from "../iov/configuration/v1beta1/query.rpc.Query";
import * as _147 from "../iov/escrow/v1beta1/query.rpc.Query";
import * as _148 from "../iov/starname/v1beta1/query.rpc.Query";
import * as _149 from "../iov/escrow/v1beta1/tx.rpc.msg";
import * as _150 from "../iov/starname/v1beta1/tx.rpc.msg";
import * as _232 from "./lcd";
import * as _233 from "./rpc.query";
import * as _234 from "./rpc.tx";
export namespace starnamed {
  export namespace x {
    export namespace configuration {
      export const v1beta1 = {
        ..._6,
        ..._7,
        ..._8,
        ..._143,
        ..._146
      };
    }
    export namespace escrow {
      export const v1beta1 = {
        ..._9,
        ..._10,
        ..._11,
        ..._12,
        ..._13,
        ..._14,
        ..._15,
        ..._139,
        ..._141,
        ..._144,
        ..._147,
        ..._149
      };
    }
    export namespace starname {
      export const v1beta1 = {
        ..._16,
        ..._17,
        ..._18,
        ..._19,
        ..._140,
        ..._142,
        ..._145,
        ..._148,
        ..._150
      };
    }
  }
  export const ClientFactory = {
    ..._232,
    ..._233,
    ..._234
  };
}