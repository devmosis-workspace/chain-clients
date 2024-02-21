import * as _0 from "./accum/v1beta1/accum";
import * as _1 from "./concentratedliquidity/params";
import * as _2 from "./cosmwasmpool/v1beta1/genesis";
import * as _3 from "./cosmwasmpool/v1beta1/gov";
import * as _4 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _5 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _6 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _7 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _8 from "./cosmwasmpool/v1beta1/model/pool";
import * as _9 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _10 from "./cosmwasmpool/v1beta1/model/tx";
import * as _11 from "./cosmwasmpool/v1beta1/params";
import * as _12 from "./cosmwasmpool/v1beta1/query";
import * as _13 from "./cosmwasmpool/v1beta1/tx";
import * as _14 from "./downtimedetector/v1beta1/downtime_duration";
import * as _15 from "./downtimedetector/v1beta1/genesis";
import * as _16 from "./downtimedetector/v1beta1/query";
import * as _17 from "./epochs/v1beta1/genesis";
import * as _18 from "./epochs/v1beta1/query";
import * as _19 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _20 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _21 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _22 from "./gamm/v1beta1/balancerPool";
import * as _23 from "./gamm/v1beta1/genesis";
import * as _24 from "./gamm/v1beta1/gov";
import * as _25 from "./gamm/v1beta1/query";
import * as _26 from "./gamm/v1beta1/shared";
import * as _27 from "./gamm/v1beta1/tx";
import * as _28 from "./gamm/v2/query";
import * as _29 from "./ibchooks/genesis";
import * as _30 from "./ibchooks/params";
import * as _31 from "./ibchooks/tx";
import * as _32 from "./ibcratelimit/v1beta1/genesis";
import * as _33 from "./ibcratelimit/v1beta1/params";
import * as _34 from "./ibcratelimit/v1beta1/query";
import * as _35 from "./incentives/gauge";
import * as _36 from "./incentives/genesis";
import * as _37 from "./incentives/gov";
import * as _38 from "./incentives/group";
import * as _39 from "./incentives/params";
import * as _40 from "./incentives/query";
import * as _41 from "./incentives/tx";
import * as _42 from "./lockup/genesis";
import * as _43 from "./lockup/lock";
import * as _44 from "./lockup/params";
import * as _45 from "./lockup/query";
import * as _46 from "./lockup/tx";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./poolincentives/v1beta1/genesis";
import * as _51 from "./poolincentives/v1beta1/gov";
import * as _52 from "./poolincentives/v1beta1/incentives";
import * as _53 from "./poolincentives/v1beta1/query";
import * as _54 from "./poolincentives/v1beta1/shared";
import * as _55 from "./poolmanager/v1beta1/genesis";
import * as _56 from "./poolmanager/v1beta1/gov";
import * as _57 from "./poolmanager/v1beta1/module_route";
import * as _58 from "./poolmanager/v1beta1/query";
import * as _59 from "./poolmanager/v1beta1/swap_route";
import * as _60 from "./poolmanager/v1beta1/tracked_volume";
import * as _61 from "./poolmanager/v1beta1/tx";
import * as _62 from "./poolmanager/v2/query";
import * as _63 from "./protorev/v1beta1/genesis";
import * as _64 from "./protorev/v1beta1/gov";
import * as _65 from "./protorev/v1beta1/params";
import * as _66 from "./protorev/v1beta1/protorev";
import * as _67 from "./protorev/v1beta1/query";
import * as _68 from "./protorev/v1beta1/tx";
import * as _69 from "./store/v1beta1/tree";
import * as _70 from "./superfluid/genesis";
import * as _71 from "./superfluid/params";
import * as _72 from "./superfluid/query";
import * as _73 from "./superfluid/superfluid";
import * as _74 from "./superfluid/tx";
import * as _75 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _76 from "./tokenfactory/v1beta1/genesis";
import * as _77 from "./tokenfactory/v1beta1/params";
import * as _78 from "./tokenfactory/v1beta1/query";
import * as _79 from "./tokenfactory/v1beta1/tx";
import * as _80 from "./twap/v1beta1/genesis";
import * as _81 from "./twap/v1beta1/query";
import * as _82 from "./twap/v1beta1/twap_record";
import * as _83 from "./txfees/v1beta1/feetoken";
import * as _84 from "./txfees/v1beta1/genesis";
import * as _85 from "./txfees/v1beta1/gov";
import * as _86 from "./txfees/v1beta1/query";
import * as _87 from "./valsetpref/v1beta1/query";
import * as _88 from "./valsetpref/v1beta1/state";
import * as _89 from "./valsetpref/v1beta1/tx";
import * as _255 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _256 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _257 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _258 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _259 from "./gamm/v1beta1/tx.amino";
import * as _260 from "./ibchooks/tx.amino";
import * as _261 from "./incentives/tx.amino";
import * as _262 from "./lockup/tx.amino";
import * as _263 from "./poolmanager/v1beta1/tx.amino";
import * as _264 from "./protorev/v1beta1/tx.amino";
import * as _265 from "./superfluid/tx.amino";
import * as _266 from "./tokenfactory/v1beta1/tx.amino";
import * as _267 from "./valsetpref/v1beta1/tx.amino";
import * as _268 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _269 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _270 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _271 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _272 from "./gamm/v1beta1/tx.registry";
import * as _273 from "./ibchooks/tx.registry";
import * as _274 from "./incentives/tx.registry";
import * as _275 from "./lockup/tx.registry";
import * as _276 from "./poolmanager/v1beta1/tx.registry";
import * as _277 from "./protorev/v1beta1/tx.registry";
import * as _278 from "./superfluid/tx.registry";
import * as _279 from "./tokenfactory/v1beta1/tx.registry";
import * as _280 from "./valsetpref/v1beta1/tx.registry";
import * as _281 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _282 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _283 from "./downtimedetector/v1beta1/query.lcd";
import * as _284 from "./epochs/v1beta1/query.lcd";
import * as _285 from "./gamm/v1beta1/query.lcd";
import * as _286 from "./gamm/v2/query.lcd";
import * as _287 from "./ibcratelimit/v1beta1/query.lcd";
import * as _288 from "./incentives/query.lcd";
import * as _289 from "./lockup/query.lcd";
import * as _290 from "./mint/v1beta1/query.lcd";
import * as _291 from "./poolincentives/v1beta1/query.lcd";
import * as _292 from "./poolmanager/v1beta1/query.lcd";
import * as _293 from "./poolmanager/v2/query.lcd";
import * as _294 from "./protorev/v1beta1/query.lcd";
import * as _295 from "./superfluid/query.lcd";
import * as _296 from "./tokenfactory/v1beta1/query.lcd";
import * as _297 from "./twap/v1beta1/query.lcd";
import * as _298 from "./txfees/v1beta1/query.lcd";
import * as _299 from "./valsetpref/v1beta1/query.lcd";
import * as _300 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _301 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _302 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _303 from "./epochs/v1beta1/query.rpc.Query";
import * as _304 from "./gamm/v1beta1/query.rpc.Query";
import * as _305 from "./gamm/v2/query.rpc.Query";
import * as _306 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _307 from "./incentives/query.rpc.Query";
import * as _308 from "./lockup/query.rpc.Query";
import * as _309 from "./mint/v1beta1/query.rpc.Query";
import * as _310 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _311 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _312 from "./poolmanager/v2/query.rpc.Query";
import * as _313 from "./protorev/v1beta1/query.rpc.Query";
import * as _314 from "./superfluid/query.rpc.Query";
import * as _315 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _316 from "./twap/v1beta1/query.rpc.Query";
import * as _317 from "./txfees/v1beta1/query.rpc.Query";
import * as _318 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _319 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _320 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _321 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _322 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _323 from "./gamm/v1beta1/tx.rpc.msg";
import * as _324 from "./ibchooks/tx.rpc.msg";
import * as _325 from "./incentives/tx.rpc.msg";
import * as _326 from "./lockup/tx.rpc.msg";
import * as _327 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _328 from "./protorev/v1beta1/tx.rpc.msg";
import * as _329 from "./superfluid/tx.rpc.msg";
import * as _330 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _331 from "./valsetpref/v1beta1/tx.rpc.msg";
import * as _429 from "./lcd";
import * as _430 from "./rpc.query";
import * as _431 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._0
    };
  }
  export const concentratedliquidity = {
    ..._1,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._255,
          ..._268,
          ..._319
        }
      }
    },
    v1beta1: {
      ..._256,
      ..._269,
      ..._281,
      ..._300,
      ..._320
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
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
      ..._13,
      ..._282,
      ..._301
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._283,
      ..._302
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._284,
      ..._303
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._19,
          ..._257,
          ..._270,
          ..._321
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._20,
          ..._21,
          ..._258,
          ..._271,
          ..._322
        };
      }
    }
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._259,
      ..._272,
      ..._285,
      ..._304,
      ..._323
    };
    export const v2 = {
      ..._28,
      ..._286,
      ..._305
    };
  }
  export const ibchooks = {
    ..._29,
    ..._30,
    ..._31,
    ..._260,
    ..._273,
    ..._324
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._287,
      ..._306
    };
  }
  export const incentives = {
    ..._35,
    ..._36,
    ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._261,
    ..._274,
    ..._288,
    ..._307,
    ..._325
  };
  export const lockup = {
    ..._42,
    ..._43,
    ..._44,
    ..._45,
    ..._46,
    ..._262,
    ..._275,
    ..._289,
    ..._308,
    ..._326
  };
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._290,
      ..._309
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._291,
      ..._310
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._263,
      ..._276,
      ..._292,
      ..._311,
      ..._327
    };
    export const v2 = {
      ..._62,
      ..._293,
      ..._312
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._264,
      ..._277,
      ..._294,
      ..._313,
      ..._328
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._69
    };
  }
  export const superfluid = {
    ..._70,
    ..._71,
    ..._72,
    ..._73,
    ..._74,
    ..._265,
    ..._278,
    ..._295,
    ..._314,
    ..._329
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._266,
      ..._279,
      ..._296,
      ..._315,
      ..._330
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._297,
      ..._316
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._298,
      ..._317
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._267,
      ..._280,
      ..._299,
      ..._318,
      ..._331
    };
  }
  export const ClientFactory = {
    ..._429,
    ..._430,
    ..._431
  };
}