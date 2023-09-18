import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountAmino, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/neutron.feeburner.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/neutron.feeburner.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/neutron.feeburner.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/neutron.feeburner.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequest {}
export interface QueryTotalBurnedNeutronsAmountRequestProtoMsg {
  typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest";
  value: Uint8Array;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequestAmino {}
export interface QueryTotalBurnedNeutronsAmountRequestAminoMsg {
  type: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest";
  value: QueryTotalBurnedNeutronsAmountRequestAmino;
}
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
  totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
export interface QueryTotalBurnedNeutronsAmountResponseProtoMsg {
  typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse";
  value: Uint8Array;
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponseAmino {
  total_burned_neutrons_amount?: TotalBurnedNeutronsAmountAmino;
}
export interface QueryTotalBurnedNeutronsAmountResponseAminoMsg {
  type: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse";
  value: QueryTotalBurnedNeutronsAmountResponseAmino;
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponseSDKType {
  total_burned_neutrons_amount: TotalBurnedNeutronsAmountSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.feeburner.QueryParamsRequest",
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
    return {};
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
      typeUrl: "/neutron.feeburner.QueryParamsRequest",
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
  typeUrl: "/neutron.feeburner.QueryParamsResponse",
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
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
      typeUrl: "/neutron.feeburner.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBurnedNeutronsAmountRequest(): QueryTotalBurnedNeutronsAmountRequest {
  return {};
}
export const QueryTotalBurnedNeutronsAmountRequest = {
  typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest",
  encode(_: QueryTotalBurnedNeutronsAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalBurnedNeutronsAmountRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalBurnedNeutronsAmountRequest>): QueryTotalBurnedNeutronsAmountRequest {
    const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
    return message;
  },
  fromAmino(_: QueryTotalBurnedNeutronsAmountRequestAmino): QueryTotalBurnedNeutronsAmountRequest {
    return {};
  },
  toAmino(_: QueryTotalBurnedNeutronsAmountRequest): QueryTotalBurnedNeutronsAmountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalBurnedNeutronsAmountRequestAminoMsg): QueryTotalBurnedNeutronsAmountRequest {
    return QueryTotalBurnedNeutronsAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBurnedNeutronsAmountRequestProtoMsg): QueryTotalBurnedNeutronsAmountRequest {
    return QueryTotalBurnedNeutronsAmountRequest.decode(message.value);
  },
  toProto(message: QueryTotalBurnedNeutronsAmountRequest): Uint8Array {
    return QueryTotalBurnedNeutronsAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBurnedNeutronsAmountRequest): QueryTotalBurnedNeutronsAmountRequestProtoMsg {
    return {
      typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest",
      value: QueryTotalBurnedNeutronsAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBurnedNeutronsAmountResponse(): QueryTotalBurnedNeutronsAmountResponse {
  return {
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount.fromPartial({})
  };
}
export const QueryTotalBurnedNeutronsAmountResponse = {
  typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse",
  encode(message: QueryTotalBurnedNeutronsAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalBurnedNeutronsAmountResponseAmino): QueryTotalBurnedNeutronsAmountResponse {
    return {
      totalBurnedNeutronsAmount: object?.total_burned_neutrons_amount ? TotalBurnedNeutronsAmount.fromAmino(object.total_burned_neutrons_amount) : undefined
    };
  },
  toAmino(message: QueryTotalBurnedNeutronsAmountResponse): QueryTotalBurnedNeutronsAmountResponseAmino {
    const obj: any = {};
    obj.total_burned_neutrons_amount = message.totalBurnedNeutronsAmount ? TotalBurnedNeutronsAmount.toAmino(message.totalBurnedNeutronsAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalBurnedNeutronsAmountResponseAminoMsg): QueryTotalBurnedNeutronsAmountResponse {
    return QueryTotalBurnedNeutronsAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBurnedNeutronsAmountResponseProtoMsg): QueryTotalBurnedNeutronsAmountResponse {
    return QueryTotalBurnedNeutronsAmountResponse.decode(message.value);
  },
  toProto(message: QueryTotalBurnedNeutronsAmountResponse): Uint8Array {
    return QueryTotalBurnedNeutronsAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBurnedNeutronsAmountResponse): QueryTotalBurnedNeutronsAmountResponseProtoMsg {
    return {
      typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse",
      value: QueryTotalBurnedNeutronsAmountResponse.encode(message).finish()
    };
  }
};