import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { SpotOrder, SpotOrderSDKType, DerivativeOrder, DerivativeOrderSDKType, MarketStatus, PositionDelta, PositionDeltaSDKType, DenomDecimals, DenomDecimalsSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, MarketFeeMultiplier, MarketFeeMultiplierSDKType, marketStatusFromJSON } from "./exchange";
import { Params, ParamsSDKType, CommunityPoolSpendProposal, CommunityPoolSpendProposalSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ExchangeType {
  EXCHANGE_UNSPECIFIED = 0,
  SPOT = 1,
  DERIVATIVES = 2,
  UNRECOGNIZED = -1,
}
export const ExchangeTypeSDKType = ExchangeType;
export function exchangeTypeFromJSON(object: any): ExchangeType {
  switch (object) {
    case 0:
    case "EXCHANGE_UNSPECIFIED":
      return ExchangeType.EXCHANGE_UNSPECIFIED;
    case 1:
    case "SPOT":
      return ExchangeType.SPOT;
    case 2:
    case "DERIVATIVES":
      return ExchangeType.DERIVATIVES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExchangeType.UNRECOGNIZED;
  }
}
export function exchangeTypeToJSON(object: ExchangeType): string {
  switch (object) {
    case ExchangeType.EXCHANGE_UNSPECIFIED:
      return "EXCHANGE_UNSPECIFIED";
    case ExchangeType.SPOT:
      return "SPOT";
    case ExchangeType.DERIVATIVES:
      return "DERIVATIVES";
    case ExchangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the exchange parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgDeposit defines a SDK message for transferring coins from the sender's
 * bank balance into the subaccount's exchange deposits
 */
export interface MsgDeposit {
  sender: string;
  /**
   * (Optional) bytes32 subaccount ID to deposit funds into. If empty, the coin
   * will be deposited to the sender's default subaccount address.
   */
  subaccountId: string;
  amount?: Coin;
}
/**
 * MsgDeposit defines a SDK message for transferring coins from the sender's
 * bank balance into the subaccount's exchange deposits
 */
export interface MsgDepositSDKType {
  sender: string;
  subaccount_id: string;
  amount?: CoinSDKType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/**
 * MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 */
export interface MsgWithdraw {
  sender: string;
  /** bytes32 subaccount ID to withdraw funds from */
  subaccountId: string;
  amount?: Coin;
}
/**
 * MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 */
export interface MsgWithdrawSDKType {
  sender: string;
  subaccount_id: string;
  amount?: CoinSDKType;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 */
export interface MsgCreateSpotLimitOrder {
  sender: string;
  order?: SpotOrder;
}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 */
export interface MsgCreateSpotLimitOrderSDKType {
  sender: string;
  order?: SpotOrderSDKType;
}
/**
 * MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response
 * type.
 */
export interface MsgCreateSpotLimitOrderResponse {
  orderHash: string;
}
/**
 * MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response
 * type.
 */
export interface MsgCreateSpotLimitOrderResponseSDKType {
  order_hash: string;
}
/**
 * MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch
 * of spot limit orders.
 */
export interface MsgBatchCreateSpotLimitOrders {
  sender: string;
  orders: SpotOrder[];
}
/**
 * MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch
 * of spot limit orders.
 */
export interface MsgBatchCreateSpotLimitOrdersSDKType {
  sender: string;
  orders: SpotOrderSDKType[];
}
/**
 * MsgBatchCreateSpotLimitOrdersResponse defines the
 * Msg/BatchCreateSpotLimitOrders response type.
 */
export interface MsgBatchCreateSpotLimitOrdersResponse {
  orderHashes: string[];
}
/**
 * MsgBatchCreateSpotLimitOrdersResponse defines the
 * Msg/BatchCreateSpotLimitOrders response type.
 */
export interface MsgBatchCreateSpotLimitOrdersResponseSDKType {
  order_hashes: string[];
}
/**
 * MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot
 * market by paying listing fee without governance
 */
export interface MsgInstantSpotMarketLaunch {
  sender: string;
  /** Ticker for the spot market. */
  ticker: string;
  /** type of coin to use as the base currency */
  baseDenom: string;
  /** type of coin to use as the quote currency */
  quoteDenom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
}
/**
 * MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot
 * market by paying listing fee without governance
 */
export interface MsgInstantSpotMarketLaunchSDKType {
  sender: string;
  ticker: string;
  base_denom: string;
  quote_denom: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 */
export interface MsgInstantSpotMarketLaunchResponse {}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 */
export interface MsgInstantSpotMarketLaunchResponseSDKType {}
/**
 * MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantPerpetualMarketLaunch {
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the base currency */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
  /**
   * maker_fee_rate defines the trade fee rate for makers on the perpetual
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the trade fee rate for takers on the perpetual
   * market
   */
  takerFeeRate: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the perpetual
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * perpetual market
   */
  maintenanceMarginRatio: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
}
/**
 * MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantPerpetualMarketLaunchSDKType {
  sender: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
  maker_fee_rate: string;
  taker_fee_rate: string;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 */
export interface MsgInstantPerpetualMarketLaunchResponse {}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 */
export interface MsgInstantPerpetualMarketLaunchResponseSDKType {}
/**
 * MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantBinaryOptionsMarketLaunch {
  sender: string;
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
  /**
   * maker_fee_rate defines the trade fee rate for makers on the perpetual
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the trade fee rate for takers on the perpetual
   * market
   */
  takerFeeRate: string;
  /** expiration timestamp */
  expirationTimestamp: Long;
  /** expiration timestamp */
  settlementTimestamp: Long;
  /** admin of the market */
  admin: string;
  /** Address of the quote currency denomination for the binary options contract */
  quoteDenom: string;
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
/**
 * MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantBinaryOptionsMarketLaunchSDKType {
  sender: string;
  ticker: string;
  oracle_symbol: string;
  oracle_provider: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  maker_fee_rate: string;
  taker_fee_rate: string;
  expiration_timestamp: Long;
  settlement_timestamp: Long;
  admin: string;
  quote_denom: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 */
export interface MsgInstantBinaryOptionsMarketLaunchResponse {}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 */
export interface MsgInstantBinaryOptionsMarketLaunchResponseSDKType {}
/**
 * MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new
 * expiry futures market by paying listing fee without governance
 */
export interface MsgInstantExpiryFuturesMarketLaunch {
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the quote currency */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Oracle type */
  oracleType: OracleType;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Expiration time of the market */
  expiry: Long;
  /**
   * maker_fee_rate defines the trade fee rate for makers on the expiry futures
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the trade fee rate for takers on the expiry futures
   * market
   */
  takerFeeRate: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
}
/**
 * MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new
 * expiry futures market by paying listing fee without governance
 */
export interface MsgInstantExpiryFuturesMarketLaunchSDKType {
  sender: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  expiry: Long;
  maker_fee_rate: string;
  taker_fee_rate: string;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 */
export interface MsgInstantExpiryFuturesMarketLaunchResponse {}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 */
export interface MsgInstantExpiryFuturesMarketLaunchResponseSDKType {}
/**
 * MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market
 * order.
 */
export interface MsgCreateSpotMarketOrder {
  sender: string;
  order?: SpotOrder;
}
/**
 * MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market
 * order.
 */
export interface MsgCreateSpotMarketOrderSDKType {
  sender: string;
  order?: SpotOrderSDKType;
}
/**
 * MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder
 * response type.
 */
export interface MsgCreateSpotMarketOrderResponse {
  orderHash: string;
  results?: SpotMarketOrderResults;
}
/**
 * MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder
 * response type.
 */
export interface MsgCreateSpotMarketOrderResponseSDKType {
  order_hash: string;
  results?: SpotMarketOrderResultsSDKType;
}
export interface SpotMarketOrderResults {
  quantity: string;
  price: string;
  fee: string;
}
export interface SpotMarketOrderResultsSDKType {
  quantity: string;
  price: string;
  fee: string;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */
export interface MsgCreateDerivativeLimitOrder {
  sender: string;
  order?: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */
export interface MsgCreateDerivativeLimitOrderSDKType {
  sender: string;
  order?: DerivativeOrderSDKType;
}
/**
 * MsgCreateDerivativeLimitOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeLimitOrderResponse {
  orderHash: string;
}
/**
 * MsgCreateDerivativeLimitOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeLimitOrderResponseSDKType {
  order_hash: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */
export interface MsgCreateBinaryOptionsLimitOrder {
  sender: string;
  order?: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */
export interface MsgCreateBinaryOptionsLimitOrderSDKType {
  sender: string;
  order?: DerivativeOrderSDKType;
}
/**
 * MsgCreateBinaryOptionsLimitOrderResponse defines the
 * Msg/CreateBinaryOptionsLimitOrder response type.
 */
export interface MsgCreateBinaryOptionsLimitOrderResponse {
  orderHash: string;
}
/**
 * MsgCreateBinaryOptionsLimitOrderResponse defines the
 * Msg/CreateBinaryOptionsLimitOrder response type.
 */
export interface MsgCreateBinaryOptionsLimitOrderResponseSDKType {
  order_hash: string;
}
/** A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders */
export interface MsgBatchCreateDerivativeLimitOrders {
  sender: string;
  orders: DerivativeOrder[];
}
/** A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders */
export interface MsgBatchCreateDerivativeLimitOrdersSDKType {
  sender: string;
  orders: DerivativeOrderSDKType[];
}
/**
 * MsgBatchCreateDerivativeLimitOrdersResponse defines the
 * Msg/BatchCreateDerivativeLimitOrders response type.
 */
export interface MsgBatchCreateDerivativeLimitOrdersResponse {
  orderHashes: string[];
}
/**
 * MsgBatchCreateDerivativeLimitOrdersResponse defines the
 * Msg/BatchCreateDerivativeLimitOrders response type.
 */
export interface MsgBatchCreateDerivativeLimitOrdersResponseSDKType {
  order_hashes: string[];
}
/** MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrder {
  sender: string;
  marketId: string;
  subaccountId: string;
  orderHash: string;
}
/** MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderSDKType {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponse {}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseSDKType {}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */
export interface MsgBatchCancelSpotOrders {
  sender: string;
  data: OrderData[];
}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */
export interface MsgBatchCancelSpotOrdersSDKType {
  sender: string;
  data: OrderDataSDKType[];
}
/**
 * MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders
 * response type.
 */
export interface MsgBatchCancelSpotOrdersResponse {
  success: boolean[];
}
/**
 * MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders
 * response type.
 */
export interface MsgBatchCancelSpotOrdersResponseSDKType {
  success: boolean[];
}
/**
 * MsgBatchCancelBinaryOptionsOrders defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrders {
  sender: string;
  data: OrderData[];
}
/**
 * MsgBatchCancelBinaryOptionsOrders defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrdersSDKType {
  sender: string;
  data: OrderDataSDKType[];
}
/**
 * BatchCancelBinaryOptionsOrdersResponse defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrdersResponse {
  success: boolean[];
}
/**
 * BatchCancelBinaryOptionsOrdersResponse defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrdersResponseSDKType {
  success: boolean[];
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrders {
  sender: string;
  /**
   * subaccount_id only used for the spot_market_ids_to_cancel_all and
   * derivative_market_ids_to_cancel_all.
   */
  subaccountId: string;
  spotMarketIdsToCancelAll: string[];
  derivativeMarketIdsToCancelAll: string[];
  spotOrdersToCancel: OrderData[];
  derivativeOrdersToCancel: OrderData[];
  spotOrdersToCreate: SpotOrder[];
  derivativeOrdersToCreate: DerivativeOrder[];
  binaryOptionsOrdersToCancel: OrderData[];
  binaryOptionsMarketIdsToCancelAll: string[];
  binaryOptionsOrdersToCreate: DerivativeOrder[];
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersSDKType {
  sender: string;
  subaccount_id: string;
  spot_market_ids_to_cancel_all: string[];
  derivative_market_ids_to_cancel_all: string[];
  spot_orders_to_cancel: OrderDataSDKType[];
  derivative_orders_to_cancel: OrderDataSDKType[];
  spot_orders_to_create: SpotOrderSDKType[];
  derivative_orders_to_create: DerivativeOrderSDKType[];
  binary_options_orders_to_cancel: OrderDataSDKType[];
  binary_options_market_ids_to_cancel_all: string[];
  binary_options_orders_to_create: DerivativeOrderSDKType[];
}
/** MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersResponse {
  spotCancelSuccess: boolean[];
  derivativeCancelSuccess: boolean[];
  spotOrderHashes: string[];
  derivativeOrderHashes: string[];
  binaryOptionsCancelSuccess: boolean[];
  binaryOptionsOrderHashes: string[];
}
/** MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersResponseSDKType {
  spot_cancel_success: boolean[];
  derivative_cancel_success: boolean[];
  spot_order_hashes: string[];
  derivative_order_hashes: string[];
  binary_options_cancel_success: boolean[];
  binary_options_order_hashes: string[];
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */
export interface MsgCreateDerivativeMarketOrder {
  sender: string;
  order?: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */
export interface MsgCreateDerivativeMarketOrderSDKType {
  sender: string;
  order?: DerivativeOrderSDKType;
}
/**
 * MsgCreateDerivativeMarketOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeMarketOrderResponse {
  orderHash: string;
  results?: DerivativeMarketOrderResults;
}
/**
 * MsgCreateDerivativeMarketOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeMarketOrderResponseSDKType {
  order_hash: string;
  results?: DerivativeMarketOrderResultsSDKType;
}
export interface DerivativeMarketOrderResults {
  quantity: string;
  price: string;
  fee: string;
  positionDelta?: PositionDelta;
  payout: string;
}
export interface DerivativeMarketOrderResultsSDKType {
  quantity: string;
  price: string;
  fee: string;
  position_delta?: PositionDeltaSDKType;
  payout: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */
export interface MsgCreateBinaryOptionsMarketOrder {
  sender: string;
  order?: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */
export interface MsgCreateBinaryOptionsMarketOrderSDKType {
  sender: string;
  order?: DerivativeOrderSDKType;
}
/**
 * MsgCreateBinaryOptionsMarketOrderResponse defines the
 * Msg/CreateBinaryOptionsMarketOrder response type.
 */
export interface MsgCreateBinaryOptionsMarketOrderResponse {
  orderHash: string;
  results?: DerivativeMarketOrderResults;
}
/**
 * MsgCreateBinaryOptionsMarketOrderResponse defines the
 * Msg/CreateBinaryOptionsMarketOrder response type.
 */
export interface MsgCreateBinaryOptionsMarketOrderResponseSDKType {
  order_hash: string;
  results?: DerivativeMarketOrderResultsSDKType;
}
/** MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type. */
export interface MsgCancelDerivativeOrder {
  sender: string;
  marketId: string;
  subaccountId: string;
  orderHash: string;
  /** bitwise combination of OrderMask enum values */
  orderMask: number;
}
/** MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type. */
export interface MsgCancelDerivativeOrderSDKType {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  order_mask: number;
}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgCancelDerivativeOrderResponse {}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgCancelDerivativeOrderResponseSDKType {}
/**
 * MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response
 * type.
 */
export interface MsgCancelBinaryOptionsOrder {
  sender: string;
  marketId: string;
  subaccountId: string;
  orderHash: string;
  /** bitwise combination of OrderMask enum values */
  orderMask: number;
}
/**
 * MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response
 * type.
 */
export interface MsgCancelBinaryOptionsOrderSDKType {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  order_mask: number;
}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 */
export interface MsgCancelBinaryOptionsOrderResponse {}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 */
export interface MsgCancelBinaryOptionsOrderResponseSDKType {}
export interface OrderData {
  marketId: string;
  subaccountId: string;
  orderHash: string;
  /** bitwise combination of OrderMask enum values */
  orderMask: number;
}
export interface OrderDataSDKType {
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  order_mask: number;
}
/**
 * MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders
 * response type.
 */
export interface MsgBatchCancelDerivativeOrders {
  sender: string;
  data: OrderData[];
}
/**
 * MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders
 * response type.
 */
export interface MsgBatchCancelDerivativeOrdersSDKType {
  sender: string;
  data: OrderDataSDKType[];
}
/**
 * MsgBatchCancelDerivativeOrdersResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgBatchCancelDerivativeOrdersResponse {
  success: boolean[];
}
/**
 * MsgBatchCancelDerivativeOrdersResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgBatchCancelDerivativeOrdersResponseSDKType {
  success: boolean[];
}
/** A Cosmos-SDK MsgSubaccountTransfer */
export interface MsgSubaccountTransfer {
  sender: string;
  sourceSubaccountId: string;
  destinationSubaccountId: string;
  amount?: Coin;
}
/** A Cosmos-SDK MsgSubaccountTransfer */
export interface MsgSubaccountTransferSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount?: CoinSDKType;
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponse {}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponseSDKType {}
/** A Cosmos-SDK MsgExternalTransfer */
export interface MsgExternalTransfer {
  sender: string;
  sourceSubaccountId: string;
  destinationSubaccountId: string;
  amount?: Coin;
}
/** A Cosmos-SDK MsgExternalTransfer */
export interface MsgExternalTransferSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount?: CoinSDKType;
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponse {}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponseSDKType {}
/** A Cosmos-SDK MsgLiquidatePosition */
export interface MsgLiquidatePosition {
  sender: string;
  subaccountId: string;
  marketId: string;
  /** optional order to provide for liquidation */
  order?: DerivativeOrder;
}
/** A Cosmos-SDK MsgLiquidatePosition */
export interface MsgLiquidatePositionSDKType {
  sender: string;
  subaccount_id: string;
  market_id: string;
  order?: DerivativeOrderSDKType;
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponse {}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponseSDKType {}
/** A Cosmos-SDK MsgIncreasePositionMargin */
export interface MsgIncreasePositionMargin {
  sender: string;
  sourceSubaccountId: string;
  destinationSubaccountId: string;
  marketId: string;
  /** amount defines the amount of margin to add to the position */
  amount: string;
}
/** A Cosmos-SDK MsgIncreasePositionMargin */
export interface MsgIncreasePositionMarginSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  market_id: string;
  amount: string;
}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 */
export interface MsgIncreasePositionMarginResponse {}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 */
export interface MsgIncreasePositionMarginResponseSDKType {}
/** MsgPrivilegedExecuteContract defines the Msg/Exec message type */
export interface MsgPrivilegedExecuteContract {
  sender: string;
  /**
   * funds defines the user's bank coins used to fund the execution (e.g.
   * 100inj).
   */
  funds: string;
  /** contract_address defines the contract address to execute */
  contractAddress: string;
  /** data defines the call data used when executing the contract */
  data: string;
}
/** MsgPrivilegedExecuteContract defines the Msg/Exec message type */
export interface MsgPrivilegedExecuteContractSDKType {
  sender: string;
  funds: string;
  contract_address: string;
  data: string;
}
/** MsgPrivilegedExecuteContractResponse defines the Msg/Exec response type. */
export interface MsgPrivilegedExecuteContractResponse {
  fundsDiff: Coin[];
}
/** MsgPrivilegedExecuteContractResponse defines the Msg/Exec response type. */
export interface MsgPrivilegedExecuteContractResponseSDKType {
  funds_diff: CoinSDKType[];
}
export interface SpotMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */
  makerFeeRate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the spot
   * market
   */
  relayerFeeShareRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  status: MarketStatus;
}
export interface SpotMarketParamUpdateProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  status: MarketStatus;
}
export interface ExchangeEnableProposal {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface ExchangeEnableProposalSDKType {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface BatchExchangeModificationProposal {
  title: string;
  description: string;
  spotMarketParamUpdateProposals: SpotMarketParamUpdateProposal[];
  derivativeMarketParamUpdateProposals: DerivativeMarketParamUpdateProposal[];
  spotMarketLaunchProposals: SpotMarketLaunchProposal[];
  perpetualMarketLaunchProposals: PerpetualMarketLaunchProposal[];
  expiryFuturesMarketLaunchProposals: ExpiryFuturesMarketLaunchProposal[];
  tradingRewardCampaignUpdateProposal?: TradingRewardCampaignUpdateProposal;
  binaryOptionsMarketLaunchProposals: BinaryOptionsMarketLaunchProposal[];
  binaryOptionsParamUpdateProposals: BinaryOptionsMarketParamUpdateProposal[];
  denomDecimalsUpdateProposal?: UpdateDenomDecimalsProposal;
}
export interface BatchExchangeModificationProposalSDKType {
  title: string;
  description: string;
  spot_market_param_update_proposals: SpotMarketParamUpdateProposalSDKType[];
  derivative_market_param_update_proposals: DerivativeMarketParamUpdateProposalSDKType[];
  spot_market_launch_proposals: SpotMarketLaunchProposalSDKType[];
  perpetual_market_launch_proposals: PerpetualMarketLaunchProposalSDKType[];
  expiry_futures_market_launch_proposals: ExpiryFuturesMarketLaunchProposalSDKType[];
  trading_reward_campaign_update_proposal?: TradingRewardCampaignUpdateProposalSDKType;
  binary_options_market_launch_proposals: BinaryOptionsMarketLaunchProposalSDKType[];
  binary_options_param_update_proposals: BinaryOptionsMarketParamUpdateProposalSDKType[];
  denom_decimals_update_proposal?: UpdateDenomDecimalsProposalSDKType;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the spot market. */
  ticker: string;
  /** type of coin to use as the base currency */
  baseDenom: string;
  /** type of coin to use as the quote currency */
  quoteDenom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */
  makerFeeRate: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  takerFeeRate: string;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposalSDKType {
  title: string;
  description: string;
  ticker: string;
  base_denom: string;
  quote_denom: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the base currency */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposalSDKType {
  title: string;
  description: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
export interface BinaryOptionsMarketLaunchProposal {
  title: string;
  description: string;
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
  /** maker_fee_rate defines the maker fee rate of a binary options market */
  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  takerFeeRate: string;
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
export interface BinaryOptionsMarketLaunchProposalSDKType {
  title: string;
  description: string;
  ticker: string;
  oracle_symbol: string;
  oracle_provider: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  expiration_timestamp: Long;
  settlement_timestamp: Long;
  admin: string;
  quote_denom: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the quote currency */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
  /** Expiration time of the market */
  expiry: Long;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposalSDKType {
  title: string;
  description: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
  expiry: Long;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
export interface DerivativeMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayerFeeShareRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  /** hourly_interest_rate defines the hourly interest rate */
  HourlyInterestRate: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  HourlyFundingRateCap: string;
  status: MarketStatus;
  oracleParams?: OracleParams;
}
export interface DerivativeMarketParamUpdateProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  HourlyInterestRate: string;
  HourlyFundingRateCap: string;
  status: MarketStatus;
  oracle_params?: OracleParamsSDKType;
}
export interface MarketForcedSettlementProposal {
  title: string;
  description: string;
  marketId: string;
  settlementPrice: string;
}
export interface MarketForcedSettlementProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  settlement_price: string;
}
export interface UpdateDenomDecimalsProposal {
  title: string;
  description: string;
  denomDecimals: DenomDecimals[];
}
export interface UpdateDenomDecimalsProposalSDKType {
  title: string;
  description: string;
  denom_decimals: DenomDecimalsSDKType[];
}
export interface BinaryOptionsMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayerFeeShareRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  /** expiration timestamp */
  expirationTimestamp: Long;
  /** expiration timestamp */
  settlementTimestamp: Long;
  /** new price at which market will be settled */
  settlementPrice: string;
  /** admin of the market */
  admin: string;
  status: MarketStatus;
  oracleParams?: ProviderOracleParams;
}
export interface BinaryOptionsMarketParamUpdateProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  relayer_fee_share_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  expiration_timestamp: Long;
  settlement_timestamp: Long;
  settlement_price: string;
  admin: string;
  status: MarketStatus;
  oracle_params?: ProviderOracleParamsSDKType;
}
export interface ProviderOracleParams {
  /** Oracle base currency */
  symbol: string;
  /** Oracle quote currency */
  provider: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
}
export interface ProviderOracleParamsSDKType {
  symbol: string;
  provider: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
}
export interface OracleParams {
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
}
export interface OracleParamsSDKType {
  oracle_base: string;
  oracle_quote: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
}
export interface TradingRewardCampaignLaunchProposal {
  title: string;
  description: string;
  campaignInfo?: TradingRewardCampaignInfo;
  campaignRewardPools: CampaignRewardPool[];
}
export interface TradingRewardCampaignLaunchProposalSDKType {
  title: string;
  description: string;
  campaign_info?: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface TradingRewardCampaignUpdateProposal {
  title: string;
  description: string;
  campaignInfo?: TradingRewardCampaignInfo;
  campaignRewardPoolsAdditions: CampaignRewardPool[];
  campaignRewardPoolsUpdates: CampaignRewardPool[];
}
export interface TradingRewardCampaignUpdateProposalSDKType {
  title: string;
  description: string;
  campaign_info?: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools_additions: CampaignRewardPoolSDKType[];
  campaign_reward_pools_updates: CampaignRewardPoolSDKType[];
}
export interface RewardPointUpdate {
  accountAddress: string;
  /** new_points overwrites the current trading reward points for the account */
  newPoints: string;
}
export interface RewardPointUpdateSDKType {
  account_address: string;
  new_points: string;
}
export interface TradingRewardPendingPointsUpdateProposal {
  title: string;
  description: string;
  pendingPoolTimestamp: Long;
  rewardPointUpdates: RewardPointUpdate[];
}
export interface TradingRewardPendingPointsUpdateProposalSDKType {
  title: string;
  description: string;
  pending_pool_timestamp: Long;
  reward_point_updates: RewardPointUpdateSDKType[];
}
export interface FeeDiscountProposal {
  title: string;
  description: string;
  schedule?: FeeDiscountSchedule;
}
export interface FeeDiscountProposalSDKType {
  title: string;
  description: string;
  schedule?: FeeDiscountScheduleSDKType;
}
export interface BatchCommunityPoolSpendProposal {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposal[];
}
export interface BatchCommunityPoolSpendProposalSDKType {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposalSDKType[];
}
/** A Cosmos-SDK MsgRewardsOptOut */
export interface MsgRewardsOptOut {
  /** A Cosmos-SDK MsgRewardsOptOut */
  sender: string;
}
/** A Cosmos-SDK MsgRewardsOptOut */
export interface MsgRewardsOptOutSDKType {
  sender: string;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponse {}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponseSDKType {}
/** A Cosmos-SDK MsgReclaimLockedFunds */
export interface MsgReclaimLockedFunds {
  sender: string;
  lockedAccountPubKey: Uint8Array;
  signature: Uint8Array;
}
/** A Cosmos-SDK MsgReclaimLockedFunds */
export interface MsgReclaimLockedFundsSDKType {
  sender: string;
  lockedAccountPubKey: Uint8Array;
  signature: Uint8Array;
}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 */
export interface MsgReclaimLockedFundsResponse {}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 */
export interface MsgReclaimLockedFundsResponseSDKType {}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignData {
  /** Signer is the sdk.AccAddress of the message signer */
  Signer: Uint8Array;
  /**
   * Data represents the raw bytes of the content that is signed (text, json,
   * etc)
   */
  Data: Uint8Array;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataSDKType {
  Signer: Uint8Array;
  Data: Uint8Array;
}
/** MsgSignDoc defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDoc {
  signType: string;
  value?: MsgSignData;
}
/** MsgSignDoc defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDocSDKType {
  sign_type: string;
  value?: MsgSignDataSDKType;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 */
export interface MsgAdminUpdateBinaryOptionsMarket {
  sender: string;
  marketId: string;
  /** new price at which market will be settled */
  settlementPrice: string;
  /** expiration timestamp */
  expirationTimestamp: Long;
  /** expiration timestamp */
  settlementTimestamp: Long;
  /** Status of the market */
  status: MarketStatus;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 */
export interface MsgAdminUpdateBinaryOptionsMarketSDKType {
  sender: string;
  market_id: string;
  settlement_price: string;
  expiration_timestamp: Long;
  settlement_timestamp: Long;
  status: MarketStatus;
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponse {}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponseSDKType {}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposal {
  title: string;
  description: string;
  marketFeeMultipliers: MarketFeeMultiplier[];
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposalSDKType {
  title: string;
  description: string;
  market_fee_multipliers: MarketFeeMultiplierSDKType[];
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    sender: "",
    subaccountId: "",
    amount: undefined
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    sender: "",
    subaccountId: "",
    amount: undefined
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }
};
function createBaseMsgCreateSpotLimitOrder(): MsgCreateSpotLimitOrder {
  return {
    sender: "",
    order: undefined
  };
}
export const MsgCreateSpotLimitOrder = {
  encode(message: MsgCreateSpotLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.order !== undefined) {
      SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateSpotLimitOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      order: isSet(object.order) ? SpotOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder {
    const message = createBaseMsgCreateSpotLimitOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCreateSpotLimitOrderResponse(): MsgCreateSpotLimitOrderResponse {
  return {
    orderHash: ""
  };
}
export const MsgCreateSpotLimitOrderResponse = {
  encode(message: MsgCreateSpotLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateSpotLimitOrderResponse {
    return {
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse {
    const message = createBaseMsgCreateSpotLimitOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseMsgBatchCreateSpotLimitOrders(): MsgBatchCreateSpotLimitOrders {
  return {
    sender: "",
    orders: []
  };
}
export const MsgBatchCreateSpotLimitOrders = {
  encode(message: MsgBatchCreateSpotLimitOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.orders) {
      SpotOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCreateSpotLimitOrders {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => SpotOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders {
    const message = createBaseMsgBatchCreateSpotLimitOrders();
    message.sender = object.sender ?? "";
    message.orders = object.orders?.map(e => SpotOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchCreateSpotLimitOrdersResponse(): MsgBatchCreateSpotLimitOrdersResponse {
  return {
    orderHashes: []
  };
}
export const MsgBatchCreateSpotLimitOrdersResponse = {
  encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orderHashes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCreateSpotLimitOrdersResponse {
    return {
      orderHashes: Array.isArray(object?.orderHashes) ? object.orderHashes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse {
    const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgInstantSpotMarketLaunch(): MsgInstantSpotMarketLaunch {
  return {
    sender: "",
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const MsgInstantSpotMarketLaunch = {
  encode(message: MsgInstantSpotMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.baseDenom !== "") {
      writer.uint32(26).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(42).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(50).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantSpotMarketLaunch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch {
    const message = createBaseMsgInstantSpotMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseMsgInstantSpotMarketLaunchResponse(): MsgInstantSpotMarketLaunchResponse {
  return {};
}
export const MsgInstantSpotMarketLaunchResponse = {
  encode(_: MsgInstantSpotMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgInstantSpotMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse {
    const message = createBaseMsgInstantSpotMarketLaunchResponse();
    return message;
  }
};
function createBaseMsgInstantPerpetualMarketLaunch(): MsgInstantPerpetualMarketLaunch {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    makerFeeRate: "",
    takerFeeRate: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const MsgInstantPerpetualMarketLaunch = {
  encode(message: MsgInstantPerpetualMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(48).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(56).int32(message.oracleType);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(66).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(74).string(message.takerFeeRate);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.maintenanceMarginRatio);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(98).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(106).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantPerpetualMarketLaunch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch {
    const message = createBaseMsgInstantPerpetualMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseMsgInstantPerpetualMarketLaunchResponse(): MsgInstantPerpetualMarketLaunchResponse {
  return {};
}
export const MsgInstantPerpetualMarketLaunchResponse = {
  encode(_: MsgInstantPerpetualMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgInstantPerpetualMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse {
    const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
    return message;
  }
};
function createBaseMsgInstantBinaryOptionsMarketLaunch(): MsgInstantBinaryOptionsMarketLaunch {
  return {
    sender: "",
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    makerFeeRate: "",
    takerFeeRate: "",
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    admin: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const MsgInstantBinaryOptionsMarketLaunch = {
  encode(message: MsgInstantBinaryOptionsMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.oracleSymbol !== "") {
      writer.uint32(26).string(message.oracleSymbol);
    }
    if (message.oracleProvider !== "") {
      writer.uint32(34).string(message.oracleProvider);
    }
    if (message.oracleType !== 0) {
      writer.uint32(40).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(48).uint32(message.oracleScaleFactor);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(58).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(66).string(message.takerFeeRate);
    }
    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }
    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(90).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(98).string(message.quoteDenom);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantBinaryOptionsMarketLaunch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
      oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      expirationTimestamp: isSet(object.expirationTimestamp) ? Long.fromValue(object.expirationTimestamp) : Long.ZERO,
      settlementTimestamp: isSet(object.settlementTimestamp) ? Long.fromValue(object.settlementTimestamp) : Long.ZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch {
    const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseMsgInstantBinaryOptionsMarketLaunchResponse(): MsgInstantBinaryOptionsMarketLaunchResponse {
  return {};
}
export const MsgInstantBinaryOptionsMarketLaunchResponse = {
  encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgInstantBinaryOptionsMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse {
    const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
    return message;
  }
};
function createBaseMsgInstantExpiryFuturesMarketLaunch(): MsgInstantExpiryFuturesMarketLaunch {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expiry: Long.ZERO,
    makerFeeRate: "",
    takerFeeRate: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const MsgInstantExpiryFuturesMarketLaunch = {
  encode(message: MsgInstantExpiryFuturesMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (!message.expiry.isZero()) {
      writer.uint32(64).int64(message.expiry);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(74).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(82).string(message.takerFeeRate);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(90).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(98).string(message.maintenanceMarginRatio);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantExpiryFuturesMarketLaunch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      expiry: isSet(object.expiry) ? Long.fromValue(object.expiry) : Long.ZERO,
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch {
    const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseMsgInstantExpiryFuturesMarketLaunchResponse(): MsgInstantExpiryFuturesMarketLaunchResponse {
  return {};
}
export const MsgInstantExpiryFuturesMarketLaunchResponse = {
  encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgInstantExpiryFuturesMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse {
    const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
    return message;
  }
};
function createBaseMsgCreateSpotMarketOrder(): MsgCreateSpotMarketOrder {
  return {
    sender: "",
    order: undefined
  };
}
export const MsgCreateSpotMarketOrder = {
  encode(message: MsgCreateSpotMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.order !== undefined) {
      SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateSpotMarketOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      order: isSet(object.order) ? SpotOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder {
    const message = createBaseMsgCreateSpotMarketOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCreateSpotMarketOrderResponse(): MsgCreateSpotMarketOrderResponse {
  return {
    orderHash: "",
    results: undefined
  };
}
export const MsgCreateSpotMarketOrderResponse = {
  encode(message: MsgCreateSpotMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }
    if (message.results !== undefined) {
      SpotMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateSpotMarketOrderResponse {
    return {
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      results: isSet(object.results) ? SpotMarketOrderResults.fromJSON(object.results) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse {
    const message = createBaseMsgCreateSpotMarketOrderResponse();
    message.orderHash = object.orderHash ?? "";
    message.results = object.results !== undefined && object.results !== null ? SpotMarketOrderResults.fromPartial(object.results) : undefined;
    return message;
  }
};
function createBaseSpotMarketOrderResults(): SpotMarketOrderResults {
  return {
    quantity: "",
    price: "",
    fee: ""
  };
}
export const SpotMarketOrderResults = {
  encode(message: SpotMarketOrderResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== "") {
      writer.uint32(10).string(message.quantity);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },
  fromJSON(object: any): SpotMarketOrderResults {
    return {
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      price: isSet(object.price) ? String(object.price) : "",
      fee: isSet(object.fee) ? String(object.fee) : ""
    };
  },
  fromPartial(object: Partial<SpotMarketOrderResults>): SpotMarketOrderResults {
    const message = createBaseSpotMarketOrderResults();
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.fee = object.fee ?? "";
    return message;
  }
};
function createBaseMsgCreateDerivativeLimitOrder(): MsgCreateDerivativeLimitOrder {
  return {
    sender: "",
    order: undefined
  };
}
export const MsgCreateDerivativeLimitOrder = {
  encode(message: MsgCreateDerivativeLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDerivativeLimitOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder {
    const message = createBaseMsgCreateDerivativeLimitOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCreateDerivativeLimitOrderResponse(): MsgCreateDerivativeLimitOrderResponse {
  return {
    orderHash: ""
  };
}
export const MsgCreateDerivativeLimitOrderResponse = {
  encode(message: MsgCreateDerivativeLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDerivativeLimitOrderResponse {
    return {
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse {
    const message = createBaseMsgCreateDerivativeLimitOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseMsgCreateBinaryOptionsLimitOrder(): MsgCreateBinaryOptionsLimitOrder {
  return {
    sender: "",
    order: undefined
  };
}
export const MsgCreateBinaryOptionsLimitOrder = {
  encode(message: MsgCreateBinaryOptionsLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBinaryOptionsLimitOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder {
    const message = createBaseMsgCreateBinaryOptionsLimitOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCreateBinaryOptionsLimitOrderResponse(): MsgCreateBinaryOptionsLimitOrderResponse {
  return {
    orderHash: ""
  };
}
export const MsgCreateBinaryOptionsLimitOrderResponse = {
  encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBinaryOptionsLimitOrderResponse {
    return {
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse {
    const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseMsgBatchCreateDerivativeLimitOrders(): MsgBatchCreateDerivativeLimitOrders {
  return {
    sender: "",
    orders: []
  };
}
export const MsgBatchCreateDerivativeLimitOrders = {
  encode(message: MsgBatchCreateDerivativeLimitOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.orders) {
      DerivativeOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCreateDerivativeLimitOrders {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => DerivativeOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders {
    const message = createBaseMsgBatchCreateDerivativeLimitOrders();
    message.sender = object.sender ?? "";
    message.orders = object.orders?.map(e => DerivativeOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchCreateDerivativeLimitOrdersResponse(): MsgBatchCreateDerivativeLimitOrdersResponse {
  return {
    orderHashes: []
  };
}
export const MsgBatchCreateDerivativeLimitOrdersResponse = {
  encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orderHashes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCreateDerivativeLimitOrdersResponse {
    return {
      orderHashes: Array.isArray(object?.orderHashes) ? object.orderHashes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse {
    const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgCancelSpotOrder(): MsgCancelSpotOrder {
  return {
    sender: "",
    marketId: "",
    subaccountId: "",
    orderHash: ""
  };
}
export const MsgCancelSpotOrder = {
  encode(message: MsgCancelSpotOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(26).string(message.subaccountId);
    }
    if (message.orderHash !== "") {
      writer.uint32(34).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelSpotOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelSpotOrder>): MsgCancelSpotOrder {
    const message = createBaseMsgCancelSpotOrder();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseMsgCancelSpotOrderResponse(): MsgCancelSpotOrderResponse {
  return {};
}
export const MsgCancelSpotOrderResponse = {
  encode(_: MsgCancelSpotOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelSpotOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse {
    const message = createBaseMsgCancelSpotOrderResponse();
    return message;
  }
};
function createBaseMsgBatchCancelSpotOrders(): MsgBatchCancelSpotOrders {
  return {
    sender: "",
    data: []
  };
}
export const MsgBatchCancelSpotOrders = {
  encode(message: MsgBatchCancelSpotOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.data) {
      OrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCancelSpotOrders {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      data: Array.isArray(object?.data) ? object.data.map((e: any) => OrderData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders {
    const message = createBaseMsgBatchCancelSpotOrders();
    message.sender = object.sender ?? "";
    message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchCancelSpotOrdersResponse(): MsgBatchCancelSpotOrdersResponse {
  return {
    success: []
  };
}
export const MsgBatchCancelSpotOrdersResponse = {
  encode(message: MsgBatchCancelSpotOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.success) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgBatchCancelSpotOrdersResponse {
    return {
      success: Array.isArray(object?.success) ? object.success.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse {
    const message = createBaseMsgBatchCancelSpotOrdersResponse();
    message.success = object.success?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgBatchCancelBinaryOptionsOrders(): MsgBatchCancelBinaryOptionsOrders {
  return {
    sender: "",
    data: []
  };
}
export const MsgBatchCancelBinaryOptionsOrders = {
  encode(message: MsgBatchCancelBinaryOptionsOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.data) {
      OrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCancelBinaryOptionsOrders {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      data: Array.isArray(object?.data) ? object.data.map((e: any) => OrderData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders {
    const message = createBaseMsgBatchCancelBinaryOptionsOrders();
    message.sender = object.sender ?? "";
    message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchCancelBinaryOptionsOrdersResponse(): MsgBatchCancelBinaryOptionsOrdersResponse {
  return {
    success: []
  };
}
export const MsgBatchCancelBinaryOptionsOrdersResponse = {
  encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.success) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgBatchCancelBinaryOptionsOrdersResponse {
    return {
      success: Array.isArray(object?.success) ? object.success.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse {
    const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
    message.success = object.success?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgBatchUpdateOrders(): MsgBatchUpdateOrders {
  return {
    sender: "",
    subaccountId: "",
    spotMarketIdsToCancelAll: [],
    derivativeMarketIdsToCancelAll: [],
    spotOrdersToCancel: undefined,
    derivativeOrdersToCancel: undefined,
    spotOrdersToCreate: undefined,
    derivativeOrdersToCreate: undefined,
    binaryOptionsOrdersToCancel: undefined,
    binaryOptionsMarketIdsToCancelAll: [],
    binaryOptionsOrdersToCreate: undefined
  };
}
export const MsgBatchUpdateOrders = {
  encode(message: MsgBatchUpdateOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.spotMarketIdsToCancelAll) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.derivativeMarketIdsToCancelAll) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.spotOrdersToCancel) {
      OrderData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.derivativeOrdersToCancel) {
      OrderData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.spotOrdersToCreate) {
      SpotOrder.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.derivativeOrdersToCreate) {
      DerivativeOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.binaryOptionsOrdersToCancel) {
      OrderData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarketIdsToCancelAll) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.binaryOptionsOrdersToCreate) {
      DerivativeOrder.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchUpdateOrders {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      spotMarketIdsToCancelAll: Array.isArray(object?.spotMarketIdsToCancelAll) ? object.spotMarketIdsToCancelAll.map((e: any) => String(e)) : [],
      derivativeMarketIdsToCancelAll: Array.isArray(object?.derivativeMarketIdsToCancelAll) ? object.derivativeMarketIdsToCancelAll.map((e: any) => String(e)) : [],
      spotOrdersToCancel: Array.isArray(object?.spotOrdersToCancel) ? object.spotOrdersToCancel.map((e: any) => OrderData.fromJSON(e)) : [],
      derivativeOrdersToCancel: Array.isArray(object?.derivativeOrdersToCancel) ? object.derivativeOrdersToCancel.map((e: any) => OrderData.fromJSON(e)) : [],
      spotOrdersToCreate: Array.isArray(object?.spotOrdersToCreate) ? object.spotOrdersToCreate.map((e: any) => SpotOrder.fromJSON(e)) : [],
      derivativeOrdersToCreate: Array.isArray(object?.derivativeOrdersToCreate) ? object.derivativeOrdersToCreate.map((e: any) => DerivativeOrder.fromJSON(e)) : [],
      binaryOptionsOrdersToCancel: Array.isArray(object?.binaryOptionsOrdersToCancel) ? object.binaryOptionsOrdersToCancel.map((e: any) => OrderData.fromJSON(e)) : [],
      binaryOptionsMarketIdsToCancelAll: Array.isArray(object?.binaryOptionsMarketIdsToCancelAll) ? object.binaryOptionsMarketIdsToCancelAll.map((e: any) => String(e)) : [],
      binaryOptionsOrdersToCreate: Array.isArray(object?.binaryOptionsOrdersToCreate) ? object.binaryOptionsOrdersToCreate.map((e: any) => DerivativeOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders {
    const message = createBaseMsgBatchUpdateOrders();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.spotMarketIdsToCancelAll = object.spotMarketIdsToCancelAll?.map(e => e) || [];
    message.derivativeMarketIdsToCancelAll = object.derivativeMarketIdsToCancelAll?.map(e => e) || [];
    message.spotOrdersToCancel = object.spotOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
    message.derivativeOrdersToCancel = object.derivativeOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
    message.spotOrdersToCreate = object.spotOrdersToCreate?.map(e => SpotOrder.fromPartial(e)) || [];
    message.derivativeOrdersToCreate = object.derivativeOrdersToCreate?.map(e => DerivativeOrder.fromPartial(e)) || [];
    message.binaryOptionsOrdersToCancel = object.binaryOptionsOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
    message.binaryOptionsMarketIdsToCancelAll = object.binaryOptionsMarketIdsToCancelAll?.map(e => e) || [];
    message.binaryOptionsOrdersToCreate = object.binaryOptionsOrdersToCreate?.map(e => DerivativeOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchUpdateOrdersResponse(): MsgBatchUpdateOrdersResponse {
  return {
    spotCancelSuccess: [],
    derivativeCancelSuccess: [],
    spotOrderHashes: [],
    derivativeOrderHashes: [],
    binaryOptionsCancelSuccess: [],
    binaryOptionsOrderHashes: []
  };
}
export const MsgBatchUpdateOrdersResponse = {
  encode(message: MsgBatchUpdateOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.spotCancelSuccess) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.derivativeCancelSuccess) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.spotOrderHashes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.derivativeOrderHashes) {
      writer.uint32(34).string(v!);
    }
    writer.uint32(42).fork();
    for (const v of message.binaryOptionsCancelSuccess) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.binaryOptionsOrderHashes) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchUpdateOrdersResponse {
    return {
      spotCancelSuccess: Array.isArray(object?.spotCancelSuccess) ? object.spotCancelSuccess.map((e: any) => Boolean(e)) : [],
      derivativeCancelSuccess: Array.isArray(object?.derivativeCancelSuccess) ? object.derivativeCancelSuccess.map((e: any) => Boolean(e)) : [],
      spotOrderHashes: Array.isArray(object?.spotOrderHashes) ? object.spotOrderHashes.map((e: any) => String(e)) : [],
      derivativeOrderHashes: Array.isArray(object?.derivativeOrderHashes) ? object.derivativeOrderHashes.map((e: any) => String(e)) : [],
      binaryOptionsCancelSuccess: Array.isArray(object?.binaryOptionsCancelSuccess) ? object.binaryOptionsCancelSuccess.map((e: any) => Boolean(e)) : [],
      binaryOptionsOrderHashes: Array.isArray(object?.binaryOptionsOrderHashes) ? object.binaryOptionsOrderHashes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse {
    const message = createBaseMsgBatchUpdateOrdersResponse();
    message.spotCancelSuccess = object.spotCancelSuccess?.map(e => e) || [];
    message.derivativeCancelSuccess = object.derivativeCancelSuccess?.map(e => e) || [];
    message.spotOrderHashes = object.spotOrderHashes?.map(e => e) || [];
    message.derivativeOrderHashes = object.derivativeOrderHashes?.map(e => e) || [];
    message.binaryOptionsCancelSuccess = object.binaryOptionsCancelSuccess?.map(e => e) || [];
    message.binaryOptionsOrderHashes = object.binaryOptionsOrderHashes?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgCreateDerivativeMarketOrder(): MsgCreateDerivativeMarketOrder {
  return {
    sender: "",
    order: undefined
  };
}
export const MsgCreateDerivativeMarketOrder = {
  encode(message: MsgCreateDerivativeMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDerivativeMarketOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder {
    const message = createBaseMsgCreateDerivativeMarketOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCreateDerivativeMarketOrderResponse(): MsgCreateDerivativeMarketOrderResponse {
  return {
    orderHash: "",
    results: undefined
  };
}
export const MsgCreateDerivativeMarketOrderResponse = {
  encode(message: MsgCreateDerivativeMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }
    if (message.results !== undefined) {
      DerivativeMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDerivativeMarketOrderResponse {
    return {
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      results: isSet(object.results) ? DerivativeMarketOrderResults.fromJSON(object.results) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse {
    const message = createBaseMsgCreateDerivativeMarketOrderResponse();
    message.orderHash = object.orderHash ?? "";
    message.results = object.results !== undefined && object.results !== null ? DerivativeMarketOrderResults.fromPartial(object.results) : undefined;
    return message;
  }
};
function createBaseDerivativeMarketOrderResults(): DerivativeMarketOrderResults {
  return {
    quantity: "",
    price: "",
    fee: "",
    positionDelta: undefined,
    payout: ""
  };
}
export const DerivativeMarketOrderResults = {
  encode(message: DerivativeMarketOrderResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== "") {
      writer.uint32(10).string(message.quantity);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(34).fork()).ldelim();
    }
    if (message.payout !== "") {
      writer.uint32(42).string(message.payout);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarketOrderResults {
    return {
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      price: isSet(object.price) ? String(object.price) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      positionDelta: isSet(object.positionDelta) ? PositionDelta.fromJSON(object.positionDelta) : undefined,
      payout: isSet(object.payout) ? String(object.payout) : ""
    };
  },
  fromPartial(object: Partial<DerivativeMarketOrderResults>): DerivativeMarketOrderResults {
    const message = createBaseDerivativeMarketOrderResults();
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.fee = object.fee ?? "";
    message.positionDelta = object.positionDelta !== undefined && object.positionDelta !== null ? PositionDelta.fromPartial(object.positionDelta) : undefined;
    message.payout = object.payout ?? "";
    return message;
  }
};
function createBaseMsgCreateBinaryOptionsMarketOrder(): MsgCreateBinaryOptionsMarketOrder {
  return {
    sender: "",
    order: undefined
  };
}
export const MsgCreateBinaryOptionsMarketOrder = {
  encode(message: MsgCreateBinaryOptionsMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBinaryOptionsMarketOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder {
    const message = createBaseMsgCreateBinaryOptionsMarketOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgCreateBinaryOptionsMarketOrderResponse(): MsgCreateBinaryOptionsMarketOrderResponse {
  return {
    orderHash: "",
    results: undefined
  };
}
export const MsgCreateBinaryOptionsMarketOrderResponse = {
  encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }
    if (message.results !== undefined) {
      DerivativeMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBinaryOptionsMarketOrderResponse {
    return {
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      results: isSet(object.results) ? DerivativeMarketOrderResults.fromJSON(object.results) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse {
    const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
    message.orderHash = object.orderHash ?? "";
    message.results = object.results !== undefined && object.results !== null ? DerivativeMarketOrderResults.fromPartial(object.results) : undefined;
    return message;
  }
};
function createBaseMsgCancelDerivativeOrder(): MsgCancelDerivativeOrder {
  return {
    sender: "",
    marketId: "",
    subaccountId: "",
    orderHash: "",
    orderMask: 0
  };
}
export const MsgCancelDerivativeOrder = {
  encode(message: MsgCancelDerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(26).string(message.subaccountId);
    }
    if (message.orderHash !== "") {
      writer.uint32(34).string(message.orderHash);
    }
    if (message.orderMask !== 0) {
      writer.uint32(40).int32(message.orderMask);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelDerivativeOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      orderMask: isSet(object.orderMask) ? Number(object.orderMask) : 0
    };
  },
  fromPartial(object: Partial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder {
    const message = createBaseMsgCancelDerivativeOrder();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.orderMask = object.orderMask ?? 0;
    return message;
  }
};
function createBaseMsgCancelDerivativeOrderResponse(): MsgCancelDerivativeOrderResponse {
  return {};
}
export const MsgCancelDerivativeOrderResponse = {
  encode(_: MsgCancelDerivativeOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelDerivativeOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse {
    const message = createBaseMsgCancelDerivativeOrderResponse();
    return message;
  }
};
function createBaseMsgCancelBinaryOptionsOrder(): MsgCancelBinaryOptionsOrder {
  return {
    sender: "",
    marketId: "",
    subaccountId: "",
    orderHash: "",
    orderMask: 0
  };
}
export const MsgCancelBinaryOptionsOrder = {
  encode(message: MsgCancelBinaryOptionsOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(26).string(message.subaccountId);
    }
    if (message.orderHash !== "") {
      writer.uint32(34).string(message.orderHash);
    }
    if (message.orderMask !== 0) {
      writer.uint32(40).int32(message.orderMask);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelBinaryOptionsOrder {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      orderMask: isSet(object.orderMask) ? Number(object.orderMask) : 0
    };
  },
  fromPartial(object: Partial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder {
    const message = createBaseMsgCancelBinaryOptionsOrder();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.orderMask = object.orderMask ?? 0;
    return message;
  }
};
function createBaseMsgCancelBinaryOptionsOrderResponse(): MsgCancelBinaryOptionsOrderResponse {
  return {};
}
export const MsgCancelBinaryOptionsOrderResponse = {
  encode(_: MsgCancelBinaryOptionsOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelBinaryOptionsOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse {
    const message = createBaseMsgCancelBinaryOptionsOrderResponse();
    return message;
  }
};
function createBaseOrderData(): OrderData {
  return {
    marketId: "",
    subaccountId: "",
    orderHash: "",
    orderMask: 0
  };
}
export const OrderData = {
  encode(message: OrderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.orderHash !== "") {
      writer.uint32(26).string(message.orderHash);
    }
    if (message.orderMask !== 0) {
      writer.uint32(32).int32(message.orderMask);
    }
    return writer;
  },
  fromJSON(object: any): OrderData {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      orderMask: isSet(object.orderMask) ? Number(object.orderMask) : 0
    };
  },
  fromPartial(object: Partial<OrderData>): OrderData {
    const message = createBaseOrderData();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.orderMask = object.orderMask ?? 0;
    return message;
  }
};
function createBaseMsgBatchCancelDerivativeOrders(): MsgBatchCancelDerivativeOrders {
  return {
    sender: "",
    data: []
  };
}
export const MsgBatchCancelDerivativeOrders = {
  encode(message: MsgBatchCancelDerivativeOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.data) {
      OrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchCancelDerivativeOrders {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      data: Array.isArray(object?.data) ? object.data.map((e: any) => OrderData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders {
    const message = createBaseMsgBatchCancelDerivativeOrders();
    message.sender = object.sender ?? "";
    message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBatchCancelDerivativeOrdersResponse(): MsgBatchCancelDerivativeOrdersResponse {
  return {
    success: []
  };
}
export const MsgBatchCancelDerivativeOrdersResponse = {
  encode(message: MsgBatchCancelDerivativeOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.success) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgBatchCancelDerivativeOrdersResponse {
    return {
      success: Array.isArray(object?.success) ? object.success.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse {
    const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
    message.success = object.success?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSubaccountTransfer(): MsgSubaccountTransfer {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    amount: undefined
  };
}
export const MsgSubaccountTransfer = {
  encode(message: MsgSubaccountTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sourceSubaccountId !== "") {
      writer.uint32(18).string(message.sourceSubaccountId);
    }
    if (message.destinationSubaccountId !== "") {
      writer.uint32(26).string(message.destinationSubaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubaccountTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceSubaccountId: isSet(object.sourceSubaccountId) ? String(object.sourceSubaccountId) : "",
      destinationSubaccountId: isSet(object.destinationSubaccountId) ? String(object.destinationSubaccountId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubaccountTransfer>): MsgSubaccountTransfer {
    const message = createBaseMsgSubaccountTransfer();
    message.sender = object.sender ?? "";
    message.sourceSubaccountId = object.sourceSubaccountId ?? "";
    message.destinationSubaccountId = object.destinationSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgSubaccountTransferResponse(): MsgSubaccountTransferResponse {
  return {};
}
export const MsgSubaccountTransferResponse = {
  encode(_: MsgSubaccountTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSubaccountTransferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse {
    const message = createBaseMsgSubaccountTransferResponse();
    return message;
  }
};
function createBaseMsgExternalTransfer(): MsgExternalTransfer {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    amount: undefined
  };
}
export const MsgExternalTransfer = {
  encode(message: MsgExternalTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sourceSubaccountId !== "") {
      writer.uint32(18).string(message.sourceSubaccountId);
    }
    if (message.destinationSubaccountId !== "") {
      writer.uint32(26).string(message.destinationSubaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgExternalTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceSubaccountId: isSet(object.sourceSubaccountId) ? String(object.sourceSubaccountId) : "",
      destinationSubaccountId: isSet(object.destinationSubaccountId) ? String(object.destinationSubaccountId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgExternalTransfer>): MsgExternalTransfer {
    const message = createBaseMsgExternalTransfer();
    message.sender = object.sender ?? "";
    message.sourceSubaccountId = object.sourceSubaccountId ?? "";
    message.destinationSubaccountId = object.destinationSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgExternalTransferResponse(): MsgExternalTransferResponse {
  return {};
}
export const MsgExternalTransferResponse = {
  encode(_: MsgExternalTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgExternalTransferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgExternalTransferResponse>): MsgExternalTransferResponse {
    const message = createBaseMsgExternalTransferResponse();
    return message;
  }
};
function createBaseMsgLiquidatePosition(): MsgLiquidatePosition {
  return {
    sender: "",
    subaccountId: "",
    marketId: "",
    order: undefined
  };
}
export const MsgLiquidatePosition = {
  encode(message: MsgLiquidatePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidatePosition {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<MsgLiquidatePosition>): MsgLiquidatePosition {
    const message = createBaseMsgLiquidatePosition();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseMsgLiquidatePositionResponse(): MsgLiquidatePositionResponse {
  return {};
}
export const MsgLiquidatePositionResponse = {
  encode(_: MsgLiquidatePositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgLiquidatePositionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse {
    const message = createBaseMsgLiquidatePositionResponse();
    return message;
  }
};
function createBaseMsgIncreasePositionMargin(): MsgIncreasePositionMargin {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    marketId: "",
    amount: ""
  };
}
export const MsgIncreasePositionMargin = {
  encode(message: MsgIncreasePositionMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sourceSubaccountId !== "") {
      writer.uint32(18).string(message.sourceSubaccountId);
    }
    if (message.destinationSubaccountId !== "") {
      writer.uint32(26).string(message.destinationSubaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(34).string(message.marketId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgIncreasePositionMargin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceSubaccountId: isSet(object.sourceSubaccountId) ? String(object.sourceSubaccountId) : "",
      destinationSubaccountId: isSet(object.destinationSubaccountId) ? String(object.destinationSubaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin {
    const message = createBaseMsgIncreasePositionMargin();
    message.sender = object.sender ?? "";
    message.sourceSubaccountId = object.sourceSubaccountId ?? "";
    message.destinationSubaccountId = object.destinationSubaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseMsgIncreasePositionMarginResponse(): MsgIncreasePositionMarginResponse {
  return {};
}
export const MsgIncreasePositionMarginResponse = {
  encode(_: MsgIncreasePositionMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgIncreasePositionMarginResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse {
    const message = createBaseMsgIncreasePositionMarginResponse();
    return message;
  }
};
function createBaseMsgPrivilegedExecuteContract(): MsgPrivilegedExecuteContract {
  return {
    sender: "",
    funds: "",
    contractAddress: "",
    data: ""
  };
}
export const MsgPrivilegedExecuteContract = {
  encode(message: MsgPrivilegedExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.funds !== "") {
      writer.uint32(18).string(message.funds);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgPrivilegedExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      funds: isSet(object.funds) ? String(object.funds) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      data: isSet(object.data) ? String(object.data) : ""
    };
  },
  fromPartial(object: Partial<MsgPrivilegedExecuteContract>): MsgPrivilegedExecuteContract {
    const message = createBaseMsgPrivilegedExecuteContract();
    message.sender = object.sender ?? "";
    message.funds = object.funds ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.data = object.data ?? "";
    return message;
  }
};
function createBaseMsgPrivilegedExecuteContractResponse(): MsgPrivilegedExecuteContractResponse {
  return {
    fundsDiff: []
  };
}
export const MsgPrivilegedExecuteContractResponse = {
  encode(message: MsgPrivilegedExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fundsDiff) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgPrivilegedExecuteContractResponse {
    return {
      fundsDiff: Array.isArray(object?.fundsDiff) ? object.fundsDiff.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgPrivilegedExecuteContractResponse>): MsgPrivilegedExecuteContractResponse {
    const message = createBaseMsgPrivilegedExecuteContractResponse();
    message.fundsDiff = object.fundsDiff?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSpotMarketParamUpdateProposal(): SpotMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    status: 0
  };
}
export const SpotMarketParamUpdateProposal = {
  encode(message: SpotMarketParamUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(34).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(message.minQuantityTickSize);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): SpotMarketParamUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : undefined,
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : undefined,
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : undefined,
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : undefined,
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : undefined,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal {
    const message = createBaseSpotMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseExchangeEnableProposal(): ExchangeEnableProposal {
  return {
    title: "",
    description: "",
    exchangeType: 0
  };
}
export const ExchangeEnableProposal = {
  encode(message: ExchangeEnableProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.exchangeType !== 0) {
      writer.uint32(24).int32(message.exchangeType);
    }
    return writer;
  },
  fromJSON(object: any): ExchangeEnableProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      exchangeType: isSet(object.exchangeType) ? exchangeTypeFromJSON(object.exchangeType) : 0
    };
  },
  fromPartial(object: Partial<ExchangeEnableProposal>): ExchangeEnableProposal {
    const message = createBaseExchangeEnableProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.exchangeType = object.exchangeType ?? 0;
    return message;
  }
};
function createBaseBatchExchangeModificationProposal(): BatchExchangeModificationProposal {
  return {
    title: "",
    description: "",
    spotMarketParamUpdateProposals: [],
    derivativeMarketParamUpdateProposals: [],
    spotMarketLaunchProposals: [],
    perpetualMarketLaunchProposals: [],
    expiryFuturesMarketLaunchProposals: [],
    tradingRewardCampaignUpdateProposal: undefined,
    binaryOptionsMarketLaunchProposals: [],
    binaryOptionsParamUpdateProposals: [],
    denomDecimalsUpdateProposal: undefined
  };
}
export const BatchExchangeModificationProposal = {
  encode(message: BatchExchangeModificationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.spotMarketParamUpdateProposals) {
      SpotMarketParamUpdateProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.derivativeMarketParamUpdateProposals) {
      DerivativeMarketParamUpdateProposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.spotMarketLaunchProposals) {
      SpotMarketLaunchProposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.perpetualMarketLaunchProposals) {
      PerpetualMarketLaunchProposal.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.expiryFuturesMarketLaunchProposals) {
      ExpiryFuturesMarketLaunchProposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradingRewardCampaignUpdateProposal !== undefined) {
      TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarketLaunchProposals) {
      BinaryOptionsMarketLaunchProposal.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.binaryOptionsParamUpdateProposals) {
      BinaryOptionsMarketParamUpdateProposal.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.denomDecimalsUpdateProposal !== undefined) {
      UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BatchExchangeModificationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      spotMarketParamUpdateProposals: Array.isArray(object?.spotMarketParamUpdateProposals) ? object.spotMarketParamUpdateProposals.map((e: any) => SpotMarketParamUpdateProposal.fromJSON(e)) : [],
      derivativeMarketParamUpdateProposals: Array.isArray(object?.derivativeMarketParamUpdateProposals) ? object.derivativeMarketParamUpdateProposals.map((e: any) => DerivativeMarketParamUpdateProposal.fromJSON(e)) : [],
      spotMarketLaunchProposals: Array.isArray(object?.spotMarketLaunchProposals) ? object.spotMarketLaunchProposals.map((e: any) => SpotMarketLaunchProposal.fromJSON(e)) : [],
      perpetualMarketLaunchProposals: Array.isArray(object?.perpetualMarketLaunchProposals) ? object.perpetualMarketLaunchProposals.map((e: any) => PerpetualMarketLaunchProposal.fromJSON(e)) : [],
      expiryFuturesMarketLaunchProposals: Array.isArray(object?.expiryFuturesMarketLaunchProposals) ? object.expiryFuturesMarketLaunchProposals.map((e: any) => ExpiryFuturesMarketLaunchProposal.fromJSON(e)) : [],
      tradingRewardCampaignUpdateProposal: isSet(object.tradingRewardCampaignUpdateProposal) ? TradingRewardCampaignUpdateProposal.fromJSON(object.tradingRewardCampaignUpdateProposal) : undefined,
      binaryOptionsMarketLaunchProposals: Array.isArray(object?.binaryOptionsMarketLaunchProposals) ? object.binaryOptionsMarketLaunchProposals.map((e: any) => BinaryOptionsMarketLaunchProposal.fromJSON(e)) : [],
      binaryOptionsParamUpdateProposals: Array.isArray(object?.binaryOptionsParamUpdateProposals) ? object.binaryOptionsParamUpdateProposals.map((e: any) => BinaryOptionsMarketParamUpdateProposal.fromJSON(e)) : [],
      denomDecimalsUpdateProposal: isSet(object.denomDecimalsUpdateProposal) ? UpdateDenomDecimalsProposal.fromJSON(object.denomDecimalsUpdateProposal) : undefined
    };
  },
  fromPartial(object: Partial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal {
    const message = createBaseBatchExchangeModificationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.spotMarketParamUpdateProposals = object.spotMarketParamUpdateProposals?.map(e => SpotMarketParamUpdateProposal.fromPartial(e)) || [];
    message.derivativeMarketParamUpdateProposals = object.derivativeMarketParamUpdateProposals?.map(e => DerivativeMarketParamUpdateProposal.fromPartial(e)) || [];
    message.spotMarketLaunchProposals = object.spotMarketLaunchProposals?.map(e => SpotMarketLaunchProposal.fromPartial(e)) || [];
    message.perpetualMarketLaunchProposals = object.perpetualMarketLaunchProposals?.map(e => PerpetualMarketLaunchProposal.fromPartial(e)) || [];
    message.expiryFuturesMarketLaunchProposals = object.expiryFuturesMarketLaunchProposals?.map(e => ExpiryFuturesMarketLaunchProposal.fromPartial(e)) || [];
    message.tradingRewardCampaignUpdateProposal = object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null ? TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal) : undefined;
    message.binaryOptionsMarketLaunchProposals = object.binaryOptionsMarketLaunchProposals?.map(e => BinaryOptionsMarketLaunchProposal.fromPartial(e)) || [];
    message.binaryOptionsParamUpdateProposals = object.binaryOptionsParamUpdateProposals?.map(e => BinaryOptionsMarketParamUpdateProposal.fromPartial(e)) || [];
    message.denomDecimalsUpdateProposal = object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null ? UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal) : undefined;
    return message;
  }
};
function createBaseSpotMarketLaunchProposal(): SpotMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined
  };
}
export const SpotMarketLaunchProposal = {
  encode(message: SpotMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(42).string(message.quoteDenom);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(50).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(58).string(message.minQuantityTickSize);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(66).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(74).string(message.takerFeeRate);
    }
    return writer;
  },
  fromJSON(object: any): SpotMarketLaunchProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : undefined,
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : undefined
    };
  },
  fromPartial(object: Partial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal {
    const message = createBaseSpotMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    return message;
  }
};
function createBasePerpetualMarketLaunchProposal(): PerpetualMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const PerpetualMarketLaunchProposal = {
  encode(message: PerpetualMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(42).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(50).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(64).int32(message.oracleType);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(74).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(82).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(message.takerFeeRate);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketLaunchProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal {
    const message = createBasePerpetualMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseBinaryOptionsMarketLaunchProposal(): BinaryOptionsMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    admin: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const BinaryOptionsMarketLaunchProposal = {
  encode(message: BinaryOptionsMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.oracleSymbol !== "") {
      writer.uint32(34).string(message.oracleSymbol);
    }
    if (message.oracleProvider !== "") {
      writer.uint32(42).string(message.oracleProvider);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(64).int64(message.expirationTimestamp);
    }
    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(72).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(82).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(90).string(message.quoteDenom);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(message.takerFeeRate);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): BinaryOptionsMarketLaunchProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
      oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      expirationTimestamp: isSet(object.expirationTimestamp) ? Long.fromValue(object.expirationTimestamp) : Long.ZERO,
      settlementTimestamp: isSet(object.settlementTimestamp) ? Long.fromValue(object.settlementTimestamp) : Long.ZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal {
    const message = createBaseBinaryOptionsMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseExpiryFuturesMarketLaunchProposal(): ExpiryFuturesMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    expiry: Long.ZERO,
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const ExpiryFuturesMarketLaunchProposal = {
  encode(message: ExpiryFuturesMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(42).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(50).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(64).int32(message.oracleType);
    }
    if (!message.expiry.isZero()) {
      writer.uint32(72).int64(message.expiry);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(message.takerFeeRate);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(message.minQuantityTickSize);
    }
    return writer;
  },
  fromJSON(object: any): ExpiryFuturesMarketLaunchProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      expiry: isSet(object.expiry) ? Long.fromValue(object.expiry) : Long.ZERO,
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : ""
    };
  },
  fromPartial(object: Partial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal {
    const message = createBaseExpiryFuturesMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }
};
function createBaseDerivativeMarketParamUpdateProposal(): DerivativeMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    initialMarginRatio: undefined,
    maintenanceMarginRatio: undefined,
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    HourlyInterestRate: undefined,
    HourlyFundingRateCap: undefined,
    status: 0,
    oracleParams: undefined
  };
}
export const DerivativeMarketParamUpdateProposal = {
  encode(message: DerivativeMarketParamUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.initialMarginRatio !== undefined) {
      writer.uint32(34).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== undefined) {
      writer.uint32(42).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(50).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(58).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(66).string(message.relayerFeeShareRate);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(74).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(82).string(message.minQuantityTickSize);
    }
    if (message.HourlyInterestRate !== undefined) {
      writer.uint32(90).string(message.HourlyInterestRate);
    }
    if (message.HourlyFundingRateCap !== undefined) {
      writer.uint32(98).string(message.HourlyFundingRateCap);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.oracleParams !== undefined) {
      OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarketParamUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : undefined,
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : undefined,
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : undefined,
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : undefined,
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : undefined,
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : undefined,
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : undefined,
      HourlyInterestRate: isSet(object.HourlyInterestRate) ? String(object.HourlyInterestRate) : undefined,
      HourlyFundingRateCap: isSet(object.HourlyFundingRateCap) ? String(object.HourlyFundingRateCap) : undefined,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
      oracleParams: isSet(object.oracleParams) ? OracleParams.fromJSON(object.oracleParams) : undefined
    };
  },
  fromPartial(object: Partial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal {
    const message = createBaseDerivativeMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? undefined;
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? undefined;
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.HourlyInterestRate = object.HourlyInterestRate ?? undefined;
    message.HourlyFundingRateCap = object.HourlyFundingRateCap ?? undefined;
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? OracleParams.fromPartial(object.oracleParams) : undefined;
    return message;
  }
};
function createBaseMarketForcedSettlementProposal(): MarketForcedSettlementProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    settlementPrice: undefined
  };
}
export const MarketForcedSettlementProposal = {
  encode(message: MarketForcedSettlementProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(34).string(message.settlementPrice);
    }
    return writer;
  },
  fromJSON(object: any): MarketForcedSettlementProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : undefined
    };
  },
  fromPartial(object: Partial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal {
    const message = createBaseMarketForcedSettlementProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    return message;
  }
};
function createBaseUpdateDenomDecimalsProposal(): UpdateDenomDecimalsProposal {
  return {
    title: "",
    description: "",
    denomDecimals: []
  };
}
export const UpdateDenomDecimalsProposal = {
  encode(message: UpdateDenomDecimalsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateDenomDecimalsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denomDecimals: Array.isArray(object?.denomDecimals) ? object.denomDecimals.map((e: any) => DenomDecimals.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal {
    const message = createBaseUpdateDenomDecimalsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBinaryOptionsMarketParamUpdateProposal(): BinaryOptionsMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    settlementPrice: undefined,
    admin: "",
    status: 0,
    oracleParams: undefined
  };
}
export const BinaryOptionsMarketParamUpdateProposal = {
  encode(message: BinaryOptionsMarketParamUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(34).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(message.minQuantityTickSize);
    }
    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }
    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(90).string(message.settlementPrice);
    }
    if (message.admin !== "") {
      writer.uint32(98).string(message.admin);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.oracleParams !== undefined) {
      ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BinaryOptionsMarketParamUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : undefined,
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : undefined,
      relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : undefined,
      minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : undefined,
      minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : undefined,
      expirationTimestamp: isSet(object.expirationTimestamp) ? Long.fromValue(object.expirationTimestamp) : Long.ZERO,
      settlementTimestamp: isSet(object.settlementTimestamp) ? Long.fromValue(object.settlementTimestamp) : Long.ZERO,
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : undefined,
      admin: isSet(object.admin) ? String(object.admin) : "",
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
      oracleParams: isSet(object.oracleParams) ? ProviderOracleParams.fromJSON(object.oracleParams) : undefined
    };
  },
  fromPartial(object: Partial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal {
    const message = createBaseBinaryOptionsMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.admin = object.admin ?? "";
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? ProviderOracleParams.fromPartial(object.oracleParams) : undefined;
    return message;
  }
};
function createBaseProviderOracleParams(): ProviderOracleParams {
  return {
    symbol: "",
    provider: "",
    oracleScaleFactor: 0,
    oracleType: 0
  };
}
export const ProviderOracleParams = {
  encode(message: ProviderOracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(24).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    return writer;
  },
  fromJSON(object: any): ProviderOracleParams {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0
    };
  },
  fromPartial(object: Partial<ProviderOracleParams>): ProviderOracleParams {
    const message = createBaseProviderOracleParams();
    message.symbol = object.symbol ?? "";
    message.provider = object.provider ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  }
};
function createBaseOracleParams(): OracleParams {
  return {
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0
  };
}
export const OracleParams = {
  encode(message: OracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleBase !== "") {
      writer.uint32(10).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(18).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(24).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    return writer;
  },
  fromJSON(object: any): OracleParams {
    return {
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0
    };
  },
  fromPartial(object: Partial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  }
};
function createBaseTradingRewardCampaignLaunchProposal(): TradingRewardCampaignLaunchProposal {
  return {
    title: "",
    description: "",
    campaignInfo: undefined,
    campaignRewardPools: []
  };
}
export const TradingRewardCampaignLaunchProposal = {
  encode(message: TradingRewardCampaignLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.campaignRewardPools) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignLaunchProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      campaignInfo: isSet(object.campaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
      campaignRewardPools: Array.isArray(object?.campaignRewardPools) ? object.campaignRewardPools.map((e: any) => CampaignRewardPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal {
    const message = createBaseTradingRewardCampaignLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTradingRewardCampaignUpdateProposal(): TradingRewardCampaignUpdateProposal {
  return {
    title: "",
    description: "",
    campaignInfo: undefined,
    campaignRewardPoolsAdditions: [],
    campaignRewardPoolsUpdates: []
  };
}
export const TradingRewardCampaignUpdateProposal = {
  encode(message: TradingRewardCampaignUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.campaignRewardPoolsAdditions) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.campaignRewardPoolsUpdates) {
      CampaignRewardPool.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      campaignInfo: isSet(object.campaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
      campaignRewardPoolsAdditions: Array.isArray(object?.campaignRewardPoolsAdditions) ? object.campaignRewardPoolsAdditions.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      campaignRewardPoolsUpdates: Array.isArray(object?.campaignRewardPoolsUpdates) ? object.campaignRewardPoolsUpdates.map((e: any) => CampaignRewardPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal {
    const message = createBaseTradingRewardCampaignUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPoolsAdditions = object.campaignRewardPoolsAdditions?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.campaignRewardPoolsUpdates = object.campaignRewardPoolsUpdates?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRewardPointUpdate(): RewardPointUpdate {
  return {
    accountAddress: "",
    newPoints: ""
  };
}
export const RewardPointUpdate = {
  encode(message: RewardPointUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.newPoints !== "") {
      writer.uint32(98).string(message.newPoints);
    }
    return writer;
  },
  fromJSON(object: any): RewardPointUpdate {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      newPoints: isSet(object.newPoints) ? String(object.newPoints) : ""
    };
  },
  fromPartial(object: Partial<RewardPointUpdate>): RewardPointUpdate {
    const message = createBaseRewardPointUpdate();
    message.accountAddress = object.accountAddress ?? "";
    message.newPoints = object.newPoints ?? "";
    return message;
  }
};
function createBaseTradingRewardPendingPointsUpdateProposal(): TradingRewardPendingPointsUpdateProposal {
  return {
    title: "",
    description: "",
    pendingPoolTimestamp: Long.ZERO,
    rewardPointUpdates: []
  };
}
export const TradingRewardPendingPointsUpdateProposal = {
  encode(message: TradingRewardPendingPointsUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (!message.pendingPoolTimestamp.isZero()) {
      writer.uint32(24).int64(message.pendingPoolTimestamp);
    }
    for (const v of message.rewardPointUpdates) {
      RewardPointUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardPendingPointsUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? Long.fromValue(object.pendingPoolTimestamp) : Long.ZERO,
      rewardPointUpdates: Array.isArray(object?.rewardPointUpdates) ? object.rewardPointUpdates.map((e: any) => RewardPointUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal {
    const message = createBaseTradingRewardPendingPointsUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? Long.fromValue(object.pendingPoolTimestamp) : Long.ZERO;
    message.rewardPointUpdates = object.rewardPointUpdates?.map(e => RewardPointUpdate.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFeeDiscountProposal(): FeeDiscountProposal {
  return {
    title: "",
    description: "",
    schedule: undefined
  };
}
export const FeeDiscountProposal = {
  encode(message: FeeDiscountProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.schedule !== undefined) {
      FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      schedule: isSet(object.schedule) ? FeeDiscountSchedule.fromJSON(object.schedule) : undefined
    };
  },
  fromPartial(object: Partial<FeeDiscountProposal>): FeeDiscountProposal {
    const message = createBaseFeeDiscountProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
    return message;
  }
};
function createBaseBatchCommunityPoolSpendProposal(): BatchCommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    proposals: []
  };
}
export const BatchCommunityPoolSpendProposal = {
  encode(message: BatchCommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.proposals) {
      CommunityPoolSpendProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BatchCommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => CommunityPoolSpendProposal.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal {
    const message = createBaseBatchCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.proposals = object.proposals?.map(e => CommunityPoolSpendProposal.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgRewardsOptOut(): MsgRewardsOptOut {
  return {
    sender: ""
  };
}
export const MsgRewardsOptOut = {
  encode(message: MsgRewardsOptOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgRewardsOptOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgRewardsOptOut>): MsgRewardsOptOut {
    const message = createBaseMsgRewardsOptOut();
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgRewardsOptOutResponse(): MsgRewardsOptOutResponse {
  return {};
}
export const MsgRewardsOptOutResponse = {
  encode(_: MsgRewardsOptOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRewardsOptOutResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse {
    const message = createBaseMsgRewardsOptOutResponse();
    return message;
  }
};
function createBaseMsgReclaimLockedFunds(): MsgReclaimLockedFunds {
  return {
    sender: "",
    lockedAccountPubKey: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const MsgReclaimLockedFunds = {
  encode(message: MsgReclaimLockedFunds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockedAccountPubKey.length !== 0) {
      writer.uint32(18).bytes(message.lockedAccountPubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): MsgReclaimLockedFunds {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockedAccountPubKey: isSet(object.lockedAccountPubKey) ? bytesFromBase64(object.lockedAccountPubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgReclaimLockedFunds>): MsgReclaimLockedFunds {
    const message = createBaseMsgReclaimLockedFunds();
    message.sender = object.sender ?? "";
    message.lockedAccountPubKey = object.lockedAccountPubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgReclaimLockedFundsResponse(): MsgReclaimLockedFundsResponse {
  return {};
}
export const MsgReclaimLockedFundsResponse = {
  encode(_: MsgReclaimLockedFundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgReclaimLockedFundsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReclaimLockedFundsResponse>): MsgReclaimLockedFundsResponse {
    const message = createBaseMsgReclaimLockedFundsResponse();
    return message;
  }
};
function createBaseMsgSignData(): MsgSignData {
  return {
    Signer: new Uint8Array(),
    Data: new Uint8Array()
  };
}
export const MsgSignData = {
  encode(message: MsgSignData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Signer.length !== 0) {
      writer.uint32(10).bytes(message.Signer);
    }
    if (message.Data.length !== 0) {
      writer.uint32(18).bytes(message.Data);
    }
    return writer;
  },
  fromJSON(object: any): MsgSignData {
    return {
      Signer: isSet(object.Signer) ? bytesFromBase64(object.Signer) : new Uint8Array(),
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgSignData>): MsgSignData {
    const message = createBaseMsgSignData();
    message.Signer = object.Signer ?? new Uint8Array();
    message.Data = object.Data ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgSignDoc(): MsgSignDoc {
  return {
    signType: "",
    value: undefined
  };
}
export const MsgSignDoc = {
  encode(message: MsgSignDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signType !== "") {
      writer.uint32(10).string(message.signType);
    }
    if (message.value !== undefined) {
      MsgSignData.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSignDoc {
    return {
      signType: isSet(object.signType) ? String(object.signType) : "",
      value: isSet(object.value) ? MsgSignData.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<MsgSignDoc>): MsgSignDoc {
    const message = createBaseMsgSignDoc();
    message.signType = object.signType ?? "";
    message.value = object.value !== undefined && object.value !== null ? MsgSignData.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseMsgAdminUpdateBinaryOptionsMarket(): MsgAdminUpdateBinaryOptionsMarket {
  return {
    sender: "",
    marketId: "",
    settlementPrice: undefined,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    status: 0
  };
}
export const MsgAdminUpdateBinaryOptionsMarket = {
  encode(message: MsgAdminUpdateBinaryOptionsMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(26).string(message.settlementPrice);
    }
    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(32).int64(message.expirationTimestamp);
    }
    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(40).int64(message.settlementTimestamp);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): MsgAdminUpdateBinaryOptionsMarket {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : undefined,
      expirationTimestamp: isSet(object.expirationTimestamp) ? Long.fromValue(object.expirationTimestamp) : Long.ZERO,
      settlementTimestamp: isSet(object.settlementTimestamp) ? Long.fromValue(object.settlementTimestamp) : Long.ZERO,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket {
    const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseMsgAdminUpdateBinaryOptionsMarketResponse(): MsgAdminUpdateBinaryOptionsMarketResponse {
  return {};
}
export const MsgAdminUpdateBinaryOptionsMarketResponse = {
  encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAdminUpdateBinaryOptionsMarketResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse {
    const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
    return message;
  }
};
function createBaseAtomicMarketOrderFeeMultiplierScheduleProposal(): AtomicMarketOrderFeeMultiplierScheduleProposal {
  return {
    title: "",
    description: "",
    marketFeeMultipliers: []
  };
}
export const AtomicMarketOrderFeeMultiplierScheduleProposal = {
  encode(message: AtomicMarketOrderFeeMultiplierScheduleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.marketFeeMultipliers) {
      MarketFeeMultiplier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AtomicMarketOrderFeeMultiplierScheduleProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      marketFeeMultipliers: Array.isArray(object?.marketFeeMultipliers) ? object.marketFeeMultipliers.map((e: any) => MarketFeeMultiplier.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AtomicMarketOrderFeeMultiplierScheduleProposal>): AtomicMarketOrderFeeMultiplierScheduleProposal {
    const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketFeeMultipliers = object.marketFeeMultipliers?.map(e => MarketFeeMultiplier.fromPartial(e)) || [];
    return message;
  }
};