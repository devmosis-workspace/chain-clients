import { Params, ParamsSDKType, Token, TokenSDKType } from "./leverage";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt, BadDebtSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokens {
    baseDenom: string;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokensSDKType {
    base_denom: string;
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponse {
    registry: Token[];
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponseSDKType {
    registry: TokenSDKType[];
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummary {
    denom: string;
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummarySDKType {
    denom: string;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponse {
    /** Symbol Denom is the human-readable representation of a token denom, for example "UMEE" or "ATOM". */
    symbolDenom: string;
    /** Exponent is the power of ten required to get from base denom to symbol denom. For example, an exponent of 6 means 10^6 uumee = 1 UMEE. */
    exponent: number;
    /** Oracle Price is the current USD value of a token. Oracle price is nil when the oracle is down. */
    oraclePrice: string;
    /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
    uTokenExchangeRate: string;
    /** Supply APY is the current interest rate suppliers are receiving for their deposits. For example, 0.11 would mean 11% APY. Supply APY is always less than borrow APY. */
    supply_APY: string;
    /** Borrow APY is the current interest rate borrowers are being charged on their loans. For example, 0.2 would mean 20% APY. */
    borrow_APY: string;
    /** Supplied is the total amount of tokens supplied to the the system by all suppliers, including any interest earned. This includes that tokens which have been borrowed out or enabled as collateral, but excludes reserves. Supplied is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    supplied: string;
    /** Reserved is the total amount of tokens held in reserve by the module for emergencies. Reserves are always excluded from total supply, borrow, collateral, and liqduidity queries. Reserves are denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    reserved: string;
    /** Collateral is the total amount of uTokens collateralized by all borrowers. Collateral is denominated in uTokenso, so both uToken exchange rate and exponent must also be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee and uToken exchange rate is 1.2, then 5 UMEE have been collateralized. */
    collateral: string;
    /** Borrowed is the total amount of debt in this token held across all borrowers. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    borrowed: string;
    /** Liquidity is the amount of a token that has been supplied but not yet borrowed or reserved. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    liquidity: string;
    /** Maximum Borrow is the amount of a token that is available for borrowing, including that which has already been borrowed out. This amount is less than total supply due to safety limits. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if borrowed is 3000000 uumee and maximum borrow is 4000000 uumee, then 1 UMEE is currently available for borrowing. */
    maximumBorrow: string;
    /** Maximum Collateral is the amount of a token that can be collateralized, including that which is already collateral. This amount is less than total supply due to safety limits. It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee, uToken exchange rate is 1.2, and maximum borrow is 7000000 uumee, then a maximum of 2 additional UMEE is permitted to be collateralized. */
    maximumCollateral: string;
    /** Minimum Liquidity is the minimum amount of liquidity in the module required by safety limits, based on the current collateral. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if liquidity is 9000000 uumee and minimum liquidity is 8000000 uumee, then a maximum of 1 additional UMEE is currently available for borrowing or withdrawal. */
    minimumLiquidity: string;
    /** uToken Supply is the total amount of a base token's associated uToken in circulation. */
    uTokenSupply: string;
    /** Available Borrow is the maximum additional amount of base tokens than can be borrowed based on current liquidity and system safety limits. It can also be calculated by MIN(maximum_borrow - borrowed, liquidity - minimum_liquidity). It is denominated in base tokens, so exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and borrowing is temporarily unavailable. */
    availableBorrow: string;
    /** Available Withdraw is the maximum amount of uTokens than can currently be withdrawn based on liquidity and system safety limits. It can also be calculated by (liquidity - minimum_liquidity). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and withdrawal is temporarily unavailable. */
    availableWithdraw: string;
    /** Available Collateralize is the maximum additional amount of uTokens than can be collateralized based on current liquidity and system safety limits. It can also be calculated by (maximum_collateral, - collateral). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and additional collateral cannot be created until more liquidity is present. */
    availableCollateralize: string;
    /** Oracle Historic Price is the historic USD value of a token. Historic price is defined as the median of the last N historic median prices from the oracle module, with N being this token's HistoricMedians in the leverage registry. Current price is used if required medians is zero. Price is nil when the oracle is down or insufficient historic medians are available. */
    oracleHistoricPrice: string;
    errors: string;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponseSDKType {
    symbol_denom: string;
    exponent: number;
    oracle_price: string;
    uToken_exchange_rate: string;
    supply_APY: string;
    borrow_APY: string;
    supplied: string;
    reserved: string;
    collateral: string;
    borrowed: string;
    liquidity: string;
    maximum_borrow: string;
    maximum_collateral: string;
    minimum_liquidity: string;
    uToken_supply: string;
    available_borrow: string;
    available_withdraw: string;
    available_collateralize: string;
    oracle_historic_price: string;
    errors: string;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalances {
    address: string;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesSDKType {
    address: string;
}
/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponse {
    /** Supplied contains all tokens the account has supplied, including interest earned. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    supplied: Coin[];
    /** Collateral contains all uTokens the account has collateralized. It is denominated in uTokens, so both exponent and uToken exchange rate from each coin's market_summary must be applied to convert to base token symbol denom. */
    collateral: Coin[];
    /** Borrowed contains all tokens the account has borrowed, including interest owed. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    borrowed: Coin[];
}
/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponseSDKType {
    supplied: CoinSDKType[];
    collateral: CoinSDKType[];
    borrowed: CoinSDKType[];
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummary {
    address: string;
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummarySDKType {
    address: string;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponse {
    /**
     * Supplied Value is the sum of the USD value of all tokens the account has supplied, including interest earned.
     * Computation skips assets which are missing oracle prices, potentially resulting in a lower supplied
     * value than if prices were all available.
     */
    suppliedValue: string;
    /**
     * Collateral Value is the sum of the USD value of all uTokens the account has collateralized.
     * Computation skips collateral which is missing an oracle price, potentially resulting in a lower collateral
     * value than if prices were all available.
     */
    collateralValue: string;
    /**
     * Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed.
     * It always uses spot prices.
     * Computation skips borrows which are missing oracle prices, potentially resulting in a lower borrowed
     * value than if prices were all available.
     */
    borrowedValue: string;
    /**
     * Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing.
     * The lower of spot or historic price for each collateral token is used when calculating borrow limits.
     * Computation skips collateral which is missing an oracle price, potentially resulting in a lower borrow
     * limit than if prices were all available.
     */
    borrowLimit: string;
    /**
     * Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation.
     * Will be null if an oracle price required for computation is missing.
     */
    liquidationThreshold: string;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponseSDKType {
    supplied_value: string;
    collateral_value: string;
    borrowed_value: string;
    borrow_limit: string;
    liquidation_threshold: string;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargets {
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsSDKType {
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponse {
    /** Targets are the addresses of borrowers eligible for liquidation. */
    targets: string[];
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponseSDKType {
    targets: string[];
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebts {
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsSDKType {
}
/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponse {
    /** Targets are borrow positions currently marked for bad debt repayment. Each contains an Address and a Denom. */
    targets: BadDebt[];
}
/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponseSDKType {
    targets: BadDebtSDKType[];
}
/** QueryMaxWithdraw defines the request structure for the MaxWithdraw gRPC service handler. */
export interface QueryMaxWithdraw {
    address: string;
    /**
     * denom is the base token denom associated with the uToken to withdraw.
     * empty denom will query all registered tokens.
     */
    denom: string;
}
/** QueryMaxWithdraw defines the request structure for the MaxWithdraw gRPC service handler. */
export interface QueryMaxWithdrawSDKType {
    address: string;
    denom: string;
}
/** QueryMaxWithdrawResponse defines the response structure for the MaxWithdraw gRPC service handler. */
export interface QueryMaxWithdrawResponse {
    /** uTokens is the maximum amount of uTokens that can be withdrawn */
    uTokens: Coin[];
    /** Tokens is the equivalent of max uTokens converted to base tokens */
    tokens: Coin[];
}
/** QueryMaxWithdrawResponse defines the response structure for the MaxWithdraw gRPC service handler. */
export interface QueryMaxWithdrawResponseSDKType {
    uTokens: CoinSDKType[];
    tokens: CoinSDKType[];
}
/** QueryMaxBorrow defines the request structure for the MaxBorrow gRPC service handler. */
export interface QueryMaxBorrow {
    address: string;
    /**
     * denom is the base token denom to borrow.
     * empty denom will query all registered tokens.
     */
    denom: string;
}
/** QueryMaxBorrow defines the request structure for the MaxBorrow gRPC service handler. */
export interface QueryMaxBorrowSDKType {
    address: string;
    denom: string;
}
/** QueryMaxBorrowResponse defines the response structure for the MaxBorrow gRPC service handler. */
export interface QueryMaxBorrowResponse {
    /** Tokens is the maximum amount of tokens that can be borrowed */
    tokens: Coin[];
}
/** QueryMaxBorrowResponse defines the response structure for the MaxBorrow gRPC service handler. */
export interface QueryMaxBorrowResponseSDKType {
    tokens: CoinSDKType[];
}
/** QueryInspect defines the request structure for the Inspect gRPC service handler. */
export interface QueryInspect {
    /** Symbol selects a symbol denom to sort accounts by borrowed value. Use "all" or empty string to show all. */
    symbol: string;
    /** Borrowed is the minimum USD value an account must have borrowed to show. Use 0 to show all. */
    borrowed: number;
    /** Collateral is the minimum USD value of collateral an account must have to show. Use 0 to show all. */
    collateral: number;
    /**
     * Danger is the minimum progress toward liquidation an account must have to show. Use 0 to show all.
     * Measured as the ratio (borrowed value / liquidation threshold), where > 1 is liquidation-eligible.
     */
    danger: number;
    /** LTV is the minimum ratio (borrowed value / collateral value) an account must have to show. Use 0 to show all. */
    ltv: number;
}
/** QueryInspect defines the request structure for the Inspect gRPC service handler. */
export interface QueryInspectSDKType {
    symbol: string;
    borrowed: number;
    collateral: number;
    danger: number;
    ltv: number;
}
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponse {
    borrowers: InspectAccount[];
}
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponseSDKType {
    borrowers: InspectAccountSDKType[];
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccount {
    /** Address of a borrower */
    address: string;
    /** USD totals of borrower's collateral, debt, and liquidation threshold. */
    analysis?: RiskInfo;
    /** Collateral and borrowed tokens, denoted in human-readable symbol denom instead of ibc denom. */
    position?: DecBalances;
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccountSDKType {
    address: string;
    analysis?: RiskInfoSDKType;
    position?: DecBalancesSDKType;
}
/** RiskInfo defines a borrower's account health without requiring sdk.Dec formatting. */
export interface RiskInfo {
    /** Borrowed is account's borrowed value in USD. */
    Borrowed: number;
    /** Liquidation is account's liquidation threshold in USD. */
    Liquidation: number;
    /** Value is account's collateral value in USD. */
    Value: number;
}
/** RiskInfo defines a borrower's account health without requiring sdk.Dec formatting. */
export interface RiskInfoSDKType {
    Borrowed: number;
    Liquidation: number;
    Value: number;
}
/** DecBalances contains an account's position denoted in symbol denom tokens. */
export interface DecBalances {
    /** Collateral contains all uTokens the account has collateralized. It has been converted from uTokens to tokens. */
    collateral: DecCoin[];
    /** Borrowed contains all tokens the account has borrowed, including interest owed. */
    borrowed: DecCoin[];
}
/** DecBalances contains an account's position denoted in symbol denom tokens. */
export interface DecBalancesSDKType {
    collateral: DecCoinSDKType[];
    borrowed: DecCoinSDKType[];
}
export declare const QueryParams: {
    encode(_: QueryParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryRegisteredTokens: {
    encode(message: QueryRegisteredTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredTokens;
    fromPartial(object: Partial<QueryRegisteredTokens>): QueryRegisteredTokens;
};
export declare const QueryRegisteredTokensResponse: {
    encode(message: QueryRegisteredTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredTokensResponse;
    fromPartial(object: Partial<QueryRegisteredTokensResponse>): QueryRegisteredTokensResponse;
};
export declare const QueryMarketSummary: {
    encode(message: QueryMarketSummary, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketSummary;
    fromPartial(object: Partial<QueryMarketSummary>): QueryMarketSummary;
};
export declare const QueryMarketSummaryResponse: {
    encode(message: QueryMarketSummaryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketSummaryResponse;
    fromPartial(object: Partial<QueryMarketSummaryResponse>): QueryMarketSummaryResponse;
};
export declare const QueryAccountBalances: {
    encode(message: QueryAccountBalances, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountBalances;
    fromPartial(object: Partial<QueryAccountBalances>): QueryAccountBalances;
};
export declare const QueryAccountBalancesResponse: {
    encode(message: QueryAccountBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountBalancesResponse;
    fromPartial(object: Partial<QueryAccountBalancesResponse>): QueryAccountBalancesResponse;
};
export declare const QueryAccountSummary: {
    encode(message: QueryAccountSummary, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountSummary;
    fromPartial(object: Partial<QueryAccountSummary>): QueryAccountSummary;
};
export declare const QueryAccountSummaryResponse: {
    encode(message: QueryAccountSummaryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountSummaryResponse;
    fromPartial(object: Partial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse;
};
export declare const QueryLiquidationTargets: {
    encode(_: QueryLiquidationTargets, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryLiquidationTargets;
    fromPartial(_: Partial<QueryLiquidationTargets>): QueryLiquidationTargets;
};
export declare const QueryLiquidationTargetsResponse: {
    encode(message: QueryLiquidationTargetsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLiquidationTargetsResponse;
    fromPartial(object: Partial<QueryLiquidationTargetsResponse>): QueryLiquidationTargetsResponse;
};
export declare const QueryBadDebts: {
    encode(_: QueryBadDebts, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBadDebts;
    fromPartial(_: Partial<QueryBadDebts>): QueryBadDebts;
};
export declare const QueryBadDebtsResponse: {
    encode(message: QueryBadDebtsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBadDebtsResponse;
    fromPartial(object: Partial<QueryBadDebtsResponse>): QueryBadDebtsResponse;
};
export declare const QueryMaxWithdraw: {
    encode(message: QueryMaxWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMaxWithdraw;
    fromPartial(object: Partial<QueryMaxWithdraw>): QueryMaxWithdraw;
};
export declare const QueryMaxWithdrawResponse: {
    encode(message: QueryMaxWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMaxWithdrawResponse;
    fromPartial(object: Partial<QueryMaxWithdrawResponse>): QueryMaxWithdrawResponse;
};
export declare const QueryMaxBorrow: {
    encode(message: QueryMaxBorrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMaxBorrow;
    fromPartial(object: Partial<QueryMaxBorrow>): QueryMaxBorrow;
};
export declare const QueryMaxBorrowResponse: {
    encode(message: QueryMaxBorrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMaxBorrowResponse;
    fromPartial(object: Partial<QueryMaxBorrowResponse>): QueryMaxBorrowResponse;
};
export declare const QueryInspect: {
    encode(message: QueryInspect, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInspect;
    fromPartial(object: Partial<QueryInspect>): QueryInspect;
};
export declare const QueryInspectResponse: {
    encode(message: QueryInspectResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInspectResponse;
    fromPartial(object: Partial<QueryInspectResponse>): QueryInspectResponse;
};
export declare const InspectAccount: {
    encode(message: InspectAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InspectAccount;
    fromPartial(object: Partial<InspectAccount>): InspectAccount;
};
export declare const RiskInfo: {
    encode(message: RiskInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RiskInfo;
    fromPartial(object: Partial<RiskInfo>): RiskInfo;
};
export declare const DecBalances: {
    encode(message: DecBalances, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DecBalances;
    fromPartial(object: Partial<DecBalances>): DecBalances;
};
