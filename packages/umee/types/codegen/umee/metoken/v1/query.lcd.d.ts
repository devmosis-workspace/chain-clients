import { LCDClient } from "@cosmology/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryIndexes, QueryIndexesResponseSDKType, QuerySwapFee, QuerySwapFeeResponseSDKType, QueryRedeemFee, QueryRedeemFeeResponseSDKType, QueryIndexBalances, QueryIndexBalancesResponseSDKType, QueryIndexPrices, QueryIndexPricesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParams): Promise<QueryParamsResponseSDKType>;
    indexes(params: QueryIndexes): Promise<QueryIndexesResponseSDKType>;
    swapFee(params: QuerySwapFee): Promise<QuerySwapFeeResponseSDKType>;
    redeemFee(params: QueryRedeemFee): Promise<QueryRedeemFeeResponseSDKType>;
    indexBalances(params: QueryIndexBalances): Promise<QueryIndexBalancesResponseSDKType>;
    indexPrices(params: QueryIndexPrices): Promise<QueryIndexPricesResponseSDKType>;
}
