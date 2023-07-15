import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * minTimeoutDuration defines the minimum value of packet timeout when submitting transactions to host chain on
   * behalf of interchain account
   */
  minTimeoutDuration?: Duration;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  minTimeoutDuration?: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    minTimeoutDuration: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minTimeoutDuration !== undefined) {
      Duration.encode(message.minTimeoutDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minTimeoutDuration: isSet(object.minTimeoutDuration) ? Duration.fromJSON(object.minTimeoutDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minTimeoutDuration = object.minTimeoutDuration !== undefined && object.minTimeoutDuration !== null ? Duration.fromPartial(object.minTimeoutDuration) : undefined;
    return message;
  }
};