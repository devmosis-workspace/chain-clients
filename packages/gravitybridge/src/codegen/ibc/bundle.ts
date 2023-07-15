import * as _87 from "./applications/transfer/v1/query";
import * as _88 from "./applications/transfer/v1/transfer";
import * as _89 from "./core/channel/v1/channel";
import * as _90 from "./core/channel/v1/tx";
import * as _91 from "./core/client/v1/client";
import * as _92 from "./core/client/v1/query";
import * as _93 from "./core/commitment/v1/commitment";
import * as _94 from "./lightclients/tendermint/v1/tendermint";
import * as _169 from "./core/channel/v1/tx.amino";
import * as _170 from "./core/channel/v1/tx.registry";
import * as _171 from "./applications/transfer/v1/query.rpc.Query";
import * as _172 from "./core/client/v1/query.rpc.Query";
import * as _173 from "./core/channel/v1/tx.rpc.msg";
import * as _178 from "./rpc.query";
import * as _179 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._87,
        ..._88,
        ..._171
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._89,
        ..._90,
        ..._169,
        ..._170,
        ..._173
      };
    }
    export namespace client {
      export const v1 = {
        ..._91,
        ..._92,
        ..._172
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
    ..._178,
    ..._179
  };
}