import * as _27 from "./app/module/v1alpha1/module";
import * as _28 from "./app/v1alpha1/config";
import * as _29 from "./app/v1alpha1/module";
import * as _30 from "./app/v1alpha1/query";
import * as _31 from "./auth/v1beta1/auth";
import * as _32 from "./auth/v1beta1/genesis";
import * as _33 from "./auth/v1beta1/query";
import * as _34 from "./authz/v1beta1/authz";
import * as _35 from "./authz/v1beta1/event";
import * as _36 from "./authz/v1beta1/genesis";
import * as _37 from "./authz/v1beta1/query";
import * as _38 from "./authz/v1beta1/tx";
import * as _39 from "./bank/v1beta1/authz";
import * as _40 from "./bank/v1beta1/bank";
import * as _41 from "./bank/v1beta1/genesis";
import * as _42 from "./bank/v1beta1/query";
import * as _43 from "./bank/v1beta1/tx";
import * as _44 from "./base/abci/v1beta1/abci";
import * as _45 from "./base/kv/v1beta1/kv";
import * as _46 from "./base/node/v1beta1/query";
import * as _47 from "./base/query/v1beta1/pagination";
import * as _48 from "./base/reflection/v1beta1/reflection";
import * as _49 from "./base/reflection/v2alpha1/reflection";
import * as _50 from "./base/snapshots/v1beta1/snapshot";
import * as _51 from "./base/store/v1beta1/commit_info";
import * as _52 from "./base/store/v1beta1/listening";
import * as _53 from "./base/tendermint/v1beta1/query";
import * as _54 from "./base/tendermint/v1beta1/types";
import * as _55 from "./base/v1beta1/coin";
import * as _56 from "./capability/v1beta1/capability";
import * as _57 from "./capability/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/tx";
import * as _60 from "./crypto/ed25519/keys";
import * as _61 from "./crypto/hd/v1/hd";
import * as _62 from "./crypto/keyring/v1/record";
import * as _63 from "./crypto/multisig/keys";
import * as _64 from "./crypto/secp256k1/keys";
import * as _65 from "./crypto/secp256r1/keys";
import * as _66 from "./distribution/v1beta1/distribution";
import * as _67 from "./distribution/v1beta1/genesis";
import * as _68 from "./distribution/v1beta1/query";
import * as _69 from "./distribution/v1beta1/tx";
import * as _70 from "./evidence/v1beta1/evidence";
import * as _71 from "./evidence/v1beta1/genesis";
import * as _72 from "./evidence/v1beta1/query";
import * as _73 from "./evidence/v1beta1/tx";
import * as _74 from "./feegrant/v1beta1/feegrant";
import * as _75 from "./feegrant/v1beta1/genesis";
import * as _76 from "./feegrant/v1beta1/query";
import * as _77 from "./feegrant/v1beta1/tx";
import * as _78 from "./genutil/v1beta1/genesis";
import * as _79 from "./gov/v1/genesis";
import * as _80 from "./gov/v1/gov";
import * as _81 from "./gov/v1/query";
import * as _82 from "./gov/v1/tx";
import * as _83 from "./gov/v1beta1/genesis";
import * as _84 from "./gov/v1beta1/gov";
import * as _85 from "./gov/v1beta1/query";
import * as _86 from "./gov/v1beta1/tx";
import * as _87 from "./group/v1/events";
import * as _88 from "./group/v1/genesis";
import * as _89 from "./group/v1/query";
import * as _90 from "./group/v1/tx";
import * as _91 from "./group/v1/types";
import * as _92 from "./mint/v1beta1/genesis";
import * as _93 from "./mint/v1beta1/mint";
import * as _94 from "./mint/v1beta1/query";
import * as _95 from "./msg/v1/msg";
import * as _96 from "./nft/v1beta1/event";
import * as _97 from "./nft/v1beta1/genesis";
import * as _98 from "./nft/v1beta1/nft";
import * as _99 from "./nft/v1beta1/query";
import * as _100 from "./nft/v1beta1/tx";
import * as _101 from "./orm/module/v1alpha1/module";
import * as _102 from "./orm/v1/orm";
import * as _103 from "./orm/v1alpha1/schema";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./tx/signing/v1beta1/signing";
import * as _116 from "./tx/v1beta1/service";
import * as _117 from "./tx/v1beta1/tx";
import * as _118 from "./upgrade/v1beta1/query";
import * as _119 from "./upgrade/v1beta1/tx";
import * as _120 from "./upgrade/v1beta1/upgrade";
import * as _121 from "./vesting/v1beta1/tx";
import * as _122 from "./vesting/v1beta1/vesting";
import * as _156 from "./authz/v1beta1/tx.amino";
import * as _157 from "./bank/v1beta1/tx.amino";
import * as _158 from "./crisis/v1beta1/tx.amino";
import * as _159 from "./distribution/v1beta1/tx.amino";
import * as _160 from "./evidence/v1beta1/tx.amino";
import * as _161 from "./feegrant/v1beta1/tx.amino";
import * as _162 from "./gov/v1/tx.amino";
import * as _163 from "./gov/v1beta1/tx.amino";
import * as _164 from "./group/v1/tx.amino";
import * as _165 from "./nft/v1beta1/tx.amino";
import * as _166 from "./slashing/v1beta1/tx.amino";
import * as _167 from "./staking/v1beta1/tx.amino";
import * as _168 from "./upgrade/v1beta1/tx.amino";
import * as _169 from "./vesting/v1beta1/tx.amino";
import * as _170 from "./authz/v1beta1/tx.registry";
import * as _171 from "./bank/v1beta1/tx.registry";
import * as _172 from "./crisis/v1beta1/tx.registry";
import * as _173 from "./distribution/v1beta1/tx.registry";
import * as _174 from "./evidence/v1beta1/tx.registry";
import * as _175 from "./feegrant/v1beta1/tx.registry";
import * as _176 from "./gov/v1/tx.registry";
import * as _177 from "./gov/v1beta1/tx.registry";
import * as _178 from "./group/v1/tx.registry";
import * as _179 from "./nft/v1beta1/tx.registry";
import * as _180 from "./slashing/v1beta1/tx.registry";
import * as _181 from "./staking/v1beta1/tx.registry";
import * as _182 from "./upgrade/v1beta1/tx.registry";
import * as _183 from "./vesting/v1beta1/tx.registry";
import * as _184 from "./auth/v1beta1/query.lcd";
import * as _185 from "./authz/v1beta1/query.lcd";
import * as _186 from "./bank/v1beta1/query.lcd";
import * as _187 from "./base/node/v1beta1/query.lcd";
import * as _188 from "./base/tendermint/v1beta1/query.lcd";
import * as _189 from "./distribution/v1beta1/query.lcd";
import * as _190 from "./evidence/v1beta1/query.lcd";
import * as _191 from "./feegrant/v1beta1/query.lcd";
import * as _192 from "./gov/v1/query.lcd";
import * as _193 from "./gov/v1beta1/query.lcd";
import * as _194 from "./group/v1/query.lcd";
import * as _195 from "./mint/v1beta1/query.lcd";
import * as _196 from "./nft/v1beta1/query.lcd";
import * as _197 from "./params/v1beta1/query.lcd";
import * as _198 from "./slashing/v1beta1/query.lcd";
import * as _199 from "./staking/v1beta1/query.lcd";
import * as _200 from "./tx/v1beta1/service.lcd";
import * as _201 from "./upgrade/v1beta1/query.lcd";
import * as _202 from "./app/v1alpha1/query.rpc.Query";
import * as _203 from "./auth/v1beta1/query.rpc.Query";
import * as _204 from "./authz/v1beta1/query.rpc.Query";
import * as _205 from "./bank/v1beta1/query.rpc.Query";
import * as _206 from "./base/node/v1beta1/query.rpc.Service";
import * as _207 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _208 from "./distribution/v1beta1/query.rpc.Query";
import * as _209 from "./evidence/v1beta1/query.rpc.Query";
import * as _210 from "./feegrant/v1beta1/query.rpc.Query";
import * as _211 from "./gov/v1/query.rpc.Query";
import * as _212 from "./gov/v1beta1/query.rpc.Query";
import * as _213 from "./group/v1/query.rpc.Query";
import * as _214 from "./mint/v1beta1/query.rpc.Query";
import * as _215 from "./nft/v1beta1/query.rpc.Query";
import * as _216 from "./params/v1beta1/query.rpc.Query";
import * as _217 from "./slashing/v1beta1/query.rpc.Query";
import * as _218 from "./staking/v1beta1/query.rpc.Query";
import * as _219 from "./tx/v1beta1/service.rpc.Service";
import * as _220 from "./upgrade/v1beta1/query.rpc.Query";
import * as _221 from "./authz/v1beta1/tx.rpc.msg";
import * as _222 from "./bank/v1beta1/tx.rpc.msg";
import * as _223 from "./crisis/v1beta1/tx.rpc.msg";
import * as _224 from "./distribution/v1beta1/tx.rpc.msg";
import * as _225 from "./evidence/v1beta1/tx.rpc.msg";
import * as _226 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _227 from "./gov/v1/tx.rpc.msg";
import * as _228 from "./gov/v1beta1/tx.rpc.msg";
import * as _229 from "./group/v1/tx.rpc.msg";
import * as _230 from "./nft/v1beta1/tx.rpc.msg";
import * as _231 from "./slashing/v1beta1/tx.rpc.msg";
import * as _232 from "./staking/v1beta1/tx.rpc.msg";
import * as _233 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _234 from "./vesting/v1beta1/tx.rpc.msg";
import * as _238 from "./lcd";
import * as _239 from "./rpc.query";
import * as _240 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._27
      };
    }
    export const v1alpha1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._202
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._184,
      ..._203
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._156,
      ..._170,
      ..._185,
      ..._204,
      ..._221
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._157,
      ..._171,
      ..._186,
      ..._205,
      ..._222
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._44
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._45
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._46,
        ..._187,
        ..._206
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._47
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._48
      };
      export const v2alpha1 = {
        ..._49
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._50
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._51,
        ..._52
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._53,
        ..._54,
        ..._188,
        ..._207
      };
    }
    export const v1beta1 = {
      ..._55
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
      ..._158,
      ..._172,
      ..._223
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._60
    };
    export namespace hd {
      export const v1 = {
        ..._61
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._62
      };
    }
    export const multisig = {
      ..._63
    };
    export const secp256k1 = {
      ..._64
    };
    export const secp256r1 = {
      ..._65
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._159,
      ..._173,
      ..._189,
      ..._208,
      ..._224
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._160,
      ..._174,
      ..._190,
      ..._209,
      ..._225
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._161,
      ..._175,
      ..._191,
      ..._210,
      ..._226
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._78
    };
  }
  export namespace gov {
    export const v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._162,
      ..._176,
      ..._192,
      ..._211,
      ..._227
    };
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._163,
      ..._177,
      ..._193,
      ..._212,
      ..._228
    };
  }
  export namespace group {
    export const v1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._164,
      ..._178,
      ..._194,
      ..._213,
      ..._229
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._195,
      ..._214
    };
  }
  export namespace msg {
    export const v1 = {
      ..._95
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._165,
      ..._179,
      ..._196,
      ..._215,
      ..._230
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._101
      };
    }
    export const v1 = {
      ..._102
    };
    export const v1alpha1 = {
      ..._103
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._197,
      ..._216
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._166,
      ..._180,
      ..._198,
      ..._217,
      ..._231
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._167,
      ..._181,
      ..._199,
      ..._218,
      ..._232
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._115
      };
    }
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._200,
      ..._219
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._168,
      ..._182,
      ..._201,
      ..._220,
      ..._233
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._169,
      ..._183,
      ..._234
    };
  }
  export const ClientFactory = {
    ..._238,
    ..._239,
    ..._240
  };
}