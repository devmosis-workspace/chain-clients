import { Params, ParamsSDKType } from "./genesis";
import { Cork, CorkSDKType, ScheduledCork, ScheduledCorkSDKType } from "./cork";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
  /** allocation parameters */
  params?: Params;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequest {}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequestSDKType {}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponse {
  /** corks in keeper awaiting vote */
  corks: Cork[];
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponseSDKType {
  corks: CorkSDKType[];
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequest {}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequestSDKType {}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponse {
  /** block height at which the query was processed */
  currentHeight: Long;
  /** latest vote period start block height */
  votePeriodStart: Long;
  /** block height at which the current voting period ends */
  votePeriodEnd: Long;
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponseSDKType {
  current_height: Long;
  vote_period_start: Long;
  vote_period_end: Long;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
  cellarIds: string[];
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseSDKType {
  cellar_ids: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestSDKType {}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
  corks: ScheduledCork[];
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestSDKType {}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
  blockHeights: Long[];
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseSDKType {
  block_heights: Long[];
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
  blockHeight: Long;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestSDKType {
  block_height: Long;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
  corks: ScheduledCork[];
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
  corks: ScheduledCorkSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQuerySubmittedCorksRequest(): QuerySubmittedCorksRequest {
  return {};
}
export const QuerySubmittedCorksRequest = {
  encode(_: QuerySubmittedCorksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QuerySubmittedCorksRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySubmittedCorksRequest>): QuerySubmittedCorksRequest {
    const message = createBaseQuerySubmittedCorksRequest();
    return message;
  }
};
function createBaseQuerySubmittedCorksResponse(): QuerySubmittedCorksResponse {
  return {
    corks: []
  };
}
export const QuerySubmittedCorksResponse = {
  encode(message: QuerySubmittedCorksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCommitPeriodRequest(): QueryCommitPeriodRequest {
  return {};
}
export const QueryCommitPeriodRequest = {
  encode(_: QueryCommitPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCommitPeriodRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCommitPeriodRequest>): QueryCommitPeriodRequest {
    const message = createBaseQueryCommitPeriodRequest();
    return message;
  }
};
function createBaseQueryCommitPeriodResponse(): QueryCommitPeriodResponse {
  return {
    currentHeight: Long.ZERO,
    votePeriodStart: Long.ZERO,
    votePeriodEnd: Long.ZERO
  };
}
export const QueryCommitPeriodResponse = {
  encode(message: QueryCommitPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentHeight.isZero()) {
      writer.uint32(8).int64(message.currentHeight);
    }
    if (!message.votePeriodStart.isZero()) {
      writer.uint32(16).int64(message.votePeriodStart);
    }
    if (!message.votePeriodEnd.isZero()) {
      writer.uint32(24).int64(message.votePeriodEnd);
    }
    return writer;
  },
  fromJSON(object: any): QueryCommitPeriodResponse {
    return {
      currentHeight: isSet(object.currentHeight) ? Long.fromValue(object.currentHeight) : Long.ZERO,
      votePeriodStart: isSet(object.votePeriodStart) ? Long.fromValue(object.votePeriodStart) : Long.ZERO,
      votePeriodEnd: isSet(object.votePeriodEnd) ? Long.fromValue(object.votePeriodEnd) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryCommitPeriodResponse>): QueryCommitPeriodResponse {
    const message = createBaseQueryCommitPeriodResponse();
    message.currentHeight = object.currentHeight !== undefined && object.currentHeight !== null ? Long.fromValue(object.currentHeight) : Long.ZERO;
    message.votePeriodStart = object.votePeriodStart !== undefined && object.votePeriodStart !== null ? Long.fromValue(object.votePeriodStart) : Long.ZERO;
    message.votePeriodEnd = object.votePeriodEnd !== undefined && object.votePeriodEnd !== null ? Long.fromValue(object.votePeriodEnd) : Long.ZERO;
    return message;
  }
};
function createBaseQueryCellarIDsRequest(): QueryCellarIDsRequest {
  return {};
}
export const QueryCellarIDsRequest = {
  encode(_: QueryCellarIDsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCellarIDsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCellarIDsRequest>): QueryCellarIDsRequest {
    const message = createBaseQueryCellarIDsRequest();
    return message;
  }
};
function createBaseQueryCellarIDsResponse(): QueryCellarIDsResponse {
  return {
    cellarIds: []
  };
}
export const QueryCellarIDsResponse = {
  encode(message: QueryCellarIDsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryScheduledCorksRequest(): QueryScheduledCorksRequest {
  return {};
}
export const QueryScheduledCorksRequest = {
  encode(_: QueryScheduledCorksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryScheduledCorksRequest {
    return {};
  },
  fromPartial(_: Partial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest {
    const message = createBaseQueryScheduledCorksRequest();
    return message;
  }
};
function createBaseQueryScheduledCorksResponse(): QueryScheduledCorksResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksResponse = {
  encode(message: QueryScheduledCorksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryScheduledBlockHeightsRequest(): QueryScheduledBlockHeightsRequest {
  return {};
}
export const QueryScheduledBlockHeightsRequest = {
  encode(_: QueryScheduledBlockHeightsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryScheduledBlockHeightsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest {
    const message = createBaseQueryScheduledBlockHeightsRequest();
    return message;
  }
};
function createBaseQueryScheduledBlockHeightsResponse(): QueryScheduledBlockHeightsResponse {
  return {
    blockHeights: []
  };
}
export const QueryScheduledBlockHeightsResponse = {
  encode(message: QueryScheduledBlockHeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.blockHeights) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): QueryScheduledBlockHeightsResponse {
    return {
      blockHeights: Array.isArray(object?.blockHeights) ? object.blockHeights.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse {
    const message = createBaseQueryScheduledBlockHeightsResponse();
    message.blockHeights = object.blockHeights?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseQueryScheduledCorksByBlockHeightRequest(): QueryScheduledCorksByBlockHeightRequest {
  return {
    blockHeight: Long.UZERO
  };
}
export const QueryScheduledCorksByBlockHeightRequest = {
  encode(message: QueryScheduledCorksByBlockHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest {
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    return message;
  }
};
function createBaseQueryScheduledCorksByBlockHeightResponse(): QueryScheduledCorksByBlockHeightResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksByBlockHeightResponse = {
  encode(message: QueryScheduledCorksByBlockHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};