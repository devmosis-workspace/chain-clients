import * as _23 from "./auth/v1beta1/auth";
import * as _24 from "./auth/v1beta1/genesis";
import * as _25 from "./auth/v1beta1/query";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/kv/v1beta1/kv";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/snapshot";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
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
import * as _145 from "./bank/v1beta1/tx.amino";
import * as _146 from "./crisis/v1beta1/tx.amino";
import * as _147 from "./distribution/v1beta1/tx.amino";
import * as _148 from "./evidence/v1beta1/tx.amino";
import * as _149 from "./gov/v1beta1/tx.amino";
import * as _150 from "./slashing/v1beta1/tx.amino";
import * as _151 from "./staking/v1beta1/tx.amino";
import * as _152 from "./vesting/v1beta1/tx.amino";
import * as _153 from "./bank/v1beta1/tx.registry";
import * as _154 from "./crisis/v1beta1/tx.registry";
import * as _155 from "./distribution/v1beta1/tx.registry";
import * as _156 from "./evidence/v1beta1/tx.registry";
import * as _157 from "./gov/v1beta1/tx.registry";
import * as _158 from "./slashing/v1beta1/tx.registry";
import * as _159 from "./staking/v1beta1/tx.registry";
import * as _160 from "./vesting/v1beta1/tx.registry";
import * as _161 from "./auth/v1beta1/query.lcd";
import * as _162 from "./bank/v1beta1/query.lcd";
import * as _163 from "./base/tendermint/v1beta1/query.lcd";
import * as _164 from "./distribution/v1beta1/query.lcd";
import * as _165 from "./evidence/v1beta1/query.lcd";
import * as _166 from "./gov/v1beta1/query.lcd";
import * as _167 from "./mint/v1beta1/query.lcd";
import * as _168 from "./params/v1beta1/query.lcd";
import * as _169 from "./slashing/v1beta1/query.lcd";
import * as _170 from "./staking/v1beta1/query.lcd";
import * as _171 from "./tx/v1beta1/service.lcd";
import * as _172 from "./upgrade/v1beta1/query.lcd";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./bank/v1beta1/query.rpc.Query";
import * as _175 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _176 from "./distribution/v1beta1/query.rpc.Query";
import * as _177 from "./evidence/v1beta1/query.rpc.Query";
import * as _178 from "./gov/v1beta1/query.rpc.Query";
import * as _179 from "./mint/v1beta1/query.rpc.Query";
import * as _180 from "./params/v1beta1/query.rpc.Query";
import * as _181 from "./slashing/v1beta1/query.rpc.Query";
import * as _182 from "./staking/v1beta1/query.rpc.Query";
import * as _183 from "./tx/v1beta1/service.rpc.Service";
import * as _184 from "./upgrade/v1beta1/query.rpc.Query";
import * as _185 from "./bank/v1beta1/tx.rpc.msg";
import * as _186 from "./crisis/v1beta1/tx.rpc.msg";
import * as _187 from "./distribution/v1beta1/tx.rpc.msg";
import * as _188 from "./evidence/v1beta1/tx.rpc.msg";
import * as _189 from "./gov/v1beta1/tx.rpc.msg";
import * as _190 from "./slashing/v1beta1/tx.rpc.msg";
import * as _191 from "./staking/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
import * as _216 from "./lcd";
import * as _217 from "./rpc.query";
import * as _218 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._161,
      ..._173
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._145,
      ..._153,
      ..._162,
      ..._174,
      ..._185
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._31
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
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._35,
        ..._36
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._37,
        ..._163,
        ..._175
      };
    }
    export const v1beta1 = {
      ..._38
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._39,
      ..._40
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._146,
      ..._154,
      ..._186
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._43
    };
    export const multisig = {
      ..._44
    };
    export const secp256k1 = {
      ..._45
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._147,
      ..._155,
      ..._164,
      ..._176,
      ..._187
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._148,
      ..._156,
      ..._165,
      ..._177,
      ..._188
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
      ..._149,
      ..._157,
      ..._166,
      ..._178,
      ..._189
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._167,
      ..._179
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._168,
      ..._180
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._150,
      ..._158,
      ..._169,
      ..._181,
      ..._190
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._151,
      ..._159,
      ..._170,
      ..._182,
      ..._191
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
      ..._183
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._172,
      ..._184
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._152,
      ..._160,
      ..._192
    };
  }
  export const ClientFactory = {
    ..._216,
    ..._217,
    ..._218
  };
}