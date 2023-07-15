import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ArithmeticTwapRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Timestamp;
  endTime?: Timestamp;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: TimestampSDKType;
  end_time?: TimestampSDKType;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Timestamp;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: TimestampSDKType;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface GeometricTwapRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Timestamp;
  endTime?: Timestamp;
}
export interface GeometricTwapRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: TimestampSDKType;
  end_time?: TimestampSDKType;
}
export interface GeometricTwapResponse {
  geometricTwap: string;
}
export interface GeometricTwapResponseSDKType {
  geometric_twap: string;
}
export interface GeometricTwapToNowRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Timestamp;
}
export interface GeometricTwapToNowRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: TimestampSDKType;
}
export interface GeometricTwapToNowResponse {
  geometricTwap: string;
}
export interface GeometricTwapToNowResponseSDKType {
  geometric_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
export const ArithmeticTwapRequest = {
  encode(message: ArithmeticTwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ArithmeticTwapRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  }
};
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapResponse = {
  encode(message: ArithmeticTwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  fromJSON(object: any): ArithmeticTwapResponse {
    return {
      arithmeticTwap: isSet(object.arithmeticTwap) ? String(object.arithmeticTwap) : ""
    };
  },
  fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  }
};
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
export const ArithmeticTwapToNowRequest = {
  encode(message: ArithmeticTwapToNowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ArithmeticTwapToNowRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  }
};
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  encode(message: ArithmeticTwapToNowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  fromJSON(object: any): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: isSet(object.arithmeticTwap) ? String(object.arithmeticTwap) : ""
    };
  },
  fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  }
};
function createBaseGeometricTwapRequest(): GeometricTwapRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
export const GeometricTwapRequest = {
  encode(message: GeometricTwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GeometricTwapRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  fromPartial(object: Partial<GeometricTwapRequest>): GeometricTwapRequest {
    const message = createBaseGeometricTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  }
};
function createBaseGeometricTwapResponse(): GeometricTwapResponse {
  return {
    geometricTwap: ""
  };
}
export const GeometricTwapResponse = {
  encode(message: GeometricTwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(message.geometricTwap);
    }
    return writer;
  },
  fromJSON(object: any): GeometricTwapResponse {
    return {
      geometricTwap: isSet(object.geometricTwap) ? String(object.geometricTwap) : ""
    };
  },
  fromPartial(object: Partial<GeometricTwapResponse>): GeometricTwapResponse {
    const message = createBaseGeometricTwapResponse();
    message.geometricTwap = object.geometricTwap ?? "";
    return message;
  }
};
function createBaseGeometricTwapToNowRequest(): GeometricTwapToNowRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
export const GeometricTwapToNowRequest = {
  encode(message: GeometricTwapToNowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GeometricTwapToNowRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  fromPartial(object: Partial<GeometricTwapToNowRequest>): GeometricTwapToNowRequest {
    const message = createBaseGeometricTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  }
};
function createBaseGeometricTwapToNowResponse(): GeometricTwapToNowResponse {
  return {
    geometricTwap: ""
  };
}
export const GeometricTwapToNowResponse = {
  encode(message: GeometricTwapToNowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(message.geometricTwap);
    }
    return writer;
  },
  fromJSON(object: any): GeometricTwapToNowResponse {
    return {
      geometricTwap: isSet(object.geometricTwap) ? String(object.geometricTwap) : ""
    };
  },
  fromPartial(object: Partial<GeometricTwapToNowResponse>): GeometricTwapToNowResponse {
    const message = createBaseGeometricTwapToNowResponse();
    message.geometricTwap = object.geometricTwap ?? "";
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