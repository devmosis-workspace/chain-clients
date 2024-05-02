import { BinaryWriter } from "../../../binary";
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequest {
    from: string;
    id: bigint;
}
export interface MsgCancelRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.MsgCancelRequest";
    value: Uint8Array;
}
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequestAmino {
    from?: string;
    id?: string;
}
export interface MsgCancelRequestAminoMsg {
    type: "/sentinel.subscription.v2.MsgCancelRequest";
    value: MsgCancelRequestAmino;
}
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequestSDKType {
    from: string;
    id: bigint;
}
/**
 * MsgAllocateRequest defines the SDK message for allocating the bytes of a
 * subscription for an address
 */
export interface MsgAllocateRequest {
    from: string;
    id: bigint;
    address: string;
    bytes: string;
}
export interface MsgAllocateRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.MsgAllocateRequest";
    value: Uint8Array;
}
/**
 * MsgAllocateRequest defines the SDK message for allocating the bytes of a
 * subscription for an address
 */
export interface MsgAllocateRequestAmino {
    from?: string;
    id?: string;
    address?: string;
    bytes?: string;
}
export interface MsgAllocateRequestAminoMsg {
    type: "/sentinel.subscription.v2.MsgAllocateRequest";
    value: MsgAllocateRequestAmino;
}
/**
 * MsgAllocateRequest defines the SDK message for allocating the bytes of a
 * subscription for an address
 */
export interface MsgAllocateRequestSDKType {
    from: string;
    id: bigint;
    address: string;
    bytes: string;
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponse {
}
export interface MsgCancelResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.MsgCancelResponse";
    value: Uint8Array;
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponseAmino {
}
export interface MsgCancelResponseAminoMsg {
    type: "/sentinel.subscription.v2.MsgCancelResponse";
    value: MsgCancelResponseAmino;
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponseSDKType {
}
/** MsgAllocateResponse defines the response of message MsgAllocateRequest */
export interface MsgAllocateResponse {
}
export interface MsgAllocateResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.MsgAllocateResponse";
    value: Uint8Array;
}
/** MsgAllocateResponse defines the response of message MsgAllocateRequest */
export interface MsgAllocateResponseAmino {
}
export interface MsgAllocateResponseAminoMsg {
    type: "/sentinel.subscription.v2.MsgAllocateResponse";
    value: MsgAllocateResponseAmino;
}
/** MsgAllocateResponse defines the response of message MsgAllocateRequest */
export interface MsgAllocateResponseSDKType {
}
export declare const MsgCancelRequest: {
    typeUrl: string;
    encode(message: MsgCancelRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelRequest;
    fromPartial(object: Partial<MsgCancelRequest>): MsgCancelRequest;
    fromAmino(object: MsgCancelRequestAmino): MsgCancelRequest;
    toAmino(message: MsgCancelRequest): MsgCancelRequestAmino;
    fromAminoMsg(object: MsgCancelRequestAminoMsg): MsgCancelRequest;
    fromProtoMsg(message: MsgCancelRequestProtoMsg): MsgCancelRequest;
    toProto(message: MsgCancelRequest): Uint8Array;
    toProtoMsg(message: MsgCancelRequest): MsgCancelRequestProtoMsg;
};
export declare const MsgAllocateRequest: {
    typeUrl: string;
    encode(message: MsgAllocateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAllocateRequest;
    fromPartial(object: Partial<MsgAllocateRequest>): MsgAllocateRequest;
    fromAmino(object: MsgAllocateRequestAmino): MsgAllocateRequest;
    toAmino(message: MsgAllocateRequest): MsgAllocateRequestAmino;
    fromAminoMsg(object: MsgAllocateRequestAminoMsg): MsgAllocateRequest;
    fromProtoMsg(message: MsgAllocateRequestProtoMsg): MsgAllocateRequest;
    toProto(message: MsgAllocateRequest): Uint8Array;
    toProtoMsg(message: MsgAllocateRequest): MsgAllocateRequestProtoMsg;
};
export declare const MsgCancelResponse: {
    typeUrl: string;
    encode(_: MsgCancelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelResponse;
    fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse;
    fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse;
    toAmino(_: MsgCancelResponse): MsgCancelResponseAmino;
    fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse;
    fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse;
    toProto(message: MsgCancelResponse): Uint8Array;
    toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg;
};
export declare const MsgAllocateResponse: {
    typeUrl: string;
    encode(_: MsgAllocateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAllocateResponse;
    fromPartial(_: Partial<MsgAllocateResponse>): MsgAllocateResponse;
    fromAmino(_: MsgAllocateResponseAmino): MsgAllocateResponse;
    toAmino(_: MsgAllocateResponse): MsgAllocateResponseAmino;
    fromAminoMsg(object: MsgAllocateResponseAminoMsg): MsgAllocateResponse;
    fromProtoMsg(message: MsgAllocateResponseProtoMsg): MsgAllocateResponse;
    toProto(message: MsgAllocateResponse): Uint8Array;
    toProtoMsg(message: MsgAllocateResponse): MsgAllocateResponseProtoMsg;
};
