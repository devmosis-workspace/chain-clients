import * as _24 from "../shentu/auth/v1alpha1/vesting";
import * as _25 from "./auth/v1beta1/auth";
import * as _26 from "./auth/v1beta1/genesis";
import * as _27 from "./auth/v1beta1/query";
import * as _28 from "./authz/v1beta1/authz";
import * as _29 from "./authz/v1beta1/event";
import * as _30 from "./authz/v1beta1/genesis";
import * as _31 from "./authz/v1beta1/query";
import * as _32 from "./authz/v1beta1/tx";
import * as _33 from "./bank/v1beta1/authz";
import * as _34 from "./bank/v1beta1/bank";
import * as _35 from "./bank/v1beta1/genesis";
import * as _36 from "./bank/v1beta1/query";
import * as _37 from "./bank/v1beta1/tx";
import * as _38 from "./base/abci/v1beta1/abci";
import * as _39 from "./base/kv/v1beta1/kv";
import * as _40 from "./base/node/v1beta1/query";
import * as _41 from "./base/query/v1beta1/pagination";
import * as _42 from "./base/reflection/v1beta1/reflection";
import * as _43 from "./base/reflection/v2alpha1/reflection";
import * as _44 from "./base/snapshots/v1beta1/snapshot";
import * as _45 from "./base/store/v1beta1/commit_info";
import * as _46 from "./base/store/v1beta1/listening";
import * as _47 from "./base/store/v1beta1/snapshot";
import * as _48 from "./base/tendermint/v1beta1/query";
import * as _49 from "./base/v1beta1/coin";
import * as _50 from "./capability/v1beta1/capability";
import * as _51 from "./capability/v1beta1/genesis";
import * as _52 from "./crisis/v1beta1/genesis";
import * as _53 from "./crisis/v1beta1/tx";
import * as _54 from "./crypto/ed25519/keys";
import * as _55 from "./crypto/multisig/keys";
import * as _56 from "./crypto/secp256k1/keys";
import * as _57 from "./crypto/secp256r1/keys";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/v1beta1/evidence";
import * as _63 from "./evidence/v1beta1/genesis";
import * as _64 from "./evidence/v1beta1/query";
import * as _65 from "./evidence/v1beta1/tx";
import * as _66 from "./feegrant/v1beta1/feegrant";
import * as _67 from "./feegrant/v1beta1/genesis";
import * as _68 from "./feegrant/v1beta1/query";
import * as _69 from "./feegrant/v1beta1/tx";
import * as _70 from "./genutil/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/genesis";
import * as _72 from "./gov/v1beta1/gov";
import * as _73 from "./gov/v1beta1/query";
import * as _74 from "./gov/v1beta1/tx";
import * as _75 from "./mint/v1beta1/genesis";
import * as _76 from "./mint/v1beta1/mint";
import * as _77 from "./mint/v1beta1/query";
import * as _78 from "./params/v1beta1/params";
import * as _79 from "./params/v1beta1/query";
import * as _80 from "./slashing/v1beta1/genesis";
import * as _81 from "./slashing/v1beta1/query";
import * as _82 from "./slashing/v1beta1/slashing";
import * as _83 from "./slashing/v1beta1/tx";
import * as _84 from "./staking/v1beta1/authz";
import * as _85 from "./staking/v1beta1/genesis";
import * as _86 from "./staking/v1beta1/query";
import * as _87 from "./staking/v1beta1/staking";
import * as _88 from "./staking/v1beta1/tx";
import * as _89 from "./tx/signing/v1beta1/signing";
import * as _90 from "./tx/v1beta1/service";
import * as _91 from "./tx/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/query";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _156 from "./authz/v1beta1/tx.amino";
import * as _157 from "./bank/v1beta1/tx.amino";
import * as _158 from "./crisis/v1beta1/tx.amino";
import * as _159 from "./distribution/v1beta1/tx.amino";
import * as _160 from "./evidence/v1beta1/tx.amino";
import * as _161 from "./feegrant/v1beta1/tx.amino";
import * as _162 from "./gov/v1beta1/tx.amino";
import * as _163 from "./slashing/v1beta1/tx.amino";
import * as _164 from "./staking/v1beta1/tx.amino";
import * as _165 from "./vesting/v1beta1/tx.amino";
import * as _166 from "./authz/v1beta1/tx.registry";
import * as _167 from "./bank/v1beta1/tx.registry";
import * as _168 from "./crisis/v1beta1/tx.registry";
import * as _169 from "./distribution/v1beta1/tx.registry";
import * as _170 from "./evidence/v1beta1/tx.registry";
import * as _171 from "./feegrant/v1beta1/tx.registry";
import * as _172 from "./gov/v1beta1/tx.registry";
import * as _173 from "./slashing/v1beta1/tx.registry";
import * as _174 from "./staking/v1beta1/tx.registry";
import * as _175 from "./vesting/v1beta1/tx.registry";
import * as _176 from "./auth/v1beta1/query.lcd";
import * as _177 from "./authz/v1beta1/query.lcd";
import * as _178 from "./bank/v1beta1/query.lcd";
import * as _179 from "./base/node/v1beta1/query.lcd";
import * as _180 from "./base/tendermint/v1beta1/query.lcd";
import * as _181 from "./distribution/v1beta1/query.lcd";
import * as _182 from "./evidence/v1beta1/query.lcd";
import * as _183 from "./feegrant/v1beta1/query.lcd";
import * as _184 from "./gov/v1beta1/query.lcd";
import * as _185 from "./mint/v1beta1/query.lcd";
import * as _186 from "./params/v1beta1/query.lcd";
import * as _187 from "./slashing/v1beta1/query.lcd";
import * as _188 from "./staking/v1beta1/query.lcd";
import * as _189 from "./tx/v1beta1/service.lcd";
import * as _190 from "./upgrade/v1beta1/query.lcd";
import * as _191 from "./auth/v1beta1/query.rpc.Query";
import * as _192 from "./authz/v1beta1/query.rpc.Query";
import * as _193 from "./bank/v1beta1/query.rpc.Query";
import * as _194 from "./base/node/v1beta1/query.rpc.Service";
import * as _195 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _196 from "./distribution/v1beta1/query.rpc.Query";
import * as _197 from "./evidence/v1beta1/query.rpc.Query";
import * as _198 from "./feegrant/v1beta1/query.rpc.Query";
import * as _199 from "./gov/v1beta1/query.rpc.Query";
import * as _200 from "./mint/v1beta1/query.rpc.Query";
import * as _201 from "./params/v1beta1/query.rpc.Query";
import * as _202 from "./slashing/v1beta1/query.rpc.Query";
import * as _203 from "./staking/v1beta1/query.rpc.Query";
import * as _204 from "./tx/v1beta1/service.rpc.Service";
import * as _205 from "./upgrade/v1beta1/query.rpc.Query";
import * as _206 from "./authz/v1beta1/tx.rpc.msg";
import * as _207 from "./bank/v1beta1/tx.rpc.msg";
import * as _208 from "./crisis/v1beta1/tx.rpc.msg";
import * as _209 from "./distribution/v1beta1/tx.rpc.msg";
import * as _210 from "./evidence/v1beta1/tx.rpc.msg";
import * as _211 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _212 from "./gov/v1beta1/tx.rpc.msg";
import * as _213 from "./slashing/v1beta1/tx.rpc.msg";
import * as _214 from "./staking/v1beta1/tx.rpc.msg";
import * as _215 from "./vesting/v1beta1/tx.rpc.msg";
import * as _219 from "./lcd";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1alpha1 = {
      ..._24
    };
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._176,
      ..._191
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._156,
      ..._166,
      ..._177,
      ..._192,
      ..._206
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._157,
      ..._167,
      ..._178,
      ..._193,
      ..._207
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._40,
        ..._179,
        ..._194
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._42
      };
      export const v2alpha1 = {
        ..._43
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._44
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._45,
        ..._46,
        ..._47
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._48,
        ..._180,
        ..._195
      };
    }
    export const v1beta1 = {
      ..._49
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._50,
      ..._51
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._158,
      ..._168,
      ..._208
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._54
    };
    export const multisig = {
      ..._55
    };
    export const secp256k1 = {
      ..._56
    };
    export const secp256r1 = {
      ..._57
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._159,
      ..._169,
      ..._181,
      ..._196,
      ..._209
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._160,
      ..._170,
      ..._182,
      ..._197,
      ..._210
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._161,
      ..._171,
      ..._183,
      ..._198,
      ..._211
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._70
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._162,
      ..._172,
      ..._184,
      ..._199,
      ..._212
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._185,
      ..._200
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._186,
      ..._201
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._163,
      ..._173,
      ..._187,
      ..._202,
      ..._213
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._164,
      ..._174,
      ..._188,
      ..._203,
      ..._214
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._89
      };
    }
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._189,
      ..._204
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._190,
      ..._205
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._165,
      ..._175,
      ..._215
    };
  }
  export const ClientFactory = {
    ..._219,
    ..._220,
    ..._221
  };
}