import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  switchStatus: string;
  pauserAddress: string;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
  switch_status: string;
  pauser_address: string;
}
function createBaseParams(): Params {
  return {
    switchStatus: "",
    pauserAddress: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.switchStatus !== "") {
      writer.uint32(10).string(message.switchStatus);
    }
    if (message.pauserAddress !== "") {
      writer.uint32(18).string(message.pauserAddress);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      switchStatus: isSet(object.switchStatus) ? String(object.switchStatus) : "",
      pauserAddress: isSet(object.pauserAddress) ? String(object.pauserAddress) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.switchStatus = object.switchStatus ?? "";
    message.pauserAddress = object.pauserAddress ?? "";
    return message;
  }
};