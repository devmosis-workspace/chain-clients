import * as _25 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _26 from "./tokenfactory/v1beta1/genesis";
import * as _27 from "./tokenfactory/v1beta1/params";
import * as _28 from "./tokenfactory/v1beta1/query";
import * as _29 from "./tokenfactory/v1beta1/tx";
import * as _210 from "./tokenfactory/v1beta1/tx.amino";
import * as _211 from "./tokenfactory/v1beta1/tx.registry";
import * as _212 from "./tokenfactory/v1beta1/query.lcd";
import * as _213 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _214 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _313 from "./lcd";
import * as _314 from "./rpc.query";
import * as _315 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214
    };
  }
  export const ClientFactory = {
    ..._313,
    ..._314,
    ..._315
  };
}