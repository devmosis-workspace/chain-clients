import * as _0 from "./lien/genesis";
import * as _1 from "./lien/lien";
import * as _2 from "./swingset/genesis";
import * as _3 from "./swingset/msgs";
import * as _4 from "./swingset/query";
import * as _5 from "./swingset/swingset";
import * as _6 from "./vbank/genesis";
import * as _7 from "./vbank/msgs";
import * as _8 from "./vbank/query";
import * as _9 from "./vbank/vbank";
import * as _10 from "./vibc/msgs";
import * as _11 from "./vstorage/genesis";
import * as _12 from "./vstorage/query";
import * as _13 from "./vstorage/vstorage";
import * as _132 from "./swingset/msgs.amino";
import * as _133 from "./vibc/msgs.amino";
import * as _134 from "./swingset/msgs.registry";
import * as _135 from "./vibc/msgs.registry";
import * as _136 from "./swingset/query.lcd";
import * as _137 from "./vbank/query.lcd";
import * as _138 from "./vstorage/query.lcd";
import * as _139 from "./swingset/query.rpc.Query";
import * as _140 from "./vbank/query.rpc.Query";
import * as _141 from "./vstorage/query.rpc.Query";
import * as _142 from "./swingset/msgs.rpc.msg";
import * as _143 from "./vibc/msgs.rpc.msg";
import * as _223 from "./lcd";
import * as _224 from "./rpc.query";
import * as _225 from "./rpc.tx";
export namespace agoric {
  export const lien = {
    ..._0,
    ..._1
  };
  export const swingset = {
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._132,
    ..._134,
    ..._136,
    ..._139,
    ..._142
  };
  export const vbank = {
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._137,
    ..._140
  };
  export const vibc = {
    ..._10,
    ..._133,
    ..._135,
    ..._143
  };
  export const vstorage = {
    ..._11,
    ..._12,
    ..._13,
    ..._138,
    ..._141
  };
  export const ClientFactory = {
    ..._223,
    ..._224,
    ..._225
  };
}