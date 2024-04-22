import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Auction, AuctionAmino, AuctionSDKType, Bid, BidAmino, BidSDKType, TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/auction.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/auction.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/auction.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/auction.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryActiveAuctionRequest {
  auctionId: number;
}
export interface QueryActiveAuctionRequestProtoMsg {
  typeUrl: "/auction.v1.QueryActiveAuctionRequest";
  value: Uint8Array;
}
export interface QueryActiveAuctionRequestAmino {
  auction_id?: number;
}
export interface QueryActiveAuctionRequestAminoMsg {
  type: "/auction.v1.QueryActiveAuctionRequest";
  value: QueryActiveAuctionRequestAmino;
}
export interface QueryActiveAuctionRequestSDKType {
  auction_id: number;
}
export interface QueryActiveAuctionResponse {
  auction?: Auction;
}
export interface QueryActiveAuctionResponseProtoMsg {
  typeUrl: "/auction.v1.QueryActiveAuctionResponse";
  value: Uint8Array;
}
export interface QueryActiveAuctionResponseAmino {
  auction?: AuctionAmino;
}
export interface QueryActiveAuctionResponseAminoMsg {
  type: "/auction.v1.QueryActiveAuctionResponse";
  value: QueryActiveAuctionResponseAmino;
}
export interface QueryActiveAuctionResponseSDKType {
  auction?: AuctionSDKType;
}
export interface QueryEndedAuctionRequest {
  auctionId: number;
}
export interface QueryEndedAuctionRequestProtoMsg {
  typeUrl: "/auction.v1.QueryEndedAuctionRequest";
  value: Uint8Array;
}
export interface QueryEndedAuctionRequestAmino {
  auction_id?: number;
}
export interface QueryEndedAuctionRequestAminoMsg {
  type: "/auction.v1.QueryEndedAuctionRequest";
  value: QueryEndedAuctionRequestAmino;
}
export interface QueryEndedAuctionRequestSDKType {
  auction_id: number;
}
export interface QueryEndedAuctionResponse {
  auction?: Auction;
}
export interface QueryEndedAuctionResponseProtoMsg {
  typeUrl: "/auction.v1.QueryEndedAuctionResponse";
  value: Uint8Array;
}
export interface QueryEndedAuctionResponseAmino {
  auction?: AuctionAmino;
}
export interface QueryEndedAuctionResponseAminoMsg {
  type: "/auction.v1.QueryEndedAuctionResponse";
  value: QueryEndedAuctionResponseAmino;
}
export interface QueryEndedAuctionResponseSDKType {
  auction?: AuctionSDKType;
}
export interface QueryActiveAuctionsRequest {}
export interface QueryActiveAuctionsRequestProtoMsg {
  typeUrl: "/auction.v1.QueryActiveAuctionsRequest";
  value: Uint8Array;
}
export interface QueryActiveAuctionsRequestAmino {}
export interface QueryActiveAuctionsRequestAminoMsg {
  type: "/auction.v1.QueryActiveAuctionsRequest";
  value: QueryActiveAuctionsRequestAmino;
}
export interface QueryActiveAuctionsRequestSDKType {}
export interface QueryActiveAuctionsResponse {
  auctions: Auction[];
}
export interface QueryActiveAuctionsResponseProtoMsg {
  typeUrl: "/auction.v1.QueryActiveAuctionsResponse";
  value: Uint8Array;
}
export interface QueryActiveAuctionsResponseAmino {
  auctions?: AuctionAmino[];
}
export interface QueryActiveAuctionsResponseAminoMsg {
  type: "/auction.v1.QueryActiveAuctionsResponse";
  value: QueryActiveAuctionsResponseAmino;
}
export interface QueryActiveAuctionsResponseSDKType {
  auctions: AuctionSDKType[];
}
export interface QueryEndedAuctionsRequest {
  pagination: PageRequest;
}
export interface QueryEndedAuctionsRequestProtoMsg {
  typeUrl: "/auction.v1.QueryEndedAuctionsRequest";
  value: Uint8Array;
}
export interface QueryEndedAuctionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryEndedAuctionsRequestAminoMsg {
  type: "/auction.v1.QueryEndedAuctionsRequest";
  value: QueryEndedAuctionsRequestAmino;
}
export interface QueryEndedAuctionsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryEndedAuctionsResponse {
  auctions: Auction[];
  pagination: PageResponse;
}
export interface QueryEndedAuctionsResponseProtoMsg {
  typeUrl: "/auction.v1.QueryEndedAuctionsResponse";
  value: Uint8Array;
}
export interface QueryEndedAuctionsResponseAmino {
  auctions?: AuctionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEndedAuctionsResponseAminoMsg {
  type: "/auction.v1.QueryEndedAuctionsResponse";
  value: QueryEndedAuctionsResponseAmino;
}
export interface QueryEndedAuctionsResponseSDKType {
  auctions: AuctionSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryBidRequest {
  bidId: bigint;
  auctionId: number;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/auction.v1.QueryBidRequest";
  value: Uint8Array;
}
export interface QueryBidRequestAmino {
  bid_id?: string;
  auction_id?: number;
}
export interface QueryBidRequestAminoMsg {
  type: "/auction.v1.QueryBidRequest";
  value: QueryBidRequestAmino;
}
export interface QueryBidRequestSDKType {
  bid_id: bigint;
  auction_id: number;
}
export interface QueryBidResponse {
  bid?: Bid;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/auction.v1.QueryBidResponse";
  value: Uint8Array;
}
export interface QueryBidResponseAmino {
  bid?: BidAmino;
}
export interface QueryBidResponseAminoMsg {
  type: "/auction.v1.QueryBidResponse";
  value: QueryBidResponseAmino;
}
export interface QueryBidResponseSDKType {
  bid?: BidSDKType;
}
export interface QueryBidsByAuctionRequest {
  auctionId: number;
  pagination: PageRequest;
}
export interface QueryBidsByAuctionRequestProtoMsg {
  typeUrl: "/auction.v1.QueryBidsByAuctionRequest";
  value: Uint8Array;
}
export interface QueryBidsByAuctionRequestAmino {
  auction_id?: number;
  pagination?: PageRequestAmino;
}
export interface QueryBidsByAuctionRequestAminoMsg {
  type: "/auction.v1.QueryBidsByAuctionRequest";
  value: QueryBidsByAuctionRequestAmino;
}
export interface QueryBidsByAuctionRequestSDKType {
  auction_id: number;
  pagination: PageRequestSDKType;
}
export interface QueryBidsByAuctionResponse {
  bids: Bid[];
  pagination: PageResponse;
}
export interface QueryBidsByAuctionResponseProtoMsg {
  typeUrl: "/auction.v1.QueryBidsByAuctionResponse";
  value: Uint8Array;
}
export interface QueryBidsByAuctionResponseAmino {
  bids?: BidAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBidsByAuctionResponseAminoMsg {
  type: "/auction.v1.QueryBidsByAuctionResponse";
  value: QueryBidsByAuctionResponseAmino;
}
export interface QueryBidsByAuctionResponseSDKType {
  bids: BidSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryTokenPriceRequest {
  denom: string;
}
export interface QueryTokenPriceRequestProtoMsg {
  typeUrl: "/auction.v1.QueryTokenPriceRequest";
  value: Uint8Array;
}
export interface QueryTokenPriceRequestAmino {
  denom?: string;
}
export interface QueryTokenPriceRequestAminoMsg {
  type: "/auction.v1.QueryTokenPriceRequest";
  value: QueryTokenPriceRequestAmino;
}
export interface QueryTokenPriceRequestSDKType {
  denom: string;
}
export interface QueryTokenPriceResponse {
  tokenPrice?: TokenPrice;
}
export interface QueryTokenPriceResponseProtoMsg {
  typeUrl: "/auction.v1.QueryTokenPriceResponse";
  value: Uint8Array;
}
export interface QueryTokenPriceResponseAmino {
  token_price?: TokenPriceAmino;
}
export interface QueryTokenPriceResponseAminoMsg {
  type: "/auction.v1.QueryTokenPriceResponse";
  value: QueryTokenPriceResponseAmino;
}
export interface QueryTokenPriceResponseSDKType {
  token_price?: TokenPriceSDKType;
}
export interface QueryTokenPricesRequest {}
export interface QueryTokenPricesRequestProtoMsg {
  typeUrl: "/auction.v1.QueryTokenPricesRequest";
  value: Uint8Array;
}
export interface QueryTokenPricesRequestAmino {}
export interface QueryTokenPricesRequestAminoMsg {
  type: "/auction.v1.QueryTokenPricesRequest";
  value: QueryTokenPricesRequestAmino;
}
export interface QueryTokenPricesRequestSDKType {}
export interface QueryTokenPricesResponse {
  tokenPrices: TokenPrice[];
}
export interface QueryTokenPricesResponseProtoMsg {
  typeUrl: "/auction.v1.QueryTokenPricesResponse";
  value: Uint8Array;
}
export interface QueryTokenPricesResponseAmino {
  token_prices?: TokenPriceAmino[];
}
export interface QueryTokenPricesResponseAminoMsg {
  type: "/auction.v1.QueryTokenPricesResponse";
  value: QueryTokenPricesResponseAmino;
}
export interface QueryTokenPricesResponseSDKType {
  token_prices: TokenPriceSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/auction.v1.QueryParamsRequest",
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
      typeUrl: "/auction.v1.QueryParamsRequest",
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
  typeUrl: "/auction.v1.QueryParamsResponse",
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
      typeUrl: "/auction.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveAuctionRequest(): QueryActiveAuctionRequest {
  return {
    auctionId: 0
  };
}
export const QueryActiveAuctionRequest = {
  typeUrl: "/auction.v1.QueryActiveAuctionRequest",
  encode(message: QueryActiveAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint32(message.auctionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryActiveAuctionRequest {
    return {
      auctionId: isSet(object.auctionId) ? Number(object.auctionId) : 0
    };
  },
  fromPartial(object: Partial<QueryActiveAuctionRequest>): QueryActiveAuctionRequest {
    const message = createBaseQueryActiveAuctionRequest();
    message.auctionId = object.auctionId ?? 0;
    return message;
  },
  fromAmino(object: QueryActiveAuctionRequestAmino): QueryActiveAuctionRequest {
    const message = createBaseQueryActiveAuctionRequest();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    return message;
  },
  toAmino(message: QueryActiveAuctionRequest): QueryActiveAuctionRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId;
    return obj;
  },
  fromAminoMsg(object: QueryActiveAuctionRequestAminoMsg): QueryActiveAuctionRequest {
    return QueryActiveAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveAuctionRequestProtoMsg): QueryActiveAuctionRequest {
    return QueryActiveAuctionRequest.decode(message.value);
  },
  toProto(message: QueryActiveAuctionRequest): Uint8Array {
    return QueryActiveAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveAuctionRequest): QueryActiveAuctionRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryActiveAuctionRequest",
      value: QueryActiveAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveAuctionResponse(): QueryActiveAuctionResponse {
  return {
    auction: undefined
  };
}
export const QueryActiveAuctionResponse = {
  typeUrl: "/auction.v1.QueryActiveAuctionResponse",
  encode(message: QueryActiveAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryActiveAuctionResponse {
    return {
      auction: isSet(object.auction) ? Auction.fromJSON(object.auction) : undefined
    };
  },
  fromPartial(object: Partial<QueryActiveAuctionResponse>): QueryActiveAuctionResponse {
    const message = createBaseQueryActiveAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: QueryActiveAuctionResponseAmino): QueryActiveAuctionResponse {
    const message = createBaseQueryActiveAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryActiveAuctionResponse): QueryActiveAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActiveAuctionResponseAminoMsg): QueryActiveAuctionResponse {
    return QueryActiveAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveAuctionResponseProtoMsg): QueryActiveAuctionResponse {
    return QueryActiveAuctionResponse.decode(message.value);
  },
  toProto(message: QueryActiveAuctionResponse): Uint8Array {
    return QueryActiveAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveAuctionResponse): QueryActiveAuctionResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryActiveAuctionResponse",
      value: QueryActiveAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEndedAuctionRequest(): QueryEndedAuctionRequest {
  return {
    auctionId: 0
  };
}
export const QueryEndedAuctionRequest = {
  typeUrl: "/auction.v1.QueryEndedAuctionRequest",
  encode(message: QueryEndedAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint32(message.auctionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryEndedAuctionRequest {
    return {
      auctionId: isSet(object.auctionId) ? Number(object.auctionId) : 0
    };
  },
  fromPartial(object: Partial<QueryEndedAuctionRequest>): QueryEndedAuctionRequest {
    const message = createBaseQueryEndedAuctionRequest();
    message.auctionId = object.auctionId ?? 0;
    return message;
  },
  fromAmino(object: QueryEndedAuctionRequestAmino): QueryEndedAuctionRequest {
    const message = createBaseQueryEndedAuctionRequest();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    return message;
  },
  toAmino(message: QueryEndedAuctionRequest): QueryEndedAuctionRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId;
    return obj;
  },
  fromAminoMsg(object: QueryEndedAuctionRequestAminoMsg): QueryEndedAuctionRequest {
    return QueryEndedAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEndedAuctionRequestProtoMsg): QueryEndedAuctionRequest {
    return QueryEndedAuctionRequest.decode(message.value);
  },
  toProto(message: QueryEndedAuctionRequest): Uint8Array {
    return QueryEndedAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEndedAuctionRequest): QueryEndedAuctionRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryEndedAuctionRequest",
      value: QueryEndedAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEndedAuctionResponse(): QueryEndedAuctionResponse {
  return {
    auction: undefined
  };
}
export const QueryEndedAuctionResponse = {
  typeUrl: "/auction.v1.QueryEndedAuctionResponse",
  encode(message: QueryEndedAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEndedAuctionResponse {
    return {
      auction: isSet(object.auction) ? Auction.fromJSON(object.auction) : undefined
    };
  },
  fromPartial(object: Partial<QueryEndedAuctionResponse>): QueryEndedAuctionResponse {
    const message = createBaseQueryEndedAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: QueryEndedAuctionResponseAmino): QueryEndedAuctionResponse {
    const message = createBaseQueryEndedAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryEndedAuctionResponse): QueryEndedAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEndedAuctionResponseAminoMsg): QueryEndedAuctionResponse {
    return QueryEndedAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEndedAuctionResponseProtoMsg): QueryEndedAuctionResponse {
    return QueryEndedAuctionResponse.decode(message.value);
  },
  toProto(message: QueryEndedAuctionResponse): Uint8Array {
    return QueryEndedAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEndedAuctionResponse): QueryEndedAuctionResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryEndedAuctionResponse",
      value: QueryEndedAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveAuctionsRequest(): QueryActiveAuctionsRequest {
  return {};
}
export const QueryActiveAuctionsRequest = {
  typeUrl: "/auction.v1.QueryActiveAuctionsRequest",
  encode(_: QueryActiveAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryActiveAuctionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryActiveAuctionsRequest>): QueryActiveAuctionsRequest {
    const message = createBaseQueryActiveAuctionsRequest();
    return message;
  },
  fromAmino(_: QueryActiveAuctionsRequestAmino): QueryActiveAuctionsRequest {
    const message = createBaseQueryActiveAuctionsRequest();
    return message;
  },
  toAmino(_: QueryActiveAuctionsRequest): QueryActiveAuctionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActiveAuctionsRequestAminoMsg): QueryActiveAuctionsRequest {
    return QueryActiveAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveAuctionsRequestProtoMsg): QueryActiveAuctionsRequest {
    return QueryActiveAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryActiveAuctionsRequest): Uint8Array {
    return QueryActiveAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveAuctionsRequest): QueryActiveAuctionsRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryActiveAuctionsRequest",
      value: QueryActiveAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveAuctionsResponse(): QueryActiveAuctionsResponse {
  return {
    auctions: []
  };
}
export const QueryActiveAuctionsResponse = {
  typeUrl: "/auction.v1.QueryActiveAuctionsResponse",
  encode(message: QueryActiveAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryActiveAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Auction.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryActiveAuctionsResponse>): QueryActiveAuctionsResponse {
    const message = createBaseQueryActiveAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryActiveAuctionsResponseAmino): QueryActiveAuctionsResponse {
    const message = createBaseQueryActiveAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryActiveAuctionsResponse): QueryActiveAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryActiveAuctionsResponseAminoMsg): QueryActiveAuctionsResponse {
    return QueryActiveAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveAuctionsResponseProtoMsg): QueryActiveAuctionsResponse {
    return QueryActiveAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryActiveAuctionsResponse): Uint8Array {
    return QueryActiveAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveAuctionsResponse): QueryActiveAuctionsResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryActiveAuctionsResponse",
      value: QueryActiveAuctionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEndedAuctionsRequest(): QueryEndedAuctionsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryEndedAuctionsRequest = {
  typeUrl: "/auction.v1.QueryEndedAuctionsRequest",
  encode(message: QueryEndedAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEndedAuctionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryEndedAuctionsRequest>): QueryEndedAuctionsRequest {
    const message = createBaseQueryEndedAuctionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEndedAuctionsRequestAmino): QueryEndedAuctionsRequest {
    const message = createBaseQueryEndedAuctionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEndedAuctionsRequest): QueryEndedAuctionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEndedAuctionsRequestAminoMsg): QueryEndedAuctionsRequest {
    return QueryEndedAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEndedAuctionsRequestProtoMsg): QueryEndedAuctionsRequest {
    return QueryEndedAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryEndedAuctionsRequest): Uint8Array {
    return QueryEndedAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEndedAuctionsRequest): QueryEndedAuctionsRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryEndedAuctionsRequest",
      value: QueryEndedAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEndedAuctionsResponse(): QueryEndedAuctionsResponse {
  return {
    auctions: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryEndedAuctionsResponse = {
  typeUrl: "/auction.v1.QueryEndedAuctionsResponse",
  encode(message: QueryEndedAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEndedAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Auction.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryEndedAuctionsResponse>): QueryEndedAuctionsResponse {
    const message = createBaseQueryEndedAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEndedAuctionsResponseAmino): QueryEndedAuctionsResponse {
    const message = createBaseQueryEndedAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEndedAuctionsResponse): QueryEndedAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEndedAuctionsResponseAminoMsg): QueryEndedAuctionsResponse {
    return QueryEndedAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEndedAuctionsResponseProtoMsg): QueryEndedAuctionsResponse {
    return QueryEndedAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryEndedAuctionsResponse): Uint8Array {
    return QueryEndedAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEndedAuctionsResponse): QueryEndedAuctionsResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryEndedAuctionsResponse",
      value: QueryEndedAuctionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    bidId: BigInt(0),
    auctionId: 0
  };
}
export const QueryBidRequest = {
  typeUrl: "/auction.v1.QueryBidRequest",
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bidId);
    }
    if (message.auctionId !== 0) {
      writer.uint32(16).uint32(message.auctionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryBidRequest {
    return {
      bidId: isSet(object.bidId) ? BigInt(object.bidId.toString()) : BigInt(0),
      auctionId: isSet(object.auctionId) ? Number(object.auctionId) : 0
    };
  },
  fromPartial(object: Partial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BigInt(object.bidId.toString()) : BigInt(0);
    message.auctionId = object.auctionId ?? 0;
    return message;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bidId = BigInt(object.bid_id);
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    return message;
  },
  toAmino(message: QueryBidRequest): QueryBidRequestAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? message.bidId.toString() : undefined;
    obj.auction_id = message.auctionId;
    return obj;
  },
  fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest {
    return QueryBidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest {
    return QueryBidRequest.decode(message.value);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: undefined
  };
}
export const QueryBidResponse = {
  typeUrl: "/auction.v1.QueryBidResponse",
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBidResponse {
    return {
      bid: isSet(object.bid) ? Bid.fromJSON(object.bid) : undefined
    };
  },
  fromPartial(object: Partial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
    return message;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    return message;
  },
  toAmino(message: QueryBidResponse): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse {
    return QueryBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse {
    return QueryBidResponse.decode(message.value);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidsByAuctionRequest(): QueryBidsByAuctionRequest {
  return {
    auctionId: 0,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryBidsByAuctionRequest = {
  typeUrl: "/auction.v1.QueryBidsByAuctionRequest",
  encode(message: QueryBidsByAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint32(message.auctionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBidsByAuctionRequest {
    return {
      auctionId: isSet(object.auctionId) ? Number(object.auctionId) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBidsByAuctionRequest>): QueryBidsByAuctionRequest {
    const message = createBaseQueryBidsByAuctionRequest();
    message.auctionId = object.auctionId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBidsByAuctionRequestAmino): QueryBidsByAuctionRequest {
    const message = createBaseQueryBidsByAuctionRequest();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsByAuctionRequest): QueryBidsByAuctionRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsByAuctionRequestAminoMsg): QueryBidsByAuctionRequest {
    return QueryBidsByAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsByAuctionRequestProtoMsg): QueryBidsByAuctionRequest {
    return QueryBidsByAuctionRequest.decode(message.value);
  },
  toProto(message: QueryBidsByAuctionRequest): Uint8Array {
    return QueryBidsByAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsByAuctionRequest): QueryBidsByAuctionRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryBidsByAuctionRequest",
      value: QueryBidsByAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidsByAuctionResponse(): QueryBidsByAuctionResponse {
  return {
    bids: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryBidsByAuctionResponse = {
  typeUrl: "/auction.v1.QueryBidsByAuctionResponse",
  encode(message: QueryBidsByAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBidsByAuctionResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBidsByAuctionResponse>): QueryBidsByAuctionResponse {
    const message = createBaseQueryBidsByAuctionResponse();
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBidsByAuctionResponseAmino): QueryBidsByAuctionResponse {
    const message = createBaseQueryBidsByAuctionResponse();
    message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsByAuctionResponse): QueryBidsByAuctionResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
    } else {
      obj.bids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsByAuctionResponseAminoMsg): QueryBidsByAuctionResponse {
    return QueryBidsByAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsByAuctionResponseProtoMsg): QueryBidsByAuctionResponse {
    return QueryBidsByAuctionResponse.decode(message.value);
  },
  toProto(message: QueryBidsByAuctionResponse): Uint8Array {
    return QueryBidsByAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsByAuctionResponse): QueryBidsByAuctionResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryBidsByAuctionResponse",
      value: QueryBidsByAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceRequest(): QueryTokenPriceRequest {
  return {
    denom: ""
  };
}
export const QueryTokenPriceRequest = {
  typeUrl: "/auction.v1.QueryTokenPriceRequest",
  encode(message: QueryTokenPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPriceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenPriceRequest>): QueryTokenPriceRequest {
    const message = createBaseQueryTokenPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenPriceRequestAmino): QueryTokenPriceRequest {
    const message = createBaseQueryTokenPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTokenPriceRequest): QueryTokenPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPriceRequestAminoMsg): QueryTokenPriceRequest {
    return QueryTokenPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPriceRequestProtoMsg): QueryTokenPriceRequest {
    return QueryTokenPriceRequest.decode(message.value);
  },
  toProto(message: QueryTokenPriceRequest): Uint8Array {
    return QueryTokenPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPriceRequest): QueryTokenPriceRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryTokenPriceRequest",
      value: QueryTokenPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceResponse(): QueryTokenPriceResponse {
  return {
    tokenPrice: undefined
  };
}
export const QueryTokenPriceResponse = {
  typeUrl: "/auction.v1.QueryTokenPriceResponse",
  encode(message: QueryTokenPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPriceResponse {
    return {
      tokenPrice: isSet(object.tokenPrice) ? TokenPrice.fromJSON(object.tokenPrice) : undefined
    };
  },
  fromPartial(object: Partial<QueryTokenPriceResponse>): QueryTokenPriceResponse {
    const message = createBaseQueryTokenPriceResponse();
    message.tokenPrice = object.tokenPrice !== undefined && object.tokenPrice !== null ? TokenPrice.fromPartial(object.tokenPrice) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPriceResponseAmino): QueryTokenPriceResponse {
    const message = createBaseQueryTokenPriceResponse();
    if (object.token_price !== undefined && object.token_price !== null) {
      message.tokenPrice = TokenPrice.fromAmino(object.token_price);
    }
    return message;
  },
  toAmino(message: QueryTokenPriceResponse): QueryTokenPriceResponseAmino {
    const obj: any = {};
    obj.token_price = message.tokenPrice ? TokenPrice.toAmino(message.tokenPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPriceResponseAminoMsg): QueryTokenPriceResponse {
    return QueryTokenPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPriceResponseProtoMsg): QueryTokenPriceResponse {
    return QueryTokenPriceResponse.decode(message.value);
  },
  toProto(message: QueryTokenPriceResponse): Uint8Array {
    return QueryTokenPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPriceResponse): QueryTokenPriceResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryTokenPriceResponse",
      value: QueryTokenPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPricesRequest(): QueryTokenPricesRequest {
  return {};
}
export const QueryTokenPricesRequest = {
  typeUrl: "/auction.v1.QueryTokenPricesRequest",
  encode(_: QueryTokenPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTokenPricesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTokenPricesRequest>): QueryTokenPricesRequest {
    const message = createBaseQueryTokenPricesRequest();
    return message;
  },
  fromAmino(_: QueryTokenPricesRequestAmino): QueryTokenPricesRequest {
    const message = createBaseQueryTokenPricesRequest();
    return message;
  },
  toAmino(_: QueryTokenPricesRequest): QueryTokenPricesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTokenPricesRequestAminoMsg): QueryTokenPricesRequest {
    return QueryTokenPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPricesRequestProtoMsg): QueryTokenPricesRequest {
    return QueryTokenPricesRequest.decode(message.value);
  },
  toProto(message: QueryTokenPricesRequest): Uint8Array {
    return QueryTokenPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPricesRequest): QueryTokenPricesRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryTokenPricesRequest",
      value: QueryTokenPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPricesResponse(): QueryTokenPricesResponse {
  return {
    tokenPrices: []
  };
}
export const QueryTokenPricesResponse = {
  typeUrl: "/auction.v1.QueryTokenPricesResponse",
  encode(message: QueryTokenPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenPrices) {
      TokenPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPricesResponse {
    return {
      tokenPrices: Array.isArray(object?.tokenPrices) ? object.tokenPrices.map((e: any) => TokenPrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTokenPricesResponse>): QueryTokenPricesResponse {
    const message = createBaseQueryTokenPricesResponse();
    message.tokenPrices = object.tokenPrices?.map(e => TokenPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenPricesResponseAmino): QueryTokenPricesResponse {
    const message = createBaseQueryTokenPricesResponse();
    message.tokenPrices = object.token_prices?.map(e => TokenPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenPricesResponse): QueryTokenPricesResponseAmino {
    const obj: any = {};
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map(e => e ? TokenPrice.toAmino(e) : undefined);
    } else {
      obj.token_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenPricesResponseAminoMsg): QueryTokenPricesResponse {
    return QueryTokenPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPricesResponseProtoMsg): QueryTokenPricesResponse {
    return QueryTokenPricesResponse.decode(message.value);
  },
  toProto(message: QueryTokenPricesResponse): Uint8Array {
    return QueryTokenPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPricesResponse): QueryTokenPricesResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.QueryTokenPricesResponse",
      value: QueryTokenPricesResponse.encode(message).finish()
    };
  }
};