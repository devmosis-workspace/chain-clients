import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../../binary";
/** FundingStatus ... */
export declare enum FundingStatus {
    /** FUNDING_STATUS_UNSPECIFIED - FundingStatusUnspecified ... */
    FUNDING_STATUS_UNSPECIFIED = 0,
    /** FUNDING_STATUS_ACTIVE - FundingStatusActive status is set when the funding is active. */
    FUNDING_STATUS_ACTIVE = 1,
    /** FUNDING_STATUS_INACTIVE - FundingStatusInactive status is set when the funding has been used up or refunded. */
    FUNDING_STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const FundingStatusSDKType: typeof FundingStatus;
export declare const FundingStatusAmino: typeof FundingStatus;
export declare function fundingStatusFromJSON(object: any): FundingStatus;
export declare function fundingStatusToJSON(object: FundingStatus): string;
/** Funder ... */
export interface Funder {
    /** address ... */
    address: string;
    /** moniker ... */
    moniker: string;
    /** identity is the 64 bit keybase.io identity string */
    identity: string;
    /** website ... */
    website: string;
    /** contact ... */
    contact: string;
    /** description ... */
    description: string;
    /** statistics about all the fundings of the funder. */
    stats?: FundingStats;
}
export interface FunderProtoMsg {
    typeUrl: "/kyve.query.v1beta1.Funder";
    value: Uint8Array;
}
/** Funder ... */
export interface FunderAmino {
    /** address ... */
    address?: string;
    /** moniker ... */
    moniker?: string;
    /** identity is the 64 bit keybase.io identity string */
    identity?: string;
    /** website ... */
    website?: string;
    /** contact ... */
    contact?: string;
    /** description ... */
    description?: string;
    /** statistics about all the fundings of the funder. */
    stats?: FundingStatsAmino;
}
export interface FunderAminoMsg {
    type: "/kyve.query.v1beta1.Funder";
    value: FunderAmino;
}
/** Funder ... */
export interface FunderSDKType {
    address: string;
    moniker: string;
    identity: string;
    website: string;
    contact: string;
    description: string;
    stats?: FundingStatsSDKType;
}
/** FundingStats ... */
export interface FundingStats {
    /** total_used_funds are the total funds that have been distributed by the funder. */
    totalUsedFunds: bigint;
    /** total_allocated_funds are the total funds that have been allocated by the funder. They can either get distributed or refunded. */
    totalAllocatedFunds: bigint;
    /** total_amount_per_bundle is the total amount per bundle of all fundings of the funder. */
    totalAmountPerBundle: bigint;
    /** pools_funded are the ids of the pools that have been funded by the funder. */
    poolsFunded: bigint[];
}
export interface FundingStatsProtoMsg {
    typeUrl: "/kyve.query.v1beta1.FundingStats";
    value: Uint8Array;
}
/** FundingStats ... */
export interface FundingStatsAmino {
    /** total_used_funds are the total funds that have been distributed by the funder. */
    total_used_funds?: string;
    /** total_allocated_funds are the total funds that have been allocated by the funder. They can either get distributed or refunded. */
    total_allocated_funds?: string;
    /** total_amount_per_bundle is the total amount per bundle of all fundings of the funder. */
    total_amount_per_bundle?: string;
    /** pools_funded are the ids of the pools that have been funded by the funder. */
    pools_funded?: string[];
}
export interface FundingStatsAminoMsg {
    type: "/kyve.query.v1beta1.FundingStats";
    value: FundingStatsAmino;
}
/** FundingStats ... */
export interface FundingStatsSDKType {
    total_used_funds: bigint;
    total_allocated_funds: bigint;
    total_amount_per_bundle: bigint;
    pools_funded: bigint[];
}
/** Funding ... */
export interface Funding {
    /** funder_address */
    funderAddress: string;
    /** pool_id ... */
    poolId: bigint;
    /** amount ... */
    amount: bigint;
    /** amount_per_bundle ... */
    amountPerBundle: bigint;
    /** total_funded ... */
    totalFunded: bigint;
}
export interface FundingProtoMsg {
    typeUrl: "/kyve.query.v1beta1.Funding";
    value: Uint8Array;
}
/** Funding ... */
export interface FundingAmino {
    /** funder_address */
    funder_address?: string;
    /** pool_id ... */
    pool_id?: string;
    /** amount ... */
    amount?: string;
    /** amount_per_bundle ... */
    amount_per_bundle?: string;
    /** total_funded ... */
    total_funded?: string;
}
export interface FundingAminoMsg {
    type: "/kyve.query.v1beta1.Funding";
    value: FundingAmino;
}
/** Funding ... */
export interface FundingSDKType {
    funder_address: string;
    pool_id: bigint;
    amount: bigint;
    amount_per_bundle: bigint;
    total_funded: bigint;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** search ... */
    search: string;
}
export interface QueryFundersRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFundersRequest";
    value: Uint8Array;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** search ... */
    search?: string;
}
export interface QueryFundersRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryFundersRequest";
    value: QueryFundersRequestAmino;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequestSDKType {
    pagination?: PageRequestSDKType;
    search: string;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    /** funders ... */
    funders: Funder[];
}
export interface QueryFundersResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFundersResponse";
    value: Uint8Array;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponseAmino {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
    /** funders ... */
    funders?: FunderAmino[];
}
export interface QueryFundersResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryFundersResponse";
    value: QueryFundersResponseAmino;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponseSDKType {
    pagination?: PageResponseSDKType;
    funders: FunderSDKType[];
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
    /** address ... */
    address: string;
    /** status ... */
    status: FundingStatus;
}
export interface QueryFunderRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFunderRequest";
    value: Uint8Array;
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequestAmino {
    /** address ... */
    address?: string;
    /** status ... */
    status?: FundingStatus;
}
export interface QueryFunderRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryFunderRequest";
    value: QueryFunderRequestAmino;
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequestSDKType {
    address: string;
    status: FundingStatus;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponse {
    /** funder ... */
    funder?: Funder;
    /** fundings ... */
    fundings: Funding[];
}
export interface QueryFunderResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFunderResponse";
    value: Uint8Array;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponseAmino {
    /** funder ... */
    funder?: FunderAmino;
    /** fundings ... */
    fundings?: FundingAmino[];
}
export interface QueryFunderResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryFunderResponse";
    value: QueryFunderResponseAmino;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponseSDKType {
    funder?: FunderSDKType;
    fundings: FundingSDKType[];
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
    /** status ... */
    status: FundingStatus;
}
export interface QueryFundingsByFunderRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderRequest";
    value: Uint8Array;
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** address ... */
    address?: string;
    /** status ... */
    status?: FundingStatus;
}
export interface QueryFundingsByFunderRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryFundingsByFunderRequest";
    value: QueryFundingsByFunderRequestAmino;
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequestSDKType {
    pagination?: PageRequestSDKType;
    address: string;
    status: FundingStatus;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    /** fundings ... */
    fundings: Funding[];
}
export interface QueryFundingsByFunderResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderResponse";
    value: Uint8Array;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponseAmino {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
    /** fundings ... */
    fundings?: FundingAmino[];
}
export interface QueryFundingsByFunderResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryFundingsByFunderResponse";
    value: QueryFundingsByFunderResponseAmino;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponseSDKType {
    pagination?: PageResponseSDKType;
    fundings: FundingSDKType[];
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    poolId: bigint;
    /** status ... */
    status: FundingStatus;
}
export interface QueryFundingsByPoolRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolRequest";
    value: Uint8Array;
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** pool_id ... */
    pool_id?: string;
    /** status ... */
    status?: FundingStatus;
}
export interface QueryFundingsByPoolRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryFundingsByPoolRequest";
    value: QueryFundingsByPoolRequestAmino;
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequestSDKType {
    pagination?: PageRequestSDKType;
    pool_id: bigint;
    status: FundingStatus;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    /** fundings ... */
    fundings: Funding[];
}
export interface QueryFundingsByPoolResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolResponse";
    value: Uint8Array;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponseAmino {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
    /** fundings ... */
    fundings?: FundingAmino[];
}
export interface QueryFundingsByPoolResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryFundingsByPoolResponse";
    value: QueryFundingsByPoolResponseAmino;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponseSDKType {
    pagination?: PageResponseSDKType;
    fundings: FundingSDKType[];
}
export declare const Funder: {
    typeUrl: string;
    encode(message: Funder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Funder;
    fromPartial(object: Partial<Funder>): Funder;
    fromAmino(object: FunderAmino): Funder;
    toAmino(message: Funder): FunderAmino;
    fromAminoMsg(object: FunderAminoMsg): Funder;
    fromProtoMsg(message: FunderProtoMsg): Funder;
    toProto(message: Funder): Uint8Array;
    toProtoMsg(message: Funder): FunderProtoMsg;
};
export declare const FundingStats: {
    typeUrl: string;
    encode(message: FundingStats, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FundingStats;
    fromPartial(object: Partial<FundingStats>): FundingStats;
    fromAmino(object: FundingStatsAmino): FundingStats;
    toAmino(message: FundingStats): FundingStatsAmino;
    fromAminoMsg(object: FundingStatsAminoMsg): FundingStats;
    fromProtoMsg(message: FundingStatsProtoMsg): FundingStats;
    toProto(message: FundingStats): Uint8Array;
    toProtoMsg(message: FundingStats): FundingStatsProtoMsg;
};
export declare const Funding: {
    typeUrl: string;
    encode(message: Funding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Funding;
    fromPartial(object: Partial<Funding>): Funding;
    fromAmino(object: FundingAmino): Funding;
    toAmino(message: Funding): FundingAmino;
    fromAminoMsg(object: FundingAminoMsg): Funding;
    fromProtoMsg(message: FundingProtoMsg): Funding;
    toProto(message: Funding): Uint8Array;
    toProtoMsg(message: Funding): FundingProtoMsg;
};
export declare const QueryFundersRequest: {
    typeUrl: string;
    encode(message: QueryFundersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFundersRequest;
    fromPartial(object: Partial<QueryFundersRequest>): QueryFundersRequest;
    fromAmino(object: QueryFundersRequestAmino): QueryFundersRequest;
    toAmino(message: QueryFundersRequest): QueryFundersRequestAmino;
    fromAminoMsg(object: QueryFundersRequestAminoMsg): QueryFundersRequest;
    fromProtoMsg(message: QueryFundersRequestProtoMsg): QueryFundersRequest;
    toProto(message: QueryFundersRequest): Uint8Array;
    toProtoMsg(message: QueryFundersRequest): QueryFundersRequestProtoMsg;
};
export declare const QueryFundersResponse: {
    typeUrl: string;
    encode(message: QueryFundersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFundersResponse;
    fromPartial(object: Partial<QueryFundersResponse>): QueryFundersResponse;
    fromAmino(object: QueryFundersResponseAmino): QueryFundersResponse;
    toAmino(message: QueryFundersResponse): QueryFundersResponseAmino;
    fromAminoMsg(object: QueryFundersResponseAminoMsg): QueryFundersResponse;
    fromProtoMsg(message: QueryFundersResponseProtoMsg): QueryFundersResponse;
    toProto(message: QueryFundersResponse): Uint8Array;
    toProtoMsg(message: QueryFundersResponse): QueryFundersResponseProtoMsg;
};
export declare const QueryFunderRequest: {
    typeUrl: string;
    encode(message: QueryFunderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFunderRequest;
    fromPartial(object: Partial<QueryFunderRequest>): QueryFunderRequest;
    fromAmino(object: QueryFunderRequestAmino): QueryFunderRequest;
    toAmino(message: QueryFunderRequest): QueryFunderRequestAmino;
    fromAminoMsg(object: QueryFunderRequestAminoMsg): QueryFunderRequest;
    fromProtoMsg(message: QueryFunderRequestProtoMsg): QueryFunderRequest;
    toProto(message: QueryFunderRequest): Uint8Array;
    toProtoMsg(message: QueryFunderRequest): QueryFunderRequestProtoMsg;
};
export declare const QueryFunderResponse: {
    typeUrl: string;
    encode(message: QueryFunderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFunderResponse;
    fromPartial(object: Partial<QueryFunderResponse>): QueryFunderResponse;
    fromAmino(object: QueryFunderResponseAmino): QueryFunderResponse;
    toAmino(message: QueryFunderResponse): QueryFunderResponseAmino;
    fromAminoMsg(object: QueryFunderResponseAminoMsg): QueryFunderResponse;
    fromProtoMsg(message: QueryFunderResponseProtoMsg): QueryFunderResponse;
    toProto(message: QueryFunderResponse): Uint8Array;
    toProtoMsg(message: QueryFunderResponse): QueryFunderResponseProtoMsg;
};
export declare const QueryFundingsByFunderRequest: {
    typeUrl: string;
    encode(message: QueryFundingsByFunderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFundingsByFunderRequest;
    fromPartial(object: Partial<QueryFundingsByFunderRequest>): QueryFundingsByFunderRequest;
    fromAmino(object: QueryFundingsByFunderRequestAmino): QueryFundingsByFunderRequest;
    toAmino(message: QueryFundingsByFunderRequest): QueryFundingsByFunderRequestAmino;
    fromAminoMsg(object: QueryFundingsByFunderRequestAminoMsg): QueryFundingsByFunderRequest;
    fromProtoMsg(message: QueryFundingsByFunderRequestProtoMsg): QueryFundingsByFunderRequest;
    toProto(message: QueryFundingsByFunderRequest): Uint8Array;
    toProtoMsg(message: QueryFundingsByFunderRequest): QueryFundingsByFunderRequestProtoMsg;
};
export declare const QueryFundingsByFunderResponse: {
    typeUrl: string;
    encode(message: QueryFundingsByFunderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFundingsByFunderResponse;
    fromPartial(object: Partial<QueryFundingsByFunderResponse>): QueryFundingsByFunderResponse;
    fromAmino(object: QueryFundingsByFunderResponseAmino): QueryFundingsByFunderResponse;
    toAmino(message: QueryFundingsByFunderResponse): QueryFundingsByFunderResponseAmino;
    fromAminoMsg(object: QueryFundingsByFunderResponseAminoMsg): QueryFundingsByFunderResponse;
    fromProtoMsg(message: QueryFundingsByFunderResponseProtoMsg): QueryFundingsByFunderResponse;
    toProto(message: QueryFundingsByFunderResponse): Uint8Array;
    toProtoMsg(message: QueryFundingsByFunderResponse): QueryFundingsByFunderResponseProtoMsg;
};
export declare const QueryFundingsByPoolRequest: {
    typeUrl: string;
    encode(message: QueryFundingsByPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFundingsByPoolRequest;
    fromPartial(object: Partial<QueryFundingsByPoolRequest>): QueryFundingsByPoolRequest;
    fromAmino(object: QueryFundingsByPoolRequestAmino): QueryFundingsByPoolRequest;
    toAmino(message: QueryFundingsByPoolRequest): QueryFundingsByPoolRequestAmino;
    fromAminoMsg(object: QueryFundingsByPoolRequestAminoMsg): QueryFundingsByPoolRequest;
    fromProtoMsg(message: QueryFundingsByPoolRequestProtoMsg): QueryFundingsByPoolRequest;
    toProto(message: QueryFundingsByPoolRequest): Uint8Array;
    toProtoMsg(message: QueryFundingsByPoolRequest): QueryFundingsByPoolRequestProtoMsg;
};
export declare const QueryFundingsByPoolResponse: {
    typeUrl: string;
    encode(message: QueryFundingsByPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFundingsByPoolResponse;
    fromPartial(object: Partial<QueryFundingsByPoolResponse>): QueryFundingsByPoolResponse;
    fromAmino(object: QueryFundingsByPoolResponseAmino): QueryFundingsByPoolResponse;
    toAmino(message: QueryFundingsByPoolResponse): QueryFundingsByPoolResponseAmino;
    fromAminoMsg(object: QueryFundingsByPoolResponseAminoMsg): QueryFundingsByPoolResponse;
    fromProtoMsg(message: QueryFundingsByPoolResponseProtoMsg): QueryFundingsByPoolResponse;
    toProto(message: QueryFundingsByPoolResponse): Uint8Array;
    toProtoMsg(message: QueryFundingsByPoolResponse): QueryFundingsByPoolResponseProtoMsg;
};
