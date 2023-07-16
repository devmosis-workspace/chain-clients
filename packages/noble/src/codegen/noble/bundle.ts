import * as _0 from "../fiattokenfactory/blacklisted";
import * as _1 from "../fiattokenfactory/blacklister";
import * as _2 from "../fiattokenfactory/genesis";
import * as _3 from "../fiattokenfactory/master_minter";
import * as _4 from "../fiattokenfactory/minter_controller";
import * as _5 from "../fiattokenfactory/minters";
import * as _6 from "../fiattokenfactory/minting_denom";
import * as _7 from "../fiattokenfactory/owner";
import * as _8 from "../fiattokenfactory/params";
import * as _9 from "../fiattokenfactory/paused";
import * as _10 from "../fiattokenfactory/pauser";
import * as _11 from "../fiattokenfactory/query";
import * as _12 from "../fiattokenfactory/tx";
import * as _13 from "../globalfee/genesis";
import * as _14 from "../globalfee/query";
import * as _15 from "../tariff/genesis";
import * as _16 from "../tariff/params";
import * as _17 from "../tokenfactory/blacklisted";
import * as _18 from "../tokenfactory/blacklister";
import * as _19 from "../tokenfactory/genesis";
import * as _20 from "../tokenfactory/master_minter";
import * as _21 from "../tokenfactory/minter_controller";
import * as _22 from "../tokenfactory/minters";
import * as _23 from "../tokenfactory/minting_denom";
import * as _24 from "../tokenfactory/owner";
import * as _25 from "../tokenfactory/params";
import * as _26 from "../tokenfactory/paused";
import * as _27 from "../tokenfactory/pauser";
import * as _28 from "../tokenfactory/query";
import * as _29 from "../tokenfactory/tx";
import * as _133 from "../fiattokenfactory/tx.amino";
import * as _134 from "../tokenfactory/tx.amino";
import * as _135 from "../fiattokenfactory/tx.registry";
import * as _136 from "../tokenfactory/tx.registry";
import * as _137 from "../fiattokenfactory/query.rpc.Query";
import * as _138 from "../globalfee/query.rpc.Query";
import * as _139 from "../tokenfactory/query.rpc.Query";
import * as _140 from "../fiattokenfactory/tx.rpc.msg";
import * as _141 from "../tokenfactory/tx.rpc.msg";
import * as _187 from "./rpc.query";
import * as _188 from "./rpc.tx";
export namespace noble {
  export const fiattokenfactory = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._133,
    ..._135,
    ..._137,
    ..._140
  };
  export const globalfee = {
    ..._13,
    ..._14,
    ..._138
  };
  export const tariff = {
    ..._15,
    ..._16
  };
  export const tokenfactory = {
    ..._17,
    ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._22,
    ..._23,
    ..._24,
    ..._25,
    ..._26,
    ..._27,
    ..._28,
    ..._29,
    ..._134,
    ..._136,
    ..._139,
    ..._141
  };
  export const ClientFactory = {
    ..._187,
    ..._188
  };
}