import * as _0 from "./blob/v1/event";
import * as _1 from "./blob/v1/genesis";
import * as _2 from "./blob/v1/params";
import * as _3 from "./blob/v1/query";
import * as _4 from "./blob/v1/tx";
import * as _5 from "./da/data_availability_header";
import * as _6 from "./mint/v1/genesis";
import * as _7 from "./mint/v1/mint";
import * as _8 from "./mint/v1/query";
import * as _9 from "./qgb/v1/genesis";
import * as _10 from "./qgb/v1/query";
import * as _11 from "./qgb/v1/tx";
import * as _12 from "./qgb/v1/types";
import * as _128 from "./blob/v1/tx.amino";
import * as _129 from "./qgb/v1/tx.amino";
import * as _130 from "./blob/v1/tx.registry";
import * as _131 from "./qgb/v1/tx.registry";
import * as _132 from "./blob/v1/query.lcd";
import * as _133 from "./mint/v1/query.lcd";
import * as _134 from "./qgb/v1/query.lcd";
import * as _135 from "./blob/v1/query.rpc.Query";
import * as _136 from "./mint/v1/query.rpc.Query";
import * as _137 from "./qgb/v1/query.rpc.Query";
import * as _138 from "./blob/v1/tx.rpc.msg";
import * as _139 from "./qgb/v1/tx.rpc.msg";
import * as _219 from "./lcd";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace celestia {
  export namespace blob {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._128,
      ..._130,
      ..._132,
      ..._135,
      ..._138
    };
  }
  export const da = {
    ..._5
  };
  export namespace mint {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._133,
      ..._136
    };
  }
  export namespace qgb {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._129,
      ..._131,
      ..._134,
      ..._137,
      ..._139
    };
  }
  export const ClientFactory = {
    ..._219,
    ..._220,
    ..._221
  };
}