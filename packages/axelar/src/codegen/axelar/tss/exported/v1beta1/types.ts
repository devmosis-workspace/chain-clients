import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64 } from "../../../../helpers";
export enum KeyRole {
  KEY_ROLE_UNSPECIFIED = 0,
  KEY_ROLE_MASTER_KEY = 1,
  KEY_ROLE_SECONDARY_KEY = 2,
  KEY_ROLE_EXTERNAL_KEY = 3,
  UNRECOGNIZED = -1,
}
export const KeyRoleSDKType = KeyRole;
export const KeyRoleAmino = KeyRole;
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
export const KeyTypeAmino = KeyType;
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
export const KeyShareDistributionPolicyAmino = KeyShareDistributionPolicy;
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
function createBaseKeyRequirement(): KeyRequirement {
  return {
    keyRole: 0,
    keyType: 0,
    minKeygenThreshold: Threshold.fromPartial({}),
    safetyThreshold: Threshold.fromPartial({}),
    keyShareDistributionPolicy: 0,
    maxTotalShareCount: BigInt(0),
    minTotalShareCount: BigInt(0),
    keygenVotingThreshold: Threshold.fromPartial({}),
    signVotingThreshold: Threshold.fromPartial({}),
    keygenTimeout: BigInt(0),
    signTimeout: BigInt(0)
  };
}
export const KeyRequirement = {
  typeUrl: "/axelar.tss.exported.v1beta1.KeyRequirement",
  encode(message: KeyRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.maxTotalShareCount !== BigInt(0)) {
      writer.uint32(48).int64(message.maxTotalShareCount);
    }
    if (message.minTotalShareCount !== BigInt(0)) {
      writer.uint32(56).int64(message.minTotalShareCount);
    }
    if (message.keygenVotingThreshold !== undefined) {
      Threshold.encode(message.keygenVotingThreshold, writer.uint32(66).fork()).ldelim();
    }
    if (message.signVotingThreshold !== undefined) {
      Threshold.encode(message.signVotingThreshold, writer.uint32(74).fork()).ldelim();
    }
    if (message.keygenTimeout !== BigInt(0)) {
      writer.uint32(80).int64(message.keygenTimeout);
    }
    if (message.signTimeout !== BigInt(0)) {
      writer.uint32(88).int64(message.signTimeout);
    }
    return writer;
  },
  fromJSON(object: any): KeyRequirement {
    return {
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : -1,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1,
      minKeygenThreshold: isSet(object.minKeygenThreshold) ? Threshold.fromJSON(object.minKeygenThreshold) : undefined,
      safetyThreshold: isSet(object.safetyThreshold) ? Threshold.fromJSON(object.safetyThreshold) : undefined,
      keyShareDistributionPolicy: isSet(object.keyShareDistributionPolicy) ? keyShareDistributionPolicyFromJSON(object.keyShareDistributionPolicy) : -1,
      maxTotalShareCount: isSet(object.maxTotalShareCount) ? BigInt(object.maxTotalShareCount.toString()) : BigInt(0),
      minTotalShareCount: isSet(object.minTotalShareCount) ? BigInt(object.minTotalShareCount.toString()) : BigInt(0),
      keygenVotingThreshold: isSet(object.keygenVotingThreshold) ? Threshold.fromJSON(object.keygenVotingThreshold) : undefined,
      signVotingThreshold: isSet(object.signVotingThreshold) ? Threshold.fromJSON(object.signVotingThreshold) : undefined,
      keygenTimeout: isSet(object.keygenTimeout) ? BigInt(object.keygenTimeout.toString()) : BigInt(0),
      signTimeout: isSet(object.signTimeout) ? BigInt(object.signTimeout.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<KeyRequirement>): KeyRequirement {
    const message = createBaseKeyRequirement();
    message.keyRole = object.keyRole ?? 0;
    message.keyType = object.keyType ?? 0;
    message.minKeygenThreshold = object.minKeygenThreshold !== undefined && object.minKeygenThreshold !== null ? Threshold.fromPartial(object.minKeygenThreshold) : undefined;
    message.safetyThreshold = object.safetyThreshold !== undefined && object.safetyThreshold !== null ? Threshold.fromPartial(object.safetyThreshold) : undefined;
    message.keyShareDistributionPolicy = object.keyShareDistributionPolicy ?? 0;
    message.maxTotalShareCount = object.maxTotalShareCount !== undefined && object.maxTotalShareCount !== null ? BigInt(object.maxTotalShareCount.toString()) : BigInt(0);
    message.minTotalShareCount = object.minTotalShareCount !== undefined && object.minTotalShareCount !== null ? BigInt(object.minTotalShareCount.toString()) : BigInt(0);
    message.keygenVotingThreshold = object.keygenVotingThreshold !== undefined && object.keygenVotingThreshold !== null ? Threshold.fromPartial(object.keygenVotingThreshold) : undefined;
    message.signVotingThreshold = object.signVotingThreshold !== undefined && object.signVotingThreshold !== null ? Threshold.fromPartial(object.signVotingThreshold) : undefined;
    message.keygenTimeout = object.keygenTimeout !== undefined && object.keygenTimeout !== null ? BigInt(object.keygenTimeout.toString()) : BigInt(0);
    message.signTimeout = object.signTimeout !== undefined && object.signTimeout !== null ? BigInt(object.signTimeout.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: KeyRequirementAmino): KeyRequirement {
    return {
      keyRole: isSet(object.key_role) ? keyRoleFromJSON(object.key_role) : -1,
      keyType: isSet(object.key_type) ? keyTypeFromJSON(object.key_type) : -1,
      minKeygenThreshold: object?.min_keygen_threshold ? Threshold.fromAmino(object.min_keygen_threshold) : undefined,
      safetyThreshold: object?.safety_threshold ? Threshold.fromAmino(object.safety_threshold) : undefined,
      keyShareDistributionPolicy: isSet(object.key_share_distribution_policy) ? keyShareDistributionPolicyFromJSON(object.key_share_distribution_policy) : -1,
      maxTotalShareCount: BigInt(object.max_total_share_count),
      minTotalShareCount: BigInt(object.min_total_share_count),
      keygenVotingThreshold: object?.keygen_voting_threshold ? Threshold.fromAmino(object.keygen_voting_threshold) : undefined,
      signVotingThreshold: object?.sign_voting_threshold ? Threshold.fromAmino(object.sign_voting_threshold) : undefined,
      keygenTimeout: BigInt(object.keygen_timeout),
      signTimeout: BigInt(object.sign_timeout)
    };
  },
  toAmino(message: KeyRequirement): KeyRequirementAmino {
    const obj: any = {};
    obj.key_role = message.keyRole;
    obj.key_type = message.keyType;
    obj.min_keygen_threshold = message.minKeygenThreshold ? Threshold.toAmino(message.minKeygenThreshold) : undefined;
    obj.safety_threshold = message.safetyThreshold ? Threshold.toAmino(message.safetyThreshold) : undefined;
    obj.key_share_distribution_policy = message.keyShareDistributionPolicy;
    obj.max_total_share_count = message.maxTotalShareCount ? message.maxTotalShareCount.toString() : undefined;
    obj.min_total_share_count = message.minTotalShareCount ? message.minTotalShareCount.toString() : undefined;
    obj.keygen_voting_threshold = message.keygenVotingThreshold ? Threshold.toAmino(message.keygenVotingThreshold) : undefined;
    obj.sign_voting_threshold = message.signVotingThreshold ? Threshold.toAmino(message.signVotingThreshold) : undefined;
    obj.keygen_timeout = message.keygenTimeout ? message.keygenTimeout.toString() : undefined;
    obj.sign_timeout = message.signTimeout ? message.signTimeout.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: KeyRequirementAminoMsg): KeyRequirement {
    return KeyRequirement.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyRequirementProtoMsg): KeyRequirement {
    return KeyRequirement.decode(message.value);
  },
  toProto(message: KeyRequirement): Uint8Array {
    return KeyRequirement.encode(message).finish();
  },
  toProtoMsg(message: KeyRequirement): KeyRequirementProtoMsg {
    return {
      typeUrl: "/axelar.tss.exported.v1beta1.KeyRequirement",
      value: KeyRequirement.encode(message).finish()
    };
  }
};
function createBaseSigKeyPair(): SigKeyPair {
  return {
    pubKey: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const SigKeyPair = {
  typeUrl: "/axelar.tss.exported.v1beta1.SigKeyPair",
  encode(message: SigKeyPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SigKeyPairAmino): SigKeyPair {
    return {
      pubKey: object.pub_key,
      signature: object.signature
    };
  },
  toAmino(message: SigKeyPair): SigKeyPairAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: SigKeyPairAminoMsg): SigKeyPair {
    return SigKeyPair.fromAmino(object.value);
  },
  fromProtoMsg(message: SigKeyPairProtoMsg): SigKeyPair {
    return SigKeyPair.decode(message.value);
  },
  toProto(message: SigKeyPair): Uint8Array {
    return SigKeyPair.encode(message).finish();
  },
  toProtoMsg(message: SigKeyPair): SigKeyPairProtoMsg {
    return {
      typeUrl: "/axelar.tss.exported.v1beta1.SigKeyPair",
      value: SigKeyPair.encode(message).finish()
    };
  }
};