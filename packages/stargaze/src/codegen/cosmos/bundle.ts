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
import * as _47 from "./base/v1beta1/coin";
import * as _48 from "./capability/v1beta1/capability";
import * as _49 from "./capability/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/tx";
import * as _52 from "./crypto/ed25519/keys";
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
import * as _69 from "./gov/v1beta1/genesis";
import * as _70 from "./gov/v1beta1/gov";
import * as _71 from "./gov/v1beta1/query";
import * as _72 from "./gov/v1beta1/tx";
import * as _73 from "./mint/v1beta1/genesis";
import * as _74 from "./mint/v1beta1/mint";
import * as _75 from "./mint/v1beta1/query";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _150 from "./authz/v1beta1/tx.amino";
import * as _151 from "./bank/v1beta1/tx.amino";
import * as _152 from "./crisis/v1beta1/tx.amino";
import * as _153 from "./distribution/v1beta1/tx.amino";
import * as _154 from "./evidence/v1beta1/tx.amino";
import * as _155 from "./feegrant/v1beta1/tx.amino";
import * as _156 from "./gov/v1beta1/tx.amino";
import * as _157 from "./slashing/v1beta1/tx.amino";
import * as _158 from "./staking/v1beta1/tx.amino";
import * as _159 from "./vesting/v1beta1/tx.amino";
import * as _160 from "./authz/v1beta1/tx.registry";
import * as _161 from "./bank/v1beta1/tx.registry";
import * as _162 from "./crisis/v1beta1/tx.registry";
import * as _163 from "./distribution/v1beta1/tx.registry";
import * as _164 from "./evidence/v1beta1/tx.registry";
import * as _165 from "./feegrant/v1beta1/tx.registry";
import * as _166 from "./gov/v1beta1/tx.registry";
import * as _167 from "./slashing/v1beta1/tx.registry";
import * as _168 from "./staking/v1beta1/tx.registry";
import * as _169 from "./vesting/v1beta1/tx.registry";
import * as _170 from "./auth/v1beta1/query.lcd";
import * as _171 from "./authz/v1beta1/query.lcd";
import * as _172 from "./bank/v1beta1/query.lcd";
import * as _173 from "./base/node/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1beta1/query.lcd";
import * as _179 from "./mint/v1beta1/query.lcd";
import * as _180 from "./params/v1beta1/query.lcd";
import * as _181 from "./slashing/v1beta1/query.lcd";
import * as _182 from "./staking/v1beta1/query.lcd";
import * as _183 from "./tx/v1beta1/service.lcd";
import * as _184 from "./upgrade/v1beta1/query.lcd";
import * as _185 from "./auth/v1beta1/query.rpc.Query";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./bank/v1beta1/query.rpc.Query";
import * as _188 from "./base/node/v1beta1/query.rpc.Service";
import * as _189 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _190 from "./distribution/v1beta1/query.rpc.Query";
import * as _191 from "./evidence/v1beta1/query.rpc.Query";
import * as _192 from "./feegrant/v1beta1/query.rpc.Query";
import * as _193 from "./gov/v1beta1/query.rpc.Query";
import * as _194 from "./mint/v1beta1/query.rpc.Query";
import * as _195 from "./params/v1beta1/query.rpc.Query";
import * as _196 from "./slashing/v1beta1/query.rpc.Query";
import * as _197 from "./staking/v1beta1/query.rpc.Query";
import * as _198 from "./tx/v1beta1/service.rpc.Service";
import * as _199 from "./upgrade/v1beta1/query.rpc.Query";
import * as _200 from "./authz/v1beta1/tx.rpc.msg";
import * as _201 from "./bank/v1beta1/tx.rpc.msg";
import * as _202 from "./crisis/v1beta1/tx.rpc.msg";
import * as _203 from "./distribution/v1beta1/tx.rpc.msg";
import * as _204 from "./evidence/v1beta1/tx.rpc.msg";
import * as _205 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _206 from "./gov/v1beta1/tx.rpc.msg";
import * as _207 from "./slashing/v1beta1/tx.rpc.msg";
import * as _208 from "./staking/v1beta1/tx.rpc.msg";
import * as _209 from "./vesting/v1beta1/tx.rpc.msg";
import * as _218 from "./lcd";
import * as _219 from "./rpc.query";
import * as _220 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._170,
      ..._185
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._150,
      ..._160,
      ..._171,
      ..._186,
      ..._200
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._151,
      ..._161,
      ..._172,
      ..._187,
      ..._201
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
        ..._173,
        ..._188
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
        ..._174,
        ..._189
      };
    }
    export const v1beta1 = {
      ..._47
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._48,
      ..._49
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._152,
      ..._162,
      ..._202
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._52
    };
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
      ..._153,
      ..._163,
      ..._175,
      ..._190,
      ..._203
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._154,
      ..._164,
      ..._176,
      ..._191,
      ..._204
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._155,
      ..._165,
      ..._177,
      ..._192,
      ..._205
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._68
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._156,
      ..._166,
      ..._178,
      ..._193,
      ..._206
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._179,
      ..._194
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._180,
      ..._195
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._157,
      ..._167,
      ..._181,
      ..._196,
      ..._207
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._158,
      ..._168,
      ..._182,
      ..._197,
      ..._208
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._183,
      ..._198
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._184,
      ..._199
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._159,
      ..._169,
      ..._209
    };
  }
  export const ClientFactory = {
    ..._218,
    ..._219,
    ..._220
  };
}