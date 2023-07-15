import * as _m0 from "protobufjs/minimal";
export declare enum KeyPresenceResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_PRESENT = 1,
    RESPONSE_ABSENT = 2,
    RESPONSE_FAIL = 3,
    UNRECOGNIZED = -1
}
export declare const KeyPresenceResponse_ResponseSDKType: typeof KeyPresenceResponse_Response;
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
/** Key presence check types */
export interface KeyPresenceRequestSDKType {
    key_uid: string;
    pub_key: Uint8Array;
}
export interface KeyPresenceResponse {
    response: KeyPresenceResponse_Response;
}
export interface KeyPresenceResponseSDKType {
    response: KeyPresenceResponse_Response;
}
export declare const KeyPresenceRequest: {
    encode(message: KeyPresenceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyPresenceRequest;
    fromPartial(object: Partial<KeyPresenceRequest>): KeyPresenceRequest;
};
export declare const KeyPresenceResponse: {
    encode(message: KeyPresenceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyPresenceResponse;
    fromPartial(object: Partial<KeyPresenceResponse>): KeyPresenceResponse;
};
