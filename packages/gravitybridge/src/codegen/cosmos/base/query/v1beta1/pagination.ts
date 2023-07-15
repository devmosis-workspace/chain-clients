import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  offset: Long;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: Long;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal: boolean;
  /** reverse is set to true if results are to be returned in the descending order. */
  reverse: boolean;
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
  offset: Long;
  limit: Long;
  count_total: boolean;
  reverse: boolean;
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
  total: Long;
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
  total: Long;
}
function createBasePageRequest(): PageRequest {
  return {
    key: new Uint8Array(),
    offset: Long.UZERO,
    limit: Long.UZERO,
    countTotal: false,
    reverse: false
  };
}
export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (!message.offset.isZero()) {
      writer.uint32(16).uint64(message.offset);
    }
    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  fromJSON(object: any): PageRequest {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      offset: isSet(object.offset) ? Long.fromValue(object.offset) : Long.UZERO,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      countTotal: isSet(object.countTotal) ? Boolean(object.countTotal) : false,
      reverse: isSet(object.reverse) ? Boolean(object.reverse) : false
    };
  },
  fromPartial(object: Partial<PageRequest>): PageRequest {
    const message = createBasePageRequest();
    message.key = object.key ?? new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? Long.fromValue(object.offset) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.countTotal = object.countTotal ?? false;
    message.reverse = object.reverse ?? false;
    return message;
  }
};
function createBasePageResponse(): PageResponse {
  return {
    nextKey: new Uint8Array(),
    total: Long.UZERO
  };
}
export const PageResponse = {
  encode(message: PageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  fromJSON(object: any): PageResponse {
    return {
      nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(),
      total: isSet(object.total) ? Long.fromValue(object.total) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PageResponse>): PageResponse {
    const message = createBasePageResponse();
    message.nextKey = object.nextKey ?? new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  }
};