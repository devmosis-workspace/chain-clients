import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface KeyIDRequest {
    chain: string;
}
export interface KeyIDRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyIDRequest";
    value: Uint8Array;
}
export interface KeyIDRequestAmino {
    chain: string;
}
export interface KeyIDRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyIDRequest";
    value: KeyIDRequestAmino;
}
export interface KeyIDRequestSDKType {
    chain: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
    keyId: string;
}
export interface KeyIDResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyIDResponse";
    value: Uint8Array;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponseAmino {
    key_id: string;
}
export interface KeyIDResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyIDResponse";
    value: KeyIDResponseAmino;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponseSDKType {
    key_id: string;
}
export interface NextKeyIDRequest {
    chain: string;
}
export interface NextKeyIDRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.NextKeyIDRequest";
    value: Uint8Array;
}
export interface NextKeyIDRequestAmino {
    chain: string;
}
export interface NextKeyIDRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.NextKeyIDRequest";
    value: NextKeyIDRequestAmino;
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
export interface NextKeyIDResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.NextKeyIDResponse";
    value: Uint8Array;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponseAmino {
    key_id: string;
}
export interface NextKeyIDResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.NextKeyIDResponse";
    value: NextKeyIDResponseAmino;
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
export interface KeyRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyRequest";
    value: Uint8Array;
}
export interface KeyRequestAmino {
    key_id: string;
}
export interface KeyRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyRequest";
    value: KeyRequestAmino;
}
export interface KeyRequestSDKType {
    key_id: string;
}
export interface KeygenParticipant {
    address: string;
    weight: Uint8Array;
    pubKey: string;
}
export interface KeygenParticipantProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenParticipant";
    value: Uint8Array;
}
export interface KeygenParticipantAmino {
    address: string;
    weight: Uint8Array;
    pub_key: string;
}
export interface KeygenParticipantAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenParticipant";
    value: KeygenParticipantAmino;
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
    startedAt: bigint;
    startedAtTimestamp: Timestamp;
    thresholdWeight: Uint8Array;
    bondedWeight: Uint8Array;
    /** Keygen participants in descending order by weight */
    participants: KeygenParticipant[];
}
export interface KeyResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyResponse";
    value: Uint8Array;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponseAmino {
    key_id: string;
    state: KeyState;
    started_at: string;
    started_at_timestamp?: TimestampAmino;
    threshold_weight: Uint8Array;
    bonded_weight: Uint8Array;
    /** Keygen participants in descending order by weight */
    participants: KeygenParticipantAmino[];
}
export interface KeyResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyResponse";
    value: KeyResponseAmino;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponseSDKType {
    key_id: string;
    state: KeyState;
    started_at: bigint;
    started_at_timestamp: TimestampSDKType;
    threshold_weight: Uint8Array;
    bonded_weight: Uint8Array;
    participants: KeygenParticipantSDKType[];
}
export interface KeygenSessionRequest {
    keyId: string;
}
export interface KeygenSessionRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenSessionRequest";
    value: Uint8Array;
}
export interface KeygenSessionRequestAmino {
    key_id: string;
}
export interface KeygenSessionRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenSessionRequest";
    value: KeygenSessionRequestAmino;
}
export interface KeygenSessionRequestSDKType {
    key_id: string;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
    startedAt: bigint;
    startedAtTimestamp: Timestamp;
    expiresAt: bigint;
    completedAt: bigint;
    gracePeriod: bigint;
    state: MultisigState;
    keygenThresholdWeight: Uint8Array;
    signingThresholdWeight: Uint8Array;
    bondedWeight: Uint8Array;
    /** Keygen candidates in descending order by weight */
    participants: KeygenParticipant[];
}
export interface KeygenSessionResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenSessionResponse";
    value: Uint8Array;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponseAmino {
    started_at: string;
    started_at_timestamp?: TimestampAmino;
    expires_at: string;
    completed_at: string;
    grace_period: string;
    state: MultisigState;
    keygen_threshold_weight: Uint8Array;
    signing_threshold_weight: Uint8Array;
    bonded_weight: Uint8Array;
    /** Keygen candidates in descending order by weight */
    participants: KeygenParticipantAmino[];
}
export interface KeygenSessionResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenSessionResponse";
    value: KeygenSessionResponseAmino;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponseSDKType {
    started_at: bigint;
    started_at_timestamp: TimestampSDKType;
    expires_at: bigint;
    completed_at: bigint;
    grace_period: bigint;
    state: MultisigState;
    keygen_threshold_weight: Uint8Array;
    signing_threshold_weight: Uint8Array;
    bonded_weight: Uint8Array;
    participants: KeygenParticipantSDKType[];
}
export declare const KeyIDRequest: {
    typeUrl: string;
    encode(message: KeyIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyIDRequest;
    fromPartial(object: Partial<KeyIDRequest>): KeyIDRequest;
    fromAmino(object: KeyIDRequestAmino): KeyIDRequest;
    toAmino(message: KeyIDRequest): KeyIDRequestAmino;
    fromAminoMsg(object: KeyIDRequestAminoMsg): KeyIDRequest;
    fromProtoMsg(message: KeyIDRequestProtoMsg): KeyIDRequest;
    toProto(message: KeyIDRequest): Uint8Array;
    toProtoMsg(message: KeyIDRequest): KeyIDRequestProtoMsg;
};
export declare const KeyIDResponse: {
    typeUrl: string;
    encode(message: KeyIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyIDResponse;
    fromPartial(object: Partial<KeyIDResponse>): KeyIDResponse;
    fromAmino(object: KeyIDResponseAmino): KeyIDResponse;
    toAmino(message: KeyIDResponse): KeyIDResponseAmino;
    fromAminoMsg(object: KeyIDResponseAminoMsg): KeyIDResponse;
    fromProtoMsg(message: KeyIDResponseProtoMsg): KeyIDResponse;
    toProto(message: KeyIDResponse): Uint8Array;
    toProtoMsg(message: KeyIDResponse): KeyIDResponseProtoMsg;
};
export declare const NextKeyIDRequest: {
    typeUrl: string;
    encode(message: NextKeyIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NextKeyIDRequest;
    fromPartial(object: Partial<NextKeyIDRequest>): NextKeyIDRequest;
    fromAmino(object: NextKeyIDRequestAmino): NextKeyIDRequest;
    toAmino(message: NextKeyIDRequest): NextKeyIDRequestAmino;
    fromAminoMsg(object: NextKeyIDRequestAminoMsg): NextKeyIDRequest;
    fromProtoMsg(message: NextKeyIDRequestProtoMsg): NextKeyIDRequest;
    toProto(message: NextKeyIDRequest): Uint8Array;
    toProtoMsg(message: NextKeyIDRequest): NextKeyIDRequestProtoMsg;
};
export declare const NextKeyIDResponse: {
    typeUrl: string;
    encode(message: NextKeyIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NextKeyIDResponse;
    fromPartial(object: Partial<NextKeyIDResponse>): NextKeyIDResponse;
    fromAmino(object: NextKeyIDResponseAmino): NextKeyIDResponse;
    toAmino(message: NextKeyIDResponse): NextKeyIDResponseAmino;
    fromAminoMsg(object: NextKeyIDResponseAminoMsg): NextKeyIDResponse;
    fromProtoMsg(message: NextKeyIDResponseProtoMsg): NextKeyIDResponse;
    toProto(message: NextKeyIDResponse): Uint8Array;
    toProtoMsg(message: NextKeyIDResponse): NextKeyIDResponseProtoMsg;
};
export declare const KeyRequest: {
    typeUrl: string;
    encode(message: KeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyRequest;
    fromPartial(object: Partial<KeyRequest>): KeyRequest;
    fromAmino(object: KeyRequestAmino): KeyRequest;
    toAmino(message: KeyRequest): KeyRequestAmino;
    fromAminoMsg(object: KeyRequestAminoMsg): KeyRequest;
    fromProtoMsg(message: KeyRequestProtoMsg): KeyRequest;
    toProto(message: KeyRequest): Uint8Array;
    toProtoMsg(message: KeyRequest): KeyRequestProtoMsg;
};
export declare const KeygenParticipant: {
    typeUrl: string;
    encode(message: KeygenParticipant, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenParticipant;
    fromPartial(object: Partial<KeygenParticipant>): KeygenParticipant;
    fromAmino(object: KeygenParticipantAmino): KeygenParticipant;
    toAmino(message: KeygenParticipant): KeygenParticipantAmino;
    fromAminoMsg(object: KeygenParticipantAminoMsg): KeygenParticipant;
    fromProtoMsg(message: KeygenParticipantProtoMsg): KeygenParticipant;
    toProto(message: KeygenParticipant): Uint8Array;
    toProtoMsg(message: KeygenParticipant): KeygenParticipantProtoMsg;
};
export declare const KeyResponse: {
    typeUrl: string;
    encode(message: KeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyResponse;
    fromPartial(object: Partial<KeyResponse>): KeyResponse;
    fromAmino(object: KeyResponseAmino): KeyResponse;
    toAmino(message: KeyResponse): KeyResponseAmino;
    fromAminoMsg(object: KeyResponseAminoMsg): KeyResponse;
    fromProtoMsg(message: KeyResponseProtoMsg): KeyResponse;
    toProto(message: KeyResponse): Uint8Array;
    toProtoMsg(message: KeyResponse): KeyResponseProtoMsg;
};
export declare const KeygenSessionRequest: {
    typeUrl: string;
    encode(message: KeygenSessionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenSessionRequest;
    fromPartial(object: Partial<KeygenSessionRequest>): KeygenSessionRequest;
    fromAmino(object: KeygenSessionRequestAmino): KeygenSessionRequest;
    toAmino(message: KeygenSessionRequest): KeygenSessionRequestAmino;
    fromAminoMsg(object: KeygenSessionRequestAminoMsg): KeygenSessionRequest;
    fromProtoMsg(message: KeygenSessionRequestProtoMsg): KeygenSessionRequest;
    toProto(message: KeygenSessionRequest): Uint8Array;
    toProtoMsg(message: KeygenSessionRequest): KeygenSessionRequestProtoMsg;
};
export declare const KeygenSessionResponse: {
    typeUrl: string;
    encode(message: KeygenSessionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenSessionResponse;
    fromPartial(object: Partial<KeygenSessionResponse>): KeygenSessionResponse;
    fromAmino(object: KeygenSessionResponseAmino): KeygenSessionResponse;
    toAmino(message: KeygenSessionResponse): KeygenSessionResponseAmino;
    fromAminoMsg(object: KeygenSessionResponseAminoMsg): KeygenSessionResponse;
    fromProtoMsg(message: KeygenSessionResponseProtoMsg): KeygenSessionResponse;
    toProto(message: KeygenSessionResponse): Uint8Array;
    toProtoMsg(message: KeygenSessionResponse): KeygenSessionResponseProtoMsg;
};
