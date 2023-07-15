import { Params, ParamsSDKType, State, StateSDKType } from "./vbank";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequest {
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequestSDKType {
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponse {
    /** state defines the parameters of the module. */
    state?: State;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponseSDKType {
    state?: StateSDKType;
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
export declare const QueryStateRequest: {
    encode(_: QueryStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryStateRequest;
    fromPartial(_: Partial<QueryStateRequest>): QueryStateRequest;
};
export declare const QueryStateResponse: {
    encode(message: QueryStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStateResponse;
    fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse;
};
