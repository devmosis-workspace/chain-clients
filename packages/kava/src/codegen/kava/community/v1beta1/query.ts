import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryParams defines the request type for querying x/community params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParams defines the request type for querying x/community params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.community.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParams defines the request type for querying x/community params. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/community params. */
export interface QueryParamsResponse {
  /** params represents the community module parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/community params. */
export interface QueryParamsResponseAmino {
  /** params represents the community module parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.community.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/community params. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
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
  coins?: CoinAmino[];
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
  pool?: DecCoinAmino[];
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
/** QueryAnnualizedRewardsRequest defines the request type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsRequest {}
export interface QueryAnnualizedRewardsRequestProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsRequest";
  value: Uint8Array;
}
/** QueryAnnualizedRewardsRequest defines the request type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsRequestAmino {}
export interface QueryAnnualizedRewardsRequestAminoMsg {
  type: "/kava.community.v1beta1.QueryAnnualizedRewardsRequest";
  value: QueryAnnualizedRewardsRequestAmino;
}
/** QueryAnnualizedRewardsRequest defines the request type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsRequestSDKType {}
/** QueryAnnualizedRewardsResponse defines the response type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsResponse {
  /** staking_rewards is the calculated annualized staking rewards percentage rate */
  stakingRewards: string;
}
export interface QueryAnnualizedRewardsResponseProtoMsg {
  typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsResponse";
  value: Uint8Array;
}
/** QueryAnnualizedRewardsResponse defines the response type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsResponseAmino {
  /** staking_rewards is the calculated annualized staking rewards percentage rate */
  staking_rewards?: string;
}
export interface QueryAnnualizedRewardsResponseAminoMsg {
  type: "/kava.community.v1beta1.QueryAnnualizedRewardsResponse";
  value: QueryAnnualizedRewardsResponseAmino;
}
/** QueryAnnualizedRewardsResponse defines the response type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsResponseSDKType {
  staking_rewards: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.community.v1beta1.QueryParamsRequest",
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
      typeUrl: "/kava.community.v1beta1.QueryParamsRequest",
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
  typeUrl: "/kava.community.v1beta1.QueryParamsResponse",
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
      typeUrl: "/kava.community.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
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
    const message = createBaseQueryBalanceRequest();
    return message;
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
    const message = createBaseQueryBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
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
    const message = createBaseQueryTotalBalanceRequest();
    return message;
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
    const message = createBaseQueryTotalBalanceResponse();
    message.pool = object.pool?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
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
function createBaseQueryAnnualizedRewardsRequest(): QueryAnnualizedRewardsRequest {
  return {};
}
export const QueryAnnualizedRewardsRequest = {
  typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsRequest",
  encode(_: QueryAnnualizedRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAnnualizedRewardsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAnnualizedRewardsRequest>): QueryAnnualizedRewardsRequest {
    const message = createBaseQueryAnnualizedRewardsRequest();
    return message;
  },
  fromAmino(_: QueryAnnualizedRewardsRequestAmino): QueryAnnualizedRewardsRequest {
    const message = createBaseQueryAnnualizedRewardsRequest();
    return message;
  },
  toAmino(_: QueryAnnualizedRewardsRequest): QueryAnnualizedRewardsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAnnualizedRewardsRequestAminoMsg): QueryAnnualizedRewardsRequest {
    return QueryAnnualizedRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnualizedRewardsRequestProtoMsg): QueryAnnualizedRewardsRequest {
    return QueryAnnualizedRewardsRequest.decode(message.value);
  },
  toProto(message: QueryAnnualizedRewardsRequest): Uint8Array {
    return QueryAnnualizedRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualizedRewardsRequest): QueryAnnualizedRewardsRequestProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsRequest",
      value: QueryAnnualizedRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualizedRewardsResponse(): QueryAnnualizedRewardsResponse {
  return {
    stakingRewards: ""
  };
}
export const QueryAnnualizedRewardsResponse = {
  typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsResponse",
  encode(message: QueryAnnualizedRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryAnnualizedRewardsResponse {
    return {
      stakingRewards: isSet(object.stakingRewards) ? String(object.stakingRewards) : ""
    };
  },
  fromPartial(object: Partial<QueryAnnualizedRewardsResponse>): QueryAnnualizedRewardsResponse {
    const message = createBaseQueryAnnualizedRewardsResponse();
    message.stakingRewards = object.stakingRewards ?? "";
    return message;
  },
  fromAmino(object: QueryAnnualizedRewardsResponseAmino): QueryAnnualizedRewardsResponse {
    const message = createBaseQueryAnnualizedRewardsResponse();
    if (object.staking_rewards !== undefined && object.staking_rewards !== null) {
      message.stakingRewards = object.staking_rewards;
    }
    return message;
  },
  toAmino(message: QueryAnnualizedRewardsResponse): QueryAnnualizedRewardsResponseAmino {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards;
    return obj;
  },
  fromAminoMsg(object: QueryAnnualizedRewardsResponseAminoMsg): QueryAnnualizedRewardsResponse {
    return QueryAnnualizedRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnualizedRewardsResponseProtoMsg): QueryAnnualizedRewardsResponse {
    return QueryAnnualizedRewardsResponse.decode(message.value);
  },
  toProto(message: QueryAnnualizedRewardsResponse): Uint8Array {
    return QueryAnnualizedRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualizedRewardsResponse): QueryAnnualizedRewardsResponseProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsResponse",
      value: QueryAnnualizedRewardsResponse.encode(message).finish()
    };
  }
};