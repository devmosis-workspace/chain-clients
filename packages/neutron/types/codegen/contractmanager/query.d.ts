import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Failure, FailureSDKType } from "./genesis";
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
export interface QueryFailuresRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryFailuresRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryFailuresResponse {
    failures: Failure[];
    pagination?: PageResponse;
}
export interface QueryFailuresResponseSDKType {
    failures: FailureSDKType[];
    pagination?: PageResponseSDKType;
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
export declare const QueryFailuresRequest: {
    encode(message: QueryFailuresRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFailuresRequest;
    fromPartial(object: Partial<QueryFailuresRequest>): QueryFailuresRequest;
};
export declare const QueryFailuresResponse: {
    encode(message: QueryFailuresResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFailuresResponse;
    fromPartial(object: Partial<QueryFailuresResponse>): QueryFailuresResponse;
};
