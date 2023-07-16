import * as _100 from "./applications/fee/v1/ack";
import * as _101 from "./applications/fee/v1/fee";
import * as _102 from "./applications/fee/v1/genesis";
import * as _103 from "./applications/fee/v1/metadata";
import * as _104 from "./applications/fee/v1/query";
import * as _105 from "./applications/fee/v1/tx";
import * as _106 from "./applications/interchain_accounts/controller/v1/controller";
import * as _107 from "./applications/interchain_accounts/controller/v1/query";
import * as _108 from "./applications/interchain_accounts/host/v1/host";
import * as _109 from "./applications/interchain_accounts/host/v1/query";
import * as _110 from "./applications/interchain_accounts/v1/account";
import * as _111 from "./applications/interchain_accounts/v1/genesis";
import * as _112 from "./applications/interchain_accounts/v1/metadata";
import * as _113 from "./applications/interchain_accounts/v1/packet";
import * as _114 from "./applications/transfer/v1/genesis";
import * as _115 from "./applications/transfer/v1/query";
import * as _116 from "./applications/transfer/v1/transfer";
import * as _117 from "./applications/transfer/v1/tx";
import * as _118 from "./applications/transfer/v2/packet";
import * as _119 from "./core/channel/v1/channel";
import * as _120 from "./core/channel/v1/genesis";
import * as _121 from "./core/channel/v1/query";
import * as _122 from "./core/channel/v1/tx";
import * as _123 from "./core/client/v1/client";
import * as _124 from "./core/client/v1/genesis";
import * as _125 from "./core/client/v1/query";
import * as _126 from "./core/client/v1/tx";
import * as _127 from "./core/commitment/v1/commitment";
import * as _128 from "./core/connection/v1/connection";
import * as _129 from "./core/connection/v1/genesis";
import * as _130 from "./core/connection/v1/query";
import * as _131 from "./core/connection/v1/tx";
import * as _132 from "./core/types/v1/genesis";
import * as _133 from "./lightclients/localhost/v1/localhost";
import * as _134 from "./lightclients/solomachine/v1/solomachine";
import * as _135 from "./lightclients/solomachine/v2/solomachine";
import * as _136 from "./lightclients/tendermint/v1/tendermint";
import * as _235 from "./applications/fee/v1/tx.amino";
import * as _236 from "./applications/transfer/v1/tx.amino";
import * as _237 from "./core/channel/v1/tx.amino";
import * as _238 from "./core/client/v1/tx.amino";
import * as _239 from "./core/connection/v1/tx.amino";
import * as _240 from "./applications/fee/v1/tx.registry";
import * as _241 from "./applications/transfer/v1/tx.registry";
import * as _242 from "./core/channel/v1/tx.registry";
import * as _243 from "./core/client/v1/tx.registry";
import * as _244 from "./core/connection/v1/tx.registry";
import * as _245 from "./applications/fee/v1/query.rpc.Query";
import * as _246 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _247 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _248 from "./applications/transfer/v1/query.rpc.Query";
import * as _249 from "./core/channel/v1/query.rpc.Query";
import * as _250 from "./core/client/v1/query.rpc.Query";
import * as _251 from "./core/connection/v1/query.rpc.Query";
import * as _252 from "./applications/fee/v1/tx.rpc.msg";
import * as _253 from "./applications/transfer/v1/tx.rpc.msg";
import * as _254 from "./core/channel/v1/tx.rpc.msg";
import * as _255 from "./core/client/v1/tx.rpc.msg";
import * as _256 from "./core/connection/v1/tx.rpc.msg";
import * as _263 from "./rpc.query";
import * as _264 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._100,
        ..._101,
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._235,
        ..._240,
        ..._245,
        ..._252
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._106,
          ..._107,
          ..._246
        };
      }
      export namespace host {
        export const v1 = {
          ..._108,
          ..._109,
          ..._247
        };
      }
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._236,
        ..._241,
        ..._248,
        ..._253
      };
      export const v2 = {
        ..._118
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._237,
        ..._242,
        ..._249,
        ..._254
      };
    }
    export namespace client {
      export const v1 = {
        ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._238,
        ..._243,
        ..._250,
        ..._255
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._127
      };
    }
    export namespace connection {
      export const v1 = {
        ..._128,
        ..._129,
        ..._130,
        ..._131,
        ..._239,
        ..._244,
        ..._251,
        ..._256
      };
    }
    export namespace types {
      export const v1 = {
        ..._132
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._133
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._134
      };
      export const v2 = {
        ..._135
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._136
      };
    }
  }
  export const ClientFactory = {
    ..._263,
    ..._264
  };
}