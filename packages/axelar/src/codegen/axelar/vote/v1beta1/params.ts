import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
  defaultVotingThreshold?: Threshold;
  endBlockerLimit: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  default_voting_threshold?: ThresholdSDKType;
  end_blocker_limit: Long;
}
function createBaseParams(): Params {
  return {
    defaultVotingThreshold: undefined,
    endBlockerLimit: Long.ZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultVotingThreshold !== undefined) {
      Threshold.encode(message.defaultVotingThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (!message.endBlockerLimit.isZero()) {
      writer.uint32(16).int64(message.endBlockerLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      defaultVotingThreshold: isSet(object.defaultVotingThreshold) ? Threshold.fromJSON(object.defaultVotingThreshold) : undefined,
      endBlockerLimit: isSet(object.endBlockerLimit) ? Long.fromValue(object.endBlockerLimit) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.defaultVotingThreshold = object.defaultVotingThreshold !== undefined && object.defaultVotingThreshold !== null ? Threshold.fromPartial(object.defaultVotingThreshold) : undefined;
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? Long.fromValue(object.endBlockerLimit) : Long.ZERO;
    return message;
  }
};