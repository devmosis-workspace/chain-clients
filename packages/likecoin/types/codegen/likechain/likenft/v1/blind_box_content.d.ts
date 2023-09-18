import { NFTInput, NFTInputAmino, NFTInputSDKType } from "./nft_input";
import { BinaryWriter } from "../../../binary";
export interface BlindBoxContent {
    classId: string;
    id: string;
    input: NFTInput;
}
export interface BlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.BlindBoxContent";
    value: Uint8Array;
}
export interface BlindBoxContentAmino {
    class_id: string;
    id: string;
    input?: NFTInputAmino;
}
export interface BlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.BlindBoxContent";
    value: BlindBoxContentAmino;
}
export interface BlindBoxContentSDKType {
    class_id: string;
    id: string;
    input: NFTInputSDKType;
}
export declare const BlindBoxContent: {
    typeUrl: string;
    encode(message: BlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlindBoxContent;
    fromPartial(object: Partial<BlindBoxContent>): BlindBoxContent;
    fromAmino(object: BlindBoxContentAmino): BlindBoxContent;
    toAmino(message: BlindBoxContent): BlindBoxContentAmino;
    fromAminoMsg(object: BlindBoxContentAminoMsg): BlindBoxContent;
    fromProtoMsg(message: BlindBoxContentProtoMsg): BlindBoxContent;
    toProto(message: BlindBoxContent): Uint8Array;
    toProtoMsg(message: BlindBoxContent): BlindBoxContentProtoMsg;
};
