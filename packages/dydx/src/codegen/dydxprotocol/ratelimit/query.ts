import { LimitParams, LimitParamsSDKType } from "./limit_params";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** ListLimitParamsRequest is a request type of the ListLimitParams RPC method. */
export interface ListLimitParamsRequest {}
export interface ListLimitParamsRequestProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.ListLimitParamsRequest";
  value: Uint8Array;
}
/** ListLimitParamsRequest is a request type of the ListLimitParams RPC method. */
export interface ListLimitParamsRequestSDKType {}
/** ListLimitParamsResponse is a response type of the ListLimitParams RPC method. */
export interface ListLimitParamsResponse {
  /** ListLimitParamsResponse is a response type of the ListLimitParams RPC method. */
  limitParamsList: LimitParams[];
}
export interface ListLimitParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.ListLimitParamsResponse";
  value: Uint8Array;
}
/** ListLimitParamsResponse is a response type of the ListLimitParams RPC method. */
export interface ListLimitParamsResponseSDKType {
  limit_params_list: LimitParamsSDKType[];
}
/**
 * QueryCapacityByDenomRequest is a request type for the CapacityByDenom RPC
 * method.
 */
export interface QueryCapacityByDenomRequest {
  /**
   * QueryCapacityByDenomRequest is a request type for the CapacityByDenom RPC
   * method.
   */
  denom: string;
}
export interface QueryCapacityByDenomRequestProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.QueryCapacityByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryCapacityByDenomRequest is a request type for the CapacityByDenom RPC
 * method.
 */
export interface QueryCapacityByDenomRequestSDKType {
  denom: string;
}
/** CapacityResult is a specific rate limit for a denom. */
export interface CapacityResult {
  periodSec: number;
  capacity: Uint8Array;
}
export interface CapacityResultProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.CapacityResult";
  value: Uint8Array;
}
/** CapacityResult is a specific rate limit for a denom. */
export interface CapacityResultSDKType {
  period_sec: number;
  capacity: Uint8Array;
}
/**
 * QueryCapacityByDenomResponse is a response type of the CapacityByDenom RPC
 * method.
 */
export interface QueryCapacityByDenomResponse {
  /**
   * QueryCapacityByDenomResponse is a response type of the CapacityByDenom RPC
   * method.
   */
  results: CapacityResult[];
}
export interface QueryCapacityByDenomResponseProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.QueryCapacityByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryCapacityByDenomResponse is a response type of the CapacityByDenom RPC
 * method.
 */
