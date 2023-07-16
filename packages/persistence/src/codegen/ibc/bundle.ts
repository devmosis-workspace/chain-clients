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
import * as _181 from "./applications/transfer/v1/tx.amino";
import * as _182 from "./core/channel/v1/tx.amino";
import * as _183 from "./core/client/v1/tx.amino";
import * as _184 from "./core/connection/v1/tx.amino";
import * as _185 from "./applications/transfer/v1/tx.registry";
import * as _186 from "./core/channel/v1/tx.registry";
import * as _187 from "./core/client/v1/tx.registry";
import * as _188 from "./core/connection/v1/tx.registry";
import * as _189 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _190 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _191 from "./applications/transfer/v1/query.rpc.Query";
import * as _192 from "./core/channel/v1/query.rpc.Query";
import * as _193 from "./core/client/v1/query.rpc.Query";
import * as _194 from "./core/connection/v1/query.rpc.Query";
import * as _195 from "./applications/transfer/v1/tx.rpc.msg";
import * as _196 from "./core/channel/v1/tx.rpc.msg";
import * as _197 from "./core/client/v1/tx.rpc.msg";
import * as _198 from "./core/connection/v1/tx.rpc.msg";
import * as _203 from "./rpc.query";
import * as _204 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._89,
          ..._90,
          ..._189
        };
      }
      export namespace host {
        export const v1 = {
          ..._91,
          ..._92,
          ..._190
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
        ..._181,
        ..._185,
        ..._191,
        ..._195
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
        ..._182,
        ..._186,
        ..._192,
        ..._196
      };
    }
    export namespace client {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._183,
        ..._187,
        ..._193,
        ..._197
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
        ..._184,
        ..._188,
        ..._194,
        ..._198
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
    ..._203,
    ..._204
  };
}