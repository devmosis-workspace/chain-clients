import * as _0 from "./auction/v1beta1/auction";
import * as _1 from "./auction/v1beta1/genesis";
import * as _2 from "./auction/v1beta1/query";
import * as _3 from "./auction/v1beta1/tx";
import * as _4 from "./bep3/v1beta1/bep3";
import * as _5 from "./bep3/v1beta1/genesis";
import * as _6 from "./bep3/v1beta1/query";
import * as _7 from "./bep3/v1beta1/tx";
import * as _8 from "./cdp/v1beta1/cdp";
import * as _9 from "./cdp/v1beta1/genesis";
import * as _10 from "./cdp/v1beta1/query";
import * as _11 from "./cdp/v1beta1/tx";
import * as _12 from "./committee/v1beta1/committee";
import * as _13 from "./committee/v1beta1/genesis";
import * as _14 from "./committee/v1beta1/permissions";
import * as _15 from "./committee/v1beta1/proposal";
import * as _16 from "./committee/v1beta1/query";
import * as _17 from "./committee/v1beta1/tx";
import * as _18 from "./community/v1beta1/genesis";
import * as _19 from "./community/v1beta1/params";
import * as _20 from "./community/v1beta1/proposal";
import * as _21 from "./community/v1beta1/query";
import * as _22 from "./community/v1beta1/staking";
import * as _23 from "./community/v1beta1/tx";
import * as _24 from "./earn/v1beta1/genesis";
import * as _25 from "./earn/v1beta1/params";
import * as _26 from "./earn/v1beta1/proposal";
import * as _27 from "./earn/v1beta1/query";
import * as _28 from "./earn/v1beta1/strategy";
import * as _29 from "./earn/v1beta1/tx";
import * as _30 from "./earn/v1beta1/vault";
import * as _31 from "./evmutil/v1beta1/conversion_pair";
import * as _32 from "./evmutil/v1beta1/genesis";
import * as _33 from "./evmutil/v1beta1/query";
import * as _34 from "./evmutil/v1beta1/tx";
import * as _35 from "./hard/v1beta1/genesis";
import * as _36 from "./hard/v1beta1/hard";
import * as _37 from "./hard/v1beta1/query";
import * as _38 from "./hard/v1beta1/tx";
import * as _39 from "./incentive/v1beta1/apy";
import * as _40 from "./incentive/v1beta1/claims";
import * as _41 from "./incentive/v1beta1/genesis";
import * as _42 from "./incentive/v1beta1/params";
import * as _43 from "./incentive/v1beta1/query";
import * as _44 from "./incentive/v1beta1/tx";
import * as _45 from "./issuance/v1beta1/genesis";
import * as _46 from "./issuance/v1beta1/query";
import * as _47 from "./issuance/v1beta1/tx";
import * as _48 from "./kavadist/v1beta1/genesis";
import * as _49 from "./kavadist/v1beta1/params";
import * as _50 from "./kavadist/v1beta1/proposal";
import * as _51 from "./kavadist/v1beta1/query";
import * as _52 from "./liquid/v1beta1/query";
import * as _53 from "./liquid/v1beta1/tx";
import * as _54 from "./pricefeed/v1beta1/genesis";
import * as _55 from "./pricefeed/v1beta1/query";
import * as _56 from "./pricefeed/v1beta1/store";
import * as _57 from "./pricefeed/v1beta1/tx";
import * as _58 from "./router/v1beta1/tx";
import * as _59 from "./savings/v1beta1/genesis";
import * as _60 from "./savings/v1beta1/query";
import * as _61 from "./savings/v1beta1/store";
import * as _62 from "./savings/v1beta1/tx";
import * as _63 from "./swap/v1beta1/genesis";
import * as _64 from "./swap/v1beta1/query";
import * as _65 from "./swap/v1beta1/swap";
import * as _66 from "./swap/v1beta1/tx";
import * as _67 from "./validatorvesting/v1beta1/query";
import * as _213 from "./auction/v1beta1/tx.amino";
import * as _214 from "./bep3/v1beta1/tx.amino";
import * as _215 from "./cdp/v1beta1/tx.amino";
import * as _216 from "./committee/v1beta1/tx.amino";
import * as _217 from "./community/v1beta1/tx.amino";
import * as _218 from "./earn/v1beta1/tx.amino";
import * as _219 from "./evmutil/v1beta1/tx.amino";
import * as _220 from "./hard/v1beta1/tx.amino";
import * as _221 from "./incentive/v1beta1/tx.amino";
import * as _222 from "./issuance/v1beta1/tx.amino";
import * as _223 from "./liquid/v1beta1/tx.amino";
import * as _224 from "./pricefeed/v1beta1/tx.amino";
import * as _225 from "./router/v1beta1/tx.amino";
import * as _226 from "./savings/v1beta1/tx.amino";
import * as _227 from "./swap/v1beta1/tx.amino";
import * as _228 from "./auction/v1beta1/tx.registry";
import * as _229 from "./bep3/v1beta1/tx.registry";
import * as _230 from "./cdp/v1beta1/tx.registry";
import * as _231 from "./committee/v1beta1/tx.registry";
import * as _232 from "./community/v1beta1/tx.registry";
import * as _233 from "./earn/v1beta1/tx.registry";
import * as _234 from "./evmutil/v1beta1/tx.registry";
import * as _235 from "./hard/v1beta1/tx.registry";
import * as _236 from "./incentive/v1beta1/tx.registry";
import * as _237 from "./issuance/v1beta1/tx.registry";
import * as _238 from "./liquid/v1beta1/tx.registry";
import * as _239 from "./pricefeed/v1beta1/tx.registry";
import * as _240 from "./router/v1beta1/tx.registry";
import * as _241 from "./savings/v1beta1/tx.registry";
import * as _242 from "./swap/v1beta1/tx.registry";
import * as _243 from "./auction/v1beta1/query.lcd";
import * as _244 from "./bep3/v1beta1/query.lcd";
import * as _245 from "./cdp/v1beta1/query.lcd";
import * as _246 from "./committee/v1beta1/query.lcd";
import * as _247 from "./community/v1beta1/query.lcd";
import * as _248 from "./earn/v1beta1/query.lcd";
import * as _249 from "./evmutil/v1beta1/query.lcd";
import * as _250 from "./hard/v1beta1/query.lcd";
import * as _251 from "./incentive/v1beta1/query.lcd";
import * as _252 from "./issuance/v1beta1/query.lcd";
import * as _253 from "./kavadist/v1beta1/query.lcd";
import * as _254 from "./liquid/v1beta1/query.lcd";
import * as _255 from "./pricefeed/v1beta1/query.lcd";
import * as _256 from "./savings/v1beta1/query.lcd";
import * as _257 from "./swap/v1beta1/query.lcd";
import * as _258 from "./validatorvesting/v1beta1/query.lcd";
import * as _259 from "./auction/v1beta1/query.rpc.Query";
import * as _260 from "./bep3/v1beta1/query.rpc.Query";
import * as _261 from "./cdp/v1beta1/query.rpc.Query";
import * as _262 from "./committee/v1beta1/query.rpc.Query";
import * as _263 from "./community/v1beta1/query.rpc.Query";
import * as _264 from "./earn/v1beta1/query.rpc.Query";
import * as _265 from "./evmutil/v1beta1/query.rpc.Query";
import * as _266 from "./hard/v1beta1/query.rpc.Query";
import * as _267 from "./incentive/v1beta1/query.rpc.Query";
import * as _268 from "./issuance/v1beta1/query.rpc.Query";
import * as _269 from "./kavadist/v1beta1/query.rpc.Query";
import * as _270 from "./liquid/v1beta1/query.rpc.Query";
import * as _271 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _272 from "./savings/v1beta1/query.rpc.Query";
import * as _273 from "./swap/v1beta1/query.rpc.Query";
import * as _274 from "./validatorvesting/v1beta1/query.rpc.Query";
import * as _275 from "./auction/v1beta1/tx.rpc.msg";
import * as _276 from "./bep3/v1beta1/tx.rpc.msg";
import * as _277 from "./cdp/v1beta1/tx.rpc.msg";
import * as _278 from "./committee/v1beta1/tx.rpc.msg";
import * as _279 from "./community/v1beta1/tx.rpc.msg";
import * as _280 from "./earn/v1beta1/tx.rpc.msg";
import * as _281 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _282 from "./hard/v1beta1/tx.rpc.msg";
import * as _283 from "./incentive/v1beta1/tx.rpc.msg";
import * as _284 from "./issuance/v1beta1/tx.rpc.msg";
import * as _285 from "./liquid/v1beta1/tx.rpc.msg";
import * as _286 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _287 from "./router/v1beta1/tx.rpc.msg";
import * as _288 from "./savings/v1beta1/tx.rpc.msg";
import * as _289 from "./swap/v1beta1/tx.rpc.msg";
import * as _382 from "./lcd";
import * as _383 from "./rpc.query";
import * as _384 from "./rpc.tx";
export namespace kava {
  export namespace auction {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._213,
      ..._228,
      ..._243,
      ..._259,
      ..._275
    };
  }
  export namespace bep3 {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._214,
      ..._229,
      ..._244,
      ..._260,
      ..._276
    };
  }
  export namespace cdp {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._215,
      ..._230,
      ..._245,
      ..._261,
      ..._277
    };
  }
  export namespace committee {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._216,
      ..._231,
      ..._246,
      ..._262,
      ..._278
    };
  }
  export namespace community {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._217,
      ..._232,
      ..._247,
      ..._263,
      ..._279
    };
  }
  export namespace earn {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._218,
      ..._233,
      ..._248,
      ..._264,
      ..._280
    };
  }
  export namespace evmutil {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._219,
      ..._234,
      ..._249,
      ..._265,
      ..._281
    };
  }
  export namespace hard {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._220,
      ..._235,
      ..._250,
      ..._266,
      ..._282
    };
  }
  export namespace incentive {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._221,
      ..._236,
      ..._251,
      ..._267,
      ..._283
    };
  }
  export namespace issuance {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._222,
      ..._237,
      ..._252,
      ..._268,
      ..._284
    };
  }
  export namespace kavadist {
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._253,
      ..._269
    };
  }
  export namespace liquid {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._223,
      ..._238,
      ..._254,
      ..._270,
      ..._285
    };
  }
  export namespace pricefeed {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._224,
      ..._239,
      ..._255,
      ..._271,
      ..._286
    };
  }
  export namespace router {
    export const v1beta1 = {
      ..._58,
      ..._225,
      ..._240,
      ..._287
    };
  }
  export namespace savings {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._226,
      ..._241,
      ..._256,
      ..._272,
      ..._288
    };
  }
  export namespace swap {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._227,
      ..._242,
      ..._257,
      ..._273,
      ..._289
    };
  }
  export namespace validatorvesting {
    export const v1beta1 = {
      ..._67,
      ..._258,
      ..._274
    };
  }
  export const ClientFactory = {
    ..._382,
    ..._383,
    ..._384
  };
}