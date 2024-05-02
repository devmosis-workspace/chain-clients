import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Session, SessionAmino, SessionSDKType } from "./session";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface QuerySessionsRequest {
    pagination?: PageRequest;
}
export interface QuerySessionsRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsRequest";
    value: Uint8Array;
}
export interface QuerySessionsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QuerySessionsRequestAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsRequest";
    value: QuerySessionsRequestAmino;
}
export interface QuerySessionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QuerySessionsForAccountRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QuerySessionsForAccountRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForAccountRequest";
    value: Uint8Array;
}
export interface QuerySessionsForAccountRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySessionsForAccountRequestAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForAccountRequest";
    value: QuerySessionsForAccountRequestAmino;
}
export interface QuerySessionsForAccountRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySessionsForNodeRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QuerySessionsForNodeRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForNodeRequest";
    value: Uint8Array;
}
export interface QuerySessionsForNodeRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySessionsForNodeRequestAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForNodeRequest";
    value: QuerySessionsForNodeRequestAmino;
}
export interface QuerySessionsForNodeRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySessionsForSubscriptionRequest {
    id: bigint;
    pagination?: PageRequest;
}
export interface QuerySessionsForSubscriptionRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionRequest";
    value: Uint8Array;
}
export interface QuerySessionsForSubscriptionRequestAmino {
    id?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySessionsForSubscriptionRequestAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForSubscriptionRequest";
    value: QuerySessionsForSubscriptionRequestAmino;
}
export interface QuerySessionsForSubscriptionRequestSDKType {
    id: bigint;
    pagination?: PageRequestSDKType;
}
export interface QuerySessionsForAllocationRequest {
    id: bigint;
    address: string;
    pagination?: PageRequest;
}
export interface QuerySessionsForAllocationRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationRequest";
    value: Uint8Array;
}
export interface QuerySessionsForAllocationRequestAmino {
    id?: string;
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySessionsForAllocationRequestAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForAllocationRequest";
    value: QuerySessionsForAllocationRequestAmino;
}
export interface QuerySessionsForAllocationRequestSDKType {
    id: bigint;
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySessionRequest {
    id: bigint;
}
export interface QuerySessionRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionRequest";
    value: Uint8Array;
}
export interface QuerySessionRequestAmino {
    id?: string;
}
export interface QuerySessionRequestAminoMsg {
    type: "/sentinel.session.v2.QuerySessionRequest";
    value: QuerySessionRequestAmino;
}
export interface QuerySessionRequestSDKType {
    id: bigint;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/sentinel.session.v2.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QuerySessionsResponse {
    sessions: Session[];
    pagination?: PageResponse;
}
export interface QuerySessionsResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsResponse";
    value: Uint8Array;
}
export interface QuerySessionsResponseAmino {
    sessions?: SessionAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySessionsResponseAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsResponse";
    value: QuerySessionsResponseAmino;
}
export interface QuerySessionsResponseSDKType {
    sessions: SessionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySessionsForAccountResponse {
    sessions: Session[];
    pagination?: PageResponse;
}
export interface QuerySessionsForAccountResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForAccountResponse";
    value: Uint8Array;
}
export interface QuerySessionsForAccountResponseAmino {
    sessions?: SessionAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySessionsForAccountResponseAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForAccountResponse";
    value: QuerySessionsForAccountResponseAmino;
}
export interface QuerySessionsForAccountResponseSDKType {
    sessions: SessionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySessionsForNodeResponse {
    sessions: Session[];
    pagination?: PageResponse;
}
export interface QuerySessionsForNodeResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForNodeResponse";
    value: Uint8Array;
}
export interface QuerySessionsForNodeResponseAmino {
    sessions?: SessionAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySessionsForNodeResponseAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForNodeResponse";
    value: QuerySessionsForNodeResponseAmino;
}
export interface QuerySessionsForNodeResponseSDKType {
    sessions: SessionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySessionsForSubscriptionResponse {
    sessions: Session[];
    pagination?: PageResponse;
}
export interface QuerySessionsForSubscriptionResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionResponse";
    value: Uint8Array;
}
export interface QuerySessionsForSubscriptionResponseAmino {
    sessions?: SessionAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySessionsForSubscriptionResponseAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForSubscriptionResponse";
    value: QuerySessionsForSubscriptionResponseAmino;
}
export interface QuerySessionsForSubscriptionResponseSDKType {
    sessions: SessionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySessionsForAllocationResponse {
    sessions: Session[];
    pagination?: PageResponse;
}
export interface QuerySessionsForAllocationResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationResponse";
    value: Uint8Array;
}
export interface QuerySessionsForAllocationResponseAmino {
    sessions?: SessionAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySessionsForAllocationResponseAminoMsg {
    type: "/sentinel.session.v2.QuerySessionsForAllocationResponse";
    value: QuerySessionsForAllocationResponseAmino;
}
export interface QuerySessionsForAllocationResponseSDKType {
    sessions: SessionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySessionResponse {
    session: Session;
}
export interface QuerySessionResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QuerySessionResponse";
    value: Uint8Array;
}
export interface QuerySessionResponseAmino {
    session?: SessionAmino;
}
export interface QuerySessionResponseAminoMsg {
    type: "/sentinel.session.v2.QuerySessionResponse";
    value: QuerySessionResponseAmino;
}
export interface QuerySessionResponseSDKType {
    session: SessionSDKType;
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/sentinel.session.v2.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QuerySessionsRequest: {
    typeUrl: string;
    encode(message: QuerySessionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsRequest;
    fromPartial(object: Partial<QuerySessionsRequest>): QuerySessionsRequest;
    fromAmino(object: QuerySessionsRequestAmino): QuerySessionsRequest;
    toAmino(message: QuerySessionsRequest): QuerySessionsRequestAmino;
    fromAminoMsg(object: QuerySessionsRequestAminoMsg): QuerySessionsRequest;
    fromProtoMsg(message: QuerySessionsRequestProtoMsg): QuerySessionsRequest;
    toProto(message: QuerySessionsRequest): Uint8Array;
    toProtoMsg(message: QuerySessionsRequest): QuerySessionsRequestProtoMsg;
};
export declare const QuerySessionsForAccountRequest: {
    typeUrl: string;
    encode(message: QuerySessionsForAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForAccountRequest;
    fromPartial(object: Partial<QuerySessionsForAccountRequest>): QuerySessionsForAccountRequest;
    fromAmino(object: QuerySessionsForAccountRequestAmino): QuerySessionsForAccountRequest;
    toAmino(message: QuerySessionsForAccountRequest): QuerySessionsForAccountRequestAmino;
    fromAminoMsg(object: QuerySessionsForAccountRequestAminoMsg): QuerySessionsForAccountRequest;
    fromProtoMsg(message: QuerySessionsForAccountRequestProtoMsg): QuerySessionsForAccountRequest;
    toProto(message: QuerySessionsForAccountRequest): Uint8Array;
    toProtoMsg(message: QuerySessionsForAccountRequest): QuerySessionsForAccountRequestProtoMsg;
};
export declare const QuerySessionsForNodeRequest: {
    typeUrl: string;
    encode(message: QuerySessionsForNodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForNodeRequest;
    fromPartial(object: Partial<QuerySessionsForNodeRequest>): QuerySessionsForNodeRequest;
    fromAmino(object: QuerySessionsForNodeRequestAmino): QuerySessionsForNodeRequest;
    toAmino(message: QuerySessionsForNodeRequest): QuerySessionsForNodeRequestAmino;
    fromAminoMsg(object: QuerySessionsForNodeRequestAminoMsg): QuerySessionsForNodeRequest;
    fromProtoMsg(message: QuerySessionsForNodeRequestProtoMsg): QuerySessionsForNodeRequest;
    toProto(message: QuerySessionsForNodeRequest): Uint8Array;
    toProtoMsg(message: QuerySessionsForNodeRequest): QuerySessionsForNodeRequestProtoMsg;
};
export declare const QuerySessionsForSubscriptionRequest: {
    typeUrl: string;
    encode(message: QuerySessionsForSubscriptionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForSubscriptionRequest;
    fromPartial(object: Partial<QuerySessionsForSubscriptionRequest>): QuerySessionsForSubscriptionRequest;
    fromAmino(object: QuerySessionsForSubscriptionRequestAmino): QuerySessionsForSubscriptionRequest;
    toAmino(message: QuerySessionsForSubscriptionRequest): QuerySessionsForSubscriptionRequestAmino;
    fromAminoMsg(object: QuerySessionsForSubscriptionRequestAminoMsg): QuerySessionsForSubscriptionRequest;
    fromProtoMsg(message: QuerySessionsForSubscriptionRequestProtoMsg): QuerySessionsForSubscriptionRequest;
    toProto(message: QuerySessionsForSubscriptionRequest): Uint8Array;
    toProtoMsg(message: QuerySessionsForSubscriptionRequest): QuerySessionsForSubscriptionRequestProtoMsg;
};
export declare const QuerySessionsForAllocationRequest: {
    typeUrl: string;
    encode(message: QuerySessionsForAllocationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForAllocationRequest;
    fromPartial(object: Partial<QuerySessionsForAllocationRequest>): QuerySessionsForAllocationRequest;
    fromAmino(object: QuerySessionsForAllocationRequestAmino): QuerySessionsForAllocationRequest;
    toAmino(message: QuerySessionsForAllocationRequest): QuerySessionsForAllocationRequestAmino;
    fromAminoMsg(object: QuerySessionsForAllocationRequestAminoMsg): QuerySessionsForAllocationRequest;
    fromProtoMsg(message: QuerySessionsForAllocationRequestProtoMsg): QuerySessionsForAllocationRequest;
    toProto(message: QuerySessionsForAllocationRequest): Uint8Array;
    toProtoMsg(message: QuerySessionsForAllocationRequest): QuerySessionsForAllocationRequestProtoMsg;
};
export declare const QuerySessionRequest: {
    typeUrl: string;
    encode(message: QuerySessionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionRequest;
    fromPartial(object: Partial<QuerySessionRequest>): QuerySessionRequest;
    fromAmino(object: QuerySessionRequestAmino): QuerySessionRequest;
    toAmino(message: QuerySessionRequest): QuerySessionRequestAmino;
    fromAminoMsg(object: QuerySessionRequestAminoMsg): QuerySessionRequest;
    fromProtoMsg(message: QuerySessionRequestProtoMsg): QuerySessionRequest;
    toProto(message: QuerySessionRequest): Uint8Array;
    toProtoMsg(message: QuerySessionRequest): QuerySessionRequestProtoMsg;
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
export declare const QuerySessionsResponse: {
    typeUrl: string;
    encode(message: QuerySessionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsResponse;
    fromPartial(object: Partial<QuerySessionsResponse>): QuerySessionsResponse;
    fromAmino(object: QuerySessionsResponseAmino): QuerySessionsResponse;
    toAmino(message: QuerySessionsResponse): QuerySessionsResponseAmino;
    fromAminoMsg(object: QuerySessionsResponseAminoMsg): QuerySessionsResponse;
    fromProtoMsg(message: QuerySessionsResponseProtoMsg): QuerySessionsResponse;
    toProto(message: QuerySessionsResponse): Uint8Array;
    toProtoMsg(message: QuerySessionsResponse): QuerySessionsResponseProtoMsg;
};
export declare const QuerySessionsForAccountResponse: {
    typeUrl: string;
    encode(message: QuerySessionsForAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForAccountResponse;
    fromPartial(object: Partial<QuerySessionsForAccountResponse>): QuerySessionsForAccountResponse;
    fromAmino(object: QuerySessionsForAccountResponseAmino): QuerySessionsForAccountResponse;
    toAmino(message: QuerySessionsForAccountResponse): QuerySessionsForAccountResponseAmino;
    fromAminoMsg(object: QuerySessionsForAccountResponseAminoMsg): QuerySessionsForAccountResponse;
    fromProtoMsg(message: QuerySessionsForAccountResponseProtoMsg): QuerySessionsForAccountResponse;
    toProto(message: QuerySessionsForAccountResponse): Uint8Array;
    toProtoMsg(message: QuerySessionsForAccountResponse): QuerySessionsForAccountResponseProtoMsg;
};
export declare const QuerySessionsForNodeResponse: {
    typeUrl: string;
    encode(message: QuerySessionsForNodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForNodeResponse;
    fromPartial(object: Partial<QuerySessionsForNodeResponse>): QuerySessionsForNodeResponse;
    fromAmino(object: QuerySessionsForNodeResponseAmino): QuerySessionsForNodeResponse;
    toAmino(message: QuerySessionsForNodeResponse): QuerySessionsForNodeResponseAmino;
    fromAminoMsg(object: QuerySessionsForNodeResponseAminoMsg): QuerySessionsForNodeResponse;
    fromProtoMsg(message: QuerySessionsForNodeResponseProtoMsg): QuerySessionsForNodeResponse;
    toProto(message: QuerySessionsForNodeResponse): Uint8Array;
    toProtoMsg(message: QuerySessionsForNodeResponse): QuerySessionsForNodeResponseProtoMsg;
};
export declare const QuerySessionsForSubscriptionResponse: {
    typeUrl: string;
    encode(message: QuerySessionsForSubscriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForSubscriptionResponse;
    fromPartial(object: Partial<QuerySessionsForSubscriptionResponse>): QuerySessionsForSubscriptionResponse;
    fromAmino(object: QuerySessionsForSubscriptionResponseAmino): QuerySessionsForSubscriptionResponse;
    toAmino(message: QuerySessionsForSubscriptionResponse): QuerySessionsForSubscriptionResponseAmino;
    fromAminoMsg(object: QuerySessionsForSubscriptionResponseAminoMsg): QuerySessionsForSubscriptionResponse;
    fromProtoMsg(message: QuerySessionsForSubscriptionResponseProtoMsg): QuerySessionsForSubscriptionResponse;
    toProto(message: QuerySessionsForSubscriptionResponse): Uint8Array;
    toProtoMsg(message: QuerySessionsForSubscriptionResponse): QuerySessionsForSubscriptionResponseProtoMsg;
};
export declare const QuerySessionsForAllocationResponse: {
    typeUrl: string;
    encode(message: QuerySessionsForAllocationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionsForAllocationResponse;
    fromPartial(object: Partial<QuerySessionsForAllocationResponse>): QuerySessionsForAllocationResponse;
    fromAmino(object: QuerySessionsForAllocationResponseAmino): QuerySessionsForAllocationResponse;
    toAmino(message: QuerySessionsForAllocationResponse): QuerySessionsForAllocationResponseAmino;
    fromAminoMsg(object: QuerySessionsForAllocationResponseAminoMsg): QuerySessionsForAllocationResponse;
    fromProtoMsg(message: QuerySessionsForAllocationResponseProtoMsg): QuerySessionsForAllocationResponse;
    toProto(message: QuerySessionsForAllocationResponse): Uint8Array;
    toProtoMsg(message: QuerySessionsForAllocationResponse): QuerySessionsForAllocationResponseProtoMsg;
};
export declare const QuerySessionResponse: {
    typeUrl: string;
    encode(message: QuerySessionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySessionResponse;
    fromPartial(object: Partial<QuerySessionResponse>): QuerySessionResponse;
    fromAmino(object: QuerySessionResponseAmino): QuerySessionResponse;
    toAmino(message: QuerySessionResponse): QuerySessionResponseAmino;
    fromAminoMsg(object: QuerySessionResponseAminoMsg): QuerySessionResponse;
    fromProtoMsg(message: QuerySessionResponseProtoMsg): QuerySessionResponse;
    toProto(message: QuerySessionResponse): Uint8Array;
    toProtoMsg(message: QuerySessionResponse): QuerySessionResponseProtoMsg;
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
