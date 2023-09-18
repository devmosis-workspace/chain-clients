import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
/** Params represent the genesis parameters for the module */
export interface Params {
    keygenThreshold: Threshold;
    signingThreshold: Threshold;
    keygenTimeout: bigint;
    keygenGracePeriod: bigint;
    signingTimeout: bigint;
    signingGracePeriod: bigint;
    activeEpochCount: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.Params";
    value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
    keygen_threshold?: ThresholdAmino;
    signing_threshold?: ThresholdAmino;
    keygen_timeout: string;
    keygen_grace_period: string;
    signing_timeout: string;
    signing_grace_period: string;
    active_epoch_count: string;
}
export interface ParamsAminoMsg {
    type: "/axelar.multisig.v1beta1.Params";
    value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    keygen_threshold: ThresholdSDKType;
    signing_threshold: ThresholdSDKType;
    keygen_timeout: bigint;
    keygen_grace_period: bigint;
    signing_timeout: bigint;
    signing_grace_period: bigint;
    active_epoch_count: bigint;
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
