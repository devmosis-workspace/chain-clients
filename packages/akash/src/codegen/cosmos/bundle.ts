import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v1beta1/reflection";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/snapshots/v1beta1/snapshot";
import * as _20 from "./base/store/v1beta1/commit_info";
import * as _21 from "./base/store/v1beta1/listening";
import * as _22 from "./base/tendermint/v1beta1/query";
import * as _23 from "./base/v1beta1/coin";
import * as _24 from "./capability/v1beta1/capability";
import * as _25 from "./capability/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/genesis";
import * as _27 from "./crisis/v1beta1/tx";
import * as _28 from "./crypto/ed25519/keys";
import * as _29 from "./crypto/multisig/keys";
import * as _30 from "./crypto/secp256k1/keys";
import * as _31 from "./crypto/secp256r1/keys";
import * as _32 from "./distribution/v1beta1/distribution";
import * as _33 from "./distribution/v1beta1/genesis";
import * as _34 from "./distribution/v1beta1/query";
import * as _35 from "./distribution/v1beta1/tx";
import * as _36 from "./evidence/v1beta1/evidence";
import * as _37 from "./evidence/v1beta1/genesis";
import * as _38 from "./evidence/v1beta1/query";
import * as _39 from "./evidence/v1beta1/tx";
import * as _40 from "./feegrant/v1beta1/feegrant";
import * as _41 from "./feegrant/v1beta1/genesis";
import * as _42 from "./feegrant/v1beta1/query";
import * as _43 from "./feegrant/v1beta1/tx";
import * as _44 from "./genutil/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/gov";
import * as _47 from "./gov/v1beta1/query";
import * as _48 from "./gov/v1beta1/tx";
import * as _49 from "./mint/v1beta1/genesis";
import * as _50 from "./mint/v1beta1/mint";
import * as _51 from "./mint/v1beta1/query";
import * as _52 from "./params/v1beta1/params";
import * as _53 from "./params/v1beta1/query";
import * as _54 from "./slashing/v1beta1/genesis";
import * as _55 from "./slashing/v1beta1/query";
import * as _56 from "./slashing/v1beta1/slashing";
import * as _57 from "./slashing/v1beta1/tx";
import * as _58 from "./staking/v1beta1/authz";
import * as _59 from "./staking/v1beta1/genesis";
import * as _60 from "./staking/v1beta1/query";
import * as _61 from "./staking/v1beta1/staking";
import * as _62 from "./staking/v1beta1/tx";
import * as _63 from "./tx/signing/v1beta1/signing";
import * as _64 from "./tx/v1beta1/service";
import * as _65 from "./tx/v1beta1/tx";
import * as _66 from "./upgrade/v1beta1/query";
import * as _67 from "./upgrade/v1beta1/upgrade";
import * as _68 from "./vesting/v1beta1/tx";
import * as _69 from "./vesting/v1beta1/vesting";
import * as _102 from "./authz/v1beta1/tx.amino";
import * as _103 from "./bank/v1beta1/tx.amino";
import * as _104 from "./crisis/v1beta1/tx.amino";
import * as _105 from "./distribution/v1beta1/tx.amino";
import * as _106 from "./evidence/v1beta1/tx.amino";
import * as _107 from "./feegrant/v1beta1/tx.amino";
import * as _108 from "./gov/v1beta1/tx.amino";
import * as _109 from "./slashing/v1beta1/tx.amino";
import * as _110 from "./staking/v1beta1/tx.amino";
import * as _111 from "./vesting/v1beta1/tx.amino";
import * as _112 from "./authz/v1beta1/tx.registry";
import * as _113 from "./bank/v1beta1/tx.registry";
import * as _114 from "./crisis/v1beta1/tx.registry";
import * as _115 from "./distribution/v1beta1/tx.registry";
import * as _116 from "./evidence/v1beta1/tx.registry";
import * as _117 from "./feegrant/v1beta1/tx.registry";
import * as _118 from "./gov/v1beta1/tx.registry";
import * as _119 from "./slashing/v1beta1/tx.registry";
import * as _120 from "./staking/v1beta1/tx.registry";
import * as _121 from "./vesting/v1beta1/tx.registry";
import * as _122 from "./auth/v1beta1/query.lcd";
import * as _123 from "./authz/v1beta1/query.lcd";
import * as _124 from "./bank/v1beta1/query.lcd";
import * as _125 from "./base/node/v1beta1/query.lcd";
import * as _126 from "./base/tendermint/v1beta1/query.lcd";
import * as _127 from "./distribution/v1beta1/query.lcd";
import * as _128 from "./evidence/v1beta1/query.lcd";
import * as _129 from "./feegrant/v1beta1/query.lcd";
import * as _130 from "./gov/v1beta1/query.lcd";
import * as _131 from "./mint/v1beta1/query.lcd";
import * as _132 from "./params/v1beta1/query.lcd";
import * as _133 from "./slashing/v1beta1/query.lcd";
import * as _134 from "./staking/v1beta1/query.lcd";
import * as _135 from "./tx/v1beta1/service.lcd";
import * as _136 from "./upgrade/v1beta1/query.lcd";
import * as _137 from "./auth/v1beta1/query.rpc.Query";
import * as _138 from "./authz/v1beta1/query.rpc.Query";
import * as _139 from "./bank/v1beta1/query.rpc.Query";
import * as _140 from "./base/node/v1beta1/query.rpc.Service";
import * as _141 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _142 from "./distribution/v1beta1/query.rpc.Query";
import * as _143 from "./evidence/v1beta1/query.rpc.Query";
import * as _144 from "./feegrant/v1beta1/query.rpc.Query";
import * as _145 from "./gov/v1beta1/query.rpc.Query";
import * as _146 from "./mint/v1beta1/query.rpc.Query";
import * as _147 from "./params/v1beta1/query.rpc.Query";
import * as _148 from "./slashing/v1beta1/query.rpc.Query";
import * as _149 from "./staking/v1beta1/query.rpc.Query";
import * as _150 from "./tx/v1beta1/service.rpc.Service";
import * as _151 from "./upgrade/v1beta1/query.rpc.Query";
import * as _152 from "./authz/v1beta1/tx.rpc.msg";
import * as _153 from "./bank/v1beta1/tx.rpc.msg";
import * as _154 from "./crisis/v1beta1/tx.rpc.msg";
import * as _155 from "./distribution/v1beta1/tx.rpc.msg";
import * as _156 from "./evidence/v1beta1/tx.rpc.msg";
import * as _157 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _158 from "./gov/v1beta1/tx.rpc.msg";
import * as _159 from "./slashing/v1beta1/tx.rpc.msg";
import * as _160 from "./staking/v1beta1/tx.rpc.msg";
import * as _161 from "./vesting/v1beta1/tx.rpc.msg";
import * as _162 from "./lcd";
import * as _163 from "./rpc.query";
import * as _164 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._122,
      ..._137
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._102,
      ..._112,
      ..._123,
      ..._138,
      ..._152
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._103,
      ..._113,
      ..._124,
      ..._139,
      ..._153
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._13
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._15,
        ..._125,
        ..._140
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._17
      };
      export const v2alpha1 = {
        ..._18
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._20,
        ..._21
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._22,
        ..._126,
        ..._141
      };
    }
    export const v1beta1 = {
      ..._23
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._24,
      ..._25
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._104,
      ..._114,
      ..._154
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._28
    };
    export const multisig = {
      ..._29
    };
    export const secp256k1 = {
      ..._30
    };
    export const secp256r1 = {
      ..._31
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._105,
      ..._115,
      ..._127,
      ..._142,
      ..._155
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._106,
      ..._116,
      ..._128,
      ..._143,
      ..._156
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._107,
      ..._117,
      ..._129,
      ..._144,
      ..._157
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._44
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._108,
      ..._118,
      ..._130,
      ..._145,
      ..._158
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._131,
      ..._146
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._132,
      ..._147
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._109,
      ..._119,
      ..._133,
      ..._148,
      ..._159
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._110,
      ..._120,
      ..._134,
      ..._149,
      ..._160
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._135,
      ..._150
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._136,
      ..._151
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._111,
      ..._121,
      ..._161
    };
  }
  export const ClientFactory = {
    ..._162,
    ..._163,
    ..._164
  };
}