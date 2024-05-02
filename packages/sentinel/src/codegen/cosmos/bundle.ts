import * as _52 from "./auth/v1beta1/auth";
import * as _53 from "./auth/v1beta1/genesis";
import * as _54 from "./auth/v1beta1/query";
import * as _55 from "./authz/v1beta1/authz";
import * as _56 from "./authz/v1beta1/event";
import * as _57 from "./authz/v1beta1/genesis";
import * as _58 from "./authz/v1beta1/query";
import * as _59 from "./authz/v1beta1/tx";
import * as _60 from "./bank/v1beta1/authz";
import * as _61 from "./bank/v1beta1/bank";
import * as _62 from "./bank/v1beta1/genesis";
import * as _63 from "./bank/v1beta1/query";
import * as _64 from "./bank/v1beta1/tx";
import * as _65 from "./base/abci/v1beta1/abci";
import * as _66 from "./base/kv/v1beta1/kv";
import * as _67 from "./base/node/v1beta1/query";
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
import * as _149 from "./authz/v1beta1/tx.amino";
import * as _150 from "./bank/v1beta1/tx.amino";
import * as _151 from "./crisis/v1beta1/tx.amino";
import * as _152 from "./distribution/v1beta1/tx.amino";
import * as _153 from "./evidence/v1beta1/tx.amino";
import * as _154 from "./feegrant/v1beta1/tx.amino";
import * as _155 from "./gov/v1beta1/tx.amino";
import * as _156 from "./slashing/v1beta1/tx.amino";
import * as _157 from "./staking/v1beta1/tx.amino";
import * as _158 from "./vesting/v1beta1/tx.amino";
import * as _159 from "./authz/v1beta1/tx.registry";
import * as _160 from "./bank/v1beta1/tx.registry";
import * as _161 from "./crisis/v1beta1/tx.registry";
import * as _162 from "./distribution/v1beta1/tx.registry";
import * as _163 from "./evidence/v1beta1/tx.registry";
import * as _164 from "./feegrant/v1beta1/tx.registry";
import * as _165 from "./gov/v1beta1/tx.registry";
import * as _166 from "./slashing/v1beta1/tx.registry";
import * as _167 from "./staking/v1beta1/tx.registry";
import * as _168 from "./vesting/v1beta1/tx.registry";
import * as _169 from "./auth/v1beta1/query.lcd";
import * as _170 from "./authz/v1beta1/query.lcd";
import * as _171 from "./bank/v1beta1/query.lcd";
import * as _172 from "./base/node/v1beta1/query.lcd";
import * as _173 from "./base/tendermint/v1beta1/query.lcd";
import * as _174 from "./distribution/v1beta1/query.lcd";
import * as _175 from "./evidence/v1beta1/query.lcd";
import * as _176 from "./feegrant/v1beta1/query.lcd";
import * as _177 from "./gov/v1beta1/query.lcd";
import * as _178 from "./mint/v1beta1/query.lcd";
import * as _179 from "./params/v1beta1/query.lcd";
import * as _180 from "./slashing/v1beta1/query.lcd";
import * as _181 from "./staking/v1beta1/query.lcd";
import * as _182 from "./tx/v1beta1/service.lcd";
import * as _183 from "./upgrade/v1beta1/query.lcd";
import * as _184 from "./auth/v1beta1/query.rpc.Query";
import * as _185 from "./authz/v1beta1/query.rpc.Query";
import * as _186 from "./bank/v1beta1/query.rpc.Query";
import * as _187 from "./base/node/v1beta1/query.rpc.Service";
import * as _188 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _189 from "./distribution/v1beta1/query.rpc.Query";
import * as _190 from "./evidence/v1beta1/query.rpc.Query";
import * as _191 from "./feegrant/v1beta1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./params/v1beta1/query.rpc.Query";
import * as _195 from "./slashing/v1beta1/query.rpc.Query";
import * as _196 from "./staking/v1beta1/query.rpc.Query";
import * as _197 from "./tx/v1beta1/service.rpc.Service";
import * as _198 from "./upgrade/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/tx.rpc.msg";
import * as _200 from "./bank/v1beta1/tx.rpc.msg";
import * as _201 from "./crisis/v1beta1/tx.rpc.msg";
import * as _202 from "./distribution/v1beta1/tx.rpc.msg";
import * as _203 from "./evidence/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1beta1/tx.rpc.msg";
import * as _206 from "./slashing/v1beta1/tx.rpc.msg";
import * as _207 from "./staking/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
import * as _214 from "./lcd";
import * as _215 from "./rpc.query";
import * as _216 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._169,
      ..._184
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._149,
      ..._159,
      ..._170,
      ..._185,
      ..._199
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._150,
      ..._160,
      ..._171,
      ..._186,
      ..._200
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._65
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._66
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._67,
        ..._172,
        ..._187
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
        ..._173,
        ..._188
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
      ..._151,
      ..._161,
      ..._201
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
      ..._152,
      ..._162,
      ..._174,
      ..._189,
      ..._202
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._153,
      ..._163,
      ..._175,
      ..._190,
      ..._203
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._154,
      ..._164,
      ..._176,
      ..._191,
      ..._204
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
      ..._155,
      ..._165,
      ..._177,
      ..._192,
      ..._205
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._178,
      ..._193
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._179,
      ..._194
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._156,
      ..._166,
      ..._180,
      ..._195,
      ..._206
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._157,
      ..._167,
      ..._181,
      ..._196,
      ..._207
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
      ..._182,
      ..._197
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._183,
      ..._198
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._158,
      ..._168,
      ..._208
    };
  }
  export const ClientFactory = {
    ..._214,
    ..._215,
    ..._216
  };
}