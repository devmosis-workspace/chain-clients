import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequest {
  /**
   * InflationRateRequest represents a message that queries the Axelar specific
   * inflation RPC method. Ideally, this would use ValAddress as the validator
   * field type. However, this makes it awkward for REST-based calls, because it
   * would expect a byte array as part of the url. So, the bech32 encoded address
   * string is used for this request instead.
   */
  validator: string;
}
export interface InflationRateRequestProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.InflationRateRequest";
  value: Uint8Array;
}
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequestAmino {
  /**
   * InflationRateRequest represents a message that queries the Axelar specific
   * inflation RPC method. Ideally, this would use ValAddress as the validator
   * field type. However, this makes it awkward for REST-based calls, because it
   * would expect a byte array as part of the url. So, the bech32 encoded address
   * string is used for this request instead.
   */
  validator?: string;
}
export interface InflationRateRequestAminoMsg {
  type: "/axelar.reward.v1beta1.InflationRateRequest";
  value: InflationRateRequestAmino;
}
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequestSDKType {
  validator: string;
}
export interface InflationRateResponse {
  inflationRate: Uint8Array;
}
export interface InflationRateResponseProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.InflationRateResponse";
  value: Uint8Array;
}
export interface InflationRateResponseAmino {
  inflation_rate?: string;
}
export interface InflationRateResponseAminoMsg {
  type: "/axelar.reward.v1beta1.InflationRateResponse";
  value: InflationRateResponseAmino;
}
export interface InflationRateResponseSDKType {
  inflation_rate: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/axelar.reward.v1beta1.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/axelar.reward.v1beta1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseInflationRateRequest(): InflationRateRequest {
  return {
    validator: ""
  };
}
export const InflationRateRequest = {
  typeUrl: "/axelar.reward.v1beta1.InflationRateRequest",
  encode(message: InflationRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): InflationRateRequest {
    return {
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<InflationRateRequest>): InflationRateRequest {
    const message = createBaseInflationRateRequest();
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: InflationRateRequestAmino): InflationRateRequest {
    const message = createBaseInflationRateRequest();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: InflationRateRequest): InflationRateRequestAmino {
    const obj: any = {};
    obj.validator = message.validator;
    return obj;
  },
  fromAminoMsg(object: InflationRateRequestAminoMsg): InflationRateRequest {
    return InflationRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationRateRequestProtoMsg): InflationRateRequest {
    return InflationRateRequest.decode(message.value);
  },
  toProto(message: InflationRateRequest): Uint8Array {
    return InflationRateRequest.encode(message).finish();
  },
  toProtoMsg(message: InflationRateRequest): InflationRateRequestProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.InflationRateRequest",
      value: InflationRateRequest.encode(message).finish()
    };
  }
};
function createBaseInflationRateResponse(): InflationRateResponse {
  return {
    inflationRate: new Uint8Array()
  };
}
export const InflationRateResponse = {
  typeUrl: "/axelar.reward.v1beta1.InflationRateResponse",
  encode(message: InflationRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: InflationRateResponseAmino): InflationRateResponse {
    const message = createBaseInflationRateResponse();
    if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
      message.inflationRate = bytesFromBase64(object.inflation_rate);
    }
    return message;
  },
  toAmino(message: InflationRateResponse): InflationRateResponseAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate ? base64FromBytes(message.inflationRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: InflationRateResponseAminoMsg): InflationRateResponse {
    return InflationRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationRateResponseProtoMsg): InflationRateResponse {
    return InflationRateResponse.decode(message.value);
  },
  toProto(message: InflationRateResponse): Uint8Array {
    return InflationRateResponse.encode(message).finish();
  },
  toProtoMsg(message: InflationRateResponse): InflationRateResponseProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.InflationRateResponse",
      value: InflationRateResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/axelar.reward.v1beta1.ParamsRequest",
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
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.ParamsRequest",
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
  typeUrl: "/axelar.reward.v1beta1.ParamsResponse",
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
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};