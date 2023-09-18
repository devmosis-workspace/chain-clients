import { BinaryWriter } from "../../../binary";
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignData {
    /** signer is the bech32 representation of the signer's account address */
    signer: string;
    /**
     * data represents the raw bytes of the content that is signed (text, json,
     * etc)
     */
    data: Uint8Array;
}
export interface MsgSignDataProtoMsg {
    typeUrl: "/cosmos.offchain.v1alpha1.MsgSignData";
    value: Uint8Array;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataAmino {
    /** signer is the bech32 representation of the signer's account address */
    signer: string;
    /**
     * data represents the raw bytes of the content that is signed (text, json,
     * etc)
     */
    data: Uint8Array;
}
export interface MsgSignDataAminoMsg {
    type: "cosmos-sdk/MsgSignData";
    value: MsgSignDataAmino;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataSDKType {
    signer: string;
    data: Uint8Array;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignData {
    /** msgs is a list of messages */
    msgs: MsgSignData[];
}
export interface ListOfMsgSignDataProtoMsg {
    typeUrl: "/cosmos.offchain.v1alpha1.ListOfMsgSignData";
    value: Uint8Array;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignDataAmino {
    /** msgs is a list of messages */
    msgs: MsgSignDataAmino[];
}
export interface ListOfMsgSignDataAminoMsg {
    type: "cosmos-sdk/ListOfMsgSignData";
    value: ListOfMsgSignDataAmino;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignDataSDKType {
    msgs: MsgSignDataSDKType[];
}
export declare const MsgSignData: {
    typeUrl: string;
    encode(message: MsgSignData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSignData;
    fromPartial(object: Partial<MsgSignData>): MsgSignData;
    fromAmino(object: MsgSignDataAmino): MsgSignData;
    toAmino(message: MsgSignData): MsgSignDataAmino;
    fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData;
    toAminoMsg(message: MsgSignData): MsgSignDataAminoMsg;
    fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData;
    toProto(message: MsgSignData): Uint8Array;
    toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg;
};
export declare const ListOfMsgSignData: {
    typeUrl: string;
    encode(message: ListOfMsgSignData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ListOfMsgSignData;
    fromPartial(object: Partial<ListOfMsgSignData>): ListOfMsgSignData;
    fromAmino(object: ListOfMsgSignDataAmino): ListOfMsgSignData;
    toAmino(message: ListOfMsgSignData): ListOfMsgSignDataAmino;
    fromAminoMsg(object: ListOfMsgSignDataAminoMsg): ListOfMsgSignData;
    toAminoMsg(message: ListOfMsgSignData): ListOfMsgSignDataAminoMsg;
    fromProtoMsg(message: ListOfMsgSignDataProtoMsg): ListOfMsgSignData;
    toProto(message: ListOfMsgSignData): Uint8Array;
    toProtoMsg(message: ListOfMsgSignData): ListOfMsgSignDataProtoMsg;
};
