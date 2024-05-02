import { Params, ParamsAmino, ParamsSDKType } from "./dyncomm";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/terra.dyncomm.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/terra.dyncomm.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryRateRequest is the request type for the Query/Rate RPC method. */
export interface QueryRateRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryRateRequestProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.QueryRateRequest";
  value: Uint8Array;
}
/** QueryRateRequest is the request type for the Query/Rate RPC method. */
export interface QueryRateRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryRateRequestAminoMsg {
  type: "/terra.dyncomm.v1beta1.QueryRateRequest";
  value: QueryRateRequestAmino;
}
/** QueryRateRequest is the request type for the Query/Rate RPC method. */
export interface QueryRateRequestSDKType {
  validator_addr: string;
}
/** QueryRateResponse is the response type for the Query/Rate RPC method. */
export interface QueryRateResponse {
  rate: string;
  target: string;
}
export interface QueryRateResponseProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.QueryRateResponse";
  value: Uint8Array;
}
/** QueryRateResponse is the response type for the Query/Rate RPC method. */
export interface QueryRateResponseAmino {
  rate?: string;
  target?: string;
}
export interface QueryRateResponseAminoMsg {
  type: "/terra.dyncomm.v1beta1.QueryRateResponse";
  value: QueryRateResponseAmino;
}
/** QueryRateResponse is the response type for the Query/Rate RPC method. */
export interface QueryRateResponseSDKType {
  rate: string;
  target: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/terra.dyncomm.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/terra.dyncomm.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/terra.dyncomm.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/terra.dyncomm.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateRequest(): QueryRateRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryRateRequest = {
  typeUrl: "/terra.dyncomm.v1beta1.QueryRateRequest",
  encode(message: QueryRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryRateRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryRateRequest>): QueryRateRequest {
    const message = createBaseQueryRateRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryRateRequestAmino): QueryRateRequest {
    const message = createBaseQueryRateRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryRateRequest): QueryRateRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryRateRequestAminoMsg): QueryRateRequest {
    return QueryRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateRequestProtoMsg): QueryRateRequest {
    return QueryRateRequest.decode(message.value);
  },
  toProto(message: QueryRateRequest): Uint8Array {
    return QueryRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateRequest): QueryRateRequestProtoMsg {
    return {
      typeUrl: "/terra.dyncomm.v1beta1.QueryRateRequest",
      value: QueryRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateResponse(): QueryRateResponse {
  return {
    rate: "",
    target: ""
  };
}
export const QueryRateResponse = {
  typeUrl: "/terra.dyncomm.v1beta1.QueryRateResponse",
  encode(message: QueryRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.target !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.target, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryRateResponse {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      target: isSet(object.target) ? String(object.target) : ""
    };
  },
  fromPartial(object: Partial<QueryRateResponse>): QueryRateResponse {
    const message = createBaseQueryRateResponse();
    message.rate = object.rate ?? "";
    message.target = object.target ?? "";
    return message;
  },
  fromAmino(object: QueryRateResponseAmino): QueryRateResponse {
    const message = createBaseQueryRateResponse();
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    return message;
  },
  toAmino(message: QueryRateResponse): QueryRateResponseAmino {
    const obj: any = {};
    obj.rate = message.rate === "" ? undefined : message.rate;
    obj.target = message.target === "" ? undefined : message.target;
    return obj;
  },
  fromAminoMsg(object: QueryRateResponseAminoMsg): QueryRateResponse {
    return QueryRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateResponseProtoMsg): QueryRateResponse {
    return QueryRateResponse.decode(message.value);
  },
  toProto(message: QueryRateResponse): Uint8Array {
    return QueryRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateResponse): QueryRateResponseProtoMsg {
    return {
      typeUrl: "/terra.dyncomm.v1beta1.QueryRateResponse",
      value: QueryRateResponse.encode(message).finish()
    };
  }
};