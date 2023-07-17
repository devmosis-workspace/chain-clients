import { Params, ParamsSDKType } from "./controller";
import * as _m0 from "protobufjs/minimal";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequest {
    owner: string;
    connectionId: string;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestSDKType {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponse {
    address: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseSDKType {
    address: string;
}
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
export declare const QueryInterchainAccountRequest: {
    encode(message: QueryInterchainAccountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountRequest;
    fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest;
};
export declare const QueryInterchainAccountResponse: {
    encode(message: QueryInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountResponse;
    fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse;
};
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
