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
import * as _138 from "./authz/v1beta1/tx.amino";
import * as _139 from "./bank/v1beta1/tx.amino";
import * as _140 from "./crisis/v1beta1/tx.amino";
import * as _141 from "./distribution/v1beta1/tx.amino";
import * as _142 from "./evidence/v1beta1/tx.amino";
import * as _143 from "./feegrant/v1beta1/tx.amino";
import * as _144 from "./gov/v1beta1/tx.amino";
import * as _145 from "./slashing/v1beta1/tx.amino";
import * as _146 from "./staking/v1beta1/tx.amino";
import * as _147 from "./vesting/v1beta1/tx.amino";
import * as _148 from "./authz/v1beta1/tx.registry";
import * as _149 from "./bank/v1beta1/tx.registry";
import * as _150 from "./crisis/v1beta1/tx.registry";
import * as _151 from "./distribution/v1beta1/tx.registry";
import * as _152 from "./evidence/v1beta1/tx.registry";
import * as _153 from "./feegrant/v1beta1/tx.registry";
import * as _154 from "./gov/v1beta1/tx.registry";
import * as _155 from "./slashing/v1beta1/tx.registry";
import * as _156 from "./staking/v1beta1/tx.registry";
import * as _157 from "./vesting/v1beta1/tx.registry";
import * as _158 from "./auth/v1beta1/query.lcd";
import * as _159 from "./authz/v1beta1/query.lcd";
import * as _160 from "./bank/v1beta1/query.lcd";
import * as _161 from "./base/node/v1beta1/query.lcd";
import * as _162 from "./base/tendermint/v1beta1/query.lcd";
import * as _163 from "./distribution/v1beta1/query.lcd";
import * as _164 from "./evidence/v1beta1/query.lcd";
import * as _165 from "./feegrant/v1beta1/query.lcd";
import * as _166 from "./gov/v1beta1/query.lcd";
import * as _167 from "./mint/v1beta1/query.lcd";
import * as _168 from "./params/v1beta1/query.lcd";
import * as _169 from "./slashing/v1beta1/query.lcd";
import * as _170 from "./staking/v1beta1/query.lcd";
import * as _171 from "./tx/v1beta1/service.lcd";
import * as _172 from "./upgrade/v1beta1/query.lcd";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./authz/v1beta1/query.rpc.Query";
import * as _175 from "./bank/v1beta1/query.rpc.Query";
import * as _176 from "./base/node/v1beta1/query.rpc.Service";
import * as _177 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _178 from "./distribution/v1beta1/query.rpc.Query";
import * as _179 from "./evidence/v1beta1/query.rpc.Query";
import * as _180 from "./feegrant/v1beta1/query.rpc.Query";
import * as _181 from "./gov/v1beta1/query.rpc.Query";
import * as _182 from "./mint/v1beta1/query.rpc.Query";
import * as _183 from "./params/v1beta1/query.rpc.Query";
import * as _184 from "./slashing/v1beta1/query.rpc.Query";
import * as _185 from "./staking/v1beta1/query.rpc.Query";
import * as _186 from "./tx/v1beta1/service.rpc.Service";
import * as _187 from "./upgrade/v1beta1/query.rpc.Query";
import * as _188 from "./authz/v1beta1/tx.rpc.msg";
import * as _189 from "./bank/v1beta1/tx.rpc.msg";
import * as _190 from "./crisis/v1beta1/tx.rpc.msg";
import * as _191 from "./distribution/v1beta1/tx.rpc.msg";
import * as _192 from "./evidence/v1beta1/tx.rpc.msg";
import * as _193 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _194 from "./gov/v1beta1/tx.rpc.msg";
import * as _195 from "./slashing/v1beta1/tx.rpc.msg";
import * as _196 from "./staking/v1beta1/tx.rpc.msg";
import * as _197 from "./vesting/v1beta1/tx.rpc.msg";
import * as _225 from "./lcd";
import * as _226 from "./rpc.query";
import * as _227 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._158,
      ..._173
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._138,
      ..._148,
      ..._159,
      ..._174,
      ..._188
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._139,
      ..._149,
      ..._160,
      ..._175,
      ..._189
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
        ..._161,
        ..._176
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
        ..._162,
        ..._177
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
      ..._140,
      ..._150,
      ..._190
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
      ..._141,
      ..._151,
      ..._163,
      ..._178,
      ..._191
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._142,
      ..._152,
      ..._164,
      ..._179,
      ..._192
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._143,
      ..._153,
      ..._165,
      ..._180,
      ..._193
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
      ..._144,
      ..._154,
      ..._166,
      ..._181,
      ..._194
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._167,
      ..._182
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._168,
      ..._183
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._145,
      ..._155,
      ..._169,
      ..._184,
      ..._195
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._146,
      ..._156,
      ..._170,
      ..._185,
      ..._196
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
      ..._171,
      ..._186
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._172,
      ..._187
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._147,
      ..._157,
      ..._197
    };
  }
  export const ClientFactory = {
    ..._225,
    ..._226,
    ..._227
  };
}