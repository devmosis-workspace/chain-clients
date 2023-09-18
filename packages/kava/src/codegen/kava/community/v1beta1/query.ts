import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequest {}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequestAmino {}
export interface QueryBalanceRequestAminoMsg {
  type: "/kava.community.v1beta1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequestSDKType {}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponse {
  coins: Coin[];
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponseAmino {
  coins: CoinAmino[];
}
export interface QueryBalanceResponseAminoMsg {
  type: "/kava.community.v1beta1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponseSDKType {
  coins: CoinSDKType[];
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequest {}
export interface QueryTotalBalanceRequestProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryTotalBalanceRequest";
  value: Uint8Array;
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequestAmino {}
export interface QueryTotalBalanceRequestAminoMsg {
  type: "/kava.community.v1beta1.QueryTotalBalanceRequest";
  value: QueryTotalBalanceRequestAmino;
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequestSDKType {}
/**
 * QueryTotalBalanceResponse defines the response type for querying total
 * community pool balance. This matches the x/distribution CommunityPool query response.
 */
export interface QueryTotalBalanceResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
export interface QueryTotalBalanceResponseProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryTotalBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryTotalBalanceResponse defines the response type for querying total
 * community pool balance. This matches the x/distribution CommunityPool query response.
 */
export interface QueryTotalBalanceResponseAmino {
  /** pool defines community pool's coins. */
  pool: DecCoinAmino[];
}
export interface QueryTotalBalanceResponseAminoMsg {
  type: "/kava.community.v1beta1.QueryTotalBalanceResponse";
  value: QueryTotalBalanceResponseAmino;
}
/**
 * QueryTotalBalanceResponse defines the response type for querying total
 * community pool balance. This matches the x/distribution CommunityPool query response.
 */
export interface QueryTotalBalanceResponseSDKType {
  pool: DecCoinSDKType[];
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {};
}
export const QueryBalanceRequest = {
  typeUrl: "/kava.community.v1beta1.QueryBalanceRequest",
  encode(_: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    return message;
  },
  fromAmino(_: QueryBalanceRequestAmino): QueryBalanceRequest {
    return {};
  },
  toAmino(_: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    coins: []
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/kava.community.v1beta1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBalanceRequest(): QueryTotalBalanceRequest {
  return {};
}
export const QueryTotalBalanceRequest = {
  typeUrl: "/kava.community.v1beta1.QueryTotalBalanceRequest",
  encode(_: QueryTotalBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalBalanceRequest>): QueryTotalBalanceRequest {
    const message = createBaseQueryTotalBalanceRequest();
    return message;
  },
  fromAmino(_: QueryTotalBalanceRequestAmino): QueryTotalBalanceRequest {
    return {};
  },
  toAmino(_: QueryTotalBalanceRequest): QueryTotalBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalBalanceRequestAminoMsg): QueryTotalBalanceRequest {
    return QueryTotalBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBalanceRequestProtoMsg): QueryTotalBalanceRequest {
    return QueryTotalBalanceRequest.decode(message.value);
  },
  toProto(message: QueryTotalBalanceRequest): Uint8Array {
    return QueryTotalBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBalanceRequest): QueryTotalBalanceRequestProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.QueryTotalBalanceRequest",
      value: QueryTotalBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBalanceResponse(): QueryTotalBalanceResponse {
  return {
    pool: []
  };
}
export const QueryTotalBalanceResponse = {
  typeUrl: "/kava.community.v1beta1.QueryTotalBalanceResponse",
  encode(message: QueryTotalBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBalanceResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalBalanceResponse>): QueryTotalBalanceResponse {
    const message = createBaseQueryTotalBalanceResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalBalanceResponseAmino): QueryTotalBalanceResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalBalanceResponse): QueryTotalBalanceResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalBalanceResponseAminoMsg): QueryTotalBalanceResponse {
    return QueryTotalBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBalanceResponseProtoMsg): QueryTotalBalanceResponse {
    return QueryTotalBalanceResponse.decode(message.value);
  },
  toProto(message: QueryTotalBalanceResponse): Uint8Array {
    return QueryTotalBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBalanceResponse): QueryTotalBalanceResponseProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.QueryTotalBalanceResponse",
      value: QueryTotalBalanceResponse.encode(message).finish()
    };
  }
};