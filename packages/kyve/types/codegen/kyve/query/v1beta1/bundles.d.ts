import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../../binary";
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundle {
    /** pool_id in which the bundle was created */
    poolId: bigint;
    /** id is is integrated with each valid bundle produced. */
    id: bigint;
    /** storage_id is the id with which the data can be retrieved from the configured data provider */
    storageId: string;
    /** uploader is the address of the staker who submitted this bundle */
    uploader: string;
    /** from_index is the index from where the bundle starts (inclusive) */
    fromIndex: bigint;
    /** to_index is the index to which the bundle goes (exclusive) */
    toIndex: bigint;
    /** from_key is the key of the first data item in the bundle proposal */
    fromKey: string;
    /** to_key the key of the last data item in the bundle */
    toKey: string;
    /** bundle_summary is a summary of the bundle. */
    bundleSummary: string;
    /** data_hash is a sha256 hash of the uploaded data. */
    dataHash: string;
    /** finalized_at contains details of the block that finalized this bundle. */
    finalizedAt: FinalizedAt;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storageProviderId: bigint;
    /** compression_id the id of the compression type with which the data was compressed */
    compressionId: bigint;
    /**
     * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
     * This field was added in schema version 2. Bundles finalized before that return `null`.
     */
    stakeSecurity: StakeSecurity;
}
export interface FinalizedBundleProtoMsg {
    typeUrl: "/kyve.query.v1beta1.FinalizedBundle";
    value: Uint8Array;
}
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundleAmino {
    /** pool_id in which the bundle was created */
    pool_id: string;
    /** id is is integrated with each valid bundle produced. */
    id: string;
    /** storage_id is the id with which the data can be retrieved from the configured data provider */
    storage_id: string;
    /** uploader is the address of the staker who submitted this bundle */
    uploader: string;
    /** from_index is the index from where the bundle starts (inclusive) */
    from_index: string;
    /** to_index is the index to which the bundle goes (exclusive) */
    to_index: string;
    /** from_key is the key of the first data item in the bundle proposal */
    from_key: string;
    /** to_key the key of the last data item in the bundle */
    to_key: string;
    /** bundle_summary is a summary of the bundle. */
    bundle_summary: string;
    /** data_hash is a sha256 hash of the uploaded data. */
    data_hash: string;
    /** finalized_at contains details of the block that finalized this bundle. */
    finalized_at?: FinalizedAtAmino;
    /** storage_provider_id the id of the storage provider where the bundle is stored */
    storage_provider_id: string;
    /** compression_id the id of the compression type with which the data was compressed */
    compression_id: string;
    /**
     * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
     * This field was added in schema version 2. Bundles finalized before that return `null`.
     */
    stake_security?: StakeSecurityAmino;
}
export interface FinalizedBundleAminoMsg {
    type: "/kyve.query.v1beta1.FinalizedBundle";
    value: FinalizedBundleAmino;
}
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundleSDKType {
    pool_id: bigint;
    id: bigint;
    storage_id: string;
    uploader: string;
    from_index: bigint;
    to_index: bigint;
    from_key: string;
    to_key: string;
    bundle_summary: string;
    data_hash: string;
    finalized_at: FinalizedAtSDKType;
    storage_provider_id: bigint;
    compression_id: bigint;
    stake_security: StakeSecuritySDKType;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAt {
    /** height is the block height in which the bundle got finalized. */
    height: string;
    /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
    timestamp: string;
}
export interface FinalizedAtProtoMsg {
    typeUrl: "/kyve.query.v1beta1.FinalizedAt";
    value: Uint8Array;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAtAmino {
    /** height is the block height in which the bundle got finalized. */
    height: string;
    /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
    timestamp: string;
}
export interface FinalizedAtAminoMsg {
    type: "/kyve.query.v1beta1.FinalizedAt";
    value: FinalizedAtAmino;
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
export interface StakeSecurityProtoMsg {
    typeUrl: "/kyve.query.v1beta1.StakeSecurity";
    value: Uint8Array;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecurityAmino {
    /** valid_vote_power gives the amount of $KYVE stake that voted `valid`. */
    valid_vote_power: string;
    /**
     * total_vote_power gives the amount of total $KYVE stake that was present in the pool
     * during finalization.
     */
    total_vote_power: string;
}
export interface StakeSecurityAminoMsg {
    type: "/kyve.query.v1beta1.StakeSecurity";
    value: StakeSecurityAmino;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecuritySDKType {
    valid_vote_power: string;
    total_vote_power: string;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
    /** pool_id ... */
    poolId: bigint;
    /**
     * index is an optional parameter which tells the server to only show
     * the bundle with the given index. This can not be combined with pagination.
     */
    index: string;
}
export interface QueryFinalizedBundlesRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesRequest";
    value: Uint8Array;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** pool_id ... */
    pool_id: string;
    /**
     * index is an optional parameter which tells the server to only show
     * the bundle with the given index. This can not be combined with pagination.
     */
    index: string;
}
export interface QueryFinalizedBundlesRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryFinalizedBundlesRequest";
    value: QueryFinalizedBundlesRequestAmino;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequestSDKType {
    pagination: PageRequestSDKType;
    pool_id: bigint;
    index: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
    /** finalized_bundles ... */
    finalizedBundles: FinalizedBundle[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryFinalizedBundlesResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundlesResponse";
    value: Uint8Array;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponseAmino {
    /** finalized_bundles ... */
    finalized_bundles: FinalizedBundleAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryFinalizedBundlesResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryFinalizedBundlesResponse";
    value: QueryFinalizedBundlesResponseAmino;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponseSDKType {
    finalized_bundles: FinalizedBundleSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
    /** pool_id ... */
    poolId: bigint;
    /** id ... */
    id: bigint;
}
export interface QueryFinalizedBundleRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleRequest";
    value: Uint8Array;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequestAmino {
    /** pool_id ... */
    pool_id: string;
    /** id ... */
    id: string;
}
export interface QueryFinalizedBundleRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryFinalizedBundleRequest";
    value: QueryFinalizedBundleRequestAmino;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequestSDKType {
    pool_id: bigint;
    id: bigint;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
    /** finalized_bundles ... */
    finalizedBundles: FinalizedBundle;
}
export interface QueryFinalizedBundleResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFinalizedBundleResponse";
    value: Uint8Array;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponseAmino {
    /** finalized_bundles ... */
    finalized_bundles?: FinalizedBundleAmino;
}
export interface QueryFinalizedBundleResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryFinalizedBundleResponse";
    value: QueryFinalizedBundleResponseAmino;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponseSDKType {
    finalized_bundles: FinalizedBundleSDKType;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
    /** pool_id ... */
    poolId: bigint;
}
export interface QueryCurrentVoteStatusRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusRequest";
    value: Uint8Array;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequestAmino {
    /** pool_id ... */
    pool_id: string;
}
export interface QueryCurrentVoteStatusRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryCurrentVoteStatusRequest";
    value: QueryCurrentVoteStatusRequestAmino;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequestSDKType {
    pool_id: bigint;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
    /** valid ... */
    valid: bigint;
    /** invalid ... */
    invalid: bigint;
    /** abstain ... */
    abstain: bigint;
    /** total ... */
    total: bigint;
}
export interface QueryCurrentVoteStatusResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCurrentVoteStatusResponse";
    value: Uint8Array;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponseAmino {
    /** valid ... */
    valid: string;
    /** invalid ... */
    invalid: string;
    /** abstain ... */
    abstain: string;
    /** total ... */
    total: string;
}
export interface QueryCurrentVoteStatusResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryCurrentVoteStatusResponse";
    value: QueryCurrentVoteStatusResponseAmino;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponseSDKType {
    valid: bigint;
    invalid: bigint;
    abstain: bigint;
    total: bigint;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: bigint;
    /** valaddress ... */
    valaddress: string;
}
export interface QueryCanValidateRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCanValidateRequest";
    value: Uint8Array;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequestAmino {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** valaddress ... */
    valaddress: string;
}
export interface QueryCanValidateRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryCanValidateRequest";
    value: QueryCanValidateRequestAmino;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequestSDKType {
    pool_id: bigint;
    valaddress: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
export interface QueryCanValidateResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCanValidateResponse";
    value: Uint8Array;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponseAmino {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
export interface QueryCanValidateResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryCanValidateResponse";
    value: QueryCanValidateResponseAmino;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponseSDKType {
    possible: boolean;
    reason: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: bigint;
    /** staker ... */
    staker: string;
    /** proposer ... */
    proposer: string;
    /** from_index ... */
    fromIndex: bigint;
}
export interface QueryCanProposeRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCanProposeRequest";
    value: Uint8Array;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequestAmino {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** proposer ... */
    proposer: string;
    /** from_index ... */
    from_index: string;
}
export interface QueryCanProposeRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryCanProposeRequest";
    value: QueryCanProposeRequestAmino;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequestSDKType {
    pool_id: bigint;
    staker: string;
    proposer: string;
    from_index: bigint;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
export interface QueryCanProposeResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCanProposeResponse";
    value: Uint8Array;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponseAmino {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
export interface QueryCanProposeResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryCanProposeResponse";
    value: QueryCanProposeResponseAmino;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponseSDKType {
    possible: boolean;
    reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: bigint;
    /** staker ... */
    staker: string;
    /** voter ... */
    voter: string;
    /** storage_id ... */
    storageId: string;
}
export interface QueryCanVoteRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCanVoteRequest";
    value: Uint8Array;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequestAmino {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** voter ... */
    voter: string;
    /** storage_id ... */
    storage_id: string;
}
export interface QueryCanVoteRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryCanVoteRequest";
    value: QueryCanVoteRequestAmino;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequestSDKType {
    pool_id: bigint;
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
export interface QueryCanVoteResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryCanVoteResponse";
    value: Uint8Array;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponseAmino {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
export interface QueryCanVoteResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryCanVoteResponse";
    value: QueryCanVoteResponseAmino;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponseSDKType {
    possible: boolean;
    reason: string;
}
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
export declare const QueryFinalizedBundlesRequest: {
    typeUrl: string;
    encode(message: QueryFinalizedBundlesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFinalizedBundlesRequest;
    fromPartial(object: Partial<QueryFinalizedBundlesRequest>): QueryFinalizedBundlesRequest;
    fromAmino(object: QueryFinalizedBundlesRequestAmino): QueryFinalizedBundlesRequest;
    toAmino(message: QueryFinalizedBundlesRequest): QueryFinalizedBundlesRequestAmino;
    fromAminoMsg(object: QueryFinalizedBundlesRequestAminoMsg): QueryFinalizedBundlesRequest;
    fromProtoMsg(message: QueryFinalizedBundlesRequestProtoMsg): QueryFinalizedBundlesRequest;
    toProto(message: QueryFinalizedBundlesRequest): Uint8Array;
    toProtoMsg(message: QueryFinalizedBundlesRequest): QueryFinalizedBundlesRequestProtoMsg;
};
export declare const QueryFinalizedBundlesResponse: {
    typeUrl: string;
    encode(message: QueryFinalizedBundlesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFinalizedBundlesResponse;
    fromPartial(object: Partial<QueryFinalizedBundlesResponse>): QueryFinalizedBundlesResponse;
    fromAmino(object: QueryFinalizedBundlesResponseAmino): QueryFinalizedBundlesResponse;
    toAmino(message: QueryFinalizedBundlesResponse): QueryFinalizedBundlesResponseAmino;
    fromAminoMsg(object: QueryFinalizedBundlesResponseAminoMsg): QueryFinalizedBundlesResponse;
    fromProtoMsg(message: QueryFinalizedBundlesResponseProtoMsg): QueryFinalizedBundlesResponse;
    toProto(message: QueryFinalizedBundlesResponse): Uint8Array;
    toProtoMsg(message: QueryFinalizedBundlesResponse): QueryFinalizedBundlesResponseProtoMsg;
};
export declare const QueryFinalizedBundleRequest: {
    typeUrl: string;
    encode(message: QueryFinalizedBundleRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFinalizedBundleRequest;
    fromPartial(object: Partial<QueryFinalizedBundleRequest>): QueryFinalizedBundleRequest;
    fromAmino(object: QueryFinalizedBundleRequestAmino): QueryFinalizedBundleRequest;
    toAmino(message: QueryFinalizedBundleRequest): QueryFinalizedBundleRequestAmino;
    fromAminoMsg(object: QueryFinalizedBundleRequestAminoMsg): QueryFinalizedBundleRequest;
    fromProtoMsg(message: QueryFinalizedBundleRequestProtoMsg): QueryFinalizedBundleRequest;
    toProto(message: QueryFinalizedBundleRequest): Uint8Array;
    toProtoMsg(message: QueryFinalizedBundleRequest): QueryFinalizedBundleRequestProtoMsg;
};
export declare const QueryFinalizedBundleResponse: {
    typeUrl: string;
    encode(message: QueryFinalizedBundleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFinalizedBundleResponse;
    fromPartial(object: Partial<QueryFinalizedBundleResponse>): QueryFinalizedBundleResponse;
    fromAmino(object: QueryFinalizedBundleResponseAmino): QueryFinalizedBundleResponse;
    toAmino(message: QueryFinalizedBundleResponse): QueryFinalizedBundleResponseAmino;
    fromAminoMsg(object: QueryFinalizedBundleResponseAminoMsg): QueryFinalizedBundleResponse;
    fromProtoMsg(message: QueryFinalizedBundleResponseProtoMsg): QueryFinalizedBundleResponse;
    toProto(message: QueryFinalizedBundleResponse): Uint8Array;
    toProtoMsg(message: QueryFinalizedBundleResponse): QueryFinalizedBundleResponseProtoMsg;
};
export declare const QueryCurrentVoteStatusRequest: {
    typeUrl: string;
    encode(message: QueryCurrentVoteStatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentVoteStatusRequest;
    fromPartial(object: Partial<QueryCurrentVoteStatusRequest>): QueryCurrentVoteStatusRequest;
    fromAmino(object: QueryCurrentVoteStatusRequestAmino): QueryCurrentVoteStatusRequest;
    toAmino(message: QueryCurrentVoteStatusRequest): QueryCurrentVoteStatusRequestAmino;
    fromAminoMsg(object: QueryCurrentVoteStatusRequestAminoMsg): QueryCurrentVoteStatusRequest;
    fromProtoMsg(message: QueryCurrentVoteStatusRequestProtoMsg): QueryCurrentVoteStatusRequest;
    toProto(message: QueryCurrentVoteStatusRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentVoteStatusRequest): QueryCurrentVoteStatusRequestProtoMsg;
};
export declare const QueryCurrentVoteStatusResponse: {
    typeUrl: string;
    encode(message: QueryCurrentVoteStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentVoteStatusResponse;
    fromPartial(object: Partial<QueryCurrentVoteStatusResponse>): QueryCurrentVoteStatusResponse;
    fromAmino(object: QueryCurrentVoteStatusResponseAmino): QueryCurrentVoteStatusResponse;
    toAmino(message: QueryCurrentVoteStatusResponse): QueryCurrentVoteStatusResponseAmino;
    fromAminoMsg(object: QueryCurrentVoteStatusResponseAminoMsg): QueryCurrentVoteStatusResponse;
    fromProtoMsg(message: QueryCurrentVoteStatusResponseProtoMsg): QueryCurrentVoteStatusResponse;
    toProto(message: QueryCurrentVoteStatusResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentVoteStatusResponse): QueryCurrentVoteStatusResponseProtoMsg;
};
export declare const QueryCanValidateRequest: {
    typeUrl: string;
    encode(message: QueryCanValidateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCanValidateRequest;
    fromPartial(object: Partial<QueryCanValidateRequest>): QueryCanValidateRequest;
    fromAmino(object: QueryCanValidateRequestAmino): QueryCanValidateRequest;
    toAmino(message: QueryCanValidateRequest): QueryCanValidateRequestAmino;
    fromAminoMsg(object: QueryCanValidateRequestAminoMsg): QueryCanValidateRequest;
    fromProtoMsg(message: QueryCanValidateRequestProtoMsg): QueryCanValidateRequest;
    toProto(message: QueryCanValidateRequest): Uint8Array;
    toProtoMsg(message: QueryCanValidateRequest): QueryCanValidateRequestProtoMsg;
};
export declare const QueryCanValidateResponse: {
    typeUrl: string;
    encode(message: QueryCanValidateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCanValidateResponse;
    fromPartial(object: Partial<QueryCanValidateResponse>): QueryCanValidateResponse;
    fromAmino(object: QueryCanValidateResponseAmino): QueryCanValidateResponse;
    toAmino(message: QueryCanValidateResponse): QueryCanValidateResponseAmino;
    fromAminoMsg(object: QueryCanValidateResponseAminoMsg): QueryCanValidateResponse;
    fromProtoMsg(message: QueryCanValidateResponseProtoMsg): QueryCanValidateResponse;
    toProto(message: QueryCanValidateResponse): Uint8Array;
    toProtoMsg(message: QueryCanValidateResponse): QueryCanValidateResponseProtoMsg;
};
export declare const QueryCanProposeRequest: {
    typeUrl: string;
    encode(message: QueryCanProposeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCanProposeRequest;
    fromPartial(object: Partial<QueryCanProposeRequest>): QueryCanProposeRequest;
    fromAmino(object: QueryCanProposeRequestAmino): QueryCanProposeRequest;
    toAmino(message: QueryCanProposeRequest): QueryCanProposeRequestAmino;
    fromAminoMsg(object: QueryCanProposeRequestAminoMsg): QueryCanProposeRequest;
    fromProtoMsg(message: QueryCanProposeRequestProtoMsg): QueryCanProposeRequest;
    toProto(message: QueryCanProposeRequest): Uint8Array;
    toProtoMsg(message: QueryCanProposeRequest): QueryCanProposeRequestProtoMsg;
};
export declare const QueryCanProposeResponse: {
    typeUrl: string;
    encode(message: QueryCanProposeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCanProposeResponse;
    fromPartial(object: Partial<QueryCanProposeResponse>): QueryCanProposeResponse;
    fromAmino(object: QueryCanProposeResponseAmino): QueryCanProposeResponse;
    toAmino(message: QueryCanProposeResponse): QueryCanProposeResponseAmino;
    fromAminoMsg(object: QueryCanProposeResponseAminoMsg): QueryCanProposeResponse;
    fromProtoMsg(message: QueryCanProposeResponseProtoMsg): QueryCanProposeResponse;
    toProto(message: QueryCanProposeResponse): Uint8Array;
    toProtoMsg(message: QueryCanProposeResponse): QueryCanProposeResponseProtoMsg;
};
export declare const QueryCanVoteRequest: {
    typeUrl: string;
    encode(message: QueryCanVoteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCanVoteRequest;
    fromPartial(object: Partial<QueryCanVoteRequest>): QueryCanVoteRequest;
    fromAmino(object: QueryCanVoteRequestAmino): QueryCanVoteRequest;
    toAmino(message: QueryCanVoteRequest): QueryCanVoteRequestAmino;
    fromAminoMsg(object: QueryCanVoteRequestAminoMsg): QueryCanVoteRequest;
    fromProtoMsg(message: QueryCanVoteRequestProtoMsg): QueryCanVoteRequest;
    toProto(message: QueryCanVoteRequest): Uint8Array;
    toProtoMsg(message: QueryCanVoteRequest): QueryCanVoteRequestProtoMsg;
};
export declare const QueryCanVoteResponse: {
    typeUrl: string;
    encode(message: QueryCanVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCanVoteResponse;
    fromPartial(object: Partial<QueryCanVoteResponse>): QueryCanVoteResponse;
    fromAmino(object: QueryCanVoteResponseAmino): QueryCanVoteResponse;
    toAmino(message: QueryCanVoteResponse): QueryCanVoteResponseAmino;
    fromAminoMsg(object: QueryCanVoteResponseAminoMsg): QueryCanVoteResponse;
    fromProtoMsg(message: QueryCanVoteResponseProtoMsg): QueryCanVoteResponse;
    toProto(message: QueryCanVoteResponse): Uint8Array;
    toProtoMsg(message: QueryCanVoteResponse): QueryCanVoteResponseProtoMsg;
};
