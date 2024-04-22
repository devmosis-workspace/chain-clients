import { Threshold } from "../../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export var KeyRole;
(function (KeyRole) {
    KeyRole[KeyRole["KEY_ROLE_UNSPECIFIED"] = 0] = "KEY_ROLE_UNSPECIFIED";
    KeyRole[KeyRole["KEY_ROLE_MASTER_KEY"] = 1] = "KEY_ROLE_MASTER_KEY";
    KeyRole[KeyRole["KEY_ROLE_SECONDARY_KEY"] = 2] = "KEY_ROLE_SECONDARY_KEY";
    KeyRole[KeyRole["KEY_ROLE_EXTERNAL_KEY"] = 3] = "KEY_ROLE_EXTERNAL_KEY";
    KeyRole[KeyRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyRole || (KeyRole = {}));
export const KeyRoleSDKType = KeyRole;
export const KeyRoleAmino = KeyRole;
export function keyRoleFromJSON(object) {
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
export function keyRoleToJSON(object) {
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
export var KeyType;
(function (KeyType) {
    KeyType[KeyType["KEY_TYPE_UNSPECIFIED"] = 0] = "KEY_TYPE_UNSPECIFIED";
    KeyType[KeyType["KEY_TYPE_NONE"] = 1] = "KEY_TYPE_NONE";
    KeyType[KeyType["KEY_TYPE_THRESHOLD"] = 2] = "KEY_TYPE_THRESHOLD";
    KeyType[KeyType["KEY_TYPE_MULTISIG"] = 3] = "KEY_TYPE_MULTISIG";
    KeyType[KeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyType || (KeyType = {}));
export const KeyTypeSDKType = KeyType;
export const KeyTypeAmino = KeyType;
export function keyTypeFromJSON(object) {
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
export function keyTypeToJSON(object) {
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
export var KeyShareDistributionPolicy;
(function (KeyShareDistributionPolicy) {
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED"] = 0] = "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED";
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE"] = 1] = "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE";
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR"] = 2] = "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR";
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyShareDistributionPolicy || (KeyShareDistributionPolicy = {}));
export const KeyShareDistributionPolicySDKType = KeyShareDistributionPolicy;
export const KeyShareDistributionPolicyAmino = KeyShareDistributionPolicy;
export function keyShareDistributionPolicyFromJSON(object) {
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
export function keyShareDistributionPolicyToJSON(object) {
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
function createBaseKeyRequirement() {
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
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
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
    fromPartial(object) {
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
    fromAmino(object) {
        const message = createBaseKeyRequirement();
        if (object.key_role !== undefined && object.key_role !== null) {
            message.keyRole = keyRoleFromJSON(object.key_role);
        }
        if (object.key_type !== undefined && object.key_type !== null) {
            message.keyType = keyTypeFromJSON(object.key_type);
        }
        if (object.min_keygen_threshold !== undefined && object.min_keygen_threshold !== null) {
            message.minKeygenThreshold = Threshold.fromAmino(object.min_keygen_threshold);
        }
        if (object.safety_threshold !== undefined && object.safety_threshold !== null) {
            message.safetyThreshold = Threshold.fromAmino(object.safety_threshold);
        }
        if (object.key_share_distribution_policy !== undefined && object.key_share_distribution_policy !== null) {
            message.keyShareDistributionPolicy = keyShareDistributionPolicyFromJSON(object.key_share_distribution_policy);
        }
        if (object.max_total_share_count !== undefined && object.max_total_share_count !== null) {
            message.maxTotalShareCount = BigInt(object.max_total_share_count);
        }
        if (object.min_total_share_count !== undefined && object.min_total_share_count !== null) {
            message.minTotalShareCount = BigInt(object.min_total_share_count);
        }
        if (object.keygen_voting_threshold !== undefined && object.keygen_voting_threshold !== null) {
            message.keygenVotingThreshold = Threshold.fromAmino(object.keygen_voting_threshold);
        }
        if (object.sign_voting_threshold !== undefined && object.sign_voting_threshold !== null) {
            message.signVotingThreshold = Threshold.fromAmino(object.sign_voting_threshold);
        }
        if (object.keygen_timeout !== undefined && object.keygen_timeout !== null) {
            message.keygenTimeout = BigInt(object.keygen_timeout);
        }
        if (object.sign_timeout !== undefined && object.sign_timeout !== null) {
            message.signTimeout = BigInt(object.sign_timeout);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
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
    fromAminoMsg(object) {
        return KeyRequirement.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyRequirement.decode(message.value);
    },
    toProto(message) {
        return KeyRequirement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.exported.v1beta1.KeyRequirement",
            value: KeyRequirement.encode(message).finish()
        };
    }
};
function createBaseSigKeyPair() {
    return {
        pubKey: new Uint8Array(),
        signature: new Uint8Array()
    };
}
export const SigKeyPair = {
    typeUrl: "/axelar.tss.exported.v1beta1.SigKeyPair",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pubKey.length !== 0) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSigKeyPair();
        message.pubKey = object.pubKey ?? new Uint8Array();
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigKeyPair();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigKeyPair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SigKeyPair.decode(message.value);
    },
    toProto(message) {
        return SigKeyPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.exported.v1beta1.SigKeyPair",
            value: SigKeyPair.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map