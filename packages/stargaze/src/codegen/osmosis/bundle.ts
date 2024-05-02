import * as _0 from "./tokenfactory/v1beta1/genesis";
import * as _1 from "./tokenfactory/v1beta1/query";
import * as _2 from "./tokenfactory/v1beta1/tokenfactory";
import * as _3 from "./tokenfactory/v1beta1/tx";
import * as _174 from "./tokenfactory/v1beta1/tx.amino";
import * as _175 from "./tokenfactory/v1beta1/tx.registry";
import * as _176 from "./tokenfactory/v1beta1/query.lcd";
import * as _177 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _178 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _293 from "./lcd";
import * as _294 from "./rpc.query";
import * as _295 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178
    };
  }
  export const ClientFactory = {
    ..._293,
    ..._294,
    ..._295
  };
}