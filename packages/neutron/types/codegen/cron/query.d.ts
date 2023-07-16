import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Schedule, ScheduleSDKType } from "./schedule";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryGetScheduleRequest {
    name: string;
}
export interface QueryGetScheduleRequestSDKType {
    name: string;
}
export interface QueryGetScheduleResponse {
    schedule?: Schedule;
}
export interface QueryGetScheduleResponseSDKType {
    schedule?: ScheduleSDKType;
}
export interface QuerySchedulesRequest {
    pagination?: PageRequest;
}
export interface QuerySchedulesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QuerySchedulesResponse {
    schedules: Schedule[];
    pagination?: PageResponse;
}
export interface QuerySchedulesResponseSDKType {
    schedules: ScheduleSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetScheduleRequest: {
    encode(message: QueryGetScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetScheduleRequest;
    fromPartial(object: Partial<QueryGetScheduleRequest>): QueryGetScheduleRequest;
};
export declare const QueryGetScheduleResponse: {
    encode(message: QueryGetScheduleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetScheduleResponse;
    fromPartial(object: Partial<QueryGetScheduleResponse>): QueryGetScheduleResponse;
};
export declare const QuerySchedulesRequest: {
    encode(message: QuerySchedulesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySchedulesRequest;
    fromPartial(object: Partial<QuerySchedulesRequest>): QuerySchedulesRequest;
};
export declare const QuerySchedulesResponse: {
    encode(message: QuerySchedulesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySchedulesResponse;
    fromPartial(object: Partial<QuerySchedulesResponse>): QuerySchedulesResponse;
};
