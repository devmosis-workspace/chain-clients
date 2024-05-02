import * as _20 from "./app/module/v1alpha1/module";
import * as _21 from "./app/v1alpha1/config";
import * as _22 from "./app/v1alpha1/module";
import * as _23 from "./app/v1alpha1/query";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/node/v1beta1/query";
import * as _40 from "./base/query/v1beta1/pagination";
import * as _41 from "./base/reflection/v1beta1/reflection";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/snapshots/v1beta1/snapshot";
import * as _44 from "./base/store/v1beta1/commit_info";
import * as _45 from "./base/store/v1beta1/listening";
import * as _46 from "./base/tendermint/v1beta1/query";
import * as _47 from "./base/tendermint/v1beta1/types";
import * as _48 from "./base/v1beta1/coin";
import * as _49 from "./capability/v1beta1/capability";
import * as _50 from "./capability/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/genesis";
import * as _52 from "./crisis/v1beta1/tx";
import * as _53 from "./crypto/ed25519/keys";
import * as _54 from "./crypto/hd/v1/hd";
import * as _55 from "./crypto/keyring/v1/record";
import * as _56 from "./crypto/multisig/keys";
import * as _57 from "./crypto/secp256k1/keys";
import * as _58 from "./crypto/secp256r1/keys";
import * as _59 from "./distribution/v1beta1/distribution";
import * as _60 from "./distribution/v1beta1/genesis";
import * as _61 from "./distribution/v1beta1/query";
import * as _62 from "./distribution/v1beta1/tx";
import * as _63 from "./evidence/v1beta1/evidence";
import * as _64 from "./evidence/v1beta1/genesis";
import * as _65 from "./evidence/v1beta1/query";
import * as _66 from "./evidence/v1beta1/tx";
import * as _67 from "./feegrant/v1beta1/feegrant";
import * as _68 from "./feegrant/v1beta1/genesis";
import * as _69 from "./feegrant/v1beta1/query";
import * as _70 from "./feegrant/v1beta1/tx";
import * as _71 from "./genutil/v1beta1/genesis";
import * as _72 from "./gov/v1/genesis";
import * as _73 from "./gov/v1/gov";
import * as _74 from "./gov/v1/query";
import * as _75 from "./gov/v1/tx";
import * as _76 from "./gov/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/gov";
import * as _78 from "./gov/v1beta1/query";
import * as _79 from "./gov/v1beta1/tx";
import * as _80 from "./group/v1/events";
import * as _81 from "./group/v1/genesis";
import * as _82 from "./group/v1/query";
import * as _83 from "./group/v1/tx";
import * as _84 from "./group/v1/types";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./msg/v1/msg";
import * as _89 from "./nft/v1beta1/event";
import * as _90 from "./nft/v1beta1/genesis";
import * as _91 from "./nft/v1beta1/nft";
import * as _92 from "./nft/v1beta1/query";
import * as _93 from "./nft/v1beta1/tx";
import * as _94 from "./orm/module/v1alpha1/module";
import * as _95 from "./orm/v1/orm";
import * as _96 from "./orm/v1alpha1/schema";
import * as _97 from "./params/v1beta1/params";
import * as _98 from "./params/v1beta1/query";
import * as _99 from "./slashing/v1beta1/genesis";
import * as _100 from "./slashing/v1beta1/query";
import * as _101 from "./slashing/v1beta1/slashing";
import * as _102 from "./slashing/v1beta1/tx";
import * as _103 from "./staking/v1beta1/authz";
import * as _104 from "./staking/v1beta1/genesis";
import * as _105 from "./staking/v1beta1/query";
import * as _106 from "./staking/v1beta1/staking";
import * as _107 from "./staking/v1beta1/tx";
import * as _108 from "./tx/signing/v1beta1/signing";
import * as _109 from "./tx/v1beta1/service";
import * as _110 from "./tx/v1beta1/tx";
import * as _111 from "./upgrade/v1beta1/query";
import * as _112 from "./upgrade/v1beta1/tx";
import * as _113 from "./upgrade/v1beta1/upgrade";
import * as _114 from "./vesting/v1beta1/tx";
import * as _115 from "./vesting/v1beta1/vesting";
import * as _160 from "./authz/v1beta1/tx.amino";
import * as _161 from "./bank/v1beta1/tx.amino";
import * as _162 from "./crisis/v1beta1/tx.amino";
import * as _163 from "./distribution/v1beta1/tx.amino";
import * as _164 from "./evidence/v1beta1/tx.amino";
import * as _165 from "./feegrant/v1beta1/tx.amino";
import * as _166 from "./gov/v1/tx.amino";
import * as _167 from "./gov/v1beta1/tx.amino";
import * as _168 from "./group/v1/tx.amino";
import * as _169 from "./nft/v1beta1/tx.amino";
import * as _170 from "./slashing/v1beta1/tx.amino";
import * as _171 from "./staking/v1beta1/tx.amino";
import * as _172 from "./upgrade/v1beta1/tx.amino";
import * as _173 from "./vesting/v1beta1/tx.amino";
import * as _174 from "./authz/v1beta1/tx.registry";
import * as _175 from "./bank/v1beta1/tx.registry";
import * as _176 from "./crisis/v1beta1/tx.registry";
import * as _177 from "./distribution/v1beta1/tx.registry";
import * as _178 from "./evidence/v1beta1/tx.registry";
import * as _179 from "./feegrant/v1beta1/tx.registry";
import * as _180 from "./gov/v1/tx.registry";
import * as _181 from "./gov/v1beta1/tx.registry";
import * as _182 from "./group/v1/tx.registry";
import * as _183 from "./nft/v1beta1/tx.registry";
import * as _184 from "./slashing/v1beta1/tx.registry";
import * as _185 from "./staking/v1beta1/tx.registry";
import * as _186 from "./upgrade/v1beta1/tx.registry";
import * as _187 from "./vesting/v1beta1/tx.registry";
import * as _188 from "./auth/v1beta1/query.lcd";
import * as _189 from "./authz/v1beta1/query.lcd";
import * as _190 from "./bank/v1beta1/query.lcd";
import * as _191 from "./base/node/v1beta1/query.lcd";
import * as _192 from "./base/tendermint/v1beta1/query.lcd";
import * as _193 from "./distribution/v1beta1/query.lcd";
import * as _194 from "./evidence/v1beta1/query.lcd";
import * as _195 from "./feegrant/v1beta1/query.lcd";
import * as _196 from "./gov/v1/query.lcd";
import * as _197 from "./gov/v1beta1/query.lcd";
import * as _198 from "./group/v1/query.lcd";
import * as _199 from "./mint/v1beta1/query.lcd";
import * as _200 from "./nft/v1beta1/query.lcd";
import * as _201 from "./params/v1beta1/query.lcd";
import * as _202 from "./slashing/v1beta1/query.lcd";
import * as _203 from "./staking/v1beta1/query.lcd";
import * as _204 from "./tx/v1beta1/service.lcd";
import * as _205 from "./upgrade/v1beta1/query.lcd";
import * as _206 from "./app/v1alpha1/query.rpc.Query";
import * as _207 from "./auth/v1beta1/query.rpc.Query";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _212 from "./distribution/v1beta1/query.rpc.Query";
import * as _213 from "./evidence/v1beta1/query.rpc.Query";
import * as _214 from "./feegrant/v1beta1/query.rpc.Query";
import * as _215 from "./gov/v1/query.rpc.Query";
import * as _216 from "./gov/v1beta1/query.rpc.Query";
import * as _217 from "./group/v1/query.rpc.Query";
import * as _218 from "./mint/v1beta1/query.rpc.Query";
import * as _219 from "./nft/v1beta1/query.rpc.Query";
import * as _220 from "./params/v1beta1/query.rpc.Query";
import * as _221 from "./slashing/v1beta1/query.rpc.Query";
import * as _222 from "./staking/v1beta1/query.rpc.Query";
import * as _223 from "./tx/v1beta1/service.rpc.Service";
import * as _224 from "./upgrade/v1beta1/query.rpc.Query";
import * as _225 from "./authz/v1beta1/tx.rpc.msg";
import * as _226 from "./bank/v1beta1/tx.rpc.msg";
import * as _227 from "./crisis/v1beta1/tx.rpc.msg";
import * as _228 from "./distribution/v1beta1/tx.rpc.msg";
import * as _229 from "./evidence/v1beta1/tx.rpc.msg";
import * as _230 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _231 from "./gov/v1/tx.rpc.msg";
import * as _232 from "./gov/v1beta1/tx.rpc.msg";
import * as _233 from "./group/v1/tx.rpc.msg";
import * as _234 from "./nft/v1beta1/tx.rpc.msg";
import * as _235 from "./slashing/v1beta1/tx.rpc.msg";
import * as _236 from "./staking/v1beta1/tx.rpc.msg";
import * as _237 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _238 from "./vesting/v1beta1/tx.rpc.msg";
import * as _247 from "./lcd";
import * as _248 from "./rpc.query";
import * as _249 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._20
      };
    }
    export const v1alpha1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._206
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._188,
      ..._207
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._160,
      ..._174,
      ..._189,
      ..._208,
      ..._225
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._161,
      ..._175,
      ..._190,
      ..._209,
      ..._226
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._39,
        ..._191,
        ..._210
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._40
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._41
      };
      export const v2alpha1 = {
        ..._42
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._43
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._44,
        ..._45
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._46,
        ..._47,
        ..._192,
        ..._211
      };
    }
    export const v1beta1 = {
      ..._48
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._49,
      ..._50
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._162,
      ..._176,
      ..._227
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._53
    };
    export namespace hd {
      export const v1 = {
        ..._54
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._55
      };
    }
    export const multisig = {
      ..._56
    };
    export const secp256k1 = {
      ..._57
    };
    export const secp256r1 = {
      ..._58
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._163,
      ..._177,
      ..._193,
      ..._212,
      ..._228
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._164,
      ..._178,
      ..._194,
      ..._213,
      ..._229
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._165,
      ..._179,
      ..._195,
      ..._214,
      ..._230
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._71
    };
  }
  export namespace gov {
    export const v1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._166,
      ..._180,
      ..._196,
      ..._215,
      ..._231
    };
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._167,
      ..._181,
      ..._197,
      ..._216,
      ..._232
    };
  }
  export namespace group {
    export const v1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._168,
      ..._182,
      ..._198,
      ..._217,
      ..._233
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._199,
      ..._218
    };
  }
  export namespace msg {
    export const v1 = {
      ..._88
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._169,
      ..._183,
      ..._200,
      ..._219,
      ..._234
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._94
      };
    }
    export const v1 = {
      ..._95
    };
    export const v1alpha1 = {
      ..._96
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._201,
      ..._220
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._170,
      ..._184,
      ..._202,
      ..._221,
      ..._235
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._171,
      ..._185,
      ..._203,
      ..._222,
      ..._236
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._204,
      ..._223
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._172,
      ..._186,
      ..._205,
      ..._224,
      ..._237
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._114,
      ..._115,
      ..._173,
      ..._187,
      ..._238
    };
  }
  export const ClientFactory = {
    ..._247,
    ..._248,
    ..._249
  };
}