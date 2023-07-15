import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequest {
    path: string;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestSDKType {
    path: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponse {
    value: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseSDKType {
    value: string;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequest {
    path: string;
    pagination?: PageRequest;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestSDKType {
    path: string;
    pagination?: PageRequestSDKType;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponse {
    children: string[];
    pagination?: PageResponse;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseSDKType {
    children: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryDataRequest: {
    encode(message: QueryDataRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDataRequest;
    fromPartial(object: Partial<QueryDataRequest>): QueryDataRequest;
};
export declare const QueryDataResponse: {
    encode(message: QueryDataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDataResponse;
    fromPartial(object: Partial<QueryDataResponse>): QueryDataResponse;
};
export declare const QueryChildrenRequest: {
    encode(message: QueryChildrenRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryChildrenRequest;
    fromPartial(object: Partial<QueryChildrenRequest>): QueryChildrenRequest;
};
export declare const QueryChildrenResponse: {
    encode(message: QueryChildrenResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryChildrenResponse;
    fromPartial(object: Partial<QueryChildrenResponse>): QueryChildrenResponse;
};
