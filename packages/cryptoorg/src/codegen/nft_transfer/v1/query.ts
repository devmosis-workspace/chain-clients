import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { ClassTrace, ClassTraceSDKType } from "./trace";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequest {
  /** hash (in hex format) or classID (full classID with ibc prefix) of the denomination trace information. */
  hash: string;
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
  classTrace?: ClassTrace;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponseSDKType {
  class_trace?: ClassTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponse {
  /** class_traces returns all class trace information. */
  classTraces: ClassTrace[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponseSDKType {
  class_traces: ClassTraceSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequest {
  /** The class trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
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
  encode(message: QueryClassTraceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryClassTraceResponse(): QueryClassTraceResponse {
  return {
    classTrace: undefined
  };
}
export const QueryClassTraceResponse = {
  encode(message: QueryClassTraceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryClassTracesRequest(): QueryClassTracesRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassTracesRequest = {
  encode(message: QueryClassTracesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryClassTracesResponse(): QueryClassTracesResponse {
  return {
    classTraces: [],
    pagination: undefined
  };
}
export const QueryClassTracesResponse = {
  encode(message: QueryClassTracesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryClassHashRequest(): QueryClassHashRequest {
  return {
    trace: ""
  };
}
export const QueryClassHashRequest = {
  encode(message: QueryClassHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryClassHashResponse(): QueryClassHashResponse {
  return {
    hash: ""
  };
}
export const QueryClassHashResponse = {
  encode(message: QueryClassHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryEscrowAddressRequest(): QueryEscrowAddressRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryEscrowAddressRequest = {
  encode(message: QueryEscrowAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryEscrowAddressResponse(): QueryEscrowAddressResponse {
  return {
    escrowAddress: ""
  };
}
export const QueryEscrowAddressResponse = {
  encode(message: QueryEscrowAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};