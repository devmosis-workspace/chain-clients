import * as _87 from "./applications/transfer/v1/genesis";
import * as _88 from "./applications/transfer/v1/query";
import * as _89 from "./applications/transfer/v1/transfer";
import * as _90 from "./applications/transfer/v1/tx";
import * as _91 from "./core/channel/v1/channel";
import * as _92 from "./core/channel/v1/genesis";
import * as _93 from "./core/channel/v1/query";
import * as _94 from "./core/channel/v1/tx";
import * as _95 from "./core/client/v1/client";
import * as _96 from "./core/client/v1/genesis";
import * as _97 from "./core/client/v1/query";
import * as _98 from "./core/client/v1/tx";
import * as _99 from "./core/commitment/v1/commitment";
import * as _100 from "./core/connection/v1/connection";
import * as _101 from "./core/connection/v1/genesis";
import * as _102 from "./core/connection/v1/query";
import * as _103 from "./core/connection/v1/tx";
import * as _104 from "./core/types/v1/genesis";
import * as _105 from "./lightclients/localhost/v1/localhost";
import * as _106 from "./lightclients/solomachine/v1/solomachine";
import * as _107 from "./lightclients/tendermint/v1/tendermint";
import * as _193 from "./applications/transfer/v1/tx.amino";
import * as _194 from "./core/channel/v1/tx.amino";
import * as _195 from "./core/client/v1/tx.amino";
import * as _196 from "./core/connection/v1/tx.amino";
import * as _197 from "./applications/transfer/v1/tx.registry";
import * as _198 from "./core/channel/v1/tx.registry";
import * as _199 from "./core/client/v1/tx.registry";
import * as _200 from "./core/connection/v1/tx.registry";
import * as _201 from "./applications/transfer/v1/query.lcd";
import * as _202 from "./core/channel/v1/query.lcd";
import * as _203 from "./core/client/v1/query.lcd";
import * as _204 from "./core/connection/v1/query.lcd";
import * as _205 from "./applications/transfer/v1/query.rpc.Query";
import * as _206 from "./core/channel/v1/query.rpc.Query";
import * as _207 from "./core/client/v1/query.rpc.Query";
import * as _208 from "./core/connection/v1/query.rpc.Query";
import * as _209 from "./applications/transfer/v1/tx.rpc.msg";
import * as _210 from "./core/channel/v1/tx.rpc.msg";
import * as _211 from "./core/client/v1/tx.rpc.msg";
import * as _212 from "./core/connection/v1/tx.rpc.msg";
import * as _219 from "./lcd";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._193,
        ..._197,
        ..._201,
        ..._205,
        ..._209
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._91,
        ..._92,
        ..._93,
        ..._94,
        ..._194,
        ..._198,
        ..._202,
        ..._206,
        ..._210
      };
    }
    export namespace client {
      export const v1 = {
        ..._95,
        ..._96,
        ..._97,
        ..._98,
        ..._195,
        ..._199,
        ..._203,
        ..._207,
        ..._211
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._99
      };
    }
    export namespace connection {
      export const v1 = {
        ..._100,
        ..._101,
        ..._102,
        ..._103,
        ..._196,
        ..._200,
        ..._204,
        ..._208,
        ..._212
      };
    }
    export namespace types {
      export const v1 = {
        ..._104
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._105
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._106
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._107
      };
    }
  }
  export const ClientFactory = {
    ..._219,
    ..._220,
    ..._221
  };
}