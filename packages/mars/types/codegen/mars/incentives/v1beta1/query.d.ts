import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Schedule, ScheduleSDKType } from "./store";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */
export interface QueryScheduleRequest {
    /** ID is the identifier of the incentives schedule to be queried */
    id: Long;
}
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */
export interface QueryScheduleRequestSDKType {
    id: Long;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */
export interface QueryScheduleResponse {
    /** Schedule is the parameters of the incentives schedule */
    schedule?: Schedule;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */
export interface QueryScheduleResponseSDKType {
    schedule?: ScheduleSDKType;
}
/** QuerySchedulesRequest is the request type for the Query/Schedules RPC method */
export interface QuerySchedulesRequest {
    /** Pagination defines an optional pagination for the request */
    pagination?: PageRequest;
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
/** QueryScheduleResponse is the response type for the Query/Schedules RPC method */
export interface QuerySchedulesResponseSDKType {
    schedules: ScheduleSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryScheduleRequest: {
    encode(message: QueryScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryScheduleRequest;
    fromPartial(object: Partial<QueryScheduleRequest>): QueryScheduleRequest;
};
export declare const QueryScheduleResponse: {
    encode(message: QueryScheduleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryScheduleResponse;
    fromPartial(object: Partial<QueryScheduleResponse>): QueryScheduleResponse;
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
