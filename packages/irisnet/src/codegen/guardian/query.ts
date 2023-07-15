import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Super, SuperSDKType } from "./guardian";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
  /** pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
  supers: Super[];
  pagination?: PageResponse;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponseSDKType {
  supers: SuperSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQuerySupersRequest(): QuerySupersRequest {
  return {
    pagination: undefined
  };
}
export const QuerySupersRequest = {
  encode(message: QuerySupersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySupersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySupersRequest>): QuerySupersRequest {
    const message = createBaseQuerySupersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySupersResponse(): QuerySupersResponse {
  return {
    supers: [],
    pagination: undefined
  };
}
export const QuerySupersResponse = {
  encode(message: QuerySupersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supers) {
      Super.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySupersResponse {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySupersResponse>): QuerySupersResponse {
    const message = createBaseQuerySupersResponse();
    message.supers = object.supers?.map(e => Super.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};