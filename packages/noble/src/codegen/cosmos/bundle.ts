import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./auth/v1beta1/auth";
import * as _44 from "./auth/v1beta1/genesis";
import * as _45 from "./auth/v1beta1/query";
import * as _46 from "./authz/v1beta1/authz";
import * as _47 from "./authz/v1beta1/event";
import * as _48 from "./authz/v1beta1/genesis";
import * as _49 from "./authz/v1beta1/query";
import * as _50 from "./authz/v1beta1/tx";
import * as _51 from "./bank/v1beta1/authz";
import * as _52 from "./bank/v1beta1/bank";
import * as _53 from "./bank/v1beta1/genesis";
import * as _54 from "./bank/v1beta1/query";
import * as _55 from "./bank/v1beta1/tx";
import * as _56 from "./capability/v1beta1/capability";
import * as _57 from "./capability/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/tx";
import * as _60 from "./crypto/ed25519/keys";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/v1beta1/distribution";
import * as _65 from "./distribution/v1beta1/genesis";
import * as _66 from "./distribution/v1beta1/query";
import * as _67 from "./distribution/v1beta1/tx";
import * as _68 from "./evidence/v1beta1/evidence";
import * as _69 from "./evidence/v1beta1/genesis";
import * as _70 from "./evidence/v1beta1/query";
import * as _71 from "./evidence/v1beta1/tx";
import * as _72 from "./feegrant/v1beta1/feegrant";
import * as _73 from "./feegrant/v1beta1/genesis";
import * as _74 from "./feegrant/v1beta1/query";
import * as _75 from "./feegrant/v1beta1/tx";
import * as _76 from "./genutil/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/genesis";
import * as _78 from "./gov/v1beta1/gov";
import * as _79 from "./gov/v1beta1/query";
import * as _80 from "./gov/v1beta1/tx";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./vesting/v1beta1/tx";
import * as _101 from "./vesting/v1beta1/vesting";
import * as _142 from "./authz/v1beta1/tx.amino";
import * as _143 from "./bank/v1beta1/tx.amino";
import * as _144 from "./crisis/v1beta1/tx.amino";
import * as _145 from "./distribution/v1beta1/tx.amino";
import * as _146 from "./evidence/v1beta1/tx.amino";
import * as _147 from "./feegrant/v1beta1/tx.amino";
import * as _148 from "./gov/v1beta1/tx.amino";
import * as _149 from "./slashing/v1beta1/tx.amino";
import * as _150 from "./staking/v1beta1/tx.amino";
import * as _151 from "./vesting/v1beta1/tx.amino";
import * as _152 from "./authz/v1beta1/tx.registry";
import * as _153 from "./bank/v1beta1/tx.registry";
import * as _154 from "./crisis/v1beta1/tx.registry";
import * as _155 from "./distribution/v1beta1/tx.registry";
import * as _156 from "./evidence/v1beta1/tx.registry";
import * as _157 from "./feegrant/v1beta1/tx.registry";
import * as _158 from "./gov/v1beta1/tx.registry";
import * as _159 from "./slashing/v1beta1/tx.registry";
import * as _160 from "./staking/v1beta1/tx.registry";
import * as _161 from "./vesting/v1beta1/tx.registry";
import * as _162 from "./auth/v1beta1/query.rpc.Query";
import * as _163 from "./authz/v1beta1/query.rpc.Query";
import * as _164 from "./bank/v1beta1/query.rpc.Query";
import * as _165 from "./base/node/v1beta1/query.rpc.Service";
import * as _166 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _167 from "./distribution/v1beta1/query.rpc.Query";
import * as _168 from "./evidence/v1beta1/query.rpc.Query";
import * as _169 from "./feegrant/v1beta1/query.rpc.Query";
import * as _170 from "./gov/v1beta1/query.rpc.Query";
import * as _171 from "./mint/v1beta1/query.rpc.Query";
import * as _172 from "./params/v1beta1/query.rpc.Query";
import * as _173 from "./slashing/v1beta1/query.rpc.Query";
import * as _174 from "./staking/v1beta1/query.rpc.Query";
import * as _175 from "./tx/v1beta1/service.rpc.Service";
import * as _176 from "./upgrade/v1beta1/query.rpc.Query";
import * as _177 from "./authz/v1beta1/tx.rpc.msg";
import * as _178 from "./bank/v1beta1/tx.rpc.msg";
import * as _179 from "./crisis/v1beta1/tx.rpc.msg";
import * as _180 from "./distribution/v1beta1/tx.rpc.msg";
import * as _181 from "./evidence/v1beta1/tx.rpc.msg";
import * as _182 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _183 from "./gov/v1beta1/tx.rpc.msg";
import * as _184 from "./slashing/v1beta1/tx.rpc.msg";
import * as _185 from "./staking/v1beta1/tx.rpc.msg";
import * as _186 from "./vesting/v1beta1/tx.rpc.msg";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace cosmos {
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._32
      };
    }
    export const v1beta1 = {
      ..._33
    };
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
    export namespace node {
      export const v1beta1 = {
        ..._36,
        ..._165
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
        ..._41
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._42,
        ..._166
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._162
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._142,
      ..._152,
      ..._163,
      ..._177
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._143,
      ..._153,
      ..._164,
      ..._178
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._56,
      ..._57
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._144,
      ..._154,
      ..._179
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._60
    };
    export const multisig = {
      ..._61
    };
    export const secp256k1 = {
      ..._62
    };
    export const secp256r1 = {
      ..._63
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._145,
      ..._155,
      ..._167,
      ..._180
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._146,
      ..._156,
      ..._168,
      ..._181
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._147,
      ..._157,
      ..._169,
      ..._182
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._76
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._148,
      ..._158,
      ..._170,
      ..._183
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._171
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._172
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._149,
      ..._159,
      ..._173,
      ..._184
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._150,
      ..._160,
      ..._174,
      ..._185
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._175
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._176
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._151,
      ..._161,
      ..._186
    };
  }
  export const ClientFactory = {
    ..._189,
    ..._190
  };
}