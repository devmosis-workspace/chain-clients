import * as _44 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _45 from "./tokenfactory/v1beta1/genesis";
import * as _46 from "./tokenfactory/v1beta1/params";
import * as _47 from "./tokenfactory/v1beta1/query";
import * as _48 from "./tokenfactory/v1beta1/tx";
import * as _274 from "./tokenfactory/v1beta1/tx.amino";
import * as _275 from "./tokenfactory/v1beta1/tx.registry";
import * as _276 from "./tokenfactory/v1beta1/query.lcd";
import * as _277 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _278 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _406 from "./lcd";
import * as _407 from "./rpc.query";
import * as _408 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278
    };
  }
  export const ClientFactory = {
    ..._406,
    ..._407,
    ..._408
  };
}