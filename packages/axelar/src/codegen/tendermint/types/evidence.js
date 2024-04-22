import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
function createBaseEvidence() {
    return {
        duplicateVoteEvidence: undefined,
        lightClientAttackEvidence: undefined
    };
}
export const Evidence = {
    typeUrl: "/tendermint.types.Evidence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.duplicateVoteEvidence !== undefined) {
            DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.lightClientAttackEvidence !== undefined) {
            LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            duplicateVoteEvidence: isSet(object.duplicateVoteEvidence) ? DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence) : undefined,
            lightClientAttackEvidence: isSet(object.lightClientAttackEvidence) ? LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
        message.lightClientAttackEvidence = object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidence();
        if (object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null) {
            message.duplicateVoteEvidence = DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence);
        }
        if (object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null) {
            message.lightClientAttackEvidence = LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.duplicate_vote_evidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toAmino(message.duplicateVoteEvidence) : undefined;
        obj.light_client_attack_evidence = message.lightClientAttackEvidence ? LightClientAttackEvidence.toAmino(message.lightClientAttackEvidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Evidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Evidence.decode(message.value);
    },
    toProto(message) {
        return Evidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Evidence",
            value: Evidence.encode(message).finish()
        };
    }
};
function createBaseDuplicateVoteEvidence() {
    return {
        voteA: undefined,
        voteB: undefined,
        totalVotingPower: BigInt(0),
        validatorPower: BigInt(0),
        timestamp: Timestamp.fromPartial({})
    };
}
export const DuplicateVoteEvidence = {
    typeUrl: "/tendermint.types.DuplicateVoteEvidence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.voteA !== undefined) {
            Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteB !== undefined) {
            Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        if (message.validatorPower !== BigInt(0)) {
            writer.uint32(32).int64(message.validatorPower);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            voteA: isSet(object.voteA) ? Vote.fromJSON(object.voteA) : undefined,
            voteB: isSet(object.voteB) ? Vote.fromJSON(object.voteB) : undefined,
            totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt(0),
            validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt(0),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseDuplicateVoteEvidence();
        message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
        message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDuplicateVoteEvidence();
        if (object.vote_a !== undefined && object.vote_a !== null) {
            message.voteA = Vote.fromAmino(object.vote_a);
        }
        if (object.vote_b !== undefined && object.vote_b !== null) {
            message.voteB = Vote.fromAmino(object.vote_b);
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.totalVotingPower = BigInt(object.total_voting_power);
        }
        if (object.validator_power !== undefined && object.validator_power !== null) {
            message.validatorPower = BigInt(object.validator_power);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Timestamp.fromAmino(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_a = message.voteA ? Vote.toAmino(message.voteA) : undefined;
        obj.vote_b = message.voteB ? Vote.toAmino(message.voteB) : undefined;
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        obj.validator_power = message.validatorPower ? message.validatorPower.toString() : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DuplicateVoteEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DuplicateVoteEvidence.decode(message.value);
    },
    toProto(message) {
        return DuplicateVoteEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.DuplicateVoteEvidence",
            value: DuplicateVoteEvidence.encode(message).finish()
        };
    }
};
function createBaseLightClientAttackEvidence() {
    return {
        conflictingBlock: undefined,
        commonHeight: BigInt(0),
        byzantineValidators: [],
        totalVotingPower: BigInt(0),
        timestamp: Timestamp.fromPartial({})
    };
}
export const LightClientAttackEvidence = {
    typeUrl: "/tendermint.types.LightClientAttackEvidence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.conflictingBlock !== undefined) {
            LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
        }
        if (message.commonHeight !== BigInt(0)) {
            writer.uint32(16).int64(message.commonHeight);
        }
        for (const v of message.byzantineValidators) {
            Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(32).int64(message.totalVotingPower);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            conflictingBlock: isSet(object.conflictingBlock) ? LightBlock.fromJSON(object.conflictingBlock) : undefined,
            commonHeight: isSet(object.commonHeight) ? BigInt(object.commonHeight.toString()) : BigInt(0),
            byzantineValidators: Array.isArray(object?.byzantineValidators) ? object.byzantineValidators.map((e) => Validator.fromJSON(e)) : [],
            totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt(0),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseLightClientAttackEvidence();
        message.conflictingBlock = object.conflictingBlock !== undefined && object.conflictingBlock !== null ? LightBlock.fromPartial(object.conflictingBlock) : undefined;
        message.commonHeight = object.commonHeight !== undefined && object.commonHeight !== null ? BigInt(object.commonHeight.toString()) : BigInt(0);
        message.byzantineValidators = object.byzantineValidators?.map(e => Validator.fromPartial(e)) || [];
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLightClientAttackEvidence();
        if (object.conflicting_block !== undefined && object.conflicting_block !== null) {
            message.conflictingBlock = LightBlock.fromAmino(object.conflicting_block);
        }
        if (object.common_height !== undefined && object.common_height !== null) {
            message.commonHeight = BigInt(object.common_height);
        }
        message.byzantineValidators = object.byzantine_validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.totalVotingPower = BigInt(object.total_voting_power);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Timestamp.fromAmino(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.conflicting_block = message.conflictingBlock ? LightBlock.toAmino(message.conflictingBlock) : undefined;
        obj.common_height = message.commonHeight ? message.commonHeight.toString() : undefined;
        if (message.byzantineValidators) {
            obj.byzantine_validators = message.byzantineValidators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LightClientAttackEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LightClientAttackEvidence.decode(message.value);
    },
    toProto(message) {
        return LightClientAttackEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightClientAttackEvidence",
            value: LightClientAttackEvidence.encode(message).finish()
        };
    }
};
function createBaseEvidenceList() {
    return {
        evidence: []
    };
}
export const EvidenceList = {
    typeUrl: "/tendermint.types.EvidenceList",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.evidence) {
            Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => Evidence.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseEvidenceList();
        message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidenceList();
        message.evidence = object.evidence?.map(e => Evidence.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EvidenceList.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EvidenceList.decode(message.value);
    },
    toProto(message) {
        return EvidenceList.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceList",
            value: EvidenceList.encode(message).finish()
        };
    }
};
//# sourceMappingURL=evidence.js.map