import * as _0 from "./guardian/genesis";
import * as _1 from "./guardian/guardian";
import * as _2 from "./guardian/query";
import * as _3 from "./guardian/tx";
import * as _4 from "./mint/genesis";
import * as _5 from "./mint/mint";
import * as _6 from "./mint/query";
import * as _7 from "./mint/tx";
import * as _166 from "./guardian/tx.amino";
import * as _167 from "./mint/tx.amino";
import * as _168 from "./guardian/tx.registry";
import * as _169 from "./mint/tx.registry";
import * as _170 from "./guardian/query.lcd";
import * as _171 from "./mint/query.lcd";
import * as _172 from "./guardian/query.rpc.Query";
import * as _173 from "./mint/query.rpc.Query";
import * as _174 from "./guardian/tx.rpc.msg";
import * as _175 from "./mint/tx.rpc.msg";
import * as _268 from "./lcd";
import * as _269 from "./rpc.query";
import * as _270 from "./rpc.tx";
export namespace irishub {
  export const guardian = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._166,
    ..._168,
    ..._170,
    ..._172,
    ..._174
  };
  export const mint = {
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._167,
    ..._169,
    ..._171,
    ..._173,
    ..._175
  };
  export const ClientFactory = {
    ..._268,
    ..._269,
    ..._270
  };
}