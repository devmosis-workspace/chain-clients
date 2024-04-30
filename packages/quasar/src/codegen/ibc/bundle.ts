import * as _103 from "./applications/interchain_accounts/controller/v1/controller";
import * as _104 from "./applications/interchain_accounts/controller/v1/query";
import * as _105 from "./applications/interchain_accounts/host/v1/host";
import * as _106 from "./applications/interchain_accounts/host/v1/query";
import * as _107 from "./applications/interchain_accounts/v1/account";
import * as _108 from "./applications/interchain_accounts/v1/genesis";
import * as _109 from "./applications/interchain_accounts/v1/metadata";
import * as _110 from "./applications/interchain_accounts/v1/packet";
import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./core/types/v1/genesis";
import * as _130 from "./lightclients/localhost/v1/localhost";
import * as _131 from "./lightclients/solomachine/v1/solomachine";
import * as _132 from "./lightclients/solomachine/v2/solomachine";
import * as _133 from "./lightclients/tendermint/v1/tendermint";
import * as _258 from "./applications/transfer/v1/tx.amino";
import * as _259 from "./core/channel/v1/tx.amino";
import * as _260 from "./core/client/v1/tx.amino";
import * as _261 from "./core/connection/v1/tx.amino";
import * as _262 from "./applications/transfer/v1/tx.registry";
import * as _263 from "./core/channel/v1/tx.registry";
import * as _264 from "./core/client/v1/tx.registry";
import * as _265 from "./core/connection/v1/tx.registry";
import * as _266 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _267 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _268 from "./applications/transfer/v1/query.lcd";
import * as _269 from "./core/channel/v1/query.lcd";
import * as _270 from "./core/client/v1/query.lcd";
import * as _271 from "./core/connection/v1/query.lcd";
import * as _272 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _273 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _274 from "./applications/transfer/v1/query.rpc.Query";
import * as _275 from "./core/channel/v1/query.rpc.Query";
import * as _276 from "./core/client/v1/query.rpc.Query";
import * as _277 from "./core/connection/v1/query.rpc.Query";
import * as _278 from "./applications/transfer/v1/tx.rpc.msg";
import * as _279 from "./core/channel/v1/tx.rpc.msg";
import * as _280 from "./core/client/v1/tx.rpc.msg";
import * as _281 from "./core/connection/v1/tx.rpc.msg";
import * as _296 from "./lcd";
import * as _297 from "./rpc.query";
import * as _298 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._103,
          ..._104,
          ..._266,
          ..._272
        };
      }
      export namespace host {
        export const v1 = {
          ..._105,
          ..._106,
          ..._267,
          ..._273
        };
      }
      export const v1 = {
        ..._107,
        ..._108,
        ..._109,
        ..._110
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._258,
        ..._262,
        ..._268,
        ..._274,
        ..._278
      };
      export const v2 = {
        ..._115
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._259,
        ..._263,
        ..._269,
        ..._275,
        ..._279
      };
    }
    export namespace client {
      export const v1 = {
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._260,
        ..._264,
        ..._270,
        ..._276,
        ..._280
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._124
      };
    }
    export namespace connection {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._261,
        ..._265,
        ..._271,
        ..._277,
        ..._281
      };
    }
    export namespace types {
      export const v1 = {
        ..._129
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._130
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._131
      };
      export const v2 = {
        ..._132
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._133
      };
    }
  }
  export const ClientFactory = {
    ..._296,
    ..._297,
    ..._298
  };
}