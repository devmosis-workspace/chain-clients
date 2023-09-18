import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType } from "./leverage";
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
  base_denom: string;
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
  registry: TokenAmino[];
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
  denom: string;
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
  symbol_denom: string;
  /** Exponent is the power of ten required to get from base denom to symbol denom. For example, an exponent of 6 means 10^6 uumee = 1 UMEE. */
  exponent: number;
  /** Oracle Price is the current USD value of a token. Oracle price is nil when the oracle is down. */
  oracle_price: string;
  /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
  uToken_exchange_rate: string;
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
  maximum_borrow: string;
  /** Maximum Collateral is the amount of a token that can be collateralized, including that which is already collateral. This amount is less than total supply due to safety limits. It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee, uToken exchange rate is 1.2, and maximum borrow is 7000000 uumee, then a maximum of 2 additional UMEE is permitted to be collateralized. */
  maximum_collateral: string;
  /** Minimum Liquidity is the minimum amount of liquidity in the module required by safety limits, based on the current collateral. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if liquidity is 9000000 uumee and minimum liquidity is 8000000 uumee, then a maximum of 1 additional UMEE is currently available for borrowing or withdrawal. */
  minimum_liquidity: string;
  /** uToken Supply is the total amount of a base token's associated uToken in circulation. */
  uToken_supply: string;
  /** Available Borrow is the maximum additional amount of base tokens than can be borrowed based on current liquidity and system safety limits. It can also be calculated by MIN(maximum_borrow - borrowed, liquidity - minimum_liquidity). It is denominated in base tokens, so exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and borrowing is temporarily unavailable. */
  available_borrow: string;
  /** Available Withdraw is the maximum amount of uTokens than can currently be withdrawn based on liquidity and system safety limits. It can also be calculated by (liquidity - minimum_liquidity). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and withdrawal is temporarily unavailable. */
  available_withdraw: string;
  /** Available Collateralize is the maximum additional amount of uTokens than can be collateralized based on current liquidity and system safety limits. It can also be calculated by (maximum_collateral, - collateral). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and additional collateral cannot be created until more liquidity is present. */
  available_collateralize: string;
  /** Oracle Historic Price is the historic USD value of a token. Historic price is defined as the median of the last N historic median prices from the oracle module, with N being this token's HistoricMedians in the leverage registry. Current price is used if required medians is zero. Price is nil when the oracle is down or insufficient historic medians are available. */
  oracle_historic_price: string;
  errors: string;
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
  address: string;
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
  supplied: CoinAmino[];
  /** Collateral contains all uTokens the account has collateralized. It is denominated in uTokens, so both exponent and uToken exchange rate from each coin's market_summary must be applied to convert to base token symbol denom. */
  collateral: CoinAmino[];
  /** Borrowed contains all tokens the account has borrowed, including interest owed. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
  borrowed: CoinAmino[];
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
  address: string;
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
  liquidationThreshold?: string;
}
export interface QueryAccountSummaryResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse";
  value: Uint8Array;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponseAmino {
  /**
   * Supplied Value is the sum of the USD value of all tokens the account has supplied, including interest earned.
   * Computation skips assets which are missing oracle prices, potentially resulting in a lower supplied
   * value than if prices were all available.
   */
  supplied_value: string;
  /**
   * Collateral Value is the sum of the USD value of all uTokens the account has collateralized.
   * Computation skips collateral which is missing an oracle price, potentially resulting in a lower collateral
   * value than if prices were all available.
   */
  collateral_value: string;
  /**
   * Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed.
   * It always uses spot prices.
   * Computation skips borrows which are missing oracle prices, potentially resulting in a lower borrowed
   * value than if prices were all available.
   */
  borrowed_value: string;
  /**
   * Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing.
   * The lower of spot or historic price for each collateral token is used when calculating borrow limits.
   * Computation skips collateral which is missing an oracle price, potentially resulting in a lower borrow
   * limit than if prices were all available.
   */
  borrow_limit: string;
  /**
   * Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation.
   * Will be null if an oracle price required for computation is missing.
   */
  liquidation_threshold: string;
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
  borrow_limit: string;
  liquidation_threshold?: string;
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
  targets: string[];
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
  targets: BadDebtAmino[];
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
  address: string;
  /**
   * denom is the base token denom associated with the uToken to withdraw.
   * empty denom will query all registered tokens.
   */
  denom: string;
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
  uTokens: CoinAmino[];
  /** Tokens is the equivalent of max uTokens converted to base tokens */
  tokens: CoinAmino[];
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
  address: string;
  /**
   * denom is the base token denom to borrow.
   * empty denom will query all registered tokens.
   */
  denom: string;
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
  tokens: CoinAmino[];
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
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponse {
  borrowers: InspectAccount[];
}
export interface QueryInspectResponseProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryInspectResponse";
  value: Uint8Array;
}
/** QueryInspectResponse defines the response structure for the Inspect gRPC service handler. */
export interface QueryInspectResponseAmino {
  borrowers: InspectAccountAmino[];
}
export interface QueryInspectResponseAminoMsg {
  type: "/umee.leverage.v1.QueryInspectResponse";
  value: QueryInspectResponseAmino;
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
  analysis: RiskInfo;
  /** Collateral and borrowed tokens, denoted in human-readable symbol denom instead of ibc denom. */
  position: DecBalances;
}
export interface InspectAccountProtoMsg {
  typeUrl: "/umee.leverage.v1.InspectAccount";
  value: Uint8Array;
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccountAmino {
  /** Address of a borrower */
  address: string;
  /** USD totals of borrower's collateral, debt, and liquidation threshold. */
  analysis?: RiskInfoAmino;
  /** Collateral and borrowed tokens, denoted in human-readable symbol denom instead of ibc denom. */
  position?: DecBalancesAmino;
}
export interface InspectAccountAminoMsg {
  type: "/umee.leverage.v1.InspectAccount";
  value: InspectAccountAmino;
}
/** InspectAccount contains risk and balance info for a single account for the inspector query. */
export interface InspectAccountSDKType {
  address: string;
  analysis: RiskInfoSDKType;
  position: DecBalancesSDKType;
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
  Borrowed: number;
  /** Liquidation is account's liquidation threshold in USD. */
  Liquidation: number;
  /** Value is account's collateral value in USD. */
  Value: number;
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
  collateral: DecCoinAmino[];
  /** Borrowed contains all tokens the account has borrowed, including interest owed. */
  borrowed: DecCoinAmino[];
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
    return {};
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
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
    return {
      baseDenom: object.base_denom
    };
  },
  toAmino(message: QueryRegisteredTokens): QueryRegisteredTokensAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
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
    return {
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Token.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseAmino {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.registry = [];
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
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryMarketSummary): QueryMarketSummaryAmino {
    const obj: any = {};
    obj.denom = message.denom;
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
    return {
      symbolDenom: object.symbol_denom,
      exponent: object.exponent,
      oraclePrice: object?.oracle_price,
      uTokenExchangeRate: object.uToken_exchange_rate,
      supplyAPY: object.supply_APY,
      borrowAPY: object.borrow_APY,
      supplied: object.supplied,
      reserved: object.reserved,
      collateral: object.collateral,
      borrowed: object.borrowed,
      liquidity: object.liquidity,
      maximumBorrow: object.maximum_borrow,
      maximumCollateral: object.maximum_collateral,
      minimumLiquidity: object.minimum_liquidity,
      uTokenSupply: object.uToken_supply,
      availableBorrow: object.available_borrow,
      availableWithdraw: object.available_withdraw,
      availableCollateralize: object.available_collateralize,
      oracleHistoricPrice: object?.oracle_historic_price,
      errors: object.errors
    };
  },
  toAmino(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseAmino {
    const obj: any = {};
    obj.symbol_denom = message.symbolDenom;
    obj.exponent = message.exponent;
    obj.oracle_price = message.oraclePrice;
    obj.uToken_exchange_rate = message.uTokenExchangeRate;
    obj.supply_APY = message.supplyAPY;
    obj.borrow_APY = message.borrowAPY;
    obj.supplied = message.supplied;
    obj.reserved = message.reserved;
    obj.collateral = message.collateral;
    obj.borrowed = message.borrowed;
    obj.liquidity = message.liquidity;
    obj.maximum_borrow = message.maximumBorrow;
    obj.maximum_collateral = message.maximumCollateral;
    obj.minimum_liquidity = message.minimumLiquidity;
    obj.uToken_supply = message.uTokenSupply;
    obj.available_borrow = message.availableBorrow;
    obj.available_withdraw = message.availableWithdraw;
    obj.available_collateralize = message.availableCollateralize;
    obj.oracle_historic_price = message.oracleHistoricPrice;
    obj.errors = message.errors;
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
    return {
      address: object.address
    };
  },
  toAmino(message: QueryAccountBalances): QueryAccountBalancesAmino {
    const obj: any = {};
    obj.address = message.address;
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
    return {
      supplied: Array.isArray(object?.supplied) ? object.supplied.map((e: any) => Coin.fromAmino(e)) : [],
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromAmino(e)) : [],
      borrowed: Array.isArray(object?.borrowed) ? object.borrowed.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseAmino {
    const obj: any = {};
    if (message.supplied) {
      obj.supplied = message.supplied.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supplied = [];
    }
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = [];
    }
    if (message.borrowed) {
      obj.borrowed = message.borrowed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.borrowed = [];
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
    return {
      address: object.address
    };
  },
  toAmino(message: QueryAccountSummary): QueryAccountSummaryAmino {
    const obj: any = {};
    obj.address = message.address;
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
    borrowLimit: "",
    liquidationThreshold: undefined
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
    if (message.borrowLimit !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowLimit, 18).atomics);
    }
    if (message.liquidationThreshold !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.liquidationThreshold, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountSummaryResponse {
    return {
      suppliedValue: isSet(object.suppliedValue) ? String(object.suppliedValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
      borrowedValue: isSet(object.borrowedValue) ? String(object.borrowedValue) : "",
      borrowLimit: isSet(object.borrowLimit) ? String(object.borrowLimit) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : undefined
    };
  },
  fromPartial(object: Partial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse {
    const message = createBaseQueryAccountSummaryResponse();
    message.suppliedValue = object.suppliedValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.borrowedValue = object.borrowedValue ?? "";
    message.borrowLimit = object.borrowLimit ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? undefined;
    return message;
  },
  fromAmino(object: QueryAccountSummaryResponseAmino): QueryAccountSummaryResponse {
    return {
      suppliedValue: object.supplied_value,
      collateralValue: object.collateral_value,
      borrowedValue: object.borrowed_value,
      borrowLimit: object.borrow_limit,
      liquidationThreshold: object?.liquidation_threshold
    };
  },
  toAmino(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseAmino {
    const obj: any = {};
    obj.supplied_value = message.suppliedValue;
    obj.collateral_value = message.collateralValue;
    obj.borrowed_value = message.borrowedValue;
    obj.borrow_limit = message.borrowLimit;
    obj.liquidation_threshold = message.liquidationThreshold;
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
    return {};
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
    return {
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseAmino {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map(e => e);
    } else {
      obj.targets = [];
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
    return {};
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
    return {
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => BadDebt.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBadDebtsResponse): QueryBadDebtsResponseAmino {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map(e => e ? BadDebt.toAmino(e) : undefined);
    } else {
      obj.targets = [];
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
    return {
      address: object.address,
      denom: object.denom
    };
  },
  toAmino(message: QueryMaxWithdraw): QueryMaxWithdrawAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
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
    return {
      uTokens: Array.isArray(object?.uTokens) ? object.uTokens.map((e: any) => Coin.fromAmino(e)) : [],
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryMaxWithdrawResponse): QueryMaxWithdrawResponseAmino {
    const obj: any = {};
    if (message.uTokens) {
      obj.uTokens = message.uTokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.uTokens = [];
    }
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
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
    return {
      address: object.address,
      denom: object.denom
    };
  },
  toAmino(message: QueryMaxBorrow): QueryMaxBorrowAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
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
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryMaxBorrowResponse): QueryMaxBorrowResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
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
    return {
      symbol: object.symbol,
      borrowed: object.borrowed,
      collateral: object.collateral,
      danger: object.danger,
      ltv: object.ltv
    };
  },
  toAmino(message: QueryInspect): QueryInspectAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.borrowed = message.borrowed;
    obj.collateral = message.collateral;
    obj.danger = message.danger;
    obj.ltv = message.ltv;
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
function createBaseQueryInspectResponse(): QueryInspectResponse {
  return {
    borrowers: []
  };
}
export const QueryInspectResponse = {
  typeUrl: "/umee.leverage.v1.QueryInspectResponse",
  encode(message: QueryInspectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.borrowers) {
      InspectAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInspectResponse {
    return {
      borrowers: Array.isArray(object?.borrowers) ? object.borrowers.map((e: any) => InspectAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInspectResponse>): QueryInspectResponse {
    const message = createBaseQueryInspectResponse();
    message.borrowers = object.borrowers?.map(e => InspectAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInspectResponseAmino): QueryInspectResponse {
    return {
      borrowers: Array.isArray(object?.borrowers) ? object.borrowers.map((e: any) => InspectAccount.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryInspectResponse): QueryInspectResponseAmino {
    const obj: any = {};
    if (message.borrowers) {
      obj.borrowers = message.borrowers.map(e => e ? InspectAccount.toAmino(e) : undefined);
    } else {
      obj.borrowers = [];
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
function createBaseInspectAccount(): InspectAccount {
  return {
    address: "",
    analysis: RiskInfo.fromPartial({}),
    position: DecBalances.fromPartial({})
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
    return writer;
  },
  fromJSON(object: any): InspectAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      analysis: isSet(object.analysis) ? RiskInfo.fromJSON(object.analysis) : undefined,
      position: isSet(object.position) ? DecBalances.fromJSON(object.position) : undefined
    };
  },
  fromPartial(object: Partial<InspectAccount>): InspectAccount {
    const message = createBaseInspectAccount();
    message.address = object.address ?? "";
    message.analysis = object.analysis !== undefined && object.analysis !== null ? RiskInfo.fromPartial(object.analysis) : undefined;
    message.position = object.position !== undefined && object.position !== null ? DecBalances.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: InspectAccountAmino): InspectAccount {
    return {
      address: object.address,
      analysis: object?.analysis ? RiskInfo.fromAmino(object.analysis) : undefined,
      position: object?.position ? DecBalances.fromAmino(object.position) : undefined
    };
  },
  toAmino(message: InspectAccount): InspectAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.analysis = message.analysis ? RiskInfo.toAmino(message.analysis) : undefined;
    obj.position = message.position ? DecBalances.toAmino(message.position) : undefined;
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
    return {
      Borrowed: object.Borrowed,
      Liquidation: object.Liquidation,
      Value: object.Value
    };
  },
  toAmino(message: RiskInfo): RiskInfoAmino {
    const obj: any = {};
    obj.Borrowed = message.Borrowed;
    obj.Liquidation = message.Liquidation;
    obj.Value = message.Value;
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
    return {
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => DecCoin.fromAmino(e)) : [],
      borrowed: Array.isArray(object?.borrowed) ? object.borrowed.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: DecBalances): DecBalancesAmino {
    const obj: any = {};
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.collateral = [];
    }
    if (message.borrowed) {
      obj.borrowed = message.borrowed.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.borrowed = [];
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