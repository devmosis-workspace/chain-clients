import { Status, statusFromJSON } from "../../types/v1/status";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseQueryPlansRequest(): QueryPlansRequest {
  return {
    status: 0,
    pagination: undefined
  };
}
export const QueryPlansRequest = {
  typeUrl: "/sentinel.plan.v2.QueryPlansRequest",
  encode(message: QueryPlansRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlansRequest {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlansRequest>): QueryPlansRequest {
    const message = createBaseQueryPlansRequest();
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPlansRequestAmino): QueryPlansRequest {
    const message = createBaseQueryPlansRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPlansRequest): QueryPlansRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlansRequestAminoMsg): QueryPlansRequest {
    return QueryPlansRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlansRequestProtoMsg): QueryPlansRequest {
    return QueryPlansRequest.decode(message.value);
  },
  toProto(message: QueryPlansRequest): Uint8Array {
    return QueryPlansRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlansRequest): QueryPlansRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.QueryPlansRequest",
      value: QueryPlansRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPlansForProviderRequest(): QueryPlansForProviderRequest {
  return {
    address: "",
    status: 0,
    pagination: undefined
  };
}
export const QueryPlansForProviderRequest = {
  typeUrl: "/sentinel.plan.v2.QueryPlansForProviderRequest",
  encode(message: QueryPlansForProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlansForProviderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlansForProviderRequest>): QueryPlansForProviderRequest {
    const message = createBaseQueryPlansForProviderRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPlansForProviderRequestAmino): QueryPlansForProviderRequest {
    const message = createBaseQueryPlansForProviderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPlansForProviderRequest): QueryPlansForProviderRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlansForProviderRequestAminoMsg): QueryPlansForProviderRequest {
    return QueryPlansForProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlansForProviderRequestProtoMsg): QueryPlansForProviderRequest {
    return QueryPlansForProviderRequest.decode(message.value);
  },
  toProto(message: QueryPlansForProviderRequest): Uint8Array {
    return QueryPlansForProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlansForProviderRequest): QueryPlansForProviderRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.QueryPlansForProviderRequest",
      value: QueryPlansForProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPlanRequest(): QueryPlanRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryPlanRequest = {
  typeUrl: "/sentinel.plan.v2.QueryPlanRequest",
  encode(message: QueryPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryPlanRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPlanRequest>): QueryPlanRequest {
    const message = createBaseQueryPlanRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPlanRequestAmino): QueryPlanRequest {
    const message = createBaseQueryPlanRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryPlanRequest): QueryPlanRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlanRequestAminoMsg): QueryPlanRequest {
    return QueryPlanRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlanRequestProtoMsg): QueryPlanRequest {
    return QueryPlanRequest.decode(message.value);
  },
  toProto(message: QueryPlanRequest): Uint8Array {
    return QueryPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlanRequest): QueryPlanRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.QueryPlanRequest",
      value: QueryPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPlansResponse(): QueryPlansResponse {
  return {
    plans: [],
    pagination: undefined
  };
}
export const QueryPlansResponse = {
  typeUrl: "/sentinel.plan.v2.QueryPlansResponse",
  encode(message: QueryPlansResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlansResponse {
    return {
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlansResponse>): QueryPlansResponse {
    const message = createBaseQueryPlansResponse();
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPlansResponseAmino): QueryPlansResponse {
    const message = createBaseQueryPlansResponse();
    message.plans = object.plans?.map(e => Plan.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPlansResponse): QueryPlansResponseAmino {
    const obj: any = {};
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = message.plans;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlansResponseAminoMsg): QueryPlansResponse {
    return QueryPlansResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlansResponseProtoMsg): QueryPlansResponse {
    return QueryPlansResponse.decode(message.value);
  },
  toProto(message: QueryPlansResponse): Uint8Array {
    return QueryPlansResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlansResponse): QueryPlansResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.QueryPlansResponse",
      value: QueryPlansResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPlansForProviderResponse(): QueryPlansForProviderResponse {
  return {
    plans: [],
    pagination: undefined
  };
}
export const QueryPlansForProviderResponse = {
  typeUrl: "/sentinel.plan.v2.QueryPlansForProviderResponse",
  encode(message: QueryPlansForProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlansForProviderResponse {
    return {
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlansForProviderResponse>): QueryPlansForProviderResponse {
    const message = createBaseQueryPlansForProviderResponse();
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPlansForProviderResponseAmino): QueryPlansForProviderResponse {
    const message = createBaseQueryPlansForProviderResponse();
    message.plans = object.plans?.map(e => Plan.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPlansForProviderResponse): QueryPlansForProviderResponseAmino {
    const obj: any = {};
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = message.plans;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlansForProviderResponseAminoMsg): QueryPlansForProviderResponse {
    return QueryPlansForProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlansForProviderResponseProtoMsg): QueryPlansForProviderResponse {
    return QueryPlansForProviderResponse.decode(message.value);
  },
  toProto(message: QueryPlansForProviderResponse): Uint8Array {
    return QueryPlansForProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlansForProviderResponse): QueryPlansForProviderResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.QueryPlansForProviderResponse",
      value: QueryPlansForProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPlanResponse(): QueryPlanResponse {
  return {
    plan: Plan.fromPartial({})
  };
}
export const QueryPlanResponse = {
  typeUrl: "/sentinel.plan.v2.QueryPlanResponse",
  encode(message: QueryPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlanResponse {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlanResponse>): QueryPlanResponse {
    const message = createBaseQueryPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: QueryPlanResponseAmino): QueryPlanResponse {
    const message = createBaseQueryPlanResponse();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: QueryPlanResponse): QueryPlanResponseAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlanResponseAminoMsg): QueryPlanResponse {
    return QueryPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlanResponseProtoMsg): QueryPlanResponse {
    return QueryPlanResponse.decode(message.value);
  },
  toProto(message: QueryPlanResponse): Uint8Array {
    return QueryPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlanResponse): QueryPlanResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.QueryPlanResponse",
      value: QueryPlanResponse.encode(message).finish()
    };
  }
};