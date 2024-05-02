import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Swap, SwapAmino, SwapSDKType } from "./swap";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface QuerySwapsRequest {
    pagination?: PageRequest;
}
export interface QuerySwapsRequestProtoMsg {
    typeUrl: "/sentinel.swap.v1.QuerySwapsRequest";
    value: Uint8Array;
}
export interface QuerySwapsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QuerySwapsRequestAminoMsg {
    type: "/sentinel.swap.v1.QuerySwapsRequest";
    value: QuerySwapsRequestAmino;
}
export interface QuerySwapsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QuerySwapRequest {
    txHash: Uint8Array;
}
export interface QuerySwapRequestProtoMsg {
    typeUrl: "/sentinel.swap.v1.QuerySwapRequest";
    value: Uint8Array;
}
export interface QuerySwapRequestAmino {
    tx_hash?: string;
}
export interface QuerySwapRequestAminoMsg {
    type: "/sentinel.swap.v1.QuerySwapRequest";
    value: QuerySwapRequestAmino;
}
export interface QuerySwapRequestSDKType {
    tx_hash: Uint8Array;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/sentinel.swap.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/sentinel.swap.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QuerySwapsResponse {
    swaps: Swap[];
    pagination?: PageResponse;
}
export interface QuerySwapsResponseProtoMsg {
    typeUrl: "/sentinel.swap.v1.QuerySwapsResponse";
    value: Uint8Array;
}
export interface QuerySwapsResponseAmino {
    swaps?: SwapAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySwapsResponseAminoMsg {
    type: "/sentinel.swap.v1.QuerySwapsResponse";
    value: QuerySwapsResponseAmino;
}
export interface QuerySwapsResponseSDKType {
    swaps: SwapSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySwapResponse {
    swap: Swap;
}
export interface QuerySwapResponseProtoMsg {
    typeUrl: "/sentinel.swap.v1.QuerySwapResponse";
    value: Uint8Array;
}
export interface QuerySwapResponseAmino {
    swap?: SwapAmino;
}
export interface QuerySwapResponseAminoMsg {
    type: "/sentinel.swap.v1.QuerySwapResponse";
    value: QuerySwapResponseAmino;
}
export interface QuerySwapResponseSDKType {
    swap: SwapSDKType;
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/sentinel.swap.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/sentinel.swap.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QuerySwapsRequest: {
    typeUrl: string;
    encode(message: QuerySwapsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapsRequest;
    fromPartial(object: Partial<QuerySwapsRequest>): QuerySwapsRequest;
    fromAmino(object: QuerySwapsRequestAmino): QuerySwapsRequest;
    toAmino(message: QuerySwapsRequest): QuerySwapsRequestAmino;
    fromAminoMsg(object: QuerySwapsRequestAminoMsg): QuerySwapsRequest;
    fromProtoMsg(message: QuerySwapsRequestProtoMsg): QuerySwapsRequest;
    toProto(message: QuerySwapsRequest): Uint8Array;
    toProtoMsg(message: QuerySwapsRequest): QuerySwapsRequestProtoMsg;
};
export declare const QuerySwapRequest: {
    typeUrl: string;
    encode(message: QuerySwapRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapRequest;
    fromPartial(object: Partial<QuerySwapRequest>): QuerySwapRequest;
    fromAmino(object: QuerySwapRequestAmino): QuerySwapRequest;
    toAmino(message: QuerySwapRequest): QuerySwapRequestAmino;
    fromAminoMsg(object: QuerySwapRequestAminoMsg): QuerySwapRequest;
    fromProtoMsg(message: QuerySwapRequestProtoMsg): QuerySwapRequest;
    toProto(message: QuerySwapRequest): Uint8Array;
    toProtoMsg(message: QuerySwapRequest): QuerySwapRequestProtoMsg;
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
export declare const QuerySwapsResponse: {
    typeUrl: string;
    encode(message: QuerySwapsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapsResponse;
    fromPartial(object: Partial<QuerySwapsResponse>): QuerySwapsResponse;
    fromAmino(object: QuerySwapsResponseAmino): QuerySwapsResponse;
    toAmino(message: QuerySwapsResponse): QuerySwapsResponseAmino;
    fromAminoMsg(object: QuerySwapsResponseAminoMsg): QuerySwapsResponse;
    fromProtoMsg(message: QuerySwapsResponseProtoMsg): QuerySwapsResponse;
    toProto(message: QuerySwapsResponse): Uint8Array;
    toProtoMsg(message: QuerySwapsResponse): QuerySwapsResponseProtoMsg;
};
export declare const QuerySwapResponse: {
    typeUrl: string;
    encode(message: QuerySwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapResponse;
    fromPartial(object: Partial<QuerySwapResponse>): QuerySwapResponse;
    fromAmino(object: QuerySwapResponseAmino): QuerySwapResponse;
    toAmino(message: QuerySwapResponse): QuerySwapResponseAmino;
    fromAminoMsg(object: QuerySwapResponseAminoMsg): QuerySwapResponse;
    fromProtoMsg(message: QuerySwapResponseProtoMsg): QuerySwapResponse;
    toProto(message: QuerySwapResponse): Uint8Array;
    toProtoMsg(message: QuerySwapResponse): QuerySwapResponseProtoMsg;
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
