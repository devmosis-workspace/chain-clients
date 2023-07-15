import { KeyRequirement, KeyRequirementSDKType } from "../exported/v1beta1/types";
import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params is the parameter set for this module */
export interface Params {
  /** KeyRequirements defines the requirement for each key role */
  keyRequirements: KeyRequirement[];
  /**
   * SuspendDurationInBlocks defines the number of blocks a
   * validator is disallowed to participate in any TSS ceremony after
   * committing a malicious behaviour during signing
   */
  suspendDurationInBlocks: Long;
  /**
   * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
   * emit the event asking validators to send their heartbeats
   */
  heartbeatPeriodInBlocks: Long;
  maxMissedBlocksPerWindow?: Threshold;
  unbondingLockingKeyRotationCount: Long;
  externalMultisigThreshold?: Threshold;
  maxSignQueueSize: Long;
  maxSimultaneousSignShares: Long;
  tssSignedBlocksWindow: Long;
}
/** Params is the parameter set for this module */
export interface ParamsSDKType {
  key_requirements: KeyRequirementSDKType[];
  suspend_duration_in_blocks: Long;
  heartbeat_period_in_blocks: Long;
  max_missed_blocks_per_window?: ThresholdSDKType;
  unbonding_locking_key_rotation_count: Long;
  external_multisig_threshold?: ThresholdSDKType;
  max_sign_queue_size: Long;
  max_simultaneous_sign_shares: Long;
  tss_signed_blocks_window: Long;
}
function createBaseParams(): Params {
  return {
    keyRequirements: [],
    suspendDurationInBlocks: Long.ZERO,
    heartbeatPeriodInBlocks: Long.ZERO,
    maxMissedBlocksPerWindow: undefined,
    unbondingLockingKeyRotationCount: Long.ZERO,
    externalMultisigThreshold: undefined,
    maxSignQueueSize: Long.ZERO,
    maxSimultaneousSignShares: Long.ZERO,
    tssSignedBlocksWindow: Long.ZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyRequirements) {
      KeyRequirement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.suspendDurationInBlocks.isZero()) {
      writer.uint32(16).int64(message.suspendDurationInBlocks);
    }
    if (!message.heartbeatPeriodInBlocks.isZero()) {
      writer.uint32(24).int64(message.heartbeatPeriodInBlocks);
    }
    if (message.maxMissedBlocksPerWindow !== undefined) {
      Threshold.encode(message.maxMissedBlocksPerWindow, writer.uint32(34).fork()).ldelim();
    }
    if (!message.unbondingLockingKeyRotationCount.isZero()) {
      writer.uint32(40).int64(message.unbondingLockingKeyRotationCount);
    }
    if (message.externalMultisigThreshold !== undefined) {
      Threshold.encode(message.externalMultisigThreshold, writer.uint32(50).fork()).ldelim();
    }
    if (!message.maxSignQueueSize.isZero()) {
      writer.uint32(56).int64(message.maxSignQueueSize);
    }
    if (!message.maxSimultaneousSignShares.isZero()) {
      writer.uint32(64).int64(message.maxSimultaneousSignShares);
    }
    if (!message.tssSignedBlocksWindow.isZero()) {
      writer.uint32(72).int64(message.tssSignedBlocksWindow);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      keyRequirements: Array.isArray(object?.keyRequirements) ? object.keyRequirements.map((e: any) => KeyRequirement.fromJSON(e)) : [],
      suspendDurationInBlocks: isSet(object.suspendDurationInBlocks) ? Long.fromValue(object.suspendDurationInBlocks) : Long.ZERO,
      heartbeatPeriodInBlocks: isSet(object.heartbeatPeriodInBlocks) ? Long.fromValue(object.heartbeatPeriodInBlocks) : Long.ZERO,
      maxMissedBlocksPerWindow: isSet(object.maxMissedBlocksPerWindow) ? Threshold.fromJSON(object.maxMissedBlocksPerWindow) : undefined,
      unbondingLockingKeyRotationCount: isSet(object.unbondingLockingKeyRotationCount) ? Long.fromValue(object.unbondingLockingKeyRotationCount) : Long.ZERO,
      externalMultisigThreshold: isSet(object.externalMultisigThreshold) ? Threshold.fromJSON(object.externalMultisigThreshold) : undefined,
      maxSignQueueSize: isSet(object.maxSignQueueSize) ? Long.fromValue(object.maxSignQueueSize) : Long.ZERO,
      maxSimultaneousSignShares: isSet(object.maxSimultaneousSignShares) ? Long.fromValue(object.maxSimultaneousSignShares) : Long.ZERO,
      tssSignedBlocksWindow: isSet(object.tssSignedBlocksWindow) ? Long.fromValue(object.tssSignedBlocksWindow) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.keyRequirements = object.keyRequirements?.map(e => KeyRequirement.fromPartial(e)) || [];
    message.suspendDurationInBlocks = object.suspendDurationInBlocks !== undefined && object.suspendDurationInBlocks !== null ? Long.fromValue(object.suspendDurationInBlocks) : Long.ZERO;
    message.heartbeatPeriodInBlocks = object.heartbeatPeriodInBlocks !== undefined && object.heartbeatPeriodInBlocks !== null ? Long.fromValue(object.heartbeatPeriodInBlocks) : Long.ZERO;
    message.maxMissedBlocksPerWindow = object.maxMissedBlocksPerWindow !== undefined && object.maxMissedBlocksPerWindow !== null ? Threshold.fromPartial(object.maxMissedBlocksPerWindow) : undefined;
    message.unbondingLockingKeyRotationCount = object.unbondingLockingKeyRotationCount !== undefined && object.unbondingLockingKeyRotationCount !== null ? Long.fromValue(object.unbondingLockingKeyRotationCount) : Long.ZERO;
    message.externalMultisigThreshold = object.externalMultisigThreshold !== undefined && object.externalMultisigThreshold !== null ? Threshold.fromPartial(object.externalMultisigThreshold) : undefined;
    message.maxSignQueueSize = object.maxSignQueueSize !== undefined && object.maxSignQueueSize !== null ? Long.fromValue(object.maxSignQueueSize) : Long.ZERO;
    message.maxSimultaneousSignShares = object.maxSimultaneousSignShares !== undefined && object.maxSimultaneousSignShares !== null ? Long.fromValue(object.maxSimultaneousSignShares) : Long.ZERO;
    message.tssSignedBlocksWindow = object.tssSignedBlocksWindow !== undefined && object.tssSignedBlocksWindow !== null ? Long.fromValue(object.tssSignedBlocksWindow) : Long.ZERO;
    return message;
  }
};