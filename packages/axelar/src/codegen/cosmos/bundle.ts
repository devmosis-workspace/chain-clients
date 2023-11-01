import * as _72 from "./auth/v1beta1/auth";
import * as _73 from "./auth/v1beta1/genesis";
import * as _74 from "./auth/v1beta1/query";
import * as _75 from "./authz/v1beta1/authz";
import * as _76 from "./authz/v1beta1/event";
import * as _77 from "./authz/v1beta1/genesis";
import * as _78 from "./authz/v1beta1/query";
import * as _79 from "./authz/v1beta1/tx";
import * as _80 from "./bank/v1beta1/authz";
import * as _81 from "./bank/v1beta1/bank";
import * as _82 from "./bank/v1beta1/genesis";
import * as _83 from "./bank/v1beta1/query";
import * as _84 from "./bank/v1beta1/tx";
import * as _85 from "./base/abci/v1beta1/abci";
import * as _86 from "./base/kv/v1beta1/kv";
import * as _87 from "./base/node/v1beta1/query";
import * as _88 from "./base/query/v1beta1/pagination";
import * as _89 from "./base/reflection/v1beta1/reflection";
import * as _90 from "./base/reflection/v2alpha1/reflection";
import * as _91 from "./base/snapshots/v1beta1/snapshot";
import * as _92 from "./base/store/v1beta1/commit_info";
import * as _93 from "./base/store/v1beta1/listening";
import * as _94 from "./base/tendermint/v1beta1/query";
import * as _95 from "./base/v1beta1/coin";
import * as _96 from "./capability/v1beta1/capability";
import * as _97 from "./capability/v1beta1/genesis";
import * as _98 from "./crisis/v1beta1/genesis";
import * as _99 from "./crisis/v1beta1/tx";
import * as _100 from "./crypto/ed25519/keys";
import * as _101 from "./crypto/multisig/keys";
import * as _102 from "./crypto/secp256k1/keys";
import * as _103 from "./crypto/secp256r1/keys";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./evidence/v1beta1/evidence";
import * as _109 from "./evidence/v1beta1/genesis";
import * as _110 from "./evidence/v1beta1/query";
import * as _111 from "./evidence/v1beta1/tx";
import * as _112 from "./feegrant/v1beta1/feegrant";
import * as _113 from "./feegrant/v1beta1/genesis";
import * as _114 from "./feegrant/v1beta1/query";
import * as _115 from "./feegrant/v1beta1/tx";
import * as _116 from "./genutil/v1beta1/genesis";
import * as _117 from "./gov/v1beta1/genesis";
import * as _118 from "./gov/v1beta1/gov";
import * as _119 from "./gov/v1beta1/query";
import * as _120 from "./gov/v1beta1/tx";
import * as _121 from "./mint/v1beta1/genesis";
import * as _122 from "./mint/v1beta1/mint";
import * as _123 from "./mint/v1beta1/query";
import * as _124 from "./params/v1beta1/params";
import * as _125 from "./params/v1beta1/query";
import * as _126 from "./slashing/v1beta1/genesis";
import * as _127 from "./slashing/v1beta1/query";
import * as _128 from "./slashing/v1beta1/slashing";
import * as _129 from "./slashing/v1beta1/tx";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/upgrade";
import * as _140 from "./vesting/v1beta1/tx";
import * as _141 from "./vesting/v1beta1/vesting";
import * as _190 from "./authz/v1beta1/tx.amino";
import * as _191 from "./bank/v1beta1/tx.amino";
import * as _192 from "./crisis/v1beta1/tx.amino";
import * as _193 from "./distribution/v1beta1/tx.amino";
import * as _194 from "./evidence/v1beta1/tx.amino";
import * as _195 from "./feegrant/v1beta1/tx.amino";
import * as _196 from "./gov/v1beta1/tx.amino";
import * as _197 from "./slashing/v1beta1/tx.amino";
import * as _198 from "./staking/v1beta1/tx.amino";
import * as _199 from "./vesting/v1beta1/tx.amino";
import * as _200 from "./authz/v1beta1/tx.registry";
import * as _201 from "./bank/v1beta1/tx.registry";
import * as _202 from "./crisis/v1beta1/tx.registry";
import * as _203 from "./distribution/v1beta1/tx.registry";
import * as _204 from "./evidence/v1beta1/tx.registry";
import * as _205 from "./feegrant/v1beta1/tx.registry";
import * as _206 from "./gov/v1beta1/tx.registry";
import * as _207 from "./slashing/v1beta1/tx.registry";
import * as _208 from "./staking/v1beta1/tx.registry";
import * as _209 from "./vesting/v1beta1/tx.registry";
import * as _210 from "./auth/v1beta1/query.lcd";
import * as _211 from "./authz/v1beta1/query.lcd";
import * as _212 from "./bank/v1beta1/query.lcd";
import * as _213 from "./base/node/v1beta1/query.lcd";
import * as _214 from "./base/tendermint/v1beta1/query.lcd";
import * as _215 from "./distribution/v1beta1/query.lcd";
import * as _216 from "./evidence/v1beta1/query.lcd";
import * as _217 from "./feegrant/v1beta1/query.lcd";
import * as _218 from "./gov/v1beta1/query.lcd";
import * as _219 from "./mint/v1beta1/query.lcd";
import * as _220 from "./params/v1beta1/query.lcd";
import * as _221 from "./slashing/v1beta1/query.lcd";
import * as _222 from "./staking/v1beta1/query.lcd";
import * as _223 from "./tx/v1beta1/service.lcd";
import * as _224 from "./upgrade/v1beta1/query.lcd";
import * as _225 from "./auth/v1beta1/query.rpc.Query";
import * as _226 from "./authz/v1beta1/query.rpc.Query";
import * as _227 from "./bank/v1beta1/query.rpc.Query";
import * as _228 from "./base/node/v1beta1/query.rpc.Service";
import * as _229 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _230 from "./distribution/v1beta1/query.rpc.Query";
import * as _231 from "./evidence/v1beta1/query.rpc.Query";
import * as _232 from "./feegrant/v1beta1/query.rpc.Query";
import * as _233 from "./gov/v1beta1/query.rpc.Query";
import * as _234 from "./mint/v1beta1/query.rpc.Query";
import * as _235 from "./params/v1beta1/query.rpc.Query";
import * as _236 from "./slashing/v1beta1/query.rpc.Query";
import * as _237 from "./staking/v1beta1/query.rpc.Query";
import * as _238 from "./tx/v1beta1/service.rpc.Service";
import * as _239 from "./upgrade/v1beta1/query.rpc.Query";
import * as _240 from "./authz/v1beta1/tx.rpc.msg";
import * as _241 from "./bank/v1beta1/tx.rpc.msg";
import * as _242 from "./crisis/v1beta1/tx.rpc.msg";
import * as _243 from "./distribution/v1beta1/tx.rpc.msg";
import * as _244 from "./evidence/v1beta1/tx.rpc.msg";
import * as _245 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _246 from "./gov/v1beta1/tx.rpc.msg";
import * as _247 from "./slashing/v1beta1/tx.rpc.msg";
import * as _248 from "./staking/v1beta1/tx.rpc.msg";
import * as _249 from "./vesting/v1beta1/tx.rpc.msg";
import * as _273 from "./lcd";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._210,
      ..._225
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._190,
      ..._200,
      ..._211,
      ..._226,
      ..._240
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._191,
      ..._201,
      ..._212,
      ..._227,
      ..._241
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._85
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._86
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._87,
        ..._213,
        ..._228
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._88
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._89
      };
      export const v2alpha1 = {
        ..._90
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._91
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._92,
        ..._93
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._94,
        ..._214,
        ..._229
      };
    }
    export const v1beta1 = {
      ..._95
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._96,
      ..._97
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._192,
      ..._202,
      ..._242
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._100
    };
    export const multisig = {
      ..._101
    };
    export const secp256k1 = {
      ..._102
    };
    export const secp256r1 = {
      ..._103
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._193,
      ..._203,
      ..._215,
      ..._230,
      ..._243
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._194,
      ..._204,
      ..._216,
      ..._231,
      ..._244
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._195,
      ..._205,
      ..._217,
      ..._232,
      ..._245
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._116
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._196,
      ..._206,
      ..._218,
      ..._233,
      ..._246
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._219,
      ..._234
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._220,
      ..._235
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._197,
      ..._207,
      ..._221,
      ..._236,
      ..._247
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._198,
      ..._208,
      ..._222,
      ..._237,
      ..._248
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._223,
      ..._238
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._224,
      ..._239
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._199,
      ..._209,
      ..._249
    };
  }
  export const ClientFactory = {
    ..._273,
    ..._274,
    ..._275
  };
}