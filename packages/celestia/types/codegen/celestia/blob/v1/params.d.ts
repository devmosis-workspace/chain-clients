import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    gasPerBlobByte: number;
    govMaxSquareSize: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/celestia.blob.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    gas_per_blob_byte?: number;
    gov_max_square_size?: string;
}
export interface ParamsAminoMsg {
    type: "/celestia.blob.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    gas_per_blob_byte: number;
    gov_max_square_size: bigint;
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
