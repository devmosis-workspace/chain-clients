import * as _64 from "./app/module/v1alpha1/module";
import * as _65 from "./app/v1alpha1/config";
import * as _66 from "./app/v1alpha1/module";
import * as _67 from "./app/v1alpha1/query";
import * as _68 from "./auth/v1beta1/auth";
import * as _69 from "./auth/v1beta1/genesis";
import * as _70 from "./auth/v1beta1/query";
import * as _71 from "./authz/v1beta1/authz";
import * as _72 from "./authz/v1beta1/event";
import * as _73 from "./authz/v1beta1/genesis";
import * as _74 from "./authz/v1beta1/query";
import * as _75 from "./authz/v1beta1/tx";
import * as _76 from "./bank/v1beta1/authz";
import * as _77 from "./bank/v1beta1/bank";
import * as _78 from "./bank/v1beta1/genesis";
import * as _79 from "./bank/v1beta1/query";
import * as _80 from "./bank/v1beta1/tx";
import * as _81 from "./base/abci/v1beta1/abci";
import * as _82 from "./base/kv/v1beta1/kv";
import * as _83 from "./base/node/v1beta1/query";
import * as _84 from "./base/query/v1beta1/pagination";
import * as _85 from "./base/reflection/v1beta1/reflection";
import * as _86 from "./base/reflection/v2alpha1/reflection";
import * as _87 from "./base/snapshots/v1beta1/snapshot";
import * as _88 from "./base/store/v1beta1/commit_info";
import * as _89 from "./base/store/v1beta1/listening";
import * as _90 from "./base/tendermint/v1beta1/query";
import * as _91 from "./base/tendermint/v1beta1/types";
import * as _92 from "./base/v1beta1/coin";
import * as _93 from "./capability/v1beta1/capability";
import * as _94 from "./capability/v1beta1/genesis";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/hd/v1/hd";
import * as _99 from "./crypto/keyring/v1/record";
import * as _100 from "./crypto/multisig/keys";
import * as _101 from "./crypto/secp256k1/keys";
import * as _102 from "./crypto/secp256r1/keys";
import * as _103 from "./distribution/v1beta1/distribution";
import * as _104 from "./distribution/v1beta1/genesis";
import * as _105 from "./distribution/v1beta1/query";
import * as _106 from "./distribution/v1beta1/tx";
import * as _107 from "./evidence/v1beta1/evidence";
import * as _108 from "./evidence/v1beta1/genesis";
import * as _109 from "./evidence/v1beta1/query";
import * as _110 from "./evidence/v1beta1/tx";
import * as _111 from "./feegrant/v1beta1/feegrant";
import * as _112 from "./feegrant/v1beta1/genesis";
import * as _113 from "./feegrant/v1beta1/query";
import * as _114 from "./feegrant/v1beta1/tx";
import * as _115 from "./genutil/v1beta1/genesis";
import * as _116 from "./gov/v1/genesis";
import * as _117 from "./gov/v1/gov";
import * as _118 from "./gov/v1/query";
import * as _119 from "./gov/v1/tx";
import * as _120 from "./gov/v1beta1/genesis";
import * as _121 from "./gov/v1beta1/gov";
import * as _122 from "./gov/v1beta1/query";
import * as _123 from "./gov/v1beta1/tx";
import * as _124 from "./group/v1/events";
import * as _125 from "./group/v1/genesis";
import * as _126 from "./group/v1/query";
import * as _127 from "./group/v1/tx";
import * as _128 from "./group/v1/types";
import * as _129 from "./mint/v1beta1/genesis";
import * as _130 from "./mint/v1beta1/mint";
import * as _131 from "./mint/v1beta1/query";
import * as _132 from "./msg/v1/msg";
import * as _133 from "./nft/v1beta1/event";
import * as _134 from "./nft/v1beta1/genesis";
import * as _135 from "./nft/v1beta1/nft";
import * as _136 from "./nft/v1beta1/query";
import * as _137 from "./nft/v1beta1/tx";
import * as _138 from "./orm/module/v1alpha1/module";
import * as _139 from "./orm/v1/orm";
import * as _140 from "./orm/v1alpha1/schema";
import * as _141 from "./params/v1beta1/params";
import * as _142 from "./params/v1beta1/query";
import * as _143 from "./slashing/v1beta1/genesis";
import * as _144 from "./slashing/v1beta1/query";
import * as _145 from "./slashing/v1beta1/slashing";
import * as _146 from "./slashing/v1beta1/tx";
import * as _147 from "./staking/v1beta1/authz";
import * as _148 from "./staking/v1beta1/genesis";
import * as _149 from "./staking/v1beta1/query";
import * as _150 from "./staking/v1beta1/staking";
import * as _151 from "./staking/v1beta1/tx";
import * as _152 from "./tx/signing/v1beta1/signing";
import * as _153 from "./tx/v1beta1/service";
import * as _154 from "./tx/v1beta1/tx";
import * as _155 from "./upgrade/v1beta1/query";
import * as _156 from "./upgrade/v1beta1/tx";
import * as _157 from "./upgrade/v1beta1/upgrade";
import * as _158 from "./vesting/v1beta1/tx";
import * as _159 from "./vesting/v1beta1/vesting";
import * as _253 from "./authz/v1beta1/tx.amino";
import * as _254 from "./bank/v1beta1/tx.amino";
import * as _255 from "./crisis/v1beta1/tx.amino";
import * as _256 from "./distribution/v1beta1/tx.amino";
import * as _257 from "./evidence/v1beta1/tx.amino";
import * as _258 from "./feegrant/v1beta1/tx.amino";
import * as _259 from "./gov/v1/tx.amino";
import * as _260 from "./gov/v1beta1/tx.amino";
import * as _261 from "./group/v1/tx.amino";
import * as _262 from "./nft/v1beta1/tx.amino";
import * as _263 from "./slashing/v1beta1/tx.amino";
import * as _264 from "./staking/v1beta1/tx.amino";
import * as _265 from "./upgrade/v1beta1/tx.amino";
import * as _266 from "./vesting/v1beta1/tx.amino";
import * as _267 from "./authz/v1beta1/tx.registry";
import * as _268 from "./bank/v1beta1/tx.registry";
import * as _269 from "./crisis/v1beta1/tx.registry";
import * as _270 from "./distribution/v1beta1/tx.registry";
import * as _271 from "./evidence/v1beta1/tx.registry";
import * as _272 from "./feegrant/v1beta1/tx.registry";
import * as _273 from "./gov/v1/tx.registry";
import * as _274 from "./gov/v1beta1/tx.registry";
import * as _275 from "./group/v1/tx.registry";
import * as _276 from "./nft/v1beta1/tx.registry";
import * as _277 from "./slashing/v1beta1/tx.registry";
import * as _278 from "./staking/v1beta1/tx.registry";
import * as _279 from "./upgrade/v1beta1/tx.registry";
import * as _280 from "./vesting/v1beta1/tx.registry";
import * as _281 from "./auth/v1beta1/query.lcd";
import * as _282 from "./authz/v1beta1/query.lcd";
import * as _283 from "./bank/v1beta1/query.lcd";
import * as _284 from "./base/node/v1beta1/query.lcd";
import * as _285 from "./base/tendermint/v1beta1/query.lcd";
import * as _286 from "./distribution/v1beta1/query.lcd";
import * as _287 from "./evidence/v1beta1/query.lcd";
import * as _288 from "./feegrant/v1beta1/query.lcd";
import * as _289 from "./gov/v1/query.lcd";
import * as _290 from "./gov/v1beta1/query.lcd";
import * as _291 from "./group/v1/query.lcd";
import * as _292 from "./mint/v1beta1/query.lcd";
import * as _293 from "./nft/v1beta1/query.lcd";
import * as _294 from "./params/v1beta1/query.lcd";
import * as _295 from "./slashing/v1beta1/query.lcd";
import * as _296 from "./staking/v1beta1/query.lcd";
import * as _297 from "./tx/v1beta1/service.lcd";
import * as _298 from "./upgrade/v1beta1/query.lcd";
import * as _299 from "./app/v1alpha1/query.rpc.Query";
import * as _300 from "./auth/v1beta1/query.rpc.Query";
import * as _301 from "./authz/v1beta1/query.rpc.Query";
import * as _302 from "./bank/v1beta1/query.rpc.Query";
import * as _303 from "./base/node/v1beta1/query.rpc.Service";
import * as _304 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _305 from "./distribution/v1beta1/query.rpc.Query";
import * as _306 from "./evidence/v1beta1/query.rpc.Query";
import * as _307 from "./feegrant/v1beta1/query.rpc.Query";
import * as _308 from "./gov/v1/query.rpc.Query";
import * as _309 from "./gov/v1beta1/query.rpc.Query";
import * as _310 from "./group/v1/query.rpc.Query";
import * as _311 from "./mint/v1beta1/query.rpc.Query";
import * as _312 from "./nft/v1beta1/query.rpc.Query";
import * as _313 from "./params/v1beta1/query.rpc.Query";
import * as _314 from "./slashing/v1beta1/query.rpc.Query";
import * as _315 from "./staking/v1beta1/query.rpc.Query";
import * as _316 from "./tx/v1beta1/service.rpc.Service";
import * as _317 from "./upgrade/v1beta1/query.rpc.Query";
import * as _318 from "./authz/v1beta1/tx.rpc.msg";
import * as _319 from "./bank/v1beta1/tx.rpc.msg";
import * as _320 from "./crisis/v1beta1/tx.rpc.msg";
import * as _321 from "./distribution/v1beta1/tx.rpc.msg";
import * as _322 from "./evidence/v1beta1/tx.rpc.msg";
import * as _323 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _324 from "./gov/v1/tx.rpc.msg";
import * as _325 from "./gov/v1beta1/tx.rpc.msg";
import * as _326 from "./group/v1/tx.rpc.msg";
import * as _327 from "./nft/v1beta1/tx.rpc.msg";
import * as _328 from "./slashing/v1beta1/tx.rpc.msg";
import * as _329 from "./staking/v1beta1/tx.rpc.msg";
import * as _330 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _331 from "./vesting/v1beta1/tx.rpc.msg";
import * as _335 from "./lcd";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._64
      };
    }
    export const v1alpha1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._299
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._281,
      ..._300
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._253,
      ..._267,
      ..._282,
      ..._301,
      ..._318
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._254,
      ..._268,
      ..._283,
      ..._302,
      ..._319
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._81
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._82
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._83,
        ..._284,
        ..._303
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._84
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._85
      };
      export const v2alpha1 = {
        ..._86
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._87
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._88,
        ..._89
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._90,
        ..._91,
        ..._285,
        ..._304
      };
    }
    export const v1beta1 = {
      ..._92
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._93,
      ..._94
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._255,
      ..._269,
      ..._320
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
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._256,
      ..._270,
      ..._286,
      ..._305,
      ..._321
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._257,
      ..._271,
      ..._287,
      ..._306,
      ..._322
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._258,
      ..._272,
      ..._288,
      ..._307,
      ..._323
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._115
    };
  }
  export namespace gov {
    export const v1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._259,
      ..._273,
      ..._289,
      ..._308,
      ..._324
    };
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._260,
      ..._274,
      ..._290,
      ..._309,
      ..._325
    };
  }
  export namespace group {
    export const v1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._261,
      ..._275,
      ..._291,
      ..._310,
      ..._326
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._292,
      ..._311
    };
  }
  export namespace msg {
    export const v1 = {
      ..._132
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._262,
      ..._276,
      ..._293,
      ..._312,
      ..._327
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._138
      };
    }
    export const v1 = {
      ..._139
    };
    export const v1alpha1 = {
      ..._140
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._294,
      ..._313
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._263,
      ..._277,
      ..._295,
      ..._314,
      ..._328
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._264,
      ..._278,
      ..._296,
      ..._315,
      ..._329
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._152
      };
    }
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._297,
      ..._316
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._265,
      ..._279,
      ..._298,
      ..._317,
      ..._330
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._266,
      ..._280,
      ..._331
    };
  }
  export const ClientFactory = {
    ..._335,
    ..._336,
    ..._337
  };
}