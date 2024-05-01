import { Reward, RewardAmino, RewardSDKType } from "./rewards";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
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
