import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Revenue, RevenueAmino, RevenueSDKType } from "./revenue";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryRevenuesRequestProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryRevenuesRequest";
    value: Uint8Array;
}
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryRevenuesRequestAminoMsg {
    type: "/evmos.revenue.v1.QueryRevenuesRequest";
    value: QueryRevenuesRequestAmino;
}
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponse {
    /** revenues is a slice of all stored Reveneue */
    revenues: Revenue[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryRevenuesResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryRevenuesResponse";
    value: Uint8Array;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponseAmino {
    /** revenues is a slice of all stored Reveneue */
    revenues: RevenueAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryRevenuesResponseAminoMsg {
    type: "/evmos.revenue.v1.QueryRevenuesResponse";
    value: QueryRevenuesResponseAmino;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponseSDKType {
    revenues: RevenueSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequest {
    /** contract_address of a registered contract in hex format */
    contractAddress: string;
}
export interface QueryRevenueRequestProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryRevenueRequest";
    value: Uint8Array;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequestAmino {
    /** contract_address of a registered contract in hex format */
    contract_address: string;
}
export interface QueryRevenueRequestAminoMsg {
    type: "/evmos.revenue.v1.QueryRevenueRequest";
    value: QueryRevenueRequestAmino;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequestSDKType {
    contract_address: string;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponse {
    /** revenue is a stored Reveneue for the queried contract */
    revenue: Revenue;
}
export interface QueryRevenueResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryRevenueResponse";
    value: Uint8Array;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponseAmino {
    /** revenue is a stored Reveneue for the queried contract */
    revenue?: RevenueAmino;
}
export interface QueryRevenueResponseAminoMsg {
    type: "/evmos.revenue.v1.QueryRevenueResponse";
    value: QueryRevenueResponseAmino;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponseSDKType {
    revenue: RevenueSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/evmos.revenue.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params is the returned revenue parameter */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params is the returned revenue parameter */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/evmos.revenue.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequest {
    /** deployer_address in bech32 format */
    deployerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDeployerRevenuesRequestProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesRequest";
    value: Uint8Array;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequestAmino {
    /** deployer_address in bech32 format */
    deployer_address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDeployerRevenuesRequestAminoMsg {
    type: "/evmos.revenue.v1.QueryDeployerRevenuesRequest";
    value: QueryDeployerRevenuesRequestAmino;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequestSDKType {
    deployer_address: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponse {
    /** contract_addresses is the slice of registered contract addresses for a deployer */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryDeployerRevenuesResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesResponse";
    value: Uint8Array;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponseAmino {
    /** contract_addresses is the slice of registered contract addresses for a deployer */
    contract_addresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDeployerRevenuesResponseAminoMsg {
    type: "/evmos.revenue.v1.QueryDeployerRevenuesResponse";
    value: QueryDeployerRevenuesResponseAmino;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponseSDKType {
    contract_addresses: string[];
    pagination: PageResponseSDKType;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequest {
    /** withdrawer_address in bech32 format */
    withdrawerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryWithdrawerRevenuesRequestProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest";
    value: Uint8Array;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequestAmino {
    /** withdrawer_address in bech32 format */
    withdrawer_address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryWithdrawerRevenuesRequestAminoMsg {
    type: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest";
    value: QueryWithdrawerRevenuesRequestAmino;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequestSDKType {
    withdrawer_address: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponse {
    /** contract_addresses is the slice of registered contract addresses for a withdrawer */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryWithdrawerRevenuesResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse";
    value: Uint8Array;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponseAmino {
    /** contract_addresses is the slice of registered contract addresses for a withdrawer */
    contract_addresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryWithdrawerRevenuesResponseAminoMsg {
    type: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse";
    value: QueryWithdrawerRevenuesResponseAmino;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponseSDKType {
    contract_addresses: string[];
    pagination: PageResponseSDKType;
}
export declare const QueryRevenuesRequest: {
    typeUrl: string;
    encode(message: QueryRevenuesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRevenuesRequest;
    fromPartial(object: Partial<QueryRevenuesRequest>): QueryRevenuesRequest;
    fromAmino(object: QueryRevenuesRequestAmino): QueryRevenuesRequest;
    toAmino(message: QueryRevenuesRequest): QueryRevenuesRequestAmino;
    fromAminoMsg(object: QueryRevenuesRequestAminoMsg): QueryRevenuesRequest;
    fromProtoMsg(message: QueryRevenuesRequestProtoMsg): QueryRevenuesRequest;
    toProto(message: QueryRevenuesRequest): Uint8Array;
    toProtoMsg(message: QueryRevenuesRequest): QueryRevenuesRequestProtoMsg;
};
export declare const QueryRevenuesResponse: {
    typeUrl: string;
    encode(message: QueryRevenuesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRevenuesResponse;
    fromPartial(object: Partial<QueryRevenuesResponse>): QueryRevenuesResponse;
    fromAmino(object: QueryRevenuesResponseAmino): QueryRevenuesResponse;
    toAmino(message: QueryRevenuesResponse): QueryRevenuesResponseAmino;
    fromAminoMsg(object: QueryRevenuesResponseAminoMsg): QueryRevenuesResponse;
    fromProtoMsg(message: QueryRevenuesResponseProtoMsg): QueryRevenuesResponse;
    toProto(message: QueryRevenuesResponse): Uint8Array;
    toProtoMsg(message: QueryRevenuesResponse): QueryRevenuesResponseProtoMsg;
};
export declare const QueryRevenueRequest: {
    typeUrl: string;
    encode(message: QueryRevenueRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRevenueRequest;
    fromPartial(object: Partial<QueryRevenueRequest>): QueryRevenueRequest;
    fromAmino(object: QueryRevenueRequestAmino): QueryRevenueRequest;
    toAmino(message: QueryRevenueRequest): QueryRevenueRequestAmino;
    fromAminoMsg(object: QueryRevenueRequestAminoMsg): QueryRevenueRequest;
    fromProtoMsg(message: QueryRevenueRequestProtoMsg): QueryRevenueRequest;
    toProto(message: QueryRevenueRequest): Uint8Array;
    toProtoMsg(message: QueryRevenueRequest): QueryRevenueRequestProtoMsg;
};
export declare const QueryRevenueResponse: {
    typeUrl: string;
    encode(message: QueryRevenueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRevenueResponse;
    fromPartial(object: Partial<QueryRevenueResponse>): QueryRevenueResponse;
    fromAmino(object: QueryRevenueResponseAmino): QueryRevenueResponse;
    toAmino(message: QueryRevenueResponse): QueryRevenueResponseAmino;
    fromAminoMsg(object: QueryRevenueResponseAminoMsg): QueryRevenueResponse;
    fromProtoMsg(message: QueryRevenueResponseProtoMsg): QueryRevenueResponse;
    toProto(message: QueryRevenueResponse): Uint8Array;
    toProtoMsg(message: QueryRevenueResponse): QueryRevenueResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDeployerRevenuesRequest: {
    typeUrl: string;
    encode(message: QueryDeployerRevenuesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeployerRevenuesRequest;
    fromPartial(object: Partial<QueryDeployerRevenuesRequest>): QueryDeployerRevenuesRequest;
    fromAmino(object: QueryDeployerRevenuesRequestAmino): QueryDeployerRevenuesRequest;
    toAmino(message: QueryDeployerRevenuesRequest): QueryDeployerRevenuesRequestAmino;
    fromAminoMsg(object: QueryDeployerRevenuesRequestAminoMsg): QueryDeployerRevenuesRequest;
    fromProtoMsg(message: QueryDeployerRevenuesRequestProtoMsg): QueryDeployerRevenuesRequest;
    toProto(message: QueryDeployerRevenuesRequest): Uint8Array;
    toProtoMsg(message: QueryDeployerRevenuesRequest): QueryDeployerRevenuesRequestProtoMsg;
};
export declare const QueryDeployerRevenuesResponse: {
    typeUrl: string;
    encode(message: QueryDeployerRevenuesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeployerRevenuesResponse;
    fromPartial(object: Partial<QueryDeployerRevenuesResponse>): QueryDeployerRevenuesResponse;
    fromAmino(object: QueryDeployerRevenuesResponseAmino): QueryDeployerRevenuesResponse;
    toAmino(message: QueryDeployerRevenuesResponse): QueryDeployerRevenuesResponseAmino;
    fromAminoMsg(object: QueryDeployerRevenuesResponseAminoMsg): QueryDeployerRevenuesResponse;
    fromProtoMsg(message: QueryDeployerRevenuesResponseProtoMsg): QueryDeployerRevenuesResponse;
    toProto(message: QueryDeployerRevenuesResponse): Uint8Array;
    toProtoMsg(message: QueryDeployerRevenuesResponse): QueryDeployerRevenuesResponseProtoMsg;
};
export declare const QueryWithdrawerRevenuesRequest: {
    typeUrl: string;
    encode(message: QueryWithdrawerRevenuesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawerRevenuesRequest;
    fromPartial(object: Partial<QueryWithdrawerRevenuesRequest>): QueryWithdrawerRevenuesRequest;
    fromAmino(object: QueryWithdrawerRevenuesRequestAmino): QueryWithdrawerRevenuesRequest;
    toAmino(message: QueryWithdrawerRevenuesRequest): QueryWithdrawerRevenuesRequestAmino;
    fromAminoMsg(object: QueryWithdrawerRevenuesRequestAminoMsg): QueryWithdrawerRevenuesRequest;
    fromProtoMsg(message: QueryWithdrawerRevenuesRequestProtoMsg): QueryWithdrawerRevenuesRequest;
    toProto(message: QueryWithdrawerRevenuesRequest): Uint8Array;
    toProtoMsg(message: QueryWithdrawerRevenuesRequest): QueryWithdrawerRevenuesRequestProtoMsg;
};
export declare const QueryWithdrawerRevenuesResponse: {
    typeUrl: string;
    encode(message: QueryWithdrawerRevenuesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawerRevenuesResponse;
    fromPartial(object: Partial<QueryWithdrawerRevenuesResponse>): QueryWithdrawerRevenuesResponse;
    fromAmino(object: QueryWithdrawerRevenuesResponseAmino): QueryWithdrawerRevenuesResponse;
    toAmino(message: QueryWithdrawerRevenuesResponse): QueryWithdrawerRevenuesResponseAmino;
    fromAminoMsg(object: QueryWithdrawerRevenuesResponseAminoMsg): QueryWithdrawerRevenuesResponse;
    fromProtoMsg(message: QueryWithdrawerRevenuesResponseProtoMsg): QueryWithdrawerRevenuesResponse;
    toProto(message: QueryWithdrawerRevenuesResponse): Uint8Array;
    toProtoMsg(message: QueryWithdrawerRevenuesResponse): QueryWithdrawerRevenuesResponseProtoMsg;
};
