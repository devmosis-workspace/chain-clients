import * as _25 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _26 from "./tokenfactory/v1beta1/genesis";
import * as _27 from "./tokenfactory/v1beta1/params";
import * as _28 from "./tokenfactory/v1beta1/query";
import * as _29 from "./tokenfactory/v1beta1/tx";
import * as _192 from "./tokenfactory/v1beta1/tx.amino";
import * as _193 from "./tokenfactory/v1beta1/tx.registry";
import * as _194 from "./tokenfactory/v1beta1/query.lcd";
import * as _195 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _196 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _289 from "./lcd";
import * as _290 from "./rpc.query";
import * as _291 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196
    };
  }
  export const ClientFactory = {
    ..._289,
    ..._290,
    ..._291
  };
}