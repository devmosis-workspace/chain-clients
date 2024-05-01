import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType, SpecialAssetPair, SpecialAssetPairAmino, SpecialAssetPairSDKType } from "./leverage";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt, BadDebtAmino, BadDebtSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryParams";
    value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.leverage.v1.QueryParams";
    value: QueryParamsAmino;
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
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokens {
    baseDenom: string;
}
export interface QueryRegisteredTokensProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokens";
    value: Uint8Array;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokensAmino {
    base_denom?: string;
}
export interface QueryRegisteredTokensAminoMsg {
    type: "/umee.leverage.v1.QueryRegisteredTokens";
    value: QueryRegisteredTokensAmino;
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
export interface QueryRegisteredTokensResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse";
    value: Uint8Array;
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponseAmino {
    registry?: TokenAmino[];
}
export interface QueryRegisteredTokensResponseAminoMsg {
    type: "/umee.leverage.v1.QueryRegisteredTokensResponse";
    value: QueryRegisteredTokensResponseAmino;
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponseSDKType {
    registry: TokenSDKType[];
}
/**
 * QueryRegisteredTokensWithMarkets defines the request structure for the RegisteredTokenMarkets
 * gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarkets {
}
export interface QueryRegisteredTokensWithMarketsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarkets";
    value: Uint8Array;
}
/**
 * QueryRegisteredTokensWithMarkets defines the request structure for the RegisteredTokenMarkets
 * gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsAmino {
}
export interface QueryRegisteredTokensWithMarketsAminoMsg {
    type: "/umee.leverage.v1.QueryRegisteredTokensWithMarkets";
    value: QueryRegisteredTokensWithMarketsAmino;
}
/**
 * QueryRegisteredTokensWithMarkets defines the request structure for the RegisteredTokenMarkets
 * gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsSDKType {
}
/**
 * QueryRegisteredTokensWithMarketsResponse defines the response structure for the
 * RegisteredTokensWithMarkets gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsResponse {
    markets: TokenMarket[];
}
export interface QueryRegisteredTokensWithMarketsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarketsResponse";
    value: Uint8Array;
}
/**
 * QueryRegisteredTokensWithMarketsResponse defines the response structure for the
 * RegisteredTokensWithMarkets gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsResponseAmino {
    markets?: TokenMarketAmino[];
}
export interface QueryRegisteredTokensWithMarketsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryRegisteredTokensWithMarketsResponse";
    value: QueryRegisteredTokensWithMarketsResponseAmino;
}
/**
 * QueryRegisteredTokensWithMarketsResponse defines the response structure for the
 * RegisteredTokensWithMarkets gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsResponseSDKType {
    markets: TokenMarketSDKType[];
}
/** TokenMarket is a token and its market summary. */
export interface TokenMarket {
    /** Token is a registered token and its parameters. */
    token: Token;
    /** Market is the market summary for the token. */
    market: QueryMarketSummaryResponse;
}
export interface TokenMarketProtoMsg {
    typeUrl: "/umee.leverage.v1.TokenMarket";
    value: Uint8Array;
}
/** TokenMarket is a token and its market summary. */
export interface TokenMarketAmino {
    /** Token is a registered token and its parameters. */
    token?: TokenAmino;
    /** Market is the market summary for the token. */
    market?: QueryMarketSummaryResponseAmino;
}
export interface TokenMarketAminoMsg {
    type: "/umee.leverage.v1.TokenMarket";
    value: TokenMarketAmino;
}
/** TokenMarket is a token and its market summary. */
export interface TokenMarketSDKType {
    token: TokenSDKType;
    market: QueryMarketSummaryResponseSDKType;
}
/**
 * QuerySpecialAssets defines the request structure for the SpecialAssets
 * gRPC service handler.
 */
export interface QuerySpecialAssets {
    /** denom can be used to query only pairs affecting a specific asset */
    denom: string;
}
export interface QuerySpecialAssetsProtoMsg {
    typeUrl: "/umee.leverage.v1.QuerySpecialAssets";
    value: Uint8Array;
}
/**
 * QuerySpecialAssets defines the request structure for the SpecialAssets
 * gRPC service handler.
 */
export interface QuerySpecialAssetsAmino {
    /** denom can be used to query only pairs affecting a specific asset */
    denom?: string;
}
export interface QuerySpecialAssetsAminoMsg {
    type: "/umee.leverage.v1.QuerySpecialAssets";
    value: QuerySpecialAssetsAmino;
}
/**
 * QuerySpecialAssets defines the request structure for the SpecialAssets
 * gRPC service handler.
 */
export interface QuerySpecialAssetsSDKType {
    denom: string;
}
/**
 * QuerySpecialAssetsResponse defines the response structure for the
 * SpecialAssets gRPC service handler.
 */
export interface QuerySpecialAssetsResponse {
    pairs: SpecialAssetPair[];
}
export interface QuerySpecialAssetsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QuerySpecialAssetsResponse";
    value: Uint8Array;
}
/**
 * QuerySpecialAssetsResponse defines the response structure for the
 * SpecialAssets gRPC service handler.
 */
export interface QuerySpecialAssetsResponseAmino {
    pairs?: SpecialAssetPairAmino[];
}
export interface QuerySpecialAssetsResponseAminoMsg {
    type: "/umee.leverage.v1.QuerySpecialAssetsResponse";
    value: QuerySpecialAssetsResponseAmino;
}
/**
 * QuerySpecialAssetsResponse defines the response structure for the
 * SpecialAssets gRPC service handler.
 */
export interface QuerySpecialAssetsResponseSDKType {
    pairs: SpecialAssetPairSDKType[];
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummary {
    denom: string;
}
export interface QueryMarketSummaryProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMarketSummary";
    value: Uint8Array;
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryAmino {
    denom?: string;
}
export interface QueryMarketSummaryAminoMsg {
    type: "/umee.leverage.v1.QueryMarketSummary";
    value: QueryMarketSummaryAmino;
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
    oraclePrice?: string;
    /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
    uTokenExchangeRate: string;
    /** Supply APY is the current interest rate suppliers are receiving for their deposits. For example, 0.11 would mean 11% APY. Supply APY is always less than borrow APY. */
    supplyAPY: string;
    /** Borrow APY is the current interest rate borrowers are being charged on their loans. For example, 0.2 would mean 20% APY. */
    borrowAPY: string;
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
    oracleHistoricPrice?: string;
    errors: string;
}
export interface QueryMarketSummaryResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse";
    value: Uint8Array;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponseAmino {
    /** Symbol Denom is the human-readable representation of a token denom, for example "UMEE" or "ATOM". */
    symbol_denom?: string;
    /** Exponent is the power of ten required to get from base denom to symbol denom. For example, an exponent of 6 means 10^6 uumee = 1 UMEE. */
    exponent?: number;
    /** Oracle Price is the current USD value of a token. Oracle price is nil when the oracle is down. */
    oracle_price?: string;
    /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
    uToken_exchange_rate: string;
    /** Supply APY is the current interest rate suppliers are receiving for their deposits. For example, 0.11 would mean 11% APY. Supply APY is always less than borrow APY. */
    supply_APY: string;
    /** Borrow APY is the current interest rate borrowers are being charged on their loans. For example, 0.2 would mean 20% APY. */
    borrow_APY: string;
    /** Supplied is the total amount of tokens supplied to the the system by all suppliers, including any interest earned. This includes that tokens which have been borrowed out or enabled as collateral, but excludes reserves. Supplied is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    supplied?: string;
    /** Reserved is the total amount of tokens held in reserve by the module for emergencies. Reserves are always excluded from total supply, borrow, collateral, and liqduidity queries. Reserves are denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    reserved?: string;
    /** Collateral is the total amount of uTokens collateralized by all borrowers. Collateral is denominated in uTokenso, so both uToken exchange rate and exponent must also be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee and uToken exchange rate is 1.2, then 5 UMEE have been collateralized. */
    collateral?: string;
    /** Borrowed is the total amount of debt in this token held across all borrowers. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    borrowed?: string;
    /** Liquidity is the amount of a token that has been supplied but not yet borrowed or reserved. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    liquidity?: string;
    /** Maximum Borrow is the amount of a token that is available for borrowing, including that which has already been borrowed out. This amount is less than total supply due to safety limits. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if borrowed is 3000000 uumee and maximum borrow is 4000000 uumee, then 1 UMEE is currently available for borrowing. */
    maximum_borrow?: string;
    /** Maximum Collateral is the amount of a token that can be collateralized, including that which is already collateral. This amount is less than total supply due to safety limits. It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee, uToken exchange rate is 1.2, and maximum borrow is 7000000 uumee, then a maximum of 2 additional UMEE is permitted to be collateralized. */
    maximum_collateral?: string;
    /** Minimum Liquidity is the minimum amount of liquidity in the module required by safety limits, based on the current collateral. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if liquidity is 9000000 uumee and minimum liquidity is 8000000 uumee, then a maximum of 1 additional UMEE is currently available for borrowing or withdrawal. */
    minimum_liquidity?: string;
    /** uToken Supply is the total amount of a base token's associated uToken in circulation. */
    uToken_supply: string;
    /** Available Borrow is the maximum additional amount of base tokens than can be borrowed based on current liquidity and system safety limits. It can also be calculated by MIN(maximum_borrow - borrowed, liquidity - minimum_liquidity). It is denominated in base tokens, so exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and borrowing is temporarily unavailable. */
    available_borrow?: string;
    /** Available Withdraw is the maximum amount of uTokens than can currently be withdrawn based on liquidity and system safety limits. It can also be calculated by (liquidity - minimum_liquidity). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and withdrawal is temporarily unavailable. */
    available_withdraw?: string;
    /** Available Collateralize is the maximum additional amount of uTokens than can be collateralized based on current liquidity and system safety limits. It can also be calculated by (maximum_collateral, - collateral). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and additional collateral cannot be created until more liquidity is present. */
    available_collateralize?: string;
    /** Oracle Historic Price is the historic USD value of a token. Historic price is defined as the median of the last N historic median prices from the oracle module, with N being this token's HistoricMedians in the leverage registry. Current price is used if required medians is zero. Price is nil when the oracle is down or insufficient historic medians are available. */
    oracle_historic_price?: string;
    errors?: string;
}
export interface QueryMarketSummaryResponseAminoMsg {
    type: "/umee.leverage.v1.QueryMarketSummaryResponse";
    value: QueryMarketSummaryResponseAmino;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponseSDKType {
    symbol_denom: string;
    exponent: number;
    oracle_price?: string;
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
    oracle_historic_price?: string;
    errors: string;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalances {
    address: string;
}
export interface QueryAccountBalancesProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountBalances";
    value: Uint8Array;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesAmino {
    address?: string;
}
export interface QueryAccountBalancesAminoMsg {
    type: "/umee.leverage.v1.QueryAccountBalances";
    value: QueryAccountBalancesAmino;
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
export interface QueryAccountBalancesResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse";
    value: Uint8Array;
}
/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponseAmino {
    /** Supplied contains all tokens the account has supplied, including interest earned. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    supplied?: CoinAmino[];
    /** Collateral contains all uTokens the account has collateralized. It is denominated in uTokens, so both exponent and uToken exchange rate from each coin's market_summary must be applied to convert to base token symbol denom. */
    collateral?: CoinAmino[];
    /** Borrowed contains all tokens the account has borrowed, including interest owed. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    borrowed?: CoinAmino[];
}
export interface QueryAccountBalancesResponseAminoMsg {
    type: "/umee.leverage.v1.QueryAccountBalancesResponse";
    value: QueryAccountBalancesResponseAmino;
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
export interface QueryAccountSummaryProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountSummary";
    value: Uint8Array;
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryAmino {
    address?: string;
}
export interface QueryAccountSummaryAminoMsg {
    type: "/umee.leverage.v1.QueryAccountSummary";
    value: QueryAccountSummaryAmino;
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummarySDKType {
    address: string;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponse {
    /**
     * Supplied Value is the sum of the USD value of all tokens the account has supplied, including interest earned.
     * It uses the lower of spot or historic price for each token.
     * Computation skips assets which are missing oracle prices, potentially resulting in a lower supplied
     * value than if prices were all available.
     */
    suppliedValue: string;
    /**
     * Collateral Value is the sum of the USD value of all uTokens the account has collateralized.
     * It uses the lower of spot or historic price for each token.
     * Computation skips collateral which is missing an oracle price, potentially resulting in a lower collateral
     * value than if prices were all available.
     */
    collateralValue: string;
    /**
     * Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed.
     * It uses the higher of spot or historic price for each token.
     * Computation skips borrows which are missing oracle prices, potentially resulting in a lower borrowed
     * value than if prices were all available.
     */
    borrowedValue: string;
    /**
     * Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing.
     * The lower of spot or historic price for each collateral token is used when calculating borrow limits.
     * Computation skips collateral which is missing an oracle price, potentially resulting in a lower borrow
     * limit than if prices were all available. Will be null if an oracle price required for computation is
     * missing.
     */
    borrowLimit?: string;
    /**
     * Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation.
     * Computation skips borrows which are missing an oracle price, potentially resulting in a lower borrow
     * limit than if prices were all available. Will be null if an oracle price required for computation is
     * missing.
     */
    liquidationThreshold?: string;
    /** Spot Supplied Value is supplied value but always uses the most recent available spot prices. */
    spotSuppliedValue: string;
    /** Spot Collateral Value is collateral value but always uses the most recent available spot prices. */
    spotCollateralValue: string;
    /** Spot Borrowed Value is borrowed value but always uses the most recent available spot prices. */
    spotBorrowedValue: string;
}
export interface QueryAccountSummaryResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse";
    value: Uint8Array;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponseAmino {
    /**
     * Supplied Value is the sum of the USD value of all tokens the account has supplied, including interest earned.
     * It uses the lower of spot or historic price for each token.
     * Computation skips assets which are missing oracle prices, potentially resulting in a lower supplied
     * value than if prices were all available.
     */
    supplied_value?: string;
    /**
     * Collateral Value is the sum of the USD value of all uTokens the account has collateralized.
     * It uses the lower of spot or historic price for each token.
     * Computation skips collateral which is missing an oracle price, potentially resulting in a lower collateral
     * value than if prices were all available.
     */
    collateral_value?: string;
    /**
     * Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed.
     * It uses the higher of spot or historic price for each token.
     * Computation skips borrows which are missing oracle prices, potentially resulting in a lower borrowed
     * value than if prices were all available.
     */
    borrowed_value?: string;
    /**
     * Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing.
     * The lower of spot or historic price for each collateral token is used when calculating borrow limits.
     * Computation skips collateral which is missing an oracle price, potentially resulting in a lower borrow
     * limit than if prices were all available. Will be null if an oracle price required for computation is
     * missing.
     */
    borrow_limit?: string;
    /**
     * Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation.
     * Computation skips borrows which are missing an oracle price, potentially resulting in a lower borrow
     * limit than if prices were all available. Will be null if an oracle price required for computation is
     * missing.
     */
    liquidation_threshold?: string;
    /** Spot Supplied Value is supplied value but always uses the most recent available spot prices. */
    spot_supplied_value?: string;
    /** Spot Collateral Value is collateral value but always uses the most recent available spot prices. */
    spot_collateral_value?: string;
    /** Spot Borrowed Value is borrowed value but always uses the most recent available spot prices. */
    spot_borrowed_value?: string;
}
export interface QueryAccountSummaryResponseAminoMsg {
    type: "/umee.leverage.v1.QueryAccountSummaryResponse";
    value: QueryAccountSummaryResponseAmino;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponseSDKType {
    supplied_value: string;
    collateral_value: string;
    borrowed_value: string;
    borrow_limit?: string;
    liquidation_threshold?: string;
    spot_supplied_value: string;
    spot_collateral_value: string;
    spot_borrowed_value: string;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargets {
}
export interface QueryLiquidationTargetsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryLiquidationTargets";
    value: Uint8Array;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsAmino {
}
export interface QueryLiquidationTargetsAminoMsg {
    type: "/umee.leverage.v1.QueryLiquidationTargets";
    value: QueryLiquidationTargetsAmino;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsSDKType {
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponse {
    /** Targets are the addresses of borrowers eligible for liquidation. */
    targets: string[];
}
export interface QueryLiquidationTargetsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse";
    value: Uint8Array;
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponseAmino {
    /** Targets are the addresses of borrowers eligible for liquidation. */
    targets?: string[];
}
export interface QueryLiquidationTargetsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryLiquidationTargetsResponse";
    value: QueryLiquidationTargetsResponseAmino;
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
export interface QueryBadDebtsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryBadDebts";
    value: Uint8Array;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsAmino {
}
export interface QueryBadDebtsAminoMsg {
    type: "/umee.leverage.v1.QueryBadDebts";
    value: QueryBadDebtsAmino;
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
export interface QueryBadDebtsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse";
    value: Uint8Array;
}
/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponseAmino {
    /** Targets are borrow positions currently marked for bad debt repayment. Each contains an Address and a Denom. */
    targets?: BadDebtAmino[];
}
export interface QueryBadDebtsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryBadDebtsResponse";
    value: QueryBadDebtsResponseAmino;
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
export interface QueryMaxWithdrawProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMaxWithdraw";
    value: Uint8Array;
}
/** QueryMaxWithdraw defines the request structure for the MaxWithdraw gRPC service handler. */
export interface QueryMaxWithdrawAmino {
    address?: string;
    /**
     * denom is the base token denom associated with the uToken to withdraw.
     * empty denom will query all registered tokens.
     */
    denom?: string;
}
export interface QueryMaxWithdrawAminoMsg {
    type: "/umee.leverage.v1.QueryMaxWithdraw";
    value: QueryMaxWithdrawAmino;
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
export interface QueryMaxWithdrawResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMaxWithdrawResponse";
    value: Uint8Array;
}
/** QueryMaxWithdrawResponse defines the response structure for the MaxWithdraw gRPC service handler. */
export interface QueryMaxWithdrawResponseAmino {
    /** uTokens is the maximum amount of uTokens that can be withdrawn */
    uTokens?: CoinAmino[];
    /** Tokens is the equivalent of max uTokens converted to base tokens */
    tokens?: CoinAmino[];
}
export interface QueryMaxWithdrawResponseAminoMsg {
    type: "/umee.leverage.v1.QueryMaxWithdrawResponse";
    value: QueryMaxWithdrawResponseAmino;
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
export interface QueryMaxBorrowProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMaxBorrow";
    value: Uint8Array;
}
/** QueryMaxBorrow defines the request structure for the MaxBorrow gRPC service handler. */
export interface QueryMaxBorrowAmino {
    address?: string;
    /**
     * denom is the base token denom to borrow.
     * empty denom will query all registered tokens.
     */
    denom?: string;
}
export interface QueryMaxBorrowAminoMsg {
    type: "/umee.leverage.v1.QueryMaxBorrow";
    value: QueryMaxBorrowAmino;
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
export interface QueryMaxBorrowResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMaxBorrowResponse";
    value: Uint8Array;
}
/** QueryMaxBorrowResponse defines the response structure for the MaxBorrow gRPC service handler. */
export interface QueryMaxBorrowResponseAmino {
    /** Tokens is the maximum amount of tokens that can be borrowed */
    tokens?: CoinAmino[];
}
export interface QueryMaxBorrowResponseAminoMsg {
    type: "/umee.leverage.v1.QueryMaxBorrowResponse";
    value: QueryMaxBorrowResponseAmino;
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
export interface QueryInspectProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryInspect";
    value: Uint8Array;
}
/** QueryInspect defines the request structure for the Inspect gRPC service handler. */
export interface QueryInspectAmino {
    /** Symbol selects a symbol denom to sort accounts by borrowed value. Use "all" or empty string to show all. */
    symbol?: string;
    /** Borrowed is the minimum USD value an account must have borrowed to show. Use 0 to show all. */
    borrowed?: number;
    /** Collateral is the minimum USD value of collateral an account must have to show. Use 0 to show all. */
    collateral?: number;
    /**
     * Danger is the minimum progress toward liquidation an account must have to show. Use 0 to show all.
     * Measured as the ratio (borrowed value / liquidation threshold), where > 1 is liquidation-eligible.
     */
    danger?: number;
    /** LTV is the minimum ratio (borrowed value / collateral value) an account must have to show. Use 0 to show all. */
    ltv?: number;
}
export interface QueryInspectAminoMsg {
    type: "/umee.leverage.v1.QueryInspect";
    value: QueryInspectAmino;
}
/** QueryInspect defines the request structure for the Inspect gRPC service handler. */
export interface QueryInspectSDKType {
    symbol: string;
    borrowed: number;
    collateral: number;
    danger: number;
    ltv: number;
}
/** QueryInspectAccount defines the request structure for the InspectAccount gRPC service handler. */
export interface QueryInspectAccount {
    address: string;
}
export interface QueryInspectAccountProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryInspectAccount";
    value: Uint8Array;
}
/** QueryInspectAccount defines the request structure for the InspectAccount gRPC service handler. */
export interface QueryInspectAccountAmino {
    address?: string;
}
export interface QueryInspectAccountAminoMsg {
    type: "/umee.leverage.v1.QueryInspectAccount";
    value: QueryInspectAccountAmino;
}
/** QueryInspectAccount defines the request structure for the InspectAccount gRPC service handler. */
export interface QueryInspectAccountSDKType {
    address: string;
}
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponse {
    borrowers: InspectAccount[];
    /** Failures is a list of addresses for which the position calculation failed. */
    failures: string[];
}
export interface QueryInspectResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryInspectResponse";
    value: Uint8Array;
}
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponseAmino {
    borrowers?: InspectAccountAmino[];
    /** Failures is a list of addresses for which the position calculation failed. */
    failures?: string[];
}
export interface QueryInspectResponseAminoMsg {
    type: "/umee.leverage.v1.QueryInspectResponse";
    value: QueryInspectResponseAmino;
}
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponseSDKType {
    borrowers: InspectAccountSDKType[];
    failures: string[];
}
/** QueryInspectAccountResponse defines the response structure for the InspectAccount gRPC service handler. */
export interface QueryInspectAccountResponse {
    borrower: InspectAccount;
}
export interface QueryInspectAccountResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryInspectAccountResponse";
    value: Uint8Array;
}
/** QueryInspectAccountResponse defines the response structure for the InspectAccount gRPC service handler. */
export interface QueryInspectAccountResponseAmino {
    borrower?: InspectAccountAmino;
}
export interface QueryInspectAccountResponseAminoMsg {
    type: "/umee.leverage.v1.QueryInspectAccountResponse";
    value: QueryInspectAccountResponseAmino;
}
/** QueryInspectAccountResponse defines the response structure for the InspectAccount gRPC service handler. */
export interface QueryInspectAccountResponseSDKType {
    borrower: InspectAccountSDKType;
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccount {
    /** Address of a borrower */
    address: string;
    /** USD totals of borrower's collateral, debt, and liquidation threshold. */
    analysis?: RiskInfo;
    /** Collateral and borrowed tokens, denoted in human-readable symbol denom instead of ibc denom. */
    position?: DecBalances;
    /**
     * Info is a string which can be used to report additional information of any type.
     * UNSTABLE: We do not guarantee consistency of any data structures contained within the string.
     */
    info: string;
}
export interface InspectAccountProtoMsg {
    typeUrl: "/umee.leverage.v1.InspectAccount";
    value: Uint8Array;
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccountAmino {
    /** Address of a borrower */
    address?: string;
    /** USD totals of borrower's collateral, debt, and liquidation threshold. */
    analysis?: RiskInfoAmino;
    /** Collateral and borrowed tokens, denoted in human-readable symbol denom instead of ibc denom. */
    position?: DecBalancesAmino;
    /**
     * Info is a string which can be used to report additional information of any type.
     * UNSTABLE: We do not guarantee consistency of any data structures contained within the string.
     */
    info?: string;
}
export interface InspectAccountAminoMsg {
    type: "/umee.leverage.v1.InspectAccount";
    value: InspectAccountAmino;
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccountSDKType {
    address: string;
    analysis?: RiskInfoSDKType;
    position?: DecBalancesSDKType;
    info: string;
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
export interface RiskInfoProtoMsg {
    typeUrl: "/umee.leverage.v1.RiskInfo";
    value: Uint8Array;
}
/** RiskInfo defines a borrower's account health without requiring sdk.Dec formatting. */
export interface RiskInfoAmino {
    /** Borrowed is account's borrowed value in USD. */
    Borrowed?: number;
    /** Liquidation is account's liquidation threshold in USD. */
    Liquidation?: number;
    /** Value is account's collateral value in USD. */
    Value?: number;
}
export interface RiskInfoAminoMsg {
    type: "/umee.leverage.v1.RiskInfo";
    value: RiskInfoAmino;
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
export interface DecBalancesProtoMsg {
    typeUrl: "/umee.leverage.v1.DecBalances";
    value: Uint8Array;
}
/** DecBalances contains an account's position denoted in symbol denom tokens. */
export interface DecBalancesAmino {
    /** Collateral contains all uTokens the account has collateralized. It has been converted from uTokens to tokens. */
    collateral?: DecCoinAmino[];
    /** Borrowed contains all tokens the account has borrowed, including interest owed. */
    borrowed?: DecCoinAmino[];
}
export interface DecBalancesAminoMsg {
    type: "/umee.leverage.v1.DecBalances";
    value: DecBalancesAmino;
}
/** DecBalances contains an account's position denoted in symbol denom tokens. */
export interface DecBalancesSDKType {
    collateral: DecCoinSDKType[];
    borrowed: DecCoinSDKType[];
}
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryRegisteredTokens: {
    typeUrl: string;
    encode(message: QueryRegisteredTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredTokens;
    fromPartial(object: Partial<QueryRegisteredTokens>): QueryRegisteredTokens;
    fromAmino(object: QueryRegisteredTokensAmino): QueryRegisteredTokens;
    toAmino(message: QueryRegisteredTokens): QueryRegisteredTokensAmino;
    fromAminoMsg(object: QueryRegisteredTokensAminoMsg): QueryRegisteredTokens;
    fromProtoMsg(message: QueryRegisteredTokensProtoMsg): QueryRegisteredTokens;
    toProto(message: QueryRegisteredTokens): Uint8Array;
    toProtoMsg(message: QueryRegisteredTokens): QueryRegisteredTokensProtoMsg;
};
export declare const QueryRegisteredTokensResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredTokensResponse;
    fromPartial(object: Partial<QueryRegisteredTokensResponse>): QueryRegisteredTokensResponse;
    fromAmino(object: QueryRegisteredTokensResponseAmino): QueryRegisteredTokensResponse;
    toAmino(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseAmino;
    fromAminoMsg(object: QueryRegisteredTokensResponseAminoMsg): QueryRegisteredTokensResponse;
    fromProtoMsg(message: QueryRegisteredTokensResponseProtoMsg): QueryRegisteredTokensResponse;
    toProto(message: QueryRegisteredTokensResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseProtoMsg;
};
export declare const QueryRegisteredTokensWithMarkets: {
    typeUrl: string;
    encode(_: QueryRegisteredTokensWithMarkets, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryRegisteredTokensWithMarkets;
    fromPartial(_: Partial<QueryRegisteredTokensWithMarkets>): QueryRegisteredTokensWithMarkets;
    fromAmino(_: QueryRegisteredTokensWithMarketsAmino): QueryRegisteredTokensWithMarkets;
    toAmino(_: QueryRegisteredTokensWithMarkets): QueryRegisteredTokensWithMarketsAmino;
    fromAminoMsg(object: QueryRegisteredTokensWithMarketsAminoMsg): QueryRegisteredTokensWithMarkets;
    fromProtoMsg(message: QueryRegisteredTokensWithMarketsProtoMsg): QueryRegisteredTokensWithMarkets;
    toProto(message: QueryRegisteredTokensWithMarkets): Uint8Array;
    toProtoMsg(message: QueryRegisteredTokensWithMarkets): QueryRegisteredTokensWithMarketsProtoMsg;
};
export declare const QueryRegisteredTokensWithMarketsResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredTokensWithMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredTokensWithMarketsResponse;
    fromPartial(object: Partial<QueryRegisteredTokensWithMarketsResponse>): QueryRegisteredTokensWithMarketsResponse;
    fromAmino(object: QueryRegisteredTokensWithMarketsResponseAmino): QueryRegisteredTokensWithMarketsResponse;
    toAmino(message: QueryRegisteredTokensWithMarketsResponse): QueryRegisteredTokensWithMarketsResponseAmino;
    fromAminoMsg(object: QueryRegisteredTokensWithMarketsResponseAminoMsg): QueryRegisteredTokensWithMarketsResponse;
    fromProtoMsg(message: QueryRegisteredTokensWithMarketsResponseProtoMsg): QueryRegisteredTokensWithMarketsResponse;
    toProto(message: QueryRegisteredTokensWithMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredTokensWithMarketsResponse): QueryRegisteredTokensWithMarketsResponseProtoMsg;
};
export declare const TokenMarket: {
    typeUrl: string;
    encode(message: TokenMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenMarket;
    fromPartial(object: Partial<TokenMarket>): TokenMarket;
    fromAmino(object: TokenMarketAmino): TokenMarket;
    toAmino(message: TokenMarket): TokenMarketAmino;
    fromAminoMsg(object: TokenMarketAminoMsg): TokenMarket;
    fromProtoMsg(message: TokenMarketProtoMsg): TokenMarket;
    toProto(message: TokenMarket): Uint8Array;
    toProtoMsg(message: TokenMarket): TokenMarketProtoMsg;
};
export declare const QuerySpecialAssets: {
    typeUrl: string;
    encode(message: QuerySpecialAssets, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpecialAssets;
    fromPartial(object: Partial<QuerySpecialAssets>): QuerySpecialAssets;
    fromAmino(object: QuerySpecialAssetsAmino): QuerySpecialAssets;
    toAmino(message: QuerySpecialAssets): QuerySpecialAssetsAmino;
    fromAminoMsg(object: QuerySpecialAssetsAminoMsg): QuerySpecialAssets;
    fromProtoMsg(message: QuerySpecialAssetsProtoMsg): QuerySpecialAssets;
    toProto(message: QuerySpecialAssets): Uint8Array;
    toProtoMsg(message: QuerySpecialAssets): QuerySpecialAssetsProtoMsg;
};
export declare const QuerySpecialAssetsResponse: {
    typeUrl: string;
    encode(message: QuerySpecialAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpecialAssetsResponse;
    fromPartial(object: Partial<QuerySpecialAssetsResponse>): QuerySpecialAssetsResponse;
    fromAmino(object: QuerySpecialAssetsResponseAmino): QuerySpecialAssetsResponse;
    toAmino(message: QuerySpecialAssetsResponse): QuerySpecialAssetsResponseAmino;
    fromAminoMsg(object: QuerySpecialAssetsResponseAminoMsg): QuerySpecialAssetsResponse;
    fromProtoMsg(message: QuerySpecialAssetsResponseProtoMsg): QuerySpecialAssetsResponse;
    toProto(message: QuerySpecialAssetsResponse): Uint8Array;
    toProtoMsg(message: QuerySpecialAssetsResponse): QuerySpecialAssetsResponseProtoMsg;
};
export declare const QueryMarketSummary: {
    typeUrl: string;
    encode(message: QueryMarketSummary, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketSummary;
    fromPartial(object: Partial<QueryMarketSummary>): QueryMarketSummary;
    fromAmino(object: QueryMarketSummaryAmino): QueryMarketSummary;
    toAmino(message: QueryMarketSummary): QueryMarketSummaryAmino;
    fromAminoMsg(object: QueryMarketSummaryAminoMsg): QueryMarketSummary;
    fromProtoMsg(message: QueryMarketSummaryProtoMsg): QueryMarketSummary;
    toProto(message: QueryMarketSummary): Uint8Array;
    toProtoMsg(message: QueryMarketSummary): QueryMarketSummaryProtoMsg;
};
export declare const QueryMarketSummaryResponse: {
    typeUrl: string;
    encode(message: QueryMarketSummaryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketSummaryResponse;
    fromPartial(object: Partial<QueryMarketSummaryResponse>): QueryMarketSummaryResponse;
    fromAmino(object: QueryMarketSummaryResponseAmino): QueryMarketSummaryResponse;
    toAmino(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseAmino;
    fromAminoMsg(object: QueryMarketSummaryResponseAminoMsg): QueryMarketSummaryResponse;
    fromProtoMsg(message: QueryMarketSummaryResponseProtoMsg): QueryMarketSummaryResponse;
    toProto(message: QueryMarketSummaryResponse): Uint8Array;
    toProtoMsg(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseProtoMsg;
};
export declare const QueryAccountBalances: {
    typeUrl: string;
    encode(message: QueryAccountBalances, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountBalances;
    fromPartial(object: Partial<QueryAccountBalances>): QueryAccountBalances;
    fromAmino(object: QueryAccountBalancesAmino): QueryAccountBalances;
    toAmino(message: QueryAccountBalances): QueryAccountBalancesAmino;
    fromAminoMsg(object: QueryAccountBalancesAminoMsg): QueryAccountBalances;
    fromProtoMsg(message: QueryAccountBalancesProtoMsg): QueryAccountBalances;
    toProto(message: QueryAccountBalances): Uint8Array;
    toProtoMsg(message: QueryAccountBalances): QueryAccountBalancesProtoMsg;
};
export declare const QueryAccountBalancesResponse: {
    typeUrl: string;
    encode(message: QueryAccountBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountBalancesResponse;
    fromPartial(object: Partial<QueryAccountBalancesResponse>): QueryAccountBalancesResponse;
    fromAmino(object: QueryAccountBalancesResponseAmino): QueryAccountBalancesResponse;
    toAmino(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseAmino;
    fromAminoMsg(object: QueryAccountBalancesResponseAminoMsg): QueryAccountBalancesResponse;
    fromProtoMsg(message: QueryAccountBalancesResponseProtoMsg): QueryAccountBalancesResponse;
    toProto(message: QueryAccountBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseProtoMsg;
};
export declare const QueryAccountSummary: {
    typeUrl: string;
    encode(message: QueryAccountSummary, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountSummary;
    fromPartial(object: Partial<QueryAccountSummary>): QueryAccountSummary;
    fromAmino(object: QueryAccountSummaryAmino): QueryAccountSummary;
    toAmino(message: QueryAccountSummary): QueryAccountSummaryAmino;
    fromAminoMsg(object: QueryAccountSummaryAminoMsg): QueryAccountSummary;
    fromProtoMsg(message: QueryAccountSummaryProtoMsg): QueryAccountSummary;
    toProto(message: QueryAccountSummary): Uint8Array;
    toProtoMsg(message: QueryAccountSummary): QueryAccountSummaryProtoMsg;
};
export declare const QueryAccountSummaryResponse: {
    typeUrl: string;
    encode(message: QueryAccountSummaryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountSummaryResponse;
    fromPartial(object: Partial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse;
    fromAmino(object: QueryAccountSummaryResponseAmino): QueryAccountSummaryResponse;
    toAmino(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseAmino;
    fromAminoMsg(object: QueryAccountSummaryResponseAminoMsg): QueryAccountSummaryResponse;
    fromProtoMsg(message: QueryAccountSummaryResponseProtoMsg): QueryAccountSummaryResponse;
    toProto(message: QueryAccountSummaryResponse): Uint8Array;
    toProtoMsg(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseProtoMsg;
};
export declare const QueryLiquidationTargets: {
    typeUrl: string;
    encode(_: QueryLiquidationTargets, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLiquidationTargets;
    fromPartial(_: Partial<QueryLiquidationTargets>): QueryLiquidationTargets;
    fromAmino(_: QueryLiquidationTargetsAmino): QueryLiquidationTargets;
    toAmino(_: QueryLiquidationTargets): QueryLiquidationTargetsAmino;
    fromAminoMsg(object: QueryLiquidationTargetsAminoMsg): QueryLiquidationTargets;
    fromProtoMsg(message: QueryLiquidationTargetsProtoMsg): QueryLiquidationTargets;
    toProto(message: QueryLiquidationTargets): Uint8Array;
    toProtoMsg(message: QueryLiquidationTargets): QueryLiquidationTargetsProtoMsg;
};
export declare const QueryLiquidationTargetsResponse: {
    typeUrl: string;
    encode(message: QueryLiquidationTargetsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLiquidationTargetsResponse;
    fromPartial(object: Partial<QueryLiquidationTargetsResponse>): QueryLiquidationTargetsResponse;
    fromAmino(object: QueryLiquidationTargetsResponseAmino): QueryLiquidationTargetsResponse;
    toAmino(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseAmino;
    fromAminoMsg(object: QueryLiquidationTargetsResponseAminoMsg): QueryLiquidationTargetsResponse;
    fromProtoMsg(message: QueryLiquidationTargetsResponseProtoMsg): QueryLiquidationTargetsResponse;
    toProto(message: QueryLiquidationTargetsResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseProtoMsg;
};
export declare const QueryBadDebts: {
    typeUrl: string;
    encode(_: QueryBadDebts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBadDebts;
    fromPartial(_: Partial<QueryBadDebts>): QueryBadDebts;
    fromAmino(_: QueryBadDebtsAmino): QueryBadDebts;
    toAmino(_: QueryBadDebts): QueryBadDebtsAmino;
    fromAminoMsg(object: QueryBadDebtsAminoMsg): QueryBadDebts;
    fromProtoMsg(message: QueryBadDebtsProtoMsg): QueryBadDebts;
    toProto(message: QueryBadDebts): Uint8Array;
    toProtoMsg(message: QueryBadDebts): QueryBadDebtsProtoMsg;
};
export declare const QueryBadDebtsResponse: {
    typeUrl: string;
    encode(message: QueryBadDebtsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBadDebtsResponse;
    fromPartial(object: Partial<QueryBadDebtsResponse>): QueryBadDebtsResponse;
    fromAmino(object: QueryBadDebtsResponseAmino): QueryBadDebtsResponse;
    toAmino(message: QueryBadDebtsResponse): QueryBadDebtsResponseAmino;
    fromAminoMsg(object: QueryBadDebtsResponseAminoMsg): QueryBadDebtsResponse;
    fromProtoMsg(message: QueryBadDebtsResponseProtoMsg): QueryBadDebtsResponse;
    toProto(message: QueryBadDebtsResponse): Uint8Array;
    toProtoMsg(message: QueryBadDebtsResponse): QueryBadDebtsResponseProtoMsg;
};
export declare const QueryMaxWithdraw: {
    typeUrl: string;
    encode(message: QueryMaxWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMaxWithdraw;
    fromPartial(object: Partial<QueryMaxWithdraw>): QueryMaxWithdraw;
    fromAmino(object: QueryMaxWithdrawAmino): QueryMaxWithdraw;
    toAmino(message: QueryMaxWithdraw): QueryMaxWithdrawAmino;
    fromAminoMsg(object: QueryMaxWithdrawAminoMsg): QueryMaxWithdraw;
    fromProtoMsg(message: QueryMaxWithdrawProtoMsg): QueryMaxWithdraw;
    toProto(message: QueryMaxWithdraw): Uint8Array;
    toProtoMsg(message: QueryMaxWithdraw): QueryMaxWithdrawProtoMsg;
};
export declare const QueryMaxWithdrawResponse: {
    typeUrl: string;
    encode(message: QueryMaxWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMaxWithdrawResponse;
    fromPartial(object: Partial<QueryMaxWithdrawResponse>): QueryMaxWithdrawResponse;
    fromAmino(object: QueryMaxWithdrawResponseAmino): QueryMaxWithdrawResponse;
    toAmino(message: QueryMaxWithdrawResponse): QueryMaxWithdrawResponseAmino;
    fromAminoMsg(object: QueryMaxWithdrawResponseAminoMsg): QueryMaxWithdrawResponse;
    fromProtoMsg(message: QueryMaxWithdrawResponseProtoMsg): QueryMaxWithdrawResponse;
    toProto(message: QueryMaxWithdrawResponse): Uint8Array;
    toProtoMsg(message: QueryMaxWithdrawResponse): QueryMaxWithdrawResponseProtoMsg;
};
export declare const QueryMaxBorrow: {
    typeUrl: string;
    encode(message: QueryMaxBorrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMaxBorrow;
    fromPartial(object: Partial<QueryMaxBorrow>): QueryMaxBorrow;
    fromAmino(object: QueryMaxBorrowAmino): QueryMaxBorrow;
    toAmino(message: QueryMaxBorrow): QueryMaxBorrowAmino;
    fromAminoMsg(object: QueryMaxBorrowAminoMsg): QueryMaxBorrow;
    fromProtoMsg(message: QueryMaxBorrowProtoMsg): QueryMaxBorrow;
    toProto(message: QueryMaxBorrow): Uint8Array;
    toProtoMsg(message: QueryMaxBorrow): QueryMaxBorrowProtoMsg;
};
export declare const QueryMaxBorrowResponse: {
    typeUrl: string;
    encode(message: QueryMaxBorrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMaxBorrowResponse;
    fromPartial(object: Partial<QueryMaxBorrowResponse>): QueryMaxBorrowResponse;
    fromAmino(object: QueryMaxBorrowResponseAmino): QueryMaxBorrowResponse;
    toAmino(message: QueryMaxBorrowResponse): QueryMaxBorrowResponseAmino;
    fromAminoMsg(object: QueryMaxBorrowResponseAminoMsg): QueryMaxBorrowResponse;
    fromProtoMsg(message: QueryMaxBorrowResponseProtoMsg): QueryMaxBorrowResponse;
    toProto(message: QueryMaxBorrowResponse): Uint8Array;
    toProtoMsg(message: QueryMaxBorrowResponse): QueryMaxBorrowResponseProtoMsg;
};
export declare const QueryInspect: {
    typeUrl: string;
    encode(message: QueryInspect, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInspect;
    fromPartial(object: Partial<QueryInspect>): QueryInspect;
    fromAmino(object: QueryInspectAmino): QueryInspect;
    toAmino(message: QueryInspect): QueryInspectAmino;
    fromAminoMsg(object: QueryInspectAminoMsg): QueryInspect;
    fromProtoMsg(message: QueryInspectProtoMsg): QueryInspect;
    toProto(message: QueryInspect): Uint8Array;
    toProtoMsg(message: QueryInspect): QueryInspectProtoMsg;
};
export declare const QueryInspectAccount: {
    typeUrl: string;
    encode(message: QueryInspectAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInspectAccount;
    fromPartial(object: Partial<QueryInspectAccount>): QueryInspectAccount;
    fromAmino(object: QueryInspectAccountAmino): QueryInspectAccount;
    toAmino(message: QueryInspectAccount): QueryInspectAccountAmino;
    fromAminoMsg(object: QueryInspectAccountAminoMsg): QueryInspectAccount;
    fromProtoMsg(message: QueryInspectAccountProtoMsg): QueryInspectAccount;
    toProto(message: QueryInspectAccount): Uint8Array;
    toProtoMsg(message: QueryInspectAccount): QueryInspectAccountProtoMsg;
};
export declare const QueryInspectResponse: {
    typeUrl: string;
    encode(message: QueryInspectResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInspectResponse;
    fromPartial(object: Partial<QueryInspectResponse>): QueryInspectResponse;
    fromAmino(object: QueryInspectResponseAmino): QueryInspectResponse;
    toAmino(message: QueryInspectResponse): QueryInspectResponseAmino;
    fromAminoMsg(object: QueryInspectResponseAminoMsg): QueryInspectResponse;
    fromProtoMsg(message: QueryInspectResponseProtoMsg): QueryInspectResponse;
    toProto(message: QueryInspectResponse): Uint8Array;
    toProtoMsg(message: QueryInspectResponse): QueryInspectResponseProtoMsg;
};
export declare const QueryInspectAccountResponse: {
    typeUrl: string;
    encode(message: QueryInspectAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInspectAccountResponse;
    fromPartial(object: Partial<QueryInspectAccountResponse>): QueryInspectAccountResponse;
    fromAmino(object: QueryInspectAccountResponseAmino): QueryInspectAccountResponse;
    toAmino(message: QueryInspectAccountResponse): QueryInspectAccountResponseAmino;
    fromAminoMsg(object: QueryInspectAccountResponseAminoMsg): QueryInspectAccountResponse;
    fromProtoMsg(message: QueryInspectAccountResponseProtoMsg): QueryInspectAccountResponse;
    toProto(message: QueryInspectAccountResponse): Uint8Array;
    toProtoMsg(message: QueryInspectAccountResponse): QueryInspectAccountResponseProtoMsg;
};
export declare const InspectAccount: {
    typeUrl: string;
    encode(message: InspectAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InspectAccount;
    fromPartial(object: Partial<InspectAccount>): InspectAccount;
    fromAmino(object: InspectAccountAmino): InspectAccount;
    toAmino(message: InspectAccount): InspectAccountAmino;
    fromAminoMsg(object: InspectAccountAminoMsg): InspectAccount;
    fromProtoMsg(message: InspectAccountProtoMsg): InspectAccount;
    toProto(message: InspectAccount): Uint8Array;
    toProtoMsg(message: InspectAccount): InspectAccountProtoMsg;
};
export declare const RiskInfo: {
    typeUrl: string;
    encode(message: RiskInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RiskInfo;
    fromPartial(object: Partial<RiskInfo>): RiskInfo;
    fromAmino(object: RiskInfoAmino): RiskInfo;
    toAmino(message: RiskInfo): RiskInfoAmino;
    fromAminoMsg(object: RiskInfoAminoMsg): RiskInfo;
    fromProtoMsg(message: RiskInfoProtoMsg): RiskInfo;
    toProto(message: RiskInfo): Uint8Array;
    toProtoMsg(message: RiskInfo): RiskInfoProtoMsg;
};
export declare const DecBalances: {
    typeUrl: string;
    encode(message: DecBalances, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DecBalances;
    fromPartial(object: Partial<DecBalances>): DecBalances;
    fromAmino(object: DecBalancesAmino): DecBalances;
    toAmino(message: DecBalances): DecBalancesAmino;
    fromAminoMsg(object: DecBalancesAminoMsg): DecBalances;
    fromProtoMsg(message: DecBalancesProtoMsg): DecBalances;
    toProto(message: DecBalances): Uint8Array;
    toProtoMsg(message: DecBalances): DecBalancesProtoMsg;
};
