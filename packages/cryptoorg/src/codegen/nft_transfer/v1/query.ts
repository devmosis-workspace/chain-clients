import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { ClassTrace, ClassTraceAmino, ClassTraceSDKType } from "./trace";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequest {
  /** hash (in hex format) or classID (full classID with ibc prefix) of the denomination trace information. */
  hash: string;
}
export interface QueryClassTraceRequestProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceRequest";
  value: Uint8Array;
}
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequestAmino {
  /** hash (in hex format) or classID (full classID with ibc prefix) of the denomination trace information. */
  hash: string;
}
export interface QueryClassTraceRequestAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryClassTraceRequest";
  value: QueryClassTraceRequestAmino;
}
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequestSDKType {
  hash: string;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponse {
  /** class_trace returns the requested class trace information. */
  classTrace: ClassTrace;
}
export interface QueryClassTraceResponseProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceResponse";
  value: Uint8Array;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponseAmino {
  /** class_trace returns the requested class trace information. */
  class_trace?: ClassTraceAmino;
}
export interface QueryClassTraceResponseAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryClassTraceResponse";
  value: QueryClassTraceResponseAmino;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponseSDKType {
  class_trace: ClassTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryClassTracesRequestProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryClassTracesRequestAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryClassTracesRequest";
  value: QueryClassTracesRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponse {
  /** class_traces returns all class trace information. */
  classTraces: ClassTrace[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryClassTracesResponseProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesResponse";
  value: Uint8Array;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponseAmino {
  /** class_traces returns all class trace information. */
  class_traces: ClassTraceAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryClassTracesResponseAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryClassTracesResponse";
  value: QueryClassTracesResponseAmino;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponseSDKType {
  class_traces: ClassTraceSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequest {
  /** The class trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}
export interface QueryClassHashRequestProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashRequest";
  value: Uint8Array;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequestAmino {
  /** The class trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}
export interface QueryClassHashRequestAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryClassHashRequest";
  value: QueryClassHashRequestAmino;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequestSDKType {
  trace: string;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponse {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
export interface QueryClassHashResponseProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashResponse";
  value: Uint8Array;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponseAmino {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
export interface QueryClassHashResponseAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryClassHashResponse";
  value: QueryClassHashResponseAmino;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponseSDKType {
  hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
export interface QueryEscrowAddressRequestProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressRequest";
  value: Uint8Array;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestAmino {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
}
export interface QueryEscrowAddressRequestAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryEscrowAddressRequest";
  value: QueryEscrowAddressRequestAmino;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestSDKType {
  port_id: string;
  channel_id: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
  /** the escrow account address */
  escrowAddress: string;
}
export interface QueryEscrowAddressResponseProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressResponse";
  value: Uint8Array;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseAmino {
  /** the escrow account address */
  escrow_address: string;
}
export interface QueryEscrowAddressResponseAminoMsg {
  type: "/chainmain.nft_transfer.v1.QueryEscrowAddressResponse";
  value: QueryEscrowAddressResponseAmino;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseSDKType {
  escrow_address: string;
}
function createBaseQueryClassTraceRequest(): QueryClassTraceRequest {
  return {
    hash: ""
  };
}
export const QueryClassTraceRequest = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceRequest",
  encode(message: QueryClassTraceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): QueryClassTraceRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial(object: Partial<QueryClassTraceRequest>): QueryClassTraceRequest {
    const message = createBaseQueryClassTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryClassTraceRequestAmino): QueryClassTraceRequest {
    return {
      hash: object.hash
    };
  },
  toAmino(message: QueryClassTraceRequest): QueryClassTraceRequestAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryClassTraceRequestAminoMsg): QueryClassTraceRequest {
    return QueryClassTraceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassTraceRequestProtoMsg): QueryClassTraceRequest {
    return QueryClassTraceRequest.decode(message.value);
  },
  toProto(message: QueryClassTraceRequest): Uint8Array {
    return QueryClassTraceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassTraceRequest): QueryClassTraceRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceRequest",
      value: QueryClassTraceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassTraceResponse(): QueryClassTraceResponse {
  return {
    classTrace: ClassTrace.fromPartial({})
  };
}
export const QueryClassTraceResponse = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceResponse",
  encode(message: QueryClassTraceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classTrace !== undefined) {
      ClassTrace.encode(message.classTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassTraceResponse {
    return {
      classTrace: isSet(object.classTrace) ? ClassTrace.fromJSON(object.classTrace) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassTraceResponse>): QueryClassTraceResponse {
    const message = createBaseQueryClassTraceResponse();
    message.classTrace = object.classTrace !== undefined && object.classTrace !== null ? ClassTrace.fromPartial(object.classTrace) : undefined;
    return message;
  },
  fromAmino(object: QueryClassTraceResponseAmino): QueryClassTraceResponse {
    return {
      classTrace: object?.class_trace ? ClassTrace.fromAmino(object.class_trace) : undefined
    };
  },
  toAmino(message: QueryClassTraceResponse): QueryClassTraceResponseAmino {
    const obj: any = {};
    obj.class_trace = message.classTrace ? ClassTrace.toAmino(message.classTrace) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassTraceResponseAminoMsg): QueryClassTraceResponse {
    return QueryClassTraceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassTraceResponseProtoMsg): QueryClassTraceResponse {
    return QueryClassTraceResponse.decode(message.value);
  },
  toProto(message: QueryClassTraceResponse): Uint8Array {
    return QueryClassTraceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassTraceResponse): QueryClassTraceResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceResponse",
      value: QueryClassTraceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassTracesRequest(): QueryClassTracesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClassTracesRequest = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesRequest",
  encode(message: QueryClassTracesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassTracesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassTracesRequest>): QueryClassTracesRequest {
    const message = createBaseQueryClassTracesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassTracesRequestAmino): QueryClassTracesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClassTracesRequest): QueryClassTracesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassTracesRequestAminoMsg): QueryClassTracesRequest {
    return QueryClassTracesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassTracesRequestProtoMsg): QueryClassTracesRequest {
    return QueryClassTracesRequest.decode(message.value);
  },
  toProto(message: QueryClassTracesRequest): Uint8Array {
    return QueryClassTracesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassTracesRequest): QueryClassTracesRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesRequest",
      value: QueryClassTracesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassTracesResponse(): QueryClassTracesResponse {
  return {
    classTraces: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClassTracesResponse = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesResponse",
  encode(message: QueryClassTracesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classTraces) {
      ClassTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassTracesResponse {
    return {
      classTraces: Array.isArray(object?.classTraces) ? object.classTraces.map((e: any) => ClassTrace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassTracesResponse>): QueryClassTracesResponse {
    const message = createBaseQueryClassTracesResponse();
    message.classTraces = object.classTraces?.map(e => ClassTrace.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassTracesResponseAmino): QueryClassTracesResponse {
    return {
      classTraces: Array.isArray(object?.class_traces) ? object.class_traces.map((e: any) => ClassTrace.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClassTracesResponse): QueryClassTracesResponseAmino {
    const obj: any = {};
    if (message.classTraces) {
      obj.class_traces = message.classTraces.map(e => e ? ClassTrace.toAmino(e) : undefined);
    } else {
      obj.class_traces = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassTracesResponseAminoMsg): QueryClassTracesResponse {
    return QueryClassTracesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassTracesResponseProtoMsg): QueryClassTracesResponse {
    return QueryClassTracesResponse.decode(message.value);
  },
  toProto(message: QueryClassTracesResponse): Uint8Array {
    return QueryClassTracesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassTracesResponse): QueryClassTracesResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesResponse",
      value: QueryClassTracesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassHashRequest(): QueryClassHashRequest {
  return {
    trace: ""
  };
}
export const QueryClassHashRequest = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashRequest",
  encode(message: QueryClassHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  fromJSON(object: any): QueryClassHashRequest {
    return {
      trace: isSet(object.trace) ? String(object.trace) : ""
    };
  },
  fromPartial(object: Partial<QueryClassHashRequest>): QueryClassHashRequest {
    const message = createBaseQueryClassHashRequest();
    message.trace = object.trace ?? "";
    return message;
  },
  fromAmino(object: QueryClassHashRequestAmino): QueryClassHashRequest {
    return {
      trace: object.trace
    };
  },
  toAmino(message: QueryClassHashRequest): QueryClassHashRequestAmino {
    const obj: any = {};
    obj.trace = message.trace;
    return obj;
  },
  fromAminoMsg(object: QueryClassHashRequestAminoMsg): QueryClassHashRequest {
    return QueryClassHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassHashRequestProtoMsg): QueryClassHashRequest {
    return QueryClassHashRequest.decode(message.value);
  },
  toProto(message: QueryClassHashRequest): Uint8Array {
    return QueryClassHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassHashRequest): QueryClassHashRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashRequest",
      value: QueryClassHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassHashResponse(): QueryClassHashResponse {
  return {
    hash: ""
  };
}
export const QueryClassHashResponse = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashResponse",
  encode(message: QueryClassHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): QueryClassHashResponse {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial(object: Partial<QueryClassHashResponse>): QueryClassHashResponse {
    const message = createBaseQueryClassHashResponse();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryClassHashResponseAmino): QueryClassHashResponse {
    return {
      hash: object.hash
    };
  },
  toAmino(message: QueryClassHashResponse): QueryClassHashResponseAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryClassHashResponseAminoMsg): QueryClassHashResponse {
    return QueryClassHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassHashResponseProtoMsg): QueryClassHashResponse {
    return QueryClassHashResponse.decode(message.value);
  },
  toProto(message: QueryClassHashResponse): Uint8Array {
    return QueryClassHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassHashResponse): QueryClassHashResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashResponse",
      value: QueryClassHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowAddressRequest(): QueryEscrowAddressRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryEscrowAddressRequest = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressRequest",
  encode(message: QueryEscrowAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowAddressRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest {
    const message = createBaseQueryEscrowAddressRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryEscrowAddressRequestAmino): QueryEscrowAddressRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id
    };
  },
  toAmino(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowAddressRequestAminoMsg): QueryEscrowAddressRequest {
    return QueryEscrowAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscrowAddressRequestProtoMsg): QueryEscrowAddressRequest {
    return QueryEscrowAddressRequest.decode(message.value);
  },
  toProto(message: QueryEscrowAddressRequest): Uint8Array {
    return QueryEscrowAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressRequest",
      value: QueryEscrowAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowAddressResponse(): QueryEscrowAddressResponse {
  return {
    escrowAddress: ""
  };
}
export const QueryEscrowAddressResponse = {
  typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressResponse",
  encode(message: QueryEscrowAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.escrowAddress !== "") {
      writer.uint32(10).string(message.escrowAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowAddressResponse {
    return {
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse {
    const message = createBaseQueryEscrowAddressResponse();
    message.escrowAddress = object.escrowAddress ?? "";
    return message;
  },
  fromAmino(object: QueryEscrowAddressResponseAmino): QueryEscrowAddressResponse {
    return {
      escrowAddress: object.escrow_address
    };
  },
  toAmino(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAmino {
    const obj: any = {};
    obj.escrow_address = message.escrowAddress;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowAddressResponseAminoMsg): QueryEscrowAddressResponse {
    return QueryEscrowAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscrowAddressResponseProtoMsg): QueryEscrowAddressResponse {
    return QueryEscrowAddressResponse.decode(message.value);
  },
  toProto(message: QueryEscrowAddressResponse): Uint8Array {
    return QueryEscrowAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressResponse",
      value: QueryEscrowAddressResponse.encode(message).finish()
    };
  }
};