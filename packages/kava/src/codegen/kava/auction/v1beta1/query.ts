import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequest {
  auctionId: Long;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestSDKType {
  auction_id: Long;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
  auction?: Any;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseSDKType {
  auction?: AnySDKType;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequest {
  type: string;
  owner: string;
  denom: string;
  phase: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestSDKType {
  type: string;
  owner: string;
  denom: string;
  phase: string;
  pagination?: PageRequestSDKType;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponse {
  auctions: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseSDKType {
  auctions: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequest {}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequestSDKType {}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponse {
  id: Long;
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponseSDKType {
  id: Long;
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
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    auctionId: Long.UZERO
  };
}
export const QueryAuctionRequest = {
  encode(message: QueryAuctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionRequest {
    return {
      auctionId: isSet(object.auctionId) ? Long.fromValue(object.auctionId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: undefined
  };
}
export const QueryAuctionResponse = {
  encode(message: QueryAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auction !== undefined) {
      Any.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionResponse {
    return {
      auction: isSet(object.auction) ? Any.fromJSON(object.auction) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionResponse>): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Any.fromPartial(object.auction) : undefined;
    return message;
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    type: "",
    owner: "",
    denom: "",
    phase: "",
    pagination: undefined
  };
}
export const QueryAuctionsRequest = {
  encode(message: QueryAuctionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.phase !== "") {
      writer.uint32(34).string(message.phase);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionsRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      phase: isSet(object.phase) ? String(object.phase) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.type = object.type ?? "";
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.phase = object.phase ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}
export const QueryAuctionsResponse = {
  encode(message: QueryAuctionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryNextAuctionIDRequest(): QueryNextAuctionIDRequest {
  return {};
}
export const QueryNextAuctionIDRequest = {
  encode(_: QueryNextAuctionIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryNextAuctionIDRequest {
    return {};
  },
  fromPartial(_: Partial<QueryNextAuctionIDRequest>): QueryNextAuctionIDRequest {
    const message = createBaseQueryNextAuctionIDRequest();
    return message;
  }
};
function createBaseQueryNextAuctionIDResponse(): QueryNextAuctionIDResponse {
  return {
    id: Long.UZERO
  };
}
export const QueryNextAuctionIDResponse = {
  encode(message: QueryNextAuctionIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryNextAuctionIDResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryNextAuctionIDResponse>): QueryNextAuctionIDResponse {
    const message = createBaseQueryNextAuctionIDResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};