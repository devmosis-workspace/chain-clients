import { KeyRequirement } from "../exported/v1beta1/types";
import { Threshold } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        keyRequirements: [],
        suspendDurationInBlocks: BigInt(0),
        heartbeatPeriodInBlocks: BigInt(0),
        maxMissedBlocksPerWindow: Threshold.fromPartial({}),
        unbondingLockingKeyRotationCount: BigInt(0),
        externalMultisigThreshold: Threshold.fromPartial({}),
        maxSignQueueSize: BigInt(0),
        maxSimultaneousSignShares: BigInt(0),
        tssSignedBlocksWindow: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/axelar.tss.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.keyRequirements) {
            KeyRequirement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.suspendDurationInBlocks !== BigInt(0)) {
            writer.uint32(16).int64(message.suspendDurationInBlocks);
        }
        if (message.heartbeatPeriodInBlocks !== BigInt(0)) {
            writer.uint32(24).int64(message.heartbeatPeriodInBlocks);
        }
        if (message.maxMissedBlocksPerWindow !== undefined) {
            Threshold.encode(message.maxMissedBlocksPerWindow, writer.uint32(34).fork()).ldelim();
        }
        if (message.unbondingLockingKeyRotationCount !== BigInt(0)) {
            writer.uint32(40).int64(message.unbondingLockingKeyRotationCount);
        }
        if (message.externalMultisigThreshold !== undefined) {
            Threshold.encode(message.externalMultisigThreshold, writer.uint32(50).fork()).ldelim();
        }
        if (message.maxSignQueueSize !== BigInt(0)) {
            writer.uint32(56).int64(message.maxSignQueueSize);
        }
        if (message.maxSimultaneousSignShares !== BigInt(0)) {
            writer.uint32(64).int64(message.maxSimultaneousSignShares);
        }
        if (message.tssSignedBlocksWindow !== BigInt(0)) {
            writer.uint32(72).int64(message.tssSignedBlocksWindow);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyRequirements: Array.isArray(object?.keyRequirements) ? object.keyRequirements.map((e) => KeyRequirement.fromJSON(e)) : [],
            suspendDurationInBlocks: isSet(object.suspendDurationInBlocks) ? BigInt(object.suspendDurationInBlocks.toString()) : BigInt(0),
            heartbeatPeriodInBlocks: isSet(object.heartbeatPeriodInBlocks) ? BigInt(object.heartbeatPeriodInBlocks.toString()) : BigInt(0),
            maxMissedBlocksPerWindow: isSet(object.maxMissedBlocksPerWindow) ? Threshold.fromJSON(object.maxMissedBlocksPerWindow) : undefined,
            unbondingLockingKeyRotationCount: isSet(object.unbondingLockingKeyRotationCount) ? BigInt(object.unbondingLockingKeyRotationCount.toString()) : BigInt(0),
            externalMultisigThreshold: isSet(object.externalMultisigThreshold) ? Threshold.fromJSON(object.externalMultisigThreshold) : undefined,
            maxSignQueueSize: isSet(object.maxSignQueueSize) ? BigInt(object.maxSignQueueSize.toString()) : BigInt(0),
            maxSimultaneousSignShares: isSet(object.maxSimultaneousSignShares) ? BigInt(object.maxSimultaneousSignShares.toString()) : BigInt(0),
            tssSignedBlocksWindow: isSet(object.tssSignedBlocksWindow) ? BigInt(object.tssSignedBlocksWindow.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.keyRequirements = object.keyRequirements?.map(e => KeyRequirement.fromPartial(e)) || [];
        message.suspendDurationInBlocks = object.suspendDurationInBlocks !== undefined && object.suspendDurationInBlocks !== null ? BigInt(object.suspendDurationInBlocks.toString()) : BigInt(0);
        message.heartbeatPeriodInBlocks = object.heartbeatPeriodInBlocks !== undefined && object.heartbeatPeriodInBlocks !== null ? BigInt(object.heartbeatPeriodInBlocks.toString()) : BigInt(0);
        message.maxMissedBlocksPerWindow = object.maxMissedBlocksPerWindow !== undefined && object.maxMissedBlocksPerWindow !== null ? Threshold.fromPartial(object.maxMissedBlocksPerWindow) : undefined;
        message.unbondingLockingKeyRotationCount = object.unbondingLockingKeyRotationCount !== undefined && object.unbondingLockingKeyRotationCount !== null ? BigInt(object.unbondingLockingKeyRotationCount.toString()) : BigInt(0);
        message.externalMultisigThreshold = object.externalMultisigThreshold !== undefined && object.externalMultisigThreshold !== null ? Threshold.fromPartial(object.externalMultisigThreshold) : undefined;
        message.maxSignQueueSize = object.maxSignQueueSize !== undefined && object.maxSignQueueSize !== null ? BigInt(object.maxSignQueueSize.toString()) : BigInt(0);
        message.maxSimultaneousSignShares = object.maxSimultaneousSignShares !== undefined && object.maxSimultaneousSignShares !== null ? BigInt(object.maxSimultaneousSignShares.toString()) : BigInt(0);
        message.tssSignedBlocksWindow = object.tssSignedBlocksWindow !== undefined && object.tssSignedBlocksWindow !== null ? BigInt(object.tssSignedBlocksWindow.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.keyRequirements = object.key_requirements?.map(e => KeyRequirement.fromAmino(e)) || [];
        if (object.suspend_duration_in_blocks !== undefined && object.suspend_duration_in_blocks !== null) {
            message.suspendDurationInBlocks = BigInt(object.suspend_duration_in_blocks);
        }
        if (object.heartbeat_period_in_blocks !== undefined && object.heartbeat_period_in_blocks !== null) {
            message.heartbeatPeriodInBlocks = BigInt(object.heartbeat_period_in_blocks);
        }
        if (object.max_missed_blocks_per_window !== undefined && object.max_missed_blocks_per_window !== null) {
            message.maxMissedBlocksPerWindow = Threshold.fromAmino(object.max_missed_blocks_per_window);
        }
        if (object.unbonding_locking_key_rotation_count !== undefined && object.unbonding_locking_key_rotation_count !== null) {
            message.unbondingLockingKeyRotationCount = BigInt(object.unbonding_locking_key_rotation_count);
        }
        if (object.external_multisig_threshold !== undefined && object.external_multisig_threshold !== null) {
            message.externalMultisigThreshold = Threshold.fromAmino(object.external_multisig_threshold);
        }
        if (object.max_sign_queue_size !== undefined && object.max_sign_queue_size !== null) {
            message.maxSignQueueSize = BigInt(object.max_sign_queue_size);
        }
        if (object.max_simultaneous_sign_shares !== undefined && object.max_simultaneous_sign_shares !== null) {
            message.maxSimultaneousSignShares = BigInt(object.max_simultaneous_sign_shares);
        }
        if (object.tss_signed_blocks_window !== undefined && object.tss_signed_blocks_window !== null) {
            message.tssSignedBlocksWindow = BigInt(object.tss_signed_blocks_window);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.keyRequirements) {
            obj.key_requirements = message.keyRequirements.map(e => e ? KeyRequirement.toAmino(e) : undefined);
        }
        else {
            obj.key_requirements = [];
        }
        obj.suspend_duration_in_blocks = message.suspendDurationInBlocks ? message.suspendDurationInBlocks.toString() : undefined;
        obj.heartbeat_period_in_blocks = message.heartbeatPeriodInBlocks ? message.heartbeatPeriodInBlocks.toString() : undefined;
        obj.max_missed_blocks_per_window = message.maxMissedBlocksPerWindow ? Threshold.toAmino(message.maxMissedBlocksPerWindow) : undefined;
        obj.unbonding_locking_key_rotation_count = message.unbondingLockingKeyRotationCount ? message.unbondingLockingKeyRotationCount.toString() : undefined;
        obj.external_multisig_threshold = message.externalMultisigThreshold ? Threshold.toAmino(message.externalMultisigThreshold) : undefined;
        obj.max_sign_queue_size = message.maxSignQueueSize ? message.maxSignQueueSize.toString() : undefined;
        obj.max_simultaneous_sign_shares = message.maxSimultaneousSignShares ? message.maxSimultaneousSignShares.toString() : undefined;
        obj.tss_signed_blocks_window = message.tssSignedBlocksWindow ? message.tssSignedBlocksWindow.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map