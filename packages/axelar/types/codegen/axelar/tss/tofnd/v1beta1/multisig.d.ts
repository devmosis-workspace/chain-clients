import * as _m0 from "protobufjs/minimal";
export interface KeygenRequest {
    keyUid: string;
    /** used only for logging */
    partyUid: string;
}
export interface KeygenRequestSDKType {
    key_uid: string;
    party_uid: string;
}
export interface KeygenResponse {
    /** SEC1-encoded compressed curve point */
    pubKey?: Uint8Array;
    /** reply with an error message if keygen fails */
    error?: string;
}
export interface KeygenResponseSDKType {
    pub_key?: Uint8Array;
    error?: string;
}
export interface SignRequest {
    keyUid: string;
    /** 32-byte pre-hashed message digest */
    msgToSign: Uint8Array;
    /** used only for logging */
    partyUid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pubKey: Uint8Array;
}
export interface SignRequestSDKType {
    key_uid: string;
    msg_to_sign: Uint8Array;
    party_uid: string;
    pub_key: Uint8Array;
}
export interface SignResponse {
    /** ASN.1 DER-encoded ECDSA signature */
    signature?: Uint8Array;
    /** reply with an error message if sign fails */
    error?: string;
}
export interface SignResponseSDKType {
    signature?: Uint8Array;
    error?: string;
}
export declare const KeygenRequest: {
    encode(message: KeygenRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenRequest;
    fromPartial(object: Partial<KeygenRequest>): KeygenRequest;
};
export declare const KeygenResponse: {
    encode(message: KeygenResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenResponse;
    fromPartial(object: Partial<KeygenResponse>): KeygenResponse;
};
export declare const SignRequest: {
    encode(message: SignRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignRequest;
    fromPartial(object: Partial<SignRequest>): SignRequest;
};
export declare const SignResponse: {
    encode(message: SignResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignResponse;
    fromPartial(object: Partial<SignResponse>): SignResponse;
};
