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
import * as _18 from "./community/v1beta1/proposal";
import * as _19 from "./community/v1beta1/query";
import * as _20 from "./community/v1beta1/tx";
import * as _21 from "./earn/v1beta1/genesis";
import * as _22 from "./earn/v1beta1/params";
import * as _23 from "./earn/v1beta1/proposal";
import * as _24 from "./earn/v1beta1/query";
import * as _25 from "./earn/v1beta1/strategy";
import * as _26 from "./earn/v1beta1/tx";
import * as _27 from "./earn/v1beta1/vault";
import * as _28 from "./evmutil/v1beta1/conversion_pair";
import * as _29 from "./evmutil/v1beta1/genesis";
import * as _30 from "./evmutil/v1beta1/query";
import * as _31 from "./evmutil/v1beta1/tx";
import * as _32 from "./hard/v1beta1/genesis";
import * as _33 from "./hard/v1beta1/hard";
import * as _34 from "./hard/v1beta1/query";
import * as _35 from "./hard/v1beta1/tx";
import * as _36 from "./incentive/v1beta1/apy";
import * as _37 from "./incentive/v1beta1/claims";
import * as _38 from "./incentive/v1beta1/genesis";
import * as _39 from "./incentive/v1beta1/params";
import * as _40 from "./incentive/v1beta1/query";
import * as _41 from "./incentive/v1beta1/tx";
import * as _42 from "./issuance/v1beta1/genesis";
import * as _43 from "./issuance/v1beta1/query";
import * as _44 from "./issuance/v1beta1/tx";
import * as _45 from "./kavadist/v1beta1/genesis";
import * as _46 from "./kavadist/v1beta1/params";
import * as _47 from "./kavadist/v1beta1/proposal";
import * as _48 from "./kavadist/v1beta1/query";
import * as _49 from "./liquid/v1beta1/query";
import * as _50 from "./liquid/v1beta1/tx";
import * as _51 from "./pricefeed/v1beta1/genesis";
import * as _52 from "./pricefeed/v1beta1/query";
import * as _53 from "./pricefeed/v1beta1/store";
import * as _54 from "./pricefeed/v1beta1/tx";
import * as _55 from "./router/v1beta1/tx";
import * as _56 from "./savings/v1beta1/genesis";
import * as _57 from "./savings/v1beta1/query";
import * as _58 from "./savings/v1beta1/store";
import * as _59 from "./savings/v1beta1/tx";
import * as _60 from "./swap/v1beta1/genesis";
import * as _61 from "./swap/v1beta1/query";
import * as _62 from "./swap/v1beta1/swap";
import * as _63 from "./swap/v1beta1/tx";
import * as _178 from "./auction/v1beta1/tx.amino";
import * as _179 from "./bep3/v1beta1/tx.amino";
import * as _180 from "./cdp/v1beta1/tx.amino";
import * as _181 from "./committee/v1beta1/tx.amino";
import * as _182 from "./community/v1beta1/tx.amino";
import * as _183 from "./earn/v1beta1/tx.amino";
import * as _184 from "./evmutil/v1beta1/tx.amino";
import * as _185 from "./hard/v1beta1/tx.amino";
import * as _186 from "./incentive/v1beta1/tx.amino";
import * as _187 from "./issuance/v1beta1/tx.amino";
import * as _188 from "./liquid/v1beta1/tx.amino";
import * as _189 from "./pricefeed/v1beta1/tx.amino";
import * as _190 from "./router/v1beta1/tx.amino";
import * as _191 from "./savings/v1beta1/tx.amino";
import * as _192 from "./swap/v1beta1/tx.amino";
import * as _193 from "./auction/v1beta1/tx.registry";
import * as _194 from "./bep3/v1beta1/tx.registry";
import * as _195 from "./cdp/v1beta1/tx.registry";
import * as _196 from "./committee/v1beta1/tx.registry";
import * as _197 from "./community/v1beta1/tx.registry";
import * as _198 from "./earn/v1beta1/tx.registry";
import * as _199 from "./evmutil/v1beta1/tx.registry";
import * as _200 from "./hard/v1beta1/tx.registry";
import * as _201 from "./incentive/v1beta1/tx.registry";
import * as _202 from "./issuance/v1beta1/tx.registry";
import * as _203 from "./liquid/v1beta1/tx.registry";
import * as _204 from "./pricefeed/v1beta1/tx.registry";
import * as _205 from "./router/v1beta1/tx.registry";
import * as _206 from "./savings/v1beta1/tx.registry";
import * as _207 from "./swap/v1beta1/tx.registry";
import * as _208 from "./auction/v1beta1/query.lcd";
import * as _209 from "./bep3/v1beta1/query.lcd";
import * as _210 from "./cdp/v1beta1/query.lcd";
import * as _211 from "./committee/v1beta1/query.lcd";
import * as _212 from "./community/v1beta1/query.lcd";
import * as _213 from "./earn/v1beta1/query.lcd";
import * as _214 from "./evmutil/v1beta1/query.lcd";
import * as _215 from "./hard/v1beta1/query.lcd";
import * as _216 from "./incentive/v1beta1/query.lcd";
import * as _217 from "./issuance/v1beta1/query.lcd";
import * as _218 from "./kavadist/v1beta1/query.lcd";
import * as _219 from "./liquid/v1beta1/query.lcd";
import * as _220 from "./pricefeed/v1beta1/query.lcd";
import * as _221 from "./savings/v1beta1/query.lcd";
import * as _222 from "./swap/v1beta1/query.lcd";
import * as _223 from "./auction/v1beta1/query.rpc.Query";
import * as _224 from "./bep3/v1beta1/query.rpc.Query";
import * as _225 from "./cdp/v1beta1/query.rpc.Query";
import * as _226 from "./committee/v1beta1/query.rpc.Query";
import * as _227 from "./community/v1beta1/query.rpc.Query";
import * as _228 from "./earn/v1beta1/query.rpc.Query";
import * as _229 from "./evmutil/v1beta1/query.rpc.Query";
import * as _230 from "./hard/v1beta1/query.rpc.Query";
import * as _231 from "./incentive/v1beta1/query.rpc.Query";
import * as _232 from "./issuance/v1beta1/query.rpc.Query";
import * as _233 from "./kavadist/v1beta1/query.rpc.Query";
import * as _234 from "./liquid/v1beta1/query.rpc.Query";
import * as _235 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _236 from "./savings/v1beta1/query.rpc.Query";
import * as _237 from "./swap/v1beta1/query.rpc.Query";
import * as _238 from "./auction/v1beta1/tx.rpc.msg";
import * as _239 from "./bep3/v1beta1/tx.rpc.msg";
import * as _240 from "./cdp/v1beta1/tx.rpc.msg";
import * as _241 from "./committee/v1beta1/tx.rpc.msg";
import * as _242 from "./community/v1beta1/tx.rpc.msg";
import * as _243 from "./earn/v1beta1/tx.rpc.msg";
import * as _244 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _245 from "./hard/v1beta1/tx.rpc.msg";
import * as _246 from "./incentive/v1beta1/tx.rpc.msg";
import * as _247 from "./issuance/v1beta1/tx.rpc.msg";
import * as _248 from "./liquid/v1beta1/tx.rpc.msg";
import * as _249 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _250 from "./router/v1beta1/tx.rpc.msg";
import * as _251 from "./savings/v1beta1/tx.rpc.msg";
import * as _252 from "./swap/v1beta1/tx.rpc.msg";
import * as _332 from "./lcd";
import * as _333 from "./rpc.query";
import * as _334 from "./rpc.tx";
export namespace kava {
  export namespace auction {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._178,
      ..._193,
      ..._208,
      ..._223,
      ..._238
    };
  }
  export namespace bep3 {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._179,
      ..._194,
      ..._209,
      ..._224,
      ..._239
    };
  }
  export namespace cdp {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._180,
      ..._195,
      ..._210,
      ..._225,
      ..._240
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
      ..._181,
      ..._196,
      ..._211,
      ..._226,
      ..._241
    };
  }
  export namespace community {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._182,
      ..._197,
      ..._212,
      ..._227,
      ..._242
    };
  }
  export namespace earn {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._183,
      ..._198,
      ..._213,
      ..._228,
      ..._243
    };
  }
  export namespace evmutil {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._184,
      ..._199,
      ..._214,
      ..._229,
      ..._244
    };
  }
  export namespace hard {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._185,
      ..._200,
      ..._215,
      ..._230,
      ..._245
    };
  }
  export namespace incentive {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._186,
      ..._201,
      ..._216,
      ..._231,
      ..._246
    };
  }
  export namespace issuance {
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._187,
      ..._202,
      ..._217,
      ..._232,
      ..._247
    };
  }
  export namespace kavadist {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._218,
      ..._233
    };
  }
  export namespace liquid {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._188,
      ..._203,
      ..._219,
      ..._234,
      ..._248
    };
  }
  export namespace pricefeed {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._189,
      ..._204,
      ..._220,
      ..._235,
      ..._249
    };
  }
  export namespace router {
    export const v1beta1 = {
      ..._55,
      ..._190,
      ..._205,
      ..._250
    };
  }
  export namespace savings {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._191,
      ..._206,
      ..._221,
      ..._236,
      ..._251
    };
  }
  export namespace swap {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._192,
      ..._207,
      ..._222,
      ..._237,
      ..._252
    };
  }
  export const ClientFactory = {
    ..._332,
    ..._333,
    ..._334
  };
}