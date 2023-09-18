import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.auction.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.auction.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequest {
  auctionId: bigint;
}
export interface QueryAuctionRequestProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionRequest";
  value: Uint8Array;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestAmino {
  auction_id: string;
}
export interface QueryAuctionRequestAminoMsg {
  type: "/kava.auction.v1beta1.QueryAuctionRequest";
  value: QueryAuctionRequestAmino;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestSDKType {
  auction_id: bigint;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
  auction: Any;
}
export interface QueryAuctionResponseProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionResponse";
  value: Uint8Array;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseAmino {
  auction?: AnyAmino;
}
export interface QueryAuctionResponseAminoMsg {
  type: "/kava.auction.v1beta1.QueryAuctionResponse";
  value: QueryAuctionResponseAmino;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseSDKType {
  auction: AnySDKType;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequest {
  type: string;
  owner: string;
  denom: string;
  phase: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionsRequest";
  value: Uint8Array;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestAmino {
  type: string;
  owner: string;
  denom: string;
  phase: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsRequestAminoMsg {
  type: "/kava.auction.v1beta1.QueryAuctionsRequest";
  value: QueryAuctionsRequestAmino;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestSDKType {
  type: string;
  owner: string;
  denom: string;
  phase: string;
  pagination: PageRequestSDKType;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponse {
  auctions: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionsResponse";
  value: Uint8Array;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseAmino {
  auctions: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
  type: "/kava.auction.v1beta1.QueryAuctionsResponse";
  value: QueryAuctionsResponseAmino;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseSDKType {
  auctions: AnySDKType[];
  pagination: PageResponseSDKType;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequest {}
export interface QueryNextAuctionIDRequestProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDRequest";
  value: Uint8Array;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequestAmino {}
export interface QueryNextAuctionIDRequestAminoMsg {
  type: "/kava.auction.v1beta1.QueryNextAuctionIDRequest";
  value: QueryNextAuctionIDRequestAmino;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequestSDKType {}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponse {
  id: bigint;
}
export interface QueryNextAuctionIDResponseProtoMsg {
  typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDResponse";
  value: Uint8Array;
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponseAmino {
  id: string;
}
export interface QueryNextAuctionIDResponseAminoMsg {
  type: "/kava.auction.v1beta1.QueryNextAuctionIDResponse";
  value: QueryNextAuctionIDResponseAmino;
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponseSDKType {
  id: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.auction.v1beta1.QueryParamsRequest",
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
      typeUrl: "/kava.auction.v1beta1.QueryParamsRequest",
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
  typeUrl: "/kava.auction.v1beta1.QueryParamsResponse",
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
      typeUrl: "/kava.auction.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    auctionId: BigInt(0)
  };
}
export const QueryAuctionRequest = {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionRequest",
  encode(message: QueryAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionRequest {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest {
    return {
      auctionId: BigInt(object.auction_id)
    };
  },
  toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.decode(message.value);
  },
  toProto(message: QueryAuctionRequest): Uint8Array {
    return QueryAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.QueryAuctionRequest",
      value: QueryAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: Any.fromPartial({})
  };
}
export const QueryAuctionResponse = {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionResponse",
  encode(message: QueryAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse {
    return {
      auction: object?.auction ? Any.fromAmino(object.auction) : undefined
    };
  },
  toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Any.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.decode(message.value);
  },
  toProto(message: QueryAuctionResponse): Uint8Array {
    return QueryAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.QueryAuctionResponse",
      value: QueryAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    type: "",
    owner: "",
    denom: "",
    phase: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAuctionsRequest = {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionsRequest",
  encode(message: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest {
    return {
      type: object.type,
      owner: object.owner,
      denom: object.denom,
      phase: object.phase,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.owner = message.owner;
    obj.denom = message.denom;
    obj.phase = message.phase;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsRequest): Uint8Array {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/kava.auction.v1beta1.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Any.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsResponse): Uint8Array {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNextAuctionIDRequest(): QueryNextAuctionIDRequest {
  return {};
}
export const QueryNextAuctionIDRequest = {
  typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDRequest",
  encode(_: QueryNextAuctionIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryNextAuctionIDRequest {
    return {};
  },
  fromPartial(_: Partial<QueryNextAuctionIDRequest>): QueryNextAuctionIDRequest {
    const message = createBaseQueryNextAuctionIDRequest();
    return message;
  },
  fromAmino(_: QueryNextAuctionIDRequestAmino): QueryNextAuctionIDRequest {
    return {};
  },
  toAmino(_: QueryNextAuctionIDRequest): QueryNextAuctionIDRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNextAuctionIDRequestAminoMsg): QueryNextAuctionIDRequest {
    return QueryNextAuctionIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextAuctionIDRequestProtoMsg): QueryNextAuctionIDRequest {
    return QueryNextAuctionIDRequest.decode(message.value);
  },
  toProto(message: QueryNextAuctionIDRequest): Uint8Array {
    return QueryNextAuctionIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextAuctionIDRequest): QueryNextAuctionIDRequestProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDRequest",
      value: QueryNextAuctionIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNextAuctionIDResponse(): QueryNextAuctionIDResponse {
  return {
    id: BigInt(0)
  };
}
export const QueryNextAuctionIDResponse = {
  typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDResponse",
  encode(message: QueryNextAuctionIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryNextAuctionIDResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryNextAuctionIDResponse>): QueryNextAuctionIDResponse {
    const message = createBaseQueryNextAuctionIDResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNextAuctionIDResponseAmino): QueryNextAuctionIDResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: QueryNextAuctionIDResponse): QueryNextAuctionIDResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNextAuctionIDResponseAminoMsg): QueryNextAuctionIDResponse {
    return QueryNextAuctionIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextAuctionIDResponseProtoMsg): QueryNextAuctionIDResponse {
    return QueryNextAuctionIDResponse.decode(message.value);
  },
  toProto(message: QueryNextAuctionIDResponse): Uint8Array {
    return QueryNextAuctionIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextAuctionIDResponse): QueryNextAuctionIDResponseProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDResponse",
      value: QueryNextAuctionIDResponse.encode(message).finish()
    };
  }
};