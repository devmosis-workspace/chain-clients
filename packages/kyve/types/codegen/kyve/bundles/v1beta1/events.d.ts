import { Params, ParamsSDKType } from "./params";
import { VoteType } from "./tx";
import { BundleStatus } from "./bundles";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams?: Params;
    /** new_params is the module's new parameters. */
    newParams?: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params?: ParamsSDKType;
    new_params?: ParamsSDKType;
    payload: string;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVote {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** staker is the account staker of the protocol node. */
    staker: string;
    /** storage_id is the unique ID of the bundle. */
    storageId: string;
    /** vote is for what the validator voted with */
    vote: VoteType;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVoteSDKType {
    pool_id: Long;
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
    poolId: Long;
    /** internal id for the KYVE-bundle */
    id: Long;
    /**
     * storage_id is the ID to retrieve to data item from the configured storage provider
     * e.g. the ARWEAVE-id
     */
    storageId: string;
    /** Address of the uploader/proposer of the bundle */
    uploader: string;
    /** data_size size in bytes of the data */
    dataSize: Long;
    /** from_index starting index of the bundle (inclusive) */
    fromIndex: Long;
    /** bundle_size amount of data items in the bundle */
    bundleSize: Long;
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
    proposedAt: Long;
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
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposedSDKType {
    pool_id: Long;
    id: Long;
    storage_id: string;
    uploader: string;
    data_size: Long;
    from_index: Long;
    bundle_size: Long;
    from_key: string;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    proposed_at: Long;
    storage_provider_id: number;
    compression_id: number;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** internal id for the KYVE-bundle */
    id: Long;
    /** total voting power which voted for valid */
    valid: Long;
    /** total voting power which voted for invalid */
    invalid: Long;
    /** total voting power which voted for abstain */
    abstain: Long;
    /** total voting power of the pool */
    total: Long;
    /** status of the finalized bundle */
    status: BundleStatus;
    /** amount which funders provided to the total bundle reward (in ukyve) */
    fundersPayout: Long;
    /** amount which the inflation pool provided to the total reward (in ukyve) */
    inflationPayout: Long;
    /** rewards transferred to treasury (in ukyve) */
    rewardTreasury: Long;
    /** rewardUploader rewards directly transferred to uploader (in ukyve) */
    rewardUploader: Long;
    /** rewardDelegation rewards distributed among all delegators (in ukyve) */
    rewardDelegation: Long;
    /** rewardTotal the total bundle reward */
    rewardTotal: Long;
    /** finalized_at the block height where the bundle got finalized */
    finalizedAt: Long;
    /** uploader the address of the uploader of this bundle */
    uploader: string;
    /** next_uploader the address of the next uploader after this bundle */
    nextUploader: string;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalizedSDKType {
    pool_id: Long;
    id: Long;
    valid: Long;
    invalid: Long;
    abstain: Long;
    total: Long;
    status: BundleStatus;
    funders_payout: Long;
    inflation_payout: Long;
    reward_treasury: Long;
    reward_uploader: Long;
    reward_delegation: Long;
    reward_total: Long;
    finalized_at: Long;
    uploader: string;
    next_uploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** id internal id for the KYVE-bundle */
    id: Long;
    /**
     * new_uploader the address of the participant who claimed
     * the free uploader role
     */
    newUploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRoleSDKType {
    pool_id: Long;
    id: Long;
    new_uploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** id internal id for the KYVE-bundle */
    id: Long;
    /** previous_uploader is the address of the staker who skipped his uploader role */
    previousUploader: string;
    /** new_uploader is the address of the new uploader who got automatically selected */
    newUploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRoleSDKType {
    pool_id: Long;
    id: Long;
    previous_uploader: string;
    new_uploader: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** staker is the address of the staker who received the point */
    staker: string;
    /** current_points is the amount of points the staker has now */
    currentPoints: Long;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreasedSDKType {
    pool_id: Long;
    staker: string;
    current_points: Long;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** staker is the address of the staker who has zero points now */
    staker: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsResetSDKType {
    pool_id: Long;
    staker: string;
}
export declare const EventUpdateParams: {
    encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
};
export declare const EventBundleVote: {
    encode(message: EventBundleVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBundleVote;
    fromPartial(object: Partial<EventBundleVote>): EventBundleVote;
};
export declare const EventBundleProposed: {
    encode(message: EventBundleProposed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBundleProposed;
    fromPartial(object: Partial<EventBundleProposed>): EventBundleProposed;
};
export declare const EventBundleFinalized: {
    encode(message: EventBundleFinalized, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBundleFinalized;
    fromPartial(object: Partial<EventBundleFinalized>): EventBundleFinalized;
};
export declare const EventClaimedUploaderRole: {
    encode(message: EventClaimedUploaderRole, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClaimedUploaderRole;
    fromPartial(object: Partial<EventClaimedUploaderRole>): EventClaimedUploaderRole;
};
export declare const EventSkippedUploaderRole: {
    encode(message: EventSkippedUploaderRole, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSkippedUploaderRole;
    fromPartial(object: Partial<EventSkippedUploaderRole>): EventSkippedUploaderRole;
};
export declare const EventPointIncreased: {
    encode(message: EventPointIncreased, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPointIncreased;
    fromPartial(object: Partial<EventPointIncreased>): EventPointIncreased;
};
export declare const EventPointsReset: {
    encode(message: EventPointsReset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPointsReset;
    fromPartial(object: Partial<EventPointsReset>): EventPointsReset;
};
