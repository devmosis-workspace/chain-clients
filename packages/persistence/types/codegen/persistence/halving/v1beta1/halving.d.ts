import { BinaryWriter } from "../../../binary";
/** Params holds parameters for the halving module. */
export interface Params {
    /** periodic height at which inflation decreases */
    blockHeight: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/persistence.halving.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the halving module. */
export interface ParamsAmino {
    /** periodic height at which inflation decreases */
    blockHeight: string;
}
export interface ParamsAminoMsg {
    type: "/persistence.halving.v1beta1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the halving module. */
export interface ParamsSDKType {
    blockHeight: bigint;
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
