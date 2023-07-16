import { Params, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
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
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequest {}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequestSDKType {}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponse {
  totalBurnedNeutronsAmount?: TotalBurnedNeutronsAmount;
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponseSDKType {
  total_burned_neutrons_amount?: TotalBurnedNeutronsAmountSDKType;
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
function createBaseQueryTotalBurnedNeutronsAmountRequest(): QueryTotalBurnedNeutronsAmountRequest {
  return {};
}
export const QueryTotalBurnedNeutronsAmountRequest = {
  encode(_: QueryTotalBurnedNeutronsAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryTotalBurnedNeutronsAmountRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalBurnedNeutronsAmountRequest>): QueryTotalBurnedNeutronsAmountRequest {
    const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
    return message;
  }
};
function createBaseQueryTotalBurnedNeutronsAmountResponse(): QueryTotalBurnedNeutronsAmountResponse {
  return {
    totalBurnedNeutronsAmount: undefined
  };
}
export const QueryTotalBurnedNeutronsAmountResponse = {
  encode(message: QueryTotalBurnedNeutronsAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalBurnedNeutronsAmount !== undefined) {
      TotalBurnedNeutronsAmount.encode(message.totalBurnedNeutronsAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBurnedNeutronsAmountResponse {
    return {
      totalBurnedNeutronsAmount: isSet(object.totalBurnedNeutronsAmount) ? TotalBurnedNeutronsAmount.fromJSON(object.totalBurnedNeutronsAmount) : undefined
    };
  },
  fromPartial(object: Partial<QueryTotalBurnedNeutronsAmountResponse>): QueryTotalBurnedNeutronsAmountResponse {
    const message = createBaseQueryTotalBurnedNeutronsAmountResponse();
    message.totalBurnedNeutronsAmount = object.totalBurnedNeutronsAmount !== undefined && object.totalBurnedNeutronsAmount !== null ? TotalBurnedNeutronsAmount.fromPartial(object.totalBurnedNeutronsAmount) : undefined;
    return message;
  }
};