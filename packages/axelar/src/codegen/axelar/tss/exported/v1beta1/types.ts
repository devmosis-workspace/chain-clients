import { Threshold, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum KeyRole {
  KEY_ROLE_UNSPECIFIED = 0,
  KEY_ROLE_MASTER_KEY = 1,
  KEY_ROLE_SECONDARY_KEY = 2,
  KEY_ROLE_EXTERNAL_KEY = 3,
  UNRECOGNIZED = -1,
}
export const KeyRoleSDKType = KeyRole;
export function keyRoleFromJSON(object: any): KeyRole {
  switch (object) {
    case 0:
    case "KEY_ROLE_UNSPECIFIED":
      return KeyRole.KEY_ROLE_UNSPECIFIED;
    case 1:
    case "KEY_ROLE_MASTER_KEY":
      return KeyRole.KEY_ROLE_MASTER_KEY;
    case 2:
    case "KEY_ROLE_SECONDARY_KEY":
      return KeyRole.KEY_ROLE_SECONDARY_KEY;
    case 3:
    case "KEY_ROLE_EXTERNAL_KEY":
      return KeyRole.KEY_ROLE_EXTERNAL_KEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyRole.UNRECOGNIZED;
  }
}
export function keyRoleToJSON(object: KeyRole): string {
  switch (object) {
    case KeyRole.KEY_ROLE_UNSPECIFIED:
      return "KEY_ROLE_UNSPECIFIED";
    case KeyRole.KEY_ROLE_MASTER_KEY:
      return "KEY_ROLE_MASTER_KEY";
    case KeyRole.KEY_ROLE_SECONDARY_KEY:
      return "KEY_ROLE_SECONDARY_KEY";
    case KeyRole.KEY_ROLE_EXTERNAL_KEY:
      return "KEY_ROLE_EXTERNAL_KEY";
    case KeyRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum KeyType {
  KEY_TYPE_UNSPECIFIED = 0,
  KEY_TYPE_NONE = 1,
  KEY_TYPE_THRESHOLD = 2,
  KEY_TYPE_MULTISIG = 3,
  UNRECOGNIZED = -1,
}
export const KeyTypeSDKType = KeyType;
export function keyTypeFromJSON(object: any): KeyType {
  switch (object) {
    case 0:
    case "KEY_TYPE_UNSPECIFIED":
      return KeyType.KEY_TYPE_UNSPECIFIED;
    case 1:
    case "KEY_TYPE_NONE":
      return KeyType.KEY_TYPE_NONE;
    case 2:
    case "KEY_TYPE_THRESHOLD":
      return KeyType.KEY_TYPE_THRESHOLD;
    case 3:
    case "KEY_TYPE_MULTISIG":
      return KeyType.KEY_TYPE_MULTISIG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyType.UNRECOGNIZED;
  }
}
export function keyTypeToJSON(object: KeyType): string {
  switch (object) {
    case KeyType.KEY_TYPE_UNSPECIFIED:
      return "KEY_TYPE_UNSPECIFIED";
    case KeyType.KEY_TYPE_NONE:
      return "KEY_TYPE_NONE";
    case KeyType.KEY_TYPE_THRESHOLD:
      return "KEY_TYPE_THRESHOLD";
    case KeyType.KEY_TYPE_MULTISIG:
      return "KEY_TYPE_MULTISIG";
    case KeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum KeyShareDistributionPolicy {
  KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED = 0,
  KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE = 1,
  KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR = 2,
  UNRECOGNIZED = -1,
}
export const KeyShareDistributionPolicySDKType = KeyShareDistributionPolicy;
export function keyShareDistributionPolicyFromJSON(object: any): KeyShareDistributionPolicy {
  switch (object) {
    case 0:
    case "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED":
      return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED;
    case 1:
    case "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE":
      return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE;
    case 2:
    case "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR":
      return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyShareDistributionPolicy.UNRECOGNIZED;
  }
}
export function keyShareDistributionPolicyToJSON(object: KeyShareDistributionPolicy): string {
  switch (object) {
    case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED:
      return "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED";
    case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE:
      return "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE";
    case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR:
      return "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR";
    case KeyShareDistributionPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseKeyRequirement(): KeyRequirement {
  return {
    keyRole: 0,
    keyType: 0,
    minKeygenThreshold: undefined,
    safetyThreshold: undefined,
    keyShareDistributionPolicy: 0,
    maxTotalShareCount: Long.ZERO,
    minTotalShareCount: Long.ZERO,
    keygenVotingThreshold: undefined,
    signVotingThreshold: undefined,
    keygenTimeout: Long.ZERO,
    signTimeout: Long.ZERO
  };
}
export const KeyRequirement = {
  encode(message: KeyRequirement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyRole !== 0) {
      writer.uint32(8).int32(message.keyRole);
    }
    if (message.keyType !== 0) {
      writer.uint32(16).int32(message.keyType);
    }
    if (message.minKeygenThreshold !== undefined) {
      Threshold.encode(message.minKeygenThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (message.safetyThreshold !== undefined) {
      Threshold.encode(message.safetyThreshold, writer.uint32(34).fork()).ldelim();
    }
    if (message.keyShareDistributionPolicy !== 0) {
      writer.uint32(40).int32(message.keyShareDistributionPolicy);
    }
    if (!message.maxTotalShareCount.isZero()) {
      writer.uint32(48).int64(message.maxTotalShareCount);
    }
    if (!message.minTotalShareCount.isZero()) {
      writer.uint32(56).int64(message.minTotalShareCount);
    }
    if (message.keygenVotingThreshold !== undefined) {
      Threshold.encode(message.keygenVotingThreshold, writer.uint32(66).fork()).ldelim();
    }
    if (message.signVotingThreshold !== undefined) {
      Threshold.encode(message.signVotingThreshold, writer.uint32(74).fork()).ldelim();
    }
    if (!message.keygenTimeout.isZero()) {
      writer.uint32(80).int64(message.keygenTimeout);
    }
    if (!message.signTimeout.isZero()) {
      writer.uint32(88).int64(message.signTimeout);
    }
    return writer;
  },
  fromJSON(object: any): KeyRequirement {
    return {
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      minKeygenThreshold: isSet(object.minKeygenThreshold) ? Threshold.fromJSON(object.minKeygenThreshold) : undefined,
      safetyThreshold: isSet(object.safetyThreshold) ? Threshold.fromJSON(object.safetyThreshold) : undefined,
      keyShareDistributionPolicy: isSet(object.keyShareDistributionPolicy) ? keyShareDistributionPolicyFromJSON(object.keyShareDistributionPolicy) : 0,
      maxTotalShareCount: isSet(object.maxTotalShareCount) ? Long.fromValue(object.maxTotalShareCount) : Long.ZERO,
      minTotalShareCount: isSet(object.minTotalShareCount) ? Long.fromValue(object.minTotalShareCount) : Long.ZERO,
      keygenVotingThreshold: isSet(object.keygenVotingThreshold) ? Threshold.fromJSON(object.keygenVotingThreshold) : undefined,
      signVotingThreshold: isSet(object.signVotingThreshold) ? Threshold.fromJSON(object.signVotingThreshold) : undefined,
      keygenTimeout: isSet(object.keygenTimeout) ? Long.fromValue(object.keygenTimeout) : Long.ZERO,
      signTimeout: isSet(object.signTimeout) ? Long.fromValue(object.signTimeout) : Long.ZERO
    };
  },
  fromPartial(object: Partial<KeyRequirement>): KeyRequirement {
    const message = createBaseKeyRequirement();
    message.keyRole = object.keyRole ?? 0;
    message.keyType = object.keyType ?? 0;
    message.minKeygenThreshold = object.minKeygenThreshold !== undefined && object.minKeygenThreshold !== null ? Threshold.fromPartial(object.minKeygenThreshold) : undefined;
    message.safetyThreshold = object.safetyThreshold !== undefined && object.safetyThreshold !== null ? Threshold.fromPartial(object.safetyThreshold) : undefined;
    message.keyShareDistributionPolicy = object.keyShareDistributionPolicy ?? 0;
    message.maxTotalShareCount = object.maxTotalShareCount !== undefined && object.maxTotalShareCount !== null ? Long.fromValue(object.maxTotalShareCount) : Long.ZERO;
    message.minTotalShareCount = object.minTotalShareCount !== undefined && object.minTotalShareCount !== null ? Long.fromValue(object.minTotalShareCount) : Long.ZERO;
    message.keygenVotingThreshold = object.keygenVotingThreshold !== undefined && object.keygenVotingThreshold !== null ? Threshold.fromPartial(object.keygenVotingThreshold) : undefined;
    message.signVotingThreshold = object.signVotingThreshold !== undefined && object.signVotingThreshold !== null ? Threshold.fromPartial(object.signVotingThreshold) : undefined;
    message.keygenTimeout = object.keygenTimeout !== undefined && object.keygenTimeout !== null ? Long.fromValue(object.keygenTimeout) : Long.ZERO;
    message.signTimeout = object.signTimeout !== undefined && object.signTimeout !== null ? Long.fromValue(object.signTimeout) : Long.ZERO;
    return message;
  }
};
function createBaseSigKeyPair(): SigKeyPair {
  return {
    pubKey: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const SigKeyPair = {
  encode(message: SigKeyPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): SigKeyPair {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SigKeyPair>): SigKeyPair {
    const message = createBaseSigKeyPair();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};