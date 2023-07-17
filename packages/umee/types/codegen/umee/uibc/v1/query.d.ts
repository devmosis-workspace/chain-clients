import { Params, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflows {
    denom: string;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflowsSDKType {
    denom: string;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponse {
    amount: string;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponseSDKType {
    amount: string;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflows {
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflowsSDKType {
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponse {
    outflows: DecCoin[];
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseSDKType {
    outflows: DecCoinSDKType[];
}
export declare const QueryParams: {
    encode(_: QueryParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryOutflows: {
    encode(message: QueryOutflows, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOutflows;
    fromPartial(object: Partial<QueryOutflows>): QueryOutflows;
};
export declare const QueryOutflowsResponse: {
    encode(message: QueryOutflowsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOutflowsResponse;
    fromPartial(object: Partial<QueryOutflowsResponse>): QueryOutflowsResponse;
};
export declare const QueryAllOutflows: {
    encode(_: QueryAllOutflows, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAllOutflows;
    fromPartial(_: Partial<QueryAllOutflows>): QueryAllOutflows;
};
export declare const QueryAllOutflowsResponse: {
    encode(message: QueryAllOutflowsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllOutflowsResponse;
    fromPartial(object: Partial<QueryAllOutflowsResponse>): QueryAllOutflowsResponse;
};
