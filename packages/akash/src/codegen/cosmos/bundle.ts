import * as _53 from "./auth/v1beta1/auth";
import * as _54 from "./auth/v1beta1/genesis";
import * as _55 from "./auth/v1beta1/query";
import * as _56 from "./authz/v1beta1/authz";
import * as _57 from "./authz/v1beta1/event";
import * as _58 from "./authz/v1beta1/genesis";
import * as _59 from "./authz/v1beta1/query";
import * as _60 from "./authz/v1beta1/tx";
import * as _61 from "./bank/v1beta1/authz";
import * as _62 from "./bank/v1beta1/bank";
import * as _63 from "./bank/v1beta1/genesis";
import * as _64 from "./bank/v1beta1/query";
import * as _65 from "./bank/v1beta1/tx";
import * as _66 from "./base/abci/v1beta1/abci";
import * as _67 from "./base/kv/v1beta1/kv";
import * as _68 from "./base/query/v1beta1/pagination";
import * as _69 from "./base/reflection/v1beta1/reflection";
import * as _70 from "./base/reflection/v2alpha1/reflection";
import * as _71 from "./base/snapshots/v1beta1/snapshot";
import * as _72 from "./base/store/v1beta1/commit_info";
import * as _73 from "./base/store/v1beta1/listening";
import * as _74 from "./base/tendermint/v1beta1/query";
import * as _75 from "./base/v1beta1/coin";
import * as _76 from "./capability/v1beta1/capability";
import * as _77 from "./capability/v1beta1/genesis";
import * as _78 from "./crisis/v1beta1/genesis";
import * as _79 from "./crisis/v1beta1/tx";
import * as _80 from "./crypto/ed25519/keys";
import * as _81 from "./crypto/multisig/keys";
import * as _82 from "./crypto/secp256k1/keys";
import * as _83 from "./crypto/secp256r1/keys";
import * as _84 from "./distribution/v1beta1/distribution";
import * as _85 from "./distribution/v1beta1/genesis";
import * as _86 from "./distribution/v1beta1/query";
import * as _87 from "./distribution/v1beta1/tx";
import * as _88 from "./evidence/v1beta1/evidence";
import * as _89 from "./evidence/v1beta1/genesis";
import * as _90 from "./evidence/v1beta1/query";
import * as _91 from "./evidence/v1beta1/tx";
import * as _92 from "./feegrant/v1beta1/feegrant";
import * as _93 from "./feegrant/v1beta1/genesis";
import * as _94 from "./feegrant/v1beta1/query";
import * as _95 from "./feegrant/v1beta1/tx";
import * as _96 from "./genutil/v1beta1/genesis";
import * as _97 from "./gov/v1beta1/genesis";
import * as _98 from "./gov/v1beta1/gov";
import * as _99 from "./gov/v1beta1/query";
import * as _100 from "./gov/v1beta1/tx";
import * as _101 from "./mint/v1beta1/genesis";
import * as _102 from "./mint/v1beta1/mint";
import * as _103 from "./mint/v1beta1/query";
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
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/v1beta1/tx";
import * as _121 from "./vesting/v1beta1/vesting";
import * as _185 from "./authz/v1beta1/tx.amino";
import * as _186 from "./bank/v1beta1/tx.amino";
import * as _187 from "./crisis/v1beta1/tx.amino";
import * as _188 from "./distribution/v1beta1/tx.amino";
import * as _189 from "./evidence/v1beta1/tx.amino";
import * as _190 from "./feegrant/v1beta1/tx.amino";
import * as _191 from "./gov/v1beta1/tx.amino";
import * as _192 from "./slashing/v1beta1/tx.amino";
import * as _193 from "./staking/v1beta1/tx.amino";
import * as _194 from "./vesting/v1beta1/tx.amino";
import * as _195 from "./authz/v1beta1/tx.registry";
import * as _196 from "./bank/v1beta1/tx.registry";
import * as _197 from "./crisis/v1beta1/tx.registry";
import * as _198 from "./distribution/v1beta1/tx.registry";
import * as _199 from "./evidence/v1beta1/tx.registry";
import * as _200 from "./feegrant/v1beta1/tx.registry";
import * as _201 from "./gov/v1beta1/tx.registry";
import * as _202 from "./slashing/v1beta1/tx.registry";
import * as _203 from "./staking/v1beta1/tx.registry";
import * as _204 from "./vesting/v1beta1/tx.registry";
import * as _205 from "./auth/v1beta1/query.rpc.Query";
import * as _206 from "./authz/v1beta1/query.rpc.Query";
import * as _207 from "./bank/v1beta1/query.rpc.Query";
import * as _208 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _209 from "./distribution/v1beta1/query.rpc.Query";
import * as _210 from "./evidence/v1beta1/query.rpc.Query";
import * as _211 from "./feegrant/v1beta1/query.rpc.Query";
import * as _212 from "./gov/v1beta1/query.rpc.Query";
import * as _213 from "./mint/v1beta1/query.rpc.Query";
import * as _214 from "./params/v1beta1/query.rpc.Query";
import * as _215 from "./slashing/v1beta1/query.rpc.Query";
import * as _216 from "./staking/v1beta1/query.rpc.Query";
import * as _217 from "./tx/v1beta1/service.rpc.Service";
import * as _218 from "./upgrade/v1beta1/query.rpc.Query";
import * as _219 from "./authz/v1beta1/tx.rpc.msg";
import * as _220 from "./bank/v1beta1/tx.rpc.msg";
import * as _221 from "./crisis/v1beta1/tx.rpc.msg";
import * as _222 from "./distribution/v1beta1/tx.rpc.msg";
import * as _223 from "./evidence/v1beta1/tx.rpc.msg";
import * as _224 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _225 from "./gov/v1beta1/tx.rpc.msg";
import * as _226 from "./slashing/v1beta1/tx.rpc.msg";
import * as _227 from "./staking/v1beta1/tx.rpc.msg";
import * as _228 from "./vesting/v1beta1/tx.rpc.msg";
import * as _231 from "./rpc.query";
import * as _232 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._205
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._185,
      ..._195,
      ..._206,
      ..._219
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._186,
      ..._196,
      ..._207,
      ..._220
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._66
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._67
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._68
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._69
      };
      export const v2alpha1 = {
        ..._70
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._71
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._72,
        ..._73
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._74,
        ..._208
      };
    }
    export const v1beta1 = {
      ..._75
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._76,
      ..._77
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._187,
      ..._197,
      ..._221
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._80
    };
    export const multisig = {
      ..._81
    };
    export const secp256k1 = {
      ..._82
    };
    export const secp256r1 = {
      ..._83
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._188,
      ..._198,
      ..._209,
      ..._222
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._189,
      ..._199,
      ..._210,
      ..._223
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._190,
      ..._200,
      ..._211,
      ..._224
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._96
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._191,
      ..._201,
      ..._212,
      ..._225
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._213
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._214
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._192,
      ..._202,
      ..._215,
      ..._226
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._193,
      ..._203,
      ..._216,
      ..._227
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
      ..._217
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._218
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._194,
      ..._204,
      ..._228
    };
  }
  export const ClientFactory = {
    ..._231,
    ..._232
  };
}