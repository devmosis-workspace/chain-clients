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
import * as _116 from "./authz/v1beta1/tx.amino";
import * as _117 from "./bank/v1beta1/tx.amino";
import * as _118 from "./crisis/v1beta1/tx.amino";
import * as _119 from "./distribution/v1beta1/tx.amino";
import * as _120 from "./evidence/v1beta1/tx.amino";
import * as _121 from "./feegrant/v1beta1/tx.amino";
import * as _122 from "./gov/v1beta1/tx.amino";
import * as _123 from "./slashing/v1beta1/tx.amino";
import * as _124 from "./staking/v1beta1/tx.amino";
import * as _125 from "./vesting/v1beta1/tx.amino";
import * as _126 from "./authz/v1beta1/tx.registry";
import * as _127 from "./bank/v1beta1/tx.registry";
import * as _128 from "./crisis/v1beta1/tx.registry";
import * as _129 from "./distribution/v1beta1/tx.registry";
import * as _130 from "./evidence/v1beta1/tx.registry";
import * as _131 from "./feegrant/v1beta1/tx.registry";
import * as _132 from "./gov/v1beta1/tx.registry";
import * as _133 from "./slashing/v1beta1/tx.registry";
import * as _134 from "./staking/v1beta1/tx.registry";
import * as _135 from "./vesting/v1beta1/tx.registry";
import * as _136 from "./auth/v1beta1/query.lcd";
import * as _137 from "./authz/v1beta1/query.lcd";
import * as _138 from "./bank/v1beta1/query.lcd";
import * as _139 from "./base/node/v1beta1/query.lcd";
import * as _140 from "./base/tendermint/v1beta1/query.lcd";
import * as _141 from "./distribution/v1beta1/query.lcd";
import * as _142 from "./evidence/v1beta1/query.lcd";
import * as _143 from "./feegrant/v1beta1/query.lcd";
import * as _144 from "./gov/v1beta1/query.lcd";
import * as _145 from "./mint/v1beta1/query.lcd";
import * as _146 from "./params/v1beta1/query.lcd";
import * as _147 from "./slashing/v1beta1/query.lcd";
import * as _148 from "./staking/v1beta1/query.lcd";
import * as _149 from "./tx/v1beta1/service.lcd";
import * as _150 from "./upgrade/v1beta1/query.lcd";
import * as _151 from "./auth/v1beta1/query.rpc.Query";
import * as _152 from "./authz/v1beta1/query.rpc.Query";
import * as _153 from "./bank/v1beta1/query.rpc.Query";
import * as _154 from "./base/node/v1beta1/query.rpc.Service";
import * as _155 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _156 from "./distribution/v1beta1/query.rpc.Query";
import * as _157 from "./evidence/v1beta1/query.rpc.Query";
import * as _158 from "./feegrant/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1beta1/query.rpc.Query";
import * as _160 from "./mint/v1beta1/query.rpc.Query";
import * as _161 from "./params/v1beta1/query.rpc.Query";
import * as _162 from "./slashing/v1beta1/query.rpc.Query";
import * as _163 from "./staking/v1beta1/query.rpc.Query";
import * as _164 from "./tx/v1beta1/service.rpc.Service";
import * as _165 from "./upgrade/v1beta1/query.rpc.Query";
import * as _166 from "./authz/v1beta1/tx.rpc.msg";
import * as _167 from "./bank/v1beta1/tx.rpc.msg";
import * as _168 from "./crisis/v1beta1/tx.rpc.msg";
import * as _169 from "./distribution/v1beta1/tx.rpc.msg";
import * as _170 from "./evidence/v1beta1/tx.rpc.msg";
import * as _171 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _172 from "./gov/v1beta1/tx.rpc.msg";
import * as _173 from "./slashing/v1beta1/tx.rpc.msg";
import * as _174 from "./staking/v1beta1/tx.rpc.msg";
import * as _175 from "./vesting/v1beta1/tx.rpc.msg";
import * as _179 from "./lcd";
import * as _180 from "./rpc.query";
import * as _181 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._136,
      ..._151
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._116,
      ..._126,
      ..._137,
      ..._152,
      ..._166
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._117,
      ..._127,
      ..._138,
      ..._153,
      ..._167
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
        ..._139,
        ..._154
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
        ..._140,
        ..._155
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
      ..._118,
      ..._128,
      ..._168
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
      ..._119,
      ..._129,
      ..._141,
      ..._156,
      ..._169
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._120,
      ..._130,
      ..._142,
      ..._157,
      ..._170
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._121,
      ..._131,
      ..._143,
      ..._158,
      ..._171
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
      ..._122,
      ..._132,
      ..._144,
      ..._159,
      ..._172
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._145,
      ..._160
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._146,
      ..._161
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._123,
      ..._133,
      ..._147,
      ..._162,
      ..._173
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._124,
      ..._134,
      ..._148,
      ..._163,
      ..._174
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
      ..._149,
      ..._164
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._150,
      ..._165
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._125,
      ..._135,
      ..._175
    };
  }
  export const ClientFactory = {
    ..._179,
    ..._180,
    ..._181
  };
}