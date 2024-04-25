import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryParams defines the request type for querying x/community params. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.community.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParams defines the request type for querying x/community params. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.community.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParams defines the request type for querying x/community params. */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryBalanceRequest {
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/kava.community.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequestAmino {
}
export interface QueryBalanceRequestAminoMsg {
    type: "/kava.community.v1beta1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequestSDKType {
}
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
export interface QueryTotalBalanceRequest {
}
export interface QueryTotalBalanceRequestProtoMsg {
    typeUrl: "/kava.community.v1beta1.QueryTotalBalanceRequest";
    value: Uint8Array;
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequestAmino {
}
export interface QueryTotalBalanceRequestAminoMsg {
    type: "/kava.community.v1beta1.QueryTotalBalanceRequest";
    value: QueryTotalBalanceRequestAmino;
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequestSDKType {
}
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
export interface QueryAnnualizedRewardsRequest {
}
export interface QueryAnnualizedRewardsRequestProtoMsg {
    typeUrl: "/kava.community.v1beta1.QueryAnnualizedRewardsRequest";
    value: Uint8Array;
}
/** QueryAnnualizedRewardsRequest defines the request type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsRequestAmino {
}
export interface QueryAnnualizedRewardsRequestAminoMsg {
    type: "/kava.community.v1beta1.QueryAnnualizedRewardsRequest";
    value: QueryAnnualizedRewardsRequestAmino;
}
/** QueryAnnualizedRewardsRequest defines the request type for querying the annualized rewards. */
export interface QueryAnnualizedRewardsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(_: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBalanceRequest;
    fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(_: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(_: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryTotalBalanceRequest: {
    typeUrl: string;
    encode(_: QueryTotalBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalBalanceRequest;
    fromPartial(_: Partial<QueryTotalBalanceRequest>): QueryTotalBalanceRequest;
    fromAmino(_: QueryTotalBalanceRequestAmino): QueryTotalBalanceRequest;
    toAmino(_: QueryTotalBalanceRequest): QueryTotalBalanceRequestAmino;
    fromAminoMsg(object: QueryTotalBalanceRequestAminoMsg): QueryTotalBalanceRequest;
    fromProtoMsg(message: QueryTotalBalanceRequestProtoMsg): QueryTotalBalanceRequest;
    toProto(message: QueryTotalBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryTotalBalanceRequest): QueryTotalBalanceRequestProtoMsg;
};
export declare const QueryTotalBalanceResponse: {
    typeUrl: string;
    encode(message: QueryTotalBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBalanceResponse;
    fromPartial(object: Partial<QueryTotalBalanceResponse>): QueryTotalBalanceResponse;
    fromAmino(object: QueryTotalBalanceResponseAmino): QueryTotalBalanceResponse;
    toAmino(message: QueryTotalBalanceResponse): QueryTotalBalanceResponseAmino;
    fromAminoMsg(object: QueryTotalBalanceResponseAminoMsg): QueryTotalBalanceResponse;
    fromProtoMsg(message: QueryTotalBalanceResponseProtoMsg): QueryTotalBalanceResponse;
    toProto(message: QueryTotalBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryTotalBalanceResponse): QueryTotalBalanceResponseProtoMsg;
};
export declare const QueryAnnualizedRewardsRequest: {
    typeUrl: string;
    encode(_: QueryAnnualizedRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAnnualizedRewardsRequest;
    fromPartial(_: Partial<QueryAnnualizedRewardsRequest>): QueryAnnualizedRewardsRequest;
    fromAmino(_: QueryAnnualizedRewardsRequestAmino): QueryAnnualizedRewardsRequest;
    toAmino(_: QueryAnnualizedRewardsRequest): QueryAnnualizedRewardsRequestAmino;
    fromAminoMsg(object: QueryAnnualizedRewardsRequestAminoMsg): QueryAnnualizedRewardsRequest;
    fromProtoMsg(message: QueryAnnualizedRewardsRequestProtoMsg): QueryAnnualizedRewardsRequest;
    toProto(message: QueryAnnualizedRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryAnnualizedRewardsRequest): QueryAnnualizedRewardsRequestProtoMsg;
};
export declare const QueryAnnualizedRewardsResponse: {
    typeUrl: string;
    encode(message: QueryAnnualizedRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnnualizedRewardsResponse;
    fromPartial(object: Partial<QueryAnnualizedRewardsResponse>): QueryAnnualizedRewardsResponse;
    fromAmino(object: QueryAnnualizedRewardsResponseAmino): QueryAnnualizedRewardsResponse;
    toAmino(message: QueryAnnualizedRewardsResponse): QueryAnnualizedRewardsResponseAmino;
    fromAminoMsg(object: QueryAnnualizedRewardsResponseAminoMsg): QueryAnnualizedRewardsResponse;
    fromProtoMsg(message: QueryAnnualizedRewardsResponseProtoMsg): QueryAnnualizedRewardsResponse;
    toProto(message: QueryAnnualizedRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryAnnualizedRewardsResponse): QueryAnnualizedRewardsResponseProtoMsg;
};
