import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Schedule, ScheduleAmino, ScheduleSDKType } from "./schedule";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/neutron.cron.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/neutron.cron.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
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
  name?: string;
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
  pagination?: PageRequest;
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
  pagination?: PageRequestSDKType;
}
export interface QuerySchedulesResponse {
  schedules: Schedule[];
  pagination?: PageResponse;
}
export interface QuerySchedulesResponseProtoMsg {
  typeUrl: "/neutron.cron.QuerySchedulesResponse";
  value: Uint8Array;
}
export interface QuerySchedulesResponseAmino {
  schedules?: ScheduleAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySchedulesResponseAminoMsg {
  type: "/neutron.cron.QuerySchedulesResponse";
  value: QuerySchedulesResponseAmino;
}
export interface QuerySchedulesResponseSDKType {
  schedules: ScheduleSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.cron.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/neutron.cron.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.cron.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/neutron.cron.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetScheduleRequest(): QueryGetScheduleRequest {
  return {
    name: ""
  };
}
export const QueryGetScheduleRequest = {
  typeUrl: "/neutron.cron.QueryGetScheduleRequest",
  encode(message: QueryGetScheduleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryGetScheduleRequestAmino): QueryGetScheduleRequest {
    const message = createBaseQueryGetScheduleRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetScheduleRequest): QueryGetScheduleRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetScheduleRequestAminoMsg): QueryGetScheduleRequest {
    return QueryGetScheduleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScheduleRequestProtoMsg): QueryGetScheduleRequest {
    return QueryGetScheduleRequest.decode(message.value);
  },
  toProto(message: QueryGetScheduleRequest): Uint8Array {
    return QueryGetScheduleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScheduleRequest): QueryGetScheduleRequestProtoMsg {
    return {
      typeUrl: "/neutron.cron.QueryGetScheduleRequest",
      value: QueryGetScheduleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetScheduleResponse(): QueryGetScheduleResponse {
  return {
    schedule: Schedule.fromPartial({})
  };
}
export const QueryGetScheduleResponse = {
  typeUrl: "/neutron.cron.QueryGetScheduleResponse",
  encode(message: QueryGetScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryGetScheduleResponseAmino): QueryGetScheduleResponse {
    const message = createBaseQueryGetScheduleResponse();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = Schedule.fromAmino(object.schedule);
    }
    return message;
  },
  toAmino(message: QueryGetScheduleResponse): QueryGetScheduleResponseAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? Schedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetScheduleResponseAminoMsg): QueryGetScheduleResponse {
    return QueryGetScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScheduleResponseProtoMsg): QueryGetScheduleResponse {
    return QueryGetScheduleResponse.decode(message.value);
  },
  toProto(message: QueryGetScheduleResponse): Uint8Array {
    return QueryGetScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScheduleResponse): QueryGetScheduleResponseProtoMsg {
    return {
      typeUrl: "/neutron.cron.QueryGetScheduleResponse",
      value: QueryGetScheduleResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySchedulesRequest(): QuerySchedulesRequest {
  return {
    pagination: undefined
  };
}
export const QuerySchedulesRequest = {
  typeUrl: "/neutron.cron.QuerySchedulesRequest",
  encode(message: QuerySchedulesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySchedulesRequestAmino): QuerySchedulesRequest {
    const message = createBaseQuerySchedulesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySchedulesRequest): QuerySchedulesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySchedulesRequestAminoMsg): QuerySchedulesRequest {
    return QuerySchedulesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySchedulesRequestProtoMsg): QuerySchedulesRequest {
    return QuerySchedulesRequest.decode(message.value);
  },
  toProto(message: QuerySchedulesRequest): Uint8Array {
    return QuerySchedulesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySchedulesRequest): QuerySchedulesRequestProtoMsg {
    return {
      typeUrl: "/neutron.cron.QuerySchedulesRequest",
      value: QuerySchedulesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySchedulesResponse(): QuerySchedulesResponse {
  return {
    schedules: [],
    pagination: undefined
  };
}
export const QuerySchedulesResponse = {
  typeUrl: "/neutron.cron.QuerySchedulesResponse",
  encode(message: QuerySchedulesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySchedulesResponseAmino): QuerySchedulesResponse {
    const message = createBaseQuerySchedulesResponse();
    message.schedules = object.schedules?.map(e => Schedule.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySchedulesResponse): QuerySchedulesResponseAmino {
    const obj: any = {};
    if (message.schedules) {
      obj.schedules = message.schedules.map(e => e ? Schedule.toAmino(e) : undefined);
    } else {
      obj.schedules = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySchedulesResponseAminoMsg): QuerySchedulesResponse {
    return QuerySchedulesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySchedulesResponseProtoMsg): QuerySchedulesResponse {
    return QuerySchedulesResponse.decode(message.value);
  },
  toProto(message: QuerySchedulesResponse): Uint8Array {
    return QuerySchedulesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySchedulesResponse): QuerySchedulesResponseProtoMsg {
    return {
      typeUrl: "/neutron.cron.QuerySchedulesResponse",
      value: QuerySchedulesResponse.encode(message).finish()
    };
  }
};