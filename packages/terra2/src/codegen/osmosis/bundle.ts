import * as _131 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _132 from "./tokenfactory/v1beta1/genesis";
import * as _133 from "./tokenfactory/v1beta1/params";
import * as _134 from "./tokenfactory/v1beta1/query";
import * as _135 from "./tokenfactory/v1beta1/tx";
import * as _263 from "./tokenfactory/v1beta1/tx.amino";
import * as _264 from "./tokenfactory/v1beta1/tx.registry";
import * as _265 from "./tokenfactory/v1beta1/query.lcd";
import * as _266 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _267 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _282 from "./lcd";
import * as _283 from "./rpc.query";
import * as _284 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267
    };
  }
  export const ClientFactory = {
    ..._282,
    ..._283,
    ..._284
  };
}