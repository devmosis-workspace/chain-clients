import * as _45 from "./app/runtime/v1alpha1/module";
import * as _46 from "./app/v1alpha1/config";
import * as _47 from "./app/v1alpha1/module";
import * as _48 from "./app/v1alpha1/query";
import * as _49 from "./auth/module/v1/module";
import * as _50 from "./auth/v1beta1/auth";
import * as _51 from "./auth/v1beta1/genesis";
import * as _52 from "./auth/v1beta1/query";
import * as _53 from "./auth/v1beta1/tx";
import * as _54 from "./authz/module/v1/module";
import * as _55 from "./authz/v1beta1/authz";
import * as _56 from "./authz/v1beta1/event";
import * as _57 from "./authz/v1beta1/genesis";
import * as _58 from "./authz/v1beta1/query";
import * as _59 from "./authz/v1beta1/tx";
import * as _60 from "./autocli/v1/options";
import * as _61 from "./autocli/v1/query";
import * as _62 from "./bank/module/v1/module";
import * as _63 from "./bank/v1beta1/authz";
import * as _64 from "./bank/v1beta1/bank";
import * as _65 from "./bank/v1beta1/genesis";
import * as _66 from "./bank/v1beta1/query";
import * as _67 from "./bank/v1beta1/tx";
import * as _68 from "./base/abci/v1beta1/abci";
import * as _69 from "./base/kv/v1beta1/kv";
import * as _70 from "./base/node/v1beta1/query";
import * as _71 from "./base/query/v1beta1/pagination";
import * as _72 from "./base/reflection/v1beta1/reflection";
import * as _73 from "./base/reflection/v2alpha1/reflection";
import * as _74 from "./base/snapshots/v1beta1/snapshot";
import * as _75 from "./base/store/v1beta1/commit_info";
import * as _76 from "./base/store/v1beta1/listening";
import * as _77 from "./base/tendermint/v1beta1/query";
import * as _78 from "./base/tendermint/v1beta1/types";
import * as _79 from "./base/v1beta1/coin";
import * as _80 from "./capability/module/v1/module";
import * as _81 from "./capability/v1beta1/capability";
import * as _82 from "./capability/v1beta1/genesis";
import * as _83 from "./consensus/module/v1/module";
import * as _84 from "./consensus/v1/query";
import * as _85 from "./consensus/v1/tx";
import * as _86 from "./crisis/module/v1/module";
import * as _87 from "./crisis/v1beta1/genesis";
import * as _88 from "./crisis/v1beta1/tx";
import * as _89 from "./crypto/ed25519/keys";
import * as _90 from "./crypto/hd/v1/hd";
import * as _91 from "./crypto/keyring/v1/record";
import * as _92 from "./crypto/multisig/keys";
import * as _93 from "./crypto/secp256k1/keys";
import * as _94 from "./crypto/secp256r1/keys";
import * as _95 from "./distribution/module/v1/module";
import * as _96 from "./distribution/v1beta1/distribution";
import * as _97 from "./distribution/v1beta1/genesis";
import * as _98 from "./distribution/v1beta1/query";
import * as _99 from "./distribution/v1beta1/tx";
import * as _100 from "./evidence/module/v1/module";
import * as _101 from "./evidence/v1beta1/evidence";
import * as _102 from "./evidence/v1beta1/genesis";
import * as _103 from "./evidence/v1beta1/query";
import * as _104 from "./evidence/v1beta1/tx";
import * as _105 from "./feegrant/module/v1/module";
import * as _106 from "./feegrant/v1beta1/feegrant";
import * as _107 from "./feegrant/v1beta1/genesis";
import * as _108 from "./feegrant/v1beta1/query";
import * as _109 from "./feegrant/v1beta1/tx";
import * as _110 from "./genutil/module/v1/module";
import * as _111 from "./genutil/v1beta1/genesis";
import * as _112 from "./gov/module/v1/module";
import * as _113 from "./gov/v1/genesis";
import * as _114 from "./gov/v1/gov";
import * as _115 from "./gov/v1/query";
import * as _116 from "./gov/v1/tx";
import * as _117 from "./gov/v1beta1/genesis";
import * as _118 from "./gov/v1beta1/gov";
import * as _119 from "./gov/v1beta1/query";
import * as _120 from "./gov/v1beta1/tx";
import * as _121 from "./group/module/v1/module";
import * as _122 from "./group/v1/events";
import * as _123 from "./group/v1/genesis";
import * as _124 from "./group/v1/query";
import * as _125 from "./group/v1/tx";
import * as _126 from "./group/v1/types";
import * as _127 from "./mint/module/v1/module";
import * as _128 from "./mint/v1beta1/genesis";
import * as _129 from "./mint/v1beta1/mint";
import * as _130 from "./mint/v1beta1/query";
import * as _131 from "./mint/v1beta1/tx";
import * as _132 from "./msg/v1/msg";
import * as _133 from "./nft/module/v1/module";
import * as _134 from "./nft/v1beta1/event";
import * as _135 from "./nft/v1beta1/genesis";
import * as _136 from "./nft/v1beta1/nft";
import * as _137 from "./nft/v1beta1/query";
import * as _138 from "./nft/v1beta1/tx";
import * as _139 from "./orm/module/v1alpha1/module";
import * as _140 from "./orm/query/v1alpha1/query";
import * as _141 from "./orm/v1/orm";
import * as _142 from "./orm/v1alpha1/schema";
import * as _143 from "./params/module/v1/module";
import * as _144 from "./params/v1beta1/params";
import * as _145 from "./params/v1beta1/query";
import * as _146 from "./query/v1/query";
import * as _147 from "./reflection/v1/reflection";
import * as _148 from "./slashing/module/v1/module";
import * as _149 from "./slashing/v1beta1/genesis";
import * as _150 from "./slashing/v1beta1/query";
import * as _151 from "./slashing/v1beta1/slashing";
import * as _152 from "./slashing/v1beta1/tx";
import * as _153 from "./staking/module/v1/module";
import * as _154 from "./staking/v1beta1/authz";
import * as _155 from "./staking/v1beta1/genesis";
import * as _156 from "./staking/v1beta1/query";
import * as _157 from "./staking/v1beta1/staking";
import * as _158 from "./staking/v1beta1/tx";
import * as _159 from "./tx/config/v1/config";
import * as _160 from "./tx/signing/v1beta1/signing";
import * as _161 from "./tx/v1beta1/service";
import * as _162 from "./tx/v1beta1/tx";
import * as _163 from "./upgrade/module/v1/module";
import * as _164 from "./upgrade/v1beta1/query";
import * as _165 from "./upgrade/v1beta1/tx";
import * as _166 from "./upgrade/v1beta1/upgrade";
import * as _167 from "./vesting/module/v1/module";
import * as _168 from "./vesting/v1beta1/tx";
import * as _169 from "./vesting/v1beta1/vesting";
import * as _205 from "./auth/v1beta1/tx.amino";
import * as _206 from "./authz/v1beta1/tx.amino";
import * as _207 from "./bank/v1beta1/tx.amino";
import * as _208 from "./consensus/v1/tx.amino";
import * as _209 from "./crisis/v1beta1/tx.amino";
import * as _210 from "./distribution/v1beta1/tx.amino";
import * as _211 from "./evidence/v1beta1/tx.amino";
import * as _212 from "./feegrant/v1beta1/tx.amino";
import * as _213 from "./gov/v1/tx.amino";
import * as _214 from "./gov/v1beta1/tx.amino";
import * as _215 from "./group/v1/tx.amino";
import * as _216 from "./mint/v1beta1/tx.amino";
import * as _217 from "./nft/v1beta1/tx.amino";
import * as _218 from "./slashing/v1beta1/tx.amino";
import * as _219 from "./staking/v1beta1/tx.amino";
import * as _220 from "./upgrade/v1beta1/tx.amino";
import * as _221 from "./vesting/v1beta1/tx.amino";
import * as _222 from "./auth/v1beta1/tx.registry";
import * as _223 from "./authz/v1beta1/tx.registry";
import * as _224 from "./bank/v1beta1/tx.registry";
import * as _225 from "./consensus/v1/tx.registry";
import * as _226 from "./crisis/v1beta1/tx.registry";
import * as _227 from "./distribution/v1beta1/tx.registry";
import * as _228 from "./evidence/v1beta1/tx.registry";
import * as _229 from "./feegrant/v1beta1/tx.registry";
import * as _230 from "./gov/v1/tx.registry";
import * as _231 from "./gov/v1beta1/tx.registry";
import * as _232 from "./group/v1/tx.registry";
import * as _233 from "./mint/v1beta1/tx.registry";
import * as _234 from "./nft/v1beta1/tx.registry";
import * as _235 from "./slashing/v1beta1/tx.registry";
import * as _236 from "./staking/v1beta1/tx.registry";
import * as _237 from "./upgrade/v1beta1/tx.registry";
import * as _238 from "./vesting/v1beta1/tx.registry";
import * as _239 from "./app/v1alpha1/query.rpc.Query";
import * as _240 from "./auth/v1beta1/query.rpc.Query";
import * as _241 from "./authz/v1beta1/query.rpc.Query";
import * as _242 from "./autocli/v1/query.rpc.Query";
import * as _243 from "./bank/v1beta1/query.rpc.Query";
import * as _244 from "./base/node/v1beta1/query.rpc.Service";
import * as _245 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _246 from "./consensus/v1/query.rpc.Query";
import * as _247 from "./distribution/v1beta1/query.rpc.Query";
import * as _248 from "./evidence/v1beta1/query.rpc.Query";
import * as _249 from "./feegrant/v1beta1/query.rpc.Query";
import * as _250 from "./gov/v1/query.rpc.Query";
import * as _251 from "./gov/v1beta1/query.rpc.Query";
import * as _252 from "./group/v1/query.rpc.Query";
import * as _253 from "./mint/v1beta1/query.rpc.Query";
import * as _254 from "./nft/v1beta1/query.rpc.Query";
import * as _255 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _256 from "./params/v1beta1/query.rpc.Query";
import * as _257 from "./slashing/v1beta1/query.rpc.Query";
import * as _258 from "./staking/v1beta1/query.rpc.Query";
import * as _259 from "./tx/v1beta1/service.rpc.Service";
import * as _260 from "./upgrade/v1beta1/query.rpc.Query";
import * as _261 from "./auth/v1beta1/tx.rpc.msg";
import * as _262 from "./authz/v1beta1/tx.rpc.msg";
import * as _263 from "./bank/v1beta1/tx.rpc.msg";
import * as _264 from "./consensus/v1/tx.rpc.msg";
import * as _265 from "./crisis/v1beta1/tx.rpc.msg";
import * as _266 from "./distribution/v1beta1/tx.rpc.msg";
import * as _267 from "./evidence/v1beta1/tx.rpc.msg";
import * as _268 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _269 from "./gov/v1/tx.rpc.msg";
import * as _270 from "./gov/v1beta1/tx.rpc.msg";
import * as _271 from "./group/v1/tx.rpc.msg";
import * as _272 from "./mint/v1beta1/tx.rpc.msg";
import * as _273 from "./nft/v1beta1/tx.rpc.msg";
import * as _274 from "./slashing/v1beta1/tx.rpc.msg";
import * as _275 from "./staking/v1beta1/tx.rpc.msg";
import * as _276 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _277 from "./vesting/v1beta1/tx.rpc.msg";
import * as _280 from "./rpc.query";
import * as _281 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._45
      };
    }
    export const v1alpha1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._239
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._205,
      ..._222,
      ..._240,
      ..._261
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._206,
      ..._223,
      ..._241,
      ..._262
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._60,
      ..._61,
      ..._242
    };
  }
  export namespace bank {
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
      ..._67,
      ..._207,
      ..._224,
      ..._243,
      ..._263
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._68
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._69
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._70,
        ..._244
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._71
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._72
      };
      export const v2alpha1 = {
        ..._73
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._74
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._75,
        ..._76
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._77,
        ..._78,
        ..._245
      };
    }
    export const v1beta1 = {
      ..._79
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
    export const v1beta1 = {
      ..._81,
      ..._82
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1 = {
      ..._84,
      ..._85,
      ..._208,
      ..._225,
      ..._246,
      ..._264
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._209,
      ..._226,
      ..._265
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._89
    };
    export namespace hd {
      export const v1 = {
        ..._90
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._91
      };
    }
    export const multisig = {
      ..._92
    };
    export const secp256k1 = {
      ..._93
    };
    export const secp256r1 = {
      ..._94
    };
  }
  export namespace distribution {
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
      ..._210,
      ..._227,
      ..._247,
      ..._266
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._100
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._211,
      ..._228,
      ..._248,
      ..._267
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._212,
      ..._229,
      ..._249,
      ..._268
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
    export const v1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._213,
      ..._230,
      ..._250,
      ..._269
    };
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._214,
      ..._231,
      ..._251,
      ..._270
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._121
      };
    }
    export const v1 = {
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._215,
      ..._232,
      ..._252,
      ..._271
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._216,
      ..._233,
      ..._253,
      ..._272
    };
  }
  export namespace msg {
    export const v1 = {
      ..._132
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._133
      };
    }
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._217,
      ..._234,
      ..._254,
      ..._273
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._139
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._140,
        ..._255
      };
    }
    export const v1 = {
      ..._141
    };
    export const v1alpha1 = {
      ..._142
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._143
      };
    }
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._256
    };
  }
  export namespace query {
    export const v1 = {
      ..._146
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._147
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._148
      };
    }
    export const v1beta1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._218,
      ..._235,
      ..._257,
      ..._274
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._153
      };
    }
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._219,
      ..._236,
      ..._258,
      ..._275
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._159
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._160
      };
    }
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._259
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._163
      };
    }
    export const v1beta1 = {
      ..._164,
      ..._165,
      ..._166,
      ..._220,
      ..._237,
      ..._260,
      ..._276
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._167
      };
    }
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._221,
      ..._238,
      ..._277
    };
  }
  export const ClientFactory = {
    ..._280,
    ..._281
  };
}