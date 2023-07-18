import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./authz/v1beta1/authz";
import * as _19 from "./authz/v1beta1/event";
import * as _20 from "./authz/v1beta1/genesis";
import * as _21 from "./authz/v1beta1/query";
import * as _22 from "./authz/v1beta1/tx";
import * as _23 from "./bank/v1beta1/authz";
import * as _24 from "./bank/v1beta1/bank";
import * as _25 from "./bank/v1beta1/genesis";
import * as _26 from "./bank/v1beta1/query";
import * as _27 from "./bank/v1beta1/tx";
import * as _28 from "./base/abci/v1beta1/abci";
import * as _29 from "./base/kv/v1beta1/kv";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./crypto/secp256r1/keys";
import * as _47 from "./distribution/v1beta1/distribution";
import * as _48 from "./distribution/v1beta1/genesis";
import * as _49 from "./distribution/v1beta1/query";
import * as _50 from "./distribution/v1beta1/tx";
import * as _51 from "./evidence/v1beta1/evidence";
import * as _52 from "./evidence/v1beta1/genesis";
import * as _53 from "./evidence/v1beta1/query";
import * as _54 from "./evidence/v1beta1/tx";
import * as _55 from "./feegrant/v1beta1/feegrant";
import * as _56 from "./feegrant/v1beta1/genesis";
import * as _57 from "./feegrant/v1beta1/query";
import * as _58 from "./feegrant/v1beta1/tx";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/genesis";
import * as _61 from "./gov/v1beta1/gov";
import * as _62 from "./gov/v1beta1/query";
import * as _63 from "./gov/v1beta1/tx";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./params/v1beta1/params";
import * as _68 from "./params/v1beta1/query";
import * as _69 from "./slashing/v1beta1/genesis";
import * as _70 from "./slashing/v1beta1/query";
import * as _71 from "./slashing/v1beta1/slashing";
import * as _72 from "./slashing/v1beta1/tx";
import * as _73 from "./staking/v1beta1/authz";
import * as _74 from "./staking/v1beta1/genesis";
import * as _75 from "./staking/v1beta1/query";
import * as _76 from "./staking/v1beta1/staking";
import * as _77 from "./staking/v1beta1/tx";
import * as _78 from "./tx/signing/v1beta1/signing";
import * as _79 from "./tx/v1beta1/service";
import * as _80 from "./tx/v1beta1/tx";
import * as _81 from "./upgrade/v1beta1/query";
import * as _82 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./vesting/v1beta1/tx";
import * as _84 from "./vesting/v1beta1/vesting";
import * as _176 from "./authz/v1beta1/tx.amino";
import * as _177 from "./bank/v1beta1/tx.amino";
import * as _178 from "./crisis/v1beta1/tx.amino";
import * as _179 from "./distribution/v1beta1/tx.amino";
import * as _180 from "./evidence/v1beta1/tx.amino";
import * as _181 from "./feegrant/v1beta1/tx.amino";
import * as _182 from "./gov/v1beta1/tx.amino";
import * as _183 from "./slashing/v1beta1/tx.amino";
import * as _184 from "./staking/v1beta1/tx.amino";
import * as _185 from "./vesting/v1beta1/tx.amino";
import * as _186 from "./authz/v1beta1/tx.registry";
import * as _187 from "./bank/v1beta1/tx.registry";
import * as _188 from "./crisis/v1beta1/tx.registry";
import * as _189 from "./distribution/v1beta1/tx.registry";
import * as _190 from "./evidence/v1beta1/tx.registry";
import * as _191 from "./feegrant/v1beta1/tx.registry";
import * as _192 from "./gov/v1beta1/tx.registry";
import * as _193 from "./slashing/v1beta1/tx.registry";
import * as _194 from "./staking/v1beta1/tx.registry";
import * as _195 from "./vesting/v1beta1/tx.registry";
import * as _196 from "./auth/v1beta1/query.lcd";
import * as _197 from "./authz/v1beta1/query.lcd";
import * as _198 from "./bank/v1beta1/query.lcd";
import * as _199 from "./base/node/v1beta1/query.lcd";
import * as _200 from "./base/tendermint/v1beta1/query.lcd";
import * as _201 from "./distribution/v1beta1/query.lcd";
import * as _202 from "./evidence/v1beta1/query.lcd";
import * as _203 from "./feegrant/v1beta1/query.lcd";
import * as _204 from "./gov/v1beta1/query.lcd";
import * as _205 from "./mint/v1beta1/query.lcd";
import * as _206 from "./params/v1beta1/query.lcd";
import * as _207 from "./slashing/v1beta1/query.lcd";
import * as _208 from "./staking/v1beta1/query.lcd";
import * as _209 from "./tx/v1beta1/service.lcd";
import * as _210 from "./upgrade/v1beta1/query.lcd";
import * as _211 from "./auth/v1beta1/query.rpc.Query";
import * as _212 from "./authz/v1beta1/query.rpc.Query";
import * as _213 from "./bank/v1beta1/query.rpc.Query";
import * as _214 from "./base/node/v1beta1/query.rpc.Service";
import * as _215 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _216 from "./distribution/v1beta1/query.rpc.Query";
import * as _217 from "./evidence/v1beta1/query.rpc.Query";
import * as _218 from "./feegrant/v1beta1/query.rpc.Query";
import * as _219 from "./gov/v1beta1/query.rpc.Query";
import * as _220 from "./mint/v1beta1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./slashing/v1beta1/query.rpc.Query";
import * as _223 from "./staking/v1beta1/query.rpc.Query";
import * as _224 from "./tx/v1beta1/service.rpc.Service";
import * as _225 from "./upgrade/v1beta1/query.rpc.Query";
import * as _226 from "./authz/v1beta1/tx.rpc.msg";
import * as _227 from "./bank/v1beta1/tx.rpc.msg";
import * as _228 from "./crisis/v1beta1/tx.rpc.msg";
import * as _229 from "./distribution/v1beta1/tx.rpc.msg";
import * as _230 from "./evidence/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1beta1/tx.rpc.msg";
import * as _233 from "./slashing/v1beta1/tx.rpc.msg";
import * as _234 from "./staking/v1beta1/tx.rpc.msg";
import * as _235 from "./vesting/v1beta1/tx.rpc.msg";
import * as _270 from "./lcd";
import * as _271 from "./rpc.query";
import * as _272 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._196,
      ..._211
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._176,
      ..._186,
      ..._197,
      ..._212,
      ..._226
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._177,
      ..._187,
      ..._198,
      ..._213,
      ..._227
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._30,
        ..._199,
        ..._214
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._32
      };
      export const v2alpha1 = {
        ..._33
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._35,
        ..._36
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._37,
        ..._200,
        ..._215
      };
    }
    export const v1beta1 = {
      ..._38
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._39,
      ..._40
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._178,
      ..._188,
      ..._228
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._43
    };
    export const multisig = {
      ..._44
    };
    export const secp256k1 = {
      ..._45
    };
    export const secp256r1 = {
      ..._46
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._179,
      ..._189,
      ..._201,
      ..._216,
      ..._229
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._180,
      ..._190,
      ..._202,
      ..._217,
      ..._230
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._181,
      ..._191,
      ..._203,
      ..._218,
      ..._231
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._59
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._182,
      ..._192,
      ..._204,
      ..._219,
      ..._232
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._205,
      ..._220
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._206,
      ..._221
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._183,
      ..._193,
      ..._207,
      ..._222,
      ..._233
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._184,
      ..._194,
      ..._208,
      ..._223,
      ..._234
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._78
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._209,
      ..._224
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._210,
      ..._225
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._185,
      ..._195,
      ..._235
    };
  }
  export const ClientFactory = {
    ..._270,
    ..._271,
    ..._272
  };
}