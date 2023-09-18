import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Cork, CorkAmino, CorkSDKType, ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cork.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cork.v1.QueryParamsRequest";
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
  typeUrl: "/cork.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseAmino {
  /** allocation parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cork.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequest {}
export interface QuerySubmittedCorksRequestProtoMsg {
  typeUrl: "/cork.v1.QuerySubmittedCorksRequest";
  value: Uint8Array;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequestAmino {}
export interface QuerySubmittedCorksRequestAminoMsg {
  type: "/cork.v1.QuerySubmittedCorksRequest";
  value: QuerySubmittedCorksRequestAmino;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequestSDKType {}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponse {
  /** corks in keeper awaiting vote */
  corks: Cork[];
}
export interface QuerySubmittedCorksResponseProtoMsg {
  typeUrl: "/cork.v1.QuerySubmittedCorksResponse";
  value: Uint8Array;
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponseAmino {
  /** corks in keeper awaiting vote */
  corks: CorkAmino[];
}
export interface QuerySubmittedCorksResponseAminoMsg {
  type: "/cork.v1.QuerySubmittedCorksResponse";
  value: QuerySubmittedCorksResponseAmino;
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponseSDKType {
  corks: CorkSDKType[];
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequest {}
export interface QueryCommitPeriodRequestProtoMsg {
  typeUrl: "/cork.v1.QueryCommitPeriodRequest";
  value: Uint8Array;
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequestAmino {}
export interface QueryCommitPeriodRequestAminoMsg {
  type: "/cork.v1.QueryCommitPeriodRequest";
  value: QueryCommitPeriodRequestAmino;
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequestSDKType {}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponse {
  /** block height at which the query was processed */
  currentHeight: bigint;
  /** latest vote period start block height */
  votePeriodStart: bigint;
  /** block height at which the current voting period ends */
  votePeriodEnd: bigint;
}
export interface QueryCommitPeriodResponseProtoMsg {
  typeUrl: "/cork.v1.QueryCommitPeriodResponse";
  value: Uint8Array;
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponseAmino {
  /** block height at which the query was processed */
  current_height: string;
  /** latest vote period start block height */
  vote_period_start: string;
  /** block height at which the current voting period ends */
  vote_period_end: string;
}
export interface QueryCommitPeriodResponseAminoMsg {
  type: "/cork.v1.QueryCommitPeriodResponse";
  value: QueryCommitPeriodResponseAmino;
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponseSDKType {
  current_height: bigint;
  vote_period_start: bigint;
  vote_period_end: bigint;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {}
export interface QueryCellarIDsRequestProtoMsg {
  typeUrl: "/cork.v1.QueryCellarIDsRequest";
  value: Uint8Array;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestAmino {}
export interface QueryCellarIDsRequestAminoMsg {
  type: "/cork.v1.QueryCellarIDsRequest";
  value: QueryCellarIDsRequestAmino;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
  cellarIds: string[];
}
export interface QueryCellarIDsResponseProtoMsg {
  typeUrl: "/cork.v1.QueryCellarIDsResponse";
  value: Uint8Array;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseAmino {
  cellar_ids: string[];
}
export interface QueryCellarIDsResponseAminoMsg {
  type: "/cork.v1.QueryCellarIDsResponse";
  value: QueryCellarIDsResponseAmino;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseSDKType {
  cellar_ids: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {}
export interface QueryScheduledCorksRequestProtoMsg {
  typeUrl: "/cork.v1.QueryScheduledCorksRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestAmino {}
export interface QueryScheduledCorksRequestAminoMsg {
  type: "/cork.v1.QueryScheduledCorksRequest";
  value: QueryScheduledCorksRequestAmino;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestSDKType {}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
  corks: ScheduledCork[];
}
export interface QueryScheduledCorksResponseProtoMsg {
  typeUrl: "/cork.v1.QueryScheduledCorksResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseAmino {
  corks: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksResponseAminoMsg {
  type: "/cork.v1.QueryScheduledCorksResponse";
  value: QueryScheduledCorksResponseAmino;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {}
export interface QueryScheduledBlockHeightsRequestProtoMsg {
  typeUrl: "/cork.v1.QueryScheduledBlockHeightsRequest";
  value: Uint8Array;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestAmino {}
export interface QueryScheduledBlockHeightsRequestAminoMsg {
  type: "/cork.v1.QueryScheduledBlockHeightsRequest";
  value: QueryScheduledBlockHeightsRequestAmino;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestSDKType {}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
  blockHeights: bigint[];
}
export interface QueryScheduledBlockHeightsResponseProtoMsg {
  typeUrl: "/cork.v1.QueryScheduledBlockHeightsResponse";
  value: Uint8Array;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseAmino {
  block_heights: string[];
}
export interface QueryScheduledBlockHeightsResponseAminoMsg {
  type: "/cork.v1.QueryScheduledBlockHeightsResponse";
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
  typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestAmino {
  block_height: string;
}
export interface QueryScheduledCorksByBlockHeightRequestAminoMsg {
  type: "/cork.v1.QueryScheduledCorksByBlockHeightRequest";
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
  typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseAmino {
  corks: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksByBlockHeightResponseAminoMsg {
  type: "/cork.v1.QueryScheduledCorksByBlockHeightResponse";
  value: QueryScheduledCorksByBlockHeightResponseAmino;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cork.v1.QueryParamsRequest",
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
      typeUrl: "/cork.v1.QueryParamsRequest",
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
  typeUrl: "/cork.v1.QueryParamsResponse",
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
      typeUrl: "/cork.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubmittedCorksRequest(): QuerySubmittedCorksRequest {
  return {};
}
export const QuerySubmittedCorksRequest = {
  typeUrl: "/cork.v1.QuerySubmittedCorksRequest",
  encode(_: QuerySubmittedCorksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySubmittedCorksRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySubmittedCorksRequest>): QuerySubmittedCorksRequest {
    const message = createBaseQuerySubmittedCorksRequest();
    return message;
  },
  fromAmino(_: QuerySubmittedCorksRequestAmino): QuerySubmittedCorksRequest {
    return {};
  },
  toAmino(_: QuerySubmittedCorksRequest): QuerySubmittedCorksRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySubmittedCorksRequestAminoMsg): QuerySubmittedCorksRequest {
    return QuerySubmittedCorksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubmittedCorksRequestProtoMsg): QuerySubmittedCorksRequest {
    return QuerySubmittedCorksRequest.decode(message.value);
  },
  toProto(message: QuerySubmittedCorksRequest): Uint8Array {
    return QuerySubmittedCorksRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubmittedCorksRequest): QuerySubmittedCorksRequestProtoMsg {
    return {
      typeUrl: "/cork.v1.QuerySubmittedCorksRequest",
      value: QuerySubmittedCorksRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubmittedCorksResponse(): QuerySubmittedCorksResponse {
  return {
    corks: []
  };
}
export const QuerySubmittedCorksResponse = {
  typeUrl: "/cork.v1.QuerySubmittedCorksResponse",
  encode(message: QuerySubmittedCorksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      Cork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubmittedCorksResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => Cork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubmittedCorksResponse>): QuerySubmittedCorksResponse {
    const message = createBaseQuerySubmittedCorksResponse();
    message.corks = object.corks?.map(e => Cork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubmittedCorksResponseAmino): QuerySubmittedCorksResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => Cork.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySubmittedCorksResponse): QuerySubmittedCorksResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? Cork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubmittedCorksResponseAminoMsg): QuerySubmittedCorksResponse {
    return QuerySubmittedCorksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubmittedCorksResponseProtoMsg): QuerySubmittedCorksResponse {
    return QuerySubmittedCorksResponse.decode(message.value);
  },
  toProto(message: QuerySubmittedCorksResponse): Uint8Array {
    return QuerySubmittedCorksResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubmittedCorksResponse): QuerySubmittedCorksResponseProtoMsg {
    return {
      typeUrl: "/cork.v1.QuerySubmittedCorksResponse",
      value: QuerySubmittedCorksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommitPeriodRequest(): QueryCommitPeriodRequest {
  return {};
}
export const QueryCommitPeriodRequest = {
  typeUrl: "/cork.v1.QueryCommitPeriodRequest",
  encode(_: QueryCommitPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCommitPeriodRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCommitPeriodRequest>): QueryCommitPeriodRequest {
    const message = createBaseQueryCommitPeriodRequest();
    return message;
  },
  fromAmino(_: QueryCommitPeriodRequestAmino): QueryCommitPeriodRequest {
    return {};
  },
  toAmino(_: QueryCommitPeriodRequest): QueryCommitPeriodRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCommitPeriodRequestAminoMsg): QueryCommitPeriodRequest {
    return QueryCommitPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitPeriodRequestProtoMsg): QueryCommitPeriodRequest {
    return QueryCommitPeriodRequest.decode(message.value);
  },
  toProto(message: QueryCommitPeriodRequest): Uint8Array {
    return QueryCommitPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitPeriodRequest): QueryCommitPeriodRequestProtoMsg {
    return {
      typeUrl: "/cork.v1.QueryCommitPeriodRequest",
      value: QueryCommitPeriodRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommitPeriodResponse(): QueryCommitPeriodResponse {
  return {
    currentHeight: BigInt(0),
    votePeriodStart: BigInt(0),
    votePeriodEnd: BigInt(0)
  };
}
export const QueryCommitPeriodResponse = {
  typeUrl: "/cork.v1.QueryCommitPeriodResponse",
  encode(message: QueryCommitPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.currentHeight);
    }
    if (message.votePeriodStart !== BigInt(0)) {
      writer.uint32(16).int64(message.votePeriodStart);
    }
    if (message.votePeriodEnd !== BigInt(0)) {
      writer.uint32(24).int64(message.votePeriodEnd);
    }
    return writer;
  },
  fromJSON(object: any): QueryCommitPeriodResponse {
    return {
      currentHeight: isSet(object.currentHeight) ? BigInt(object.currentHeight.toString()) : BigInt(0),
      votePeriodStart: isSet(object.votePeriodStart) ? BigInt(object.votePeriodStart.toString()) : BigInt(0),
      votePeriodEnd: isSet(object.votePeriodEnd) ? BigInt(object.votePeriodEnd.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCommitPeriodResponse>): QueryCommitPeriodResponse {
    const message = createBaseQueryCommitPeriodResponse();
    message.currentHeight = object.currentHeight !== undefined && object.currentHeight !== null ? BigInt(object.currentHeight.toString()) : BigInt(0);
    message.votePeriodStart = object.votePeriodStart !== undefined && object.votePeriodStart !== null ? BigInt(object.votePeriodStart.toString()) : BigInt(0);
    message.votePeriodEnd = object.votePeriodEnd !== undefined && object.votePeriodEnd !== null ? BigInt(object.votePeriodEnd.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCommitPeriodResponseAmino): QueryCommitPeriodResponse {
    return {
      currentHeight: BigInt(object.current_height),
      votePeriodStart: BigInt(object.vote_period_start),
      votePeriodEnd: BigInt(object.vote_period_end)
    };
  },
  toAmino(message: QueryCommitPeriodResponse): QueryCommitPeriodResponseAmino {
    const obj: any = {};
    obj.current_height = message.currentHeight ? message.currentHeight.toString() : undefined;
    obj.vote_period_start = message.votePeriodStart ? message.votePeriodStart.toString() : undefined;
    obj.vote_period_end = message.votePeriodEnd ? message.votePeriodEnd.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCommitPeriodResponseAminoMsg): QueryCommitPeriodResponse {
    return QueryCommitPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitPeriodResponseProtoMsg): QueryCommitPeriodResponse {
    return QueryCommitPeriodResponse.decode(message.value);
  },
  toProto(message: QueryCommitPeriodResponse): Uint8Array {
    return QueryCommitPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitPeriodResponse): QueryCommitPeriodResponseProtoMsg {
    return {
      typeUrl: "/cork.v1.QueryCommitPeriodResponse",
      value: QueryCommitPeriodResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsRequest(): QueryCellarIDsRequest {
  return {};
}
export const QueryCellarIDsRequest = {
  typeUrl: "/cork.v1.QueryCellarIDsRequest",
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
    return {};
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
      typeUrl: "/cork.v1.QueryCellarIDsRequest",
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
  typeUrl: "/cork.v1.QueryCellarIDsResponse",
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
    return {
      cellarIds: Array.isArray(object?.cellar_ids) ? object.cellar_ids.map((e: any) => e) : []
    };
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
      typeUrl: "/cork.v1.QueryCellarIDsResponse",
      value: QueryCellarIDsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksRequest(): QueryScheduledCorksRequest {
  return {};
}
export const QueryScheduledCorksRequest = {
  typeUrl: "/cork.v1.QueryScheduledCorksRequest",
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
    return {};
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
      typeUrl: "/cork.v1.QueryScheduledCorksRequest",
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
  typeUrl: "/cork.v1.QueryScheduledCorksResponse",
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
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromAmino(e)) : []
    };
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
      typeUrl: "/cork.v1.QueryScheduledCorksResponse",
      value: QueryScheduledCorksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledBlockHeightsRequest(): QueryScheduledBlockHeightsRequest {
  return {};
}
export const QueryScheduledBlockHeightsRequest = {
  typeUrl: "/cork.v1.QueryScheduledBlockHeightsRequest",
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
    return {};
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
      typeUrl: "/cork.v1.QueryScheduledBlockHeightsRequest",
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
  typeUrl: "/cork.v1.QueryScheduledBlockHeightsResponse",
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
    return {
      blockHeights: Array.isArray(object?.block_heights) ? object.block_heights.map((e: any) => BigInt(e)) : []
    };
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
      typeUrl: "/cork.v1.QueryScheduledBlockHeightsResponse",
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
  typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightRequest",
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
    return {
      blockHeight: BigInt(object.block_height)
    };
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
      typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightRequest",
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
  typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightResponse",
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
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromAmino(e)) : []
    };
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
      typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightResponse",
      value: QueryScheduledCorksByBlockHeightResponse.encode(message).finish()
    };
  }
};