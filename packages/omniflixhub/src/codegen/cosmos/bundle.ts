import * as _9 from "./auth/v1beta1/auth";
import * as _10 from "./auth/v1beta1/genesis";
import * as _11 from "./auth/v1beta1/query";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/kv/v1beta1/kv";
import * as _24 from "./base/node/v1beta1/query";
import * as _25 from "./base/query/v1beta1/pagination";
import * as _26 from "./base/reflection/v1beta1/reflection";
import * as _27 from "./base/reflection/v2alpha1/reflection";
import * as _28 from "./base/snapshots/v1beta1/snapshot";
import * as _29 from "./base/store/v1beta1/commit_info";
import * as _30 from "./base/store/v1beta1/listening";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "../cosmos_proto/coin";
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
import * as _80 from "../cosmos_proto/pagination";
import * as _107 from "./authz/v1beta1/tx.amino";
import * as _108 from "./bank/v1beta1/tx.amino";
import * as _109 from "./crisis/v1beta1/tx.amino";
import * as _110 from "./distribution/v1beta1/tx.amino";
import * as _111 from "./evidence/v1beta1/tx.amino";
import * as _112 from "./feegrant/v1beta1/tx.amino";
import * as _113 from "./gov/v1beta1/tx.amino";
import * as _114 from "./slashing/v1beta1/tx.amino";
import * as _115 from "./staking/v1beta1/tx.amino";
import * as _116 from "./vesting/v1beta1/tx.amino";
import * as _117 from "./authz/v1beta1/tx.registry";
import * as _118 from "./bank/v1beta1/tx.registry";
import * as _119 from "./crisis/v1beta1/tx.registry";
import * as _120 from "./distribution/v1beta1/tx.registry";
import * as _121 from "./evidence/v1beta1/tx.registry";
import * as _122 from "./feegrant/v1beta1/tx.registry";
import * as _123 from "./gov/v1beta1/tx.registry";
import * as _124 from "./slashing/v1beta1/tx.registry";
import * as _125 from "./staking/v1beta1/tx.registry";
import * as _126 from "./vesting/v1beta1/tx.registry";
import * as _127 from "./auth/v1beta1/query.rpc.Query";
import * as _128 from "./authz/v1beta1/query.rpc.Query";
import * as _129 from "./bank/v1beta1/query.rpc.Query";
import * as _130 from "./base/node/v1beta1/query.rpc.Service";
import * as _131 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _132 from "./distribution/v1beta1/query.rpc.Query";
import * as _133 from "./evidence/v1beta1/query.rpc.Query";
import * as _134 from "./feegrant/v1beta1/query.rpc.Query";
import * as _135 from "./gov/v1beta1/query.rpc.Query";
import * as _136 from "./mint/v1beta1/query.rpc.Query";
import * as _137 from "./params/v1beta1/query.rpc.Query";
import * as _138 from "./slashing/v1beta1/query.rpc.Query";
import * as _139 from "./staking/v1beta1/query.rpc.Query";
import * as _140 from "./tx/v1beta1/service.rpc.Service";
import * as _141 from "./upgrade/v1beta1/query.rpc.Query";
import * as _142 from "./authz/v1beta1/tx.rpc.msg";
import * as _143 from "./bank/v1beta1/tx.rpc.msg";
import * as _144 from "./crisis/v1beta1/tx.rpc.msg";
import * as _145 from "./distribution/v1beta1/tx.rpc.msg";
import * as _146 from "./evidence/v1beta1/tx.rpc.msg";
import * as _147 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _148 from "./gov/v1beta1/tx.rpc.msg";
import * as _149 from "./slashing/v1beta1/tx.rpc.msg";
import * as _150 from "./staking/v1beta1/tx.rpc.msg";
import * as _151 from "./vesting/v1beta1/tx.rpc.msg";
import * as _156 from "./rpc.query";
import * as _157 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._127
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._107,
      ..._117,
      ..._128,
      ..._142
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._108,
      ..._118,
      ..._129,
      ..._143
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._24,
        ..._130
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._26
      };
      export const v2alpha1 = {
        ..._27
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._29,
        ..._30
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._31,
        ..._131
      };
    }
    export const v1beta1 = {
      ..._32,
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
      ..._109,
      ..._119,
      ..._144
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
      ..._110,
      ..._120,
      ..._132,
      ..._145
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._111,
      ..._121,
      ..._133,
      ..._146
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._112,
      ..._122,
      ..._134,
      ..._147
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
      ..._113,
      ..._123,
      ..._135,
      ..._148
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._136
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._137
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._114,
      ..._124,
      ..._138,
      ..._149
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._115,
      ..._125,
      ..._139,
      ..._150
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
      ..._140
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._141
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._116,
      ..._126,
      ..._151
    };
  }
  export const query = {
    ..._80
  };
  export const ClientFactory = {
    ..._156,
    ..._157
  };
}