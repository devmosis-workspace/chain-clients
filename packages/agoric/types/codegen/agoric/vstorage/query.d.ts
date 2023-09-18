import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../binary";
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequest {
    path: string;
}
export interface QueryDataRequestProtoMsg {
    typeUrl: "/agoric.vstorage.QueryDataRequest";
    value: Uint8Array;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestAmino {
    path: string;
}
export interface QueryDataRequestAminoMsg {
    type: "/agoric.vstorage.QueryDataRequest";
    value: QueryDataRequestAmino;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestSDKType {
    path: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponse {
    value: string;
}
export interface QueryDataResponseProtoMsg {
    typeUrl: "/agoric.vstorage.QueryDataResponse";
    value: Uint8Array;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseAmino {
    value: string;
}
export interface QueryDataResponseAminoMsg {
    type: "/agoric.vstorage.QueryDataResponse";
    value: QueryDataResponseAmino;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseSDKType {
    value: string;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequest {
    path: string;
    pagination: PageRequest;
}
export interface QueryChildrenRequestProtoMsg {
    typeUrl: "/agoric.vstorage.QueryChildrenRequest";
    value: Uint8Array;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestAmino {
    path: string;
    pagination?: PageRequestAmino;
}
export interface QueryChildrenRequestAminoMsg {
    type: "/agoric.vstorage.QueryChildrenRequest";
    value: QueryChildrenRequestAmino;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestSDKType {
    path: string;
    pagination: PageRequestSDKType;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponse {
    children: string[];
    pagination: PageResponse;
}
export interface QueryChildrenResponseProtoMsg {
    typeUrl: "/agoric.vstorage.QueryChildrenResponse";
    value: Uint8Array;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseAmino {
    children: string[];
    pagination?: PageResponseAmino;
}
export interface QueryChildrenResponseAminoMsg {
    type: "/agoric.vstorage.QueryChildrenResponse";
    value: QueryChildrenResponseAmino;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseSDKType {
    children: string[];
    pagination: PageResponseSDKType;
}
export declare const QueryDataRequest: {
    typeUrl: string;
    encode(message: QueryDataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDataRequest;
    fromPartial(object: Partial<QueryDataRequest>): QueryDataRequest;
    fromAmino(object: QueryDataRequestAmino): QueryDataRequest;
    toAmino(message: QueryDataRequest): QueryDataRequestAmino;
    fromAminoMsg(object: QueryDataRequestAminoMsg): QueryDataRequest;
    fromProtoMsg(message: QueryDataRequestProtoMsg): QueryDataRequest;
    toProto(message: QueryDataRequest): Uint8Array;
    toProtoMsg(message: QueryDataRequest): QueryDataRequestProtoMsg;
};
export declare const QueryDataResponse: {
    typeUrl: string;
    encode(message: QueryDataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDataResponse;
    fromPartial(object: Partial<QueryDataResponse>): QueryDataResponse;
    fromAmino(object: QueryDataResponseAmino): QueryDataResponse;
    toAmino(message: QueryDataResponse): QueryDataResponseAmino;
    fromAminoMsg(object: QueryDataResponseAminoMsg): QueryDataResponse;
    fromProtoMsg(message: QueryDataResponseProtoMsg): QueryDataResponse;
    toProto(message: QueryDataResponse): Uint8Array;
    toProtoMsg(message: QueryDataResponse): QueryDataResponseProtoMsg;
};
export declare const QueryChildrenRequest: {
    typeUrl: string;
    encode(message: QueryChildrenRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryChildrenRequest;
    fromPartial(object: Partial<QueryChildrenRequest>): QueryChildrenRequest;
    fromAmino(object: QueryChildrenRequestAmino): QueryChildrenRequest;
    toAmino(message: QueryChildrenRequest): QueryChildrenRequestAmino;
    fromAminoMsg(object: QueryChildrenRequestAminoMsg): QueryChildrenRequest;
    fromProtoMsg(message: QueryChildrenRequestProtoMsg): QueryChildrenRequest;
    toProto(message: QueryChildrenRequest): Uint8Array;
    toProtoMsg(message: QueryChildrenRequest): QueryChildrenRequestProtoMsg;
};
export declare const QueryChildrenResponse: {
    typeUrl: string;
    encode(message: QueryChildrenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryChildrenResponse;
    fromPartial(object: Partial<QueryChildrenResponse>): QueryChildrenResponse;
    fromAmino(object: QueryChildrenResponseAmino): QueryChildrenResponse;
    toAmino(message: QueryChildrenResponse): QueryChildrenResponseAmino;
    fromAminoMsg(object: QueryChildrenResponseAminoMsg): QueryChildrenResponse;
    fromProtoMsg(message: QueryChildrenResponseProtoMsg): QueryChildrenResponse;
    toProto(message: QueryChildrenResponse): Uint8Array;
    toProtoMsg(message: QueryChildrenResponse): QueryChildrenResponseProtoMsg;
};
