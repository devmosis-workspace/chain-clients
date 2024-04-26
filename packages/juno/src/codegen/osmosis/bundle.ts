import * as _25 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _26 from "./tokenfactory/v1beta1/genesis";
import * as _27 from "./tokenfactory/v1beta1/params";
import * as _28 from "./tokenfactory/v1beta1/query";
import * as _29 from "./tokenfactory/v1beta1/tx";
import * as _217 from "./tokenfactory/v1beta1/tx.amino";
import * as _218 from "./tokenfactory/v1beta1/tx.registry";
import * as _219 from "./tokenfactory/v1beta1/query.lcd";
import * as _220 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _221 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _325 from "./lcd";
import * as _326 from "./rpc.query";
import * as _327 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221
    };
  }
  export const ClientFactory = {
    ..._325,
    ..._326,
    ..._327
  };
}