import { BinaryWriter } from "../../../binary";
export interface NFTInput {
    uri: string;
    uriHash: string;
    metadata: Uint8Array;
}
export interface NFTInputProtoMsg {
    typeUrl: "/likechain.likenft.v1.NFTInput";
    value: Uint8Array;
}
export interface NFTInputAmino {
    uri?: string;
    uri_hash?: string;
    metadata?: string;
}
export interface NFTInputAminoMsg {
    type: "/likechain.likenft.v1.NFTInput";
    value: NFTInputAmino;
}
export interface NFTInputSDKType {
    uri: string;
    uri_hash: string;
    metadata: Uint8Array;
}
export declare const NFTInput: {
    typeUrl: string;
    encode(message: NFTInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NFTInput;
    fromPartial(object: Partial<NFTInput>): NFTInput;
    fromAmino(object: NFTInputAmino): NFTInput;
    toAmino(message: NFTInput): NFTInputAmino;
    fromAminoMsg(object: NFTInputAminoMsg): NFTInput;
    fromProtoMsg(message: NFTInputProtoMsg): NFTInput;
    toProto(message: NFTInput): Uint8Array;
    toProtoMsg(message: NFTInput): NFTInputProtoMsg;
};
