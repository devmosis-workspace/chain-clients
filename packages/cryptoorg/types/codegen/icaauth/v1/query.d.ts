import { Params, ParamsSDKType } from "./params";
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
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequest {
    connectionId: string;
    owner: string;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequestSDKType {
    connectionId: string;
    owner: string;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponse {
    interchainAccountAddress: string;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponseSDKType {
    interchainAccountAddress: string;
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
export declare const QueryInterchainAccountAddressRequest: {
    encode(message: QueryInterchainAccountAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountAddressRequest>): QueryInterchainAccountAddressRequest;
};
export declare const QueryInterchainAccountAddressResponse: {
    encode(message: QueryInterchainAccountAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountAddressResponse>): QueryInterchainAccountAddressResponse;
};
