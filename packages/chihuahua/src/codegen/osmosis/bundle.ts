import * as _4 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _5 from "./tokenfactory/v1beta1/genesis";
import * as _6 from "./tokenfactory/v1beta1/params";
import * as _7 from "./tokenfactory/v1beta1/query";
import * as _8 from "./tokenfactory/v1beta1/tx";
import * as _159 from "./tokenfactory/v1beta1/tx.amino";
import * as _160 from "./tokenfactory/v1beta1/tx.registry";
import * as _161 from "./tokenfactory/v1beta1/query.lcd";
import * as _162 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _163 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _259 from "./lcd";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163
    };
  }
  export const ClientFactory = {
    ..._259,
    ..._260,
    ..._261
  };
}