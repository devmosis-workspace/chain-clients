import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface KeygenStarted {
    module: string;
    keyId: string;
    participants: Uint8Array[];
}
export interface KeygenStartedSDKType {
    module: string;
    key_id: string;
    participants: Uint8Array[];
}
export interface KeygenCompleted {
    module: string;
    keyId: string;
}
export interface KeygenCompletedSDKType {
    module: string;
    key_id: string;
}
export interface KeygenExpired {
    module: string;
    keyId: string;
}
export interface KeygenExpiredSDKType {
    module: string;
    key_id: string;
}
export interface PubKeySubmitted {
    module: string;
    keyId: string;
    participant: Uint8Array;
    pubKey: Uint8Array;
}
export interface PubKeySubmittedSDKType {
    module: string;
    key_id: string;
    participant: Uint8Array;
    pub_key: Uint8Array;
}
export interface SigningStarted_PubKeysEntry {
    key: string;
    value: Uint8Array;
}
export interface SigningStarted_PubKeysEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface SigningStarted {
    module: string;
    sigId: Long;
    keyId: string;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    payloadHash: Uint8Array;
    requestingModule: string;
}
export interface SigningStartedSDKType {
    module: string;
    sig_id: Long;
    key_id: string;
    pub_keys: {
        [key: string]: Uint8Array;
    };
    payload_hash: Uint8Array;
    requesting_module: string;
}
export interface SigningCompleted {
    module: string;
    sigId: Long;
}
export interface SigningCompletedSDKType {
    module: string;
    sig_id: Long;
}
export interface SigningExpired {
    module: string;
    sigId: Long;
}
export interface SigningExpiredSDKType {
    module: string;
    sig_id: Long;
}
export interface SignatureSubmitted {
    module: string;
    sigId: Long;
    participant: Uint8Array;
    signature: Uint8Array;
}
export interface SignatureSubmittedSDKType {
    module: string;
    sig_id: Long;
    participant: Uint8Array;
    signature: Uint8Array;
}
export interface KeyAssigned {
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyAssignedSDKType {
    module: string;
    chain: string;
    key_id: string;
}
export interface KeyRotated {
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyRotatedSDKType {
    module: string;
    chain: string;
    key_id: string;
}
export interface KeygenOptOut {
    participant: Uint8Array;
}
export interface KeygenOptOutSDKType {
    participant: Uint8Array;
}
export interface KeygenOptIn {
    participant: Uint8Array;
}
export interface KeygenOptInSDKType {
    participant: Uint8Array;
}
export declare const KeygenStarted: {
    encode(message: KeygenStarted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenStarted;
    fromPartial(object: Partial<KeygenStarted>): KeygenStarted;
};
export declare const KeygenCompleted: {
    encode(message: KeygenCompleted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenCompleted;
    fromPartial(object: Partial<KeygenCompleted>): KeygenCompleted;
};
export declare const KeygenExpired: {
    encode(message: KeygenExpired, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenExpired;
    fromPartial(object: Partial<KeygenExpired>): KeygenExpired;
};
export declare const PubKeySubmitted: {
    encode(message: PubKeySubmitted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PubKeySubmitted;
    fromPartial(object: Partial<PubKeySubmitted>): PubKeySubmitted;
};
export declare const SigningStarted_PubKeysEntry: {
    encode(message: SigningStarted_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    fromPartial(object: Partial<SigningStarted_PubKeysEntry>): SigningStarted_PubKeysEntry;
};
export declare const SigningStarted: {
    encode(message: SigningStarted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigningStarted;
    fromPartial(object: Partial<SigningStarted>): SigningStarted;
};
export declare const SigningCompleted: {
    encode(message: SigningCompleted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigningCompleted;
    fromPartial(object: Partial<SigningCompleted>): SigningCompleted;
};
export declare const SigningExpired: {
    encode(message: SigningExpired, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigningExpired;
    fromPartial(object: Partial<SigningExpired>): SigningExpired;
};
export declare const SignatureSubmitted: {
    encode(message: SignatureSubmitted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignatureSubmitted;
    fromPartial(object: Partial<SignatureSubmitted>): SignatureSubmitted;
};
export declare const KeyAssigned: {
    encode(message: KeyAssigned, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyAssigned;
    fromPartial(object: Partial<KeyAssigned>): KeyAssigned;
};
export declare const KeyRotated: {
    encode(message: KeyRotated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyRotated;
    fromPartial(object: Partial<KeyRotated>): KeyRotated;
};
export declare const KeygenOptOut: {
    encode(message: KeygenOptOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenOptOut;
    fromPartial(object: Partial<KeygenOptOut>): KeygenOptOut;
};
export declare const KeygenOptIn: {
    encode(message: KeygenOptIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenOptIn;
    fromPartial(object: Partial<KeygenOptIn>): KeygenOptIn;
};
