import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/kv/v1beta1/kv";
import * as _31 from "./base/node/v1beta1/query";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/reflection/v2alpha1/reflection";
import * as _35 from "./base/snapshots/v1beta1/snapshot";
import * as _36 from "./base/store/v1beta1/commit_info";
import * as _37 from "./base/store/v1beta1/listening";
import * as _38 from "./base/tendermint/v1beta1/query";
import * as _39 from "./base/v1beta1/coin";
import * as _40 from "../cosmos_proto/coin";
import * as _41 from "./capability/v1beta1/capability";
import * as _42 from "./capability/v1beta1/genesis";
import * as _43 from "./crisis/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/tx";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/v1beta1/distribution";
import * as _50 from "./distribution/v1beta1/genesis";
import * as _51 from "./distribution/v1beta1/query";
import * as _52 from "./distribution/v1beta1/tx";
import * as _53 from "./evidence/v1beta1/evidence";
import * as _54 from "./evidence/v1beta1/genesis";
import * as _55 from "./evidence/v1beta1/query";
import * as _56 from "./evidence/v1beta1/tx";
import * as _57 from "./feegrant/v1beta1/feegrant";
import * as _58 from "./feegrant/v1beta1/genesis";
import * as _59 from "./feegrant/v1beta1/query";
import * as _60 from "./feegrant/v1beta1/tx";
import * as _61 from "./genutil/v1beta1/genesis";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./mint/v1beta1/genesis";
import * as _67 from "./mint/v1beta1/mint";
import * as _68 from "./mint/v1beta1/query";
import * as _69 from "./params/v1beta1/params";
import * as _70 from "./params/v1beta1/query";
import * as _71 from "./slashing/v1beta1/genesis";
import * as _72 from "./slashing/v1beta1/query";
import * as _73 from "./slashing/v1beta1/slashing";
import * as _74 from "./slashing/v1beta1/tx";
import * as _75 from "./staking/v1beta1/authz";
import * as _76 from "./staking/v1beta1/genesis";
import * as _77 from "./staking/v1beta1/query";
import * as _78 from "./staking/v1beta1/staking";
import * as _79 from "./staking/v1beta1/tx";
import * as _80 from "./tx/signing/v1beta1/signing";
import * as _81 from "./tx/v1beta1/service";
import * as _82 from "./tx/v1beta1/tx";
import * as _83 from "./upgrade/v1beta1/query";
import * as _84 from "./upgrade/v1beta1/upgrade";
import * as _85 from "./vesting/v1beta1/tx";
import * as _86 from "./vesting/v1beta1/vesting";
import * as _87 from "../cosmos_proto/pagination";
import * as _121 from "./authz/v1beta1/tx.amino";
import * as _122 from "./bank/v1beta1/tx.amino";
import * as _123 from "./crisis/v1beta1/tx.amino";
import * as _124 from "./distribution/v1beta1/tx.amino";
import * as _125 from "./evidence/v1beta1/tx.amino";
import * as _126 from "./feegrant/v1beta1/tx.amino";
import * as _127 from "./gov/v1beta1/tx.amino";
import * as _128 from "./slashing/v1beta1/tx.amino";
import * as _129 from "./staking/v1beta1/tx.amino";
import * as _130 from "./vesting/v1beta1/tx.amino";
import * as _131 from "./authz/v1beta1/tx.registry";
import * as _132 from "./bank/v1beta1/tx.registry";
import * as _133 from "./crisis/v1beta1/tx.registry";
import * as _134 from "./distribution/v1beta1/tx.registry";
import * as _135 from "./evidence/v1beta1/tx.registry";
import * as _136 from "./feegrant/v1beta1/tx.registry";
import * as _137 from "./gov/v1beta1/tx.registry";
import * as _138 from "./slashing/v1beta1/tx.registry";
import * as _139 from "./staking/v1beta1/tx.registry";
import * as _140 from "./vesting/v1beta1/tx.registry";
import * as _141 from "./auth/v1beta1/query.lcd";
import * as _142 from "./authz/v1beta1/query.lcd";
import * as _143 from "./bank/v1beta1/query.lcd";
import * as _144 from "./base/node/v1beta1/query.lcd";
import * as _145 from "./base/tendermint/v1beta1/query.lcd";
import * as _146 from "./distribution/v1beta1/query.lcd";
import * as _147 from "./evidence/v1beta1/query.lcd";
import * as _148 from "./feegrant/v1beta1/query.lcd";
import * as _149 from "./gov/v1beta1/query.lcd";
import * as _150 from "./mint/v1beta1/query.lcd";
import * as _151 from "./params/v1beta1/query.lcd";
import * as _152 from "./slashing/v1beta1/query.lcd";
import * as _153 from "./staking/v1beta1/query.lcd";
import * as _154 from "./tx/v1beta1/service.lcd";
import * as _155 from "./upgrade/v1beta1/query.lcd";
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
import * as _187 from "./lcd";
import * as _188 from "./rpc.query";
import * as _189 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._141,
      ..._156
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._121,
      ..._131,
      ..._142,
      ..._157,
      ..._171
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._122,
      ..._132,
      ..._143,
      ..._158,
      ..._172
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._31,
        ..._144,
        ..._159
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._32
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._33
      };
      export const v2alpha1 = {
        ..._34
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._36,
        ..._37
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._38,
        ..._145,
        ..._160
      };
    }
    export const v1beta1 = {
      ..._39,
      ..._40
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._41,
      ..._42
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._123,
      ..._133,
      ..._173
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._45
    };
    export const multisig = {
      ..._46
    };
    export const secp256k1 = {
      ..._47
    };
    export const secp256r1 = {
      ..._48
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._124,
      ..._134,
      ..._146,
      ..._161,
      ..._174
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._125,
      ..._135,
      ..._147,
      ..._162,
      ..._175
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._126,
      ..._136,
      ..._148,
      ..._163,
      ..._176
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._61
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._127,
      ..._137,
      ..._149,
      ..._164,
      ..._177
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._150,
      ..._165
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._151,
      ..._166
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._128,
      ..._138,
      ..._152,
      ..._167,
      ..._178
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._129,
      ..._139,
      ..._153,
      ..._168,
      ..._179
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._80
      };
    }
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._154,
      ..._169
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._155,
      ..._170
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._130,
      ..._140,
      ..._180
    };
  }
  export const query = {
    ..._87
  };
  export const ClientFactory = {
    ..._187,
    ..._188,
    ..._189
  };
}