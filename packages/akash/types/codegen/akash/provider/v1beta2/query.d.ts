import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import * as _m0 from "protobufjs/minimal";
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
    pagination?: PageRequest;
}
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequestSDKType {
    pagination?: PageRequestSDKType;
}
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
    owner: string;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
    owner: string;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
    provider?: Provider;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseSDKType {
    provider?: ProviderSDKType;
}
export declare const QueryProvidersRequest: {
    encode(message: QueryProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProvidersRequest;
    fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest;
};
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
export declare const QueryProviderResponse: {
    encode(message: QueryProviderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProviderResponse;
    fromPartial(object: Partial<QueryProviderResponse>): QueryProviderResponse;
};
