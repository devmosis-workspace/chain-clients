import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import * as _m0 from "protobufjs/minimal";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination?: PageResponse;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
    providers: ProviderSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    auditor: string;
    owner: string;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
    auditor: string;
    owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
    pagination?: PageRequest;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
    owner: string;
    pagination?: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestSDKType {
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
    auditor: string;
    owner: string;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestSDKType {
    auditor: string;
    owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
    auditor: string;
    pagination?: PageRequest;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestSDKType {
    auditor: string;
    pagination?: PageRequestSDKType;
}
export declare const QueryProvidersResponse: {
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProvidersResponse;
    fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse;
};
export declare const QueryProviderRequest: {
    encode(message: QueryProviderRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProviderRequest;
    fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest;
};
export declare const QueryAllProvidersAttributesRequest: {
    encode(message: QueryAllProvidersAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllProvidersAttributesRequest;
    fromPartial(object: Partial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest;
};
export declare const QueryProviderAttributesRequest: {
    encode(message: QueryProviderAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProviderAttributesRequest;
    fromPartial(object: Partial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest;
};
export declare const QueryProviderAuditorRequest: {
    encode(message: QueryProviderAuditorRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProviderAuditorRequest;
    fromPartial(object: Partial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest;
};
export declare const QueryAuditorAttributesRequest: {
    encode(message: QueryAuditorAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAuditorAttributesRequest;
    fromPartial(object: Partial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest;
};
