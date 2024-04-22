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
  path?: string;
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
  value?: string;
}
export interface QueryDataResponseAminoMsg {
  type: "/agoric.vstorage.QueryDataResponse";
  value: QueryDataResponseAmino;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseSDKType {
  value: string;
}
/** QueryCapDataRequest contains a path and formatting configuration. */
export interface QueryCapDataRequest {
  path: string;
  /**
   * mediaType must be an actual media type in the registry at
   * https://www.iana.org/assignments/media-types/media-types.xhtml
   * or a special value that does not conflict with the media type syntax.
   * The only valid value is "JSON Lines", which is also the default.
   */
  mediaType: string;
  /**
   * itemFormat, if present, must be the special value "flat" to indicate that
   * the deep structure of each item should be flattened into a single level
   * with kebab-case keys (e.g., `{ "metrics": { "min": 0, "max": 88 } }` as
   * `{ "metrics-min": 0, "metrics-max": 88 }`).
   */
  itemFormat: string;
  /**
   * remotableValueFormat indicates how to transform references to opaque but
   * distinguishable Remotables into readable embedded representations.
   * * "object" represents each Remotable as an `{ id, allegedName }` object, e.g. `{ "id": "board007", "allegedName": "IST brand" }`.
   * * "string" represents each Remotable as a string with bracket-wrapped contents including its alleged name and id, e.g. "[Alleged: IST brand <board007>]".
   */
  remotableValueFormat: string;
}
export interface QueryCapDataRequestProtoMsg {
  typeUrl: "/agoric.vstorage.QueryCapDataRequest";
  value: Uint8Array;
}
/** QueryCapDataRequest contains a path and formatting configuration. */
export interface QueryCapDataRequestAmino {
  path?: string;
  /**
   * mediaType must be an actual media type in the registry at
   * https://www.iana.org/assignments/media-types/media-types.xhtml
   * or a special value that does not conflict with the media type syntax.
   * The only valid value is "JSON Lines", which is also the default.
   */
  media_type?: string;
  /**
   * itemFormat, if present, must be the special value "flat" to indicate that
   * the deep structure of each item should be flattened into a single level
   * with kebab-case keys (e.g., `{ "metrics": { "min": 0, "max": 88 } }` as
   * `{ "metrics-min": 0, "metrics-max": 88 }`).
   */
  item_format?: string;
  /**
   * remotableValueFormat indicates how to transform references to opaque but
   * distinguishable Remotables into readable embedded representations.
   * * "object" represents each Remotable as an `{ id, allegedName }` object, e.g. `{ "id": "board007", "allegedName": "IST brand" }`.
   * * "string" represents each Remotable as a string with bracket-wrapped contents including its alleged name and id, e.g. "[Alleged: IST brand <board007>]".
   */
  remotable_value_format?: string;
}
export interface QueryCapDataRequestAminoMsg {
  type: "/agoric.vstorage.QueryCapDataRequest";
  value: QueryCapDataRequestAmino;
}
/** QueryCapDataRequest contains a path and formatting configuration. */
export interface QueryCapDataRequestSDKType {
  path: string;
  media_type: string;
  item_format: string;
  remotable_value_format: string;
}
/**
 * QueryCapDataResponse represents the result with the requested formatting,
 * reserving space for future metadata such as media type.
 */
export interface QueryCapDataResponse {
  blockHeight: string;
  value: string;
}
export interface QueryCapDataResponseProtoMsg {
  typeUrl: "/agoric.vstorage.QueryCapDataResponse";
  value: Uint8Array;
}
/**
 * QueryCapDataResponse represents the result with the requested formatting,
 * reserving space for future metadata such as media type.
 */
export interface QueryCapDataResponseAmino {
  block_height?: string;
  value?: string;
}
export interface QueryCapDataResponseAminoMsg {
  type: "/agoric.vstorage.QueryCapDataResponse";
  value: QueryCapDataResponseAmino;
}
/**
 * QueryCapDataResponse represents the result with the requested formatting,
 * reserving space for future metadata such as media type.
 */
export interface QueryCapDataResponseSDKType {
  block_height: string;
  value: string;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequest {
  path: string;
  pagination?: PageRequest;
}
export interface QueryChildrenRequestProtoMsg {
  typeUrl: "/agoric.vstorage.QueryChildrenRequest";
  value: Uint8Array;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestAmino {
  path?: string;
  pagination?: PageRequestAmino;
}
export interface QueryChildrenRequestAminoMsg {
  type: "/agoric.vstorage.QueryChildrenRequest";
  value: QueryChildrenRequestAmino;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestSDKType {
  path: string;
  pagination?: PageRequestSDKType;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponse {
  children: string[];
  pagination?: PageResponse;
}
export interface QueryChildrenResponseProtoMsg {
  typeUrl: "/agoric.vstorage.QueryChildrenResponse";
  value: Uint8Array;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseAmino {
  children?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryChildrenResponseAminoMsg {
  type: "/agoric.vstorage.QueryChildrenResponse";
  value: QueryChildrenResponseAmino;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseSDKType {
  children: string[];
  pagination?: PageResponseSDKType;
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
    const message = createBaseQueryDataRequest();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    return message;
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
    const message = createBaseQueryDataResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
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
function createBaseQueryCapDataRequest(): QueryCapDataRequest {
  return {
    path: "",
    mediaType: "",
    itemFormat: "",
    remotableValueFormat: ""
  };
}
export const QueryCapDataRequest = {
  typeUrl: "/agoric.vstorage.QueryCapDataRequest",
  encode(message: QueryCapDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.mediaType !== "") {
      writer.uint32(18).string(message.mediaType);
    }
    if (message.itemFormat !== "") {
      writer.uint32(26).string(message.itemFormat);
    }
    if (message.remotableValueFormat !== "") {
      writer.uint32(82).string(message.remotableValueFormat);
    }
    return writer;
  },
  fromJSON(object: any): QueryCapDataRequest {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      mediaType: isSet(object.mediaType) ? String(object.mediaType) : "",
      itemFormat: isSet(object.itemFormat) ? String(object.itemFormat) : "",
      remotableValueFormat: isSet(object.remotableValueFormat) ? String(object.remotableValueFormat) : ""
    };
  },
  fromPartial(object: Partial<QueryCapDataRequest>): QueryCapDataRequest {
    const message = createBaseQueryCapDataRequest();
    message.path = object.path ?? "";
    message.mediaType = object.mediaType ?? "";
    message.itemFormat = object.itemFormat ?? "";
    message.remotableValueFormat = object.remotableValueFormat ?? "";
    return message;
  },
  fromAmino(object: QueryCapDataRequestAmino): QueryCapDataRequest {
    const message = createBaseQueryCapDataRequest();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.media_type !== undefined && object.media_type !== null) {
      message.mediaType = object.media_type;
    }
    if (object.item_format !== undefined && object.item_format !== null) {
      message.itemFormat = object.item_format;
    }
    if (object.remotable_value_format !== undefined && object.remotable_value_format !== null) {
      message.remotableValueFormat = object.remotable_value_format;
    }
    return message;
  },
  toAmino(message: QueryCapDataRequest): QueryCapDataRequestAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.media_type = message.mediaType;
    obj.item_format = message.itemFormat;
    obj.remotable_value_format = message.remotableValueFormat;
    return obj;
  },
  fromAminoMsg(object: QueryCapDataRequestAminoMsg): QueryCapDataRequest {
    return QueryCapDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCapDataRequestProtoMsg): QueryCapDataRequest {
    return QueryCapDataRequest.decode(message.value);
  },
  toProto(message: QueryCapDataRequest): Uint8Array {
    return QueryCapDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCapDataRequest): QueryCapDataRequestProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.QueryCapDataRequest",
      value: QueryCapDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCapDataResponse(): QueryCapDataResponse {
  return {
    blockHeight: "",
    value: ""
  };
}
export const QueryCapDataResponse = {
  typeUrl: "/agoric.vstorage.QueryCapDataResponse",
  encode(message: QueryCapDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== "") {
      writer.uint32(10).string(message.blockHeight);
    }
    if (message.value !== "") {
      writer.uint32(82).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryCapDataResponse {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<QueryCapDataResponse>): QueryCapDataResponse {
    const message = createBaseQueryCapDataResponse();
    message.blockHeight = object.blockHeight ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryCapDataResponseAmino): QueryCapDataResponse {
    const message = createBaseQueryCapDataResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = object.block_height;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryCapDataResponse): QueryCapDataResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: QueryCapDataResponseAminoMsg): QueryCapDataResponse {
    return QueryCapDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCapDataResponseProtoMsg): QueryCapDataResponse {
    return QueryCapDataResponse.decode(message.value);
  },
  toProto(message: QueryCapDataResponse): Uint8Array {
    return QueryCapDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCapDataResponse): QueryCapDataResponseProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.QueryCapDataResponse",
      value: QueryCapDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChildrenRequest(): QueryChildrenRequest {
  return {
    path: "",
    pagination: undefined
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
    const message = createBaseQueryChildrenRequest();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    pagination: undefined
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
    const message = createBaseQueryChildrenResponse();
    message.children = object.children?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
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