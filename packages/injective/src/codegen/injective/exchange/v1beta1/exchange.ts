import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum AtomicMarketOrderAccessLevel {
  Nobody = 0,
  /** BeginBlockerSmartContractsOnly - currently unsupported */
  BeginBlockerSmartContractsOnly = 1,
  SmartContractsOnly = 2,
  Everyone = 3,
  UNRECOGNIZED = -1,
}
export const AtomicMarketOrderAccessLevelSDKType = AtomicMarketOrderAccessLevel;
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
  spotMarketInstantListingFee?: Coin;
  /**
   * derivative_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  derivativeMarketInstantListingFee?: Coin;
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
  defaultFundingInterval: Long;
  /**
   * funding_multiple defines the timestamp multiple that the funding timestamp
   * should be a multiple of
   */
  fundingMultiple: Long;
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
  tradingRewardsVestingDuration: Long;
  /**
   * liquidator_reward_share_rate defines the ratio of the split of the surplus
   * collateral that goes to the liquidator
   */
  liquidatorRewardShareRate: string;
  /**
   * binary_options_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  binaryOptionsMarketInstantListingFee?: Coin;
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
export interface ParamsSDKType {
  spot_market_instant_listing_fee?: CoinSDKType;
  derivative_market_instant_listing_fee?: CoinSDKType;
  default_spot_maker_fee_rate: string;
  default_spot_taker_fee_rate: string;
  default_derivative_maker_fee_rate: string;
  default_derivative_taker_fee_rate: string;
  default_initial_margin_ratio: string;
  default_maintenance_margin_ratio: string;
  default_funding_interval: Long;
  funding_multiple: Long;
  relayer_fee_share_rate: string;
  default_hourly_funding_rate_cap: string;
  default_hourly_interest_rate: string;
  max_derivative_order_side_count: number;
  inj_reward_staked_requirement_threshold: string;
  trading_rewards_vesting_duration: Long;
  liquidator_reward_share_rate: string;
  binary_options_market_instant_listing_fee?: CoinSDKType;
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
  expirationTimestamp: Long;
  /** expiration timestamp */
  settlementTimestamp: Long;
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
  settlementPrice: string;
}
/** An object describing a binary options market in Injective Protocol. */
export interface BinaryOptionsMarketSDKType {
  ticker: string;
  oracle_symbol: string;
  oracle_provider: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  expiration_timestamp: Long;
  settlement_timestamp: Long;
  admin: string;
  quote_denom: string;
  market_id: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  status: MarketStatus;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  settlement_price: string;
}
export interface ExpiryFuturesMarketInfo {
  /** market ID. */
  marketId: string;
  /**
   * expiration_timestamp defines the expiration time for a time expiry futures
   * market.
   */
  expirationTimestamp: Long;
  /**
   * expiration_twap_start_timestamp defines the start time of the TWAP
   * calculation window
   */
  twapStartTimestamp: Long;
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
export interface ExpiryFuturesMarketInfoSDKType {
  market_id: string;
  expiration_timestamp: Long;
  twap_start_timestamp: Long;
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
  nextFundingTimestamp: Long;
  /**
   * funding_interval defines the next funding interval in seconds of a
   * perpetual market.
   */
  fundingInterval: Long;
}
export interface PerpetualMarketInfoSDKType {
  market_id: string;
  hourly_funding_rate_cap: string;
  hourly_interest_rate: string;
  next_funding_timestamp: Long;
  funding_interval: Long;
}
export interface PerpetualMarketFunding {
  /** cumulative_funding defines the cumulative funding of a perpetual market. */
  cumulativeFunding: string;
  /**
   * cumulative_price defines the cumulative price for the current hour up to
   * the last timestamp
   */
  cumulativePrice: string;
  lastTimestamp: Long;
}
export interface PerpetualMarketFundingSDKType {
  cumulative_funding: string;
  cumulative_price: string;
  last_timestamp: Long;
}
export interface DerivativeMarketSettlementInfo {
  /** market ID. */
  marketId: string;
  /** settlement_price defines the settlement price */
  settlementPrice: string;
}
export interface DerivativeMarketSettlementInfoSDKType {
  market_id: string;
  settlement_price: string;
}
export interface NextFundingTimestamp {
  nextTimestamp: Long;
}
export interface NextFundingTimestampSDKType {
  next_timestamp: Long;
}
export interface MidPriceAndTOB {
  /** mid price of the market */
  midPrice: string;
  /** best buy price of the market */
  bestBuyPrice: string;
  /** best sell price of the market */
  bestSellPrice: string;
}
export interface MidPriceAndTOBSDKType {
  mid_price: string;
  best_buy_price: string;
  best_sell_price: string;
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
/** A subaccount's deposit for a given base currency */
export interface DepositSDKType {
  available_balance: string;
  total_balance: string;
}
export interface SubaccountTradeNonce {
  nonce: number;
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
  orderInfo?: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice: string;
}
export interface SpotOrderSDKType {
  market_id: string;
  order_info?: OrderInfoSDKType;
  order_type: OrderType;
  trigger_price: string;
}
/** A valid Spot limit order with Metadata. */
export interface SpotLimitOrder {
  /** order_info contains the information of the order */
  orderInfo?: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice: string;
  orderHash: Uint8Array;
}
/** A valid Spot limit order with Metadata. */
export interface SpotLimitOrderSDKType {
  order_info?: OrderInfoSDKType;
  order_type: OrderType;
  fillable: string;
  trigger_price: string;
  order_hash: Uint8Array;
}
/** A valid Spot market order with Metadata. */
export interface SpotMarketOrder {
  /** order_info contains the information of the order */
  orderInfo?: OrderInfo;
  balanceHold: string;
  orderHash: Uint8Array;
  /** order types */
  orderType: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice: string;
}
/** A valid Spot market order with Metadata. */
export interface SpotMarketOrderSDKType {
  order_info?: OrderInfoSDKType;
  balance_hold: string;
  order_hash: Uint8Array;
  order_type: OrderType;
  trigger_price: string;
}
export interface DerivativeOrder {
  /** market_id represents the unique ID of the market */
  marketId: string;
  /** order_info contains the information of the order */
  orderInfo?: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** margin is the margin used by the limit order */
  margin: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice: string;
}
export interface DerivativeOrderSDKType {
  market_id: string;
  order_info?: OrderInfoSDKType;
  order_type: OrderType;
  margin: string;
  trigger_price: string;
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
export interface SubaccountOrderSDKType {
  price: string;
  quantity: string;
  isReduceOnly: boolean;
}
export interface SubaccountOrderData {
  order?: SubaccountOrder;
  orderHash: Uint8Array;
}
export interface SubaccountOrderDataSDKType {
  order?: SubaccountOrderSDKType;
  order_hash: Uint8Array;
}
/** A valid Derivative limit order with Metadata. */
export interface DerivativeLimitOrder {
  /** order_info contains the information of the order */
  orderInfo?: OrderInfo;
  /** order types */
  orderType: OrderType;
  /** margin is the margin used by the limit order */
  margin: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice: string;
  orderHash: Uint8Array;
}
/** A valid Derivative limit order with Metadata. */
export interface DerivativeLimitOrderSDKType {
  order_info?: OrderInfoSDKType;
  order_type: OrderType;
  margin: string;
  fillable: string;
  trigger_price: string;
  order_hash: Uint8Array;
}
/** A valid Derivative market order with Metadata. */
export interface DerivativeMarketOrder {
  /** order_info contains the information of the order */
  orderInfo?: OrderInfo;
  /** order types */
  orderType: OrderType;
  margin: string;
  marginHold: string;
  /** trigger_price is the trigger price used by stop/take orders */
  triggerPrice: string;
  orderHash: Uint8Array;
}
/** A valid Derivative market order with Metadata. */
export interface DerivativeMarketOrderSDKType {
  order_info?: OrderInfoSDKType;
  order_type: OrderType;
  margin: string;
  margin_hold: string;
  trigger_price: string;
  order_hash: Uint8Array;
}
export interface Position {
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  margin: string;
  cumulativeFundingEntry: string;
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
  feeRecipientAddress: Uint8Array;
}
export interface TradeLogSDKType {
  quantity: string;
  price: string;
  subaccount_id: Uint8Array;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address: Uint8Array;
}
export interface PositionDelta {
  isLong: boolean;
  executionQuantity: string;
  executionMargin: string;
  executionPrice: string;
}
export interface PositionDeltaSDKType {
  is_long: boolean;
  execution_quantity: string;
  execution_margin: string;
  execution_price: string;
}
export interface DerivativeTradeLog {
  subaccountId: Uint8Array;
  positionDelta?: PositionDelta;
  payout: string;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress: Uint8Array;
}
export interface DerivativeTradeLogSDKType {
  subaccount_id: Uint8Array;
  position_delta?: PositionDeltaSDKType;
  payout: string;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address: Uint8Array;
}
export interface SubaccountPosition {
  position?: Position;
  subaccountId: Uint8Array;
}
export interface SubaccountPositionSDKType {
  position?: PositionSDKType;
  subaccount_id: Uint8Array;
}
export interface SubaccountDeposit {
  subaccountId: Uint8Array;
  deposit?: Deposit;
}
export interface SubaccountDepositSDKType {
  subaccount_id: Uint8Array;
  deposit?: DepositSDKType;
}
export interface DepositUpdate {
  denom: string;
  deposits: SubaccountDeposit[];
}
export interface DepositUpdateSDKType {
  denom: string;
  deposits: SubaccountDepositSDKType[];
}
export interface PointsMultiplier {
  makerPointsMultiplier: string;
  takerPointsMultiplier: string;
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
export interface TradingRewardCampaignBoostInfoSDKType {
  boosted_spot_market_ids: string[];
  spot_market_multipliers: PointsMultiplierSDKType[];
  boosted_derivative_market_ids: string[];
  derivative_market_multipliers: PointsMultiplierSDKType[];
}
export interface CampaignRewardPool {
  startTimestamp: Long;
  /**
   * max_campaign_rewards are the maximum reward amounts to be disbursed at the
   * end of the campaign
   */
  maxCampaignRewards: Coin[];
}
export interface CampaignRewardPoolSDKType {
  start_timestamp: Long;
  max_campaign_rewards: CoinSDKType[];
}
export interface TradingRewardCampaignInfo {
  /** number of seconds of the duration of each campaign */
  campaignDurationSeconds: Long;
  /** the trading fee quote denoms which will be counted for the rewards */
  quoteDenoms: string[];
  /** the optional boost info for markets */
  tradingRewardBoostInfo?: TradingRewardCampaignBoostInfo;
  /** the marketIDs which are disqualified from being rewarded */
  disqualifiedMarketIds: string[];
}
export interface TradingRewardCampaignInfoSDKType {
  campaign_duration_seconds: Long;
  quote_denoms: string[];
  trading_reward_boost_info?: TradingRewardCampaignBoostInfoSDKType;
  disqualified_market_ids: string[];
}
export interface FeeDiscountTierInfo {
  makerDiscountRate: string;
  takerDiscountRate: string;
  stakedAmount: string;
  volume: string;
}
export interface FeeDiscountTierInfoSDKType {
  maker_discount_rate: string;
  taker_discount_rate: string;
  staked_amount: string;
  volume: string;
}
export interface FeeDiscountSchedule {
  bucketCount: Long;
  bucketDuration: Long;
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
export interface FeeDiscountScheduleSDKType {
  bucket_count: Long;
  bucket_duration: Long;
  quote_denoms: string[];
  tier_infos: FeeDiscountTierInfoSDKType[];
  disqualified_market_ids: string[];
}
export interface FeeDiscountTierTTL {
  tier: Long;
  ttlTimestamp: Long;
}
export interface FeeDiscountTierTTLSDKType {
  tier: Long;
  ttl_timestamp: Long;
}
export interface VolumeRecord {
  makerVolume: string;
  takerVolume: string;
}
export interface VolumeRecordSDKType {
  maker_volume: string;
  taker_volume: string;
}
export interface AccountRewards {
  account: string;
  rewards: Coin[];
}
export interface AccountRewardsSDKType {
  account: string;
  rewards: CoinSDKType[];
}
export interface TradeRecords {
  marketId: string;
  latestTradeRecords: TradeRecord[];
}
export interface TradeRecordsSDKType {
  market_id: string;
  latest_trade_records: TradeRecordSDKType[];
}
export interface SubaccountIDs {
  subaccountIds: Uint8Array[];
}
export interface SubaccountIDsSDKType {
  subaccount_ids: Uint8Array[];
}
export interface TradeRecord {
  timestamp: Long;
  price: string;
  quantity: string;
}
export interface TradeRecordSDKType {
  timestamp: Long;
  price: string;
  quantity: string;
}
export interface Level {
  /** price */
  p: string;
  /** quantity */
  q: string;
}
export interface LevelSDKType {
  p: string;
  q: string;
}
export interface AggregateSubaccountVolumeRecord {
  subaccountId: string;
  marketVolumes: MarketVolume[];
}
export interface AggregateSubaccountVolumeRecordSDKType {
  subaccount_id: string;
  market_volumes: MarketVolumeSDKType[];
}
export interface AggregateAccountVolumeRecord {
  account: string;
  marketVolumes: MarketVolume[];
}
export interface AggregateAccountVolumeRecordSDKType {
  account: string;
  market_volumes: MarketVolumeSDKType[];
}
export interface MarketVolume {
  marketId: string;
  volume?: VolumeRecord;
}
export interface MarketVolumeSDKType {
  market_id: string;
  volume?: VolumeRecordSDKType;
}
export interface DenomDecimals {
  denom: string;
  decimals: Long;
}
export interface DenomDecimalsSDKType {
  denom: string;
  decimals: Long;
}
function createBaseParams(): Params {
  return {
    spotMarketInstantListingFee: undefined,
    derivativeMarketInstantListingFee: undefined,
    defaultSpotMakerFeeRate: "",
    defaultSpotTakerFeeRate: "",
    defaultDerivativeMakerFeeRate: "",
    defaultDerivativeTakerFeeRate: "",
    defaultInitialMarginRatio: "",
    defaultMaintenanceMarginRatio: "",
    defaultFundingInterval: Long.ZERO,
    fundingMultiple: Long.ZERO,
    relayerFeeShareRate: "",
    defaultHourlyFundingRateCap: "",
    defaultHourlyInterestRate: "",
    maxDerivativeOrderSideCount: 0,
    injRewardStakedRequirementThreshold: "",
    tradingRewardsVestingDuration: Long.ZERO,
    liquidatorRewardShareRate: "",
    binaryOptionsMarketInstantListingFee: undefined,
    atomicMarketOrderAccessLevel: 0,
    spotAtomicMarketOrderFeeMultiplier: "",
    derivativeAtomicMarketOrderFeeMultiplier: "",
    binaryOptionsAtomicMarketOrderFeeMultiplier: "",
    minimalProtocolFeeRate: "",
    isInstantDerivativeMarketLaunchEnabled: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotMarketInstantListingFee !== undefined) {
      Coin.encode(message.spotMarketInstantListingFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.derivativeMarketInstantListingFee !== undefined) {
      Coin.encode(message.derivativeMarketInstantListingFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultSpotMakerFeeRate !== "") {
      writer.uint32(26).string(message.defaultSpotMakerFeeRate);
    }
    if (message.defaultSpotTakerFeeRate !== "") {
      writer.uint32(34).string(message.defaultSpotTakerFeeRate);
    }
    if (message.defaultDerivativeMakerFeeRate !== "") {
      writer.uint32(42).string(message.defaultDerivativeMakerFeeRate);
    }
    if (message.defaultDerivativeTakerFeeRate !== "") {
      writer.uint32(50).string(message.defaultDerivativeTakerFeeRate);
    }
    if (message.defaultInitialMarginRatio !== "") {
      writer.uint32(58).string(message.defaultInitialMarginRatio);
    }
    if (message.defaultMaintenanceMarginRatio !== "") {
      writer.uint32(66).string(message.defaultMaintenanceMarginRatio);
    }
    if (!message.defaultFundingInterval.isZero()) {
      writer.uint32(72).int64(message.defaultFundingInterval);
    }
    if (!message.fundingMultiple.isZero()) {
      writer.uint32(80).int64(message.fundingMultiple);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(90).string(message.relayerFeeShareRate);
    }
    if (message.defaultHourlyFundingRateCap !== "") {
      writer.uint32(98).string(message.defaultHourlyFundingRateCap);
    }
    if (message.defaultHourlyInterestRate !== "") {
      writer.uint32(106).string(message.defaultHourlyInterestRate);
    }
    if (message.maxDerivativeOrderSideCount !== 0) {
      writer.uint32(112).uint32(message.maxDerivativeOrderSideCount);
    }
    if (message.injRewardStakedRequirementThreshold !== "") {
      writer.uint32(122).string(message.injRewardStakedRequirementThreshold);
    }
    if (!message.tradingRewardsVestingDuration.isZero()) {
      writer.uint32(128).int64(message.tradingRewardsVestingDuration);
    }
    if (message.liquidatorRewardShareRate !== "") {
      writer.uint32(138).string(message.liquidatorRewardShareRate);
    }
    if (message.binaryOptionsMarketInstantListingFee !== undefined) {
      Coin.encode(message.binaryOptionsMarketInstantListingFee, writer.uint32(146).fork()).ldelim();
    }
    if (message.atomicMarketOrderAccessLevel !== 0) {
      writer.uint32(152).int32(message.atomicMarketOrderAccessLevel);
    }
    if (message.spotAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(162).string(message.spotAtomicMarketOrderFeeMultiplier);
    }
    if (message.derivativeAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(170).string(message.derivativeAtomicMarketOrderFeeMultiplier);
    }
    if (message.binaryOptionsAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(178).string(message.binaryOptionsAtomicMarketOrderFeeMultiplier);
    }
    if (message.minimalProtocolFeeRate !== "") {
      writer.uint32(186).string(message.minimalProtocolFeeRate);
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
      defaultFundingInterval: isSet(object.defaultFundingInterval) ? Long.fromValue(object.defaultFundingInterval) : Long.ZERO,
      fundingMultiple: isSet(object.fundingMultiple) ? Long.fromValue(object.fundingMultiple) : Long.ZERO,
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      defaultHourlyFundingRateCap: isSet(object.defaultHourlyFundingRateCap) ? String(object.defaultHourlyFundingRateCap) : "",
      defaultHourlyInterestRate: isSet(object.defaultHourlyInterestRate) ? String(object.defaultHourlyInterestRate) : "",
      maxDerivativeOrderSideCount: isSet(object.maxDerivativeOrderSideCount) ? Number(object.maxDerivativeOrderSideCount) : 0,
      injRewardStakedRequirementThreshold: isSet(object.injRewardStakedRequirementThreshold) ? String(object.injRewardStakedRequirementThreshold) : "",
      tradingRewardsVestingDuration: isSet(object.tradingRewardsVestingDuration) ? Long.fromValue(object.tradingRewardsVestingDuration) : Long.ZERO,
      liquidatorRewardShareRate: isSet(object.liquidatorRewardShareRate) ? String(object.liquidatorRewardShareRate) : "",
      binaryOptionsMarketInstantListingFee: isSet(object.binaryOptionsMarketInstantListingFee) ? Coin.fromJSON(object.binaryOptionsMarketInstantListingFee) : undefined,
      atomicMarketOrderAccessLevel: isSet(object.atomicMarketOrderAccessLevel) ? atomicMarketOrderAccessLevelFromJSON(object.atomicMarketOrderAccessLevel) : 0,
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
    message.defaultFundingInterval = object.defaultFundingInterval !== undefined && object.defaultFundingInterval !== null ? Long.fromValue(object.defaultFundingInterval) : Long.ZERO;
    message.fundingMultiple = object.fundingMultiple !== undefined && object.fundingMultiple !== null ? Long.fromValue(object.fundingMultiple) : Long.ZERO;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.defaultHourlyFundingRateCap = object.defaultHourlyFundingRateCap ?? "";
    message.defaultHourlyInterestRate = object.defaultHourlyInterestRate ?? "";
    message.maxDerivativeOrderSideCount = object.maxDerivativeOrderSideCount ?? 0;
    message.injRewardStakedRequirementThreshold = object.injRewardStakedRequirementThreshold ?? "";
    message.tradingRewardsVestingDuration = object.tradingRewardsVestingDuration !== undefined && object.tradingRewardsVestingDuration !== null ? Long.fromValue(object.tradingRewardsVestingDuration) : Long.ZERO;
    message.liquidatorRewardShareRate = object.liquidatorRewardShareRate ?? "";
    message.binaryOptionsMarketInstantListingFee = object.binaryOptionsMarketInstantListingFee !== undefined && object.binaryOptionsMarketInstantListingFee !== null ? Coin.fromPartial(object.binaryOptionsMarketInstantListingFee) : undefined;
    message.atomicMarketOrderAccessLevel = object.atomicMarketOrderAccessLevel ?? 0;
    message.spotAtomicMarketOrderFeeMultiplier = object.spotAtomicMarketOrderFeeMultiplier ?? "";
    message.derivativeAtomicMarketOrderFeeMultiplier = object.derivativeAtomicMarketOrderFeeMultiplier ?? "";
    message.binaryOptionsAtomicMarketOrderFeeMultiplier = object.binaryOptionsAtomicMarketOrderFeeMultiplier ?? "";
    message.minimalProtocolFeeRate = object.minimalProtocolFeeRate ?? "";
    message.isInstantDerivativeMarketLaunchEnabled = object.isInstantDerivativeMarketLaunchEnabled ?? false;
    return message;
  }
};
function createBaseMarketFeeMultiplier(): MarketFeeMultiplier {
  return {
    marketId: "",
    feeMultiplier: ""
  };
}
export const MarketFeeMultiplier = {
  encode(message: MarketFeeMultiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.feeMultiplier !== "") {
      writer.uint32(18).string(message.feeMultiplier);
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
  encode(message: DerivativeMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(66).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(74).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(82).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(90).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(98).string(message.relayerFeeShareRate);
    }
    if (message.isPerpetual === true) {
      writer.uint32(104).bool(message.isPerpetual);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarket {
    return {
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      isPerpetual: isSet(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
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
  }
};
function createBaseBinaryOptionsMarket(): BinaryOptionsMarket {
  return {
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
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
  encode(message: BinaryOptionsMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(48).int64(message.expirationTimestamp);
    }
    if (!message.settlementTimestamp.isZero()) {
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
      writer.uint32(90).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(106).string(message.relayerFeeShareRate);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(message.minQuantityTickSize);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(138).string(message.settlementPrice);
    }
    return writer;
  },
  fromJSON(object: any): BinaryOptionsMarket {
    return {
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
      oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      expirationTimestamp: isSet(object.expirationTimestamp) ? Long.fromValue(object.expirationTimestamp) : Long.ZERO,
      settlementTimestamp: isSet(object.settlementTimestamp) ? Long.fromValue(object.settlementTimestamp) : Long.ZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
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
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
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
  }
};
function createBaseExpiryFuturesMarketInfo(): ExpiryFuturesMarketInfo {
  return {
    marketId: "",
    expirationTimestamp: Long.ZERO,
    twapStartTimestamp: Long.ZERO,
    expirationTwapStartPriceCumulative: "",
    settlementPrice: ""
  };
}
export const ExpiryFuturesMarketInfo = {
  encode(message: ExpiryFuturesMarketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(16).int64(message.expirationTimestamp);
    }
    if (!message.twapStartTimestamp.isZero()) {
      writer.uint32(24).int64(message.twapStartTimestamp);
    }
    if (message.expirationTwapStartPriceCumulative !== "") {
      writer.uint32(34).string(message.expirationTwapStartPriceCumulative);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(42).string(message.settlementPrice);
    }
    return writer;
  },
  fromJSON(object: any): ExpiryFuturesMarketInfo {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      expirationTimestamp: isSet(object.expirationTimestamp) ? Long.fromValue(object.expirationTimestamp) : Long.ZERO,
      twapStartTimestamp: isSet(object.twapStartTimestamp) ? Long.fromValue(object.twapStartTimestamp) : Long.ZERO,
      expirationTwapStartPriceCumulative: isSet(object.expirationTwapStartPriceCumulative) ? String(object.expirationTwapStartPriceCumulative) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : ""
    };
  },
  fromPartial(object: Partial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo {
    const message = createBaseExpiryFuturesMarketInfo();
    message.marketId = object.marketId ?? "";
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.twapStartTimestamp = object.twapStartTimestamp !== undefined && object.twapStartTimestamp !== null ? Long.fromValue(object.twapStartTimestamp) : Long.ZERO;
    message.expirationTwapStartPriceCumulative = object.expirationTwapStartPriceCumulative ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  }
};
function createBasePerpetualMarketInfo(): PerpetualMarketInfo {
  return {
    marketId: "",
    hourlyFundingRateCap: "",
    hourlyInterestRate: "",
    nextFundingTimestamp: Long.ZERO,
    fundingInterval: Long.ZERO
  };
}
export const PerpetualMarketInfo = {
  encode(message: PerpetualMarketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.hourlyFundingRateCap !== "") {
      writer.uint32(18).string(message.hourlyFundingRateCap);
    }
    if (message.hourlyInterestRate !== "") {
      writer.uint32(26).string(message.hourlyInterestRate);
    }
    if (!message.nextFundingTimestamp.isZero()) {
      writer.uint32(32).int64(message.nextFundingTimestamp);
    }
    if (!message.fundingInterval.isZero()) {
      writer.uint32(40).int64(message.fundingInterval);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketInfo {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      hourlyFundingRateCap: isSet(object.hourlyFundingRateCap) ? String(object.hourlyFundingRateCap) : "",
      hourlyInterestRate: isSet(object.hourlyInterestRate) ? String(object.hourlyInterestRate) : "",
      nextFundingTimestamp: isSet(object.nextFundingTimestamp) ? Long.fromValue(object.nextFundingTimestamp) : Long.ZERO,
      fundingInterval: isSet(object.fundingInterval) ? Long.fromValue(object.fundingInterval) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PerpetualMarketInfo>): PerpetualMarketInfo {
    const message = createBasePerpetualMarketInfo();
    message.marketId = object.marketId ?? "";
    message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? "";
    message.hourlyInterestRate = object.hourlyInterestRate ?? "";
    message.nextFundingTimestamp = object.nextFundingTimestamp !== undefined && object.nextFundingTimestamp !== null ? Long.fromValue(object.nextFundingTimestamp) : Long.ZERO;
    message.fundingInterval = object.fundingInterval !== undefined && object.fundingInterval !== null ? Long.fromValue(object.fundingInterval) : Long.ZERO;
    return message;
  }
};
function createBasePerpetualMarketFunding(): PerpetualMarketFunding {
  return {
    cumulativeFunding: "",
    cumulativePrice: "",
    lastTimestamp: Long.ZERO
  };
}
export const PerpetualMarketFunding = {
  encode(message: PerpetualMarketFunding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cumulativeFunding !== "") {
      writer.uint32(10).string(message.cumulativeFunding);
    }
    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(message.cumulativePrice);
    }
    if (!message.lastTimestamp.isZero()) {
      writer.uint32(24).int64(message.lastTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketFunding {
    return {
      cumulativeFunding: isSet(object.cumulativeFunding) ? String(object.cumulativeFunding) : "",
      cumulativePrice: isSet(object.cumulativePrice) ? String(object.cumulativePrice) : "",
      lastTimestamp: isSet(object.lastTimestamp) ? Long.fromValue(object.lastTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PerpetualMarketFunding>): PerpetualMarketFunding {
    const message = createBasePerpetualMarketFunding();
    message.cumulativeFunding = object.cumulativeFunding ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? Long.fromValue(object.lastTimestamp) : Long.ZERO;
    return message;
  }
};
function createBaseDerivativeMarketSettlementInfo(): DerivativeMarketSettlementInfo {
  return {
    marketId: "",
    settlementPrice: ""
  };
}
export const DerivativeMarketSettlementInfo = {
  encode(message: DerivativeMarketSettlementInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(18).string(message.settlementPrice);
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
  }
};
function createBaseNextFundingTimestamp(): NextFundingTimestamp {
  return {
    nextTimestamp: Long.ZERO
  };
}
export const NextFundingTimestamp = {
  encode(message: NextFundingTimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextTimestamp.isZero()) {
      writer.uint32(8).int64(message.nextTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): NextFundingTimestamp {
    return {
      nextTimestamp: isSet(object.nextTimestamp) ? Long.fromValue(object.nextTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<NextFundingTimestamp>): NextFundingTimestamp {
    const message = createBaseNextFundingTimestamp();
    message.nextTimestamp = object.nextTimestamp !== undefined && object.nextTimestamp !== null ? Long.fromValue(object.nextTimestamp) : Long.ZERO;
    return message;
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
  encode(message: MidPriceAndTOB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
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
  encode(message: SpotMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(42).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }
    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(74).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(82).string(message.minQuantityTickSize);
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
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
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
  }
};
function createBaseDeposit(): Deposit {
  return {
    availableBalance: "",
    totalBalance: ""
  };
}
export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availableBalance !== "") {
      writer.uint32(10).string(message.availableBalance);
    }
    if (message.totalBalance !== "") {
      writer.uint32(18).string(message.totalBalance);
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
  }
};
function createBaseSubaccountTradeNonce(): SubaccountTradeNonce {
  return {
    nonce: 0
  };
}
export const SubaccountTradeNonce = {
  encode(message: SubaccountTradeNonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: OrderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.feeRecipient !== "") {
      writer.uint32(18).string(message.feeRecipient);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
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
  }
};
function createBaseSpotOrder(): SpotOrder {
  return {
    marketId: "",
    orderInfo: undefined,
    orderType: 0,
    triggerPrice: undefined
  };
}
export const SpotOrder = {
  encode(message: SpotOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(message.triggerPrice);
    }
    return writer;
  },
  fromJSON(object: any): SpotOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
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
  }
};
function createBaseSpotLimitOrder(): SpotLimitOrder {
  return {
    orderInfo: undefined,
    orderType: 0,
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
export const SpotLimitOrder = {
  encode(message: SpotLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(message.fillable);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(message.triggerPrice);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): SpotLimitOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
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
  }
};
function createBaseSpotMarketOrder(): SpotMarketOrder {
  return {
    orderInfo: undefined,
    balanceHold: "",
    orderHash: new Uint8Array(),
    orderType: 0,
    triggerPrice: undefined
  };
}
export const SpotMarketOrder = {
  encode(message: SpotMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.balanceHold !== "") {
      writer.uint32(18).string(message.balanceHold);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(26).bytes(message.orderHash);
    }
    if (message.orderType !== 0) {
      writer.uint32(32).int32(message.orderType);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }
    return writer;
  },
  fromJSON(object: any): SpotMarketOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
      orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
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
  }
};
function createBaseDerivativeOrder(): DerivativeOrder {
  return {
    marketId: "",
    orderInfo: undefined,
    orderType: 0,
    margin: "",
    triggerPrice: undefined
  };
}
export const DerivativeOrder = {
  encode(message: DerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(message.margin);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
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
  encode(message: SubaccountOrderbookMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vanillaLimitOrderCount !== 0) {
      writer.uint32(8).uint32(message.vanillaLimitOrderCount);
    }
    if (message.reduceOnlyLimitOrderCount !== 0) {
      writer.uint32(16).uint32(message.reduceOnlyLimitOrderCount);
    }
    if (message.aggregateReduceOnlyQuantity !== "") {
      writer.uint32(26).string(message.aggregateReduceOnlyQuantity);
    }
    if (message.aggregateVanillaQuantity !== "") {
      writer.uint32(34).string(message.aggregateVanillaQuantity);
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
  encode(message: SubaccountOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
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
  }
};
function createBaseSubaccountOrderData(): SubaccountOrderData {
  return {
    order: undefined,
    orderHash: new Uint8Array()
  };
}
export const SubaccountOrderData = {
  encode(message: SubaccountOrderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDerivativeLimitOrder(): DerivativeLimitOrder {
  return {
    orderInfo: undefined,
    orderType: 0,
    margin: "",
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
export const DerivativeLimitOrder = {
  encode(message: DerivativeLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(message.fillable);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeLimitOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
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
  }
};
function createBaseDerivativeMarketOrder(): DerivativeMarketOrder {
  return {
    orderInfo: undefined,
    orderType: 0,
    margin: "",
    marginHold: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
export const DerivativeMarketOrder = {
  encode(message: DerivativeMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.marginHold !== "") {
      writer.uint32(34).string(message.marginHold);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarketOrder {
    return {
      orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
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
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(message.entryPrice);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(message.margin);
    }
    if (message.cumulativeFundingEntry !== "") {
      writer.uint32(42).string(message.cumulativeFundingEntry);
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
  }
};
function createBaseMarketOrderIndicator(): MarketOrderIndicator {
  return {
    marketId: "",
    isBuy: false
  };
}
export const MarketOrderIndicator = {
  encode(message: MarketOrderIndicator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: TradeLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== "") {
      writer.uint32(10).string(message.quantity);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(26).bytes(message.subaccountId);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
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
  encode(message: PositionDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.executionQuantity !== "") {
      writer.uint32(18).string(message.executionQuantity);
    }
    if (message.executionMargin !== "") {
      writer.uint32(26).string(message.executionMargin);
    }
    if (message.executionPrice !== "") {
      writer.uint32(34).string(message.executionPrice);
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
  }
};
function createBaseDerivativeTradeLog(): DerivativeTradeLog {
  return {
    subaccountId: new Uint8Array(),
    positionDelta: undefined,
    payout: "",
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined
  };
}
export const DerivativeTradeLog = {
  encode(message: DerivativeTradeLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(18).fork()).ldelim();
    }
    if (message.payout !== "") {
      writer.uint32(26).string(message.payout);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
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
  }
};
function createBaseSubaccountPosition(): SubaccountPosition {
  return {
    position: undefined,
    subaccountId: new Uint8Array()
  };
}
export const SubaccountPosition = {
  encode(message: SubaccountPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseSubaccountDeposit(): SubaccountDeposit {
  return {
    subaccountId: new Uint8Array(),
    deposit: undefined
  };
}
export const SubaccountDeposit = {
  encode(message: SubaccountDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDepositUpdate(): DepositUpdate {
  return {
    denom: "",
    deposits: []
  };
}
export const DepositUpdate = {
  encode(message: DepositUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBasePointsMultiplier(): PointsMultiplier {
  return {
    makerPointsMultiplier: "",
    takerPointsMultiplier: ""
  };
}
export const PointsMultiplier = {
  encode(message: PointsMultiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerPointsMultiplier !== "") {
      writer.uint32(10).string(message.makerPointsMultiplier);
    }
    if (message.takerPointsMultiplier !== "") {
      writer.uint32(18).string(message.takerPointsMultiplier);
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
  encode(message: TradingRewardCampaignBoostInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCampaignRewardPool(): CampaignRewardPool {
  return {
    startTimestamp: Long.ZERO,
    maxCampaignRewards: []
  };
}
export const CampaignRewardPool = {
  encode(message: CampaignRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startTimestamp.isZero()) {
      writer.uint32(8).int64(message.startTimestamp);
    }
    for (const v of message.maxCampaignRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CampaignRewardPool {
    return {
      startTimestamp: isSet(object.startTimestamp) ? Long.fromValue(object.startTimestamp) : Long.ZERO,
      maxCampaignRewards: Array.isArray(object?.maxCampaignRewards) ? object.maxCampaignRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CampaignRewardPool>): CampaignRewardPool {
    const message = createBaseCampaignRewardPool();
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.ZERO;
    message.maxCampaignRewards = object.maxCampaignRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTradingRewardCampaignInfo(): TradingRewardCampaignInfo {
  return {
    campaignDurationSeconds: Long.ZERO,
    quoteDenoms: [],
    tradingRewardBoostInfo: undefined,
    disqualifiedMarketIds: []
  };
}
export const TradingRewardCampaignInfo = {
  encode(message: TradingRewardCampaignInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignDurationSeconds.isZero()) {
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
      campaignDurationSeconds: isSet(object.campaignDurationSeconds) ? Long.fromValue(object.campaignDurationSeconds) : Long.ZERO,
      quoteDenoms: Array.isArray(object?.quoteDenoms) ? object.quoteDenoms.map((e: any) => String(e)) : [],
      tradingRewardBoostInfo: isSet(object.tradingRewardBoostInfo) ? TradingRewardCampaignBoostInfo.fromJSON(object.tradingRewardBoostInfo) : undefined,
      disqualifiedMarketIds: Array.isArray(object?.disqualifiedMarketIds) ? object.disqualifiedMarketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignInfo>): TradingRewardCampaignInfo {
    const message = createBaseTradingRewardCampaignInfo();
    message.campaignDurationSeconds = object.campaignDurationSeconds !== undefined && object.campaignDurationSeconds !== null ? Long.fromValue(object.campaignDurationSeconds) : Long.ZERO;
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tradingRewardBoostInfo = object.tradingRewardBoostInfo !== undefined && object.tradingRewardBoostInfo !== null ? TradingRewardCampaignBoostInfo.fromPartial(object.tradingRewardBoostInfo) : undefined;
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
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
  encode(message: FeeDiscountTierInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerDiscountRate !== "") {
      writer.uint32(10).string(message.makerDiscountRate);
    }
    if (message.takerDiscountRate !== "") {
      writer.uint32(18).string(message.takerDiscountRate);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(26).string(message.stakedAmount);
    }
    if (message.volume !== "") {
      writer.uint32(34).string(message.volume);
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
  }
};
function createBaseFeeDiscountSchedule(): FeeDiscountSchedule {
  return {
    bucketCount: Long.UZERO,
    bucketDuration: Long.ZERO,
    quoteDenoms: [],
    tierInfos: [],
    disqualifiedMarketIds: []
  };
}
export const FeeDiscountSchedule = {
  encode(message: FeeDiscountSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bucketCount.isZero()) {
      writer.uint32(8).uint64(message.bucketCount);
    }
    if (!message.bucketDuration.isZero()) {
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
      bucketCount: isSet(object.bucketCount) ? Long.fromValue(object.bucketCount) : Long.UZERO,
      bucketDuration: isSet(object.bucketDuration) ? Long.fromValue(object.bucketDuration) : Long.ZERO,
      quoteDenoms: Array.isArray(object?.quoteDenoms) ? object.quoteDenoms.map((e: any) => String(e)) : [],
      tierInfos: Array.isArray(object?.tierInfos) ? object.tierInfos.map((e: any) => FeeDiscountTierInfo.fromJSON(e)) : [],
      disqualifiedMarketIds: Array.isArray(object?.disqualifiedMarketIds) ? object.disqualifiedMarketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<FeeDiscountSchedule>): FeeDiscountSchedule {
    const message = createBaseFeeDiscountSchedule();
    message.bucketCount = object.bucketCount !== undefined && object.bucketCount !== null ? Long.fromValue(object.bucketCount) : Long.UZERO;
    message.bucketDuration = object.bucketDuration !== undefined && object.bucketDuration !== null ? Long.fromValue(object.bucketDuration) : Long.ZERO;
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tierInfos = object.tierInfos?.map(e => FeeDiscountTierInfo.fromPartial(e)) || [];
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  }
};
function createBaseFeeDiscountTierTTL(): FeeDiscountTierTTL {
  return {
    tier: Long.UZERO,
    ttlTimestamp: Long.ZERO
  };
}
export const FeeDiscountTierTTL = {
  encode(message: FeeDiscountTierTTL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tier.isZero()) {
      writer.uint32(8).uint64(message.tier);
    }
    if (!message.ttlTimestamp.isZero()) {
      writer.uint32(16).int64(message.ttlTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountTierTTL {
    return {
      tier: isSet(object.tier) ? Long.fromValue(object.tier) : Long.UZERO,
      ttlTimestamp: isSet(object.ttlTimestamp) ? Long.fromValue(object.ttlTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<FeeDiscountTierTTL>): FeeDiscountTierTTL {
    const message = createBaseFeeDiscountTierTTL();
    message.tier = object.tier !== undefined && object.tier !== null ? Long.fromValue(object.tier) : Long.UZERO;
    message.ttlTimestamp = object.ttlTimestamp !== undefined && object.ttlTimestamp !== null ? Long.fromValue(object.ttlTimestamp) : Long.ZERO;
    return message;
  }
};
function createBaseVolumeRecord(): VolumeRecord {
  return {
    makerVolume: "",
    takerVolume: ""
  };
}
export const VolumeRecord = {
  encode(message: VolumeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerVolume !== "") {
      writer.uint32(10).string(message.makerVolume);
    }
    if (message.takerVolume !== "") {
      writer.uint32(18).string(message.takerVolume);
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
  }
};
function createBaseAccountRewards(): AccountRewards {
  return {
    account: "",
    rewards: []
  };
}
export const AccountRewards = {
  encode(message: AccountRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseTradeRecords(): TradeRecords {
  return {
    marketId: "",
    latestTradeRecords: []
  };
}
export const TradeRecords = {
  encode(message: TradeRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseSubaccountIDs(): SubaccountIDs {
  return {
    subaccountIds: []
  };
}
export const SubaccountIDs = {
  encode(message: SubaccountIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseTradeRecord(): TradeRecord {
  return {
    timestamp: Long.ZERO,
    price: "",
    quantity: ""
  };
}
export const TradeRecord = {
  encode(message: TradeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(26).string(message.quantity);
    }
    return writer;
  },
  fromJSON(object: any): TradeRecord {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : ""
    };
  },
  fromPartial(object: Partial<TradeRecord>): TradeRecord {
    const message = createBaseTradeRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  }
};
function createBaseLevel(): Level {
  return {
    p: "",
    q: ""
  };
}
export const Level = {
  encode(message: Level, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p !== "") {
      writer.uint32(10).string(message.p);
    }
    if (message.q !== "") {
      writer.uint32(18).string(message.q);
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
  }
};
function createBaseAggregateSubaccountVolumeRecord(): AggregateSubaccountVolumeRecord {
  return {
    subaccountId: "",
    marketVolumes: []
  };
}
export const AggregateSubaccountVolumeRecord = {
  encode(message: AggregateSubaccountVolumeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseAggregateAccountVolumeRecord(): AggregateAccountVolumeRecord {
  return {
    account: "",
    marketVolumes: []
  };
}
export const AggregateAccountVolumeRecord = {
  encode(message: AggregateAccountVolumeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMarketVolume(): MarketVolume {
  return {
    marketId: "",
    volume: undefined
  };
}
export const MarketVolume = {
  encode(message: MarketVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDenomDecimals(): DenomDecimals {
  return {
    denom: "",
    decimals: Long.UZERO
  };
}
export const DenomDecimals = {
  encode(message: DenomDecimals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(16).uint64(message.decimals);
    }
    return writer;
  },
  fromJSON(object: any): DenomDecimals {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.UZERO
    };
  },
  fromPartial(object: Partial<DenomDecimals>): DenomDecimals {
    const message = createBaseDenomDecimals();
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.UZERO;
    return message;
  }
};