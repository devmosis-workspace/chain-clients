import * as _150 from "./applications/transfer/v1/genesis";
import * as _151 from "./applications/transfer/v1/query";
import * as _152 from "./applications/transfer/v1/transfer";
import * as _153 from "./applications/transfer/v1/tx";
import * as _154 from "./applications/transfer/v2/packet";
import * as _155 from "./core/channel/v1/channel";
import * as _156 from "./core/channel/v1/genesis";
import * as _157 from "./core/channel/v1/query";
import * as _158 from "./core/channel/v1/tx";
import * as _159 from "./core/client/v1/client";
import * as _160 from "./core/client/v1/genesis";
import * as _161 from "./core/client/v1/query";
import * as _162 from "./core/client/v1/tx";
import * as _163 from "./core/commitment/v1/commitment";
import * as _164 from "./core/connection/v1/connection";
import * as _165 from "./core/connection/v1/genesis";
import * as _166 from "./core/connection/v1/query";
import * as _167 from "./core/connection/v1/tx";
import * as _168 from "./core/types/v1/genesis";
import * as _169 from "./lightclients/localhost/v1/localhost";
import * as _170 from "./lightclients/solomachine/v1/solomachine";
import * as _171 from "./lightclients/solomachine/v2/solomachine";
import * as _172 from "./lightclients/tendermint/v1/tendermint";
import * as _250 from "./applications/transfer/v1/tx.amino";
import * as _251 from "./core/channel/v1/tx.amino";
import * as _252 from "./core/client/v1/tx.amino";
import * as _253 from "./core/connection/v1/tx.amino";
import * as _254 from "./applications/transfer/v1/tx.registry";
import * as _255 from "./core/channel/v1/tx.registry";
import * as _256 from "./core/client/v1/tx.registry";
import * as _257 from "./core/connection/v1/tx.registry";
import * as _258 from "./applications/transfer/v1/query.lcd";
import * as _259 from "./core/channel/v1/query.lcd";
import * as _260 from "./core/client/v1/query.lcd";
import * as _261 from "./core/connection/v1/query.lcd";
import * as _262 from "./applications/transfer/v1/query.rpc.Query";
import * as _263 from "./core/channel/v1/query.rpc.Query";
import * as _264 from "./core/client/v1/query.rpc.Query";
import * as _265 from "./core/connection/v1/query.rpc.Query";
import * as _266 from "./applications/transfer/v1/tx.rpc.msg";
import * as _267 from "./core/channel/v1/tx.rpc.msg";
import * as _268 from "./core/client/v1/tx.rpc.msg";
import * as _269 from "./core/connection/v1/tx.rpc.msg";
import * as _276 from "./lcd";
import * as _277 from "./rpc.query";
import * as _278 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._250,
        ..._254,
        ..._258,
        ..._262,
        ..._266
      };
      export const v2 = {
        ..._154
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._251,
        ..._255,
        ..._259,
        ..._263,
        ..._267
      };
    }
    export namespace client {
      export const v1 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._252,
        ..._256,
        ..._260,
        ..._264,
        ..._268
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._163
      };
    }
    export namespace connection {
      export const v1 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._253,
        ..._257,
        ..._261,
        ..._265,
        ..._269
      };
    }
    export namespace types {
      export const v1 = {
        ..._168
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._169
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._170
      };
      export const v2 = {
        ..._171
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._172
      };
    }
  }
  export const ClientFactory = {
    ..._276,
    ..._277,
    ..._278
  };
}