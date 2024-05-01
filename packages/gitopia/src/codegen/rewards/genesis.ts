import { Reward, RewardAmino, RewardSDKType } from "./rewards";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** GenesisState defines the rewards module's genesis state. */
export interface GenesisState {
  rewardsList: Reward[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the rewards module's genesis state. */
export interface GenesisStateAmino {
  rewardsList?: RewardAmino[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/gitopia.gitopia.rewards.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the rewards module's genesis state. */
export interface GenesisStateSDKType {
  rewardsList: RewardSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    rewardsList: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/gitopia.gitopia.rewards.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewardsList) {
      Reward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      rewardsList: Array.isArray(object?.rewardsList) ? object.rewardsList.map((e: any) => Reward.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.rewardsList = object.rewardsList?.map(e => Reward.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.rewardsList = object.rewardsList?.map(e => Reward.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.rewardsList) {
      obj.rewardsList = message.rewardsList.map(e => e ? Reward.toAmino(e) : undefined);
    } else {
      obj.rewardsList = message.rewardsList;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};