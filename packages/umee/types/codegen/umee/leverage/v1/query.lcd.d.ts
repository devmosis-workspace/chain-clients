import { LCDClient } from "@osmonauts/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryRegisteredTokens, QueryRegisteredTokensResponseSDKType, QueryMarketSummary, QueryMarketSummaryResponseSDKType, QueryAccountBalances, QueryAccountBalancesResponseSDKType, QueryAccountSummary, QueryAccountSummaryResponseSDKType, QueryLiquidationTargets, QueryLiquidationTargetsResponseSDKType, QueryBadDebts, QueryBadDebtsResponseSDKType, QueryMaxWithdraw, QueryMaxWithdrawResponseSDKType, QueryMaxBorrow, QueryMaxBorrowResponseSDKType, QueryInspect, QueryInspectResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParams): Promise<QueryParamsResponseSDKType>;
    registeredTokens(params: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponseSDKType>;
    marketSummary(params: QueryMarketSummary): Promise<QueryMarketSummaryResponseSDKType>;
    accountBalances(params: QueryAccountBalances): Promise<QueryAccountBalancesResponseSDKType>;
    accountSummary(params: QueryAccountSummary): Promise<QueryAccountSummaryResponseSDKType>;
    liquidationTargets(_params?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponseSDKType>;
    badDebts(_params?: QueryBadDebts): Promise<QueryBadDebtsResponseSDKType>;
    maxWithdraw(params: QueryMaxWithdraw): Promise<QueryMaxWithdrawResponseSDKType>;
    maxBorrow(params: QueryMaxBorrow): Promise<QueryMaxBorrowResponseSDKType>;
    inspect(params: QueryInspect): Promise<QueryInspectResponseSDKType>;
}
