import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakingRewardsState, StakingRewardsStateAmino, StakingRewardsStateSDKType } from "./staking";
import { BinaryWriter } from "../../../binary";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
