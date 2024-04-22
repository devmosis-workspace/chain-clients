import * as _0 from "./axelarnet/v1beta1/events";
import * as _1 from "./axelarnet/v1beta1/genesis";
import * as _2 from "./axelarnet/v1beta1/params";
import * as _3 from "./axelarnet/v1beta1/proposal";
import * as _4 from "./axelarnet/v1beta1/query";
import * as _5 from "./axelarnet/v1beta1/service";
import * as _6 from "./axelarnet/v1beta1/tx";
import * as _7 from "./axelarnet/v1beta1/types";
import * as _8 from "./evm/v1beta1/events";
import * as _9 from "./evm/v1beta1/genesis";
import * as _10 from "./evm/v1beta1/params";
import * as _11 from "./evm/v1beta1/query";
import * as _12 from "./evm/v1beta1/service";
import * as _13 from "./evm/v1beta1/tx";
import * as _14 from "./evm/v1beta1/types";
import * as _15 from "./multisig/exported/v1beta1/types";
import * as _16 from "./multisig/v1beta1/events";
import * as _17 from "./multisig/v1beta1/genesis";
import * as _18 from "./multisig/v1beta1/params";
import * as _19 from "./multisig/v1beta1/query";
import * as _20 from "./multisig/v1beta1/service";
import * as _21 from "./multisig/v1beta1/tx";
import * as _22 from "./multisig/v1beta1/types";
import * as _23 from "./nexus/exported/v1beta1/types";
import * as _24 from "./nexus/v1beta1/events";
import * as _25 from "./nexus/v1beta1/genesis";
import * as _26 from "./nexus/v1beta1/params";
import * as _27 from "./nexus/v1beta1/query";
import * as _28 from "./nexus/v1beta1/service";
import * as _29 from "./nexus/v1beta1/tx";
import * as _30 from "./nexus/v1beta1/types";
import * as _31 from "./permission/exported/v1beta1/types";
import * as _32 from "./permission/v1beta1/genesis";
import * as _33 from "./permission/v1beta1/params";
import * as _34 from "./permission/v1beta1/query";
import * as _35 from "./permission/v1beta1/service";
import * as _36 from "./permission/v1beta1/tx";
import * as _37 from "./permission/v1beta1/types";
import * as _38 from "./reward/v1beta1/genesis";
import * as _39 from "./reward/v1beta1/params";
import * as _40 from "./reward/v1beta1/query";
import * as _41 from "./reward/v1beta1/service";
import * as _42 from "./reward/v1beta1/tx";
import * as _43 from "./reward/v1beta1/types";
import * as _44 from "./snapshot/exported/v1beta1/types";
import * as _45 from "./snapshot/v1beta1/genesis";
import * as _46 from "./snapshot/v1beta1/params";
import * as _47 from "./snapshot/v1beta1/query";
import * as _48 from "./snapshot/v1beta1/service";
import * as _49 from "./snapshot/v1beta1/tx";
import * as _50 from "./snapshot/v1beta1/types";
import * as _51 from "./tss/exported/v1beta1/types";
import * as _52 from "./tss/tofnd/v1beta1/common";
import * as _53 from "./tss/tofnd/v1beta1/multisig";
import * as _54 from "./tss/tofnd/v1beta1/tofnd";
import * as _55 from "./tss/v1beta1/genesis";
import * as _56 from "./tss/v1beta1/params";
import * as _57 from "./tss/v1beta1/query";
import * as _58 from "./tss/v1beta1/service";
import * as _59 from "./tss/v1beta1/tx";
import * as _60 from "./tss/v1beta1/types";
import * as _61 from "./utils/v1beta1/bitmap";
import * as _62 from "./utils/v1beta1/queuer";
import * as _63 from "./utils/v1beta1/threshold";
import * as _64 from "./vote/exported/v1beta1/types";
import * as _65 from "./vote/v1beta1/events";
import * as _66 from "./vote/v1beta1/genesis";
import * as _67 from "./vote/v1beta1/params";
import * as _68 from "./vote/v1beta1/query";
import * as _69 from "./vote/v1beta1/service";
import * as _70 from "./vote/v1beta1/tx";
import * as _71 from "./vote/v1beta1/types";
import * as _192 from "./permission/v1beta1/service.amino";
import * as _193 from "./permission/v1beta1/service.registry";
import * as _194 from "./permission/v1beta1/service.lcd";
import * as _195 from "./permission/v1beta1/service.rpc.Query";
import * as _196 from "./permission/v1beta1/service.rpc.msg";
import * as _282 from "./lcd";
import * as _283 from "./rpc.query";
import * as _284 from "./rpc.tx";
export var axelar;
(function (axelar) {
    let axelarnet;
    (function (axelarnet) {
        axelarnet.v1beta1 = {
            ..._0,
            ..._1,
            ..._2,
            ..._3,
            ..._4,
            ..._5,
            ..._6,
            ..._7
        };
    })(axelarnet = axelar.axelarnet || (axelar.axelarnet = {}));
    let evm;
    (function (evm) {
        evm.v1beta1 = {
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._12,
            ..._13,
            ..._14
        };
    })(evm = axelar.evm || (axelar.evm = {}));
    let multisig;
    (function (multisig) {
        let exported;
        (function (exported) {
            exported.v1beta1 = {
                ..._15
            };
        })(exported = multisig.exported || (multisig.exported = {}));
        multisig.v1beta1 = {
            ..._16,
            ..._17,
            ..._18,
            ..._19,
            ..._20,
            ..._21,
            ..._22
        };
    })(multisig = axelar.multisig || (axelar.multisig = {}));
    let nexus;
    (function (nexus) {
        let exported;
        (function (exported) {
            exported.v1beta1 = {
                ..._23
            };
        })(exported = nexus.exported || (nexus.exported = {}));
        nexus.v1beta1 = {
            ..._24,
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._29,
            ..._30
        };
    })(nexus = axelar.nexus || (axelar.nexus = {}));
    let permission;
    (function (permission) {
        let exported;
        (function (exported) {
            exported.v1beta1 = {
                ..._31
            };
        })(exported = permission.exported || (permission.exported = {}));
        permission.v1beta1 = {
            ..._32,
            ..._33,
            ..._34,
            ..._35,
            ..._36,
            ..._37,
            ..._192,
            ..._193,
            ..._194,
            ..._195,
            ..._196
        };
    })(permission = axelar.permission || (axelar.permission = {}));
    let reward;
    (function (reward) {
        reward.v1beta1 = {
            ..._38,
            ..._39,
            ..._40,
            ..._41,
            ..._42,
            ..._43
        };
    })(reward = axelar.reward || (axelar.reward = {}));
    let snapshot;
    (function (snapshot) {
        let exported;
        (function (exported) {
            exported.v1beta1 = {
                ..._44
            };
        })(exported = snapshot.exported || (snapshot.exported = {}));
        snapshot.v1beta1 = {
            ..._45,
            ..._46,
            ..._47,
            ..._48,
            ..._49,
            ..._50
        };
    })(snapshot = axelar.snapshot || (axelar.snapshot = {}));
    let tss;
    (function (tss) {
        let exported;
        (function (exported) {
            exported.v1beta1 = {
                ..._51
            };
        })(exported = tss.exported || (tss.exported = {}));
        let tofnd;
        (function (tofnd) {
            tofnd.v1beta1 = {
                ..._52,
                ..._53,
                ..._54
            };
        })(tofnd = tss.tofnd || (tss.tofnd = {}));
        tss.v1beta1 = {
            ..._55,
            ..._56,
            ..._57,
            ..._58,
            ..._59,
            ..._60
        };
    })(tss = axelar.tss || (axelar.tss = {}));
    let utils;
    (function (utils) {
        utils.v1beta1 = {
            ..._61,
            ..._62,
            ..._63
        };
    })(utils = axelar.utils || (axelar.utils = {}));
    let vote;
    (function (vote) {
        let exported;
        (function (exported) {
            exported.v1beta1 = {
                ..._64
            };
        })(exported = vote.exported || (vote.exported = {}));
        vote.v1beta1 = {
            ..._65,
            ..._66,
            ..._67,
            ..._68,
            ..._69,
            ..._70,
            ..._71
        };
    })(vote = axelar.vote || (axelar.vote = {}));
    axelar.ClientFactory = {
        ..._282,
        ..._283,
        ..._284
    };
})(axelar || (axelar = {}));
//# sourceMappingURL=bundle.js.map