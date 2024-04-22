import { Duration } from "../../google/protobuf/duration";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseConsensusParams() {
    return {
        block: BlockParams.fromPartial({}),
        evidence: EvidenceParams.fromPartial({}),
        validator: ValidatorParams.fromPartial({}),
        version: VersionParams.fromPartial({})
    };
}
export const ConsensusParams = {
    typeUrl: "/tendermint.types.ConsensusParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
            evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
            version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusParams();
        if (object.block !== undefined && object.block !== null) {
            message.block = BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = ValidatorParams.fromAmino(object.validator);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = VersionParams.fromAmino(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ConsensusParams",
            value: ConsensusParams.encode(message).finish()
        };
    }
};
function createBaseBlockParams() {
    return {
        maxBytes: BigInt(0),
        maxGas: BigInt(0),
        timeIotaMs: BigInt(0)
    };
}
export const BlockParams = {
    typeUrl: "/tendermint.types.BlockParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (message.timeIotaMs !== BigInt(0)) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            maxBytes: isSet(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt(0),
            maxGas: isSet(object.maxGas) ? BigInt(object.maxGas.toString()) : BigInt(0),
            timeIotaMs: isSet(object.timeIotaMs) ? BigInt(object.timeIotaMs.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
        message.timeIotaMs = object.timeIotaMs !== undefined && object.timeIotaMs !== null ? BigInt(object.timeIotaMs.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockParams();
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.maxGas = BigInt(object.max_gas);
        }
        if (object.time_iota_ms !== undefined && object.time_iota_ms !== null) {
            message.timeIotaMs = BigInt(object.time_iota_ms);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
        obj.time_iota_ms = message.timeIotaMs ? message.timeIotaMs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockParams.decode(message.value);
    },
    toProto(message) {
        return BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockParams",
            value: BlockParams.encode(message).finish()
        };
    }
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: BigInt(0),
        maxAgeDuration: Duration.fromPartial({}),
        maxBytes: BigInt(0)
    };
}
export const EvidenceParams = {
    typeUrl: "/tendermint.types.EvidenceParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxAgeNumBlocks !== BigInt(0)) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            maxAgeNumBlocks: isSet(object.maxAgeNumBlocks) ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0),
            maxAgeDuration: isSet(object.maxAgeDuration) ? Duration.fromJSON(object.maxAgeDuration) : undefined,
            maxBytes: isSet(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : undefined;
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidenceParams();
        if (object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null) {
            message.maxAgeNumBlocks = BigInt(object.max_age_num_blocks);
        }
        if (object.max_age_duration !== undefined && object.max_age_duration !== null) {
            message.maxAgeDuration = Duration.fromAmino(object.max_age_duration);
        }
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_age_num_blocks = message.maxAgeNumBlocks ? message.maxAgeNumBlocks.toString() : undefined;
        obj.max_age_duration = message.maxAgeDuration ? Duration.toAmino(message.maxAgeDuration) : undefined;
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EvidenceParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EvidenceParams.decode(message.value);
    },
    toProto(message) {
        return EvidenceParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceParams",
            value: EvidenceParams.encode(message).finish()
        };
    }
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
export const ValidatorParams = {
    typeUrl: "/tendermint.types.ValidatorParams",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pubKeyTypes: Array.isArray(object?.pubKeyTypes) ? object.pubKeyTypes.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pub_key_types?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pub_key_types = message.pubKeyTypes.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorParams.decode(message.value);
    },
    toProto(message) {
        return ValidatorParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorParams",
            value: ValidatorParams.encode(message).finish()
        };
    }
};
function createBaseVersionParams() {
    return {
        appVersion: BigInt(0)
    };
}
export const VersionParams = {
    typeUrl: "/tendermint.types.VersionParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.appVersion !== BigInt(0)) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            appVersion: isSet(object.appVersion) ? BigInt(object.appVersion.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersionParams();
        if (object.app_version !== undefined && object.app_version !== null) {
            message.appVersion = BigInt(object.app_version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VersionParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VersionParams.decode(message.value);
    },
    toProto(message) {
        return VersionParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.VersionParams",
            value: VersionParams.encode(message).finish()
        };
    }
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: BigInt(0),
        blockMaxGas: BigInt(0)
    };
}
export const HashedParams = {
    typeUrl: "/tendermint.types.HashedParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockMaxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            blockMaxBytes: isSet(object.blockMaxBytes) ? BigInt(object.blockMaxBytes.toString()) : BigInt(0),
            blockMaxGas: isSet(object.blockMaxGas) ? BigInt(object.blockMaxGas.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseHashedParams();
        if (object.block_max_bytes !== undefined && object.block_max_bytes !== null) {
            message.blockMaxBytes = BigInt(object.block_max_bytes);
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.blockMaxGas = BigInt(object.block_max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_max_bytes = message.blockMaxBytes ? message.blockMaxBytes.toString() : undefined;
        obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return HashedParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return HashedParams.decode(message.value);
    },
    toProto(message) {
        return HashedParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.HashedParams",
            value: HashedParams.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map