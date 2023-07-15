import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StartKeygenRequest {
    sender: string;
    keyId: string;
}
export interface StartKeygenRequestSDKType {
    sender: string;
    key_id: string;
}
export interface StartKeygenResponse {
}
export interface StartKeygenResponseSDKType {
}
export interface SubmitPubKeyRequest {
    sender: string;
    keyId: string;
    pubKey: Uint8Array;
    signature: Uint8Array;
}
export interface SubmitPubKeyRequestSDKType {
    sender: string;
    key_id: string;
    pub_key: Uint8Array;
    signature: Uint8Array;
}
export interface SubmitPubKeyResponse {
}
export interface SubmitPubKeyResponseSDKType {
}
export interface SubmitSignatureRequest {
    sender: string;
    sigId: Long;
    signature: Uint8Array;
}
export interface SubmitSignatureRequestSDKType {
    sender: string;
    sig_id: Long;
    signature: Uint8Array;
}
export interface SubmitSignatureResponse {
}
export interface SubmitSignatureResponseSDKType {
}
export interface RotateKeyRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface RotateKeyRequestSDKType {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
export interface RotateKeyResponse {
}
export interface RotateKeyResponseSDKType {
}
export interface KeygenOptOutRequest {
    sender: Uint8Array;
}
export interface KeygenOptOutRequestSDKType {
    sender: Uint8Array;
}
export interface KeygenOptOutResponse {
}
export interface KeygenOptOutResponseSDKType {
}
export interface KeygenOptInRequest {
    sender: Uint8Array;
}
export interface KeygenOptInRequestSDKType {
    sender: Uint8Array;
}
export interface KeygenOptInResponse {
}
export interface KeygenOptInResponseSDKType {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StartKeygenRequest;
    fromPartial(object: Partial<StartKeygenRequest>): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): StartKeygenResponse;
    fromPartial(_: Partial<StartKeygenResponse>): StartKeygenResponse;
};
export declare const SubmitPubKeyRequest: {
    encode(message: SubmitPubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SubmitPubKeyRequest;
    fromPartial(object: Partial<SubmitPubKeyRequest>): SubmitPubKeyRequest;
};
export declare const SubmitPubKeyResponse: {
    encode(_: SubmitPubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SubmitPubKeyResponse;
    fromPartial(_: Partial<SubmitPubKeyResponse>): SubmitPubKeyResponse;
};
export declare const SubmitSignatureRequest: {
    encode(message: SubmitSignatureRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SubmitSignatureRequest;
    fromPartial(object: Partial<SubmitSignatureRequest>): SubmitSignatureRequest;
};
export declare const SubmitSignatureResponse: {
    encode(_: SubmitSignatureResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SubmitSignatureResponse;
    fromPartial(_: Partial<SubmitSignatureResponse>): SubmitSignatureResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RotateKeyRequest;
    fromPartial(object: Partial<RotateKeyRequest>): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RotateKeyResponse;
    fromPartial(_: Partial<RotateKeyResponse>): RotateKeyResponse;
};
export declare const KeygenOptOutRequest: {
    encode(message: KeygenOptOutRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenOptOutRequest;
    fromPartial(object: Partial<KeygenOptOutRequest>): KeygenOptOutRequest;
};
export declare const KeygenOptOutResponse: {
    encode(_: KeygenOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): KeygenOptOutResponse;
    fromPartial(_: Partial<KeygenOptOutResponse>): KeygenOptOutResponse;
};
export declare const KeygenOptInRequest: {
    encode(message: KeygenOptInRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenOptInRequest;
    fromPartial(object: Partial<KeygenOptInRequest>): KeygenOptInRequest;
};
export declare const KeygenOptInResponse: {
    encode(_: KeygenOptInResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): KeygenOptInResponse;
    fromPartial(_: Partial<KeygenOptInResponse>): KeygenOptInResponse;
};
