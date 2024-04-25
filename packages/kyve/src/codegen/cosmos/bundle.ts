import * as _49 from "./app/runtime/v1alpha1/module";
import * as _50 from "./app/v1alpha1/config";
import * as _51 from "./app/v1alpha1/module";
import * as _52 from "./app/v1alpha1/query";
import * as _53 from "./auth/module/v1/module";
import * as _54 from "./auth/v1beta1/auth";
import * as _55 from "./auth/v1beta1/genesis";
import * as _56 from "./auth/v1beta1/query";
import * as _57 from "./auth/v1beta1/tx";
import * as _58 from "./authz/module/v1/module";
import * as _59 from "./authz/v1beta1/authz";
import * as _60 from "./authz/v1beta1/event";
import * as _61 from "./authz/v1beta1/genesis";
import * as _62 from "./authz/v1beta1/query";
import * as _63 from "./authz/v1beta1/tx";
import * as _64 from "./autocli/v1/options";
import * as _65 from "./autocli/v1/query";
import * as _66 from "./bank/module/v1/module";
import * as _67 from "./bank/v1beta1/authz";
import * as _68 from "./bank/v1beta1/bank";
import * as _69 from "./bank/v1beta1/genesis";
import * as _70 from "./bank/v1beta1/query";
import * as _71 from "./bank/v1beta1/tx";
import * as _72 from "./base/abci/v1beta1/abci";
import * as _73 from "./base/kv/v1beta1/kv";
import * as _74 from "./base/node/v1beta1/query";
import * as _75 from "./base/query/v1beta1/pagination";
import * as _76 from "./base/reflection/v1beta1/reflection";
import * as _77 from "./base/reflection/v2alpha1/reflection";
import * as _78 from "./base/snapshots/v1beta1/snapshot";
import * as _79 from "./base/store/v1beta1/commit_info";
import * as _80 from "./base/store/v1beta1/listening";
import * as _81 from "./base/tendermint/v1beta1/query";
import * as _82 from "./base/tendermint/v1beta1/types";
import * as _83 from "./base/v1beta1/coin";
import * as _84 from "./capability/module/v1/module";
import * as _85 from "./capability/v1beta1/capability";
import * as _86 from "./capability/v1beta1/genesis";
import * as _87 from "./consensus/module/v1/module";
import * as _88 from "./consensus/v1/query";
import * as _89 from "./consensus/v1/tx";
import * as _90 from "./crisis/module/v1/module";
import * as _91 from "./crisis/v1beta1/genesis";
import * as _92 from "./crisis/v1beta1/tx";
import * as _93 from "./crypto/ed25519/keys";
import * as _94 from "./crypto/hd/v1/hd";
import * as _95 from "./crypto/keyring/v1/record";
import * as _96 from "./crypto/multisig/keys";
import * as _97 from "./crypto/secp256k1/keys";
import * as _98 from "./crypto/secp256r1/keys";
import * as _99 from "./distribution/module/v1/module";
import * as _100 from "./distribution/v1beta1/distribution";
import * as _101 from "./distribution/v1beta1/genesis";
import * as _102 from "./distribution/v1beta1/query";
import * as _103 from "./distribution/v1beta1/tx";
import * as _104 from "./evidence/module/v1/module";
import * as _105 from "./evidence/v1beta1/evidence";
import * as _106 from "./evidence/v1beta1/genesis";
import * as _107 from "./evidence/v1beta1/query";
import * as _108 from "./evidence/v1beta1/tx";
import * as _109 from "./feegrant/module/v1/module";
import * as _110 from "./feegrant/v1beta1/feegrant";
import * as _111 from "./feegrant/v1beta1/genesis";
import * as _112 from "./feegrant/v1beta1/query";
import * as _113 from "./feegrant/v1beta1/tx";
import * as _114 from "./genutil/module/v1/module";
import * as _115 from "./genutil/v1beta1/genesis";
import * as _116 from "./gov/module/v1/module";
import * as _117 from "./gov/v1/genesis";
import * as _118 from "./gov/v1/gov";
import * as _119 from "./gov/v1/query";
import * as _120 from "./gov/v1/tx";
import * as _121 from "./gov/v1beta1/genesis";
import * as _122 from "./gov/v1beta1/gov";
import * as _123 from "./gov/v1beta1/query";
import * as _124 from "./gov/v1beta1/tx";
import * as _125 from "./group/module/v1/module";
import * as _126 from "./group/v1/events";
import * as _127 from "./group/v1/genesis";
import * as _128 from "./group/v1/query";
import * as _129 from "./group/v1/tx";
import * as _130 from "./group/v1/types";
import * as _131 from "./mint/module/v1/module";
import * as _132 from "./mint/v1beta1/genesis";
import * as _133 from "./mint/v1beta1/mint";
import * as _134 from "./mint/v1beta1/query";
import * as _135 from "./mint/v1beta1/tx";
import * as _136 from "./msg/v1/msg";
import * as _137 from "./nft/module/v1/module";
import * as _138 from "./nft/v1beta1/event";
import * as _139 from "./nft/v1beta1/genesis";
import * as _140 from "./nft/v1beta1/nft";
import * as _141 from "./nft/v1beta1/query";
import * as _142 from "./nft/v1beta1/tx";
import * as _143 from "./orm/module/v1alpha1/module";
import * as _144 from "./orm/query/v1alpha1/query";
import * as _145 from "./orm/v1/orm";
import * as _146 from "./orm/v1alpha1/schema";
import * as _147 from "./params/module/v1/module";
import * as _148 from "./params/v1beta1/params";
import * as _149 from "./params/v1beta1/query";
import * as _150 from "./query/v1/query";
import * as _151 from "./reflection/v1/reflection";
import * as _152 from "./slashing/module/v1/module";
import * as _153 from "./slashing/v1beta1/genesis";
import * as _154 from "./slashing/v1beta1/query";
import * as _155 from "./slashing/v1beta1/slashing";
import * as _156 from "./slashing/v1beta1/tx";
import * as _157 from "./staking/module/v1/module";
import * as _158 from "./staking/v1beta1/authz";
import * as _159 from "./staking/v1beta1/genesis";
import * as _160 from "./staking/v1beta1/query";
import * as _161 from "./staking/v1beta1/staking";
import * as _162 from "./staking/v1beta1/tx";
import * as _163 from "./tx/config/v1/config";
import * as _164 from "./tx/signing/v1beta1/signing";
import * as _165 from "./tx/v1beta1/service";
import * as _166 from "./tx/v1beta1/tx";
import * as _167 from "./upgrade/module/v1/module";
import * as _168 from "./upgrade/v1beta1/query";
import * as _169 from "./upgrade/v1beta1/tx";
import * as _170 from "./upgrade/v1beta1/upgrade";
import * as _171 from "./vesting/module/v1/module";
import * as _172 from "./vesting/v1beta1/tx";
import * as _173 from "./vesting/v1beta1/vesting";
import * as _228 from "./auth/v1beta1/tx.amino";
import * as _229 from "./authz/v1beta1/tx.amino";
import * as _230 from "./bank/v1beta1/tx.amino";
import * as _231 from "./consensus/v1/tx.amino";
import * as _232 from "./crisis/v1beta1/tx.amino";
import * as _233 from "./distribution/v1beta1/tx.amino";
import * as _234 from "./evidence/v1beta1/tx.amino";
import * as _235 from "./feegrant/v1beta1/tx.amino";
import * as _236 from "./gov/v1/tx.amino";
import * as _237 from "./gov/v1beta1/tx.amino";
import * as _238 from "./group/v1/tx.amino";
import * as _239 from "./mint/v1beta1/tx.amino";
import * as _240 from "./nft/v1beta1/tx.amino";
import * as _241 from "./slashing/v1beta1/tx.amino";
import * as _242 from "./staking/v1beta1/tx.amino";
import * as _243 from "./upgrade/v1beta1/tx.amino";
import * as _244 from "./vesting/v1beta1/tx.amino";
import * as _245 from "./auth/v1beta1/tx.registry";
import * as _246 from "./authz/v1beta1/tx.registry";
import * as _247 from "./bank/v1beta1/tx.registry";
import * as _248 from "./consensus/v1/tx.registry";
import * as _249 from "./crisis/v1beta1/tx.registry";
import * as _250 from "./distribution/v1beta1/tx.registry";
import * as _251 from "./evidence/v1beta1/tx.registry";
import * as _252 from "./feegrant/v1beta1/tx.registry";
import * as _253 from "./gov/v1/tx.registry";
import * as _254 from "./gov/v1beta1/tx.registry";
import * as _255 from "./group/v1/tx.registry";
import * as _256 from "./mint/v1beta1/tx.registry";
import * as _257 from "./nft/v1beta1/tx.registry";
import * as _258 from "./slashing/v1beta1/tx.registry";
import * as _259 from "./staking/v1beta1/tx.registry";
import * as _260 from "./upgrade/v1beta1/tx.registry";
import * as _261 from "./vesting/v1beta1/tx.registry";
import * as _262 from "./auth/v1beta1/query.lcd";
import * as _263 from "./authz/v1beta1/query.lcd";
import * as _264 from "./bank/v1beta1/query.lcd";
import * as _265 from "./base/node/v1beta1/query.lcd";
import * as _266 from "./base/tendermint/v1beta1/query.lcd";
import * as _267 from "./consensus/v1/query.lcd";
import * as _268 from "./distribution/v1beta1/query.lcd";
import * as _269 from "./evidence/v1beta1/query.lcd";
import * as _270 from "./feegrant/v1beta1/query.lcd";
import * as _271 from "./gov/v1/query.lcd";
import * as _272 from "./gov/v1beta1/query.lcd";
import * as _273 from "./group/v1/query.lcd";
import * as _274 from "./mint/v1beta1/query.lcd";
import * as _275 from "./nft/v1beta1/query.lcd";
import * as _276 from "./params/v1beta1/query.lcd";
import * as _277 from "./slashing/v1beta1/query.lcd";
import * as _278 from "./staking/v1beta1/query.lcd";
import * as _279 from "./tx/v1beta1/service.lcd";
import * as _280 from "./upgrade/v1beta1/query.lcd";
import * as _281 from "./app/v1alpha1/query.rpc.Query";
import * as _282 from "./auth/v1beta1/query.rpc.Query";
import * as _283 from "./authz/v1beta1/query.rpc.Query";
import * as _284 from "./autocli/v1/query.rpc.Query";
import * as _285 from "./bank/v1beta1/query.rpc.Query";
import * as _286 from "./base/node/v1beta1/query.rpc.Service";
import * as _287 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _288 from "./consensus/v1/query.rpc.Query";
import * as _289 from "./distribution/v1beta1/query.rpc.Query";
import * as _290 from "./evidence/v1beta1/query.rpc.Query";
import * as _291 from "./feegrant/v1beta1/query.rpc.Query";
import * as _292 from "./gov/v1/query.rpc.Query";
import * as _293 from "./gov/v1beta1/query.rpc.Query";
import * as _294 from "./group/v1/query.rpc.Query";
import * as _295 from "./mint/v1beta1/query.rpc.Query";
import * as _296 from "./nft/v1beta1/query.rpc.Query";
import * as _297 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _298 from "./params/v1beta1/query.rpc.Query";
import * as _299 from "./slashing/v1beta1/query.rpc.Query";
import * as _300 from "./staking/v1beta1/query.rpc.Query";
import * as _301 from "./tx/v1beta1/service.rpc.Service";
import * as _302 from "./upgrade/v1beta1/query.rpc.Query";
import * as _303 from "./auth/v1beta1/tx.rpc.msg";
import * as _304 from "./authz/v1beta1/tx.rpc.msg";
import * as _305 from "./bank/v1beta1/tx.rpc.msg";
import * as _306 from "./consensus/v1/tx.rpc.msg";
import * as _307 from "./crisis/v1beta1/tx.rpc.msg";
import * as _308 from "./distribution/v1beta1/tx.rpc.msg";
import * as _309 from "./evidence/v1beta1/tx.rpc.msg";
import * as _310 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _311 from "./gov/v1/tx.rpc.msg";
import * as _312 from "./gov/v1beta1/tx.rpc.msg";
import * as _313 from "./group/v1/tx.rpc.msg";
import * as _314 from "./mint/v1beta1/tx.rpc.msg";
import * as _315 from "./nft/v1beta1/tx.rpc.msg";
import * as _316 from "./slashing/v1beta1/tx.rpc.msg";
import * as _317 from "./staking/v1beta1/tx.rpc.msg";
import * as _318 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _319 from "./vesting/v1beta1/tx.rpc.msg";
import * as _323 from "./lcd";
import * as _324 from "./rpc.query";
import * as _325 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._49
      };
    }
    export const v1alpha1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._281
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._228,
      ..._245,
      ..._262,
      ..._282,
      ..._303
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._229,
      ..._246,
      ..._263,
      ..._283,
      ..._304
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._64,
      ..._65,
      ..._284
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._230,
      ..._247,
      ..._264,
      ..._285,
      ..._305
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._72
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._73
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._74,
        ..._265,
        ..._286
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._75
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._76
      };
      export const v2alpha1 = {
        ..._77
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._78
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._79,
        ..._80
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._81,
        ..._82,
        ..._266,
        ..._287
      };
    }
    export const v1beta1 = {
      ..._83
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1 = {
      ..._88,
      ..._89,
      ..._231,
      ..._248,
      ..._267,
      ..._288,
      ..._306
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._232,
      ..._249,
      ..._307
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._93
    };
    export namespace hd {
      export const v1 = {
        ..._94
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._95
      };
    }
    export const multisig = {
      ..._96
    };
    export const secp256k1 = {
      ..._97
    };
    export const secp256r1 = {
      ..._98
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._99
      };
    }
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._233,
      ..._250,
      ..._268,
      ..._289,
      ..._308
    };
  }
  export namespace evidence {
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
      ..._234,
      ..._251,
      ..._269,
      ..._290,
      ..._309
    };
  }
  export namespace feegrant {
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
      ..._235,
      ..._252,
      ..._270,
      ..._291,
      ..._310
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._114
      };
    }
    export const v1beta1 = {
      ..._115
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._116
      };
    }
    export const v1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._236,
      ..._253,
      ..._271,
      ..._292,
      ..._311
    };
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._237,
      ..._254,
      ..._272,
      ..._293,
      ..._312
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._125
      };
    }
    export const v1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._238,
      ..._255,
      ..._273,
      ..._294,
      ..._313
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._131
      };
    }
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._239,
      ..._256,
      ..._274,
      ..._295,
      ..._314
    };
  }
  export namespace msg {
    export const v1 = {
      ..._136
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._137
      };
    }
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._240,
      ..._257,
      ..._275,
      ..._296,
      ..._315
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._143
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._144,
        ..._297
      };
    }
    export const v1 = {
      ..._145
    };
    export const v1alpha1 = {
      ..._146
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._147
      };
    }
    export const v1beta1 = {
      ..._148,
      ..._149,
      ..._276,
      ..._298
    };
  }
  export namespace query {
    export const v1 = {
      ..._150
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._151
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._152
      };
    }
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._241,
      ..._258,
      ..._277,
      ..._299,
      ..._316
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._157
      };
    }
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._242,
      ..._259,
      ..._278,
      ..._300,
      ..._317
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._163
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._164
      };
    }
    export const v1beta1 = {
      ..._165,
      ..._166,
      ..._279,
      ..._301
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._167
      };
    }
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._243,
      ..._260,
      ..._280,
      ..._302,
      ..._318
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._171
      };
    }
    export const v1beta1 = {
      ..._172,
      ..._173,
      ..._244,
      ..._261,
      ..._319
    };
  }
  export const ClientFactory = {
    ..._323,
    ..._324,
    ..._325
  };
}