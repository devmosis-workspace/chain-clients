import { Params, ParamsSDKType, State, StateSDKType } from "./vbank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequest {}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequestSDKType {}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponse {
  /** state defines the parameters of the module. */
  state?: State;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponseSDKType {
  state?: StateSDKType;
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
function createBaseQueryStateRequest(): QueryStateRequest {
  return {};
}
export const QueryStateRequest = {
  encode(_: QueryStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryStateRequest>): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    return message;
  }
};
function createBaseQueryStateResponse(): QueryStateResponse {
  return {
    state: undefined
  };
}
export const QueryStateResponse = {
  encode(message: QueryStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStateResponse {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    message.state = object.state !== undefined && object.state !== null ? State.fromPartial(object.state) : undefined;
    return message;
  }
};