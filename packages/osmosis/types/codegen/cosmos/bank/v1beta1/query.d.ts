import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import * as _m0 from "protobufjs/minimal";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
    address: string;
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
    balance?: CoinSDKType;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseSDKType {
    balances: CoinSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequest;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponse;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseSDKType {
    supply: CoinSDKType[];
    pagination?: PageResponseSDKType;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestSDKType {
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount?: Coin;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseSDKType {
    amount?: CoinSDKType;
}
/**
 * QueryTotalSupplyWithoutOffsetRequest is the request type for the Query/TotalSupplyWithoutOffset RPC
 * method.
 */
export interface QueryTotalSupplyWithoutOffsetRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequest;
}
/**
 * QueryTotalSupplyWithoutOffsetRequest is the request type for the Query/TotalSupplyWithoutOffset RPC
 * method.
 */
export interface QueryTotalSupplyWithoutOffsetRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryTotalSupplyWithoutOffsetResponse is the response type for the Query/TotalSupplyWithoutOffset RPC
 * method
 */
export interface QueryTotalSupplyWithoutOffsetResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponse;
}
/**
 * QueryTotalSupplyWithoutOffsetResponse is the response type for the Query/TotalSupplyWithoutOffset RPC
 * method
 */
export interface QueryTotalSupplyWithoutOffsetResponseSDKType {
    supply: CoinSDKType[];
    pagination?: PageResponseSDKType;
}
/** QuerySupplyOfWithoutOffsetRequest is the request type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QuerySupplyOfWithoutOffsetRequest is the request type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetRequestSDKType {
    denom: string;
}
/** QuerySupplyOfWithoutOffsetResponse is the response type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetResponse {
    /** amount is the supply of the coin. */
    amount?: Coin;
}
/** QuerySupplyOfWithoutOffsetResponse is the response type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetResponseSDKType {
    amount?: CoinSDKType;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseSDKType {
    metadatas: MetadataSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestSDKType {
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata?: Metadata;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseSDKType {
    metadata?: MetadataSDKType;
}
/** QueryBaseDenomRequest defines the request type for the BaseDenom gRPC method. */
export interface QueryBaseDenomRequest {
    denom: string;
}
/** QueryBaseDenomRequest defines the request type for the BaseDenom gRPC method. */
export interface QueryBaseDenomRequestSDKType {
    denom: string;
}
/** QueryBaseDenomResponse defines the response type for the BaseDenom gRPC method. */
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
/** QueryBaseDenomResponse defines the response type for the BaseDenom gRPC method. */
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceRequest;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryAllBalancesRequest: {
    encode(message: QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllBalancesRequest;
    fromPartial(object: Partial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
};
export declare const QueryAllBalancesResponse: {
    encode(message: QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllBalancesResponse;
    fromPartial(object: Partial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(message: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyRequest;
    fromPartial(object: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
export declare const QuerySupplyOfRequest: {
    encode(message: QuerySupplyOfRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupplyOfRequest;
    fromPartial(object: Partial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
};
export declare const QuerySupplyOfResponse: {
    encode(message: QuerySupplyOfResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupplyOfResponse;
    fromPartial(object: Partial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
};
export declare const QueryTotalSupplyWithoutOffsetRequest: {
    encode(message: QueryTotalSupplyWithoutOffsetRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyWithoutOffsetRequest;
    fromPartial(object: Partial<QueryTotalSupplyWithoutOffsetRequest>): QueryTotalSupplyWithoutOffsetRequest;
};
export declare const QueryTotalSupplyWithoutOffsetResponse: {
    encode(message: QueryTotalSupplyWithoutOffsetResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyWithoutOffsetResponse;
    fromPartial(object: Partial<QueryTotalSupplyWithoutOffsetResponse>): QueryTotalSupplyWithoutOffsetResponse;
};
export declare const QuerySupplyOfWithoutOffsetRequest: {
    encode(message: QuerySupplyOfWithoutOffsetRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupplyOfWithoutOffsetRequest;
    fromPartial(object: Partial<QuerySupplyOfWithoutOffsetRequest>): QuerySupplyOfWithoutOffsetRequest;
};
export declare const QuerySupplyOfWithoutOffsetResponse: {
    encode(message: QuerySupplyOfWithoutOffsetResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupplyOfWithoutOffsetResponse;
    fromPartial(object: Partial<QuerySupplyOfWithoutOffsetResponse>): QuerySupplyOfWithoutOffsetResponse;
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
export declare const QueryDenomsMetadataRequest: {
    encode(message: QueryDenomsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    fromPartial(object: Partial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest;
};
export declare const QueryDenomsMetadataResponse: {
    encode(message: QueryDenomsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    fromPartial(object: Partial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse;
};
export declare const QueryDenomMetadataRequest: {
    encode(message: QueryDenomMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomMetadataRequest;
    fromPartial(object: Partial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest;
};
export declare const QueryDenomMetadataResponse: {
    encode(message: QueryDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomMetadataResponse;
    fromPartial(object: Partial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse;
};
export declare const QueryBaseDenomRequest: {
    encode(message: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBaseDenomRequest;
    fromPartial(object: Partial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBaseDenomResponse;
    fromPartial(object: Partial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
};
