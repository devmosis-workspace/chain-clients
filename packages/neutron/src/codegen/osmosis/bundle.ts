import * as _25 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _26 from "./tokenfactory/v1beta1/genesis";
import * as _27 from "./tokenfactory/v1beta1/params";
import * as _28 from "./tokenfactory/v1beta1/query";
import * as _29 from "./tokenfactory/v1beta1/tx";
import * as _186 from "./tokenfactory/v1beta1/tx.amino";
import * as _187 from "./tokenfactory/v1beta1/tx.registry";
import * as _188 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _189 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _259 from "./rpc.query";
import * as _260 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._186,
      ..._187,
      ..._188,
      ..._189
    };
  }
  export const ClientFactory = {
    ..._259,
    ..._260
  };
}