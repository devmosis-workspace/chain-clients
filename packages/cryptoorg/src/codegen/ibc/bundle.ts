import * as _125 from "./applications/fee/v1/ack";
import * as _126 from "./applications/fee/v1/fee";
import * as _127 from "./applications/fee/v1/genesis";
import * as _128 from "./applications/fee/v1/metadata";
import * as _129 from "./applications/fee/v1/query";
import * as _130 from "./applications/fee/v1/tx";
import * as _131 from "./applications/interchain_accounts/controller/v1/controller";
import * as _132 from "./applications/interchain_accounts/controller/v1/query";
import * as _133 from "./applications/interchain_accounts/host/v1/host";
import * as _134 from "./applications/interchain_accounts/host/v1/query";
import * as _135 from "./applications/interchain_accounts/v1/account";
import * as _136 from "./applications/interchain_accounts/v1/genesis";
import * as _137 from "./applications/interchain_accounts/v1/metadata";
import * as _138 from "./applications/interchain_accounts/v1/packet";
import * as _139 from "./applications/transfer/v1/genesis";
import * as _140 from "./applications/transfer/v1/query";
import * as _141 from "./applications/transfer/v1/transfer";
import * as _142 from "./applications/transfer/v1/tx";
import * as _143 from "./applications/transfer/v2/packet";
import * as _144 from "./core/channel/v1/channel";
import * as _145 from "./core/channel/v1/genesis";
import * as _146 from "./core/channel/v1/query";
import * as _147 from "./core/channel/v1/tx";
import * as _148 from "./core/client/v1/client";
import * as _149 from "./core/client/v1/genesis";
import * as _150 from "./core/client/v1/query";
import * as _151 from "./core/client/v1/tx";
import * as _152 from "./core/commitment/v1/commitment";
import * as _153 from "./core/connection/v1/connection";
import * as _154 from "./core/connection/v1/genesis";
import * as _155 from "./core/connection/v1/query";
import * as _156 from "./core/connection/v1/tx";
import * as _157 from "./core/types/v1/genesis";
import * as _158 from "./lightclients/localhost/v1/localhost";
import * as _159 from "./lightclients/solomachine/v1/solomachine";
import * as _160 from "./lightclients/solomachine/v2/solomachine";
import * as _161 from "./lightclients/tendermint/v1/tendermint";
import * as _244 from "./applications/fee/v1/tx.amino";
import * as _245 from "./applications/transfer/v1/tx.amino";
import * as _246 from "./core/channel/v1/tx.amino";
import * as _247 from "./core/client/v1/tx.amino";
import * as _248 from "./core/connection/v1/tx.amino";
import * as _249 from "./applications/fee/v1/tx.registry";
import * as _250 from "./applications/transfer/v1/tx.registry";
import * as _251 from "./core/channel/v1/tx.registry";
import * as _252 from "./core/client/v1/tx.registry";
import * as _253 from "./core/connection/v1/tx.registry";
import * as _254 from "./applications/fee/v1/query.rpc.Query";
import * as _255 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _256 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _257 from "./applications/transfer/v1/query.rpc.Query";
import * as _258 from "./core/channel/v1/query.rpc.Query";
import * as _259 from "./core/client/v1/query.rpc.Query";
import * as _260 from "./core/connection/v1/query.rpc.Query";
import * as _261 from "./applications/fee/v1/tx.rpc.msg";
import * as _262 from "./applications/transfer/v1/tx.rpc.msg";
import * as _263 from "./core/channel/v1/tx.rpc.msg";
import * as _264 from "./core/client/v1/tx.rpc.msg";
import * as _265 from "./core/connection/v1/tx.rpc.msg";
import * as _270 from "./rpc.query";
import * as _271 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._244,
        ..._249,
        ..._254,
        ..._261
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._131,
          ..._132,
          ..._255
        };
      }
      export namespace host {
        export const v1 = {
          ..._133,
          ..._134,
          ..._256
        };
      }
      export const v1 = {
        ..._135,
        ..._136,
        ..._137,
        ..._138
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._245,
        ..._250,
        ..._257,
        ..._262
      };
      export const v2 = {
        ..._143
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._246,
        ..._251,
        ..._258,
        ..._263
      };
    }
    export namespace client {
      export const v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._247,
        ..._252,
        ..._259,
        ..._264
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._152
      };
    }
    export namespace connection {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._248,
        ..._253,
        ..._260,
        ..._265
      };
    }
    export namespace types {
      export const v1 = {
        ..._157
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._158
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._159
      };
      export const v2 = {
        ..._160
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._161
      };
    }
  }
  export const ClientFactory = {
    ..._270,
    ..._271
  };
}