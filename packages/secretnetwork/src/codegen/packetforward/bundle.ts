import * as _133 from "../ibc/applications/packetforward/v1/genesis";
import * as _134 from "../ibc/applications/packetforward/v1/query";
import * as _265 from "../ibc/applications/packetforward/v1/query.lcd";
import * as _266 from "../ibc/applications/packetforward/v1/query.rpc.Query";
import * as _276 from "./lcd";
import * as _277 from "./rpc.query";
export namespace packetforward {
  export const v1 = {
    ..._133,
    ..._134,
    ..._265,
    ..._266
  };
  export const ClientFactory = {
    ..._276,
    ..._277
  };
}