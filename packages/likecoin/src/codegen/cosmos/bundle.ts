import * as _26 from "./app/module/v1alpha1/module";
import * as _27 from "./app/v1alpha1/config";
import * as _28 from "./app/v1alpha1/module";
import * as _29 from "./app/v1alpha1/query";
import * as _30 from "./auth/v1beta1/auth";
import * as _31 from "./auth/v1beta1/genesis";
import * as _32 from "./auth/v1beta1/query";
import * as _33 from "./authz/v1beta1/authz";
import * as _34 from "./authz/v1beta1/event";
import * as _35 from "./authz/v1beta1/genesis";
import * as _36 from "./authz/v1beta1/query";
import * as _37 from "./authz/v1beta1/tx";
import * as _38 from "./bank/v1beta1/authz";
import * as _39 from "./bank/v1beta1/bank";
import * as _40 from "./bank/v1beta1/genesis";
import * as _41 from "./bank/v1beta1/query";
import * as _42 from "./bank/v1beta1/tx";
import * as _43 from "./base/abci/v1beta1/abci";
import * as _44 from "./base/kv/v1beta1/kv";
import * as _45 from "./base/node/v1beta1/query";
import * as _46 from "./base/query/v1beta1/pagination";
import * as _47 from "./base/reflection/v1beta1/reflection";
import * as _48 from "./base/reflection/v2alpha1/reflection";
import * as _49 from "./base/snapshots/v1beta1/snapshot";
import * as _50 from "./base/store/v1beta1/commit_info";
import * as _51 from "./base/store/v1beta1/listening";
import * as _52 from "./base/tendermint/v1beta1/query";
import * as _53 from "./base/tendermint/v1beta1/types";
import * as _54 from "./base/v1beta1/coin";
import * as _55 from "./capability/v1beta1/capability";
import * as _56 from "./capability/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/tx";
import * as _59 from "./crypto/ed25519/keys";
import * as _60 from "./crypto/hd/v1/hd";
import * as _61 from "./crypto/keyring/v1/record";
import * as _62 from "./crypto/multisig/keys";
import * as _63 from "./crypto/secp256k1/keys";
import * as _64 from "./crypto/secp256r1/keys";
import * as _65 from "./distribution/v1beta1/distribution";
import * as _66 from "./distribution/v1beta1/genesis";
import * as _67 from "./distribution/v1beta1/query";
import * as _68 from "./distribution/v1beta1/tx";
import * as _69 from "./evidence/v1beta1/evidence";
import * as _70 from "./evidence/v1beta1/genesis";
import * as _71 from "./evidence/v1beta1/query";
import * as _72 from "./evidence/v1beta1/tx";
import * as _73 from "./feegrant/v1beta1/feegrant";
import * as _74 from "./feegrant/v1beta1/genesis";
import * as _75 from "./feegrant/v1beta1/query";
import * as _76 from "./feegrant/v1beta1/tx";
import * as _77 from "./genutil/v1beta1/genesis";
import * as _78 from "./gov/v1/genesis";
import * as _79 from "./gov/v1/gov";
import * as _80 from "./gov/v1/query";
import * as _81 from "./gov/v1/tx";
import * as _82 from "./gov/v1beta1/genesis";
import * as _83 from "./gov/v1beta1/gov";
import * as _84 from "./gov/v1beta1/query";
import * as _85 from "./gov/v1beta1/tx";
import * as _86 from "./group/v1/events";
import * as _87 from "./group/v1/genesis";
import * as _88 from "./group/v1/query";
import * as _89 from "./group/v1/tx";
import * as _90 from "./group/v1/types";
import * as _91 from "./mint/v1beta1/genesis";
import * as _92 from "./mint/v1beta1/mint";
import * as _93 from "./mint/v1beta1/query";
import * as _94 from "./msg/v1/msg";
import * as _95 from "./nft/v1beta1/event";
import * as _96 from "./nft/v1beta1/genesis";
import * as _97 from "./nft/v1beta1/nft";
import * as _98 from "./nft/v1beta1/query";
import * as _99 from "./nft/v1beta1/tx";
import * as _100 from "./orm/module/v1alpha1/module";
import * as _101 from "./orm/v1/orm";
import * as _102 from "./orm/v1alpha1/schema";
import * as _103 from "./params/v1beta1/params";
import * as _104 from "./params/v1beta1/query";
import * as _105 from "./slashing/v1beta1/genesis";
import * as _106 from "./slashing/v1beta1/query";
import * as _107 from "./slashing/v1beta1/slashing";
import * as _108 from "./slashing/v1beta1/tx";
import * as _109 from "./staking/v1beta1/authz";
import * as _110 from "./staking/v1beta1/genesis";
import * as _111 from "./staking/v1beta1/query";
import * as _112 from "./staking/v1beta1/staking";
import * as _113 from "./staking/v1beta1/tx";
import * as _114 from "./tx/signing/v1beta1/signing";
import * as _115 from "./tx/v1beta1/service";
import * as _116 from "./tx/v1beta1/tx";
import * as _117 from "./upgrade/v1beta1/query";
import * as _118 from "./upgrade/v1beta1/tx";
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/v1beta1/tx";
import * as _121 from "./vesting/v1beta1/vesting";
import * as _148 from "./authz/v1beta1/tx.amino";
import * as _149 from "./bank/v1beta1/tx.amino";
import * as _150 from "./crisis/v1beta1/tx.amino";
import * as _151 from "./distribution/v1beta1/tx.amino";
import * as _152 from "./evidence/v1beta1/tx.amino";
import * as _153 from "./feegrant/v1beta1/tx.amino";
import * as _154 from "./gov/v1/tx.amino";
import * as _155 from "./gov/v1beta1/tx.amino";
import * as _156 from "./group/v1/tx.amino";
import * as _157 from "./nft/v1beta1/tx.amino";
import * as _158 from "./slashing/v1beta1/tx.amino";
import * as _159 from "./staking/v1beta1/tx.amino";
import * as _160 from "./upgrade/v1beta1/tx.amino";
import * as _161 from "./vesting/v1beta1/tx.amino";
import * as _162 from "./authz/v1beta1/tx.registry";
import * as _163 from "./bank/v1beta1/tx.registry";
import * as _164 from "./crisis/v1beta1/tx.registry";
import * as _165 from "./distribution/v1beta1/tx.registry";
import * as _166 from "./evidence/v1beta1/tx.registry";
import * as _167 from "./feegrant/v1beta1/tx.registry";
import * as _168 from "./gov/v1/tx.registry";
import * as _169 from "./gov/v1beta1/tx.registry";
import * as _170 from "./group/v1/tx.registry";
import * as _171 from "./nft/v1beta1/tx.registry";
import * as _172 from "./slashing/v1beta1/tx.registry";
import * as _173 from "./staking/v1beta1/tx.registry";
import * as _174 from "./upgrade/v1beta1/tx.registry";
import * as _175 from "./vesting/v1beta1/tx.registry";
import * as _176 from "./app/v1alpha1/query.rpc.Query";
import * as _177 from "./auth/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/query.rpc.Query";
import * as _179 from "./bank/v1beta1/query.rpc.Query";
import * as _180 from "./base/node/v1beta1/query.rpc.Service";
import * as _181 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _182 from "./distribution/v1beta1/query.rpc.Query";
import * as _183 from "./evidence/v1beta1/query.rpc.Query";
import * as _184 from "./feegrant/v1beta1/query.rpc.Query";
import * as _185 from "./gov/v1/query.rpc.Query";
import * as _186 from "./gov/v1beta1/query.rpc.Query";
import * as _187 from "./group/v1/query.rpc.Query";
import * as _188 from "./mint/v1beta1/query.rpc.Query";
import * as _189 from "./nft/v1beta1/query.rpc.Query";
import * as _190 from "./params/v1beta1/query.rpc.Query";
import * as _191 from "./slashing/v1beta1/query.rpc.Query";
import * as _192 from "./staking/v1beta1/query.rpc.Query";
import * as _193 from "./tx/v1beta1/service.rpc.Service";
import * as _194 from "./upgrade/v1beta1/query.rpc.Query";
import * as _195 from "./authz/v1beta1/tx.rpc.msg";
import * as _196 from "./bank/v1beta1/tx.rpc.msg";
import * as _197 from "./crisis/v1beta1/tx.rpc.msg";
import * as _198 from "./distribution/v1beta1/tx.rpc.msg";
import * as _199 from "./evidence/v1beta1/tx.rpc.msg";
import * as _200 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _201 from "./gov/v1/tx.rpc.msg";
import * as _202 from "./gov/v1beta1/tx.rpc.msg";
import * as _203 from "./group/v1/tx.rpc.msg";
import * as _204 from "./nft/v1beta1/tx.rpc.msg";
import * as _205 from "./slashing/v1beta1/tx.rpc.msg";
import * as _206 from "./staking/v1beta1/tx.rpc.msg";
import * as _207 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
import * as _211 from "./rpc.query";
import * as _212 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._26
      };
    }
    export const v1alpha1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._176
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._177
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._148,
      ..._162,
      ..._178,
      ..._195
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._149,
      ..._163,
      ..._179,
      ..._196
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._43
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._44
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._45,
        ..._180
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._46
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._47
      };
      export const v2alpha1 = {
        ..._48
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._49
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._50,
        ..._51
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._52,
        ..._53,
        ..._181
      };
    }
    export const v1beta1 = {
      ..._54
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._55,
      ..._56
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._150,
      ..._164,
      ..._197
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._59
    };
    export namespace hd {
      export const v1 = {
        ..._60
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._61
      };
    }
    export const multisig = {
      ..._62
    };
    export const secp256k1 = {
      ..._63
    };
    export const secp256r1 = {
      ..._64
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._151,
      ..._165,
      ..._182,
      ..._198
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._152,
      ..._166,
      ..._183,
      ..._199
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._153,
      ..._167,
      ..._184,
      ..._200
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._77
    };
  }
  export namespace gov {
    export const v1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._154,
      ..._168,
      ..._185,
      ..._201
    };
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._155,
      ..._169,
      ..._186,
      ..._202
    };
  }
  export namespace group {
    export const v1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._156,
      ..._170,
      ..._187,
      ..._203
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._188
    };
  }
  export namespace msg {
    export const v1 = {
      ..._94
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._157,
      ..._171,
      ..._189,
      ..._204
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._100
      };
    }
    export const v1 = {
      ..._101
    };
    export const v1alpha1 = {
      ..._102
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._190
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._158,
      ..._172,
      ..._191,
      ..._205
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._159,
      ..._173,
      ..._192,
      ..._206
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._114
      };
    }
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._193
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._160,
      ..._174,
      ..._194,
      ..._207
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._161,
      ..._175,
      ..._208
    };
  }
  export const ClientFactory = {
    ..._211,
    ..._212
  };
}