import * as _10 from "./app/runtime/v1alpha1/module";
import * as _11 from "./app/v1alpha1/config";
import * as _12 from "./app/v1alpha1/module";
import * as _13 from "./app/v1alpha1/query";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./auth/v1beta1/tx";
import * as _19 from "./authz/module/v1/module";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./autocli/v1/options";
import * as _26 from "./autocli/v1/query";
import * as _27 from "./bank/module/v1/module";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/kv/v1beta1/kv";
import * as _35 from "./base/node/v1beta1/query";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./base/tendermint/v1beta1/types";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/module/v1/module";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./consensus/module/v1/module";
import * as _49 from "./consensus/v1/query";
import * as _50 from "./consensus/v1/tx";
import * as _51 from "./crisis/module/v1/module";
import * as _52 from "./crisis/v1beta1/genesis";
import * as _53 from "./crisis/v1beta1/tx";
import * as _54 from "./crypto/ed25519/keys";
import * as _55 from "./crypto/hd/v1/hd";
import * as _56 from "./crypto/keyring/v1/record";
import * as _57 from "./crypto/multisig/keys";
import * as _58 from "./crypto/secp256k1/keys";
import * as _59 from "./crypto/secp256r1/keys";
import * as _60 from "./distribution/module/v1/module";
import * as _61 from "./distribution/v1beta1/distribution";
import * as _62 from "./distribution/v1beta1/genesis";
import * as _63 from "./distribution/v1beta1/query";
import * as _64 from "./distribution/v1beta1/tx";
import * as _65 from "./evidence/module/v1/module";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/module/v1/module";
import * as _71 from "./feegrant/v1beta1/feegrant";
import * as _72 from "./feegrant/v1beta1/genesis";
import * as _73 from "./feegrant/v1beta1/query";
import * as _74 from "./feegrant/v1beta1/tx";
import * as _75 from "./genutil/module/v1/module";
import * as _76 from "./genutil/v1beta1/genesis";
import * as _77 from "./gov/module/v1/module";
import * as _78 from "./gov/v1/genesis";
import * as _79 from "./gov/v1/gov";
import * as _80 from "./gov/v1/query";
import * as _81 from "./gov/v1/tx";
import * as _82 from "./gov/v1beta1/genesis";
import * as _83 from "./gov/v1beta1/gov";
import * as _84 from "./gov/v1beta1/query";
import * as _85 from "./gov/v1beta1/tx";
import * as _86 from "./group/module/v1/module";
import * as _87 from "./group/v1/events";
import * as _88 from "./group/v1/genesis";
import * as _89 from "./group/v1/query";
import * as _90 from "./group/v1/tx";
import * as _91 from "./group/v1/types";
import * as _92 from "./mint/module/v1/module";
import * as _93 from "./mint/v1beta1/genesis";
import * as _94 from "./mint/v1beta1/mint";
import * as _95 from "./mint/v1beta1/query";
import * as _96 from "./mint/v1beta1/tx";
import * as _97 from "./msg/v1/msg";
import * as _98 from "./nft/module/v1/module";
import * as _99 from "./nft/v1beta1/event";
import * as _100 from "./nft/v1beta1/genesis";
import * as _101 from "./nft/v1beta1/nft";
import * as _102 from "./nft/v1beta1/query";
import * as _103 from "./nft/v1beta1/tx";
import * as _104 from "./orm/module/v1alpha1/module";
import * as _105 from "./orm/query/v1alpha1/query";
import * as _106 from "./orm/v1/orm";
import * as _107 from "./orm/v1alpha1/schema";
import * as _108 from "./params/module/v1/module";
import * as _109 from "./params/v1beta1/params";
import * as _110 from "./params/v1beta1/query";
import * as _111 from "./query/v1/query";
import * as _112 from "./reflection/v1/reflection";
import * as _113 from "./slashing/module/v1/module";
import * as _114 from "./slashing/v1beta1/genesis";
import * as _115 from "./slashing/v1beta1/query";
import * as _116 from "./slashing/v1beta1/slashing";
import * as _117 from "./slashing/v1beta1/tx";
import * as _118 from "./staking/module/v1/module";
import * as _119 from "./staking/v1beta1/authz";
import * as _120 from "./staking/v1beta1/genesis";
import * as _121 from "./staking/v1beta1/query";
import * as _122 from "./staking/v1beta1/staking";
import * as _123 from "./staking/v1beta1/tx";
import * as _124 from "./tx/config/v1/config";
import * as _125 from "./tx/signing/v1beta1/signing";
import * as _126 from "./tx/v1beta1/service";
import * as _127 from "./tx/v1beta1/tx";
import * as _128 from "./upgrade/module/v1/module";
import * as _129 from "./upgrade/v1beta1/query";
import * as _130 from "./upgrade/v1beta1/tx";
import * as _131 from "./upgrade/v1beta1/upgrade";
import * as _132 from "./vesting/module/v1/module";
import * as _133 from "./vesting/v1beta1/tx";
import * as _134 from "./vesting/v1beta1/vesting";
import * as _164 from "./auth/v1beta1/tx.amino";
import * as _165 from "./authz/v1beta1/tx.amino";
import * as _166 from "./bank/v1beta1/tx.amino";
import * as _167 from "./consensus/v1/tx.amino";
import * as _168 from "./crisis/v1beta1/tx.amino";
import * as _169 from "./distribution/v1beta1/tx.amino";
import * as _170 from "./evidence/v1beta1/tx.amino";
import * as _171 from "./feegrant/v1beta1/tx.amino";
import * as _172 from "./gov/v1/tx.amino";
import * as _173 from "./gov/v1beta1/tx.amino";
import * as _174 from "./group/v1/tx.amino";
import * as _175 from "./mint/v1beta1/tx.amino";
import * as _176 from "./nft/v1beta1/tx.amino";
import * as _177 from "./slashing/v1beta1/tx.amino";
import * as _178 from "./staking/v1beta1/tx.amino";
import * as _179 from "./upgrade/v1beta1/tx.amino";
import * as _180 from "./vesting/v1beta1/tx.amino";
import * as _181 from "./auth/v1beta1/tx.registry";
import * as _182 from "./authz/v1beta1/tx.registry";
import * as _183 from "./bank/v1beta1/tx.registry";
import * as _184 from "./consensus/v1/tx.registry";
import * as _185 from "./crisis/v1beta1/tx.registry";
import * as _186 from "./distribution/v1beta1/tx.registry";
import * as _187 from "./evidence/v1beta1/tx.registry";
import * as _188 from "./feegrant/v1beta1/tx.registry";
import * as _189 from "./gov/v1/tx.registry";
import * as _190 from "./gov/v1beta1/tx.registry";
import * as _191 from "./group/v1/tx.registry";
import * as _192 from "./mint/v1beta1/tx.registry";
import * as _193 from "./nft/v1beta1/tx.registry";
import * as _194 from "./slashing/v1beta1/tx.registry";
import * as _195 from "./staking/v1beta1/tx.registry";
import * as _196 from "./upgrade/v1beta1/tx.registry";
import * as _197 from "./vesting/v1beta1/tx.registry";
import * as _198 from "./auth/v1beta1/query.lcd";
import * as _199 from "./authz/v1beta1/query.lcd";
import * as _200 from "./bank/v1beta1/query.lcd";
import * as _201 from "./base/node/v1beta1/query.lcd";
import * as _202 from "./base/tendermint/v1beta1/query.lcd";
import * as _203 from "./consensus/v1/query.lcd";
import * as _204 from "./distribution/v1beta1/query.lcd";
import * as _205 from "./evidence/v1beta1/query.lcd";
import * as _206 from "./feegrant/v1beta1/query.lcd";
import * as _207 from "./gov/v1/query.lcd";
import * as _208 from "./gov/v1beta1/query.lcd";
import * as _209 from "./group/v1/query.lcd";
import * as _210 from "./mint/v1beta1/query.lcd";
import * as _211 from "./nft/v1beta1/query.lcd";
import * as _212 from "./params/v1beta1/query.lcd";
import * as _213 from "./slashing/v1beta1/query.lcd";
import * as _214 from "./staking/v1beta1/query.lcd";
import * as _215 from "./tx/v1beta1/service.lcd";
import * as _216 from "./upgrade/v1beta1/query.lcd";
import * as _217 from "./app/v1alpha1/query.rpc.Query";
import * as _218 from "./auth/v1beta1/query.rpc.Query";
import * as _219 from "./authz/v1beta1/query.rpc.Query";
import * as _220 from "./autocli/v1/query.rpc.Query";
import * as _221 from "./bank/v1beta1/query.rpc.Query";
import * as _222 from "./base/node/v1beta1/query.rpc.Service";
import * as _223 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _224 from "./consensus/v1/query.rpc.Query";
import * as _225 from "./distribution/v1beta1/query.rpc.Query";
import * as _226 from "./evidence/v1beta1/query.rpc.Query";
import * as _227 from "./feegrant/v1beta1/query.rpc.Query";
import * as _228 from "./gov/v1/query.rpc.Query";
import * as _229 from "./gov/v1beta1/query.rpc.Query";
import * as _230 from "./group/v1/query.rpc.Query";
import * as _231 from "./mint/v1beta1/query.rpc.Query";
import * as _232 from "./nft/v1beta1/query.rpc.Query";
import * as _233 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _234 from "./params/v1beta1/query.rpc.Query";
import * as _235 from "./slashing/v1beta1/query.rpc.Query";
import * as _236 from "./staking/v1beta1/query.rpc.Query";
import * as _237 from "./tx/v1beta1/service.rpc.Service";
import * as _238 from "./upgrade/v1beta1/query.rpc.Query";
import * as _239 from "./auth/v1beta1/tx.rpc.msg";
import * as _240 from "./authz/v1beta1/tx.rpc.msg";
import * as _241 from "./bank/v1beta1/tx.rpc.msg";
import * as _242 from "./consensus/v1/tx.rpc.msg";
import * as _243 from "./crisis/v1beta1/tx.rpc.msg";
import * as _244 from "./distribution/v1beta1/tx.rpc.msg";
import * as _245 from "./evidence/v1beta1/tx.rpc.msg";
import * as _246 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _247 from "./gov/v1/tx.rpc.msg";
import * as _248 from "./gov/v1beta1/tx.rpc.msg";
import * as _249 from "./group/v1/tx.rpc.msg";
import * as _250 from "./mint/v1beta1/tx.rpc.msg";
import * as _251 from "./nft/v1beta1/tx.rpc.msg";
import * as _252 from "./slashing/v1beta1/tx.rpc.msg";
import * as _253 from "./staking/v1beta1/tx.rpc.msg";
import * as _254 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _255 from "./vesting/v1beta1/tx.rpc.msg";
import * as _262 from "./lcd";
import * as _263 from "./rpc.query";
import * as _264 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._10
      };
    }
    export const v1alpha1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._217
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._164,
      ..._181,
      ..._198,
      ..._218,
      ..._239
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._165,
      ..._182,
      ..._199,
      ..._219,
      ..._240
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._25,
      ..._26,
      ..._220
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._27
      };
    }
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._166,
      ..._183,
      ..._200,
      ..._221,
      ..._241
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._35,
        ..._201,
        ..._222
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._37
      };
      export const v2alpha1 = {
        ..._38
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._40,
        ..._41
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._42,
        ..._43,
        ..._202,
        ..._223
      };
    }
    export const v1beta1 = {
      ..._44
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1 = {
      ..._49,
      ..._50,
      ..._167,
      ..._184,
      ..._203,
      ..._224,
      ..._242
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._168,
      ..._185,
      ..._243
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._54
    };
    export namespace hd {
      export const v1 = {
        ..._55
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._56
      };
    }
    export const multisig = {
      ..._57
    };
    export const secp256k1 = {
      ..._58
    };
    export const secp256r1 = {
      ..._59
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._169,
      ..._186,
      ..._204,
      ..._225,
      ..._244
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._170,
      ..._187,
      ..._205,
      ..._226,
      ..._245
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._171,
      ..._188,
      ..._206,
      ..._227,
      ..._246
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1beta1 = {
      ..._76
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._77
      };
    }
    export const v1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._172,
      ..._189,
      ..._207,
      ..._228,
      ..._247
    };
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._173,
      ..._190,
      ..._208,
      ..._229,
      ..._248
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
    export const v1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._174,
      ..._191,
      ..._209,
      ..._230,
      ..._249
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._175,
      ..._192,
      ..._210,
      ..._231,
      ..._250
    };
  }
  export namespace msg {
    export const v1 = {
      ..._97
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._176,
      ..._193,
      ..._211,
      ..._232,
      ..._251
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._104
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._105,
        ..._233
      };
    }
    export const v1 = {
      ..._106
    };
    export const v1alpha1 = {
      ..._107
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._212,
      ..._234
    };
  }
  export namespace query {
    export const v1 = {
      ..._111
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._112
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._113
      };
    }
    export const v1beta1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._177,
      ..._194,
      ..._213,
      ..._235,
      ..._252
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._178,
      ..._195,
      ..._214,
      ..._236,
      ..._253
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._124
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._125
      };
    }
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._215,
      ..._237
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._128
      };
    }
    export const v1beta1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._179,
      ..._196,
      ..._216,
      ..._238,
      ..._254
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._132
      };
    }
    export const v1beta1 = {
      ..._133,
      ..._134,
      ..._180,
      ..._197,
      ..._255
    };
  }
  export const ClientFactory = {
    ..._262,
    ..._263,
    ..._264
  };
}