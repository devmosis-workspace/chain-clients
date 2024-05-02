import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./market";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
  /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
  offerCoin: string;
  /** ask_denom defines the denom of the coin to swap to */
  askDenom: string;
}
export interface QuerySwapRequestProtoMsg {
  typeUrl: "/terra.market.v1beta1.QuerySwapRequest";
  value: Uint8Array;
}
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequestAmino {
  /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
  offer_coin?: string;
  /** ask_denom defines the denom of the coin to swap to */
  ask_denom?: string;
}
export interface QuerySwapRequestAminoMsg {
  type: "/terra.market.v1beta1.QuerySwapRequest";
  value: QuerySwapRequestAmino;
}
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequestSDKType {
  offer_coin: string;
  ask_denom: string;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponse {
  /** return_coin defines the coin returned as a result of the swap simulation. */
  returnCoin: Coin;
}
export interface QuerySwapResponseProtoMsg {
  typeUrl: "/terra.market.v1beta1.QuerySwapResponse";
  value: Uint8Array;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseAmino {
  /** return_coin defines the coin returned as a result of the swap simulation. */
  return_coin?: CoinAmino;
}
export interface QuerySwapResponseAminoMsg {
  type: "/terra.market.v1beta1.QuerySwapResponse";
  value: QuerySwapResponseAmino;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseSDKType {
  return_coin: CoinSDKType;
}
/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequest {}
export interface QueryTerraPoolDeltaRequestProtoMsg {
  typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaRequest";
  value: Uint8Array;
}
/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequestAmino {}
export interface QueryTerraPoolDeltaRequestAminoMsg {
  type: "/terra.market.v1beta1.QueryTerraPoolDeltaRequest";
  value: QueryTerraPoolDeltaRequestAmino;
}
/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequestSDKType {}
/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponse {
  /** terra_pool_delta defines the gap between the TerraPool and the TerraBasePool */
  terraPoolDelta: Uint8Array;
}
export interface QueryTerraPoolDeltaResponseProtoMsg {
  typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaResponse";
  value: Uint8Array;
}
/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponseAmino {
  /** terra_pool_delta defines the gap between the TerraPool and the TerraBasePool */
  terra_pool_delta?: string;
}
export interface QueryTerraPoolDeltaResponseAminoMsg {
  type: "/terra.market.v1beta1.QueryTerraPoolDeltaResponse";
  value: QueryTerraPoolDeltaResponseAmino;
}
/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponseSDKType {
  terra_pool_delta: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/terra.market.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/terra.market.v1beta1.QueryParamsRequest";
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
  typeUrl: "/terra.market.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/terra.market.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQuerySwapRequest(): QuerySwapRequest {
  return {
    offerCoin: "",
    askDenom: ""
  };
}
export const QuerySwapRequest = {
  typeUrl: "/terra.market.v1beta1.QuerySwapRequest",
  encode(message: QuerySwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offerCoin !== "") {
      writer.uint32(10).string(message.offerCoin);
    }
    if (message.askDenom !== "") {
      writer.uint32(18).string(message.askDenom);
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapRequest {
    return {
      offerCoin: isSet(object.offerCoin) ? String(object.offerCoin) : "",
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : ""
    };
  },
  fromPartial(object: Partial<QuerySwapRequest>): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.offerCoin = object.offerCoin ?? "";
    message.askDenom = object.askDenom ?? "";
    return message;
  },
  fromAmino(object: QuerySwapRequestAmino): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offerCoin = object.offer_coin;
    }
    if (object.ask_denom !== undefined && object.ask_denom !== null) {
      message.askDenom = object.ask_denom;
    }
    return message;
  },
  toAmino(message: QuerySwapRequest): QuerySwapRequestAmino {
    const obj: any = {};
    obj.offer_coin = message.offerCoin === "" ? undefined : message.offerCoin;
    obj.ask_denom = message.askDenom === "" ? undefined : message.askDenom;
    return obj;
  },
  fromAminoMsg(object: QuerySwapRequestAminoMsg): QuerySwapRequest {
    return QuerySwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapRequestProtoMsg): QuerySwapRequest {
    return QuerySwapRequest.decode(message.value);
  },
  toProto(message: QuerySwapRequest): Uint8Array {
    return QuerySwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapRequest): QuerySwapRequestProtoMsg {
    return {
      typeUrl: "/terra.market.v1beta1.QuerySwapRequest",
      value: QuerySwapRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapResponse(): QuerySwapResponse {
  return {
    returnCoin: Coin.fromPartial({})
  };
}
export const QuerySwapResponse = {
  typeUrl: "/terra.market.v1beta1.QuerySwapResponse",
  encode(message: QuerySwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.returnCoin !== undefined) {
      Coin.encode(message.returnCoin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapResponse {
    return {
      returnCoin: isSet(object.returnCoin) ? Coin.fromJSON(object.returnCoin) : undefined
    };
  },
  fromPartial(object: Partial<QuerySwapResponse>): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.returnCoin = object.returnCoin !== undefined && object.returnCoin !== null ? Coin.fromPartial(object.returnCoin) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapResponseAmino): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    if (object.return_coin !== undefined && object.return_coin !== null) {
      message.returnCoin = Coin.fromAmino(object.return_coin);
    }
    return message;
  },
  toAmino(message: QuerySwapResponse): QuerySwapResponseAmino {
    const obj: any = {};
    obj.return_coin = message.returnCoin ? Coin.toAmino(message.returnCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapResponseAminoMsg): QuerySwapResponse {
    return QuerySwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapResponseProtoMsg): QuerySwapResponse {
    return QuerySwapResponse.decode(message.value);
  },
  toProto(message: QuerySwapResponse): Uint8Array {
    return QuerySwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapResponse): QuerySwapResponseProtoMsg {
    return {
      typeUrl: "/terra.market.v1beta1.QuerySwapResponse",
      value: QuerySwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTerraPoolDeltaRequest(): QueryTerraPoolDeltaRequest {
  return {};
}
export const QueryTerraPoolDeltaRequest = {
  typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaRequest",
  encode(_: QueryTerraPoolDeltaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTerraPoolDeltaRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTerraPoolDeltaRequest>): QueryTerraPoolDeltaRequest {
    const message = createBaseQueryTerraPoolDeltaRequest();
    return message;
  },
  fromAmino(_: QueryTerraPoolDeltaRequestAmino): QueryTerraPoolDeltaRequest {
    const message = createBaseQueryTerraPoolDeltaRequest();
    return message;
  },
  toAmino(_: QueryTerraPoolDeltaRequest): QueryTerraPoolDeltaRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTerraPoolDeltaRequestAminoMsg): QueryTerraPoolDeltaRequest {
    return QueryTerraPoolDeltaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTerraPoolDeltaRequestProtoMsg): QueryTerraPoolDeltaRequest {
    return QueryTerraPoolDeltaRequest.decode(message.value);
  },
  toProto(message: QueryTerraPoolDeltaRequest): Uint8Array {
    return QueryTerraPoolDeltaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTerraPoolDeltaRequest): QueryTerraPoolDeltaRequestProtoMsg {
    return {
      typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaRequest",
      value: QueryTerraPoolDeltaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTerraPoolDeltaResponse(): QueryTerraPoolDeltaResponse {
  return {
    terraPoolDelta: new Uint8Array()
  };
}
export const QueryTerraPoolDeltaResponse = {
  typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaResponse",
  encode(message: QueryTerraPoolDeltaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.terraPoolDelta.length !== 0) {
      writer.uint32(10).bytes(message.terraPoolDelta);
    }
    return writer;
  },
  fromJSON(object: any): QueryTerraPoolDeltaResponse {
    return {
      terraPoolDelta: isSet(object.terraPoolDelta) ? bytesFromBase64(object.terraPoolDelta) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryTerraPoolDeltaResponse>): QueryTerraPoolDeltaResponse {
    const message = createBaseQueryTerraPoolDeltaResponse();
    message.terraPoolDelta = object.terraPoolDelta ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTerraPoolDeltaResponseAmino): QueryTerraPoolDeltaResponse {
    const message = createBaseQueryTerraPoolDeltaResponse();
    if (object.terra_pool_delta !== undefined && object.terra_pool_delta !== null) {
      message.terraPoolDelta = bytesFromBase64(object.terra_pool_delta);
    }
    return message;
  },
  toAmino(message: QueryTerraPoolDeltaResponse): QueryTerraPoolDeltaResponseAmino {
    const obj: any = {};
    obj.terra_pool_delta = message.terraPoolDelta ? base64FromBytes(message.terraPoolDelta) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTerraPoolDeltaResponseAminoMsg): QueryTerraPoolDeltaResponse {
    return QueryTerraPoolDeltaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTerraPoolDeltaResponseProtoMsg): QueryTerraPoolDeltaResponse {
    return QueryTerraPoolDeltaResponse.decode(message.value);
  },
  toProto(message: QueryTerraPoolDeltaResponse): Uint8Array {
    return QueryTerraPoolDeltaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTerraPoolDeltaResponse): QueryTerraPoolDeltaResponseProtoMsg {
    return {
      typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaResponse",
      value: QueryTerraPoolDeltaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/terra.market.v1beta1.QueryParamsRequest",
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
      typeUrl: "/terra.market.v1beta1.QueryParamsRequest",
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
  typeUrl: "/terra.market.v1beta1.QueryParamsResponse",
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
      typeUrl: "/terra.market.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};