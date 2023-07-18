import * as _83 from "./auth/v1beta1/auth";
import * as _84 from "./auth/v1beta1/genesis";
import * as _85 from "./auth/v1beta1/query";
import * as _86 from "./authz/v1beta1/authz";
import * as _87 from "./authz/v1beta1/event";
import * as _88 from "./authz/v1beta1/genesis";
import * as _89 from "./authz/v1beta1/query";
import * as _90 from "./authz/v1beta1/tx";
import * as _91 from "./bank/v1beta1/authz";
import * as _92 from "./bank/v1beta1/bank";
import * as _93 from "./bank/v1beta1/genesis";
import * as _94 from "./bank/v1beta1/query";
import * as _95 from "./bank/v1beta1/tx";
import * as _96 from "./base/abci/v1beta1/abci";
import * as _97 from "./base/kv/v1beta1/kv";
import * as _98 from "./base/node/v1beta1/query";
import * as _99 from "./base/query/v1beta1/pagination";
import * as _100 from "./base/reflection/v1beta1/reflection";
import * as _101 from "./base/reflection/v2alpha1/reflection";
import * as _102 from "./base/snapshots/v1beta1/snapshot";
import * as _103 from "./base/store/v1beta1/commit_info";
import * as _104 from "./base/store/v1beta1/listening";
import * as _105 from "./base/tendermint/v1beta1/query";
import * as _106 from "./base/v1beta1/coin";
import * as _107 from "./capability/v1beta1/capability";
import * as _108 from "./capability/v1beta1/genesis";
import * as _109 from "./crisis/v1beta1/genesis";
import * as _110 from "./crisis/v1beta1/tx";
import * as _111 from "./crypto/ed25519/keys";
import * as _112 from "./crypto/multisig/keys";
import * as _113 from "./crypto/secp256k1/keys";
import * as _114 from "./crypto/secp256r1/keys";
import * as _115 from "./distribution/v1beta1/distribution";
import * as _116 from "./distribution/v1beta1/genesis";
import * as _117 from "./distribution/v1beta1/query";
import * as _118 from "./distribution/v1beta1/tx";
import * as _119 from "./evidence/v1beta1/evidence";
import * as _120 from "./evidence/v1beta1/genesis";
import * as _121 from "./evidence/v1beta1/query";
import * as _122 from "./evidence/v1beta1/tx";
import * as _123 from "./feegrant/v1beta1/feegrant";
import * as _124 from "./feegrant/v1beta1/genesis";
import * as _125 from "./feegrant/v1beta1/query";
import * as _126 from "./feegrant/v1beta1/tx";
import * as _127 from "./genutil/v1beta1/genesis";
import * as _128 from "./gov/v1beta1/genesis";
import * as _129 from "./gov/v1beta1/gov";
import * as _130 from "./gov/v1beta1/query";
import * as _131 from "./gov/v1beta1/tx";
import * as _132 from "./mint/v1beta1/genesis";
import * as _133 from "./mint/v1beta1/mint";
import * as _134 from "./mint/v1beta1/query";
import * as _135 from "./params/v1beta1/params";
import * as _136 from "./params/v1beta1/query";
import * as _137 from "./slashing/v1beta1/genesis";
import * as _138 from "./slashing/v1beta1/query";
import * as _139 from "./slashing/v1beta1/slashing";
import * as _140 from "./slashing/v1beta1/tx";
import * as _141 from "./staking/v1beta1/authz";
import * as _142 from "./staking/v1beta1/genesis";
import * as _143 from "./staking/v1beta1/query";
import * as _144 from "./staking/v1beta1/staking";
import * as _145 from "./staking/v1beta1/tx";
import * as _146 from "./tx/signing/v1beta1/signing";
import * as _147 from "./tx/v1beta1/service";
import * as _148 from "./tx/v1beta1/tx";
import * as _149 from "./upgrade/v1beta1/query";
import * as _150 from "./upgrade/v1beta1/upgrade";
import * as _151 from "./vesting/v1beta1/tx";
import * as _152 from "./vesting/v1beta1/vesting";
import * as _256 from "./authz/v1beta1/tx.amino";
import * as _257 from "./bank/v1beta1/tx.amino";
import * as _258 from "./crisis/v1beta1/tx.amino";
import * as _259 from "./distribution/v1beta1/tx.amino";
import * as _260 from "./evidence/v1beta1/tx.amino";
import * as _261 from "./feegrant/v1beta1/tx.amino";
import * as _262 from "./gov/v1beta1/tx.amino";
import * as _263 from "./slashing/v1beta1/tx.amino";
import * as _264 from "./staking/v1beta1/tx.amino";
import * as _265 from "./vesting/v1beta1/tx.amino";
import * as _266 from "./authz/v1beta1/tx.registry";
import * as _267 from "./bank/v1beta1/tx.registry";
import * as _268 from "./crisis/v1beta1/tx.registry";
import * as _269 from "./distribution/v1beta1/tx.registry";
import * as _270 from "./evidence/v1beta1/tx.registry";
import * as _271 from "./feegrant/v1beta1/tx.registry";
import * as _272 from "./gov/v1beta1/tx.registry";
import * as _273 from "./slashing/v1beta1/tx.registry";
import * as _274 from "./staking/v1beta1/tx.registry";
import * as _275 from "./vesting/v1beta1/tx.registry";
import * as _276 from "./auth/v1beta1/query.lcd";
import * as _277 from "./authz/v1beta1/query.lcd";
import * as _278 from "./bank/v1beta1/query.lcd";
import * as _279 from "./base/node/v1beta1/query.lcd";
import * as _280 from "./base/tendermint/v1beta1/query.lcd";
import * as _281 from "./distribution/v1beta1/query.lcd";
import * as _282 from "./evidence/v1beta1/query.lcd";
import * as _283 from "./feegrant/v1beta1/query.lcd";
import * as _284 from "./gov/v1beta1/query.lcd";
import * as _285 from "./mint/v1beta1/query.lcd";
import * as _286 from "./params/v1beta1/query.lcd";
import * as _287 from "./slashing/v1beta1/query.lcd";
import * as _288 from "./staking/v1beta1/query.lcd";
import * as _289 from "./tx/v1beta1/service.lcd";
import * as _290 from "./upgrade/v1beta1/query.lcd";
import * as _291 from "./auth/v1beta1/query.rpc.Query";
import * as _292 from "./authz/v1beta1/query.rpc.Query";
import * as _293 from "./bank/v1beta1/query.rpc.Query";
import * as _294 from "./base/node/v1beta1/query.rpc.Service";
import * as _295 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _296 from "./distribution/v1beta1/query.rpc.Query";
import * as _297 from "./evidence/v1beta1/query.rpc.Query";
import * as _298 from "./feegrant/v1beta1/query.rpc.Query";
import * as _299 from "./gov/v1beta1/query.rpc.Query";
import * as _300 from "./mint/v1beta1/query.rpc.Query";
import * as _301 from "./params/v1beta1/query.rpc.Query";
import * as _302 from "./slashing/v1beta1/query.rpc.Query";
import * as _303 from "./staking/v1beta1/query.rpc.Query";
import * as _304 from "./tx/v1beta1/service.rpc.Service";
import * as _305 from "./upgrade/v1beta1/query.rpc.Query";
import * as _306 from "./authz/v1beta1/tx.rpc.msg";
import * as _307 from "./bank/v1beta1/tx.rpc.msg";
import * as _308 from "./crisis/v1beta1/tx.rpc.msg";
import * as _309 from "./distribution/v1beta1/tx.rpc.msg";
import * as _310 from "./evidence/v1beta1/tx.rpc.msg";
import * as _311 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _312 from "./gov/v1beta1/tx.rpc.msg";
import * as _313 from "./slashing/v1beta1/tx.rpc.msg";
import * as _314 from "./staking/v1beta1/tx.rpc.msg";
import * as _315 from "./vesting/v1beta1/tx.rpc.msg";
import * as _319 from "./lcd";
import * as _320 from "./rpc.query";
import * as _321 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._276,
      ..._291
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._256,
      ..._266,
      ..._277,
      ..._292,
      ..._306
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._257,
      ..._267,
      ..._278,
      ..._293,
      ..._307
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._96
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._97
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._98,
        ..._279,
        ..._294
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._99
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._100
      };
      export const v2alpha1 = {
        ..._101
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._102
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._103,
        ..._104
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._105,
        ..._280,
        ..._295
      };
    }
    export const v1beta1 = {
      ..._106
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._107,
      ..._108
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._258,
      ..._268,
      ..._308
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._111
    };
    export const multisig = {
      ..._112
    };
    export const secp256k1 = {
      ..._113
    };
    export const secp256r1 = {
      ..._114
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._259,
      ..._269,
      ..._281,
      ..._296,
      ..._309
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._260,
      ..._270,
      ..._282,
      ..._297,
      ..._310
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._261,
      ..._271,
      ..._283,
      ..._298,
      ..._311
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._127
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._262,
      ..._272,
      ..._284,
      ..._299,
      ..._312
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._285,
      ..._300
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._286,
      ..._301
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._263,
      ..._273,
      ..._287,
      ..._302,
      ..._313
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._264,
      ..._274,
      ..._288,
      ..._303,
      ..._314
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._146
      };
    }
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._289,
      ..._304
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._149,
      ..._150,
      ..._290,
      ..._305
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._265,
      ..._275,
      ..._315
    };
  }
  export const ClientFactory = {
    ..._319,
    ..._320,
    ..._321
  };
}