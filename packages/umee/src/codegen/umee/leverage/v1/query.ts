import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType, SpecialAssetPair, SpecialAssetPairAmino, SpecialAssetPairSDKType } from "./leverage";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt, BadDebtAmino, BadDebtSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryParams";
  value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.leverage.v1.QueryParams";
  value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {}
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
export interface QueryRegisteredTokensWithMarkets {}
export interface QueryRegisteredTokensWithMarketsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarkets";
  value: Uint8Array;
}
/**
 * QueryRegisteredTokensWithMarkets defines the request structure for the RegisteredTokenMarkets
 * gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsAmino {}
export interface QueryRegisteredTokensWithMarketsAminoMsg {
  type: "/umee.leverage.v1.QueryRegisteredTokensWithMarkets";
  value: QueryRegisteredTokensWithMarketsAmino;
}
/**
 * QueryRegisteredTokensWithMarkets defines the request structure for the RegisteredTokenMarkets
 * gRPC service handler.
 */
export interface QueryRegisteredTokensWithMarketsSDKType {}
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
export interface QueryLiquidationTargets {}
export interface QueryLiquidationTargetsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryLiquidationTargets";
  value: Uint8Array;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsAmino {}
export interface QueryLiquidationTargetsAminoMsg {
  type: "/umee.leverage.v1.QueryLiquidationTargets";
  value: QueryLiquidationTargetsAmino;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsSDKType {}
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
export interface QueryBadDebts {}
export interface QueryBadDebtsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryBadDebts";
  value: Uint8Array;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsAmino {}
export interface QueryBadDebtsAminoMsg {
  type: "/umee.leverage.v1.QueryBadDebts";
  value: QueryBadDebtsAmino;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsSDKType {}
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
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.leverage.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.leverage.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredTokens(): QueryRegisteredTokens {
  return {
    baseDenom: ""
  };
}
export const QueryRegisteredTokens = {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokens",
  encode(message: QueryRegisteredTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredTokens {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },
  fromPartial(object: Partial<QueryRegisteredTokens>): QueryRegisteredTokens {
    const message = createBaseQueryRegisteredTokens();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: QueryRegisteredTokensAmino): QueryRegisteredTokens {
    const message = createBaseQueryRegisteredTokens();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: QueryRegisteredTokens): QueryRegisteredTokensAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredTokensAminoMsg): QueryRegisteredTokens {
    return QueryRegisteredTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredTokensProtoMsg): QueryRegisteredTokens {
    return QueryRegisteredTokens.decode(message.value);
  },
  toProto(message: QueryRegisteredTokens): Uint8Array {
    return QueryRegisteredTokens.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredTokens): QueryRegisteredTokensProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryRegisteredTokens",
      value: QueryRegisteredTokens.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredTokensResponse(): QueryRegisteredTokensResponse {
  return {
    registry: []
  };
}
export const QueryRegisteredTokensResponse = {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse",
  encode(message: QueryRegisteredTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredTokensResponse {
    return {
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Token.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRegisteredTokensResponse>): QueryRegisteredTokensResponse {
    const message = createBaseQueryRegisteredTokensResponse();
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredTokensResponseAmino): QueryRegisteredTokensResponse {
    const message = createBaseQueryRegisteredTokensResponse();
    message.registry = object.registry?.map(e => Token.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseAmino {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredTokensResponseAminoMsg): QueryRegisteredTokensResponse {
    return QueryRegisteredTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredTokensResponseProtoMsg): QueryRegisteredTokensResponse {
    return QueryRegisteredTokensResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredTokensResponse): Uint8Array {
    return QueryRegisteredTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse",
      value: QueryRegisteredTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredTokensWithMarkets(): QueryRegisteredTokensWithMarkets {
  return {};
}
export const QueryRegisteredTokensWithMarkets = {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarkets",
  encode(_: QueryRegisteredTokensWithMarkets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryRegisteredTokensWithMarkets {
    return {};
  },
  fromPartial(_: Partial<QueryRegisteredTokensWithMarkets>): QueryRegisteredTokensWithMarkets {
    const message = createBaseQueryRegisteredTokensWithMarkets();
    return message;
  },
  fromAmino(_: QueryRegisteredTokensWithMarketsAmino): QueryRegisteredTokensWithMarkets {
    const message = createBaseQueryRegisteredTokensWithMarkets();
    return message;
  },
  toAmino(_: QueryRegisteredTokensWithMarkets): QueryRegisteredTokensWithMarketsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredTokensWithMarketsAminoMsg): QueryRegisteredTokensWithMarkets {
    return QueryRegisteredTokensWithMarkets.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredTokensWithMarketsProtoMsg): QueryRegisteredTokensWithMarkets {
    return QueryRegisteredTokensWithMarkets.decode(message.value);
  },
  toProto(message: QueryRegisteredTokensWithMarkets): Uint8Array {
    return QueryRegisteredTokensWithMarkets.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredTokensWithMarkets): QueryRegisteredTokensWithMarketsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarkets",
      value: QueryRegisteredTokensWithMarkets.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredTokensWithMarketsResponse(): QueryRegisteredTokensWithMarketsResponse {
  return {
    markets: []
  };
}
export const QueryRegisteredTokensWithMarketsResponse = {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarketsResponse",
  encode(message: QueryRegisteredTokensWithMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      TokenMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredTokensWithMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => TokenMarket.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRegisteredTokensWithMarketsResponse>): QueryRegisteredTokensWithMarketsResponse {
    const message = createBaseQueryRegisteredTokensWithMarketsResponse();
    message.markets = object.markets?.map(e => TokenMarket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredTokensWithMarketsResponseAmino): QueryRegisteredTokensWithMarketsResponse {
    const message = createBaseQueryRegisteredTokensWithMarketsResponse();
    message.markets = object.markets?.map(e => TokenMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRegisteredTokensWithMarketsResponse): QueryRegisteredTokensWithMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? TokenMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredTokensWithMarketsResponseAminoMsg): QueryRegisteredTokensWithMarketsResponse {
    return QueryRegisteredTokensWithMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredTokensWithMarketsResponseProtoMsg): QueryRegisteredTokensWithMarketsResponse {
    return QueryRegisteredTokensWithMarketsResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredTokensWithMarketsResponse): Uint8Array {
    return QueryRegisteredTokensWithMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredTokensWithMarketsResponse): QueryRegisteredTokensWithMarketsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryRegisteredTokensWithMarketsResponse",
      value: QueryRegisteredTokensWithMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseTokenMarket(): TokenMarket {
  return {
    token: Token.fromPartial({}),
    market: QueryMarketSummaryResponse.fromPartial({})
  };
}
export const TokenMarket = {
  typeUrl: "/umee.leverage.v1.TokenMarket",
  encode(message: TokenMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.market !== undefined) {
      QueryMarketSummaryResponse.encode(message.market, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TokenMarket {
    return {
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
      market: isSet(object.market) ? QueryMarketSummaryResponse.fromJSON(object.market) : undefined
    };
  },
  fromPartial(object: Partial<TokenMarket>): TokenMarket {
    const message = createBaseTokenMarket();
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    message.market = object.market !== undefined && object.market !== null ? QueryMarketSummaryResponse.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: TokenMarketAmino): TokenMarket {
    const message = createBaseTokenMarket();
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = QueryMarketSummaryResponse.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: TokenMarket): TokenMarketAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    obj.market = message.market ? QueryMarketSummaryResponse.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenMarketAminoMsg): TokenMarket {
    return TokenMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenMarketProtoMsg): TokenMarket {
    return TokenMarket.decode(message.value);
  },
  toProto(message: TokenMarket): Uint8Array {
    return TokenMarket.encode(message).finish();
  },
  toProtoMsg(message: TokenMarket): TokenMarketProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.TokenMarket",
      value: TokenMarket.encode(message).finish()
    };
  }
};
function createBaseQuerySpecialAssets(): QuerySpecialAssets {
  return {
    denom: ""
  };
}
export const QuerySpecialAssets = {
  typeUrl: "/umee.leverage.v1.QuerySpecialAssets",
  encode(message: QuerySpecialAssets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpecialAssets {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QuerySpecialAssets>): QuerySpecialAssets {
    const message = createBaseQuerySpecialAssets();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QuerySpecialAssetsAmino): QuerySpecialAssets {
    const message = createBaseQuerySpecialAssets();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QuerySpecialAssets): QuerySpecialAssetsAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySpecialAssetsAminoMsg): QuerySpecialAssets {
    return QuerySpecialAssets.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpecialAssetsProtoMsg): QuerySpecialAssets {
    return QuerySpecialAssets.decode(message.value);
  },
  toProto(message: QuerySpecialAssets): Uint8Array {
    return QuerySpecialAssets.encode(message).finish();
  },
  toProtoMsg(message: QuerySpecialAssets): QuerySpecialAssetsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QuerySpecialAssets",
      value: QuerySpecialAssets.encode(message).finish()
    };
  }
};
function createBaseQuerySpecialAssetsResponse(): QuerySpecialAssetsResponse {
  return {
    pairs: []
  };
}
export const QuerySpecialAssetsResponse = {
  typeUrl: "/umee.leverage.v1.QuerySpecialAssetsResponse",
  encode(message: QuerySpecialAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      SpecialAssetPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpecialAssetsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => SpecialAssetPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpecialAssetsResponse>): QuerySpecialAssetsResponse {
    const message = createBaseQuerySpecialAssetsResponse();
    message.pairs = object.pairs?.map(e => SpecialAssetPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySpecialAssetsResponseAmino): QuerySpecialAssetsResponse {
    const message = createBaseQuerySpecialAssetsResponse();
    message.pairs = object.pairs?.map(e => SpecialAssetPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpecialAssetsResponse): QuerySpecialAssetsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? SpecialAssetPair.toAmino(e) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpecialAssetsResponseAminoMsg): QuerySpecialAssetsResponse {
    return QuerySpecialAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpecialAssetsResponseProtoMsg): QuerySpecialAssetsResponse {
    return QuerySpecialAssetsResponse.decode(message.value);
  },
  toProto(message: QuerySpecialAssetsResponse): Uint8Array {
    return QuerySpecialAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpecialAssetsResponse): QuerySpecialAssetsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QuerySpecialAssetsResponse",
      value: QuerySpecialAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketSummary(): QueryMarketSummary {
  return {
    denom: ""
  };
}
export const QueryMarketSummary = {
  typeUrl: "/umee.leverage.v1.QueryMarketSummary",
  encode(message: QueryMarketSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketSummary {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryMarketSummary>): QueryMarketSummary {
    const message = createBaseQueryMarketSummary();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryMarketSummaryAmino): QueryMarketSummary {
    const message = createBaseQueryMarketSummary();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryMarketSummary): QueryMarketSummaryAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryMarketSummaryAminoMsg): QueryMarketSummary {
    return QueryMarketSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketSummaryProtoMsg): QueryMarketSummary {
    return QueryMarketSummary.decode(message.value);
  },
  toProto(message: QueryMarketSummary): Uint8Array {
    return QueryMarketSummary.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketSummary): QueryMarketSummaryProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMarketSummary",
      value: QueryMarketSummary.encode(message).finish()
    };
  }
};
function createBaseQueryMarketSummaryResponse(): QueryMarketSummaryResponse {
  return {
    symbolDenom: "",
    exponent: 0,
    oraclePrice: undefined,
    uTokenExchangeRate: "",
    supplyAPY: "",
    borrowAPY: "",
    supplied: "",
    reserved: "",
    collateral: "",
    borrowed: "",
    liquidity: "",
    maximumBorrow: "",
    maximumCollateral: "",
    minimumLiquidity: "",
    uTokenSupply: "",
    availableBorrow: "",
    availableWithdraw: "",
    availableCollateralize: "",
    oracleHistoricPrice: undefined,
    errors: ""
  };
}
export const QueryMarketSummaryResponse = {
  typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse",
  encode(message: QueryMarketSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbolDenom !== "") {
      writer.uint32(10).string(message.symbolDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    if (message.oraclePrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.oraclePrice, 18).atomics);
    }
    if (message.uTokenExchangeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.uTokenExchangeRate, 18).atomics);
    }
    if (message.supplyAPY !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.supplyAPY, 18).atomics);
    }
    if (message.borrowAPY !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.borrowAPY, 18).atomics);
    }
    if (message.supplied !== "") {
      writer.uint32(58).string(message.supplied);
    }
    if (message.reserved !== "") {
      writer.uint32(66).string(message.reserved);
    }
    if (message.collateral !== "") {
      writer.uint32(74).string(message.collateral);
    }
    if (message.borrowed !== "") {
      writer.uint32(82).string(message.borrowed);
    }
    if (message.liquidity !== "") {
      writer.uint32(90).string(message.liquidity);
    }
    if (message.maximumBorrow !== "") {
      writer.uint32(98).string(message.maximumBorrow);
    }
    if (message.maximumCollateral !== "") {
      writer.uint32(106).string(message.maximumCollateral);
    }
    if (message.minimumLiquidity !== "") {
      writer.uint32(114).string(message.minimumLiquidity);
    }
    if (message.uTokenSupply !== "") {
      writer.uint32(122).string(message.uTokenSupply);
    }
    if (message.availableBorrow !== "") {
      writer.uint32(130).string(message.availableBorrow);
    }
    if (message.availableWithdraw !== "") {
      writer.uint32(138).string(message.availableWithdraw);
    }
    if (message.availableCollateralize !== "") {
      writer.uint32(146).string(message.availableCollateralize);
    }
    if (message.oracleHistoricPrice !== undefined) {
      writer.uint32(154).string(Decimal.fromUserInput(message.oracleHistoricPrice, 18).atomics);
    }
    if (message.errors !== "") {
      writer.uint32(162).string(message.errors);
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketSummaryResponse {
    return {
      symbolDenom: isSet(object.symbolDenom) ? String(object.symbolDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      oraclePrice: isSet(object.oraclePrice) ? String(object.oraclePrice) : undefined,
      uTokenExchangeRate: isSet(object.uTokenExchangeRate) ? String(object.uTokenExchangeRate) : "",
      supplyAPY: isSet(object.supplyAPY) ? String(object.supplyAPY) : "",
      borrowAPY: isSet(object.borrowAPY) ? String(object.borrowAPY) : "",
      supplied: isSet(object.supplied) ? String(object.supplied) : "",
      reserved: isSet(object.reserved) ? String(object.reserved) : "",
      collateral: isSet(object.collateral) ? String(object.collateral) : "",
      borrowed: isSet(object.borrowed) ? String(object.borrowed) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      maximumBorrow: isSet(object.maximumBorrow) ? String(object.maximumBorrow) : "",
      maximumCollateral: isSet(object.maximumCollateral) ? String(object.maximumCollateral) : "",
      minimumLiquidity: isSet(object.minimumLiquidity) ? String(object.minimumLiquidity) : "",
      uTokenSupply: isSet(object.uTokenSupply) ? String(object.uTokenSupply) : "",
      availableBorrow: isSet(object.availableBorrow) ? String(object.availableBorrow) : "",
      availableWithdraw: isSet(object.availableWithdraw) ? String(object.availableWithdraw) : "",
      availableCollateralize: isSet(object.availableCollateralize) ? String(object.availableCollateralize) : "",
      oracleHistoricPrice: isSet(object.oracleHistoricPrice) ? String(object.oracleHistoricPrice) : undefined,
      errors: isSet(object.errors) ? String(object.errors) : ""
    };
  },
  fromPartial(object: Partial<QueryMarketSummaryResponse>): QueryMarketSummaryResponse {
    const message = createBaseQueryMarketSummaryResponse();
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    message.oraclePrice = object.oraclePrice ?? undefined;
    message.uTokenExchangeRate = object.uTokenExchangeRate ?? "";
    message.supplyAPY = object.supplyAPY ?? "";
    message.borrowAPY = object.borrowAPY ?? "";
    message.supplied = object.supplied ?? "";
    message.reserved = object.reserved ?? "";
    message.collateral = object.collateral ?? "";
    message.borrowed = object.borrowed ?? "";
    message.liquidity = object.liquidity ?? "";
    message.maximumBorrow = object.maximumBorrow ?? "";
    message.maximumCollateral = object.maximumCollateral ?? "";
    message.minimumLiquidity = object.minimumLiquidity ?? "";
    message.uTokenSupply = object.uTokenSupply ?? "";
    message.availableBorrow = object.availableBorrow ?? "";
    message.availableWithdraw = object.availableWithdraw ?? "";
    message.availableCollateralize = object.availableCollateralize ?? "";
    message.oracleHistoricPrice = object.oracleHistoricPrice ?? undefined;
    message.errors = object.errors ?? "";
    return message;
  },
  fromAmino(object: QueryMarketSummaryResponseAmino): QueryMarketSummaryResponse {
    const message = createBaseQueryMarketSummaryResponse();
    if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
      message.symbolDenom = object.symbol_denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.oracle_price !== undefined && object.oracle_price !== null) {
      message.oraclePrice = object.oracle_price;
    }
    if (object.uToken_exchange_rate !== undefined && object.uToken_exchange_rate !== null) {
      message.uTokenExchangeRate = object.uToken_exchange_rate;
    }
    if (object.supply_APY !== undefined && object.supply_APY !== null) {
      message.supplyAPY = object.supply_APY;
    }
    if (object.borrow_APY !== undefined && object.borrow_APY !== null) {
      message.borrowAPY = object.borrow_APY;
    }
    if (object.supplied !== undefined && object.supplied !== null) {
      message.supplied = object.supplied;
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = object.reserved;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    }
    if (object.borrowed !== undefined && object.borrowed !== null) {
      message.borrowed = object.borrowed;
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = object.liquidity;
    }
    if (object.maximum_borrow !== undefined && object.maximum_borrow !== null) {
      message.maximumBorrow = object.maximum_borrow;
    }
    if (object.maximum_collateral !== undefined && object.maximum_collateral !== null) {
      message.maximumCollateral = object.maximum_collateral;
    }
    if (object.minimum_liquidity !== undefined && object.minimum_liquidity !== null) {
      message.minimumLiquidity = object.minimum_liquidity;
    }
    if (object.uToken_supply !== undefined && object.uToken_supply !== null) {
      message.uTokenSupply = object.uToken_supply;
    }
    if (object.available_borrow !== undefined && object.available_borrow !== null) {
      message.availableBorrow = object.available_borrow;
    }
    if (object.available_withdraw !== undefined && object.available_withdraw !== null) {
      message.availableWithdraw = object.available_withdraw;
    }
    if (object.available_collateralize !== undefined && object.available_collateralize !== null) {
      message.availableCollateralize = object.available_collateralize;
    }
    if (object.oracle_historic_price !== undefined && object.oracle_historic_price !== null) {
      message.oracleHistoricPrice = object.oracle_historic_price;
    }
    if (object.errors !== undefined && object.errors !== null) {
      message.errors = object.errors;
    }
    return message;
  },
  toAmino(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseAmino {
    const obj: any = {};
    obj.symbol_denom = message.symbolDenom === "" ? undefined : message.symbolDenom;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    obj.oracle_price = message.oraclePrice === null ? undefined : message.oraclePrice;
    obj.uToken_exchange_rate = message.uTokenExchangeRate ?? "";
    obj.supply_APY = message.supplyAPY ?? "";
    obj.borrow_APY = message.borrowAPY ?? "";
    obj.supplied = message.supplied === "" ? undefined : message.supplied;
    obj.reserved = message.reserved === "" ? undefined : message.reserved;
    obj.collateral = message.collateral === "" ? undefined : message.collateral;
    obj.borrowed = message.borrowed === "" ? undefined : message.borrowed;
    obj.liquidity = message.liquidity === "" ? undefined : message.liquidity;
    obj.maximum_borrow = message.maximumBorrow === "" ? undefined : message.maximumBorrow;
    obj.maximum_collateral = message.maximumCollateral === "" ? undefined : message.maximumCollateral;
    obj.minimum_liquidity = message.minimumLiquidity === "" ? undefined : message.minimumLiquidity;
    obj.uToken_supply = message.uTokenSupply ?? "";
    obj.available_borrow = message.availableBorrow === "" ? undefined : message.availableBorrow;
    obj.available_withdraw = message.availableWithdraw === "" ? undefined : message.availableWithdraw;
    obj.available_collateralize = message.availableCollateralize === "" ? undefined : message.availableCollateralize;
    obj.oracle_historic_price = message.oracleHistoricPrice === null ? undefined : message.oracleHistoricPrice;
    obj.errors = message.errors === "" ? undefined : message.errors;
    return obj;
  },
  fromAminoMsg(object: QueryMarketSummaryResponseAminoMsg): QueryMarketSummaryResponse {
    return QueryMarketSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketSummaryResponseProtoMsg): QueryMarketSummaryResponse {
    return QueryMarketSummaryResponse.decode(message.value);
  },
  toProto(message: QueryMarketSummaryResponse): Uint8Array {
    return QueryMarketSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse",
      value: QueryMarketSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBalances(): QueryAccountBalances {
  return {
    address: ""
  };
}
export const QueryAccountBalances = {
  typeUrl: "/umee.leverage.v1.QueryAccountBalances",
  encode(message: QueryAccountBalances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountBalances {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountBalances>): QueryAccountBalances {
    const message = createBaseQueryAccountBalances();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountBalancesAmino): QueryAccountBalances {
    const message = createBaseQueryAccountBalances();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountBalances): QueryAccountBalancesAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountBalancesAminoMsg): QueryAccountBalances {
    return QueryAccountBalances.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBalancesProtoMsg): QueryAccountBalances {
    return QueryAccountBalances.decode(message.value);
  },
  toProto(message: QueryAccountBalances): Uint8Array {
    return QueryAccountBalances.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBalances): QueryAccountBalancesProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountBalances",
      value: QueryAccountBalances.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBalancesResponse(): QueryAccountBalancesResponse {
  return {
    supplied: [],
    collateral: [],
    borrowed: []
  };
}
export const QueryAccountBalancesResponse = {
  typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse",
  encode(message: QueryAccountBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supplied) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.borrowed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountBalancesResponse {
    return {
      supplied: Array.isArray(object?.supplied) ? object.supplied.map((e: any) => Coin.fromJSON(e)) : [],
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : [],
      borrowed: Array.isArray(object?.borrowed) ? object.borrowed.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountBalancesResponse>): QueryAccountBalancesResponse {
    const message = createBaseQueryAccountBalancesResponse();
    message.supplied = object.supplied?.map(e => Coin.fromPartial(e)) || [];
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    message.borrowed = object.borrowed?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAccountBalancesResponseAmino): QueryAccountBalancesResponse {
    const message = createBaseQueryAccountBalancesResponse();
    message.supplied = object.supplied?.map(e => Coin.fromAmino(e)) || [];
    message.collateral = object.collateral?.map(e => Coin.fromAmino(e)) || [];
    message.borrowed = object.borrowed?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseAmino {
    const obj: any = {};
    if (message.supplied) {
      obj.supplied = message.supplied.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supplied = message.supplied;
    }
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    if (message.borrowed) {
      obj.borrowed = message.borrowed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.borrowed = message.borrowed;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountBalancesResponseAminoMsg): QueryAccountBalancesResponse {
    return QueryAccountBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBalancesResponseProtoMsg): QueryAccountBalancesResponse {
    return QueryAccountBalancesResponse.decode(message.value);
  },
  toProto(message: QueryAccountBalancesResponse): Uint8Array {
    return QueryAccountBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse",
      value: QueryAccountBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountSummary(): QueryAccountSummary {
  return {
    address: ""
  };
}
export const QueryAccountSummary = {
  typeUrl: "/umee.leverage.v1.QueryAccountSummary",
  encode(message: QueryAccountSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountSummary {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountSummary>): QueryAccountSummary {
    const message = createBaseQueryAccountSummary();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountSummaryAmino): QueryAccountSummary {
    const message = createBaseQueryAccountSummary();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountSummary): QueryAccountSummaryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountSummaryAminoMsg): QueryAccountSummary {
    return QueryAccountSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountSummaryProtoMsg): QueryAccountSummary {
    return QueryAccountSummary.decode(message.value);
  },
  toProto(message: QueryAccountSummary): Uint8Array {
    return QueryAccountSummary.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountSummary): QueryAccountSummaryProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountSummary",
      value: QueryAccountSummary.encode(message).finish()
    };
  }
};
function createBaseQueryAccountSummaryResponse(): QueryAccountSummaryResponse {
  return {
    suppliedValue: "",
    collateralValue: "",
    borrowedValue: "",
    borrowLimit: undefined,
    liquidationThreshold: undefined,
    spotSuppliedValue: "",
    spotCollateralValue: "",
    spotBorrowedValue: ""
  };
}
export const QueryAccountSummaryResponse = {
  typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse",
  encode(message: QueryAccountSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.suppliedValue !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.suppliedValue, 18).atomics);
    }
    if (message.collateralValue !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.collateralValue, 18).atomics);
    }
    if (message.borrowedValue !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowedValue, 18).atomics);
    }
    if (message.borrowLimit !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowLimit, 18).atomics);
    }
    if (message.liquidationThreshold !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.liquidationThreshold, 18).atomics);
    }
    if (message.spotSuppliedValue !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.spotSuppliedValue, 18).atomics);
    }
    if (message.spotCollateralValue !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.spotCollateralValue, 18).atomics);
    }
    if (message.spotBorrowedValue !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.spotBorrowedValue, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountSummaryResponse {
    return {
      suppliedValue: isSet(object.suppliedValue) ? String(object.suppliedValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
      borrowedValue: isSet(object.borrowedValue) ? String(object.borrowedValue) : "",
      borrowLimit: isSet(object.borrowLimit) ? String(object.borrowLimit) : undefined,
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : undefined,
      spotSuppliedValue: isSet(object.spotSuppliedValue) ? String(object.spotSuppliedValue) : "",
      spotCollateralValue: isSet(object.spotCollateralValue) ? String(object.spotCollateralValue) : "",
      spotBorrowedValue: isSet(object.spotBorrowedValue) ? String(object.spotBorrowedValue) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse {
    const message = createBaseQueryAccountSummaryResponse();
    message.suppliedValue = object.suppliedValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.borrowedValue = object.borrowedValue ?? "";
    message.borrowLimit = object.borrowLimit ?? undefined;
    message.liquidationThreshold = object.liquidationThreshold ?? undefined;
    message.spotSuppliedValue = object.spotSuppliedValue ?? "";
    message.spotCollateralValue = object.spotCollateralValue ?? "";
    message.spotBorrowedValue = object.spotBorrowedValue ?? "";
    return message;
  },
  fromAmino(object: QueryAccountSummaryResponseAmino): QueryAccountSummaryResponse {
    const message = createBaseQueryAccountSummaryResponse();
    if (object.supplied_value !== undefined && object.supplied_value !== null) {
      message.suppliedValue = object.supplied_value;
    }
    if (object.collateral_value !== undefined && object.collateral_value !== null) {
      message.collateralValue = object.collateral_value;
    }
    if (object.borrowed_value !== undefined && object.borrowed_value !== null) {
      message.borrowedValue = object.borrowed_value;
    }
    if (object.borrow_limit !== undefined && object.borrow_limit !== null) {
      message.borrowLimit = object.borrow_limit;
    }
    if (object.liquidation_threshold !== undefined && object.liquidation_threshold !== null) {
      message.liquidationThreshold = object.liquidation_threshold;
    }
    if (object.spot_supplied_value !== undefined && object.spot_supplied_value !== null) {
      message.spotSuppliedValue = object.spot_supplied_value;
    }
    if (object.spot_collateral_value !== undefined && object.spot_collateral_value !== null) {
      message.spotCollateralValue = object.spot_collateral_value;
    }
    if (object.spot_borrowed_value !== undefined && object.spot_borrowed_value !== null) {
      message.spotBorrowedValue = object.spot_borrowed_value;
    }
    return message;
  },
  toAmino(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseAmino {
    const obj: any = {};
    obj.supplied_value = message.suppliedValue === "" ? undefined : message.suppliedValue;
    obj.collateral_value = message.collateralValue === "" ? undefined : message.collateralValue;
    obj.borrowed_value = message.borrowedValue === "" ? undefined : message.borrowedValue;
    obj.borrow_limit = message.borrowLimit === null ? undefined : message.borrowLimit;
    obj.liquidation_threshold = message.liquidationThreshold === null ? undefined : message.liquidationThreshold;
    obj.spot_supplied_value = message.spotSuppliedValue === "" ? undefined : message.spotSuppliedValue;
    obj.spot_collateral_value = message.spotCollateralValue === "" ? undefined : message.spotCollateralValue;
    obj.spot_borrowed_value = message.spotBorrowedValue === "" ? undefined : message.spotBorrowedValue;
    return obj;
  },
  fromAminoMsg(object: QueryAccountSummaryResponseAminoMsg): QueryAccountSummaryResponse {
    return QueryAccountSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountSummaryResponseProtoMsg): QueryAccountSummaryResponse {
    return QueryAccountSummaryResponse.decode(message.value);
  },
  toProto(message: QueryAccountSummaryResponse): Uint8Array {
    return QueryAccountSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse",
      value: QueryAccountSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidationTargets(): QueryLiquidationTargets {
  return {};
}
export const QueryLiquidationTargets = {
  typeUrl: "/umee.leverage.v1.QueryLiquidationTargets",
  encode(_: QueryLiquidationTargets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLiquidationTargets {
    return {};
  },
  fromPartial(_: Partial<QueryLiquidationTargets>): QueryLiquidationTargets {
    const message = createBaseQueryLiquidationTargets();
    return message;
  },
  fromAmino(_: QueryLiquidationTargetsAmino): QueryLiquidationTargets {
    const message = createBaseQueryLiquidationTargets();
    return message;
  },
  toAmino(_: QueryLiquidationTargets): QueryLiquidationTargetsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLiquidationTargetsAminoMsg): QueryLiquidationTargets {
    return QueryLiquidationTargets.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidationTargetsProtoMsg): QueryLiquidationTargets {
    return QueryLiquidationTargets.decode(message.value);
  },
  toProto(message: QueryLiquidationTargets): Uint8Array {
    return QueryLiquidationTargets.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidationTargets): QueryLiquidationTargetsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryLiquidationTargets",
      value: QueryLiquidationTargets.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidationTargetsResponse(): QueryLiquidationTargetsResponse {
  return {
    targets: []
  };
}
export const QueryLiquidationTargetsResponse = {
  typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse",
  encode(message: QueryLiquidationTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.targets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryLiquidationTargetsResponse {
    return {
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLiquidationTargetsResponse>): QueryLiquidationTargetsResponse {
    const message = createBaseQueryLiquidationTargetsResponse();
    message.targets = object.targets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryLiquidationTargetsResponseAmino): QueryLiquidationTargetsResponse {
    const message = createBaseQueryLiquidationTargetsResponse();
    message.targets = object.targets?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseAmino {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map(e => e);
    } else {
      obj.targets = message.targets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryLiquidationTargetsResponseAminoMsg): QueryLiquidationTargetsResponse {
    return QueryLiquidationTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidationTargetsResponseProtoMsg): QueryLiquidationTargetsResponse {
    return QueryLiquidationTargetsResponse.decode(message.value);
  },
  toProto(message: QueryLiquidationTargetsResponse): Uint8Array {
    return QueryLiquidationTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse",
      value: QueryLiquidationTargetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBadDebts(): QueryBadDebts {
  return {};
}
export const QueryBadDebts = {
  typeUrl: "/umee.leverage.v1.QueryBadDebts",
  encode(_: QueryBadDebts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBadDebts {
    return {};
  },
  fromPartial(_: Partial<QueryBadDebts>): QueryBadDebts {
    const message = createBaseQueryBadDebts();
    return message;
  },
  fromAmino(_: QueryBadDebtsAmino): QueryBadDebts {
    const message = createBaseQueryBadDebts();
    return message;
  },
  toAmino(_: QueryBadDebts): QueryBadDebtsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBadDebtsAminoMsg): QueryBadDebts {
    return QueryBadDebts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBadDebtsProtoMsg): QueryBadDebts {
    return QueryBadDebts.decode(message.value);
  },
  toProto(message: QueryBadDebts): Uint8Array {
    return QueryBadDebts.encode(message).finish();
  },
  toProtoMsg(message: QueryBadDebts): QueryBadDebtsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryBadDebts",
      value: QueryBadDebts.encode(message).finish()
    };
  }
};
function createBaseQueryBadDebtsResponse(): QueryBadDebtsResponse {
  return {
    targets: []
  };
}
export const QueryBadDebtsResponse = {
  typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse",
  encode(message: QueryBadDebtsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.targets) {
      BadDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBadDebtsResponse {
    return {
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => BadDebt.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBadDebtsResponse>): QueryBadDebtsResponse {
    const message = createBaseQueryBadDebtsResponse();
    message.targets = object.targets?.map(e => BadDebt.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBadDebtsResponseAmino): QueryBadDebtsResponse {
    const message = createBaseQueryBadDebtsResponse();
    message.targets = object.targets?.map(e => BadDebt.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBadDebtsResponse): QueryBadDebtsResponseAmino {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map(e => e ? BadDebt.toAmino(e) : undefined);
    } else {
      obj.targets = message.targets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBadDebtsResponseAminoMsg): QueryBadDebtsResponse {
    return QueryBadDebtsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBadDebtsResponseProtoMsg): QueryBadDebtsResponse {
    return QueryBadDebtsResponse.decode(message.value);
  },
  toProto(message: QueryBadDebtsResponse): Uint8Array {
    return QueryBadDebtsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBadDebtsResponse): QueryBadDebtsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse",
      value: QueryBadDebtsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMaxWithdraw(): QueryMaxWithdraw {
  return {
    address: "",
    denom: ""
  };
}
export const QueryMaxWithdraw = {
  typeUrl: "/umee.leverage.v1.QueryMaxWithdraw",
  encode(message: QueryMaxWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryMaxWithdraw {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryMaxWithdraw>): QueryMaxWithdraw {
    const message = createBaseQueryMaxWithdraw();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryMaxWithdrawAmino): QueryMaxWithdraw {
    const message = createBaseQueryMaxWithdraw();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryMaxWithdraw): QueryMaxWithdrawAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryMaxWithdrawAminoMsg): QueryMaxWithdraw {
    return QueryMaxWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMaxWithdrawProtoMsg): QueryMaxWithdraw {
    return QueryMaxWithdraw.decode(message.value);
  },
  toProto(message: QueryMaxWithdraw): Uint8Array {
    return QueryMaxWithdraw.encode(message).finish();
  },
  toProtoMsg(message: QueryMaxWithdraw): QueryMaxWithdrawProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMaxWithdraw",
      value: QueryMaxWithdraw.encode(message).finish()
    };
  }
};
function createBaseQueryMaxWithdrawResponse(): QueryMaxWithdrawResponse {
  return {
    uTokens: [],
    tokens: []
  };
}
export const QueryMaxWithdrawResponse = {
  typeUrl: "/umee.leverage.v1.QueryMaxWithdrawResponse",
  encode(message: QueryMaxWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uTokens) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMaxWithdrawResponse {
    return {
      uTokens: Array.isArray(object?.uTokens) ? object.uTokens.map((e: any) => Coin.fromJSON(e)) : [],
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMaxWithdrawResponse>): QueryMaxWithdrawResponse {
    const message = createBaseQueryMaxWithdrawResponse();
    message.uTokens = object.uTokens?.map(e => Coin.fromPartial(e)) || [];
    message.tokens = object.tokens?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMaxWithdrawResponseAmino): QueryMaxWithdrawResponse {
    const message = createBaseQueryMaxWithdrawResponse();
    message.uTokens = object.uTokens?.map(e => Coin.fromAmino(e)) || [];
    message.tokens = object.tokens?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMaxWithdrawResponse): QueryMaxWithdrawResponseAmino {
    const obj: any = {};
    if (message.uTokens) {
      obj.uTokens = message.uTokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.uTokens = message.uTokens;
    }
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMaxWithdrawResponseAminoMsg): QueryMaxWithdrawResponse {
    return QueryMaxWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMaxWithdrawResponseProtoMsg): QueryMaxWithdrawResponse {
    return QueryMaxWithdrawResponse.decode(message.value);
  },
  toProto(message: QueryMaxWithdrawResponse): Uint8Array {
    return QueryMaxWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMaxWithdrawResponse): QueryMaxWithdrawResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMaxWithdrawResponse",
      value: QueryMaxWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMaxBorrow(): QueryMaxBorrow {
  return {
    address: "",
    denom: ""
  };
}
export const QueryMaxBorrow = {
  typeUrl: "/umee.leverage.v1.QueryMaxBorrow",
  encode(message: QueryMaxBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryMaxBorrow {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryMaxBorrow>): QueryMaxBorrow {
    const message = createBaseQueryMaxBorrow();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryMaxBorrowAmino): QueryMaxBorrow {
    const message = createBaseQueryMaxBorrow();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryMaxBorrow): QueryMaxBorrowAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryMaxBorrowAminoMsg): QueryMaxBorrow {
    return QueryMaxBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMaxBorrowProtoMsg): QueryMaxBorrow {
    return QueryMaxBorrow.decode(message.value);
  },
  toProto(message: QueryMaxBorrow): Uint8Array {
    return QueryMaxBorrow.encode(message).finish();
  },
  toProtoMsg(message: QueryMaxBorrow): QueryMaxBorrowProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMaxBorrow",
      value: QueryMaxBorrow.encode(message).finish()
    };
  }
};
function createBaseQueryMaxBorrowResponse(): QueryMaxBorrowResponse {
  return {
    tokens: []
  };
}
export const QueryMaxBorrowResponse = {
  typeUrl: "/umee.leverage.v1.QueryMaxBorrowResponse",
  encode(message: QueryMaxBorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMaxBorrowResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMaxBorrowResponse>): QueryMaxBorrowResponse {
    const message = createBaseQueryMaxBorrowResponse();
    message.tokens = object.tokens?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMaxBorrowResponseAmino): QueryMaxBorrowResponse {
    const message = createBaseQueryMaxBorrowResponse();
    message.tokens = object.tokens?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMaxBorrowResponse): QueryMaxBorrowResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMaxBorrowResponseAminoMsg): QueryMaxBorrowResponse {
    return QueryMaxBorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMaxBorrowResponseProtoMsg): QueryMaxBorrowResponse {
    return QueryMaxBorrowResponse.decode(message.value);
  },
  toProto(message: QueryMaxBorrowResponse): Uint8Array {
    return QueryMaxBorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMaxBorrowResponse): QueryMaxBorrowResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMaxBorrowResponse",
      value: QueryMaxBorrowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInspect(): QueryInspect {
  return {
    symbol: "",
    borrowed: 0,
    collateral: 0,
    danger: 0,
    ltv: 0
  };
}
export const QueryInspect = {
  typeUrl: "/umee.leverage.v1.QueryInspect",
  encode(message: QueryInspect, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.borrowed !== 0) {
      writer.uint32(17).double(message.borrowed);
    }
    if (message.collateral !== 0) {
      writer.uint32(25).double(message.collateral);
    }
    if (message.danger !== 0) {
      writer.uint32(33).double(message.danger);
    }
    if (message.ltv !== 0) {
      writer.uint32(41).double(message.ltv);
    }
    return writer;
  },
  fromJSON(object: any): QueryInspect {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      borrowed: isSet(object.borrowed) ? Number(object.borrowed) : 0,
      collateral: isSet(object.collateral) ? Number(object.collateral) : 0,
      danger: isSet(object.danger) ? Number(object.danger) : 0,
      ltv: isSet(object.ltv) ? Number(object.ltv) : 0
    };
  },
  fromPartial(object: Partial<QueryInspect>): QueryInspect {
    const message = createBaseQueryInspect();
    message.symbol = object.symbol ?? "";
    message.borrowed = object.borrowed ?? 0;
    message.collateral = object.collateral ?? 0;
    message.danger = object.danger ?? 0;
    message.ltv = object.ltv ?? 0;
    return message;
  },
  fromAmino(object: QueryInspectAmino): QueryInspect {
    const message = createBaseQueryInspect();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.borrowed !== undefined && object.borrowed !== null) {
      message.borrowed = object.borrowed;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    }
    if (object.danger !== undefined && object.danger !== null) {
      message.danger = object.danger;
    }
    if (object.ltv !== undefined && object.ltv !== null) {
      message.ltv = object.ltv;
    }
    return message;
  },
  toAmino(message: QueryInspect): QueryInspectAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.borrowed = message.borrowed === 0 ? undefined : message.borrowed;
    obj.collateral = message.collateral === 0 ? undefined : message.collateral;
    obj.danger = message.danger === 0 ? undefined : message.danger;
    obj.ltv = message.ltv === 0 ? undefined : message.ltv;
    return obj;
  },
  fromAminoMsg(object: QueryInspectAminoMsg): QueryInspect {
    return QueryInspect.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInspectProtoMsg): QueryInspect {
    return QueryInspect.decode(message.value);
  },
  toProto(message: QueryInspect): Uint8Array {
    return QueryInspect.encode(message).finish();
  },
  toProtoMsg(message: QueryInspect): QueryInspectProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryInspect",
      value: QueryInspect.encode(message).finish()
    };
  }
};
function createBaseQueryInspectAccount(): QueryInspectAccount {
  return {
    address: ""
  };
}
export const QueryInspectAccount = {
  typeUrl: "/umee.leverage.v1.QueryInspectAccount",
  encode(message: QueryInspectAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryInspectAccount {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryInspectAccount>): QueryInspectAccount {
    const message = createBaseQueryInspectAccount();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryInspectAccountAmino): QueryInspectAccount {
    const message = createBaseQueryInspectAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryInspectAccount): QueryInspectAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryInspectAccountAminoMsg): QueryInspectAccount {
    return QueryInspectAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInspectAccountProtoMsg): QueryInspectAccount {
    return QueryInspectAccount.decode(message.value);
  },
  toProto(message: QueryInspectAccount): Uint8Array {
    return QueryInspectAccount.encode(message).finish();
  },
  toProtoMsg(message: QueryInspectAccount): QueryInspectAccountProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryInspectAccount",
      value: QueryInspectAccount.encode(message).finish()
    };
  }
};
function createBaseQueryInspectResponse(): QueryInspectResponse {
  return {
    borrowers: [],
    failures: []
  };
}
export const QueryInspectResponse = {
  typeUrl: "/umee.leverage.v1.QueryInspectResponse",
  encode(message: QueryInspectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.borrowers) {
      InspectAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.failures) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryInspectResponse {
    return {
      borrowers: Array.isArray(object?.borrowers) ? object.borrowers.map((e: any) => InspectAccount.fromJSON(e)) : [],
      failures: Array.isArray(object?.failures) ? object.failures.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInspectResponse>): QueryInspectResponse {
    const message = createBaseQueryInspectResponse();
    message.borrowers = object.borrowers?.map(e => InspectAccount.fromPartial(e)) || [];
    message.failures = object.failures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryInspectResponseAmino): QueryInspectResponse {
    const message = createBaseQueryInspectResponse();
    message.borrowers = object.borrowers?.map(e => InspectAccount.fromAmino(e)) || [];
    message.failures = object.failures?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryInspectResponse): QueryInspectResponseAmino {
    const obj: any = {};
    if (message.borrowers) {
      obj.borrowers = message.borrowers.map(e => e ? InspectAccount.toAmino(e) : undefined);
    } else {
      obj.borrowers = message.borrowers;
    }
    if (message.failures) {
      obj.failures = message.failures.map(e => e);
    } else {
      obj.failures = message.failures;
    }
    return obj;
  },
  fromAminoMsg(object: QueryInspectResponseAminoMsg): QueryInspectResponse {
    return QueryInspectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInspectResponseProtoMsg): QueryInspectResponse {
    return QueryInspectResponse.decode(message.value);
  },
  toProto(message: QueryInspectResponse): Uint8Array {
    return QueryInspectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInspectResponse): QueryInspectResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryInspectResponse",
      value: QueryInspectResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInspectAccountResponse(): QueryInspectAccountResponse {
  return {
    borrower: InspectAccount.fromPartial({})
  };
}
export const QueryInspectAccountResponse = {
  typeUrl: "/umee.leverage.v1.QueryInspectAccountResponse",
  encode(message: QueryInspectAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== undefined) {
      InspectAccount.encode(message.borrower, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInspectAccountResponse {
    return {
      borrower: isSet(object.borrower) ? InspectAccount.fromJSON(object.borrower) : undefined
    };
  },
  fromPartial(object: Partial<QueryInspectAccountResponse>): QueryInspectAccountResponse {
    const message = createBaseQueryInspectAccountResponse();
    message.borrower = object.borrower !== undefined && object.borrower !== null ? InspectAccount.fromPartial(object.borrower) : undefined;
    return message;
  },
  fromAmino(object: QueryInspectAccountResponseAmino): QueryInspectAccountResponse {
    const message = createBaseQueryInspectAccountResponse();
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = InspectAccount.fromAmino(object.borrower);
    }
    return message;
  },
  toAmino(message: QueryInspectAccountResponse): QueryInspectAccountResponseAmino {
    const obj: any = {};
    obj.borrower = message.borrower ? InspectAccount.toAmino(message.borrower) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInspectAccountResponseAminoMsg): QueryInspectAccountResponse {
    return QueryInspectAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInspectAccountResponseProtoMsg): QueryInspectAccountResponse {
    return QueryInspectAccountResponse.decode(message.value);
  },
  toProto(message: QueryInspectAccountResponse): Uint8Array {
    return QueryInspectAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInspectAccountResponse): QueryInspectAccountResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryInspectAccountResponse",
      value: QueryInspectAccountResponse.encode(message).finish()
    };
  }
};
function createBaseInspectAccount(): InspectAccount {
  return {
    address: "",
    analysis: undefined,
    position: undefined,
    info: ""
  };
}
export const InspectAccount = {
  typeUrl: "/umee.leverage.v1.InspectAccount",
  encode(message: InspectAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.analysis !== undefined) {
      RiskInfo.encode(message.analysis, writer.uint32(18).fork()).ldelim();
    }
    if (message.position !== undefined) {
      DecBalances.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },
  fromJSON(object: any): InspectAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      analysis: isSet(object.analysis) ? RiskInfo.fromJSON(object.analysis) : undefined,
      position: isSet(object.position) ? DecBalances.fromJSON(object.position) : undefined,
      info: isSet(object.info) ? String(object.info) : ""
    };
  },
  fromPartial(object: Partial<InspectAccount>): InspectAccount {
    const message = createBaseInspectAccount();
    message.address = object.address ?? "";
    message.analysis = object.analysis !== undefined && object.analysis !== null ? RiskInfo.fromPartial(object.analysis) : undefined;
    message.position = object.position !== undefined && object.position !== null ? DecBalances.fromPartial(object.position) : undefined;
    message.info = object.info ?? "";
    return message;
  },
  fromAmino(object: InspectAccountAmino): InspectAccount {
    const message = createBaseInspectAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.analysis !== undefined && object.analysis !== null) {
      message.analysis = RiskInfo.fromAmino(object.analysis);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = DecBalances.fromAmino(object.position);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    return message;
  },
  toAmino(message: InspectAccount): InspectAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.analysis = message.analysis ? RiskInfo.toAmino(message.analysis) : undefined;
    obj.position = message.position ? DecBalances.toAmino(message.position) : undefined;
    obj.info = message.info === "" ? undefined : message.info;
    return obj;
  },
  fromAminoMsg(object: InspectAccountAminoMsg): InspectAccount {
    return InspectAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: InspectAccountProtoMsg): InspectAccount {
    return InspectAccount.decode(message.value);
  },
  toProto(message: InspectAccount): Uint8Array {
    return InspectAccount.encode(message).finish();
  },
  toProtoMsg(message: InspectAccount): InspectAccountProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.InspectAccount",
      value: InspectAccount.encode(message).finish()
    };
  }
};
function createBaseRiskInfo(): RiskInfo {
  return {
    Borrowed: 0,
    Liquidation: 0,
    Value: 0
  };
}
export const RiskInfo = {
  typeUrl: "/umee.leverage.v1.RiskInfo",
  encode(message: RiskInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Borrowed !== 0) {
      writer.uint32(9).double(message.Borrowed);
    }
    if (message.Liquidation !== 0) {
      writer.uint32(17).double(message.Liquidation);
    }
    if (message.Value !== 0) {
      writer.uint32(25).double(message.Value);
    }
    return writer;
  },
  fromJSON(object: any): RiskInfo {
    return {
      Borrowed: isSet(object.Borrowed) ? Number(object.Borrowed) : 0,
      Liquidation: isSet(object.Liquidation) ? Number(object.Liquidation) : 0,
      Value: isSet(object.Value) ? Number(object.Value) : 0
    };
  },
  fromPartial(object: Partial<RiskInfo>): RiskInfo {
    const message = createBaseRiskInfo();
    message.Borrowed = object.Borrowed ?? 0;
    message.Liquidation = object.Liquidation ?? 0;
    message.Value = object.Value ?? 0;
    return message;
  },
  fromAmino(object: RiskInfoAmino): RiskInfo {
    const message = createBaseRiskInfo();
    if (object.Borrowed !== undefined && object.Borrowed !== null) {
      message.Borrowed = object.Borrowed;
    }
    if (object.Liquidation !== undefined && object.Liquidation !== null) {
      message.Liquidation = object.Liquidation;
    }
    if (object.Value !== undefined && object.Value !== null) {
      message.Value = object.Value;
    }
    return message;
  },
  toAmino(message: RiskInfo): RiskInfoAmino {
    const obj: any = {};
    obj.Borrowed = message.Borrowed === 0 ? undefined : message.Borrowed;
    obj.Liquidation = message.Liquidation === 0 ? undefined : message.Liquidation;
    obj.Value = message.Value === 0 ? undefined : message.Value;
    return obj;
  },
  fromAminoMsg(object: RiskInfoAminoMsg): RiskInfo {
    return RiskInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RiskInfoProtoMsg): RiskInfo {
    return RiskInfo.decode(message.value);
  },
  toProto(message: RiskInfo): Uint8Array {
    return RiskInfo.encode(message).finish();
  },
  toProtoMsg(message: RiskInfo): RiskInfoProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.RiskInfo",
      value: RiskInfo.encode(message).finish()
    };
  }
};
function createBaseDecBalances(): DecBalances {
  return {
    collateral: [],
    borrowed: []
  };
}
export const DecBalances = {
  typeUrl: "/umee.leverage.v1.DecBalances",
  encode(message: DecBalances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collateral) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.borrowed) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DecBalances {
    return {
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => DecCoin.fromJSON(e)) : [],
      borrowed: Array.isArray(object?.borrowed) ? object.borrowed.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DecBalances>): DecBalances {
    const message = createBaseDecBalances();
    message.collateral = object.collateral?.map(e => DecCoin.fromPartial(e)) || [];
    message.borrowed = object.borrowed?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DecBalancesAmino): DecBalances {
    const message = createBaseDecBalances();
    message.collateral = object.collateral?.map(e => DecCoin.fromAmino(e)) || [];
    message.borrowed = object.borrowed?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DecBalances): DecBalancesAmino {
    const obj: any = {};
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    if (message.borrowed) {
      obj.borrowed = message.borrowed.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.borrowed = message.borrowed;
    }
    return obj;
  },
  fromAminoMsg(object: DecBalancesAminoMsg): DecBalances {
    return DecBalances.fromAmino(object.value);
  },
  fromProtoMsg(message: DecBalancesProtoMsg): DecBalances {
    return DecBalances.decode(message.value);
  },
  toProto(message: DecBalances): Uint8Array {
    return DecBalances.encode(message).finish();
  },
  toProtoMsg(message: DecBalances): DecBalancesProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.DecBalances",
      value: DecBalances.encode(message).finish()
    };
  }
};