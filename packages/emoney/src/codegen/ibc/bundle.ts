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
import * as _174 from "./applications/transfer/v1/tx.amino";
import * as _175 from "./core/channel/v1/tx.amino";
import * as _176 from "./core/client/v1/tx.amino";
import * as _177 from "./core/connection/v1/tx.amino";
import * as _178 from "./applications/transfer/v1/tx.registry";
import * as _179 from "./core/channel/v1/tx.registry";
import * as _180 from "./core/client/v1/tx.registry";
import * as _181 from "./core/connection/v1/tx.registry";
import * as _182 from "./applications/transfer/v1/query.rpc.Query";
import * as _183 from "./core/channel/v1/query.rpc.Query";
import * as _184 from "./core/client/v1/query.rpc.Query";
import * as _185 from "./core/connection/v1/query.rpc.Query";
import * as _186 from "./applications/transfer/v1/tx.rpc.msg";
import * as _187 from "./core/channel/v1/tx.rpc.msg";
import * as _188 from "./core/client/v1/tx.rpc.msg";
import * as _189 from "./core/connection/v1/tx.rpc.msg";
import * as _194 from "./rpc.query";
import * as _195 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._174,
        ..._178,
        ..._182,
        ..._186
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
        ..._175,
        ..._179,
        ..._183,
        ..._187
      };
    }
    export namespace client {
      export const v1 = {
        ..._95,
        ..._96,
        ..._97,
        ..._98,
        ..._176,
        ..._180,
        ..._184,
        ..._188
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
        ..._177,
        ..._181,
        ..._185,
        ..._189
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
    ..._194,
    ..._195
  };
}