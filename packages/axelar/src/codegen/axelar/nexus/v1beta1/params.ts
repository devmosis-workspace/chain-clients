import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  chainActivationThreshold: Threshold;
  chainMaintainerMissingVoteThreshold: Threshold;
  chainMaintainerIncorrectVoteThreshold: Threshold;
  chainMaintainerCheckWindow: number;
  gateway: Uint8Array;
  endBlockerLimit: bigint;
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
  chain_maintainer_check_window?: number;
  gateway?: string;
  end_blocker_limit?: string;
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
  gateway: Uint8Array;
  end_blocker_limit: bigint;
}
function createBaseParams(): Params {
  return {
    chainActivationThreshold: Threshold.fromPartial({}),
    chainMaintainerMissingVoteThreshold: Threshold.fromPartial({}),
    chainMaintainerIncorrectVoteThreshold: Threshold.fromPartial({}),
    chainMaintainerCheckWindow: 0,
    gateway: new Uint8Array(),
    endBlockerLimit: BigInt(0)
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
    if (message.gateway.length !== 0) {
      writer.uint32(42).bytes(message.gateway);
    }
    if (message.endBlockerLimit !== BigInt(0)) {
      writer.uint32(48).uint64(message.endBlockerLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      chainActivationThreshold: isSet(object.chainActivationThreshold) ? Threshold.fromJSON(object.chainActivationThreshold) : undefined,
      chainMaintainerMissingVoteThreshold: isSet(object.chainMaintainerMissingVoteThreshold) ? Threshold.fromJSON(object.chainMaintainerMissingVoteThreshold) : undefined,
      chainMaintainerIncorrectVoteThreshold: isSet(object.chainMaintainerIncorrectVoteThreshold) ? Threshold.fromJSON(object.chainMaintainerIncorrectVoteThreshold) : undefined,
      chainMaintainerCheckWindow: isSet(object.chainMaintainerCheckWindow) ? Number(object.chainMaintainerCheckWindow) : 0,
      gateway: isSet(object.gateway) ? bytesFromBase64(object.gateway) : new Uint8Array(),
      endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.chainActivationThreshold = object.chainActivationThreshold !== undefined && object.chainActivationThreshold !== null ? Threshold.fromPartial(object.chainActivationThreshold) : undefined;
    message.chainMaintainerMissingVoteThreshold = object.chainMaintainerMissingVoteThreshold !== undefined && object.chainMaintainerMissingVoteThreshold !== null ? Threshold.fromPartial(object.chainMaintainerMissingVoteThreshold) : undefined;
    message.chainMaintainerIncorrectVoteThreshold = object.chainMaintainerIncorrectVoteThreshold !== undefined && object.chainMaintainerIncorrectVoteThreshold !== null ? Threshold.fromPartial(object.chainMaintainerIncorrectVoteThreshold) : undefined;
    message.chainMaintainerCheckWindow = object.chainMaintainerCheckWindow ?? 0;
    message.gateway = object.gateway ?? new Uint8Array();
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.chain_activation_threshold !== undefined && object.chain_activation_threshold !== null) {
      message.chainActivationThreshold = Threshold.fromAmino(object.chain_activation_threshold);
    }
    if (object.chain_maintainer_missing_vote_threshold !== undefined && object.chain_maintainer_missing_vote_threshold !== null) {
      message.chainMaintainerMissingVoteThreshold = Threshold.fromAmino(object.chain_maintainer_missing_vote_threshold);
    }
    if (object.chain_maintainer_incorrect_vote_threshold !== undefined && object.chain_maintainer_incorrect_vote_threshold !== null) {
      message.chainMaintainerIncorrectVoteThreshold = Threshold.fromAmino(object.chain_maintainer_incorrect_vote_threshold);
    }
    if (object.chain_maintainer_check_window !== undefined && object.chain_maintainer_check_window !== null) {
      message.chainMaintainerCheckWindow = object.chain_maintainer_check_window;
    }
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = bytesFromBase64(object.gateway);
    }
    if (object.end_blocker_limit !== undefined && object.end_blocker_limit !== null) {
      message.endBlockerLimit = BigInt(object.end_blocker_limit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.chain_activation_threshold = message.chainActivationThreshold ? Threshold.toAmino(message.chainActivationThreshold) : undefined;
    obj.chain_maintainer_missing_vote_threshold = message.chainMaintainerMissingVoteThreshold ? Threshold.toAmino(message.chainMaintainerMissingVoteThreshold) : undefined;
    obj.chain_maintainer_incorrect_vote_threshold = message.chainMaintainerIncorrectVoteThreshold ? Threshold.toAmino(message.chainMaintainerIncorrectVoteThreshold) : undefined;
    obj.chain_maintainer_check_window = message.chainMaintainerCheckWindow;
    obj.gateway = message.gateway ? base64FromBytes(message.gateway) : undefined;
    obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
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