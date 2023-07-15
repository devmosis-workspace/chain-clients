import * as _14 from "./auth/v1beta1/auth";
import * as _15 from "./auth/v1beta1/genesis";
import * as _16 from "./auth/v1beta1/query";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/kv/v1beta1/kv";
import * as _29 from "./base/node/v1beta1/query";
import * as _30 from "./base/query/v1beta1/pagination";
import * as _31 from "./base/reflection/v1beta1/reflection";
import * as _32 from "./base/reflection/v2alpha1/reflection";
import * as _33 from "./base/snapshots/v1beta1/snapshot";
import * as _34 from "./base/store/v1beta1/commit_info";
import * as _35 from "./base/store/v1beta1/listening";
import * as _36 from "./base/tendermint/v1beta1/query";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/tx";
import * as _42 from "./crypto/ed25519/keys";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/gov";
import * as _61 from "./gov/v1beta1/query";
import * as _62 from "./gov/v1beta1/tx";
import * as _63 from "./mint/v1beta1/genesis";
import * as _64 from "./mint/v1beta1/mint";
import * as _65 from "./mint/v1beta1/query";
import * as _66 from "./params/v1beta1/params";
import * as _67 from "./params/v1beta1/query";
import * as _68 from "./slashing/v1beta1/genesis";
import * as _69 from "./slashing/v1beta1/query";
import * as _70 from "./slashing/v1beta1/slashing";
import * as _71 from "./slashing/v1beta1/tx";
import * as _72 from "./staking/v1beta1/authz";
import * as _73 from "./staking/v1beta1/genesis";
import * as _74 from "./staking/v1beta1/query";
import * as _75 from "./staking/v1beta1/staking";
import * as _76 from "./staking/v1beta1/tx";
import * as _77 from "./tx/signing/v1beta1/signing";
import * as _78 from "./tx/v1beta1/service";
import * as _79 from "./tx/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/query";
import * as _81 from "./upgrade/v1beta1/upgrade";
import * as _82 from "./vesting/v1beta1/tx";
import * as _83 from "./vesting/v1beta1/vesting";
import * as _128 from "./authz/v1beta1/tx.amino";
import * as _129 from "./bank/v1beta1/tx.amino";
import * as _130 from "./crisis/v1beta1/tx.amino";
import * as _131 from "./distribution/v1beta1/tx.amino";
import * as _132 from "./evidence/v1beta1/tx.amino";
import * as _133 from "./feegrant/v1beta1/tx.amino";
import * as _134 from "./gov/v1beta1/tx.amino";
import * as _135 from "./slashing/v1beta1/tx.amino";
import * as _136 from "./staking/v1beta1/tx.amino";
import * as _137 from "./vesting/v1beta1/tx.amino";
import * as _138 from "./authz/v1beta1/tx.registry";
import * as _139 from "./bank/v1beta1/tx.registry";
import * as _140 from "./crisis/v1beta1/tx.registry";
import * as _141 from "./distribution/v1beta1/tx.registry";
import * as _142 from "./evidence/v1beta1/tx.registry";
import * as _143 from "./feegrant/v1beta1/tx.registry";
import * as _144 from "./gov/v1beta1/tx.registry";
import * as _145 from "./slashing/v1beta1/tx.registry";
import * as _146 from "./staking/v1beta1/tx.registry";
import * as _147 from "./vesting/v1beta1/tx.registry";
import * as _148 from "./auth/v1beta1/query.rpc.Query";
import * as _149 from "./authz/v1beta1/query.rpc.Query";
import * as _150 from "./bank/v1beta1/query.rpc.Query";
import * as _151 from "./base/node/v1beta1/query.rpc.Service";
import * as _152 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _153 from "./distribution/v1beta1/query.rpc.Query";
import * as _154 from "./evidence/v1beta1/query.rpc.Query";
import * as _155 from "./feegrant/v1beta1/query.rpc.Query";
import * as _156 from "./gov/v1beta1/query.rpc.Query";
import * as _157 from "./mint/v1beta1/query.rpc.Query";
import * as _158 from "./params/v1beta1/query.rpc.Query";
import * as _159 from "./slashing/v1beta1/query.rpc.Query";
import * as _160 from "./staking/v1beta1/query.rpc.Query";
import * as _161 from "./tx/v1beta1/service.rpc.Service";
import * as _162 from "./upgrade/v1beta1/query.rpc.Query";
import * as _163 from "./authz/v1beta1/tx.rpc.msg";
import * as _164 from "./bank/v1beta1/tx.rpc.msg";
import * as _165 from "./crisis/v1beta1/tx.rpc.msg";
import * as _166 from "./distribution/v1beta1/tx.rpc.msg";
import * as _167 from "./evidence/v1beta1/tx.rpc.msg";
import * as _168 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _169 from "./gov/v1beta1/tx.rpc.msg";
import * as _170 from "./slashing/v1beta1/tx.rpc.msg";
import * as _171 from "./staking/v1beta1/tx.rpc.msg";
import * as _172 from "./vesting/v1beta1/tx.rpc.msg";
import * as _175 from "./rpc.query";
import * as _176 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._148
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._128,
      ..._138,
      ..._149,
      ..._163
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._129,
      ..._139,
      ..._150,
      ..._164
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._29,
        ..._151
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._31
      };
      export const v2alpha1 = {
        ..._32
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._34,
        ..._35
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._36,
        ..._152
      };
    }
    export const v1beta1 = {
      ..._37
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._38,
      ..._39
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._130,
      ..._140,
      ..._165
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._42
    };
    export const multisig = {
      ..._43
    };
    export const secp256k1 = {
      ..._44
    };
    export const secp256r1 = {
      ..._45
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._131,
      ..._141,
      ..._153,
      ..._166
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._132,
      ..._142,
      ..._154,
      ..._167
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._133,
      ..._143,
      ..._155,
      ..._168
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._58
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._134,
      ..._144,
      ..._156,
      ..._169
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._157
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._158
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._135,
      ..._145,
      ..._159,
      ..._170
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._136,
      ..._146,
      ..._160,
      ..._171
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._161
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._162
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._137,
      ..._147,
      ..._172
    };
  }
  export const ClientFactory = {
    ..._175,
    ..._176
  };
}