import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  chainActivationThreshold: Threshold;
  chainMaintainerMissingVoteThreshold: Threshold;
  chainMaintainerIncorrectVoteThreshold: Threshold;
  chainMaintainerCheckWindow: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  chain_activation_threshold?: ThresholdAmino;
  chain_maintainer_missing_vote_threshold?: ThresholdAmino;
  chain_maintainer_incorrect_vote_threshold?: ThresholdAmino;
  chain_maintainer_check_window: number;
}
export interface ParamsAminoMsg {
  type: "/axelar.nexus.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  chain_activation_threshold: ThresholdSDKType;
  chain_maintainer_missing_vote_threshold: ThresholdSDKType;
  chain_maintainer_incorrect_vote_threshold: ThresholdSDKType;
  chain_maintainer_check_window: number;
}
function createBaseParams(): Params {
  return {
    chainActivationThreshold: Threshold.fromPartial({}),
    chainMaintainerMissingVoteThreshold: Threshold.fromPartial({}),
    chainMaintainerIncorrectVoteThreshold: Threshold.fromPartial({}),
    chainMaintainerCheckWindow: 0
  };
}
export const Params = {
  typeUrl: "/axelar.nexus.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      chainActivationThreshold: object?.chain_activation_threshold ? Threshold.fromAmino(object.chain_activation_threshold) : undefined,
      chainMaintainerMissingVoteThreshold: object?.chain_maintainer_missing_vote_threshold ? Threshold.fromAmino(object.chain_maintainer_missing_vote_threshold) : undefined,
      chainMaintainerIncorrectVoteThreshold: object?.chain_maintainer_incorrect_vote_threshold ? Threshold.fromAmino(object.chain_maintainer_incorrect_vote_threshold) : undefined,
      chainMaintainerCheckWindow: object.chain_maintainer_check_window
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.chain_activation_threshold = message.chainActivationThreshold ? Threshold.toAmino(message.chainActivationThreshold) : undefined;
    obj.chain_maintainer_missing_vote_threshold = message.chainMaintainerMissingVoteThreshold ? Threshold.toAmino(message.chainMaintainerMissingVoteThreshold) : undefined;
    obj.chain_maintainer_incorrect_vote_threshold = message.chainMaintainerIncorrectVoteThreshold ? Threshold.toAmino(message.chainMaintainerIncorrectVoteThreshold) : undefined;
    obj.chain_maintainer_check_window = message.chainMaintainerCheckWindow;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};