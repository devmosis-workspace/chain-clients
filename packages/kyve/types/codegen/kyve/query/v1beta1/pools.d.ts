import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolAmino, PoolSDKType, PoolStatus } from "../../pool/v1beta1/pool";
import { BundleProposal, BundleProposalAmino, BundleProposalSDKType } from "../../bundles/v1beta1/bundles";
import { BinaryWriter } from "../../../binary";
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
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryPoolsRequest";
    value: Uint8Array;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** search ... */
    search?: string;
    /** runtime ... */
    runtime?: string;
    /** disabled ... */
    disabled?: boolean;
    /** storage_provider_id ... */
    storage_provider_id?: number;
}
export interface QueryPoolsRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryPoolsRequest";
    value: QueryPoolsRequestAmino;
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
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryPoolsResponse";
    value: Uint8Array;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseAmino {
    /** pools ... */
    pools?: PoolResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryPoolsResponse";
    value: QueryPoolsResponseAmino;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
    pools: PoolResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** PoolResponse ... */
export interface PoolResponse {
    /** id ... */
    id: bigint;
    /** data ... */
    data?: Pool;
    /** bundle_proposal ... */
    bundleProposal?: BundleProposal;
    /** stakers ... */
    stakers: string[];
    /** total_stake ... */
    totalSelfDelegation: bigint;
    /** total_delegation ... */
    totalDelegation: bigint;
    /** status ... */
    status: PoolStatus;
    /** account ... */
    account: string;
    /** account_balance ... */
    accountBalance: bigint;
}
export interface PoolResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.PoolResponse";
    value: Uint8Array;
}
/** PoolResponse ... */
export interface PoolResponseAmino {
    /** id ... */
    id?: string;
    /** data ... */
    data?: PoolAmino;
    /** bundle_proposal ... */
    bundle_proposal?: BundleProposalAmino;
    /** stakers ... */
    stakers?: string[];
    /** total_stake ... */
    total_self_delegation?: string;
    /** total_delegation ... */
    total_delegation?: string;
    /** status ... */
    status?: PoolStatus;
    /** account ... */
    account?: string;
    /** account_balance ... */
    account_balance?: string;
}
export interface PoolResponseAminoMsg {
    type: "/kyve.query.v1beta1.PoolResponse";
    value: PoolResponseAmino;
}
/** PoolResponse ... */
export interface PoolResponseSDKType {
    id: bigint;
    data?: PoolSDKType;
    bundle_proposal?: BundleProposalSDKType;
    stakers: string[];
    total_self_delegation: bigint;
    total_delegation: bigint;
    status: PoolStatus;
    account: string;
    account_balance: bigint;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
    /** id defines the unique ID of the pool. */
    id: bigint;
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryPoolRequest";
    value: Uint8Array;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {
    /** id defines the unique ID of the pool. */
    id?: string;
}
export interface QueryPoolRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryPoolRequest";
    value: QueryPoolRequestAmino;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
    id: bigint;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool ... */
    pool: PoolResponse;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryPoolResponse";
    value: Uint8Array;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
    /** pool ... */
    pool?: PoolResponseAmino;
}
export interface QueryPoolResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryPoolResponse";
    value: QueryPoolResponseAmino;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
    pool: PoolResponseSDKType;
}
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const PoolResponse: {
    typeUrl: string;
    encode(message: PoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolResponse;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
    fromAmino(object: PoolResponseAmino): PoolResponse;
    toAmino(message: PoolResponse): PoolResponseAmino;
    fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse;
    fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse;
    toProto(message: PoolResponse): Uint8Array;
    toProtoMsg(message: PoolResponse): PoolResponseProtoMsg;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
