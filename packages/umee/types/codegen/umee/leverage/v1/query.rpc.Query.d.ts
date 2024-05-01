import { Rpc } from "../../../helpers";
import { QueryParams, QueryParamsResponse, QueryRegisteredTokens, QueryRegisteredTokensResponse, QueryRegisteredTokensWithMarkets, QueryRegisteredTokensWithMarketsResponse, QuerySpecialAssets, QuerySpecialAssetsResponse, QueryMarketSummary, QueryMarketSummaryResponse, QueryAccountBalances, QueryAccountBalancesResponse, QueryAccountSummary, QueryAccountSummaryResponse, QueryLiquidationTargets, QueryLiquidationTargetsResponse, QueryBadDebts, QueryBadDebtsResponse, QueryMaxWithdraw, QueryMaxWithdrawResponse, QueryMaxBorrow, QueryMaxBorrowResponse, QueryInspect, QueryInspectResponse, QueryInspectAccount, QueryInspectAccountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of the x/leverage module. */
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    /** RegisteredTokens queries for all the registered tokens. */
    registeredTokens(request: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
    /** RegisteredTokensWithMarkets queries for all the registered tokens and their market summaries. */
    registeredTokensWithMarkets(request?: QueryRegisteredTokensWithMarkets): Promise<QueryRegisteredTokensWithMarketsResponse>;
    /** SpecialAssets queries for all special asset pairs. */
    specialAssets(request: QuerySpecialAssets): Promise<QuerySpecialAssetsResponse>;
    /** MarketSummary queries a base asset's current borrowing and supplying conditions. */
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
    /** AccountBalances queries an account's current supply, collateral, and borrow positions. */
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
    /** AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
    /** LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
    /** BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
    /** MaxWithdraw queries the maximum amount of a given token an address can withdraw. */
    maxWithdraw(request: QueryMaxWithdraw): Promise<QueryMaxWithdrawResponse>;
    /** MaxBorrow queries the maximum amount of a given token an address can borrow. */
    maxBorrow(request: QueryMaxBorrow): Promise<QueryMaxBorrowResponse>;
    /**
     * Inspect is the customizable inspector query. It returns a list of all borrowers,
     * starting from the highest borrowed value, filtered by any combination of: minimum
     * borrowed value (optionally of a specified token), minimum collateral value, minimum
     * progress toward liquidation threshold, and minimum LTV. Each account is displayed
     * with its address and borrowed/liquidation/collateral USD values, as well as its
     * actual token positions in human-readable symbol denoms instead of uTokens or ibc denoms.
     */
    inspect(request: QueryInspect): Promise<QueryInspectResponse>;
    /** InspectAccount runs the inspect query on a single address */
    inspectAccount(request: QueryInspectAccount): Promise<QueryInspectAccountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    registeredTokens(request: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
    registeredTokensWithMarkets(request?: QueryRegisteredTokensWithMarkets): Promise<QueryRegisteredTokensWithMarketsResponse>;
    specialAssets(request: QuerySpecialAssets): Promise<QuerySpecialAssetsResponse>;
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
    maxWithdraw(request: QueryMaxWithdraw): Promise<QueryMaxWithdrawResponse>;
    maxBorrow(request: QueryMaxBorrow): Promise<QueryMaxBorrowResponse>;
    inspect(request: QueryInspect): Promise<QueryInspectResponse>;
    inspectAccount(request: QueryInspectAccount): Promise<QueryInspectAccountResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    registeredTokens(request: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
    registeredTokensWithMarkets(request?: QueryRegisteredTokensWithMarkets): Promise<QueryRegisteredTokensWithMarketsResponse>;
    specialAssets(request: QuerySpecialAssets): Promise<QuerySpecialAssetsResponse>;
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
    maxWithdraw(request: QueryMaxWithdraw): Promise<QueryMaxWithdrawResponse>;
    maxBorrow(request: QueryMaxBorrow): Promise<QueryMaxBorrowResponse>;
    inspect(request: QueryInspect): Promise<QueryInspectResponse>;
    inspectAccount(request: QueryInspectAccount): Promise<QueryInspectAccountResponse>;
};
