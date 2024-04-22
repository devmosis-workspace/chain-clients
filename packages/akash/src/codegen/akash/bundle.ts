import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./audit/v1beta3/audit";
import * as _5 from "./audit/v1beta3/genesis";
import * as _6 from "./audit/v1beta3/query";
import * as _7 from "./base/v1beta1/attribute";
import * as _8 from "./base/v1beta1/endpoint";
import * as _9 from "./base/v1beta1/resource";
import * as _10 from "./base/v1beta1/resourcevalue";
import * as _11 from "./base/v1beta2/attribute";
import * as _12 from "./base/v1beta2/endpoint";
import * as _13 from "./base/v1beta2/resource";
import * as _14 from "./base/v1beta2/resourceunits";
import * as _15 from "./base/v1beta2/resourcevalue";
import * as _16 from "./base/v1beta3/attribute";
import * as _17 from "./base/v1beta3/cpu";
import * as _18 from "./base/v1beta3/endpoint";
import * as _19 from "./base/v1beta3/gpu";
import * as _20 from "./base/v1beta3/memory";
import * as _21 from "./base/v1beta3/resources";
import * as _22 from "./base/v1beta3/resourcevalue";
import * as _23 from "./base/v1beta3/storage";
import * as _24 from "./cert/v1beta2/cert";
import * as _25 from "./cert/v1beta2/genesis";
import * as _26 from "./cert/v1beta2/query";
import * as _27 from "./cert/v1beta3/cert";
import * as _28 from "./cert/v1beta3/genesis";
import * as _29 from "./cert/v1beta3/query";
import * as _30 from "./deployment/v1beta1/authz";
import * as _31 from "./deployment/v1beta1/deployment";
import * as _32 from "./deployment/v1beta1/genesis";
import * as _33 from "./deployment/v1beta1/group";
import * as _34 from "./deployment/v1beta1/params";
import * as _35 from "./deployment/v1beta1/query";
import * as _36 from "./deployment/v1beta2/authz";
import * as _37 from "./deployment/v1beta2/deployment";
import * as _38 from "./deployment/v1beta2/deploymentmsg";
import * as _39 from "./deployment/v1beta2/genesis";
import * as _40 from "./deployment/v1beta2/group";
import * as _41 from "./deployment/v1beta2/groupid";
import * as _42 from "./deployment/v1beta2/groupmsg";
import * as _43 from "./deployment/v1beta2/groupspec";
import * as _44 from "./deployment/v1beta2/params";
import * as _45 from "./deployment/v1beta2/query";
import * as _46 from "./deployment/v1beta2/resource";
import * as _47 from "./deployment/v1beta2/service";
import * as _48 from "./deployment/v1beta3/authz";
import * as _49 from "./deployment/v1beta3/deployment";
import * as _50 from "./deployment/v1beta3/deploymentmsg";
import * as _51 from "./deployment/v1beta3/genesis";
import * as _52 from "./deployment/v1beta3/group";
import * as _53 from "./deployment/v1beta3/groupid";
import * as _54 from "./deployment/v1beta3/groupmsg";
import * as _55 from "./deployment/v1beta3/groupspec";
import * as _56 from "./deployment/v1beta3/params";
import * as _57 from "./deployment/v1beta3/query";
import * as _58 from "./deployment/v1beta3/resourceunit";
import * as _59 from "./deployment/v1beta3/service";
import * as _60 from "./discovery/v1/akash";
import * as _61 from "./discovery/v1/client_info";
import * as _62 from "./escrow/v1beta1/genesis";
import * as _63 from "./escrow/v1beta1/query";
import * as _64 from "./escrow/v1beta1/types";
import * as _65 from "./escrow/v1beta2/genesis";
import * as _66 from "./escrow/v1beta2/query";
import * as _67 from "./escrow/v1beta2/types";
import * as _68 from "./escrow/v1beta3/genesis";
import * as _69 from "./escrow/v1beta3/query";
import * as _70 from "./escrow/v1beta3/types";
import * as _71 from "./gov/v1beta3/genesis";
import * as _72 from "./gov/v1beta3/params";
import * as _73 from "./inflation/v1beta2/genesis";
import * as _74 from "./inflation/v1beta2/params";
import * as _75 from "./inflation/v1beta3/genesis";
import * as _76 from "./inflation/v1beta3/params";
import * as _77 from "./market/v1beta2/bid";
import * as _78 from "./market/v1beta2/genesis";
import * as _79 from "./market/v1beta2/lease";
import * as _80 from "./market/v1beta2/order";
import * as _81 from "./market/v1beta2/params";
import * as _82 from "./market/v1beta2/query";
import * as _83 from "./market/v1beta2/service";
import * as _84 from "./market/v1beta3/bid";
import * as _85 from "./market/v1beta3/genesis";
import * as _86 from "./market/v1beta3/lease";
import * as _87 from "./market/v1beta3/order";
import * as _88 from "./market/v1beta3/params";
import * as _89 from "./market/v1beta3/query";
import * as _90 from "./market/v1beta3/service";
import * as _91 from "./market/v1beta4/bid";
import * as _92 from "./market/v1beta4/genesis";
import * as _93 from "./market/v1beta4/lease";
import * as _94 from "./market/v1beta4/order";
import * as _95 from "./market/v1beta4/params";
import * as _96 from "./market/v1beta4/query";
import * as _97 from "./market/v1beta4/service";
import * as _98 from "./provider/v1beta1/provider";
import * as _99 from "./provider/v1beta2/genesis";
import * as _100 from "./provider/v1beta2/provider";
import * as _101 from "./provider/v1beta2/query";
import * as _102 from "./provider/v1beta3/genesis";
import * as _103 from "./provider/v1beta3/provider";
import * as _104 from "./provider/v1beta3/query";
import * as _105 from "./staking/v1beta3/genesis";
import * as _106 from "./staking/v1beta3/params";
import * as _107 from "./take/v1beta3/genesis";
import * as _108 from "./take/v1beta3/params";
import * as _109 from "./take/v1beta3/query";
import * as _212 from "./audit/v1beta1/audit.amino";
import * as _213 from "./audit/v1beta2/audit.amino";
import * as _214 from "./audit/v1beta3/audit.amino";
import * as _215 from "./cert/v1beta2/cert.amino";
import * as _216 from "./cert/v1beta3/cert.amino";
import * as _217 from "./deployment/v1beta1/deployment.amino";
import * as _218 from "./deployment/v1beta2/service.amino";
import * as _219 from "./deployment/v1beta3/service.amino";
import * as _220 from "./market/v1beta2/service.amino";
import * as _221 from "./market/v1beta3/service.amino";
import * as _222 from "./market/v1beta4/service.amino";
import * as _223 from "./provider/v1beta1/provider.amino";
import * as _224 from "./provider/v1beta2/provider.amino";
import * as _225 from "./provider/v1beta3/provider.amino";
import * as _226 from "./audit/v1beta1/audit.registry";
import * as _227 from "./audit/v1beta2/audit.registry";
import * as _228 from "./audit/v1beta3/audit.registry";
import * as _229 from "./cert/v1beta2/cert.registry";
import * as _230 from "./cert/v1beta3/cert.registry";
import * as _231 from "./deployment/v1beta1/deployment.registry";
import * as _232 from "./deployment/v1beta2/service.registry";
import * as _233 from "./deployment/v1beta3/service.registry";
import * as _234 from "./market/v1beta2/service.registry";
import * as _235 from "./market/v1beta3/service.registry";
import * as _236 from "./market/v1beta4/service.registry";
import * as _237 from "./provider/v1beta1/provider.registry";
import * as _238 from "./provider/v1beta2/provider.registry";
import * as _239 from "./provider/v1beta3/provider.registry";
import * as _240 from "./audit/v1beta2/query.lcd";
import * as _241 from "./audit/v1beta3/query.lcd";
import * as _242 from "./cert/v1beta2/query.lcd";
import * as _243 from "./cert/v1beta3/query.lcd";
import * as _244 from "./deployment/v1beta1/query.lcd";
import * as _245 from "./deployment/v1beta2/query.lcd";
import * as _246 from "./deployment/v1beta3/query.lcd";
import * as _247 from "./escrow/v1beta1/query.lcd";
import * as _248 from "./escrow/v1beta2/query.lcd";
import * as _249 from "./escrow/v1beta3/query.lcd";
import * as _250 from "./market/v1beta2/query.lcd";
import * as _251 from "./market/v1beta3/query.lcd";
import * as _252 from "./market/v1beta4/query.lcd";
import * as _253 from "./provider/v1beta2/query.lcd";
import * as _254 from "./provider/v1beta3/query.lcd";
import * as _255 from "./audit/v1beta2/query.rpc.Query";
import * as _256 from "./audit/v1beta3/query.rpc.Query";
import * as _257 from "./cert/v1beta2/query.rpc.Query";
import * as _258 from "./cert/v1beta3/query.rpc.Query";
import * as _259 from "./deployment/v1beta1/query.rpc.Query";
import * as _260 from "./deployment/v1beta2/query.rpc.Query";
import * as _261 from "./deployment/v1beta3/query.rpc.Query";
import * as _262 from "./escrow/v1beta1/query.rpc.Query";
import * as _263 from "./escrow/v1beta2/query.rpc.Query";
import * as _264 from "./escrow/v1beta3/query.rpc.Query";
import * as _265 from "./market/v1beta2/query.rpc.Query";
import * as _266 from "./market/v1beta3/query.rpc.Query";
import * as _267 from "./market/v1beta4/query.rpc.Query";
import * as _268 from "./provider/v1beta2/query.rpc.Query";
import * as _269 from "./provider/v1beta3/query.rpc.Query";
import * as _270 from "./take/v1beta3/query.rpc.Query";
import * as _271 from "./audit/v1beta1/audit.rpc.msg";
import * as _272 from "./audit/v1beta2/audit.rpc.msg";
import * as _273 from "./audit/v1beta3/audit.rpc.msg";
import * as _274 from "./cert/v1beta2/cert.rpc.msg";
import * as _275 from "./cert/v1beta3/cert.rpc.msg";
import * as _276 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _277 from "./deployment/v1beta2/service.rpc.msg";
import * as _278 from "./deployment/v1beta3/service.rpc.msg";
import * as _279 from "./market/v1beta2/service.rpc.msg";
import * as _280 from "./market/v1beta3/service.rpc.msg";
import * as _281 from "./market/v1beta4/service.rpc.msg";
import * as _282 from "./provider/v1beta1/provider.rpc.msg";
import * as _283 from "./provider/v1beta2/provider.rpc.msg";
import * as _284 from "./provider/v1beta3/provider.rpc.msg";
import * as _345 from "./lcd";
import * as _346 from "./rpc.query";
import * as _347 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1beta1 = {
      ..._0,
      ..._212,
      ..._226,
      ..._271
    };
    export const v1beta2 = {
      ..._1,
      ..._2,
      ..._3,
      ..._213,
      ..._227,
      ..._240,
      ..._255,
      ..._272
    };
    export const v1beta3 = {
      ..._4,
      ..._5,
      ..._6,
      ..._214,
      ..._228,
      ..._241,
      ..._256,
      ..._273
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10
    };
    export const v1beta2 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15
    };
    export const v1beta3 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23
    };
  }
  export namespace cert {
    export const v1beta2 = {
      ..._24,
      ..._25,
      ..._26,
      ..._215,
      ..._229,
      ..._242,
      ..._257,
      ..._274
    };
    export const v1beta3 = {
      ..._27,
      ..._28,
      ..._29,
      ..._216,
      ..._230,
      ..._243,
      ..._258,
      ..._275
    };
  }
  export namespace deployment {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._217,
      ..._231,
      ..._244,
      ..._259,
      ..._276
    };
    export const v1beta2 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._218,
      ..._232,
      ..._245,
      ..._260,
      ..._277
    };
    export const v1beta3 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._219,
      ..._233,
      ..._246,
      ..._261,
      ..._278
    };
  }
  export namespace discovery {
    export const v1 = {
      ..._60,
      ..._61
    };
  }
  export namespace escrow {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._247,
      ..._262
    };
    export const v1beta2 = {
      ..._65,
      ..._66,
      ..._67,
      ..._248,
      ..._263
    };
    export const v1beta3 = {
      ..._68,
      ..._69,
      ..._70,
      ..._249,
      ..._264
    };
  }
  export namespace gov {
    export const v1beta3 = {
      ..._71,
      ..._72
    };
  }
  export namespace inflation {
    export const v1beta2 = {
      ..._73,
      ..._74
    };
    export const v1beta3 = {
      ..._75,
      ..._76
    };
  }
  export namespace market {
    export const v1beta2 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._220,
      ..._234,
      ..._250,
      ..._265,
      ..._279
    };
    export const v1beta3 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._221,
      ..._235,
      ..._251,
      ..._266,
      ..._280
    };
    export const v1beta4 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._222,
      ..._236,
      ..._252,
      ..._267,
      ..._281
    };
  }
  export namespace provider {
    export const v1beta1 = {
      ..._98,
      ..._223,
      ..._237,
      ..._282
    };
    export const v1beta2 = {
      ..._99,
      ..._100,
      ..._101,
      ..._224,
      ..._238,
      ..._253,
      ..._268,
      ..._283
    };
    export const v1beta3 = {
      ..._102,
      ..._103,
      ..._104,
      ..._225,
      ..._239,
      ..._254,
      ..._269,
      ..._284
    };
  }
  export namespace staking {
    export const v1beta3 = {
      ..._105,
      ..._106
    };
  }
  export namespace take {
    export const v1beta3 = {
      ..._107,
      ..._108,
      ..._109,
      ..._270
    };
  }
  export const ClientFactory = {
    ..._345,
    ..._346,
    ..._347
  };
}