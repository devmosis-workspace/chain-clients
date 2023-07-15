import * as _83 from "./app/runtime/v1alpha1/module";
import * as _84 from "./app/v1alpha1/config";
import * as _85 from "./app/v1alpha1/module";
import * as _86 from "./app/v1alpha1/query";
import * as _87 from "./auth/module/v1/module";
import * as _88 from "./auth/v1beta1/auth";
import * as _89 from "./auth/v1beta1/genesis";
import * as _90 from "./auth/v1beta1/query";
import * as _91 from "./auth/v1beta1/tx";
import * as _92 from "./authz/module/v1/module";
import * as _93 from "./authz/v1beta1/authz";
import * as _94 from "./authz/v1beta1/event";
import * as _95 from "./authz/v1beta1/genesis";
import * as _96 from "./authz/v1beta1/query";
import * as _97 from "./authz/v1beta1/tx";
import * as _98 from "./autocli/v1/options";
import * as _99 from "./autocli/v1/query";
import * as _100 from "./bank/module/v1/module";
import * as _101 from "./bank/v1beta1/authz";
import * as _102 from "./bank/v1beta1/bank";
import * as _103 from "./bank/v1beta1/genesis";
import * as _104 from "./bank/v1beta1/query";
import * as _105 from "./bank/v1beta1/tx";
import * as _106 from "./base/abci/v1beta1/abci";
import * as _107 from "./base/kv/v1beta1/kv";
import * as _108 from "./base/node/v1beta1/query";
import * as _109 from "./base/query/v1beta1/pagination";
import * as _110 from "./base/reflection/v1beta1/reflection";
import * as _111 from "./base/reflection/v2alpha1/reflection";
import * as _112 from "./base/snapshots/v1beta1/snapshot";
import * as _113 from "./base/store/v1beta1/commit_info";
import * as _114 from "./base/store/v1beta1/listening";
import * as _115 from "./base/tendermint/v1beta1/query";
import * as _116 from "./base/tendermint/v1beta1/types";
import * as _117 from "./base/v1beta1/coin";
import * as _118 from "./capability/module/v1/module";
import * as _119 from "./capability/v1beta1/capability";
import * as _120 from "./capability/v1beta1/genesis";
import * as _121 from "./consensus/module/v1/module";
import * as _122 from "./consensus/v1/query";
import * as _123 from "./consensus/v1/tx";
import * as _124 from "./crisis/module/v1/module";
import * as _125 from "./crisis/v1beta1/genesis";
import * as _126 from "./crisis/v1beta1/tx";
import * as _127 from "./crypto/ed25519/keys";
import * as _128 from "./crypto/hd/v1/hd";
import * as _129 from "./crypto/keyring/v1/record";
import * as _130 from "./crypto/multisig/keys";
import * as _131 from "./crypto/secp256k1/keys";
import * as _132 from "./crypto/secp256r1/keys";
import * as _133 from "./distribution/module/v1/module";
import * as _134 from "./distribution/v1beta1/distribution";
import * as _135 from "./distribution/v1beta1/genesis";
import * as _136 from "./distribution/v1beta1/query";
import * as _137 from "./distribution/v1beta1/tx";
import * as _138 from "./evidence/module/v1/module";
import * as _139 from "./evidence/v1beta1/evidence";
import * as _140 from "./evidence/v1beta1/genesis";
import * as _141 from "./evidence/v1beta1/query";
import * as _142 from "./evidence/v1beta1/tx";
import * as _143 from "./feegrant/module/v1/module";
import * as _144 from "./feegrant/v1beta1/feegrant";
import * as _145 from "./feegrant/v1beta1/genesis";
import * as _146 from "./feegrant/v1beta1/query";
import * as _147 from "./feegrant/v1beta1/tx";
import * as _148 from "./genutil/module/v1/module";
import * as _149 from "./genutil/v1beta1/genesis";
import * as _150 from "./gov/module/v1/module";
import * as _151 from "./gov/v1/genesis";
import * as _152 from "./gov/v1/gov";
import * as _153 from "./gov/v1/query";
import * as _154 from "./gov/v1/tx";
import * as _155 from "./gov/v1beta1/genesis";
import * as _156 from "./gov/v1beta1/gov";
import * as _157 from "./gov/v1beta1/query";
import * as _158 from "./gov/v1beta1/tx";
import * as _159 from "./group/module/v1/module";
import * as _160 from "./group/v1/events";
import * as _161 from "./group/v1/genesis";
import * as _162 from "./group/v1/query";
import * as _163 from "./group/v1/tx";
import * as _164 from "./group/v1/types";
import * as _165 from "./mint/module/v1/module";
import * as _166 from "./mint/v1beta1/genesis";
import * as _167 from "./mint/v1beta1/mint";
import * as _168 from "./mint/v1beta1/query";
import * as _169 from "./mint/v1beta1/tx";
import * as _170 from "./msg/v1/msg";
import * as _171 from "./nft/module/v1/module";
import * as _172 from "./nft/v1beta1/event";
import * as _173 from "./nft/v1beta1/genesis";
import * as _174 from "./nft/v1beta1/nft";
import * as _175 from "./nft/v1beta1/query";
import * as _176 from "./nft/v1beta1/tx";
import * as _177 from "./orm/module/v1alpha1/module";
import * as _178 from "./orm/query/v1alpha1/query";
import * as _179 from "./orm/v1/orm";
import * as _180 from "./orm/v1alpha1/schema";
import * as _181 from "./params/module/v1/module";
import * as _182 from "./params/v1beta1/params";
import * as _183 from "./params/v1beta1/query";
import * as _184 from "./query/v1/query";
import * as _185 from "./reflection/v1/reflection";
import * as _186 from "./slashing/module/v1/module";
import * as _187 from "./slashing/v1beta1/genesis";
import * as _188 from "./slashing/v1beta1/query";
import * as _189 from "./slashing/v1beta1/slashing";
import * as _190 from "./slashing/v1beta1/tx";
import * as _191 from "./staking/module/v1/module";
import * as _192 from "./staking/v1beta1/authz";
import * as _193 from "./staking/v1beta1/genesis";
import * as _194 from "./staking/v1beta1/query";
import * as _195 from "./staking/v1beta1/staking";
import * as _196 from "./staking/v1beta1/tx";
import * as _197 from "./tx/config/v1/config";
import * as _198 from "./tx/signing/v1beta1/signing";
import * as _199 from "./tx/v1beta1/service";
import * as _200 from "./tx/v1beta1/tx";
import * as _201 from "./upgrade/module/v1/module";
import * as _202 from "./upgrade/v1beta1/query";
import * as _203 from "./upgrade/v1beta1/tx";
import * as _204 from "./upgrade/v1beta1/upgrade";
import * as _205 from "./vesting/module/v1/module";
import * as _206 from "./vesting/v1beta1/tx";
import * as _207 from "./vesting/v1beta1/vesting";
import * as _280 from "./auth/v1beta1/tx.amino";
import * as _281 from "./authz/v1beta1/tx.amino";
import * as _282 from "./bank/v1beta1/tx.amino";
import * as _283 from "./consensus/v1/tx.amino";
import * as _284 from "./crisis/v1beta1/tx.amino";
import * as _285 from "./distribution/v1beta1/tx.amino";
import * as _286 from "./evidence/v1beta1/tx.amino";
import * as _287 from "./feegrant/v1beta1/tx.amino";
import * as _288 from "./gov/v1/tx.amino";
import * as _289 from "./gov/v1beta1/tx.amino";
import * as _290 from "./group/v1/tx.amino";
import * as _291 from "./mint/v1beta1/tx.amino";
import * as _292 from "./nft/v1beta1/tx.amino";
import * as _293 from "./slashing/v1beta1/tx.amino";
import * as _294 from "./staking/v1beta1/tx.amino";
import * as _295 from "./upgrade/v1beta1/tx.amino";
import * as _296 from "./vesting/v1beta1/tx.amino";
import * as _297 from "./auth/v1beta1/tx.registry";
import * as _298 from "./authz/v1beta1/tx.registry";
import * as _299 from "./bank/v1beta1/tx.registry";
import * as _300 from "./consensus/v1/tx.registry";
import * as _301 from "./crisis/v1beta1/tx.registry";
import * as _302 from "./distribution/v1beta1/tx.registry";
import * as _303 from "./evidence/v1beta1/tx.registry";
import * as _304 from "./feegrant/v1beta1/tx.registry";
import * as _305 from "./gov/v1/tx.registry";
import * as _306 from "./gov/v1beta1/tx.registry";
import * as _307 from "./group/v1/tx.registry";
import * as _308 from "./mint/v1beta1/tx.registry";
import * as _309 from "./nft/v1beta1/tx.registry";
import * as _310 from "./slashing/v1beta1/tx.registry";
import * as _311 from "./staking/v1beta1/tx.registry";
import * as _312 from "./upgrade/v1beta1/tx.registry";
import * as _313 from "./vesting/v1beta1/tx.registry";
import * as _314 from "./app/v1alpha1/query.rpc.Query";
import * as _315 from "./auth/v1beta1/query.rpc.Query";
import * as _316 from "./authz/v1beta1/query.rpc.Query";
import * as _317 from "./autocli/v1/query.rpc.Query";
import * as _318 from "./bank/v1beta1/query.rpc.Query";
import * as _319 from "./base/node/v1beta1/query.rpc.Service";
import * as _320 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _321 from "./consensus/v1/query.rpc.Query";
import * as _322 from "./distribution/v1beta1/query.rpc.Query";
import * as _323 from "./evidence/v1beta1/query.rpc.Query";
import * as _324 from "./feegrant/v1beta1/query.rpc.Query";
import * as _325 from "./gov/v1/query.rpc.Query";
import * as _326 from "./gov/v1beta1/query.rpc.Query";
import * as _327 from "./group/v1/query.rpc.Query";
import * as _328 from "./mint/v1beta1/query.rpc.Query";
import * as _329 from "./nft/v1beta1/query.rpc.Query";
import * as _330 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _331 from "./params/v1beta1/query.rpc.Query";
import * as _332 from "./slashing/v1beta1/query.rpc.Query";
import * as _333 from "./staking/v1beta1/query.rpc.Query";
import * as _334 from "./tx/v1beta1/service.rpc.Service";
import * as _335 from "./upgrade/v1beta1/query.rpc.Query";
import * as _336 from "./auth/v1beta1/tx.rpc.msg";
import * as _337 from "./authz/v1beta1/tx.rpc.msg";
import * as _338 from "./bank/v1beta1/tx.rpc.msg";
import * as _339 from "./consensus/v1/tx.rpc.msg";
import * as _340 from "./crisis/v1beta1/tx.rpc.msg";
import * as _341 from "./distribution/v1beta1/tx.rpc.msg";
import * as _342 from "./evidence/v1beta1/tx.rpc.msg";
import * as _343 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _344 from "./gov/v1/tx.rpc.msg";
import * as _345 from "./gov/v1beta1/tx.rpc.msg";
import * as _346 from "./group/v1/tx.rpc.msg";
import * as _347 from "./mint/v1beta1/tx.rpc.msg";
import * as _348 from "./nft/v1beta1/tx.rpc.msg";
import * as _349 from "./slashing/v1beta1/tx.rpc.msg";
import * as _350 from "./staking/v1beta1/tx.rpc.msg";
import * as _351 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _352 from "./vesting/v1beta1/tx.rpc.msg";
import * as _355 from "./rpc.query";
import * as _356 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._83
      };
    }
    export const v1alpha1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._314
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._280,
      ..._297,
      ..._315,
      ..._336
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._281,
      ..._298,
      ..._316,
      ..._337
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._98,
      ..._99,
      ..._317
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._100
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._282,
      ..._299,
      ..._318,
      ..._338
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._106
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._107
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._108,
        ..._319
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._109
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._110
      };
      export const v2alpha1 = {
        ..._111
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._112
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._113,
        ..._114
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._115,
        ..._116,
        ..._320
      };
    }
    export const v1beta1 = {
      ..._117
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._121
      };
    }
    export const v1 = {
      ..._122,
      ..._123,
      ..._283,
      ..._300,
      ..._321,
      ..._339
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._124
      };
    }
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._284,
      ..._301,
      ..._340
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._127
    };
    export namespace hd {
      export const v1 = {
        ..._128
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._129
      };
    }
    export const multisig = {
      ..._130
    };
    export const secp256k1 = {
      ..._131
    };
    export const secp256r1 = {
      ..._132
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._133
      };
    }
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._285,
      ..._302,
      ..._322,
      ..._341
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._138
      };
    }
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._286,
      ..._303,
      ..._323,
      ..._342
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._143
      };
    }
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._287,
      ..._304,
      ..._324,
      ..._343
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._148
      };
    }
    export const v1beta1 = {
      ..._149
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._150
      };
    }
    export const v1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._288,
      ..._305,
      ..._325,
      ..._344
    };
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._289,
      ..._306,
      ..._326,
      ..._345
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._159
      };
    }
    export const v1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._290,
      ..._307,
      ..._327,
      ..._346
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._165
      };
    }
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._291,
      ..._308,
      ..._328,
      ..._347
    };
  }
  export namespace msg {
    export const v1 = {
      ..._170
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._171
      };
    }
    export const v1beta1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._292,
      ..._309,
      ..._329,
      ..._348
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._177
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._178,
        ..._330
      };
    }
    export const v1 = {
      ..._179
    };
    export const v1alpha1 = {
      ..._180
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._181
      };
    }
    export const v1beta1 = {
      ..._182,
      ..._183,
      ..._331
    };
  }
  export namespace query {
    export const v1 = {
      ..._184
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._185
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._186
      };
    }
    export const v1beta1 = {
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._293,
      ..._310,
      ..._332,
      ..._349
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._191
      };
    }
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._294,
      ..._311,
      ..._333,
      ..._350
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._197
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._198
      };
    }
    export const v1beta1 = {
      ..._199,
      ..._200,
      ..._334
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._201
      };
    }
    export const v1beta1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._295,
      ..._312,
      ..._335,
      ..._351
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._205
      };
    }
    export const v1beta1 = {
      ..._206,
      ..._207,
      ..._296,
      ..._313,
      ..._352
    };
  }
  export const ClientFactory = {
    ..._355,
    ..._356
  };
}