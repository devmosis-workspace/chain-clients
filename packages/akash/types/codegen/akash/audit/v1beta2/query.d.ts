import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderSDKType } from "./audit";
import { BinaryWriter } from "../../../binary";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination: PageResponse;
}
export interface QueryProvidersResponseProtoMsg {
    typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse";
    value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseAmino {
    providers: ProviderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryProvidersResponseAminoMsg {
    type: "/akash.audit.v1beta2.QueryProvidersResponse";
    value: QueryProvidersResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
    providers: ProviderSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    auditor: string;
    owner: string;
}
export interface QueryProviderRequestProtoMsg {
    typeUrl: "/akash.audit.v1beta2.QueryProviderRequest";
    value: Uint8Array;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestAmino {
    auditor: string;
    owner: string;
}
export interface QueryProviderRequestAminoMsg {
    type: "/akash.audit.v1beta2.QueryProviderRequest";
    value: QueryProviderRequestAmino;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
    auditor: string;
    owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
    pagination: PageRequest;
}
export interface QueryAllProvidersAttributesRequestProtoMsg {
    typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest";
    value: Uint8Array;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllProvidersAttributesRequestAminoMsg {
    type: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest";
    value: QueryAllProvidersAttributesRequestAmino;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
    owner: string;
    pagination: PageRequest;
}
export interface QueryProviderAttributesRequestProtoMsg {
    typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest";
    value: Uint8Array;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestAmino {
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryProviderAttributesRequestAminoMsg {
    type: "/akash.audit.v1beta2.QueryProviderAttributesRequest";
    value: QueryProviderAttributesRequestAmino;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestSDKType {
    owner: string;
    pagination: PageRequestSDKType;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
    auditor: string;
    owner: string;
}
export interface QueryProviderAuditorRequestProtoMsg {
    typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest";
    value: Uint8Array;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestAmino {
    auditor: string;
    owner: string;
}
export interface QueryProviderAuditorRequestAminoMsg {
    type: "/akash.audit.v1beta2.QueryProviderAuditorRequest";
    value: QueryProviderAuditorRequestAmino;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestSDKType {
    auditor: string;
    owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
    auditor: string;
    pagination: PageRequest;
}
export interface QueryAuditorAttributesRequestProtoMsg {
    typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest";
    value: Uint8Array;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestAmino {
    auditor: string;
    pagination?: PageRequestAmino;
}
export interface QueryAuditorAttributesRequestAminoMsg {
    type: "/akash.audit.v1beta2.QueryAuditorAttributesRequest";
    value: QueryAuditorAttributesRequestAmino;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestSDKType {
    auditor: string;
    pagination: PageRequestSDKType;
}
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
export declare const QueryAllProvidersAttributesRequest: {
    typeUrl: string;
    encode(message: QueryAllProvidersAttributesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllProvidersAttributesRequest;
    fromPartial(object: Partial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest;
    fromAmino(object: QueryAllProvidersAttributesRequestAmino): QueryAllProvidersAttributesRequest;
    toAmino(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestAmino;
    fromAminoMsg(object: QueryAllProvidersAttributesRequestAminoMsg): QueryAllProvidersAttributesRequest;
    fromProtoMsg(message: QueryAllProvidersAttributesRequestProtoMsg): QueryAllProvidersAttributesRequest;
    toProto(message: QueryAllProvidersAttributesRequest): Uint8Array;
    toProtoMsg(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestProtoMsg;
};
export declare const QueryProviderAttributesRequest: {
    typeUrl: string;
    encode(message: QueryProviderAttributesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderAttributesRequest;
    fromPartial(object: Partial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest;
    fromAmino(object: QueryProviderAttributesRequestAmino): QueryProviderAttributesRequest;
    toAmino(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestAmino;
    fromAminoMsg(object: QueryProviderAttributesRequestAminoMsg): QueryProviderAttributesRequest;
    fromProtoMsg(message: QueryProviderAttributesRequestProtoMsg): QueryProviderAttributesRequest;
    toProto(message: QueryProviderAttributesRequest): Uint8Array;
    toProtoMsg(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestProtoMsg;
};
export declare const QueryProviderAuditorRequest: {
    typeUrl: string;
    encode(message: QueryProviderAuditorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderAuditorRequest;
    fromPartial(object: Partial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest;
    fromAmino(object: QueryProviderAuditorRequestAmino): QueryProviderAuditorRequest;
    toAmino(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestAmino;
    fromAminoMsg(object: QueryProviderAuditorRequestAminoMsg): QueryProviderAuditorRequest;
    fromProtoMsg(message: QueryProviderAuditorRequestProtoMsg): QueryProviderAuditorRequest;
    toProto(message: QueryProviderAuditorRequest): Uint8Array;
    toProtoMsg(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestProtoMsg;
};
export declare const QueryAuditorAttributesRequest: {
    typeUrl: string;
    encode(message: QueryAuditorAttributesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuditorAttributesRequest;
    fromPartial(object: Partial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest;
    fromAmino(object: QueryAuditorAttributesRequestAmino): QueryAuditorAttributesRequest;
    toAmino(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestAmino;
    fromAminoMsg(object: QueryAuditorAttributesRequestAminoMsg): QueryAuditorAttributesRequest;
    fromProtoMsg(message: QueryAuditorAttributesRequestProtoMsg): QueryAuditorAttributesRequest;
    toProto(message: QueryAuditorAttributesRequest): Uint8Array;
    toProtoMsg(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestProtoMsg;
};
