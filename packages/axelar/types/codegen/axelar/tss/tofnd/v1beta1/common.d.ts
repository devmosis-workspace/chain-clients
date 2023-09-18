import { BinaryWriter } from "../../../../binary";
export declare enum KeyPresenceResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_PRESENT = 1,
    RESPONSE_ABSENT = 2,
    RESPONSE_FAIL = 3,
    UNRECOGNIZED = -1
}
export declare const KeyPresenceResponse_ResponseSDKType: typeof KeyPresenceResponse_Response;
export declare const KeyPresenceResponse_ResponseAmino: typeof KeyPresenceResponse_Response;
export declare function keyPresenceResponse_ResponseFromJSON(object: any): KeyPresenceResponse_Response;
export declare function keyPresenceResponse_ResponseToJSON(object: KeyPresenceResponse_Response): string;
/** Key presence check types */
export interface KeyPresenceRequest {
    keyUid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pubKey: Uint8Array;
}
export interface KeyPresenceRequestProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest";
    value: Uint8Array;
}
/** Key presence check types */
export interface KeyPresenceRequestAmino {
    key_uid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pub_key: Uint8Array;
}
export interface KeyPresenceRequestAminoMsg {
    type: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest";
    value: KeyPresenceRequestAmino;
}
/** Key presence check types */
export interface KeyPresenceRequestSDKType {
    key_uid: string;
    pub_key: Uint8Array;
}
export interface KeyPresenceResponse {
    response: KeyPresenceResponse_Response;
}
export interface KeyPresenceResponseProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse";
    value: Uint8Array;
}
export interface KeyPresenceResponseAmino {
    response: KeyPresenceResponse_Response;
}
export interface KeyPresenceResponseAminoMsg {
    type: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse";
    value: KeyPresenceResponseAmino;
}
export interface KeyPresenceResponseSDKType {
    response: KeyPresenceResponse_Response;
}
export declare const KeyPresenceRequest: {
    typeUrl: string;
    encode(message: KeyPresenceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyPresenceRequest;
    fromPartial(object: Partial<KeyPresenceRequest>): KeyPresenceRequest;
    fromAmino(object: KeyPresenceRequestAmino): KeyPresenceRequest;
    toAmino(message: KeyPresenceRequest): KeyPresenceRequestAmino;
    fromAminoMsg(object: KeyPresenceRequestAminoMsg): KeyPresenceRequest;
    fromProtoMsg(message: KeyPresenceRequestProtoMsg): KeyPresenceRequest;
    toProto(message: KeyPresenceRequest): Uint8Array;
    toProtoMsg(message: KeyPresenceRequest): KeyPresenceRequestProtoMsg;
};
export declare const KeyPresenceResponse: {
    typeUrl: string;
    encode(message: KeyPresenceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyPresenceResponse;
    fromPartial(object: Partial<KeyPresenceResponse>): KeyPresenceResponse;
    fromAmino(object: KeyPresenceResponseAmino): KeyPresenceResponse;
    toAmino(message: KeyPresenceResponse): KeyPresenceResponseAmino;
    fromAminoMsg(object: KeyPresenceResponseAminoMsg): KeyPresenceResponse;
    fromProtoMsg(message: KeyPresenceResponseProtoMsg): KeyPresenceResponse;
    toProto(message: KeyPresenceResponse): Uint8Array;
    toProtoMsg(message: KeyPresenceResponse): KeyPresenceResponseProtoMsg;
};
