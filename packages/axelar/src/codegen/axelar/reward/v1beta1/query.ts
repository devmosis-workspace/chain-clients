import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method.
 */
export interface InflationRateRequest {}
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method.
 */
export interface InflationRateRequestSDKType {}
export interface InflationRateResponse {
  inflationRate: Uint8Array;
}
export interface InflationRateResponseSDKType {
  inflation_rate: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseInflationRateRequest(): InflationRateRequest {
  return {};
}
export const InflationRateRequest = {
  encode(_: InflationRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): InflationRateRequest {
    return {};
  },
  fromPartial(_: Partial<InflationRateRequest>): InflationRateRequest {
    const message = createBaseInflationRateRequest();
    return message;
  }
};
function createBaseInflationRateResponse(): InflationRateResponse {
  return {
    inflationRate: new Uint8Array()
  };
}
export const InflationRateResponse = {
  encode(message: InflationRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationRate.length !== 0) {
      writer.uint32(10).bytes(message.inflationRate);
    }
    return writer;
  },
  fromJSON(object: any): InflationRateResponse {
    return {
      inflationRate: isSet(object.inflationRate) ? bytesFromBase64(object.inflationRate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<InflationRateResponse>): InflationRateResponse {
    const message = createBaseInflationRateResponse();
    message.inflationRate = object.inflationRate ?? new Uint8Array();
    return message;
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};