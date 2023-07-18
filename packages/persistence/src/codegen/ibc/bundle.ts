import * as _89 from "./applications/interchain_accounts/controller/v1/controller";
import * as _90 from "./applications/interchain_accounts/controller/v1/query";
import * as _91 from "./applications/interchain_accounts/host/v1/host";
import * as _92 from "./applications/interchain_accounts/host/v1/query";
import * as _93 from "./applications/interchain_accounts/v1/account";
import * as _94 from "./applications/interchain_accounts/v1/genesis";
import * as _95 from "./applications/interchain_accounts/v1/metadata";
import * as _96 from "./applications/interchain_accounts/v1/packet";
import * as _97 from "./applications/transfer/v1/genesis";
import * as _98 from "./applications/transfer/v1/query";
import * as _99 from "./applications/transfer/v1/transfer";
import * as _100 from "./applications/transfer/v1/tx";
import * as _101 from "./applications/transfer/v2/packet";
import * as _102 from "./core/channel/v1/channel";
import * as _103 from "./core/channel/v1/genesis";
import * as _104 from "./core/channel/v1/query";
import * as _105 from "./core/channel/v1/tx";
import * as _106 from "./core/client/v1/client";
import * as _107 from "./core/client/v1/genesis";
import * as _108 from "./core/client/v1/query";
import * as _109 from "./core/client/v1/tx";
import * as _110 from "./core/commitment/v1/commitment";
import * as _111 from "./core/connection/v1/connection";
import * as _112 from "./core/connection/v1/genesis";
import * as _113 from "./core/connection/v1/query";
import * as _114 from "./core/connection/v1/tx";
import * as _115 from "./core/types/v1/genesis";
import * as _116 from "./lightclients/localhost/v1/localhost";
import * as _117 from "./lightclients/solomachine/v1/solomachine";
import * as _118 from "./lightclients/solomachine/v2/solomachine";
import * as _119 from "./lightclients/tendermint/v1/tendermint";
import * as _198 from "./applications/transfer/v1/tx.amino";
import * as _199 from "./core/channel/v1/tx.amino";
import * as _200 from "./core/client/v1/tx.amino";
import * as _201 from "./core/connection/v1/tx.amino";
import * as _202 from "./applications/transfer/v1/tx.registry";
import * as _203 from "./core/channel/v1/tx.registry";
import * as _204 from "./core/client/v1/tx.registry";
import * as _205 from "./core/connection/v1/tx.registry";
import * as _206 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _207 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _208 from "./applications/transfer/v1/query.lcd";
import * as _209 from "./core/channel/v1/query.lcd";
import * as _210 from "./core/client/v1/query.lcd";
import * as _211 from "./core/connection/v1/query.lcd";
import * as _212 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _213 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _214 from "./applications/transfer/v1/query.rpc.Query";
import * as _215 from "./core/channel/v1/query.rpc.Query";
import * as _216 from "./core/client/v1/query.rpc.Query";
import * as _217 from "./core/connection/v1/query.rpc.Query";
import * as _218 from "./applications/transfer/v1/tx.rpc.msg";
import * as _219 from "./core/channel/v1/tx.rpc.msg";
import * as _220 from "./core/client/v1/tx.rpc.msg";
import * as _221 from "./core/connection/v1/tx.rpc.msg";
import * as _228 from "./lcd";
import * as _229 from "./rpc.query";
import * as _230 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._89,
          ..._90,
          ..._206,
          ..._212
        };
      }
      export namespace host {
        export const v1 = {
          ..._91,
          ..._92,
          ..._207,
          ..._213
        };
      }
      export const v1 = {
        ..._93,
        ..._94,
        ..._95,
        ..._96
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._97,
        ..._98,
        ..._99,
        ..._100,
        ..._198,
        ..._202,
        ..._208,
        ..._214,
        ..._218
      };
      export const v2 = {
        ..._101
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._199,
        ..._203,
        ..._209,
        ..._215,
        ..._219
      };
    }
    export namespace client {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._200,
        ..._204,
        ..._210,
        ..._216,
        ..._220
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._110
      };
    }
    export namespace connection {
      export const v1 = {
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._201,
        ..._205,
        ..._211,
        ..._217,
        ..._221
      };
    }
    export namespace types {
      export const v1 = {
        ..._115
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._116
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._117
      };
      export const v2 = {
        ..._118
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._119
      };
    }
  }
  export const ClientFactory = {
    ..._228,
    ..._229,
    ..._230
  };
}