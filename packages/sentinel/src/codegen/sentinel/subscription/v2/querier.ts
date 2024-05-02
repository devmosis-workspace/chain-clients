import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Allocation, AllocationAmino, AllocationSDKType } from "./allocation";
import { Payout, PayoutAmino, PayoutSDKType } from "./payout";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QuerySubscriptionsRequest {
  pagination?: PageRequest;
}
export interface QuerySubscriptionsRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsRequestAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsRequest";
  value: QuerySubscriptionsRequestAmino;
}
export interface QuerySubscriptionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionsForAccountRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QuerySubscriptionsForAccountRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionsForAccountRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsForAccountRequestAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsForAccountRequest";
  value: QuerySubscriptionsForAccountRequestAmino;
}
export interface QuerySubscriptionsForAccountRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionsForNodeRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QuerySubscriptionsForNodeRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionsForNodeRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsForNodeRequestAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsForNodeRequest";
  value: QuerySubscriptionsForNodeRequestAmino;
}
export interface QuerySubscriptionsForNodeRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionsForPlanRequest {
  id: bigint;
  pagination?: PageRequest;
}
export interface QuerySubscriptionsForPlanRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionsForPlanRequestAmino {
  id?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsForPlanRequestAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsForPlanRequest";
  value: QuerySubscriptionsForPlanRequestAmino;
}
export interface QuerySubscriptionsForPlanRequestSDKType {
  id: bigint;
  pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionRequest {
  id: bigint;
}
export interface QuerySubscriptionRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionRequestAmino {
  id?: string;
}
export interface QuerySubscriptionRequestAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionRequest";
  value: QuerySubscriptionRequestAmino;
}
export interface QuerySubscriptionRequestSDKType {
  id: bigint;
}
export interface QueryAllocationRequest {
  id: bigint;
  address: string;
}
export interface QueryAllocationRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationRequest";
  value: Uint8Array;
}
export interface QueryAllocationRequestAmino {
  id?: string;
  address?: string;
}
export interface QueryAllocationRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryAllocationRequest";
  value: QueryAllocationRequestAmino;
}
export interface QueryAllocationRequestSDKType {
  id: bigint;
  address: string;
}
export interface QueryAllocationsRequest {
  id: bigint;
  pagination?: PageRequest;
}
export interface QueryAllocationsRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationsRequest";
  value: Uint8Array;
}
export interface QueryAllocationsRequestAmino {
  id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllocationsRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryAllocationsRequest";
  value: QueryAllocationsRequestAmino;
}
export interface QueryAllocationsRequestSDKType {
  id: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryPayoutsRequest {
  pagination?: PageRequest;
}
export interface QueryPayoutsRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsRequest";
  value: Uint8Array;
}
export interface QueryPayoutsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPayoutsRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutsRequest";
  value: QueryPayoutsRequestAmino;
}
export interface QueryPayoutsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPayoutsForAccountRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryPayoutsForAccountRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountRequest";
  value: Uint8Array;
}
export interface QueryPayoutsForAccountRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPayoutsForAccountRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutsForAccountRequest";
  value: QueryPayoutsForAccountRequestAmino;
}
export interface QueryPayoutsForAccountRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPayoutsForNodeRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryPayoutsForNodeRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeRequest";
  value: Uint8Array;
}
export interface QueryPayoutsForNodeRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPayoutsForNodeRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutsForNodeRequest";
  value: QueryPayoutsForNodeRequestAmino;
}
export interface QueryPayoutsForNodeRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPayoutRequest {
  id: bigint;
}
export interface QueryPayoutRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutRequest";
  value: Uint8Array;
}
export interface QueryPayoutRequestAmino {
  id?: string;
}
export interface QueryPayoutRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutRequest";
  value: QueryPayoutRequestAmino;
}
export interface QueryPayoutRequestSDKType {
  id: bigint;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sentinel.subscription.v2.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QuerySubscriptionsResponse {
  subscriptions: Any[];
  pagination?: PageResponse;
}
export interface QuerySubscriptionsResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionsResponseAmino {
  subscriptions?: AnyAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsResponseAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsResponse";
  value: QuerySubscriptionsResponseAmino;
}
export interface QuerySubscriptionsResponseSDKType {
  subscriptions: AnySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionsForAccountResponse {
  subscriptions: Any[];
  pagination?: PageResponse;
}
export interface QuerySubscriptionsForAccountResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionsForAccountResponseAmino {
  subscriptions?: AnyAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsForAccountResponseAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsForAccountResponse";
  value: QuerySubscriptionsForAccountResponseAmino;
}
export interface QuerySubscriptionsForAccountResponseSDKType {
  subscriptions: AnySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionsForNodeResponse {
  subscriptions: Any[];
  pagination?: PageResponse;
}
export interface QuerySubscriptionsForNodeResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionsForNodeResponseAmino {
  subscriptions?: AnyAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsForNodeResponseAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsForNodeResponse";
  value: QuerySubscriptionsForNodeResponseAmino;
}
export interface QuerySubscriptionsForNodeResponseSDKType {
  subscriptions: AnySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionsForPlanResponse {
  subscriptions: Any[];
  pagination?: PageResponse;
}
export interface QuerySubscriptionsForPlanResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionsForPlanResponseAmino {
  subscriptions?: AnyAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsForPlanResponseAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionsForPlanResponse";
  value: QuerySubscriptionsForPlanResponseAmino;
}
export interface QuerySubscriptionsForPlanResponseSDKType {
  subscriptions: AnySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionResponse {
  subscription?: Any;
}
export interface QuerySubscriptionResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionResponseAmino {
  subscription?: AnyAmino;
}
export interface QuerySubscriptionResponseAminoMsg {
  type: "/sentinel.subscription.v2.QuerySubscriptionResponse";
  value: QuerySubscriptionResponseAmino;
}
export interface QuerySubscriptionResponseSDKType {
  subscription?: AnySDKType;
}
export interface QueryAllocationResponse {
  allocation: Allocation;
}
export interface QueryAllocationResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationResponse";
  value: Uint8Array;
}
export interface QueryAllocationResponseAmino {
  allocation?: AllocationAmino;
}
export interface QueryAllocationResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryAllocationResponse";
  value: QueryAllocationResponseAmino;
}
export interface QueryAllocationResponseSDKType {
  allocation: AllocationSDKType;
}
export interface QueryAllocationsResponse {
  allocations: Allocation[];
  pagination?: PageResponse;
}
export interface QueryAllocationsResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationsResponse";
  value: Uint8Array;
}
export interface QueryAllocationsResponseAmino {
  allocations?: AllocationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllocationsResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryAllocationsResponse";
  value: QueryAllocationsResponseAmino;
}
export interface QueryAllocationsResponseSDKType {
  allocations: AllocationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPayoutsResponse {
  payouts: Payout[];
  pagination?: PageResponse;
}
export interface QueryPayoutsResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsResponse";
  value: Uint8Array;
}
export interface QueryPayoutsResponseAmino {
  payouts?: PayoutAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPayoutsResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutsResponse";
  value: QueryPayoutsResponseAmino;
}
export interface QueryPayoutsResponseSDKType {
  payouts: PayoutSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPayoutsForAccountResponse {
  payouts: Payout[];
  pagination?: PageResponse;
}
export interface QueryPayoutsForAccountResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountResponse";
  value: Uint8Array;
}
export interface QueryPayoutsForAccountResponseAmino {
  payouts?: PayoutAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPayoutsForAccountResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutsForAccountResponse";
  value: QueryPayoutsForAccountResponseAmino;
}
export interface QueryPayoutsForAccountResponseSDKType {
  payouts: PayoutSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPayoutsForNodeResponse {
  payouts: Payout[];
  pagination?: PageResponse;
}
export interface QueryPayoutsForNodeResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeResponse";
  value: Uint8Array;
}
export interface QueryPayoutsForNodeResponseAmino {
  payouts?: PayoutAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPayoutsForNodeResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutsForNodeResponse";
  value: QueryPayoutsForNodeResponseAmino;
}
export interface QueryPayoutsForNodeResponseSDKType {
  payouts: PayoutSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPayoutResponse {
  payout: Payout;
}
export interface QueryPayoutResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutResponse";
  value: Uint8Array;
}
export interface QueryPayoutResponseAmino {
  payout?: PayoutAmino;
}
export interface QueryPayoutResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryPayoutResponse";
  value: QueryPayoutResponseAmino;
}
export interface QueryPayoutResponseSDKType {
  payout: PayoutSDKType;
}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sentinel.subscription.v2.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQuerySubscriptionsRequest(): QuerySubscriptionsRequest {
  return {
    pagination: undefined
  };
}
export const QuerySubscriptionsRequest = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsRequest",
  encode(message: QuerySubscriptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsRequest>): QuerySubscriptionsRequest {
    const message = createBaseQuerySubscriptionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsRequestAmino): QuerySubscriptionsRequest {
    const message = createBaseQuerySubscriptionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsRequest): QuerySubscriptionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsRequestAminoMsg): QuerySubscriptionsRequest {
    return QuerySubscriptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsRequestProtoMsg): QuerySubscriptionsRequest {
    return QuerySubscriptionsRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionsRequest): Uint8Array {
    return QuerySubscriptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsRequest): QuerySubscriptionsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsRequest",
      value: QuerySubscriptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsForAccountRequest(): QuerySubscriptionsForAccountRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QuerySubscriptionsForAccountRequest = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountRequest",
  encode(message: QuerySubscriptionsForAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsForAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsForAccountRequest>): QuerySubscriptionsForAccountRequest {
    const message = createBaseQuerySubscriptionsForAccountRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsForAccountRequestAmino): QuerySubscriptionsForAccountRequest {
    const message = createBaseQuerySubscriptionsForAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsForAccountRequest): QuerySubscriptionsForAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsForAccountRequestAminoMsg): QuerySubscriptionsForAccountRequest {
    return QuerySubscriptionsForAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsForAccountRequestProtoMsg): QuerySubscriptionsForAccountRequest {
    return QuerySubscriptionsForAccountRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionsForAccountRequest): Uint8Array {
    return QuerySubscriptionsForAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsForAccountRequest): QuerySubscriptionsForAccountRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountRequest",
      value: QuerySubscriptionsForAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsForNodeRequest(): QuerySubscriptionsForNodeRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QuerySubscriptionsForNodeRequest = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeRequest",
  encode(message: QuerySubscriptionsForNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsForNodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsForNodeRequest>): QuerySubscriptionsForNodeRequest {
    const message = createBaseQuerySubscriptionsForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsForNodeRequestAmino): QuerySubscriptionsForNodeRequest {
    const message = createBaseQuerySubscriptionsForNodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsForNodeRequest): QuerySubscriptionsForNodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsForNodeRequestAminoMsg): QuerySubscriptionsForNodeRequest {
    return QuerySubscriptionsForNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsForNodeRequestProtoMsg): QuerySubscriptionsForNodeRequest {
    return QuerySubscriptionsForNodeRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionsForNodeRequest): Uint8Array {
    return QuerySubscriptionsForNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsForNodeRequest): QuerySubscriptionsForNodeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeRequest",
      value: QuerySubscriptionsForNodeRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsForPlanRequest(): QuerySubscriptionsForPlanRequest {
  return {
    id: BigInt(0),
    pagination: undefined
  };
}
export const QuerySubscriptionsForPlanRequest = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanRequest",
  encode(message: QuerySubscriptionsForPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsForPlanRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsForPlanRequest>): QuerySubscriptionsForPlanRequest {
    const message = createBaseQuerySubscriptionsForPlanRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsForPlanRequestAmino): QuerySubscriptionsForPlanRequest {
    const message = createBaseQuerySubscriptionsForPlanRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsForPlanRequest): QuerySubscriptionsForPlanRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsForPlanRequestAminoMsg): QuerySubscriptionsForPlanRequest {
    return QuerySubscriptionsForPlanRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsForPlanRequestProtoMsg): QuerySubscriptionsForPlanRequest {
    return QuerySubscriptionsForPlanRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionsForPlanRequest): Uint8Array {
    return QuerySubscriptionsForPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsForPlanRequest): QuerySubscriptionsForPlanRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanRequest",
      value: QuerySubscriptionsForPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionRequest(): QuerySubscriptionRequest {
  return {
    id: BigInt(0)
  };
}
export const QuerySubscriptionRequest = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionRequest",
  encode(message: QuerySubscriptionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QuerySubscriptionRequest>): QuerySubscriptionRequest {
    const message = createBaseQuerySubscriptionRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySubscriptionRequestAmino): QuerySubscriptionRequest {
    const message = createBaseQuerySubscriptionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionRequest): QuerySubscriptionRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionRequestAminoMsg): QuerySubscriptionRequest {
    return QuerySubscriptionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionRequestProtoMsg): QuerySubscriptionRequest {
    return QuerySubscriptionRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionRequest): Uint8Array {
    return QuerySubscriptionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionRequest): QuerySubscriptionRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionRequest",
      value: QuerySubscriptionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationRequest(): QueryAllocationRequest {
  return {
    id: BigInt(0),
    address: ""
  };
}
export const QueryAllocationRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationRequest",
  encode(message: QueryAllocationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAllocationRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAllocationRequest>): QueryAllocationRequest {
    const message = createBaseQueryAllocationRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAllocationRequestAmino): QueryAllocationRequest {
    const message = createBaseQueryAllocationRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAllocationRequest): QueryAllocationRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAllocationRequestAminoMsg): QueryAllocationRequest {
    return QueryAllocationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllocationRequestProtoMsg): QueryAllocationRequest {
    return QueryAllocationRequest.decode(message.value);
  },
  toProto(message: QueryAllocationRequest): Uint8Array {
    return QueryAllocationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationRequest): QueryAllocationRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryAllocationRequest",
      value: QueryAllocationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationsRequest(): QueryAllocationsRequest {
  return {
    id: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllocationsRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationsRequest",
  encode(message: QueryAllocationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllocationsRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllocationsRequest>): QueryAllocationsRequest {
    const message = createBaseQueryAllocationsRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllocationsRequestAmino): QueryAllocationsRequest {
    const message = createBaseQueryAllocationsRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllocationsRequest): QueryAllocationsRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllocationsRequestAminoMsg): QueryAllocationsRequest {
    return QueryAllocationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllocationsRequestProtoMsg): QueryAllocationsRequest {
    return QueryAllocationsRequest.decode(message.value);
  },
  toProto(message: QueryAllocationsRequest): Uint8Array {
    return QueryAllocationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationsRequest): QueryAllocationsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryAllocationsRequest",
      value: QueryAllocationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutsRequest(): QueryPayoutsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPayoutsRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsRequest",
  encode(message: QueryPayoutsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutsRequest>): QueryPayoutsRequest {
    const message = createBaseQueryPayoutsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutsRequestAmino): QueryPayoutsRequest {
    const message = createBaseQueryPayoutsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutsRequest): QueryPayoutsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutsRequestAminoMsg): QueryPayoutsRequest {
    return QueryPayoutsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutsRequestProtoMsg): QueryPayoutsRequest {
    return QueryPayoutsRequest.decode(message.value);
  },
  toProto(message: QueryPayoutsRequest): Uint8Array {
    return QueryPayoutsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutsRequest): QueryPayoutsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutsRequest",
      value: QueryPayoutsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutsForAccountRequest(): QueryPayoutsForAccountRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryPayoutsForAccountRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountRequest",
  encode(message: QueryPayoutsForAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutsForAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutsForAccountRequest>): QueryPayoutsForAccountRequest {
    const message = createBaseQueryPayoutsForAccountRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutsForAccountRequestAmino): QueryPayoutsForAccountRequest {
    const message = createBaseQueryPayoutsForAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutsForAccountRequest): QueryPayoutsForAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutsForAccountRequestAminoMsg): QueryPayoutsForAccountRequest {
    return QueryPayoutsForAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutsForAccountRequestProtoMsg): QueryPayoutsForAccountRequest {
    return QueryPayoutsForAccountRequest.decode(message.value);
  },
  toProto(message: QueryPayoutsForAccountRequest): Uint8Array {
    return QueryPayoutsForAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutsForAccountRequest): QueryPayoutsForAccountRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountRequest",
      value: QueryPayoutsForAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutsForNodeRequest(): QueryPayoutsForNodeRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryPayoutsForNodeRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeRequest",
  encode(message: QueryPayoutsForNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutsForNodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutsForNodeRequest>): QueryPayoutsForNodeRequest {
    const message = createBaseQueryPayoutsForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutsForNodeRequestAmino): QueryPayoutsForNodeRequest {
    const message = createBaseQueryPayoutsForNodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutsForNodeRequest): QueryPayoutsForNodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutsForNodeRequestAminoMsg): QueryPayoutsForNodeRequest {
    return QueryPayoutsForNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutsForNodeRequestProtoMsg): QueryPayoutsForNodeRequest {
    return QueryPayoutsForNodeRequest.decode(message.value);
  },
  toProto(message: QueryPayoutsForNodeRequest): Uint8Array {
    return QueryPayoutsForNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutsForNodeRequest): QueryPayoutsForNodeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeRequest",
      value: QueryPayoutsForNodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutRequest(): QueryPayoutRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryPayoutRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutRequest",
  encode(message: QueryPayoutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPayoutRequest>): QueryPayoutRequest {
    const message = createBaseQueryPayoutRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPayoutRequestAmino): QueryPayoutRequest {
    const message = createBaseQueryPayoutRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryPayoutRequest): QueryPayoutRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutRequestAminoMsg): QueryPayoutRequest {
    return QueryPayoutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutRequestProtoMsg): QueryPayoutRequest {
    return QueryPayoutRequest.decode(message.value);
  },
  toProto(message: QueryPayoutRequest): Uint8Array {
    return QueryPayoutRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutRequest): QueryPayoutRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutRequest",
      value: QueryPayoutRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/sentinel.subscription.v2.QueryParamsRequest",
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
      typeUrl: "/sentinel.subscription.v2.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsResponse(): QuerySubscriptionsResponse {
  return {
    subscriptions: [],
    pagination: undefined
  };
}
export const QuerySubscriptionsResponse = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsResponse",
  encode(message: QuerySubscriptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsResponse {
    return {
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsResponse>): QuerySubscriptionsResponse {
    const message = createBaseQuerySubscriptionsResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsResponseAmino): QuerySubscriptionsResponse {
    const message = createBaseQuerySubscriptionsResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsResponse): QuerySubscriptionsResponseAmino {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.subscriptions = message.subscriptions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsResponseAminoMsg): QuerySubscriptionsResponse {
    return QuerySubscriptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsResponseProtoMsg): QuerySubscriptionsResponse {
    return QuerySubscriptionsResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionsResponse): Uint8Array {
    return QuerySubscriptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsResponse): QuerySubscriptionsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsResponse",
      value: QuerySubscriptionsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsForAccountResponse(): QuerySubscriptionsForAccountResponse {
  return {
    subscriptions: [],
    pagination: undefined
  };
}
export const QuerySubscriptionsForAccountResponse = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountResponse",
  encode(message: QuerySubscriptionsForAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsForAccountResponse {
    return {
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsForAccountResponse>): QuerySubscriptionsForAccountResponse {
    const message = createBaseQuerySubscriptionsForAccountResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsForAccountResponseAmino): QuerySubscriptionsForAccountResponse {
    const message = createBaseQuerySubscriptionsForAccountResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsForAccountResponse): QuerySubscriptionsForAccountResponseAmino {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.subscriptions = message.subscriptions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsForAccountResponseAminoMsg): QuerySubscriptionsForAccountResponse {
    return QuerySubscriptionsForAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsForAccountResponseProtoMsg): QuerySubscriptionsForAccountResponse {
    return QuerySubscriptionsForAccountResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionsForAccountResponse): Uint8Array {
    return QuerySubscriptionsForAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsForAccountResponse): QuerySubscriptionsForAccountResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountResponse",
      value: QuerySubscriptionsForAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsForNodeResponse(): QuerySubscriptionsForNodeResponse {
  return {
    subscriptions: [],
    pagination: undefined
  };
}
export const QuerySubscriptionsForNodeResponse = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeResponse",
  encode(message: QuerySubscriptionsForNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsForNodeResponse {
    return {
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsForNodeResponse>): QuerySubscriptionsForNodeResponse {
    const message = createBaseQuerySubscriptionsForNodeResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsForNodeResponseAmino): QuerySubscriptionsForNodeResponse {
    const message = createBaseQuerySubscriptionsForNodeResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsForNodeResponse): QuerySubscriptionsForNodeResponseAmino {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.subscriptions = message.subscriptions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsForNodeResponseAminoMsg): QuerySubscriptionsForNodeResponse {
    return QuerySubscriptionsForNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsForNodeResponseProtoMsg): QuerySubscriptionsForNodeResponse {
    return QuerySubscriptionsForNodeResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionsForNodeResponse): Uint8Array {
    return QuerySubscriptionsForNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsForNodeResponse): QuerySubscriptionsForNodeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeResponse",
      value: QuerySubscriptionsForNodeResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionsForPlanResponse(): QuerySubscriptionsForPlanResponse {
  return {
    subscriptions: [],
    pagination: undefined
  };
}
export const QuerySubscriptionsForPlanResponse = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanResponse",
  encode(message: QuerySubscriptionsForPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionsForPlanResponse {
    return {
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionsForPlanResponse>): QuerySubscriptionsForPlanResponse {
    const message = createBaseQuerySubscriptionsForPlanResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionsForPlanResponseAmino): QuerySubscriptionsForPlanResponse {
    const message = createBaseQuerySubscriptionsForPlanResponse();
    message.subscriptions = object.subscriptions?.map(e => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionsForPlanResponse): QuerySubscriptionsForPlanResponseAmino {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.subscriptions = message.subscriptions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionsForPlanResponseAminoMsg): QuerySubscriptionsForPlanResponse {
    return QuerySubscriptionsForPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionsForPlanResponseProtoMsg): QuerySubscriptionsForPlanResponse {
    return QuerySubscriptionsForPlanResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionsForPlanResponse): Uint8Array {
    return QuerySubscriptionsForPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsForPlanResponse): QuerySubscriptionsForPlanResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanResponse",
      value: QuerySubscriptionsForPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriptionResponse(): QuerySubscriptionResponse {
  return {
    subscription: undefined
  };
}
export const QuerySubscriptionResponse = {
  typeUrl: "/sentinel.subscription.v2.QuerySubscriptionResponse",
  encode(message: QuerySubscriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== undefined) {
      Any.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriptionResponse {
    return {
      subscription: isSet(object.subscription) ? Any.fromJSON(object.subscription) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    const message = createBaseQuerySubscriptionResponse();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Any.fromPartial(object.subscription) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriptionResponseAmino): QuerySubscriptionResponse {
    const message = createBaseQuerySubscriptionResponse();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = Any.fromAmino(object.subscription);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionResponse): QuerySubscriptionResponseAmino {
    const obj: any = {};
    obj.subscription = message.subscription ? Any.toAmino(message.subscription) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionResponseAminoMsg): QuerySubscriptionResponse {
    return QuerySubscriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionResponseProtoMsg): QuerySubscriptionResponse {
    return QuerySubscriptionResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionResponse): Uint8Array {
    return QuerySubscriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionResponse): QuerySubscriptionResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QuerySubscriptionResponse",
      value: QuerySubscriptionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationResponse(): QueryAllocationResponse {
  return {
    allocation: Allocation.fromPartial({})
  };
}
export const QueryAllocationResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationResponse",
  encode(message: QueryAllocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allocation !== undefined) {
      Allocation.encode(message.allocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllocationResponse {
    return {
      allocation: isSet(object.allocation) ? Allocation.fromJSON(object.allocation) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllocationResponse>): QueryAllocationResponse {
    const message = createBaseQueryAllocationResponse();
    message.allocation = object.allocation !== undefined && object.allocation !== null ? Allocation.fromPartial(object.allocation) : undefined;
    return message;
  },
  fromAmino(object: QueryAllocationResponseAmino): QueryAllocationResponse {
    const message = createBaseQueryAllocationResponse();
    if (object.allocation !== undefined && object.allocation !== null) {
      message.allocation = Allocation.fromAmino(object.allocation);
    }
    return message;
  },
  toAmino(message: QueryAllocationResponse): QueryAllocationResponseAmino {
    const obj: any = {};
    obj.allocation = message.allocation ? Allocation.toAmino(message.allocation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllocationResponseAminoMsg): QueryAllocationResponse {
    return QueryAllocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllocationResponseProtoMsg): QueryAllocationResponse {
    return QueryAllocationResponse.decode(message.value);
  },
  toProto(message: QueryAllocationResponse): Uint8Array {
    return QueryAllocationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationResponse): QueryAllocationResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryAllocationResponse",
      value: QueryAllocationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationsResponse(): QueryAllocationsResponse {
  return {
    allocations: [],
    pagination: undefined
  };
}
export const QueryAllocationsResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryAllocationsResponse",
  encode(message: QueryAllocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllocationsResponse {
    return {
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => Allocation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllocationsResponse>): QueryAllocationsResponse {
    const message = createBaseQueryAllocationsResponse();
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllocationsResponseAmino): QueryAllocationsResponse {
    const message = createBaseQueryAllocationsResponse();
    message.allocations = object.allocations?.map(e => Allocation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllocationsResponse): QueryAllocationsResponseAmino {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? Allocation.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllocationsResponseAminoMsg): QueryAllocationsResponse {
    return QueryAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllocationsResponseProtoMsg): QueryAllocationsResponse {
    return QueryAllocationsResponse.decode(message.value);
  },
  toProto(message: QueryAllocationsResponse): Uint8Array {
    return QueryAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationsResponse): QueryAllocationsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryAllocationsResponse",
      value: QueryAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutsResponse(): QueryPayoutsResponse {
  return {
    payouts: [],
    pagination: undefined
  };
}
export const QueryPayoutsResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsResponse",
  encode(message: QueryPayoutsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payouts) {
      Payout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutsResponse {
    return {
      payouts: Array.isArray(object?.payouts) ? object.payouts.map((e: any) => Payout.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutsResponse>): QueryPayoutsResponse {
    const message = createBaseQueryPayoutsResponse();
    message.payouts = object.payouts?.map(e => Payout.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutsResponseAmino): QueryPayoutsResponse {
    const message = createBaseQueryPayoutsResponse();
    message.payouts = object.payouts?.map(e => Payout.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutsResponse): QueryPayoutsResponseAmino {
    const obj: any = {};
    if (message.payouts) {
      obj.payouts = message.payouts.map(e => e ? Payout.toAmino(e) : undefined);
    } else {
      obj.payouts = message.payouts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutsResponseAminoMsg): QueryPayoutsResponse {
    return QueryPayoutsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutsResponseProtoMsg): QueryPayoutsResponse {
    return QueryPayoutsResponse.decode(message.value);
  },
  toProto(message: QueryPayoutsResponse): Uint8Array {
    return QueryPayoutsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutsResponse): QueryPayoutsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutsResponse",
      value: QueryPayoutsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutsForAccountResponse(): QueryPayoutsForAccountResponse {
  return {
    payouts: [],
    pagination: undefined
  };
}
export const QueryPayoutsForAccountResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountResponse",
  encode(message: QueryPayoutsForAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payouts) {
      Payout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutsForAccountResponse {
    return {
      payouts: Array.isArray(object?.payouts) ? object.payouts.map((e: any) => Payout.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutsForAccountResponse>): QueryPayoutsForAccountResponse {
    const message = createBaseQueryPayoutsForAccountResponse();
    message.payouts = object.payouts?.map(e => Payout.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutsForAccountResponseAmino): QueryPayoutsForAccountResponse {
    const message = createBaseQueryPayoutsForAccountResponse();
    message.payouts = object.payouts?.map(e => Payout.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutsForAccountResponse): QueryPayoutsForAccountResponseAmino {
    const obj: any = {};
    if (message.payouts) {
      obj.payouts = message.payouts.map(e => e ? Payout.toAmino(e) : undefined);
    } else {
      obj.payouts = message.payouts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutsForAccountResponseAminoMsg): QueryPayoutsForAccountResponse {
    return QueryPayoutsForAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutsForAccountResponseProtoMsg): QueryPayoutsForAccountResponse {
    return QueryPayoutsForAccountResponse.decode(message.value);
  },
  toProto(message: QueryPayoutsForAccountResponse): Uint8Array {
    return QueryPayoutsForAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutsForAccountResponse): QueryPayoutsForAccountResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountResponse",
      value: QueryPayoutsForAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutsForNodeResponse(): QueryPayoutsForNodeResponse {
  return {
    payouts: [],
    pagination: undefined
  };
}
export const QueryPayoutsForNodeResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeResponse",
  encode(message: QueryPayoutsForNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payouts) {
      Payout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutsForNodeResponse {
    return {
      payouts: Array.isArray(object?.payouts) ? object.payouts.map((e: any) => Payout.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutsForNodeResponse>): QueryPayoutsForNodeResponse {
    const message = createBaseQueryPayoutsForNodeResponse();
    message.payouts = object.payouts?.map(e => Payout.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutsForNodeResponseAmino): QueryPayoutsForNodeResponse {
    const message = createBaseQueryPayoutsForNodeResponse();
    message.payouts = object.payouts?.map(e => Payout.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutsForNodeResponse): QueryPayoutsForNodeResponseAmino {
    const obj: any = {};
    if (message.payouts) {
      obj.payouts = message.payouts.map(e => e ? Payout.toAmino(e) : undefined);
    } else {
      obj.payouts = message.payouts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutsForNodeResponseAminoMsg): QueryPayoutsForNodeResponse {
    return QueryPayoutsForNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutsForNodeResponseProtoMsg): QueryPayoutsForNodeResponse {
    return QueryPayoutsForNodeResponse.decode(message.value);
  },
  toProto(message: QueryPayoutsForNodeResponse): Uint8Array {
    return QueryPayoutsForNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutsForNodeResponse): QueryPayoutsForNodeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeResponse",
      value: QueryPayoutsForNodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPayoutResponse(): QueryPayoutResponse {
  return {
    payout: Payout.fromPartial({})
  };
}
export const QueryPayoutResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryPayoutResponse",
  encode(message: QueryPayoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payout !== undefined) {
      Payout.encode(message.payout, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPayoutResponse {
    return {
      payout: isSet(object.payout) ? Payout.fromJSON(object.payout) : undefined
    };
  },
  fromPartial(object: Partial<QueryPayoutResponse>): QueryPayoutResponse {
    const message = createBaseQueryPayoutResponse();
    message.payout = object.payout !== undefined && object.payout !== null ? Payout.fromPartial(object.payout) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutResponseAmino): QueryPayoutResponse {
    const message = createBaseQueryPayoutResponse();
    if (object.payout !== undefined && object.payout !== null) {
      message.payout = Payout.fromAmino(object.payout);
    }
    return message;
  },
  toAmino(message: QueryPayoutResponse): QueryPayoutResponseAmino {
    const obj: any = {};
    obj.payout = message.payout ? Payout.toAmino(message.payout) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutResponseAminoMsg): QueryPayoutResponse {
    return QueryPayoutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutResponseProtoMsg): QueryPayoutResponse {
    return QueryPayoutResponse.decode(message.value);
  },
  toProto(message: QueryPayoutResponse): Uint8Array {
    return QueryPayoutResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutResponse): QueryPayoutResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.QueryPayoutResponse",
      value: QueryPayoutResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/sentinel.subscription.v2.QueryParamsResponse",
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
      typeUrl: "/sentinel.subscription.v2.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};