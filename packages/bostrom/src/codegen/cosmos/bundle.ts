import * as _22 from "./auth/v1beta1/auth";
import * as _23 from "./auth/v1beta1/genesis";
import * as _24 from "./auth/v1beta1/query";
import * as _25 from "./authz/v1beta1/authz";
import * as _26 from "./authz/v1beta1/event";
import * as _27 from "./authz/v1beta1/genesis";
import * as _28 from "./authz/v1beta1/query";
import * as _29 from "./authz/v1beta1/tx";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/kv/v1beta1/kv";
import * as _37 from "./base/node/v1beta1/query";
import * as _38 from "./base/query/v1beta1/pagination";
import * as _39 from "./base/reflection/v1beta1/reflection";
import * as _40 from "./base/reflection/v2alpha1/reflection";
import * as _41 from "./base/snapshots/v1beta1/snapshot";
import * as _42 from "./base/store/v1beta1/commit_info";
import * as _43 from "./base/store/v1beta1/listening";
import * as _44 from "./base/tendermint/v1beta1/query";
import * as _45 from "./base/v1beta1/coin";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/tx";
import * as _50 from "./crypto/ed25519/keys";
import * as _51 from "./crypto/multisig/keys";
import * as _52 from "./crypto/secp256k1/keys";
import * as _53 from "./crypto/secp256r1/keys";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./evidence/v1beta1/evidence";
import * as _59 from "./evidence/v1beta1/genesis";
import * as _60 from "./evidence/v1beta1/query";
import * as _61 from "./evidence/v1beta1/tx";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/genesis";
import * as _68 from "./gov/v1beta1/gov";
import * as _69 from "./gov/v1beta1/query";
import * as _70 from "./gov/v1beta1/tx";
import * as _71 from "./mint/v1beta1/genesis";
import * as _72 from "./mint/v1beta1/mint";
import * as _73 from "./mint/v1beta1/query";
import * as _74 from "./params/v1beta1/params";
import * as _75 from "./params/v1beta1/query";
import * as _76 from "./slashing/v1beta1/genesis";
import * as _77 from "./slashing/v1beta1/query";
import * as _78 from "./slashing/v1beta1/slashing";
import * as _79 from "./slashing/v1beta1/tx";
import * as _80 from "./staking/v1beta1/authz";
import * as _81 from "./staking/v1beta1/genesis";
import * as _82 from "./staking/v1beta1/query";
import * as _83 from "./staking/v1beta1/staking";
import * as _84 from "./staking/v1beta1/tx";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _87 from "./tx/v1beta1/tx";
import * as _88 from "./upgrade/v1beta1/query";
import * as _89 from "./upgrade/v1beta1/upgrade";
import * as _90 from "./vesting/v1beta1/tx";
import * as _91 from "./vesting/v1beta1/vesting";
import * as _142 from "./authz/v1beta1/tx.amino";
import * as _143 from "./bank/v1beta1/tx.amino";
import * as _144 from "./crisis/v1beta1/tx.amino";
import * as _145 from "./distribution/v1beta1/tx.amino";
import * as _146 from "./evidence/v1beta1/tx.amino";
import * as _147 from "./feegrant/v1beta1/tx.amino";
import * as _148 from "./gov/v1beta1/tx.amino";
import * as _149 from "./slashing/v1beta1/tx.amino";
import * as _150 from "./staking/v1beta1/tx.amino";
import * as _151 from "./vesting/v1beta1/tx.amino";
import * as _152 from "./authz/v1beta1/tx.registry";
import * as _153 from "./bank/v1beta1/tx.registry";
import * as _154 from "./crisis/v1beta1/tx.registry";
import * as _155 from "./distribution/v1beta1/tx.registry";
import * as _156 from "./evidence/v1beta1/tx.registry";
import * as _157 from "./feegrant/v1beta1/tx.registry";
import * as _158 from "./gov/v1beta1/tx.registry";
import * as _159 from "./slashing/v1beta1/tx.registry";
import * as _160 from "./staking/v1beta1/tx.registry";
import * as _161 from "./vesting/v1beta1/tx.registry";
import * as _162 from "./auth/v1beta1/query.lcd";
import * as _163 from "./authz/v1beta1/query.lcd";
import * as _164 from "./bank/v1beta1/query.lcd";
import * as _165 from "./base/node/v1beta1/query.lcd";
import * as _166 from "./base/tendermint/v1beta1/query.lcd";
import * as _167 from "./distribution/v1beta1/query.lcd";
import * as _168 from "./evidence/v1beta1/query.lcd";
import * as _169 from "./feegrant/v1beta1/query.lcd";
import * as _170 from "./gov/v1beta1/query.lcd";
import * as _171 from "./mint/v1beta1/query.lcd";
import * as _172 from "./params/v1beta1/query.lcd";
import * as _173 from "./slashing/v1beta1/query.lcd";
import * as _174 from "./staking/v1beta1/query.lcd";
import * as _175 from "./tx/v1beta1/service.lcd";
import * as _176 from "./upgrade/v1beta1/query.lcd";
import * as _177 from "./auth/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/query.rpc.Query";
import * as _179 from "./bank/v1beta1/query.rpc.Query";
import * as _180 from "./base/node/v1beta1/query.rpc.Service";
import * as _181 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _182 from "./distribution/v1beta1/query.rpc.Query";
import * as _183 from "./evidence/v1beta1/query.rpc.Query";
import * as _184 from "./feegrant/v1beta1/query.rpc.Query";
import * as _185 from "./gov/v1beta1/query.rpc.Query";
import * as _186 from "./mint/v1beta1/query.rpc.Query";
import * as _187 from "./params/v1beta1/query.rpc.Query";
import * as _188 from "./slashing/v1beta1/query.rpc.Query";
import * as _189 from "./staking/v1beta1/query.rpc.Query";
import * as _190 from "./tx/v1beta1/service.rpc.Service";
import * as _191 from "./upgrade/v1beta1/query.rpc.Query";
import * as _192 from "./authz/v1beta1/tx.rpc.msg";
import * as _193 from "./bank/v1beta1/tx.rpc.msg";
import * as _194 from "./crisis/v1beta1/tx.rpc.msg";
import * as _195 from "./distribution/v1beta1/tx.rpc.msg";
import * as _196 from "./evidence/v1beta1/tx.rpc.msg";
import * as _197 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _198 from "./gov/v1beta1/tx.rpc.msg";
import * as _199 from "./slashing/v1beta1/tx.rpc.msg";
import * as _200 from "./staking/v1beta1/tx.rpc.msg";
import * as _201 from "./vesting/v1beta1/tx.rpc.msg";
import * as _210 from "./lcd";
import * as _211 from "./rpc.query";
import * as _212 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._162,
      ..._177
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._142,
      ..._152,
      ..._163,
      ..._178,
      ..._192
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._143,
      ..._153,
      ..._164,
      ..._179,
      ..._193
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._37,
        ..._165,
        ..._180
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._39
      };
      export const v2alpha1 = {
        ..._40
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._42,
        ..._43
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._44,
        ..._166,
        ..._181
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
      ..._144,
      ..._154,
      ..._194
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._50
    };
    export const multisig = {
      ..._51
    };
    export const secp256k1 = {
      ..._52
    };
    export const secp256r1 = {
      ..._53
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._145,
      ..._155,
      ..._167,
      ..._182,
      ..._195
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._146,
      ..._156,
      ..._168,
      ..._183,
      ..._196
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._147,
      ..._157,
      ..._169,
      ..._184,
      ..._197
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._66
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._148,
      ..._158,
      ..._170,
      ..._185,
      ..._198
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._171,
      ..._186
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._172,
      ..._187
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._149,
      ..._159,
      ..._173,
      ..._188,
      ..._199
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._150,
      ..._160,
      ..._174,
      ..._189,
      ..._200
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._85
      };
    }
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._175,
      ..._190
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._176,
      ..._191
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._151,
      ..._161,
      ..._201
    };
  }
  export const ClientFactory = {
    ..._210,
    ..._211,
    ..._212
  };
}