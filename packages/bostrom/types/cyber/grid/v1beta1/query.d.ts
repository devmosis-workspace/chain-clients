import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, Route, RouteAmino, RouteSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cyber.grid.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cyber.grid.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QuerySourceRequest {
    source: string;
}
export interface QuerySourceRequestProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QuerySourceRequest";
    value: Uint8Array;
}
export interface QuerySourceRequestAmino {
    source?: string;
}
export interface QuerySourceRequestAminoMsg {
    type: "/cyber.grid.v1beta1.QuerySourceRequest";
    value: QuerySourceRequestAmino;
}
export interface QuerySourceRequestSDKType {
    source: string;
}
export interface QueryDestinationRequest {
    destination: string;
}
export interface QueryDestinationRequestProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryDestinationRequest";
    value: Uint8Array;
}
export interface QueryDestinationRequestAmino {
    destination?: string;
}
export interface QueryDestinationRequestAminoMsg {
    type: "/cyber.grid.v1beta1.QueryDestinationRequest";
    value: QueryDestinationRequestAmino;
}
export interface QueryDestinationRequestSDKType {
    destination: string;
}
export interface QueryRoutedEnergyResponse {
    value: Coin[];
}
export interface QueryRoutedEnergyResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryRoutedEnergyResponse";
    value: Uint8Array;
}
export interface QueryRoutedEnergyResponseAmino {
    value?: CoinAmino[];
}
export interface QueryRoutedEnergyResponseAminoMsg {
    type: "/cyber.grid.v1beta1.QueryRoutedEnergyResponse";
    value: QueryRoutedEnergyResponseAmino;
}
export interface QueryRoutedEnergyResponseSDKType {
    value: CoinSDKType[];
}
export interface QueryRouteRequest {
    source: string;
    destination: string;
}
export interface QueryRouteRequestProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryRouteRequest";
    value: Uint8Array;
}
export interface QueryRouteRequestAmino {
    source?: string;
    destination?: string;
}
export interface QueryRouteRequestAminoMsg {
    type: "/cyber.grid.v1beta1.QueryRouteRequest";
    value: QueryRouteRequestAmino;
}
export interface QueryRouteRequestSDKType {
    source: string;
    destination: string;
}
export interface QueryRouteResponse {
    route: Route;
}
export interface QueryRouteResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryRouteResponse";
    value: Uint8Array;
}
export interface QueryRouteResponseAmino {
    route?: RouteAmino;
}
export interface QueryRouteResponseAminoMsg {
    type: "/cyber.grid.v1beta1.QueryRouteResponse";
    value: QueryRouteResponseAmino;
}
export interface QueryRouteResponseSDKType {
    route: RouteSDKType;
}
export interface QueryRoutesRequest {
    pagination?: PageRequest;
}
export interface QueryRoutesRequestProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryRoutesRequest";
    value: Uint8Array;
}
export interface QueryRoutesRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryRoutesRequestAminoMsg {
    type: "/cyber.grid.v1beta1.QueryRoutesRequest";
    value: QueryRoutesRequestAmino;
}
export interface QueryRoutesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryRoutesResponse {
    routes: Route[];
    pagination?: PageResponse;
}
export interface QueryRoutesResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.QueryRoutesResponse";
    value: Uint8Array;
}
export interface QueryRoutesResponseAmino {
    routes?: RouteAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryRoutesResponseAminoMsg {
    type: "/cyber.grid.v1beta1.QueryRoutesResponse";
    value: QueryRoutesResponseAmino;
}
export interface QueryRoutesResponseSDKType {
    routes: RouteSDKType[];
    pagination?: PageResponseSDKType;
}
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
export declare const QuerySourceRequest: {
    typeUrl: string;
    encode(message: QuerySourceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySourceRequest;
    fromPartial(object: Partial<QuerySourceRequest>): QuerySourceRequest;
    fromAmino(object: QuerySourceRequestAmino): QuerySourceRequest;
    toAmino(message: QuerySourceRequest): QuerySourceRequestAmino;
    fromAminoMsg(object: QuerySourceRequestAminoMsg): QuerySourceRequest;
    fromProtoMsg(message: QuerySourceRequestProtoMsg): QuerySourceRequest;
    toProto(message: QuerySourceRequest): Uint8Array;
    toProtoMsg(message: QuerySourceRequest): QuerySourceRequestProtoMsg;
};
export declare const QueryDestinationRequest: {
    typeUrl: string;
    encode(message: QueryDestinationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDestinationRequest;
    fromPartial(object: Partial<QueryDestinationRequest>): QueryDestinationRequest;
    fromAmino(object: QueryDestinationRequestAmino): QueryDestinationRequest;
    toAmino(message: QueryDestinationRequest): QueryDestinationRequestAmino;
    fromAminoMsg(object: QueryDestinationRequestAminoMsg): QueryDestinationRequest;
    fromProtoMsg(message: QueryDestinationRequestProtoMsg): QueryDestinationRequest;
    toProto(message: QueryDestinationRequest): Uint8Array;
    toProtoMsg(message: QueryDestinationRequest): QueryDestinationRequestProtoMsg;
};
export declare const QueryRoutedEnergyResponse: {
    typeUrl: string;
    encode(message: QueryRoutedEnergyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoutedEnergyResponse;
    fromPartial(object: Partial<QueryRoutedEnergyResponse>): QueryRoutedEnergyResponse;
    fromAmino(object: QueryRoutedEnergyResponseAmino): QueryRoutedEnergyResponse;
    toAmino(message: QueryRoutedEnergyResponse): QueryRoutedEnergyResponseAmino;
    fromAminoMsg(object: QueryRoutedEnergyResponseAminoMsg): QueryRoutedEnergyResponse;
    fromProtoMsg(message: QueryRoutedEnergyResponseProtoMsg): QueryRoutedEnergyResponse;
    toProto(message: QueryRoutedEnergyResponse): Uint8Array;
    toProtoMsg(message: QueryRoutedEnergyResponse): QueryRoutedEnergyResponseProtoMsg;
};
export declare const QueryRouteRequest: {
    typeUrl: string;
    encode(message: QueryRouteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRouteRequest;
    fromPartial(object: Partial<QueryRouteRequest>): QueryRouteRequest;
    fromAmino(object: QueryRouteRequestAmino): QueryRouteRequest;
    toAmino(message: QueryRouteRequest): QueryRouteRequestAmino;
    fromAminoMsg(object: QueryRouteRequestAminoMsg): QueryRouteRequest;
    fromProtoMsg(message: QueryRouteRequestProtoMsg): QueryRouteRequest;
    toProto(message: QueryRouteRequest): Uint8Array;
    toProtoMsg(message: QueryRouteRequest): QueryRouteRequestProtoMsg;
};
export declare const QueryRouteResponse: {
    typeUrl: string;
    encode(message: QueryRouteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRouteResponse;
    fromPartial(object: Partial<QueryRouteResponse>): QueryRouteResponse;
    fromAmino(object: QueryRouteResponseAmino): QueryRouteResponse;
    toAmino(message: QueryRouteResponse): QueryRouteResponseAmino;
    fromAminoMsg(object: QueryRouteResponseAminoMsg): QueryRouteResponse;
    fromProtoMsg(message: QueryRouteResponseProtoMsg): QueryRouteResponse;
    toProto(message: QueryRouteResponse): Uint8Array;
    toProtoMsg(message: QueryRouteResponse): QueryRouteResponseProtoMsg;
};
export declare const QueryRoutesRequest: {
    typeUrl: string;
    encode(message: QueryRoutesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoutesRequest;
    fromPartial(object: Partial<QueryRoutesRequest>): QueryRoutesRequest;
    fromAmino(object: QueryRoutesRequestAmino): QueryRoutesRequest;
    toAmino(message: QueryRoutesRequest): QueryRoutesRequestAmino;
    fromAminoMsg(object: QueryRoutesRequestAminoMsg): QueryRoutesRequest;
    fromProtoMsg(message: QueryRoutesRequestProtoMsg): QueryRoutesRequest;
    toProto(message: QueryRoutesRequest): Uint8Array;
    toProtoMsg(message: QueryRoutesRequest): QueryRoutesRequestProtoMsg;
};
export declare const QueryRoutesResponse: {
    typeUrl: string;
    encode(message: QueryRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoutesResponse;
    fromPartial(object: Partial<QueryRoutesResponse>): QueryRoutesResponse;
    fromAmino(object: QueryRoutesResponseAmino): QueryRoutesResponse;
    toAmino(message: QueryRoutesResponse): QueryRoutesResponseAmino;
    fromAminoMsg(object: QueryRoutesResponseAminoMsg): QueryRoutesResponse;
    fromProtoMsg(message: QueryRoutesResponseProtoMsg): QueryRoutesResponse;
    toProto(message: QueryRoutesResponse): Uint8Array;
    toProtoMsg(message: QueryRoutesResponse): QueryRoutesResponseProtoMsg;
};
