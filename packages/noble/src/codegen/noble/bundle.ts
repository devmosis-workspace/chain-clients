import * as _0 from "../globalfee/genesis";
import * as _1 from "../globalfee/query";
import * as _2 from "./forwarding/v1/account";
import * as _3 from "./forwarding/v1/genesis";
import * as _4 from "./forwarding/v1/packet";
import * as _5 from "./forwarding/v1/query";
import * as _6 from "./forwarding/v1/tx";
import * as _7 from "../tariff/genesis";
import * as _8 from "../tariff/params";
import * as _9 from "../tariff/query";
import * as _10 from "../tokenfactory/blacklisted";
import * as _11 from "../tokenfactory/blacklister";
import * as _12 from "../tokenfactory/genesis";
import * as _13 from "../tokenfactory/master_minter";
import * as _14 from "../tokenfactory/minter_controller";
import * as _15 from "../tokenfactory/minters";
import * as _16 from "../tokenfactory/minting_denom";
import * as _17 from "../tokenfactory/owner";
import * as _18 from "../tokenfactory/params";
import * as _19 from "../tokenfactory/paused";
import * as _20 from "../tokenfactory/pauser";
import * as _21 from "../tokenfactory/query";
import * as _22 from "../tokenfactory/tx";
import * as _125 from "./forwarding/v1/tx.amino";
import * as _126 from "../tokenfactory/tx.amino";
import * as _127 from "./forwarding/v1/tx.registry";
import * as _128 from "../tokenfactory/tx.registry";
import * as _129 from "../globalfee/query.lcd";
import * as _130 from "./forwarding/v1/query.lcd";
import * as _131 from "../tariff/query.lcd";
import * as _132 from "../tokenfactory/query.lcd";
import * as _133 from "../globalfee/query.rpc.Query";
import * as _134 from "./forwarding/v1/query.rpc.Query";
import * as _135 from "../tariff/query.rpc.Query";
import * as _136 from "../tokenfactory/query.rpc.Query";
import * as _137 from "./forwarding/v1/tx.rpc.msg";
import * as _138 from "../tokenfactory/tx.rpc.msg";
import * as _199 from "./lcd";
import * as _200 from "./rpc.query";
import * as _201 from "./rpc.tx";
export namespace noble {
  export const globalfee = {
    ..._0,
    ..._1,
    ..._129,
    ..._133
  };
  export namespace forwarding {
    export const v1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._125,
      ..._127,
      ..._130,
      ..._134,
      ..._137
    };
  }
  export const tariff = {
    ..._7,
    ..._8,
    ..._9,
    ..._131,
    ..._135
  };
  export const tokenfactory = {
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._15,
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._22,
    ..._126,
    ..._128,
    ..._132,
    ..._136,
    ..._138
  };
  export const ClientFactory = {
    ..._199,
    ..._200,
    ..._201
  };
}