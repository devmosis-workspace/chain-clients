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
import * as _191 from "./applications/transfer/v1/tx.amino";
import * as _192 from "./core/channel/v1/tx.amino";
import * as _193 from "./core/client/v1/tx.amino";
import * as _194 from "./core/connection/v1/tx.amino";
import * as _195 from "./applications/transfer/v1/tx.registry";
import * as _196 from "./core/channel/v1/tx.registry";
import * as _197 from "./core/client/v1/tx.registry";
import * as _198 from "./core/connection/v1/tx.registry";
import * as _199 from "./applications/transfer/v1/query.rpc.Query";
import * as _200 from "./core/channel/v1/query.rpc.Query";
import * as _201 from "./core/client/v1/query.rpc.Query";
import * as _202 from "./core/connection/v1/query.rpc.Query";
import * as _203 from "./applications/transfer/v1/tx.rpc.msg";
import * as _204 from "./core/channel/v1/tx.rpc.msg";
import * as _205 from "./core/client/v1/tx.rpc.msg";
import * as _206 from "./core/connection/v1/tx.rpc.msg";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._191,
        ..._195,
        ..._199,
        ..._203
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
        ..._192,
        ..._196,
        ..._200,
        ..._204
      };
    }
    export namespace client {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._193,
        ..._197,
        ..._201,
        ..._205
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
        ..._194,
        ..._198,
        ..._202,
        ..._206
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
    ..._213,
    ..._214
  };
}