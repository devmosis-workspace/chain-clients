import { RewardPool, RewardPoolAmino, RewardPoolSDKType } from "./pool";
import { BinaryWriter } from "../binary";
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
