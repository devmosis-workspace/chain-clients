import { BinaryWriter } from "../../binary";
export interface Params {
    allowedAsyncAckContracts: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.ibchooks.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    allowed_async_ack_contracts?: string[];
}
export interface ParamsAminoMsg {
    type: "osmosis/ibchooks/params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    allowed_async_ack_contracts: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
