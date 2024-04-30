import * as _47 from "./auth/v1beta1/auth";
import * as _48 from "./auth/v1beta1/genesis";
import * as _49 from "./auth/v1beta1/query";
import * as _50 from "./authz/v1beta1/authz";
import * as _51 from "./authz/v1beta1/event";
import * as _52 from "./authz/v1beta1/genesis";
import * as _53 from "./authz/v1beta1/query";
import * as _54 from "./authz/v1beta1/tx";
import * as _55 from "./bank/v1beta1/authz";
import * as _56 from "./bank/v1beta1/bank";
import * as _57 from "./bank/v1beta1/genesis";
import * as _58 from "./bank/v1beta1/query";
import * as _59 from "./bank/v1beta1/tx";
import * as _60 from "./base/abci/v1beta1/abci";
import * as _61 from "./base/kv/v1beta1/kv";
import * as _62 from "./base/node/v1beta1/query";
import * as _63 from "./base/query/v1beta1/pagination";
import * as _64 from "./base/reflection/v1beta1/reflection";
import * as _65 from "./base/reflection/v2alpha1/reflection";
import * as _66 from "./base/snapshots/v1beta1/snapshot";
import * as _67 from "./base/store/v1beta1/commit_info";
import * as _68 from "./base/store/v1beta1/listening";
import * as _69 from "./base/tendermint/v1beta1/query";
import * as _70 from "./base/v1beta1/coin";
import * as _71 from "./capability/v1beta1/capability";
import * as _72 from "./capability/v1beta1/genesis";
import * as _73 from "./crisis/v1beta1/genesis";
import * as _74 from "./crisis/v1beta1/tx";
import * as _75 from "./crypto/ed25519/keys";
import * as _76 from "./crypto/multisig/keys";
import * as _77 from "./crypto/secp256k1/keys";
import * as _78 from "./crypto/secp256r1/keys";
import * as _79 from "./distribution/v1beta1/distribution";
import * as _80 from "./distribution/v1beta1/genesis";
import * as _81 from "./distribution/v1beta1/query";
import * as _82 from "./distribution/v1beta1/tx";
import * as _83 from "./evidence/v1beta1/evidence";
import * as _84 from "./evidence/v1beta1/genesis";
import * as _85 from "./evidence/v1beta1/query";
import * as _86 from "./evidence/v1beta1/tx";
import * as _87 from "./feegrant/v1beta1/feegrant";
import * as _88 from "./feegrant/v1beta1/genesis";
import * as _89 from "./feegrant/v1beta1/query";
import * as _90 from "./feegrant/v1beta1/tx";
import * as _91 from "./genutil/v1beta1/genesis";
import * as _92 from "./gov/v1beta1/genesis";
import * as _93 from "./gov/v1beta1/gov";
import * as _94 from "./gov/v1beta1/query";
import * as _95 from "./gov/v1beta1/tx";
import * as _96 from "./mint/v1beta1/genesis";
import * as _97 from "./mint/v1beta1/mint";
import * as _98 from "./mint/v1beta1/query";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _101 from "./slashing/v1beta1/genesis";
import * as _102 from "./slashing/v1beta1/query";
import * as _103 from "./slashing/v1beta1/slashing";
import * as _104 from "./slashing/v1beta1/tx";
import * as _105 from "./staking/v1beta1/authz";
import * as _106 from "./staking/v1beta1/genesis";
import * as _107 from "./staking/v1beta1/query";
import * as _108 from "./staking/v1beta1/staking";
import * as _109 from "./staking/v1beta1/tx";
import * as _110 from "./tx/signing/v1beta1/signing";
import * as _111 from "./tx/v1beta1/service";
import * as _112 from "./tx/v1beta1/tx";
import * as _113 from "./upgrade/v1beta1/query";
import * as _114 from "./upgrade/v1beta1/upgrade";
import * as _115 from "./vesting/v1beta1/tx";
import * as _116 from "./vesting/v1beta1/vesting";
import * as _139 from "./authz/v1beta1/tx.amino";
import * as _140 from "./bank/v1beta1/tx.amino";
import * as _141 from "./crisis/v1beta1/tx.amino";
import * as _142 from "./distribution/v1beta1/tx.amino";
import * as _143 from "./evidence/v1beta1/tx.amino";
import * as _144 from "./feegrant/v1beta1/tx.amino";
import * as _145 from "./gov/v1beta1/tx.amino";
import * as _146 from "./slashing/v1beta1/tx.amino";
import * as _147 from "./staking/v1beta1/tx.amino";
import * as _148 from "./vesting/v1beta1/tx.amino";
import * as _149 from "./authz/v1beta1/tx.registry";
import * as _150 from "./bank/v1beta1/tx.registry";
import * as _151 from "./crisis/v1beta1/tx.registry";
import * as _152 from "./distribution/v1beta1/tx.registry";
import * as _153 from "./evidence/v1beta1/tx.registry";
import * as _154 from "./feegrant/v1beta1/tx.registry";
import * as _155 from "./gov/v1beta1/tx.registry";
import * as _156 from "./slashing/v1beta1/tx.registry";
import * as _157 from "./staking/v1beta1/tx.registry";
import * as _158 from "./vesting/v1beta1/tx.registry";
import * as _159 from "./auth/v1beta1/query.lcd";
import * as _160 from "./authz/v1beta1/query.lcd";
import * as _161 from "./bank/v1beta1/query.lcd";
import * as _162 from "./base/node/v1beta1/query.lcd";
import * as _163 from "./base/tendermint/v1beta1/query.lcd";
import * as _164 from "./distribution/v1beta1/query.lcd";
import * as _165 from "./evidence/v1beta1/query.lcd";
import * as _166 from "./feegrant/v1beta1/query.lcd";
import * as _167 from "./gov/v1beta1/query.lcd";
import * as _168 from "./mint/v1beta1/query.lcd";
import * as _169 from "./params/v1beta1/query.lcd";
import * as _170 from "./slashing/v1beta1/query.lcd";
import * as _171 from "./staking/v1beta1/query.lcd";
import * as _172 from "./tx/v1beta1/service.lcd";
import * as _173 from "./upgrade/v1beta1/query.lcd";
import * as _174 from "./auth/v1beta1/query.rpc.Query";
import * as _175 from "./authz/v1beta1/query.rpc.Query";
import * as _176 from "./bank/v1beta1/query.rpc.Query";
import * as _177 from "./base/node/v1beta1/query.rpc.Service";
import * as _178 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _179 from "./distribution/v1beta1/query.rpc.Query";
import * as _180 from "./evidence/v1beta1/query.rpc.Query";
import * as _181 from "./feegrant/v1beta1/query.rpc.Query";
import * as _182 from "./gov/v1beta1/query.rpc.Query";
import * as _183 from "./mint/v1beta1/query.rpc.Query";
import * as _184 from "./params/v1beta1/query.rpc.Query";
import * as _185 from "./slashing/v1beta1/query.rpc.Query";
import * as _186 from "./staking/v1beta1/query.rpc.Query";
import * as _187 from "./tx/v1beta1/service.rpc.Service";
import * as _188 from "./upgrade/v1beta1/query.rpc.Query";
import * as _189 from "./authz/v1beta1/tx.rpc.msg";
import * as _190 from "./bank/v1beta1/tx.rpc.msg";
import * as _191 from "./crisis/v1beta1/tx.rpc.msg";
import * as _192 from "./distribution/v1beta1/tx.rpc.msg";
import * as _193 from "./evidence/v1beta1/tx.rpc.msg";
import * as _194 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _195 from "./gov/v1beta1/tx.rpc.msg";
import * as _196 from "./slashing/v1beta1/tx.rpc.msg";
import * as _197 from "./staking/v1beta1/tx.rpc.msg";
import * as _198 from "./vesting/v1beta1/tx.rpc.msg";
import * as _202 from "./lcd";
import * as _203 from "./rpc.query";
import * as _204 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._159,
      ..._174
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._139,
      ..._149,
      ..._160,
      ..._175,
      ..._189
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._140,
      ..._150,
      ..._161,
      ..._176,
      ..._190
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._60
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._61
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._62,
        ..._162,
        ..._177
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._63
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._64
      };
      export const v2alpha1 = {
        ..._65
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._66
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._67,
        ..._68
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._69,
        ..._163,
        ..._178
      };
    }
    export const v1beta1 = {
      ..._70
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._71,
      ..._72
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._141,
      ..._151,
      ..._191
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._75
    };
    export const multisig = {
      ..._76
    };
    export const secp256k1 = {
      ..._77
    };
    export const secp256r1 = {
      ..._78
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._142,
      ..._152,
      ..._164,
      ..._179,
      ..._192
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._143,
      ..._153,
      ..._165,
      ..._180,
      ..._193
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._144,
      ..._154,
      ..._166,
      ..._181,
      ..._194
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._91
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._145,
      ..._155,
      ..._167,
      ..._182,
      ..._195
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._168,
      ..._183
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._169,
      ..._184
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._146,
      ..._156,
      ..._170,
      ..._185,
      ..._196
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._147,
      ..._157,
      ..._171,
      ..._186,
      ..._197
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._172,
      ..._187
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._173,
      ..._188
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._148,
      ..._158,
      ..._198
    };
  }
  export const ClientFactory = {
    ..._202,
    ..._203,
    ..._204
  };
}