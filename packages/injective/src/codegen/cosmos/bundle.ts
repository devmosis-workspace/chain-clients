import * as _52 from "./app/runtime/v1alpha1/module";
import * as _53 from "./app/v1alpha1/config";
import * as _54 from "./app/v1alpha1/module";
import * as _55 from "./app/v1alpha1/query";
import * as _56 from "./auth/module/v1/module";
import * as _57 from "./auth/v1beta1/auth";
import * as _58 from "./auth/v1beta1/genesis";
import * as _59 from "./auth/v1beta1/query";
import * as _60 from "./auth/v1beta1/tx";
import * as _61 from "./authz/module/v1/module";
import * as _62 from "./authz/v1beta1/authz";
import * as _63 from "./authz/v1beta1/event";
import * as _64 from "./authz/v1beta1/genesis";
import * as _65 from "./authz/v1beta1/query";
import * as _66 from "./authz/v1beta1/tx";
import * as _67 from "./autocli/v1/options";
import * as _68 from "./autocli/v1/query";
import * as _69 from "./bank/module/v1/module";
import * as _70 from "./bank/v1beta1/authz";
import * as _71 from "./bank/v1beta1/bank";
import * as _72 from "./bank/v1beta1/events";
import * as _73 from "./bank/v1beta1/genesis";
import * as _74 from "./bank/v1beta1/query";
import * as _75 from "./bank/v1beta1/tx";
import * as _76 from "./base/abci/v1beta1/abci";
import * as _77 from "./base/kv/v1beta1/kv";
import * as _78 from "./base/node/v1beta1/query";
import * as _79 from "./base/query/v1beta1/pagination";
import * as _80 from "./base/reflection/v1beta1/reflection";
import * as _81 from "./base/reflection/v2alpha1/reflection";
import * as _82 from "./base/snapshots/v1beta1/snapshot";
import * as _83 from "./base/store/v1beta1/commit_info";
import * as _84 from "./base/store/v1beta1/listening";
import * as _85 from "./base/tendermint/v1beta1/query";
import * as _86 from "./base/tendermint/v1beta1/types";
import * as _87 from "./base/v1beta1/coin";
import * as _88 from "./capability/module/v1/module";
import * as _89 from "./capability/v1beta1/capability";
import * as _90 from "./capability/v1beta1/genesis";
import * as _91 from "./consensus/module/v1/module";
import * as _92 from "./consensus/v1/query";
import * as _93 from "./consensus/v1/tx";
import * as _94 from "./crisis/module/v1/module";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/hd/v1/hd";
import * as _99 from "./crypto/keyring/v1/record";
import * as _100 from "./crypto/multisig/keys";
import * as _101 from "./crypto/secp256k1/keys";
import * as _102 from "./crypto/secp256r1/keys";
import * as _103 from "./distribution/module/v1/module";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./evidence/module/v1/module";
import * as _109 from "./evidence/v1beta1/evidence";
import * as _110 from "./evidence/v1beta1/genesis";
import * as _111 from "./evidence/v1beta1/query";
import * as _112 from "./evidence/v1beta1/tx";
import * as _113 from "./feegrant/module/v1/module";
import * as _114 from "./feegrant/v1beta1/feegrant";
import * as _115 from "./feegrant/v1beta1/genesis";
import * as _116 from "./feegrant/v1beta1/query";
import * as _117 from "./feegrant/v1beta1/tx";
import * as _118 from "./genutil/module/v1/module";
import * as _119 from "./genutil/v1beta1/genesis";
import * as _120 from "./gov/module/v1/module";
import * as _121 from "./gov/v1/genesis";
import * as _122 from "./gov/v1/gov";
import * as _123 from "./gov/v1/query";
import * as _124 from "./gov/v1/tx";
import * as _125 from "./gov/v1beta1/genesis";
import * as _126 from "./gov/v1beta1/gov";
import * as _127 from "./gov/v1beta1/query";
import * as _128 from "./gov/v1beta1/tx";
import * as _129 from "./group/module/v1/module";
import * as _130 from "./group/v1/events";
import * as _131 from "./group/v1/genesis";
import * as _132 from "./group/v1/query";
import * as _133 from "./group/v1/tx";
import * as _134 from "./group/v1/types";
import * as _135 from "./mint/module/v1/module";
import * as _136 from "./mint/v1beta1/genesis";
import * as _137 from "./mint/v1beta1/mint";
import * as _138 from "./mint/v1beta1/query";
import * as _139 from "./mint/v1beta1/tx";
import * as _140 from "./msg/v1/msg";
import * as _141 from "./nft/module/v1/module";
import * as _142 from "./nft/v1beta1/event";
import * as _143 from "./nft/v1beta1/genesis";
import * as _144 from "./nft/v1beta1/nft";
import * as _145 from "./nft/v1beta1/query";
import * as _146 from "./nft/v1beta1/tx";
import * as _147 from "./orm/module/v1alpha1/module";
import * as _148 from "./orm/query/v1alpha1/query";
import * as _149 from "./orm/v1/orm";
import * as _150 from "./orm/v1alpha1/schema";
import * as _151 from "./params/module/v1/module";
import * as _152 from "./params/v1beta1/params";
import * as _153 from "./params/v1beta1/query";
import * as _154 from "./query/v1/query";
import * as _155 from "./reflection/v1/reflection";
import * as _156 from "./slashing/module/v1/module";
import * as _157 from "./slashing/v1beta1/genesis";
import * as _158 from "./slashing/v1beta1/query";
import * as _159 from "./slashing/v1beta1/slashing";
import * as _160 from "./slashing/v1beta1/tx";
import * as _161 from "./staking/module/v1/module";
import * as _162 from "./staking/v1beta1/authz";
import * as _163 from "./staking/v1beta1/genesis";
import * as _164 from "./staking/v1beta1/query";
import * as _165 from "./staking/v1beta1/staking";
import * as _166 from "./staking/v1beta1/tx";
import * as _167 from "./tx/config/v1/config";
import * as _168 from "./tx/signing/v1beta1/signing";
import * as _169 from "./tx/v1beta1/service";
import * as _170 from "./tx/v1beta1/tx";
import * as _171 from "./upgrade/module/v1/module";
import * as _172 from "./upgrade/v1beta1/query";
import * as _173 from "./upgrade/v1beta1/tx";
import * as _174 from "./upgrade/v1beta1/upgrade";
import * as _175 from "./vesting/module/v1/module";
import * as _176 from "./vesting/v1beta1/tx";
import * as _177 from "./vesting/v1beta1/vesting";
import * as _235 from "./auth/v1beta1/tx.amino";
import * as _236 from "./authz/v1beta1/tx.amino";
import * as _237 from "./bank/v1beta1/tx.amino";
import * as _238 from "./consensus/v1/tx.amino";
import * as _239 from "./crisis/v1beta1/tx.amino";
import * as _240 from "./distribution/v1beta1/tx.amino";
import * as _241 from "./evidence/v1beta1/tx.amino";
import * as _242 from "./feegrant/v1beta1/tx.amino";
import * as _243 from "./gov/v1/tx.amino";
import * as _244 from "./gov/v1beta1/tx.amino";
import * as _245 from "./group/v1/tx.amino";
import * as _246 from "./mint/v1beta1/tx.amino";
import * as _247 from "./nft/v1beta1/tx.amino";
import * as _248 from "./slashing/v1beta1/tx.amino";
import * as _249 from "./staking/v1beta1/tx.amino";
import * as _250 from "./upgrade/v1beta1/tx.amino";
import * as _251 from "./vesting/v1beta1/tx.amino";
import * as _252 from "./auth/v1beta1/tx.registry";
import * as _253 from "./authz/v1beta1/tx.registry";
import * as _254 from "./bank/v1beta1/tx.registry";
import * as _255 from "./consensus/v1/tx.registry";
import * as _256 from "./crisis/v1beta1/tx.registry";
import * as _257 from "./distribution/v1beta1/tx.registry";
import * as _258 from "./evidence/v1beta1/tx.registry";
import * as _259 from "./feegrant/v1beta1/tx.registry";
import * as _260 from "./gov/v1/tx.registry";
import * as _261 from "./gov/v1beta1/tx.registry";
import * as _262 from "./group/v1/tx.registry";
import * as _263 from "./mint/v1beta1/tx.registry";
import * as _264 from "./nft/v1beta1/tx.registry";
import * as _265 from "./slashing/v1beta1/tx.registry";
import * as _266 from "./staking/v1beta1/tx.registry";
import * as _267 from "./upgrade/v1beta1/tx.registry";
import * as _268 from "./vesting/v1beta1/tx.registry";
import * as _269 from "./app/v1alpha1/query.rpc.Query";
import * as _270 from "./auth/v1beta1/query.rpc.Query";
import * as _271 from "./authz/v1beta1/query.rpc.Query";
import * as _272 from "./autocli/v1/query.rpc.Query";
import * as _273 from "./bank/v1beta1/query.rpc.Query";
import * as _274 from "./base/node/v1beta1/query.rpc.Service";
import * as _275 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _276 from "./consensus/v1/query.rpc.Query";
import * as _277 from "./distribution/v1beta1/query.rpc.Query";
import * as _278 from "./evidence/v1beta1/query.rpc.Query";
import * as _279 from "./feegrant/v1beta1/query.rpc.Query";
import * as _280 from "./gov/v1/query.rpc.Query";
import * as _281 from "./gov/v1beta1/query.rpc.Query";
import * as _282 from "./group/v1/query.rpc.Query";
import * as _283 from "./mint/v1beta1/query.rpc.Query";
import * as _284 from "./nft/v1beta1/query.rpc.Query";
import * as _285 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _286 from "./params/v1beta1/query.rpc.Query";
import * as _287 from "./slashing/v1beta1/query.rpc.Query";
import * as _288 from "./staking/v1beta1/query.rpc.Query";
import * as _289 from "./tx/v1beta1/service.rpc.Service";
import * as _290 from "./upgrade/v1beta1/query.rpc.Query";
import * as _291 from "./auth/v1beta1/tx.rpc.msg";
import * as _292 from "./authz/v1beta1/tx.rpc.msg";
import * as _293 from "./bank/v1beta1/tx.rpc.msg";
import * as _294 from "./consensus/v1/tx.rpc.msg";
import * as _295 from "./crisis/v1beta1/tx.rpc.msg";
import * as _296 from "./distribution/v1beta1/tx.rpc.msg";
import * as _297 from "./evidence/v1beta1/tx.rpc.msg";
import * as _298 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _299 from "./gov/v1/tx.rpc.msg";
import * as _300 from "./gov/v1beta1/tx.rpc.msg";
import * as _301 from "./group/v1/tx.rpc.msg";
import * as _302 from "./mint/v1beta1/tx.rpc.msg";
import * as _303 from "./nft/v1beta1/tx.rpc.msg";
import * as _304 from "./slashing/v1beta1/tx.rpc.msg";
import * as _305 from "./staking/v1beta1/tx.rpc.msg";
import * as _306 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _307 from "./vesting/v1beta1/tx.rpc.msg";
import * as _314 from "./rpc.query";
import * as _315 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._52
      };
    }
    export const v1alpha1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._269
    };
  }
  export namespace auth {
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
      ..._235,
      ..._252,
      ..._270,
      ..._291
    };
  }
  export namespace authz {
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
      ..._66,
      ..._236,
      ..._253,
      ..._271,
      ..._292
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._67,
      ..._68,
      ..._272
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._237,
      ..._254,
      ..._273,
      ..._293
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._76
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._77
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._78,
        ..._274
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._79
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._80
      };
      export const v2alpha1 = {
        ..._81
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._82
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._83,
        ..._84
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._85,
        ..._86,
        ..._275
      };
    }
    export const v1beta1 = {
      ..._87
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1 = {
      ..._92,
      ..._93,
      ..._238,
      ..._255,
      ..._276,
      ..._294
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._239,
      ..._256,
      ..._295
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._97
    };
    export namespace hd {
      export const v1 = {
        ..._98
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._99
      };
    }
    export const multisig = {
      ..._100
    };
    export const secp256k1 = {
      ..._101
    };
    export const secp256r1 = {
      ..._102
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._240,
      ..._257,
      ..._277,
      ..._296
    };
  }
  export namespace evidence {
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
      ..._241,
      ..._258,
      ..._278,
      ..._297
    };
  }
  export namespace feegrant {
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
      ..._242,
      ..._259,
      ..._279,
      ..._298
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._120
      };
    }
    export const v1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._243,
      ..._260,
      ..._280,
      ..._299
    };
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._244,
      ..._261,
      ..._281,
      ..._300
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._129
      };
    }
    export const v1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._245,
      ..._262,
      ..._282,
      ..._301
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._246,
      ..._263,
      ..._283,
      ..._302
    };
  }
  export namespace msg {
    export const v1 = {
      ..._140
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._141
      };
    }
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._247,
      ..._264,
      ..._284,
      ..._303
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._147
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._148,
        ..._285
      };
    }
    export const v1 = {
      ..._149
    };
    export const v1alpha1 = {
      ..._150
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._151
      };
    }
    export const v1beta1 = {
      ..._152,
      ..._153,
      ..._286
    };
  }
  export namespace query {
    export const v1 = {
      ..._154
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._155
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._156
      };
    }
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._248,
      ..._265,
      ..._287,
      ..._304
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._161
      };
    }
    export const v1beta1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._249,
      ..._266,
      ..._288,
      ..._305
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._167
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._168
      };
    }
    export const v1beta1 = {
      ..._169,
      ..._170,
      ..._289
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._171
      };
    }
    export const v1beta1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._250,
      ..._267,
      ..._290,
      ..._306
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._175
      };
    }
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._251,
      ..._268,
      ..._307
    };
  }
  export const ClientFactory = {
    ..._314,
    ..._315
  };
}