import { Status, statusFromJSON } from "../../types/v1/status";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Node, NodeAmino, NodeSDKType } from "./node";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryNodesRequest {
  status: Status;
  pagination?: PageRequest;
}
export interface QueryNodesRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryNodesRequest";
  value: Uint8Array;
}
export interface QueryNodesRequestAmino {
  status?: Status;
  pagination?: PageRequestAmino;
}
export interface QueryNodesRequestAminoMsg {
  type: "/sentinel.node.v2.QueryNodesRequest";
  value: QueryNodesRequestAmino;
}
export interface QueryNodesRequestSDKType {
  status: Status;
  pagination?: PageRequestSDKType;
}
export interface QueryNodesForPlanRequest {
  id: bigint;
  status: Status;
  pagination?: PageRequest;
}
export interface QueryNodesForPlanRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryNodesForPlanRequest";
  value: Uint8Array;
}
export interface QueryNodesForPlanRequestAmino {
  id?: string;
  status?: Status;
  pagination?: PageRequestAmino;
}
export interface QueryNodesForPlanRequestAminoMsg {
  type: "/sentinel.node.v2.QueryNodesForPlanRequest";
  value: QueryNodesForPlanRequestAmino;
}
export interface QueryNodesForPlanRequestSDKType {
  id: bigint;
  status: Status;
  pagination?: PageRequestSDKType;
}
export interface QueryNodeRequest {
  address: string;
}
export interface QueryNodeRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryNodeRequest";
  value: Uint8Array;
}
export interface QueryNodeRequestAmino {
  address?: string;
}
export interface QueryNodeRequestAminoMsg {
  type: "/sentinel.node.v2.QueryNodeRequest";
  value: QueryNodeRequestAmino;
}
export interface QueryNodeRequestSDKType {
  address: string;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sentinel.node.v2.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryNodesResponse {
  nodes: Node[];
  pagination?: PageResponse;
}
export interface QueryNodesResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryNodesResponse";
  value: Uint8Array;
}
export interface QueryNodesResponseAmino {
  nodes?: NodeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryNodesResponseAminoMsg {
  type: "/sentinel.node.v2.QueryNodesResponse";
  value: QueryNodesResponseAmino;
}
export interface QueryNodesResponseSDKType {
  nodes: NodeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryNodesForPlanResponse {
  nodes: Node[];
  pagination?: PageResponse;
}
export interface QueryNodesForPlanResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryNodesForPlanResponse";
  value: Uint8Array;
}
export interface QueryNodesForPlanResponseAmino {
  nodes?: NodeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryNodesForPlanResponseAminoMsg {
  type: "/sentinel.node.v2.QueryNodesForPlanResponse";
  value: QueryNodesForPlanResponseAmino;
}
export interface QueryNodesForPlanResponseSDKType {
  nodes: NodeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryNodeResponse {
  node: Node;
}
export interface QueryNodeResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryNodeResponse";
  value: Uint8Array;
}
export interface QueryNodeResponseAmino {
  node?: NodeAmino;
}
export interface QueryNodeResponseAminoMsg {
  type: "/sentinel.node.v2.QueryNodeResponse";
  value: QueryNodeResponseAmino;
}
export interface QueryNodeResponseSDKType {
  node: NodeSDKType;
}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sentinel.node.v2.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryNodesRequest(): QueryNodesRequest {
  return {
    status: 0,
    pagination: undefined
  };
}
export const QueryNodesRequest = {
  typeUrl: "/sentinel.node.v2.QueryNodesRequest",
  encode(message: QueryNodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNodesRequest {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryNodesRequest>): QueryNodesRequest {
    const message = createBaseQueryNodesRequest();
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNodesRequestAmino): QueryNodesRequest {
    const message = createBaseQueryNodesRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNodesRequest): QueryNodesRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNodesRequestAminoMsg): QueryNodesRequest {
    return QueryNodesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodesRequestProtoMsg): QueryNodesRequest {
    return QueryNodesRequest.decode(message.value);
  },
  toProto(message: QueryNodesRequest): Uint8Array {
    return QueryNodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNodesRequest): QueryNodesRequestProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.QueryNodesRequest",
      value: QueryNodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNodesForPlanRequest(): QueryNodesForPlanRequest {
  return {
    id: BigInt(0),
    status: 0,
    pagination: undefined
  };
}
export const QueryNodesForPlanRequest = {
  typeUrl: "/sentinel.node.v2.QueryNodesForPlanRequest",
  encode(message: QueryNodesForPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNodesForPlanRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryNodesForPlanRequest>): QueryNodesForPlanRequest {
    const message = createBaseQueryNodesForPlanRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNodesForPlanRequestAmino): QueryNodesForPlanRequest {
    const message = createBaseQueryNodesForPlanRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNodesForPlanRequest): QueryNodesForPlanRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNodesForPlanRequestAminoMsg): QueryNodesForPlanRequest {
    return QueryNodesForPlanRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodesForPlanRequestProtoMsg): QueryNodesForPlanRequest {
    return QueryNodesForPlanRequest.decode(message.value);
  },
  toProto(message: QueryNodesForPlanRequest): Uint8Array {
    return QueryNodesForPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNodesForPlanRequest): QueryNodesForPlanRequestProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.QueryNodesForPlanRequest",
      value: QueryNodesForPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNodeRequest(): QueryNodeRequest {
  return {
    address: ""
  };
}
export const QueryNodeRequest = {
  typeUrl: "/sentinel.node.v2.QueryNodeRequest",
  encode(message: QueryNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryNodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryNodeRequest>): QueryNodeRequest {
    const message = createBaseQueryNodeRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryNodeRequestAmino): QueryNodeRequest {
    const message = createBaseQueryNodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryNodeRequest): QueryNodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryNodeRequestAminoMsg): QueryNodeRequest {
    return QueryNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodeRequestProtoMsg): QueryNodeRequest {
    return QueryNodeRequest.decode(message.value);
  },
  toProto(message: QueryNodeRequest): Uint8Array {
    return QueryNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNodeRequest): QueryNodeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.QueryNodeRequest",
      value: QueryNodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/sentinel.node.v2.QueryParamsRequest",
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
      typeUrl: "/sentinel.node.v2.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNodesResponse(): QueryNodesResponse {
  return {
    nodes: [],
    pagination: undefined
  };
}
export const QueryNodesResponse = {
  typeUrl: "/sentinel.node.v2.QueryNodesResponse",
  encode(message: QueryNodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNodesResponse {
    return {
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryNodesResponse>): QueryNodesResponse {
    const message = createBaseQueryNodesResponse();
    message.nodes = object.nodes?.map(e => Node.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNodesResponseAmino): QueryNodesResponse {
    const message = createBaseQueryNodesResponse();
    message.nodes = object.nodes?.map(e => Node.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNodesResponse): QueryNodesResponseAmino {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map(e => e ? Node.toAmino(e) : undefined);
    } else {
      obj.nodes = message.nodes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNodesResponseAminoMsg): QueryNodesResponse {
    return QueryNodesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodesResponseProtoMsg): QueryNodesResponse {
    return QueryNodesResponse.decode(message.value);
  },
  toProto(message: QueryNodesResponse): Uint8Array {
    return QueryNodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNodesResponse): QueryNodesResponseProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.QueryNodesResponse",
      value: QueryNodesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNodesForPlanResponse(): QueryNodesForPlanResponse {
  return {
    nodes: [],
    pagination: undefined
  };
}
export const QueryNodesForPlanResponse = {
  typeUrl: "/sentinel.node.v2.QueryNodesForPlanResponse",
  encode(message: QueryNodesForPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNodesForPlanResponse {
    return {
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryNodesForPlanResponse>): QueryNodesForPlanResponse {
    const message = createBaseQueryNodesForPlanResponse();
    message.nodes = object.nodes?.map(e => Node.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNodesForPlanResponseAmino): QueryNodesForPlanResponse {
    const message = createBaseQueryNodesForPlanResponse();
    message.nodes = object.nodes?.map(e => Node.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNodesForPlanResponse): QueryNodesForPlanResponseAmino {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map(e => e ? Node.toAmino(e) : undefined);
    } else {
      obj.nodes = message.nodes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNodesForPlanResponseAminoMsg): QueryNodesForPlanResponse {
    return QueryNodesForPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodesForPlanResponseProtoMsg): QueryNodesForPlanResponse {
    return QueryNodesForPlanResponse.decode(message.value);
  },
  toProto(message: QueryNodesForPlanResponse): Uint8Array {
    return QueryNodesForPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNodesForPlanResponse): QueryNodesForPlanResponseProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.QueryNodesForPlanResponse",
      value: QueryNodesForPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNodeResponse(): QueryNodeResponse {
  return {
    node: Node.fromPartial({})
  };
}
export const QueryNodeResponse = {
  typeUrl: "/sentinel.node.v2.QueryNodeResponse",
  encode(message: QueryNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNodeResponse {
    return {
      node: isSet(object.node) ? Node.fromJSON(object.node) : undefined
    };
  },
  fromPartial(object: Partial<QueryNodeResponse>): QueryNodeResponse {
    const message = createBaseQueryNodeResponse();
    message.node = object.node !== undefined && object.node !== null ? Node.fromPartial(object.node) : undefined;
    return message;
  },
  fromAmino(object: QueryNodeResponseAmino): QueryNodeResponse {
    const message = createBaseQueryNodeResponse();
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromAmino(object.node);
    }
    return message;
  },
  toAmino(message: QueryNodeResponse): QueryNodeResponseAmino {
    const obj: any = {};
    obj.node = message.node ? Node.toAmino(message.node) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNodeResponseAminoMsg): QueryNodeResponse {
    return QueryNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodeResponseProtoMsg): QueryNodeResponse {
    return QueryNodeResponse.decode(message.value);
  },
  toProto(message: QueryNodeResponse): Uint8Array {
    return QueryNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNodeResponse): QueryNodeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.QueryNodeResponse",
      value: QueryNodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/sentinel.node.v2.QueryParamsResponse",
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
      typeUrl: "/sentinel.node.v2.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};