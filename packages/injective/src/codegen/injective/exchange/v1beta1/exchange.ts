import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64 } from "../../../helpers";
export enum AtomicMarketOrderAccessLevel {
  Nobody = 0,
  /** BeginBlockerSmartContractsOnly - currently unsupported */
  BeginBlockerSmartContractsOnly = 1,
  SmartContractsOnly = 2,
  Everyone = 3,
  UNRECOGNIZED = -1,
}
export const AtomicMarketOrderAccessLevelSDKType = AtomicMarketOrderAccessLevel;
export const AtomicMarketOrderAccessLevelAmino = AtomicMarketOrderAccessLevel;
export function atomicMarketOrderAccessLevelFromJSON(object: any): AtomicMarketOrderAccessLevel {
  switch (object) {
    case 0:
    case "Nobody":
      return AtomicMarketOrderAccessLevel.Nobody;
    case 1:
    case "BeginBlockerSmartContractsOnly":
      return AtomicMarketOrderAccessLevel.BeginBlockerSmartContractsOnly;
    case 2:
    case "SmartContractsOnly":
      return AtomicMarketOrderAccessLevel.SmartContractsOnly;
    case 3:
    case "Everyone":
      return AtomicMarketOrderAccessLevel.Everyone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AtomicMarketOrderAccessLevel.UNRECOGNIZED;
  }
}
export function atomicMarketOrderAccessLevelToJSON(object: AtomicMarketOrderAccessLevel): string {
  switch (object) {
    case AtomicMarketOrderAccessLevel.Nobody:
      return "Nobody";
    case AtomicMarketOrderAccessLevel.BeginBlockerSmartContractsOnly:
      return "BeginBlockerSmartContractsOnly";
    case AtomicMarketOrderAccessLevel.SmartContractsOnly:
      return "SmartContractsOnly";
    case AtomicMarketOrderAccessLevel.Everyone:
      return "Everyone";
    case AtomicMarketOrderAccessLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MarketStatus {
  Unspecified = 0,
  Active = 1,
  Paused = 2,
  Demolished = 3,
  Expired = 4,
  UNRECOGNIZED = -1,
}
export const MarketStatusSDKType = MarketStatus;
export const MarketStatusAmino = MarketStatus;
export function marketStatusFromJSON(object: any): MarketStatus {
  switch (object) {
    case 0:
    case "Unspecified":
      return MarketStatus.Unspecified;
    case 1:
    case "Active":
      return MarketStatus.Active;
    case 2:
    case "Paused":
      return MarketStatus.Paused;
    case 3:
    case "Demolished":
      return MarketStatus.Demolished;
    case 4:
    case "Expired":
      return MarketStatus.Expired;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MarketStatus.UNRECOGNIZED;
  }
}
export function marketStatusToJSON(object: MarketStatus): string {
  switch (object) {
    case MarketStatus.Unspecified:
      return "Unspecified";
    case MarketStatus.Active:
      return "Active";
    case MarketStatus.Paused:
      return "Paused";
    case MarketStatus.Demolished:
      return "Demolished";
    case MarketStatus.Expired:
      return "Expired";
    case MarketStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderType {
  UNSPECIFIED = 0,
  BUY = 1,
  SELL = 2,
  STOP_BUY = 3,
  STOP_SELL = 4,
  TAKE_BUY = 5,
  TAKE_SELL = 6,
  BUY_PO = 7,
  SELL_PO = 8,
  BUY_ATOMIC = 9,
  SELL_ATOMIC = 10,
  UNRECOGNIZED = -1,
}
export const OrderTypeSDKType = OrderType;
export const OrderTypeAmino = OrderType;
export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return OrderType.UNSPECIFIED;
    case 1:
    case "BUY":
      return OrderType.BUY;
    case 2:
    case "SELL":
      return OrderType.SELL;
    case 3:
    case "STOP_BUY":
      return OrderType.STOP_BUY;
    case 4:
    case "STOP_SELL":
      return OrderType.STOP_SELL;
    case 5:
    case "TAKE_BUY":
      return OrderType.TAKE_BUY;
    case 6:
    case "TAKE_SELL":
      return OrderType.TAKE_SELL;
    case 7:
    case "BUY_PO":
      return OrderType.BUY_PO;
    case 8:
    case "SELL_PO":
      return OrderType.SELL_PO;
    case 9:
    case "BUY_ATOMIC":
      return OrderType.BUY_ATOMIC;
    case 10:
    case "SELL_ATOMIC":
      return OrderType.SELL_ATOMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}
export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.UNSPECIFIED:
      return "UNSPECIFIED";
    case OrderType.BUY:
      return "BUY";
    case OrderType.SELL:
      return "SELL";
    case OrderType.STOP_BUY:
      return "STOP_BUY";
    case OrderType.STOP_SELL:
      return "STOP_SELL";
    case OrderType.TAKE_BUY:
      return "TAKE_BUY";
    case OrderType.TAKE_SELL:
      return "TAKE_SELL";
    case OrderType.BUY_PO:
      return "BUY_PO";
    case OrderType.SELL_PO:
      return "SELL_PO";
    case OrderType.BUY_ATOMIC:
      return "BUY_ATOMIC";
    case OrderType.SELL_ATOMIC:
      return "SELL_ATOMIC";
    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ExecutionType {
  UnspecifiedExecutionType = 0,
  Market = 1,
  LimitFill = 2,
  LimitMatchRestingOrder = 3,
  LimitMatchNewOrder = 4,
  MarketLiquidation = 5,
  ExpiryMarketSettlement = 6,
  UNRECOGNIZED = -1,
}
export const ExecutionTypeSDKType = ExecutionType;
export const ExecutionTypeAmino = ExecutionType;
export function executionTypeFromJSON(object: any): ExecutionType {
  switch (object) {
    case 0:
    case "UnspecifiedExecutionType":
      return ExecutionType.UnspecifiedExecutionType;
    case 1:
    case "Market":
      return ExecutionType.Market;
    case 2:
    case "LimitFill":
      return ExecutionType.LimitFill;
    case 3:
    case "LimitMatchRestingOrder":
      return ExecutionType.LimitMatchRestingOrder;
    case 4:
    case "LimitMatchNewOrder":
      return ExecutionType.LimitMatchNewOrder;
    case 5:
    case "MarketLiquidation":
      return ExecutionType.MarketLiquidation;
    case 6:
    case "ExpiryMarketSettlement":
      return ExecutionType.ExpiryMarketSettlement;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionType.UNRECOGNIZED;
  }
}
export function executionTypeToJSON(object: ExecutionType): string {
  switch (object) {
    case ExecutionType.UnspecifiedExecutionType:
      return "UnspecifiedExecutionType";
    case ExecutionType.Market:
      return "Market";
    case ExecutionType.LimitFill:
      return "LimitFill";
    case ExecutionType.LimitMatchRestingOrder:
      return "LimitMatchRestingOrder";
    case ExecutionType.LimitMatchNewOrder:
      return "LimitMatchNewOrder";
    case ExecutionType.MarketLiquidation:
      return "MarketLiquidation";
    case ExecutionType.ExpiryMarketSettlement:
      return "ExpiryMarketSettlement";
    case ExecutionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderMask {
  UNUSED = 0,
  ANY = 1,
  REGULAR = 2,
  CONDITIONAL = 4,
  DIRECTION_BUY_OR_HIGHER = 8,
  DIRECTION_SELL_OR_LOWER = 16,
  TYPE_MARKET = 32,
  TYPE_LIMIT = 64,
  UNRECOGNIZED = -1,
}
export const OrderMaskSDKType = OrderMask;
export const OrderMaskAmino = OrderMask;
export function orderMaskFromJSON(object: any): OrderMask {
  switch (object) {
    case 0:
    case "UNUSED":
      return OrderMask.UNUSED;
    case 1:
    case "ANY":
      return OrderMask.ANY;
    case 2:
    case "REGULAR":
      return OrderMask.REGULAR;
    case 4:
    case "CONDITIONAL":
      return OrderMask.CONDITIONAL;
    case 8:
    case "DIRECTION_BUY_OR_HIGHER":
      return OrderMask.DIRECTION_BUY_OR_HIGHER;
    case 16:
    case "DIRECTION_SELL_OR_LOWER":
      return OrderMask.DIRECTION_SELL_OR_LOWER;
    case 32:
    case "TYPE_MARKET":
      return OrderMask.TYPE_MARKET;
    case 64:
    case "TYPE_LIMIT":
      return OrderMask.TYPE_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderMask.UNRECOGNIZED;
  }
}
export function orderMaskToJSON(object: OrderMask): string {
  switch (object) {
    case OrderMask.UNUSED:
      return "UNUSED";
    case OrderMask.ANY:
      return "ANY";
    case OrderMask.REGULAR:
      return "REGULAR";
    case OrderMask.CONDITIONAL:
      return "CONDITIONAL";
    case OrderMask.DIRECTION_BUY_OR_HIGHER:
      return "DIRECTION_BUY_OR_HIGHER";
    case OrderMask.DIRECTION_SELL_OR_LOWER:
      return "DIRECTION_SELL_OR_LOWER";
    case OrderMask.TYPE_MARKET:
      return "TYPE_MARKET";
    case OrderMask.TYPE_LIMIT:
      return "TYPE_LIMIT";
    case OrderMask.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Params {
  /**
   * spot_market_instant_listing_fee defines the expedited fee in INJ required
   * to create a spot market by bypassing governance
   */
  spotMarketInstantListingFee: Coin;
  /**
   * derivative_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  derivativeMarketInstantListingFee: Coin;
  /**
   * default_spot_maker_fee defines the default exchange trade fee for makers on
   * a spot market
   */
  defaultSpotMakerFeeRate: string;
  /**
   * default_spot_taker_fee_rate defines the default exchange trade fee rate for
   * takers on a new spot market
   */
  defaultSpotTakerFeeRate: string;
  /**
   * default_derivative_maker_fee defines the default exchange trade fee for
   * makers on a new derivative market
   */
  defaultDerivativeMakerFeeRate: string;
  /**
   * default_derivative_taker_fee defines the default exchange trade fee for
   * takers on a new derivative market
   */
  defaultDerivativeTakerFeeRate: string;
  /**
   * default_initial_margin_ratio defines the default initial margin ratio on a
   * new derivative market
   */
  defaultInitialMarginRatio: string;
  /**
   * default_maintenance_margin_ratio defines the default maintenance margin
   * ratio on a new derivative market
   */
  defaultMaintenanceMarginRatio: string;
  /**
   * default_funding_interval defines the default funding interval on a
   * derivative market
   */
  defaultFundingInterval: bigint;
  /**
   * funding_multiple defines the timestamp multiple that the funding timestamp
   * should be a multiple of
   */
  fundingMultiple: bigint;
  /**
   * relayer_fee_share_rate defines the trade fee share percentage that goes to
   * relayers
   */
  relayerFeeShareRate: string;
  /**
   * default_hourly_funding_rate_cap defines the default maximum absolute value
   * of the hourly funding rate
   */
  defaultHourlyFundingRateCap: string;
  /** hourly_interest_rate defines the hourly interest rate */
  defaultHourlyInterestRate: string;
  /**
   * max_derivative_order_side_count defines the maximum number of derivative
   * active orders a subaccount can have for a given orderbook side
   */
  maxDerivativeOrderSideCount: number;
  /**
   * inj_reward_staked_requirement_threshold defines the threshold on INJ
   * rewards after which one also needs staked INJ to receive more
   */
  injRewardStakedRequirementThreshold: string;
  /**
   * the trading_rewards_vesting_duration defines the vesting times for trading
   * rewards
   */
  tradingRewardsVestingDuration: bigint;
  /**
   * liquidator_reward_share_rate defines the ratio of the split of the surplus
   * collateral that goes to the liquidator
   */
  liquidatorRewardShareRate: string;
  /**
   * binary_options_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  binaryOptionsMarketInstantListingFee: Coin;
  /**
   * atomic_market_order_access_level defines the required access permissions
   * for executing atomic market orders
   */
  atomicMarketOrderAccessLevel: AtomicMarketOrderAccessLevel;
  /**
   * spot_atomic_market_order_fee_multiplier defines the default multiplier for
   * executing atomic market orders in spot markets
   */
  spotAtomicMarketOrderFeeMultiplier: string;
  /**
   * derivative_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in derivative markets
   */
  derivativeAtomicMarketOrderFeeMultiplier: string;
  /**
   * binary_options_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in binary markets
   */
  binaryOptionsAtomicMarketOrderFeeMultiplier: string;
  /** minimal_protocol_fee_rate defines the minimal protocol fee rate */
  minimalProtocolFeeRate: string;
  /**
   * is_instant_derivative_market_launch_enabled defines whether instant
   * derivative market launch is enabled
   */
  isInstantDerivativeMarketLaunchEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * spot_market_instant_listing_fee defines the expedited fee in INJ required
   * to create a spot market by bypassing governance
   */
  spot_market_instant_listing_fee?: CoinAmino;
  /**
   * derivative_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  derivative_market_instant_listing_fee?: CoinAmino;
  /**
   * default_spot_maker_fee defines the default exchange trade fee for makers on
   * a spot market
   */
  default_spot_maker_fee_rate: string;
  /**
   * default_spot_taker_fee_rate defines the default exchange trade fee rate for
   * takers on a new spot market
   */
  default_spot_taker_fee_rate: string;
  /**
   * default_derivative_maker_fee defines the default exchange trade fee for
   * makers on a new derivative market
   */
  default_derivative_maker_fee_rate: string;
  /**
   * default_derivative_taker_fee defines the default exchange trade fee for
   * takers on a new derivative market
   */
  default_derivative_taker_fee_rate: string;
  /**
   * default_initial_margin_ratio defines the default initial margin ratio on a
   * new derivative market
   */
  default_initial_margin_ratio: string;
  /**
   * default_maintenance_margin_ratio defines the default maintenance margin
   * ratio on a new derivative market
   */
  default_maintenance_margin_ratio: string;
  /**
   * default_funding_interval defines the default funding interval on a
   * derivative market
   */
  default_funding_interval: string;
  /**
   * funding_multiple defines the timestamp multiple that the funding timestamp
   * should be a multiple of
   */
  funding_multiple: string;
  /**
   * relayer_fee_share_rate defines the trade fee share percentage that goes to
   * relayers
   */
  relayer_fee_share_rate: string;
  /**
   * default_hourly_funding_rate_cap defines the default maximum absolute value
   * of the hourly funding rate
   */
  default_hourly_funding_rate_cap: string;
  /** hourly_interest_rate defines the hourly interest rate */
  default_hourly_interest_rate: string;
  /**
   * max_derivative_order_side_count defines the maximum number of derivative
   * active orders a subaccount can have for a given orderbook side
   */
  max_derivative_order_side_count: number;
  /**
   * inj_reward_staked_requirement_threshold defines the threshold on INJ
   * rewards after which one also needs staked INJ to receive more
   */
  inj_reward_staked_requirement_threshold: string;
  /**
   * the trading_rewards_vesting_duration defines the vesting times for trading
   * rewards
   */
  trading_rewards_vesting_duration: string;
  /**
   * liquidator_reward_share_rate defines the ratio of the split of the surplus
   * collateral that goes to the liquidator
   */
  liquidator_reward_share_rate: string;
  /**
   * binary_options_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  binary_options_market_instant_listing_fee?: CoinAmino;
  /**
   * atomic_market_order_access_level defines the required access permissions
   * for executing atomic market orders
   */
  atomic_market_order_access_level: AtomicMarketOrderAccessLevel;
  /**
   * spot_atomic_market_order_fee_multiplier defines the default multiplier for
   * executing atomic market orders in spot markets
   */
  spot_atomic_market_order_fee_multiplier: string;
  /**
   * derivative_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in derivative markets
   */
  derivative_atomic_market_order_fee_multiplier: string;
  /**
   * binary_options_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in binary markets
   */
  binary_options_atomic_market_order_fee_multiplier: string;
  /** minimal_protocol_fee_rate defines the minimal protocol fee rate */
  minimal_protocol_fee_rate: string;
  /**
   * is_instant_derivative_market_launch_enabled defines whether instant
   * derivative market launch is enabled
   */
  is_instant_derivative_market_launch_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "/injective.exchange.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  spot_market_instant_listing_fee: CoinSDKType;
  derivative_market_instant_listing_fee: CoinSDKType;
  default_spot_maker_fee_rate: string;
  default_spot_taker_fee_rate: string;
  default_derivative_maker_fee_rate: string;
  default_derivative_taker_fee_rate: string;
  default_initial_margin_ratio: string;
  default_maintenance_margin_ratio: string;
  default_funding_interval: bigint;
  funding_multiple: bigint;
  relayer_fee_share_rate: string;
  default_hourly_funding_rate_cap: string;
  default_hourly_interest_rate: string;
  max_derivative_order_side_count: number;
  inj_reward_staked_requirement_threshold: string;
  trading_rewards_vesting_duration: bigint;
  liquidator_reward_share_rate: string;
  binary_options_market_instant_listing_fee: CoinSDKType;
  atomic_market_order_access_level: AtomicMarketOrderAccessLevel;
  spot_atomic_market_order_fee_multiplier: string;
  derivative_atomic_market_order_fee_multiplier: string;
  binary_options_atomic_market_order_fee_multiplier: string;
  minimal_protocol_fee_rate: string;
  is_instant_derivative_market_launch_enabled: boolean;
}
export interface MarketFeeMultiplier {
  marketId: string;
  feeMultiplier: string;
}
export interface MarketFeeMultiplierProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketFeeMultiplier";
  value: Uint8Array;
}
export interface MarketFeeMultiplierAmino {
  market_id: string;
  fee_multiplier: string;
}
export interface MarketFeeMultiplierAminoMsg {
  type: "/injective.exchange.v1beta1.MarketFeeMultiplier";
  value: MarketFeeMultiplierAmino;
}
export interface MarketFeeMultiplierSDKType {
  market_id: string;
  fee_multiplier: string;
}
/** An object describing a derivative market in the Injective Futures Protocol. */
export interface DerivativeMarket {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Oracle type */
  oracleType: OracleType;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Address of the quote currency denomination for the derivative contract */
  quoteDenom: string;
  /** Unique market ID. */
  marketId: string;
  /**
   * initial_margin_ratio defines the initial margin ratio of a derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio of a
   * derivative market
   */
  maintenanceMarginRatio: string;
  /** maker_fee_rate defines the maker fee rate of a derivative market */
  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayerFeeShareRate: string;
  /**
   * true if the market is a perpetual market. false if the market is an expiry
   * futures market
   */
  isPerpetual: boolean;
  /** Status of the market */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
}
export interface DerivativeMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarket";
  value: Uint8Array;
}
/** An object describing a derivative market in the Injective Futures Protocol. */
export interface DerivativeMarketAmino {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Oracle type */
  oracle_type: OracleType;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Address of the quote currency denomination for the derivative contract */
  quote_denom: string;
  /** Unique market ID. */
  market_id: string;
  /**
   * initial_margin_ratio defines the initial margin ratio of a derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio of a
   * derivative market
   */
  maintenance_margin_ratio: string;
  /** maker_fee_rate defines the maker fee rate of a derivative market */
  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayer_fee_share_rate: string;
  /**
   * true if the market is a perpetual market. false if the market is an expiry
   * futures market
   */
  isPerpetual: boolean;
  /** Status of the market */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
}
export interface DerivativeMarketAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarket";
  value: DerivativeMarketAmino;
}
/** An object describing a derivative market in the Injective Futures Protocol. */
export interface DerivativeMarketSDKType {
  ticker: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  quote_denom: string;
  market_id: string;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  isPerpetual: boolean;
  status: MarketStatus;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/** An object describing a binary options market in Injective Protocol. */
export interface BinaryOptionsMarket {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle symbol */
  oracleSymbol: string;
  /** Oracle Provider */
  oracleProvider: string;
  /** Oracle type */
  oracleType: OracleType;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** expiration timestamp */
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
  /** admin of the market */
  admin: string;
  /** Address of the quote currency denomination for the binary options contract */
  quoteDenom: string;
  /** Unique market ID. */
  marketId: string;
  /** maker_fee_rate defines the maker fee rate of a binary options market */
  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayerFeeShareRate: string;
  /** Status of the market */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
  settlementPrice?: string;
}
export interface BinaryOptionsMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket";
  value: Uint8Array;
}
/** An object describing a binary options market in Injective Protocol. */
export interface BinaryOptionsMarketAmino {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle symbol */
  oracle_symbol: string;
  /** Oracle Provider */
  oracle_provider: string;
  /** Oracle type */
  oracle_type: OracleType;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** expiration timestamp */
  expiration_timestamp: string;
  /** expiration timestamp */
  settlement_timestamp: string;
  /** admin of the market */
  admin: string;
  /** Address of the quote currency denomination for the binary options contract */
  quote_denom: string;
  /** Unique market ID. */
  market_id: string;
  /** maker_fee_rate defines the maker fee rate of a binary options market */
  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayer_fee_share_rate: string;
  /** Status of the market */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
  settlement_price: string;
}
export interface BinaryOptionsMarketAminoMsg {
  type: "/injective.exchange.v1beta1.BinaryOptionsMarket";
  value: BinaryOptionsMarketAmino;
}
/** An object describing a binary options market in Injective Protocol. */
export interface BinaryOptionsMarketSDKType {
  ticker: string;
  oracle_symbol: string;
  oracle_provider: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  expiration_timestamp: bigint;
  settlement_timestamp: bigint;
  admin: string;
  quote_denom: string;
  market_id: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  status: MarketStatus;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  settlement_price?: string;
}
export interface ExpiryFuturesMarketInfo {
  /** market ID. */
  marketId: string;
  /**
   * expiration_timestamp defines the expiration time for a time expiry futures
   * market.
   */
  expirationTimestamp: bigint;
  /**
   * expiration_twap_start_timestamp defines the start time of the TWAP
   * calculation window
   */
  twapStartTimestamp: bigint;
  /**
   * expiration_twap_start_price_cumulative defines the cumulative price for the
   * start of the TWAP window
   */
  expirationTwapStartPriceCumulative: string;
  /**
   * settlement_price defines the settlement price for a time expiry futures
   * market.
   */
  settlementPrice: string;
}
export interface ExpiryFuturesMarketInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo";
  value: Uint8Array;
}
export interface ExpiryFuturesMarketInfoAmino {
  /** market ID. */
  market_id: string;
  /**
   * expiration_timestamp defines the expiration time for a time expiry futures
   * market.
   */
  expiration_timestamp: string;
  /**
   * expiration_twap_start_timestamp defines the start time of the TWAP
   * calculation window
   */
  twap_start_timestamp: string;
  /**
   * expiration_twap_start_price_cumulative defines the cumulative price for the
   * start of the TWAP window
   */
  expiration_twap_start_price_cumulative: string;
  /**
   * settlement_price defines the settlement price for a time expiry futures
   * market.
   */
  settlement_price: string;
}
export interface ExpiryFuturesMarketInfoAminoMsg {
  type: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo";
  value: ExpiryFuturesMarketInfoAmino;
}
export interface ExpiryFuturesMarketInfoSDKType {
  market_id: string;
  expiration_timestamp: bigint;
  twap_start_timestamp: bigint;
  expiration_twap_start_price_cumulative: string;
  settlement_price: string;
}
export interface PerpetualMarketInfo {
  /** market ID. */
  marketId: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  hourlyFundingRateCap: string;
  /** hourly_interest_rate defines the hourly interest rate */
  hourlyInterestRate: string;
  /**
   * next_funding_timestamp defines the next funding timestamp in seconds of a
   * perpetual market
   */
  nextFundingTimestamp: bigint;
  /**
   * funding_interval defines the next funding interval in seconds of a
   * perpetual market.
   */
  fundingInterval: bigint;
}
export interface PerpetualMarketInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo";
  value: Uint8Array;
}
export interface PerpetualMarketInfoAmino {
  /** market ID. */
  market_id: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  hourly_funding_rate_cap: string;
  /** hourly_interest_rate defines the hourly interest rate */
  hourly_interest_rate: string;
  /**
   * next_funding_timestamp defines the next funding timestamp in seconds of a
   * perpetual market
   */
  next_funding_timestamp: string;
  /**
   * funding_interval defines the next funding interval in seconds of a
   * perpetual market.
   */
  funding_interval: string;
}
export interface PerpetualMarketInfoAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketInfo";
  value: PerpetualMarketInfoAmino;
}
export interface PerpetualMarketInfoSDKType {
  market_id: string;
  hourly_funding_rate_cap: string;
  hourly_interest_rate: string;
  next_funding_timestamp: bigint;
  funding_interval: bigint;
}
export interface PerpetualMarketFunding {
  /** cumulative_funding defines the cumulative funding of a perpetual market. */
  cumulativeFunding: string;
  /**
   * cumulative_price defines the cumulative price for the current hour up to
   * the last timestamp
   */
  cumulativePrice: string;
  lastTimestamp: bigint;
}
export interface PerpetualMarketFundingProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding";
  value: Uint8Array;
}
export interface PerpetualMarketFundingAmino {
  /** cumulative_funding defines the cumulative funding of a perpetual market. */
  cumulative_funding: string;
  /**
   * cumulative_price defines the cumulative price for the current hour up to
   * the last timestamp
   */
  cumulative_price: string;
  last_timestamp: string;
}
export interface PerpetualMarketFundingAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketFunding";
  value: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketFundingSDKType {
  cumulative_funding: string;
  cumulative_price: string;
  last_timestamp: bigint;
}
export interface DerivativeMarketSettlementInfo {
  /** market ID. */
  marketId: string;
  /** settlement_price defines the settlement price */
  settlementPrice: string;
}
export interface DerivativeMarketSettlementInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo";
  value: Uint8Array;
}
export interface DerivativeMarketSettlementInfoAmino {
  /** market ID. */
  market_id: string;
  /** settlement_price defines the settlement price */
  settlement_price: string;
}
export interface DerivativeMarketSettlementInfoAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo";
  value: DerivativeMarketSettlementInfoAmino;
}
export interface DerivativeMarketSettlementInfoSDKType {
  market_id: string;
  settlement_price: string;
}
export interface NextFundingTimestamp {
  nextTimestamp: bigint;
}
export interface NextFundingTimestampProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp";
  value: Uint8Array;
}
export interface NextFundingTimestampAmino {
  next_timestamp: string;
}
export interface NextFundingTimestampAminoMsg {
  type: "/injective.exchange.v1beta1.NextFundingTimestamp";
  value: NextFundingTimestampAmino;
}
export interface NextFundingTimestampSDKType {
  next_timestamp: bigint;
}
export interface MidPriceAndTOB {
  /** mid price of the market */
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface MidPriceAndTOBProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MidPriceAndTOB";
  value: Uint8Array;
}
export interface MidPriceAndTOBAmino {
  /** mid price of the market */
  mid_price: string;
  /** best buy price of the market */
  best_buy_price: string;
  /** best sell price of the market */
  best_sell_price: string;
}
export interface MidPriceAndTOBAminoMsg {
  type: "/injective.exchange.v1beta1.MidPriceAndTOB";
  value: MidPriceAndTOBAmino;
}
export interface MidPriceAndTOBSDKType {
  mid_price?: string;
  best_buy_price?: string;
  best_sell_price?: string;
}
/** An object describing trade pair of two assets. */
export interface SpotMarket {
  /**
   * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
   * asset.
   */
  ticker: string;
  /** Coin denom used for the base asset */
  baseDenom: string;
  /** Coin used for the quote asset */
  quoteDenom: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */
  makerFeeRate: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayerFeeShareRate: string;
  /** Unique market ID. */
  marketId: string;
  /** Status of the market */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price required
   * for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
}
export interface SpotMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarket";
  value: Uint8Array;
}
/** An object describing trade pair of two assets. */
export interface SpotMarketAmino {
  /**
   * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
   * asset.
   */
  ticker: string;
  /** Coin denom used for the base asset */
  base_denom: string;
  /** Coin used for the quote asset */
  quote_denom: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */
  maker_fee_rate: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayer_fee_share_rate: string;
  /** Unique market ID. */
  market_id: string;
  /** Status of the market */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price required
   * for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
}
export interface SpotMarketAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarket";
  value: SpotMarketAmino;
}
/** An object describing trade pair of two assets. */
export interface SpotMarketSDKType {
  ticker: string;
  base_denom: string;
  quote_denom: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  market_id: string;
  status: MarketStatus;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/** A subaccount's deposit for a given base currency */
export interface Deposit {
  availableBalance: string;
  totalBalance: string;
}
export interface DepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Deposit";
  value: Uint8Array;
}
/** A subaccount's deposit for a given base currency */
export interface DepositAmino {
  available_balance: string;
  total_balance: string;
}
export interface DepositAminoMsg {
  type: "/injective.exchange.v1beta1.Deposit";
  value: DepositAmino;
}
/** A subaccount's deposit for a given base currency */
export interface DepositSDKType {
  available_balance: string;
  total_balance: string;
}
export interface SubaccountTradeNonce {
  nonce: number;
}
export interface SubaccountTradeNonceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce";
  value: Uint8Array;
}
export interface SubaccountTradeNonceAmino {
  nonce: number;
}
export interface SubaccountTradeNonceAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountTradeNonce";
  value: SubaccountTradeNonceAmino;
}
export interface SubaccountTradeNonceSDKType {
  nonce: number;
}
export interface OrderInfo {
  /** bytes32 subaccount ID that created the order */
  subaccountId: string;
  /** address fee_recipient address that will receive fees for the order */
  feeRecipient: string;
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
}
export interface OrderInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OrderInfo";
  value: Uint8Array;
}
export interface OrderInfoAmino {
  /** bytes32 subaccount ID that created the order */
  subaccount_id: string;
  /** address fee_recipient address that will receive fees for the order */
  fee_recipient: string;
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
}
export interface OrderInfoAminoMsg {
  type: "/injective.exchange.v1beta1.OrderInfo";
  value: OrderInfoAmino;
}
export interface OrderInfoSDKType {
  subaccount_id: string;
  fee_recipient: string;
  price: string;
  quantity: string;
}
export interface SpotOrder {
  /** market_id represents the unique ID of the market */
  marketId: string;
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice?: string;
}
export interface SpotOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotOrder";
  value: Uint8Array;
}
export interface SpotOrderAmino {
  /** market_id represents the unique ID of the market */
  market_id: string;
  /** order_info contains the information of the order */
  order_info?: OrderInfoAmino;
  /** order types */
  order_type: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */
  trigger_price: string;
}
export interface SpotOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SpotOrder";
  value: SpotOrderAmino;
}
export interface SpotOrderSDKType {
  market_id: string;
  order_info: OrderInfoSDKType;
  order_type: OrderType;
  trigger_price?: string;
}
/** A valid Spot limit order with Metadata. */
export interface SpotLimitOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice?: string;
  orderHash: Uint8Array;
}
export interface SpotLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder";
  value: Uint8Array;
}
/** A valid Spot limit order with Metadata. */
export interface SpotLimitOrderAmino {
  /** order_info contains the information of the order */
  order_info?: OrderInfoAmino;
  /** order types */
  order_type: OrderType;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */
  trigger_price: string;
  order_hash: Uint8Array;
}
export interface SpotLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SpotLimitOrder";
  value: SpotLimitOrderAmino;
}
/** A valid Spot limit order with Metadata. */
export interface SpotLimitOrderSDKType {
  order_info: OrderInfoSDKType;
  order_type: OrderType;
  fillable: string;
  trigger_price?: string;
  order_hash: Uint8Array;
}
/** A valid Spot market order with Metadata. */
export interface SpotMarketOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  balanceHold: string;
  orderHash: Uint8Array;
  /** order types */
  orderType: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice?: string;
}
export interface SpotMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder";
  value: Uint8Array;
}
/** A valid Spot market order with Metadata. */
export interface SpotMarketOrderAmino {
  /** order_info contains the information of the order */
  order_info?: OrderInfoAmino;
  balance_hold: string;
  order_hash: Uint8Array;
  /** order types */
  order_type: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */
  trigger_price: string;
}
export interface SpotMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarketOrder";
  value: SpotMarketOrderAmino;
}
/** A valid Spot market order with Metadata. */
export interface SpotMarketOrderSDKType {
  order_info: OrderInfoSDKType;
  balance_hold: string;
  order_hash: Uint8Array;
  order_type: OrderType;
  trigger_price?: string;
}
export interface DerivativeOrder {
  /** market_id represents the unique ID of the market */
  marketId: string;
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** margin is the margin used by the limit order */
  margin: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice?: string;
}
export interface DerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrder";
  value: Uint8Array;
}
export interface DerivativeOrderAmino {
  /** market_id represents the unique ID of the market */
  market_id: string;
  /** order_info contains the information of the order */
  order_info?: OrderInfoAmino;
  /** order types */
  order_type: OrderType;
  /** margin is the margin used by the limit order */
  margin: string;
  /** trigger_price is the trigger price used by stop/take orders */
  trigger_price: string;
}
export interface DerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeOrder";
  value: DerivativeOrderAmino;
}
export interface DerivativeOrderSDKType {
  market_id: string;
  order_info: OrderInfoSDKType;
  order_type: OrderType;
  margin: string;
  trigger_price?: string;
}
export interface SubaccountOrderbookMetadata {
  vanillaLimitOrderCount: number;
  reduceOnlyLimitOrderCount: number;
  /**
   * AggregateReduceOnlyQuantity is the aggregate fillable quantity of the
   * subaccount's reduce-only limit orders in the given direction.
   */
  aggregateReduceOnlyQuantity: string;
  /**
   * AggregateVanillaQuantity is the aggregate fillable quantity of the
   * subaccount's vanilla limit orders in the given direction.
   */
  aggregateVanillaQuantity: string;
  vanillaConditionalOrderCount: number;
  reduceOnlyConditionalOrderCount: number;
}
export interface SubaccountOrderbookMetadataProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata";
  value: Uint8Array;
}
export interface SubaccountOrderbookMetadataAmino {
  vanilla_limit_order_count: number;
  reduce_only_limit_order_count: number;
  /**
   * AggregateReduceOnlyQuantity is the aggregate fillable quantity of the
   * subaccount's reduce-only limit orders in the given direction.
   */
  aggregate_reduce_only_quantity: string;
  /**
   * AggregateVanillaQuantity is the aggregate fillable quantity of the
   * subaccount's vanilla limit orders in the given direction.
   */
  aggregate_vanilla_quantity: string;
  vanilla_conditional_order_count: number;
  reduce_only_conditional_order_count: number;
}
export interface SubaccountOrderbookMetadataAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata";
  value: SubaccountOrderbookMetadataAmino;
}
export interface SubaccountOrderbookMetadataSDKType {
  vanilla_limit_order_count: number;
  reduce_only_limit_order_count: number;
  aggregate_reduce_only_quantity: string;
  aggregate_vanilla_quantity: string;
  vanilla_conditional_order_count: number;
  reduce_only_conditional_order_count: number;
}
export interface SubaccountOrder {
  /** price of the order */
  price: string;
  /** the amount of the quantity remaining fillable */
  quantity: string;
  isReduceOnly: boolean;
}
export interface SubaccountOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrder";
  value: Uint8Array;
}
export interface SubaccountOrderAmino {
  /** price of the order */
  price: string;
  /** the amount of the quantity remaining fillable */
  quantity: string;
  isReduceOnly: boolean;
}
export interface SubaccountOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrder";
  value: SubaccountOrderAmino;
}
export interface SubaccountOrderSDKType {
  price: string;
  quantity: string;
  isReduceOnly: boolean;
}
export interface SubaccountOrderData {
  order: SubaccountOrder;
  orderHash: Uint8Array;
}
export interface SubaccountOrderDataProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData";
  value: Uint8Array;
}
export interface SubaccountOrderDataAmino {
  order?: SubaccountOrderAmino;
  order_hash: Uint8Array;
}
export interface SubaccountOrderDataAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderData";
  value: SubaccountOrderDataAmino;
}
export interface SubaccountOrderDataSDKType {
  order: SubaccountOrderSDKType;
  order_hash: Uint8Array;
}
/** A valid Derivative limit order with Metadata. */
export interface DerivativeLimitOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** margin is the margin used by the limit order */
  margin: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice?: string;
  orderHash: Uint8Array;
}
export interface DerivativeLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder";
  value: Uint8Array;
}
/** A valid Derivative limit order with Metadata. */
export interface DerivativeLimitOrderAmino {
  /** order_info contains the information of the order */
  order_info?: OrderInfoAmino;
  /** order types */
  order_type: OrderType;
  /** margin is the margin used by the limit order */
  margin: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */
  trigger_price: string;
  order_hash: Uint8Array;
}
export interface DerivativeLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeLimitOrder";
  value: DerivativeLimitOrderAmino;
}
/** A valid Derivative limit order with Metadata. */
export interface DerivativeLimitOrderSDKType {
  order_info: OrderInfoSDKType;
  order_type: OrderType;
  margin: string;
  fillable: string;
  trigger_price?: string;
  order_hash: Uint8Array;
}
/** A valid Derivative market order with Metadata. */
export interface DerivativeMarketOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */
  orderType: OrderType;
  margin: string;
  marginHold: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice?: string;
  orderHash: Uint8Array;
}
export interface DerivativeMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder";
  value: Uint8Array;
}
/** A valid Derivative market order with Metadata. */
export interface DerivativeMarketOrderAmino {
  /** order_info contains the information of the order */
  order_info?: OrderInfoAmino;
  /** order types */
  order_type: OrderType;
  margin: string;
  margin_hold: string;
  /** trigger_price is the trigger price used by stop/take orders */
  trigger_price: string;
  order_hash: Uint8Array;
}
export interface DerivativeMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketOrder";
  value: DerivativeMarketOrderAmino;
}
/** A valid Derivative market order with Metadata. */
export interface DerivativeMarketOrderSDKType {
  order_info: OrderInfoSDKType;
  order_type: OrderType;
  margin: string;
  margin_hold: string;
  trigger_price?: string;
  order_hash: Uint8Array;
}
export interface Position {
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  margin: string;
  cumulativeFundingEntry: string;
}
export interface PositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Position";
  value: Uint8Array;
}
export interface PositionAmino {
  isLong: boolean;
  quantity: string;
  entry_price: string;
  margin: string;
  cumulative_funding_entry: string;
}
export interface PositionAminoMsg {
  type: "/injective.exchange.v1beta1.Position";
  value: PositionAmino;
}
export interface PositionSDKType {
  isLong: boolean;
  quantity: string;
  entry_price: string;
  margin: string;
  cumulative_funding_entry: string;
}
export interface MarketOrderIndicator {
  /** market_id represents the unique ID of the market */
  marketId: string;
  isBuy: boolean;
}
export interface MarketOrderIndicatorProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator";
  value: Uint8Array;
}
export interface MarketOrderIndicatorAmino {
  /** market_id represents the unique ID of the market */
  market_id: string;
  isBuy: boolean;
}
export interface MarketOrderIndicatorAminoMsg {
  type: "/injective.exchange.v1beta1.MarketOrderIndicator";
  value: MarketOrderIndicatorAmino;
}
export interface MarketOrderIndicatorSDKType {
  market_id: string;
  isBuy: boolean;
}
export interface TradeLog {
  quantity: string;
  price: string;
  /** bytes32 subaccount ID that executed the trade */
  subaccountId: Uint8Array;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: Uint8Array;
}
export interface TradeLogProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeLog";
  value: Uint8Array;
}
export interface TradeLogAmino {
  quantity: string;
  price: string;
  /** bytes32 subaccount ID that executed the trade */
  subaccount_id: Uint8Array;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address: Uint8Array;
}
export interface TradeLogAminoMsg {
  type: "/injective.exchange.v1beta1.TradeLog";
  value: TradeLogAmino;
}
export interface TradeLogSDKType {
  quantity: string;
  price: string;
  subaccount_id: Uint8Array;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address?: Uint8Array;
}
export interface PositionDelta {
  isLong: boolean;
  executionQuantity: string;
  executionMargin: string;
  executionPrice: string;
}
export interface PositionDeltaProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PositionDelta";
  value: Uint8Array;
}
export interface PositionDeltaAmino {
  is_long: boolean;
  execution_quantity: string;
  execution_margin: string;
  execution_price: string;
}
export interface PositionDeltaAminoMsg {
  type: "/injective.exchange.v1beta1.PositionDelta";
  value: PositionDeltaAmino;
}
export interface PositionDeltaSDKType {
  is_long: boolean;
  execution_quantity: string;
  execution_margin: string;
  execution_price: string;
}
export interface DerivativeTradeLog {
  subaccountId: Uint8Array;
  positionDelta: PositionDelta;
  payout: string;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: Uint8Array;
}
export interface DerivativeTradeLogProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog";
  value: Uint8Array;
}
export interface DerivativeTradeLogAmino {
  subaccount_id: Uint8Array;
  position_delta?: PositionDeltaAmino;
  payout: string;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address: Uint8Array;
}
export interface DerivativeTradeLogAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeTradeLog";
  value: DerivativeTradeLogAmino;
}
export interface DerivativeTradeLogSDKType {
  subaccount_id: Uint8Array;
  position_delta: PositionDeltaSDKType;
  payout: string;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address?: Uint8Array;
}
export interface SubaccountPosition {
  position: Position;
  subaccountId: Uint8Array;
}
export interface SubaccountPositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountPosition";
  value: Uint8Array;
}
export interface SubaccountPositionAmino {
  position?: PositionAmino;
  subaccount_id: Uint8Array;
}
export interface SubaccountPositionAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountPosition";
  value: SubaccountPositionAmino;
}
export interface SubaccountPositionSDKType {
  position: PositionSDKType;
  subaccount_id: Uint8Array;
}
export interface SubaccountDeposit {
  subaccountId: Uint8Array;
  deposit: Deposit;
}
export interface SubaccountDepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit";
  value: Uint8Array;
}
export interface SubaccountDepositAmino {
  subaccount_id: Uint8Array;
  deposit?: DepositAmino;
}
export interface SubaccountDepositAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountDeposit";
  value: SubaccountDepositAmino;
}
export interface SubaccountDepositSDKType {
  subaccount_id: Uint8Array;
  deposit: DepositSDKType;
}
export interface DepositUpdate {
  denom: string;
  deposits: SubaccountDeposit[];
}
export interface DepositUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DepositUpdate";
  value: Uint8Array;
}
export interface DepositUpdateAmino {
  denom: string;
  deposits: SubaccountDepositAmino[];
}
export interface DepositUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.DepositUpdate";
  value: DepositUpdateAmino;
}
export interface DepositUpdateSDKType {
  denom: string;
  deposits: SubaccountDepositSDKType[];
}
export interface PointsMultiplier {
  makerPointsMultiplier: string;
  takerPointsMultiplier: string;
}
export interface PointsMultiplierProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PointsMultiplier";
  value: Uint8Array;
}
export interface PointsMultiplierAmino {
  maker_points_multiplier: string;
  taker_points_multiplier: string;
}
export interface PointsMultiplierAminoMsg {
  type: "/injective.exchange.v1beta1.PointsMultiplier";
  value: PointsMultiplierAmino;
}
export interface PointsMultiplierSDKType {
  maker_points_multiplier: string;
  taker_points_multiplier: string;
}
export interface TradingRewardCampaignBoostInfo {
  boostedSpotMarketIds: string[];
  spotMarketMultipliers: PointsMultiplier[];
  boostedDerivativeMarketIds: string[];
  derivativeMarketMultipliers: PointsMultiplier[];
}
export interface TradingRewardCampaignBoostInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo";
  value: Uint8Array;
}
export interface TradingRewardCampaignBoostInfoAmino {
  boosted_spot_market_ids: string[];
  spot_market_multipliers: PointsMultiplierAmino[];
  boosted_derivative_market_ids: string[];
  derivative_market_multipliers: PointsMultiplierAmino[];
}
export interface TradingRewardCampaignBoostInfoAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo";
  value: TradingRewardCampaignBoostInfoAmino;
}
export interface TradingRewardCampaignBoostInfoSDKType {
  boosted_spot_market_ids: string[];
  spot_market_multipliers: PointsMultiplierSDKType[];
  boosted_derivative_market_ids: string[];
  derivative_market_multipliers: PointsMultiplierSDKType[];
}
export interface CampaignRewardPool {
  startTimestamp: bigint;
  /**
   * max_campaign_rewards are the maximum reward amounts to be disbursed at the
   * end of the campaign
   */
  maxCampaignRewards: Coin[];
}
export interface CampaignRewardPoolProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool";
  value: Uint8Array;
}
export interface CampaignRewardPoolAmino {
  start_timestamp: string;
  /**
   * max_campaign_rewards are the maximum reward amounts to be disbursed at the
   * end of the campaign
   */
  max_campaign_rewards: CoinAmino[];
}
export interface CampaignRewardPoolAminoMsg {
  type: "/injective.exchange.v1beta1.CampaignRewardPool";
  value: CampaignRewardPoolAmino;
}
export interface CampaignRewardPoolSDKType {
  start_timestamp: bigint;
  max_campaign_rewards: CoinSDKType[];
}
export interface TradingRewardCampaignInfo {
  /** number of seconds of the duration of each campaign */
  campaignDurationSeconds: bigint;
  /** the trading fee quote denoms which will be counted for the rewards */
  quoteDenoms: string[];
  /** the optional boost info for markets */
  tradingRewardBoostInfo: TradingRewardCampaignBoostInfo;
  /** the marketIDs which are disqualified from being rewarded */
  disqualifiedMarketIds: string[];
}
export interface TradingRewardCampaignInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo";
  value: Uint8Array;
}
export interface TradingRewardCampaignInfoAmino {
  /** number of seconds of the duration of each campaign */
  campaign_duration_seconds: string;
  /** the trading fee quote denoms which will be counted for the rewards */
  quote_denoms: string[];
  /** the optional boost info for markets */
  trading_reward_boost_info?: TradingRewardCampaignBoostInfoAmino;
  /** the marketIDs which are disqualified from being rewarded */
  disqualified_market_ids: string[];
}
export interface TradingRewardCampaignInfoAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignInfo";
  value: TradingRewardCampaignInfoAmino;
}
export interface TradingRewardCampaignInfoSDKType {
  campaign_duration_seconds: bigint;
  quote_denoms: string[];
  trading_reward_boost_info: TradingRewardCampaignBoostInfoSDKType;
  disqualified_market_ids: string[];
}
export interface FeeDiscountTierInfo {
  makerDiscountRate: string;
  takerDiscountRate: string;
  stakedAmount: string;
  volume: string;
}
export interface FeeDiscountTierInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo";
  value: Uint8Array;
}
export interface FeeDiscountTierInfoAmino {
  maker_discount_rate: string;
  taker_discount_rate: string;
  staked_amount: string;
  volume: string;
}
export interface FeeDiscountTierInfoAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountTierInfo";
  value: FeeDiscountTierInfoAmino;
}
export interface FeeDiscountTierInfoSDKType {
  maker_discount_rate: string;
  taker_discount_rate: string;
  staked_amount: string;
  volume: string;
}
export interface FeeDiscountSchedule {
  bucketCount: bigint;
  bucketDuration: bigint;
  /**
   * the trading fee quote denoms which will be counted for the fee paid
   * contribution
   */
  quoteDenoms: string[];
  /** the fee discount tiers */
  tierInfos: FeeDiscountTierInfo[];
  /**
   * the marketIDs which are disqualified from contributing to the fee paid
   * amount
   */
  disqualifiedMarketIds: string[];
}
export interface FeeDiscountScheduleProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule";
  value: Uint8Array;
}
export interface FeeDiscountScheduleAmino {
  bucket_count: string;
  bucket_duration: string;
  /**
   * the trading fee quote denoms which will be counted for the fee paid
   * contribution
   */
  quote_denoms: string[];
  /** the fee discount tiers */
  tier_infos: FeeDiscountTierInfoAmino[];
  /**
   * the marketIDs which are disqualified from contributing to the fee paid
   * amount
   */
  disqualified_market_ids: string[];
}
export interface FeeDiscountScheduleAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountSchedule";
  value: FeeDiscountScheduleAmino;
}
export interface FeeDiscountScheduleSDKType {
  bucket_count: bigint;
  bucket_duration: bigint;
  quote_denoms: string[];
  tier_infos: FeeDiscountTierInfoSDKType[];
  disqualified_market_ids: string[];
}
export interface FeeDiscountTierTTL {
  tier: bigint;
  ttlTimestamp: bigint;
}
export interface FeeDiscountTierTTLProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL";
  value: Uint8Array;
}
export interface FeeDiscountTierTTLAmino {
  tier: string;
  ttl_timestamp: string;
}
export interface FeeDiscountTierTTLAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountTierTTL";
  value: FeeDiscountTierTTLAmino;
}
export interface FeeDiscountTierTTLSDKType {
  tier: bigint;
  ttl_timestamp: bigint;
}
export interface VolumeRecord {
  makerVolume: string;
  takerVolume: string;
}
export interface VolumeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.VolumeRecord";
  value: Uint8Array;
}
export interface VolumeRecordAmino {
  maker_volume: string;
  taker_volume: string;
}
export interface VolumeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.VolumeRecord";
  value: VolumeRecordAmino;
}
export interface VolumeRecordSDKType {
  maker_volume: string;
  taker_volume: string;
}
export interface AccountRewards {
  account: string;
  rewards: Coin[];
}
export interface AccountRewardsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AccountRewards";
  value: Uint8Array;
}
export interface AccountRewardsAmino {
  account: string;
  rewards: CoinAmino[];
}
export interface AccountRewardsAminoMsg {
  type: "/injective.exchange.v1beta1.AccountRewards";
  value: AccountRewardsAmino;
}
export interface AccountRewardsSDKType {
  account: string;
  rewards: CoinSDKType[];
}
export interface TradeRecords {
  marketId: string;
  latestTradeRecords: TradeRecord[];
}
export interface TradeRecordsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeRecords";
  value: Uint8Array;
}
export interface TradeRecordsAmino {
  market_id: string;
  latest_trade_records: TradeRecordAmino[];
}
export interface TradeRecordsAminoMsg {
  type: "/injective.exchange.v1beta1.TradeRecords";
  value: TradeRecordsAmino;
}
export interface TradeRecordsSDKType {
  market_id: string;
  latest_trade_records: TradeRecordSDKType[];
}
export interface SubaccountIDs {
  subaccountIds: Uint8Array[];
}
export interface SubaccountIDsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountIDs";
  value: Uint8Array;
}
export interface SubaccountIDsAmino {
  subaccount_ids: Uint8Array[];
}
export interface SubaccountIDsAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountIDs";
  value: SubaccountIDsAmino;
}
export interface SubaccountIDsSDKType {
  subaccount_ids: Uint8Array[];
}
export interface TradeRecord {
  timestamp: bigint;
  price: string;
  quantity: string;
}
export interface TradeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeRecord";
  value: Uint8Array;
}
export interface TradeRecordAmino {
  timestamp: string;
  price: string;
  quantity: string;
}
export interface TradeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.TradeRecord";
  value: TradeRecordAmino;
}
export interface TradeRecordSDKType {
  timestamp: bigint;
  price: string;
  quantity: string;
}
export interface Level {
  /** price */
  p: string;
  /** quantity */
  q: string;
}
export interface LevelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Level";
  value: Uint8Array;
}
export interface LevelAmino {
  /** price */
  p: string;
  /** quantity */
  q: string;
}
export interface LevelAminoMsg {
  type: "/injective.exchange.v1beta1.Level";
  value: LevelAmino;
}
export interface LevelSDKType {
  p: string;
  q: string;
}
export interface AggregateSubaccountVolumeRecord {
  subaccountId: string;
  marketVolumes: MarketVolume[];
}
export interface AggregateSubaccountVolumeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord";
  value: Uint8Array;
}
export interface AggregateSubaccountVolumeRecordAmino {
  subaccount_id: string;
  market_volumes: MarketVolumeAmino[];
}
export interface AggregateSubaccountVolumeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord";
  value: AggregateSubaccountVolumeRecordAmino;
}
export interface AggregateSubaccountVolumeRecordSDKType {
  subaccount_id: string;
  market_volumes: MarketVolumeSDKType[];
}
export interface AggregateAccountVolumeRecord {
  account: string;
  marketVolumes: MarketVolume[];
}
export interface AggregateAccountVolumeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord";
  value: Uint8Array;
}
export interface AggregateAccountVolumeRecordAmino {
  account: string;
  market_volumes: MarketVolumeAmino[];
}
export interface AggregateAccountVolumeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord";
  value: AggregateAccountVolumeRecordAmino;
}
export interface AggregateAccountVolumeRecordSDKType {
  account: string;
  market_volumes: MarketVolumeSDKType[];
}
export interface MarketVolume {
  marketId: string;
  volume: VolumeRecord;
}
export interface MarketVolumeProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketVolume";
  value: Uint8Array;
}
export interface MarketVolumeAmino {
  market_id: string;
  volume?: VolumeRecordAmino;
}
export interface MarketVolumeAminoMsg {
  type: "/injective.exchange.v1beta1.MarketVolume";
  value: MarketVolumeAmino;
}
export interface MarketVolumeSDKType {
  market_id: string;
  volume: VolumeRecordSDKType;
}
export interface DenomDecimals {
  denom: string;
  decimals: bigint;
}
export interface DenomDecimalsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DenomDecimals";
  value: Uint8Array;
}
export interface DenomDecimalsAmino {
  denom: string;
  decimals: string;
}
export interface DenomDecimalsAminoMsg {
  type: "/injective.exchange.v1beta1.DenomDecimals";
  value: DenomDecimalsAmino;
}
export interface DenomDecimalsSDKType {
  denom: string;
  decimals: bigint;
}
function createBaseParams(): Params {
  return {
    spotMarketInstantListingFee: Coin.fromPartial({}),
    derivativeMarketInstantListingFee: Coin.fromPartial({}),
    defaultSpotMakerFeeRate: "",
    defaultSpotTakerFeeRate: "",
    defaultDerivativeMakerFeeRate: "",
    defaultDerivativeTakerFeeRate: "",
    defaultInitialMarginRatio: "",
    defaultMaintenanceMarginRatio: "",
    defaultFundingInterval: BigInt(0),
    fundingMultiple: BigInt(0),
    relayerFeeShareRate: "",
    defaultHourlyFundingRateCap: "",
    defaultHourlyInterestRate: "",
    maxDerivativeOrderSideCount: 0,
    injRewardStakedRequirementThreshold: "",
    tradingRewardsVestingDuration: BigInt(0),
    liquidatorRewardShareRate: "",
    binaryOptionsMarketInstantListingFee: Coin.fromPartial({}),
    atomicMarketOrderAccessLevel: 0,
    spotAtomicMarketOrderFeeMultiplier: "",
    derivativeAtomicMarketOrderFeeMultiplier: "",
    binaryOptionsAtomicMarketOrderFeeMultiplier: "",
    minimalProtocolFeeRate: "",
    isInstantDerivativeMarketLaunchEnabled: false
  };
}
export const Params = {
  typeUrl: "/injective.exchange.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotMarketInstantListingFee !== undefined) {
      Coin.encode(message.spotMarketInstantListingFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.derivativeMarketInstantListingFee !== undefined) {
      Coin.encode(message.derivativeMarketInstantListingFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultSpotMakerFeeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.defaultSpotMakerFeeRate, 18).atomics);
    }
    if (message.defaultSpotTakerFeeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.defaultSpotTakerFeeRate, 18).atomics);
    }
    if (message.defaultDerivativeMakerFeeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.defaultDerivativeMakerFeeRate, 18).atomics);
    }
    if (message.defaultDerivativeTakerFeeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.defaultDerivativeTakerFeeRate, 18).atomics);
    }
    if (message.defaultInitialMarginRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.defaultInitialMarginRatio, 18).atomics);
    }
    if (message.defaultMaintenanceMarginRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.defaultMaintenanceMarginRatio, 18).atomics);
    }
    if (message.defaultFundingInterval !== BigInt(0)) {
      writer.uint32(72).int64(message.defaultFundingInterval);
    }
    if (message.fundingMultiple !== BigInt(0)) {
      writer.uint32(80).int64(message.fundingMultiple);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.defaultHourlyFundingRateCap !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.defaultHourlyFundingRateCap, 18).atomics);
    }
    if (message.defaultHourlyInterestRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.defaultHourlyInterestRate, 18).atomics);
    }
    if (message.maxDerivativeOrderSideCount !== 0) {
      writer.uint32(112).uint32(message.maxDerivativeOrderSideCount);
    }
    if (message.injRewardStakedRequirementThreshold !== "") {
      writer.uint32(122).string(message.injRewardStakedRequirementThreshold);
    }
    if (message.tradingRewardsVestingDuration !== BigInt(0)) {
      writer.uint32(128).int64(message.tradingRewardsVestingDuration);
    }
    if (message.liquidatorRewardShareRate !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.liquidatorRewardShareRate, 18).atomics);
    }
    if (message.binaryOptionsMarketInstantListingFee !== undefined) {
      Coin.encode(message.binaryOptionsMarketInstantListingFee, writer.uint32(146).fork()).ldelim();
    }
    if (message.atomicMarketOrderAccessLevel !== 0) {
      writer.uint32(152).int32(message.atomicMarketOrderAccessLevel);
    }
    if (message.spotAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.spotAtomicMarketOrderFeeMultiplier, 18).atomics);
    }
    if (message.derivativeAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.derivativeAtomicMarketOrderFeeMultiplier, 18).atomics);
    }
    if (message.binaryOptionsAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(178).string(Decimal.fromUserInput(message.binaryOptionsAtomicMarketOrderFeeMultiplier, 18).atomics);
    }
    if (message.minimalProtocolFeeRate !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.minimalProtocolFeeRate, 18).atomics);
    }
    if (message.isInstantDerivativeMarketLaunchEnabled === true) {
      writer.uint32(192).bool(message.isInstantDerivativeMarketLaunchEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      spotMarketInstantListingFee: isSet(object.spotMarketInstantListingFee) ? Coin.fromJSON(object.spotMarketInstantListingFee) : undefined,
      derivativeMarketInstantListingFee: isSet(object.derivativeMarketInstantListingFee) ? Coin.fromJSON(object.derivativeMarketInstantListingFee) : undefined,
      defaultSpotMakerFeeRate: isSet(object.defaultSpotMakerFeeRate) ? String(object.defaultSpotMakerFeeRate) : "",
      defaultSpotTakerFeeRate: isSet(object.defaultSpotTakerFeeRate) ? String(object.defaultSpotTakerFeeRate) : "",
      defaultDerivativeMakerFeeRate: isSet(object.defaultDerivativeMakerFeeRate) ? String(object.defaultDerivativeMakerFeeRate) : "",
      defaultDerivativeTakerFeeRate: isSet(object.defaultDerivativeTakerFeeRate) ? String(object.defaultDerivativeTakerFeeRate) : "",
      defaultInitialMarginRatio: isSet(object.defaultInitialMarginRatio) ? String(object.defaultInitialMarginRatio) : "",
      defaultMaintenanceMarginRatio: isSet(object.defaultMaintenanceMarginRatio) ? String(object.defaultMaintenanceMarginRatio) : "",
      defaultFundingInterval: isSet(object.defaultFundingInterval) ? BigInt(object.defaultFundingInterval.toString()) : BigInt(0),
      fundingMultiple: isSet(object.fundingMultiple) ? BigInt(object.fundingMultiple.toString()) : BigInt(0),
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      defaultHourlyFundingRateCap: isSet(object.defaultHourlyFundingRateCap) ? String(object.defaultHourlyFundingRateCap) : "",
      defaultHourlyInterestRate: isSet(object.defaultHourlyInterestRate) ? String(object.defaultHourlyInterestRate) : "",
      maxDerivativeOrderSideCount: isSet(object.maxDerivativeOrderSideCount) ? Number(object.maxDerivativeOrderSideCount) : 0,
      injRewardStakedRequirementThreshold: isSet(object.injRewardStakedRequirementThreshold) ? String(object.injRewardStakedRequirementThreshold) : "",
      tradingRewardsVestingDuration: isSet(object.tradingRewardsVestingDuration) ? BigInt(object.tradingRewardsVestingDuration.toString()) : BigInt(0),
      liquidatorRewardShareRate: isSet(object.liquidatorRewardShareRate) ? String(object.liquidatorRewardShareRate) : "",
      binaryOptionsMarketInstantListingFee: isSet(object.binaryOptionsMarketInstantListingFee) ? Coin.fromJSON(object.binaryOptionsMarketInstantListingFee) : undefined,
      atomicMarketOrderAccessLevel: isSet(object.atomicMarketOrderAccessLevel) ? atomicMarketOrderAccessLevelFromJSON(object.atomicMarketOrderAccessLevel) : -1,
      spotAtomicMarketOrderFeeMultiplier: isSet(object.spotAtomicMarketOrderFeeMultiplier) ? String(object.spotAtomicMarketOrderFeeMultiplier) : "",
      derivativeAtomicMarketOrderFeeMultiplier: isSet(object.derivativeAtomicMarketOrderFeeMultiplier) ? String(object.derivativeAtomicMarketOrderFeeMultiplier) : "",
      binaryOptionsAtomicMarketOrderFeeMultiplier: isSet(object.binaryOptionsAtomicMarketOrderFeeMultiplier) ? String(object.binaryOptionsAtomicMarketOrderFeeMultiplier) : "",
      minimalProtocolFeeRate: isSet(object.minimalProtocolFeeRate) ? String(object.minimalProtocolFeeRate) : "",
      isInstantDerivativeMarketLaunchEnabled: isSet(object.isInstantDerivativeMarketLaunchEnabled) ? Boolean(object.isInstantDerivativeMarketLaunchEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.spotMarketInstantListingFee = object.spotMarketInstantListingFee !== undefined && object.spotMarketInstantListingFee !== null ? Coin.fromPartial(object.spotMarketInstantListingFee) : undefined;
    message.derivativeMarketInstantListingFee = object.derivativeMarketInstantListingFee !== undefined && object.derivativeMarketInstantListingFee !== null ? Coin.fromPartial(object.derivativeMarketInstantListingFee) : undefined;
    message.defaultSpotMakerFeeRate = object.defaultSpotMakerFeeRate ?? "";
    message.defaultSpotTakerFeeRate = object.defaultSpotTakerFeeRate ?? "";
    message.defaultDerivativeMakerFeeRate = object.defaultDerivativeMakerFeeRate ?? "";
    message.defaultDerivativeTakerFeeRate = object.defaultDerivativeTakerFeeRate ?? "";
    message.defaultInitialMarginRatio = object.defaultInitialMarginRatio ?? "";
    message.defaultMaintenanceMarginRatio = object.defaultMaintenanceMarginRatio ?? "";
    message.defaultFundingInterval = object.defaultFundingInterval !== undefined && object.defaultFundingInterval !== null ? BigInt(object.defaultFundingInterval.toString()) : BigInt(0);
    message.fundingMultiple = object.fundingMultiple !== undefined && object.fundingMultiple !== null ? BigInt(object.fundingMultiple.toString()) : BigInt(0);
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.defaultHourlyFundingRateCap = object.defaultHourlyFundingRateCap ?? "";
    message.defaultHourlyInterestRate = object.defaultHourlyInterestRate ?? "";
    message.maxDerivativeOrderSideCount = object.maxDerivativeOrderSideCount ?? 0;
    message.injRewardStakedRequirementThreshold = object.injRewardStakedRequirementThreshold ?? "";
    message.tradingRewardsVestingDuration = object.tradingRewardsVestingDuration !== undefined && object.tradingRewardsVestingDuration !== null ? BigInt(object.tradingRewardsVestingDuration.toString()) : BigInt(0);
    message.liquidatorRewardShareRate = object.liquidatorRewardShareRate ?? "";
    message.binaryOptionsMarketInstantListingFee = object.binaryOptionsMarketInstantListingFee !== undefined && object.binaryOptionsMarketInstantListingFee !== null ? Coin.fromPartial(object.binaryOptionsMarketInstantListingFee) : undefined;
    message.atomicMarketOrderAccessLevel = object.atomicMarketOrderAccessLevel ?? 0;
    message.spotAtomicMarketOrderFeeMultiplier = object.spotAtomicMarketOrderFeeMultiplier ?? "";
    message.derivativeAtomicMarketOrderFeeMultiplier = object.derivativeAtomicMarketOrderFeeMultiplier ?? "";
    message.binaryOptionsAtomicMarketOrderFeeMultiplier = object.binaryOptionsAtomicMarketOrderFeeMultiplier ?? "";
    message.minimalProtocolFeeRate = object.minimalProtocolFeeRate ?? "";
    message.isInstantDerivativeMarketLaunchEnabled = object.isInstantDerivativeMarketLaunchEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      spotMarketInstantListingFee: object?.spot_market_instant_listing_fee ? Coin.fromAmino(object.spot_market_instant_listing_fee) : undefined,
      derivativeMarketInstantListingFee: object?.derivative_market_instant_listing_fee ? Coin.fromAmino(object.derivative_market_instant_listing_fee) : undefined,
      defaultSpotMakerFeeRate: object.default_spot_maker_fee_rate,
      defaultSpotTakerFeeRate: object.default_spot_taker_fee_rate,
      defaultDerivativeMakerFeeRate: object.default_derivative_maker_fee_rate,
      defaultDerivativeTakerFeeRate: object.default_derivative_taker_fee_rate,
      defaultInitialMarginRatio: object.default_initial_margin_ratio,
      defaultMaintenanceMarginRatio: object.default_maintenance_margin_ratio,
      defaultFundingInterval: BigInt(object.default_funding_interval),
      fundingMultiple: BigInt(object.funding_multiple),
      relayerFeeShareRate: object.relayer_fee_share_rate,
      defaultHourlyFundingRateCap: object.default_hourly_funding_rate_cap,
      defaultHourlyInterestRate: object.default_hourly_interest_rate,
      maxDerivativeOrderSideCount: object.max_derivative_order_side_count,
      injRewardStakedRequirementThreshold: object.inj_reward_staked_requirement_threshold,
      tradingRewardsVestingDuration: BigInt(object.trading_rewards_vesting_duration),
      liquidatorRewardShareRate: object.liquidator_reward_share_rate,
      binaryOptionsMarketInstantListingFee: object?.binary_options_market_instant_listing_fee ? Coin.fromAmino(object.binary_options_market_instant_listing_fee) : undefined,
      atomicMarketOrderAccessLevel: isSet(object.atomic_market_order_access_level) ? atomicMarketOrderAccessLevelFromJSON(object.atomic_market_order_access_level) : -1,
      spotAtomicMarketOrderFeeMultiplier: object.spot_atomic_market_order_fee_multiplier,
      derivativeAtomicMarketOrderFeeMultiplier: object.derivative_atomic_market_order_fee_multiplier,
      binaryOptionsAtomicMarketOrderFeeMultiplier: object.binary_options_atomic_market_order_fee_multiplier,
      minimalProtocolFeeRate: object.minimal_protocol_fee_rate,
      isInstantDerivativeMarketLaunchEnabled: object.is_instant_derivative_market_launch_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.spot_market_instant_listing_fee = message.spotMarketInstantListingFee ? Coin.toAmino(message.spotMarketInstantListingFee) : undefined;
    obj.derivative_market_instant_listing_fee = message.derivativeMarketInstantListingFee ? Coin.toAmino(message.derivativeMarketInstantListingFee) : undefined;
    obj.default_spot_maker_fee_rate = message.defaultSpotMakerFeeRate;
    obj.default_spot_taker_fee_rate = message.defaultSpotTakerFeeRate;
    obj.default_derivative_maker_fee_rate = message.defaultDerivativeMakerFeeRate;
    obj.default_derivative_taker_fee_rate = message.defaultDerivativeTakerFeeRate;
    obj.default_initial_margin_ratio = message.defaultInitialMarginRatio;
    obj.default_maintenance_margin_ratio = message.defaultMaintenanceMarginRatio;
    obj.default_funding_interval = message.defaultFundingInterval ? message.defaultFundingInterval.toString() : undefined;
    obj.funding_multiple = message.fundingMultiple ? message.fundingMultiple.toString() : undefined;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.default_hourly_funding_rate_cap = message.defaultHourlyFundingRateCap;
    obj.default_hourly_interest_rate = message.defaultHourlyInterestRate;
    obj.max_derivative_order_side_count = message.maxDerivativeOrderSideCount;
    obj.inj_reward_staked_requirement_threshold = message.injRewardStakedRequirementThreshold;
    obj.trading_rewards_vesting_duration = message.tradingRewardsVestingDuration ? message.tradingRewardsVestingDuration.toString() : undefined;
    obj.liquidator_reward_share_rate = message.liquidatorRewardShareRate;
    obj.binary_options_market_instant_listing_fee = message.binaryOptionsMarketInstantListingFee ? Coin.toAmino(message.binaryOptionsMarketInstantListingFee) : undefined;
    obj.atomic_market_order_access_level = message.atomicMarketOrderAccessLevel;
    obj.spot_atomic_market_order_fee_multiplier = message.spotAtomicMarketOrderFeeMultiplier;
    obj.derivative_atomic_market_order_fee_multiplier = message.derivativeAtomicMarketOrderFeeMultiplier;
    obj.binary_options_atomic_market_order_fee_multiplier = message.binaryOptionsAtomicMarketOrderFeeMultiplier;
    obj.minimal_protocol_fee_rate = message.minimalProtocolFeeRate;
    obj.is_instant_derivative_market_launch_enabled = message.isInstantDerivativeMarketLaunchEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseMarketFeeMultiplier(): MarketFeeMultiplier {
  return {
    marketId: "",
    feeMultiplier: ""
  };
}
export const MarketFeeMultiplier = {
  typeUrl: "/injective.exchange.v1beta1.MarketFeeMultiplier",
  encode(message: MarketFeeMultiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.feeMultiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.feeMultiplier, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MarketFeeMultiplier {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      feeMultiplier: isSet(object.feeMultiplier) ? String(object.feeMultiplier) : ""
    };
  },
  fromPartial(object: Partial<MarketFeeMultiplier>): MarketFeeMultiplier {
    const message = createBaseMarketFeeMultiplier();
    message.marketId = object.marketId ?? "";
    message.feeMultiplier = object.feeMultiplier ?? "";
    return message;
  },
  fromAmino(object: MarketFeeMultiplierAmino): MarketFeeMultiplier {
    return {
      marketId: object.market_id,
      feeMultiplier: object.fee_multiplier
    };
  },
  toAmino(message: MarketFeeMultiplier): MarketFeeMultiplierAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.fee_multiplier = message.feeMultiplier;
    return obj;
  },
  fromAminoMsg(object: MarketFeeMultiplierAminoMsg): MarketFeeMultiplier {
    return MarketFeeMultiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketFeeMultiplierProtoMsg): MarketFeeMultiplier {
    return MarketFeeMultiplier.decode(message.value);
  },
  toProto(message: MarketFeeMultiplier): Uint8Array {
    return MarketFeeMultiplier.encode(message).finish();
  },
  toProtoMsg(message: MarketFeeMultiplier): MarketFeeMultiplierProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketFeeMultiplier",
      value: MarketFeeMultiplier.encode(message).finish()
    };
  }
};
function createBaseDerivativeMarket(): DerivativeMarket {
  return {
    ticker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    quoteDenom: "",
    marketId: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    isPerpetual: false,
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const DerivativeMarket = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarket",
  encode(message: DerivativeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.oracleBase !== "") {
      writer.uint32(18).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(26).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(40).uint32(message.oracleScaleFactor);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(50).string(message.quoteDenom);
    }
    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.isPerpetual === true) {
      writer.uint32(104).bool(message.isPerpetual);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarket {
    return {
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      isPerpetual: isSet(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<DerivativeMarket>): DerivativeMarket {
    const message = createBaseDerivativeMarket();
    message.ticker = object.ticker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.quoteDenom = object.quoteDenom ?? "";
    message.marketId = object.marketId ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.isPerpetual = object.isPerpetual ?? false;
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  },
  fromAmino(object: DerivativeMarketAmino): DerivativeMarket {
    return {
      ticker: object.ticker,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      oracleScaleFactor: object.oracle_scale_factor,
      quoteDenom: object.quote_denom,
      marketId: object.market_id,
      initialMarginRatio: object.initial_margin_ratio,
      maintenanceMarginRatio: object.maintenance_margin_ratio,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      relayerFeeShareRate: object.relayer_fee_share_rate,
      isPerpetual: object.isPerpetual,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: DerivativeMarket): DerivativeMarketAmino {
    const obj: any = {};
    obj.ticker = message.ticker;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_type = message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.quote_denom = message.quoteDenom;
    obj.market_id = message.marketId;
    obj.initial_margin_ratio = message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.isPerpetual = message.isPerpetual;
    obj.status = message.status;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketAminoMsg): DerivativeMarket {
    return DerivativeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketProtoMsg): DerivativeMarket {
    return DerivativeMarket.decode(message.value);
  },
  toProto(message: DerivativeMarket): Uint8Array {
    return DerivativeMarket.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarket): DerivativeMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarket",
      value: DerivativeMarket.encode(message).finish()
    };
  }
};
function createBaseBinaryOptionsMarket(): BinaryOptionsMarket {
  return {
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    admin: "",
    quoteDenom: "",
    marketId: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: "",
    settlementPrice: undefined
  };
}
export const BinaryOptionsMarket = {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket",
  encode(message: BinaryOptionsMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.oracleSymbol !== "") {
      writer.uint32(18).string(message.oracleSymbol);
    }
    if (message.oracleProvider !== "") {
      writer.uint32(26).string(message.oracleProvider);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(40).uint32(message.oracleScaleFactor);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(48).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(56).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(66).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(74).string(message.quoteDenom);
    }
    if (message.marketId !== "") {
      writer.uint32(82).string(message.marketId);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(138).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): BinaryOptionsMarket {
    return {
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
      oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      expirationTimestamp: isSet(object.expirationTimestamp) ? BigInt(object.expirationTimestamp.toString()) : BigInt(0),
      settlementTimestamp: isSet(object.settlementTimestamp) ? BigInt(object.settlementTimestamp.toString()) : BigInt(0),
      admin: isSet(object.admin) ? String(object.admin) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : undefined
    };
  },
  fromPartial(object: Partial<BinaryOptionsMarket>): BinaryOptionsMarket {
    const message = createBaseBinaryOptionsMarket();
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    return message;
  },
  fromAmino(object: BinaryOptionsMarketAmino): BinaryOptionsMarket {
    return {
      ticker: object.ticker,
      oracleSymbol: object.oracle_symbol,
      oracleProvider: object.oracle_provider,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      oracleScaleFactor: object.oracle_scale_factor,
      expirationTimestamp: BigInt(object.expiration_timestamp),
      settlementTimestamp: BigInt(object.settlement_timestamp),
      admin: object.admin,
      quoteDenom: object.quote_denom,
      marketId: object.market_id,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      relayerFeeShareRate: object.relayer_fee_share_rate,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size,
      settlementPrice: object?.settlement_price
    };
  },
  toAmino(message: BinaryOptionsMarket): BinaryOptionsMarketAmino {
    const obj: any = {};
    obj.ticker = message.ticker;
    obj.oracle_symbol = message.oracleSymbol;
    obj.oracle_provider = message.oracleProvider;
    obj.oracle_type = message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.expiration_timestamp = message.expirationTimestamp ? message.expirationTimestamp.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp ? message.settlementTimestamp.toString() : undefined;
    obj.admin = message.admin;
    obj.quote_denom = message.quoteDenom;
    obj.market_id = message.marketId;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.status = message.status;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    obj.settlement_price = message.settlementPrice;
    return obj;
  },
  fromAminoMsg(object: BinaryOptionsMarketAminoMsg): BinaryOptionsMarket {
    return BinaryOptionsMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: BinaryOptionsMarketProtoMsg): BinaryOptionsMarket {
    return BinaryOptionsMarket.decode(message.value);
  },
  toProto(message: BinaryOptionsMarket): Uint8Array {
    return BinaryOptionsMarket.encode(message).finish();
  },
  toProtoMsg(message: BinaryOptionsMarket): BinaryOptionsMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket",
      value: BinaryOptionsMarket.encode(message).finish()
    };
  }
};
function createBaseExpiryFuturesMarketInfo(): ExpiryFuturesMarketInfo {
  return {
    marketId: "",
    expirationTimestamp: BigInt(0),
    twapStartTimestamp: BigInt(0),
    expirationTwapStartPriceCumulative: "",
    settlementPrice: ""
  };
}
export const ExpiryFuturesMarketInfo = {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo",
  encode(message: ExpiryFuturesMarketInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.expirationTimestamp);
    }
    if (message.twapStartTimestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.twapStartTimestamp);
    }
    if (message.expirationTwapStartPriceCumulative !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.expirationTwapStartPriceCumulative, 18).atomics);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ExpiryFuturesMarketInfo {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      expirationTimestamp: isSet(object.expirationTimestamp) ? BigInt(object.expirationTimestamp.toString()) : BigInt(0),
      twapStartTimestamp: isSet(object.twapStartTimestamp) ? BigInt(object.twapStartTimestamp.toString()) : BigInt(0),
      expirationTwapStartPriceCumulative: isSet(object.expirationTwapStartPriceCumulative) ? String(object.expirationTwapStartPriceCumulative) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : ""
    };
  },
  fromPartial(object: Partial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo {
    const message = createBaseExpiryFuturesMarketInfo();
    message.marketId = object.marketId ?? "";
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.twapStartTimestamp = object.twapStartTimestamp !== undefined && object.twapStartTimestamp !== null ? BigInt(object.twapStartTimestamp.toString()) : BigInt(0);
    message.expirationTwapStartPriceCumulative = object.expirationTwapStartPriceCumulative ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  },
  fromAmino(object: ExpiryFuturesMarketInfoAmino): ExpiryFuturesMarketInfo {
    return {
      marketId: object.market_id,
      expirationTimestamp: BigInt(object.expiration_timestamp),
      twapStartTimestamp: BigInt(object.twap_start_timestamp),
      expirationTwapStartPriceCumulative: object.expiration_twap_start_price_cumulative,
      settlementPrice: object.settlement_price
    };
  },
  toAmino(message: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfoAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.expiration_timestamp = message.expirationTimestamp ? message.expirationTimestamp.toString() : undefined;
    obj.twap_start_timestamp = message.twapStartTimestamp ? message.twapStartTimestamp.toString() : undefined;
    obj.expiration_twap_start_price_cumulative = message.expirationTwapStartPriceCumulative;
    obj.settlement_price = message.settlementPrice;
    return obj;
  },
  fromAminoMsg(object: ExpiryFuturesMarketInfoAminoMsg): ExpiryFuturesMarketInfo {
    return ExpiryFuturesMarketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiryFuturesMarketInfoProtoMsg): ExpiryFuturesMarketInfo {
    return ExpiryFuturesMarketInfo.decode(message.value);
  },
  toProto(message: ExpiryFuturesMarketInfo): Uint8Array {
    return ExpiryFuturesMarketInfo.encode(message).finish();
  },
  toProtoMsg(message: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo",
      value: ExpiryFuturesMarketInfo.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketInfo(): PerpetualMarketInfo {
  return {
    marketId: "",
    hourlyFundingRateCap: "",
    hourlyInterestRate: "",
    nextFundingTimestamp: BigInt(0),
    fundingInterval: BigInt(0)
  };
}
export const PerpetualMarketInfo = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo",
  encode(message: PerpetualMarketInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.hourlyFundingRateCap !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.hourlyFundingRateCap, 18).atomics);
    }
    if (message.hourlyInterestRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics);
    }
    if (message.nextFundingTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.nextFundingTimestamp);
    }
    if (message.fundingInterval !== BigInt(0)) {
      writer.uint32(40).int64(message.fundingInterval);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketInfo {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      hourlyFundingRateCap: isSet(object.hourlyFundingRateCap) ? String(object.hourlyFundingRateCap) : "",
      hourlyInterestRate: isSet(object.hourlyInterestRate) ? String(object.hourlyInterestRate) : "",
      nextFundingTimestamp: isSet(object.nextFundingTimestamp) ? BigInt(object.nextFundingTimestamp.toString()) : BigInt(0),
      fundingInterval: isSet(object.fundingInterval) ? BigInt(object.fundingInterval.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PerpetualMarketInfo>): PerpetualMarketInfo {
    const message = createBasePerpetualMarketInfo();
    message.marketId = object.marketId ?? "";
    message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? "";
    message.hourlyInterestRate = object.hourlyInterestRate ?? "";
    message.nextFundingTimestamp = object.nextFundingTimestamp !== undefined && object.nextFundingTimestamp !== null ? BigInt(object.nextFundingTimestamp.toString()) : BigInt(0);
    message.fundingInterval = object.fundingInterval !== undefined && object.fundingInterval !== null ? BigInt(object.fundingInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PerpetualMarketInfoAmino): PerpetualMarketInfo {
    return {
      marketId: object.market_id,
      hourlyFundingRateCap: object.hourly_funding_rate_cap,
      hourlyInterestRate: object.hourly_interest_rate,
      nextFundingTimestamp: BigInt(object.next_funding_timestamp),
      fundingInterval: BigInt(object.funding_interval)
    };
  },
  toAmino(message: PerpetualMarketInfo): PerpetualMarketInfoAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.hourly_funding_rate_cap = message.hourlyFundingRateCap;
    obj.hourly_interest_rate = message.hourlyInterestRate;
    obj.next_funding_timestamp = message.nextFundingTimestamp ? message.nextFundingTimestamp.toString() : undefined;
    obj.funding_interval = message.fundingInterval ? message.fundingInterval.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketInfoAminoMsg): PerpetualMarketInfo {
    return PerpetualMarketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketInfoProtoMsg): PerpetualMarketInfo {
    return PerpetualMarketInfo.decode(message.value);
  },
  toProto(message: PerpetualMarketInfo): Uint8Array {
    return PerpetualMarketInfo.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketInfo): PerpetualMarketInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo",
      value: PerpetualMarketInfo.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketFunding(): PerpetualMarketFunding {
  return {
    cumulativeFunding: "",
    cumulativePrice: "",
    lastTimestamp: BigInt(0)
  };
}
export const PerpetualMarketFunding = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding",
  encode(message: PerpetualMarketFunding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cumulativeFunding !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.cumulativeFunding, 18).atomics);
    }
    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
    }
    if (message.lastTimestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.lastTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketFunding {
    return {
      cumulativeFunding: isSet(object.cumulativeFunding) ? String(object.cumulativeFunding) : "",
      cumulativePrice: isSet(object.cumulativePrice) ? String(object.cumulativePrice) : "",
      lastTimestamp: isSet(object.lastTimestamp) ? BigInt(object.lastTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PerpetualMarketFunding>): PerpetualMarketFunding {
    const message = createBasePerpetualMarketFunding();
    message.cumulativeFunding = object.cumulativeFunding ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? BigInt(object.lastTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PerpetualMarketFundingAmino): PerpetualMarketFunding {
    return {
      cumulativeFunding: object.cumulative_funding,
      cumulativePrice: object.cumulative_price,
      lastTimestamp: BigInt(object.last_timestamp)
    };
  },
  toAmino(message: PerpetualMarketFunding): PerpetualMarketFundingAmino {
    const obj: any = {};
    obj.cumulative_funding = message.cumulativeFunding;
    obj.cumulative_price = message.cumulativePrice;
    obj.last_timestamp = message.lastTimestamp ? message.lastTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketFundingAminoMsg): PerpetualMarketFunding {
    return PerpetualMarketFunding.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketFundingProtoMsg): PerpetualMarketFunding {
    return PerpetualMarketFunding.decode(message.value);
  },
  toProto(message: PerpetualMarketFunding): Uint8Array {
    return PerpetualMarketFunding.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketFunding): PerpetualMarketFundingProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding",
      value: PerpetualMarketFunding.encode(message).finish()
    };
  }
};
function createBaseDerivativeMarketSettlementInfo(): DerivativeMarketSettlementInfo {
  return {
    marketId: "",
    settlementPrice: ""
  };
}
export const DerivativeMarketSettlementInfo = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo",
  encode(message: DerivativeMarketSettlementInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarketSettlementInfo {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : ""
    };
  },
  fromPartial(object: Partial<DerivativeMarketSettlementInfo>): DerivativeMarketSettlementInfo {
    const message = createBaseDerivativeMarketSettlementInfo();
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  },
  fromAmino(object: DerivativeMarketSettlementInfoAmino): DerivativeMarketSettlementInfo {
    return {
      marketId: object.market_id,
      settlementPrice: object.settlement_price
    };
  },
  toAmino(message: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfoAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.settlement_price = message.settlementPrice;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketSettlementInfoAminoMsg): DerivativeMarketSettlementInfo {
    return DerivativeMarketSettlementInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketSettlementInfoProtoMsg): DerivativeMarketSettlementInfo {
    return DerivativeMarketSettlementInfo.decode(message.value);
  },
  toProto(message: DerivativeMarketSettlementInfo): Uint8Array {
    return DerivativeMarketSettlementInfo.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo",
      value: DerivativeMarketSettlementInfo.encode(message).finish()
    };
  }
};
function createBaseNextFundingTimestamp(): NextFundingTimestamp {
  return {
    nextTimestamp: BigInt(0)
  };
}
export const NextFundingTimestamp = {
  typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp",
  encode(message: NextFundingTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.nextTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): NextFundingTimestamp {
    return {
      nextTimestamp: isSet(object.nextTimestamp) ? BigInt(object.nextTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<NextFundingTimestamp>): NextFundingTimestamp {
    const message = createBaseNextFundingTimestamp();
    message.nextTimestamp = object.nextTimestamp !== undefined && object.nextTimestamp !== null ? BigInt(object.nextTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NextFundingTimestampAmino): NextFundingTimestamp {
    return {
      nextTimestamp: BigInt(object.next_timestamp)
    };
  },
  toAmino(message: NextFundingTimestamp): NextFundingTimestampAmino {
    const obj: any = {};
    obj.next_timestamp = message.nextTimestamp ? message.nextTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NextFundingTimestampAminoMsg): NextFundingTimestamp {
    return NextFundingTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: NextFundingTimestampProtoMsg): NextFundingTimestamp {
    return NextFundingTimestamp.decode(message.value);
  },
  toProto(message: NextFundingTimestamp): Uint8Array {
    return NextFundingTimestamp.encode(message).finish();
  },
  toProtoMsg(message: NextFundingTimestamp): NextFundingTimestampProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp",
      value: NextFundingTimestamp.encode(message).finish()
    };
  }
};
function createBaseMidPriceAndTOB(): MidPriceAndTOB {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const MidPriceAndTOB = {
  typeUrl: "/injective.exchange.v1beta1.MidPriceAndTOB",
  encode(message: MidPriceAndTOB, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MidPriceAndTOB {
    return {
      midPrice: isSet(object.midPrice) ? String(object.midPrice) : undefined,
      bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : undefined,
      bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : undefined
    };
  },
  fromPartial(object: Partial<MidPriceAndTOB>): MidPriceAndTOB {
    const message = createBaseMidPriceAndTOB();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  },
  fromAmino(object: MidPriceAndTOBAmino): MidPriceAndTOB {
    return {
      midPrice: object?.mid_price,
      bestBuyPrice: object?.best_buy_price,
      bestSellPrice: object?.best_sell_price
    };
  },
  toAmino(message: MidPriceAndTOB): MidPriceAndTOBAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice;
    obj.best_buy_price = message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: MidPriceAndTOBAminoMsg): MidPriceAndTOB {
    return MidPriceAndTOB.fromAmino(object.value);
  },
  fromProtoMsg(message: MidPriceAndTOBProtoMsg): MidPriceAndTOB {
    return MidPriceAndTOB.decode(message.value);
  },
  toProto(message: MidPriceAndTOB): Uint8Array {
    return MidPriceAndTOB.encode(message).finish();
  },
  toProtoMsg(message: MidPriceAndTOB): MidPriceAndTOBProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MidPriceAndTOB",
      value: MidPriceAndTOB.encode(message).finish()
    };
  }
};
function createBaseSpotMarket(): SpotMarket {
  return {
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    marketId: "",
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const SpotMarket = {
  typeUrl: "/injective.exchange.v1beta1.SpotMarket",
  encode(message: SpotMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): SpotMarket {
    return {
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<SpotMarket>): SpotMarket {
    const message = createBaseSpotMarket();
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.marketId = object.marketId ?? "";
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  },
  fromAmino(object: SpotMarketAmino): SpotMarket {
    return {
      ticker: object.ticker,
      baseDenom: object.base_denom,
      quoteDenom: object.quote_denom,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      relayerFeeShareRate: object.relayer_fee_share_rate,
      marketId: object.market_id,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: SpotMarket): SpotMarketAmino {
    const obj: any = {};
    obj.ticker = message.ticker;
    obj.base_denom = message.baseDenom;
    obj.quote_denom = message.quoteDenom;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.market_id = message.marketId;
    obj.status = message.status;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: SpotMarketAminoMsg): SpotMarket {
    return SpotMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketProtoMsg): SpotMarket {
    return SpotMarket.decode(message.value);
  },
  toProto(message: SpotMarket): Uint8Array {
    return SpotMarket.encode(message).finish();
  },
  toProtoMsg(message: SpotMarket): SpotMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarket",
      value: SpotMarket.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    availableBalance: "",
    totalBalance: ""
  };
}
export const Deposit = {
  typeUrl: "/injective.exchange.v1beta1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.availableBalance !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.availableBalance, 18).atomics);
    }
    if (message.totalBalance !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalBalance, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Deposit {
    return {
      availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
      totalBalance: isSet(object.totalBalance) ? String(object.totalBalance) : ""
    };
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.availableBalance = object.availableBalance ?? "";
    message.totalBalance = object.totalBalance ?? "";
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      availableBalance: object.available_balance,
      totalBalance: object.total_balance
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.available_balance = message.availableBalance;
    obj.total_balance = message.totalBalance;
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseSubaccountTradeNonce(): SubaccountTradeNonce {
  return {
    nonce: 0
  };
}
export const SubaccountTradeNonce = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce",
  encode(message: SubaccountTradeNonce, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountTradeNonce {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0
    };
  },
  fromPartial(object: Partial<SubaccountTradeNonce>): SubaccountTradeNonce {
    const message = createBaseSubaccountTradeNonce();
    message.nonce = object.nonce ?? 0;
    return message;
  },
  fromAmino(object: SubaccountTradeNonceAmino): SubaccountTradeNonce {
    return {
      nonce: object.nonce
    };
  },
  toAmino(message: SubaccountTradeNonce): SubaccountTradeNonceAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: SubaccountTradeNonceAminoMsg): SubaccountTradeNonce {
    return SubaccountTradeNonce.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountTradeNonceProtoMsg): SubaccountTradeNonce {
    return SubaccountTradeNonce.decode(message.value);
  },
  toProto(message: SubaccountTradeNonce): Uint8Array {
    return SubaccountTradeNonce.encode(message).finish();
  },
  toProtoMsg(message: SubaccountTradeNonce): SubaccountTradeNonceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce",
      value: SubaccountTradeNonce.encode(message).finish()
    };
  }
};
function createBaseOrderInfo(): OrderInfo {
  return {
    subaccountId: "",
    feeRecipient: "",
    price: "",
    quantity: ""
  };
}
export const OrderInfo = {
  typeUrl: "/injective.exchange.v1beta1.OrderInfo",
  encode(message: OrderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.feeRecipient !== "") {
      writer.uint32(18).string(message.feeRecipient);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): OrderInfo {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      feeRecipient: isSet(object.feeRecipient) ? String(object.feeRecipient) : "",
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : ""
    };
  },
  fromPartial(object: Partial<OrderInfo>): OrderInfo {
    const message = createBaseOrderInfo();
    message.subaccountId = object.subaccountId ?? "";
    message.feeRecipient = object.feeRecipient ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  },
  fromAmino(object: OrderInfoAmino): OrderInfo {
    return {
      subaccountId: object.subaccount_id,
      feeRecipient: object.fee_recipient,
      price: object.price,
      quantity: object.quantity
    };
  },
  toAmino(message: OrderInfo): OrderInfoAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.fee_recipient = message.feeRecipient;
    obj.price = message.price;
    obj.quantity = message.quantity;
    return obj;
  },
  fromAminoMsg(object: OrderInfoAminoMsg): OrderInfo {
    return OrderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderInfoProtoMsg): OrderInfo {
    return OrderInfo.decode(message.value);
  },
  toProto(message: OrderInfo): Uint8Array {
    return OrderInfo.encode(message).finish();
  },
  toProtoMsg(message: OrderInfo): OrderInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OrderInfo",
      value: OrderInfo.encode(message).finish()
    };
  }
};
function createBaseSpotOrder(): SpotOrder {
  return {
    marketId: "",
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    triggerPrice: undefined
  };
}
export const SpotOrder = {
  typeUrl: "/injective.exchange.v1beta1.SpotOrder",
  encode(message: SpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): SpotOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : undefined
    };
  },
  fromPartial(object: Partial<SpotOrder>): SpotOrder {
    const message = createBaseSpotOrder();
    message.marketId = object.marketId ?? "";
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  },
  fromAmino(object: SpotOrderAmino): SpotOrder {
    return {
      marketId: object.market_id,
      orderInfo: object?.order_info ? OrderInfo.fromAmino(object.order_info) : undefined,
      orderType: isSet(object.order_type) ? orderTypeFromJSON(object.order_type) : -1,
      triggerPrice: object?.trigger_price
    };
  },
  toAmino(message: SpotOrder): SpotOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType;
    obj.trigger_price = message.triggerPrice;
    return obj;
  },
  fromAminoMsg(object: SpotOrderAminoMsg): SpotOrder {
    return SpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderProtoMsg): SpotOrder {
    return SpotOrder.decode(message.value);
  },
  toProto(message: SpotOrder): Uint8Array {
    return SpotOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotOrder): SpotOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotOrder",
      value: SpotOrder.encode(message).finish()
    };
  }
};
function createBaseSpotLimitOrder(): SpotLimitOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
export const SpotLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder",
  encode(message: SpotLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fillable, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): SpotLimitOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      fillable: isSet(object.fillable) ? String(object.fillable) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : undefined,
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SpotLimitOrder>): SpotLimitOrder {
    const message = createBaseSpotLimitOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.fillable = object.fillable ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SpotLimitOrderAmino): SpotLimitOrder {
    return {
      orderInfo: object?.order_info ? OrderInfo.fromAmino(object.order_info) : undefined,
      orderType: isSet(object.order_type) ? orderTypeFromJSON(object.order_type) : -1,
      fillable: object.fillable,
      triggerPrice: object?.trigger_price,
      orderHash: object.order_hash
    };
  },
  toAmino(message: SpotLimitOrder): SpotLimitOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType;
    obj.fillable = message.fillable;
    obj.trigger_price = message.triggerPrice;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: SpotLimitOrderAminoMsg): SpotLimitOrder {
    return SpotLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotLimitOrderProtoMsg): SpotLimitOrder {
    return SpotLimitOrder.decode(message.value);
  },
  toProto(message: SpotLimitOrder): Uint8Array {
    return SpotLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotLimitOrder): SpotLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder",
      value: SpotLimitOrder.encode(message).finish()
    };
  }
};
function createBaseSpotMarketOrder(): SpotMarketOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    balanceHold: "",
    orderHash: new Uint8Array(),
    orderType: 0,
    triggerPrice: undefined
  };
}
export const SpotMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder",
  encode(message: SpotMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.balanceHold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(26).bytes(message.orderHash);
    }
    if (message.orderType !== 0) {
      writer.uint32(32).int32(message.orderType);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): SpotMarketOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : undefined
    };
  },
  fromPartial(object: Partial<SpotMarketOrder>): SpotMarketOrder {
    const message = createBaseSpotMarketOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.balanceHold = object.balanceHold ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.orderType = object.orderType ?? 0;
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  },
  fromAmino(object: SpotMarketOrderAmino): SpotMarketOrder {
    return {
      orderInfo: object?.order_info ? OrderInfo.fromAmino(object.order_info) : undefined,
      balanceHold: object.balance_hold,
      orderHash: object.order_hash,
      orderType: isSet(object.order_type) ? orderTypeFromJSON(object.order_type) : -1,
      triggerPrice: object?.trigger_price
    };
  },
  toAmino(message: SpotMarketOrder): SpotMarketOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.balance_hold = message.balanceHold;
    obj.order_hash = message.orderHash;
    obj.order_type = message.orderType;
    obj.trigger_price = message.triggerPrice;
    return obj;
  },
  fromAminoMsg(object: SpotMarketOrderAminoMsg): SpotMarketOrder {
    return SpotMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketOrderProtoMsg): SpotMarketOrder {
    return SpotMarketOrder.decode(message.value);
  },
  toProto(message: SpotMarketOrder): Uint8Array {
    return SpotMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketOrder): SpotMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder",
      value: SpotMarketOrder.encode(message).finish()
    };
  }
};
function createBaseDerivativeOrder(): DerivativeOrder {
  return {
    marketId: "",
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    margin: "",
    triggerPrice: undefined
  };
}
export const DerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrder",
  encode(message: DerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      margin: isSet(object.margin) ? String(object.margin) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : undefined
    };
  },
  fromPartial(object: Partial<DerivativeOrder>): DerivativeOrder {
    const message = createBaseDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  },
  fromAmino(object: DerivativeOrderAmino): DerivativeOrder {
    return {
      marketId: object.market_id,
      orderInfo: object?.order_info ? OrderInfo.fromAmino(object.order_info) : undefined,
      orderType: isSet(object.order_type) ? orderTypeFromJSON(object.order_type) : -1,
      margin: object.margin,
      triggerPrice: object?.trigger_price
    };
  },
  toAmino(message: DerivativeOrder): DerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType;
    obj.margin = message.margin;
    obj.trigger_price = message.triggerPrice;
    return obj;
  },
  fromAminoMsg(object: DerivativeOrderAminoMsg): DerivativeOrder {
    return DerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeOrderProtoMsg): DerivativeOrder {
    return DerivativeOrder.decode(message.value);
  },
  toProto(message: DerivativeOrder): Uint8Array {
    return DerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeOrder): DerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeOrder",
      value: DerivativeOrder.encode(message).finish()
    };
  }
};
function createBaseSubaccountOrderbookMetadata(): SubaccountOrderbookMetadata {
  return {
    vanillaLimitOrderCount: 0,
    reduceOnlyLimitOrderCount: 0,
    aggregateReduceOnlyQuantity: "",
    aggregateVanillaQuantity: "",
    vanillaConditionalOrderCount: 0,
    reduceOnlyConditionalOrderCount: 0
  };
}
export const SubaccountOrderbookMetadata = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata",
  encode(message: SubaccountOrderbookMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vanillaLimitOrderCount !== 0) {
      writer.uint32(8).uint32(message.vanillaLimitOrderCount);
    }
    if (message.reduceOnlyLimitOrderCount !== 0) {
      writer.uint32(16).uint32(message.reduceOnlyLimitOrderCount);
    }
    if (message.aggregateReduceOnlyQuantity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.aggregateReduceOnlyQuantity, 18).atomics);
    }
    if (message.aggregateVanillaQuantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.aggregateVanillaQuantity, 18).atomics);
    }
    if (message.vanillaConditionalOrderCount !== 0) {
      writer.uint32(40).uint32(message.vanillaConditionalOrderCount);
    }
    if (message.reduceOnlyConditionalOrderCount !== 0) {
      writer.uint32(48).uint32(message.reduceOnlyConditionalOrderCount);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountOrderbookMetadata {
    return {
      vanillaLimitOrderCount: isSet(object.vanillaLimitOrderCount) ? Number(object.vanillaLimitOrderCount) : 0,
      reduceOnlyLimitOrderCount: isSet(object.reduceOnlyLimitOrderCount) ? Number(object.reduceOnlyLimitOrderCount) : 0,
      aggregateReduceOnlyQuantity: isSet(object.aggregateReduceOnlyQuantity) ? String(object.aggregateReduceOnlyQuantity) : "",
      aggregateVanillaQuantity: isSet(object.aggregateVanillaQuantity) ? String(object.aggregateVanillaQuantity) : "",
      vanillaConditionalOrderCount: isSet(object.vanillaConditionalOrderCount) ? Number(object.vanillaConditionalOrderCount) : 0,
      reduceOnlyConditionalOrderCount: isSet(object.reduceOnlyConditionalOrderCount) ? Number(object.reduceOnlyConditionalOrderCount) : 0
    };
  },
  fromPartial(object: Partial<SubaccountOrderbookMetadata>): SubaccountOrderbookMetadata {
    const message = createBaseSubaccountOrderbookMetadata();
    message.vanillaLimitOrderCount = object.vanillaLimitOrderCount ?? 0;
    message.reduceOnlyLimitOrderCount = object.reduceOnlyLimitOrderCount ?? 0;
    message.aggregateReduceOnlyQuantity = object.aggregateReduceOnlyQuantity ?? "";
    message.aggregateVanillaQuantity = object.aggregateVanillaQuantity ?? "";
    message.vanillaConditionalOrderCount = object.vanillaConditionalOrderCount ?? 0;
    message.reduceOnlyConditionalOrderCount = object.reduceOnlyConditionalOrderCount ?? 0;
    return message;
  },
  fromAmino(object: SubaccountOrderbookMetadataAmino): SubaccountOrderbookMetadata {
    return {
      vanillaLimitOrderCount: object.vanilla_limit_order_count,
      reduceOnlyLimitOrderCount: object.reduce_only_limit_order_count,
      aggregateReduceOnlyQuantity: object.aggregate_reduce_only_quantity,
      aggregateVanillaQuantity: object.aggregate_vanilla_quantity,
      vanillaConditionalOrderCount: object.vanilla_conditional_order_count,
      reduceOnlyConditionalOrderCount: object.reduce_only_conditional_order_count
    };
  },
  toAmino(message: SubaccountOrderbookMetadata): SubaccountOrderbookMetadataAmino {
    const obj: any = {};
    obj.vanilla_limit_order_count = message.vanillaLimitOrderCount;
    obj.reduce_only_limit_order_count = message.reduceOnlyLimitOrderCount;
    obj.aggregate_reduce_only_quantity = message.aggregateReduceOnlyQuantity;
    obj.aggregate_vanilla_quantity = message.aggregateVanillaQuantity;
    obj.vanilla_conditional_order_count = message.vanillaConditionalOrderCount;
    obj.reduce_only_conditional_order_count = message.reduceOnlyConditionalOrderCount;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderbookMetadataAminoMsg): SubaccountOrderbookMetadata {
    return SubaccountOrderbookMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderbookMetadataProtoMsg): SubaccountOrderbookMetadata {
    return SubaccountOrderbookMetadata.decode(message.value);
  },
  toProto(message: SubaccountOrderbookMetadata): Uint8Array {
    return SubaccountOrderbookMetadata.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderbookMetadata): SubaccountOrderbookMetadataProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata",
      value: SubaccountOrderbookMetadata.encode(message).finish()
    };
  }
};
function createBaseSubaccountOrder(): SubaccountOrder {
  return {
    price: "",
    quantity: "",
    isReduceOnly: false
  };
}
export const SubaccountOrder = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrder",
  encode(message: SubaccountOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.isReduceOnly === true) {
      writer.uint32(24).bool(message.isReduceOnly);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      isReduceOnly: isSet(object.isReduceOnly) ? Boolean(object.isReduceOnly) : false
    };
  },
  fromPartial(object: Partial<SubaccountOrder>): SubaccountOrder {
    const message = createBaseSubaccountOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.isReduceOnly = object.isReduceOnly ?? false;
    return message;
  },
  fromAmino(object: SubaccountOrderAmino): SubaccountOrder {
    return {
      price: object.price,
      quantity: object.quantity,
      isReduceOnly: object.isReduceOnly
    };
  },
  toAmino(message: SubaccountOrder): SubaccountOrderAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.isReduceOnly = message.isReduceOnly;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderAminoMsg): SubaccountOrder {
    return SubaccountOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderProtoMsg): SubaccountOrder {
    return SubaccountOrder.decode(message.value);
  },
  toProto(message: SubaccountOrder): Uint8Array {
    return SubaccountOrder.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrder): SubaccountOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrder",
      value: SubaccountOrder.encode(message).finish()
    };
  }
};
function createBaseSubaccountOrderData(): SubaccountOrderData {
  return {
    order: SubaccountOrder.fromPartial({}),
    orderHash: new Uint8Array()
  };
}
export const SubaccountOrderData = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData",
  encode(message: SubaccountOrderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      SubaccountOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(18).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountOrderData {
    return {
      order: isSet(object.order) ? SubaccountOrder.fromJSON(object.order) : undefined,
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SubaccountOrderData>): SubaccountOrderData {
    const message = createBaseSubaccountOrderData();
    message.order = object.order !== undefined && object.order !== null ? SubaccountOrder.fromPartial(object.order) : undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SubaccountOrderDataAmino): SubaccountOrderData {
    return {
      order: object?.order ? SubaccountOrder.fromAmino(object.order) : undefined,
      orderHash: object.order_hash
    };
  },
  toAmino(message: SubaccountOrderData): SubaccountOrderDataAmino {
    const obj: any = {};
    obj.order = message.order ? SubaccountOrder.toAmino(message.order) : undefined;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderDataAminoMsg): SubaccountOrderData {
    return SubaccountOrderData.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderDataProtoMsg): SubaccountOrderData {
    return SubaccountOrderData.decode(message.value);
  },
  toProto(message: SubaccountOrderData): Uint8Array {
    return SubaccountOrderData.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderData): SubaccountOrderDataProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData",
      value: SubaccountOrderData.encode(message).finish()
    };
  }
};
function createBaseDerivativeLimitOrder(): DerivativeLimitOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    margin: "",
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
export const DerivativeLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder",
  encode(message: DerivativeLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fillable, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeLimitOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      margin: isSet(object.margin) ? String(object.margin) : "",
      fillable: isSet(object.fillable) ? String(object.fillable) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : undefined,
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DerivativeLimitOrder>): DerivativeLimitOrder {
    const message = createBaseDerivativeLimitOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DerivativeLimitOrderAmino): DerivativeLimitOrder {
    return {
      orderInfo: object?.order_info ? OrderInfo.fromAmino(object.order_info) : undefined,
      orderType: isSet(object.order_type) ? orderTypeFromJSON(object.order_type) : -1,
      margin: object.margin,
      fillable: object.fillable,
      triggerPrice: object?.trigger_price,
      orderHash: object.order_hash
    };
  },
  toAmino(message: DerivativeLimitOrder): DerivativeLimitOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType;
    obj.margin = message.margin;
    obj.fillable = message.fillable;
    obj.trigger_price = message.triggerPrice;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: DerivativeLimitOrderAminoMsg): DerivativeLimitOrder {
    return DerivativeLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeLimitOrderProtoMsg): DerivativeLimitOrder {
    return DerivativeLimitOrder.decode(message.value);
  },
  toProto(message: DerivativeLimitOrder): Uint8Array {
    return DerivativeLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeLimitOrder): DerivativeLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder",
      value: DerivativeLimitOrder.encode(message).finish()
    };
  }
};
function createBaseDerivativeMarketOrder(): DerivativeMarketOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    margin: "",
    marginHold: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
