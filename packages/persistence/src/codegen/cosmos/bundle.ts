import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./base/abci/v1beta1/abci";
import * as _22 from "./base/kv/v1beta1/kv";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v1beta1/reflection";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/snapshots/v1beta1/snapshot";
import * as _28 from "./base/store/v1beta1/commit_info";
import * as _29 from "./base/store/v1beta1/listening";
import * as _30 from "./base/store/v1beta1/snapshot";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./capability/v1beta1/capability";
import * as _34 from "./capability/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/tx";
import * as _37 from "./crypto/ed25519/keys";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./mint/v1beta1/genesis";
import * as _59 from "./mint/v1beta1/mint";
import * as _60 from "./mint/v1beta1/query";
import * as _61 from "./params/v1beta1/params";
import * as _62 from "./params/v1beta1/query";
import * as _63 from "./slashing/v1beta1/genesis";
import * as _64 from "./slashing/v1beta1/query";
import * as _65 from "./slashing/v1beta1/slashing";
import * as _66 from "./slashing/v1beta1/tx";
import * as _67 from "./staking/v1beta1/authz";
import * as _68 from "./staking/v1beta1/genesis";
import * as _69 from "./staking/v1beta1/query";
import * as _70 from "./staking/v1beta1/staking";
import * as _71 from "./staking/v1beta1/tx";
import * as _72 from "./tx/signing/v1beta1/signing";
import * as _73 from "./tx/v1beta1/service";
import * as _74 from "./tx/v1beta1/tx";
import * as _75 from "./upgrade/v1beta1/query";
import * as _76 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _136 from "./authz/v1beta1/tx.amino";
import * as _137 from "./bank/v1beta1/tx.amino";
import * as _138 from "./crisis/v1beta1/tx.amino";
import * as _139 from "./distribution/v1beta1/tx.amino";
import * as _140 from "./evidence/v1beta1/tx.amino";
import * as _141 from "./feegrant/v1beta1/tx.amino";
import * as _142 from "./gov/v1beta1/tx.amino";
import * as _143 from "./slashing/v1beta1/tx.amino";
import * as _144 from "./staking/v1beta1/tx.amino";
import * as _145 from "./vesting/v1beta1/tx.amino";
import * as _146 from "./authz/v1beta1/tx.registry";
import * as _147 from "./bank/v1beta1/tx.registry";
import * as _148 from "./crisis/v1beta1/tx.registry";
import * as _149 from "./distribution/v1beta1/tx.registry";
import * as _150 from "./evidence/v1beta1/tx.registry";
import * as _151 from "./feegrant/v1beta1/tx.registry";
import * as _152 from "./gov/v1beta1/tx.registry";
import * as _153 from "./slashing/v1beta1/tx.registry";
import * as _154 from "./staking/v1beta1/tx.registry";
import * as _155 from "./vesting/v1beta1/tx.registry";
import * as _156 from "./auth/v1beta1/query.rpc.Query";
import * as _157 from "./authz/v1beta1/query.rpc.Query";
import * as _158 from "./bank/v1beta1/query.rpc.Query";
import * as _159 from "./base/node/v1beta1/query.rpc.Service";
import * as _160 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _161 from "./distribution/v1beta1/query.rpc.Query";
import * as _162 from "./evidence/v1beta1/query.rpc.Query";
import * as _163 from "./feegrant/v1beta1/query.rpc.Query";
import * as _164 from "./gov/v1beta1/query.rpc.Query";
import * as _165 from "./mint/v1beta1/query.rpc.Query";
import * as _166 from "./params/v1beta1/query.rpc.Query";
import * as _167 from "./slashing/v1beta1/query.rpc.Query";
import * as _168 from "./staking/v1beta1/query.rpc.Query";
import * as _169 from "./tx/v1beta1/service.rpc.Service";
import * as _170 from "./upgrade/v1beta1/query.rpc.Query";
import * as _171 from "./authz/v1beta1/tx.rpc.msg";
import * as _172 from "./bank/v1beta1/tx.rpc.msg";
import * as _173 from "./crisis/v1beta1/tx.rpc.msg";
import * as _174 from "./distribution/v1beta1/tx.rpc.msg";
import * as _175 from "./evidence/v1beta1/tx.rpc.msg";
import * as _176 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _177 from "./gov/v1beta1/tx.rpc.msg";
import * as _178 from "./slashing/v1beta1/tx.rpc.msg";
import * as _179 from "./staking/v1beta1/tx.rpc.msg";
import * as _180 from "./vesting/v1beta1/tx.rpc.msg";
import * as _201 from "./rpc.query";
import * as _202 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._156
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._136,
      ..._146,
      ..._157,
      ..._171
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._137,
      ..._147,
      ..._158,
      ..._172
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._23,
        ..._159
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._25
      };
      export const v2alpha1 = {
        ..._26
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._28,
        ..._29,
        ..._30
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._31,
        ..._160
      };
    }
    export const v1beta1 = {
      ..._32
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._33,
      ..._34
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._138,
      ..._148,
      ..._173
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._37
    };
    export const multisig = {
      ..._38
    };
    export const secp256k1 = {
      ..._39
    };
    export const secp256r1 = {
      ..._40
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._139,
      ..._149,
      ..._161,
      ..._174
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._140,
      ..._150,
      ..._162,
      ..._175
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._141,
      ..._151,
      ..._163,
      ..._176
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._53
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._142,
      ..._152,
      ..._164,
      ..._177
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._165
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._166
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._143,
      ..._153,
      ..._167,
      ..._178
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._144,
      ..._154,
      ..._168,
      ..._179
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._72
      };
    }
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._169
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._170
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._145,
      ..._155,
      ..._180
    };
  }
  export const ClientFactory = {
    ..._201,
    ..._202
  };
}