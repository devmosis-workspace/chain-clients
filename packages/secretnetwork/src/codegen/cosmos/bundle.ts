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
import * as _172 from "./authz/v1beta1/tx.amino";
import * as _173 from "./bank/v1beta1/tx.amino";
import * as _174 from "./crisis/v1beta1/tx.amino";
import * as _175 from "./distribution/v1beta1/tx.amino";
import * as _176 from "./evidence/v1beta1/tx.amino";
import * as _177 from "./feegrant/v1beta1/tx.amino";
import * as _178 from "./gov/v1beta1/tx.amino";
import * as _179 from "./slashing/v1beta1/tx.amino";
import * as _180 from "./staking/v1beta1/tx.amino";
import * as _181 from "./vesting/v1beta1/tx.amino";
import * as _182 from "./authz/v1beta1/tx.registry";
import * as _183 from "./bank/v1beta1/tx.registry";
import * as _184 from "./crisis/v1beta1/tx.registry";
import * as _185 from "./distribution/v1beta1/tx.registry";
import * as _186 from "./evidence/v1beta1/tx.registry";
import * as _187 from "./feegrant/v1beta1/tx.registry";
import * as _188 from "./gov/v1beta1/tx.registry";
import * as _189 from "./slashing/v1beta1/tx.registry";
import * as _190 from "./staking/v1beta1/tx.registry";
import * as _191 from "./vesting/v1beta1/tx.registry";
import * as _192 from "./auth/v1beta1/query.rpc.Query";
import * as _193 from "./authz/v1beta1/query.rpc.Query";
import * as _194 from "./bank/v1beta1/query.rpc.Query";
import * as _195 from "./base/node/v1beta1/query.rpc.Service";
import * as _196 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _197 from "./distribution/v1beta1/query.rpc.Query";
import * as _198 from "./evidence/v1beta1/query.rpc.Query";
import * as _199 from "./feegrant/v1beta1/query.rpc.Query";
import * as _200 from "./gov/v1beta1/query.rpc.Query";
import * as _201 from "./mint/v1beta1/query.rpc.Query";
import * as _202 from "./params/v1beta1/query.rpc.Query";
import * as _203 from "./slashing/v1beta1/query.rpc.Query";
import * as _204 from "./staking/v1beta1/query.rpc.Query";
import * as _205 from "./tx/v1beta1/service.rpc.Service";
import * as _206 from "./upgrade/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/tx.rpc.msg";
import * as _208 from "./bank/v1beta1/tx.rpc.msg";
import * as _209 from "./crisis/v1beta1/tx.rpc.msg";
import * as _210 from "./distribution/v1beta1/tx.rpc.msg";
import * as _211 from "./evidence/v1beta1/tx.rpc.msg";
import * as _212 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _213 from "./gov/v1beta1/tx.rpc.msg";
import * as _214 from "./slashing/v1beta1/tx.rpc.msg";
import * as _215 from "./staking/v1beta1/tx.rpc.msg";
import * as _216 from "./vesting/v1beta1/tx.rpc.msg";
import * as _242 from "./rpc.query";
import * as _243 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._192
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._172,
      ..._182,
      ..._193,
      ..._207
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._173,
      ..._183,
      ..._194,
      ..._208
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
        ..._195
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
        ..._196
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
      ..._174,
      ..._184,
      ..._209
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
      ..._175,
      ..._185,
      ..._197,
      ..._210
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._176,
      ..._186,
      ..._198,
      ..._211
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._177,
      ..._187,
      ..._199,
      ..._212
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
      ..._178,
      ..._188,
      ..._200,
      ..._213
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._201
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._202
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._179,
      ..._189,
      ..._203,
      ..._214
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._180,
      ..._190,
      ..._204,
      ..._215
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
      ..._205
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._206
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._181,
      ..._191,
      ..._216
    };
  }
  export const ClientFactory = {
    ..._242,
    ..._243
  };
}