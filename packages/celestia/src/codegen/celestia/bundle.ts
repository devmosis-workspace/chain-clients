import * as _107 from "./blob/v1/event";
import * as _108 from "./blob/v1/genesis";
import * as _109 from "./blob/v1/params";
import * as _110 from "./blob/v1/query";
import * as _111 from "./blob/v1/tx";
import * as _112 from "./da/data_availability_header";
import * as _113 from "./mint/v1/genesis";
import * as _114 from "./mint/v1/mint";
import * as _115 from "./mint/v1/query";
import * as _116 from "./qgb/v1/genesis";
import * as _117 from "./qgb/v1/query";
import * as _118 from "./qgb/v1/tx";
import * as _119 from "./qgb/v1/types";
import * as _207 from "./blob/v1/tx.amino";
import * as _208 from "./qgb/v1/tx.amino";
import * as _209 from "./blob/v1/tx.registry";
import * as _210 from "./qgb/v1/tx.registry";
import * as _211 from "./blob/v1/query.lcd";
import * as _212 from "./mint/v1/query.lcd";
import * as _213 from "./qgb/v1/query.lcd";
import * as _214 from "./blob/v1/query.rpc.Query";
import * as _215 from "./mint/v1/query.rpc.Query";
import * as _216 from "./qgb/v1/query.rpc.Query";
import * as _217 from "./blob/v1/tx.rpc.msg";
import * as _218 from "./qgb/v1/tx.rpc.msg";
import * as _222 from "./lcd";
import * as _223 from "./rpc.query";
import * as _224 from "./rpc.tx";
export namespace celestia {
  export namespace blob {
    export const v1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._207,
      ..._209,
      ..._211,
      ..._214,
      ..._217
    };
  }
  export const da = {
    ..._112
  };
  export namespace mint {
    export const v1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._212,
      ..._215
    };
  }
  export namespace qgb {
    export const v1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._208,
      ..._210,
      ..._213,
      ..._216,
      ..._218
    };
  }
  export const ClientFactory = {
    ..._222,
    ..._223,
    ..._224
  };
}