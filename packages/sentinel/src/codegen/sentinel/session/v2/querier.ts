import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Session, SessionAmino, SessionSDKType } from "./session";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QuerySessionsRequest {
  pagination?: PageRequest;
}
export interface QuerySessionsRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsRequest";
  value: Uint8Array;
}
export interface QuerySessionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QuerySessionsRequestAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsRequest";
  value: QuerySessionsRequestAmino;
}
export interface QuerySessionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QuerySessionsForAccountRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QuerySessionsForAccountRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAccountRequest";
  value: Uint8Array;
}
export interface QuerySessionsForAccountRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySessionsForAccountRequestAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForAccountRequest";
  value: QuerySessionsForAccountRequestAmino;
}
export interface QuerySessionsForAccountRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QuerySessionsForNodeRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QuerySessionsForNodeRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForNodeRequest";
  value: Uint8Array;
}
export interface QuerySessionsForNodeRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySessionsForNodeRequestAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForNodeRequest";
  value: QuerySessionsForNodeRequestAmino;
}
export interface QuerySessionsForNodeRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QuerySessionsForSubscriptionRequest {
  id: bigint;
  pagination?: PageRequest;
}
export interface QuerySessionsForSubscriptionRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionRequest";
  value: Uint8Array;
}
export interface QuerySessionsForSubscriptionRequestAmino {
  id?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySessionsForSubscriptionRequestAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForSubscriptionRequest";
  value: QuerySessionsForSubscriptionRequestAmino;
}
export interface QuerySessionsForSubscriptionRequestSDKType {
  id: bigint;
  pagination?: PageRequestSDKType;
}
export interface QuerySessionsForAllocationRequest {
  id: bigint;
  address: string;
  pagination?: PageRequest;
}
export interface QuerySessionsForAllocationRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationRequest";
  value: Uint8Array;
}
export interface QuerySessionsForAllocationRequestAmino {
  id?: string;
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySessionsForAllocationRequestAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForAllocationRequest";
  value: QuerySessionsForAllocationRequestAmino;
}
export interface QuerySessionsForAllocationRequestSDKType {
  id: bigint;
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QuerySessionRequest {
  id: bigint;
}
export interface QuerySessionRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionRequest";
  value: Uint8Array;
}
export interface QuerySessionRequestAmino {
  id?: string;
}
export interface QuerySessionRequestAminoMsg {
  type: "/sentinel.session.v2.QuerySessionRequest";
  value: QuerySessionRequestAmino;
}
export interface QuerySessionRequestSDKType {
  id: bigint;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sentinel.session.v2.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QuerySessionsResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsResponse";
  value: Uint8Array;
}
export interface QuerySessionsResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsResponseAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsResponse";
  value: QuerySessionsResponseAmino;
}
export interface QuerySessionsResponseSDKType {
  sessions: SessionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySessionsForAccountResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsForAccountResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAccountResponse";
  value: Uint8Array;
}
export interface QuerySessionsForAccountResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsForAccountResponseAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForAccountResponse";
  value: QuerySessionsForAccountResponseAmino;
}
export interface QuerySessionsForAccountResponseSDKType {
  sessions: SessionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySessionsForNodeResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsForNodeResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForNodeResponse";
  value: Uint8Array;
}
export interface QuerySessionsForNodeResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsForNodeResponseAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForNodeResponse";
  value: QuerySessionsForNodeResponseAmino;
}
export interface QuerySessionsForNodeResponseSDKType {
  sessions: SessionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySessionsForSubscriptionResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsForSubscriptionResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionResponse";
  value: Uint8Array;
}
export interface QuerySessionsForSubscriptionResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsForSubscriptionResponseAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForSubscriptionResponse";
  value: QuerySessionsForSubscriptionResponseAmino;
}
export interface QuerySessionsForSubscriptionResponseSDKType {
  sessions: SessionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySessionsForAllocationResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsForAllocationResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationResponse";
  value: Uint8Array;
}
export interface QuerySessionsForAllocationResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsForAllocationResponseAminoMsg {
  type: "/sentinel.session.v2.QuerySessionsForAllocationResponse";
  value: QuerySessionsForAllocationResponseAmino;
}
export interface QuerySessionsForAllocationResponseSDKType {
  sessions: SessionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySessionResponse {
  session: Session;
}
export interface QuerySessionResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QuerySessionResponse";
  value: Uint8Array;
}
export interface QuerySessionResponseAmino {
  session?: SessionAmino;
}
export interface QuerySessionResponseAminoMsg {
  type: "/sentinel.session.v2.QuerySessionResponse";
  value: QuerySessionResponseAmino;
}
export interface QuerySessionResponseSDKType {
  session: SessionSDKType;
}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sentinel.session.v2.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQuerySessionsRequest(): QuerySessionsRequest {
  return {
    pagination: undefined
  };
}
export const QuerySessionsRequest = {
  typeUrl: "/sentinel.session.v2.QuerySessionsRequest",
  encode(message: QuerySessionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsRequest>): QuerySessionsRequest {
    const message = createBaseQuerySessionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsRequestAmino): QuerySessionsRequest {
    const message = createBaseQuerySessionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsRequest): QuerySessionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsRequestAminoMsg): QuerySessionsRequest {
    return QuerySessionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsRequestProtoMsg): QuerySessionsRequest {
    return QuerySessionsRequest.decode(message.value);
  },
  toProto(message: QuerySessionsRequest): Uint8Array {
    return QuerySessionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsRequest): QuerySessionsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsRequest",
      value: QuerySessionsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForAccountRequest(): QuerySessionsForAccountRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QuerySessionsForAccountRequest = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAccountRequest",
  encode(message: QuerySessionsForAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForAccountRequest>): QuerySessionsForAccountRequest {
    const message = createBaseQuerySessionsForAccountRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForAccountRequestAmino): QuerySessionsForAccountRequest {
    const message = createBaseQuerySessionsForAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForAccountRequest): QuerySessionsForAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForAccountRequestAminoMsg): QuerySessionsForAccountRequest {
    return QuerySessionsForAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForAccountRequestProtoMsg): QuerySessionsForAccountRequest {
    return QuerySessionsForAccountRequest.decode(message.value);
  },
  toProto(message: QuerySessionsForAccountRequest): Uint8Array {
    return QuerySessionsForAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForAccountRequest): QuerySessionsForAccountRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForAccountRequest",
      value: QuerySessionsForAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForNodeRequest(): QuerySessionsForNodeRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QuerySessionsForNodeRequest = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForNodeRequest",
  encode(message: QuerySessionsForNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForNodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForNodeRequest>): QuerySessionsForNodeRequest {
    const message = createBaseQuerySessionsForNodeRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForNodeRequestAmino): QuerySessionsForNodeRequest {
    const message = createBaseQuerySessionsForNodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForNodeRequest): QuerySessionsForNodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForNodeRequestAminoMsg): QuerySessionsForNodeRequest {
    return QuerySessionsForNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForNodeRequestProtoMsg): QuerySessionsForNodeRequest {
    return QuerySessionsForNodeRequest.decode(message.value);
  },
  toProto(message: QuerySessionsForNodeRequest): Uint8Array {
    return QuerySessionsForNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForNodeRequest): QuerySessionsForNodeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForNodeRequest",
      value: QuerySessionsForNodeRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForSubscriptionRequest(): QuerySessionsForSubscriptionRequest {
  return {
    id: BigInt(0),
    pagination: undefined
  };
}
export const QuerySessionsForSubscriptionRequest = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionRequest",
  encode(message: QuerySessionsForSubscriptionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForSubscriptionRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForSubscriptionRequest>): QuerySessionsForSubscriptionRequest {
    const message = createBaseQuerySessionsForSubscriptionRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForSubscriptionRequestAmino): QuerySessionsForSubscriptionRequest {
    const message = createBaseQuerySessionsForSubscriptionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForSubscriptionRequest): QuerySessionsForSubscriptionRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForSubscriptionRequestAminoMsg): QuerySessionsForSubscriptionRequest {
    return QuerySessionsForSubscriptionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForSubscriptionRequestProtoMsg): QuerySessionsForSubscriptionRequest {
    return QuerySessionsForSubscriptionRequest.decode(message.value);
  },
  toProto(message: QuerySessionsForSubscriptionRequest): Uint8Array {
    return QuerySessionsForSubscriptionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForSubscriptionRequest): QuerySessionsForSubscriptionRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionRequest",
      value: QuerySessionsForSubscriptionRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForAllocationRequest(): QuerySessionsForAllocationRequest {
  return {
    id: BigInt(0),
    address: "",
    pagination: undefined
  };
}
export const QuerySessionsForAllocationRequest = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationRequest",
  encode(message: QuerySessionsForAllocationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForAllocationRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForAllocationRequest>): QuerySessionsForAllocationRequest {
    const message = createBaseQuerySessionsForAllocationRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForAllocationRequestAmino): QuerySessionsForAllocationRequest {
    const message = createBaseQuerySessionsForAllocationRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForAllocationRequest): QuerySessionsForAllocationRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForAllocationRequestAminoMsg): QuerySessionsForAllocationRequest {
    return QuerySessionsForAllocationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForAllocationRequestProtoMsg): QuerySessionsForAllocationRequest {
    return QuerySessionsForAllocationRequest.decode(message.value);
  },
  toProto(message: QuerySessionsForAllocationRequest): Uint8Array {
    return QuerySessionsForAllocationRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForAllocationRequest): QuerySessionsForAllocationRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationRequest",
      value: QuerySessionsForAllocationRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionRequest(): QuerySessionRequest {
  return {
    id: BigInt(0)
  };
}
export const QuerySessionRequest = {
  typeUrl: "/sentinel.session.v2.QuerySessionRequest",
  encode(message: QuerySessionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QuerySessionRequest>): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySessionRequestAmino): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QuerySessionRequest): QuerySessionRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionRequestAminoMsg): QuerySessionRequest {
    return QuerySessionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionRequestProtoMsg): QuerySessionRequest {
    return QuerySessionRequest.decode(message.value);
  },
  toProto(message: QuerySessionRequest): Uint8Array {
    return QuerySessionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionRequest): QuerySessionRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionRequest",
      value: QuerySessionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/sentinel.session.v2.QueryParamsRequest",
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
      typeUrl: "/sentinel.session.v2.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsResponse(): QuerySessionsResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
