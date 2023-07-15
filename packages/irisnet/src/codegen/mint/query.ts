import { Params, ParamsSDKType } from "./mint";
import { PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  params?: Params;
  res?: PageResponse;
}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
  res?: PageResponseSDKType;
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
    params: undefined,
    res: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== undefined) {
      PageResponse.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      res: isSet(object.res) ? PageResponse.fromJSON(object.res) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.res = object.res !== undefined && object.res !== null ? PageResponse.fromPartial(object.res) : undefined;
    return message;
  }
};