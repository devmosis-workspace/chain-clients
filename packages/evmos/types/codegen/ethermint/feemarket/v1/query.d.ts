import { Params, ParamsSDKType } from "./feemarket";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestSDKType {
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    /** base_fee is the EIP1559 base fee */
    baseFee: string;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseSDKType {
    base_fee: string;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequest {
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequestSDKType {
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponse {
    /** gas is the returned block gas */
    gas: Long;
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponseSDKType {
    gas: Long;
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
export declare const QueryBaseFeeRequest: {
    encode(_: QueryBaseFeeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBaseFeeRequest;
    fromPartial(_: Partial<QueryBaseFeeRequest>): QueryBaseFeeRequest;
};
export declare const QueryBaseFeeResponse: {
    encode(message: QueryBaseFeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBaseFeeResponse;
    fromPartial(object: Partial<QueryBaseFeeResponse>): QueryBaseFeeResponse;
};
export declare const QueryBlockGasRequest: {
    encode(_: QueryBlockGasRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBlockGasRequest;
    fromPartial(_: Partial<QueryBlockGasRequest>): QueryBlockGasRequest;
};
export declare const QueryBlockGasResponse: {
    encode(message: QueryBlockGasResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlockGasResponse;
    fromPartial(object: Partial<QueryBlockGasResponse>): QueryBlockGasResponse;
};
