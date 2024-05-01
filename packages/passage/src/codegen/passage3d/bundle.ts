import * as _0 from "./claim/v1beta1/claim_record";
import * as _1 from "./claim/v1beta1/genesis";
import * as _2 from "./claim/v1beta1/params";
import * as _3 from "./claim/v1beta1/query";
import * as _4 from "./claim/v1beta1/tx";
import * as _101 from "./claim/v1beta1/tx.amino";
import * as _102 from "./claim/v1beta1/tx.registry";
import * as _103 from "./claim/v1beta1/query.lcd";
import * as _104 from "./claim/v1beta1/query.rpc.Query";
import * as _105 from "./claim/v1beta1/tx.rpc.msg";
import * as _171 from "./lcd";
import * as _172 from "./rpc.query";
import * as _173 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105
    };
  }
  export const ClientFactory = {
    ..._171,
    ..._172,
    ..._173
  };
}