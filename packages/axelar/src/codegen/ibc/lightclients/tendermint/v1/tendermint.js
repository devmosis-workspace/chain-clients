import { Duration } from "../../../../google/protobuf/duration";
import { Height } from "../../../core/client/v1/client";
import { ProofSpec } from "../../../../proofs";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot } from "../../../core/commitment/v1/commitment";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { BinaryWriter } from "../../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseClientState() {
    return {
        chainId: "",
        trustLevel: Fraction.fromPartial({}),
        trustingPeriod: Duration.fromPartial({}),
        unbondingPeriod: Duration.fromPartial({}),
        maxClockDrift: Duration.fromPartial({}),
        frozenHeight: Height.fromPartial({}),
        latestHeight: Height.fromPartial({}),
        proofSpecs: [],
        upgradePath: [],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.trustLevel !== undefined) {
            Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustingPeriod !== undefined) {
            Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbondingPeriod !== undefined) {
            Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxClockDrift !== undefined) {
            Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozenHeight !== undefined) {
            Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestHeight !== undefined) {
            Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proofSpecs) {
            ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.upgradePath) {
            writer.uint32(74).string(v);
        }
        if (message.allowUpdateAfterExpiry === true) {
            writer.uint32(80).bool(message.allowUpdateAfterExpiry);
        }
        if (message.allowUpdateAfterMisbehaviour === true) {
            writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            trustLevel: isSet(object.trustLevel) ? Fraction.fromJSON(object.trustLevel) : undefined,
            trustingPeriod: isSet(object.trustingPeriod) ? Duration.fromJSON(object.trustingPeriod) : undefined,
            unbondingPeriod: isSet(object.unbondingPeriod) ? Duration.fromJSON(object.unbondingPeriod) : undefined,
            maxClockDrift: isSet(object.maxClockDrift) ? Duration.fromJSON(object.maxClockDrift) : undefined,
            frozenHeight: isSet(object.frozenHeight) ? Height.fromJSON(object.frozenHeight) : undefined,
            latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined,
            proofSpecs: Array.isArray(object?.proofSpecs) ? object.proofSpecs.map((e) => ProofSpec.fromJSON(e)) : [],
            upgradePath: Array.isArray(object?.upgradePath) ? object.upgradePath.map((e) => String(e)) : [],
            allowUpdateAfterExpiry: isSet(object.allowUpdateAfterExpiry) ? Boolean(object.allowUpdateAfterExpiry) : false,
            allowUpdateAfterMisbehaviour: isSet(object.allowUpdateAfterMisbehaviour) ? Boolean(object.allowUpdateAfterMisbehaviour) : false
        };
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chainId = object.chainId ?? "";
        message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? Fraction.fromPartial(object.trustLevel) : undefined;
        message.trustingPeriod = object.trustingPeriod !== undefined && object.trustingPeriod !== null ? Duration.fromPartial(object.trustingPeriod) : undefined;
        message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Duration.fromPartial(object.unbondingPeriod) : undefined;
        message.maxClockDrift = object.maxClockDrift !== undefined && object.maxClockDrift !== null ? Duration.fromPartial(object.maxClockDrift) : undefined;
        message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? Height.fromPartial(object.frozenHeight) : undefined;
        message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
        message.proofSpecs = object.proofSpecs?.map(e => ProofSpec.fromPartial(e)) || [];
        message.upgradePath = object.upgradePath?.map(e => e) || [];
        message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
        message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.trust_level !== undefined && object.trust_level !== null) {
            message.trustLevel = Fraction.fromAmino(object.trust_level);
        }
        if (object.trusting_period !== undefined && object.trusting_period !== null) {
            message.trustingPeriod = Duration.fromAmino(object.trusting_period);
        }
        if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
            message.unbondingPeriod = Duration.fromAmino(object.unbonding_period);
        }
        if (object.max_clock_drift !== undefined && object.max_clock_drift !== null) {
            message.maxClockDrift = Duration.fromAmino(object.max_clock_drift);
        }
        if (object.frozen_height !== undefined && object.frozen_height !== null) {
            message.frozenHeight = Height.fromAmino(object.frozen_height);
        }
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latestHeight = Height.fromAmino(object.latest_height);
        }
        message.proofSpecs = object.proof_specs?.map(e => ProofSpec.fromAmino(e)) || [];
        message.upgradePath = object.upgrade_path?.map(e => e) || [];
        if (object.allow_update_after_expiry !== undefined && object.allow_update_after_expiry !== null) {
            message.allowUpdateAfterExpiry = object.allow_update_after_expiry;
        }
        if (object.allow_update_after_misbehaviour !== undefined && object.allow_update_after_misbehaviour !== null) {
            message.allowUpdateAfterMisbehaviour = object.allow_update_after_misbehaviour;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.trust_level = message.trustLevel ? Fraction.toAmino(message.trustLevel) : undefined;
        obj.trusting_period = message.trustingPeriod ? Duration.toAmino(message.trustingPeriod) : undefined;
        obj.unbonding_period = message.unbondingPeriod ? Duration.toAmino(message.unbondingPeriod) : undefined;
        obj.max_clock_drift = message.maxClockDrift ? Duration.toAmino(message.maxClockDrift) : undefined;
        obj.frozen_height = message.frozenHeight ? Height.toAmino(message.frozenHeight) : {};
        obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight) : {};
        if (message.proofSpecs) {
            obj.proof_specs = message.proofSpecs.map(e => e ? ProofSpec.toAmino(e) : undefined);
        }
        else {
            obj.proof_specs = [];
        }
        if (message.upgradePath) {
            obj.upgrade_path = message.upgradePath.map(e => e);
        }
        else {
            obj.upgrade_path = [];
        }
        obj.allow_update_after_expiry = message.allowUpdateAfterExpiry;
        obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        timestamp: Timestamp.fromPartial({}),
        root: MerkleRoot.fromPartial({}),
        nextValidatorsHash: new Uint8Array()
    };
}
export const ConsensusState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(26).bytes(message.nextValidatorsHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            root: isSet(object.root) ? MerkleRoot.fromJSON(object.root) : undefined,
            nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
        message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusState();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Timestamp.fromAmino(object.timestamp);
        }
        if (object.root !== undefined && object.root !== null) {
            message.root = MerkleRoot.fromAmino(object.root);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
        obj.root = message.root ? MerkleRoot.toAmino(message.root) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusState.decode(message.value);
    },
    toProto(message) {
        return ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
            value: ConsensusState.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        header1: undefined,
        header2: undefined
    };
}
export const Misbehaviour = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header1 !== undefined) {
            Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            header1: isSet(object.header1) ? Header.fromJSON(object.header1) : undefined,
            header2: isSet(object.header2) ? Header.fromJSON(object.header2) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.header1 = object.header1 !== undefined && object.header1 !== null ? Header.fromPartial(object.header1) : undefined;
        message.header2 = object.header2 !== undefined && object.header2 !== null ? Header.fromPartial(object.header2) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.header_1 !== undefined && object.header_1 !== null) {
            message.header1 = Header.fromAmino(object.header_1);
        }
        if (object.header_2 !== undefined && object.header_2 !== null) {
            message.header2 = Header.fromAmino(object.header_2);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.header_1 = message.header1 ? Header.toAmino(message.header1) : undefined;
        obj.header_2 = message.header2 ? Header.toAmino(message.header2) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
            value: Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        signedHeader: undefined,
        validatorSet: undefined,
        trustedHeight: Height.fromPartial({}),
        trustedValidators: undefined
    };
}
export const Header = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Header",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signedHeader !== undefined) {
            SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustedHeight !== undefined) {
            Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.trustedValidators !== undefined) {
            ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
            validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
            trustedHeight: isSet(object.trustedHeight) ? Height.fromJSON(object.trustedHeight) : undefined,
            trustedValidators: isSet(object.trustedValidators) ? ValidatorSet.fromJSON(object.trustedValidators) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
        message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? Height.fromPartial(object.trustedHeight) : undefined;
        message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? ValidatorSet.fromPartial(object.trustedValidators) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.signed_header !== undefined && object.signed_header !== null) {
            message.signedHeader = SignedHeader.fromAmino(object.signed_header);
        }
        if (object.validator_set !== undefined && object.validator_set !== null) {
            message.validatorSet = ValidatorSet.fromAmino(object.validator_set);
        }
        if (object.trusted_height !== undefined && object.trusted_height !== null) {
            message.trustedHeight = Height.fromAmino(object.trusted_height);
        }
        if (object.trusted_validators !== undefined && object.trusted_validators !== null) {
            message.trustedValidators = ValidatorSet.fromAmino(object.trusted_validators);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
        obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
        obj.trusted_height = message.trustedHeight ? Height.toAmino(message.trustedHeight) : {};
        obj.trusted_validators = message.trustedValidators ? ValidatorSet.toAmino(message.trustedValidators) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseFraction() {
    return {
        numerator: BigInt(0),
        denominator: BigInt(0)
    };
}
export const Fraction = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
    encode(message, writer = BinaryWriter.create()) {
        if (message.numerator !== BigInt(0)) {
            writer.uint32(8).uint64(message.numerator);
        }
        if (message.denominator !== BigInt(0)) {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            numerator: isSet(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
            denominator: isSet(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseFraction();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
        message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseFraction();
        if (object.numerator !== undefined && object.numerator !== null) {
            message.numerator = BigInt(object.numerator);
        }
        if (object.denominator !== undefined && object.denominator !== null) {
            message.denominator = BigInt(object.denominator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.numerator = message.numerator ? message.numerator.toString() : undefined;
        obj.denominator = message.denominator ? message.denominator.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Fraction.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fraction",
            value: Fraction.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Fraction.decode(message.value);
    },
    toProto(message) {
        return Fraction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
            value: Fraction.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tendermint.js.map