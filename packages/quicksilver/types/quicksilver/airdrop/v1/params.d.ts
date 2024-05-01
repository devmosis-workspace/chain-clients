import { BinaryWriter } from "../../../binary";
/** Params holds parameters for the airdrop module. */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the airdrop module. */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/quicksilver.airdrop.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the airdrop module. */
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
