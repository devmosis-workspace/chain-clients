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
import * as _119 from "./swingset/msgs.amino";
import * as _120 from "./vibc/msgs.amino";
import * as _121 from "./swingset/msgs.registry";
import * as _122 from "./vibc/msgs.registry";
import * as _123 from "./swingset/query.rpc.Query";
import * as _124 from "./vbank/query.rpc.Query";
import * as _125 from "./vstorage/query.rpc.Query";
import * as _126 from "./swingset/msgs.rpc.msg";
import * as _127 from "./vibc/msgs.rpc.msg";
import * as _173 from "./rpc.query";
import * as _174 from "./rpc.tx";
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
    ..._119,
    ..._121,
    ..._123,
    ..._126
  };
  export const vbank = {
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._124
  };
  export const vibc = {
    ..._10,
    ..._120,
    ..._122,
    ..._127
  };
  export const vstorage = {
    ..._11,
    ..._12,
    ..._13,
    ..._125
  };
  export const ClientFactory = {
    ..._173,
    ..._174
  };
}