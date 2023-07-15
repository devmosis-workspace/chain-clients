import { Params, ParamsSDKType, Egress, EgressSDKType } from "./swingset";
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
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequest {
    peer: Uint8Array;
}
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequestSDKType {
    peer: Uint8Array;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponse {
    egress?: Egress;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponseSDKType {
    egress?: EgressSDKType;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequest {
    peer: Uint8Array;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequestSDKType {
    peer: Uint8Array;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponse {
    value: string;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponseSDKType {
    value: string;
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
export declare const QueryEgressRequest: {
    encode(message: QueryEgressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEgressRequest;
    fromPartial(object: Partial<QueryEgressRequest>): QueryEgressRequest;
};
export declare const QueryEgressResponse: {
    encode(message: QueryEgressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEgressResponse;
    fromPartial(object: Partial<QueryEgressResponse>): QueryEgressResponse;
};
export declare const QueryMailboxRequest: {
    encode(message: QueryMailboxRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMailboxRequest;
    fromPartial(object: Partial<QueryMailboxRequest>): QueryMailboxRequest;
};
export declare const QueryMailboxResponse: {
    encode(message: QueryMailboxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMailboxResponse;
    fromPartial(object: Partial<QueryMailboxResponse>): QueryMailboxResponse;
};
