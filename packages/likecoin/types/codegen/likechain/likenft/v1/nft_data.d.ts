import { ClassParent, ClassParentAmino, ClassParentSDKType } from "./class_data";
import { BinaryWriter } from "../../../binary";
export interface NFTData {
    metadata: Uint8Array;
    classParent: ClassParent;
    toBeRevealed: boolean;
}
export interface NFTDataProtoMsg {
    typeUrl: "/likechain.likenft.v1.NFTData";
    value: Uint8Array;
}
export interface NFTDataAmino {
    metadata?: string;
    class_parent?: ClassParentAmino;
    to_be_revealed?: boolean;
}
export interface NFTDataAminoMsg {
    type: "/likechain.likenft.v1.NFTData";
    value: NFTDataAmino;
}
export interface NFTDataSDKType {
    metadata: Uint8Array;
    class_parent: ClassParentSDKType;
    to_be_revealed: boolean;
}
export declare const NFTData: {
    typeUrl: string;
    encode(message: NFTData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NFTData;
    fromPartial(object: Partial<NFTData>): NFTData;
    fromAmino(object: NFTDataAmino): NFTData;
    toAmino(message: NFTData): NFTDataAmino;
    fromAminoMsg(object: NFTDataAminoMsg): NFTData;
    fromProtoMsg(message: NFTDataProtoMsg): NFTData;
    toProto(message: NFTData): Uint8Array;
    toProtoMsg(message: NFTData): NFTDataProtoMsg;
};
