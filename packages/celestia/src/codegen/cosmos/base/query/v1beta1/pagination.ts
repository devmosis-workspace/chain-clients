import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: bigint;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: bigint;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal: boolean;
}
export interface PageRequestProtoMsg {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest";
  value: Uint8Array;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequestAmino {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key?: string;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset?: string;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit?: string;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;
}
export interface PageRequestAminoMsg {
  type: "cosmos-sdk/PageRequest";
  value: PageRequestAmino;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequestSDKType {
  key: Uint8Array;
  offset: bigint;
  limit: bigint;
  count_total: boolean;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   */
  nextKey: Uint8Array;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total: bigint;
}
export interface PageResponseProtoMsg {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse";
  value: Uint8Array;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponseAmino {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   */
  next_key?: string;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total?: string;
}
export interface PageResponseAminoMsg {
  type: "cosmos-sdk/PageResponse";
  value: PageResponseAmino;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponseSDKType {
  next_key: Uint8Array;
  total: bigint;
}
function createBasePageRequest(): PageRequest {
  return {
    key: new Uint8Array(),
    offset: BigInt(0),
    limit: BigInt(0),
    countTotal: false
  };
}
export const PageRequest = {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
  encode(message: PageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== BigInt(0)) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    return writer;
  },
  fromJSON(object: any): PageRequest {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      offset: isSet(object.offset) ? BigInt(object.offset.toString()) : BigInt(0),
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
      countTotal: isSet(object.countTotal) ? Boolean(object.countTotal) : false
    };
  },
  fromPartial(object: Partial<PageRequest>): PageRequest {
    const message = createBasePageRequest();
    message.key = object.key ?? new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? BigInt(object.offset.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.countTotal = object.countTotal ?? false;
    return message;
  },
  fromAmino(object: PageRequestAmino): PageRequest {
    const message = createBasePageRequest();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = BigInt(object.offset);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.count_total !== undefined && object.count_total !== null) {
      message.countTotal = object.count_total;
    }
    return message;
  },
  toAmino(message: PageRequest): PageRequestAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.offset = message.offset !== BigInt(0) ? message.offset.toString() : undefined;
    obj.limit = message.limit !== BigInt(0) ? message.limit.toString() : undefined;
    obj.count_total = message.countTotal === false ? undefined : message.countTotal;
    return obj;
  },
  fromAminoMsg(object: PageRequestAminoMsg): PageRequest {
    return PageRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PageRequest): PageRequestAminoMsg {
    return {
      type: "cosmos-sdk/PageRequest",
      value: PageRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PageRequestProtoMsg): PageRequest {
    return PageRequest.decode(message.value);
  },
  toProto(message: PageRequest): Uint8Array {
    return PageRequest.encode(message).finish();
  },
  toProtoMsg(message: PageRequest): PageRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
      value: PageRequest.encode(message).finish()
    };
  }
};
function createBasePageResponse(): PageResponse {
  return {
    nextKey: new Uint8Array(),
    total: BigInt(0)
  };
}
export const PageResponse = {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
  encode(message: PageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  fromJSON(object: any): PageResponse {
    return {
      nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(),
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PageResponse>): PageResponse {
    const message = createBasePageResponse();
    message.nextKey = object.nextKey ?? new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PageResponseAmino): PageResponse {
    const message = createBasePageResponse();
    if (object.next_key !== undefined && object.next_key !== null) {
      message.nextKey = bytesFromBase64(object.next_key);
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    return message;
  },
  toAmino(message: PageResponse): PageResponseAmino {
    const obj: any = {};
    obj.next_key = message.nextKey ? base64FromBytes(message.nextKey) : undefined;
    obj.total = message.total !== BigInt(0) ? message.total.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PageResponseAminoMsg): PageResponse {
    return PageResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PageResponse): PageResponseAminoMsg {
    return {
      type: "cosmos-sdk/PageResponse",
      value: PageResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PageResponseProtoMsg): PageResponse {
    return PageResponse.decode(message.value);
  },
  toProto(message: PageResponse): Uint8Array {
    return PageResponse.encode(message).finish();
  },
  toProtoMsg(message: PageResponse): PageResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
      value: PageResponse.encode(message).finish()
    };
  }
};