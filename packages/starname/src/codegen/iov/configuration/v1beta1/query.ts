import { Config, ConfigSDKType, Fees, FeesSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequest {}
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequestSDKType {}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponse {
  /** Configuration is the starname configuration. */
  config?: Config;
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponseSDKType {
  config?: ConfigSDKType;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequest {}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequestSDKType {}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
  /** Fees is the starname product fee object. */
  fees?: Fees;
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponseSDKType {
  fees?: FeesSDKType;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}
export const QueryConfigResponse = {
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  }
};
function createBaseQueryFeesRequest(): QueryFeesRequest {
  return {};
}
export const QueryFeesRequest = {
  encode(_: QueryFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryFeesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeesRequest>): QueryFeesRequest {
    const message = createBaseQueryFeesRequest();
    return message;
  }
};
function createBaseQueryFeesResponse(): QueryFeesResponse {
  return {
    fees: undefined
  };
}
export const QueryFeesResponse = {
  encode(message: QueryFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeesResponse {
    return {
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeesResponse>): QueryFeesResponse {
    const message = createBaseQueryFeesResponse();
    message.fees = object.fees !== undefined && object.fees !== null ? Fees.fromPartial(object.fees) : undefined;
    return message;
  }
};