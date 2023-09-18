import { BinaryWriter } from "../../../binary";
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
export declare const BundleStatusAmino: typeof BundleStatus;
export declare function bundleStatusFromJSON(object: any): BundleStatus;
export declare function bundleStatusToJSON(object: BundleStatus): string;
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposal {
    /** pool_id is the id of the pool for which this proposal is for */
    poolId: bigint;
    /** storage_id is the id with which the data can be retrieved from */
    storageId: string;
    /** uploader is the address of the staker who submitted the current proposal */
    uploader: string;
    /** next_uploader is the address of the staker who should upload the next proposal */
    nextUploader: string;
    /** data_size the size of the data in bytes */
    dataSize: bigint;
    /** bundle_size the size of the bundle (amount of data items) */
    bundleSize: bigint;
    /** to_key the key of the last data item in the bundle proposal */
    toKey: string;
    /** bundle_summary a string summary of the current proposal */
    bundleSummary: string;
    /** data_hash a sha256 hash of the raw compressed data */
    dataHash: string;
    /** updated_at the last time this proposal was edited */
    updatedAt: bigint;
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
export interface BundleProposalProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.BundleProposal";
    value: Uint8Array;
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposalAmino {
    /** pool_id is the id of the pool for which this proposal is for */
    pool_id: string;
    /** storage_id is the id with which the data can be retrieved from */
    storage_id: string;
    /** uploader is the address of the staker who submitted the current proposal */
    uploader: string;
    /** next_uploader is the address of the staker who should upload the next proposal */
    next_uploader: string;
    /** data_size the size of the data in bytes */
    data_size: string;
    /** bundle_size the size of the bundle (amount of data items) */
    bundle_size: string;
    /** to_key the key of the last data item in the bundle proposal */
    to_key: string;
    /** bundle_summary a string summary of the current proposal */
    bundle_summary: string;
    /** data_hash a sha256 hash of the raw compressed data */
    data_hash: string;
    /** updated_at the last time this proposal was edited */
    updated_at: string;
    /** voters_valid list of all stakers who voted in favor for current proposal */
    voters_valid: string[];
    /** voters_invalid list of all stakers who voted against for current proposal */
    voters_invalid: string[];
    /** voters_abstain list of all stakers who voted abstain for current proposal */
    voters_abstain: string[];
    /** from_key the key of the first data item in the bundle proposal */
    from_key: string;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storage_provider_id: number;
    /** compression_id the id of the compression type with which the data was compressed */
    compression_id: number;
}
export interface BundleProposalAminoMsg {
    type: "/kyve.bundles.v1beta1.BundleProposal";
    value: BundleProposalAmino;
}
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposalSDKType {
    pool_id: bigint;
    storage_id: string;
    uploader: string;
    next_uploader: string;
    data_size: bigint;
    bundle_size: bigint;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    updated_at: bigint;
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
    poolId: bigint;
    /** id is a unique identifier for each finalized bundle in a pool */
    id: bigint;
    /** storage_id is the id with which the data can be retrieved from */
    storageId: string;
    /** uploader is the address of the staker who submitted this bundle */
    uploader: string;
    /** from_index is the index from where the bundle starts (inclusive) */
    fromIndex: bigint;
    /** to_index is the index to which the bundle goes (exclusive) */
    toIndex: bigint;
    /** to_key the key of the last data item in the bundle proposal */
    toKey: string;
    /** bundle_summary a string summary of the current proposal */
    bundleSummary: string;
    /** data_hash a sha256 hash of the raw compressed data */
    dataHash: string;
    /** finalized_at contains details of the block that finalized this bundle. */
    finalizedAt: FinalizedAt;
    /** from_key the key of the first data item in the bundle proposal */
    fromKey: string;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storageProviderId: number;
    /** compression_id the id of the compression type with which the data was compressed */
    compressionId: number;
    /** stake_security */
    stakeSecurity: StakeSecurity;
}
export interface FinalizedBundleProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.FinalizedBundle";
    value: Uint8Array;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundleAmino {
    /** pool_id is the id of the pool for which this proposal is for */
    pool_id: string;
    /** id is a unique identifier for each finalized bundle in a pool */
    id: string;
    /** storage_id is the id with which the data can be retrieved from */
    storage_id: string;
    /** uploader is the address of the staker who submitted this bundle */
    uploader: string;
    /** from_index is the index from where the bundle starts (inclusive) */
    from_index: string;
    /** to_index is the index to which the bundle goes (exclusive) */
    to_index: string;
    /** to_key the key of the last data item in the bundle proposal */
    to_key: string;
    /** bundle_summary a string summary of the current proposal */
    bundle_summary: string;
    /** data_hash a sha256 hash of the raw compressed data */
    data_hash: string;
    /** finalized_at contains details of the block that finalized this bundle. */
    finalized_at?: FinalizedAtAmino;
    /** from_key the key of the first data item in the bundle proposal */
    from_key: string;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storage_provider_id: number;
    /** compression_id the id of the compression type with which the data was compressed */
    compression_id: number;
    /** stake_security */
    stake_security?: StakeSecurityAmino;
}
export interface FinalizedBundleAminoMsg {
    type: "/kyve.bundles.v1beta1.FinalizedBundle";
    value: FinalizedBundleAmino;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundleSDKType {
    pool_id: bigint;
    id: bigint;
    storage_id: string;
    uploader: string;
    from_index: bigint;
    to_index: bigint;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    finalized_at: FinalizedAtSDKType;
    from_key: string;
    storage_provider_id: number;
    compression_id: number;
    stake_security: StakeSecuritySDKType;
}
/** FinalizedAt ... */
export interface FinalizedAt {
    /** height ... */
    height: bigint;
    /** timestamp ... */
    timestamp: bigint;
}
export interface FinalizedAtProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.FinalizedAt";
    value: Uint8Array;
}
/** FinalizedAt ... */
export interface FinalizedAtAmino {
    /** height ... */
    height: string;
    /** timestamp ... */
    timestamp: string;
}
export interface FinalizedAtAminoMsg {
    type: "/kyve.bundles.v1beta1.FinalizedAt";
    value: FinalizedAtAmino;
}
/** FinalizedAt ... */
export interface FinalizedAtSDKType {
    height: bigint;
    timestamp: bigint;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurity {
    /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
    validVotePower: bigint;
    /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
    totalVotePower: bigint;
}
export interface StakeSecurityProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.StakeSecurity";
    value: Uint8Array;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurityAmino {
    /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
    valid_vote_power: string;
    /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
    total_vote_power: string;
}
export interface StakeSecurityAminoMsg {
    type: "/kyve.bundles.v1beta1.StakeSecurity";
    value: StakeSecurityAmino;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecuritySDKType {
    valid_vote_power: bigint;
    total_vote_power: bigint;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntry {
    /** height ... */
    height: bigint;
    /** version ... */
    version: number;
}
export interface BundleVersionEntryProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.BundleVersionEntry";
    value: Uint8Array;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntryAmino {
    /** height ... */
    height: string;
    /** version ... */
    version: number;
}
export interface BundleVersionEntryAminoMsg {
    type: "/kyve.bundles.v1beta1.BundleVersionEntry";
    value: BundleVersionEntryAmino;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntrySDKType {
    height: bigint;
    version: number;
}
/** BundleVersionMap ... */
export interface BundleVersionMap {
    /** versions ... */
    versions: BundleVersionEntry[];
}
export interface BundleVersionMapProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.BundleVersionMap";
    value: Uint8Array;
}
/** BundleVersionMap ... */
export interface BundleVersionMapAmino {
    /** versions ... */
    versions: BundleVersionEntryAmino[];
}
export interface BundleVersionMapAminoMsg {
    type: "/kyve.bundles.v1beta1.BundleVersionMap";
    value: BundleVersionMapAmino;
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
    progress: bigint;
}
export interface RoundRobinSingleValidatorProgressProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.RoundRobinSingleValidatorProgress";
    value: Uint8Array;
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgressAmino {
    /** address ... */
    address: string;
    /** progress ... */
    progress: string;
}
export interface RoundRobinSingleValidatorProgressAminoMsg {
    type: "/kyve.bundles.v1beta1.RoundRobinSingleValidatorProgress";
    value: RoundRobinSingleValidatorProgressAmino;
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgressSDKType {
    address: string;
    progress: bigint;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgress {
    /** pool_id ... */
    poolId: bigint;
    /** progress_list ... */
    progressList: RoundRobinSingleValidatorProgress[];
}
export interface RoundRobinProgressProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.RoundRobinProgress";
    value: Uint8Array;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgressAmino {
    /** pool_id ... */
    pool_id: string;
    /** progress_list ... */
    progress_list: RoundRobinSingleValidatorProgressAmino[];
}
export interface RoundRobinProgressAminoMsg {
    type: "/kyve.bundles.v1beta1.RoundRobinProgress";
    value: RoundRobinProgressAmino;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgressSDKType {
    pool_id: bigint;
    progress_list: RoundRobinSingleValidatorProgressSDKType[];
}
export declare const BundleProposal: {
    typeUrl: string;
    encode(message: BundleProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BundleProposal;
    fromPartial(object: Partial<BundleProposal>): BundleProposal;
    fromAmino(object: BundleProposalAmino): BundleProposal;
    toAmino(message: BundleProposal): BundleProposalAmino;
    fromAminoMsg(object: BundleProposalAminoMsg): BundleProposal;
    fromProtoMsg(message: BundleProposalProtoMsg): BundleProposal;
    toProto(message: BundleProposal): Uint8Array;
    toProtoMsg(message: BundleProposal): BundleProposalProtoMsg;
};
export declare const FinalizedBundle: {
    typeUrl: string;
    encode(message: FinalizedBundle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FinalizedBundle;
    fromPartial(object: Partial<FinalizedBundle>): FinalizedBundle;
    fromAmino(object: FinalizedBundleAmino): FinalizedBundle;
    toAmino(message: FinalizedBundle): FinalizedBundleAmino;
    fromAminoMsg(object: FinalizedBundleAminoMsg): FinalizedBundle;
    fromProtoMsg(message: FinalizedBundleProtoMsg): FinalizedBundle;
    toProto(message: FinalizedBundle): Uint8Array;
    toProtoMsg(message: FinalizedBundle): FinalizedBundleProtoMsg;
};
export declare const FinalizedAt: {
    typeUrl: string;
    encode(message: FinalizedAt, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FinalizedAt;
    fromPartial(object: Partial<FinalizedAt>): FinalizedAt;
    fromAmino(object: FinalizedAtAmino): FinalizedAt;
    toAmino(message: FinalizedAt): FinalizedAtAmino;
    fromAminoMsg(object: FinalizedAtAminoMsg): FinalizedAt;
    fromProtoMsg(message: FinalizedAtProtoMsg): FinalizedAt;
    toProto(message: FinalizedAt): Uint8Array;
    toProtoMsg(message: FinalizedAt): FinalizedAtProtoMsg;
};
export declare const StakeSecurity: {
    typeUrl: string;
    encode(message: StakeSecurity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StakeSecurity;
    fromPartial(object: Partial<StakeSecurity>): StakeSecurity;
    fromAmino(object: StakeSecurityAmino): StakeSecurity;
    toAmino(message: StakeSecurity): StakeSecurityAmino;
    fromAminoMsg(object: StakeSecurityAminoMsg): StakeSecurity;
    fromProtoMsg(message: StakeSecurityProtoMsg): StakeSecurity;
    toProto(message: StakeSecurity): Uint8Array;
    toProtoMsg(message: StakeSecurity): StakeSecurityProtoMsg;
};
export declare const BundleVersionEntry: {
    typeUrl: string;
    encode(message: BundleVersionEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BundleVersionEntry;
    fromPartial(object: Partial<BundleVersionEntry>): BundleVersionEntry;
    fromAmino(object: BundleVersionEntryAmino): BundleVersionEntry;
    toAmino(message: BundleVersionEntry): BundleVersionEntryAmino;
    fromAminoMsg(object: BundleVersionEntryAminoMsg): BundleVersionEntry;
    fromProtoMsg(message: BundleVersionEntryProtoMsg): BundleVersionEntry;
    toProto(message: BundleVersionEntry): Uint8Array;
    toProtoMsg(message: BundleVersionEntry): BundleVersionEntryProtoMsg;
};
export declare const BundleVersionMap: {
    typeUrl: string;
    encode(message: BundleVersionMap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BundleVersionMap;
    fromPartial(object: Partial<BundleVersionMap>): BundleVersionMap;
    fromAmino(object: BundleVersionMapAmino): BundleVersionMap;
    toAmino(message: BundleVersionMap): BundleVersionMapAmino;
    fromAminoMsg(object: BundleVersionMapAminoMsg): BundleVersionMap;
    fromProtoMsg(message: BundleVersionMapProtoMsg): BundleVersionMap;
    toProto(message: BundleVersionMap): Uint8Array;
    toProtoMsg(message: BundleVersionMap): BundleVersionMapProtoMsg;
};
export declare const RoundRobinSingleValidatorProgress: {
    typeUrl: string;
    encode(message: RoundRobinSingleValidatorProgress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoundRobinSingleValidatorProgress;
    fromPartial(object: Partial<RoundRobinSingleValidatorProgress>): RoundRobinSingleValidatorProgress;
    fromAmino(object: RoundRobinSingleValidatorProgressAmino): RoundRobinSingleValidatorProgress;
    toAmino(message: RoundRobinSingleValidatorProgress): RoundRobinSingleValidatorProgressAmino;
    fromAminoMsg(object: RoundRobinSingleValidatorProgressAminoMsg): RoundRobinSingleValidatorProgress;
    fromProtoMsg(message: RoundRobinSingleValidatorProgressProtoMsg): RoundRobinSingleValidatorProgress;
    toProto(message: RoundRobinSingleValidatorProgress): Uint8Array;
    toProtoMsg(message: RoundRobinSingleValidatorProgress): RoundRobinSingleValidatorProgressProtoMsg;
};
export declare const RoundRobinProgress: {
    typeUrl: string;
    encode(message: RoundRobinProgress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoundRobinProgress;
    fromPartial(object: Partial<RoundRobinProgress>): RoundRobinProgress;
    fromAmino(object: RoundRobinProgressAmino): RoundRobinProgress;
    toAmino(message: RoundRobinProgress): RoundRobinProgressAmino;
    fromAminoMsg(object: RoundRobinProgressAminoMsg): RoundRobinProgress;
    fromProtoMsg(message: RoundRobinProgressProtoMsg): RoundRobinProgress;
    toProto(message: RoundRobinProgress): Uint8Array;
    toProtoMsg(message: RoundRobinProgress): RoundRobinProgressProtoMsg;
};