export const DerivativeMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder",
  encode(message: DerivativeMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.marginHold !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.marginHold, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarketOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      margin: isSet(object.margin) ? String(object.margin) : "",
      marginHold: isSet(object.marginHold) ? String(object.marginHold) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : undefined,
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DerivativeMarketOrder>): DerivativeMarketOrder {
    const message = createBaseDerivativeMarketOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.marginHold = object.marginHold ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DerivativeMarketOrderAmino): DerivativeMarketOrder {
    return {
      orderInfo: object?.order_info ? OrderInfo.fromAmino(object.order_info) : undefined,
      orderType: isSet(object.order_type) ? orderTypeFromJSON(object.order_type) : -1,
      margin: object.margin,
      marginHold: object.margin_hold,
      triggerPrice: object?.trigger_price,
      orderHash: object.order_hash
    };
  },
  toAmino(message: DerivativeMarketOrder): DerivativeMarketOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType;
    obj.margin = message.margin;
    obj.margin_hold = message.marginHold;
    obj.trigger_price = message.triggerPrice;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketOrderAminoMsg): DerivativeMarketOrder {
    return DerivativeMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketOrderProtoMsg): DerivativeMarketOrder {
    return DerivativeMarketOrder.decode(message.value);
  },
  toProto(message: DerivativeMarketOrder): Uint8Array {
    return DerivativeMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketOrder): DerivativeMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder",
      value: DerivativeMarketOrder.encode(message).finish()
    };
  }
};
function createBasePosition(): Position {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    margin: "",
    cumulativeFundingEntry: ""
  };
}
export const Position = {
  typeUrl: "/injective.exchange.v1beta1.Position",
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.entryPrice, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.cumulativeFundingEntry !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.cumulativeFundingEntry, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Position {
    return {
      isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      cumulativeFundingEntry: isSet(object.cumulativeFundingEntry) ? String(object.cumulativeFundingEntry) : ""
    };
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.margin = object.margin ?? "";
    message.cumulativeFundingEntry = object.cumulativeFundingEntry ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    return {
      isLong: object.isLong,
      quantity: object.quantity,
      entryPrice: object.entry_price,
      margin: object.margin,
      cumulativeFundingEntry: object.cumulative_funding_entry
    };
  },
  toAmino(message: Position): PositionAmino {
    const obj: any = {};
    obj.isLong = message.isLong;
    obj.quantity = message.quantity;
    obj.entry_price = message.entryPrice;
    obj.margin = message.margin;
    obj.cumulative_funding_entry = message.cumulativeFundingEntry;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionProtoMsg): Position {
    return Position.decode(message.value);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Position",
      value: Position.encode(message).finish()
    };
  }
};
function createBaseMarketOrderIndicator(): MarketOrderIndicator {
  return {
    marketId: "",
    isBuy: false
  };
}
export const MarketOrderIndicator = {
  typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator",
  encode(message: MarketOrderIndicator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    return writer;
  },
  fromJSON(object: any): MarketOrderIndicator {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false
    };
  },
  fromPartial(object: Partial<MarketOrderIndicator>): MarketOrderIndicator {
    const message = createBaseMarketOrderIndicator();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  },
  fromAmino(object: MarketOrderIndicatorAmino): MarketOrderIndicator {
    return {
      marketId: object.market_id,
      isBuy: object.isBuy
    };
  },
  toAmino(message: MarketOrderIndicator): MarketOrderIndicatorAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.isBuy = message.isBuy;
    return obj;
  },
  fromAminoMsg(object: MarketOrderIndicatorAminoMsg): MarketOrderIndicator {
    return MarketOrderIndicator.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketOrderIndicatorProtoMsg): MarketOrderIndicator {
    return MarketOrderIndicator.decode(message.value);
  },
  toProto(message: MarketOrderIndicator): Uint8Array {
    return MarketOrderIndicator.encode(message).finish();
  },
  toProtoMsg(message: MarketOrderIndicator): MarketOrderIndicatorProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator",
      value: MarketOrderIndicator.encode(message).finish()
    };
  }
};
function createBaseTradeLog(): TradeLog {
  return {
    quantity: "",
    price: "",
    subaccountId: new Uint8Array(),
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined
  };
}
export const TradeLog = {
  typeUrl: "/injective.exchange.v1beta1.TradeLog",
  encode(message: TradeLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(26).bytes(message.subaccountId);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(50).bytes(message.feeRecipientAddress);
    }
    return writer;
  },
  fromJSON(object: any): TradeLog {
    return {
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      price: isSet(object.price) ? String(object.price) : "",
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
      fee: isSet(object.fee) ? String(object.fee) : "",
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
      feeRecipientAddress: isSet(object.feeRecipientAddress) ? bytesFromBase64(object.feeRecipientAddress) : undefined
    };
  },
  fromPartial(object: Partial<TradeLog>): TradeLog {
    const message = createBaseTradeLog();
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    return message;
  },
  fromAmino(object: TradeLogAmino): TradeLog {
    return {
      quantity: object.quantity,
      price: object.price,
      subaccountId: object.subaccount_id,
      fee: object.fee,
      orderHash: object.order_hash,
      feeRecipientAddress: object?.fee_recipient_address
    };
  },
  toAmino(message: TradeLog): TradeLogAmino {
    const obj: any = {};
    obj.quantity = message.quantity;
    obj.price = message.price;
    obj.subaccount_id = message.subaccountId;
    obj.fee = message.fee;
    obj.order_hash = message.orderHash;
    obj.fee_recipient_address = message.feeRecipientAddress;
    return obj;
  },
  fromAminoMsg(object: TradeLogAminoMsg): TradeLog {
    return TradeLog.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeLogProtoMsg): TradeLog {
    return TradeLog.decode(message.value);
  },
  toProto(message: TradeLog): Uint8Array {
    return TradeLog.encode(message).finish();
  },
  toProtoMsg(message: TradeLog): TradeLogProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeLog",
      value: TradeLog.encode(message).finish()
    };
  }
};
function createBasePositionDelta(): PositionDelta {
  return {
    isLong: false,
    executionQuantity: "",
    executionMargin: "",
    executionPrice: ""
  };
}
export const PositionDelta = {
  typeUrl: "/injective.exchange.v1beta1.PositionDelta",
  encode(message: PositionDelta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.executionQuantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.executionQuantity, 18).atomics);
    }
    if (message.executionMargin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.executionMargin, 18).atomics);
    }
    if (message.executionPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.executionPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): PositionDelta {
    return {
      isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
      executionQuantity: isSet(object.executionQuantity) ? String(object.executionQuantity) : "",
      executionMargin: isSet(object.executionMargin) ? String(object.executionMargin) : "",
      executionPrice: isSet(object.executionPrice) ? String(object.executionPrice) : ""
    };
  },
  fromPartial(object: Partial<PositionDelta>): PositionDelta {
    const message = createBasePositionDelta();
    message.isLong = object.isLong ?? false;
    message.executionQuantity = object.executionQuantity ?? "";
    message.executionMargin = object.executionMargin ?? "";
    message.executionPrice = object.executionPrice ?? "";
    return message;
  },
  fromAmino(object: PositionDeltaAmino): PositionDelta {
    return {
      isLong: object.is_long,
      executionQuantity: object.execution_quantity,
      executionMargin: object.execution_margin,
      executionPrice: object.execution_price
    };
  },
  toAmino(message: PositionDelta): PositionDeltaAmino {
    const obj: any = {};
    obj.is_long = message.isLong;
    obj.execution_quantity = message.executionQuantity;
    obj.execution_margin = message.executionMargin;
    obj.execution_price = message.executionPrice;
    return obj;
  },
  fromAminoMsg(object: PositionDeltaAminoMsg): PositionDelta {
    return PositionDelta.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionDeltaProtoMsg): PositionDelta {
    return PositionDelta.decode(message.value);
  },
  toProto(message: PositionDelta): Uint8Array {
    return PositionDelta.encode(message).finish();
  },
  toProtoMsg(message: PositionDelta): PositionDeltaProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PositionDelta",
      value: PositionDelta.encode(message).finish()
    };
  }
};
function createBaseDerivativeTradeLog(): DerivativeTradeLog {
  return {
    subaccountId: new Uint8Array(),
    positionDelta: PositionDelta.fromPartial({}),
    payout: "",
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined
  };
}
export const DerivativeTradeLog = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog",
  encode(message: DerivativeTradeLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(18).fork()).ldelim();
    }
    if (message.payout !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.payout, 18).atomics);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(50).bytes(message.feeRecipientAddress);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeTradeLog {
    return {
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
      positionDelta: isSet(object.positionDelta) ? PositionDelta.fromJSON(object.positionDelta) : undefined,
      payout: isSet(object.payout) ? String(object.payout) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
      feeRecipientAddress: isSet(object.feeRecipientAddress) ? bytesFromBase64(object.feeRecipientAddress) : undefined
    };
  },
  fromPartial(object: Partial<DerivativeTradeLog>): DerivativeTradeLog {
    const message = createBaseDerivativeTradeLog();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.positionDelta = object.positionDelta !== undefined && object.positionDelta !== null ? PositionDelta.fromPartial(object.positionDelta) : undefined;
    message.payout = object.payout ?? "";
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    return message;
  },
  fromAmino(object: DerivativeTradeLogAmino): DerivativeTradeLog {
    return {
      subaccountId: object.subaccount_id,
      positionDelta: object?.position_delta ? PositionDelta.fromAmino(object.position_delta) : undefined,
      payout: object.payout,
      fee: object.fee,
      orderHash: object.order_hash,
      feeRecipientAddress: object?.fee_recipient_address
    };
  },
  toAmino(message: DerivativeTradeLog): DerivativeTradeLogAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.position_delta = message.positionDelta ? PositionDelta.toAmino(message.positionDelta) : undefined;
    obj.payout = message.payout;
    obj.fee = message.fee;
    obj.order_hash = message.orderHash;
    obj.fee_recipient_address = message.feeRecipientAddress;
    return obj;
  },
  fromAminoMsg(object: DerivativeTradeLogAminoMsg): DerivativeTradeLog {
    return DerivativeTradeLog.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeTradeLogProtoMsg): DerivativeTradeLog {
    return DerivativeTradeLog.decode(message.value);
  },
  toProto(message: DerivativeTradeLog): Uint8Array {
    return DerivativeTradeLog.encode(message).finish();
  },
  toProtoMsg(message: DerivativeTradeLog): DerivativeTradeLogProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog",
      value: DerivativeTradeLog.encode(message).finish()
    };
  }
};
function createBaseSubaccountPosition(): SubaccountPosition {
  return {
    position: Position.fromPartial({}),
    subaccountId: new Uint8Array()
  };
}
export const SubaccountPosition = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountPosition",
  encode(message: SubaccountPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountPosition {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SubaccountPosition>): SubaccountPosition {
    const message = createBaseSubaccountPosition();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SubaccountPositionAmino): SubaccountPosition {
    return {
      position: object?.position ? Position.fromAmino(object.position) : undefined,
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: SubaccountPosition): SubaccountPositionAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: SubaccountPositionAminoMsg): SubaccountPosition {
    return SubaccountPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountPositionProtoMsg): SubaccountPosition {
    return SubaccountPosition.decode(message.value);
  },
  toProto(message: SubaccountPosition): Uint8Array {
    return SubaccountPosition.encode(message).finish();
  },
  toProtoMsg(message: SubaccountPosition): SubaccountPositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountPosition",
      value: SubaccountPosition.encode(message).finish()
    };
  }
};
function createBaseSubaccountDeposit(): SubaccountDeposit {
  return {
    subaccountId: new Uint8Array(),
    deposit: Deposit.fromPartial({})
  };
}
export const SubaccountDeposit = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit",
  encode(message: SubaccountDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SubaccountDeposit {
    return {
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
    };
  },
  fromPartial(object: Partial<SubaccountDeposit>): SubaccountDeposit {
    const message = createBaseSubaccountDeposit();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: SubaccountDepositAmino): SubaccountDeposit {
    return {
      subaccountId: object.subaccount_id,
      deposit: object?.deposit ? Deposit.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: SubaccountDeposit): SubaccountDepositAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountDepositAminoMsg): SubaccountDeposit {
    return SubaccountDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountDepositProtoMsg): SubaccountDeposit {
    return SubaccountDeposit.decode(message.value);
  },
  toProto(message: SubaccountDeposit): Uint8Array {
    return SubaccountDeposit.encode(message).finish();
  },
  toProtoMsg(message: SubaccountDeposit): SubaccountDepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit",
      value: SubaccountDeposit.encode(message).finish()
    };
  }
};
function createBaseDepositUpdate(): DepositUpdate {
  return {
    denom: "",
    deposits: []
  };
}
export const DepositUpdate = {
  typeUrl: "/injective.exchange.v1beta1.DepositUpdate",
  encode(message: DepositUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.deposits) {
      SubaccountDeposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DepositUpdate {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => SubaccountDeposit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DepositUpdate>): DepositUpdate {
    const message = createBaseDepositUpdate();
    message.denom = object.denom ?? "";
    message.deposits = object.deposits?.map(e => SubaccountDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositUpdateAmino): DepositUpdate {
    return {
      denom: object.denom,
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => SubaccountDeposit.fromAmino(e)) : []
    };
  },
  toAmino(message: DepositUpdate): DepositUpdateAmino {
    const obj: any = {};
    obj.denom = message.denom;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? SubaccountDeposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositUpdateAminoMsg): DepositUpdate {
    return DepositUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositUpdateProtoMsg): DepositUpdate {
    return DepositUpdate.decode(message.value);
  },
  toProto(message: DepositUpdate): Uint8Array {
    return DepositUpdate.encode(message).finish();
  },
  toProtoMsg(message: DepositUpdate): DepositUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DepositUpdate",
      value: DepositUpdate.encode(message).finish()
    };
  }
};
function createBasePointsMultiplier(): PointsMultiplier {
  return {
    makerPointsMultiplier: "",
    takerPointsMultiplier: ""
  };
}
export const PointsMultiplier = {
  typeUrl: "/injective.exchange.v1beta1.PointsMultiplier",
  encode(message: PointsMultiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerPointsMultiplier !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.makerPointsMultiplier, 18).atomics);
    }
    if (message.takerPointsMultiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.takerPointsMultiplier, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): PointsMultiplier {
    return {
      makerPointsMultiplier: isSet(object.makerPointsMultiplier) ? String(object.makerPointsMultiplier) : "",
      takerPointsMultiplier: isSet(object.takerPointsMultiplier) ? String(object.takerPointsMultiplier) : ""
    };
  },
  fromPartial(object: Partial<PointsMultiplier>): PointsMultiplier {
    const message = createBasePointsMultiplier();
    message.makerPointsMultiplier = object.makerPointsMultiplier ?? "";
    message.takerPointsMultiplier = object.takerPointsMultiplier ?? "";
    return message;
  },
  fromAmino(object: PointsMultiplierAmino): PointsMultiplier {
    return {
      makerPointsMultiplier: object.maker_points_multiplier,
      takerPointsMultiplier: object.taker_points_multiplier
    };
  },
  toAmino(message: PointsMultiplier): PointsMultiplierAmino {
    const obj: any = {};
    obj.maker_points_multiplier = message.makerPointsMultiplier;
    obj.taker_points_multiplier = message.takerPointsMultiplier;
    return obj;
  },
  fromAminoMsg(object: PointsMultiplierAminoMsg): PointsMultiplier {
    return PointsMultiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: PointsMultiplierProtoMsg): PointsMultiplier {
    return PointsMultiplier.decode(message.value);
  },
  toProto(message: PointsMultiplier): Uint8Array {
    return PointsMultiplier.encode(message).finish();
  },
  toProtoMsg(message: PointsMultiplier): PointsMultiplierProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PointsMultiplier",
      value: PointsMultiplier.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCampaignBoostInfo(): TradingRewardCampaignBoostInfo {
  return {
    boostedSpotMarketIds: [],
    spotMarketMultipliers: [],
    boostedDerivativeMarketIds: [],
    derivativeMarketMultipliers: []
  };
}
export const TradingRewardCampaignBoostInfo = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo",
  encode(message: TradingRewardCampaignBoostInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.boostedSpotMarketIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.spotMarketMultipliers) {
      PointsMultiplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.boostedDerivativeMarketIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.derivativeMarketMultipliers) {
      PointsMultiplier.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignBoostInfo {
    return {
      boostedSpotMarketIds: Array.isArray(object?.boostedSpotMarketIds) ? object.boostedSpotMarketIds.map((e: any) => String(e)) : [],
      spotMarketMultipliers: Array.isArray(object?.spotMarketMultipliers) ? object.spotMarketMultipliers.map((e: any) => PointsMultiplier.fromJSON(e)) : [],
      boostedDerivativeMarketIds: Array.isArray(object?.boostedDerivativeMarketIds) ? object.boostedDerivativeMarketIds.map((e: any) => String(e)) : [],
      derivativeMarketMultipliers: Array.isArray(object?.derivativeMarketMultipliers) ? object.derivativeMarketMultipliers.map((e: any) => PointsMultiplier.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignBoostInfo>): TradingRewardCampaignBoostInfo {
    const message = createBaseTradingRewardCampaignBoostInfo();
    message.boostedSpotMarketIds = object.boostedSpotMarketIds?.map(e => e) || [];
    message.spotMarketMultipliers = object.spotMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
    message.boostedDerivativeMarketIds = object.boostedDerivativeMarketIds?.map(e => e) || [];
    message.derivativeMarketMultipliers = object.derivativeMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignBoostInfoAmino): TradingRewardCampaignBoostInfo {
    return {
      boostedSpotMarketIds: Array.isArray(object?.boosted_spot_market_ids) ? object.boosted_spot_market_ids.map((e: any) => e) : [],
      spotMarketMultipliers: Array.isArray(object?.spot_market_multipliers) ? object.spot_market_multipliers.map((e: any) => PointsMultiplier.fromAmino(e)) : [],
      boostedDerivativeMarketIds: Array.isArray(object?.boosted_derivative_market_ids) ? object.boosted_derivative_market_ids.map((e: any) => e) : [],
      derivativeMarketMultipliers: Array.isArray(object?.derivative_market_multipliers) ? object.derivative_market_multipliers.map((e: any) => PointsMultiplier.fromAmino(e)) : []
    };
  },
  toAmino(message: TradingRewardCampaignBoostInfo): TradingRewardCampaignBoostInfoAmino {
    const obj: any = {};
    if (message.boostedSpotMarketIds) {
      obj.boosted_spot_market_ids = message.boostedSpotMarketIds.map(e => e);
    } else {
      obj.boosted_spot_market_ids = [];
    }
    if (message.spotMarketMultipliers) {
      obj.spot_market_multipliers = message.spotMarketMultipliers.map(e => e ? PointsMultiplier.toAmino(e) : undefined);
    } else {
      obj.spot_market_multipliers = [];
    }
    if (message.boostedDerivativeMarketIds) {
      obj.boosted_derivative_market_ids = message.boostedDerivativeMarketIds.map(e => e);
    } else {
      obj.boosted_derivative_market_ids = [];
    }
    if (message.derivativeMarketMultipliers) {
      obj.derivative_market_multipliers = message.derivativeMarketMultipliers.map(e => e ? PointsMultiplier.toAmino(e) : undefined);
    } else {
      obj.derivative_market_multipliers = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignBoostInfoAminoMsg): TradingRewardCampaignBoostInfo {
    return TradingRewardCampaignBoostInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignBoostInfoProtoMsg): TradingRewardCampaignBoostInfo {
    return TradingRewardCampaignBoostInfo.decode(message.value);
  },
  toProto(message: TradingRewardCampaignBoostInfo): Uint8Array {
    return TradingRewardCampaignBoostInfo.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignBoostInfo): TradingRewardCampaignBoostInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo",
      value: TradingRewardCampaignBoostInfo.encode(message).finish()
    };
  }
};
function createBaseCampaignRewardPool(): CampaignRewardPool {
  return {
    startTimestamp: BigInt(0),
    maxCampaignRewards: []
  };
}
export const CampaignRewardPool = {
  typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool",
  encode(message: CampaignRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.startTimestamp);
    }
    for (const v of message.maxCampaignRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CampaignRewardPool {
    return {
      startTimestamp: isSet(object.startTimestamp) ? BigInt(object.startTimestamp.toString()) : BigInt(0),
      maxCampaignRewards: Array.isArray(object?.maxCampaignRewards) ? object.maxCampaignRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CampaignRewardPool>): CampaignRewardPool {
    const message = createBaseCampaignRewardPool();
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? BigInt(object.startTimestamp.toString()) : BigInt(0);
    message.maxCampaignRewards = object.maxCampaignRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CampaignRewardPoolAmino): CampaignRewardPool {
    return {
      startTimestamp: BigInt(object.start_timestamp),
      maxCampaignRewards: Array.isArray(object?.max_campaign_rewards) ? object.max_campaign_rewards.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CampaignRewardPool): CampaignRewardPoolAmino {
    const obj: any = {};
    obj.start_timestamp = message.startTimestamp ? message.startTimestamp.toString() : undefined;
    if (message.maxCampaignRewards) {
      obj.max_campaign_rewards = message.maxCampaignRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_campaign_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: CampaignRewardPoolAminoMsg): CampaignRewardPool {
    return CampaignRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: CampaignRewardPoolProtoMsg): CampaignRewardPool {
    return CampaignRewardPool.decode(message.value);
  },
  toProto(message: CampaignRewardPool): Uint8Array {
    return CampaignRewardPool.encode(message).finish();
  },
  toProtoMsg(message: CampaignRewardPool): CampaignRewardPoolProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool",
      value: CampaignRewardPool.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCampaignInfo(): TradingRewardCampaignInfo {
  return {
    campaignDurationSeconds: BigInt(0),
    quoteDenoms: [],
    tradingRewardBoostInfo: TradingRewardCampaignBoostInfo.fromPartial({}),
    disqualifiedMarketIds: []
  };
}
export const TradingRewardCampaignInfo = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo",
  encode(message: TradingRewardCampaignInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignDurationSeconds !== BigInt(0)) {
      writer.uint32(8).int64(message.campaignDurationSeconds);
    }
    for (const v of message.quoteDenoms) {
      writer.uint32(18).string(v!);
    }
    if (message.tradingRewardBoostInfo !== undefined) {
      TradingRewardCampaignBoostInfo.encode(message.tradingRewardBoostInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.disqualifiedMarketIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignInfo {
    return {
      campaignDurationSeconds: isSet(object.campaignDurationSeconds) ? BigInt(object.campaignDurationSeconds.toString()) : BigInt(0),
      quoteDenoms: Array.isArray(object?.quoteDenoms) ? object.quoteDenoms.map((e: any) => String(e)) : [],
      tradingRewardBoostInfo: isSet(object.tradingRewardBoostInfo) ? TradingRewardCampaignBoostInfo.fromJSON(object.tradingRewardBoostInfo) : undefined,
      disqualifiedMarketIds: Array.isArray(object?.disqualifiedMarketIds) ? object.disqualifiedMarketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignInfo>): TradingRewardCampaignInfo {
    const message = createBaseTradingRewardCampaignInfo();
    message.campaignDurationSeconds = object.campaignDurationSeconds !== undefined && object.campaignDurationSeconds !== null ? BigInt(object.campaignDurationSeconds.toString()) : BigInt(0);
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tradingRewardBoostInfo = object.tradingRewardBoostInfo !== undefined && object.tradingRewardBoostInfo !== null ? TradingRewardCampaignBoostInfo.fromPartial(object.tradingRewardBoostInfo) : undefined;
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignInfoAmino): TradingRewardCampaignInfo {
    return {
      campaignDurationSeconds: BigInt(object.campaign_duration_seconds),
      quoteDenoms: Array.isArray(object?.quote_denoms) ? object.quote_denoms.map((e: any) => e) : [],
      tradingRewardBoostInfo: object?.trading_reward_boost_info ? TradingRewardCampaignBoostInfo.fromAmino(object.trading_reward_boost_info) : undefined,
      disqualifiedMarketIds: Array.isArray(object?.disqualified_market_ids) ? object.disqualified_market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: TradingRewardCampaignInfo): TradingRewardCampaignInfoAmino {
    const obj: any = {};
    obj.campaign_duration_seconds = message.campaignDurationSeconds ? message.campaignDurationSeconds.toString() : undefined;
    if (message.quoteDenoms) {
      obj.quote_denoms = message.quoteDenoms.map(e => e);
    } else {
      obj.quote_denoms = [];
    }
    obj.trading_reward_boost_info = message.tradingRewardBoostInfo ? TradingRewardCampaignBoostInfo.toAmino(message.tradingRewardBoostInfo) : undefined;
    if (message.disqualifiedMarketIds) {
      obj.disqualified_market_ids = message.disqualifiedMarketIds.map(e => e);
    } else {
      obj.disqualified_market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignInfoAminoMsg): TradingRewardCampaignInfo {
    return TradingRewardCampaignInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignInfoProtoMsg): TradingRewardCampaignInfo {
    return TradingRewardCampaignInfo.decode(message.value);
  },
  toProto(message: TradingRewardCampaignInfo): Uint8Array {
    return TradingRewardCampaignInfo.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignInfo): TradingRewardCampaignInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo",
      value: TradingRewardCampaignInfo.encode(message).finish()
    };
  }
};
function createBaseFeeDiscountTierInfo(): FeeDiscountTierInfo {
  return {
    makerDiscountRate: "",
    takerDiscountRate: "",
    stakedAmount: "",
    volume: ""
  };
}
export const FeeDiscountTierInfo = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo",
  encode(message: FeeDiscountTierInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerDiscountRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.makerDiscountRate, 18).atomics);
    }
    if (message.takerDiscountRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.takerDiscountRate, 18).atomics);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(26).string(message.stakedAmount);
    }
    if (message.volume !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountTierInfo {
    return {
      makerDiscountRate: isSet(object.makerDiscountRate) ? String(object.makerDiscountRate) : "",
      takerDiscountRate: isSet(object.takerDiscountRate) ? String(object.takerDiscountRate) : "",
      stakedAmount: isSet(object.stakedAmount) ? String(object.stakedAmount) : "",
      volume: isSet(object.volume) ? String(object.volume) : ""
    };
  },
  fromPartial(object: Partial<FeeDiscountTierInfo>): FeeDiscountTierInfo {
    const message = createBaseFeeDiscountTierInfo();
    message.makerDiscountRate = object.makerDiscountRate ?? "";
    message.takerDiscountRate = object.takerDiscountRate ?? "";
    message.stakedAmount = object.stakedAmount ?? "";
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: FeeDiscountTierInfoAmino): FeeDiscountTierInfo {
    return {
      makerDiscountRate: object.maker_discount_rate,
      takerDiscountRate: object.taker_discount_rate,
      stakedAmount: object.staked_amount,
      volume: object.volume
    };
  },
  toAmino(message: FeeDiscountTierInfo): FeeDiscountTierInfoAmino {
    const obj: any = {};
    obj.maker_discount_rate = message.makerDiscountRate;
    obj.taker_discount_rate = message.takerDiscountRate;
    obj.staked_amount = message.stakedAmount;
    obj.volume = message.volume;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountTierInfoAminoMsg): FeeDiscountTierInfo {
    return FeeDiscountTierInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountTierInfoProtoMsg): FeeDiscountTierInfo {
    return FeeDiscountTierInfo.decode(message.value);
  },
  toProto(message: FeeDiscountTierInfo): Uint8Array {
    return FeeDiscountTierInfo.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountTierInfo): FeeDiscountTierInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo",
      value: FeeDiscountTierInfo.encode(message).finish()
    };
  }
};
function createBaseFeeDiscountSchedule(): FeeDiscountSchedule {
  return {
    bucketCount: BigInt(0),
    bucketDuration: BigInt(0),
    quoteDenoms: [],
    tierInfos: [],
    disqualifiedMarketIds: []
  };
}
export const FeeDiscountSchedule = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule",
  encode(message: FeeDiscountSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bucketCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.bucketCount);
    }
    if (message.bucketDuration !== BigInt(0)) {
      writer.uint32(16).int64(message.bucketDuration);
    }
    for (const v of message.quoteDenoms) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.tierInfos) {
      FeeDiscountTierInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.disqualifiedMarketIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountSchedule {
    return {
      bucketCount: isSet(object.bucketCount) ? BigInt(object.bucketCount.toString()) : BigInt(0),
      bucketDuration: isSet(object.bucketDuration) ? BigInt(object.bucketDuration.toString()) : BigInt(0),
      quoteDenoms: Array.isArray(object?.quoteDenoms) ? object.quoteDenoms.map((e: any) => String(e)) : [],
      tierInfos: Array.isArray(object?.tierInfos) ? object.tierInfos.map((e: any) => FeeDiscountTierInfo.fromJSON(e)) : [],
      disqualifiedMarketIds: Array.isArray(object?.disqualifiedMarketIds) ? object.disqualifiedMarketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<FeeDiscountSchedule>): FeeDiscountSchedule {
    const message = createBaseFeeDiscountSchedule();
    message.bucketCount = object.bucketCount !== undefined && object.bucketCount !== null ? BigInt(object.bucketCount.toString()) : BigInt(0);
    message.bucketDuration = object.bucketDuration !== undefined && object.bucketDuration !== null ? BigInt(object.bucketDuration.toString()) : BigInt(0);
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tierInfos = object.tierInfos?.map(e => FeeDiscountTierInfo.fromPartial(e)) || [];
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: FeeDiscountScheduleAmino): FeeDiscountSchedule {
    return {
      bucketCount: BigInt(object.bucket_count),
      bucketDuration: BigInt(object.bucket_duration),
      quoteDenoms: Array.isArray(object?.quote_denoms) ? object.quote_denoms.map((e: any) => e) : [],
      tierInfos: Array.isArray(object?.tier_infos) ? object.tier_infos.map((e: any) => FeeDiscountTierInfo.fromAmino(e)) : [],
      disqualifiedMarketIds: Array.isArray(object?.disqualified_market_ids) ? object.disqualified_market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: FeeDiscountSchedule): FeeDiscountScheduleAmino {
    const obj: any = {};
    obj.bucket_count = message.bucketCount ? message.bucketCount.toString() : undefined;
    obj.bucket_duration = message.bucketDuration ? message.bucketDuration.toString() : undefined;
    if (message.quoteDenoms) {
      obj.quote_denoms = message.quoteDenoms.map(e => e);
    } else {
      obj.quote_denoms = [];
    }
    if (message.tierInfos) {
      obj.tier_infos = message.tierInfos.map(e => e ? FeeDiscountTierInfo.toAmino(e) : undefined);
    } else {
      obj.tier_infos = [];
    }
    if (message.disqualifiedMarketIds) {
      obj.disqualified_market_ids = message.disqualifiedMarketIds.map(e => e);
    } else {
      obj.disqualified_market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeeDiscountScheduleAminoMsg): FeeDiscountSchedule {
    return FeeDiscountSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountScheduleProtoMsg): FeeDiscountSchedule {
    return FeeDiscountSchedule.decode(message.value);
  },
  toProto(message: FeeDiscountSchedule): Uint8Array {
    return FeeDiscountSchedule.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountSchedule): FeeDiscountScheduleProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule",
      value: FeeDiscountSchedule.encode(message).finish()
    };
  }
};
function createBaseFeeDiscountTierTTL(): FeeDiscountTierTTL {
  return {
    tier: BigInt(0),
    ttlTimestamp: BigInt(0)
  };
}
export const FeeDiscountTierTTL = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL",
  encode(message: FeeDiscountTierTTL, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tier !== BigInt(0)) {
      writer.uint32(8).uint64(message.tier);
    }
    if (message.ttlTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.ttlTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountTierTTL {
    return {
      tier: isSet(object.tier) ? BigInt(object.tier.toString()) : BigInt(0),
      ttlTimestamp: isSet(object.ttlTimestamp) ? BigInt(object.ttlTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<FeeDiscountTierTTL>): FeeDiscountTierTTL {
    const message = createBaseFeeDiscountTierTTL();
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.ttlTimestamp = object.ttlTimestamp !== undefined && object.ttlTimestamp !== null ? BigInt(object.ttlTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeeDiscountTierTTLAmino): FeeDiscountTierTTL {
    return {
      tier: BigInt(object.tier),
      ttlTimestamp: BigInt(object.ttl_timestamp)
    };
  },
  toAmino(message: FeeDiscountTierTTL): FeeDiscountTierTTLAmino {
    const obj: any = {};
    obj.tier = message.tier ? message.tier.toString() : undefined;
    obj.ttl_timestamp = message.ttlTimestamp ? message.ttlTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountTierTTLAminoMsg): FeeDiscountTierTTL {
    return FeeDiscountTierTTL.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountTierTTLProtoMsg): FeeDiscountTierTTL {
    return FeeDiscountTierTTL.decode(message.value);
  },
  toProto(message: FeeDiscountTierTTL): Uint8Array {
    return FeeDiscountTierTTL.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountTierTTL): FeeDiscountTierTTLProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL",
      value: FeeDiscountTierTTL.encode(message).finish()
    };
  }
};
function createBaseVolumeRecord(): VolumeRecord {
  return {
    makerVolume: "",
    takerVolume: ""
  };
}
export const VolumeRecord = {
  typeUrl: "/injective.exchange.v1beta1.VolumeRecord",
  encode(message: VolumeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerVolume !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.makerVolume, 18).atomics);
    }
    if (message.takerVolume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.takerVolume, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): VolumeRecord {
    return {
      makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
      takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : ""
    };
  },
  fromPartial(object: Partial<VolumeRecord>): VolumeRecord {
    const message = createBaseVolumeRecord();
    message.makerVolume = object.makerVolume ?? "";
    message.takerVolume = object.takerVolume ?? "";
    return message;
  },
  fromAmino(object: VolumeRecordAmino): VolumeRecord {
    return {
      makerVolume: object.maker_volume,
      takerVolume: object.taker_volume
    };
  },
  toAmino(message: VolumeRecord): VolumeRecordAmino {
    const obj: any = {};
    obj.maker_volume = message.makerVolume;
    obj.taker_volume = message.takerVolume;
    return obj;
  },
  fromAminoMsg(object: VolumeRecordAminoMsg): VolumeRecord {
    return VolumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: VolumeRecordProtoMsg): VolumeRecord {
    return VolumeRecord.decode(message.value);
  },
  toProto(message: VolumeRecord): Uint8Array {
    return VolumeRecord.encode(message).finish();
  },
  toProtoMsg(message: VolumeRecord): VolumeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.VolumeRecord",
      value: VolumeRecord.encode(message).finish()
    };
  }
};
function createBaseAccountRewards(): AccountRewards {
  return {
    account: "",
    rewards: []
  };
}
export const AccountRewards = {
  typeUrl: "/injective.exchange.v1beta1.AccountRewards",
  encode(message: AccountRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountRewards {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountRewards>): AccountRewards {
    const message = createBaseAccountRewards();
    message.account = object.account ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AccountRewardsAmino): AccountRewards {
    return {
      account: object.account,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: AccountRewards): AccountRewardsAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: AccountRewardsAminoMsg): AccountRewards {
    return AccountRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountRewardsProtoMsg): AccountRewards {
    return AccountRewards.decode(message.value);
  },
  toProto(message: AccountRewards): Uint8Array {
    return AccountRewards.encode(message).finish();
  },
  toProtoMsg(message: AccountRewards): AccountRewardsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AccountRewards",
      value: AccountRewards.encode(message).finish()
    };
  }
};
function createBaseTradeRecords(): TradeRecords {
  return {
    marketId: "",
    latestTradeRecords: []
  };
}
export const TradeRecords = {
  typeUrl: "/injective.exchange.v1beta1.TradeRecords",
  encode(message: TradeRecords, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.latestTradeRecords) {
      TradeRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradeRecords {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      latestTradeRecords: Array.isArray(object?.latestTradeRecords) ? object.latestTradeRecords.map((e: any) => TradeRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradeRecords>): TradeRecords {
    const message = createBaseTradeRecords();
    message.marketId = object.marketId ?? "";
    message.latestTradeRecords = object.latestTradeRecords?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradeRecordsAmino): TradeRecords {
    return {
      marketId: object.market_id,
      latestTradeRecords: Array.isArray(object?.latest_trade_records) ? object.latest_trade_records.map((e: any) => TradeRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: TradeRecords): TradeRecordsAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    if (message.latestTradeRecords) {
      obj.latest_trade_records = message.latestTradeRecords.map(e => e ? TradeRecord.toAmino(e) : undefined);
    } else {
      obj.latest_trade_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradeRecordsAminoMsg): TradeRecords {
    return TradeRecords.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeRecordsProtoMsg): TradeRecords {
    return TradeRecords.decode(message.value);
  },
  toProto(message: TradeRecords): Uint8Array {
    return TradeRecords.encode(message).finish();
  },
  toProtoMsg(message: TradeRecords): TradeRecordsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeRecords",
      value: TradeRecords.encode(message).finish()
    };
  }
};
function createBaseSubaccountIDs(): SubaccountIDs {
  return {
    subaccountIds: []
  };
}
export const SubaccountIDs = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountIDs",
  encode(message: SubaccountIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountIDs {
    return {
      subaccountIds: Array.isArray(object?.subaccountIds) ? object.subaccountIds.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<SubaccountIDs>): SubaccountIDs {
    const message = createBaseSubaccountIDs();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubaccountIDsAmino): SubaccountIDs {
    return {
      subaccountIds: Array.isArray(object?.subaccount_ids) ? object.subaccount_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: SubaccountIDs): SubaccountIDsAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e);
    } else {
      obj.subaccount_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubaccountIDsAminoMsg): SubaccountIDs {
    return SubaccountIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountIDsProtoMsg): SubaccountIDs {
    return SubaccountIDs.decode(message.value);
  },
  toProto(message: SubaccountIDs): Uint8Array {
    return SubaccountIDs.encode(message).finish();
  },
  toProtoMsg(message: SubaccountIDs): SubaccountIDsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountIDs",
      value: SubaccountIDs.encode(message).finish()
    };
  }
};
function createBaseTradeRecord(): TradeRecord {
  return {
    timestamp: BigInt(0),
    price: "",
    quantity: ""
  };
}
export const TradeRecord = {
  typeUrl: "/injective.exchange.v1beta1.TradeRecord",
  encode(message: TradeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): TradeRecord {
    return {
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : ""
    };
  },
  fromPartial(object: Partial<TradeRecord>): TradeRecord {
    const message = createBaseTradeRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  },
  fromAmino(object: TradeRecordAmino): TradeRecord {
    return {
      timestamp: BigInt(object.timestamp),
      price: object.price,
      quantity: object.quantity
    };
  },
  toAmino(message: TradeRecord): TradeRecordAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.price = message.price;
    obj.quantity = message.quantity;
    return obj;
  },
  fromAminoMsg(object: TradeRecordAminoMsg): TradeRecord {
    return TradeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeRecordProtoMsg): TradeRecord {
    return TradeRecord.decode(message.value);
  },
  toProto(message: TradeRecord): Uint8Array {
    return TradeRecord.encode(message).finish();
  },
  toProtoMsg(message: TradeRecord): TradeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeRecord",
      value: TradeRecord.encode(message).finish()
    };
  }
};
function createBaseLevel(): Level {
  return {
    p: "",
    q: ""
  };
}
export const Level = {
  typeUrl: "/injective.exchange.v1beta1.Level",
  encode(message: Level, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.p, 18).atomics);
    }
    if (message.q !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.q, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Level {
    return {
      p: isSet(object.p) ? String(object.p) : "",
      q: isSet(object.q) ? String(object.q) : ""
    };
  },
  fromPartial(object: Partial<Level>): Level {
    const message = createBaseLevel();
    message.p = object.p ?? "";
    message.q = object.q ?? "";
    return message;
  },
  fromAmino(object: LevelAmino): Level {
    return {
      p: object.p,
      q: object.q
    };
  },
  toAmino(message: Level): LevelAmino {
    const obj: any = {};
    obj.p = message.p;
    obj.q = message.q;
    return obj;
  },
  fromAminoMsg(object: LevelAminoMsg): Level {
    return Level.fromAmino(object.value);
  },
  fromProtoMsg(message: LevelProtoMsg): Level {
    return Level.decode(message.value);
  },
  toProto(message: Level): Uint8Array {
    return Level.encode(message).finish();
  },
  toProtoMsg(message: Level): LevelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Level",
      value: Level.encode(message).finish()
    };
  }
};
function createBaseAggregateSubaccountVolumeRecord(): AggregateSubaccountVolumeRecord {
  return {
    subaccountId: "",
    marketVolumes: []
  };
}
export const AggregateSubaccountVolumeRecord = {
  typeUrl: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord",
  encode(message: AggregateSubaccountVolumeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketVolumes) {
      MarketVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AggregateSubaccountVolumeRecord {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketVolumes: Array.isArray(object?.marketVolumes) ? object.marketVolumes.map((e: any) => MarketVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AggregateSubaccountVolumeRecord>): AggregateSubaccountVolumeRecord {
    const message = createBaseAggregateSubaccountVolumeRecord();
    message.subaccountId = object.subaccountId ?? "";
    message.marketVolumes = object.marketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AggregateSubaccountVolumeRecordAmino): AggregateSubaccountVolumeRecord {
    return {
      subaccountId: object.subaccount_id,
      marketVolumes: Array.isArray(object?.market_volumes) ? object.market_volumes.map((e: any) => MarketVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: AggregateSubaccountVolumeRecord): AggregateSubaccountVolumeRecordAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketVolumes) {
      obj.market_volumes = message.marketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.market_volumes = [];
    }
    return obj;
  },
  fromAminoMsg(object: AggregateSubaccountVolumeRecordAminoMsg): AggregateSubaccountVolumeRecord {
    return AggregateSubaccountVolumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateSubaccountVolumeRecordProtoMsg): AggregateSubaccountVolumeRecord {
    return AggregateSubaccountVolumeRecord.decode(message.value);
  },
  toProto(message: AggregateSubaccountVolumeRecord): Uint8Array {
    return AggregateSubaccountVolumeRecord.encode(message).finish();
  },
  toProtoMsg(message: AggregateSubaccountVolumeRecord): AggregateSubaccountVolumeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord",
      value: AggregateSubaccountVolumeRecord.encode(message).finish()
    };
  }
};
function createBaseAggregateAccountVolumeRecord(): AggregateAccountVolumeRecord {
  return {
    account: "",
    marketVolumes: []
  };
}
export const AggregateAccountVolumeRecord = {
  typeUrl: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord",
  encode(message: AggregateAccountVolumeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.marketVolumes) {
      MarketVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AggregateAccountVolumeRecord {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      marketVolumes: Array.isArray(object?.marketVolumes) ? object.marketVolumes.map((e: any) => MarketVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AggregateAccountVolumeRecord>): AggregateAccountVolumeRecord {
    const message = createBaseAggregateAccountVolumeRecord();
    message.account = object.account ?? "";
    message.marketVolumes = object.marketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AggregateAccountVolumeRecordAmino): AggregateAccountVolumeRecord {
    return {
      account: object.account,
      marketVolumes: Array.isArray(object?.market_volumes) ? object.market_volumes.map((e: any) => MarketVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: AggregateAccountVolumeRecord): AggregateAccountVolumeRecordAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.marketVolumes) {
      obj.market_volumes = message.marketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.market_volumes = [];
    }
    return obj;
  },
  fromAminoMsg(object: AggregateAccountVolumeRecordAminoMsg): AggregateAccountVolumeRecord {
    return AggregateAccountVolumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateAccountVolumeRecordProtoMsg): AggregateAccountVolumeRecord {
    return AggregateAccountVolumeRecord.decode(message.value);
  },
  toProto(message: AggregateAccountVolumeRecord): Uint8Array {
    return AggregateAccountVolumeRecord.encode(message).finish();
  },
  toProtoMsg(message: AggregateAccountVolumeRecord): AggregateAccountVolumeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord",
      value: AggregateAccountVolumeRecord.encode(message).finish()
    };
  }
};
function createBaseMarketVolume(): MarketVolume {
  return {
    marketId: "",
    volume: VolumeRecord.fromPartial({})
  };
}
export const MarketVolume = {
  typeUrl: "/injective.exchange.v1beta1.MarketVolume",
  encode(message: MarketVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.volume !== undefined) {
      VolumeRecord.encode(message.volume, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MarketVolume {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      volume: isSet(object.volume) ? VolumeRecord.fromJSON(object.volume) : undefined
    };
  },
  fromPartial(object: Partial<MarketVolume>): MarketVolume {
    const message = createBaseMarketVolume();
    message.marketId = object.marketId ?? "";
    message.volume = object.volume !== undefined && object.volume !== null ? VolumeRecord.fromPartial(object.volume) : undefined;
    return message;
  },
  fromAmino(object: MarketVolumeAmino): MarketVolume {
    return {
      marketId: object.market_id,
      volume: object?.volume ? VolumeRecord.fromAmino(object.volume) : undefined
    };
  },
  toAmino(message: MarketVolume): MarketVolumeAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.volume = message.volume ? VolumeRecord.toAmino(message.volume) : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketVolumeAminoMsg): MarketVolume {
    return MarketVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketVolumeProtoMsg): MarketVolume {
    return MarketVolume.decode(message.value);
  },
  toProto(message: MarketVolume): Uint8Array {
    return MarketVolume.encode(message).finish();
  },
  toProtoMsg(message: MarketVolume): MarketVolumeProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketVolume",
      value: MarketVolume.encode(message).finish()
    };
  }
};
function createBaseDenomDecimals(): DenomDecimals {
  return {
    denom: "",
    decimals: BigInt(0)
  };
}
export const DenomDecimals = {
  typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
  encode(message: DenomDecimals, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(16).uint64(message.decimals);
    }
    return writer;
  },
  fromJSON(object: any): DenomDecimals {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<DenomDecimals>): DenomDecimals {
    const message = createBaseDenomDecimals();
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DenomDecimalsAmino): DenomDecimals {
    return {
      denom: object.denom,
      decimals: BigInt(object.decimals)
    };
  },
  toAmino(message: DenomDecimals): DenomDecimalsAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomDecimalsAminoMsg): DenomDecimals {
    return DenomDecimals.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomDecimalsProtoMsg): DenomDecimals {
    return DenomDecimals.decode(message.value);
  },
  toProto(message: DenomDecimals): Uint8Array {
    return DenomDecimals.encode(message).finish();
  },
  toProtoMsg(message: DenomDecimals): DenomDecimalsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
      value: DenomDecimals.encode(message).finish()
    };
  }
};