import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Revenue, RevenueSDKType } from "./revenue";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponse {
    /** revenues is a slice of all stored Reveneue */
    revenues: Revenue[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponseSDKType {
    revenues: RevenueSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequest {
    /** contract_address of a registered contract in hex format */
    contractAddress: string;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequestSDKType {
    contract_address: string;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponse {
    /** revenue is a stored Reveneue for the queried contract */
    revenue?: Revenue;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponseSDKType {
    revenue?: RevenueSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params is the returned revenue parameter */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequest {
    /** deployer_address in bech32 format */
    deployerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequestSDKType {
    deployer_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponse {
    /** contract_addresses is the slice of registered contract addresses for a deployer */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequest {
    /** withdrawer_address in bech32 format */
    withdrawerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequestSDKType {
    withdrawer_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponse {
    /** contract_addresses is the slice of registered contract addresses for a withdrawer */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryRevenuesRequest: {
    encode(message: QueryRevenuesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRevenuesRequest;
    fromPartial(object: Partial<QueryRevenuesRequest>): QueryRevenuesRequest;
};
export declare const QueryRevenuesResponse: {
    encode(message: QueryRevenuesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRevenuesResponse;
    fromPartial(object: Partial<QueryRevenuesResponse>): QueryRevenuesResponse;
};
export declare const QueryRevenueRequest: {
    encode(message: QueryRevenueRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRevenueRequest;
    fromPartial(object: Partial<QueryRevenueRequest>): QueryRevenueRequest;
};
export declare const QueryRevenueResponse: {
    encode(message: QueryRevenueResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRevenueResponse;
    fromPartial(object: Partial<QueryRevenueResponse>): QueryRevenueResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDeployerRevenuesRequest: {
    encode(message: QueryDeployerRevenuesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeployerRevenuesRequest;
    fromPartial(object: Partial<QueryDeployerRevenuesRequest>): QueryDeployerRevenuesRequest;
};
export declare const QueryDeployerRevenuesResponse: {
    encode(message: QueryDeployerRevenuesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeployerRevenuesResponse;
    fromPartial(object: Partial<QueryDeployerRevenuesResponse>): QueryDeployerRevenuesResponse;
};
export declare const QueryWithdrawerRevenuesRequest: {
    encode(message: QueryWithdrawerRevenuesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryWithdrawerRevenuesRequest;
    fromPartial(object: Partial<QueryWithdrawerRevenuesRequest>): QueryWithdrawerRevenuesRequest;
};
export declare const QueryWithdrawerRevenuesResponse: {
    encode(message: QueryWithdrawerRevenuesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryWithdrawerRevenuesResponse;
    fromPartial(object: Partial<QueryWithdrawerRevenuesResponse>): QueryWithdrawerRevenuesResponse;
};
