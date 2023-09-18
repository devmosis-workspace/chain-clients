import { BinaryWriter } from "../../../binary";
/** Params defines the parameters of the escrow module */
export interface Params {
    /** Params defines the parameters of the escrow module */
    moduleEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters of the escrow module */
export interface ParamsAmino {
    /** Params defines the parameters of the escrow module */
    module_enabled: boolean;
}
export interface ParamsAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters of the escrow module */
export interface ParamsSDKType {
    module_enabled: boolean;
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
