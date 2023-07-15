import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsRequest {
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
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
