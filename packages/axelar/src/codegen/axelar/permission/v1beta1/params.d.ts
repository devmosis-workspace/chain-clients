import { BinaryWriter } from "../../../binary";
/** Params represent the genesis parameters for the module */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.Params";
    value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/axelar.permission.v1beta1.Params";
    value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
