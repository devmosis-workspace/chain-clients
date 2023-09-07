import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BundleStatus represents the status of an evaluated bundle
 * proposal.
 */
export declare enum BundleStatus {
    /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
    BUNDLE_STATUS_UNSPECIFIED = 0,
    /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
    BUNDLE_STATUS_VALID = 1,
    /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
    BUNDLE_STATUS_INVALID = 2,
    /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
    BUNDLE_STATUS_NO_FUNDS = 3,
    /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
    BUNDLE_STATUS_NO_QUORUM = 4,
    /** BUNDLE_STATUS_DISABLED - BUNDLE_STATUS_DISABLED  ... */
    BUNDLE_STATUS_DISABLED = 5,
    UNRECOGNIZED = -1
}
export declare const BundleStatusSDKType: typeof BundleStatus;
export declare function bundleStatusFromJSON(object: any): BundleStatus;
export declare function bundleStatusToJSON(object: BundleStatus): string;
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposal {
    /** pool_id is the id of the pool for which this proposal is for */
    poolId: Long;
    /** storage_id is the id with which the data can be retrieved from */
    storageId: string;
    /** uploader is the address of the staker who submitted the current proposal */
    uploader: string;
    /** next_uploader is the address of the staker who should upload the next proposal */
    nextUploader: string;
    /** data_size the size of the data in bytes */
    dataSize: Long;
    /** bundle_size the size of the bundle (amount of data items) */
    bundleSize: Long;
    /** to_key the key of the last data item in the bundle proposal */
    toKey: string;
    /** bundle_summary a string summary of the current proposal */
    bundleSummary: string;
    /** data_hash a sha256 hash of the raw compressed data */
    dataHash: string;
    /** updated_at the last time this proposal was edited */
    updatedAt: Long;
    /** voters_valid list of all stakers who voted in favor for current proposal */
    votersValid: string[];
    /** voters_invalid list of all stakers who voted against for current proposal */
    votersInvalid: string[];
    /** voters_abstain list of all stakers who voted abstain for current proposal */
    votersAbstain: string[];
    /** from_key the key of the first data item in the bundle proposal */
    fromKey: string;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storageProviderId: number;
    /** compression_id the id of the compression type with which the data was compressed */
    compressionId: number;
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposalSDKType {
    pool_id: Long;
    storage_id: string;
    uploader: string;
    next_uploader: string;
    data_size: Long;
    bundle_size: Long;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    updated_at: Long;
    voters_valid: string[];
    voters_invalid: string[];
    voters_abstain: string[];
    from_key: string;
    storage_provider_id: number;
    compression_id: number;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundle {
    /** pool_id is the id of the pool for which this proposal is for */
    poolId: Long;
    /** id is a unique identifier for each finalized bundle in a pool */
    id: Long;
    /** storage_id is the id with which the data can be retrieved from */
    storageId: string;
    /** uploader is the address of the staker who submitted this bundle */
    uploader: string;
    /** from_index is the index from where the bundle starts (inclusive) */
    fromIndex: Long;
    /** to_index is the index to which the bundle goes (exclusive) */
    toIndex: Long;
    /** to_key the key of the last data item in the bundle proposal */
    toKey: string;
    /** bundle_summary a string summary of the current proposal */
    bundleSummary: string;
    /** data_hash a sha256 hash of the raw compressed data */
    dataHash: string;
    /** finalized_at contains details of the block that finalized this bundle. */
    finalizedAt?: FinalizedAt;
    /** from_key the key of the first data item in the bundle proposal */
    fromKey: string;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storageProviderId: number;
    /** compression_id the id of the compression type with which the data was compressed */
    compressionId: number;
    /** stake_security */
    stakeSecurity?: StakeSecurity;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundleSDKType {
    pool_id: Long;
    id: Long;
    storage_id: string;
    uploader: string;
    from_index: Long;
    to_index: Long;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    finalized_at?: FinalizedAtSDKType;
    from_key: string;
    storage_provider_id: number;
    compression_id: number;
    stake_security?: StakeSecuritySDKType;
}
/** FinalizedAt ... */
export interface FinalizedAt {
    /** height ... */
    height: Long;
    /** timestamp ... */
    timestamp: Long;
}
/** FinalizedAt ... */
export interface FinalizedAtSDKType {
    height: Long;
    timestamp: Long;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurity {
    /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
    validVotePower: Long;
    /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
    totalVotePower: Long;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecuritySDKType {
    valid_vote_power: Long;
    total_vote_power: Long;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntry {
    /** height ... */
    height: Long;
    /** version ... */
    version: number;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntrySDKType {
    height: Long;
    version: number;
}
/** BundleVersionMap ... */
export interface BundleVersionMap {
    /** versions ... */
    versions: BundleVersionEntry[];
}
/** BundleVersionMap ... */
export interface BundleVersionMapSDKType {
    versions: BundleVersionEntrySDKType[];
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgress {
    /** address ... */
    address: string;
    /** progress ... */
    progress: Long;
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgressSDKType {
    address: string;
    progress: Long;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgress {
    /** pool_id ... */
    poolId: Long;
    /** progress_list ... */
    progressList: RoundRobinSingleValidatorProgress[];
}
/** RoundRobinProgress ... */
export interface RoundRobinProgressSDKType {
    pool_id: Long;
    progress_list: RoundRobinSingleValidatorProgressSDKType[];
}
export declare const BundleProposal: {
    encode(message: BundleProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BundleProposal;
    fromPartial(object: Partial<BundleProposal>): BundleProposal;
};
export declare const FinalizedBundle: {
    encode(message: FinalizedBundle, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FinalizedBundle;
    fromPartial(object: Partial<FinalizedBundle>): FinalizedBundle;
};
export declare const FinalizedAt: {
    encode(message: FinalizedAt, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FinalizedAt;
    fromPartial(object: Partial<FinalizedAt>): FinalizedAt;
};
export declare const StakeSecurity: {
    encode(message: StakeSecurity, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StakeSecurity;
    fromPartial(object: Partial<StakeSecurity>): StakeSecurity;
};
export declare const BundleVersionEntry: {
    encode(message: BundleVersionEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BundleVersionEntry;
    fromPartial(object: Partial<BundleVersionEntry>): BundleVersionEntry;
};
export declare const BundleVersionMap: {
    encode(message: BundleVersionMap, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BundleVersionMap;
    fromPartial(object: Partial<BundleVersionMap>): BundleVersionMap;
};
export declare const RoundRobinSingleValidatorProgress: {
    encode(message: RoundRobinSingleValidatorProgress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoundRobinSingleValidatorProgress;
    fromPartial(object: Partial<RoundRobinSingleValidatorProgress>): RoundRobinSingleValidatorProgress;
};
export declare const RoundRobinProgress: {
    encode(message: RoundRobinProgress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoundRobinProgress;
    fromPartial(object: Partial<RoundRobinProgress>): RoundRobinProgress;
};
