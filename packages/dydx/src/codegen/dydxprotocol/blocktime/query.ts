import { DowntimeParams, DowntimeParamsSDKType } from "./params";
import { BlockInfo, BlockInfoSDKType, AllDowntimeInfo, AllDowntimeInfoSDKType } from "./blocktime";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * QueryDowntimeParamsRequest is a request type for the DowntimeParams
 * RPC method.
 */
export interface QueryDowntimeParamsRequest {}
export interface QueryDowntimeParamsRequestProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.QueryDowntimeParamsRequest";
  value: Uint8Array;
}
/**
 * QueryDowntimeParamsRequest is a request type for the DowntimeParams
 * RPC method.
 */
export interface QueryDowntimeParamsRequestSDKType {}
/**
 * QueryDowntimeParamsResponse is a response type for the DowntimeParams
 * RPC method.
 */
export interface QueryDowntimeParamsResponse {
  params: DowntimeParams;
}
export interface QueryDowntimeParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.QueryDowntimeParamsResponse";
  value: Uint8Array;
}
/**
 * QueryDowntimeParamsResponse is a response type for the DowntimeParams
 * RPC method.
 */
export interface QueryDowntimeParamsResponseSDKType {
  params: DowntimeParamsSDKType;
}
/**
 * QueryPreviousBlockInfoRequest is a request type for the PreviousBlockInfo
 * RPC method.
 */
export interface QueryPreviousBlockInfoRequest {}
export interface QueryPreviousBlockInfoRequestProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.QueryPreviousBlockInfoRequest";
  value: Uint8Array;
}
/**
 * QueryPreviousBlockInfoRequest is a request type for the PreviousBlockInfo
 * RPC method.
 */
export interface QueryPreviousBlockInfoRequestSDKType {}
/**
 * QueryPreviousBlockInfoResponse is a request type for the PreviousBlockInfo
 * RPC method.
 */
export interface QueryPreviousBlockInfoResponse {
  /**
   * QueryPreviousBlockInfoResponse is a request type for the PreviousBlockInfo
   * RPC method.
   */
  info?: BlockInfo;
}
export interface QueryPreviousBlockInfoResponseProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.QueryPreviousBlockInfoResponse";
  value: Uint8Array;
}
/**
 * QueryPreviousBlockInfoResponse is a request type for the PreviousBlockInfo
 * RPC method.
 */
export interface QueryPreviousBlockInfoResponseSDKType {
  info?: BlockInfoSDKType;
}
/**
 * QueryAllDowntimeInfoRequest is a request type for the AllDowntimeInfo
 * RPC method.
 */
export interface QueryAllDowntimeInfoRequest {}
export interface QueryAllDowntimeInfoRequestProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.QueryAllDowntimeInfoRequest";
  value: Uint8Array;
}
/**
 * QueryAllDowntimeInfoRequest is a request type for the AllDowntimeInfo
 * RPC method.
 */
export interface QueryAllDowntimeInfoRequestSDKType {}
/**
 * QueryAllDowntimeInfoResponse is a request type for the AllDowntimeInfo
 * RPC method.
 */
export interface QueryAllDowntimeInfoResponse {
  /**
   * QueryAllDowntimeInfoResponse is a request type for the AllDowntimeInfo
   * RPC method.
   */
  info?: AllDowntimeInfo;
}
export interface QueryAllDowntimeInfoResponseProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.QueryAllDowntimeInfoResponse";
  value: Uint8Array;
}
/**
 * QueryAllDowntimeInfoResponse is a request type for the AllDowntimeInfo
 * RPC method.
 */
