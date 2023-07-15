import * as _1 from "./accum/v1beta1/accum";
import * as _2 from "./concentrated-liquidity/params";
import * as _3 from "./cosmwasmpool/v1beta1/genesis";
import * as _4 from "./cosmwasmpool/v1beta1/gov";
import * as _5 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _6 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _7 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _8 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _9 from "./cosmwasmpool/v1beta1/model/pool";
import * as _10 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _11 from "./cosmwasmpool/v1beta1/model/tx";
import * as _12 from "./cosmwasmpool/v1beta1/params";
import * as _13 from "./cosmwasmpool/v1beta1/query";
import * as _14 from "./cosmwasmpool/v1beta1/tx";
import * as _15 from "./downtime-detector/v1beta1/downtime_duration";
import * as _16 from "./downtime-detector/v1beta1/genesis";
import * as _17 from "./downtime-detector/v1beta1/query";
import * as _18 from "./epochs/genesis";
import * as _19 from "./epochs/query";
import * as _20 from "./gamm/pool-models/balancer/balancerPool";
import * as _21 from "./gamm/v1beta1/genesis";
import * as _22 from "./gamm/v1beta1/gov";
import * as _23 from "./gamm/v1beta1/query";
import * as _24 from "./gamm/v1beta1/shared";
import * as _25 from "./gamm/v1beta1/tx";
import * as _26 from "./gamm/pool-models/balancer/tx/tx";
import * as _27 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _28 from "./gamm/pool-models/stableswap/tx";
import * as _29 from "./gamm/v2/query";
import * as _30 from "./ibc-rate-limit/v1beta1/genesis";
import * as _31 from "./ibc-rate-limit/v1beta1/params";
import * as _32 from "./ibc-rate-limit/v1beta1/query";
import * as _33 from "./incentives/gauge";
import * as _34 from "./incentives/genesis";
import * as _35 from "./incentives/params";
import * as _36 from "./incentives/query";
import * as _37 from "./incentives/tx";
import * as _38 from "./lockup/genesis";
import * as _39 from "./lockup/lock";
import * as _40 from "./lockup/params";
import * as _41 from "./lockup/query";
import * as _42 from "./lockup/tx";
import * as _43 from "./mint/v1beta1/genesis";
import * as _44 from "./mint/v1beta1/mint";
import * as _45 from "./mint/v1beta1/query";
import * as _46 from "./pool-incentives/v1beta1/genesis";
import * as _47 from "./pool-incentives/v1beta1/gov";
import * as _48 from "./pool-incentives/v1beta1/incentives";
import * as _49 from "./pool-incentives/v1beta1/query";
import * as _50 from "./pool-incentives/v1beta1/shared";
import * as _51 from "./poolmanager/v1beta1/genesis";
import * as _52 from "./poolmanager/v1beta1/module_route";
import * as _53 from "./poolmanager/v1beta1/query";
import * as _54 from "./poolmanager/v1beta1/swap_route";
import * as _55 from "./poolmanager/v1beta1/tx";
import * as _56 from "./protorev/v1beta1/genesis";
import * as _57 from "./protorev/v1beta1/gov";
import * as _58 from "./protorev/v1beta1/params";
import * as _59 from "./protorev/v1beta1/protorev";
import * as _60 from "./protorev/v1beta1/query";
import * as _61 from "./protorev/v1beta1/tx";
import * as _62 from "./sumtree/v1beta1/tree";
import * as _63 from "./superfluid/genesis";
import * as _64 from "./superfluid/params";
import * as _65 from "./superfluid/query";
import * as _66 from "./superfluid/superfluid";
import * as _67 from "./superfluid/tx";
import * as _68 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _69 from "./tokenfactory/v1beta1/genesis";
import * as _70 from "./tokenfactory/v1beta1/params";
import * as _71 from "./tokenfactory/v1beta1/query";
import * as _72 from "./tokenfactory/v1beta1/tx";
import * as _73 from "./twap/v1beta1/genesis";
import * as _74 from "./twap/v1beta1/query";
import * as _75 from "./twap/v1beta1/twap_record";
import * as _76 from "./txfees/v1beta1/feetoken";
import * as _77 from "./txfees/v1beta1/genesis";
import * as _78 from "./txfees/v1beta1/gov";
import * as _79 from "./txfees/v1beta1/query";
import * as _80 from "./valset-pref/v1beta1/query";
import * as _81 from "./valset-pref/v1beta1/state";
import * as _82 from "./valset-pref/v1beta1/tx";
import * as _226 from "./concentrated-liquidity/pool-model/concentrated/tx.amino";
import * as _227 from "./concentrated-liquidity/tx.amino";
import * as _228 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _229 from "./gamm/pool-models/stableswap/tx.amino";
import * as _230 from "./gamm/v1beta1/tx.amino";
import * as _231 from "./incentives/tx.amino";
import * as _232 from "./lockup/tx.amino";
import * as _233 from "./poolmanager/v1beta1/tx.amino";
import * as _234 from "./protorev/v1beta1/tx.amino";
import * as _235 from "./superfluid/tx.amino";
import * as _236 from "./tokenfactory/v1beta1/tx.amino";
import * as _237 from "./valset-pref/v1beta1/tx.amino";
import * as _238 from "./concentrated-liquidity/pool-model/concentrated/tx.registry";
import * as _239 from "./concentrated-liquidity/tx.registry";
import * as _240 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _241 from "./gamm/pool-models/stableswap/tx.registry";
import * as _242 from "./gamm/v1beta1/tx.registry";
import * as _243 from "./incentives/tx.registry";
import * as _244 from "./lockup/tx.registry";
import * as _245 from "./poolmanager/v1beta1/tx.registry";
import * as _246 from "./protorev/v1beta1/tx.registry";
import * as _247 from "./superfluid/tx.registry";
import * as _248 from "./tokenfactory/v1beta1/tx.registry";
import * as _249 from "./valset-pref/v1beta1/tx.registry";
import * as _250 from "./concentrated-liquidity/query.rpc.Query";
import * as _251 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _252 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _253 from "./epochs/query.rpc.Query";
import * as _254 from "./gamm/v1beta1/query.rpc.Query";
import * as _255 from "./gamm/v2/query.rpc.Query";
import * as _256 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _257 from "./incentives/query.rpc.Query";
import * as _258 from "./lockup/query.rpc.Query";
import * as _259 from "./mint/v1beta1/query.rpc.Query";
import * as _260 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _261 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _262 from "./protorev/v1beta1/query.rpc.Query";
import * as _263 from "./superfluid/query.rpc.Query";
import * as _264 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _265 from "./twap/v1beta1/query.rpc.Query";
import * as _266 from "./txfees/v1beta1/query.rpc.Query";
import * as _267 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _268 from "./concentrated-liquidity/pool-model/concentrated/tx.rpc.msg";
import * as _269 from "./concentrated-liquidity/tx.rpc.msg";
import * as _270 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _271 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _272 from "./gamm/v1beta1/tx.rpc.msg";
import * as _273 from "./incentives/tx.rpc.msg";
import * as _274 from "./lockup/tx.rpc.msg";
import * as _275 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _276 from "./protorev/v1beta1/tx.rpc.msg";
import * as _277 from "./superfluid/tx.rpc.msg";
import * as _278 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _279 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _353 from "./rpc.query";
import * as _354 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._1
    };
  }
  export const concentratedliquidity = {
    ..._2,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._226,
          ..._238,
          ..._268
        }
      }
    },
    v1beta1: {
      ..._227,
      ..._239,
      ..._250,
      ..._269
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
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
      ..._13,
      ..._14,
      ..._251
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._252
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._253
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._230,
      ..._242,
      ..._254,
      ..._272
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._26,
          ..._228,
          ..._240,
          ..._270
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._27,
          ..._28,
          ..._229,
          ..._241,
          ..._271
        };
      }
    }
    export const v2 = {
      ..._29,
      ..._255
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._256
    };
  }
  export const incentives = {
    ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._37,
    ..._231,
    ..._243,
    ..._257,
    ..._273
  };
  export const lockup = {
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._42,
    ..._232,
    ..._244,
    ..._258,
    ..._274
  };
  export namespace mint {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._259
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._260
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._233,
      ..._245,
      ..._261,
      ..._275
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._234,
      ..._246,
      ..._262,
      ..._276
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._62
    };
  }
  export const superfluid = {
    ..._63,
    ..._64,
    ..._65,
    ..._66,
    ..._67,
    ..._235,
    ..._247,
    ..._263,
    ..._277
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._236,
      ..._248,
      ..._264,
      ..._278
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._265
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._266
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._237,
      ..._249,
      ..._267,
      ..._279
    };
  }
  export const ClientFactory = {
    ..._353,
    ..._354
  };
}