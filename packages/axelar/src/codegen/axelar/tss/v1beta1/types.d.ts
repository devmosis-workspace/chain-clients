import { KeyRole, KeyType } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
export interface KeygenVoteData {
    pubKey: Uint8Array;
    groupRecoveryInfo: Uint8Array;
}
export interface KeygenVoteDataProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.KeygenVoteData";
    value: Uint8Array;
}
export interface KeygenVoteDataAmino {
    pub_key?: string;
    group_recovery_info?: string;
}
export interface KeygenVoteDataAminoMsg {
    type: "/axelar.tss.v1beta1.KeygenVoteData";
    value: KeygenVoteDataAmino;
}
export interface KeygenVoteDataSDKType {
    pub_key: Uint8Array;
    group_recovery_info: Uint8Array;
}
/** KeyInfo holds information about a key */
export interface KeyInfo {
    keyId: string;
    keyRole: KeyRole;
    keyType: KeyType;
}
export interface KeyInfoProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.KeyInfo";
    value: Uint8Array;
}
/** KeyInfo holds information about a key */
export interface KeyInfoAmino {
    key_id?: string;
    key_role?: KeyRole;
    key_type?: KeyType;
}
export interface KeyInfoAminoMsg {
    type: "/axelar.tss.v1beta1.KeyInfo";
    value: KeyInfoAmino;
}
/** KeyInfo holds information about a key */
export interface KeyInfoSDKType {
    key_id: string;
    key_role: KeyRole;
    key_type: KeyType;
}
export interface MultisigInfo {
    id: string;
    timeout: bigint;
    targetNum: bigint;
    infos: MultisigInfo_Info[];
}
export interface MultisigInfoProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.MultisigInfo";
    value: Uint8Array;
}
export interface MultisigInfoAmino {
    id?: string;
    timeout?: string;
    target_num?: string;
    infos?: MultisigInfo_InfoAmino[];
}
export interface MultisigInfoAminoMsg {
    type: "/axelar.tss.v1beta1.MultisigInfo";
    value: MultisigInfoAmino;
}
export interface MultisigInfoSDKType {
    id: string;
    timeout: bigint;
    target_num: bigint;
    infos: MultisigInfo_InfoSDKType[];
}
export interface MultisigInfo_Info {
    participant: Uint8Array;
    data: Uint8Array[];
}
export interface MultisigInfo_InfoProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.Info";
    value: Uint8Array;
}
export interface MultisigInfo_InfoAmino {
    participant?: string;
    data?: string[];
}
export interface MultisigInfo_InfoAminoMsg {
    type: "/axelar.tss.v1beta1.Info";
    value: MultisigInfo_InfoAmino;
}
export interface MultisigInfo_InfoSDKType {
    participant: Uint8Array;
    data: Uint8Array[];
}
export interface KeyRecoveryInfo_PrivateEntry {
    key: string;
    value: Uint8Array;
}
export interface KeyRecoveryInfo_PrivateEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface KeyRecoveryInfo_PrivateEntryAmino {
    key?: string;
    value?: string;
}
export interface KeyRecoveryInfo_PrivateEntryAminoMsg {
    type: string;
    value: KeyRecoveryInfo_PrivateEntryAmino;
}
export interface KeyRecoveryInfo_PrivateEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface KeyRecoveryInfo {
    keyId: string;
    public: Uint8Array;
    private: {
        [key: string]: Uint8Array;
    };
}
export interface KeyRecoveryInfoProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.KeyRecoveryInfo";
    value: Uint8Array;
}
export interface KeyRecoveryInfoAmino {
    key_id?: string;
    public?: string;
    private?: {
        [key: string]: string;
    };
}
export interface KeyRecoveryInfoAminoMsg {
    type: "/axelar.tss.v1beta1.KeyRecoveryInfo";
    value: KeyRecoveryInfoAmino;
}
export interface KeyRecoveryInfoSDKType {
    key_id: string;
    public: Uint8Array;
    private: {
        [key: string]: Uint8Array;
    };
}
export interface ExternalKeys {
    chain: string;
    keyIds: string[];
}
export interface ExternalKeysProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.ExternalKeys";
    value: Uint8Array;
}
export interface ExternalKeysAmino {
    chain?: string;
    key_ids?: string[];
}
export interface ExternalKeysAminoMsg {
    type: "/axelar.tss.v1beta1.ExternalKeys";
    value: ExternalKeysAmino;
}
export interface ExternalKeysSDKType {
    chain: string;
    key_ids: string[];
}
export interface ValidatorStatus {
    validator: Uint8Array;
    suspendedUntil: bigint;
}
export interface ValidatorStatusProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.ValidatorStatus";
    value: Uint8Array;
}
export interface ValidatorStatusAmino {
    validator?: string;
    suspended_until?: string;
}
export interface ValidatorStatusAminoMsg {
    type: "/axelar.tss.v1beta1.ValidatorStatus";
    value: ValidatorStatusAmino;
}
export interface ValidatorStatusSDKType {
    validator: Uint8Array;
    suspended_until: bigint;
}
export declare const KeygenVoteData: {
    typeUrl: string;
    encode(message: KeygenVoteData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenVoteData;
    fromPartial(object: Partial<KeygenVoteData>): KeygenVoteData;
    fromAmino(object: KeygenVoteDataAmino): KeygenVoteData;
    toAmino(message: KeygenVoteData): KeygenVoteDataAmino;
    fromAminoMsg(object: KeygenVoteDataAminoMsg): KeygenVoteData;
    fromProtoMsg(message: KeygenVoteDataProtoMsg): KeygenVoteData;
    toProto(message: KeygenVoteData): Uint8Array;
    toProtoMsg(message: KeygenVoteData): KeygenVoteDataProtoMsg;
};
export declare const KeyInfo: {
    typeUrl: string;
    encode(message: KeyInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyInfo;
    fromPartial(object: Partial<KeyInfo>): KeyInfo;
    fromAmino(object: KeyInfoAmino): KeyInfo;
    toAmino(message: KeyInfo): KeyInfoAmino;
    fromAminoMsg(object: KeyInfoAminoMsg): KeyInfo;
    fromProtoMsg(message: KeyInfoProtoMsg): KeyInfo;
    toProto(message: KeyInfo): Uint8Array;
    toProtoMsg(message: KeyInfo): KeyInfoProtoMsg;
};
export declare const MultisigInfo: {
    typeUrl: string;
    encode(message: MultisigInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultisigInfo;
    fromPartial(object: Partial<MultisigInfo>): MultisigInfo;
    fromAmino(object: MultisigInfoAmino): MultisigInfo;
    toAmino(message: MultisigInfo): MultisigInfoAmino;
    fromAminoMsg(object: MultisigInfoAminoMsg): MultisigInfo;
    fromProtoMsg(message: MultisigInfoProtoMsg): MultisigInfo;
    toProto(message: MultisigInfo): Uint8Array;
    toProtoMsg(message: MultisigInfo): MultisigInfoProtoMsg;
};
export declare const MultisigInfo_Info: {
    typeUrl: string;
    encode(message: MultisigInfo_Info, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultisigInfo_Info;
    fromPartial(object: Partial<MultisigInfo_Info>): MultisigInfo_Info;
    fromAmino(object: MultisigInfo_InfoAmino): MultisigInfo_Info;
    toAmino(message: MultisigInfo_Info): MultisigInfo_InfoAmino;
    fromAminoMsg(object: MultisigInfo_InfoAminoMsg): MultisigInfo_Info;
    fromProtoMsg(message: MultisigInfo_InfoProtoMsg): MultisigInfo_Info;
    toProto(message: MultisigInfo_Info): Uint8Array;
    toProtoMsg(message: MultisigInfo_Info): MultisigInfo_InfoProtoMsg;
};
export declare const KeyRecoveryInfo_PrivateEntry: {
    encode(message: KeyRecoveryInfo_PrivateEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyRecoveryInfo_PrivateEntry;
    fromPartial(object: Partial<KeyRecoveryInfo_PrivateEntry>): KeyRecoveryInfo_PrivateEntry;
    fromAmino(object: KeyRecoveryInfo_PrivateEntryAmino): KeyRecoveryInfo_PrivateEntry;
    toAmino(message: KeyRecoveryInfo_PrivateEntry): KeyRecoveryInfo_PrivateEntryAmino;
    fromAminoMsg(object: KeyRecoveryInfo_PrivateEntryAminoMsg): KeyRecoveryInfo_PrivateEntry;
    fromProtoMsg(message: KeyRecoveryInfo_PrivateEntryProtoMsg): KeyRecoveryInfo_PrivateEntry;
    toProto(message: KeyRecoveryInfo_PrivateEntry): Uint8Array;
};
export declare const KeyRecoveryInfo: {
    typeUrl: string;
    encode(message: KeyRecoveryInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyRecoveryInfo;
    fromPartial(object: Partial<KeyRecoveryInfo>): KeyRecoveryInfo;
    fromAmino(object: KeyRecoveryInfoAmino): KeyRecoveryInfo;
    toAmino(message: KeyRecoveryInfo): KeyRecoveryInfoAmino;
    fromAminoMsg(object: KeyRecoveryInfoAminoMsg): KeyRecoveryInfo;
    fromProtoMsg(message: KeyRecoveryInfoProtoMsg): KeyRecoveryInfo;
    toProto(message: KeyRecoveryInfo): Uint8Array;
    toProtoMsg(message: KeyRecoveryInfo): KeyRecoveryInfoProtoMsg;
};
export declare const ExternalKeys: {
    typeUrl: string;
    encode(message: ExternalKeys, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExternalKeys;
    fromPartial(object: Partial<ExternalKeys>): ExternalKeys;
    fromAmino(object: ExternalKeysAmino): ExternalKeys;
    toAmino(message: ExternalKeys): ExternalKeysAmino;
    fromAminoMsg(object: ExternalKeysAminoMsg): ExternalKeys;
    fromProtoMsg(message: ExternalKeysProtoMsg): ExternalKeys;
    toProto(message: ExternalKeys): Uint8Array;
    toProtoMsg(message: ExternalKeys): ExternalKeysProtoMsg;
};
export declare const ValidatorStatus: {
    typeUrl: string;
    encode(message: ValidatorStatus, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ValidatorStatus;
    fromPartial(object: Partial<ValidatorStatus>): ValidatorStatus;
    fromAmino(object: ValidatorStatusAmino): ValidatorStatus;
    toAmino(message: ValidatorStatus): ValidatorStatusAmino;
    fromAminoMsg(object: ValidatorStatusAminoMsg): ValidatorStatus;
    fromProtoMsg(message: ValidatorStatusProtoMsg): ValidatorStatus;
    toProto(message: ValidatorStatus): Uint8Array;
    toProtoMsg(message: ValidatorStatus): ValidatorStatusProtoMsg;
};
