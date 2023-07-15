import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
    /** address of the clawback vesting account */
    address: string;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequestSDKType {
    address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
    /** locked defines the current amount of locked tokens */
    locked: Coin[];
    /** unvested defines the current amount of unvested tokens */
    unvested: Coin[];
    /** vested defines the current amount of vested tokens */
    vested: Coin[];
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponseSDKType {
    locked: CoinSDKType[];
    unvested: CoinSDKType[];
    vested: CoinSDKType[];
}
export declare const QueryBalancesRequest: {
    encode(message: QueryBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalancesRequest;
    fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest;
};
export declare const QueryBalancesResponse: {
    encode(message: QueryBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalancesResponse;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
};
