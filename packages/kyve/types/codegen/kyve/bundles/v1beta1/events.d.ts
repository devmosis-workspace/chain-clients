import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { VoteType } from "./tx";
import { BundleStatus } from "./bundles";
import { BinaryWriter } from "../../../binary";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams: Params;
    /** new_params is the module's new parameters. */
    newParams: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventUpdateParams";
    value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
    /** old_params is the module's old parameters. */
    old_params?: ParamsAmino;
    /** new_params is the module's new parameters. */
    new_params?: ParamsAmino;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsAminoMsg {
    type: "/kyve.bundles.v1beta1.EventUpdateParams";
    value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params: ParamsSDKType;
    new_params: ParamsSDKType;
    payload: string;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVote {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** staker is the account staker of the protocol node. */
    staker: string;
    /** storage_id is the unique ID of the bundle. */
    storageId: string;
    /** vote is for what the validator voted with */
    vote: VoteType;
}
export interface EventBundleVoteProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventBundleVote";
    value: Uint8Array;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVoteAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** staker is the account staker of the protocol node. */
    staker: string;
    /** storage_id is the unique ID of the bundle. */
    storage_id: string;
    /** vote is for what the validator voted with */
    vote: VoteType;
}
export interface EventBundleVoteAminoMsg {
    type: "/kyve.bundles.v1beta1.EventBundleVote";
    value: EventBundleVoteAmino;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVoteSDKType {
    pool_id: bigint;
    staker: string;
    storage_id: string;
    vote: VoteType;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposed {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** internal id for the KYVE-bundle */
    id: bigint;
    /**
     * storage_id is the ID to retrieve to data item from the configured storage provider
     * e.g. the ARWEAVE-id
     */
    storageId: string;
    /** Address of the uploader/proposer of the bundle */
    uploader: string;
    /** data_size size in bytes of the data */
    dataSize: bigint;
    /** from_index starting index of the bundle (inclusive) */
    fromIndex: bigint;
    /** bundle_size amount of data items in the bundle */
    bundleSize: bigint;
    /** from_key the key of the first data item in the bundle */
    fromKey: string;
    /** to_key the key of the last data item in the bundle */
    toKey: string;
    /**
     * bundle_summary is a short string holding some useful information of
     * the bundle which will get stored on-chain
     */
    bundleSummary: string;
    /** data_hash is a sha256 hash of the raw compressed data */
    dataHash: string;
    /** proposed_at the unix time when the bundle was proposed */
    proposedAt: bigint;
    /**
     * storage_provider_id the unique id of the storage provider where
     * the data of the bundle is tored
     */
    storageProviderId: number;
    /**
     * compression_id  the unique id of the compression type the data
     * of the bundle was compressed with
     */
    compressionId: number;
}
export interface EventBundleProposedProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventBundleProposed";
    value: Uint8Array;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposedAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** internal id for the KYVE-bundle */
    id: string;
    /**
     * storage_id is the ID to retrieve to data item from the configured storage provider
     * e.g. the ARWEAVE-id
     */
    storage_id: string;
    /** Address of the uploader/proposer of the bundle */
    uploader: string;
    /** data_size size in bytes of the data */
    data_size: string;
    /** from_index starting index of the bundle (inclusive) */
    from_index: string;
    /** bundle_size amount of data items in the bundle */
    bundle_size: string;
    /** from_key the key of the first data item in the bundle */
    from_key: string;
    /** to_key the key of the last data item in the bundle */
    to_key: string;
    /**
     * bundle_summary is a short string holding some useful information of
     * the bundle which will get stored on-chain
     */
    bundle_summary: string;
    /** data_hash is a sha256 hash of the raw compressed data */
    data_hash: string;
    /** proposed_at the unix time when the bundle was proposed */
    proposed_at: string;
    /**
     * storage_provider_id the unique id of the storage provider where
     * the data of the bundle is tored
     */
    storage_provider_id: number;
    /**
     * compression_id  the unique id of the compression type the data
     * of the bundle was compressed with
     */
    compression_id: number;
}
export interface EventBundleProposedAminoMsg {
    type: "/kyve.bundles.v1beta1.EventBundleProposed";
    value: EventBundleProposedAmino;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposedSDKType {
    pool_id: bigint;
    id: bigint;
    storage_id: string;
    uploader: string;
    data_size: bigint;
    from_index: bigint;
    bundle_size: bigint;
    from_key: string;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    proposed_at: bigint;
    storage_provider_id: number;
    compression_id: number;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** internal id for the KYVE-bundle */
    id: bigint;
    /** total voting power which voted for valid */
    valid: bigint;
    /** total voting power which voted for invalid */
    invalid: bigint;
    /** total voting power which voted for abstain */
    abstain: bigint;
    /** total voting power of the pool */
    total: bigint;
    /** status of the finalized bundle */
    status: BundleStatus;
    /** amount which funders provided to the total bundle reward (in ukyve) */
    fundersPayout: bigint;
    /** amount which the inflation pool provided to the total reward (in ukyve) */
    inflationPayout: bigint;
    /** rewards transferred to treasury (in ukyve) */
    rewardTreasury: bigint;
    /** rewardUploader rewards directly transferred to uploader (in ukyve) */
    rewardUploader: bigint;
    /** rewardDelegation rewards distributed among all delegators (in ukyve) */
    rewardDelegation: bigint;
    /** rewardTotal the total bundle reward */
    rewardTotal: bigint;
    /** finalized_at the block height where the bundle got finalized */
    finalizedAt: bigint;
    /** uploader the address of the uploader of this bundle */
    uploader: string;
    /** next_uploader the address of the next uploader after this bundle */
    nextUploader: string;
}
export interface EventBundleFinalizedProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventBundleFinalized";
    value: Uint8Array;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalizedAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** internal id for the KYVE-bundle */
    id: string;
    /** total voting power which voted for valid */
    valid: string;
    /** total voting power which voted for invalid */
    invalid: string;
    /** total voting power which voted for abstain */
    abstain: string;
    /** total voting power of the pool */
    total: string;
    /** status of the finalized bundle */
    status: BundleStatus;
    /** amount which funders provided to the total bundle reward (in ukyve) */
    funders_payout: string;
    /** amount which the inflation pool provided to the total reward (in ukyve) */
    inflation_payout: string;
    /** rewards transferred to treasury (in ukyve) */
    reward_treasury: string;
    /** rewardUploader rewards directly transferred to uploader (in ukyve) */
    reward_uploader: string;
    /** rewardDelegation rewards distributed among all delegators (in ukyve) */
    reward_delegation: string;
    /** rewardTotal the total bundle reward */
    reward_total: string;
    /** finalized_at the block height where the bundle got finalized */
    finalized_at: string;
    /** uploader the address of the uploader of this bundle */
    uploader: string;
    /** next_uploader the address of the next uploader after this bundle */
    next_uploader: string;
}
export interface EventBundleFinalizedAminoMsg {
    type: "/kyve.bundles.v1beta1.EventBundleFinalized";
    value: EventBundleFinalizedAmino;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalizedSDKType {
    pool_id: bigint;
    id: bigint;
    valid: bigint;
    invalid: bigint;
    abstain: bigint;
    total: bigint;
    status: BundleStatus;
    funders_payout: bigint;
    inflation_payout: bigint;
    reward_treasury: bigint;
    reward_uploader: bigint;
    reward_delegation: bigint;
    reward_total: bigint;
    finalized_at: bigint;
    uploader: string;
    next_uploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** id internal id for the KYVE-bundle */
    id: bigint;
    /**
     * new_uploader the address of the participant who claimed
     * the free uploader role
     */
    newUploader: string;
}
export interface EventClaimedUploaderRoleProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventClaimedUploaderRole";
    value: Uint8Array;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRoleAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** id internal id for the KYVE-bundle */
    id: string;
    /**
     * new_uploader the address of the participant who claimed
     * the free uploader role
     */
    new_uploader: string;
}
export interface EventClaimedUploaderRoleAminoMsg {
    type: "/kyve.bundles.v1beta1.EventClaimedUploaderRole";
    value: EventClaimedUploaderRoleAmino;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRoleSDKType {
    pool_id: bigint;
    id: bigint;
    new_uploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** id internal id for the KYVE-bundle */
    id: bigint;
    /** previous_uploader is the address of the staker who skipped his uploader role */
    previousUploader: string;
    /** new_uploader is the address of the new uploader who got automatically selected */
    newUploader: string;
}
export interface EventSkippedUploaderRoleProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventSkippedUploaderRole";
    value: Uint8Array;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRoleAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** id internal id for the KYVE-bundle */
    id: string;
    /** previous_uploader is the address of the staker who skipped his uploader role */
    previous_uploader: string;
    /** new_uploader is the address of the new uploader who got automatically selected */
    new_uploader: string;
}
export interface EventSkippedUploaderRoleAminoMsg {
    type: "/kyve.bundles.v1beta1.EventSkippedUploaderRole";
    value: EventSkippedUploaderRoleAmino;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRoleSDKType {
    pool_id: bigint;
    id: bigint;
    previous_uploader: string;
    new_uploader: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** staker is the address of the staker who received the point */
    staker: string;
    /** current_points is the amount of points the staker has now */
    currentPoints: bigint;
}
export interface EventPointIncreasedProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventPointIncreased";
    value: Uint8Array;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreasedAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** staker is the address of the staker who received the point */
    staker: string;
    /** current_points is the amount of points the staker has now */
    current_points: string;
}
export interface EventPointIncreasedAminoMsg {
    type: "/kyve.bundles.v1beta1.EventPointIncreased";
    value: EventPointIncreasedAmino;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreasedSDKType {
    pool_id: bigint;
    staker: string;
    current_points: bigint;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** staker is the address of the staker who has zero points now */
    staker: string;
}
export interface EventPointsResetProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.EventPointsReset";
    value: Uint8Array;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsResetAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** staker is the address of the staker who has zero points now */
    staker: string;
}
export interface EventPointsResetAminoMsg {
    type: "/kyve.bundles.v1beta1.EventPointsReset";
    value: EventPointsResetAmino;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsResetSDKType {
    pool_id: bigint;
    staker: string;
}
export declare const EventUpdateParams: {
    typeUrl: string;
    encode(message: EventUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
    fromAmino(object: EventUpdateParamsAmino): EventUpdateParams;
    toAmino(message: EventUpdateParams): EventUpdateParamsAmino;
    fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams;
    fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams;
    toProto(message: EventUpdateParams): Uint8Array;
    toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg;
};
export declare const EventBundleVote: {
    typeUrl: string;
    encode(message: EventBundleVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBundleVote;
    fromPartial(object: Partial<EventBundleVote>): EventBundleVote;
    fromAmino(object: EventBundleVoteAmino): EventBundleVote;
    toAmino(message: EventBundleVote): EventBundleVoteAmino;
    fromAminoMsg(object: EventBundleVoteAminoMsg): EventBundleVote;
    fromProtoMsg(message: EventBundleVoteProtoMsg): EventBundleVote;
    toProto(message: EventBundleVote): Uint8Array;
    toProtoMsg(message: EventBundleVote): EventBundleVoteProtoMsg;
};
export declare const EventBundleProposed: {
    typeUrl: string;
    encode(message: EventBundleProposed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBundleProposed;
    fromPartial(object: Partial<EventBundleProposed>): EventBundleProposed;
    fromAmino(object: EventBundleProposedAmino): EventBundleProposed;
    toAmino(message: EventBundleProposed): EventBundleProposedAmino;
    fromAminoMsg(object: EventBundleProposedAminoMsg): EventBundleProposed;
    fromProtoMsg(message: EventBundleProposedProtoMsg): EventBundleProposed;
    toProto(message: EventBundleProposed): Uint8Array;
    toProtoMsg(message: EventBundleProposed): EventBundleProposedProtoMsg;
};
export declare const EventBundleFinalized: {
    typeUrl: string;
    encode(message: EventBundleFinalized, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBundleFinalized;
    fromPartial(object: Partial<EventBundleFinalized>): EventBundleFinalized;
    fromAmino(object: EventBundleFinalizedAmino): EventBundleFinalized;
    toAmino(message: EventBundleFinalized): EventBundleFinalizedAmino;
    fromAminoMsg(object: EventBundleFinalizedAminoMsg): EventBundleFinalized;
    fromProtoMsg(message: EventBundleFinalizedProtoMsg): EventBundleFinalized;
    toProto(message: EventBundleFinalized): Uint8Array;
    toProtoMsg(message: EventBundleFinalized): EventBundleFinalizedProtoMsg;
};
export declare const EventClaimedUploaderRole: {
    typeUrl: string;
    encode(message: EventClaimedUploaderRole, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClaimedUploaderRole;
    fromPartial(object: Partial<EventClaimedUploaderRole>): EventClaimedUploaderRole;
    fromAmino(object: EventClaimedUploaderRoleAmino): EventClaimedUploaderRole;
    toAmino(message: EventClaimedUploaderRole): EventClaimedUploaderRoleAmino;
    fromAminoMsg(object: EventClaimedUploaderRoleAminoMsg): EventClaimedUploaderRole;
    fromProtoMsg(message: EventClaimedUploaderRoleProtoMsg): EventClaimedUploaderRole;
    toProto(message: EventClaimedUploaderRole): Uint8Array;
    toProtoMsg(message: EventClaimedUploaderRole): EventClaimedUploaderRoleProtoMsg;
};
export declare const EventSkippedUploaderRole: {
    typeUrl: string;
    encode(message: EventSkippedUploaderRole, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSkippedUploaderRole;
    fromPartial(object: Partial<EventSkippedUploaderRole>): EventSkippedUploaderRole;
    fromAmino(object: EventSkippedUploaderRoleAmino): EventSkippedUploaderRole;
    toAmino(message: EventSkippedUploaderRole): EventSkippedUploaderRoleAmino;
    fromAminoMsg(object: EventSkippedUploaderRoleAminoMsg): EventSkippedUploaderRole;
    fromProtoMsg(message: EventSkippedUploaderRoleProtoMsg): EventSkippedUploaderRole;
    toProto(message: EventSkippedUploaderRole): Uint8Array;
    toProtoMsg(message: EventSkippedUploaderRole): EventSkippedUploaderRoleProtoMsg;
};
export declare const EventPointIncreased: {
    typeUrl: string;
    encode(message: EventPointIncreased, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPointIncreased;
    fromPartial(object: Partial<EventPointIncreased>): EventPointIncreased;
    fromAmino(object: EventPointIncreasedAmino): EventPointIncreased;
    toAmino(message: EventPointIncreased): EventPointIncreasedAmino;
    fromAminoMsg(object: EventPointIncreasedAminoMsg): EventPointIncreased;
    fromProtoMsg(message: EventPointIncreasedProtoMsg): EventPointIncreased;
    toProto(message: EventPointIncreased): Uint8Array;
    toProtoMsg(message: EventPointIncreased): EventPointIncreasedProtoMsg;
};
export declare const EventPointsReset: {
    typeUrl: string;
    encode(message: EventPointsReset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPointsReset;
    fromPartial(object: Partial<EventPointsReset>): EventPointsReset;
    fromAmino(object: EventPointsResetAmino): EventPointsReset;
    toAmino(message: EventPointsReset): EventPointsResetAmino;
    fromAminoMsg(object: EventPointsResetAminoMsg): EventPointsReset;
    fromProtoMsg(message: EventPointsResetProtoMsg): EventPointsReset;
    toProto(message: EventPointsReset): Uint8Array;
    toProtoMsg(message: EventPointsReset): EventPointsResetProtoMsg;
};
