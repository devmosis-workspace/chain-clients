import * as _162 from "./applications/interchain_accounts/controller/v1/controller";
import * as _163 from "./applications/interchain_accounts/controller/v1/query";
import * as _164 from "./applications/interchain_accounts/host/v1/host";
import * as _165 from "./applications/interchain_accounts/host/v1/query";
import * as _166 from "./applications/interchain_accounts/v1/account";
import * as _167 from "./applications/interchain_accounts/v1/genesis";
import * as _168 from "./applications/interchain_accounts/v1/metadata";
import * as _169 from "./applications/interchain_accounts/v1/packet";
import * as _170 from "./applications/transfer/v1/genesis";
import * as _171 from "./applications/transfer/v1/query";
import * as _172 from "./applications/transfer/v1/transfer";
import * as _173 from "./applications/transfer/v1/tx";
import * as _174 from "./applications/transfer/v2/packet";
import * as _175 from "./core/channel/v1/channel";
import * as _176 from "./core/channel/v1/genesis";
import * as _177 from "./core/channel/v1/query";
import * as _178 from "./core/channel/v1/tx";
import * as _179 from "./core/client/v1/client";
import * as _180 from "./core/client/v1/genesis";
import * as _181 from "./core/client/v1/query";
import * as _182 from "./core/client/v1/tx";
import * as _183 from "./core/commitment/v1/commitment";
import * as _184 from "./core/connection/v1/connection";
import * as _185 from "./core/connection/v1/genesis";
import * as _186 from "./core/connection/v1/query";
import * as _187 from "./core/connection/v1/tx";
import * as _188 from "./core/types/v1/genesis";
import * as _189 from "./lightclients/localhost/v1/localhost";
import * as _190 from "./lightclients/solomachine/v1/solomachine";
import * as _191 from "./lightclients/solomachine/v2/solomachine";
import * as _192 from "./lightclients/tendermint/v1/tendermint";
import * as _308 from "./applications/transfer/v1/tx.amino";
import * as _309 from "./core/channel/v1/tx.amino";
import * as _310 from "./core/client/v1/tx.amino";
import * as _311 from "./core/connection/v1/tx.amino";
import * as _312 from "./applications/transfer/v1/tx.registry";
import * as _313 from "./core/channel/v1/tx.registry";
import * as _314 from "./core/client/v1/tx.registry";
import * as _315 from "./core/connection/v1/tx.registry";
import * as _316 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _317 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _318 from "./applications/transfer/v1/query.lcd";
import * as _319 from "./core/channel/v1/query.lcd";
import * as _320 from "./core/client/v1/query.lcd";
import * as _321 from "./core/connection/v1/query.lcd";
import * as _322 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _323 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _324 from "./applications/transfer/v1/query.rpc.Query";
import * as _325 from "./core/channel/v1/query.rpc.Query";
import * as _326 from "./core/client/v1/query.rpc.Query";
import * as _327 from "./core/connection/v1/query.rpc.Query";
import * as _328 from "./applications/transfer/v1/tx.rpc.msg";
import * as _329 from "./core/channel/v1/tx.rpc.msg";
import * as _330 from "./core/client/v1/tx.rpc.msg";
import * as _331 from "./core/connection/v1/tx.rpc.msg";
import * as _341 from "./lcd";
import * as _342 from "./rpc.query";
import * as _343 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._162,
          ..._163,
          ..._316,
          ..._322
        };
      }
      export namespace host {
        export const v1 = {
          ..._164,
          ..._165,
          ..._317,
          ..._323
        };
      }
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._308,
        ..._312,
        ..._318,
        ..._324,
        ..._328
      };
      export const v2 = {
        ..._174
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._309,
        ..._313,
        ..._319,
        ..._325,
        ..._329
      };
    }
    export namespace client {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._310,
        ..._314,
        ..._320,
        ..._326,
        ..._330
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._183
      };
    }
    export namespace connection {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._311,
        ..._315,
        ..._321,
        ..._327,
        ..._331
      };
    }
    export namespace types {
      export const v1 = {
        ..._188
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._189
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._190
      };
      export const v2 = {
        ..._191
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._192
      };
    }
  }
  export const ClientFactory = {
    ..._341,
    ..._342,
    ..._343
  };
}