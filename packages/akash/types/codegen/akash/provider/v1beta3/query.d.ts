import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryWriter } from "../../../binary";
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
    pagination?: PageRequest;
}
export interface QueryProvidersRequestProtoMsg {
    typeUrl: "/akash.provider.v1beta3.QueryProvidersRequest";
    value: Uint8Array;
}
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryProvidersRequestAminoMsg {
    type: "/akash.provider.v1beta3.QueryProvidersRequest";
    value: QueryProvidersRequestAmino;
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
export interface QueryProvidersResponseProtoMsg {
    typeUrl: "/akash.provider.v1beta3.QueryProvidersResponse";
    value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseAmino {
    providers?: ProviderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryProvidersResponseAminoMsg {
    type: "/akash.provider.v1beta3.QueryProvidersResponse";
    value: QueryProvidersResponseAmino;
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
export interface QueryProviderRequestProtoMsg {
    typeUrl: "/akash.provider.v1beta3.QueryProviderRequest";
    value: Uint8Array;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestAmino {
    owner?: string;
}
export interface QueryProviderRequestAminoMsg {
    type: "/akash.provider.v1beta3.QueryProviderRequest";
    value: QueryProviderRequestAmino;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
    owner: string;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
    provider: Provider;
}
export interface QueryProviderResponseProtoMsg {
    typeUrl: "/akash.provider.v1beta3.QueryProviderResponse";
    value: Uint8Array;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseAmino {
    provider?: ProviderAmino;
}
export interface QueryProviderResponseAminoMsg {
    type: "/akash.provider.v1beta3.QueryProviderResponse";
    value: QueryProviderResponseAmino;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseSDKType {
    provider: ProviderSDKType;
}
export declare const QueryProvidersRequest: {
    typeUrl: string;
    encode(message: QueryProvidersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProvidersRequest;
    fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest;
    fromAmino(object: QueryProvidersRequestAmino): QueryProvidersRequest;
    toAmino(message: QueryProvidersRequest): QueryProvidersRequestAmino;
    fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest;
    fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest;
    toProto(message: QueryProvidersRequest): Uint8Array;
    toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg;
};
export declare const QueryProvidersResponse: {
    typeUrl: string;
    encode(message: QueryProvidersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProvidersResponse;
    fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse;
    fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse;
    toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino;
    fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse;
    fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse;
    toProto(message: QueryProvidersResponse): Uint8Array;
    toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg;
};
export declare const QueryProviderRequest: {
    typeUrl: string;
    encode(message: QueryProviderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderRequest;
    fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest;
    fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest;
    toAmino(message: QueryProviderRequest): QueryProviderRequestAmino;
    fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest;
    fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest;
    toProto(message: QueryProviderRequest): Uint8Array;
    toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg;
};
export declare const QueryProviderResponse: {
    typeUrl: string;
    encode(message: QueryProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderResponse;
    fromPartial(object: Partial<QueryProviderResponse>): QueryProviderResponse;
    fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse;
    toAmino(message: QueryProviderResponse): QueryProviderResponseAmino;
    fromAminoMsg(object: QueryProviderResponseAminoMsg): QueryProviderResponse;
    fromProtoMsg(message: QueryProviderResponseProtoMsg): QueryProviderResponse;
    toProto(message: QueryProviderResponse): Uint8Array;
    toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg;
};
