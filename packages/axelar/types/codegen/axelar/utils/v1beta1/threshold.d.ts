import { BinaryWriter } from "../../../binary";
export interface Threshold {
    /**
     * split threshold into Numerator and denominator to avoid floating point
     * errors down the line
     */
    numerator: bigint;
    denominator: bigint;
}
export interface ThresholdProtoMsg {
    typeUrl: "/axelar.utils.v1beta1.Threshold";
    value: Uint8Array;
}
export interface ThresholdAmino {
    /**
     * split threshold into Numerator and denominator to avoid floating point
     * errors down the line
     */
    numerator: string;
    denominator: string;
}
export interface ThresholdAminoMsg {
    type: "/axelar.utils.v1beta1.Threshold";
    value: ThresholdAmino;
}
export interface ThresholdSDKType {
    numerator: bigint;
    denominator: bigint;
}
export declare const Threshold: {
    typeUrl: string;
    encode(message: Threshold, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Threshold;
    fromPartial(object: Partial<Threshold>): Threshold;
    fromAmino(object: ThresholdAmino): Threshold;
    toAmino(message: Threshold): ThresholdAmino;
    fromAminoMsg(object: ThresholdAminoMsg): Threshold;
    fromProtoMsg(message: ThresholdProtoMsg): Threshold;
    toProto(message: Threshold): Uint8Array;
    toProtoMsg(message: Threshold): ThresholdProtoMsg;
};
