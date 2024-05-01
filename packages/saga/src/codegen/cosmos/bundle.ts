import * as _1 from "./app/runtime/v1alpha1/module";
import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/module/v1/module";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./auth/v1beta1/tx";
import * as _10 from "./authz/module/v1/module";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./autocli/v1/options";
import * as _17 from "./autocli/v1/query";
import * as _18 from "./bank/module/v1/module";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/node/v1beta1/query";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/snapshots/v1beta1/snapshot";
import * as _31 from "./base/store/v1beta1/commit_info";
import * as _32 from "./base/store/v1beta1/listening";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/tendermint/v1beta1/types";
import * as _35 from "./base/v1beta1/coin";
import * as _36 from "./capability/module/v1/module";
import * as _37 from "./capability/v1beta1/capability";
import * as _38 from "./capability/v1beta1/genesis";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crisis/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/tx";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/hd/v1/hd";
import * as _47 from "./crypto/keyring/v1/record";
import * as _48 from "./crypto/multisig/keys";
import * as _49 from "./crypto/secp256k1/keys";
import * as _50 from "./crypto/secp256r1/keys";
import * as _51 from "./distribution/module/v1/module";
import * as _52 from "./distribution/v1beta1/distribution";
import * as _53 from "./distribution/v1beta1/genesis";
import * as _54 from "./distribution/v1beta1/query";
import * as _55 from "./distribution/v1beta1/tx";
import * as _56 from "./evidence/module/v1/module";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/module/v1/module";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/module/v1/module";
import * as _67 from "./genutil/v1beta1/genesis";
import * as _68 from "./gov/module/v1/module";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/module/v1/module";
import * as _78 from "./group/v1/events";
import * as _79 from "./group/v1/genesis";
import * as _80 from "./group/v1/query";
import * as _81 from "./group/v1/tx";
import * as _82 from "./group/v1/types";
import * as _83 from "./mint/module/v1/module";
import * as _84 from "./mint/v1beta1/genesis";
import * as _85 from "./mint/v1beta1/mint";
import * as _86 from "./mint/v1beta1/query";
import * as _87 from "./mint/v1beta1/tx";
import * as _88 from "./msg/v1/msg";
import * as _89 from "./nft/module/v1/module";
import * as _90 from "./nft/v1beta1/event";
import * as _91 from "./nft/v1beta1/genesis";
import * as _92 from "./nft/v1beta1/nft";
import * as _93 from "./nft/v1beta1/query";
import * as _94 from "./nft/v1beta1/tx";
import * as _95 from "./orm/module/v1alpha1/module";
import * as _96 from "./orm/query/v1alpha1/query";
import * as _97 from "./orm/v1/orm";
import * as _98 from "./orm/v1alpha1/schema";
import * as _99 from "./params/module/v1/module";
import * as _100 from "./params/v1beta1/params";
import * as _101 from "./params/v1beta1/query";
import * as _102 from "./query/v1/query";
import * as _103 from "./reflection/v1/reflection";
import * as _104 from "./slashing/module/v1/module";
import * as _105 from "./slashing/v1beta1/genesis";
import * as _106 from "./slashing/v1beta1/query";
import * as _107 from "./slashing/v1beta1/slashing";
import * as _108 from "./slashing/v1beta1/tx";
import * as _109 from "./staking/module/v1/module";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
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
import * as _146 from "./auth/v1beta1/tx.amino";
import * as _147 from "./authz/v1beta1/tx.amino";
import * as _148 from "./bank/v1beta1/tx.amino";
import * as _149 from "./consensus/v1/tx.amino";
import * as _150 from "./crisis/v1beta1/tx.amino";
import * as _151 from "./distribution/v1beta1/tx.amino";
import * as _152 from "./evidence/v1beta1/tx.amino";
import * as _153 from "./feegrant/v1beta1/tx.amino";
import * as _154 from "./gov/v1/tx.amino";
import * as _155 from "./gov/v1beta1/tx.amino";
import * as _156 from "./group/v1/tx.amino";
import * as _157 from "./mint/v1beta1/tx.amino";
import * as _158 from "./nft/v1beta1/tx.amino";
import * as _159 from "./slashing/v1beta1/tx.amino";
import * as _160 from "./staking/v1beta1/tx.amino";
import * as _161 from "./upgrade/v1beta1/tx.amino";
import * as _162 from "./vesting/v1beta1/tx.amino";
import * as _163 from "./auth/v1beta1/tx.registry";
import * as _164 from "./authz/v1beta1/tx.registry";
import * as _165 from "./bank/v1beta1/tx.registry";
import * as _166 from "./consensus/v1/tx.registry";
import * as _167 from "./crisis/v1beta1/tx.registry";
import * as _168 from "./distribution/v1beta1/tx.registry";
import * as _169 from "./evidence/v1beta1/tx.registry";
import * as _170 from "./feegrant/v1beta1/tx.registry";
import * as _171 from "./gov/v1/tx.registry";
import * as _172 from "./gov/v1beta1/tx.registry";
import * as _173 from "./group/v1/tx.registry";
import * as _174 from "./mint/v1beta1/tx.registry";
import * as _175 from "./nft/v1beta1/tx.registry";
import * as _176 from "./slashing/v1beta1/tx.registry";
import * as _177 from "./staking/v1beta1/tx.registry";
import * as _178 from "./upgrade/v1beta1/tx.registry";
import * as _179 from "./vesting/v1beta1/tx.registry";
import * as _180 from "./auth/v1beta1/query.lcd";
import * as _181 from "./authz/v1beta1/query.lcd";
import * as _182 from "./bank/v1beta1/query.lcd";
import * as _183 from "./base/node/v1beta1/query.lcd";
import * as _184 from "./base/tendermint/v1beta1/query.lcd";
import * as _185 from "./consensus/v1/query.lcd";
import * as _186 from "./distribution/v1beta1/query.lcd";
import * as _187 from "./evidence/v1beta1/query.lcd";
import * as _188 from "./feegrant/v1beta1/query.lcd";
import * as _189 from "./gov/v1/query.lcd";
import * as _190 from "./gov/v1beta1/query.lcd";
import * as _191 from "./group/v1/query.lcd";
import * as _192 from "./mint/v1beta1/query.lcd";
import * as _193 from "./nft/v1beta1/query.lcd";
import * as _194 from "./params/v1beta1/query.lcd";
import * as _195 from "./slashing/v1beta1/query.lcd";
import * as _196 from "./staking/v1beta1/query.lcd";
import * as _197 from "./tx/v1beta1/service.lcd";
import * as _198 from "./upgrade/v1beta1/query.lcd";
import * as _199 from "./app/v1alpha1/query.rpc.Query";
import * as _200 from "./auth/v1beta1/query.rpc.Query";
import * as _201 from "./authz/v1beta1/query.rpc.Query";
import * as _202 from "./autocli/v1/query.rpc.Query";
import * as _203 from "./bank/v1beta1/query.rpc.Query";
import * as _204 from "./base/node/v1beta1/query.rpc.Service";
import * as _205 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _206 from "./consensus/v1/query.rpc.Query";
import * as _207 from "./distribution/v1beta1/query.rpc.Query";
import * as _208 from "./evidence/v1beta1/query.rpc.Query";
import * as _209 from "./feegrant/v1beta1/query.rpc.Query";
import * as _210 from "./gov/v1/query.rpc.Query";
import * as _211 from "./gov/v1beta1/query.rpc.Query";
import * as _212 from "./group/v1/query.rpc.Query";
import * as _213 from "./mint/v1beta1/query.rpc.Query";
import * as _214 from "./nft/v1beta1/query.rpc.Query";
import * as _215 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _216 from "./params/v1beta1/query.rpc.Query";
import * as _217 from "./slashing/v1beta1/query.rpc.Query";
import * as _218 from "./staking/v1beta1/query.rpc.Query";
import * as _219 from "./tx/v1beta1/service.rpc.Service";
import * as _220 from "./upgrade/v1beta1/query.rpc.Query";
import * as _221 from "./auth/v1beta1/tx.rpc.msg";
import * as _222 from "./authz/v1beta1/tx.rpc.msg";
import * as _223 from "./bank/v1beta1/tx.rpc.msg";
import * as _224 from "./consensus/v1/tx.rpc.msg";
import * as _225 from "./crisis/v1beta1/tx.rpc.msg";
import * as _226 from "./distribution/v1beta1/tx.rpc.msg";
import * as _227 from "./evidence/v1beta1/tx.rpc.msg";
import * as _228 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _229 from "./gov/v1/tx.rpc.msg";
import * as _230 from "./gov/v1beta1/tx.rpc.msg";
import * as _231 from "./group/v1/tx.rpc.msg";
import * as _232 from "./mint/v1beta1/tx.rpc.msg";
import * as _233 from "./nft/v1beta1/tx.rpc.msg";
import * as _234 from "./slashing/v1beta1/tx.rpc.msg";
import * as _235 from "./staking/v1beta1/tx.rpc.msg";
import * as _236 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _237 from "./vesting/v1beta1/tx.rpc.msg";
import * as _238 from "./lcd";
import * as _239 from "./rpc.query";
import * as _240 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._1
      };
    }
    export const v1alpha1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._199
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._5
      };
    }
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._146,
      ..._163,
      ..._180,
      ..._200,
      ..._221
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._10
      };
    }
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._147,
      ..._164,
      ..._181,
      ..._201,
      ..._222
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._16,
      ..._17,
      ..._202
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._148,
      ..._165,
      ..._182,
      ..._203,
      ..._223
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._26,
        ..._183,
        ..._204
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._28
      };
      export const v2alpha1 = {
        ..._29
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._31,
        ..._32
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._33,
        ..._34,
        ..._184,
        ..._205
      };
    }
    export const v1beta1 = {
      ..._35
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._36
      };
    }
    export const v1beta1 = {
      ..._37,
      ..._38
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1 = {
      ..._40,
      ..._41,
      ..._149,
      ..._166,
      ..._185,
      ..._206,
      ..._224
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._150,
      ..._167,
      ..._225
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._45
    };
    export namespace hd {
      export const v1 = {
        ..._46
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._47
      };
    }
    export const multisig = {
      ..._48
    };
    export const secp256k1 = {
      ..._49
    };
    export const secp256r1 = {
      ..._50
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._151,
      ..._168,
      ..._186,
      ..._207,
      ..._226
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._152,
      ..._169,
      ..._187,
      ..._208,
      ..._227
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._153,
      ..._170,
      ..._188,
      ..._209,
      ..._228
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1beta1 = {
      ..._67
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._154,
      ..._171,
      ..._189,
      ..._210,
      ..._229
    };
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._155,
      ..._172,
      ..._190,
      ..._211,
      ..._230
    };
  }
  export namespace group {
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
      ..._82,
      ..._156,
      ..._173,
      ..._191,
      ..._212,
      ..._231
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._157,
      ..._174,
      ..._192,
      ..._213,
      ..._232
    };
  }
  export namespace msg {
    export const v1 = {
      ..._88
    };
  }
  export namespace nft {
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
      ..._94,
      ..._158,
      ..._175,
      ..._193,
      ..._214,
      ..._233
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._95
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._96,
        ..._215
      };
    }
    export const v1 = {
      ..._97
    };
    export const v1alpha1 = {
      ..._98
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._99
      };
    }
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._194,
      ..._216
    };
  }
  export namespace query {
    export const v1 = {
      ..._102
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._103
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._159,
      ..._176,
      ..._195,
      ..._217,
      ..._234
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._109
      };
    }
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._160,
      ..._177,
      ..._196,
      ..._218,
      ..._235
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
      ..._197,
      ..._219
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
      ..._161,
      ..._178,
      ..._198,
      ..._220,
      ..._236
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
      ..._162,
      ..._179,
      ..._237
    };
  }
  export const ClientFactory = {
    ..._238,
    ..._239,
    ..._240
  };
}