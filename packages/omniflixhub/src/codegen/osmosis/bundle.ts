import * as _24 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _25 from "./tokenfactory/v1beta1/genesis";
import * as _26 from "./tokenfactory/v1beta1/params";
import * as _27 from "./tokenfactory/v1beta1/query";
import * as _28 from "./tokenfactory/v1beta1/tx";
import * as _206 from "./tokenfactory/v1beta1/tx.amino";
import * as _207 from "./tokenfactory/v1beta1/tx.registry";
import * as _208 from "./tokenfactory/v1beta1/query.lcd";
import * as _209 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _210 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _311 from "./lcd";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312,
    ..._313
  };
}