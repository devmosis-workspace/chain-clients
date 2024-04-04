import * as _0 from "./staking/v1beta1/lsm_tx";
import * as _1 from "./staking/v1beta1/authz";
import * as _2 from "./staking/v1beta1/genesis";
import * as _3 from "./staking/v1beta1/query";
import * as _4 from "./staking/v1beta1/staking";
import * as _5 from "./staking/v1beta1/tx";
import * as _6 from "./staking/module/v1/module";
import * as _7 from "./app/runtime/v1alpha1/module";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/module/v1/module";
import * as _12 from "./auth/v1beta1/auth";
import * as _13 from "./auth/v1beta1/genesis";
import * as _14 from "./auth/v1beta1/query";
import * as _15 from "./auth/v1beta1/tx";
import * as _16 from "./authz/module/v1/module";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./autocli/v1/options";
import * as _23 from "./autocli/v1/query";
import * as _24 from "./bank/module/v1/module";
import * as _25 from "./bank/v1beta1/authz";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/kv/v1beta1/kv";
import * as _32 from "./base/node/v1beta1/query";
import * as _33 from "./base/query/v1beta1/pagination";
import * as _34 from "./base/reflection/v1beta1/reflection";
import * as _35 from "./base/reflection/v2alpha1/reflection";
import * as _36 from "./base/snapshots/v1beta1/snapshot";
import * as _37 from "./base/store/v1beta1/commit_info";
import * as _38 from "./base/store/v1beta1/listening";
import * as _39 from "./base/tendermint/v1beta1/query";
import * as _40 from "./base/tendermint/v1beta1/types";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./capability/module/v1/module";
import * as _43 from "./capability/v1beta1/capability";
import * as _44 from "./capability/v1beta1/genesis";
import * as _45 from "./consensus/module/v1/module";
import * as _46 from "./consensus/v1/query";
import * as _47 from "./consensus/v1/tx";
import * as _48 from "./crisis/module/v1/module";
import * as _49 from "./crisis/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/tx";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/module/v1/module";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/module/v1/module";
import * as _63 from "./evidence/v1beta1/evidence";
import * as _64 from "./evidence/v1beta1/genesis";
import * as _65 from "./evidence/v1beta1/query";
import * as _66 from "./evidence/v1beta1/tx";
import * as _67 from "./feegrant/module/v1/module";
import * as _68 from "./feegrant/v1beta1/feegrant";
import * as _69 from "./feegrant/v1beta1/genesis";
import * as _70 from "./feegrant/v1beta1/query";
import * as _71 from "./feegrant/v1beta1/tx";
import * as _72 from "./genutil/module/v1/module";
import * as _73 from "./genutil/v1beta1/genesis";
import * as _74 from "./gov/module/v1/module";
import * as _75 from "./gov/v1/genesis";
import * as _76 from "./gov/v1/gov";
import * as _77 from "./gov/v1/query";
import * as _78 from "./gov/v1/tx";
import * as _79 from "./gov/v1beta1/genesis";
import * as _80 from "./gov/v1beta1/gov";
import * as _81 from "./gov/v1beta1/query";
import * as _82 from "./gov/v1beta1/tx";
import * as _83 from "./group/module/v1/module";
import * as _84 from "./group/v1/events";
import * as _85 from "./group/v1/genesis";
import * as _86 from "./group/v1/query";
import * as _87 from "./group/v1/tx";
import * as _88 from "./group/v1/types";
import * as _89 from "./mint/module/v1/module";
import * as _90 from "./mint/v1beta1/genesis";
import * as _91 from "./mint/v1beta1/mint";
import * as _92 from "./mint/v1beta1/query";
import * as _93 from "./mint/v1beta1/tx";
import * as _94 from "./msg/v1/msg";
import * as _95 from "./nft/module/v1/module";
import * as _96 from "./nft/v1beta1/event";
import * as _97 from "./nft/v1beta1/genesis";
import * as _98 from "./nft/v1beta1/nft";
import * as _99 from "./nft/v1beta1/query";
import * as _100 from "./nft/v1beta1/tx";
import * as _101 from "./orm/module/v1alpha1/module";
import * as _102 from "./orm/query/v1alpha1/query";
import * as _103 from "./orm/v1/orm";
import * as _104 from "./orm/v1alpha1/schema";
import * as _105 from "./params/module/v1/module";
import * as _106 from "./params/v1beta1/params";
import * as _107 from "./params/v1beta1/query";
import * as _108 from "./query/v1/query";
import * as _109 from "./reflection/v1/reflection";
import * as _110 from "./slashing/module/v1/module";
import * as _111 from "./slashing/v1beta1/genesis";
import * as _112 from "./slashing/v1beta1/query";
import * as _113 from "./slashing/v1beta1/slashing";
import * as _114 from "./slashing/v1beta1/tx";
import * as _115 from "./tx/config/v1/config";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/module/v1/module";
import * as _120 from "./upgrade/v1beta1/query";
import * as _121 from "./upgrade/v1beta1/tx";
import * as _122 from "./upgrade/v1beta1/upgrade";
import * as _123 from "./vesting/module/v1/module";
import * as _124 from "./vesting/v1beta1/tx";
import * as _125 from "./vesting/v1beta1/vesting";
import * as _210 from "./auth/v1beta1/tx.amino";
import * as _211 from "./authz/v1beta1/tx.amino";
import * as _212 from "./bank/v1beta1/tx.amino";
import * as _213 from "./consensus/v1/tx.amino";
import * as _214 from "./crisis/v1beta1/tx.amino";
import * as _215 from "./distribution/v1beta1/tx.amino";
import * as _216 from "./evidence/v1beta1/tx.amino";
import * as _217 from "./feegrant/v1beta1/tx.amino";
import * as _218 from "./gov/v1/tx.amino";
import * as _219 from "./gov/v1beta1/tx.amino";
import * as _220 from "./group/v1/tx.amino";
import * as _221 from "./mint/v1beta1/tx.amino";
import * as _222 from "./nft/v1beta1/tx.amino";
import * as _223 from "./slashing/v1beta1/tx.amino";
import * as _224 from "./staking/v1beta1/tx.amino";
import * as _225 from "./upgrade/v1beta1/tx.amino";
import * as _226 from "./vesting/v1beta1/tx.amino";
import * as _227 from "./auth/v1beta1/tx.registry";
import * as _228 from "./authz/v1beta1/tx.registry";
import * as _229 from "./bank/v1beta1/tx.registry";
import * as _230 from "./consensus/v1/tx.registry";
import * as _231 from "./crisis/v1beta1/tx.registry";
import * as _232 from "./distribution/v1beta1/tx.registry";
import * as _233 from "./evidence/v1beta1/tx.registry";
import * as _234 from "./feegrant/v1beta1/tx.registry";
import * as _235 from "./gov/v1/tx.registry";
import * as _236 from "./gov/v1beta1/tx.registry";
import * as _237 from "./group/v1/tx.registry";
import * as _238 from "./mint/v1beta1/tx.registry";
import * as _239 from "./nft/v1beta1/tx.registry";
import * as _240 from "./slashing/v1beta1/tx.registry";
import * as _241 from "./staking/v1beta1/tx.registry";
import * as _242 from "./upgrade/v1beta1/tx.registry";
import * as _243 from "./vesting/v1beta1/tx.registry";
import * as _244 from "./auth/v1beta1/query.lcd";
import * as _245 from "./authz/v1beta1/query.lcd";
import * as _246 from "./bank/v1beta1/query.lcd";
import * as _247 from "./base/node/v1beta1/query.lcd";
import * as _248 from "./base/tendermint/v1beta1/query.lcd";
import * as _249 from "./consensus/v1/query.lcd";
import * as _250 from "./distribution/v1beta1/query.lcd";
import * as _251 from "./evidence/v1beta1/query.lcd";
import * as _252 from "./feegrant/v1beta1/query.lcd";
import * as _253 from "./gov/v1/query.lcd";
import * as _254 from "./gov/v1beta1/query.lcd";
import * as _255 from "./group/v1/query.lcd";
import * as _256 from "./mint/v1beta1/query.lcd";
import * as _257 from "./nft/v1beta1/query.lcd";
import * as _258 from "./params/v1beta1/query.lcd";
import * as _259 from "./slashing/v1beta1/query.lcd";
import * as _260 from "./staking/v1beta1/query.lcd";
import * as _261 from "./tx/v1beta1/service.lcd";
import * as _262 from "./upgrade/v1beta1/query.lcd";
import * as _263 from "./app/v1alpha1/query.rpc.Query";
import * as _264 from "./auth/v1beta1/query.rpc.Query";
import * as _265 from "./authz/v1beta1/query.rpc.Query";
import * as _266 from "./autocli/v1/query.rpc.Query";
import * as _267 from "./bank/v1beta1/query.rpc.Query";
import * as _268 from "./base/node/v1beta1/query.rpc.Service";
import * as _269 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _270 from "./consensus/v1/query.rpc.Query";
import * as _271 from "./distribution/v1beta1/query.rpc.Query";
import * as _272 from "./evidence/v1beta1/query.rpc.Query";
import * as _273 from "./feegrant/v1beta1/query.rpc.Query";
import * as _274 from "./gov/v1/query.rpc.Query";
import * as _275 from "./gov/v1beta1/query.rpc.Query";
import * as _276 from "./group/v1/query.rpc.Query";
import * as _277 from "./mint/v1beta1/query.rpc.Query";
import * as _278 from "./nft/v1beta1/query.rpc.Query";
import * as _279 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _280 from "./params/v1beta1/query.rpc.Query";
import * as _281 from "./slashing/v1beta1/query.rpc.Query";
import * as _282 from "./staking/v1beta1/query.rpc.Query";
import * as _283 from "./tx/v1beta1/service.rpc.Service";
import * as _284 from "./upgrade/v1beta1/query.rpc.Query";
import * as _285 from "./auth/v1beta1/tx.rpc.msg";
import * as _286 from "./authz/v1beta1/tx.rpc.msg";
import * as _287 from "./bank/v1beta1/tx.rpc.msg";
import * as _288 from "./consensus/v1/tx.rpc.msg";
import * as _289 from "./crisis/v1beta1/tx.rpc.msg";
import * as _290 from "./distribution/v1beta1/tx.rpc.msg";
import * as _291 from "./evidence/v1beta1/tx.rpc.msg";
import * as _292 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _293 from "./gov/v1/tx.rpc.msg";
import * as _294 from "./gov/v1beta1/tx.rpc.msg";
import * as _295 from "./group/v1/tx.rpc.msg";
import * as _296 from "./mint/v1beta1/tx.rpc.msg";
import * as _297 from "./nft/v1beta1/tx.rpc.msg";
import * as _298 from "./slashing/v1beta1/tx.rpc.msg";
import * as _299 from "./staking/v1beta1/tx.rpc.msg";
import * as _300 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _301 from "./vesting/v1beta1/tx.rpc.msg";
import * as _345 from "./lcd";
import * as _346 from "./rpc.query";
import * as _347 from "./rpc.tx";
export namespace cosmos {
  export namespace staking {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._224,
      ..._241,
      ..._260,
      ..._282,
      ..._299
    };
    export namespace module {
      export const v1 = {
        ..._6
      };
    }
  }
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._7
      };
    }
    export const v1alpha1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._263
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._11
      };
    }
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._210,
      ..._227,
      ..._244,
      ..._264,
      ..._285
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._16
      };
    }
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._211,
      ..._228,
      ..._245,
      ..._265,
      ..._286
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._22,
      ..._23,
      ..._266
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._24
      };
    }
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._212,
      ..._229,
      ..._246,
      ..._267,
      ..._287
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._32,
        ..._247,
        ..._268
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._34
      };
      export const v2alpha1 = {
        ..._35
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._37,
        ..._38
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._39,
        ..._40,
        ..._248,
        ..._269
      };
    }
    export const v1beta1 = {
      ..._41
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43,
      ..._44
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1 = {
      ..._46,
      ..._47,
      ..._213,
      ..._230,
      ..._249,
      ..._270,
      ..._288
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._214,
      ..._231,
      ..._289
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._51
    };
    export namespace hd {
      export const v1 = {
        ..._52
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._53
      };
    }
    export const multisig = {
      ..._54
    };
    export const secp256k1 = {
      ..._55
    };
    export const secp256r1 = {
      ..._56
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._215,
      ..._232,
      ..._250,
      ..._271,
      ..._290
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._216,
      ..._233,
      ..._251,
      ..._272,
      ..._291
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._217,
      ..._234,
      ..._252,
      ..._273,
      ..._292
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1beta1 = {
      ..._73
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._74
      };
    }
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._218,
      ..._235,
      ..._253,
      ..._274,
      ..._293
    };
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._219,
      ..._236,
      ..._254,
      ..._275,
      ..._294
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._220,
      ..._237,
      ..._255,
      ..._276,
      ..._295
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._89
      };
    }
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._221,
      ..._238,
      ..._256,
      ..._277,
      ..._296
    };
  }
  export namespace msg {
    export const v1 = {
      ..._94
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._222,
      ..._239,
      ..._257,
      ..._278,
      ..._297
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._101
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._102,
        ..._279
      };
    }
    export const v1 = {
      ..._103
    };
    export const v1alpha1 = {
      ..._104
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._258,
      ..._280
    };
  }
  export namespace query {
    export const v1 = {
      ..._108
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._109
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._223,
      ..._240,
      ..._259,
      ..._281,
      ..._298
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._115
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._261,
      ..._283
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._119
      };
    }
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._225,
      ..._242,
      ..._262,
      ..._284,
      ..._300
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._123
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._226,
      ..._243,
      ..._301
    };
  }
  export const ClientFactory = {
    ..._345,
    ..._346,
    ..._347
  };
}