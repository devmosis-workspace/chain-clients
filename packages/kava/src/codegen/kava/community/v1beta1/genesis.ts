import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakingRewardsState, StakingRewardsStateAmino, StakingRewardsStateSDKType } from "./staking";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the community module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters related to commmunity */
  params: Params;
  /**
   * StakingRewardsState stores the internal staking reward data required to
   * track staking rewards across blocks
   */
  stakingRewardsState: StakingRewardsState;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.community.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the community module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters related to commmunity */
  params?: ParamsAmino;
  /**
   * StakingRewardsState stores the internal staking reward data required to
   * track staking rewards across blocks
   */
  staking_rewards_state?: StakingRewardsStateAmino;
}
export interface GenesisStateAminoMsg {
  type: "/kava.community.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the community module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  staking_rewards_state: StakingRewardsStateSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakingRewardsState: StakingRewardsState.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/kava.community.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakingRewardsState !== undefined) {
      StakingRewardsState.encode(message.stakingRewardsState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      stakingRewardsState: isSet(object.stakingRewardsState) ? StakingRewardsState.fromJSON(object.stakingRewardsState) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakingRewardsState = object.stakingRewardsState !== undefined && object.stakingRewardsState !== null ? StakingRewardsState.fromPartial(object.stakingRewardsState) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.staking_rewards_state !== undefined && object.staking_rewards_state !== null) {
      message.stakingRewardsState = StakingRewardsState.fromAmino(object.staking_rewards_state);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.staking_rewards_state = message.stakingRewardsState ? StakingRewardsState.toAmino(message.stakingRewardsState) : undefined;
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
      typeUrl: "/kava.community.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};