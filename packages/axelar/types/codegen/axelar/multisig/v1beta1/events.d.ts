import { BinaryWriter } from "../../../binary";
export interface KeygenStarted {
    module: string;
    keyId: string;
    participants: Uint8Array[];
}
export interface KeygenStartedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenStarted";
    value: Uint8Array;
}
export interface KeygenStartedAmino {
    module: string;
    key_id: string;
    participants: Uint8Array[];
}
export interface KeygenStartedAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenStarted";
    value: KeygenStartedAmino;
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
export interface KeygenCompletedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenCompleted";
    value: Uint8Array;
}
export interface KeygenCompletedAmino {
    module: string;
    key_id: string;
}
export interface KeygenCompletedAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenCompleted";
    value: KeygenCompletedAmino;
}
export interface KeygenCompletedSDKType {
    module: string;
    key_id: string;
}
export interface KeygenExpired {
    module: string;
    keyId: string;
}
export interface KeygenExpiredProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenExpired";
    value: Uint8Array;
}
export interface KeygenExpiredAmino {
    module: string;
    key_id: string;
}
export interface KeygenExpiredAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenExpired";
    value: KeygenExpiredAmino;
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
export interface PubKeySubmittedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.PubKeySubmitted";
    value: Uint8Array;
}
export interface PubKeySubmittedAmino {
    module: string;
    key_id: string;
    participant: Uint8Array;
    pub_key: Uint8Array;
}
export interface PubKeySubmittedAminoMsg {
    type: "/axelar.multisig.v1beta1.PubKeySubmitted";
    value: PubKeySubmittedAmino;
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
export interface SigningStarted_PubKeysEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface SigningStarted_PubKeysEntryAmino {
    key: string;
    value: Uint8Array;
}
export interface SigningStarted_PubKeysEntryAminoMsg {
    type: string;
    value: SigningStarted_PubKeysEntryAmino;
}
export interface SigningStarted_PubKeysEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface SigningStarted {
    module: string;
    sigId: bigint;
    keyId: string;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    payloadHash: Uint8Array;
    requestingModule: string;
}
export interface SigningStartedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SigningStarted";
    value: Uint8Array;
}
export interface SigningStartedAmino {
    module: string;
    sig_id: string;
    key_id: string;
    pub_keys: {
        [key: string]: Uint8Array;
    };
    payload_hash: Uint8Array;
    requesting_module: string;
}
export interface SigningStartedAminoMsg {
    type: "/axelar.multisig.v1beta1.SigningStarted";
    value: SigningStartedAmino;
}
export interface SigningStartedSDKType {
    module: string;
    sig_id: bigint;
    key_id: string;
    pub_keys: {
        [key: string]: Uint8Array;
    };
    payload_hash: Uint8Array;
    requesting_module: string;
}
export interface SigningCompleted {
    module: string;
    sigId: bigint;
}
export interface SigningCompletedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SigningCompleted";
    value: Uint8Array;
}
export interface SigningCompletedAmino {
    module: string;
    sig_id: string;
}
export interface SigningCompletedAminoMsg {
    type: "/axelar.multisig.v1beta1.SigningCompleted";
    value: SigningCompletedAmino;
}
export interface SigningCompletedSDKType {
    module: string;
    sig_id: bigint;
}
export interface SigningExpired {
    module: string;
    sigId: bigint;
}
export interface SigningExpiredProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SigningExpired";
    value: Uint8Array;
}
export interface SigningExpiredAmino {
    module: string;
    sig_id: string;
}
export interface SigningExpiredAminoMsg {
    type: "/axelar.multisig.v1beta1.SigningExpired";
    value: SigningExpiredAmino;
}
export interface SigningExpiredSDKType {
    module: string;
    sig_id: bigint;
}
export interface SignatureSubmitted {
    module: string;
    sigId: bigint;
    participant: Uint8Array;
    signature: Uint8Array;
}
export interface SignatureSubmittedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SignatureSubmitted";
    value: Uint8Array;
}
export interface SignatureSubmittedAmino {
    module: string;
    sig_id: string;
    participant: Uint8Array;
    signature: Uint8Array;
}
export interface SignatureSubmittedAminoMsg {
    type: "/axelar.multisig.v1beta1.SignatureSubmitted";
    value: SignatureSubmittedAmino;
}
export interface SignatureSubmittedSDKType {
    module: string;
    sig_id: bigint;
    participant: Uint8Array;
    signature: Uint8Array;
}
export interface KeyAssigned {
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyAssignedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyAssigned";
    value: Uint8Array;
}
export interface KeyAssignedAmino {
    module: string;
    chain: string;
    key_id: string;
}
export interface KeyAssignedAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyAssigned";
    value: KeyAssignedAmino;
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
export interface KeyRotatedProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyRotated";
    value: Uint8Array;
}
export interface KeyRotatedAmino {
    module: string;
    chain: string;
    key_id: string;
}
export interface KeyRotatedAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyRotated";
    value: KeyRotatedAmino;
}
export interface KeyRotatedSDKType {
    module: string;
    chain: string;
    key_id: string;
}
export interface KeygenOptOut {
    participant: Uint8Array;
}
export interface KeygenOptOutProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptOut";
    value: Uint8Array;
}
export interface KeygenOptOutAmino {
    participant: Uint8Array;
}
export interface KeygenOptOutAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenOptOut";
    value: KeygenOptOutAmino;
}
export interface KeygenOptOutSDKType {
    participant: Uint8Array;
}
export interface KeygenOptIn {
    participant: Uint8Array;
}
export interface KeygenOptInProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptIn";
    value: Uint8Array;
}
export interface KeygenOptInAmino {
    participant: Uint8Array;
}
export interface KeygenOptInAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenOptIn";
    value: KeygenOptInAmino;
}
export interface KeygenOptInSDKType {
    participant: Uint8Array;
}
export declare const KeygenStarted: {
    typeUrl: string;
    encode(message: KeygenStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenStarted;
    fromPartial(object: Partial<KeygenStarted>): KeygenStarted;
    fromAmino(object: KeygenStartedAmino): KeygenStarted;
    toAmino(message: KeygenStarted): KeygenStartedAmino;
    fromAminoMsg(object: KeygenStartedAminoMsg): KeygenStarted;
    fromProtoMsg(message: KeygenStartedProtoMsg): KeygenStarted;
    toProto(message: KeygenStarted): Uint8Array;
    toProtoMsg(message: KeygenStarted): KeygenStartedProtoMsg;
};
export declare const KeygenCompleted: {
    typeUrl: string;
    encode(message: KeygenCompleted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenCompleted;
    fromPartial(object: Partial<KeygenCompleted>): KeygenCompleted;
    fromAmino(object: KeygenCompletedAmino): KeygenCompleted;
    toAmino(message: KeygenCompleted): KeygenCompletedAmino;
    fromAminoMsg(object: KeygenCompletedAminoMsg): KeygenCompleted;
    fromProtoMsg(message: KeygenCompletedProtoMsg): KeygenCompleted;
    toProto(message: KeygenCompleted): Uint8Array;
    toProtoMsg(message: KeygenCompleted): KeygenCompletedProtoMsg;
};
export declare const KeygenExpired: {
    typeUrl: string;
    encode(message: KeygenExpired, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenExpired;
    fromPartial(object: Partial<KeygenExpired>): KeygenExpired;
    fromAmino(object: KeygenExpiredAmino): KeygenExpired;
    toAmino(message: KeygenExpired): KeygenExpiredAmino;
    fromAminoMsg(object: KeygenExpiredAminoMsg): KeygenExpired;
    fromProtoMsg(message: KeygenExpiredProtoMsg): KeygenExpired;
    toProto(message: KeygenExpired): Uint8Array;
    toProtoMsg(message: KeygenExpired): KeygenExpiredProtoMsg;
};
export declare const PubKeySubmitted: {
    typeUrl: string;
    encode(message: PubKeySubmitted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PubKeySubmitted;
    fromPartial(object: Partial<PubKeySubmitted>): PubKeySubmitted;
    fromAmino(object: PubKeySubmittedAmino): PubKeySubmitted;
    toAmino(message: PubKeySubmitted): PubKeySubmittedAmino;
    fromAminoMsg(object: PubKeySubmittedAminoMsg): PubKeySubmitted;
    fromProtoMsg(message: PubKeySubmittedProtoMsg): PubKeySubmitted;
    toProto(message: PubKeySubmitted): Uint8Array;
    toProtoMsg(message: PubKeySubmitted): PubKeySubmittedProtoMsg;
};
export declare const SigningStarted_PubKeysEntry: {
    encode(message: SigningStarted_PubKeysEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    fromPartial(object: Partial<SigningStarted_PubKeysEntry>): SigningStarted_PubKeysEntry;
    fromAmino(object: SigningStarted_PubKeysEntryAmino): SigningStarted_PubKeysEntry;
    toAmino(message: SigningStarted_PubKeysEntry): SigningStarted_PubKeysEntryAmino;
    fromAminoMsg(object: SigningStarted_PubKeysEntryAminoMsg): SigningStarted_PubKeysEntry;
    fromProtoMsg(message: SigningStarted_PubKeysEntryProtoMsg): SigningStarted_PubKeysEntry;
    toProto(message: SigningStarted_PubKeysEntry): Uint8Array;
};
export declare const SigningStarted: {
    typeUrl: string;
    encode(message: SigningStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigningStarted;
    fromPartial(object: Partial<SigningStarted>): SigningStarted;
    fromAmino(object: SigningStartedAmino): SigningStarted;
    toAmino(message: SigningStarted): SigningStartedAmino;
    fromAminoMsg(object: SigningStartedAminoMsg): SigningStarted;
    fromProtoMsg(message: SigningStartedProtoMsg): SigningStarted;
    toProto(message: SigningStarted): Uint8Array;
    toProtoMsg(message: SigningStarted): SigningStartedProtoMsg;
};
export declare const SigningCompleted: {
    typeUrl: string;
    encode(message: SigningCompleted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigningCompleted;
    fromPartial(object: Partial<SigningCompleted>): SigningCompleted;
    fromAmino(object: SigningCompletedAmino): SigningCompleted;
    toAmino(message: SigningCompleted): SigningCompletedAmino;
    fromAminoMsg(object: SigningCompletedAminoMsg): SigningCompleted;
    fromProtoMsg(message: SigningCompletedProtoMsg): SigningCompleted;
    toProto(message: SigningCompleted): Uint8Array;
    toProtoMsg(message: SigningCompleted): SigningCompletedProtoMsg;
};
export declare const SigningExpired: {
    typeUrl: string;
    encode(message: SigningExpired, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigningExpired;
    fromPartial(object: Partial<SigningExpired>): SigningExpired;
    fromAmino(object: SigningExpiredAmino): SigningExpired;
    toAmino(message: SigningExpired): SigningExpiredAmino;
    fromAminoMsg(object: SigningExpiredAminoMsg): SigningExpired;
    fromProtoMsg(message: SigningExpiredProtoMsg): SigningExpired;
    toProto(message: SigningExpired): Uint8Array;
    toProtoMsg(message: SigningExpired): SigningExpiredProtoMsg;
};
export declare const SignatureSubmitted: {
    typeUrl: string;
    encode(message: SignatureSubmitted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignatureSubmitted;
    fromPartial(object: Partial<SignatureSubmitted>): SignatureSubmitted;
    fromAmino(object: SignatureSubmittedAmino): SignatureSubmitted;
    toAmino(message: SignatureSubmitted): SignatureSubmittedAmino;
    fromAminoMsg(object: SignatureSubmittedAminoMsg): SignatureSubmitted;
    fromProtoMsg(message: SignatureSubmittedProtoMsg): SignatureSubmitted;
    toProto(message: SignatureSubmitted): Uint8Array;
    toProtoMsg(message: SignatureSubmitted): SignatureSubmittedProtoMsg;
};
export declare const KeyAssigned: {
    typeUrl: string;
    encode(message: KeyAssigned, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyAssigned;
    fromPartial(object: Partial<KeyAssigned>): KeyAssigned;
    fromAmino(object: KeyAssignedAmino): KeyAssigned;
    toAmino(message: KeyAssigned): KeyAssignedAmino;
    fromAminoMsg(object: KeyAssignedAminoMsg): KeyAssigned;
    fromProtoMsg(message: KeyAssignedProtoMsg): KeyAssigned;
    toProto(message: KeyAssigned): Uint8Array;
    toProtoMsg(message: KeyAssigned): KeyAssignedProtoMsg;
};
export declare const KeyRotated: {
    typeUrl: string;
    encode(message: KeyRotated, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyRotated;
    fromPartial(object: Partial<KeyRotated>): KeyRotated;
    fromAmino(object: KeyRotatedAmino): KeyRotated;
    toAmino(message: KeyRotated): KeyRotatedAmino;
    fromAminoMsg(object: KeyRotatedAminoMsg): KeyRotated;
    fromProtoMsg(message: KeyRotatedProtoMsg): KeyRotated;
    toProto(message: KeyRotated): Uint8Array;
    toProtoMsg(message: KeyRotated): KeyRotatedProtoMsg;
};
export declare const KeygenOptOut: {
    typeUrl: string;
    encode(message: KeygenOptOut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenOptOut;
    fromPartial(object: Partial<KeygenOptOut>): KeygenOptOut;
    fromAmino(object: KeygenOptOutAmino): KeygenOptOut;
    toAmino(message: KeygenOptOut): KeygenOptOutAmino;
    fromAminoMsg(object: KeygenOptOutAminoMsg): KeygenOptOut;
    fromProtoMsg(message: KeygenOptOutProtoMsg): KeygenOptOut;
    toProto(message: KeygenOptOut): Uint8Array;
    toProtoMsg(message: KeygenOptOut): KeygenOptOutProtoMsg;
};
export declare const KeygenOptIn: {
    typeUrl: string;
    encode(message: KeygenOptIn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenOptIn;
    fromPartial(object: Partial<KeygenOptIn>): KeygenOptIn;
    fromAmino(object: KeygenOptInAmino): KeygenOptIn;
    toAmino(message: KeygenOptIn): KeygenOptInAmino;
    fromAminoMsg(object: KeygenOptInAminoMsg): KeygenOptIn;
    fromProtoMsg(message: KeygenOptInProtoMsg): KeygenOptIn;
    toProto(message: KeygenOptIn): Uint8Array;
    toProtoMsg(message: KeygenOptIn): KeygenOptInProtoMsg;
};
