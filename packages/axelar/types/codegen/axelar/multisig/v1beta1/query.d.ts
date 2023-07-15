import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface KeyIDRequest {
    chain: string;
}
export interface KeyIDRequestSDKType {
    chain: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
    keyId: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponseSDKType {
    key_id: string;
}
export interface NextKeyIDRequest {
    chain: string;
}
export interface NextKeyIDRequestSDKType {
    chain: string;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponse {
    keyId: string;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponseSDKType {
    key_id: string;
}
export interface KeyRequest {
    keyId: string;
}
export interface KeyRequestSDKType {
    key_id: string;
}
export interface KeygenParticipant {
    address: string;
    weight: Uint8Array;
    pubKey: string;
}
export interface KeygenParticipantSDKType {
    address: string;
    weight: Uint8Array;
    pub_key: string;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponse {
    keyId: string;
    state: KeyState;
    startedAt: Long;
    startedAtTimestamp?: Timestamp;
    thresholdWeight: Uint8Array;
    bondedWeight: Uint8Array;
    /** Keygen participants in descending order by weight */
    participants: KeygenParticipant[];
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponseSDKType {
    key_id: string;
    state: KeyState;
    started_at: Long;
    started_at_timestamp?: TimestampSDKType;
    threshold_weight: Uint8Array;
    bonded_weight: Uint8Array;
    participants: KeygenParticipantSDKType[];
}
export interface KeygenSessionRequest {
    keyId: string;
}
export interface KeygenSessionRequestSDKType {
    key_id: string;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
    startedAt: Long;
    startedAtTimestamp?: Timestamp;
    expiresAt: Long;
    completedAt: Long;
    gracePeriod: Long;
    state: MultisigState;
    keygenThresholdWeight: Uint8Array;
    signingThresholdWeight: Uint8Array;
    bondedWeight: Uint8Array;
    /** Keygen candidates in descending order by weight */
    participants: KeygenParticipant[];
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponseSDKType {
    started_at: Long;
    started_at_timestamp?: TimestampSDKType;
    expires_at: Long;
    completed_at: Long;
    grace_period: Long;
    state: MultisigState;
    keygen_threshold_weight: Uint8Array;
    signing_threshold_weight: Uint8Array;
    bonded_weight: Uint8Array;
    participants: KeygenParticipantSDKType[];
}
export declare const KeyIDRequest: {
    encode(message: KeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyIDRequest;
    fromPartial(object: Partial<KeyIDRequest>): KeyIDRequest;
};
export declare const KeyIDResponse: {
    encode(message: KeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyIDResponse;
    fromPartial(object: Partial<KeyIDResponse>): KeyIDResponse;
};
export declare const NextKeyIDRequest: {
    encode(message: NextKeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NextKeyIDRequest;
    fromPartial(object: Partial<NextKeyIDRequest>): NextKeyIDRequest;
};
export declare const NextKeyIDResponse: {
    encode(message: NextKeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NextKeyIDResponse;
    fromPartial(object: Partial<NextKeyIDResponse>): NextKeyIDResponse;
};
export declare const KeyRequest: {
    encode(message: KeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyRequest;
    fromPartial(object: Partial<KeyRequest>): KeyRequest;
};
export declare const KeygenParticipant: {
    encode(message: KeygenParticipant, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenParticipant;
    fromPartial(object: Partial<KeygenParticipant>): KeygenParticipant;
};
export declare const KeyResponse: {
    encode(message: KeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyResponse;
    fromPartial(object: Partial<KeyResponse>): KeyResponse;
};
export declare const KeygenSessionRequest: {
    encode(message: KeygenSessionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenSessionRequest;
    fromPartial(object: Partial<KeygenSessionRequest>): KeygenSessionRequest;
};
export declare const KeygenSessionResponse: {
    encode(message: KeygenSessionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenSessionResponse;
    fromPartial(object: Partial<KeygenSessionResponse>): KeygenSessionResponse;
};
