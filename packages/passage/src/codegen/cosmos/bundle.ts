import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/node/v1beta1/query";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./evidence/v1beta1/evidence";
import * as _42 from "./evidence/v1beta1/genesis";
import * as _43 from "./evidence/v1beta1/query";
import * as _44 from "./evidence/v1beta1/tx";
import * as _45 from "./feegrant/v1beta1/feegrant";
import * as _46 from "./feegrant/v1beta1/genesis";
import * as _47 from "./feegrant/v1beta1/query";
import * as _48 from "./feegrant/v1beta1/tx";
import * as _49 from "./genutil/v1beta1/genesis";
import * as _50 from "./gov/v1beta1/genesis";
import * as _51 from "./gov/v1beta1/gov";
import * as _52 from "./gov/v1beta1/query";
import * as _53 from "./gov/v1beta1/tx";
import * as _54 from "./mint/v1beta1/genesis";
import * as _55 from "./mint/v1beta1/mint";
import * as _56 from "./mint/v1beta1/query";
import * as _57 from "./params/v1beta1/params";
import * as _58 from "./params/v1beta1/query";
import * as _59 from "./slashing/v1beta1/genesis";
import * as _60 from "./slashing/v1beta1/query";
import * as _61 from "./slashing/v1beta1/slashing";
import * as _62 from "./slashing/v1beta1/tx";
import * as _63 from "./staking/v1beta1/authz";
import * as _64 from "./staking/v1beta1/genesis";
import * as _65 from "./staking/v1beta1/query";
import * as _66 from "./staking/v1beta1/staking";
import * as _67 from "./staking/v1beta1/tx";
import * as _68 from "./tx/signing/v1beta1/signing";
import * as _69 from "./tx/v1beta1/service";
import * as _70 from "./tx/v1beta1/tx";
import * as _71 from "./upgrade/v1beta1/query";
import * as _72 from "./upgrade/v1beta1/upgrade";
import * as _73 from "./vesting/v1beta1/tx";
import * as _74 from "./vesting/v1beta1/vesting";
import * as _106 from "./authz/v1beta1/tx.amino";
import * as _107 from "./bank/v1beta1/tx.amino";
import * as _108 from "./crisis/v1beta1/tx.amino";
import * as _109 from "./distribution/v1beta1/tx.amino";
import * as _110 from "./evidence/v1beta1/tx.amino";
import * as _111 from "./feegrant/v1beta1/tx.amino";
import * as _112 from "./gov/v1beta1/tx.amino";
import * as _113 from "./slashing/v1beta1/tx.amino";
import * as _114 from "./staking/v1beta1/tx.amino";
import * as _115 from "./vesting/v1beta1/tx.amino";
import * as _116 from "./authz/v1beta1/tx.registry";
import * as _117 from "./bank/v1beta1/tx.registry";
import * as _118 from "./crisis/v1beta1/tx.registry";
import * as _119 from "./distribution/v1beta1/tx.registry";
import * as _120 from "./evidence/v1beta1/tx.registry";
import * as _121 from "./feegrant/v1beta1/tx.registry";
import * as _122 from "./gov/v1beta1/tx.registry";
import * as _123 from "./slashing/v1beta1/tx.registry";
import * as _124 from "./staking/v1beta1/tx.registry";
import * as _125 from "./vesting/v1beta1/tx.registry";
import * as _126 from "./auth/v1beta1/query.lcd";
import * as _127 from "./authz/v1beta1/query.lcd";
import * as _128 from "./bank/v1beta1/query.lcd";
import * as _129 from "./base/node/v1beta1/query.lcd";
import * as _130 from "./base/tendermint/v1beta1/query.lcd";
import * as _131 from "./distribution/v1beta1/query.lcd";
import * as _132 from "./evidence/v1beta1/query.lcd";
import * as _133 from "./feegrant/v1beta1/query.lcd";
import * as _134 from "./gov/v1beta1/query.lcd";
import * as _135 from "./mint/v1beta1/query.lcd";
import * as _136 from "./params/v1beta1/query.lcd";
import * as _137 from "./slashing/v1beta1/query.lcd";
import * as _138 from "./staking/v1beta1/query.lcd";
import * as _139 from "./tx/v1beta1/service.lcd";
import * as _140 from "./upgrade/v1beta1/query.lcd";
import * as _141 from "./auth/v1beta1/query.rpc.Query";
import * as _142 from "./authz/v1beta1/query.rpc.Query";
import * as _143 from "./bank/v1beta1/query.rpc.Query";
import * as _144 from "./base/node/v1beta1/query.rpc.Service";
import * as _145 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _146 from "./distribution/v1beta1/query.rpc.Query";
import * as _147 from "./evidence/v1beta1/query.rpc.Query";
import * as _148 from "./feegrant/v1beta1/query.rpc.Query";
import * as _149 from "./gov/v1beta1/query.rpc.Query";
import * as _150 from "./mint/v1beta1/query.rpc.Query";
import * as _151 from "./params/v1beta1/query.rpc.Query";
import * as _152 from "./slashing/v1beta1/query.rpc.Query";
import * as _153 from "./staking/v1beta1/query.rpc.Query";
import * as _154 from "./tx/v1beta1/service.rpc.Service";
import * as _155 from "./upgrade/v1beta1/query.rpc.Query";
import * as _156 from "./authz/v1beta1/tx.rpc.msg";
import * as _157 from "./bank/v1beta1/tx.rpc.msg";
import * as _158 from "./crisis/v1beta1/tx.rpc.msg";
import * as _159 from "./distribution/v1beta1/tx.rpc.msg";
import * as _160 from "./evidence/v1beta1/tx.rpc.msg";
import * as _161 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _162 from "./gov/v1beta1/tx.rpc.msg";
import * as _163 from "./slashing/v1beta1/tx.rpc.msg";
import * as _164 from "./staking/v1beta1/tx.rpc.msg";
import * as _165 from "./vesting/v1beta1/tx.rpc.msg";
import * as _174 from "./lcd";
import * as _175 from "./rpc.query";
import * as _176 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._126,
      ..._141
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._106,
      ..._116,
      ..._127,
      ..._142,
      ..._156
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._107,
      ..._117,
      ..._128,
      ..._143,
      ..._157
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._18
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._20,
        ..._129,
        ..._144
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._22
      };
      export const v2alpha1 = {
        ..._23
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._25,
        ..._26
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._27,
        ..._130,
        ..._145
      };
    }
    export const v1beta1 = {
      ..._28
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._29,
      ..._30
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._108,
      ..._118,
      ..._158
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export const multisig = {
      ..._34
    };
    export const secp256k1 = {
      ..._35
    };
    export const secp256r1 = {
      ..._36
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._109,
      ..._119,
      ..._131,
      ..._146,
      ..._159
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._110,
      ..._120,
      ..._132,
      ..._147,
      ..._160
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._111,
      ..._121,
      ..._133,
      ..._148,
      ..._161
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._49
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._112,
      ..._122,
      ..._134,
      ..._149,
      ..._162
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._135,
      ..._150
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._136,
      ..._151
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._113,
      ..._123,
      ..._137,
      ..._152,
      ..._163
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._114,
      ..._124,
      ..._138,
      ..._153,
      ..._164
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._139,
      ..._154
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._140,
      ..._155
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._115,
      ..._125,
      ..._165
    };
  }
  export const ClientFactory = {
    ..._174,
    ..._175,
    ..._176
  };
}