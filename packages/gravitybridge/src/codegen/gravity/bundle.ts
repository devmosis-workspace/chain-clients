import * as _0 from "./v1/attestation";
import * as _1 from "./v1/batch";
import * as _2 from "./v1/ethereum_signer";
import * as _3 from "./v1/genesis";
import * as _4 from "./v1/msgs";
import * as _5 from "./v1/pool";
import * as _6 from "./v1/query";
import * as _7 from "./v1/types";
import * as _120 from "./v1/msgs.amino";
import * as _121 from "./v1/msgs.registry";
import * as _122 from "./v1/query.rpc.Query";
import * as _123 from "./v1/msgs.rpc.msg";
import * as _174 from "./rpc.query";
import * as _175 from "./rpc.tx";
export namespace gravity {
  export const v1 = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._120,
    ..._121,
    ..._122,
    ..._123
  };
  export const ClientFactory = {
    ..._174,
    ..._175
  };
}