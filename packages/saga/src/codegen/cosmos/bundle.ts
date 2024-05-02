import * as _5 from "./app/runtime/v1alpha1/module";
import * as _6 from "./app/v1alpha1/config";
import * as _7 from "./app/v1alpha1/module";
import * as _8 from "./app/v1alpha1/query";
import * as _9 from "./auth/module/v1/module";
import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./auth/v1beta1/tx";
import * as _14 from "./authz/module/v1/module";
import * as _15 from "./authz/v1beta1/authz";
import * as _16 from "./authz/v1beta1/event";
import * as _17 from "./authz/v1beta1/genesis";
import * as _18 from "./authz/v1beta1/query";
import * as _19 from "./authz/v1beta1/tx";
import * as _20 from "./autocli/v1/options";
import * as _21 from "./autocli/v1/query";
import * as _22 from "./bank/module/v1/module";
import * as _23 from "./bank/v1beta1/authz";
import * as _24 from "./bank/v1beta1/bank";
import * as _25 from "./bank/v1beta1/genesis";
import * as _26 from "./bank/v1beta1/query";
import * as _27 from "./bank/v1beta1/tx";
import * as _28 from "./base/abci/v1beta1/abci";
import * as _29 from "./base/kv/v1beta1/kv";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/tendermint/v1beta1/types";
import * as _39 from "./base/v1beta1/coin";
import * as _40 from "./capability/module/v1/module";
import * as _41 from "./capability/v1beta1/capability";
import * as _42 from "./capability/v1beta1/genesis";
import * as _43 from "./consensus/module/v1/module";
import * as _44 from "./consensus/v1/query";
import * as _45 from "./consensus/v1/tx";
import * as _46 from "./crisis/module/v1/module";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/hd/v1/hd";
import * as _51 from "./crypto/keyring/v1/record";
import * as _52 from "./crypto/multisig/keys";
import * as _53 from "./crypto/secp256k1/keys";
import * as _54 from "./crypto/secp256r1/keys";
import * as _55 from "./distribution/module/v1/module";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/module/v1/module";
import * as _61 from "./evidence/v1beta1/evidence";
import * as _62 from "./evidence/v1beta1/genesis";
import * as _63 from "./evidence/v1beta1/query";
import * as _64 from "./evidence/v1beta1/tx";
import * as _65 from "./feegrant/module/v1/module";
import * as _66 from "./feegrant/v1beta1/feegrant";
import * as _67 from "./feegrant/v1beta1/genesis";
import * as _68 from "./feegrant/v1beta1/query";
import * as _69 from "./feegrant/v1beta1/tx";
import * as _70 from "./genutil/module/v1/module";
import * as _71 from "./genutil/v1beta1/genesis";
import * as _72 from "./gov/module/v1/module";
import * as _73 from "./gov/v1/genesis";
import * as _74 from "./gov/v1/gov";
import * as _75 from "./gov/v1/query";
import * as _76 from "./gov/v1/tx";
import * as _77 from "./gov/v1beta1/genesis";
import * as _78 from "./gov/v1beta1/gov";
import * as _79 from "./gov/v1beta1/query";
import * as _80 from "./gov/v1beta1/tx";
import * as _81 from "./group/module/v1/module";
import * as _82 from "./group/v1/events";
import * as _83 from "./group/v1/genesis";
import * as _84 from "./group/v1/query";
import * as _85 from "./group/v1/tx";
import * as _86 from "./group/v1/types";
import * as _87 from "./mint/module/v1/module";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _91 from "./mint/v1beta1/tx";
import * as _92 from "./msg/v1/msg";
import * as _93 from "./nft/module/v1/module";
import * as _94 from "./nft/v1beta1/event";
import * as _95 from "./nft/v1beta1/genesis";
import * as _96 from "./nft/v1beta1/nft";
import * as _97 from "./nft/v1beta1/query";
import * as _98 from "./nft/v1beta1/tx";
import * as _99 from "./orm/module/v1alpha1/module";
import * as _100 from "./orm/query/v1alpha1/query";
import * as _101 from "./orm/v1/orm";
import * as _102 from "./orm/v1alpha1/schema";
import * as _103 from "./params/module/v1/module";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _106 from "./query/v1/query";
import * as _107 from "./reflection/v1/reflection";
import * as _108 from "./slashing/module/v1/module";
import * as _109 from "./slashing/v1beta1/genesis";
import * as _110 from "./slashing/v1beta1/query";
import * as _111 from "./slashing/v1beta1/slashing";
import * as _112 from "./slashing/v1beta1/tx";
import * as _113 from "./staking/module/v1/module";
import * as _114 from "./staking/v1beta1/authz";
import * as _115 from "./staking/v1beta1/genesis";
import * as _116 from "./staking/v1beta1/query";
import * as _117 from "./staking/v1beta1/staking";
import * as _118 from "./staking/v1beta1/tx";
import * as _119 from "./tx/config/v1/config";
import * as _120 from "./tx/signing/v1beta1/signing";
import * as _121 from "./tx/v1beta1/service";
import * as _122 from "./tx/v1beta1/tx";
import * as _123 from "./upgrade/module/v1/module";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/module/v1/module";
import * as _128 from "./vesting/v1beta1/tx";
import * as _129 from "./vesting/v1beta1/vesting";
import * as _152 from "./auth/v1beta1/tx.amino";
import * as _153 from "./authz/v1beta1/tx.amino";
import * as _154 from "./bank/v1beta1/tx.amino";
import * as _155 from "./consensus/v1/tx.amino";
import * as _156 from "./crisis/v1beta1/tx.amino";
import * as _157 from "./distribution/v1beta1/tx.amino";
import * as _158 from "./evidence/v1beta1/tx.amino";
import * as _159 from "./feegrant/v1beta1/tx.amino";
import * as _160 from "./gov/v1/tx.amino";
import * as _161 from "./gov/v1beta1/tx.amino";
import * as _162 from "./group/v1/tx.amino";
import * as _163 from "./mint/v1beta1/tx.amino";
import * as _164 from "./nft/v1beta1/tx.amino";
import * as _165 from "./slashing/v1beta1/tx.amino";
import * as _166 from "./staking/v1beta1/tx.amino";
import * as _167 from "./upgrade/v1beta1/tx.amino";
import * as _168 from "./vesting/v1beta1/tx.amino";
import * as _169 from "./auth/v1beta1/tx.registry";
import * as _170 from "./authz/v1beta1/tx.registry";
import * as _171 from "./bank/v1beta1/tx.registry";
import * as _172 from "./consensus/v1/tx.registry";
import * as _173 from "./crisis/v1beta1/tx.registry";
import * as _174 from "./distribution/v1beta1/tx.registry";
import * as _175 from "./evidence/v1beta1/tx.registry";
import * as _176 from "./feegrant/v1beta1/tx.registry";
import * as _177 from "./gov/v1/tx.registry";
import * as _178 from "./gov/v1beta1/tx.registry";
import * as _179 from "./group/v1/tx.registry";
import * as _180 from "./mint/v1beta1/tx.registry";
import * as _181 from "./nft/v1beta1/tx.registry";
import * as _182 from "./slashing/v1beta1/tx.registry";
import * as _183 from "./staking/v1beta1/tx.registry";
import * as _184 from "./upgrade/v1beta1/tx.registry";
import * as _185 from "./vesting/v1beta1/tx.registry";
import * as _186 from "./auth/v1beta1/query.lcd";
import * as _187 from "./authz/v1beta1/query.lcd";
import * as _188 from "./bank/v1beta1/query.lcd";
import * as _189 from "./base/node/v1beta1/query.lcd";
import * as _190 from "./base/tendermint/v1beta1/query.lcd";
import * as _191 from "./consensus/v1/query.lcd";
import * as _192 from "./distribution/v1beta1/query.lcd";
import * as _193 from "./evidence/v1beta1/query.lcd";
import * as _194 from "./feegrant/v1beta1/query.lcd";
import * as _195 from "./gov/v1/query.lcd";
import * as _196 from "./gov/v1beta1/query.lcd";
import * as _197 from "./group/v1/query.lcd";
import * as _198 from "./mint/v1beta1/query.lcd";
import * as _199 from "./nft/v1beta1/query.lcd";
import * as _200 from "./params/v1beta1/query.lcd";
import * as _201 from "./slashing/v1beta1/query.lcd";
import * as _202 from "./staking/v1beta1/query.lcd";
import * as _203 from "./tx/v1beta1/service.lcd";
import * as _204 from "./upgrade/v1beta1/query.lcd";
import * as _205 from "./app/v1alpha1/query.rpc.Query";
import * as _206 from "./auth/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/query.rpc.Query";
import * as _208 from "./autocli/v1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _212 from "./consensus/v1/query.rpc.Query";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./evidence/v1beta1/query.rpc.Query";
import * as _215 from "./feegrant/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./gov/v1beta1/query.rpc.Query";
import * as _218 from "./group/v1/query.rpc.Query";
import * as _219 from "./mint/v1beta1/query.rpc.Query";
import * as _220 from "./nft/v1beta1/query.rpc.Query";
import * as _221 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _222 from "./params/v1beta1/query.rpc.Query";
import * as _223 from "./slashing/v1beta1/query.rpc.Query";
import * as _224 from "./staking/v1beta1/query.rpc.Query";
import * as _225 from "./tx/v1beta1/service.rpc.Service";
import * as _226 from "./upgrade/v1beta1/query.rpc.Query";
import * as _227 from "./auth/v1beta1/tx.rpc.msg";
import * as _228 from "./authz/v1beta1/tx.rpc.msg";
import * as _229 from "./bank/v1beta1/tx.rpc.msg";
import * as _230 from "./consensus/v1/tx.rpc.msg";
import * as _231 from "./crisis/v1beta1/tx.rpc.msg";
import * as _232 from "./distribution/v1beta1/tx.rpc.msg";
import * as _233 from "./evidence/v1beta1/tx.rpc.msg";
import * as _234 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _235 from "./gov/v1/tx.rpc.msg";
import * as _236 from "./gov/v1beta1/tx.rpc.msg";
import * as _237 from "./group/v1/tx.rpc.msg";
import * as _238 from "./mint/v1beta1/tx.rpc.msg";
import * as _239 from "./nft/v1beta1/tx.rpc.msg";
import * as _240 from "./slashing/v1beta1/tx.rpc.msg";
import * as _241 from "./staking/v1beta1/tx.rpc.msg";
import * as _242 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _243 from "./vesting/v1beta1/tx.rpc.msg";
import * as _247 from "./lcd";
import * as _248 from "./rpc.query";
import * as _249 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._5
      };
    }
    export const v1alpha1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._205
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._9
      };
    }
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._152,
      ..._169,
      ..._186,
      ..._206,
      ..._227
    };
  }
  export namespace authz {
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
      ..._19,
      ..._153,
      ..._170,
      ..._187,
      ..._207,
      ..._228
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._20,
      ..._21,
      ..._208
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._154,
      ..._171,
      ..._188,
      ..._209,
      ..._229
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._30,
        ..._189,
        ..._210
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._32
      };
      export const v2alpha1 = {
        ..._33
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._35,
        ..._36
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._37,
        ..._38,
        ..._190,
        ..._211
      };
    }
    export const v1beta1 = {
      ..._39
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
    export const v1beta1 = {
      ..._41,
      ..._42
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1 = {
      ..._44,
      ..._45,
      ..._155,
      ..._172,
      ..._191,
      ..._212,
      ..._230
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._156,
      ..._173,
      ..._231
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._49
    };
    export namespace hd {
      export const v1 = {
        ..._50
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._51
      };
    }
    export const multisig = {
      ..._52
    };
    export const secp256k1 = {
      ..._53
    };
    export const secp256r1 = {
      ..._54
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._157,
      ..._174,
      ..._192,
      ..._213,
      ..._232
    };
  }
  export namespace evidence {
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
      ..._158,
      ..._175,
      ..._193,
      ..._214,
      ..._233
    };
  }
  export namespace feegrant {
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
      ..._159,
      ..._176,
      ..._194,
      ..._215,
      ..._234
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1beta1 = {
      ..._71
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._160,
      ..._177,
      ..._195,
      ..._216,
      ..._235
    };
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._161,
      ..._178,
      ..._196,
      ..._217,
      ..._236
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._162,
      ..._179,
      ..._197,
      ..._218,
      ..._237
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._163,
      ..._180,
      ..._198,
      ..._219,
      ..._238
    };
  }
  export namespace msg {
    export const v1 = {
      ..._92
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._93
      };
    }
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._164,
      ..._181,
      ..._199,
      ..._220,
      ..._239
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._99
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._100,
        ..._221
      };
    }
    export const v1 = {
      ..._101
    };
    export const v1alpha1 = {
      ..._102
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._200,
      ..._222
    };
  }
  export namespace query {
    export const v1 = {
      ..._106
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._107
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._165,
      ..._182,
      ..._201,
      ..._223,
      ..._240
    };
  }
  export namespace staking {
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
      ..._118,
      ..._166,
      ..._183,
      ..._202,
      ..._224,
      ..._241
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._119
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._120
      };
    }
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._203,
      ..._225
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._123
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._167,
      ..._184,
      ..._204,
      ..._226,
      ..._242
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._168,
      ..._185,
      ..._243
    };
  }
  export const ClientFactory = {
    ..._247,
    ..._248,
    ..._249
  };
}