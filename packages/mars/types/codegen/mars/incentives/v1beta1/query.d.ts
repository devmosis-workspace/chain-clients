import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Schedule, ScheduleAmino, ScheduleSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */
export interface QueryScheduleRequest {
    /** ID is the identifier of the incentives schedule to be queried */
    id: bigint;
}
export interface QueryScheduleRequestProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.QueryScheduleRequest";
    value: Uint8Array;
}
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */
export interface QueryScheduleRequestAmino {
    /** ID is the identifier of the incentives schedule to be queried */
    id?: string;
}
export interface QueryScheduleRequestAminoMsg {
    type: "/mars.incentives.v1beta1.QueryScheduleRequest";
    value: QueryScheduleRequestAmino;
}
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */
export interface QueryScheduleRequestSDKType {
    id: bigint;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */
export interface QueryScheduleResponse {
    /** Schedule is the parameters of the incentives schedule */
    schedule: Schedule;
}
export interface QueryScheduleResponseProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.QueryScheduleResponse";
    value: Uint8Array;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */
export interface QueryScheduleResponseAmino {
    /** Schedule is the parameters of the incentives schedule */
    schedule?: ScheduleAmino;
}
export interface QueryScheduleResponseAminoMsg {
    type: "/mars.incentives.v1beta1.QueryScheduleResponse";
    value: QueryScheduleResponseAmino;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */
export interface QueryScheduleResponseSDKType {
    schedule: ScheduleSDKType;
}
/** QuerySchedulesRequest is the request type for the Query/Schedules RPC method */
export interface QuerySchedulesRequest {
    /** Pagination defines an optional pagination for the request */
    pagination?: PageRequest;
}
export interface QuerySchedulesRequestProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.QuerySchedulesRequest";
    value: Uint8Array;
}
/** QuerySchedulesRequest is the request type for the Query/Schedules RPC method */
export interface QuerySchedulesRequestAmino {
    /** Pagination defines an optional pagination for the request */
    pagination?: PageRequestAmino;
}
export interface QuerySchedulesRequestAminoMsg {
    type: "/mars.incentives.v1beta1.QuerySchedulesRequest";
    value: QuerySchedulesRequestAmino;
}
/** QuerySchedulesRequest is the request type for the Query/Schedules RPC method */
export interface QuerySchedulesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryScheduleResponse is the response type for the Query/Schedules RPC method */
export interface QuerySchedulesResponse {
    /** Schedule is the parameters of the incentives schedule */
    schedules: Schedule[];
    /** Pagination defines the pagination in the response */
    pagination?: PageResponse;
}
export interface QuerySchedulesResponseProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.QuerySchedulesResponse";
    value: Uint8Array;
}
/** QueryScheduleResponse is the response type for the Query/Schedules RPC method */
export interface QuerySchedulesResponseAmino {
    /** Schedule is the parameters of the incentives schedule */
    schedules?: ScheduleAmino[];
    /** Pagination defines the pagination in the response */
    pagination?: PageResponseAmino;
}
export interface QuerySchedulesResponseAminoMsg {
    type: "/mars.incentives.v1beta1.QuerySchedulesResponse";
    value: QuerySchedulesResponseAmino;
}
/** QueryScheduleResponse is the response type for the Query/Schedules RPC method */
export interface QuerySchedulesResponseSDKType {
    schedules: ScheduleSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryScheduleRequest: {
    typeUrl: string;
    encode(message: QueryScheduleRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduleRequest;
    fromPartial(object: Partial<QueryScheduleRequest>): QueryScheduleRequest;
    fromAmino(object: QueryScheduleRequestAmino): QueryScheduleRequest;
    toAmino(message: QueryScheduleRequest): QueryScheduleRequestAmino;
    fromAminoMsg(object: QueryScheduleRequestAminoMsg): QueryScheduleRequest;
    fromProtoMsg(message: QueryScheduleRequestProtoMsg): QueryScheduleRequest;
    toProto(message: QueryScheduleRequest): Uint8Array;
    toProtoMsg(message: QueryScheduleRequest): QueryScheduleRequestProtoMsg;
};
export declare const QueryScheduleResponse: {
    typeUrl: string;
    encode(message: QueryScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduleResponse;
    fromPartial(object: Partial<QueryScheduleResponse>): QueryScheduleResponse;
    fromAmino(object: QueryScheduleResponseAmino): QueryScheduleResponse;
    toAmino(message: QueryScheduleResponse): QueryScheduleResponseAmino;
    fromAminoMsg(object: QueryScheduleResponseAminoMsg): QueryScheduleResponse;
    fromProtoMsg(message: QueryScheduleResponseProtoMsg): QueryScheduleResponse;
    toProto(message: QueryScheduleResponse): Uint8Array;
    toProtoMsg(message: QueryScheduleResponse): QueryScheduleResponseProtoMsg;
};
export declare const QuerySchedulesRequest: {
    typeUrl: string;
    encode(message: QuerySchedulesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySchedulesRequest;
    fromPartial(object: Partial<QuerySchedulesRequest>): QuerySchedulesRequest;
    fromAmino(object: QuerySchedulesRequestAmino): QuerySchedulesRequest;
    toAmino(message: QuerySchedulesRequest): QuerySchedulesRequestAmino;
    fromAminoMsg(object: QuerySchedulesRequestAminoMsg): QuerySchedulesRequest;
    fromProtoMsg(message: QuerySchedulesRequestProtoMsg): QuerySchedulesRequest;
    toProto(message: QuerySchedulesRequest): Uint8Array;
    toProtoMsg(message: QuerySchedulesRequest): QuerySchedulesRequestProtoMsg;
};
export declare const QuerySchedulesResponse: {
    typeUrl: string;
    encode(message: QuerySchedulesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySchedulesResponse;
    fromPartial(object: Partial<QuerySchedulesResponse>): QuerySchedulesResponse;
    fromAmino(object: QuerySchedulesResponseAmino): QuerySchedulesResponse;
    toAmino(message: QuerySchedulesResponse): QuerySchedulesResponseAmino;
    fromAminoMsg(object: QuerySchedulesResponseAminoMsg): QuerySchedulesResponse;
    fromProtoMsg(message: QuerySchedulesResponseProtoMsg): QuerySchedulesResponse;
    toProto(message: QuerySchedulesResponse): Uint8Array;
    toProtoMsg(message: QuerySchedulesResponse): QuerySchedulesResponseProtoMsg;
};
