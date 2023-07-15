import { Threshold, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum KeyRole {
    KEY_ROLE_UNSPECIFIED = 0,
    KEY_ROLE_MASTER_KEY = 1,
    KEY_ROLE_SECONDARY_KEY = 2,
    KEY_ROLE_EXTERNAL_KEY = 3,
    UNRECOGNIZED = -1
}
export declare const KeyRoleSDKType: typeof KeyRole;
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
export declare function keyTypeFromJSON(object: any): KeyType;
export declare function keyTypeToJSON(object: KeyType): string;
export declare enum KeyShareDistributionPolicy {
    KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED = 0,
    KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE = 1,
    KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR = 2,
    UNRECOGNIZED = -1
}
export declare const KeyShareDistributionPolicySDKType: typeof KeyShareDistributionPolicy;
export declare function keyShareDistributionPolicyFromJSON(object: any): KeyShareDistributionPolicy;
export declare function keyShareDistributionPolicyToJSON(object: KeyShareDistributionPolicy): string;
/** KeyRequirement defines requirements for keys */
export interface KeyRequirement {
    keyRole: KeyRole;
    keyType: KeyType;
    minKeygenThreshold?: Threshold;
    safetyThreshold?: Threshold;
    keyShareDistributionPolicy: KeyShareDistributionPolicy;
    maxTotalShareCount: Long;
    minTotalShareCount: Long;
    keygenVotingThreshold?: Threshold;
    signVotingThreshold?: Threshold;
    keygenTimeout: Long;
    signTimeout: Long;
}
/** KeyRequirement defines requirements for keys */
export interface KeyRequirementSDKType {
    key_role: KeyRole;
    key_type: KeyType;
    min_keygen_threshold?: ThresholdSDKType;
    safety_threshold?: ThresholdSDKType;
    key_share_distribution_policy: KeyShareDistributionPolicy;
    max_total_share_count: Long;
    min_total_share_count: Long;
    keygen_voting_threshold?: ThresholdSDKType;
    sign_voting_threshold?: ThresholdSDKType;
    keygen_timeout: Long;
    sign_timeout: Long;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPair {
    pubKey: Uint8Array;
    signature: Uint8Array;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPairSDKType {
    pub_key: Uint8Array;
    signature: Uint8Array;
}
export declare const KeyRequirement: {
    encode(message: KeyRequirement, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyRequirement;
    fromPartial(object: Partial<KeyRequirement>): KeyRequirement;
};
export declare const SigKeyPair: {
    encode(message: SigKeyPair, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigKeyPair;
    fromPartial(object: Partial<SigKeyPair>): SigKeyPair;
};
