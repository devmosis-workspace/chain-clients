import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
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
    end_blocker_limit: string;
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
