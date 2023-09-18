import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequest {
  path: string;
}
export interface QueryDataRequestProtoMsg {
  typeUrl: "/agoric.vstorage.QueryDataRequest";
  value: Uint8Array;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestAmino {
  path: string;
}
export interface QueryDataRequestAminoMsg {
  type: "/agoric.vstorage.QueryDataRequest";
  value: QueryDataRequestAmino;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestSDKType {
  path: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponse {
  value: string;
}
export interface QueryDataResponseProtoMsg {
  typeUrl: "/agoric.vstorage.QueryDataResponse";
  value: Uint8Array;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseAmino {
  value: string;
}
export interface QueryDataResponseAminoMsg {
  type: "/agoric.vstorage.QueryDataResponse";
  value: QueryDataResponseAmino;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseSDKType {
  value: string;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequest {
  path: string;
  pagination: PageRequest;
}
export interface QueryChildrenRequestProtoMsg {
  typeUrl: "/agoric.vstorage.QueryChildrenRequest";
  value: Uint8Array;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestAmino {
  path: string;
  pagination?: PageRequestAmino;
}
export interface QueryChildrenRequestAminoMsg {
  type: "/agoric.vstorage.QueryChildrenRequest";
  value: QueryChildrenRequestAmino;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestSDKType {
  path: string;
  pagination: PageRequestSDKType;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponse {
  children: string[];
  pagination: PageResponse;
}
export interface QueryChildrenResponseProtoMsg {
  typeUrl: "/agoric.vstorage.QueryChildrenResponse";
  value: Uint8Array;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseAmino {
  children: string[];
  pagination?: PageResponseAmino;
}
export interface QueryChildrenResponseAminoMsg {
  type: "/agoric.vstorage.QueryChildrenResponse";
  value: QueryChildrenResponseAmino;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseSDKType {
  children: string[];
  pagination: PageResponseSDKType;
}
function createBaseQueryDataRequest(): QueryDataRequest {
  return {
    path: ""
  };
}
export const QueryDataRequest = {
  typeUrl: "/agoric.vstorage.QueryDataRequest",
  encode(message: QueryDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },
  fromJSON(object: any): QueryDataRequest {
    return {
      path: isSet(object.path) ? String(object.path) : ""
    };
  },
  fromPartial(object: Partial<QueryDataRequest>): QueryDataRequest {
    const message = createBaseQueryDataRequest();
    message.path = object.path ?? "";
    return message;
  },
  fromAmino(object: QueryDataRequestAmino): QueryDataRequest {
    return {
      path: object.path
    };
  },
  toAmino(message: QueryDataRequest): QueryDataRequestAmino {
    const obj: any = {};
    obj.path = message.path;
    return obj;
  },
  fromAminoMsg(object: QueryDataRequestAminoMsg): QueryDataRequest {
    return QueryDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataRequestProtoMsg): QueryDataRequest {
    return QueryDataRequest.decode(message.value);
  },
  toProto(message: QueryDataRequest): Uint8Array {
    return QueryDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDataRequest): QueryDataRequestProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.QueryDataRequest",
      value: QueryDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDataResponse(): QueryDataResponse {
  return {
    value: ""
  };
}
export const QueryDataResponse = {
  typeUrl: "/agoric.vstorage.QueryDataResponse",
  encode(message: QueryDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryDataResponse {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<QueryDataResponse>): QueryDataResponse {
    const message = createBaseQueryDataResponse();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryDataResponseAmino): QueryDataResponse {
    return {
      value: object.value
    };
  },
  toAmino(message: QueryDataResponse): QueryDataResponseAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: QueryDataResponseAminoMsg): QueryDataResponse {
    return QueryDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataResponseProtoMsg): QueryDataResponse {
    return QueryDataResponse.decode(message.value);
  },
  toProto(message: QueryDataResponse): Uint8Array {
    return QueryDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDataResponse): QueryDataResponseProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.QueryDataResponse",
      value: QueryDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChildrenRequest(): QueryChildrenRequest {
  return {
    path: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryChildrenRequest = {
  typeUrl: "/agoric.vstorage.QueryChildrenRequest",
  encode(message: QueryChildrenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryChildrenRequest {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryChildrenRequest>): QueryChildrenRequest {
    const message = createBaseQueryChildrenRequest();
    message.path = object.path ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChildrenRequestAmino): QueryChildrenRequest {
    return {
      path: object.path,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryChildrenRequest): QueryChildrenRequestAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChildrenRequestAminoMsg): QueryChildrenRequest {
    return QueryChildrenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChildrenRequestProtoMsg): QueryChildrenRequest {
    return QueryChildrenRequest.decode(message.value);
  },
  toProto(message: QueryChildrenRequest): Uint8Array {
    return QueryChildrenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChildrenRequest): QueryChildrenRequestProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.QueryChildrenRequest",
      value: QueryChildrenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChildrenResponse(): QueryChildrenResponse {
  return {
    children: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryChildrenResponse = {
  typeUrl: "/agoric.vstorage.QueryChildrenResponse",
  encode(message: QueryChildrenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.children) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryChildrenResponse {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryChildrenResponse>): QueryChildrenResponse {
    const message = createBaseQueryChildrenResponse();
    message.children = object.children?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChildrenResponseAmino): QueryChildrenResponse {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryChildrenResponse): QueryChildrenResponseAmino {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e);
    } else {
      obj.children = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChildrenResponseAminoMsg): QueryChildrenResponse {
    return QueryChildrenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChildrenResponseProtoMsg): QueryChildrenResponse {
    return QueryChildrenResponse.decode(message.value);
  },
  toProto(message: QueryChildrenResponse): Uint8Array {
    return QueryChildrenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChildrenResponse): QueryChildrenResponseProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.QueryChildrenResponse",
      value: QueryChildrenResponse.encode(message).finish()
    };
  }
};