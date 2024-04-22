import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType, CorkResult, CorkResultAmino, CorkResultSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cork.v2.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cork.v2.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
  /** allocation parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cork.v2.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseAmino {
  /** allocation parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cork.v2.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {}
export interface QueryCellarIDsRequestProtoMsg {
  typeUrl: "/cork.v2.QueryCellarIDsRequest";
  value: Uint8Array;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestAmino {}
export interface QueryCellarIDsRequestAminoMsg {
  type: "/cork.v2.QueryCellarIDsRequest";
  value: QueryCellarIDsRequestAmino;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
  cellarIds: string[];
}
export interface QueryCellarIDsResponseProtoMsg {
  typeUrl: "/cork.v2.QueryCellarIDsResponse";
  value: Uint8Array;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseAmino {
  cellar_ids?: string[];
}
export interface QueryCellarIDsResponseAminoMsg {
  type: "/cork.v2.QueryCellarIDsResponse";
  value: QueryCellarIDsResponseAmino;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseSDKType {
  cellar_ids: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {}
export interface QueryScheduledCorksRequestProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledCorksRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestAmino {}
export interface QueryScheduledCorksRequestAminoMsg {
  type: "/cork.v2.QueryScheduledCorksRequest";
  value: QueryScheduledCorksRequestAmino;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestSDKType {}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
  corks: ScheduledCork[];
}
export interface QueryScheduledCorksResponseProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledCorksResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseAmino {
  corks?: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksResponseAminoMsg {
  type: "/cork.v2.QueryScheduledCorksResponse";
  value: QueryScheduledCorksResponseAmino;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {}
export interface QueryScheduledBlockHeightsRequestProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledBlockHeightsRequest";
  value: Uint8Array;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestAmino {}
export interface QueryScheduledBlockHeightsRequestAminoMsg {
  type: "/cork.v2.QueryScheduledBlockHeightsRequest";
  value: QueryScheduledBlockHeightsRequestAmino;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestSDKType {}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
  blockHeights: bigint[];
}
export interface QueryScheduledBlockHeightsResponseProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledBlockHeightsResponse";
  value: Uint8Array;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseAmino {
  block_heights?: string[];
}
export interface QueryScheduledBlockHeightsResponseAminoMsg {
  type: "/cork.v2.QueryScheduledBlockHeightsResponse";
  value: QueryScheduledBlockHeightsResponseAmino;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseSDKType {
  block_heights: bigint[];
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
  blockHeight: bigint;
}
export interface QueryScheduledCorksByBlockHeightRequestProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestAmino {
  block_height?: string;
}
export interface QueryScheduledCorksByBlockHeightRequestAminoMsg {
  type: "/cork.v2.QueryScheduledCorksByBlockHeightRequest";
  value: QueryScheduledCorksByBlockHeightRequestAmino;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestSDKType {
  block_height: bigint;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
  corks: ScheduledCork[];
}
export interface QueryScheduledCorksByBlockHeightResponseProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseAmino {
  corks?: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksByBlockHeightResponseAminoMsg {
  type: "/cork.v2.QueryScheduledCorksByBlockHeightResponse";
  value: QueryScheduledCorksByBlockHeightResponseAmino;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequest {
  id: string;
}
export interface QueryScheduledCorksByIDRequestProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledCorksByIDRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequestAmino {
  id?: string;
}
export interface QueryScheduledCorksByIDRequestAminoMsg {
  type: "/cork.v2.QueryScheduledCorksByIDRequest";
  value: QueryScheduledCorksByIDRequestAmino;
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequestSDKType {
  id: string;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponse {
  corks: ScheduledCork[];
}
export interface QueryScheduledCorksByIDResponseProtoMsg {
  typeUrl: "/cork.v2.QueryScheduledCorksByIDResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponseAmino {
  corks?: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksByIDResponseAminoMsg {
  type: "/cork.v2.QueryScheduledCorksByIDResponse";
  value: QueryScheduledCorksByIDResponseAmino;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
export interface QueryCorkResultRequest {
  id: string;
}
export interface QueryCorkResultRequestProtoMsg {
  typeUrl: "/cork.v2.QueryCorkResultRequest";
  value: Uint8Array;
}
export interface QueryCorkResultRequestAmino {
  id?: string;
}
export interface QueryCorkResultRequestAminoMsg {
  type: "/cork.v2.QueryCorkResultRequest";
  value: QueryCorkResultRequestAmino;
}
export interface QueryCorkResultRequestSDKType {
  id: string;
}
export interface QueryCorkResultResponse {
  corkResult?: CorkResult;
}
export interface QueryCorkResultResponseProtoMsg {
  typeUrl: "/cork.v2.QueryCorkResultResponse";
  value: Uint8Array;
}
export interface QueryCorkResultResponseAmino {
  corkResult?: CorkResultAmino;
}
export interface QueryCorkResultResponseAminoMsg {
  type: "/cork.v2.QueryCorkResultResponse";
  value: QueryCorkResultResponseAmino;
}
export interface QueryCorkResultResponseSDKType {
  corkResult?: CorkResultSDKType;
}
export interface QueryCorkResultsRequest {}
export interface QueryCorkResultsRequestProtoMsg {
  typeUrl: "/cork.v2.QueryCorkResultsRequest";
  value: Uint8Array;
}
export interface QueryCorkResultsRequestAmino {}
export interface QueryCorkResultsRequestAminoMsg {
  type: "/cork.v2.QueryCorkResultsRequest";
  value: QueryCorkResultsRequestAmino;
}
export interface QueryCorkResultsRequestSDKType {}
export interface QueryCorkResultsResponse {
  corkResults: CorkResult[];
}
export interface QueryCorkResultsResponseProtoMsg {
  typeUrl: "/cork.v2.QueryCorkResultsResponse";
  value: Uint8Array;
}
export interface QueryCorkResultsResponseAmino {
  corkResults?: CorkResultAmino[];
}
export interface QueryCorkResultsResponseAminoMsg {
  type: "/cork.v2.QueryCorkResultsResponse";
  value: QueryCorkResultsResponseAmino;
}
export interface QueryCorkResultsResponseSDKType {
  corkResults: CorkResultSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cork.v2.QueryParamsRequest",
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
      typeUrl: "/cork.v2.QueryParamsRequest",
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
  typeUrl: "/cork.v2.QueryParamsResponse",
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
      typeUrl: "/cork.v2.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsRequest(): QueryCellarIDsRequest {
  return {};
}
export const QueryCellarIDsRequest = {
  typeUrl: "/cork.v2.QueryCellarIDsRequest",
  encode(_: QueryCellarIDsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCellarIDsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCellarIDsRequest>): QueryCellarIDsRequest {
    const message = createBaseQueryCellarIDsRequest();
    return message;
  },
  fromAmino(_: QueryCellarIDsRequestAmino): QueryCellarIDsRequest {
    const message = createBaseQueryCellarIDsRequest();
    return message;
  },
  toAmino(_: QueryCellarIDsRequest): QueryCellarIDsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCellarIDsRequestAminoMsg): QueryCellarIDsRequest {
    return QueryCellarIDsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCellarIDsRequestProtoMsg): QueryCellarIDsRequest {
    return QueryCellarIDsRequest.decode(message.value);
  },
  toProto(message: QueryCellarIDsRequest): Uint8Array {
    return QueryCellarIDsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCellarIDsRequest): QueryCellarIDsRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryCellarIDsRequest",
      value: QueryCellarIDsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsResponse(): QueryCellarIDsResponse {
  return {
    cellarIds: []
  };
}
export const QueryCellarIDsResponse = {
  typeUrl: "/cork.v2.QueryCellarIDsResponse",
  encode(message: QueryCellarIDsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cellarIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryCellarIDsResponse {
    return {
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCellarIDsResponse>): QueryCellarIDsResponse {
    const message = createBaseQueryCellarIDsResponse();
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryCellarIDsResponseAmino): QueryCellarIDsResponse {
    const message = createBaseQueryCellarIDsResponse();
    message.cellarIds = object.cellar_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryCellarIDsResponse): QueryCellarIDsResponseAmino {
    const obj: any = {};
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e);
    } else {
      obj.cellar_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCellarIDsResponseAminoMsg): QueryCellarIDsResponse {
    return QueryCellarIDsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCellarIDsResponseProtoMsg): QueryCellarIDsResponse {
    return QueryCellarIDsResponse.decode(message.value);
  },
  toProto(message: QueryCellarIDsResponse): Uint8Array {
    return QueryCellarIDsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCellarIDsResponse): QueryCellarIDsResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryCellarIDsResponse",
      value: QueryCellarIDsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksRequest(): QueryScheduledCorksRequest {
  return {};
}
export const QueryScheduledCorksRequest = {
  typeUrl: "/cork.v2.QueryScheduledCorksRequest",
  encode(_: QueryScheduledCorksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryScheduledCorksRequest {
    return {};
  },
  fromPartial(_: Partial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest {
    const message = createBaseQueryScheduledCorksRequest();
    return message;
  },
  fromAmino(_: QueryScheduledCorksRequestAmino): QueryScheduledCorksRequest {
    const message = createBaseQueryScheduledCorksRequest();
    return message;
  },
  toAmino(_: QueryScheduledCorksRequest): QueryScheduledCorksRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksRequestAminoMsg): QueryScheduledCorksRequest {
    return QueryScheduledCorksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksRequestProtoMsg): QueryScheduledCorksRequest {
    return QueryScheduledCorksRequest.decode(message.value);
  },
  toProto(message: QueryScheduledCorksRequest): Uint8Array {
    return QueryScheduledCorksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksRequest): QueryScheduledCorksRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledCorksRequest",
      value: QueryScheduledCorksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksResponse(): QueryScheduledCorksResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksResponse = {
  typeUrl: "/cork.v2.QueryScheduledCorksResponse",
  encode(message: QueryScheduledCorksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      ScheduledCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse {
    const message = createBaseQueryScheduledCorksResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryScheduledCorksResponseAmino): QueryScheduledCorksResponse {
    const message = createBaseQueryScheduledCorksResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksResponseAminoMsg): QueryScheduledCorksResponse {
    return QueryScheduledCorksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksResponseProtoMsg): QueryScheduledCorksResponse {
    return QueryScheduledCorksResponse.decode(message.value);
  },
  toProto(message: QueryScheduledCorksResponse): Uint8Array {
    return QueryScheduledCorksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledCorksResponse",
      value: QueryScheduledCorksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledBlockHeightsRequest(): QueryScheduledBlockHeightsRequest {
  return {};
}
export const QueryScheduledBlockHeightsRequest = {
  typeUrl: "/cork.v2.QueryScheduledBlockHeightsRequest",
  encode(_: QueryScheduledBlockHeightsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryScheduledBlockHeightsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest {
    const message = createBaseQueryScheduledBlockHeightsRequest();
    return message;
  },
  fromAmino(_: QueryScheduledBlockHeightsRequestAmino): QueryScheduledBlockHeightsRequest {
    const message = createBaseQueryScheduledBlockHeightsRequest();
    return message;
  },
  toAmino(_: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryScheduledBlockHeightsRequestAminoMsg): QueryScheduledBlockHeightsRequest {
    return QueryScheduledBlockHeightsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledBlockHeightsRequestProtoMsg): QueryScheduledBlockHeightsRequest {
    return QueryScheduledBlockHeightsRequest.decode(message.value);
  },
  toProto(message: QueryScheduledBlockHeightsRequest): Uint8Array {
    return QueryScheduledBlockHeightsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledBlockHeightsRequest",
      value: QueryScheduledBlockHeightsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledBlockHeightsResponse(): QueryScheduledBlockHeightsResponse {
  return {
    blockHeights: []
  };
}
export const QueryScheduledBlockHeightsResponse = {
  typeUrl: "/cork.v2.QueryScheduledBlockHeightsResponse",
  encode(message: QueryScheduledBlockHeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.blockHeights) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): QueryScheduledBlockHeightsResponse {
    return {
      blockHeights: Array.isArray(object?.blockHeights) ? object.blockHeights.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse {
    const message = createBaseQueryScheduledBlockHeightsResponse();
    message.blockHeights = object.blockHeights?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryScheduledBlockHeightsResponseAmino): QueryScheduledBlockHeightsResponse {
    const message = createBaseQueryScheduledBlockHeightsResponse();
    message.blockHeights = object.block_heights?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseAmino {
    const obj: any = {};
    if (message.blockHeights) {
      obj.block_heights = message.blockHeights.map(e => e.toString());
    } else {
      obj.block_heights = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledBlockHeightsResponseAminoMsg): QueryScheduledBlockHeightsResponse {
    return QueryScheduledBlockHeightsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledBlockHeightsResponseProtoMsg): QueryScheduledBlockHeightsResponse {
    return QueryScheduledBlockHeightsResponse.decode(message.value);
  },
  toProto(message: QueryScheduledBlockHeightsResponse): Uint8Array {
    return QueryScheduledBlockHeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledBlockHeightsResponse",
      value: QueryScheduledBlockHeightsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByBlockHeightRequest(): QueryScheduledCorksByBlockHeightRequest {
  return {
    blockHeight: BigInt(0)
  };
}
export const QueryScheduledCorksByBlockHeightRequest = {
  typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightRequest",
  encode(message: QueryScheduledCorksByBlockHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest {
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryScheduledCorksByBlockHeightRequestAmino): QueryScheduledCorksByBlockHeightRequest {
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByBlockHeightRequestAminoMsg): QueryScheduledCorksByBlockHeightRequest {
    return QueryScheduledCorksByBlockHeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByBlockHeightRequestProtoMsg): QueryScheduledCorksByBlockHeightRequest {
    return QueryScheduledCorksByBlockHeightRequest.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByBlockHeightRequest): Uint8Array {
    return QueryScheduledCorksByBlockHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightRequest",
      value: QueryScheduledCorksByBlockHeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByBlockHeightResponse(): QueryScheduledCorksByBlockHeightResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksByBlockHeightResponse = {
  typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightResponse",
  encode(message: QueryScheduledCorksByBlockHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      ScheduledCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse {
    const message = createBaseQueryScheduledCorksByBlockHeightResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryScheduledCorksByBlockHeightResponseAmino): QueryScheduledCorksByBlockHeightResponse {
    const message = createBaseQueryScheduledCorksByBlockHeightResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByBlockHeightResponseAminoMsg): QueryScheduledCorksByBlockHeightResponse {
    return QueryScheduledCorksByBlockHeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByBlockHeightResponseProtoMsg): QueryScheduledCorksByBlockHeightResponse {
    return QueryScheduledCorksByBlockHeightResponse.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByBlockHeightResponse): Uint8Array {
    return QueryScheduledCorksByBlockHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightResponse",
      value: QueryScheduledCorksByBlockHeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByIDRequest(): QueryScheduledCorksByIDRequest {
  return {
    id: ""
  };
}
export const QueryScheduledCorksByIDRequest = {
  typeUrl: "/cork.v2.QueryScheduledCorksByIDRequest",
  encode(message: QueryScheduledCorksByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByIDRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByIDRequest>): QueryScheduledCorksByIDRequest {
    const message = createBaseQueryScheduledCorksByIDRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryScheduledCorksByIDRequestAmino): QueryScheduledCorksByIDRequest {
    const message = createBaseQueryScheduledCorksByIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByIDRequestAminoMsg): QueryScheduledCorksByIDRequest {
    return QueryScheduledCorksByIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByIDRequestProtoMsg): QueryScheduledCorksByIDRequest {
    return QueryScheduledCorksByIDRequest.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByIDRequest): Uint8Array {
    return QueryScheduledCorksByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledCorksByIDRequest",
      value: QueryScheduledCorksByIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByIDResponse(): QueryScheduledCorksByIDResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksByIDResponse = {
  typeUrl: "/cork.v2.QueryScheduledCorksByIDResponse",
  encode(message: QueryScheduledCorksByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      ScheduledCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByIDResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByIDResponse>): QueryScheduledCorksByIDResponse {
    const message = createBaseQueryScheduledCorksByIDResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryScheduledCorksByIDResponseAmino): QueryScheduledCorksByIDResponse {
    const message = createBaseQueryScheduledCorksByIDResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByIDResponseAminoMsg): QueryScheduledCorksByIDResponse {
    return QueryScheduledCorksByIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByIDResponseProtoMsg): QueryScheduledCorksByIDResponse {
    return QueryScheduledCorksByIDResponse.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByIDResponse): Uint8Array {
    return QueryScheduledCorksByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryScheduledCorksByIDResponse",
      value: QueryScheduledCorksByIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultRequest(): QueryCorkResultRequest {
  return {
    id: ""
  };
}
export const QueryCorkResultRequest = {
  typeUrl: "/cork.v2.QueryCorkResultRequest",
  encode(message: QueryCorkResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryCorkResultRequest>): QueryCorkResultRequest {
    const message = createBaseQueryCorkResultRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryCorkResultRequestAmino): QueryCorkResultRequest {
    const message = createBaseQueryCorkResultRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryCorkResultRequest): QueryCorkResultRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultRequestAminoMsg): QueryCorkResultRequest {
    return QueryCorkResultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultRequestProtoMsg): QueryCorkResultRequest {
    return QueryCorkResultRequest.decode(message.value);
  },
  toProto(message: QueryCorkResultRequest): Uint8Array {
    return QueryCorkResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultRequest): QueryCorkResultRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryCorkResultRequest",
      value: QueryCorkResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultResponse(): QueryCorkResultResponse {
  return {
    corkResult: undefined
  };
}
export const QueryCorkResultResponse = {
  typeUrl: "/cork.v2.QueryCorkResultResponse",
  encode(message: QueryCorkResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.corkResult !== undefined) {
      CorkResult.encode(message.corkResult, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultResponse {
    return {
      corkResult: isSet(object.corkResult) ? CorkResult.fromJSON(object.corkResult) : undefined
    };
  },
  fromPartial(object: Partial<QueryCorkResultResponse>): QueryCorkResultResponse {
    const message = createBaseQueryCorkResultResponse();
    message.corkResult = object.corkResult !== undefined && object.corkResult !== null ? CorkResult.fromPartial(object.corkResult) : undefined;
    return message;
  },
  fromAmino(object: QueryCorkResultResponseAmino): QueryCorkResultResponse {
    const message = createBaseQueryCorkResultResponse();
    if (object.corkResult !== undefined && object.corkResult !== null) {
      message.corkResult = CorkResult.fromAmino(object.corkResult);
    }
    return message;
  },
  toAmino(message: QueryCorkResultResponse): QueryCorkResultResponseAmino {
    const obj: any = {};
    obj.corkResult = message.corkResult ? CorkResult.toAmino(message.corkResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultResponseAminoMsg): QueryCorkResultResponse {
    return QueryCorkResultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultResponseProtoMsg): QueryCorkResultResponse {
    return QueryCorkResultResponse.decode(message.value);
  },
  toProto(message: QueryCorkResultResponse): Uint8Array {
    return QueryCorkResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultResponse): QueryCorkResultResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryCorkResultResponse",
      value: QueryCorkResultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultsRequest(): QueryCorkResultsRequest {
  return {};
}
export const QueryCorkResultsRequest = {
  typeUrl: "/cork.v2.QueryCorkResultsRequest",
  encode(_: QueryCorkResultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCorkResultsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCorkResultsRequest>): QueryCorkResultsRequest {
    const message = createBaseQueryCorkResultsRequest();
    return message;
  },
  fromAmino(_: QueryCorkResultsRequestAmino): QueryCorkResultsRequest {
    const message = createBaseQueryCorkResultsRequest();
    return message;
  },
  toAmino(_: QueryCorkResultsRequest): QueryCorkResultsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultsRequestAminoMsg): QueryCorkResultsRequest {
    return QueryCorkResultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultsRequestProtoMsg): QueryCorkResultsRequest {
    return QueryCorkResultsRequest.decode(message.value);
  },
  toProto(message: QueryCorkResultsRequest): Uint8Array {
    return QueryCorkResultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultsRequest): QueryCorkResultsRequestProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryCorkResultsRequest",
      value: QueryCorkResultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultsResponse(): QueryCorkResultsResponse {
  return {
    corkResults: []
  };
}
export const QueryCorkResultsResponse = {
  typeUrl: "/cork.v2.QueryCorkResultsResponse",
  encode(message: QueryCorkResultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corkResults) {
      CorkResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultsResponse {
    return {
      corkResults: Array.isArray(object?.corkResults) ? object.corkResults.map((e: any) => CorkResult.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCorkResultsResponse>): QueryCorkResultsResponse {
    const message = createBaseQueryCorkResultsResponse();
    message.corkResults = object.corkResults?.map(e => CorkResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCorkResultsResponseAmino): QueryCorkResultsResponse {
    const message = createBaseQueryCorkResultsResponse();
    message.corkResults = object.corkResults?.map(e => CorkResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCorkResultsResponse): QueryCorkResultsResponseAmino {
    const obj: any = {};
    if (message.corkResults) {
      obj.corkResults = message.corkResults.map(e => e ? CorkResult.toAmino(e) : undefined);
    } else {
      obj.corkResults = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultsResponseAminoMsg): QueryCorkResultsResponse {
    return QueryCorkResultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultsResponseProtoMsg): QueryCorkResultsResponse {
    return QueryCorkResultsResponse.decode(message.value);
  },
  toProto(message: QueryCorkResultsResponse): Uint8Array {
    return QueryCorkResultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultsResponse): QueryCorkResultsResponseProtoMsg {
    return {
      typeUrl: "/cork.v2.QueryCorkResultsResponse",
      value: QueryCorkResultsResponse.encode(message).finish()
    };
  }
};