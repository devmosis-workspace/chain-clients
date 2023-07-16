import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Schedule, ScheduleSDKType } from "./schedule";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetScheduleRequest(): QueryGetScheduleRequest {
  return {
    name: ""
  };
}
export const QueryGetScheduleRequest = {
  encode(message: QueryGetScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetScheduleRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<QueryGetScheduleRequest>): QueryGetScheduleRequest {
    const message = createBaseQueryGetScheduleRequest();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseQueryGetScheduleResponse(): QueryGetScheduleResponse {
  return {
    schedule: undefined
  };
}
export const QueryGetScheduleResponse = {
  encode(message: QueryGetScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetScheduleResponse {
    return {
      schedule: isSet(object.schedule) ? Schedule.fromJSON(object.schedule) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetScheduleResponse>): QueryGetScheduleResponse {
    const message = createBaseQueryGetScheduleResponse();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? Schedule.fromPartial(object.schedule) : undefined;
    return message;
  }
};
function createBaseQuerySchedulesRequest(): QuerySchedulesRequest {
  return {
    pagination: undefined
  };
}
export const QuerySchedulesRequest = {
  encode(message: QuerySchedulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySchedulesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySchedulesRequest>): QuerySchedulesRequest {
    const message = createBaseQuerySchedulesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySchedulesResponse(): QuerySchedulesResponse {
  return {
    schedules: [],
    pagination: undefined
  };
}
export const QuerySchedulesResponse = {
  encode(message: QuerySchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySchedulesResponse {
    return {
      schedules: Array.isArray(object?.schedules) ? object.schedules.map((e: any) => Schedule.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySchedulesResponse>): QuerySchedulesResponse {
    const message = createBaseQuerySchedulesResponse();
    message.schedules = object.schedules?.map(e => Schedule.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};