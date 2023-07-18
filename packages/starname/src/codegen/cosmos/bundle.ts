import * as _20 from "../iov/offchain/v1alpha1/offchain";
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/store/v1beta1/snapshot";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/v1beta1/capability";
import * as _46 from "./capability/v1beta1/genesis";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./params/v1beta1/params";
import * as _74 from "./params/v1beta1/query";
import * as _75 from "./slashing/v1beta1/genesis";
import * as _76 from "./slashing/v1beta1/query";
import * as _77 from "./slashing/v1beta1/slashing";
import * as _78 from "./slashing/v1beta1/tx";
import * as _79 from "./staking/v1beta1/authz";
import * as _80 from "./staking/v1beta1/genesis";
import * as _81 from "./staking/v1beta1/query";
import * as _82 from "./staking/v1beta1/staking";
import * as _83 from "./staking/v1beta1/tx";
import * as _84 from "./tx/signing/v1beta1/signing";
import * as _85 from "./tx/v1beta1/service";
import * as _86 from "./tx/v1beta1/tx";
import * as _87 from "./upgrade/v1beta1/query";
import * as _88 from "./upgrade/v1beta1/upgrade";
import * as _89 from "./vesting/v1beta1/tx";
import * as _90 from "./vesting/v1beta1/vesting";
import * as _151 from "./authz/v1beta1/tx.amino";
import * as _152 from "./bank/v1beta1/tx.amino";
import * as _153 from "./crisis/v1beta1/tx.amino";
import * as _154 from "./distribution/v1beta1/tx.amino";
import * as _155 from "./evidence/v1beta1/tx.amino";
import * as _156 from "./feegrant/v1beta1/tx.amino";
import * as _157 from "./gov/v1beta1/tx.amino";
import * as _158 from "./slashing/v1beta1/tx.amino";
import * as _159 from "./staking/v1beta1/tx.amino";
import * as _160 from "./vesting/v1beta1/tx.amino";
import * as _161 from "./authz/v1beta1/tx.registry";
import * as _162 from "./bank/v1beta1/tx.registry";
import * as _163 from "./crisis/v1beta1/tx.registry";
import * as _164 from "./distribution/v1beta1/tx.registry";
import * as _165 from "./evidence/v1beta1/tx.registry";
import * as _166 from "./feegrant/v1beta1/tx.registry";
import * as _167 from "./gov/v1beta1/tx.registry";
import * as _168 from "./slashing/v1beta1/tx.registry";
import * as _169 from "./staking/v1beta1/tx.registry";
import * as _170 from "./vesting/v1beta1/tx.registry";
import * as _171 from "./auth/v1beta1/query.lcd";
import * as _172 from "./authz/v1beta1/query.lcd";
import * as _173 from "./bank/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1beta1/query.lcd";
import * as _179 from "./mint/v1beta1/query.lcd";
import * as _180 from "./params/v1beta1/query.lcd";
import * as _181 from "./slashing/v1beta1/query.lcd";
import * as _182 from "./staking/v1beta1/query.lcd";
import * as _183 from "./tx/v1beta1/service.lcd";
import * as _184 from "./upgrade/v1beta1/query.lcd";
import * as _185 from "./auth/v1beta1/query.rpc.Query";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./bank/v1beta1/query.rpc.Query";
import * as _188 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _189 from "./distribution/v1beta1/query.rpc.Query";
import * as _190 from "./evidence/v1beta1/query.rpc.Query";
import * as _191 from "./feegrant/v1beta1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./params/v1beta1/query.rpc.Query";
import * as _195 from "./slashing/v1beta1/query.rpc.Query";
import * as _196 from "./staking/v1beta1/query.rpc.Query";
import * as _197 from "./tx/v1beta1/service.rpc.Service";
import * as _198 from "./upgrade/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/tx.rpc.msg";
import * as _200 from "./bank/v1beta1/tx.rpc.msg";
import * as _201 from "./crisis/v1beta1/tx.rpc.msg";
import * as _202 from "./distribution/v1beta1/tx.rpc.msg";
import * as _203 from "./evidence/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1beta1/tx.rpc.msg";
import * as _206 from "./slashing/v1beta1/tx.rpc.msg";
import * as _207 from "./staking/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
import * as _235 from "./lcd";
import * as _236 from "./rpc.query";
import * as _237 from "./rpc.tx";
export namespace cosmos {
  export namespace offchain {
    export const v1alpha1 = {
      ..._20
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._171,
      ..._185
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._151,
      ..._161,
      ..._172,
      ..._186,
      ..._199
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._152,
      ..._162,
      ..._173,
      ..._187,
      ..._200
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._37
      };
      export const v2alpha1 = {
        ..._38
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._40,
        ..._41,
        ..._42
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._43,
        ..._174,
        ..._188
      };
    }
    export const v1beta1 = {
      ..._44
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._45,
      ..._46
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._153,
      ..._163,
      ..._201
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._49
    };
    export const multisig = {
      ..._50
    };
    export const secp256k1 = {
      ..._51
    };
    export const secp256r1 = {
      ..._52
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._154,
      ..._164,
      ..._175,
      ..._189,
      ..._202
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._155,
      ..._165,
      ..._176,
      ..._190,
      ..._203
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._156,
      ..._166,
      ..._177,
      ..._191,
      ..._204
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._65
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._157,
      ..._167,
      ..._178,
      ..._192,
      ..._205
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._179,
      ..._193
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._180,
      ..._194
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._158,
      ..._168,
      ..._181,
      ..._195,
      ..._206
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._159,
      ..._169,
      ..._182,
      ..._196,
      ..._207
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._183,
      ..._197
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._184,
      ..._198
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._160,
      ..._170,
      ..._208
    };
  }
  export const ClientFactory = {
    ..._235,
    ..._236,
    ..._237
  };
}