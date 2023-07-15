import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Super, SuperSDKType } from "./guardian";
import * as _m0 from "protobufjs/minimal";
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
    /** pagination defines an optional pagination for the request */
    pagination?: PageRequest;
}
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
    supers: Super[];
    pagination?: PageResponse;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponseSDKType {
    supers: SuperSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QuerySupersRequest: {
    encode(message: QuerySupersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupersRequest;
    fromPartial(object: Partial<QuerySupersRequest>): QuerySupersRequest;
};
export declare const QuerySupersResponse: {
    encode(message: QuerySupersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupersResponse;
    fromPartial(object: Partial<QuerySupersResponse>): QuerySupersResponse;
};
