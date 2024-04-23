import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    txFeeBurnPercent: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/chihuahua.feeburn.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    txFeeBurnPercent?: string;
}
export interface ParamsAminoMsg {
    type: "/chihuahua.feeburn.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    txFeeBurnPercent: string;
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
