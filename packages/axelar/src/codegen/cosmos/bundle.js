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
import * as _197 from "./authz/v1beta1/tx.amino";
import * as _198 from "./bank/v1beta1/tx.amino";
import * as _199 from "./crisis/v1beta1/tx.amino";
import * as _200 from "./distribution/v1beta1/tx.amino";
import * as _201 from "./evidence/v1beta1/tx.amino";
import * as _202 from "./feegrant/v1beta1/tx.amino";
import * as _203 from "./gov/v1beta1/tx.amino";
import * as _204 from "./slashing/v1beta1/tx.amino";
import * as _205 from "./staking/v1beta1/tx.amino";
import * as _206 from "./vesting/v1beta1/tx.amino";
import * as _207 from "./authz/v1beta1/tx.registry";
import * as _208 from "./bank/v1beta1/tx.registry";
import * as _209 from "./crisis/v1beta1/tx.registry";
import * as _210 from "./distribution/v1beta1/tx.registry";
import * as _211 from "./evidence/v1beta1/tx.registry";
import * as _212 from "./feegrant/v1beta1/tx.registry";
import * as _213 from "./gov/v1beta1/tx.registry";
import * as _214 from "./slashing/v1beta1/tx.registry";
import * as _215 from "./staking/v1beta1/tx.registry";
import * as _216 from "./vesting/v1beta1/tx.registry";
import * as _217 from "./auth/v1beta1/query.lcd";
import * as _218 from "./authz/v1beta1/query.lcd";
import * as _219 from "./bank/v1beta1/query.lcd";
import * as _220 from "./base/node/v1beta1/query.lcd";
import * as _221 from "./base/tendermint/v1beta1/query.lcd";
import * as _222 from "./distribution/v1beta1/query.lcd";
import * as _223 from "./evidence/v1beta1/query.lcd";
import * as _224 from "./feegrant/v1beta1/query.lcd";
import * as _225 from "./gov/v1beta1/query.lcd";
import * as _226 from "./mint/v1beta1/query.lcd";
import * as _227 from "./params/v1beta1/query.lcd";
import * as _228 from "./slashing/v1beta1/query.lcd";
import * as _229 from "./staking/v1beta1/query.lcd";
import * as _230 from "./tx/v1beta1/service.lcd";
import * as _231 from "./upgrade/v1beta1/query.lcd";
import * as _232 from "./auth/v1beta1/query.rpc.Query";
import * as _233 from "./authz/v1beta1/query.rpc.Query";
import * as _234 from "./bank/v1beta1/query.rpc.Query";
import * as _235 from "./base/node/v1beta1/query.rpc.Service";
import * as _236 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _237 from "./distribution/v1beta1/query.rpc.Query";
import * as _238 from "./evidence/v1beta1/query.rpc.Query";
import * as _239 from "./feegrant/v1beta1/query.rpc.Query";
import * as _240 from "./gov/v1beta1/query.rpc.Query";
import * as _241 from "./mint/v1beta1/query.rpc.Query";
import * as _242 from "./params/v1beta1/query.rpc.Query";
import * as _243 from "./slashing/v1beta1/query.rpc.Query";
import * as _244 from "./staking/v1beta1/query.rpc.Query";
import * as _245 from "./tx/v1beta1/service.rpc.Service";
import * as _246 from "./upgrade/v1beta1/query.rpc.Query";
import * as _247 from "./authz/v1beta1/tx.rpc.msg";
import * as _248 from "./bank/v1beta1/tx.rpc.msg";
import * as _249 from "./crisis/v1beta1/tx.rpc.msg";
import * as _250 from "./distribution/v1beta1/tx.rpc.msg";
import * as _251 from "./evidence/v1beta1/tx.rpc.msg";
import * as _252 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _253 from "./gov/v1beta1/tx.rpc.msg";
import * as _254 from "./slashing/v1beta1/tx.rpc.msg";
import * as _255 from "./staking/v1beta1/tx.rpc.msg";
import * as _256 from "./vesting/v1beta1/tx.rpc.msg";
import * as _285 from "./lcd";
import * as _286 from "./rpc.query";
import * as _287 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._72,
            ..._73,
            ..._74,
            ..._217,
            ..._232
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._197,
            ..._207,
            ..._218,
            ..._233,
            ..._247
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._80,
            ..._81,
            ..._82,
            ..._83,
            ..._84,
            ..._198,
            ..._208,
            ..._219,
            ..._234,
            ..._248
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._85
            };
        })(abci = base.abci || (base.abci = {}));
        let kv;
        (function (kv) {
            kv.v1beta1 = {
                ..._86
            };
        })(kv = base.kv || (base.kv = {}));
        let node;
        (function (node) {
            node.v1beta1 = {
                ..._87,
                ..._220,
                ..._235
            };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._88
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v1beta1 = {
                ..._89
            };
            reflection.v2alpha1 = {
                ..._90
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1beta1 = {
                ..._91
            };
        })(snapshots = base.snapshots || (base.snapshots = {}));
        let store;
        (function (store) {
            store.v1beta1 = {
                ..._92,
                ..._93
            };
        })(store = base.store || (base.store = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._94,
                ..._221,
                ..._236
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._95
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let capability;
    (function (capability) {
        capability.v1beta1 = {
            ..._96,
            ..._97
        };
    })(capability = cosmos.capability || (cosmos.capability = {}));
    let crisis;
    (function (crisis) {
        crisis.v1beta1 = {
            ..._98,
            ..._99,
            ..._199,
            ..._209,
            ..._249
        };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._100
        };
        crypto.multisig = {
            ..._101
        };
        crypto.secp256k1 = {
            ..._102
        };
        crypto.secp256r1 = {
            ..._103
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._104,
            ..._105,
            ..._106,
            ..._107,
            ..._200,
            ..._210,
            ..._222,
            ..._237,
            ..._250
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        evidence.v1beta1 = {
            ..._108,
            ..._109,
            ..._110,
            ..._111,
            ..._201,
            ..._211,
            ..._223,
            ..._238,
            ..._251
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._112,
            ..._113,
            ..._114,
            ..._115,
            ..._202,
            ..._212,
            ..._224,
            ..._239,
            ..._252
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        genutil.v1beta1 = {
            ..._116
        };
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._117,
            ..._118,
            ..._119,
            ..._120,
            ..._203,
            ..._213,
            ..._225,
            ..._240,
            ..._253
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._121,
            ..._122,
            ..._123,
            ..._226,
            ..._241
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._124,
            ..._125,
            ..._227,
            ..._242
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._126,
            ..._127,
            ..._128,
            ..._129,
            ..._204,
            ..._214,
            ..._228,
            ..._243,
            ..._254
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._130,
            ..._131,
            ..._132,
            ..._133,
            ..._134,
            ..._205,
            ..._215,
            ..._229,
            ..._244,
            ..._255
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._135
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._136,
            ..._137,
            ..._230,
            ..._245
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._138,
            ..._139,
            ..._231,
            ..._246
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._140,
            ..._141,
            ..._206,
            ..._216,
            ..._256
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._285,
        ..._286,
        ..._287
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map