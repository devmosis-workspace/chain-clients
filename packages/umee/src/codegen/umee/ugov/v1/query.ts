import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPrice {}
export interface QueryMinGasPriceProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryMinGasPrice";
  value: Uint8Array;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceAmino {}
export interface QueryMinGasPriceAminoMsg {
  type: "/umee.ugov.v1.QueryMinGasPrice";
  value: QueryMinGasPriceAmino;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceSDKType {}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponse {
  minGasPrice: DecCoin;
}
export interface QueryMinGasPriceResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse";
  value: Uint8Array;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseAmino {
  min_gas_price?: DecCoinAmino;
}
export interface QueryMinGasPriceResponseAminoMsg {
  type: "/umee.ugov.v1.QueryMinGasPriceResponse";
  value: QueryMinGasPriceResponseAmino;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseSDKType {
  min_gas_price: DecCoinSDKType;
}
/** QueryEmergencyGroup request type. */
export interface QueryEmergencyGroup {}
export interface QueryEmergencyGroupProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryEmergencyGroup";
  value: Uint8Array;
}
/** QueryEmergencyGroup request type. */
export interface QueryEmergencyGroupAmino {}
export interface QueryEmergencyGroupAminoMsg {
  type: "/umee.ugov.v1.QueryEmergencyGroup";
  value: QueryEmergencyGroupAmino;
}
/** QueryEmergencyGroup request type. */
export interface QueryEmergencyGroupSDKType {}
/** QueryEmergencyGroupResponse response type. */
export interface QueryEmergencyGroupResponse {
  emergencyGroup: string;
}
export interface QueryEmergencyGroupResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryEmergencyGroupResponse";
  value: Uint8Array;
}
/** QueryEmergencyGroupResponse response type. */
export interface QueryEmergencyGroupResponseAmino {
  emergency_group?: string;
}
export interface QueryEmergencyGroupResponseAminoMsg {
  type: "/umee.ugov.v1.QueryEmergencyGroupResponse";
  value: QueryEmergencyGroupResponseAmino;
}
/** QueryEmergencyGroupResponse response type. */
export interface QueryEmergencyGroupResponseSDKType {
  emergency_group: string;
}
/** QueryInflationParams request type. */
export interface QueryInflationParams {}
export interface QueryInflationParamsProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryInflationParams";
  value: Uint8Array;
}
/** QueryInflationParams request type. */
export interface QueryInflationParamsAmino {}
export interface QueryInflationParamsAminoMsg {
  type: "/umee.ugov.v1.QueryInflationParams";
  value: QueryInflationParamsAmino;
}
/** QueryInflationParams request type. */
export interface QueryInflationParamsSDKType {}
/** QueryInflationParamsResponse response type. */
export interface QueryInflationParamsResponse {
  params: InflationParams;
}
export interface QueryInflationParamsResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryInflationParamsResponse";
  value: Uint8Array;
}
/** QueryInflationParamsResponse response type. */
export interface QueryInflationParamsResponseAmino {
  params?: InflationParamsAmino;
}
export interface QueryInflationParamsResponseAminoMsg {
  type: "/umee.ugov.v1.QueryInflationParamsResponse";
  value: QueryInflationParamsResponseAmino;
}
/** QueryInflationParamsResponse response type. */
export interface QueryInflationParamsResponseSDKType {
  params: InflationParamsSDKType;
}
/** QueryInflationCycleEnd request type. */
export interface QueryInflationCycleEnd {}
export interface QueryInflationCycleEndProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryInflationCycleEnd";
  value: Uint8Array;
}
/** QueryInflationCycleEnd request type. */
export interface QueryInflationCycleEndAmino {}
export interface QueryInflationCycleEndAminoMsg {
  type: "/umee.ugov.v1.QueryInflationCycleEnd";
  value: QueryInflationCycleEndAmino;
}
/** QueryInflationCycleEnd request type. */
export interface QueryInflationCycleEndSDKType {}
/** QueryInflationCycleEndResponse response type. */
export interface QueryInflationCycleEndResponse {
  end?: Timestamp;
}
export interface QueryInflationCycleEndResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.QueryInflationCycleEndResponse";
  value: Uint8Array;
}
/** QueryInflationCycleEndResponse response type. */
export interface QueryInflationCycleEndResponseAmino {
  end?: string;
}
export interface QueryInflationCycleEndResponseAminoMsg {
  type: "/umee.ugov.v1.QueryInflationCycleEndResponse";
  value: QueryInflationCycleEndResponseAmino;
}
/** QueryInflationCycleEndResponse response type. */
export interface QueryInflationCycleEndResponseSDKType {
  end?: TimestampSDKType;
}
function createBaseQueryMinGasPrice(): QueryMinGasPrice {
  return {};
}
export const QueryMinGasPrice = {
  typeUrl: "/umee.ugov.v1.QueryMinGasPrice",
  encode(_: QueryMinGasPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryMinGasPrice {
    return {};
  },
  fromPartial(_: Partial<QueryMinGasPrice>): QueryMinGasPrice {
    const message = createBaseQueryMinGasPrice();
    return message;
  },
  fromAmino(_: QueryMinGasPriceAmino): QueryMinGasPrice {
    const message = createBaseQueryMinGasPrice();
    return message;
  },
  toAmino(_: QueryMinGasPrice): QueryMinGasPriceAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinGasPriceAminoMsg): QueryMinGasPrice {
    return QueryMinGasPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinGasPriceProtoMsg): QueryMinGasPrice {
    return QueryMinGasPrice.decode(message.value);
  },
  toProto(message: QueryMinGasPrice): Uint8Array {
    return QueryMinGasPrice.encode(message).finish();
  },
  toProtoMsg(message: QueryMinGasPrice): QueryMinGasPriceProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryMinGasPrice",
      value: QueryMinGasPrice.encode(message).finish()
    };
  }
};
function createBaseQueryMinGasPriceResponse(): QueryMinGasPriceResponse {
  return {
    minGasPrice: DecCoin.fromPartial({})
  };
}
export const QueryMinGasPriceResponse = {
  typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse",
  encode(message: QueryMinGasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMinGasPriceResponse {
    return {
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },
  fromPartial(object: Partial<QueryMinGasPriceResponse>): QueryMinGasPriceResponse {
    const message = createBaseQueryMinGasPriceResponse();
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  },
  fromAmino(object: QueryMinGasPriceResponseAmino): QueryMinGasPriceResponse {
    const message = createBaseQueryMinGasPriceResponse();
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.minGasPrice = DecCoin.fromAmino(object.min_gas_price);
    }
    return message;
  },
  toAmino(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseAmino {
    const obj: any = {};
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMinGasPriceResponseAminoMsg): QueryMinGasPriceResponse {
    return QueryMinGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinGasPriceResponseProtoMsg): QueryMinGasPriceResponse {
    return QueryMinGasPriceResponse.decode(message.value);
  },
  toProto(message: QueryMinGasPriceResponse): Uint8Array {
    return QueryMinGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse",
      value: QueryMinGasPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEmergencyGroup(): QueryEmergencyGroup {
  return {};
}
export const QueryEmergencyGroup = {
  typeUrl: "/umee.ugov.v1.QueryEmergencyGroup",
  encode(_: QueryEmergencyGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryEmergencyGroup {
    return {};
  },
  fromPartial(_: Partial<QueryEmergencyGroup>): QueryEmergencyGroup {
    const message = createBaseQueryEmergencyGroup();
    return message;
  },
  fromAmino(_: QueryEmergencyGroupAmino): QueryEmergencyGroup {
    const message = createBaseQueryEmergencyGroup();
    return message;
  },
  toAmino(_: QueryEmergencyGroup): QueryEmergencyGroupAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEmergencyGroupAminoMsg): QueryEmergencyGroup {
    return QueryEmergencyGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEmergencyGroupProtoMsg): QueryEmergencyGroup {
    return QueryEmergencyGroup.decode(message.value);
  },
  toProto(message: QueryEmergencyGroup): Uint8Array {
    return QueryEmergencyGroup.encode(message).finish();
  },
  toProtoMsg(message: QueryEmergencyGroup): QueryEmergencyGroupProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryEmergencyGroup",
      value: QueryEmergencyGroup.encode(message).finish()
    };
  }
};
function createBaseQueryEmergencyGroupResponse(): QueryEmergencyGroupResponse {
  return {
    emergencyGroup: ""
  };
}
export const QueryEmergencyGroupResponse = {
  typeUrl: "/umee.ugov.v1.QueryEmergencyGroupResponse",
  encode(message: QueryEmergencyGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.emergencyGroup !== "") {
      writer.uint32(10).string(message.emergencyGroup);
    }
    return writer;
  },
  fromJSON(object: any): QueryEmergencyGroupResponse {
    return {
      emergencyGroup: isSet(object.emergencyGroup) ? String(object.emergencyGroup) : ""
    };
  },
  fromPartial(object: Partial<QueryEmergencyGroupResponse>): QueryEmergencyGroupResponse {
    const message = createBaseQueryEmergencyGroupResponse();
    message.emergencyGroup = object.emergencyGroup ?? "";
    return message;
  },
  fromAmino(object: QueryEmergencyGroupResponseAmino): QueryEmergencyGroupResponse {
    const message = createBaseQueryEmergencyGroupResponse();
    if (object.emergency_group !== undefined && object.emergency_group !== null) {
      message.emergencyGroup = object.emergency_group;
    }
    return message;
  },
  toAmino(message: QueryEmergencyGroupResponse): QueryEmergencyGroupResponseAmino {
    const obj: any = {};
    obj.emergency_group = message.emergencyGroup === "" ? undefined : message.emergencyGroup;
    return obj;
  },
  fromAminoMsg(object: QueryEmergencyGroupResponseAminoMsg): QueryEmergencyGroupResponse {
    return QueryEmergencyGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEmergencyGroupResponseProtoMsg): QueryEmergencyGroupResponse {
    return QueryEmergencyGroupResponse.decode(message.value);
  },
  toProto(message: QueryEmergencyGroupResponse): Uint8Array {
    return QueryEmergencyGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEmergencyGroupResponse): QueryEmergencyGroupResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryEmergencyGroupResponse",
      value: QueryEmergencyGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflationParams(): QueryInflationParams {
  return {};
}
export const QueryInflationParams = {
  typeUrl: "/umee.ugov.v1.QueryInflationParams",
  encode(_: QueryInflationParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInflationParams {
    return {};
  },
  fromPartial(_: Partial<QueryInflationParams>): QueryInflationParams {
    const message = createBaseQueryInflationParams();
    return message;
  },
  fromAmino(_: QueryInflationParamsAmino): QueryInflationParams {
    const message = createBaseQueryInflationParams();
    return message;
  },
  toAmino(_: QueryInflationParams): QueryInflationParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationParamsAminoMsg): QueryInflationParams {
    return QueryInflationParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationParamsProtoMsg): QueryInflationParams {
    return QueryInflationParams.decode(message.value);
  },
  toProto(message: QueryInflationParams): Uint8Array {
    return QueryInflationParams.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationParams): QueryInflationParamsProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryInflationParams",
      value: QueryInflationParams.encode(message).finish()
    };
  }
};
function createBaseQueryInflationParamsResponse(): QueryInflationParamsResponse {
  return {
    params: InflationParams.fromPartial({})
  };
}
export const QueryInflationParamsResponse = {
  typeUrl: "/umee.ugov.v1.QueryInflationParamsResponse",
  encode(message: QueryInflationParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      InflationParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationParamsResponse {
    return {
      params: isSet(object.params) ? InflationParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryInflationParamsResponse>): QueryInflationParamsResponse {
    const message = createBaseQueryInflationParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? InflationParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryInflationParamsResponseAmino): QueryInflationParamsResponse {
    const message = createBaseQueryInflationParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = InflationParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryInflationParamsResponse): QueryInflationParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? InflationParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInflationParamsResponseAminoMsg): QueryInflationParamsResponse {
    return QueryInflationParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationParamsResponseProtoMsg): QueryInflationParamsResponse {
    return QueryInflationParamsResponse.decode(message.value);
  },
  toProto(message: QueryInflationParamsResponse): Uint8Array {
    return QueryInflationParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationParamsResponse): QueryInflationParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryInflationParamsResponse",
      value: QueryInflationParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflationCycleEnd(): QueryInflationCycleEnd {
  return {};
}
export const QueryInflationCycleEnd = {
  typeUrl: "/umee.ugov.v1.QueryInflationCycleEnd",
  encode(_: QueryInflationCycleEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInflationCycleEnd {
    return {};
  },
  fromPartial(_: Partial<QueryInflationCycleEnd>): QueryInflationCycleEnd {
    const message = createBaseQueryInflationCycleEnd();
    return message;
  },
  fromAmino(_: QueryInflationCycleEndAmino): QueryInflationCycleEnd {
    const message = createBaseQueryInflationCycleEnd();
    return message;
  },
  toAmino(_: QueryInflationCycleEnd): QueryInflationCycleEndAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationCycleEndAminoMsg): QueryInflationCycleEnd {
    return QueryInflationCycleEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationCycleEndProtoMsg): QueryInflationCycleEnd {
    return QueryInflationCycleEnd.decode(message.value);
  },
  toProto(message: QueryInflationCycleEnd): Uint8Array {
    return QueryInflationCycleEnd.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationCycleEnd): QueryInflationCycleEndProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryInflationCycleEnd",
      value: QueryInflationCycleEnd.encode(message).finish()
    };
  }
};
function createBaseQueryInflationCycleEndResponse(): QueryInflationCycleEndResponse {
  return {
    end: undefined
  };
}
export const QueryInflationCycleEndResponse = {
  typeUrl: "/umee.ugov.v1.QueryInflationCycleEndResponse",
  encode(message: QueryInflationCycleEndResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationCycleEndResponse {
    return {
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined
    };
  },
  fromPartial(object: Partial<QueryInflationCycleEndResponse>): QueryInflationCycleEndResponse {
    const message = createBaseQueryInflationCycleEndResponse();
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    return message;
  },
  fromAmino(object: QueryInflationCycleEndResponseAmino): QueryInflationCycleEndResponse {
    const message = createBaseQueryInflationCycleEndResponse();
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromAmino(object.end);
    }
    return message;
  },
  toAmino(message: QueryInflationCycleEndResponse): QueryInflationCycleEndResponseAmino {
    const obj: any = {};
    obj.end = message.end ? Timestamp.toAmino(message.end) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInflationCycleEndResponseAminoMsg): QueryInflationCycleEndResponse {
    return QueryInflationCycleEndResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationCycleEndResponseProtoMsg): QueryInflationCycleEndResponse {
    return QueryInflationCycleEndResponse.decode(message.value);
  },
  toProto(message: QueryInflationCycleEndResponse): Uint8Array {
    return QueryInflationCycleEndResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationCycleEndResponse): QueryInflationCycleEndResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.QueryInflationCycleEndResponse",
      value: QueryInflationCycleEndResponse.encode(message).finish()
    };
  }
};