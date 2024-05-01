import { Rpc } from "../../../helpers";
import { QueryParams, QueryParamsResponse, QueryIndexes, QueryIndexesResponse, QuerySwapFee, QuerySwapFeeResponse, QueryRedeemFee, QueryRedeemFeeResponse, QueryIndexBalances, QueryIndexBalancesResponse, QueryIndexPrices, QueryIndexPricesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of the x/metoken module. */
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    /** Indexes queries for a specific or all the registered indexes. */
    indexes(request: QueryIndexes): Promise<QueryIndexesResponse>;
    /** SwapFee computes fee that would be applied when executing MsgSwap. */
    swapFee(request: QuerySwapFee): Promise<QuerySwapFeeResponse>;
    /** RedeemFee computes a fee that would be applied when executing MsgRedeem. */
    redeemFee(request: QueryRedeemFee): Promise<QueryRedeemFeeResponse>;
    /** IndexBalances queries for Index's balances of a specific or all the registered indexes. */
    indexBalances(request: QueryIndexBalances): Promise<QueryIndexBalancesResponse>;
    /**
     * IndexPrices queries for Index's price of a specific or all the registered indexes. It also includes the
     * underlying assets prices as well as swap and redeem rates.
     */
    indexPrices(request: QueryIndexPrices): Promise<QueryIndexPricesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    indexes(request: QueryIndexes): Promise<QueryIndexesResponse>;
    swapFee(request: QuerySwapFee): Promise<QuerySwapFeeResponse>;
    redeemFee(request: QueryRedeemFee): Promise<QueryRedeemFeeResponse>;
    indexBalances(request: QueryIndexBalances): Promise<QueryIndexBalancesResponse>;
    indexPrices(request: QueryIndexPrices): Promise<QueryIndexPricesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    indexes(request: QueryIndexes): Promise<QueryIndexesResponse>;
    swapFee(request: QuerySwapFee): Promise<QuerySwapFeeResponse>;
    redeemFee(request: QueryRedeemFee): Promise<QueryRedeemFeeResponse>;
    indexBalances(request: QueryIndexBalances): Promise<QueryIndexBalancesResponse>;
    indexPrices(request: QueryIndexPrices): Promise<QueryIndexPricesResponse>;
};
