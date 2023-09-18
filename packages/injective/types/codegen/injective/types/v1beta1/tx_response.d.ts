import { BinaryWriter } from "../../../binary";
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessage {
    header: string;
    data: Uint8Array;
}
export interface TxResponseGenericMessageProtoMsg {
    typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage";
    value: Uint8Array;
}
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessageAmino {
    header: string;
    data: Uint8Array;
}
export interface TxResponseGenericMessageAminoMsg {
    type: "/injective.types.v1beta1.TxResponseGenericMessage";
    value: TxResponseGenericMessageAmino;
}
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessageSDKType {
    header: string;
    data: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseData {
    /** improvised message to unpack length prefixed messages in tx response data */
    messages: TxResponseGenericMessage[];
}
export interface TxResponseDataProtoMsg {
    typeUrl: "/injective.types.v1beta1.TxResponseData";
    value: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseDataAmino {
    /** improvised message to unpack length prefixed messages in tx response data */
    messages: TxResponseGenericMessageAmino[];
}
export interface TxResponseDataAminoMsg {
    type: "/injective.types.v1beta1.TxResponseData";
    value: TxResponseDataAmino;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseDataSDKType {
    messages: TxResponseGenericMessageSDKType[];
}
export declare const TxResponseGenericMessage: {
    typeUrl: string;
    encode(message: TxResponseGenericMessage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxResponseGenericMessage;
    fromPartial(object: Partial<TxResponseGenericMessage>): TxResponseGenericMessage;
    fromAmino(object: TxResponseGenericMessageAmino): TxResponseGenericMessage;
    toAmino(message: TxResponseGenericMessage): TxResponseGenericMessageAmino;
    fromAminoMsg(object: TxResponseGenericMessageAminoMsg): TxResponseGenericMessage;
    fromProtoMsg(message: TxResponseGenericMessageProtoMsg): TxResponseGenericMessage;
    toProto(message: TxResponseGenericMessage): Uint8Array;
    toProtoMsg(message: TxResponseGenericMessage): TxResponseGenericMessageProtoMsg;
};
export declare const TxResponseData: {
    typeUrl: string;
    encode(message: TxResponseData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxResponseData;
    fromPartial(object: Partial<TxResponseData>): TxResponseData;
    fromAmino(object: TxResponseDataAmino): TxResponseData;
    toAmino(message: TxResponseData): TxResponseDataAmino;
    fromAminoMsg(object: TxResponseDataAminoMsg): TxResponseData;
    fromProtoMsg(message: TxResponseDataProtoMsg): TxResponseData;
    toProto(message: TxResponseData): Uint8Array;
    toProtoMsg(message: TxResponseData): TxResponseDataProtoMsg;
};
