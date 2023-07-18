import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./core/channel/v1/channel";
import * as _107 from "./core/channel/v1/genesis";
import * as _108 from "./core/channel/v1/query";
import * as _109 from "./core/channel/v1/tx";
import * as _110 from "./core/client/v1/client";
import * as _111 from "./core/client/v1/genesis";
import * as _112 from "./core/client/v1/query";
import * as _113 from "./core/client/v1/tx";
import * as _114 from "./core/commitment/v1/commitment";
import * as _115 from "./core/connection/v1/connection";
import * as _116 from "./core/connection/v1/genesis";
import * as _117 from "./core/connection/v1/query";
import * as _118 from "./core/connection/v1/tx";
import * as _119 from "./core/types/v1/genesis";
import * as _120 from "./lightclients/localhost/v1/localhost";
import * as _121 from "./lightclients/solomachine/v1/solomachine";
import * as _122 from "./lightclients/tendermint/v1/tendermint";
import * as _209 from "./applications/transfer/v1/tx.amino";
import * as _210 from "./core/channel/v1/tx.amino";
import * as _211 from "./core/client/v1/tx.amino";
import * as _212 from "./core/connection/v1/tx.amino";
import * as _213 from "./applications/transfer/v1/tx.registry";
import * as _214 from "./core/channel/v1/tx.registry";
import * as _215 from "./core/client/v1/tx.registry";
import * as _216 from "./core/connection/v1/tx.registry";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/tx.rpc.msg";
import * as _226 from "./core/channel/v1/tx.rpc.msg";
import * as _227 from "./core/client/v1/tx.rpc.msg";
import * as _228 from "./core/connection/v1/tx.rpc.msg";
import * as _238 from "./lcd";
import * as _239 from "./rpc.query";
import * as _240 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._209,
        ..._213,
        ..._217,
        ..._221,
        ..._225
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._210,
        ..._214,
        ..._218,
        ..._222,
        ..._226
      };
    }
    export namespace client {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._211,
        ..._215,
        ..._219,
        ..._223,
        ..._227
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._114
      };
    }
    export namespace connection {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._212,
        ..._216,
        ..._220,
        ..._224,
        ..._228
      };
    }
    export namespace types {
      export const v1 = {
        ..._119
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._120
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._121
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._122
      };
    }
  }
  export const ClientFactory = {
    ..._238,
    ..._239,
    ..._240
  };
}