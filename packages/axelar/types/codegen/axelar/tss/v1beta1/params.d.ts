import { KeyRequirement, KeyRequirementSDKType } from "../exported/v1beta1/types";
import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Long } from "../../../helpers";
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
