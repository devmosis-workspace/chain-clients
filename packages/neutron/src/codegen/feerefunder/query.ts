import { Params, ParamsSDKType } from "./params";
import { FeeInfo, FeeInfoSDKType } from "./genesis";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface FeeInfoRequest {
  channelId: string;
  portId: string;
  sequence: Long;
}
export interface FeeInfoRequestSDKType {
  channel_id: string;
  port_id: string;
  sequence: Long;
}
export interface FeeInfoResponse {
  feeInfo?: FeeInfo;
}
export interface FeeInfoResponseSDKType {
  fee_info?: FeeInfoSDKType;
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
function createBaseFeeInfoRequest(): FeeInfoRequest {
  return {
    channelId: "",
    portId: "",
    sequence: Long.UZERO
  };
}
export const FeeInfoRequest = {
  encode(message: FeeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  fromJSON(object: any): FeeInfoRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<FeeInfoRequest>): FeeInfoRequest {
    const message = createBaseFeeInfoRequest();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};
function createBaseFeeInfoResponse(): FeeInfoResponse {
  return {
    feeInfo: undefined
  };
}
export const FeeInfoResponse = {
  encode(message: FeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeInfo !== undefined) {
      FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeInfoResponse {
    return {
      feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
    };
  },
  fromPartial(object: Partial<FeeInfoResponse>): FeeInfoResponse {
    const message = createBaseFeeInfoResponse();
    message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
    return message;
  }
};