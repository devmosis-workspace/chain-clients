import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./authz/v1beta1/authz";
import * as _14 from "./authz/v1beta1/event";
import * as _15 from "./authz/v1beta1/genesis";
import * as _16 from "./authz/v1beta1/query";
import * as _17 from "./authz/v1beta1/tx";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/kv/v1beta1/kv";
import * as _25 from "./base/node/v1beta1/query";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/v1beta1/evidence";
import * as _47 from "./evidence/v1beta1/genesis";
import * as _48 from "./evidence/v1beta1/query";
import * as _49 from "./evidence/v1beta1/tx";
import * as _50 from "./feegrant/v1beta1/feegrant";
import * as _51 from "./feegrant/v1beta1/genesis";
import * as _52 from "./feegrant/v1beta1/query";
import * as _53 from "./feegrant/v1beta1/tx";
import * as _54 from "./genutil/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./mint/v1beta1/genesis";
import * as _60 from "./mint/v1beta1/mint";
import * as _61 from "./mint/v1beta1/query";
import * as _62 from "./params/v1beta1/params";
import * as _63 from "./params/v1beta1/query";
import * as _64 from "./slashing/v1beta1/genesis";
import * as _65 from "./slashing/v1beta1/query";
import * as _66 from "./slashing/v1beta1/slashing";
import * as _67 from "./slashing/v1beta1/tx";
import * as _68 from "./staking/v1beta1/authz";
import * as _69 from "./staking/v1beta1/genesis";
import * as _70 from "./staking/v1beta1/query";
import * as _71 from "./staking/v1beta1/staking";
import * as _72 from "./staking/v1beta1/tx";
import * as _73 from "./tx/signing/v1beta1/signing";
import * as _74 from "./tx/v1beta1/service";
import * as _75 from "./tx/v1beta1/tx";
import * as _76 from "./upgrade/v1beta1/query";
import * as _77 from "./upgrade/v1beta1/upgrade";
import * as _78 from "./vesting/v1beta1/tx";
import * as _79 from "./vesting/v1beta1/vesting";
import * as _122 from "./authz/v1beta1/tx.amino";
import * as _123 from "./bank/v1beta1/tx.amino";
import * as _124 from "./crisis/v1beta1/tx.amino";
import * as _125 from "./distribution/v1beta1/tx.amino";
import * as _126 from "./evidence/v1beta1/tx.amino";
import * as _127 from "./feegrant/v1beta1/tx.amino";
import * as _128 from "./gov/v1beta1/tx.amino";
import * as _129 from "./slashing/v1beta1/tx.amino";
import * as _130 from "./staking/v1beta1/tx.amino";
import * as _131 from "./vesting/v1beta1/tx.amino";
import * as _132 from "./authz/v1beta1/tx.registry";
import * as _133 from "./bank/v1beta1/tx.registry";
import * as _134 from "./crisis/v1beta1/tx.registry";
import * as _135 from "./distribution/v1beta1/tx.registry";
import * as _136 from "./evidence/v1beta1/tx.registry";
import * as _137 from "./feegrant/v1beta1/tx.registry";
import * as _138 from "./gov/v1beta1/tx.registry";
import * as _139 from "./slashing/v1beta1/tx.registry";
import * as _140 from "./staking/v1beta1/tx.registry";
import * as _141 from "./vesting/v1beta1/tx.registry";
import * as _142 from "./auth/v1beta1/query.lcd";
import * as _143 from "./authz/v1beta1/query.lcd";
import * as _144 from "./bank/v1beta1/query.lcd";
import * as _145 from "./base/node/v1beta1/query.lcd";
import * as _146 from "./base/tendermint/v1beta1/query.lcd";
import * as _147 from "./distribution/v1beta1/query.lcd";
import * as _148 from "./evidence/v1beta1/query.lcd";
import * as _149 from "./feegrant/v1beta1/query.lcd";
import * as _150 from "./gov/v1beta1/query.lcd";
import * as _151 from "./mint/v1beta1/query.lcd";
import * as _152 from "./params/v1beta1/query.lcd";
import * as _153 from "./slashing/v1beta1/query.lcd";
import * as _154 from "./staking/v1beta1/query.lcd";
import * as _155 from "./tx/v1beta1/service.lcd";
import * as _156 from "./upgrade/v1beta1/query.lcd";
import * as _157 from "./auth/v1beta1/query.rpc.Query";
import * as _158 from "./authz/v1beta1/query.rpc.Query";
import * as _159 from "./bank/v1beta1/query.rpc.Query";
import * as _160 from "./base/node/v1beta1/query.rpc.Service";
import * as _161 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _162 from "./distribution/v1beta1/query.rpc.Query";
import * as _163 from "./evidence/v1beta1/query.rpc.Query";
import * as _164 from "./feegrant/v1beta1/query.rpc.Query";
import * as _165 from "./gov/v1beta1/query.rpc.Query";
import * as _166 from "./mint/v1beta1/query.rpc.Query";
import * as _167 from "./params/v1beta1/query.rpc.Query";
import * as _168 from "./slashing/v1beta1/query.rpc.Query";
import * as _169 from "./staking/v1beta1/query.rpc.Query";
import * as _170 from "./tx/v1beta1/service.rpc.Service";
import * as _171 from "./upgrade/v1beta1/query.rpc.Query";
import * as _172 from "./authz/v1beta1/tx.rpc.msg";
import * as _173 from "./bank/v1beta1/tx.rpc.msg";
import * as _174 from "./crisis/v1beta1/tx.rpc.msg";
import * as _175 from "./distribution/v1beta1/tx.rpc.msg";
import * as _176 from "./evidence/v1beta1/tx.rpc.msg";
import * as _177 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _178 from "./gov/v1beta1/tx.rpc.msg";
import * as _179 from "./slashing/v1beta1/tx.rpc.msg";
import * as _180 from "./staking/v1beta1/tx.rpc.msg";
import * as _181 from "./vesting/v1beta1/tx.rpc.msg";
import * as _189 from "./lcd";
import * as _190 from "./rpc.query";
import * as _191 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._142,
      ..._157
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._122,
      ..._132,
      ..._143,
      ..._158,
      ..._172
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._123,
      ..._133,
      ..._144,
      ..._159,
      ..._173
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._25,
        ..._145,
        ..._160
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._26
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._27
      };
      export const v2alpha1 = {
        ..._28
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._30,
        ..._31
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._32,
        ..._146,
        ..._161
      };
    }
    export const v1beta1 = {
      ..._33
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._34,
      ..._35
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._124,
      ..._134,
      ..._174
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._38
    };
    export const multisig = {
      ..._39
    };
    export const secp256k1 = {
      ..._40
    };
    export const secp256r1 = {
      ..._41
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._125,
      ..._135,
      ..._147,
      ..._162,
      ..._175
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._126,
      ..._136,
      ..._148,
      ..._163,
      ..._176
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._127,
      ..._137,
      ..._149,
      ..._164,
      ..._177
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._54
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._128,
      ..._138,
      ..._150,
      ..._165,
      ..._178
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._151,
      ..._166
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._152,
      ..._167
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._129,
      ..._139,
      ..._153,
      ..._168,
      ..._179
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._130,
      ..._140,
      ..._154,
      ..._169,
      ..._180
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._73
      };
    }
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._155,
      ..._170
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._156,
      ..._171
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._131,
      ..._141,
      ..._181
    };
  }
  export const ClientFactory = {
    ..._189,
    ..._190,
    ..._191
  };
}