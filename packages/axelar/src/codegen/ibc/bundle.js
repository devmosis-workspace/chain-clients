import * as _157 from "./applications/transfer/v1/genesis";
import * as _158 from "./applications/transfer/v1/query";
import * as _159 from "./applications/transfer/v1/transfer";
import * as _160 from "./applications/transfer/v1/tx";
import * as _161 from "./applications/transfer/v2/packet";
import * as _162 from "./core/channel/v1/channel";
import * as _163 from "./core/channel/v1/genesis";
import * as _164 from "./core/channel/v1/query";
import * as _165 from "./core/channel/v1/tx";
import * as _166 from "./core/client/v1/client";
import * as _167 from "./core/client/v1/genesis";
import * as _168 from "./core/client/v1/query";
import * as _169 from "./core/client/v1/tx";
import * as _170 from "./core/commitment/v1/commitment";
import * as _171 from "./core/connection/v1/connection";
import * as _172 from "./core/connection/v1/genesis";
import * as _173 from "./core/connection/v1/query";
import * as _174 from "./core/connection/v1/tx";
import * as _175 from "./core/types/v1/genesis";
import * as _176 from "./lightclients/localhost/v1/localhost";
import * as _177 from "./lightclients/solomachine/v1/solomachine";
import * as _178 from "./lightclients/solomachine/v2/solomachine";
import * as _179 from "./lightclients/tendermint/v1/tendermint";
import * as _262 from "./applications/transfer/v1/tx.amino";
import * as _263 from "./core/channel/v1/tx.amino";
import * as _264 from "./core/client/v1/tx.amino";
import * as _265 from "./core/connection/v1/tx.amino";
import * as _266 from "./applications/transfer/v1/tx.registry";
import * as _267 from "./core/channel/v1/tx.registry";
import * as _268 from "./core/client/v1/tx.registry";
import * as _269 from "./core/connection/v1/tx.registry";
import * as _270 from "./applications/transfer/v1/query.lcd";
import * as _271 from "./core/channel/v1/query.lcd";
import * as _272 from "./core/client/v1/query.lcd";
import * as _273 from "./core/connection/v1/query.lcd";
import * as _274 from "./applications/transfer/v1/query.rpc.Query";
import * as _275 from "./core/channel/v1/query.rpc.Query";
import * as _276 from "./core/client/v1/query.rpc.Query";
import * as _277 from "./core/connection/v1/query.rpc.Query";
import * as _278 from "./applications/transfer/v1/tx.rpc.msg";
import * as _279 from "./core/channel/v1/tx.rpc.msg";
import * as _280 from "./core/client/v1/tx.rpc.msg";
import * as _281 from "./core/connection/v1/tx.rpc.msg";
import * as _291 from "./lcd";
import * as _292 from "./rpc.query";
import * as _293 from "./rpc.tx";
export var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._157,
                ..._158,
                ..._159,
                ..._160,
                ..._262,
                ..._266,
                ..._270,
                ..._274,
                ..._278
            };
            transfer.v2 = {
                ..._161
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._162,
                ..._163,
                ..._164,
                ..._165,
                ..._263,
                ..._267,
                ..._271,
                ..._275,
                ..._279
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._166,
                ..._167,
                ..._168,
                ..._169,
                ..._264,
                ..._268,
                ..._272,
                ..._276,
                ..._280
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._170
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._171,
                ..._172,
                ..._173,
                ..._174,
                ..._265,
                ..._269,
                ..._273,
                ..._277,
                ..._281
            };
        })(connection = core.connection || (core.connection = {}));
        let types;
        (function (types) {
            types.v1 = {
                ..._175
            };
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._176
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._177
            };
            solomachine.v2 = {
                ..._178
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._179
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._291,
        ..._292,
        ..._293
    };
})(ibc || (ibc = {}));
//# sourceMappingURL=bundle.js.map