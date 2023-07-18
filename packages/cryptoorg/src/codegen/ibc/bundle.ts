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
import * as _266 from "./applications/fee/v1/tx.amino";
import * as _267 from "./applications/transfer/v1/tx.amino";
import * as _268 from "./core/channel/v1/tx.amino";
import * as _269 from "./core/client/v1/tx.amino";
import * as _270 from "./core/connection/v1/tx.amino";
import * as _271 from "./applications/fee/v1/tx.registry";
import * as _272 from "./applications/transfer/v1/tx.registry";
import * as _273 from "./core/channel/v1/tx.registry";
import * as _274 from "./core/client/v1/tx.registry";
import * as _275 from "./core/connection/v1/tx.registry";
import * as _276 from "./applications/fee/v1/query.lcd";
import * as _277 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _278 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _279 from "./applications/transfer/v1/query.lcd";
import * as _280 from "./core/channel/v1/query.lcd";
import * as _281 from "./core/client/v1/query.lcd";
import * as _282 from "./core/connection/v1/query.lcd";
import * as _283 from "./applications/fee/v1/query.rpc.Query";
import * as _284 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _285 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _286 from "./applications/transfer/v1/query.rpc.Query";
import * as _287 from "./core/channel/v1/query.rpc.Query";
import * as _288 from "./core/client/v1/query.rpc.Query";
import * as _289 from "./core/connection/v1/query.rpc.Query";
import * as _290 from "./applications/fee/v1/tx.rpc.msg";
import * as _291 from "./applications/transfer/v1/tx.rpc.msg";
import * as _292 from "./core/channel/v1/tx.rpc.msg";
import * as _293 from "./core/client/v1/tx.rpc.msg";
import * as _294 from "./core/connection/v1/tx.rpc.msg";
import * as _301 from "./lcd";
import * as _302 from "./rpc.query";
import * as _303 from "./rpc.tx";
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
        ..._266,
        ..._271,
        ..._276,
        ..._283,
        ..._290
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._131,
          ..._132,
          ..._277,
          ..._284
        };
      }
      export namespace host {
        export const v1 = {
          ..._133,
          ..._134,
          ..._278,
          ..._285
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
        ..._267,
        ..._272,
        ..._279,
        ..._286,
        ..._291
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
        ..._268,
        ..._273,
        ..._280,
        ..._287,
        ..._292
      };
    }
    export namespace client {
      export const v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._269,
        ..._274,
        ..._281,
        ..._288,
        ..._293
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
        ..._270,
        ..._275,
        ..._282,
        ..._289,
        ..._294
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
    ..._301,
    ..._302,
    ..._303
  };
}