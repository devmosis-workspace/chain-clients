import { Status } from "../../types/v1/status";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Node, NodeAmino, NodeSDKType } from "./node";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface QueryNodesRequest {
    status: Status;
    pagination?: PageRequest;
}
export interface QueryNodesRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryNodesRequest";
    value: Uint8Array;
}
export interface QueryNodesRequestAmino {
    status?: Status;
    pagination?: PageRequestAmino;
}
export interface QueryNodesRequestAminoMsg {
    type: "/sentinel.node.v2.QueryNodesRequest";
    value: QueryNodesRequestAmino;
}
export interface QueryNodesRequestSDKType {
    status: Status;
    pagination?: PageRequestSDKType;
}
export interface QueryNodesForPlanRequest {
    id: bigint;
    status: Status;
    pagination?: PageRequest;
}
export interface QueryNodesForPlanRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryNodesForPlanRequest";
    value: Uint8Array;
}
export interface QueryNodesForPlanRequestAmino {
    id?: string;
    status?: Status;
    pagination?: PageRequestAmino;
}
export interface QueryNodesForPlanRequestAminoMsg {
    type: "/sentinel.node.v2.QueryNodesForPlanRequest";
    value: QueryNodesForPlanRequestAmino;
}
export interface QueryNodesForPlanRequestSDKType {
    id: bigint;
    status: Status;
    pagination?: PageRequestSDKType;
}
export interface QueryNodeRequest {
    address: string;
}
export interface QueryNodeRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryNodeRequest";
    value: Uint8Array;
}
export interface QueryNodeRequestAmino {
    address?: string;
}
export interface QueryNodeRequestAminoMsg {
    type: "/sentinel.node.v2.QueryNodeRequest";
    value: QueryNodeRequestAmino;
}
export interface QueryNodeRequestSDKType {
    address: string;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/sentinel.node.v2.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryNodesResponse {
    nodes: Node[];
    pagination?: PageResponse;
}
export interface QueryNodesResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryNodesResponse";
    value: Uint8Array;
}
export interface QueryNodesResponseAmino {
    nodes?: NodeAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryNodesResponseAminoMsg {
    type: "/sentinel.node.v2.QueryNodesResponse";
    value: QueryNodesResponseAmino;
}
export interface QueryNodesResponseSDKType {
    nodes: NodeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryNodesForPlanResponse {
    nodes: Node[];
    pagination?: PageResponse;
}
export interface QueryNodesForPlanResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryNodesForPlanResponse";
    value: Uint8Array;
}
export interface QueryNodesForPlanResponseAmino {
    nodes?: NodeAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryNodesForPlanResponseAminoMsg {
    type: "/sentinel.node.v2.QueryNodesForPlanResponse";
    value: QueryNodesForPlanResponseAmino;
}
export interface QueryNodesForPlanResponseSDKType {
    nodes: NodeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryNodeResponse {
    node: Node;
}
export interface QueryNodeResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryNodeResponse";
    value: Uint8Array;
}
export interface QueryNodeResponseAmino {
    node?: NodeAmino;
}
export interface QueryNodeResponseAminoMsg {
    type: "/sentinel.node.v2.QueryNodeResponse";
    value: QueryNodeResponseAmino;
}
export interface QueryNodeResponseSDKType {
    node: NodeSDKType;
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/sentinel.node.v2.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryNodesRequest: {
    typeUrl: string;
    encode(message: QueryNodesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNodesRequest;
    fromPartial(object: Partial<QueryNodesRequest>): QueryNodesRequest;
    fromAmino(object: QueryNodesRequestAmino): QueryNodesRequest;
    toAmino(message: QueryNodesRequest): QueryNodesRequestAmino;
    fromAminoMsg(object: QueryNodesRequestAminoMsg): QueryNodesRequest;
    fromProtoMsg(message: QueryNodesRequestProtoMsg): QueryNodesRequest;
    toProto(message: QueryNodesRequest): Uint8Array;
    toProtoMsg(message: QueryNodesRequest): QueryNodesRequestProtoMsg;
};
export declare const QueryNodesForPlanRequest: {
    typeUrl: string;
    encode(message: QueryNodesForPlanRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNodesForPlanRequest;
    fromPartial(object: Partial<QueryNodesForPlanRequest>): QueryNodesForPlanRequest;
    fromAmino(object: QueryNodesForPlanRequestAmino): QueryNodesForPlanRequest;
    toAmino(message: QueryNodesForPlanRequest): QueryNodesForPlanRequestAmino;
    fromAminoMsg(object: QueryNodesForPlanRequestAminoMsg): QueryNodesForPlanRequest;
    fromProtoMsg(message: QueryNodesForPlanRequestProtoMsg): QueryNodesForPlanRequest;
    toProto(message: QueryNodesForPlanRequest): Uint8Array;
    toProtoMsg(message: QueryNodesForPlanRequest): QueryNodesForPlanRequestProtoMsg;
};
export declare const QueryNodeRequest: {
    typeUrl: string;
    encode(message: QueryNodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNodeRequest;
    fromPartial(object: Partial<QueryNodeRequest>): QueryNodeRequest;
    fromAmino(object: QueryNodeRequestAmino): QueryNodeRequest;
    toAmino(message: QueryNodeRequest): QueryNodeRequestAmino;
    fromAminoMsg(object: QueryNodeRequestAminoMsg): QueryNodeRequest;
    fromProtoMsg(message: QueryNodeRequestProtoMsg): QueryNodeRequest;
    toProto(message: QueryNodeRequest): Uint8Array;
    toProtoMsg(message: QueryNodeRequest): QueryNodeRequestProtoMsg;
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
export declare const QueryNodesResponse: {
    typeUrl: string;
    encode(message: QueryNodesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNodesResponse;
    fromPartial(object: Partial<QueryNodesResponse>): QueryNodesResponse;
    fromAmino(object: QueryNodesResponseAmino): QueryNodesResponse;
    toAmino(message: QueryNodesResponse): QueryNodesResponseAmino;
    fromAminoMsg(object: QueryNodesResponseAminoMsg): QueryNodesResponse;
    fromProtoMsg(message: QueryNodesResponseProtoMsg): QueryNodesResponse;
    toProto(message: QueryNodesResponse): Uint8Array;
    toProtoMsg(message: QueryNodesResponse): QueryNodesResponseProtoMsg;
};
export declare const QueryNodesForPlanResponse: {
    typeUrl: string;
    encode(message: QueryNodesForPlanResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNodesForPlanResponse;
    fromPartial(object: Partial<QueryNodesForPlanResponse>): QueryNodesForPlanResponse;
    fromAmino(object: QueryNodesForPlanResponseAmino): QueryNodesForPlanResponse;
    toAmino(message: QueryNodesForPlanResponse): QueryNodesForPlanResponseAmino;
    fromAminoMsg(object: QueryNodesForPlanResponseAminoMsg): QueryNodesForPlanResponse;
    fromProtoMsg(message: QueryNodesForPlanResponseProtoMsg): QueryNodesForPlanResponse;
    toProto(message: QueryNodesForPlanResponse): Uint8Array;
    toProtoMsg(message: QueryNodesForPlanResponse): QueryNodesForPlanResponseProtoMsg;
};
export declare const QueryNodeResponse: {
    typeUrl: string;
    encode(message: QueryNodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNodeResponse;
    fromPartial(object: Partial<QueryNodeResponse>): QueryNodeResponse;
    fromAmino(object: QueryNodeResponseAmino): QueryNodeResponse;
    toAmino(message: QueryNodeResponse): QueryNodeResponseAmino;
    fromAminoMsg(object: QueryNodeResponseAminoMsg): QueryNodeResponse;
    fromProtoMsg(message: QueryNodeResponseProtoMsg): QueryNodeResponse;
    toProto(message: QueryNodeResponse): Uint8Array;
    toProtoMsg(message: QueryNodeResponse): QueryNodeResponseProtoMsg;
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
