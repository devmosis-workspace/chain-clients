import * as _187 from "./applications/fee/v1/ack";
import * as _188 from "./applications/fee/v1/fee";
import * as _189 from "./applications/fee/v1/genesis";
import * as _190 from "./applications/fee/v1/metadata";
import * as _191 from "./applications/fee/v1/query";
import * as _192 from "./applications/fee/v1/tx";
import * as _193 from "./applications/interchain_accounts/controller/v1/controller";
import * as _194 from "./applications/interchain_accounts/controller/v1/query";
import * as _195 from "./applications/interchain_accounts/controller/v1/tx";
import * as _196 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _197 from "./applications/interchain_accounts/host/v1/host";
import * as _198 from "./applications/interchain_accounts/host/v1/query";
import * as _199 from "./applications/interchain_accounts/v1/account";
import * as _200 from "./applications/interchain_accounts/v1/metadata";
import * as _201 from "./applications/interchain_accounts/v1/packet";
import * as _202 from "./applications/transfer/v1/authz";
import * as _203 from "./applications/transfer/v1/genesis";
import * as _204 from "./applications/transfer/v1/query";
import * as _205 from "./applications/transfer/v1/transfer";
import * as _206 from "./applications/transfer/v1/tx";
import * as _207 from "./applications/transfer/v2/packet";
import * as _208 from "./core/channel/v1/channel";
import * as _209 from "./core/channel/v1/genesis";
import * as _210 from "./core/channel/v1/query";
import * as _211 from "./core/channel/v1/tx";
import * as _212 from "./core/client/v1/client";
import * as _213 from "./core/client/v1/genesis";
import * as _214 from "./core/client/v1/query";
import * as _215 from "./core/client/v1/tx";
import * as _216 from "./core/commitment/v1/commitment";
import * as _217 from "./core/connection/v1/connection";
import * as _218 from "./core/connection/v1/genesis";
import * as _219 from "./core/connection/v1/query";
import * as _220 from "./core/connection/v1/tx";
import * as _221 from "./core/types/v1/genesis";
import * as _222 from "./lightclients/localhost/v2/localhost";
import * as _223 from "./lightclients/solomachine/v2/solomachine";
import * as _224 from "./lightclients/solomachine/v3/solomachine";
import * as _225 from "./lightclients/tendermint/v1/tendermint";
import * as _378 from "./applications/fee/v1/tx.amino";
import * as _379 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _380 from "./applications/transfer/v1/tx.amino";
import * as _381 from "./core/channel/v1/tx.amino";
import * as _382 from "./core/client/v1/tx.amino";
import * as _383 from "./core/connection/v1/tx.amino";
import * as _384 from "./applications/fee/v1/tx.registry";
import * as _385 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _386 from "./applications/transfer/v1/tx.registry";
import * as _387 from "./core/channel/v1/tx.registry";
import * as _388 from "./core/client/v1/tx.registry";
import * as _389 from "./core/connection/v1/tx.registry";
import * as _390 from "./applications/fee/v1/query.lcd";
import * as _391 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _392 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _393 from "./applications/transfer/v1/query.lcd";
import * as _394 from "./core/channel/v1/query.lcd";
import * as _395 from "./core/client/v1/query.lcd";
import * as _396 from "./core/connection/v1/query.lcd";
import * as _397 from "./applications/fee/v1/query.rpc.Query";
import * as _398 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _399 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _400 from "./applications/transfer/v1/query.rpc.Query";
import * as _401 from "./core/channel/v1/query.rpc.Query";
import * as _402 from "./core/client/v1/query.rpc.Query";
import * as _403 from "./core/connection/v1/query.rpc.Query";
import * as _404 from "./applications/fee/v1/tx.rpc.msg";
import * as _405 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _406 from "./applications/transfer/v1/tx.rpc.msg";
import * as _407 from "./core/channel/v1/tx.rpc.msg";
import * as _408 from "./core/client/v1/tx.rpc.msg";
import * as _409 from "./core/connection/v1/tx.rpc.msg";
import * as _424 from "./lcd";
import * as _425 from "./rpc.query";
import * as _426 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._187,
        ..._188,
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._378,
        ..._384,
        ..._390,
        ..._397,
        ..._404
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._193,
          ..._194,
          ..._195,
          ..._379,
          ..._385,
          ..._391,
          ..._398,
          ..._405
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._196
        };
      }
      export namespace host {
        export const v1 = {
          ..._197,
          ..._198,
          ..._392,
          ..._399
        };
      }
      export const v1 = {
        ..._199,
        ..._200,
        ..._201
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._202,
        ..._203,
        ..._204,
        ..._205,
        ..._206,
        ..._380,
        ..._386,
        ..._393,
        ..._400,
        ..._406
      };
      export const v2 = {
        ..._207
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._208,
        ..._209,
        ..._210,
        ..._211,
        ..._381,
        ..._387,
        ..._394,
        ..._401,
        ..._407
      };
    }
    export namespace client {
      export const v1 = {
        ..._212,
        ..._213,
        ..._214,
        ..._215,
        ..._382,
        ..._388,
        ..._395,
        ..._402,
        ..._408
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._216
      };
    }
    export namespace connection {
      export const v1 = {
        ..._217,
        ..._218,
        ..._219,
        ..._220,
        ..._383,
        ..._389,
        ..._396,
        ..._403,
        ..._409
      };
    }
    export namespace types {
      export const v1 = {
        ..._221
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._222
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._223
      };
      export const v3 = {
        ..._224
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._225
      };
    }
  }
  export const ClientFactory = {
    ..._424,
    ..._425,
    ..._426
  };
}