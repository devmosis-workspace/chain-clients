import * as _87 from "./auth/v1beta1/auth";
import * as _88 from "./auth/v1beta1/genesis";
import * as _89 from "./auth/v1beta1/query";
import * as _90 from "./authz/v1beta1/authz";
import * as _91 from "./authz/v1beta1/event";
import * as _92 from "./authz/v1beta1/genesis";
import * as _93 from "./authz/v1beta1/query";
import * as _94 from "./authz/v1beta1/tx";
import * as _95 from "./bank/v1beta1/authz";
import * as _96 from "./bank/v1beta1/bank";
import * as _97 from "./bank/v1beta1/genesis";
import * as _98 from "./bank/v1beta1/query";
import * as _99 from "./bank/v1beta1/tx";
import * as _100 from "./base/abci/v1beta1/abci";
import * as _101 from "./base/kv/v1beta1/kv";
import * as _102 from "./base/node/v1beta1/query";
import * as _103 from "./base/query/v1beta1/pagination";
import * as _104 from "./base/reflection/v1beta1/reflection";
import * as _105 from "./base/reflection/v2alpha1/reflection";
import * as _106 from "./base/snapshots/v1beta1/snapshot";
import * as _107 from "./base/store/v1beta1/commit_info";
import * as _108 from "./base/store/v1beta1/listening";
import * as _109 from "./base/tendermint/v1beta1/query";
import * as _110 from "./base/v1beta1/coin";
import * as _111 from "./capability/v1beta1/capability";
import * as _112 from "./capability/v1beta1/genesis";
import * as _113 from "./crisis/v1beta1/genesis";
import * as _114 from "./crisis/v1beta1/tx";
import * as _115 from "./crypto/ed25519/keys";
import * as _116 from "./crypto/multisig/keys";
import * as _117 from "./crypto/secp256k1/keys";
import * as _118 from "./crypto/secp256r1/keys";
import * as _119 from "./distribution/v1beta1/distribution";
import * as _120 from "./distribution/v1beta1/genesis";
import * as _121 from "./distribution/v1beta1/query";
import * as _122 from "./distribution/v1beta1/tx";
import * as _123 from "./evidence/v1beta1/evidence";
import * as _124 from "./evidence/v1beta1/genesis";
import * as _125 from "./evidence/v1beta1/query";
import * as _126 from "./evidence/v1beta1/tx";
import * as _127 from "./feegrant/v1beta1/feegrant";
import * as _128 from "./feegrant/v1beta1/genesis";
import * as _129 from "./feegrant/v1beta1/query";
import * as _130 from "./feegrant/v1beta1/tx";
import * as _131 from "./genutil/v1beta1/genesis";
import * as _132 from "./gov/v1beta1/genesis";
import * as _133 from "./gov/v1beta1/gov";
import * as _134 from "./gov/v1beta1/query";
import * as _135 from "./gov/v1beta1/tx";
import * as _136 from "./mint/v1beta1/genesis";
import * as _137 from "./mint/v1beta1/mint";
import * as _138 from "./mint/v1beta1/query";
import * as _139 from "./params/v1beta1/params";
import * as _140 from "./params/v1beta1/query";
import * as _141 from "./slashing/v1beta1/genesis";
import * as _142 from "./slashing/v1beta1/query";
import * as _143 from "./slashing/v1beta1/slashing";
import * as _144 from "./slashing/v1beta1/tx";
import * as _145 from "./staking/v1beta1/authz";
import * as _146 from "./staking/v1beta1/genesis";
import * as _147 from "./staking/v1beta1/query";
import * as _148 from "./staking/v1beta1/staking";
import * as _149 from "./staking/v1beta1/tx";
import * as _150 from "./tx/signing/v1beta1/signing";
import * as _151 from "./tx/v1beta1/service";
import * as _152 from "./tx/v1beta1/tx";
import * as _153 from "./upgrade/v1beta1/query";
import * as _154 from "./upgrade/v1beta1/upgrade";
import * as _155 from "./vesting/v1beta1/tx";
import * as _156 from "./vesting/v1beta1/vesting";
import * as _264 from "./authz/v1beta1/tx.amino";
import * as _265 from "./bank/v1beta1/tx.amino";
import * as _266 from "./crisis/v1beta1/tx.amino";
import * as _267 from "./distribution/v1beta1/tx.amino";
import * as _268 from "./evidence/v1beta1/tx.amino";
import * as _269 from "./feegrant/v1beta1/tx.amino";
import * as _270 from "./gov/v1beta1/tx.amino";
import * as _271 from "./slashing/v1beta1/tx.amino";
import * as _272 from "./staking/v1beta1/tx.amino";
import * as _273 from "./vesting/v1beta1/tx.amino";
import * as _274 from "./authz/v1beta1/tx.registry";
import * as _275 from "./bank/v1beta1/tx.registry";
import * as _276 from "./crisis/v1beta1/tx.registry";
import * as _277 from "./distribution/v1beta1/tx.registry";
import * as _278 from "./evidence/v1beta1/tx.registry";
import * as _279 from "./feegrant/v1beta1/tx.registry";
import * as _280 from "./gov/v1beta1/tx.registry";
import * as _281 from "./slashing/v1beta1/tx.registry";
import * as _282 from "./staking/v1beta1/tx.registry";
import * as _283 from "./vesting/v1beta1/tx.registry";
import * as _284 from "./auth/v1beta1/query.lcd";
import * as _285 from "./authz/v1beta1/query.lcd";
import * as _286 from "./bank/v1beta1/query.lcd";
import * as _287 from "./base/node/v1beta1/query.lcd";
import * as _288 from "./base/tendermint/v1beta1/query.lcd";
import * as _289 from "./distribution/v1beta1/query.lcd";
import * as _290 from "./evidence/v1beta1/query.lcd";
import * as _291 from "./feegrant/v1beta1/query.lcd";
import * as _292 from "./gov/v1beta1/query.lcd";
import * as _293 from "./mint/v1beta1/query.lcd";
import * as _294 from "./params/v1beta1/query.lcd";
import * as _295 from "./slashing/v1beta1/query.lcd";
import * as _296 from "./staking/v1beta1/query.lcd";
import * as _297 from "./tx/v1beta1/service.lcd";
import * as _298 from "./upgrade/v1beta1/query.lcd";
import * as _299 from "./auth/v1beta1/query.rpc.Query";
import * as _300 from "./authz/v1beta1/query.rpc.Query";
import * as _301 from "./bank/v1beta1/query.rpc.Query";
import * as _302 from "./base/node/v1beta1/query.rpc.Service";
import * as _303 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _304 from "./distribution/v1beta1/query.rpc.Query";
import * as _305 from "./evidence/v1beta1/query.rpc.Query";
import * as _306 from "./feegrant/v1beta1/query.rpc.Query";
import * as _307 from "./gov/v1beta1/query.rpc.Query";
import * as _308 from "./mint/v1beta1/query.rpc.Query";
import * as _309 from "./params/v1beta1/query.rpc.Query";
import * as _310 from "./slashing/v1beta1/query.rpc.Query";
import * as _311 from "./staking/v1beta1/query.rpc.Query";
import * as _312 from "./tx/v1beta1/service.rpc.Service";
import * as _313 from "./upgrade/v1beta1/query.rpc.Query";
import * as _314 from "./authz/v1beta1/tx.rpc.msg";
import * as _315 from "./bank/v1beta1/tx.rpc.msg";
import * as _316 from "./crisis/v1beta1/tx.rpc.msg";
import * as _317 from "./distribution/v1beta1/tx.rpc.msg";
import * as _318 from "./evidence/v1beta1/tx.rpc.msg";
import * as _319 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _320 from "./gov/v1beta1/tx.rpc.msg";
import * as _321 from "./slashing/v1beta1/tx.rpc.msg";
import * as _322 from "./staking/v1beta1/tx.rpc.msg";
import * as _323 from "./vesting/v1beta1/tx.rpc.msg";
import * as _327 from "./lcd";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._284,
      ..._299
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._264,
      ..._274,
      ..._285,
      ..._300,
      ..._314
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._265,
      ..._275,
      ..._286,
      ..._301,
      ..._315
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._100
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._101
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._102,
        ..._287,
        ..._302
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._103
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._104
      };
      export const v2alpha1 = {
        ..._105
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._106
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._107,
        ..._108
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._109,
        ..._288,
        ..._303
      };
    }
    export const v1beta1 = {
      ..._110
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._111,
      ..._112
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._266,
      ..._276,
      ..._316
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._115
    };
    export const multisig = {
      ..._116
    };
    export const secp256k1 = {
      ..._117
    };
    export const secp256r1 = {
      ..._118
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._267,
      ..._277,
      ..._289,
      ..._304,
      ..._317
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._268,
      ..._278,
      ..._290,
      ..._305,
      ..._318
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._269,
      ..._279,
      ..._291,
      ..._306,
      ..._319
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._131
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._270,
      ..._280,
      ..._292,
      ..._307,
      ..._320
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._293,
      ..._308
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._294,
      ..._309
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._271,
      ..._281,
      ..._295,
      ..._310,
      ..._321
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._272,
      ..._282,
      ..._296,
      ..._311,
      ..._322
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._150
      };
    }
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._297,
      ..._312
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._298,
      ..._313
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._273,
      ..._283,
      ..._323
    };
  }
  export const ClientFactory = {
    ..._327,
    ..._328,
    ..._329
  };
}