import * as _96 from "./applications/fee/v1/ack";
import * as _97 from "./applications/fee/v1/fee";
import * as _98 from "./applications/fee/v1/genesis";
import * as _99 from "./applications/fee/v1/metadata";
import * as _100 from "./applications/fee/v1/query";
import * as _101 from "./applications/fee/v1/tx";
import * as _102 from "./applications/interchain_accounts/controller/v1/controller";
import * as _103 from "./applications/interchain_accounts/controller/v1/query";
import * as _104 from "./applications/interchain_accounts/host/v1/host";
import * as _105 from "./applications/interchain_accounts/host/v1/query";
import * as _106 from "./applications/interchain_accounts/v1/account";
import * as _107 from "./applications/interchain_accounts/v1/genesis";
import * as _108 from "./applications/interchain_accounts/v1/metadata";
import * as _109 from "./applications/interchain_accounts/v1/packet";
import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./core/types/v1/genesis";
import * as _129 from "./lightclients/localhost/v1/localhost";
import * as _130 from "./lightclients/solomachine/v1/solomachine";
import * as _131 from "./lightclients/solomachine/v2/solomachine";
import * as _132 from "./lightclients/tendermint/v1/tendermint";
import * as _217 from "./applications/fee/v1/tx.amino";
import * as _218 from "./applications/transfer/v1/tx.amino";
import * as _219 from "./core/channel/v1/tx.amino";
import * as _220 from "./core/client/v1/tx.amino";
import * as _221 from "./core/connection/v1/tx.amino";
import * as _222 from "./applications/fee/v1/tx.registry";
import * as _223 from "./applications/transfer/v1/tx.registry";
import * as _224 from "./core/channel/v1/tx.registry";
import * as _225 from "./core/client/v1/tx.registry";
import * as _226 from "./core/connection/v1/tx.registry";
import * as _227 from "./applications/fee/v1/query.rpc.Query";
import * as _228 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _229 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _230 from "./applications/transfer/v1/query.rpc.Query";
import * as _231 from "./core/channel/v1/query.rpc.Query";
import * as _232 from "./core/client/v1/query.rpc.Query";
import * as _233 from "./core/connection/v1/query.rpc.Query";
import * as _234 from "./applications/fee/v1/tx.rpc.msg";
import * as _235 from "./applications/transfer/v1/tx.rpc.msg";
import * as _236 from "./core/channel/v1/tx.rpc.msg";
import * as _237 from "./core/client/v1/tx.rpc.msg";
import * as _238 from "./core/connection/v1/tx.rpc.msg";
import * as _244 from "./rpc.query";
import * as _245 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._96,
        ..._97,
        ..._98,
        ..._99,
        ..._100,
        ..._101,
        ..._217,
        ..._222,
        ..._227,
        ..._234
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._102,
          ..._103,
          ..._228
        };
      }
      export namespace host {
        export const v1 = {
          ..._104,
          ..._105,
          ..._229
        };
      }
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._218,
        ..._223,
        ..._230,
        ..._235
      };
      export const v2 = {
        ..._114
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._219,
        ..._224,
        ..._231,
        ..._236
      };
    }
    export namespace client {
      export const v1 = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._220,
        ..._225,
        ..._232,
        ..._237
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._123
      };
    }
    export namespace connection {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._221,
        ..._226,
        ..._233,
        ..._238
      };
    }
    export namespace types {
      export const v1 = {
        ..._128
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._129
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._130
      };
      export const v2 = {
        ..._131
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._132
      };
    }
  }
  export const ClientFactory = {
    ..._244,
    ..._245
  };
}