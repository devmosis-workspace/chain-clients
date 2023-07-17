import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponse {
  /** allocation parameters */
  params?: Params;
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequest {}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequestSDKType {}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponse {
  apy: string;
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponseSDKType {
  apy: string;
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
function createBaseQueryAPYRequest(): QueryAPYRequest {
  return {};
}
export const QueryAPYRequest = {
  encode(_: QueryAPYRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAPYRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAPYRequest>): QueryAPYRequest {
    const message = createBaseQueryAPYRequest();
    return message;
  }
};
function createBaseQueryAPYResponse(): QueryAPYResponse {
  return {
    apy: ""
  };
}
export const QueryAPYResponse = {
  encode(message: QueryAPYResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apy !== "") {
      writer.uint32(10).string(message.apy);
    }
    return writer;
  },
  fromJSON(object: any): QueryAPYResponse {
    return {
      apy: isSet(object.apy) ? String(object.apy) : ""
    };
  },
  fromPartial(object: Partial<QueryAPYResponse>): QueryAPYResponse {
    const message = createBaseQueryAPYResponse();
    message.apy = object.apy ?? "";
    return message;
  }
};