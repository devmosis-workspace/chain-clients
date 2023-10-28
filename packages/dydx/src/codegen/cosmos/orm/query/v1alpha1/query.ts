import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../../helpers";
/** GetRequest is the Query/Get request type. */
export interface GetRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values: IndexValue[];
}
export interface GetRequestProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest";
  value: Uint8Array;
}
/** GetRequest is the Query/Get request type. */
export interface GetRequestAmino {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  message_name: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values: IndexValueAmino[];
}
export interface GetRequestAminoMsg {
  type: "cosmos-sdk/GetRequest";
  value: GetRequestAmino;
}
/** GetRequest is the Query/Get request type. */
export interface GetRequestSDKType {
  message_name: string;
  index: string;
  values: IndexValueSDKType[];
}
/** GetResponse is the Query/Get response type. */
export interface GetResponse {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result: Any;
}
export interface GetResponseProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse";
  value: Uint8Array;
}
/** GetResponse is the Query/Get response type. */
export interface GetResponseAmino {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result?: AnyAmino;
}
export interface GetResponseAminoMsg {
  type: "cosmos-sdk/GetResponse";
  value: GetResponseAmino;
}
/** GetResponse is the Query/Get response type. */
export interface GetResponseSDKType {
  result: AnySDKType;
}
/** ListRequest is the Query/List request type. */
export interface ListRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_Prefix;
  /** range defines a range query. */
  range?: ListRequest_Range;
  /** pagination is the pagination request. */
  pagination: PageRequest;
}
export interface ListRequestProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest";
  value: Uint8Array;
}
/** ListRequest is the Query/List request type. */
export interface ListRequestAmino {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  message_name: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_PrefixAmino;
  /** range defines a range query. */
  range?: ListRequest_RangeAmino;
  /** pagination is the pagination request. */
  pagination?: PageRequestAmino;
}
export interface ListRequestAminoMsg {
  type: "cosmos-sdk/ListRequest";
  value: ListRequestAmino;
}
/** ListRequest is the Query/List request type. */
export interface ListRequestSDKType {
  message_name: string;
  index: string;
  prefix?: ListRequest_PrefixSDKType;
  range?: ListRequest_RangeSDKType;
  pagination: PageRequestSDKType;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values: IndexValue[];
}
export interface ListRequest_PrefixProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.Prefix";
  value: Uint8Array;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_PrefixAmino {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values: IndexValueAmino[];
}
export interface ListRequest_PrefixAminoMsg {
  type: "cosmos-sdk/Prefix";
  value: ListRequest_PrefixAmino;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_PrefixSDKType {
  values: IndexValueSDKType[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start: IndexValue[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end: IndexValue[];
}
export interface ListRequest_RangeProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.Range";
  value: Uint8Array;
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_RangeAmino {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start: IndexValueAmino[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end: IndexValueAmino[];
}
export interface ListRequest_RangeAminoMsg {
  type: "cosmos-sdk/Range";
  value: ListRequest_RangeAmino;
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_RangeSDKType {
  start: IndexValueSDKType[];
  end: IndexValueSDKType[];
}
/** ListResponse is the Query/List response type. */
export interface ListResponse {
  /** results are the results of the query. */
  results: Any[];
  /** pagination is the pagination response. */
  pagination: PageResponse;
}
export interface ListResponseProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse";
  value: Uint8Array;
}
/** ListResponse is the Query/List response type. */
export interface ListResponseAmino {
  /** results are the results of the query. */
  results: AnyAmino[];
  /** pagination is the pagination response. */
  pagination?: PageResponseAmino;
}
export interface ListResponseAminoMsg {
  type: "cosmos-sdk/ListResponse";
  value: ListResponseAmino;
}
/** ListResponse is the Query/List response type. */
export interface ListResponseSDKType {
  results: AnySDKType[];
  pagination: PageResponseSDKType;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: bigint;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: bigint;
  /** str specifies a value for a string index field. */
  str?: string;
  /** bytes specifies a value for a bytes index field. */
  bytes?: Uint8Array;
  /** enum specifies a value for an enum index field. */
  enum?: string;
  /** bool specifies a value for a bool index field. */
  bool?: boolean;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: Timestamp;
  /** duration specifies a value for a duration index field. */
  duration?: Duration;
}
export interface IndexValueProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue";
  value: Uint8Array;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValueAmino {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: string;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: string;
  /** str specifies a value for a string index field. */
  str?: string;
  /** bytes specifies a value for a bytes index field. */
  bytes?: Uint8Array;
  /** enum specifies a value for an enum index field. */
  enum?: string;
  /** bool specifies a value for a bool index field. */
  bool?: boolean;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: TimestampAmino;
  /** duration specifies a value for a duration index field. */
  duration?: DurationAmino;
}
export interface IndexValueAminoMsg {
  type: "cosmos-sdk/IndexValue";
  value: IndexValueAmino;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValueSDKType {
  uint?: bigint;
  int?: bigint;
  str?: string;
  bytes?: Uint8Array;
  enum?: string;
  bool?: boolean;
  timestamp?: TimestampSDKType;
  duration?: DurationSDKType;
}
function createBaseGetRequest(): GetRequest {
  return {
    messageName: "",
    index: "",
    values: []
  };
}
export const GetRequest = {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
  encode(message: GetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GetRequest>): GetRequest {
    const message = createBaseGetRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetRequestAmino): GetRequest {
    return {
      messageName: object.message_name,
      index: object.index,
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromAmino(e)) : []
    };
  },
  toAmino(message: GetRequest): GetRequestAmino {
    const obj: any = {};
    obj.message_name = message.messageName;
    obj.index = message.index;
    if (message.values) {
      obj.values = message.values.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object: GetRequestAminoMsg): GetRequest {
    return GetRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetRequest): GetRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetRequest",
      value: GetRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetRequestProtoMsg): GetRequest {
    return GetRequest.decode(message.value);
  },
  toProto(message: GetRequest): Uint8Array {
    return GetRequest.encode(message).finish();
  },
  toProtoMsg(message: GetRequest): GetRequestProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
      value: GetRequest.encode(message).finish()
    };
  }
};
function createBaseGetResponse(): GetResponse {
  return {
    result: Any.fromPartial({})
  };
}
export const GetResponse = {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
  encode(message: GetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetResponse {
    return {
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<GetResponse>): GetResponse {
    const message = createBaseGetResponse();
    message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: GetResponseAmino): GetResponse {
    return {
      result: object?.result ? Any.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: GetResponse): GetResponseAmino {
    const obj: any = {};
    obj.result = message.result ? Any.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetResponseAminoMsg): GetResponse {
    return GetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetResponse): GetResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetResponse",
      value: GetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetResponseProtoMsg): GetResponse {
    return GetResponse.decode(message.value);
  },
  toProto(message: GetResponse): Uint8Array {
    return GetResponse.encode(message).finish();
  },
  toProtoMsg(message: GetResponse): GetResponseProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
      value: GetResponse.encode(message).finish()
    };
  }
};
function createBaseListRequest(): ListRequest {
  return {
    messageName: "",
    index: "",
    prefix: undefined,
    range: undefined,
    pagination: PageRequest.fromPartial({})
  };
}
export const ListRequest = {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
  encode(message: ListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== undefined) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== undefined) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      prefix: isSet(object.prefix) ? ListRequest_Prefix.fromJSON(object.prefix) : undefined,
      range: isSet(object.range) ? ListRequest_Range.fromJSON(object.range) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<ListRequest>): ListRequest {
    const message = createBaseListRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : undefined;
    message.range = object.range !== undefined && object.range !== null ? ListRequest_Range.fromPartial(object.range) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ListRequestAmino): ListRequest {
    return {
      messageName: object.message_name,
      index: object.index,
      prefix: object?.prefix ? ListRequest_Prefix.fromAmino(object.prefix) : undefined,
      range: object?.range ? ListRequest_Range.fromAmino(object.range) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: ListRequest): ListRequestAmino {
    const obj: any = {};
    obj.message_name = message.messageName;
    obj.index = message.index;
    obj.prefix = message.prefix ? ListRequest_Prefix.toAmino(message.prefix) : undefined;
    obj.range = message.range ? ListRequest_Range.toAmino(message.range) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListRequestAminoMsg): ListRequest {
    return ListRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest): ListRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListRequest",
      value: ListRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListRequestProtoMsg): ListRequest {
    return ListRequest.decode(message.value);
  },
  toProto(message: ListRequest): Uint8Array {
    return ListRequest.encode(message).finish();
  },
  toProtoMsg(message: ListRequest): ListRequestProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
      value: ListRequest.encode(message).finish()
    };
  }
};
function createBaseListRequest_Prefix(): ListRequest_Prefix {
  return {
    values: []
  };
}
export const ListRequest_Prefix = {
  typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
  encode(message: ListRequest_Prefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListRequest_Prefix {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ListRequest_Prefix>): ListRequest_Prefix {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListRequest_PrefixAmino): ListRequest_Prefix {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromAmino(e)) : []
    };
  },
  toAmino(message: ListRequest_Prefix): ListRequest_PrefixAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListRequest_PrefixAminoMsg): ListRequest_Prefix {
    return ListRequest_Prefix.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest_Prefix): ListRequest_PrefixAminoMsg {
    return {
      type: "cosmos-sdk/Prefix",
      value: ListRequest_Prefix.toAmino(message)
    };
  },
  fromProtoMsg(message: ListRequest_PrefixProtoMsg): ListRequest_Prefix {
    return ListRequest_Prefix.decode(message.value);
  },
  toProto(message: ListRequest_Prefix): Uint8Array {
    return ListRequest_Prefix.encode(message).finish();
  },
  toProtoMsg(message: ListRequest_Prefix): ListRequest_PrefixProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
      value: ListRequest_Prefix.encode(message).finish()
    };
  }
};
function createBaseListRequest_Range(): ListRequest_Range {
  return {
    start: [],
    end: []
  };
}
export const ListRequest_Range = {
  typeUrl: "/cosmos.orm.query.v1alpha1.Range",
  encode(message: ListRequest_Range, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.start) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListRequest_Range {
    return {
      start: Array.isArray(object?.start) ? object.start.map((e: any) => IndexValue.fromJSON(e)) : [],
      end: Array.isArray(object?.end) ? object.end.map((e: any) => IndexValue.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ListRequest_Range>): ListRequest_Range {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map(e => IndexValue.fromPartial(e)) || [];
    message.end = object.end?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListRequest_RangeAmino): ListRequest_Range {
    return {
      start: Array.isArray(object?.start) ? object.start.map((e: any) => IndexValue.fromAmino(e)) : [],
      end: Array.isArray(object?.end) ? object.end.map((e: any) => IndexValue.fromAmino(e)) : []
    };
  },
  toAmino(message: ListRequest_Range): ListRequest_RangeAmino {
    const obj: any = {};
    if (message.start) {
      obj.start = message.start.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.start = [];
    }
    if (message.end) {
      obj.end = message.end.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.end = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListRequest_RangeAminoMsg): ListRequest_Range {
    return ListRequest_Range.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest_Range): ListRequest_RangeAminoMsg {
    return {
      type: "cosmos-sdk/Range",
      value: ListRequest_Range.toAmino(message)
    };
  },
  fromProtoMsg(message: ListRequest_RangeProtoMsg): ListRequest_Range {
    return ListRequest_Range.decode(message.value);
  },
  toProto(message: ListRequest_Range): Uint8Array {
    return ListRequest_Range.encode(message).finish();
  },
  toProtoMsg(message: ListRequest_Range): ListRequest_RangeProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.Range",
      value: ListRequest_Range.encode(message).finish()
    };
  }
};
function createBaseListResponse(): ListResponse {
  return {
    results: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const ListResponse = {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
  encode(message: ListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<ListResponse>): ListResponse {
    const message = createBaseListResponse();
    message.results = object.results?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ListResponseAmino): ListResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Any.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: ListResponse): ListResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.results = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListResponseAminoMsg): ListResponse {
    return ListResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListResponse): ListResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListResponse",
      value: ListResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListResponseProtoMsg): ListResponse {
    return ListResponse.decode(message.value);
  },
  toProto(message: ListResponse): Uint8Array {
    return ListResponse.encode(message).finish();
  },
  toProtoMsg(message: ListResponse): ListResponseProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
      value: ListResponse.encode(message).finish()
    };
  }
};
function createBaseIndexValue(): IndexValue {
  return {
    uint: undefined,
    int: undefined,
    str: undefined,
    bytes: undefined,
    enum: undefined,
    bool: undefined,
    timestamp: undefined,
    duration: undefined
  };
}
export const IndexValue = {
  typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
  encode(message: IndexValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uint !== undefined) {
      writer.uint32(8).uint64(message.uint);
    }
    if (message.int !== undefined) {
      writer.uint32(16).int64(message.int);
    }
    if (message.str !== undefined) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== undefined) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== undefined) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== undefined) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IndexValue {
    return {
      uint: isSet(object.uint) ? BigInt(object.uint.toString()) : undefined,
      int: isSet(object.int) ? BigInt(object.int.toString()) : undefined,
      str: isSet(object.str) ? String(object.str) : undefined,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
      enum: isSet(object.enum) ? String(object.enum) : undefined,
      bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<IndexValue>): IndexValue {
    const message = createBaseIndexValue();
    message.uint = object.uint !== undefined && object.uint !== null ? BigInt(object.uint.toString()) : undefined;
    message.int = object.int !== undefined && object.int !== null ? BigInt(object.int.toString()) : undefined;
    message.str = object.str ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.enum = object.enum ?? undefined;
    message.bool = object.bool ?? undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: IndexValueAmino): IndexValue {
    return {
      uint: object?.uint ? BigInt(object.uint) : undefined,
      int: object?.int ? BigInt(object.int) : undefined,
      str: object?.str,
      bytes: object?.bytes,
      enum: object?.enum,
      bool: object?.bool,
      timestamp: object?.timestamp,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },
  toAmino(message: IndexValue): IndexValueAmino {
    const obj: any = {};
    obj.uint = message.uint ? message.uint.toString() : undefined;
    obj.int = message.int ? message.int.toString() : undefined;
    obj.str = message.str;
    obj.bytes = message.bytes;
    obj.enum = message.enum;
    obj.bool = message.bool;
    obj.timestamp = message.timestamp;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: IndexValueAminoMsg): IndexValue {
    return IndexValue.fromAmino(object.value);
  },
  toAminoMsg(message: IndexValue): IndexValueAminoMsg {
    return {
      type: "cosmos-sdk/IndexValue",
      value: IndexValue.toAmino(message)
    };
  },
  fromProtoMsg(message: IndexValueProtoMsg): IndexValue {
    return IndexValue.decode(message.value);
  },
  toProto(message: IndexValue): Uint8Array {
    return IndexValue.encode(message).finish();
  },
  toProtoMsg(message: IndexValue): IndexValueProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
      value: IndexValue.encode(message).finish()
    };
  }
};