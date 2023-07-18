import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Deposit, DepositSDKType } from "./store";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParamsRequest defines the request type for querying x/savings
 * parameters.
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsRequest defines the request type for querying x/savings
 * parameters.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryParamsResponse defines the response type for querying x/savings
 * parameters.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryParamsResponse defines the response type for querying x/savings
 * parameters.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryDepositsRequest defines the request type for querying x/savings
 * deposits.
 */
export interface QueryDepositsRequest {
    denom: string;
    owner: string;
    pagination?: PageRequest;
}
/**
 * QueryDepositsRequest defines the request type for querying x/savings
 * deposits.
 */
export interface QueryDepositsRequestSDKType {
    denom: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDepositsResponse defines the response type for querying x/savings
 * deposits.
 */
export interface QueryDepositsResponse {
    deposits: Deposit[];
    pagination?: PageResponse;
}
/**
 * QueryDepositsResponse defines the response type for querying x/savings
 * deposits.
 */
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
    /** Height is the block height at which these totals apply */
    height: Long;
    /** Result is a list of coins supplied to savings */
    result: Coin[];
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
    height: Long;
    result: CoinSDKType[];
}
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
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositsRequest;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositsResponse;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(_: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalSupplyRequest;
    fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