export interface QueryAllDowntimeInfoResponseSDKType {
  info?: AllDowntimeInfoSDKType;
}
function createBaseQueryDowntimeParamsRequest(): QueryDowntimeParamsRequest {
  return {};
}
export const QueryDowntimeParamsRequest = {
  typeUrl: "/dydxprotocol.blocktime.QueryDowntimeParamsRequest",
  encode(_: QueryDowntimeParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryDowntimeParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryDowntimeParamsRequest>): QueryDowntimeParamsRequest {
    const message = createBaseQueryDowntimeParamsRequest();
    return message;
  },
  fromAmino(_: QueryDowntimeParamsRequestAmino): QueryDowntimeParamsRequest {
    const message = createBaseQueryDowntimeParamsRequest();
    return message;
  },
  toAmino(_: QueryDowntimeParamsRequest): QueryDowntimeParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDowntimeParamsRequestAminoMsg): QueryDowntimeParamsRequest {
    return QueryDowntimeParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDowntimeParamsRequestProtoMsg): QueryDowntimeParamsRequest {
    return QueryDowntimeParamsRequest.decode(message.value);
  },
  toProto(message: QueryDowntimeParamsRequest): Uint8Array {
    return QueryDowntimeParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDowntimeParamsRequest): QueryDowntimeParamsRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.QueryDowntimeParamsRequest",
      value: QueryDowntimeParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDowntimeParamsResponse(): QueryDowntimeParamsResponse {
  return {
    params: DowntimeParams.fromPartial({})
  };
}
export const QueryDowntimeParamsResponse = {
  typeUrl: "/dydxprotocol.blocktime.QueryDowntimeParamsResponse",
  encode(message: QueryDowntimeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      DowntimeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDowntimeParamsResponse {
    return {
      params: isSet(object.params) ? DowntimeParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryDowntimeParamsResponse>): QueryDowntimeParamsResponse {
    const message = createBaseQueryDowntimeParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? DowntimeParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryDowntimeParamsResponseAmino): QueryDowntimeParamsResponse {
    const message = createBaseQueryDowntimeParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = DowntimeParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryDowntimeParamsResponse): QueryDowntimeParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? DowntimeParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDowntimeParamsResponseAminoMsg): QueryDowntimeParamsResponse {
    return QueryDowntimeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDowntimeParamsResponseProtoMsg): QueryDowntimeParamsResponse {
    return QueryDowntimeParamsResponse.decode(message.value);
  },
  toProto(message: QueryDowntimeParamsResponse): Uint8Array {
    return QueryDowntimeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDowntimeParamsResponse): QueryDowntimeParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.QueryDowntimeParamsResponse",
      value: QueryDowntimeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPreviousBlockInfoRequest(): QueryPreviousBlockInfoRequest {
  return {};
}
export const QueryPreviousBlockInfoRequest = {
  typeUrl: "/dydxprotocol.blocktime.QueryPreviousBlockInfoRequest",
  encode(_: QueryPreviousBlockInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPreviousBlockInfoRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPreviousBlockInfoRequest>): QueryPreviousBlockInfoRequest {
    const message = createBaseQueryPreviousBlockInfoRequest();
    return message;
  },
  fromAmino(_: QueryPreviousBlockInfoRequestAmino): QueryPreviousBlockInfoRequest {
    const message = createBaseQueryPreviousBlockInfoRequest();
    return message;
  },
  toAmino(_: QueryPreviousBlockInfoRequest): QueryPreviousBlockInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPreviousBlockInfoRequestAminoMsg): QueryPreviousBlockInfoRequest {
    return QueryPreviousBlockInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPreviousBlockInfoRequestProtoMsg): QueryPreviousBlockInfoRequest {
    return QueryPreviousBlockInfoRequest.decode(message.value);
  },
  toProto(message: QueryPreviousBlockInfoRequest): Uint8Array {
    return QueryPreviousBlockInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPreviousBlockInfoRequest): QueryPreviousBlockInfoRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.QueryPreviousBlockInfoRequest",
      value: QueryPreviousBlockInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPreviousBlockInfoResponse(): QueryPreviousBlockInfoResponse {
  return {
    info: undefined
  };
}
export const QueryPreviousBlockInfoResponse = {
  typeUrl: "/dydxprotocol.blocktime.QueryPreviousBlockInfoResponse",
  encode(message: QueryPreviousBlockInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      BlockInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPreviousBlockInfoResponse {
    return {
      info: isSet(object.info) ? BlockInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<QueryPreviousBlockInfoResponse>): QueryPreviousBlockInfoResponse {
    const message = createBaseQueryPreviousBlockInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? BlockInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryPreviousBlockInfoResponseAmino): QueryPreviousBlockInfoResponse {
    const message = createBaseQueryPreviousBlockInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = BlockInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryPreviousBlockInfoResponse): QueryPreviousBlockInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? BlockInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPreviousBlockInfoResponseAminoMsg): QueryPreviousBlockInfoResponse {
    return QueryPreviousBlockInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPreviousBlockInfoResponseProtoMsg): QueryPreviousBlockInfoResponse {
    return QueryPreviousBlockInfoResponse.decode(message.value);
  },
  toProto(message: QueryPreviousBlockInfoResponse): Uint8Array {
    return QueryPreviousBlockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPreviousBlockInfoResponse): QueryPreviousBlockInfoResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.QueryPreviousBlockInfoResponse",
      value: QueryPreviousBlockInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDowntimeInfoRequest(): QueryAllDowntimeInfoRequest {
  return {};
}
export const QueryAllDowntimeInfoRequest = {
  typeUrl: "/dydxprotocol.blocktime.QueryAllDowntimeInfoRequest",
  encode(_: QueryAllDowntimeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllDowntimeInfoRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllDowntimeInfoRequest>): QueryAllDowntimeInfoRequest {
    const message = createBaseQueryAllDowntimeInfoRequest();
    return message;
  },
  fromAmino(_: QueryAllDowntimeInfoRequestAmino): QueryAllDowntimeInfoRequest {
    const message = createBaseQueryAllDowntimeInfoRequest();
    return message;
  },
  toAmino(_: QueryAllDowntimeInfoRequest): QueryAllDowntimeInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllDowntimeInfoRequestAminoMsg): QueryAllDowntimeInfoRequest {
    return QueryAllDowntimeInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDowntimeInfoRequestProtoMsg): QueryAllDowntimeInfoRequest {
    return QueryAllDowntimeInfoRequest.decode(message.value);
  },
  toProto(message: QueryAllDowntimeInfoRequest): Uint8Array {
    return QueryAllDowntimeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDowntimeInfoRequest): QueryAllDowntimeInfoRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.QueryAllDowntimeInfoRequest",
      value: QueryAllDowntimeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDowntimeInfoResponse(): QueryAllDowntimeInfoResponse {
  return {
    info: undefined
  };
}
export const QueryAllDowntimeInfoResponse = {
  typeUrl: "/dydxprotocol.blocktime.QueryAllDowntimeInfoResponse",
  encode(message: QueryAllDowntimeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      AllDowntimeInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDowntimeInfoResponse {
    return {
      info: isSet(object.info) ? AllDowntimeInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDowntimeInfoResponse>): QueryAllDowntimeInfoResponse {
    const message = createBaseQueryAllDowntimeInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? AllDowntimeInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDowntimeInfoResponseAmino): QueryAllDowntimeInfoResponse {
    const message = createBaseQueryAllDowntimeInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = AllDowntimeInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryAllDowntimeInfoResponse): QueryAllDowntimeInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? AllDowntimeInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDowntimeInfoResponseAminoMsg): QueryAllDowntimeInfoResponse {
    return QueryAllDowntimeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDowntimeInfoResponseProtoMsg): QueryAllDowntimeInfoResponse {
    return QueryAllDowntimeInfoResponse.decode(message.value);
  },
  toProto(message: QueryAllDowntimeInfoResponse): Uint8Array {
    return QueryAllDowntimeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDowntimeInfoResponse): QueryAllDowntimeInfoResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.QueryAllDowntimeInfoResponse",
      value: QueryAllDowntimeInfoResponse.encode(message).finish()
    };
  }
};