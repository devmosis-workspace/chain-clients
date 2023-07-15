import { Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
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
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestSDKType {}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
  /** inflation is the current minting inflation value. */
  inflation: Uint8Array;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseSDKType {
  inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** annual_provisions is the current minting annual provisions value. */
  annualProvisions: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
  annual_provisions: Uint8Array;
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
function createBaseQueryInflationRequest(): QueryInflationRequest {
  return {};
}
export const QueryInflationRequest = {
  encode(_: QueryInflationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryInflationRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest {
    const message = createBaseQueryInflationRequest();
    return message;
  }
};
function createBaseQueryInflationResponse(): QueryInflationResponse {
  return {
    inflation: new Uint8Array()
  };
}
export const QueryInflationResponse = {
  encode(message: QueryInflationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationResponse {
    return {
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse {
    const message = createBaseQueryInflationResponse();
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
  return {};
}
export const QueryAnnualProvisionsRequest = {
  encode(_: QueryAnnualProvisionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAnnualProvisionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  }
};
function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
  return {
    annualProvisions: new Uint8Array()
  };
}
export const QueryAnnualProvisionsResponse = {
  encode(message: QueryAnnualProvisionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  fromJSON(object: any): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = object.annualProvisions ?? new Uint8Array();
    return message;
  }
};