import { Snapshot, SnapshotAmino, SnapshotSDKType } from "../../snapshot/exported/v1beta1/types";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Key_PubKeysEntry {
    key: string;
    value: Uint8Array;
}
export interface Key_PubKeysEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface Key_PubKeysEntryAmino {
    key?: string;
    value?: string;
}
export interface Key_PubKeysEntryAminoMsg {
    type: string;
    value: Key_PubKeysEntryAmino;
}
export interface Key_PubKeysEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface Key {
    id: string;
    snapshot: Snapshot;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    signingThreshold: Threshold;
    state: KeyState;
}
export interface KeyProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.Key";
    value: Uint8Array;
}
export interface KeyAmino {
    id?: string;
    snapshot?: SnapshotAmino;
    pub_keys?: {
        [key: string]: string;
    };
    signing_threshold?: ThresholdAmino;
    state?: KeyState;
}
export interface KeyAminoMsg {
    type: "/axelar.multisig.v1beta1.Key";
    value: KeyAmino;
}
export interface KeySDKType {
    id: string;
    snapshot: SnapshotSDKType;
    pub_keys: {
        [key: string]: Uint8Array;
    };
    signing_threshold: ThresholdSDKType;
    state: KeyState;
}
export interface KeygenSession_IsPubKeyReceivedEntry {
    key: string;
    value: boolean;
}
export interface KeygenSession_IsPubKeyReceivedEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface KeygenSession_IsPubKeyReceivedEntryAmino {
    key?: string;
    value?: boolean;
}
export interface KeygenSession_IsPubKeyReceivedEntryAminoMsg {
    type: string;
    value: KeygenSession_IsPubKeyReceivedEntryAmino;
}
export interface KeygenSession_IsPubKeyReceivedEntrySDKType {
    key: string;
    value: boolean;
}
export interface KeygenSession {
    key: Key;
    state: MultisigState;
    keygenThreshold: Threshold;
    expiresAt: bigint;
    completedAt: bigint;
    isPubKeyReceived: {
        [key: string]: boolean;
    };
    gracePeriod: bigint;
}
export interface KeygenSessionProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenSession";
    value: Uint8Array;
}
export interface KeygenSessionAmino {
    key?: KeyAmino;
    state?: MultisigState;
    keygen_threshold?: ThresholdAmino;
    expires_at?: string;
    completed_at?: string;
    is_pub_key_received?: {
        [key: string]: boolean;
    };
    grace_period?: string;
}
export interface KeygenSessionAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenSession";
    value: KeygenSessionAmino;
}
export interface KeygenSessionSDKType {
    key: KeySDKType;
    state: MultisigState;
    keygen_threshold: ThresholdSDKType;
    expires_at: bigint;
    completed_at: bigint;
    is_pub_key_received: {
        [key: string]: boolean;
    };
    grace_period: bigint;
}
export interface MultiSig_SigsEntry {
    key: string;
    value: Uint8Array;
}
export interface MultiSig_SigsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface MultiSig_SigsEntryAmino {
    key?: string;
    value?: string;
}
export interface MultiSig_SigsEntryAminoMsg {
    type: string;
    value: MultiSig_SigsEntryAmino;
}
export interface MultiSig_SigsEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface MultiSig {
    keyId: string;
    payloadHash: Uint8Array;
    sigs: {
        [key: string]: Uint8Array;
    };
}
export interface MultiSigProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.MultiSig";
    value: Uint8Array;
}
export interface MultiSigAmino {
    key_id?: string;
    payload_hash?: string;
    sigs?: {
        [key: string]: string;
    };
}
export interface MultiSigAminoMsg {
    type: "/axelar.multisig.v1beta1.MultiSig";
    value: MultiSigAmino;
}
export interface MultiSigSDKType {
    key_id: string;
    payload_hash: Uint8Array;
    sigs: {
        [key: string]: Uint8Array;
    };
}
export interface SigningSession {
    id: bigint;
    multiSig: MultiSig;
    state: MultisigState;
    key: Key;
    expiresAt: bigint;
    completedAt: bigint;
    gracePeriod: bigint;
    module: string;
    moduleMetadata?: (Any) | undefined;
}
export interface SigningSessionProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SigningSession";
    value: Uint8Array;
}
export type SigningSessionEncoded = Omit<SigningSession, "moduleMetadata"> & {
    moduleMetadata?: AnyProtoMsg | undefined;
};
export interface SigningSessionAmino {
    id?: string;
    multi_sig?: MultiSigAmino;
    state?: MultisigState;
    key?: KeyAmino;
    expires_at?: string;
    completed_at?: string;
    grace_period?: string;
    module?: string;
    module_metadata?: AnyAmino;
}
export interface SigningSessionAminoMsg {
    type: "/axelar.multisig.v1beta1.SigningSession";
    value: SigningSessionAmino;
}
export interface SigningSessionSDKType {
    id: bigint;
    multi_sig: MultiSigSDKType;
    state: MultisigState;
    key: KeySDKType;
    expires_at: bigint;
    completed_at: bigint;
    grace_period: bigint;
    module: string;
    module_metadata?: AnySDKType | undefined;
}
export interface KeyEpoch {
    epoch: bigint;
    chain: string;
    keyId: string;
}
export interface KeyEpochProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeyEpoch";
    value: Uint8Array;
}
export interface KeyEpochAmino {
    epoch?: string;
    chain?: string;
    key_id?: string;
}
export interface KeyEpochAminoMsg {
    type: "/axelar.multisig.v1beta1.KeyEpoch";
    value: KeyEpochAmino;
}
export interface KeyEpochSDKType {
    epoch: bigint;
    chain: string;
    key_id: string;
}
export declare const Key_PubKeysEntry: {
    encode(message: Key_PubKeysEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Key_PubKeysEntry;
    fromPartial(object: Partial<Key_PubKeysEntry>): Key_PubKeysEntry;
    fromAmino(object: Key_PubKeysEntryAmino): Key_PubKeysEntry;
    toAmino(message: Key_PubKeysEntry): Key_PubKeysEntryAmino;
    fromAminoMsg(object: Key_PubKeysEntryAminoMsg): Key_PubKeysEntry;
    fromProtoMsg(message: Key_PubKeysEntryProtoMsg): Key_PubKeysEntry;
    toProto(message: Key_PubKeysEntry): Uint8Array;
};
export declare const Key: {
    typeUrl: string;
    encode(message: Key, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Key;
    fromPartial(object: Partial<Key>): Key;
    fromAmino(object: KeyAmino): Key;
    toAmino(message: Key): KeyAmino;
    fromAminoMsg(object: KeyAminoMsg): Key;
    fromProtoMsg(message: KeyProtoMsg): Key;
    toProto(message: Key): Uint8Array;
    toProtoMsg(message: Key): KeyProtoMsg;
};
export declare const KeygenSession_IsPubKeyReceivedEntry: {
    encode(message: KeygenSession_IsPubKeyReceivedEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenSession_IsPubKeyReceivedEntry;
    fromPartial(object: Partial<KeygenSession_IsPubKeyReceivedEntry>): KeygenSession_IsPubKeyReceivedEntry;
    fromAmino(object: KeygenSession_IsPubKeyReceivedEntryAmino): KeygenSession_IsPubKeyReceivedEntry;
    toAmino(message: KeygenSession_IsPubKeyReceivedEntry): KeygenSession_IsPubKeyReceivedEntryAmino;
    fromAminoMsg(object: KeygenSession_IsPubKeyReceivedEntryAminoMsg): KeygenSession_IsPubKeyReceivedEntry;
    fromProtoMsg(message: KeygenSession_IsPubKeyReceivedEntryProtoMsg): KeygenSession_IsPubKeyReceivedEntry;
    toProto(message: KeygenSession_IsPubKeyReceivedEntry): Uint8Array;
};
export declare const KeygenSession: {
    typeUrl: string;
    encode(message: KeygenSession, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenSession;
    fromPartial(object: Partial<KeygenSession>): KeygenSession;
    fromAmino(object: KeygenSessionAmino): KeygenSession;
    toAmino(message: KeygenSession): KeygenSessionAmino;
    fromAminoMsg(object: KeygenSessionAminoMsg): KeygenSession;
    fromProtoMsg(message: KeygenSessionProtoMsg): KeygenSession;
    toProto(message: KeygenSession): Uint8Array;
    toProtoMsg(message: KeygenSession): KeygenSessionProtoMsg;
};
export declare const MultiSig_SigsEntry: {
    encode(message: MultiSig_SigsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiSig_SigsEntry;
    fromPartial(object: Partial<MultiSig_SigsEntry>): MultiSig_SigsEntry;
    fromAmino(object: MultiSig_SigsEntryAmino): MultiSig_SigsEntry;
    toAmino(message: MultiSig_SigsEntry): MultiSig_SigsEntryAmino;
    fromAminoMsg(object: MultiSig_SigsEntryAminoMsg): MultiSig_SigsEntry;
    fromProtoMsg(message: MultiSig_SigsEntryProtoMsg): MultiSig_SigsEntry;
    toProto(message: MultiSig_SigsEntry): Uint8Array;
};
export declare const MultiSig: {
    typeUrl: string;
    encode(message: MultiSig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiSig;
    fromPartial(object: Partial<MultiSig>): MultiSig;
    fromAmino(object: MultiSigAmino): MultiSig;
    toAmino(message: MultiSig): MultiSigAmino;
    fromAminoMsg(object: MultiSigAminoMsg): MultiSig;
    fromProtoMsg(message: MultiSigProtoMsg): MultiSig;
    toProto(message: MultiSig): Uint8Array;
    toProtoMsg(message: MultiSig): MultiSigProtoMsg;
};
export declare const SigningSession: {
    typeUrl: string;
    encode(message: SigningSession, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigningSession;
    fromPartial(object: Partial<SigningSession>): SigningSession;
    fromAmino(object: SigningSessionAmino): SigningSession;
    toAmino(message: SigningSession): SigningSessionAmino;
    fromAminoMsg(object: SigningSessionAminoMsg): SigningSession;
    fromProtoMsg(message: SigningSessionProtoMsg): SigningSession;
    toProto(message: SigningSession): Uint8Array;
    toProtoMsg(message: SigningSession): SigningSessionProtoMsg;
};
export declare const KeyEpoch: {
    typeUrl: string;
    encode(message: KeyEpoch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyEpoch;
    fromPartial(object: Partial<KeyEpoch>): KeyEpoch;
    fromAmino(object: KeyEpochAmino): KeyEpoch;
    toAmino(message: KeyEpoch): KeyEpochAmino;
    fromAminoMsg(object: KeyEpochAminoMsg): KeyEpoch;
    fromProtoMsg(message: KeyEpochProtoMsg): KeyEpoch;
    toProto(message: KeyEpoch): Uint8Array;
    toProtoMsg(message: KeyEpoch): KeyEpochProtoMsg;
};
export declare const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: AnyAmino) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: Any) => AnyAmino;
