import { Fee, FeeSDKType } from "./fee";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  minFee?: Fee;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_fee?: FeeSDKType;
}
function createBaseParams(): Params {
  return {
    minFee: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minFee !== undefined) {
      Fee.encode(message.minFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minFee: isSet(object.minFee) ? Fee.fromJSON(object.minFee) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minFee = object.minFee !== undefined && object.minFee !== null ? Fee.fromPartial(object.minFee) : undefined;
    return message;
  }
};