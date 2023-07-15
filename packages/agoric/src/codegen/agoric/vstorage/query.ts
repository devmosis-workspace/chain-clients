import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequest {
  path: string;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestSDKType {
  path: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponse {
  value: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseSDKType {
  value: string;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequest {
  path: string;
  pagination?: PageRequest;
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
  encode(message: QueryDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDataResponse(): QueryDataResponse {
  return {
    value: ""
  };
}
export const QueryDataResponse = {
  encode(message: QueryDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryChildrenRequest(): QueryChildrenRequest {
  return {
    path: "",
    pagination: undefined
  };
}
export const QueryChildrenRequest = {
  encode(message: QueryChildrenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryChildrenResponse(): QueryChildrenResponse {
  return {
    children: [],
    pagination: undefined
  };
}
export const QueryChildrenResponse = {
  encode(message: QueryChildrenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};