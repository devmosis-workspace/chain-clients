import { PublicKey } from "../crypto/keys";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
function createBaseValidatorSet() {
    return {
        validators: [],
        proposer: undefined,
        totalVotingPower: BigInt(0)
    };
}
export const ValidatorSet = {
    typeUrl: "/tendermint.types.ValidatorSet",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
            totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = Validator.fromAmino(object.proposer);
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.totalVotingPower = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined;
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorSet.decode(message.value);
    },
    toProto(message) {
        return ValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorSet",
            value: ValidatorSet.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pubKey: PublicKey.fromPartial({}),
        votingPower: BigInt(0),
        proposerPriority: BigInt(0)
    };
}
export const Validator = {
    typeUrl: "/tendermint.types.Validator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pubKey !== undefined) {
            PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0),
            proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.votingPower = BigInt(object.voting_power);
        }
        if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
            message.proposerPriority = BigInt(object.proposer_priority);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseSimpleValidator() {
    return {
        pubKey: undefined,
        votingPower: BigInt(0)
    };
}
export const SimpleValidator = {
    typeUrl: "/tendermint.types.SimpleValidator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pubKey !== undefined) {
            PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(16).int64(message.votingPower);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseSimpleValidator();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimpleValidator();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.votingPower = BigInt(object.voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimpleValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SimpleValidator.decode(message.value);
    },
    toProto(message) {
        return SimpleValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SimpleValidator",
            value: SimpleValidator.encode(message).finish()
        };
    }
};
//# sourceMappingURL=validator.js.map