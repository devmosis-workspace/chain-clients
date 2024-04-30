import * as _32 from "./auth/v1beta1/auth";
import * as _33 from "./auth/v1beta1/genesis";
import * as _34 from "./auth/v1beta1/query";
import * as _35 from "./authz/v1beta1/authz";
import * as _36 from "./authz/v1beta1/event";
import * as _37 from "./authz/v1beta1/genesis";
import * as _38 from "./authz/v1beta1/query";
import * as _39 from "./authz/v1beta1/tx";
import * as _40 from "./bank/v1beta1/authz";
import * as _41 from "./bank/v1beta1/bank";
import * as _42 from "./bank/v1beta1/genesis";
import * as _43 from "./bank/v1beta1/query";
import * as _44 from "./bank/v1beta1/tx";
import * as _45 from "./base/abci/v1beta1/abci";
import * as _46 from "./base/kv/v1beta1/kv";
import * as _47 from "./base/node/v1beta1/query";
import * as _48 from "./base/query/v1beta1/pagination";
import * as _49 from "./base/reflection/v1beta1/reflection";
import * as _50 from "./base/reflection/v2alpha1/reflection";
import * as _51 from "./base/snapshots/v1beta1/snapshot";
import * as _52 from "./base/store/v1beta1/commit_info";
import * as _53 from "./base/store/v1beta1/listening";
import * as _54 from "./base/tendermint/v1beta1/query";
import * as _55 from "./base/v1beta1/coin";
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
import * as _102 from "./msg/v1/msg";
import * as _198 from "./authz/v1beta1/tx.amino";
import * as _199 from "./bank/v1beta1/tx.amino";
import * as _200 from "./crisis/v1beta1/tx.amino";
import * as _201 from "./distribution/v1beta1/tx.amino";
import * as _202 from "./evidence/v1beta1/tx.amino";
import * as _203 from "./feegrant/v1beta1/tx.amino";
import * as _204 from "./gov/v1beta1/tx.amino";
import * as _205 from "./slashing/v1beta1/tx.amino";
import * as _206 from "./staking/v1beta1/tx.amino";
import * as _207 from "./vesting/v1beta1/tx.amino";
import * as _208 from "./authz/v1beta1/tx.registry";
import * as _209 from "./bank/v1beta1/tx.registry";
import * as _210 from "./crisis/v1beta1/tx.registry";
import * as _211 from "./distribution/v1beta1/tx.registry";
import * as _212 from "./evidence/v1beta1/tx.registry";
import * as _213 from "./feegrant/v1beta1/tx.registry";
import * as _214 from "./gov/v1beta1/tx.registry";
import * as _215 from "./slashing/v1beta1/tx.registry";
import * as _216 from "./staking/v1beta1/tx.registry";
import * as _217 from "./vesting/v1beta1/tx.registry";
import * as _218 from "./auth/v1beta1/query.lcd";
import * as _219 from "./authz/v1beta1/query.lcd";
import * as _220 from "./bank/v1beta1/query.lcd";
import * as _221 from "./base/node/v1beta1/query.lcd";
import * as _222 from "./base/tendermint/v1beta1/query.lcd";
import * as _223 from "./distribution/v1beta1/query.lcd";
import * as _224 from "./evidence/v1beta1/query.lcd";
import * as _225 from "./feegrant/v1beta1/query.lcd";
import * as _226 from "./gov/v1beta1/query.lcd";
import * as _227 from "./mint/v1beta1/query.lcd";
import * as _228 from "./params/v1beta1/query.lcd";
import * as _229 from "./slashing/v1beta1/query.lcd";
import * as _230 from "./staking/v1beta1/query.lcd";
import * as _231 from "./tx/v1beta1/service.lcd";
import * as _232 from "./upgrade/v1beta1/query.lcd";
import * as _233 from "./auth/v1beta1/query.rpc.Query";
import * as _234 from "./authz/v1beta1/query.rpc.Query";
import * as _235 from "./bank/v1beta1/query.rpc.Query";
import * as _236 from "./base/node/v1beta1/query.rpc.Service";
import * as _237 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _238 from "./distribution/v1beta1/query.rpc.Query";
import * as _239 from "./evidence/v1beta1/query.rpc.Query";
import * as _240 from "./feegrant/v1beta1/query.rpc.Query";
import * as _241 from "./gov/v1beta1/query.rpc.Query";
import * as _242 from "./mint/v1beta1/query.rpc.Query";
import * as _243 from "./params/v1beta1/query.rpc.Query";
import * as _244 from "./slashing/v1beta1/query.rpc.Query";
import * as _245 from "./staking/v1beta1/query.rpc.Query";
import * as _246 from "./tx/v1beta1/service.rpc.Service";
import * as _247 from "./upgrade/v1beta1/query.rpc.Query";
import * as _248 from "./authz/v1beta1/tx.rpc.msg";
import * as _249 from "./bank/v1beta1/tx.rpc.msg";
import * as _250 from "./crisis/v1beta1/tx.rpc.msg";
import * as _251 from "./distribution/v1beta1/tx.rpc.msg";
import * as _252 from "./evidence/v1beta1/tx.rpc.msg";
import * as _253 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _254 from "./gov/v1beta1/tx.rpc.msg";
import * as _255 from "./slashing/v1beta1/tx.rpc.msg";
import * as _256 from "./staking/v1beta1/tx.rpc.msg";
import * as _257 from "./vesting/v1beta1/tx.rpc.msg";
import * as _293 from "./lcd";
import * as _294 from "./rpc.query";
import * as _295 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._218,
      ..._233
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._198,
      ..._208,
      ..._219,
      ..._234,
      ..._248
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._199,
      ..._209,
      ..._220,
      ..._235,
      ..._249
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._45
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._46
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._47,
        ..._221,
        ..._236
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._48
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._49
      };
      export const v2alpha1 = {
        ..._50
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._51
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._52,
        ..._53
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._54,
        ..._222,
        ..._237
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
      ..._200,
      ..._210,
      ..._250
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
      ..._201,
      ..._211,
      ..._223,
      ..._238,
      ..._251
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._202,
      ..._212,
      ..._224,
      ..._239,
      ..._252
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._203,
      ..._213,
      ..._225,
      ..._240,
      ..._253
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
      ..._204,
      ..._214,
      ..._226,
      ..._241,
      ..._254
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._227,
      ..._242
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._228,
      ..._243
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._205,
      ..._215,
      ..._229,
      ..._244,
      ..._255
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._206,
      ..._216,
      ..._230,
      ..._245,
      ..._256
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
      ..._231,
      ..._246
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._232,
      ..._247
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._207,
      ..._217,
      ..._257
    };
  }
  export namespace msg {
    export const v1 = {
      ..._102
    };
  }
  export const ClientFactory = {
    ..._293,
    ..._294,
    ..._295
  };
}