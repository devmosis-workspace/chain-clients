import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  chainActivationThreshold?: Threshold;
  chainMaintainerMissingVoteThreshold?: Threshold;
  chainMaintainerIncorrectVoteThreshold?: Threshold;
  chainMaintainerCheckWindow: number;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  chain_activation_threshold?: ThresholdSDKType;
  chain_maintainer_missing_vote_threshold?: ThresholdSDKType;
  chain_maintainer_incorrect_vote_threshold?: ThresholdSDKType;
  chain_maintainer_check_window: number;
}
function createBaseParams(): Params {
  return {
    chainActivationThreshold: undefined,
    chainMaintainerMissingVoteThreshold: undefined,
    chainMaintainerIncorrectVoteThreshold: undefined,
    chainMaintainerCheckWindow: 0
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainActivationThreshold !== undefined) {
      Threshold.encode(message.chainActivationThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainMaintainerMissingVoteThreshold !== undefined) {
      Threshold.encode(message.chainMaintainerMissingVoteThreshold, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainMaintainerIncorrectVoteThreshold !== undefined) {
      Threshold.encode(message.chainMaintainerIncorrectVoteThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (message.chainMaintainerCheckWindow !== 0) {
      writer.uint32(32).int32(message.chainMaintainerCheckWindow);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      chainActivationThreshold: isSet(object.chainActivationThreshold) ? Threshold.fromJSON(object.chainActivationThreshold) : undefined,
      chainMaintainerMissingVoteThreshold: isSet(object.chainMaintainerMissingVoteThreshold) ? Threshold.fromJSON(object.chainMaintainerMissingVoteThreshold) : undefined,
      chainMaintainerIncorrectVoteThreshold: isSet(object.chainMaintainerIncorrectVoteThreshold) ? Threshold.fromJSON(object.chainMaintainerIncorrectVoteThreshold) : undefined,
      chainMaintainerCheckWindow: isSet(object.chainMaintainerCheckWindow) ? Number(object.chainMaintainerCheckWindow) : 0
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.chainActivationThreshold = object.chainActivationThreshold !== undefined && object.chainActivationThreshold !== null ? Threshold.fromPartial(object.chainActivationThreshold) : undefined;
    message.chainMaintainerMissingVoteThreshold = object.chainMaintainerMissingVoteThreshold !== undefined && object.chainMaintainerMissingVoteThreshold !== null ? Threshold.fromPartial(object.chainMaintainerMissingVoteThreshold) : undefined;
    message.chainMaintainerIncorrectVoteThreshold = object.chainMaintainerIncorrectVoteThreshold !== undefined && object.chainMaintainerIncorrectVoteThreshold !== null ? Threshold.fromPartial(object.chainMaintainerIncorrectVoteThreshold) : undefined;
    message.chainMaintainerCheckWindow = object.chainMaintainerCheckWindow ?? 0;
    return message;
  }
};