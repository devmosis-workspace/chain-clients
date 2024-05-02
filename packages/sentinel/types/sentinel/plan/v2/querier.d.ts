import { Status } from "../../types/v1/status";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryWriter } from "../../../binary";
export interface QueryPlansRequest {
    status: Status;
    pagination?: PageRequest;
}
export interface QueryPlansRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.QueryPlansRequest";
    value: Uint8Array;
}
export interface QueryPlansRequestAmino {
    status?: Status;
    pagination?: PageRequestAmino;
}
export interface QueryPlansRequestAminoMsg {
    type: "/sentinel.plan.v2.QueryPlansRequest";
    value: QueryPlansRequestAmino;
}
export interface QueryPlansRequestSDKType {
    status: Status;
    pagination?: PageRequestSDKType;
}
export interface QueryPlansForProviderRequest {
    address: string;
    status: Status;
    pagination?: PageRequest;
}
export interface QueryPlansForProviderRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.QueryPlansForProviderRequest";
    value: Uint8Array;
}
export interface QueryPlansForProviderRequestAmino {
    address?: string;
    status?: Status;
    pagination?: PageRequestAmino;
}
export interface QueryPlansForProviderRequestAminoMsg {
    type: "/sentinel.plan.v2.QueryPlansForProviderRequest";
    value: QueryPlansForProviderRequestAmino;
}
export interface QueryPlansForProviderRequestSDKType {
    address: string;
    status: Status;
    pagination?: PageRequestSDKType;
}
export interface QueryPlanRequest {
    id: bigint;
}
export interface QueryPlanRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.QueryPlanRequest";
    value: Uint8Array;
}
export interface QueryPlanRequestAmino {
    id?: string;
}
export interface QueryPlanRequestAminoMsg {
    type: "/sentinel.plan.v2.QueryPlanRequest";
    value: QueryPlanRequestAmino;
}
export interface QueryPlanRequestSDKType {
    id: bigint;
}
export interface QueryPlansResponse {
    plans: Plan[];
    pagination?: PageResponse;
}
export interface QueryPlansResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.QueryPlansResponse";
    value: Uint8Array;
}
export interface QueryPlansResponseAmino {
    plans?: PlanAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPlansResponseAminoMsg {
    type: "/sentinel.plan.v2.QueryPlansResponse";
    value: QueryPlansResponseAmino;
}
export interface QueryPlansResponseSDKType {
    plans: PlanSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPlansForProviderResponse {
    plans: Plan[];
    pagination?: PageResponse;
}
export interface QueryPlansForProviderResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.QueryPlansForProviderResponse";
    value: Uint8Array;
}
export interface QueryPlansForProviderResponseAmino {
    plans?: PlanAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPlansForProviderResponseAminoMsg {
    type: "/sentinel.plan.v2.QueryPlansForProviderResponse";
    value: QueryPlansForProviderResponseAmino;
}
export interface QueryPlansForProviderResponseSDKType {
    plans: PlanSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPlanResponse {
    plan: Plan;
}
export interface QueryPlanResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.QueryPlanResponse";
    value: Uint8Array;
}
export interface QueryPlanResponseAmino {
    plan?: PlanAmino;
}
export interface QueryPlanResponseAminoMsg {
    type: "/sentinel.plan.v2.QueryPlanResponse";
    value: QueryPlanResponseAmino;
}
export interface QueryPlanResponseSDKType {
    plan: PlanSDKType;
}
export declare const QueryPlansRequest: {
    typeUrl: string;
    encode(message: QueryPlansRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlansRequest;
    fromPartial(object: Partial<QueryPlansRequest>): QueryPlansRequest;
    fromAmino(object: QueryPlansRequestAmino): QueryPlansRequest;
    toAmino(message: QueryPlansRequest): QueryPlansRequestAmino;
    fromAminoMsg(object: QueryPlansRequestAminoMsg): QueryPlansRequest;
    fromProtoMsg(message: QueryPlansRequestProtoMsg): QueryPlansRequest;
    toProto(message: QueryPlansRequest): Uint8Array;
    toProtoMsg(message: QueryPlansRequest): QueryPlansRequestProtoMsg;
};
export declare const QueryPlansForProviderRequest: {
    typeUrl: string;
    encode(message: QueryPlansForProviderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlansForProviderRequest;
    fromPartial(object: Partial<QueryPlansForProviderRequest>): QueryPlansForProviderRequest;
    fromAmino(object: QueryPlansForProviderRequestAmino): QueryPlansForProviderRequest;
    toAmino(message: QueryPlansForProviderRequest): QueryPlansForProviderRequestAmino;
    fromAminoMsg(object: QueryPlansForProviderRequestAminoMsg): QueryPlansForProviderRequest;
    fromProtoMsg(message: QueryPlansForProviderRequestProtoMsg): QueryPlansForProviderRequest;
    toProto(message: QueryPlansForProviderRequest): Uint8Array;
    toProtoMsg(message: QueryPlansForProviderRequest): QueryPlansForProviderRequestProtoMsg;
};
export declare const QueryPlanRequest: {
    typeUrl: string;
    encode(message: QueryPlanRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlanRequest;
    fromPartial(object: Partial<QueryPlanRequest>): QueryPlanRequest;
    fromAmino(object: QueryPlanRequestAmino): QueryPlanRequest;
    toAmino(message: QueryPlanRequest): QueryPlanRequestAmino;
    fromAminoMsg(object: QueryPlanRequestAminoMsg): QueryPlanRequest;
    fromProtoMsg(message: QueryPlanRequestProtoMsg): QueryPlanRequest;
    toProto(message: QueryPlanRequest): Uint8Array;
    toProtoMsg(message: QueryPlanRequest): QueryPlanRequestProtoMsg;
};
export declare const QueryPlansResponse: {
    typeUrl: string;
    encode(message: QueryPlansResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlansResponse;
    fromPartial(object: Partial<QueryPlansResponse>): QueryPlansResponse;
    fromAmino(object: QueryPlansResponseAmino): QueryPlansResponse;
    toAmino(message: QueryPlansResponse): QueryPlansResponseAmino;
    fromAminoMsg(object: QueryPlansResponseAminoMsg): QueryPlansResponse;
    fromProtoMsg(message: QueryPlansResponseProtoMsg): QueryPlansResponse;
    toProto(message: QueryPlansResponse): Uint8Array;
    toProtoMsg(message: QueryPlansResponse): QueryPlansResponseProtoMsg;
};
export declare const QueryPlansForProviderResponse: {
    typeUrl: string;
    encode(message: QueryPlansForProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlansForProviderResponse;
    fromPartial(object: Partial<QueryPlansForProviderResponse>): QueryPlansForProviderResponse;
    fromAmino(object: QueryPlansForProviderResponseAmino): QueryPlansForProviderResponse;
    toAmino(message: QueryPlansForProviderResponse): QueryPlansForProviderResponseAmino;
    fromAminoMsg(object: QueryPlansForProviderResponseAminoMsg): QueryPlansForProviderResponse;
    fromProtoMsg(message: QueryPlansForProviderResponseProtoMsg): QueryPlansForProviderResponse;
    toProto(message: QueryPlansForProviderResponse): Uint8Array;
    toProtoMsg(message: QueryPlansForProviderResponse): QueryPlansForProviderResponseProtoMsg;
};
export declare const QueryPlanResponse: {
    typeUrl: string;
    encode(message: QueryPlanResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlanResponse;
    fromPartial(object: Partial<QueryPlanResponse>): QueryPlanResponse;
    fromAmino(object: QueryPlanResponseAmino): QueryPlanResponse;
    toAmino(message: QueryPlanResponse): QueryPlanResponseAmino;
    fromAminoMsg(object: QueryPlanResponseAminoMsg): QueryPlanResponse;
    fromProtoMsg(message: QueryPlanResponseProtoMsg): QueryPlanResponse;
    toProto(message: QueryPlanResponse): Uint8Array;
    toProtoMsg(message: QueryPlanResponse): QueryPlanResponseProtoMsg;
};
