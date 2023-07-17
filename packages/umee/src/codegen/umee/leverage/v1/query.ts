import { Params, ParamsSDKType, Token, TokenSDKType } from "./leverage";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt, BadDebtSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
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
export interface QueryLiquidationTargets {}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsSDKType {}
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
export interface QueryBadDebts {}
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
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRegisteredTokens(): QueryRegisteredTokens {
  return {
    baseDenom: ""
  };
}
export const QueryRegisteredTokens = {
  encode(message: QueryRegisteredTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRegisteredTokensResponse(): QueryRegisteredTokensResponse {
  return {
    registry: []
  };
}
export const QueryRegisteredTokensResponse = {
  encode(message: QueryRegisteredTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryMarketSummary(): QueryMarketSummary {
  return {
    denom: ""
  };
}
export const QueryMarketSummary = {
  encode(message: QueryMarketSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryMarketSummaryResponse(): QueryMarketSummaryResponse {
  return {
    symbolDenom: "",
    exponent: 0,
    oraclePrice: undefined,
    uTokenExchangeRate: "",
    supply_APY: "",
    borrow_APY: "",
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
  encode(message: QueryMarketSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbolDenom !== "") {
      writer.uint32(10).string(message.symbolDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    if (message.oraclePrice !== undefined) {
      writer.uint32(26).string(message.oraclePrice);
    }
    if (message.uTokenExchangeRate !== "") {
      writer.uint32(34).string(message.uTokenExchangeRate);
    }
    if (message.supply_APY !== "") {
      writer.uint32(42).string(message.supply_APY);
    }
    if (message.borrow_APY !== "") {
      writer.uint32(50).string(message.borrow_APY);
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
      writer.uint32(154).string(message.oracleHistoricPrice);
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
      supply_APY: isSet(object.supply_APY) ? String(object.supply_APY) : "",
      borrow_APY: isSet(object.borrow_APY) ? String(object.borrow_APY) : "",
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
    message.supply_APY = object.supply_APY ?? "";
    message.borrow_APY = object.borrow_APY ?? "";
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
  }
};
function createBaseQueryAccountBalances(): QueryAccountBalances {
  return {
    address: ""
  };
}
export const QueryAccountBalances = {
  encode(message: QueryAccountBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: QueryAccountBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAccountSummary(): QueryAccountSummary {
  return {
    address: ""
  };
}
export const QueryAccountSummary = {
  encode(message: QueryAccountSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: QueryAccountSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.suppliedValue !== "") {
      writer.uint32(10).string(message.suppliedValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(18).string(message.collateralValue);
    }
    if (message.borrowedValue !== "") {
      writer.uint32(26).string(message.borrowedValue);
    }
    if (message.borrowLimit !== "") {
      writer.uint32(34).string(message.borrowLimit);
    }
    if (message.liquidationThreshold !== undefined) {
      writer.uint32(42).string(message.liquidationThreshold);
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
  }
};
function createBaseQueryLiquidationTargets(): QueryLiquidationTargets {
  return {};
}
export const QueryLiquidationTargets = {
  encode(_: QueryLiquidationTargets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryLiquidationTargets {
    return {};
  },
  fromPartial(_: Partial<QueryLiquidationTargets>): QueryLiquidationTargets {
    const message = createBaseQueryLiquidationTargets();
    return message;
  }
};
function createBaseQueryLiquidationTargetsResponse(): QueryLiquidationTargetsResponse {
  return {
    targets: []
  };
}
export const QueryLiquidationTargetsResponse = {
  encode(message: QueryLiquidationTargetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBadDebts(): QueryBadDebts {
  return {};
}
export const QueryBadDebts = {
  encode(_: QueryBadDebts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBadDebts {
    return {};
  },
  fromPartial(_: Partial<QueryBadDebts>): QueryBadDebts {
    const message = createBaseQueryBadDebts();
    return message;
  }
};
function createBaseQueryBadDebtsResponse(): QueryBadDebtsResponse {
  return {
    targets: []
  };
}
export const QueryBadDebtsResponse = {
  encode(message: QueryBadDebtsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryMaxWithdraw(): QueryMaxWithdraw {
  return {
    address: "",
    denom: ""
  };
}
export const QueryMaxWithdraw = {
  encode(message: QueryMaxWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryMaxWithdrawResponse(): QueryMaxWithdrawResponse {
  return {
    uTokens: [],
    tokens: []
  };
}
export const QueryMaxWithdrawResponse = {
  encode(message: QueryMaxWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryMaxBorrow(): QueryMaxBorrow {
  return {
    address: "",
    denom: ""
  };
}
export const QueryMaxBorrow = {
  encode(message: QueryMaxBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryMaxBorrowResponse(): QueryMaxBorrowResponse {
  return {
    tokens: []
  };
}
export const QueryMaxBorrowResponse = {
  encode(message: QueryMaxBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: QueryInspect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryInspectResponse(): QueryInspectResponse {
  return {
    borrowers: []
  };
}
export const QueryInspectResponse = {
  encode(message: QueryInspectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseInspectAccount(): InspectAccount {
  return {
    address: "",
    analysis: undefined,
    position: undefined
  };
}
export const InspectAccount = {
  encode(message: InspectAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: RiskInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDecBalances(): DecBalances {
  return {
    collateral: [],
    borrowed: []
  };
}
export const DecBalances = {
  encode(message: DecBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};