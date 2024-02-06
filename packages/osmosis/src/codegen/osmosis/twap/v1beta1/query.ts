import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface ArithmeticTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Timestamp;
  endTime?: Timestamp;
}
export interface ArithmeticTwapRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface ArithmeticTwapRequestAminoMsg {
  type: "osmosis/twap/arithmetic-twap-request";
  value: ArithmeticTwapRequestAmino;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: TimestampSDKType;
  end_time?: TimestampSDKType;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
  arithmetic_twap?: string;
}
export interface ArithmeticTwapResponseAminoMsg {
  type: "osmosis/twap/arithmetic-twap-response";
  value: ArithmeticTwapResponseAmino;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Timestamp;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface ArithmeticTwapToNowRequestAminoMsg {
  type: "osmosis/twap/arithmetic-twap-to-now-request";
  value: ArithmeticTwapToNowRequestAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: TimestampSDKType;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
  arithmetic_twap?: string;
}
export interface ArithmeticTwapToNowResponseAminoMsg {
  type: "osmosis/twap/arithmetic-twap-to-now-response";
  value: ArithmeticTwapToNowResponseAmino;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface GeometricTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Timestamp;
  endTime?: Timestamp;
}
export interface GeometricTwapRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapRequest";
  value: Uint8Array;
}
export interface GeometricTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface GeometricTwapRequestAminoMsg {
  type: "osmosis/twap/geometric-twap-request";
  value: GeometricTwapRequestAmino;
}
export interface GeometricTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: TimestampSDKType;
  end_time?: TimestampSDKType;
}
export interface GeometricTwapResponse {
  geometricTwap: string;
}
export interface GeometricTwapResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapResponse";
  value: Uint8Array;
}
export interface GeometricTwapResponseAmino {
  geometric_twap?: string;
}
export interface GeometricTwapResponseAminoMsg {
  type: "osmosis/twap/geometric-twap-response";
  value: GeometricTwapResponseAmino;
}
export interface GeometricTwapResponseSDKType {
  geometric_twap: string;
}
export interface GeometricTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Timestamp;
}
export interface GeometricTwapToNowRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowRequest";
  value: Uint8Array;
}
export interface GeometricTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface GeometricTwapToNowRequestAminoMsg {
  type: "osmosis/twap/geometric-twap-to-now-request";
  value: GeometricTwapToNowRequestAmino;
}
export interface GeometricTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: TimestampSDKType;
}
export interface GeometricTwapToNowResponse {
  geometricTwap: string;
}
export interface GeometricTwapToNowResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowResponse";
  value: Uint8Array;
}
export interface GeometricTwapToNowResponseAmino {
  geometric_twap?: string;
}
export interface GeometricTwapToNowResponseAminoMsg {
  type: "osmosis/twap/geometric-twap-to-now-response";
  value: GeometricTwapToNowResponseAmino;
}
export interface GeometricTwapToNowResponseSDKType {
  geometric_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/twap/params-request";
  value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "osmosis/twap/params-response";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: Timestamp.fromPartial({}),
    endTime: undefined
  };
}
export const ArithmeticTwapRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
  encode(message: ArithmeticTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  },
  fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    return message;
  },
  toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-request",
      value: ArithmeticTwapRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapRequest): Uint8Array {
    return ArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
      value: ArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
  encode(message: ArithmeticTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
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
  },
  fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-response",
      value: ArithmeticTwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapResponseProtoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapResponse): Uint8Array {
    return ArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
      value: ArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: Timestamp.fromPartial({})
  };
}
export const ArithmeticTwapToNowRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
  encode(message: ArithmeticTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  },
  fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    return message;
  },
  toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowRequestAminoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-request",
      value: ArithmeticTwapToNowRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowRequest): Uint8Array {
    return ArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
      value: ArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
  encode(message: ArithmeticTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
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
  },
  fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowResponseAminoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-response",
      value: ArithmeticTwapToNowResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowResponse): Uint8Array {
    return ArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
      value: ArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseGeometricTwapRequest(): GeometricTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: Timestamp.fromPartial({}),
    endTime: undefined
  };
}
export const GeometricTwapRequest = {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapRequest",
  encode(message: GeometricTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  fromPartial(object: Partial<GeometricTwapRequest>): GeometricTwapRequest {
    const message = createBaseGeometricTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  },
  fromAmino(object: GeometricTwapRequestAmino): GeometricTwapRequest {
    const message = createBaseGeometricTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    return message;
  },
  toAmino(message: GeometricTwapRequest): GeometricTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: GeometricTwapRequestAminoMsg): GeometricTwapRequest {
    return GeometricTwapRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GeometricTwapRequest): GeometricTwapRequestAminoMsg {
    return {
      type: "osmosis/twap/geometric-twap-request",
      value: GeometricTwapRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GeometricTwapRequestProtoMsg): GeometricTwapRequest {
    return GeometricTwapRequest.decode(message.value);
  },
  toProto(message: GeometricTwapRequest): Uint8Array {
    return GeometricTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: GeometricTwapRequest): GeometricTwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.GeometricTwapRequest",
      value: GeometricTwapRequest.encode(message).finish()
    };
  }
};
function createBaseGeometricTwapResponse(): GeometricTwapResponse {
  return {
    geometricTwap: ""
  };
}
export const GeometricTwapResponse = {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapResponse",
  encode(message: GeometricTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
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
  },
  fromAmino(object: GeometricTwapResponseAmino): GeometricTwapResponse {
    const message = createBaseGeometricTwapResponse();
    if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
      message.geometricTwap = object.geometric_twap;
    }
    return message;
  },
  toAmino(message: GeometricTwapResponse): GeometricTwapResponseAmino {
    const obj: any = {};
    obj.geometric_twap = message.geometricTwap;
    return obj;
  },
  fromAminoMsg(object: GeometricTwapResponseAminoMsg): GeometricTwapResponse {
    return GeometricTwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GeometricTwapResponse): GeometricTwapResponseAminoMsg {
    return {
      type: "osmosis/twap/geometric-twap-response",
      value: GeometricTwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GeometricTwapResponseProtoMsg): GeometricTwapResponse {
    return GeometricTwapResponse.decode(message.value);
  },
  toProto(message: GeometricTwapResponse): Uint8Array {
    return GeometricTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: GeometricTwapResponse): GeometricTwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.GeometricTwapResponse",
      value: GeometricTwapResponse.encode(message).finish()
    };
  }
};
function createBaseGeometricTwapToNowRequest(): GeometricTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: Timestamp.fromPartial({})
  };
}
export const GeometricTwapToNowRequest = {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowRequest",
  encode(message: GeometricTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  fromPartial(object: Partial<GeometricTwapToNowRequest>): GeometricTwapToNowRequest {
    const message = createBaseGeometricTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  },
  fromAmino(object: GeometricTwapToNowRequestAmino): GeometricTwapToNowRequest {
    const message = createBaseGeometricTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    return message;
  },
  toAmino(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: GeometricTwapToNowRequestAminoMsg): GeometricTwapToNowRequest {
    return GeometricTwapToNowRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestAminoMsg {
    return {
      type: "osmosis/twap/geometric-twap-to-now-request",
      value: GeometricTwapToNowRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GeometricTwapToNowRequestProtoMsg): GeometricTwapToNowRequest {
    return GeometricTwapToNowRequest.decode(message.value);
  },
  toProto(message: GeometricTwapToNowRequest): Uint8Array {
    return GeometricTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowRequest",
      value: GeometricTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseGeometricTwapToNowResponse(): GeometricTwapToNowResponse {
  return {
    geometricTwap: ""
  };
}
export const GeometricTwapToNowResponse = {
  typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowResponse",
  encode(message: GeometricTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
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
  },
  fromAmino(object: GeometricTwapToNowResponseAmino): GeometricTwapToNowResponse {
    const message = createBaseGeometricTwapToNowResponse();
    if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
      message.geometricTwap = object.geometric_twap;
    }
    return message;
  },
  toAmino(message: GeometricTwapToNowResponse): GeometricTwapToNowResponseAmino {
    const obj: any = {};
    obj.geometric_twap = message.geometricTwap;
    return obj;
  },
  fromAminoMsg(object: GeometricTwapToNowResponseAminoMsg): GeometricTwapToNowResponse {
    return GeometricTwapToNowResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GeometricTwapToNowResponse): GeometricTwapToNowResponseAminoMsg {
    return {
      type: "osmosis/twap/geometric-twap-to-now-response",
      value: GeometricTwapToNowResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GeometricTwapToNowResponseProtoMsg): GeometricTwapToNowResponse {
    return GeometricTwapToNowResponse.decode(message.value);
  },
  toProto(message: GeometricTwapToNowResponse): Uint8Array {
    return GeometricTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: GeometricTwapToNowResponse): GeometricTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowResponse",
      value: GeometricTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "osmosis/twap/params-request",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "osmosis/twap/params-response",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};