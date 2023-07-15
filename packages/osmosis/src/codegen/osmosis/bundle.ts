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
import * as _184 from "./concentrated-liquidity/pool-model/concentrated/tx.amino";
import * as _185 from "./concentrated-liquidity/tx.amino";
import * as _186 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _187 from "./gamm/pool-models/stableswap/tx.amino";
import * as _188 from "./gamm/v1beta1/tx.amino";
import * as _189 from "./incentives/tx.amino";
import * as _190 from "./lockup/tx.amino";
import * as _191 from "./poolmanager/v1beta1/tx.amino";
import * as _192 from "./protorev/v1beta1/tx.amino";
import * as _193 from "./superfluid/tx.amino";
import * as _194 from "./tokenfactory/v1beta1/tx.amino";
import * as _195 from "./valset-pref/v1beta1/tx.amino";
import * as _196 from "./concentrated-liquidity/pool-model/concentrated/tx.registry";
import * as _197 from "./concentrated-liquidity/tx.registry";
import * as _198 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _199 from "./gamm/pool-models/stableswap/tx.registry";
import * as _200 from "./gamm/v1beta1/tx.registry";
import * as _201 from "./incentives/tx.registry";
import * as _202 from "./lockup/tx.registry";
import * as _203 from "./poolmanager/v1beta1/tx.registry";
import * as _204 from "./protorev/v1beta1/tx.registry";
import * as _205 from "./superfluid/tx.registry";
import * as _206 from "./tokenfactory/v1beta1/tx.registry";
import * as _207 from "./valset-pref/v1beta1/tx.registry";
import * as _208 from "./concentrated-liquidity/query.rpc.Query";
import * as _209 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _210 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _211 from "./epochs/query.rpc.Query";
import * as _212 from "./gamm/v1beta1/query.rpc.Query";
import * as _213 from "./gamm/v2/query.rpc.Query";
import * as _214 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _215 from "./incentives/query.rpc.Query";
import * as _216 from "./lockup/query.rpc.Query";
import * as _217 from "./mint/v1beta1/query.rpc.Query";
import * as _218 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _219 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _220 from "./protorev/v1beta1/query.rpc.Query";
import * as _221 from "./superfluid/query.rpc.Query";
import * as _222 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _223 from "./twap/v1beta1/query.rpc.Query";
import * as _224 from "./txfees/v1beta1/query.rpc.Query";
import * as _225 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _226 from "./concentrated-liquidity/pool-model/concentrated/tx.rpc.msg";
import * as _227 from "./concentrated-liquidity/tx.rpc.msg";
import * as _228 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _229 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _230 from "./gamm/v1beta1/tx.rpc.msg";
import * as _231 from "./incentives/tx.rpc.msg";
import * as _232 from "./lockup/tx.rpc.msg";
import * as _233 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _234 from "./protorev/v1beta1/tx.rpc.msg";
import * as _235 from "./superfluid/tx.rpc.msg";
import * as _236 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _237 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _283 from "./rpc.query";
import * as _284 from "./rpc.tx";
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
          ..._184,
          ..._196,
          ..._226
        }
      }
    },
    v1beta1: {
      ..._185,
      ..._197,
      ..._208,
      ..._227
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
      ..._209
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._210
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._211
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
      ..._188,
      ..._200,
      ..._212,
      ..._230
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._26,
          ..._186,
          ..._198,
          ..._228
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._27,
          ..._28,
          ..._187,
          ..._199,
          ..._229
        };
      }
    }
    export const v2 = {
      ..._29,
      ..._213
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._214
    };
  }
  export const incentives = {
    ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._37,
    ..._189,
    ..._201,
    ..._215,
    ..._231
  };
  export const lockup = {
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._42,
    ..._190,
    ..._202,
    ..._216,
    ..._232
  };
  export namespace mint {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._217
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._218
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._191,
      ..._203,
      ..._219,
      ..._233
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
      ..._192,
      ..._204,
      ..._220,
      ..._234
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
    ..._193,
    ..._205,
    ..._221,
    ..._235
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._194,
      ..._206,
      ..._222,
      ..._236
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._223
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._224
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._195,
      ..._207,
      ..._225,
      ..._237
    };
  }
  export const ClientFactory = {
    ..._283,
    ..._284
  };
}