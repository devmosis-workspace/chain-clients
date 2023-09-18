import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../../binary";
export declare enum KeyRole {
    KEY_ROLE_UNSPECIFIED = 0,
    KEY_ROLE_MASTER_KEY = 1,
    KEY_ROLE_SECONDARY_KEY = 2,
    KEY_ROLE_EXTERNAL_KEY = 3,
    UNRECOGNIZED = -1
}
export declare const KeyRoleSDKType: typeof KeyRole;
export declare const KeyRoleAmino: typeof KeyRole;
export declare function keyRoleFromJSON(object: any): KeyRole;
export declare function keyRoleToJSON(object: KeyRole): string;
export declare enum KeyType {
    KEY_TYPE_UNSPECIFIED = 0,
    KEY_TYPE_NONE = 1,
    KEY_TYPE_THRESHOLD = 2,
    KEY_TYPE_MULTISIG = 3,
    UNRECOGNIZED = -1
}
export declare const KeyTypeSDKType: typeof KeyType;
export declare const KeyTypeAmino: typeof KeyType;
export declare function keyTypeFromJSON(object: any): KeyType;
export declare function keyTypeToJSON(object: KeyType): string;
export declare enum KeyShareDistributionPolicy {
    KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED = 0,
    KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE = 1,
    KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR = 2,
    UNRECOGNIZED = -1
}
export declare const KeyShareDistributionPolicySDKType: typeof KeyShareDistributionPolicy;
export declare const KeyShareDistributionPolicyAmino: typeof KeyShareDistributionPolicy;
export declare function keyShareDistributionPolicyFromJSON(object: any): KeyShareDistributionPolicy;
export declare function keyShareDistributionPolicyToJSON(object: KeyShareDistributionPolicy): string;
/** KeyRequirement defines requirements for keys */
export interface KeyRequirement {
    keyRole: KeyRole;
    keyType: KeyType;
    minKeygenThreshold: Threshold;
    safetyThreshold: Threshold;
    keyShareDistributionPolicy: KeyShareDistributionPolicy;
    maxTotalShareCount: bigint;
    minTotalShareCount: bigint;
    keygenVotingThreshold: Threshold;
    signVotingThreshold: Threshold;
    keygenTimeout: bigint;
    signTimeout: bigint;
}
export interface KeyRequirementProtoMsg {
    typeUrl: "/axelar.tss.exported.v1beta1.KeyRequirement";
    value: Uint8Array;
}
/** KeyRequirement defines requirements for keys */
export interface KeyRequirementAmino {
    key_role: KeyRole;
    key_type: KeyType;
    min_keygen_threshold?: ThresholdAmino;
    safety_threshold?: ThresholdAmino;
    key_share_distribution_policy: KeyShareDistributionPolicy;
    max_total_share_count: string;
    min_total_share_count: string;
    keygen_voting_threshold?: ThresholdAmino;
    sign_voting_threshold?: ThresholdAmino;
    keygen_timeout: string;
    sign_timeout: string;
}
export interface KeyRequirementAminoMsg {
    type: "/axelar.tss.exported.v1beta1.KeyRequirement";
    value: KeyRequirementAmino;
}
/** KeyRequirement defines requirements for keys */
export interface KeyRequirementSDKType {
    key_role: KeyRole;
    key_type: KeyType;
    min_keygen_threshold: ThresholdSDKType;
    safety_threshold: ThresholdSDKType;
    key_share_distribution_policy: KeyShareDistributionPolicy;
    max_total_share_count: bigint;
    min_total_share_count: bigint;
    keygen_voting_threshold: ThresholdSDKType;
    sign_voting_threshold: ThresholdSDKType;
    keygen_timeout: bigint;
    sign_timeout: bigint;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPair {
    pubKey: Uint8Array;
    signature: Uint8Array;
}
export interface SigKeyPairProtoMsg {
    typeUrl: "/axelar.tss.exported.v1beta1.SigKeyPair";
    value: Uint8Array;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPairAmino {
    pub_key: Uint8Array;
    signature: Uint8Array;
}
export interface SigKeyPairAminoMsg {
    type: "/axelar.tss.exported.v1beta1.SigKeyPair";
    value: SigKeyPairAmino;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPairSDKType {
    pub_key: Uint8Array;
    signature: Uint8Array;
}
export declare const KeyRequirement: {
    typeUrl: string;
    encode(message: KeyRequirement, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyRequirement;
    fromPartial(object: Partial<KeyRequirement>): KeyRequirement;
    fromAmino(object: KeyRequirementAmino): KeyRequirement;
    toAmino(message: KeyRequirement): KeyRequirementAmino;
    fromAminoMsg(object: KeyRequirementAminoMsg): KeyRequirement;
    fromProtoMsg(message: KeyRequirementProtoMsg): KeyRequirement;
    toProto(message: KeyRequirement): Uint8Array;
    toProtoMsg(message: KeyRequirement): KeyRequirementProtoMsg;
};
export declare const SigKeyPair: {
    typeUrl: string;
    encode(message: SigKeyPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigKeyPair;
    fromPartial(object: Partial<SigKeyPair>): SigKeyPair;
    fromAmino(object: SigKeyPairAmino): SigKeyPair;
    toAmino(message: SigKeyPair): SigKeyPairAmino;
    fromAminoMsg(object: SigKeyPairAminoMsg): SigKeyPair;
    fromProtoMsg(message: SigKeyPairProtoMsg): SigKeyPair;
    toProto(message: SigKeyPair): Uint8Array;
    toProtoMsg(message: SigKeyPair): SigKeyPairProtoMsg;
};
