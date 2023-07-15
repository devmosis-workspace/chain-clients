import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./base/kv/v1beta1/kv";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/reflection/v1beta1/reflection";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/listening";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./upgrade/v1beta1/upgrade";
import * as _26 from "./upgrade/v1beta1/query";
import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/tx";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/multisig/keys";
import * as _41 from "./crypto/secp256k1/keys";
import * as _42 from "./crypto/secp256r1/keys";
import * as _43 from "./distribution/v1beta1/distribution";
import * as _44 from "./distribution/v1beta1/genesis";
import * as _45 from "./distribution/v1beta1/query";
import * as _46 from "./distribution/v1beta1/tx";
import * as _47 from "./evidence/v1beta1/evidence";
import * as _48 from "./evidence/v1beta1/genesis";
import * as _49 from "./evidence/v1beta1/query";
import * as _50 from "./evidence/v1beta1/tx";
import * as _51 from "./feegrant/v1beta1/feegrant";
import * as _52 from "./feegrant/v1beta1/genesis";
import * as _53 from "./feegrant/v1beta1/query";
import * as _54 from "./feegrant/v1beta1/tx";
import * as _55 from "./genutil/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./mint/v1beta1/genesis";
import * as _61 from "./mint/v1beta1/mint";
import * as _62 from "./mint/v1beta1/query";
import * as _63 from "./params/v1beta1/params";
import * as _64 from "./params/v1beta1/query";
import * as _65 from "./slashing/v1beta1/genesis";
import * as _66 from "./slashing/v1beta1/query";
import * as _67 from "./slashing/v1beta1/slashing";
import * as _68 from "./slashing/v1beta1/tx";
import * as _69 from "./staking/v1beta1/authz";
import * as _70 from "./staking/v1beta1/genesis";
import * as _71 from "./staking/v1beta1/query";
import * as _72 from "./staking/v1beta1/staking";
import * as _73 from "./staking/v1beta1/tx";
import * as _74 from "./tx/signing/v1beta1/signing";
import * as _75 from "./tx/v1beta1/service";
import * as _76 from "./tx/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _124 from "./authz/v1beta1/tx.amino";
import * as _125 from "./bank/v1beta1/tx.amino";
import * as _126 from "./crisis/v1beta1/tx.amino";
import * as _127 from "./distribution/v1beta1/tx.amino";
import * as _128 from "./evidence/v1beta1/tx.amino";
import * as _129 from "./feegrant/v1beta1/tx.amino";
import * as _130 from "./gov/v1beta1/tx.amino";
import * as _131 from "./slashing/v1beta1/tx.amino";
import * as _132 from "./staking/v1beta1/tx.amino";
import * as _133 from "./vesting/v1beta1/tx.amino";
import * as _134 from "./authz/v1beta1/tx.registry";
import * as _135 from "./bank/v1beta1/tx.registry";
import * as _136 from "./crisis/v1beta1/tx.registry";
import * as _137 from "./distribution/v1beta1/tx.registry";
import * as _138 from "./evidence/v1beta1/tx.registry";
import * as _139 from "./feegrant/v1beta1/tx.registry";
import * as _140 from "./gov/v1beta1/tx.registry";
import * as _141 from "./slashing/v1beta1/tx.registry";
import * as _142 from "./staking/v1beta1/tx.registry";
import * as _143 from "./vesting/v1beta1/tx.registry";
import * as _144 from "./auth/v1beta1/query.rpc.Query";
import * as _145 from "./authz/v1beta1/query.rpc.Query";
import * as _146 from "./bank/v1beta1/query.rpc.Query";
import * as _147 from "./base/node/v1beta1/query.rpc.Service";
import * as _148 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _149 from "./distribution/v1beta1/query.rpc.Query";
import * as _150 from "./evidence/v1beta1/query.rpc.Query";
import * as _151 from "./feegrant/v1beta1/query.rpc.Query";
import * as _152 from "./gov/v1beta1/query.rpc.Query";
import * as _153 from "./mint/v1beta1/query.rpc.Query";
import * as _154 from "./params/v1beta1/query.rpc.Query";
import * as _155 from "./slashing/v1beta1/query.rpc.Query";
import * as _156 from "./staking/v1beta1/query.rpc.Query";
import * as _157 from "./tx/v1beta1/service.rpc.Service";
import * as _158 from "./upgrade/v1beta1/query.rpc.Query";
import * as _159 from "./authz/v1beta1/tx.rpc.msg";
import * as _160 from "./bank/v1beta1/tx.rpc.msg";
import * as _161 from "./crisis/v1beta1/tx.rpc.msg";
import * as _162 from "./distribution/v1beta1/tx.rpc.msg";
import * as _163 from "./evidence/v1beta1/tx.rpc.msg";
import * as _164 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _165 from "./gov/v1beta1/tx.rpc.msg";
import * as _166 from "./slashing/v1beta1/tx.rpc.msg";
import * as _167 from "./staking/v1beta1/tx.rpc.msg";
import * as _168 from "./vesting/v1beta1/tx.rpc.msg";
import * as _176 from "./rpc.query";
import * as _177 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._125,
      ..._135,
      ..._146,
      ..._160
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._15
      };
    }
    export const v1beta1 = {
      ..._16
    };
    export namespace kv {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._18,
        ..._147
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._19
      };
      export const v2alpha1 = {
        ..._20
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._22,
        ..._23
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._24,
        ..._148
      };
    }
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._158
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._144
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._124,
      ..._134,
      ..._145,
      ..._159
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._35,
      ..._36
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._126,
      ..._136,
      ..._161
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export const multisig = {
      ..._40
    };
    export const secp256k1 = {
      ..._41
    };
    export const secp256r1 = {
      ..._42
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._127,
      ..._137,
      ..._149,
      ..._162
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._128,
      ..._138,
      ..._150,
      ..._163
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._129,
      ..._139,
      ..._151,
      ..._164
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._55
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._130,
      ..._140,
      ..._152,
      ..._165
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._153
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._154
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._131,
      ..._141,
      ..._155,
      ..._166
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._132,
      ..._142,
      ..._156,
      ..._167
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._74
      };
    }
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._157
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._133,
      ..._143,
      ..._168
    };
  }
  export const ClientFactory = {
    ..._176,
    ..._177
  };
}