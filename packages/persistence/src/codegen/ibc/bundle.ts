import * as _167 from "./applications/interchain_accounts/controller/v1/controller";
import * as _168 from "./applications/interchain_accounts/controller/v1/query";
import * as _169 from "./applications/interchain_accounts/host/v1/host";
import * as _170 from "./applications/interchain_accounts/host/v1/query";
import * as _171 from "./applications/interchain_accounts/v1/account";
import * as _172 from "./applications/interchain_accounts/v1/genesis";
import * as _173 from "./applications/interchain_accounts/v1/metadata";
import * as _174 from "./applications/interchain_accounts/v1/packet";
import * as _175 from "./applications/transfer/v1/genesis";
import * as _176 from "./applications/transfer/v1/query";
import * as _177 from "./applications/transfer/v1/transfer";
import * as _178 from "./applications/transfer/v1/tx";
import * as _179 from "./applications/transfer/v2/packet";
import * as _180 from "./core/channel/v1/channel";
import * as _181 from "./core/channel/v1/genesis";
import * as _182 from "./core/channel/v1/query";
import * as _183 from "./core/channel/v1/tx";
import * as _184 from "./core/client/v1/client";
import * as _185 from "./core/client/v1/genesis";
import * as _186 from "./core/client/v1/query";
import * as _187 from "./core/client/v1/tx";
import * as _188 from "./core/commitment/v1/commitment";
import * as _189 from "./core/connection/v1/connection";
import * as _190 from "./core/connection/v1/genesis";
import * as _191 from "./core/connection/v1/query";
import * as _192 from "./core/connection/v1/tx";
import * as _193 from "./core/types/v1/genesis";
import * as _194 from "./lightclients/localhost/v1/localhost";
import * as _195 from "./lightclients/solomachine/v1/solomachine";
import * as _196 from "./lightclients/solomachine/v2/solomachine";
import * as _197 from "./lightclients/tendermint/v1/tendermint";
import * as _307 from "./applications/transfer/v1/tx.amino";
import * as _308 from "./core/channel/v1/tx.amino";
import * as _309 from "./core/client/v1/tx.amino";
import * as _310 from "./core/connection/v1/tx.amino";
import * as _311 from "./applications/transfer/v1/tx.registry";
import * as _312 from "./core/channel/v1/tx.registry";
import * as _313 from "./core/client/v1/tx.registry";
import * as _314 from "./core/connection/v1/tx.registry";
import * as _315 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _316 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _317 from "./applications/transfer/v1/query.lcd";
import * as _318 from "./core/channel/v1/query.lcd";
import * as _319 from "./core/client/v1/query.lcd";
import * as _320 from "./core/connection/v1/query.lcd";
import * as _321 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _322 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _323 from "./applications/transfer/v1/query.rpc.Query";
import * as _324 from "./core/channel/v1/query.rpc.Query";
import * as _325 from "./core/client/v1/query.rpc.Query";
import * as _326 from "./core/connection/v1/query.rpc.Query";
import * as _327 from "./applications/transfer/v1/tx.rpc.msg";
import * as _328 from "./core/channel/v1/tx.rpc.msg";
import * as _329 from "./core/client/v1/tx.rpc.msg";
import * as _330 from "./core/connection/v1/tx.rpc.msg";
import * as _340 from "./lcd";
import * as _341 from "./rpc.query";
import * as _342 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._167,
          ..._168,
          ..._315,
          ..._321
        };
      }
      export namespace host {
        export const v1 = {
          ..._169,
          ..._170,
          ..._316,
          ..._322
        };
      }
      export const v1 = {
        ..._171,
        ..._172,
        ..._173,
        ..._174
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._307,
        ..._311,
        ..._317,
        ..._323,
        ..._327
      };
      export const v2 = {
        ..._179
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._308,
        ..._312,
        ..._318,
        ..._324,
        ..._328
      };
    }
    export namespace client {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._309,
        ..._313,
        ..._319,
        ..._325,
        ..._329
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._188
      };
    }
    export namespace connection {
      export const v1 = {
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._310,
        ..._314,
        ..._320,
        ..._326,
        ..._330
      };
    }
    export namespace types {
      export const v1 = {
        ..._193
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._194
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._195
      };
      export const v2 = {
        ..._196
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._197
      };
    }
  }
  export const ClientFactory = {
    ..._340,
    ..._341,
    ..._342
  };
}