import * as _23 from "./app/module/v1alpha1/module";
import * as _24 from "./app/v1alpha1/config";
import * as _25 from "./app/v1alpha1/module";
import * as _26 from "./app/v1alpha1/query";
import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./bank/v1beta1/authz";
import * as _36 from "./bank/v1beta1/bank";
import * as _37 from "./bank/v1beta1/genesis";
import * as _38 from "./bank/v1beta1/query";
import * as _39 from "./bank/v1beta1/tx";
import * as _40 from "./base/abci/v1beta1/abci";
import * as _41 from "./base/kv/v1beta1/kv";
import * as _42 from "./base/node/v1beta1/query";
import * as _43 from "./base/query/v1beta1/pagination";
import * as _44 from "./base/reflection/v1beta1/reflection";
import * as _45 from "./base/reflection/v2alpha1/reflection";
import * as _46 from "./base/snapshots/v1beta1/snapshot";
import * as _47 from "./base/store/v1beta1/commit_info";
import * as _48 from "./base/store/v1beta1/listening";
import * as _49 from "./base/tendermint/v1beta1/query";
import * as _50 from "./base/tendermint/v1beta1/types";
import * as _51 from "./base/v1beta1/coin";
import * as _52 from "./capability/v1beta1/capability";
import * as _53 from "./capability/v1beta1/genesis";
import * as _54 from "./crisis/v1beta1/genesis";
import * as _55 from "./crisis/v1beta1/tx";
import * as _56 from "./crypto/ed25519/keys";
import * as _57 from "./crypto/hd/v1/hd";
import * as _58 from "./crypto/keyring/v1/record";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/v1beta1/feegrant";
import * as _71 from "./feegrant/v1beta1/genesis";
import * as _72 from "./feegrant/v1beta1/query";
import * as _73 from "./feegrant/v1beta1/tx";
import * as _74 from "./genutil/v1beta1/genesis";
import * as _75 from "./gov/v1/genesis";
import * as _76 from "./gov/v1/gov";
import * as _77 from "./gov/v1/query";
import * as _78 from "./gov/v1/tx";
import * as _79 from "./gov/v1beta1/genesis";
import * as _80 from "./gov/v1beta1/gov";
import * as _81 from "./gov/v1beta1/query";
import * as _82 from "./gov/v1beta1/tx";
import * as _83 from "./group/v1/events";
import * as _84 from "./group/v1/genesis";
import * as _85 from "./group/v1/query";
import * as _86 from "./group/v1/tx";
import * as _87 from "./group/v1/types";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _91 from "./msg/v1/msg";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/v1/orm";
import * as _99 from "./orm/v1alpha1/schema";
import * as _100 from "./params/v1beta1/params";
import * as _101 from "./params/v1beta1/query";
import * as _102 from "./slashing/v1beta1/genesis";
import * as _103 from "./slashing/v1beta1/query";
import * as _104 from "./slashing/v1beta1/slashing";
import * as _105 from "./slashing/v1beta1/tx";
import * as _106 from "./staking/v1beta1/authz";
import * as _107 from "./staking/v1beta1/genesis";
import * as _108 from "./staking/v1beta1/query";
import * as _109 from "./staking/v1beta1/staking";
import * as _110 from "./staking/v1beta1/tx";
import * as _111 from "./tx/signing/v1beta1/signing";
import * as _112 from "./tx/v1beta1/service";
import * as _113 from "./tx/v1beta1/tx";
import * as _114 from "./upgrade/v1beta1/query";
import * as _115 from "./upgrade/v1beta1/tx";
import * as _116 from "./upgrade/v1beta1/upgrade";
import * as _117 from "./vesting/v1beta1/tx";
import * as _118 from "./vesting/v1beta1/vesting";
import * as _163 from "./authz/v1beta1/tx.amino";
import * as _164 from "./bank/v1beta1/tx.amino";
import * as _165 from "./crisis/v1beta1/tx.amino";
import * as _166 from "./distribution/v1beta1/tx.amino";
import * as _167 from "./evidence/v1beta1/tx.amino";
import * as _168 from "./feegrant/v1beta1/tx.amino";
import * as _169 from "./gov/v1/tx.amino";
import * as _170 from "./gov/v1beta1/tx.amino";
import * as _171 from "./group/v1/tx.amino";
import * as _172 from "./nft/v1beta1/tx.amino";
import * as _173 from "./slashing/v1beta1/tx.amino";
import * as _174 from "./staking/v1beta1/tx.amino";
import * as _175 from "./upgrade/v1beta1/tx.amino";
import * as _176 from "./vesting/v1beta1/tx.amino";
import * as _177 from "./authz/v1beta1/tx.registry";
import * as _178 from "./bank/v1beta1/tx.registry";
import * as _179 from "./crisis/v1beta1/tx.registry";
import * as _180 from "./distribution/v1beta1/tx.registry";
import * as _181 from "./evidence/v1beta1/tx.registry";
import * as _182 from "./feegrant/v1beta1/tx.registry";
import * as _183 from "./gov/v1/tx.registry";
import * as _184 from "./gov/v1beta1/tx.registry";
import * as _185 from "./group/v1/tx.registry";
import * as _186 from "./nft/v1beta1/tx.registry";
import * as _187 from "./slashing/v1beta1/tx.registry";
import * as _188 from "./staking/v1beta1/tx.registry";
import * as _189 from "./upgrade/v1beta1/tx.registry";
import * as _190 from "./vesting/v1beta1/tx.registry";
import * as _191 from "./auth/v1beta1/query.lcd";
import * as _192 from "./authz/v1beta1/query.lcd";
import * as _193 from "./bank/v1beta1/query.lcd";
import * as _194 from "./base/node/v1beta1/query.lcd";
import * as _195 from "./base/tendermint/v1beta1/query.lcd";
import * as _196 from "./distribution/v1beta1/query.lcd";
import * as _197 from "./evidence/v1beta1/query.lcd";
import * as _198 from "./feegrant/v1beta1/query.lcd";
import * as _199 from "./gov/v1/query.lcd";
import * as _200 from "./gov/v1beta1/query.lcd";
import * as _201 from "./group/v1/query.lcd";
import * as _202 from "./mint/v1beta1/query.lcd";
import * as _203 from "./nft/v1beta1/query.lcd";
import * as _204 from "./params/v1beta1/query.lcd";
import * as _205 from "./slashing/v1beta1/query.lcd";
import * as _206 from "./staking/v1beta1/query.lcd";
import * as _207 from "./tx/v1beta1/service.lcd";
import * as _208 from "./upgrade/v1beta1/query.lcd";
import * as _209 from "./app/v1alpha1/query.rpc.Query";
import * as _210 from "./auth/v1beta1/query.rpc.Query";
import * as _211 from "./authz/v1beta1/query.rpc.Query";
import * as _212 from "./bank/v1beta1/query.rpc.Query";
import * as _213 from "./base/node/v1beta1/query.rpc.Service";
import * as _214 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _215 from "./distribution/v1beta1/query.rpc.Query";
import * as _216 from "./evidence/v1beta1/query.rpc.Query";
import * as _217 from "./feegrant/v1beta1/query.rpc.Query";
import * as _218 from "./gov/v1/query.rpc.Query";
import * as _219 from "./gov/v1beta1/query.rpc.Query";
import * as _220 from "./group/v1/query.rpc.Query";
import * as _221 from "./mint/v1beta1/query.rpc.Query";
import * as _222 from "./nft/v1beta1/query.rpc.Query";
import * as _223 from "./params/v1beta1/query.rpc.Query";
import * as _224 from "./slashing/v1beta1/query.rpc.Query";
import * as _225 from "./staking/v1beta1/query.rpc.Query";
import * as _226 from "./tx/v1beta1/service.rpc.Service";
import * as _227 from "./upgrade/v1beta1/query.rpc.Query";
import * as _228 from "./authz/v1beta1/tx.rpc.msg";
import * as _229 from "./bank/v1beta1/tx.rpc.msg";
import * as _230 from "./crisis/v1beta1/tx.rpc.msg";
import * as _231 from "./distribution/v1beta1/tx.rpc.msg";
import * as _232 from "./evidence/v1beta1/tx.rpc.msg";
import * as _233 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _234 from "./gov/v1/tx.rpc.msg";
import * as _235 from "./gov/v1beta1/tx.rpc.msg";
import * as _236 from "./group/v1/tx.rpc.msg";
import * as _237 from "./nft/v1beta1/tx.rpc.msg";
import * as _238 from "./slashing/v1beta1/tx.rpc.msg";
import * as _239 from "./staking/v1beta1/tx.rpc.msg";
import * as _240 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _241 from "./vesting/v1beta1/tx.rpc.msg";
import * as _245 from "./lcd";
import * as _246 from "./rpc.query";
import * as _247 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._23
      };
    }
    export const v1alpha1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._209
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._191,
      ..._210
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._163,
      ..._177,
      ..._192,
      ..._211,
      ..._228
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._164,
      ..._178,
      ..._193,
      ..._212,
      ..._229
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._40
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._42,
        ..._194,
        ..._213
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._43
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._44
      };
      export const v2alpha1 = {
        ..._45
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._46
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._47,
        ..._48
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._49,
        ..._50,
        ..._195,
        ..._214
      };
    }
    export const v1beta1 = {
      ..._51
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._52,
      ..._53
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._165,
      ..._179,
      ..._230
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._56
    };
    export namespace hd {
      export const v1 = {
        ..._57
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._58
      };
    }
    export const multisig = {
      ..._59
    };
    export const secp256k1 = {
      ..._60
    };
    export const secp256r1 = {
      ..._61
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._166,
      ..._180,
      ..._196,
      ..._215,
      ..._231
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._167,
      ..._181,
      ..._197,
      ..._216,
      ..._232
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._168,
      ..._182,
      ..._198,
      ..._217,
      ..._233
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._74
    };
  }
  export namespace gov {
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._169,
      ..._183,
      ..._199,
      ..._218,
      ..._234
    };
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._170,
      ..._184,
      ..._200,
      ..._219,
      ..._235
    };
  }
  export namespace group {
    export const v1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._171,
      ..._185,
      ..._201,
      ..._220,
      ..._236
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._202,
      ..._221
    };
  }
  export namespace msg {
    export const v1 = {
      ..._91
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._172,
      ..._186,
      ..._203,
      ..._222,
      ..._237
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._97
      };
    }
    export const v1 = {
      ..._98
    };
    export const v1alpha1 = {
      ..._99
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._204,
      ..._223
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._173,
      ..._187,
      ..._205,
      ..._224,
      ..._238
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._174,
      ..._188,
      ..._206,
      ..._225,
      ..._239
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._111
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._207,
      ..._226
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._175,
      ..._189,
      ..._208,
      ..._227,
      ..._240
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._176,
      ..._190,
      ..._241
    };
  }
  export const ClientFactory = {
    ..._245,
    ..._246,
    ..._247
  };
}