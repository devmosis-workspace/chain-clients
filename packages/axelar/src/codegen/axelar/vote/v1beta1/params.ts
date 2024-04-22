import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  defaultVotingThreshold: Threshold;
  endBlockerLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.vote.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  default_voting_threshold?: ThresholdAmino;
  end_blocker_limit?: string;
}
export interface ParamsAminoMsg {
  type: "/axelar.vote.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  default_voting_threshold: ThresholdSDKType;
  end_blocker_limit: bigint;
}
function createBaseParams(): Params {
  return {
    defaultVotingThreshold: Threshold.fromPartial({}),
    endBlockerLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/axelar.vote.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultVotingThreshold !== undefined) {
      Threshold.encode(message.defaultVotingThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.endBlockerLimit !== BigInt(0)) {
      writer.uint32(16).int64(message.endBlockerLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      defaultVotingThreshold: isSet(object.defaultVotingThreshold) ? Threshold.fromJSON(object.defaultVotingThreshold) : undefined,
      endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.defaultVotingThreshold = object.defaultVotingThreshold !== undefined && object.defaultVotingThreshold !== null ? Threshold.fromPartial(object.defaultVotingThreshold) : undefined;
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.default_voting_threshold !== undefined && object.default_voting_threshold !== null) {
      message.defaultVotingThreshold = Threshold.fromAmino(object.default_voting_threshold);
    }
    if (object.end_blocker_limit !== undefined && object.end_blocker_limit !== null) {
      message.endBlockerLimit = BigInt(object.end_blocker_limit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.default_voting_threshold = message.defaultVotingThreshold ? Threshold.toAmino(message.defaultVotingThreshold) : undefined;
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
      typeUrl: "/axelar.vote.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};