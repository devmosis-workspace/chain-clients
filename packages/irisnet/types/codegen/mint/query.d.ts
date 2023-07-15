import { Params, ParamsSDKType } from "./mint";
import { PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params?: Params;
    res?: PageResponse;
}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
    res?: PageResponseSDKType;
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