export interface QueryCapacityByDenomResponseSDKType {
  results: CapacityResultSDKType[];
}
function createBaseListLimitParamsRequest(): ListLimitParamsRequest {
  return {};
}
export const ListLimitParamsRequest = {
  typeUrl: "/dydxprotocol.ratelimit.ListLimitParamsRequest",
  encode(_: ListLimitParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ListLimitParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ListLimitParamsRequest>): ListLimitParamsRequest {
    const message = createBaseListLimitParamsRequest();
    return message;
  },
  fromAmino(_: ListLimitParamsRequestAmino): ListLimitParamsRequest {
    const message = createBaseListLimitParamsRequest();
    return message;
  },
  toAmino(_: ListLimitParamsRequest): ListLimitParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListLimitParamsRequestAminoMsg): ListLimitParamsRequest {
    return ListLimitParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLimitParamsRequestProtoMsg): ListLimitParamsRequest {
    return ListLimitParamsRequest.decode(message.value);
  },
  toProto(message: ListLimitParamsRequest): Uint8Array {
    return ListLimitParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListLimitParamsRequest): ListLimitParamsRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.ListLimitParamsRequest",
      value: ListLimitParamsRequest.encode(message).finish()
    };
  }
};
function createBaseListLimitParamsResponse(): ListLimitParamsResponse {
  return {
    limitParamsList: []
  };
}
export const ListLimitParamsResponse = {
  typeUrl: "/dydxprotocol.ratelimit.ListLimitParamsResponse",
  encode(message: ListLimitParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.limitParamsList) {
      LimitParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListLimitParamsResponse {
    return {
      limitParamsList: Array.isArray(object?.limitParamsList) ? object.limitParamsList.map((e: any) => LimitParams.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ListLimitParamsResponse>): ListLimitParamsResponse {
    const message = createBaseListLimitParamsResponse();
    message.limitParamsList = object.limitParamsList?.map(e => LimitParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListLimitParamsResponseAmino): ListLimitParamsResponse {
    const message = createBaseListLimitParamsResponse();
    message.limitParamsList = object.limit_params_list?.map(e => LimitParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListLimitParamsResponse): ListLimitParamsResponseAmino {
    const obj: any = {};
    if (message.limitParamsList) {
      obj.limit_params_list = message.limitParamsList.map(e => e ? LimitParams.toAmino(e) : undefined);
    } else {
      obj.limit_params_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListLimitParamsResponseAminoMsg): ListLimitParamsResponse {
    return ListLimitParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLimitParamsResponseProtoMsg): ListLimitParamsResponse {
    return ListLimitParamsResponse.decode(message.value);
  },
  toProto(message: ListLimitParamsResponse): Uint8Array {
    return ListLimitParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListLimitParamsResponse): ListLimitParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.ListLimitParamsResponse",
      value: ListLimitParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCapacityByDenomRequest(): QueryCapacityByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryCapacityByDenomRequest = {
  typeUrl: "/dydxprotocol.ratelimit.QueryCapacityByDenomRequest",
  encode(message: QueryCapacityByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryCapacityByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryCapacityByDenomRequest>): QueryCapacityByDenomRequest {
    const message = createBaseQueryCapacityByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryCapacityByDenomRequestAmino): QueryCapacityByDenomRequest {
    const message = createBaseQueryCapacityByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryCapacityByDenomRequest): QueryCapacityByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryCapacityByDenomRequestAminoMsg): QueryCapacityByDenomRequest {
    return QueryCapacityByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCapacityByDenomRequestProtoMsg): QueryCapacityByDenomRequest {
    return QueryCapacityByDenomRequest.decode(message.value);
  },
  toProto(message: QueryCapacityByDenomRequest): Uint8Array {
    return QueryCapacityByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCapacityByDenomRequest): QueryCapacityByDenomRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.QueryCapacityByDenomRequest",
      value: QueryCapacityByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseCapacityResult(): CapacityResult {
  return {
    periodSec: 0,
    capacity: new Uint8Array()
  };
}
export const CapacityResult = {
  typeUrl: "/dydxprotocol.ratelimit.CapacityResult",
  encode(message: CapacityResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.periodSec !== 0) {
      writer.uint32(8).uint32(message.periodSec);
    }
    if (message.capacity.length !== 0) {
      writer.uint32(18).bytes(message.capacity);
    }
    return writer;
  },
  fromJSON(object: any): CapacityResult {
    return {
      periodSec: isSet(object.periodSec) ? Number(object.periodSec) : 0,
      capacity: isSet(object.capacity) ? bytesFromBase64(object.capacity) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CapacityResult>): CapacityResult {
    const message = createBaseCapacityResult();
    message.periodSec = object.periodSec ?? 0;
    message.capacity = object.capacity ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CapacityResultAmino): CapacityResult {
    const message = createBaseCapacityResult();
    if (object.period_sec !== undefined && object.period_sec !== null) {
      message.periodSec = object.period_sec;
    }
    if (object.capacity !== undefined && object.capacity !== null) {
      message.capacity = bytesFromBase64(object.capacity);
    }
    return message;
  },
  toAmino(message: CapacityResult): CapacityResultAmino {
    const obj: any = {};
    obj.period_sec = message.periodSec;
    obj.capacity = message.capacity ? base64FromBytes(message.capacity) : undefined;
    return obj;
  },
  fromAminoMsg(object: CapacityResultAminoMsg): CapacityResult {
    return CapacityResult.fromAmino(object.value);
  },
  fromProtoMsg(message: CapacityResultProtoMsg): CapacityResult {
    return CapacityResult.decode(message.value);
  },
  toProto(message: CapacityResult): Uint8Array {
    return CapacityResult.encode(message).finish();
  },
  toProtoMsg(message: CapacityResult): CapacityResultProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.CapacityResult",
      value: CapacityResult.encode(message).finish()
    };
  }
};
function createBaseQueryCapacityByDenomResponse(): QueryCapacityByDenomResponse {
  return {
    results: []
  };
}
export const QueryCapacityByDenomResponse = {
  typeUrl: "/dydxprotocol.ratelimit.QueryCapacityByDenomResponse",
  encode(message: QueryCapacityByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      CapacityResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCapacityByDenomResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => CapacityResult.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCapacityByDenomResponse>): QueryCapacityByDenomResponse {
    const message = createBaseQueryCapacityByDenomResponse();
    message.results = object.results?.map(e => CapacityResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCapacityByDenomResponseAmino): QueryCapacityByDenomResponse {
    const message = createBaseQueryCapacityByDenomResponse();
    message.results = object.results?.map(e => CapacityResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCapacityByDenomResponse): QueryCapacityByDenomResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? CapacityResult.toAmino(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCapacityByDenomResponseAminoMsg): QueryCapacityByDenomResponse {
    return QueryCapacityByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCapacityByDenomResponseProtoMsg): QueryCapacityByDenomResponse {
    return QueryCapacityByDenomResponse.decode(message.value);
  },
  toProto(message: QueryCapacityByDenomResponse): Uint8Array {
    return QueryCapacityByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCapacityByDenomResponse): QueryCapacityByDenomResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.QueryCapacityByDenomResponse",
      value: QueryCapacityByDenomResponse.encode(message).finish()
    };
  }
};