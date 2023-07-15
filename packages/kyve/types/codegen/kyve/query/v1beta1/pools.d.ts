import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolSDKType, PoolStatus } from "../../pool/v1beta1/pool";
import { BundleProposal, BundleProposalSDKType } from "../../bundles/v1beta1/bundles";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** search ... */
    search: string;
    /** runtime ... */
    runtime: string;
    /** disabled ... */
    disabled: boolean;
    /** storage_provider_id ... */
    storageProviderId: number;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
    search: string;
    runtime: string;
    disabled: boolean;
    storage_provider_id: number;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
    /** pools ... */
    pools: PoolResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
    pools: PoolResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** PoolResponse ... */
export interface PoolResponse {
    /** id ... */
    id: Long;
    /** data ... */
    data?: Pool;
    /** bundle_proposal ... */
    bundleProposal?: BundleProposal;
    /** stakers ... */
    stakers: string[];
    /** total_stake ... */
    totalSelfDelegation: Long;
    /** total_delegation ... */
    totalDelegation: Long;
    /** status ... */
    status: PoolStatus;
}
/** PoolResponse ... */
export interface PoolResponseSDKType {
    id: Long;
    data?: PoolSDKType;
    bundle_proposal?: BundleProposalSDKType;
    stakers: string[];
    total_self_delegation: Long;
    total_delegation: Long;
    status: PoolStatus;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
    /** id defines the unique ID of the pool. */
    id: Long;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
    id: Long;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool ... */
    pool?: PoolResponse;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
    pool?: PoolResponseSDKType;
}
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const PoolResponse: {
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolResponse;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
};
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
};
