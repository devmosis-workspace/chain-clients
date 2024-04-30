import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Schedule, ScheduleAmino, ScheduleSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseQueryScheduleRequest(): QueryScheduleRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryScheduleRequest = {
  typeUrl: "/mars.incentives.v1beta1.QueryScheduleRequest",
  encode(message: QueryScheduleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduleRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryScheduleRequest>): QueryScheduleRequest {
    const message = createBaseQueryScheduleRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryScheduleRequestAmino): QueryScheduleRequest {
    const message = createBaseQueryScheduleRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryScheduleRequest): QueryScheduleRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduleRequestAminoMsg): QueryScheduleRequest {
    return QueryScheduleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduleRequestProtoMsg): QueryScheduleRequest {
    return QueryScheduleRequest.decode(message.value);
  },
  toProto(message: QueryScheduleRequest): Uint8Array {
    return QueryScheduleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduleRequest): QueryScheduleRequestProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.QueryScheduleRequest",
      value: QueryScheduleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduleResponse(): QueryScheduleResponse {
  return {
    schedule: Schedule.fromPartial({})
  };
}
export const QueryScheduleResponse = {
  typeUrl: "/mars.incentives.v1beta1.QueryScheduleResponse",
  encode(message: QueryScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduleResponse {
    return {
      schedule: isSet(object.schedule) ? Schedule.fromJSON(object.schedule) : undefined
    };
  },
  fromPartial(object: Partial<QueryScheduleResponse>): QueryScheduleResponse {
    const message = createBaseQueryScheduleResponse();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? Schedule.fromPartial(object.schedule) : undefined;
    return message;
  },
  fromAmino(object: QueryScheduleResponseAmino): QueryScheduleResponse {
    const message = createBaseQueryScheduleResponse();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = Schedule.fromAmino(object.schedule);
    }
    return message;
  },
  toAmino(message: QueryScheduleResponse): QueryScheduleResponseAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? Schedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduleResponseAminoMsg): QueryScheduleResponse {
    return QueryScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduleResponseProtoMsg): QueryScheduleResponse {
    return QueryScheduleResponse.decode(message.value);
  },
  toProto(message: QueryScheduleResponse): Uint8Array {
    return QueryScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduleResponse): QueryScheduleResponseProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.QueryScheduleResponse",
      value: QueryScheduleResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySchedulesRequest(): QuerySchedulesRequest {
  return {
    pagination: undefined
  };
}
export const QuerySchedulesRequest = {
  typeUrl: "/mars.incentives.v1beta1.QuerySchedulesRequest",
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
      typeUrl: "/mars.incentives.v1beta1.QuerySchedulesRequest",
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
  typeUrl: "/mars.incentives.v1beta1.QuerySchedulesResponse",
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
      typeUrl: "/mars.incentives.v1beta1.QuerySchedulesResponse",
      value: QuerySchedulesResponse.encode(message).finish()
    };
  }
};