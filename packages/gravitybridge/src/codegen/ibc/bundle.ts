import * as _87 from "./applications/transfer/v1/query";
import * as _88 from "./applications/transfer/v1/transfer";
import * as _89 from "./core/channel/v1/channel";
import * as _90 from "./core/channel/v1/tx";
import * as _91 from "./core/client/v1/client";
import * as _92 from "./core/client/v1/query";
import * as _93 from "./core/commitment/v1/commitment";
import * as _94 from "./lightclients/tendermint/v1/tendermint";
import * as _185 from "./core/channel/v1/tx.amino";
import * as _186 from "./core/channel/v1/tx.registry";
import * as _187 from "./applications/transfer/v1/query.lcd";
import * as _188 from "./core/client/v1/query.lcd";
import * as _189 from "./applications/transfer/v1/query.rpc.Query";
import * as _190 from "./core/client/v1/query.rpc.Query";
import * as _191 from "./core/channel/v1/tx.rpc.msg";
import * as _198 from "./lcd";
import * as _199 from "./rpc.query";
import * as _200 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._87,
        ..._88,
        ..._187,
        ..._189
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._89,
        ..._90,
        ..._185,
        ..._186,
        ..._191
      };
    }
    export namespace client {
      export const v1 = {
        ..._91,
        ..._92,
        ..._188,
        ..._190
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._93
      };
    }
  }
  export namespace lightclients {
    export namespace tendermint {
      export const v1 = {
        ..._94
      };
    }
  }
  export const ClientFactory = {
    ..._198,
    ..._199,
    ..._200
  };
}