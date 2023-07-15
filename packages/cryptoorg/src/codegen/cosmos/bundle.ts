import * as _17 from "./app/module/v1alpha1/module";
import * as _18 from "./app/v1alpha1/config";
import * as _19 from "./app/v1alpha1/module";
import * as _20 from "./app/v1alpha1/query";
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
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v1beta1/reflection";
import * as _39 from "./base/reflection/v2alpha1/reflection";
import * as _40 from "./base/snapshots/v1beta1/snapshot";
import * as _41 from "./base/store/v1beta1/commit_info";
import * as _42 from "./base/store/v1beta1/listening";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/tendermint/v1beta1/types";
import * as _45 from "./base/v1beta1/coin";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/tx";
import * as _50 from "./crypto/ed25519/keys";
import * as _51 from "./crypto/hd/v1/hd";
import * as _52 from "./crypto/keyring/v1/record";
import * as _53 from "./crypto/multisig/keys";
import * as _54 from "./crypto/secp256k1/keys";
import * as _55 from "./crypto/secp256r1/keys";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/v1beta1/evidence";
import * as _61 from "./evidence/v1beta1/genesis";
import * as _62 from "./evidence/v1beta1/query";
import * as _63 from "./evidence/v1beta1/tx";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _85 from "./msg/v1/msg";
import * as _86 from "./nft/v1beta1/event";
import * as _87 from "./nft/v1beta1/genesis";
import * as _88 from "./nft/v1beta1/nft";
import * as _89 from "./nft/v1beta1/query";
import * as _90 from "./nft/v1beta1/tx";
import * as _91 from "./orm/module/v1alpha1/module";
import * as _92 from "./orm/v1/orm";
import * as _93 from "./orm/v1alpha1/schema";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _96 from "./slashing/v1beta1/genesis";
import * as _97 from "./slashing/v1beta1/query";
import * as _98 from "./slashing/v1beta1/slashing";
import * as _99 from "./slashing/v1beta1/tx";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/query";
import * as _109 from "./upgrade/v1beta1/tx";
import * as _110 from "./upgrade/v1beta1/upgrade";
import * as _111 from "./vesting/v1beta1/tx";
import * as _112 from "./vesting/v1beta1/vesting";
import * as _183 from "./authz/v1beta1/tx.amino";
import * as _184 from "./bank/v1beta1/tx.amino";
import * as _185 from "./crisis/v1beta1/tx.amino";
import * as _186 from "./distribution/v1beta1/tx.amino";
import * as _187 from "./evidence/v1beta1/tx.amino";
import * as _188 from "./feegrant/v1beta1/tx.amino";
import * as _189 from "./gov/v1/tx.amino";
import * as _190 from "./gov/v1beta1/tx.amino";
import * as _191 from "./group/v1/tx.amino";
import * as _192 from "./nft/v1beta1/tx.amino";
import * as _193 from "./slashing/v1beta1/tx.amino";
import * as _194 from "./staking/v1beta1/tx.amino";
import * as _195 from "./upgrade/v1beta1/tx.amino";
import * as _196 from "./vesting/v1beta1/tx.amino";
import * as _197 from "./authz/v1beta1/tx.registry";
import * as _198 from "./bank/v1beta1/tx.registry";
import * as _199 from "./crisis/v1beta1/tx.registry";
import * as _200 from "./distribution/v1beta1/tx.registry";
import * as _201 from "./evidence/v1beta1/tx.registry";
import * as _202 from "./feegrant/v1beta1/tx.registry";
import * as _203 from "./gov/v1/tx.registry";
import * as _204 from "./gov/v1beta1/tx.registry";
import * as _205 from "./group/v1/tx.registry";
import * as _206 from "./nft/v1beta1/tx.registry";
import * as _207 from "./slashing/v1beta1/tx.registry";
import * as _208 from "./staking/v1beta1/tx.registry";
import * as _209 from "./upgrade/v1beta1/tx.registry";
import * as _210 from "./vesting/v1beta1/tx.registry";
import * as _211 from "./app/v1alpha1/query.rpc.Query";
import * as _212 from "./auth/v1beta1/query.rpc.Query";
import * as _213 from "./authz/v1beta1/query.rpc.Query";
import * as _214 from "./bank/v1beta1/query.rpc.Query";
import * as _215 from "./base/node/v1beta1/query.rpc.Service";
import * as _216 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _217 from "./distribution/v1beta1/query.rpc.Query";
import * as _218 from "./evidence/v1beta1/query.rpc.Query";
import * as _219 from "./feegrant/v1beta1/query.rpc.Query";
import * as _220 from "./gov/v1/query.rpc.Query";
import * as _221 from "./gov/v1beta1/query.rpc.Query";
import * as _222 from "./group/v1/query.rpc.Query";
import * as _223 from "./mint/v1beta1/query.rpc.Query";
import * as _224 from "./nft/v1beta1/query.rpc.Query";
import * as _225 from "./params/v1beta1/query.rpc.Query";
import * as _226 from "./slashing/v1beta1/query.rpc.Query";
import * as _227 from "./staking/v1beta1/query.rpc.Query";
import * as _228 from "./tx/v1beta1/service.rpc.Service";
import * as _229 from "./upgrade/v1beta1/query.rpc.Query";
import * as _230 from "./authz/v1beta1/tx.rpc.msg";
import * as _231 from "./bank/v1beta1/tx.rpc.msg";
import * as _232 from "./crisis/v1beta1/tx.rpc.msg";
import * as _233 from "./distribution/v1beta1/tx.rpc.msg";
import * as _234 from "./evidence/v1beta1/tx.rpc.msg";
import * as _235 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _236 from "./gov/v1/tx.rpc.msg";
import * as _237 from "./gov/v1beta1/tx.rpc.msg";
import * as _238 from "./group/v1/tx.rpc.msg";
import * as _239 from "./nft/v1beta1/tx.rpc.msg";
import * as _240 from "./slashing/v1beta1/tx.rpc.msg";
import * as _241 from "./staking/v1beta1/tx.rpc.msg";
import * as _242 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _243 from "./vesting/v1beta1/tx.rpc.msg";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._17
      };
    }
    export const v1alpha1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._211
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._212
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._183,
      ..._197,
      ..._213,
      ..._230
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._184,
      ..._198,
      ..._214,
      ..._231
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
    export namespace node {
      export const v1beta1 = {
        ..._36,
        ..._215
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._38
      };
      export const v2alpha1 = {
        ..._39
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._40
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._41,
        ..._42
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._43,
        ..._44,
        ..._216
      };
    }
    export const v1beta1 = {
      ..._45
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._46,
      ..._47
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._185,
      ..._199,
      ..._232
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._50
    };
    export namespace hd {
      export const v1 = {
        ..._51
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._52
      };
    }
    export const multisig = {
      ..._53
    };
    export const secp256k1 = {
      ..._54
    };
    export const secp256r1 = {
      ..._55
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._186,
      ..._200,
      ..._217,
      ..._233
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._187,
      ..._201,
      ..._218,
      ..._234
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._188,
      ..._202,
      ..._219,
      ..._235
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._68
    };
  }
  export namespace gov {
    export const v1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._189,
      ..._203,
      ..._220,
      ..._236
    };
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._190,
      ..._204,
      ..._221,
      ..._237
    };
  }
  export namespace group {
    export const v1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._191,
      ..._205,
      ..._222,
      ..._238
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._223
    };
  }
  export namespace msg {
    export const v1 = {
      ..._85
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._192,
      ..._206,
      ..._224,
      ..._239
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._91
      };
    }
    export const v1 = {
      ..._92
    };
    export const v1alpha1 = {
      ..._93
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._225
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._193,
      ..._207,
      ..._226,
      ..._240
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._194,
      ..._208,
      ..._227,
      ..._241
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._228
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._110,
      ..._195,
      ..._209,
      ..._229,
      ..._242
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._196,
      ..._210,
      ..._243
    };
  }
  export const ClientFactory = {
    ..._268,
    ..._269
  };
}