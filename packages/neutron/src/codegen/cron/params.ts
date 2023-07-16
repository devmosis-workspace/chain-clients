import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  /** Security address that can remove schedules */
  securityAddress: string;
  /** Limit of schedules executed in one block */
  limit: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  security_address: string;
  limit: Long;
}
function createBaseParams(): Params {
  return {
    securityAddress: "",
    limit: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityAddress !== "") {
      writer.uint32(10).string(message.securityAddress);
    }
    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      securityAddress: isSet(object.securityAddress) ? String(object.securityAddress) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.securityAddress = object.securityAddress ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }
};