import * as _126 from "./feeshare/v1/events";
import * as _127 from "./feeshare/v1/feeshare";
import * as _128 from "./feeshare/v1/genesis";
import * as _129 from "./feeshare/v1/query";
import * as _130 from "./feeshare/v1/tx";
import * as _258 from "./feeshare/v1/tx.amino";
import * as _259 from "./feeshare/v1/tx.registry";
import * as _260 from "./feeshare/v1/query.lcd";
import * as _261 from "./feeshare/v1/query.rpc.Query";
import * as _262 from "./feeshare/v1/tx.rpc.msg";
import * as _279 from "./lcd";
import * as _280 from "./rpc.query";
import * as _281 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._262
    };
  }
  export const ClientFactory = {
    ..._279,
    ..._280,
    ..._281
  };
}