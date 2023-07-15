import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataSDKType } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetCallbackDataRequest {
  callbackKey: string;
}
export interface QueryGetCallbackDataRequestSDKType {
  callback_key: string;
}
export interface QueryGetCallbackDataResponse {
  callbackData?: CallbackData;
}
export interface QueryGetCallbackDataResponseSDKType {
  callback_data?: CallbackDataSDKType;
}
export interface QueryAllCallbackDataRequest {
  pagination?: PageRequest;
}
export interface QueryAllCallbackDataRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllCallbackDataResponse {
  callbackData: CallbackData[];
  pagination?: PageResponse;
}
export interface QueryAllCallbackDataResponseSDKType {
  callback_data: CallbackDataSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetCallbackDataRequest(): QueryGetCallbackDataRequest {
  return {
    callbackKey: ""
  };
}
export const QueryGetCallbackDataRequest = {
  encode(message: QueryGetCallbackDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCallbackDataRequest {
    return {
      callbackKey: isSet(object.callbackKey) ? String(object.callbackKey) : ""
    };
  },
  fromPartial(object: Partial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest {
    const message = createBaseQueryGetCallbackDataRequest();
    message.callbackKey = object.callbackKey ?? "";
    return message;
  }
};
function createBaseQueryGetCallbackDataResponse(): QueryGetCallbackDataResponse {
  return {
    callbackData: undefined
  };
}
export const QueryGetCallbackDataResponse = {
  encode(message: QueryGetCallbackDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackData !== undefined) {
      CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCallbackDataResponse {
    return {
      callbackData: isSet(object.callbackData) ? CallbackData.fromJSON(object.callbackData) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse {
    const message = createBaseQueryGetCallbackDataResponse();
    message.callbackData = object.callbackData !== undefined && object.callbackData !== null ? CallbackData.fromPartial(object.callbackData) : undefined;
    return message;
  }
};
function createBaseQueryAllCallbackDataRequest(): QueryAllCallbackDataRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllCallbackDataRequest = {
  encode(message: QueryAllCallbackDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllCallbackDataRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest {
    const message = createBaseQueryAllCallbackDataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllCallbackDataResponse(): QueryAllCallbackDataResponse {
  return {
    callbackData: [],
    pagination: undefined
  };
}
export const QueryAllCallbackDataResponse = {
  encode(message: QueryAllCallbackDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.callbackData) {
      CallbackData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllCallbackDataResponse {
    return {
      callbackData: Array.isArray(object?.callbackData) ? object.callbackData.map((e: any) => CallbackData.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse {
    const message = createBaseQueryAllCallbackDataResponse();
    message.callbackData = object.callbackData?.map(e => CallbackData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};