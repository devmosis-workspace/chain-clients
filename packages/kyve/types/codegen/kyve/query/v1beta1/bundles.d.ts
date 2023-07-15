import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundle {
    /** pool_id in which the bundle was created */
    poolId: Long;
    /** id is is integrated with each valid bundle produced. */
    id: Long;
    /** storage_id is the id with which the data can be retrieved from the configured data provider */
    storageId: string;
    /** uploader is the address of the staker who submitted this bundle */
    uploader: string;
    /** from_index is the index from where the bundle starts (inclusive) */
    fromIndex: Long;
    /** to_index is the index to which the bundle goes (exclusive) */
    toIndex: Long;
    /** from_key is the key of the first data item in the bundle proposal */
    fromKey: string;
    /** to_key the key of the last data item in the bundle */
    toKey: string;
    /** bundle_summary is a summary of the bundle. */
    bundleSummary: string;
    /** data_hash is a sha256 hash of the uploaded data. */
    dataHash: string;
    /** finalized_at contains details of the block that finalized this bundle. */
    finalizedAt?: FinalizedAt;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storageProviderId: Long;
    /** compression_id the id of the compression type with which the data was compressed */
    compressionId: Long;
    /**
     * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
     * This field was added in schema version 2. Bundles finalized before that return `null`.
     */
    stakeSecurity?: StakeSecurity;
}
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundleSDKType {
    pool_id: Long;
    id: Long;
    storage_id: string;
    uploader: string;
    from_index: Long;
    to_index: Long;
    from_key: string;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    finalized_at?: FinalizedAtSDKType;
    storage_provider_id: Long;
    compression_id: Long;
    stake_security?: StakeSecuritySDKType;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAt {
    /** height is the block height in which the bundle got finalized. */
    height: string;
    /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
    timestamp: string;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAtSDKType {
    height: string;
    timestamp: string;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecurity {
    /** valid_vote_power gives the amount of $KYVE stake that voted `valid`. */
    validVotePower: string;
    /**
     * total_vote_power gives the amount of total $KYVE stake that was present in the pool
     * during finalization.
     */
    totalVotePower: string;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecuritySDKType {
    valid_vote_power: string;
    total_vote_power: string;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    poolId: Long;
    /**
     * index is an optional parameter which tells the server to only show
     * the bundle with the given index. This can not be combined with pagination.
     */
    index: string;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequestSDKType {
    pagination?: PageRequestSDKType;
    pool_id: Long;
    index: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
    /** finalized_bundles ... */
    finalizedBundles: FinalizedBundle[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponseSDKType {
    finalized_bundles: FinalizedBundleSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
    /** pool_id ... */
    poolId: Long;
    /** id ... */
    id: Long;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequestSDKType {
    pool_id: Long;
    id: Long;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
    /** finalized_bundles ... */
    finalizedBundles?: FinalizedBundle;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponseSDKType {
    finalized_bundles?: FinalizedBundleSDKType;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
    /** pool_id ... */
    poolId: Long;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequestSDKType {
    pool_id: Long;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
    /** valid ... */
    valid: Long;
    /** invalid ... */
    invalid: Long;
    /** abstain ... */
    abstain: Long;
    /** total ... */
    total: Long;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponseSDKType {
    valid: Long;
    invalid: Long;
    abstain: Long;
    total: Long;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: Long;
    /** valaddress ... */
    valaddress: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequestSDKType {
    pool_id: Long;
    valaddress: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponseSDKType {
    possible: boolean;
    reason: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: Long;
    /** staker ... */
    staker: string;
    /** proposer ... */
    proposer: string;
    /** from_index ... */
    fromIndex: Long;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequestSDKType {
    pool_id: Long;
    staker: string;
    proposer: string;
    from_index: Long;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponseSDKType {
    possible: boolean;
    reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: Long;
    /** staker ... */
    staker: string;
    /** voter ... */
    voter: string;
    /** storage_id ... */
    storageId: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequestSDKType {
    pool_id: Long;
    staker: string;
    voter: string;
    storage_id: string;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponseSDKType {
    possible: boolean;
    reason: string;
}
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
export declare const QueryFinalizedBundlesRequest: {
    encode(message: QueryFinalizedBundlesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFinalizedBundlesRequest;
    fromPartial(object: Partial<QueryFinalizedBundlesRequest>): QueryFinalizedBundlesRequest;
};
export declare const QueryFinalizedBundlesResponse: {
    encode(message: QueryFinalizedBundlesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFinalizedBundlesResponse;
    fromPartial(object: Partial<QueryFinalizedBundlesResponse>): QueryFinalizedBundlesResponse;
};
export declare const QueryFinalizedBundleRequest: {
    encode(message: QueryFinalizedBundleRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFinalizedBundleRequest;
    fromPartial(object: Partial<QueryFinalizedBundleRequest>): QueryFinalizedBundleRequest;
};
export declare const QueryFinalizedBundleResponse: {
    encode(message: QueryFinalizedBundleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFinalizedBundleResponse;
    fromPartial(object: Partial<QueryFinalizedBundleResponse>): QueryFinalizedBundleResponse;
};
export declare const QueryCurrentVoteStatusRequest: {
    encode(message: QueryCurrentVoteStatusRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentVoteStatusRequest;
    fromPartial(object: Partial<QueryCurrentVoteStatusRequest>): QueryCurrentVoteStatusRequest;
};
export declare const QueryCurrentVoteStatusResponse: {
    encode(message: QueryCurrentVoteStatusResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentVoteStatusResponse;
    fromPartial(object: Partial<QueryCurrentVoteStatusResponse>): QueryCurrentVoteStatusResponse;
};
export declare const QueryCanValidateRequest: {
    encode(message: QueryCanValidateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCanValidateRequest;
    fromPartial(object: Partial<QueryCanValidateRequest>): QueryCanValidateRequest;
};
export declare const QueryCanValidateResponse: {
    encode(message: QueryCanValidateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCanValidateResponse;
    fromPartial(object: Partial<QueryCanValidateResponse>): QueryCanValidateResponse;
};
export declare const QueryCanProposeRequest: {
    encode(message: QueryCanProposeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCanProposeRequest;
    fromPartial(object: Partial<QueryCanProposeRequest>): QueryCanProposeRequest;
};
export declare const QueryCanProposeResponse: {
    encode(message: QueryCanProposeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCanProposeResponse;
    fromPartial(object: Partial<QueryCanProposeResponse>): QueryCanProposeResponse;
};
export declare const QueryCanVoteRequest: {
    encode(message: QueryCanVoteRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCanVoteRequest;
    fromPartial(object: Partial<QueryCanVoteRequest>): QueryCanVoteRequest;
};
export declare const QueryCanVoteResponse: {
    encode(message: QueryCanVoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCanVoteResponse;
    fromPartial(object: Partial<QueryCanVoteResponse>): QueryCanVoteResponse;
};
