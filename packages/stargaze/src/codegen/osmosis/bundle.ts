import * as _0 from "./tokenfactory/v1beta1/genesis";
import * as _1 from "./tokenfactory/v1beta1/query";
import * as _2 from "./tokenfactory/v1beta1/tokenfactory";
import * as _3 from "./tokenfactory/v1beta1/tx";
import * as _125 from "./tokenfactory/v1beta1/tx.amino";
import * as _126 from "./tokenfactory/v1beta1/tx.registry";
import * as _127 from "./tokenfactory/v1beta1/query.lcd";
import * as _128 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _129 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _209 from "./lcd";
import * as _210 from "./rpc.query";
import * as _211 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129
    };
  }
  export const ClientFactory = {
    ..._209,
    ..._210,
    ..._211
  };
}