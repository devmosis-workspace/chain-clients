import * as _181 from "./abci/types";
import * as _182 from "./crypto/keys";
import * as _183 from "./crypto/proof";
import * as _184 from "./libs/bits/types";
import * as _185 from "./p2p/types";
import * as _186 from "./types/block";
import * as _187 from "./types/evidence";
import * as _188 from "./types/params";
import * as _189 from "./types/types";
import * as _190 from "./types/validator";
import * as _191 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._181
    };
    tendermint.crypto = {
        ..._182,
        ..._183
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._184
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._185
    };
    tendermint.types = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._190
    };
    tendermint.version = {
        ..._191
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map