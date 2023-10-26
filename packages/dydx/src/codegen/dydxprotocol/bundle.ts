import * as _0 from "./assets/asset";
import * as _1 from "./assets/genesis";
import * as _2 from "./assets/query";
import * as _3 from "./assets/tx";
import * as _4 from "./blocktime/blocktime";
import * as _5 from "./blocktime/genesis";
import * as _6 from "./blocktime/params";
import * as _7 from "./blocktime/query";
import * as _8 from "./blocktime/tx";
import * as _9 from "./bridge/bridge_event_info";
import * as _10 from "./bridge/bridge_event";
import * as _11 from "./bridge/genesis";
import * as _12 from "./bridge/params";
import * as _13 from "./bridge/query";
import * as _14 from "./bridge/tx";
import * as _15 from "./clob/block_rate_limit_config";
import * as _16 from "./clob/clob_pair";
import * as _17 from "./clob/equity_tier_limit_config";
import * as _18 from "./clob/genesis";
import * as _19 from "./clob/liquidations_config";
import * as _20 from "./clob/liquidations";
import * as _21 from "./clob/matches";
import * as _22 from "./clob/mev";
import * as _23 from "./clob/operation";
import * as _24 from "./clob/order_removals";
import * as _25 from "./clob/order";
import * as _26 from "./clob/process_proposer_matches_events";
import * as _27 from "./clob/query";
import * as _28 from "./clob/tx";
import * as _29 from "./daemons/bridge/bridge";
import * as _30 from "./daemons/liquidation/liquidation";
import * as _31 from "./daemons/pricefeed/price_feed";
import * as _32 from "./delaymsg/block_message_ids";
import * as _33 from "./delaymsg/delayed_message";
import * as _34 from "./delaymsg/genesis";
import * as _35 from "./delaymsg/query";
import * as _36 from "./delaymsg/tx";
import * as _37 from "./epochs/epoch_info";
import * as _38 from "./epochs/genesis";
import * as _39 from "./epochs/query";
import * as _40 from "./feetiers/genesis";
import * as _41 from "./feetiers/params";
import * as _42 from "./feetiers/query";
import * as _43 from "./feetiers/tx";
import * as _44 from "./indexer/events/events";
import * as _45 from "./indexer/indexer_manager/event";
import * as _46 from "./indexer/off_chain_updates/off_chain_updates";
import * as _47 from "./indexer/protocol/v1/clob";
import * as _48 from "./indexer/protocol/v1/subaccount";
import * as _49 from "./indexer/redis/redis_order";
import * as _50 from "./indexer/shared/removal_reason";
import * as _51 from "./indexer/socks/messages";
import * as _52 from "./perpetuals/genesis";
import * as _53 from "./perpetuals/params";
import * as _54 from "./perpetuals/perpetual";
import * as _55 from "./perpetuals/query";
import * as _56 from "./perpetuals/tx";
import * as _57 from "./prices/genesis";
import * as _58 from "./prices/market_param";
import * as _59 from "./prices/market_price";
import * as _60 from "./prices/query";
import * as _61 from "./prices/tx";
import * as _62 from "./rewards/genesis";
import * as _63 from "./rewards/params";
import * as _64 from "./rewards/query";
import * as _65 from "./rewards/reward_share";
import * as _66 from "./rewards/tx";
import * as _67 from "./sending/genesis";
import * as _68 from "./sending/query";
import * as _69 from "./sending/transfer";
import * as _70 from "./sending/tx";
import * as _71 from "./stats/genesis";
import * as _72 from "./stats/params";
import * as _73 from "./stats/query";
import * as _74 from "./stats/stats";
import * as _75 from "./stats/tx";
import * as _76 from "./subaccounts/asset_position";
import * as _77 from "./subaccounts/genesis";
import * as _78 from "./subaccounts/perpetual_position";
import * as _79 from "./subaccounts/query";
import * as _80 from "./subaccounts/subaccount";
import * as _81 from "./vest/genesis";
import * as _82 from "./vest/query";
import * as _83 from "./vest/tx";
import * as _84 from "./vest/vest_entry";
import * as _230 from "./blocktime/tx.amino";
import * as _231 from "./bridge/tx.amino";
import * as _232 from "./clob/tx.amino";
import * as _233 from "./delaymsg/tx.amino";
import * as _234 from "./feetiers/tx.amino";
import * as _235 from "./perpetuals/tx.amino";
import * as _236 from "./prices/tx.amino";
import * as _237 from "./rewards/tx.amino";
import * as _238 from "./sending/tx.amino";
import * as _239 from "./stats/tx.amino";
import * as _240 from "./vest/tx.amino";
import * as _241 from "./blocktime/tx.registry";
import * as _242 from "./bridge/tx.registry";
import * as _243 from "./clob/tx.registry";
import * as _244 from "./delaymsg/tx.registry";
import * as _245 from "./feetiers/tx.registry";
import * as _246 from "./perpetuals/tx.registry";
import * as _247 from "./prices/tx.registry";
import * as _248 from "./rewards/tx.registry";
import * as _249 from "./sending/tx.registry";
import * as _250 from "./stats/tx.registry";
import * as _251 from "./vest/tx.registry";
import * as _252 from "./assets/query.lcd";
import * as _253 from "./blocktime/query.lcd";
import * as _254 from "./bridge/query.lcd";
import * as _255 from "./clob/query.lcd";
import * as _256 from "./delaymsg/query.lcd";
import * as _257 from "./epochs/query.lcd";
import * as _258 from "./feetiers/query.lcd";
import * as _259 from "./perpetuals/query.lcd";
import * as _260 from "./prices/query.lcd";
import * as _261 from "./rewards/query.lcd";
import * as _262 from "./stats/query.lcd";
import * as _263 from "./subaccounts/query.lcd";
import * as _264 from "./vest/query.lcd";
import * as _265 from "./assets/query.rpc.Query";
import * as _266 from "./blocktime/query.rpc.Query";
import * as _267 from "./bridge/query.rpc.Query";
import * as _268 from "./clob/query.rpc.Query";
import * as _269 from "./delaymsg/query.rpc.Query";
import * as _270 from "./epochs/query.rpc.Query";
import * as _271 from "./feetiers/query.rpc.Query";
import * as _272 from "./perpetuals/query.rpc.Query";
import * as _273 from "./prices/query.rpc.Query";
import * as _274 from "./rewards/query.rpc.Query";
import * as _275 from "./sending/query.rpc.Query";
import * as _276 from "./stats/query.rpc.Query";
import * as _277 from "./subaccounts/query.rpc.Query";
import * as _278 from "./vest/query.rpc.Query";
import * as _279 from "./blocktime/tx.rpc.msg";
import * as _280 from "./bridge/tx.rpc.msg";
import * as _281 from "./clob/tx.rpc.msg";
import * as _282 from "./delaymsg/tx.rpc.msg";
import * as _283 from "./feetiers/tx.rpc.msg";
import * as _284 from "./perpetuals/tx.rpc.msg";
import * as _285 from "./prices/tx.rpc.msg";
import * as _286 from "./rewards/tx.rpc.msg";
import * as _287 from "./sending/tx.rpc.msg";
import * as _288 from "./stats/tx.rpc.msg";
import * as _289 from "./vest/tx.rpc.msg";
import * as _382 from "./lcd";
import * as _383 from "./rpc.query";
import * as _384 from "./rpc.tx";
export namespace dydxprotocol {
  export const assets = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._252,
    ..._265
  };
  export const blocktime = {
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._230,
    ..._241,
    ..._253,
    ..._266,
    ..._279
  };
  export const bridge = {
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._231,
    ..._242,
    ..._254,
    ..._267,
    ..._280
  };
  export const clob = {
    ..._15,
    ..._16,
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
    ..._232,
    ..._243,
    ..._255,
    ..._268,
    ..._281
  };
  export namespace daemons {
    export const bridge = {
      ..._29
    };
    export const liquidation = {
      ..._30
    };
    export const pricefeed = {
      ..._31
    };
  }
  export const delaymsg = {
    ..._32,
    ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._233,
    ..._244,
    ..._256,
    ..._269,
    ..._282
  };
  export const epochs = {
    ..._37,
    ..._38,
    ..._39,
    ..._257,
    ..._270
  };
  export const feetiers = {
    ..._40,
    ..._41,
    ..._42,
    ..._43,
    ..._234,
    ..._245,
    ..._258,
    ..._271,
    ..._283
  };
  export namespace indexer {
    export const events = {
      ..._44
    };
    export const indexer_manager = {
      ..._45
    };
    export const off_chain_updates = {
      ..._46
    };
    export namespace protocol {
      export const v1 = {
        ..._47,
        ..._48
      };
    }
    export const redis = {
      ..._49
    };
    export const shared = {
      ..._50
    };
    export const socks = {
      ..._51
    };
  }
  export const perpetuals = {
    ..._52,
    ..._53,
    ..._54,
    ..._55,
    ..._56,
    ..._235,
    ..._246,
    ..._259,
    ..._272,
    ..._284
  };
  export const prices = {
    ..._57,
    ..._58,
    ..._59,
    ..._60,
    ..._61,
    ..._236,
    ..._247,
    ..._260,
    ..._273,
    ..._285
  };
  export const rewards = {
    ..._62,
    ..._63,
    ..._64,
    ..._65,
    ..._66,
    ..._237,
    ..._248,
    ..._261,
    ..._274,
    ..._286
  };
  export const sending = {
    ..._67,
    ..._68,
    ..._69,
    ..._70,
    ..._238,
    ..._249,
    ..._275,
    ..._287
  };
  export const stats = {
    ..._71,
    ..._72,
    ..._73,
    ..._74,
    ..._75,
    ..._239,
    ..._250,
    ..._262,
    ..._276,
    ..._288
  };
  export const subaccounts = {
    ..._76,
    ..._77,
    ..._78,
    ..._79,
    ..._80,
    ..._263,
    ..._277
  };
  export const vest = {
    ..._81,
    ..._82,
    ..._83,
    ..._84,
    ..._240,
    ..._251,
    ..._264,
    ..._278,
    ..._289
  };
  export const ClientFactory = {
    ..._382,
    ..._383,
    ..._384
  };
}