import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequest {
}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequestSDKType {
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponse {
    /** Balances is the coins available in the safety fund */
    balances: Coin[];
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponseSDKType {
    balances: CoinSDKType[];
}
export declare const QueryBalancesRequest: {
    encode(_: QueryBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBalancesRequest;
    fromPartial(_: Partial<QueryBalancesRequest>): QueryBalancesRequest;
};
export declare const QueryBalancesResponse: {
    encode(message: QueryBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalancesResponse;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
};
