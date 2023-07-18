import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequest {
}
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequestSDKType {
}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponse {
    coins: Coin[];
}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponseSDKType {
    coins: CoinSDKType[];
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequest {
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
/**
 * QueryTotalBalanceResponse defines the response type for querying total
 * community pool balance. This matches the x/distribution CommunityPool query response.
 */
export interface QueryTotalBalanceResponseSDKType {
    pool: DecCoinSDKType[];
}
export declare const QueryBalanceRequest: {
    encode(_: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBalanceRequest;
    fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryTotalBalanceRequest: {
    encode(_: QueryTotalBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalBalanceRequest;
    fromPartial(_: Partial<QueryTotalBalanceRequest>): QueryTotalBalanceRequest;
};
export declare const QueryTotalBalanceResponse: {
    encode(message: QueryTotalBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalBalanceResponse;
    fromPartial(object: Partial<QueryTotalBalanceResponse>): QueryTotalBalanceResponse;
};
