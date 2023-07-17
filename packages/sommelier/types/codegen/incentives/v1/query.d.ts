import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponse {
    /** allocation parameters */
    params?: Params;
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequest {
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequestSDKType {
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponse {
    apy: string;
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponseSDKType {
    apy: string;
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
export declare const QueryAPYRequest: {
    encode(_: QueryAPYRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAPYRequest;
    fromPartial(_: Partial<QueryAPYRequest>): QueryAPYRequest;
};
export declare const QueryAPYResponse: {
    encode(message: QueryAPYResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAPYResponse;
    fromPartial(object: Partial<QueryAPYResponse>): QueryAPYResponse;
};
