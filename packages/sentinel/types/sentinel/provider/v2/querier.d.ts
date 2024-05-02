import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status } from "../../types/v1/status";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface QueryProvidersRequest {
    pagination?: PageRequest;
    status: Status;
}
export interface QueryProvidersRequestProtoMsg {
    typeUrl: "/sentinel.provider.v2.QueryProvidersRequest";
    value: Uint8Array;
}
export interface QueryProvidersRequestAmino {
    pagination?: PageRequestAmino;
    status?: Status;
}
export interface QueryProvidersRequestAminoMsg {
    type: "/sentinel.provider.v2.QueryProvidersRequest";
    value: QueryProvidersRequestAmino;
}
export interface QueryProvidersRequestSDKType {
    pagination?: PageRequestSDKType;
    status: Status;
}
export interface QueryProviderRequest {
    address: string;
}
export interface QueryProviderRequestProtoMsg {
    typeUrl: "/sentinel.provider.v2.QueryProviderRequest";
    value: Uint8Array;
}
export interface QueryProviderRequestAmino {
    address?: string;
}
export interface QueryProviderRequestAminoMsg {
    type: "/sentinel.provider.v2.QueryProviderRequest";
    value: QueryProviderRequestAmino;
}
export interface QueryProviderRequestSDKType {
    address: string;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/sentinel.provider.v2.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/sentinel.provider.v2.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination?: PageResponse;
}
export interface QueryProvidersResponseProtoMsg {
    typeUrl: "/sentinel.provider.v2.QueryProvidersResponse";
    value: Uint8Array;
}
export interface QueryProvidersResponseAmino {
    providers?: ProviderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryProvidersResponseAminoMsg {
    type: "/sentinel.provider.v2.QueryProvidersResponse";
    value: QueryProvidersResponseAmino;
}
export interface QueryProvidersResponseSDKType {
    providers: ProviderSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryProviderResponse {
    provider: Provider;
}
export interface QueryProviderResponseProtoMsg {
    typeUrl: "/sentinel.provider.v2.QueryProviderResponse";
    value: Uint8Array;
}
export interface QueryProviderResponseAmino {
    provider?: ProviderAmino;
}
export interface QueryProviderResponseAminoMsg {
    type: "/sentinel.provider.v2.QueryProviderResponse";
    value: QueryProviderResponseAmino;
}
export interface QueryProviderResponseSDKType {
    provider: ProviderSDKType;
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/sentinel.provider.v2.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/sentinel.provider.v2.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
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
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
