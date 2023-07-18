import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequest {
    /** delegator is the address of the account to query */
    delegator: string;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestSDKType {
    delegator: string;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponse {
    /** vested is the amount of all delegated coins that have vested (ie not locked) */
    vested?: Coin;
    /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
    vesting?: Coin;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseSDKType {
    vested?: CoinSDKType;
    vesting?: CoinSDKType;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
    /** Height is the block height at which these totals apply */
    height: Long;
    /** Result is a list of coins supplied to liquid */
    result: Coin[];
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
    height: Long;
    result: CoinSDKType[];
}
export declare const QueryDelegatedBalanceRequest: {
    encode(message: QueryDelegatedBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatedBalanceRequest;
    fromPartial(object: Partial<QueryDelegatedBalanceRequest>): QueryDelegatedBalanceRequest;
};
export declare const QueryDelegatedBalanceResponse: {
    encode(message: QueryDelegatedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatedBalanceResponse;
    fromPartial(object: Partial<QueryDelegatedBalanceResponse>): QueryDelegatedBalanceResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(_: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalSupplyRequest;
    fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
