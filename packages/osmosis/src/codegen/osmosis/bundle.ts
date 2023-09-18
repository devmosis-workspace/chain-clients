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
import * as _30 from "./ibc-hooks/genesis";
import * as _31 from "./ibc-hooks/params";
import * as _32 from "./ibc-hooks/tx";
import * as _33 from "./ibc-rate-limit/v1beta1/genesis";
import * as _34 from "./ibc-rate-limit/v1beta1/params";
import * as _35 from "./ibc-rate-limit/v1beta1/query";
import * as _36 from "./incentives/gauge";
import * as _37 from "./incentives/genesis";
import * as _38 from "./incentives/params";
import * as _39 from "./incentives/query";
import * as _40 from "./incentives/tx";
import * as _41 from "./lockup/genesis";
import * as _42 from "./lockup/lock";
import * as _43 from "./lockup/params";
import * as _44 from "./lockup/query";
import * as _45 from "./lockup/tx";
import * as _46 from "./mint/v1beta1/genesis";
import * as _47 from "./mint/v1beta1/mint";
import * as _48 from "./mint/v1beta1/query";
import * as _49 from "./pool-incentives/v1beta1/genesis";
import * as _50 from "./pool-incentives/v1beta1/gov";
import * as _51 from "./pool-incentives/v1beta1/incentives";
import * as _52 from "./pool-incentives/v1beta1/query";
import * as _53 from "./pool-incentives/v1beta1/shared";
import * as _54 from "./poolmanager/v1beta1/genesis";
import * as _55 from "./poolmanager/v1beta1/gov";
import * as _56 from "./poolmanager/v1beta1/module_route";
import * as _57 from "./poolmanager/v1beta1/query";
import * as _58 from "./poolmanager/v1beta1/swap_route";
import * as _59 from "./poolmanager/v1beta1/tx";
import * as _60 from "./protorev/v1beta1/genesis";
import * as _61 from "./protorev/v1beta1/gov";
import * as _62 from "./protorev/v1beta1/params";
import * as _63 from "./protorev/v1beta1/protorev";
import * as _64 from "./protorev/v1beta1/query";
import * as _65 from "./protorev/v1beta1/tx";
import * as _66 from "./sumtree/v1beta1/tree";
import * as _67 from "./superfluid/genesis";
import * as _68 from "./superfluid/params";
import * as _69 from "./superfluid/query";
import * as _70 from "./superfluid/superfluid";
import * as _71 from "./superfluid/tx";
import * as _72 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _73 from "./tokenfactory/v1beta1/genesis";
import * as _74 from "./tokenfactory/v1beta1/params";
import * as _75 from "./tokenfactory/v1beta1/query";
import * as _76 from "./tokenfactory/v1beta1/tx";
import * as _77 from "./twap/v1beta1/genesis";
import * as _78 from "./twap/v1beta1/query";
import * as _79 from "./twap/v1beta1/twap_record";
import * as _80 from "./txfees/v1beta1/feetoken";
import * as _81 from "./txfees/v1beta1/genesis";
import * as _82 from "./txfees/v1beta1/gov";
import * as _83 from "./txfees/v1beta1/query";
import * as _84 from "./valset-pref/v1beta1/query";
import * as _85 from "./valset-pref/v1beta1/state";
import * as _86 from "./valset-pref/v1beta1/tx";
import * as _189 from "./concentrated-liquidity/pool-model/concentrated/tx.amino";
import * as _190 from "./concentrated-liquidity/tx.amino";
import * as _191 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _192 from "./gamm/pool-models/stableswap/tx.amino";
import * as _193 from "./gamm/v1beta1/tx.amino";
import * as _194 from "./ibc-hooks/tx.amino";
import * as _195 from "./incentives/tx.amino";
import * as _196 from "./lockup/tx.amino";
import * as _197 from "./poolmanager/v1beta1/tx.amino";
import * as _198 from "./protorev/v1beta1/tx.amino";
import * as _199 from "./superfluid/tx.amino";
import * as _200 from "./tokenfactory/v1beta1/tx.amino";
import * as _201 from "./valset-pref/v1beta1/tx.amino";
import * as _202 from "./concentrated-liquidity/pool-model/concentrated/tx.registry";
import * as _203 from "./concentrated-liquidity/tx.registry";
import * as _204 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _205 from "./gamm/pool-models/stableswap/tx.registry";
import * as _206 from "./gamm/v1beta1/tx.registry";
import * as _207 from "./ibc-hooks/tx.registry";
import * as _208 from "./incentives/tx.registry";
import * as _209 from "./lockup/tx.registry";
import * as _210 from "./poolmanager/v1beta1/tx.registry";
import * as _211 from "./protorev/v1beta1/tx.registry";
import * as _212 from "./superfluid/tx.registry";
import * as _213 from "./tokenfactory/v1beta1/tx.registry";
import * as _214 from "./valset-pref/v1beta1/tx.registry";
import * as _215 from "./concentrated-liquidity/query.lcd";
import * as _216 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _217 from "./downtime-detector/v1beta1/query.lcd";
import * as _218 from "./epochs/query.lcd";
import * as _219 from "./gamm/v1beta1/query.lcd";
import * as _220 from "./gamm/v2/query.lcd";
import * as _221 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _222 from "./incentives/query.lcd";
import * as _223 from "./lockup/query.lcd";
import * as _224 from "./mint/v1beta1/query.lcd";
import * as _225 from "./pool-incentives/v1beta1/query.lcd";
import * as _226 from "./poolmanager/v1beta1/query.lcd";
import * as _227 from "./protorev/v1beta1/query.lcd";
import * as _228 from "./superfluid/query.lcd";
import * as _229 from "./tokenfactory/v1beta1/query.lcd";
import * as _230 from "./twap/v1beta1/query.lcd";
import * as _231 from "./txfees/v1beta1/query.lcd";
import * as _232 from "./valset-pref/v1beta1/query.lcd";
import * as _233 from "./concentrated-liquidity/query.rpc.Query";
import * as _234 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _235 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _236 from "./epochs/query.rpc.Query";
import * as _237 from "./gamm/v1beta1/query.rpc.Query";
import * as _238 from "./gamm/v2/query.rpc.Query";
import * as _239 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _240 from "./incentives/query.rpc.Query";
import * as _241 from "./lockup/query.rpc.Query";
import * as _242 from "./mint/v1beta1/query.rpc.Query";
import * as _243 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _244 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _245 from "./protorev/v1beta1/query.rpc.Query";
import * as _246 from "./superfluid/query.rpc.Query";
import * as _247 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _248 from "./twap/v1beta1/query.rpc.Query";
import * as _249 from "./txfees/v1beta1/query.rpc.Query";
import * as _250 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _251 from "./concentrated-liquidity/pool-model/concentrated/tx.rpc.msg";
import * as _252 from "./concentrated-liquidity/tx.rpc.msg";
import * as _253 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _254 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _255 from "./gamm/v1beta1/tx.rpc.msg";
import * as _256 from "./ibc-hooks/tx.rpc.msg";
import * as _257 from "./incentives/tx.rpc.msg";
import * as _258 from "./lockup/tx.rpc.msg";
import * as _259 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _260 from "./protorev/v1beta1/tx.rpc.msg";
import * as _261 from "./superfluid/tx.rpc.msg";
import * as _262 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _263 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _324 from "./lcd";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
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
          ..._189,
          ..._202,
          ..._251
        }
      }
    },
    v1beta1: {
      ..._190,
      ..._203,
      ..._215,
      ..._233,
      ..._252
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
      ..._216,
      ..._234
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._217,
      ..._235
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._218,
      ..._236
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
      ..._193,
      ..._206,
      ..._219,
      ..._237,
      ..._255
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._26,
          ..._191,
          ..._204,
          ..._253
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._27,
          ..._28,
          ..._192,
          ..._205,
          ..._254
        };
      }
    }
    export const v2 = {
      ..._29,
      ..._220,
      ..._238
    };
  }
  export const ibchooks = {
    ..._30,
    ..._31,
    ..._32,
    ..._194,
    ..._207,
    ..._256
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._221,
      ..._239
    };
  }
  export const incentives = {
    ..._36,
    ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._195,
    ..._208,
    ..._222,
    ..._240,
    ..._257
  };
  export const lockup = {
    ..._41,
    ..._42,
    ..._43,
    ..._44,
    ..._45,
    ..._196,
    ..._209,
    ..._223,
    ..._241,
    ..._258
  };
  export namespace mint {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._224,
      ..._242
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._225,
      ..._243
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._197,
      ..._210,
      ..._226,
      ..._244,
      ..._259
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._198,
      ..._211,
      ..._227,
      ..._245,
      ..._260
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._66
    };
  }
  export const superfluid = {
    ..._67,
    ..._68,
    ..._69,
    ..._70,
    ..._71,
    ..._199,
    ..._212,
    ..._228,
    ..._246,
    ..._261
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._200,
      ..._213,
      ..._229,
      ..._247,
      ..._262
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._230,
      ..._248
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._231,
      ..._249
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._201,
      ..._214,
      ..._232,
      ..._250,
      ..._263
    };
  }
  export const ClientFactory = {
    ..._324,
    ..._325,
    ..._326
  };
}