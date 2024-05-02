import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Swap, SwapAmino, SwapSDKType } from "./swap";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QuerySwapsRequest {
  pagination?: PageRequest;
}
export interface QuerySwapsRequestProtoMsg {
  typeUrl: "/sentinel.swap.v1.QuerySwapsRequest";
  value: Uint8Array;
}
export interface QuerySwapsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QuerySwapsRequestAminoMsg {
  type: "/sentinel.swap.v1.QuerySwapsRequest";
  value: QuerySwapsRequestAmino;
}
export interface QuerySwapsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QuerySwapRequest {
  txHash: Uint8Array;
}
export interface QuerySwapRequestProtoMsg {
  typeUrl: "/sentinel.swap.v1.QuerySwapRequest";
  value: Uint8Array;
}
export interface QuerySwapRequestAmino {
  tx_hash?: string;
}
export interface QuerySwapRequestAminoMsg {
  type: "/sentinel.swap.v1.QuerySwapRequest";
  value: QuerySwapRequestAmino;
}
export interface QuerySwapRequestSDKType {
  tx_hash: Uint8Array;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sentinel.swap.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sentinel.swap.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QuerySwapsResponse {
  swaps: Swap[];
  pagination?: PageResponse;
}
export interface QuerySwapsResponseProtoMsg {
  typeUrl: "/sentinel.swap.v1.QuerySwapsResponse";
  value: Uint8Array;
}
export interface QuerySwapsResponseAmino {
  swaps?: SwapAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySwapsResponseAminoMsg {
  type: "/sentinel.swap.v1.QuerySwapsResponse";
  value: QuerySwapsResponseAmino;
}
export interface QuerySwapsResponseSDKType {
  swaps: SwapSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySwapResponse {
  swap: Swap;
}
export interface QuerySwapResponseProtoMsg {
  typeUrl: "/sentinel.swap.v1.QuerySwapResponse";
  value: Uint8Array;
}
export interface QuerySwapResponseAmino {
  swap?: SwapAmino;
}
export interface QuerySwapResponseAminoMsg {
  type: "/sentinel.swap.v1.QuerySwapResponse";
  value: QuerySwapResponseAmino;
}
export interface QuerySwapResponseSDKType {
  swap: SwapSDKType;
}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sentinel.swap.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sentinel.swap.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQuerySwapsRequest(): QuerySwapsRequest {
  return {
    pagination: undefined
  };
}
export const QuerySwapsRequest = {
  typeUrl: "/sentinel.swap.v1.QuerySwapsRequest",
  encode(message: QuerySwapsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySwapsRequest>): QuerySwapsRequest {
    const message = createBaseQuerySwapsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapsRequestAmino): QuerySwapsRequest {
    const message = createBaseQuerySwapsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySwapsRequest): QuerySwapsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapsRequestAminoMsg): QuerySwapsRequest {
    return QuerySwapsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapsRequestProtoMsg): QuerySwapsRequest {
    return QuerySwapsRequest.decode(message.value);
  },
  toProto(message: QuerySwapsRequest): Uint8Array {
    return QuerySwapsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapsRequest): QuerySwapsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.swap.v1.QuerySwapsRequest",
      value: QuerySwapsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapRequest(): QuerySwapRequest {
  return {
    txHash: new Uint8Array()
  };
}
export const QuerySwapRequest = {
  typeUrl: "/sentinel.swap.v1.QuerySwapRequest",
  encode(message: QuerySwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapRequest {
    return {
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QuerySwapRequest>): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QuerySwapRequestAmino): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = bytesFromBase64(object.tx_hash);
    }
    return message;
  },
  toAmino(message: QuerySwapRequest): QuerySwapRequestAmino {
    const obj: any = {};
    obj.tx_hash = message.txHash ? base64FromBytes(message.txHash) : undefined;
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
      typeUrl: "/sentinel.swap.v1.QuerySwapRequest",
      value: QuerySwapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/sentinel.swap.v1.QueryParamsRequest",
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
      typeUrl: "/sentinel.swap.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapsResponse(): QuerySwapsResponse {
  return {
    swaps: [],
    pagination: undefined
  };
}
export const QuerySwapsResponse = {
  typeUrl: "/sentinel.swap.v1.QuerySwapsResponse",
  encode(message: QuerySwapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.swaps) {
      Swap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapsResponse {
    return {
      swaps: Array.isArray(object?.swaps) ? object.swaps.map((e: any) => Swap.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySwapsResponse>): QuerySwapsResponse {
    const message = createBaseQuerySwapsResponse();
    message.swaps = object.swaps?.map(e => Swap.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapsResponseAmino): QuerySwapsResponse {
    const message = createBaseQuerySwapsResponse();
    message.swaps = object.swaps?.map(e => Swap.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySwapsResponse): QuerySwapsResponseAmino {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map(e => e ? Swap.toAmino(e) : undefined);
    } else {
      obj.swaps = message.swaps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapsResponseAminoMsg): QuerySwapsResponse {
    return QuerySwapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapsResponseProtoMsg): QuerySwapsResponse {
    return QuerySwapsResponse.decode(message.value);
  },
  toProto(message: QuerySwapsResponse): Uint8Array {
    return QuerySwapsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapsResponse): QuerySwapsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.swap.v1.QuerySwapsResponse",
      value: QuerySwapsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapResponse(): QuerySwapResponse {
  return {
    swap: Swap.fromPartial({})
  };
}
export const QuerySwapResponse = {
  typeUrl: "/sentinel.swap.v1.QuerySwapResponse",
  encode(message: QuerySwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapResponse {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined
    };
  },
  fromPartial(object: Partial<QuerySwapResponse>): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.swap = object.swap !== undefined && object.swap !== null ? Swap.fromPartial(object.swap) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapResponseAmino): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    if (object.swap !== undefined && object.swap !== null) {
      message.swap = Swap.fromAmino(object.swap);
    }
    return message;
  },
  toAmino(message: QuerySwapResponse): QuerySwapResponseAmino {
    const obj: any = {};
    obj.swap = message.swap ? Swap.toAmino(message.swap) : undefined;
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
      typeUrl: "/sentinel.swap.v1.QuerySwapResponse",
      value: QuerySwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/sentinel.swap.v1.QueryParamsResponse",
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
      typeUrl: "/sentinel.swap.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};