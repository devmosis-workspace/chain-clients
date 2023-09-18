import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Schedule, ScheduleAmino, ScheduleSDKType } from "./schedule";
import { BinaryWriter } from "../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.cron.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.cron.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/neutron.cron.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/neutron.cron.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetScheduleRequest {
    name: string;
}
export interface QueryGetScheduleRequestProtoMsg {
    typeUrl: "/neutron.cron.QueryGetScheduleRequest";
    value: Uint8Array;
}
export interface QueryGetScheduleRequestAmino {
    name: string;
}
export interface QueryGetScheduleRequestAminoMsg {
    type: "/neutron.cron.QueryGetScheduleRequest";
    value: QueryGetScheduleRequestAmino;
}
export interface QueryGetScheduleRequestSDKType {
    name: string;
}
export interface QueryGetScheduleResponse {
    schedule: Schedule;
}
export interface QueryGetScheduleResponseProtoMsg {
    typeUrl: "/neutron.cron.QueryGetScheduleResponse";
    value: Uint8Array;
}
export interface QueryGetScheduleResponseAmino {
    schedule?: ScheduleAmino;
}
export interface QueryGetScheduleResponseAminoMsg {
    type: "/neutron.cron.QueryGetScheduleResponse";
    value: QueryGetScheduleResponseAmino;
}
export interface QueryGetScheduleResponseSDKType {
    schedule: ScheduleSDKType;
}
export interface QuerySchedulesRequest {
    pagination: PageRequest;
}
export interface QuerySchedulesRequestProtoMsg {
    typeUrl: "/neutron.cron.QuerySchedulesRequest";
    value: Uint8Array;
}
export interface QuerySchedulesRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QuerySchedulesRequestAminoMsg {
    type: "/neutron.cron.QuerySchedulesRequest";
    value: QuerySchedulesRequestAmino;
}
export interface QuerySchedulesRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QuerySchedulesResponse {
    schedules: Schedule[];
    pagination: PageResponse;
}
export interface QuerySchedulesResponseProtoMsg {
    typeUrl: "/neutron.cron.QuerySchedulesResponse";
    value: Uint8Array;
}
export interface QuerySchedulesResponseAmino {
    schedules: ScheduleAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySchedulesResponseAminoMsg {
    type: "/neutron.cron.QuerySchedulesResponse";
    value: QuerySchedulesResponseAmino;
}
export interface QuerySchedulesResponseSDKType {
    schedules: ScheduleSDKType[];
    pagination: PageResponseSDKType;
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
export declare const QueryGetScheduleRequest: {
    typeUrl: string;
    encode(message: QueryGetScheduleRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetScheduleRequest;
    fromPartial(object: Partial<QueryGetScheduleRequest>): QueryGetScheduleRequest;
    fromAmino(object: QueryGetScheduleRequestAmino): QueryGetScheduleRequest;
    toAmino(message: QueryGetScheduleRequest): QueryGetScheduleRequestAmino;
    fromAminoMsg(object: QueryGetScheduleRequestAminoMsg): QueryGetScheduleRequest;
    fromProtoMsg(message: QueryGetScheduleRequestProtoMsg): QueryGetScheduleRequest;
    toProto(message: QueryGetScheduleRequest): Uint8Array;
    toProtoMsg(message: QueryGetScheduleRequest): QueryGetScheduleRequestProtoMsg;
};
export declare const QueryGetScheduleResponse: {
    typeUrl: string;
    encode(message: QueryGetScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetScheduleResponse;
    fromPartial(object: Partial<QueryGetScheduleResponse>): QueryGetScheduleResponse;
    fromAmino(object: QueryGetScheduleResponseAmino): QueryGetScheduleResponse;
    toAmino(message: QueryGetScheduleResponse): QueryGetScheduleResponseAmino;
    fromAminoMsg(object: QueryGetScheduleResponseAminoMsg): QueryGetScheduleResponse;
    fromProtoMsg(message: QueryGetScheduleResponseProtoMsg): QueryGetScheduleResponse;
    toProto(message: QueryGetScheduleResponse): Uint8Array;
    toProtoMsg(message: QueryGetScheduleResponse): QueryGetScheduleResponseProtoMsg;
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
