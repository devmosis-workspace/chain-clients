import * as _147 from "./applications/transfer/v1/genesis";
import * as _148 from "./applications/transfer/v1/query";
import * as _149 from "./applications/transfer/v1/transfer";
import * as _150 from "./applications/transfer/v1/tx";
import * as _151 from "./applications/transfer/v2/packet";
import * as _152 from "./core/channel/v1/channel";
import * as _153 from "./core/channel/v1/genesis";
import * as _154 from "./core/channel/v1/query";
import * as _155 from "./core/channel/v1/tx";
import * as _156 from "./core/client/v1/client";
import * as _157 from "./core/client/v1/genesis";
import * as _158 from "./core/client/v1/query";
import * as _159 from "./core/client/v1/tx";
import * as _160 from "./core/commitment/v1/commitment";
import * as _161 from "./core/connection/v1/connection";
import * as _162 from "./core/connection/v1/genesis";
import * as _163 from "./core/connection/v1/query";
import * as _164 from "./core/connection/v1/tx";
import * as _165 from "./core/types/v1/genesis";
import * as _166 from "./lightclients/localhost/v1/localhost";
import * as _167 from "./lightclients/solomachine/v1/solomachine";
import * as _168 from "./lightclients/solomachine/v2/solomachine";
import * as _169 from "./lightclients/tendermint/v1/tendermint";
import * as _247 from "./applications/transfer/v1/tx.amino";
import * as _248 from "./core/channel/v1/tx.amino";
import * as _249 from "./core/client/v1/tx.amino";
import * as _250 from "./core/connection/v1/tx.amino";
import * as _251 from "./applications/transfer/v1/tx.registry";
import * as _252 from "./core/channel/v1/tx.registry";
import * as _253 from "./core/client/v1/tx.registry";
import * as _254 from "./core/connection/v1/tx.registry";
import * as _255 from "./applications/transfer/v1/query.lcd";
import * as _256 from "./core/channel/v1/query.lcd";
import * as _257 from "./core/client/v1/query.lcd";
import * as _258 from "./core/connection/v1/query.lcd";
import * as _259 from "./applications/transfer/v1/query.rpc.Query";
import * as _260 from "./core/channel/v1/query.rpc.Query";
import * as _261 from "./core/client/v1/query.rpc.Query";
import * as _262 from "./core/connection/v1/query.rpc.Query";
import * as _263 from "./applications/transfer/v1/tx.rpc.msg";
import * as _264 from "./core/channel/v1/tx.rpc.msg";
import * as _265 from "./core/client/v1/tx.rpc.msg";
import * as _266 from "./core/connection/v1/tx.rpc.msg";
import * as _273 from "./lcd";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._247,
        ..._251,
        ..._255,
        ..._259,
        ..._263
      };
      export const v2 = {
        ..._151
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._248,
        ..._252,
        ..._256,
        ..._260,
        ..._264
      };
    }
    export namespace client {
      export const v1 = {
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._249,
        ..._253,
        ..._257,
        ..._261,
        ..._265
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._160
      };
    }
    export namespace connection {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._250,
        ..._254,
        ..._258,
        ..._262,
        ..._266
      };
    }
    export namespace types {
      export const v1 = {
        ..._165
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._166
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._167
      };
      export const v2 = {
        ..._168
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._169
      };
    }
  }
  export const ClientFactory = {
    ..._273,
    ..._274,
    ..._275
  };
}