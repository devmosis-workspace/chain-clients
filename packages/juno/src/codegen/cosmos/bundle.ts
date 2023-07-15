import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/query";
import * as _14 from "./authz/v1beta1/tx";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/kv/v1beta1/kv";
import * as _22 from "./base/node/v1beta1/query";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/tendermint/v1beta1/query";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./capability/v1beta1/capability";
import * as _32 from "./capability/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/tx";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/gov";
import * as _54 from "./gov/v1beta1/query";
import * as _55 from "./gov/v1beta1/tx";
import * as _56 from "./mint/v1beta1/genesis";
import * as _57 from "./mint/v1beta1/mint";
import * as _58 from "./mint/v1beta1/query";
import * as _59 from "./params/v1beta1/params";
import * as _60 from "./params/v1beta1/query";
import * as _61 from "./slashing/v1beta1/genesis";
import * as _62 from "./slashing/v1beta1/query";
import * as _63 from "./slashing/v1beta1/slashing";
import * as _64 from "./slashing/v1beta1/tx";
import * as _65 from "./staking/v1beta1/authz";
import * as _66 from "./staking/v1beta1/genesis";
import * as _67 from "./staking/v1beta1/query";
import * as _68 from "./staking/v1beta1/staking";
import * as _69 from "./staking/v1beta1/tx";
import * as _70 from "./tx/signing/v1beta1/signing";
import * as _71 from "./tx/v1beta1/service";
import * as _72 from "./tx/v1beta1/tx";
import * as _73 from "./upgrade/v1beta1/query";
import * as _74 from "./upgrade/v1beta1/upgrade";
import * as _75 from "./vesting/v1beta1/tx";
import * as _76 from "./vesting/v1beta1/vesting";
import * as _113 from "./authz/v1beta1/tx.amino";
import * as _114 from "./bank/v1beta1/tx.amino";
import * as _115 from "./crisis/v1beta1/tx.amino";
import * as _116 from "./distribution/v1beta1/tx.amino";
import * as _117 from "./evidence/v1beta1/tx.amino";
import * as _118 from "./feegrant/v1beta1/tx.amino";
import * as _119 from "./gov/v1beta1/tx.amino";
import * as _120 from "./slashing/v1beta1/tx.amino";
import * as _121 from "./staking/v1beta1/tx.amino";
import * as _122 from "./vesting/v1beta1/tx.amino";
import * as _123 from "./authz/v1beta1/tx.registry";
import * as _124 from "./bank/v1beta1/tx.registry";
import * as _125 from "./crisis/v1beta1/tx.registry";
import * as _126 from "./distribution/v1beta1/tx.registry";
import * as _127 from "./evidence/v1beta1/tx.registry";
import * as _128 from "./feegrant/v1beta1/tx.registry";
import * as _129 from "./gov/v1beta1/tx.registry";
import * as _130 from "./slashing/v1beta1/tx.registry";
import * as _131 from "./staking/v1beta1/tx.registry";
import * as _132 from "./vesting/v1beta1/tx.registry";
import * as _133 from "./auth/v1beta1/query.rpc.Query";
import * as _134 from "./authz/v1beta1/query.rpc.Query";
import * as _135 from "./bank/v1beta1/query.rpc.Query";
import * as _136 from "./base/node/v1beta1/query.rpc.Service";
import * as _137 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _138 from "./distribution/v1beta1/query.rpc.Query";
import * as _139 from "./evidence/v1beta1/query.rpc.Query";
import * as _140 from "./feegrant/v1beta1/query.rpc.Query";
import * as _141 from "./gov/v1beta1/query.rpc.Query";
import * as _142 from "./mint/v1beta1/query.rpc.Query";
import * as _143 from "./params/v1beta1/query.rpc.Query";
import * as _144 from "./slashing/v1beta1/query.rpc.Query";
import * as _145 from "./staking/v1beta1/query.rpc.Query";
import * as _146 from "./tx/v1beta1/service.rpc.Service";
import * as _147 from "./upgrade/v1beta1/query.rpc.Query";
import * as _148 from "./authz/v1beta1/tx.rpc.msg";
import * as _149 from "./bank/v1beta1/tx.rpc.msg";
import * as _150 from "./crisis/v1beta1/tx.rpc.msg";
import * as _151 from "./distribution/v1beta1/tx.rpc.msg";
import * as _152 from "./evidence/v1beta1/tx.rpc.msg";
import * as _153 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _154 from "./gov/v1beta1/tx.rpc.msg";
import * as _155 from "./slashing/v1beta1/tx.rpc.msg";
import * as _156 from "./staking/v1beta1/tx.rpc.msg";
import * as _157 from "./vesting/v1beta1/tx.rpc.msg";
import * as _160 from "./rpc.query";
import * as _161 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._133
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._113,
      ..._123,
      ..._134,
      ..._148
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._114,
      ..._124,
      ..._135,
      ..._149
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._22,
        ..._136
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._24
      };
      export const v2alpha1 = {
        ..._25
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._26
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._27,
        ..._28
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._29,
        ..._137
      };
    }
    export const v1beta1 = {
      ..._30
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._31,
      ..._32
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._115,
      ..._125,
      ..._150
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._35
    };
    export const multisig = {
      ..._36
    };
    export const secp256k1 = {
      ..._37
    };
    export const secp256r1 = {
      ..._38
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._116,
      ..._126,
      ..._138,
      ..._151
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._117,
      ..._127,
      ..._139,
      ..._152
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._118,
      ..._128,
      ..._140,
      ..._153
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._51
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._119,
      ..._129,
      ..._141,
      ..._154
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._142
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._143
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._120,
      ..._130,
      ..._144,
      ..._155
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._121,
      ..._131,
      ..._145,
      ..._156
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._70
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._146
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._147
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._122,
      ..._132,
      ..._157
    };
  }
  export const ClientFactory = {
    ..._160,
    ..._161
  };
}