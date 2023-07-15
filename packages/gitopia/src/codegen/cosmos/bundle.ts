import * as _0 from "./app/module/v1alpha1/module";
import * as _1 from "./app/v1alpha1/config";
import * as _2 from "./app/v1alpha1/module";
import * as _3 from "./app/v1alpha1/query";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/node/v1beta1/query";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/tendermint/v1beta1/types";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
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
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _68 from "./msg/v1/msg";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/module/v1alpha1/module";
import * as _75 from "./orm/v1/orm";
import * as _76 from "./orm/v1alpha1/schema";
import * as _77 from "./params/v1beta1/params";
import * as _78 from "./params/v1beta1/query";
import * as _79 from "./slashing/v1beta1/genesis";
import * as _80 from "./slashing/v1beta1/query";
import * as _81 from "./slashing/v1beta1/slashing";
import * as _82 from "./slashing/v1beta1/tx";
import * as _83 from "./staking/v1beta1/authz";
import * as _84 from "./staking/v1beta1/genesis";
import * as _85 from "./staking/v1beta1/query";
import * as _86 from "./staking/v1beta1/staking";
import * as _87 from "./staking/v1beta1/tx";
import * as _88 from "./tx/signing/v1beta1/signing";
import * as _89 from "./tx/v1beta1/service";
import * as _90 from "./tx/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _114 from "./authz/v1beta1/tx.amino";
import * as _115 from "./bank/v1beta1/tx.amino";
import * as _116 from "./crisis/v1beta1/tx.amino";
import * as _117 from "./distribution/v1beta1/tx.amino";
import * as _118 from "./evidence/v1beta1/tx.amino";
import * as _119 from "./feegrant/v1beta1/tx.amino";
import * as _120 from "./gov/v1/tx.amino";
import * as _121 from "./gov/v1beta1/tx.amino";
import * as _122 from "./group/v1/tx.amino";
import * as _123 from "./nft/v1beta1/tx.amino";
import * as _124 from "./slashing/v1beta1/tx.amino";
import * as _125 from "./staking/v1beta1/tx.amino";
import * as _126 from "./upgrade/v1beta1/tx.amino";
import * as _127 from "./vesting/v1beta1/tx.amino";
import * as _128 from "./authz/v1beta1/tx.registry";
import * as _129 from "./bank/v1beta1/tx.registry";
import * as _130 from "./crisis/v1beta1/tx.registry";
import * as _131 from "./distribution/v1beta1/tx.registry";
import * as _132 from "./evidence/v1beta1/tx.registry";
import * as _133 from "./feegrant/v1beta1/tx.registry";
import * as _134 from "./gov/v1/tx.registry";
import * as _135 from "./gov/v1beta1/tx.registry";
import * as _136 from "./group/v1/tx.registry";
import * as _137 from "./nft/v1beta1/tx.registry";
import * as _138 from "./slashing/v1beta1/tx.registry";
import * as _139 from "./staking/v1beta1/tx.registry";
import * as _140 from "./upgrade/v1beta1/tx.registry";
import * as _141 from "./vesting/v1beta1/tx.registry";
import * as _142 from "./app/v1alpha1/query.rpc.Query";
import * as _143 from "./auth/v1beta1/query.rpc.Query";
import * as _144 from "./authz/v1beta1/query.rpc.Query";
import * as _145 from "./bank/v1beta1/query.rpc.Query";
import * as _146 from "./base/node/v1beta1/query.rpc.Service";
import * as _147 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _148 from "./distribution/v1beta1/query.rpc.Query";
import * as _149 from "./evidence/v1beta1/query.rpc.Query";
import * as _150 from "./feegrant/v1beta1/query.rpc.Query";
import * as _151 from "./gov/v1/query.rpc.Query";
import * as _152 from "./gov/v1beta1/query.rpc.Query";
import * as _153 from "./group/v1/query.rpc.Query";
import * as _154 from "./mint/v1beta1/query.rpc.Query";
import * as _155 from "./nft/v1beta1/query.rpc.Query";
import * as _156 from "./params/v1beta1/query.rpc.Query";
import * as _157 from "./slashing/v1beta1/query.rpc.Query";
import * as _158 from "./staking/v1beta1/query.rpc.Query";
import * as _159 from "./tx/v1beta1/service.rpc.Service";
import * as _160 from "./upgrade/v1beta1/query.rpc.Query";
import * as _161 from "./authz/v1beta1/tx.rpc.msg";
import * as _162 from "./bank/v1beta1/tx.rpc.msg";
import * as _163 from "./crisis/v1beta1/tx.rpc.msg";
import * as _164 from "./distribution/v1beta1/tx.rpc.msg";
import * as _165 from "./evidence/v1beta1/tx.rpc.msg";
import * as _166 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _167 from "./gov/v1/tx.rpc.msg";
import * as _168 from "./gov/v1beta1/tx.rpc.msg";
import * as _169 from "./group/v1/tx.rpc.msg";
import * as _170 from "./nft/v1beta1/tx.rpc.msg";
import * as _171 from "./slashing/v1beta1/tx.rpc.msg";
import * as _172 from "./staking/v1beta1/tx.rpc.msg";
import * as _173 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _174 from "./vesting/v1beta1/tx.rpc.msg";
import * as _175 from "./rpc.query";
import * as _176 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._0
      };
    }
    export const v1alpha1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._142
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._143
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._114,
      ..._128,
      ..._144,
      ..._161
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._115,
      ..._129,
      ..._145,
      ..._162
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._18
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._19,
        ..._146
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._21
      };
      export const v2alpha1 = {
        ..._22
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._24,
        ..._25
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._26,
        ..._27,
        ..._147
      };
    }
    export const v1beta1 = {
      ..._28
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._29,
      ..._30
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._116,
      ..._130,
      ..._163
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export namespace hd {
      export const v1 = {
        ..._34
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35
      };
    }
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
      ..._117,
      ..._131,
      ..._148,
      ..._164
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._118,
      ..._132,
      ..._149,
      ..._165
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._119,
      ..._133,
      ..._150,
      ..._166
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._51
    };
  }
  export namespace gov {
    export const v1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._120,
      ..._134,
      ..._151,
      ..._167
    };
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._121,
      ..._135,
      ..._152,
      ..._168
    };
  }
  export namespace group {
    export const v1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._122,
      ..._136,
      ..._153,
      ..._169
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._154
    };
  }
  export namespace msg {
    export const v1 = {
      ..._68
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._123,
      ..._137,
      ..._155,
      ..._170
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._74
      };
    }
    export const v1 = {
      ..._75
    };
    export const v1alpha1 = {
      ..._76
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._156
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._124,
      ..._138,
      ..._157,
      ..._171
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._125,
      ..._139,
      ..._158,
      ..._172
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._88
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._159
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._126,
      ..._140,
      ..._160,
      ..._173
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._127,
      ..._141,
      ..._174
    };
  }
  export const ClientFactory = {
    ..._175,
    ..._176
  };
}