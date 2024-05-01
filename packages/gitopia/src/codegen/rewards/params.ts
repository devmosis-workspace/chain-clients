import { RewardPool, RewardPoolAmino, RewardPoolSDKType } from "./pool";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  evaluatorAddress: string;
  rewardSeries: RewardPool[];
}
export interface ParamsProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  evaluator_address?: string;
  reward_series?: RewardPoolAmino[];
}
export interface ParamsAminoMsg {
  type: "/gitopia.gitopia.rewards.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  evaluator_address: string;
  reward_series: RewardPoolSDKType[];
}
function createBaseParams(): Params {
  return {
    evaluatorAddress: "",
    rewardSeries: []
  };
}
export const Params = {
  typeUrl: "/gitopia.gitopia.rewards.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evaluatorAddress !== "") {
      writer.uint32(10).string(message.evaluatorAddress);
    }
    for (const v of message.rewardSeries) {
      RewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      evaluatorAddress: isSet(object.evaluatorAddress) ? String(object.evaluatorAddress) : "",
      rewardSeries: Array.isArray(object?.rewardSeries) ? object.rewardSeries.map((e: any) => RewardPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.evaluatorAddress = object.evaluatorAddress ?? "";
    message.rewardSeries = object.rewardSeries?.map(e => RewardPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.evaluator_address !== undefined && object.evaluator_address !== null) {
      message.evaluatorAddress = object.evaluator_address;
    }
    message.rewardSeries = object.reward_series?.map(e => RewardPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.evaluator_address = message.evaluatorAddress === "" ? undefined : message.evaluatorAddress;
    if (message.rewardSeries) {
      obj.reward_series = message.rewardSeries.map(e => e ? RewardPool.toAmino(e) : undefined);
    } else {
      obj.reward_series = message.rewardSeries;
    }
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
      typeUrl: "/gitopia.gitopia.rewards.Params",
      value: Params.encode(message).finish()
    };
  }
};