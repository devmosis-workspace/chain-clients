import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
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