export const QuerySessionsResponse = {
  typeUrl: "/sentinel.session.v2.QuerySessionsResponse",
  encode(message: QuerySessionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsResponse {
    return {
      sessions: Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsResponse>): QuerySessionsResponse {
    const message = createBaseQuerySessionsResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsResponseAmino): QuerySessionsResponse {
    const message = createBaseQuerySessionsResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsResponse): QuerySessionsResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsResponseAminoMsg): QuerySessionsResponse {
    return QuerySessionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsResponseProtoMsg): QuerySessionsResponse {
    return QuerySessionsResponse.decode(message.value);
  },
  toProto(message: QuerySessionsResponse): Uint8Array {
    return QuerySessionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsResponse): QuerySessionsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsResponse",
      value: QuerySessionsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForAccountResponse(): QuerySessionsForAccountResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
export const QuerySessionsForAccountResponse = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAccountResponse",
  encode(message: QuerySessionsForAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForAccountResponse {
    return {
      sessions: Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForAccountResponse>): QuerySessionsForAccountResponse {
    const message = createBaseQuerySessionsForAccountResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForAccountResponseAmino): QuerySessionsForAccountResponse {
    const message = createBaseQuerySessionsForAccountResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForAccountResponse): QuerySessionsForAccountResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForAccountResponseAminoMsg): QuerySessionsForAccountResponse {
    return QuerySessionsForAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForAccountResponseProtoMsg): QuerySessionsForAccountResponse {
    return QuerySessionsForAccountResponse.decode(message.value);
  },
  toProto(message: QuerySessionsForAccountResponse): Uint8Array {
    return QuerySessionsForAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForAccountResponse): QuerySessionsForAccountResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForAccountResponse",
      value: QuerySessionsForAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForNodeResponse(): QuerySessionsForNodeResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
export const QuerySessionsForNodeResponse = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForNodeResponse",
  encode(message: QuerySessionsForNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForNodeResponse {
    return {
      sessions: Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForNodeResponse>): QuerySessionsForNodeResponse {
    const message = createBaseQuerySessionsForNodeResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForNodeResponseAmino): QuerySessionsForNodeResponse {
    const message = createBaseQuerySessionsForNodeResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForNodeResponse): QuerySessionsForNodeResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForNodeResponseAminoMsg): QuerySessionsForNodeResponse {
    return QuerySessionsForNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForNodeResponseProtoMsg): QuerySessionsForNodeResponse {
    return QuerySessionsForNodeResponse.decode(message.value);
  },
  toProto(message: QuerySessionsForNodeResponse): Uint8Array {
    return QuerySessionsForNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForNodeResponse): QuerySessionsForNodeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForNodeResponse",
      value: QuerySessionsForNodeResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForSubscriptionResponse(): QuerySessionsForSubscriptionResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
export const QuerySessionsForSubscriptionResponse = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionResponse",
  encode(message: QuerySessionsForSubscriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForSubscriptionResponse {
    return {
      sessions: Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForSubscriptionResponse>): QuerySessionsForSubscriptionResponse {
    const message = createBaseQuerySessionsForSubscriptionResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForSubscriptionResponseAmino): QuerySessionsForSubscriptionResponse {
    const message = createBaseQuerySessionsForSubscriptionResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForSubscriptionResponse): QuerySessionsForSubscriptionResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForSubscriptionResponseAminoMsg): QuerySessionsForSubscriptionResponse {
    return QuerySessionsForSubscriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForSubscriptionResponseProtoMsg): QuerySessionsForSubscriptionResponse {
    return QuerySessionsForSubscriptionResponse.decode(message.value);
  },
  toProto(message: QuerySessionsForSubscriptionResponse): Uint8Array {
    return QuerySessionsForSubscriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForSubscriptionResponse): QuerySessionsForSubscriptionResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForSubscriptionResponse",
      value: QuerySessionsForSubscriptionResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsForAllocationResponse(): QuerySessionsForAllocationResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
export const QuerySessionsForAllocationResponse = {
  typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationResponse",
  encode(message: QuerySessionsForAllocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionsForAllocationResponse {
    return {
      sessions: Array.isArray(object?.sessions) ? object.sessions.map((e: any) => Session.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionsForAllocationResponse>): QuerySessionsForAllocationResponse {
    const message = createBaseQuerySessionsForAllocationResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsForAllocationResponseAmino): QuerySessionsForAllocationResponse {
    const message = createBaseQuerySessionsForAllocationResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsForAllocationResponse): QuerySessionsForAllocationResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsForAllocationResponseAminoMsg): QuerySessionsForAllocationResponse {
    return QuerySessionsForAllocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsForAllocationResponseProtoMsg): QuerySessionsForAllocationResponse {
    return QuerySessionsForAllocationResponse.decode(message.value);
  },
  toProto(message: QuerySessionsForAllocationResponse): Uint8Array {
    return QuerySessionsForAllocationResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsForAllocationResponse): QuerySessionsForAllocationResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionsForAllocationResponse",
      value: QuerySessionsForAllocationResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionResponse(): QuerySessionResponse {
  return {
    session: Session.fromPartial({})
  };
}
export const QuerySessionResponse = {
  typeUrl: "/sentinel.session.v2.QuerySessionResponse",
  encode(message: QuerySessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySessionResponse {
    return {
      session: isSet(object.session) ? Session.fromJSON(object.session) : undefined
    };
  },
  fromPartial(object: Partial<QuerySessionResponse>): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    message.session = object.session !== undefined && object.session !== null ? Session.fromPartial(object.session) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionResponseAmino): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromAmino(object.session);
    }
    return message;
  },
  toAmino(message: QuerySessionResponse): QuerySessionResponseAmino {
    const obj: any = {};
    obj.session = message.session ? Session.toAmino(message.session) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionResponseAminoMsg): QuerySessionResponse {
    return QuerySessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionResponseProtoMsg): QuerySessionResponse {
    return QuerySessionResponse.decode(message.value);
  },
  toProto(message: QuerySessionResponse): Uint8Array {
    return QuerySessionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionResponse): QuerySessionResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.QuerySessionResponse",
      value: QuerySessionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/sentinel.session.v2.QueryParamsResponse",
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
      typeUrl: "/sentinel.session.v2.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};