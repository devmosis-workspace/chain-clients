import * as _44 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _45 from "./tokenfactory/v1beta1/genesis";
import * as _46 from "./tokenfactory/v1beta1/params";
import * as _47 from "./tokenfactory/v1beta1/query";
import * as _48 from "./tokenfactory/v1beta1/tx";
import * as _281 from "./tokenfactory/v1beta1/tx.amino";
import * as _282 from "./tokenfactory/v1beta1/tx.registry";
import * as _283 from "./tokenfactory/v1beta1/query.lcd";
import * as _284 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _285 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _418 from "./lcd";
import * as _419 from "./rpc.query";
import * as _420 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285
    };
  }
  export const ClientFactory = {
    ..._418,
    ..._419,
    ..._420
  };
}