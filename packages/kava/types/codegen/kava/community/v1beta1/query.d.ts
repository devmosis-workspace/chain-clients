import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
