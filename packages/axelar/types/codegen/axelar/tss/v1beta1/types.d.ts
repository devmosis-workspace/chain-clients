import { KeyRole, KeyType } from "../exported/v1beta1/types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface KeygenVoteData {
    pubKey: Uint8Array;
    groupRecoveryInfo: Uint8Array;
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
/** KeyInfo holds information about a key */
export interface KeyInfoSDKType {
    key_id: string;
    key_role: KeyRole;
    key_type: KeyType;
}
export interface MultisigInfo {
    id: string;
    timeout: Long;
    targetNum: Long;
    infos: MultisigInfo_Info[];
}
export interface MultisigInfoSDKType {
    id: string;
    timeout: Long;
    target_num: Long;
    infos: MultisigInfo_InfoSDKType[];
}
export interface MultisigInfo_Info {
    participant: Uint8Array;
    data: Uint8Array[];
}
export interface MultisigInfo_InfoSDKType {
    participant: Uint8Array;
    data: Uint8Array[];
}
export interface KeyRecoveryInfo_PrivateEntry {
    key: string;
    value: Uint8Array;
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
export interface ExternalKeysSDKType {
    chain: string;
    key_ids: string[];
}
export interface ValidatorStatus {
    validator: Uint8Array;
    suspendedUntil: Long;
}
export interface ValidatorStatusSDKType {
    validator: Uint8Array;
    suspended_until: Long;
}
export declare const KeygenVoteData: {
    encode(message: KeygenVoteData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenVoteData;
    fromPartial(object: Partial<KeygenVoteData>): KeygenVoteData;
};
export declare const KeyInfo: {
    encode(message: KeyInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyInfo;
    fromPartial(object: Partial<KeyInfo>): KeyInfo;
};
export declare const MultisigInfo: {
    encode(message: MultisigInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultisigInfo;
    fromPartial(object: Partial<MultisigInfo>): MultisigInfo;
};
export declare const MultisigInfo_Info: {
    encode(message: MultisigInfo_Info, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultisigInfo_Info;
    fromPartial(object: Partial<MultisigInfo_Info>): MultisigInfo_Info;
};
export declare const KeyRecoveryInfo_PrivateEntry: {
    encode(message: KeyRecoveryInfo_PrivateEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyRecoveryInfo_PrivateEntry;
    fromPartial(object: Partial<KeyRecoveryInfo_PrivateEntry>): KeyRecoveryInfo_PrivateEntry;
};
export declare const KeyRecoveryInfo: {
    encode(message: KeyRecoveryInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyRecoveryInfo;
    fromPartial(object: Partial<KeyRecoveryInfo>): KeyRecoveryInfo;
};
export declare const ExternalKeys: {
    encode(message: ExternalKeys, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExternalKeys;
    fromPartial(object: Partial<ExternalKeys>): ExternalKeys;
};
export declare const ValidatorStatus: {
    encode(message: ValidatorStatus, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValidatorStatus;
    fromPartial(object: Partial<ValidatorStatus>): ValidatorStatus;
};
