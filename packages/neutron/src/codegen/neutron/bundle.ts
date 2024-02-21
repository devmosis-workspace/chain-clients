import * as _0 from "./contractmanager/failure";
import * as _1 from "./contractmanager/genesis";
import * as _2 from "./contractmanager/params";
import * as _3 from "./contractmanager/query";
import * as _4 from "./contractmanager/tx";
import * as _5 from "./cron/genesis";
import * as _6 from "./cron/params";
import * as _7 from "./cron/query";
import * as _8 from "./cron/schedule";
import * as _9 from "./cron/tx";
import * as _10 from "./dex/deposit_record";
import * as _11 from "./dex/genesis";
import * as _12 from "./dex/limit_order_expiration";
import * as _13 from "./dex/limit_order_tranche_user";
import * as _14 from "./dex/limit_order_tranche";
import * as _15 from "./dex/pair_id";
import * as _16 from "./dex/params";
import * as _17 from "./dex/pool_metadata";
import * as _18 from "./dex/pool_reserves";
import * as _19 from "./dex/pool";
import * as _20 from "./dex/query";
import * as _21 from "./dex/tick_liquidity";
import * as _22 from "./dex/trade_pair_id";
import * as _23 from "./dex/tx";
import * as _24 from "./feeburner/genesis";
import * as _25 from "./feeburner/params";
import * as _26 from "./feeburner/query";
import * as _27 from "./feeburner/total_burned_neutrons_amount";
import * as _28 from "./feeburner/tx";
import * as _29 from "./feerefunder/fee";
import * as _30 from "./feerefunder/genesis";
import * as _31 from "./feerefunder/params";
import * as _32 from "./feerefunder/query";
import * as _33 from "./feerefunder/tx";
import * as _34 from "./interchainqueries/genesis";
import * as _35 from "./interchainqueries/params";
import * as _36 from "./interchainqueries/query";
import * as _37 from "./interchainqueries/tx";
import * as _38 from "./interchaintxs/v1/genesis";
import * as _39 from "./interchaintxs/v1/params";
import * as _40 from "./interchaintxs/v1/query";
import * as _41 from "./interchaintxs/v1/tx";
import * as _42 from "./transfer/v1/query";
import * as _43 from "./transfer/v1/tx";
import * as _241 from "./contractmanager/tx.amino";
import * as _242 from "./cron/tx.amino";
import * as _243 from "./dex/tx.amino";
import * as _244 from "./feeburner/tx.amino";
import * as _245 from "./feerefunder/tx.amino";
import * as _246 from "./interchainqueries/tx.amino";
import * as _247 from "./interchaintxs/v1/tx.amino";
import * as _248 from "./transfer/v1/tx.amino";
import * as _249 from "./contractmanager/tx.registry";
import * as _250 from "./cron/tx.registry";
import * as _251 from "./dex/tx.registry";
import * as _252 from "./feeburner/tx.registry";
import * as _253 from "./feerefunder/tx.registry";
import * as _254 from "./interchainqueries/tx.registry";
import * as _255 from "./interchaintxs/v1/tx.registry";
import * as _256 from "./transfer/v1/tx.registry";
import * as _257 from "./contractmanager/query.lcd";
import * as _258 from "./cron/query.lcd";
import * as _259 from "./dex/query.lcd";
import * as _260 from "./feeburner/query.lcd";
import * as _261 from "./feerefunder/query.lcd";
import * as _262 from "./interchainqueries/query.lcd";
import * as _263 from "./interchaintxs/v1/query.lcd";
import * as _264 from "./transfer/v1/query.lcd";
import * as _265 from "./contractmanager/query.rpc.Query";
import * as _266 from "./cron/query.rpc.Query";
import * as _267 from "./dex/query.rpc.Query";
import * as _268 from "./feeburner/query.rpc.Query";
import * as _269 from "./feerefunder/query.rpc.Query";
import * as _270 from "./interchainqueries/query.rpc.Query";
import * as _271 from "./interchaintxs/v1/query.rpc.Query";
import * as _272 from "./transfer/v1/query.rpc.Query";
import * as _273 from "./contractmanager/tx.rpc.msg";
import * as _274 from "./cron/tx.rpc.msg";
import * as _275 from "./dex/tx.rpc.msg";
import * as _276 from "./feeburner/tx.rpc.msg";
import * as _277 from "./feerefunder/tx.rpc.msg";
import * as _278 from "./interchainqueries/tx.rpc.msg";
import * as _279 from "./interchaintxs/v1/tx.rpc.msg";
import * as _280 from "./transfer/v1/tx.rpc.msg";
import * as _415 from "./lcd";
import * as _416 from "./rpc.query";
import * as _417 from "./rpc.tx";
export namespace neutron {
  export const contractmanager = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._241,
    ..._249,
    ..._257,
    ..._265,
    ..._273
  };
  export const cron = {
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._242,
    ..._250,
    ..._258,
    ..._266,
    ..._274
  };
  export const dex = {
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
    ..._23,
    ..._243,
    ..._251,
    ..._259,
    ..._267,
    ..._275
  };
  export const feeburner = {
    ..._24,
    ..._25,
    ..._26,
    ..._27,
    ..._28,
    ..._244,
    ..._252,
    ..._260,
    ..._268,
    ..._276
  };
  export const feerefunder = {
    ..._29,
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._245,
    ..._253,
    ..._261,
    ..._269,
    ..._277
  };
  export const interchainqueries = {
    ..._34,
    ..._35,
    ..._36,
    ..._37,
    ..._246,
    ..._254,
    ..._262,
    ..._270,
    ..._278
  };
  export namespace interchaintxs {
    export const v1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._247,
      ..._255,
      ..._263,
      ..._271,
      ..._279
    };
  }
  export const transfer = {
    ..._42,
    ..._43,
    ..._248,
    ..._256,
    ..._264,
    ..._272,
    ..._280
  };
  export const ClientFactory = {
    ..._415,
    ..._416,
    ..._417
  };
}