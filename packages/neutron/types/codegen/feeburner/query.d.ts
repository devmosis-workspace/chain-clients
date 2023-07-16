import { Params, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequest {
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequestSDKType {
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponse {
    totalBurnedNeutronsAmount?: TotalBurnedNeutronsAmount;
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponseSDKType {
    total_burned_neutrons_amount?: TotalBurnedNeutronsAmountSDKType;
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
export declare const QueryTotalBurnedNeutronsAmountRequest: {
    encode(_: QueryTotalBurnedNeutronsAmountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalBurnedNeutronsAmountRequest;
    fromPartial(_: Partial<QueryTotalBurnedNeutronsAmountRequest>): QueryTotalBurnedNeutronsAmountRequest;
};
export declare const QueryTotalBurnedNeutronsAmountResponse: {
    encode(message: QueryTotalBurnedNeutronsAmountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalBurnedNeutronsAmountResponse;
    fromPartial(object: Partial<QueryTotalBurnedNeutronsAmountResponse>): QueryTotalBurnedNeutronsAmountResponse;
};
