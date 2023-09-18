import { KeyRequirement, KeyRequirementAmino, KeyRequirementSDKType } from "../exported/v1beta1/types";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
/** Params is the parameter set for this module */
export interface Params {
    /** KeyRequirements defines the requirement for each key role */
    keyRequirements: KeyRequirement[];
    /**
     * SuspendDurationInBlocks defines the number of blocks a
     * validator is disallowed to participate in any TSS ceremony after
     * committing a malicious behaviour during signing
     */
    suspendDurationInBlocks: bigint;
    /**
     * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
     * emit the event asking validators to send their heartbeats
     */
    heartbeatPeriodInBlocks: bigint;
    maxMissedBlocksPerWindow: Threshold;
    unbondingLockingKeyRotationCount: bigint;
    externalMultisigThreshold: Threshold;
    maxSignQueueSize: bigint;
    maxSimultaneousSignShares: bigint;
    tssSignedBlocksWindow: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.tss.v1beta1.Params";
    value: Uint8Array;
}
/** Params is the parameter set for this module */
export interface ParamsAmino {
    /** KeyRequirements defines the requirement for each key role */
    key_requirements: KeyRequirementAmino[];
    /**
     * SuspendDurationInBlocks defines the number of blocks a
     * validator is disallowed to participate in any TSS ceremony after
     * committing a malicious behaviour during signing
     */
    suspend_duration_in_blocks: string;
    /**
     * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
     * emit the event asking validators to send their heartbeats
     */
    heartbeat_period_in_blocks: string;
    max_missed_blocks_per_window?: ThresholdAmino;
    unbonding_locking_key_rotation_count: string;
    external_multisig_threshold?: ThresholdAmino;
    max_sign_queue_size: string;
    max_simultaneous_sign_shares: string;
    tss_signed_blocks_window: string;
}
export interface ParamsAminoMsg {
    type: "/axelar.tss.v1beta1.Params";
    value: ParamsAmino;
}
/** Params is the parameter set for this module */
export interface ParamsSDKType {
    key_requirements: KeyRequirementSDKType[];
    suspend_duration_in_blocks: bigint;
    heartbeat_period_in_blocks: bigint;
    max_missed_blocks_per_window: ThresholdSDKType;
    unbonding_locking_key_rotation_count: bigint;
    external_multisig_threshold: ThresholdSDKType;
    max_sign_queue_size: bigint;
    max_simultaneous_sign_shares: bigint;
    tss_signed_blocks_window: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
