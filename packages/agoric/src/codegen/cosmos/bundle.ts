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
import * as _131 from "./authz/v1beta1/tx.amino";
import * as _132 from "./bank/v1beta1/tx.amino";
import * as _133 from "./crisis/v1beta1/tx.amino";
import * as _134 from "./distribution/v1beta1/tx.amino";
import * as _135 from "./evidence/v1beta1/tx.amino";
import * as _136 from "./feegrant/v1beta1/tx.amino";
import * as _137 from "./gov/v1beta1/tx.amino";
import * as _138 from "./slashing/v1beta1/tx.amino";
import * as _139 from "./staking/v1beta1/tx.amino";
import * as _140 from "./vesting/v1beta1/tx.amino";
import * as _141 from "./authz/v1beta1/tx.registry";
import * as _142 from "./bank/v1beta1/tx.registry";
import * as _143 from "./crisis/v1beta1/tx.registry";
import * as _144 from "./distribution/v1beta1/tx.registry";
import * as _145 from "./evidence/v1beta1/tx.registry";
import * as _146 from "./feegrant/v1beta1/tx.registry";
import * as _147 from "./gov/v1beta1/tx.registry";
import * as _148 from "./slashing/v1beta1/tx.registry";
import * as _149 from "./staking/v1beta1/tx.registry";
import * as _150 from "./vesting/v1beta1/tx.registry";
import * as _151 from "./auth/v1beta1/query.lcd";
import * as _152 from "./authz/v1beta1/query.lcd";
import * as _153 from "./bank/v1beta1/query.lcd";
import * as _154 from "./base/node/v1beta1/query.lcd";
import * as _155 from "./base/tendermint/v1beta1/query.lcd";
import * as _156 from "./distribution/v1beta1/query.lcd";
import * as _157 from "./evidence/v1beta1/query.lcd";
import * as _158 from "./feegrant/v1beta1/query.lcd";
import * as _159 from "./gov/v1beta1/query.lcd";
import * as _160 from "./mint/v1beta1/query.lcd";
import * as _161 from "./params/v1beta1/query.lcd";
import * as _162 from "./slashing/v1beta1/query.lcd";
import * as _163 from "./staking/v1beta1/query.lcd";
import * as _164 from "./tx/v1beta1/service.lcd";
import * as _165 from "./upgrade/v1beta1/query.lcd";
import * as _166 from "./auth/v1beta1/query.rpc.Query";
import * as _167 from "./authz/v1beta1/query.rpc.Query";
import * as _168 from "./bank/v1beta1/query.rpc.Query";
import * as _169 from "./base/node/v1beta1/query.rpc.Service";
import * as _170 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _171 from "./distribution/v1beta1/query.rpc.Query";
import * as _172 from "./evidence/v1beta1/query.rpc.Query";
import * as _173 from "./feegrant/v1beta1/query.rpc.Query";
import * as _174 from "./gov/v1beta1/query.rpc.Query";
import * as _175 from "./mint/v1beta1/query.rpc.Query";
import * as _176 from "./params/v1beta1/query.rpc.Query";
import * as _177 from "./slashing/v1beta1/query.rpc.Query";
import * as _178 from "./staking/v1beta1/query.rpc.Query";
import * as _179 from "./tx/v1beta1/service.rpc.Service";
import * as _180 from "./upgrade/v1beta1/query.rpc.Query";
import * as _181 from "./authz/v1beta1/tx.rpc.msg";
import * as _182 from "./bank/v1beta1/tx.rpc.msg";
import * as _183 from "./crisis/v1beta1/tx.rpc.msg";
import * as _184 from "./distribution/v1beta1/tx.rpc.msg";
import * as _185 from "./evidence/v1beta1/tx.rpc.msg";
import * as _186 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _187 from "./gov/v1beta1/tx.rpc.msg";
import * as _188 from "./slashing/v1beta1/tx.rpc.msg";
import * as _189 from "./staking/v1beta1/tx.rpc.msg";
import * as _190 from "./vesting/v1beta1/tx.rpc.msg";
import * as _194 from "./lcd";
import * as _195 from "./rpc.query";
import * as _196 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._151,
      ..._166
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._131,
      ..._141,
      ..._152,
      ..._167,
      ..._181
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._132,
      ..._142,
      ..._153,
      ..._168,
      ..._182
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
        ..._154,
        ..._169
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
        ..._155,
        ..._170
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
      ..._133,
      ..._143,
      ..._183
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
      ..._134,
      ..._144,
      ..._156,
      ..._171,
      ..._184
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._135,
      ..._145,
      ..._157,
      ..._172,
      ..._185
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._136,
      ..._146,
      ..._158,
      ..._173,
      ..._186
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
      ..._137,
      ..._147,
      ..._159,
      ..._174,
      ..._187
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._160,
      ..._175
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._161,
      ..._176
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._138,
      ..._148,
      ..._162,
      ..._177,
      ..._188
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._139,
      ..._149,
      ..._163,
      ..._178,
      ..._189
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
      ..._164,
      ..._179
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._165,
      ..._180
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._140,
      ..._150,
      ..._190
    };
  }
  export const ClientFactory = {
    ..._194,
    ..._195,
    ..._196
  };
}