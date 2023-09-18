import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { SpotOrder, SpotOrderAmino, SpotOrderSDKType, DerivativeOrder, DerivativeOrderAmino, DerivativeOrderSDKType, MarketStatus, PositionDelta, PositionDeltaAmino, PositionDeltaSDKType, DenomDecimals, DenomDecimalsAmino, DenomDecimalsSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, MarketFeeMultiplier, MarketFeeMultiplierAmino, MarketFeeMultiplierSDKType, marketStatusFromJSON } from "./exchange";
import { Params, ParamsAmino, ParamsSDKType, CommunityPoolSpendProposal, CommunityPoolSpendProposalAmino, CommunityPoolSpendProposalSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export enum ExchangeType {
  EXCHANGE_UNSPECIFIED = 0,
  SPOT = 1,
  DERIVATIVES = 2,
  UNRECOGNIZED = -1,
}
export const ExchangeTypeSDKType = ExchangeType;
export const ExchangeTypeAmino = ExchangeType;
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
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the exchange parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.exchange.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
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
  amount: Coin;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/**
 * MsgDeposit defines a SDK message for transferring coins from the sender's
 * bank balance into the subaccount's exchange deposits
 */
export interface MsgDepositAmino {
  sender: string;
  /**
   * (Optional) bytes32 subaccount ID to deposit funds into. If empty, the coin
   * will be deposited to the sender's default subaccount address.
   */
  subaccount_id: string;
  amount?: CoinAmino;
}
export interface MsgDepositAminoMsg {
  type: "/injective.exchange.v1beta1.MsgDeposit";
  value: MsgDepositAmino;
}
/**
 * MsgDeposit defines a SDK message for transferring coins from the sender's
 * bank balance into the subaccount's exchange deposits
 */
export interface MsgDepositSDKType {
  sender: string;
  subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
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
  amount: Coin;
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgWithdraw";
  value: Uint8Array;
}
/**
 * MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 */
export interface MsgWithdrawAmino {
  sender: string;
  /** bytes32 subaccount ID to withdraw funds from */
  subaccount_id: string;
  amount?: CoinAmino;
}
export interface MsgWithdrawAminoMsg {
  type: "/injective.exchange.v1beta1.MsgWithdraw";
  value: MsgWithdrawAmino;
}
/**
 * MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 */
export interface MsgWithdrawSDKType {
  sender: string;
  subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse";
  value: Uint8Array;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 */
export interface MsgCreateSpotLimitOrder {
  sender: string;
  order: SpotOrder;
}
export interface MsgCreateSpotLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder";
  value: Uint8Array;
}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 */
export interface MsgCreateSpotLimitOrderAmino {
  sender: string;
  order?: SpotOrderAmino;
}
export interface MsgCreateSpotLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder";
  value: MsgCreateSpotLimitOrderAmino;
}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 */
export interface MsgCreateSpotLimitOrderSDKType {
  sender: string;
  order: SpotOrderSDKType;
}
/**
 * MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response
 * type.
 */
export interface MsgCreateSpotLimitOrderResponse {
  orderHash: string;
}
export interface MsgCreateSpotLimitOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response
 * type.
 */
export interface MsgCreateSpotLimitOrderResponseAmino {
  order_hash: string;
}
export interface MsgCreateSpotLimitOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse";
  value: MsgCreateSpotLimitOrderResponseAmino;
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
export interface MsgBatchCreateSpotLimitOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders";
  value: Uint8Array;
}
/**
 * MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch
 * of spot limit orders.
 */
export interface MsgBatchCreateSpotLimitOrdersAmino {
  sender: string;
  orders: SpotOrderAmino[];
}
export interface MsgBatchCreateSpotLimitOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders";
  value: MsgBatchCreateSpotLimitOrdersAmino;
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
export interface MsgBatchCreateSpotLimitOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse";
  value: Uint8Array;
}
/**
 * MsgBatchCreateSpotLimitOrdersResponse defines the
 * Msg/BatchCreateSpotLimitOrders response type.
 */
export interface MsgBatchCreateSpotLimitOrdersResponseAmino {
  order_hashes: string[];
}
export interface MsgBatchCreateSpotLimitOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse";
  value: MsgBatchCreateSpotLimitOrdersResponseAmino;
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
export interface MsgInstantSpotMarketLaunchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch";
  value: Uint8Array;
}
/**
 * MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot
 * market by paying listing fee without governance
 */
export interface MsgInstantSpotMarketLaunchAmino {
  sender: string;
  /** Ticker for the spot market. */
  ticker: string;
  /** type of coin to use as the base currency */
  base_denom: string;
  /** type of coin to use as the quote currency */
  quote_denom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
}
export interface MsgInstantSpotMarketLaunchAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch";
  value: MsgInstantSpotMarketLaunchAmino;
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
export interface MsgInstantSpotMarketLaunchResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse";
  value: Uint8Array;
}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 */
export interface MsgInstantSpotMarketLaunchResponseAmino {}
export interface MsgInstantSpotMarketLaunchResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse";
  value: MsgInstantSpotMarketLaunchResponseAmino;
}
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
export interface MsgInstantPerpetualMarketLaunchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch";
  value: Uint8Array;
}
/**
 * MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantPerpetualMarketLaunchAmino {
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the base currency */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
  /**
   * maker_fee_rate defines the trade fee rate for makers on the perpetual
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the trade fee rate for takers on the perpetual
   * market
   */
  taker_fee_rate: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the perpetual
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * perpetual market
   */
  maintenance_margin_ratio: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
}
export interface MsgInstantPerpetualMarketLaunchAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch";
  value: MsgInstantPerpetualMarketLaunchAmino;
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
export interface MsgInstantPerpetualMarketLaunchResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse";
  value: Uint8Array;
}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 */
export interface MsgInstantPerpetualMarketLaunchResponseAmino {}
export interface MsgInstantPerpetualMarketLaunchResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse";
  value: MsgInstantPerpetualMarketLaunchResponseAmino;
}
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
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
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
export interface MsgInstantBinaryOptionsMarketLaunchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch";
  value: Uint8Array;
}
/**
 * MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantBinaryOptionsMarketLaunchAmino {
  sender: string;
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
  /**
   * maker_fee_rate defines the trade fee rate for makers on the perpetual
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the trade fee rate for takers on the perpetual
   * market
   */
  taker_fee_rate: string;
  /** expiration timestamp */
  expiration_timestamp: string;
  /** expiration timestamp */
  settlement_timestamp: string;
  /** admin of the market */
  admin: string;
  /** Address of the quote currency denomination for the binary options contract */
  quote_denom: string;
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
export interface MsgInstantBinaryOptionsMarketLaunchAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch";
  value: MsgInstantBinaryOptionsMarketLaunchAmino;
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
  expiration_timestamp: bigint;
  settlement_timestamp: bigint;
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
export interface MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse";
  value: Uint8Array;
}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 */
export interface MsgInstantBinaryOptionsMarketLaunchResponseAmino {}
export interface MsgInstantBinaryOptionsMarketLaunchResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse";
  value: MsgInstantBinaryOptionsMarketLaunchResponseAmino;
}
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
  expiry: bigint;
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
export interface MsgInstantExpiryFuturesMarketLaunchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch";
  value: Uint8Array;
}
/**
 * MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new
 * expiry futures market by paying listing fee without governance
 */
export interface MsgInstantExpiryFuturesMarketLaunchAmino {
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the quote currency */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Oracle type */
  oracle_type: OracleType;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Expiration time of the market */
  expiry: string;
  /**
   * maker_fee_rate defines the trade fee rate for makers on the expiry futures
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the trade fee rate for takers on the expiry futures
   * market
   */
  taker_fee_rate: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
}
export interface MsgInstantExpiryFuturesMarketLaunchAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch";
  value: MsgInstantExpiryFuturesMarketLaunchAmino;
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
  expiry: bigint;
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
export interface MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse";
  value: Uint8Array;
}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 */
export interface MsgInstantExpiryFuturesMarketLaunchResponseAmino {}
export interface MsgInstantExpiryFuturesMarketLaunchResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse";
  value: MsgInstantExpiryFuturesMarketLaunchResponseAmino;
}
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
  order: SpotOrder;
}
export interface MsgCreateSpotMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder";
  value: Uint8Array;
}
/**
 * MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market
 * order.
 */
export interface MsgCreateSpotMarketOrderAmino {
  sender: string;
  order?: SpotOrderAmino;
}
export interface MsgCreateSpotMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder";
  value: MsgCreateSpotMarketOrderAmino;
}
/**
 * MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market
 * order.
 */
export interface MsgCreateSpotMarketOrderSDKType {
  sender: string;
  order: SpotOrderSDKType;
}
/**
 * MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder
 * response type.
 */
export interface MsgCreateSpotMarketOrderResponse {
  orderHash: string;
  results?: SpotMarketOrderResults;
}
export interface MsgCreateSpotMarketOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder
 * response type.
 */
export interface MsgCreateSpotMarketOrderResponseAmino {
  order_hash: string;
  results?: SpotMarketOrderResultsAmino;
}
export interface MsgCreateSpotMarketOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse";
  value: MsgCreateSpotMarketOrderResponseAmino;
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
export interface SpotMarketOrderResultsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketOrderResults";
  value: Uint8Array;
}
export interface SpotMarketOrderResultsAmino {
  quantity: string;
  price: string;
  fee: string;
}
export interface SpotMarketOrderResultsAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarketOrderResults";
  value: SpotMarketOrderResultsAmino;
}
export interface SpotMarketOrderResultsSDKType {
  quantity: string;
  price: string;
  fee: string;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */
export interface MsgCreateDerivativeLimitOrder {
  sender: string;
  order: DerivativeOrder;
}
export interface MsgCreateDerivativeLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */
export interface MsgCreateDerivativeLimitOrderAmino {
  sender: string;
  order?: DerivativeOrderAmino;
}
export interface MsgCreateDerivativeLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder";
  value: MsgCreateDerivativeLimitOrderAmino;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */
export interface MsgCreateDerivativeLimitOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/**
 * MsgCreateDerivativeLimitOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeLimitOrderResponse {
  orderHash: string;
}
export interface MsgCreateDerivativeLimitOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDerivativeLimitOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeLimitOrderResponseAmino {
  order_hash: string;
}
export interface MsgCreateDerivativeLimitOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse";
  value: MsgCreateDerivativeLimitOrderResponseAmino;
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
  order: DerivativeOrder;
}
export interface MsgCreateBinaryOptionsLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */
export interface MsgCreateBinaryOptionsLimitOrderAmino {
  sender: string;
  order?: DerivativeOrderAmino;
}
export interface MsgCreateBinaryOptionsLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder";
  value: MsgCreateBinaryOptionsLimitOrderAmino;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */
export interface MsgCreateBinaryOptionsLimitOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/**
 * MsgCreateBinaryOptionsLimitOrderResponse defines the
 * Msg/CreateBinaryOptionsLimitOrder response type.
 */
export interface MsgCreateBinaryOptionsLimitOrderResponse {
  orderHash: string;
}
export interface MsgCreateBinaryOptionsLimitOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateBinaryOptionsLimitOrderResponse defines the
 * Msg/CreateBinaryOptionsLimitOrder response type.
 */
export interface MsgCreateBinaryOptionsLimitOrderResponseAmino {
  order_hash: string;
}
export interface MsgCreateBinaryOptionsLimitOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse";
  value: MsgCreateBinaryOptionsLimitOrderResponseAmino;
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
export interface MsgBatchCreateDerivativeLimitOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders */
export interface MsgBatchCreateDerivativeLimitOrdersAmino {
  sender: string;
  orders: DerivativeOrderAmino[];
}
export interface MsgBatchCreateDerivativeLimitOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders";
  value: MsgBatchCreateDerivativeLimitOrdersAmino;
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
export interface MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse";
  value: Uint8Array;
}
/**
 * MsgBatchCreateDerivativeLimitOrdersResponse defines the
 * Msg/BatchCreateDerivativeLimitOrders response type.
 */
export interface MsgBatchCreateDerivativeLimitOrdersResponseAmino {
  order_hashes: string[];
}
export interface MsgBatchCreateDerivativeLimitOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse";
  value: MsgBatchCreateDerivativeLimitOrdersResponseAmino;
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
export interface MsgCancelSpotOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder";
  value: Uint8Array;
}
/** MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderAmino {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
}
export interface MsgCancelSpotOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCancelSpotOrder";
  value: MsgCancelSpotOrderAmino;
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
export interface MsgCancelSpotOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse";
  value: Uint8Array;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseAmino {}
export interface MsgCancelSpotOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse";
  value: MsgCancelSpotOrderResponseAmino;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseSDKType {}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */
export interface MsgBatchCancelSpotOrders {
  sender: string;
  data: OrderData[];
}
export interface MsgBatchCancelSpotOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders";
  value: Uint8Array;
}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */
export interface MsgBatchCancelSpotOrdersAmino {
  sender: string;
  data: OrderDataAmino[];
}
export interface MsgBatchCancelSpotOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders";
  value: MsgBatchCancelSpotOrdersAmino;
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
export interface MsgBatchCancelSpotOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse";
  value: Uint8Array;
}
/**
 * MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders
 * response type.
 */
export interface MsgBatchCancelSpotOrdersResponseAmino {
  success: boolean[];
}
export interface MsgBatchCancelSpotOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse";
  value: MsgBatchCancelSpotOrdersResponseAmino;
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
export interface MsgBatchCancelBinaryOptionsOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders";
  value: Uint8Array;
}
/**
 * MsgBatchCancelBinaryOptionsOrders defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrdersAmino {
  sender: string;
  data: OrderDataAmino[];
}
export interface MsgBatchCancelBinaryOptionsOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders";
  value: MsgBatchCancelBinaryOptionsOrdersAmino;
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
export interface MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse";
  value: Uint8Array;
}
/**
 * BatchCancelBinaryOptionsOrdersResponse defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrdersResponseAmino {
  success: boolean[];
}
export interface MsgBatchCancelBinaryOptionsOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse";
  value: MsgBatchCancelBinaryOptionsOrdersResponseAmino;
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
  spotOrdersToCancel?: OrderData[];
  derivativeOrdersToCancel?: OrderData[];
  spotOrdersToCreate?: SpotOrder[];
  derivativeOrdersToCreate?: DerivativeOrder[];
  binaryOptionsOrdersToCancel?: OrderData[];
  binaryOptionsMarketIdsToCancelAll: string[];
  binaryOptionsOrdersToCreate?: DerivativeOrder[];
}
export interface MsgBatchUpdateOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders";
  value: Uint8Array;
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersAmino {
  sender: string;
  /**
   * subaccount_id only used for the spot_market_ids_to_cancel_all and
   * derivative_market_ids_to_cancel_all.
   */
  subaccount_id: string;
  spot_market_ids_to_cancel_all: string[];
  derivative_market_ids_to_cancel_all: string[];
  spot_orders_to_cancel: OrderDataAmino[];
  derivative_orders_to_cancel: OrderDataAmino[];
  spot_orders_to_create: SpotOrderAmino[];
  derivative_orders_to_create: DerivativeOrderAmino[];
  binary_options_orders_to_cancel: OrderDataAmino[];
  binary_options_market_ids_to_cancel_all: string[];
  binary_options_orders_to_create: DerivativeOrderAmino[];
}
export interface MsgBatchUpdateOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchUpdateOrders";
  value: MsgBatchUpdateOrdersAmino;
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersSDKType {
  sender: string;
  subaccount_id: string;
  spot_market_ids_to_cancel_all: string[];
  derivative_market_ids_to_cancel_all: string[];
  spot_orders_to_cancel?: OrderDataSDKType[];
  derivative_orders_to_cancel?: OrderDataSDKType[];
  spot_orders_to_create?: SpotOrderSDKType[];
  derivative_orders_to_create?: DerivativeOrderSDKType[];
  binary_options_orders_to_cancel?: OrderDataSDKType[];
  binary_options_market_ids_to_cancel_all: string[];
  binary_options_orders_to_create?: DerivativeOrderSDKType[];
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
export interface MsgBatchUpdateOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse";
  value: Uint8Array;
}
/** MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersResponseAmino {
  spot_cancel_success: boolean[];
  derivative_cancel_success: boolean[];
  spot_order_hashes: string[];
  derivative_order_hashes: string[];
  binary_options_cancel_success: boolean[];
  binary_options_order_hashes: string[];
}
export interface MsgBatchUpdateOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse";
  value: MsgBatchUpdateOrdersResponseAmino;
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
  order: DerivativeOrder;
}
export interface MsgCreateDerivativeMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */
export interface MsgCreateDerivativeMarketOrderAmino {
  sender: string;
  order?: DerivativeOrderAmino;
}
export interface MsgCreateDerivativeMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder";
  value: MsgCreateDerivativeMarketOrderAmino;
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */
export interface MsgCreateDerivativeMarketOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/**
 * MsgCreateDerivativeMarketOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeMarketOrderResponse {
  orderHash: string;
  results?: DerivativeMarketOrderResults;
}
export interface MsgCreateDerivativeMarketOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDerivativeMarketOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeMarketOrderResponseAmino {
  order_hash: string;
  results?: DerivativeMarketOrderResultsAmino;
}
export interface MsgCreateDerivativeMarketOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse";
  value: MsgCreateDerivativeMarketOrderResponseAmino;
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
  positionDelta: PositionDelta;
  payout: string;
}
export interface DerivativeMarketOrderResultsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderResults";
  value: Uint8Array;
}
export interface DerivativeMarketOrderResultsAmino {
  quantity: string;
  price: string;
  fee: string;
  position_delta?: PositionDeltaAmino;
  payout: string;
}
export interface DerivativeMarketOrderResultsAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketOrderResults";
  value: DerivativeMarketOrderResultsAmino;
}
export interface DerivativeMarketOrderResultsSDKType {
  quantity: string;
  price: string;
  fee: string;
  position_delta: PositionDeltaSDKType;
  payout: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */
export interface MsgCreateBinaryOptionsMarketOrder {
  sender: string;
  order: DerivativeOrder;
}
export interface MsgCreateBinaryOptionsMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */
export interface MsgCreateBinaryOptionsMarketOrderAmino {
  sender: string;
  order?: DerivativeOrderAmino;
}
export interface MsgCreateBinaryOptionsMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder";
  value: MsgCreateBinaryOptionsMarketOrderAmino;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */
export interface MsgCreateBinaryOptionsMarketOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/**
 * MsgCreateBinaryOptionsMarketOrderResponse defines the
 * Msg/CreateBinaryOptionsMarketOrder response type.
 */
export interface MsgCreateBinaryOptionsMarketOrderResponse {
  orderHash: string;
  results?: DerivativeMarketOrderResults;
}
export interface MsgCreateBinaryOptionsMarketOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateBinaryOptionsMarketOrderResponse defines the
 * Msg/CreateBinaryOptionsMarketOrder response type.
 */
export interface MsgCreateBinaryOptionsMarketOrderResponseAmino {
  order_hash: string;
  results?: DerivativeMarketOrderResultsAmino;
}
export interface MsgCreateBinaryOptionsMarketOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse";
  value: MsgCreateBinaryOptionsMarketOrderResponseAmino;
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
export interface MsgCancelDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder";
  value: Uint8Array;
}
/** MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type. */
export interface MsgCancelDerivativeOrderAmino {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  /** bitwise combination of OrderMask enum values */
  order_mask: number;
}
export interface MsgCancelDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder";
  value: MsgCancelDerivativeOrderAmino;
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
export interface MsgCancelDerivativeOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgCancelDerivativeOrderResponseAmino {}
export interface MsgCancelDerivativeOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse";
  value: MsgCancelDerivativeOrderResponseAmino;
}
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
export interface MsgCancelBinaryOptionsOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder";
  value: Uint8Array;
}
/**
 * MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response
 * type.
 */
export interface MsgCancelBinaryOptionsOrderAmino {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  /** bitwise combination of OrderMask enum values */
  order_mask: number;
}
export interface MsgCancelBinaryOptionsOrderAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder";
  value: MsgCancelBinaryOptionsOrderAmino;
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
export interface MsgCancelBinaryOptionsOrderResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse";
  value: Uint8Array;
}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 */
export interface MsgCancelBinaryOptionsOrderResponseAmino {}
export interface MsgCancelBinaryOptionsOrderResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse";
  value: MsgCancelBinaryOptionsOrderResponseAmino;
}
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
export interface OrderDataProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OrderData";
  value: Uint8Array;
}
export interface OrderDataAmino {
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  /** bitwise combination of OrderMask enum values */
  order_mask: number;
}
export interface OrderDataAminoMsg {
  type: "/injective.exchange.v1beta1.OrderData";
  value: OrderDataAmino;
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
export interface MsgBatchCancelDerivativeOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders";
  value: Uint8Array;
}
/**
 * MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders
 * response type.
 */
export interface MsgBatchCancelDerivativeOrdersAmino {
  sender: string;
  data: OrderDataAmino[];
}
export interface MsgBatchCancelDerivativeOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders";
  value: MsgBatchCancelDerivativeOrdersAmino;
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
export interface MsgBatchCancelDerivativeOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse";
  value: Uint8Array;
}
/**
 * MsgBatchCancelDerivativeOrdersResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgBatchCancelDerivativeOrdersResponseAmino {
  success: boolean[];
}
export interface MsgBatchCancelDerivativeOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse";
  value: MsgBatchCancelDerivativeOrdersResponseAmino;
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
  amount: Coin;
}
export interface MsgSubaccountTransferProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgSubaccountTransfer */
export interface MsgSubaccountTransferAmino {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount?: CoinAmino;
}
export interface MsgSubaccountTransferAminoMsg {
  type: "/injective.exchange.v1beta1.MsgSubaccountTransfer";
  value: MsgSubaccountTransferAmino;
}
/** A Cosmos-SDK MsgSubaccountTransfer */
export interface MsgSubaccountTransferSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount: CoinSDKType;
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponse {}
export interface MsgSubaccountTransferResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse";
  value: Uint8Array;
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponseAmino {}
export interface MsgSubaccountTransferResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse";
  value: MsgSubaccountTransferResponseAmino;
}
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
  amount: Coin;
}
export interface MsgExternalTransferProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgExternalTransfer */
export interface MsgExternalTransferAmino {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount?: CoinAmino;
}
export interface MsgExternalTransferAminoMsg {
  type: "/injective.exchange.v1beta1.MsgExternalTransfer";
  value: MsgExternalTransferAmino;
}
/** A Cosmos-SDK MsgExternalTransfer */
export interface MsgExternalTransferSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponse {}
export interface MsgExternalTransferResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse";
  value: Uint8Array;
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponseAmino {}
export interface MsgExternalTransferResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgExternalTransferResponse";
  value: MsgExternalTransferResponseAmino;
}
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
export interface MsgLiquidatePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgLiquidatePosition */
export interface MsgLiquidatePositionAmino {
  sender: string;
  subaccount_id: string;
  market_id: string;
  /** optional order to provide for liquidation */
  order?: DerivativeOrderAmino;
}
export interface MsgLiquidatePositionAminoMsg {
  type: "/injective.exchange.v1beta1.MsgLiquidatePosition";
  value: MsgLiquidatePositionAmino;
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
export interface MsgLiquidatePositionResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse";
  value: Uint8Array;
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponseAmino {}
export interface MsgLiquidatePositionResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse";
  value: MsgLiquidatePositionResponseAmino;
}
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
export interface MsgIncreasePositionMarginProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgIncreasePositionMargin */
export interface MsgIncreasePositionMarginAmino {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  market_id: string;
  /** amount defines the amount of margin to add to the position */
  amount: string;
}
export interface MsgIncreasePositionMarginAminoMsg {
  type: "/injective.exchange.v1beta1.MsgIncreasePositionMargin";
  value: MsgIncreasePositionMarginAmino;
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
export interface MsgIncreasePositionMarginResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse";
  value: Uint8Array;
}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 */
export interface MsgIncreasePositionMarginResponseAmino {}
export interface MsgIncreasePositionMarginResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse";
  value: MsgIncreasePositionMarginResponseAmino;
}
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
export interface MsgPrivilegedExecuteContractProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract";
  value: Uint8Array;
}
/** MsgPrivilegedExecuteContract defines the Msg/Exec message type */
export interface MsgPrivilegedExecuteContractAmino {
  sender: string;
  /**
   * funds defines the user's bank coins used to fund the execution (e.g.
   * 100inj).
   */
  funds: string;
  /** contract_address defines the contract address to execute */
  contract_address: string;
  /** data defines the call data used when executing the contract */
  data: string;
}
export interface MsgPrivilegedExecuteContractAminoMsg {
  type: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract";
  value: MsgPrivilegedExecuteContractAmino;
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
export interface MsgPrivilegedExecuteContractResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContractResponse";
  value: Uint8Array;
}
/** MsgPrivilegedExecuteContractResponse defines the Msg/Exec response type. */
export interface MsgPrivilegedExecuteContractResponseAmino {
  funds_diff: CoinAmino[];
}
export interface MsgPrivilegedExecuteContractResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContractResponse";
  value: MsgPrivilegedExecuteContractResponseAmino;
}
/** MsgPrivilegedExecuteContractResponse defines the Msg/Exec response type. */
export interface MsgPrivilegedExecuteContractResponseSDKType {
  funds_diff: CoinSDKType[];
}
export interface SpotMarketParamUpdateProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  marketId: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */
  makerFeeRate?: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */
  takerFeeRate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the spot
   * market
   */
  relayerFeeShareRate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize?: string;
  status: MarketStatus;
}
export interface SpotMarketParamUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal";
  value: Uint8Array;
}
export interface SpotMarketParamUpdateProposalAmino {
  title: string;
  description: string;
  market_id: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */
  maker_fee_rate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the spot
   * market
   */
  relayer_fee_share_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  status: MarketStatus;
}
export interface SpotMarketParamUpdateProposalAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal";
  value: SpotMarketParamUpdateProposalAmino;
}
export interface SpotMarketParamUpdateProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  market_id: string;
  maker_fee_rate?: string;
  taker_fee_rate?: string;
  relayer_fee_share_rate?: string;
  min_price_tick_size?: string;
  min_quantity_tick_size?: string;
  status: MarketStatus;
}
export interface ExchangeEnableProposal {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface ExchangeEnableProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal";
  value: Uint8Array;
}
export interface ExchangeEnableProposalAmino {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface ExchangeEnableProposalAminoMsg {
  type: "/injective.exchange.v1beta1.ExchangeEnableProposal";
  value: ExchangeEnableProposalAmino;
}
export interface ExchangeEnableProposalSDKType {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface BatchExchangeModificationProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  spotMarketParamUpdateProposals: SpotMarketParamUpdateProposal[];
  derivativeMarketParamUpdateProposals: DerivativeMarketParamUpdateProposal[];
  spotMarketLaunchProposals: SpotMarketLaunchProposal[];
  perpetualMarketLaunchProposals: PerpetualMarketLaunchProposal[];
  expiryFuturesMarketLaunchProposals: ExpiryFuturesMarketLaunchProposal[];
  tradingRewardCampaignUpdateProposal: TradingRewardCampaignUpdateProposal;
  binaryOptionsMarketLaunchProposals: BinaryOptionsMarketLaunchProposal[];
  binaryOptionsParamUpdateProposals: BinaryOptionsMarketParamUpdateProposal[];
  denomDecimalsUpdateProposal: UpdateDenomDecimalsProposal;
}
export interface BatchExchangeModificationProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal";
  value: Uint8Array;
}
export interface BatchExchangeModificationProposalAmino {
  title: string;
  description: string;
  spot_market_param_update_proposals: SpotMarketParamUpdateProposalAmino[];
  derivative_market_param_update_proposals: DerivativeMarketParamUpdateProposalAmino[];
  spot_market_launch_proposals: SpotMarketLaunchProposalAmino[];
  perpetual_market_launch_proposals: PerpetualMarketLaunchProposalAmino[];
  expiry_futures_market_launch_proposals: ExpiryFuturesMarketLaunchProposalAmino[];
  trading_reward_campaign_update_proposal?: TradingRewardCampaignUpdateProposalAmino;
  binary_options_market_launch_proposals: BinaryOptionsMarketLaunchProposalAmino[];
  binary_options_param_update_proposals: BinaryOptionsMarketParamUpdateProposalAmino[];
  denom_decimals_update_proposal?: UpdateDenomDecimalsProposalAmino;
}
export interface BatchExchangeModificationProposalAminoMsg {
  type: "/injective.exchange.v1beta1.BatchExchangeModificationProposal";
  value: BatchExchangeModificationProposalAmino;
}
export interface BatchExchangeModificationProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  spot_market_param_update_proposals: SpotMarketParamUpdateProposalSDKType[];
  derivative_market_param_update_proposals: DerivativeMarketParamUpdateProposalSDKType[];
  spot_market_launch_proposals: SpotMarketLaunchProposalSDKType[];
  perpetual_market_launch_proposals: PerpetualMarketLaunchProposalSDKType[];
  expiry_futures_market_launch_proposals: ExpiryFuturesMarketLaunchProposalSDKType[];
  trading_reward_campaign_update_proposal: TradingRewardCampaignUpdateProposalSDKType;
  binary_options_market_launch_proposals: BinaryOptionsMarketLaunchProposalSDKType[];
  binary_options_param_update_proposals: BinaryOptionsMarketParamUpdateProposalSDKType[];
  denom_decimals_update_proposal: UpdateDenomDecimalsProposalSDKType;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposal {
  $typeUrl?: string;
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
  makerFeeRate?: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  takerFeeRate?: string;
}
export interface SpotMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal";
  value: Uint8Array;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the spot market. */
  ticker: string;
  /** type of coin to use as the base currency */
  base_denom: string;
  /** type of coin to use as the quote currency */
  quote_denom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */
  maker_fee_rate: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  taker_fee_rate: string;
}
export interface SpotMarketLaunchProposalAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarketLaunchProposal";
  value: SpotMarketLaunchProposalAmino;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  ticker: string;
  base_denom: string;
  quote_denom: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
  maker_fee_rate?: string;
  taker_fee_rate?: string;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposal {
  $typeUrl?: string;
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
export interface PerpetualMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal";
  value: Uint8Array;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the base currency */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
}
export interface PerpetualMarketLaunchProposalAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal";
  value: PerpetualMarketLaunchProposalAmino;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposalSDKType {
  $typeUrl?: string;
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
  $typeUrl?: string;
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
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
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
export interface BinaryOptionsMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal";
  value: Uint8Array;
}
export interface BinaryOptionsMarketLaunchProposalAmino {
  title: string;
  description: string;
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
  /** maker_fee_rate defines the maker fee rate of a binary options market */
  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  taker_fee_rate: string;
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
export interface BinaryOptionsMarketLaunchProposalAminoMsg {
  type: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal";
  value: BinaryOptionsMarketLaunchProposalAmino;
}
export interface BinaryOptionsMarketLaunchProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  ticker: string;
  oracle_symbol: string;
  oracle_provider: string;
  oracle_type: OracleType;
  oracle_scale_factor: number;
  expiration_timestamp: bigint;
  settlement_timestamp: bigint;
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
  $typeUrl?: string;
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
  expiry: bigint;
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
export interface ExpiryFuturesMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal";
  value: Uint8Array;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the quote currency */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
  /** Expiration time of the market */
  expiry: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
}
export interface ExpiryFuturesMarketLaunchProposalAminoMsg {
  type: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal";
  value: ExpiryFuturesMarketLaunchProposalAmino;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
  expiry: bigint;
  initial_margin_ratio: string;
  maintenance_margin_ratio: string;
  maker_fee_rate: string;
  taker_fee_rate: string;
  min_price_tick_size: string;
  min_quantity_tick_size: string;
}
export interface DerivativeMarketParamUpdateProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  marketId: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio?: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio?: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate?: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayerFeeShareRate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize?: string;
  /** hourly_interest_rate defines the hourly interest rate */
  HourlyInterestRate?: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  HourlyFundingRateCap?: string;
  status: MarketStatus;
  oracleParams: OracleParams;
}
export interface DerivativeMarketParamUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal";
  value: Uint8Array;
}
export interface DerivativeMarketParamUpdateProposalAmino {
  title: string;
  description: string;
  market_id: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayer_fee_share_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  /** hourly_interest_rate defines the hourly interest rate */
  HourlyInterestRate: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  HourlyFundingRateCap: string;
  status: MarketStatus;
  oracle_params?: OracleParamsAmino;
}
export interface DerivativeMarketParamUpdateProposalAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal";
  value: DerivativeMarketParamUpdateProposalAmino;
}
export interface DerivativeMarketParamUpdateProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  market_id: string;
  initial_margin_ratio?: string;
  maintenance_margin_ratio?: string;
  maker_fee_rate?: string;
  taker_fee_rate?: string;
  relayer_fee_share_rate?: string;
  min_price_tick_size?: string;
  min_quantity_tick_size?: string;
  HourlyInterestRate?: string;
  HourlyFundingRateCap?: string;
  status: MarketStatus;
  oracle_params: OracleParamsSDKType;
}
export interface MarketForcedSettlementProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  marketId: string;
  settlementPrice?: string;
}
export interface MarketForcedSettlementProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal";
  value: Uint8Array;
}
export interface MarketForcedSettlementProposalAmino {
  title: string;
  description: string;
  market_id: string;
  settlement_price: string;
}
export interface MarketForcedSettlementProposalAminoMsg {
  type: "/injective.exchange.v1beta1.MarketForcedSettlementProposal";
  value: MarketForcedSettlementProposalAmino;
}
export interface MarketForcedSettlementProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  market_id: string;
  settlement_price?: string;
}
export interface UpdateDenomDecimalsProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  denomDecimals: DenomDecimals[];
}
export interface UpdateDenomDecimalsProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal";
  value: Uint8Array;
}
export interface UpdateDenomDecimalsProposalAmino {
  title: string;
  description: string;
  denom_decimals: DenomDecimalsAmino[];
}
export interface UpdateDenomDecimalsProposalAminoMsg {
  type: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal";
  value: UpdateDenomDecimalsProposalAmino;
}
export interface UpdateDenomDecimalsProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  denom_decimals: DenomDecimalsSDKType[];
}
export interface BinaryOptionsMarketParamUpdateProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  marketId: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate?: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayerFeeShareRate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize?: string;
  /** expiration timestamp */
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
  /** new price at which market will be settled */
  settlementPrice?: string;
  /** admin of the market */
  admin: string;
  status: MarketStatus;
  oracleParams: ProviderOracleParams;
}
export interface BinaryOptionsMarketParamUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal";
  value: Uint8Array;
}
export interface BinaryOptionsMarketParamUpdateProposalAmino {
  title: string;
  description: string;
  market_id: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayer_fee_share_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  /** expiration timestamp */
  expiration_timestamp: string;
  /** expiration timestamp */
  settlement_timestamp: string;
  /** new price at which market will be settled */
  settlement_price: string;
  /** admin of the market */
  admin: string;
  status: MarketStatus;
  oracle_params?: ProviderOracleParamsAmino;
}
export interface BinaryOptionsMarketParamUpdateProposalAminoMsg {
  type: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal";
  value: BinaryOptionsMarketParamUpdateProposalAmino;
}
export interface BinaryOptionsMarketParamUpdateProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  market_id: string;
  maker_fee_rate?: string;
  taker_fee_rate?: string;
  relayer_fee_share_rate?: string;
  min_price_tick_size?: string;
  min_quantity_tick_size?: string;
  expiration_timestamp: bigint;
  settlement_timestamp: bigint;
  settlement_price?: string;
  admin: string;
  status: MarketStatus;
  oracle_params: ProviderOracleParamsSDKType;
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
export interface ProviderOracleParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams";
  value: Uint8Array;
}
export interface ProviderOracleParamsAmino {
  /** Oracle base currency */
  symbol: string;
  /** Oracle quote currency */
  provider: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
}
export interface ProviderOracleParamsAminoMsg {
  type: "/injective.exchange.v1beta1.ProviderOracleParams";
  value: ProviderOracleParamsAmino;
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
export interface OracleParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OracleParams";
  value: Uint8Array;
}
export interface OracleParamsAmino {
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
}
export interface OracleParamsAminoMsg {
  type: "/injective.exchange.v1beta1.OracleParams";
  value: OracleParamsAmino;
}
export interface OracleParamsSDKType {
  oracle_base: string;
  oracle_quote: string;
  oracle_scale_factor: number;
  oracle_type: OracleType;
}
export interface TradingRewardCampaignLaunchProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  campaignInfo: TradingRewardCampaignInfo;
  campaignRewardPools: CampaignRewardPool[];
}
export interface TradingRewardCampaignLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal";
  value: Uint8Array;
}
export interface TradingRewardCampaignLaunchProposalAmino {
  title: string;
  description: string;
  campaign_info?: TradingRewardCampaignInfoAmino;
  campaign_reward_pools: CampaignRewardPoolAmino[];
}
export interface TradingRewardCampaignLaunchProposalAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal";
  value: TradingRewardCampaignLaunchProposalAmino;
}
export interface TradingRewardCampaignLaunchProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  campaign_info: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface TradingRewardCampaignUpdateProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  campaignInfo: TradingRewardCampaignInfo;
  campaignRewardPoolsAdditions: CampaignRewardPool[];
  campaignRewardPoolsUpdates: CampaignRewardPool[];
}
export interface TradingRewardCampaignUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal";
  value: Uint8Array;
}
export interface TradingRewardCampaignUpdateProposalAmino {
  title: string;
  description: string;
  campaign_info?: TradingRewardCampaignInfoAmino;
  campaign_reward_pools_additions: CampaignRewardPoolAmino[];
  campaign_reward_pools_updates: CampaignRewardPoolAmino[];
}
export interface TradingRewardCampaignUpdateProposalAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal";
  value: TradingRewardCampaignUpdateProposalAmino;
}
export interface TradingRewardCampaignUpdateProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  campaign_info: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools_additions: CampaignRewardPoolSDKType[];
  campaign_reward_pools_updates: CampaignRewardPoolSDKType[];
}
export interface RewardPointUpdate {
  accountAddress: string;
  /** new_points overwrites the current trading reward points for the account */
  newPoints: string;
}
export interface RewardPointUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate";
  value: Uint8Array;
}
export interface RewardPointUpdateAmino {
  account_address: string;
  /** new_points overwrites the current trading reward points for the account */
  new_points: string;
}
export interface RewardPointUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.RewardPointUpdate";
  value: RewardPointUpdateAmino;
}
export interface RewardPointUpdateSDKType {
  account_address: string;
  new_points: string;
}
export interface TradingRewardPendingPointsUpdateProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  pendingPoolTimestamp: bigint;
  rewardPointUpdates: RewardPointUpdate[];
}
export interface TradingRewardPendingPointsUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal";
  value: Uint8Array;
}
export interface TradingRewardPendingPointsUpdateProposalAmino {
  title: string;
  description: string;
  pending_pool_timestamp: string;
  reward_point_updates: RewardPointUpdateAmino[];
}
export interface TradingRewardPendingPointsUpdateProposalAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal";
  value: TradingRewardPendingPointsUpdateProposalAmino;
}
export interface TradingRewardPendingPointsUpdateProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  pending_pool_timestamp: bigint;
  reward_point_updates: RewardPointUpdateSDKType[];
}
export interface FeeDiscountProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  schedule: FeeDiscountSchedule;
}
export interface FeeDiscountProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal";
  value: Uint8Array;
}
export interface FeeDiscountProposalAmino {
  title: string;
  description: string;
  schedule?: FeeDiscountScheduleAmino;
}
export interface FeeDiscountProposalAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountProposal";
  value: FeeDiscountProposalAmino;
}
export interface FeeDiscountProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  schedule: FeeDiscountScheduleSDKType;
}
export interface BatchCommunityPoolSpendProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposal[];
}
export interface BatchCommunityPoolSpendProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal";
  value: Uint8Array;
}
export interface BatchCommunityPoolSpendProposalAmino {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposalAmino[];
}
export interface BatchCommunityPoolSpendProposalAminoMsg {
  type: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal";
  value: BatchCommunityPoolSpendProposalAmino;
}
export interface BatchCommunityPoolSpendProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposalSDKType[];
}
/** A Cosmos-SDK MsgRewardsOptOut */
export interface MsgRewardsOptOut {
  /** A Cosmos-SDK MsgRewardsOptOut */
  sender: string;
}
export interface MsgRewardsOptOutProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgRewardsOptOut */
export interface MsgRewardsOptOutAmino {
  /** A Cosmos-SDK MsgRewardsOptOut */
  sender: string;
}
export interface MsgRewardsOptOutAminoMsg {
  type: "/injective.exchange.v1beta1.MsgRewardsOptOut";
  value: MsgRewardsOptOutAmino;
}
/** A Cosmos-SDK MsgRewardsOptOut */
export interface MsgRewardsOptOutSDKType {
  sender: string;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponse {}
export interface MsgRewardsOptOutResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse";
  value: Uint8Array;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponseAmino {}
export interface MsgRewardsOptOutResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse";
  value: MsgRewardsOptOutResponseAmino;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponseSDKType {}
/** A Cosmos-SDK MsgReclaimLockedFunds */
export interface MsgReclaimLockedFunds {
  sender: string;
  lockedAccountPubKey: Uint8Array;
  signature: Uint8Array;
}
export interface MsgReclaimLockedFundsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFunds";
  value: Uint8Array;
}
/** A Cosmos-SDK MsgReclaimLockedFunds */
export interface MsgReclaimLockedFundsAmino {
  sender: string;
  lockedAccountPubKey: Uint8Array;
  signature: Uint8Array;
}
export interface MsgReclaimLockedFundsAminoMsg {
  type: "/injective.exchange.v1beta1.MsgReclaimLockedFunds";
  value: MsgReclaimLockedFundsAmino;
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
export interface MsgReclaimLockedFundsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFundsResponse";
  value: Uint8Array;
}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 */
export interface MsgReclaimLockedFundsResponseAmino {}
export interface MsgReclaimLockedFundsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgReclaimLockedFundsResponse";
  value: MsgReclaimLockedFundsResponseAmino;
}
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
export interface MsgSignDataProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgSignData";
  value: Uint8Array;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataAmino {
  /** Signer is the sdk.AccAddress of the message signer */
  Signer: Uint8Array;
  /**
   * Data represents the raw bytes of the content that is signed (text, json,
   * etc)
   */
  Data: Uint8Array;
}
export interface MsgSignDataAminoMsg {
  type: "/injective.exchange.v1beta1.MsgSignData";
  value: MsgSignDataAmino;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataSDKType {
  Signer: Uint8Array;
  Data: Uint8Array;
}
/** MsgSignDoc defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDoc {
  signType: string;
  value: MsgSignData;
}
export interface MsgSignDocProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgSignDoc";
  value: Uint8Array;
}
/** MsgSignDoc defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDocAmino {
  sign_type: string;
  value?: MsgSignDataAmino;
}
export interface MsgSignDocAminoMsg {
  type: "/injective.exchange.v1beta1.MsgSignDoc";
  value: MsgSignDocAmino;
}
/** MsgSignDoc defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDocSDKType {
  sign_type: string;
  value: MsgSignDataSDKType;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 */
export interface MsgAdminUpdateBinaryOptionsMarket {
  sender: string;
  marketId: string;
  /** new price at which market will be settled */
  settlementPrice?: string;
  /** expiration timestamp */
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
  /** Status of the market */
  status: MarketStatus;
}
export interface MsgAdminUpdateBinaryOptionsMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket";
  value: Uint8Array;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 */
export interface MsgAdminUpdateBinaryOptionsMarketAmino {
  sender: string;
  market_id: string;
  /** new price at which market will be settled */
  settlement_price: string;
  /** expiration timestamp */
  expiration_timestamp: string;
  /** expiration timestamp */
  settlement_timestamp: string;
  /** Status of the market */
  status: MarketStatus;
}
export interface MsgAdminUpdateBinaryOptionsMarketAminoMsg {
  type: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket";
  value: MsgAdminUpdateBinaryOptionsMarketAmino;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 */
export interface MsgAdminUpdateBinaryOptionsMarketSDKType {
  sender: string;
  market_id: string;
  settlement_price?: string;
  expiration_timestamp: bigint;
  settlement_timestamp: bigint;
  status: MarketStatus;
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponse {}
export interface MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse";
  value: Uint8Array;
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponseAmino {}
export interface MsgAdminUpdateBinaryOptionsMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse";
  value: MsgAdminUpdateBinaryOptionsMarketResponseAmino;
}
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
  $typeUrl?: string;
  title: string;
  description: string;
  marketFeeMultipliers: MarketFeeMultiplier[];
}
export interface AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal";
  value: Uint8Array;
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposalAmino {
  title: string;
  description: string;
  market_fee_multipliers: MarketFeeMultiplierAmino[];
}
export interface AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg {
  type: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal";
  value: AtomicMarketOrderFeeMultiplierScheduleProposalAmino;
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  market_fee_multipliers: MarketFeeMultiplierSDKType[];
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.exchange.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    sender: "",
    subaccountId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDeposit = {
  typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    return {
      sender: object.sender,
      subaccountId: object.subaccount_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.subaccount_id = message.subaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    return {};
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    sender: "",
    subaccountId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgWithdraw = {
  typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    return {
      sender: object.sender,
      subaccountId: object.subaccount_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.subaccount_id = message.subaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    return {};
  },
  toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSpotLimitOrder(): MsgCreateSpotLimitOrder {
  return {
    sender: "",
    order: SpotOrder.fromPartial({})
  };
}
export const MsgCreateSpotLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
  encode(message: MsgCreateSpotLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateSpotLimitOrderAmino): MsgCreateSpotLimitOrder {
    return {
      sender: object.sender,
      order: object?.order ? SpotOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgCreateSpotLimitOrder): MsgCreateSpotLimitOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.order = message.order ? SpotOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSpotLimitOrderAminoMsg): MsgCreateSpotLimitOrder {
    return MsgCreateSpotLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSpotLimitOrderProtoMsg): MsgCreateSpotLimitOrder {
    return MsgCreateSpotLimitOrder.decode(message.value);
  },
  toProto(message: MsgCreateSpotLimitOrder): Uint8Array {
    return MsgCreateSpotLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSpotLimitOrder): MsgCreateSpotLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
      value: MsgCreateSpotLimitOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSpotLimitOrderResponse(): MsgCreateSpotLimitOrderResponse {
  return {
    orderHash: ""
  };
}
export const MsgCreateSpotLimitOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse",
  encode(message: MsgCreateSpotLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateSpotLimitOrderResponseAmino): MsgCreateSpotLimitOrderResponse {
    return {
      orderHash: object.order_hash
    };
  },
  toAmino(message: MsgCreateSpotLimitOrderResponse): MsgCreateSpotLimitOrderResponseAmino {
    const obj: any = {};
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSpotLimitOrderResponseAminoMsg): MsgCreateSpotLimitOrderResponse {
    return MsgCreateSpotLimitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSpotLimitOrderResponseProtoMsg): MsgCreateSpotLimitOrderResponse {
    return MsgCreateSpotLimitOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateSpotLimitOrderResponse): Uint8Array {
    return MsgCreateSpotLimitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSpotLimitOrderResponse): MsgCreateSpotLimitOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse",
      value: MsgCreateSpotLimitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCreateSpotLimitOrders(): MsgBatchCreateSpotLimitOrders {
  return {
    sender: "",
    orders: []
  };
}
export const MsgBatchCreateSpotLimitOrders = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
  encode(message: MsgBatchCreateSpotLimitOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCreateSpotLimitOrdersAmino): MsgBatchCreateSpotLimitOrders {
    return {
      sender: object.sender,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => SpotOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBatchCreateSpotLimitOrders): MsgBatchCreateSpotLimitOrdersAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? SpotOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCreateSpotLimitOrdersAminoMsg): MsgBatchCreateSpotLimitOrders {
    return MsgBatchCreateSpotLimitOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCreateSpotLimitOrdersProtoMsg): MsgBatchCreateSpotLimitOrders {
    return MsgBatchCreateSpotLimitOrders.decode(message.value);
  },
  toProto(message: MsgBatchCreateSpotLimitOrders): Uint8Array {
    return MsgBatchCreateSpotLimitOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCreateSpotLimitOrders): MsgBatchCreateSpotLimitOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
      value: MsgBatchCreateSpotLimitOrders.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCreateSpotLimitOrdersResponse(): MsgBatchCreateSpotLimitOrdersResponse {
  return {
    orderHashes: []
  };
}
export const MsgBatchCreateSpotLimitOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse",
  encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCreateSpotLimitOrdersResponseAmino): MsgBatchCreateSpotLimitOrdersResponse {
    return {
      orderHashes: Array.isArray(object?.order_hashes) ? object.order_hashes.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgBatchCreateSpotLimitOrdersResponse): MsgBatchCreateSpotLimitOrdersResponseAmino {
    const obj: any = {};
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCreateSpotLimitOrdersResponseAminoMsg): MsgBatchCreateSpotLimitOrdersResponse {
    return MsgBatchCreateSpotLimitOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCreateSpotLimitOrdersResponseProtoMsg): MsgBatchCreateSpotLimitOrdersResponse {
    return MsgBatchCreateSpotLimitOrdersResponse.decode(message.value);
  },
  toProto(message: MsgBatchCreateSpotLimitOrdersResponse): Uint8Array {
    return MsgBatchCreateSpotLimitOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCreateSpotLimitOrdersResponse): MsgBatchCreateSpotLimitOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse",
      value: MsgBatchCreateSpotLimitOrdersResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
  encode(message: MsgInstantSpotMarketLaunch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(42).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
  },
  fromAmino(object: MsgInstantSpotMarketLaunchAmino): MsgInstantSpotMarketLaunch {
    return {
      sender: object.sender,
      ticker: object.ticker,
      baseDenom: object.base_denom,
      quoteDenom: object.quote_denom,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: MsgInstantSpotMarketLaunch): MsgInstantSpotMarketLaunchAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.base_denom = message.baseDenom;
    obj.quote_denom = message.quoteDenom;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: MsgInstantSpotMarketLaunchAminoMsg): MsgInstantSpotMarketLaunch {
    return MsgInstantSpotMarketLaunch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantSpotMarketLaunchProtoMsg): MsgInstantSpotMarketLaunch {
    return MsgInstantSpotMarketLaunch.decode(message.value);
  },
  toProto(message: MsgInstantSpotMarketLaunch): Uint8Array {
    return MsgInstantSpotMarketLaunch.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantSpotMarketLaunch): MsgInstantSpotMarketLaunchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
      value: MsgInstantSpotMarketLaunch.encode(message).finish()
    };
  }
};
function createBaseMsgInstantSpotMarketLaunchResponse(): MsgInstantSpotMarketLaunchResponse {
  return {};
}
export const MsgInstantSpotMarketLaunchResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse",
  encode(_: MsgInstantSpotMarketLaunchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInstantSpotMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse {
    const message = createBaseMsgInstantSpotMarketLaunchResponse();
    return message;
  },
  fromAmino(_: MsgInstantSpotMarketLaunchResponseAmino): MsgInstantSpotMarketLaunchResponse {
    return {};
  },
  toAmino(_: MsgInstantSpotMarketLaunchResponse): MsgInstantSpotMarketLaunchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInstantSpotMarketLaunchResponseAminoMsg): MsgInstantSpotMarketLaunchResponse {
    return MsgInstantSpotMarketLaunchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantSpotMarketLaunchResponseProtoMsg): MsgInstantSpotMarketLaunchResponse {
    return MsgInstantSpotMarketLaunchResponse.decode(message.value);
  },
  toProto(message: MsgInstantSpotMarketLaunchResponse): Uint8Array {
    return MsgInstantSpotMarketLaunchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantSpotMarketLaunchResponse): MsgInstantSpotMarketLaunchResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse",
      value: MsgInstantSpotMarketLaunchResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
  encode(message: MsgInstantPerpetualMarketLaunch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(66).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
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
  },
  fromAmino(object: MsgInstantPerpetualMarketLaunchAmino): MsgInstantPerpetualMarketLaunch {
    return {
      sender: object.sender,
      ticker: object.ticker,
      quoteDenom: object.quote_denom,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleScaleFactor: object.oracle_scale_factor,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      initialMarginRatio: object.initial_margin_ratio,
      maintenanceMarginRatio: object.maintenance_margin_ratio,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: MsgInstantPerpetualMarketLaunch): MsgInstantPerpetualMarketLaunchAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.oracle_type = message.oracleType;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.initial_margin_ratio = message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: MsgInstantPerpetualMarketLaunchAminoMsg): MsgInstantPerpetualMarketLaunch {
    return MsgInstantPerpetualMarketLaunch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantPerpetualMarketLaunchProtoMsg): MsgInstantPerpetualMarketLaunch {
    return MsgInstantPerpetualMarketLaunch.decode(message.value);
  },
  toProto(message: MsgInstantPerpetualMarketLaunch): Uint8Array {
    return MsgInstantPerpetualMarketLaunch.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantPerpetualMarketLaunch): MsgInstantPerpetualMarketLaunchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
      value: MsgInstantPerpetualMarketLaunch.encode(message).finish()
    };
  }
};
function createBaseMsgInstantPerpetualMarketLaunchResponse(): MsgInstantPerpetualMarketLaunchResponse {
  return {};
}
export const MsgInstantPerpetualMarketLaunchResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse",
  encode(_: MsgInstantPerpetualMarketLaunchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInstantPerpetualMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse {
    const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
    return message;
  },
  fromAmino(_: MsgInstantPerpetualMarketLaunchResponseAmino): MsgInstantPerpetualMarketLaunchResponse {
    return {};
  },
  toAmino(_: MsgInstantPerpetualMarketLaunchResponse): MsgInstantPerpetualMarketLaunchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInstantPerpetualMarketLaunchResponseAminoMsg): MsgInstantPerpetualMarketLaunchResponse {
    return MsgInstantPerpetualMarketLaunchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantPerpetualMarketLaunchResponseProtoMsg): MsgInstantPerpetualMarketLaunchResponse {
    return MsgInstantPerpetualMarketLaunchResponse.decode(message.value);
  },
  toProto(message: MsgInstantPerpetualMarketLaunchResponse): Uint8Array {
    return MsgInstantPerpetualMarketLaunchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantPerpetualMarketLaunchResponse): MsgInstantPerpetualMarketLaunchResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse",
      value: MsgInstantPerpetualMarketLaunchResponse.encode(message).finish()
    };
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
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    admin: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const MsgInstantBinaryOptionsMarketLaunch = {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
  encode(message: MsgInstantBinaryOptionsMarketLaunch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(58).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(90).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(98).string(message.quoteDenom);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantBinaryOptionsMarketLaunch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
      oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
      takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
      expirationTimestamp: isSet(object.expirationTimestamp) ? BigInt(object.expirationTimestamp.toString()) : BigInt(0),
      settlementTimestamp: isSet(object.settlementTimestamp) ? BigInt(object.settlementTimestamp.toString()) : BigInt(0),
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
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  },
  fromAmino(object: MsgInstantBinaryOptionsMarketLaunchAmino): MsgInstantBinaryOptionsMarketLaunch {
    return {
      sender: object.sender,
      ticker: object.ticker,
      oracleSymbol: object.oracle_symbol,
      oracleProvider: object.oracle_provider,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      oracleScaleFactor: object.oracle_scale_factor,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      expirationTimestamp: BigInt(object.expiration_timestamp),
      settlementTimestamp: BigInt(object.settlement_timestamp),
      admin: object.admin,
      quoteDenom: object.quote_denom,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: MsgInstantBinaryOptionsMarketLaunch): MsgInstantBinaryOptionsMarketLaunchAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.oracle_symbol = message.oracleSymbol;
    obj.oracle_provider = message.oracleProvider;
    obj.oracle_type = message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.expiration_timestamp = message.expirationTimestamp ? message.expirationTimestamp.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp ? message.settlementTimestamp.toString() : undefined;
    obj.admin = message.admin;
    obj.quote_denom = message.quoteDenom;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: MsgInstantBinaryOptionsMarketLaunchAminoMsg): MsgInstantBinaryOptionsMarketLaunch {
    return MsgInstantBinaryOptionsMarketLaunch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantBinaryOptionsMarketLaunchProtoMsg): MsgInstantBinaryOptionsMarketLaunch {
    return MsgInstantBinaryOptionsMarketLaunch.decode(message.value);
  },
  toProto(message: MsgInstantBinaryOptionsMarketLaunch): Uint8Array {
    return MsgInstantBinaryOptionsMarketLaunch.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantBinaryOptionsMarketLaunch): MsgInstantBinaryOptionsMarketLaunchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
      value: MsgInstantBinaryOptionsMarketLaunch.encode(message).finish()
    };
  }
};
function createBaseMsgInstantBinaryOptionsMarketLaunchResponse(): MsgInstantBinaryOptionsMarketLaunchResponse {
  return {};
}
export const MsgInstantBinaryOptionsMarketLaunchResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse",
  encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInstantBinaryOptionsMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse {
    const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
    return message;
  },
  fromAmino(_: MsgInstantBinaryOptionsMarketLaunchResponseAmino): MsgInstantBinaryOptionsMarketLaunchResponse {
    return {};
  },
  toAmino(_: MsgInstantBinaryOptionsMarketLaunchResponse): MsgInstantBinaryOptionsMarketLaunchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInstantBinaryOptionsMarketLaunchResponseAminoMsg): MsgInstantBinaryOptionsMarketLaunchResponse {
    return MsgInstantBinaryOptionsMarketLaunchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg): MsgInstantBinaryOptionsMarketLaunchResponse {
    return MsgInstantBinaryOptionsMarketLaunchResponse.decode(message.value);
  },
  toProto(message: MsgInstantBinaryOptionsMarketLaunchResponse): Uint8Array {
    return MsgInstantBinaryOptionsMarketLaunchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantBinaryOptionsMarketLaunchResponse): MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse",
      value: MsgInstantBinaryOptionsMarketLaunchResponse.encode(message).finish()
    };
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
    expiry: BigInt(0),
    makerFeeRate: "",
    takerFeeRate: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const MsgInstantExpiryFuturesMarketLaunch = {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
  encode(message: MsgInstantExpiryFuturesMarketLaunch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.expiry !== BigInt(0)) {
      writer.uint32(64).int64(message.expiry);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0),
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
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  },
  fromAmino(object: MsgInstantExpiryFuturesMarketLaunchAmino): MsgInstantExpiryFuturesMarketLaunch {
    return {
      sender: object.sender,
      ticker: object.ticker,
      quoteDenom: object.quote_denom,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      oracleScaleFactor: object.oracle_scale_factor,
      expiry: BigInt(object.expiry),
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      initialMarginRatio: object.initial_margin_ratio,
      maintenanceMarginRatio: object.maintenance_margin_ratio,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: MsgInstantExpiryFuturesMarketLaunch): MsgInstantExpiryFuturesMarketLaunchAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_type = message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.expiry = message.expiry ? message.expiry.toString() : undefined;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.initial_margin_ratio = message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: MsgInstantExpiryFuturesMarketLaunchAminoMsg): MsgInstantExpiryFuturesMarketLaunch {
    return MsgInstantExpiryFuturesMarketLaunch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantExpiryFuturesMarketLaunchProtoMsg): MsgInstantExpiryFuturesMarketLaunch {
    return MsgInstantExpiryFuturesMarketLaunch.decode(message.value);
  },
  toProto(message: MsgInstantExpiryFuturesMarketLaunch): Uint8Array {
    return MsgInstantExpiryFuturesMarketLaunch.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantExpiryFuturesMarketLaunch): MsgInstantExpiryFuturesMarketLaunchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
      value: MsgInstantExpiryFuturesMarketLaunch.encode(message).finish()
    };
  }
};
function createBaseMsgInstantExpiryFuturesMarketLaunchResponse(): MsgInstantExpiryFuturesMarketLaunchResponse {
  return {};
}
export const MsgInstantExpiryFuturesMarketLaunchResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse",
  encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInstantExpiryFuturesMarketLaunchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse {
    const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
    return message;
  },
  fromAmino(_: MsgInstantExpiryFuturesMarketLaunchResponseAmino): MsgInstantExpiryFuturesMarketLaunchResponse {
    return {};
  },
  toAmino(_: MsgInstantExpiryFuturesMarketLaunchResponse): MsgInstantExpiryFuturesMarketLaunchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInstantExpiryFuturesMarketLaunchResponseAminoMsg): MsgInstantExpiryFuturesMarketLaunchResponse {
    return MsgInstantExpiryFuturesMarketLaunchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg): MsgInstantExpiryFuturesMarketLaunchResponse {
    return MsgInstantExpiryFuturesMarketLaunchResponse.decode(message.value);
  },
  toProto(message: MsgInstantExpiryFuturesMarketLaunchResponse): Uint8Array {
    return MsgInstantExpiryFuturesMarketLaunchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantExpiryFuturesMarketLaunchResponse): MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse",
      value: MsgInstantExpiryFuturesMarketLaunchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSpotMarketOrder(): MsgCreateSpotMarketOrder {
  return {
    sender: "",
    order: SpotOrder.fromPartial({})
  };
}
export const MsgCreateSpotMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
  encode(message: MsgCreateSpotMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateSpotMarketOrderAmino): MsgCreateSpotMarketOrder {
    return {
      sender: object.sender,
      order: object?.order ? SpotOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgCreateSpotMarketOrder): MsgCreateSpotMarketOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.order = message.order ? SpotOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSpotMarketOrderAminoMsg): MsgCreateSpotMarketOrder {
    return MsgCreateSpotMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSpotMarketOrderProtoMsg): MsgCreateSpotMarketOrder {
    return MsgCreateSpotMarketOrder.decode(message.value);
  },
  toProto(message: MsgCreateSpotMarketOrder): Uint8Array {
    return MsgCreateSpotMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSpotMarketOrder): MsgCreateSpotMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
      value: MsgCreateSpotMarketOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSpotMarketOrderResponse(): MsgCreateSpotMarketOrderResponse {
  return {
    orderHash: "",
    results: undefined
  };
}
export const MsgCreateSpotMarketOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse",
  encode(message: MsgCreateSpotMarketOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateSpotMarketOrderResponseAmino): MsgCreateSpotMarketOrderResponse {
    return {
      orderHash: object.order_hash,
      results: object?.results ? SpotMarketOrderResults.fromAmino(object.results) : undefined
    };
  },
  toAmino(message: MsgCreateSpotMarketOrderResponse): MsgCreateSpotMarketOrderResponseAmino {
    const obj: any = {};
    obj.order_hash = message.orderHash;
    obj.results = message.results ? SpotMarketOrderResults.toAmino(message.results) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSpotMarketOrderResponseAminoMsg): MsgCreateSpotMarketOrderResponse {
    return MsgCreateSpotMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSpotMarketOrderResponseProtoMsg): MsgCreateSpotMarketOrderResponse {
    return MsgCreateSpotMarketOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateSpotMarketOrderResponse): Uint8Array {
    return MsgCreateSpotMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSpotMarketOrderResponse): MsgCreateSpotMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse",
      value: MsgCreateSpotMarketOrderResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.SpotMarketOrderResults",
  encode(message: SpotMarketOrderResults, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fee, 18).atomics);
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
  },
  fromAmino(object: SpotMarketOrderResultsAmino): SpotMarketOrderResults {
    return {
      quantity: object.quantity,
      price: object.price,
      fee: object.fee
    };
  },
  toAmino(message: SpotMarketOrderResults): SpotMarketOrderResultsAmino {
    const obj: any = {};
    obj.quantity = message.quantity;
    obj.price = message.price;
    obj.fee = message.fee;
    return obj;
  },
  fromAminoMsg(object: SpotMarketOrderResultsAminoMsg): SpotMarketOrderResults {
    return SpotMarketOrderResults.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketOrderResultsProtoMsg): SpotMarketOrderResults {
    return SpotMarketOrderResults.decode(message.value);
  },
  toProto(message: SpotMarketOrderResults): Uint8Array {
    return SpotMarketOrderResults.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketOrderResults): SpotMarketOrderResultsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketOrderResults",
      value: SpotMarketOrderResults.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDerivativeLimitOrder(): MsgCreateDerivativeLimitOrder {
  return {
    sender: "",
    order: DerivativeOrder.fromPartial({})
  };
}
export const MsgCreateDerivativeLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
  encode(message: MsgCreateDerivativeLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateDerivativeLimitOrderAmino): MsgCreateDerivativeLimitOrder {
    return {
      sender: object.sender,
      order: object?.order ? DerivativeOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgCreateDerivativeLimitOrder): MsgCreateDerivativeLimitOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDerivativeLimitOrderAminoMsg): MsgCreateDerivativeLimitOrder {
    return MsgCreateDerivativeLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDerivativeLimitOrderProtoMsg): MsgCreateDerivativeLimitOrder {
    return MsgCreateDerivativeLimitOrder.decode(message.value);
  },
  toProto(message: MsgCreateDerivativeLimitOrder): Uint8Array {
    return MsgCreateDerivativeLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDerivativeLimitOrder): MsgCreateDerivativeLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
      value: MsgCreateDerivativeLimitOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDerivativeLimitOrderResponse(): MsgCreateDerivativeLimitOrderResponse {
  return {
    orderHash: ""
  };
}
export const MsgCreateDerivativeLimitOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse",
  encode(message: MsgCreateDerivativeLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateDerivativeLimitOrderResponseAmino): MsgCreateDerivativeLimitOrderResponse {
    return {
      orderHash: object.order_hash
    };
  },
  toAmino(message: MsgCreateDerivativeLimitOrderResponse): MsgCreateDerivativeLimitOrderResponseAmino {
    const obj: any = {};
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDerivativeLimitOrderResponseAminoMsg): MsgCreateDerivativeLimitOrderResponse {
    return MsgCreateDerivativeLimitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDerivativeLimitOrderResponseProtoMsg): MsgCreateDerivativeLimitOrderResponse {
    return MsgCreateDerivativeLimitOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateDerivativeLimitOrderResponse): Uint8Array {
    return MsgCreateDerivativeLimitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDerivativeLimitOrderResponse): MsgCreateDerivativeLimitOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse",
      value: MsgCreateDerivativeLimitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBinaryOptionsLimitOrder(): MsgCreateBinaryOptionsLimitOrder {
  return {
    sender: "",
    order: DerivativeOrder.fromPartial({})
  };
}
export const MsgCreateBinaryOptionsLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
  encode(message: MsgCreateBinaryOptionsLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateBinaryOptionsLimitOrderAmino): MsgCreateBinaryOptionsLimitOrder {
    return {
      sender: object.sender,
      order: object?.order ? DerivativeOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgCreateBinaryOptionsLimitOrder): MsgCreateBinaryOptionsLimitOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBinaryOptionsLimitOrderAminoMsg): MsgCreateBinaryOptionsLimitOrder {
    return MsgCreateBinaryOptionsLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBinaryOptionsLimitOrderProtoMsg): MsgCreateBinaryOptionsLimitOrder {
    return MsgCreateBinaryOptionsLimitOrder.decode(message.value);
  },
  toProto(message: MsgCreateBinaryOptionsLimitOrder): Uint8Array {
    return MsgCreateBinaryOptionsLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBinaryOptionsLimitOrder): MsgCreateBinaryOptionsLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
      value: MsgCreateBinaryOptionsLimitOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBinaryOptionsLimitOrderResponse(): MsgCreateBinaryOptionsLimitOrderResponse {
  return {
    orderHash: ""
  };
}
export const MsgCreateBinaryOptionsLimitOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse",
  encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateBinaryOptionsLimitOrderResponseAmino): MsgCreateBinaryOptionsLimitOrderResponse {
    return {
      orderHash: object.order_hash
    };
  },
  toAmino(message: MsgCreateBinaryOptionsLimitOrderResponse): MsgCreateBinaryOptionsLimitOrderResponseAmino {
    const obj: any = {};
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBinaryOptionsLimitOrderResponseAminoMsg): MsgCreateBinaryOptionsLimitOrderResponse {
    return MsgCreateBinaryOptionsLimitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBinaryOptionsLimitOrderResponseProtoMsg): MsgCreateBinaryOptionsLimitOrderResponse {
    return MsgCreateBinaryOptionsLimitOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateBinaryOptionsLimitOrderResponse): Uint8Array {
    return MsgCreateBinaryOptionsLimitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBinaryOptionsLimitOrderResponse): MsgCreateBinaryOptionsLimitOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse",
      value: MsgCreateBinaryOptionsLimitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCreateDerivativeLimitOrders(): MsgBatchCreateDerivativeLimitOrders {
  return {
    sender: "",
    orders: []
  };
}
export const MsgBatchCreateDerivativeLimitOrders = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
  encode(message: MsgBatchCreateDerivativeLimitOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCreateDerivativeLimitOrdersAmino): MsgBatchCreateDerivativeLimitOrders {
    return {
      sender: object.sender,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => DerivativeOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBatchCreateDerivativeLimitOrders): MsgBatchCreateDerivativeLimitOrdersAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? DerivativeOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCreateDerivativeLimitOrdersAminoMsg): MsgBatchCreateDerivativeLimitOrders {
    return MsgBatchCreateDerivativeLimitOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCreateDerivativeLimitOrdersProtoMsg): MsgBatchCreateDerivativeLimitOrders {
    return MsgBatchCreateDerivativeLimitOrders.decode(message.value);
  },
  toProto(message: MsgBatchCreateDerivativeLimitOrders): Uint8Array {
    return MsgBatchCreateDerivativeLimitOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCreateDerivativeLimitOrders): MsgBatchCreateDerivativeLimitOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
      value: MsgBatchCreateDerivativeLimitOrders.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCreateDerivativeLimitOrdersResponse(): MsgBatchCreateDerivativeLimitOrdersResponse {
  return {
    orderHashes: []
  };
}
export const MsgBatchCreateDerivativeLimitOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse",
  encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCreateDerivativeLimitOrdersResponseAmino): MsgBatchCreateDerivativeLimitOrdersResponse {
    return {
      orderHashes: Array.isArray(object?.order_hashes) ? object.order_hashes.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgBatchCreateDerivativeLimitOrdersResponse): MsgBatchCreateDerivativeLimitOrdersResponseAmino {
    const obj: any = {};
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCreateDerivativeLimitOrdersResponseAminoMsg): MsgBatchCreateDerivativeLimitOrdersResponse {
    return MsgBatchCreateDerivativeLimitOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg): MsgBatchCreateDerivativeLimitOrdersResponse {
    return MsgBatchCreateDerivativeLimitOrdersResponse.decode(message.value);
  },
  toProto(message: MsgBatchCreateDerivativeLimitOrdersResponse): Uint8Array {
    return MsgBatchCreateDerivativeLimitOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCreateDerivativeLimitOrdersResponse): MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse",
      value: MsgBatchCreateDerivativeLimitOrdersResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
  encode(message: MsgCancelSpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCancelSpotOrderAmino): MsgCancelSpotOrder {
    return {
      sender: object.sender,
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      orderHash: object.order_hash
    };
  },
  toAmino(message: MsgCancelSpotOrder): MsgCancelSpotOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSpotOrderAminoMsg): MsgCancelSpotOrder {
    return MsgCancelSpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSpotOrderProtoMsg): MsgCancelSpotOrder {
    return MsgCancelSpotOrder.decode(message.value);
  },
  toProto(message: MsgCancelSpotOrder): Uint8Array {
    return MsgCancelSpotOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSpotOrder): MsgCancelSpotOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
      value: MsgCancelSpotOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSpotOrderResponse(): MsgCancelSpotOrderResponse {
  return {};
}
export const MsgCancelSpotOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse",
  encode(_: MsgCancelSpotOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelSpotOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse {
    const message = createBaseMsgCancelSpotOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelSpotOrderResponseAmino): MsgCancelSpotOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSpotOrderResponseAminoMsg): MsgCancelSpotOrderResponse {
    return MsgCancelSpotOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSpotOrderResponseProtoMsg): MsgCancelSpotOrderResponse {
    return MsgCancelSpotOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelSpotOrderResponse): Uint8Array {
    return MsgCancelSpotOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse",
      value: MsgCancelSpotOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCancelSpotOrders(): MsgBatchCancelSpotOrders {
  return {
    sender: "",
    data: []
  };
}
export const MsgBatchCancelSpotOrders = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
  encode(message: MsgBatchCancelSpotOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCancelSpotOrdersAmino): MsgBatchCancelSpotOrders {
    return {
      sender: object.sender,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => OrderData.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBatchCancelSpotOrders): MsgBatchCancelSpotOrdersAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.data) {
      obj.data = message.data.map(e => e ? OrderData.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCancelSpotOrdersAminoMsg): MsgBatchCancelSpotOrders {
    return MsgBatchCancelSpotOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCancelSpotOrdersProtoMsg): MsgBatchCancelSpotOrders {
    return MsgBatchCancelSpotOrders.decode(message.value);
  },
  toProto(message: MsgBatchCancelSpotOrders): Uint8Array {
    return MsgBatchCancelSpotOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCancelSpotOrders): MsgBatchCancelSpotOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
      value: MsgBatchCancelSpotOrders.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCancelSpotOrdersResponse(): MsgBatchCancelSpotOrdersResponse {
  return {
    success: []
  };
}
export const MsgBatchCancelSpotOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse",
  encode(message: MsgBatchCancelSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCancelSpotOrdersResponseAmino): MsgBatchCancelSpotOrdersResponse {
    return {
      success: Array.isArray(object?.success) ? object.success.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgBatchCancelSpotOrdersResponse): MsgBatchCancelSpotOrdersResponseAmino {
    const obj: any = {};
    if (message.success) {
      obj.success = message.success.map(e => e);
    } else {
      obj.success = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCancelSpotOrdersResponseAminoMsg): MsgBatchCancelSpotOrdersResponse {
    return MsgBatchCancelSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCancelSpotOrdersResponseProtoMsg): MsgBatchCancelSpotOrdersResponse {
    return MsgBatchCancelSpotOrdersResponse.decode(message.value);
  },
  toProto(message: MsgBatchCancelSpotOrdersResponse): Uint8Array {
    return MsgBatchCancelSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCancelSpotOrdersResponse): MsgBatchCancelSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse",
      value: MsgBatchCancelSpotOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCancelBinaryOptionsOrders(): MsgBatchCancelBinaryOptionsOrders {
  return {
    sender: "",
    data: []
  };
}
export const MsgBatchCancelBinaryOptionsOrders = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
  encode(message: MsgBatchCancelBinaryOptionsOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCancelBinaryOptionsOrdersAmino): MsgBatchCancelBinaryOptionsOrders {
    return {
      sender: object.sender,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => OrderData.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBatchCancelBinaryOptionsOrders): MsgBatchCancelBinaryOptionsOrdersAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.data) {
      obj.data = message.data.map(e => e ? OrderData.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCancelBinaryOptionsOrdersAminoMsg): MsgBatchCancelBinaryOptionsOrders {
    return MsgBatchCancelBinaryOptionsOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCancelBinaryOptionsOrdersProtoMsg): MsgBatchCancelBinaryOptionsOrders {
    return MsgBatchCancelBinaryOptionsOrders.decode(message.value);
  },
  toProto(message: MsgBatchCancelBinaryOptionsOrders): Uint8Array {
    return MsgBatchCancelBinaryOptionsOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCancelBinaryOptionsOrders): MsgBatchCancelBinaryOptionsOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
      value: MsgBatchCancelBinaryOptionsOrders.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCancelBinaryOptionsOrdersResponse(): MsgBatchCancelBinaryOptionsOrdersResponse {
  return {
    success: []
  };
}
export const MsgBatchCancelBinaryOptionsOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse",
  encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCancelBinaryOptionsOrdersResponseAmino): MsgBatchCancelBinaryOptionsOrdersResponse {
    return {
      success: Array.isArray(object?.success) ? object.success.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgBatchCancelBinaryOptionsOrdersResponse): MsgBatchCancelBinaryOptionsOrdersResponseAmino {
    const obj: any = {};
    if (message.success) {
      obj.success = message.success.map(e => e);
    } else {
      obj.success = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCancelBinaryOptionsOrdersResponseAminoMsg): MsgBatchCancelBinaryOptionsOrdersResponse {
    return MsgBatchCancelBinaryOptionsOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg): MsgBatchCancelBinaryOptionsOrdersResponse {
    return MsgBatchCancelBinaryOptionsOrdersResponse.decode(message.value);
  },
  toProto(message: MsgBatchCancelBinaryOptionsOrdersResponse): Uint8Array {
    return MsgBatchCancelBinaryOptionsOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCancelBinaryOptionsOrdersResponse): MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse",
      value: MsgBatchCancelBinaryOptionsOrdersResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
  encode(message: MsgBatchUpdateOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchUpdateOrdersAmino): MsgBatchUpdateOrders {
    return {
      sender: object.sender,
      subaccountId: object.subaccount_id,
      spotMarketIdsToCancelAll: Array.isArray(object?.spot_market_ids_to_cancel_all) ? object.spot_market_ids_to_cancel_all.map((e: any) => e) : [],
      derivativeMarketIdsToCancelAll: Array.isArray(object?.derivative_market_ids_to_cancel_all) ? object.derivative_market_ids_to_cancel_all.map((e: any) => e) : [],
      spotOrdersToCancel: Array.isArray(object?.spot_orders_to_cancel) ? object.spot_orders_to_cancel.map((e: any) => OrderData.fromAmino(e)) : [],
      derivativeOrdersToCancel: Array.isArray(object?.derivative_orders_to_cancel) ? object.derivative_orders_to_cancel.map((e: any) => OrderData.fromAmino(e)) : [],
      spotOrdersToCreate: Array.isArray(object?.spot_orders_to_create) ? object.spot_orders_to_create.map((e: any) => SpotOrder.fromAmino(e)) : [],
      derivativeOrdersToCreate: Array.isArray(object?.derivative_orders_to_create) ? object.derivative_orders_to_create.map((e: any) => DerivativeOrder.fromAmino(e)) : [],
      binaryOptionsOrdersToCancel: Array.isArray(object?.binary_options_orders_to_cancel) ? object.binary_options_orders_to_cancel.map((e: any) => OrderData.fromAmino(e)) : [],
      binaryOptionsMarketIdsToCancelAll: Array.isArray(object?.binary_options_market_ids_to_cancel_all) ? object.binary_options_market_ids_to_cancel_all.map((e: any) => e) : [],
      binaryOptionsOrdersToCreate: Array.isArray(object?.binary_options_orders_to_create) ? object.binary_options_orders_to_create.map((e: any) => DerivativeOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBatchUpdateOrders): MsgBatchUpdateOrdersAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.subaccount_id = message.subaccountId;
    if (message.spotMarketIdsToCancelAll) {
      obj.spot_market_ids_to_cancel_all = message.spotMarketIdsToCancelAll.map(e => e);
    } else {
      obj.spot_market_ids_to_cancel_all = [];
    }
    if (message.derivativeMarketIdsToCancelAll) {
      obj.derivative_market_ids_to_cancel_all = message.derivativeMarketIdsToCancelAll.map(e => e);
    } else {
      obj.derivative_market_ids_to_cancel_all = [];
    }
    if (message.spotOrdersToCancel) {
      obj.spot_orders_to_cancel = message.spotOrdersToCancel.map(e => e ? OrderData.toAmino(e) : undefined);
    } else {
      obj.spot_orders_to_cancel = [];
    }
    if (message.derivativeOrdersToCancel) {
      obj.derivative_orders_to_cancel = message.derivativeOrdersToCancel.map(e => e ? OrderData.toAmino(e) : undefined);
    } else {
      obj.derivative_orders_to_cancel = [];
    }
    if (message.spotOrdersToCreate) {
      obj.spot_orders_to_create = message.spotOrdersToCreate.map(e => e ? SpotOrder.toAmino(e) : undefined);
    } else {
      obj.spot_orders_to_create = [];
    }
    if (message.derivativeOrdersToCreate) {
      obj.derivative_orders_to_create = message.derivativeOrdersToCreate.map(e => e ? DerivativeOrder.toAmino(e) : undefined);
    } else {
      obj.derivative_orders_to_create = [];
    }
    if (message.binaryOptionsOrdersToCancel) {
      obj.binary_options_orders_to_cancel = message.binaryOptionsOrdersToCancel.map(e => e ? OrderData.toAmino(e) : undefined);
    } else {
      obj.binary_options_orders_to_cancel = [];
    }
    if (message.binaryOptionsMarketIdsToCancelAll) {
      obj.binary_options_market_ids_to_cancel_all = message.binaryOptionsMarketIdsToCancelAll.map(e => e);
    } else {
      obj.binary_options_market_ids_to_cancel_all = [];
    }
    if (message.binaryOptionsOrdersToCreate) {
      obj.binary_options_orders_to_create = message.binaryOptionsOrdersToCreate.map(e => e ? DerivativeOrder.toAmino(e) : undefined);
    } else {
      obj.binary_options_orders_to_create = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchUpdateOrdersAminoMsg): MsgBatchUpdateOrders {
    return MsgBatchUpdateOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchUpdateOrdersProtoMsg): MsgBatchUpdateOrders {
    return MsgBatchUpdateOrders.decode(message.value);
  },
  toProto(message: MsgBatchUpdateOrders): Uint8Array {
    return MsgBatchUpdateOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchUpdateOrders): MsgBatchUpdateOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
      value: MsgBatchUpdateOrders.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse",
  encode(message: MsgBatchUpdateOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchUpdateOrdersResponseAmino): MsgBatchUpdateOrdersResponse {
    return {
      spotCancelSuccess: Array.isArray(object?.spot_cancel_success) ? object.spot_cancel_success.map((e: any) => e) : [],
      derivativeCancelSuccess: Array.isArray(object?.derivative_cancel_success) ? object.derivative_cancel_success.map((e: any) => e) : [],
      spotOrderHashes: Array.isArray(object?.spot_order_hashes) ? object.spot_order_hashes.map((e: any) => e) : [],
      derivativeOrderHashes: Array.isArray(object?.derivative_order_hashes) ? object.derivative_order_hashes.map((e: any) => e) : [],
      binaryOptionsCancelSuccess: Array.isArray(object?.binary_options_cancel_success) ? object.binary_options_cancel_success.map((e: any) => e) : [],
      binaryOptionsOrderHashes: Array.isArray(object?.binary_options_order_hashes) ? object.binary_options_order_hashes.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgBatchUpdateOrdersResponse): MsgBatchUpdateOrdersResponseAmino {
    const obj: any = {};
    if (message.spotCancelSuccess) {
      obj.spot_cancel_success = message.spotCancelSuccess.map(e => e);
    } else {
      obj.spot_cancel_success = [];
    }
    if (message.derivativeCancelSuccess) {
      obj.derivative_cancel_success = message.derivativeCancelSuccess.map(e => e);
    } else {
      obj.derivative_cancel_success = [];
    }
    if (message.spotOrderHashes) {
      obj.spot_order_hashes = message.spotOrderHashes.map(e => e);
    } else {
      obj.spot_order_hashes = [];
    }
    if (message.derivativeOrderHashes) {
      obj.derivative_order_hashes = message.derivativeOrderHashes.map(e => e);
    } else {
      obj.derivative_order_hashes = [];
    }
    if (message.binaryOptionsCancelSuccess) {
      obj.binary_options_cancel_success = message.binaryOptionsCancelSuccess.map(e => e);
    } else {
      obj.binary_options_cancel_success = [];
    }
    if (message.binaryOptionsOrderHashes) {
      obj.binary_options_order_hashes = message.binaryOptionsOrderHashes.map(e => e);
    } else {
      obj.binary_options_order_hashes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchUpdateOrdersResponseAminoMsg): MsgBatchUpdateOrdersResponse {
    return MsgBatchUpdateOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchUpdateOrdersResponseProtoMsg): MsgBatchUpdateOrdersResponse {
    return MsgBatchUpdateOrdersResponse.decode(message.value);
  },
  toProto(message: MsgBatchUpdateOrdersResponse): Uint8Array {
    return MsgBatchUpdateOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchUpdateOrdersResponse): MsgBatchUpdateOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse",
      value: MsgBatchUpdateOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDerivativeMarketOrder(): MsgCreateDerivativeMarketOrder {
  return {
    sender: "",
    order: DerivativeOrder.fromPartial({})
  };
}
export const MsgCreateDerivativeMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
  encode(message: MsgCreateDerivativeMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateDerivativeMarketOrderAmino): MsgCreateDerivativeMarketOrder {
    return {
      sender: object.sender,
      order: object?.order ? DerivativeOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgCreateDerivativeMarketOrder): MsgCreateDerivativeMarketOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDerivativeMarketOrderAminoMsg): MsgCreateDerivativeMarketOrder {
    return MsgCreateDerivativeMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDerivativeMarketOrderProtoMsg): MsgCreateDerivativeMarketOrder {
    return MsgCreateDerivativeMarketOrder.decode(message.value);
  },
  toProto(message: MsgCreateDerivativeMarketOrder): Uint8Array {
    return MsgCreateDerivativeMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDerivativeMarketOrder): MsgCreateDerivativeMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
      value: MsgCreateDerivativeMarketOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDerivativeMarketOrderResponse(): MsgCreateDerivativeMarketOrderResponse {
  return {
    orderHash: "",
    results: undefined
  };
}
export const MsgCreateDerivativeMarketOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse",
  encode(message: MsgCreateDerivativeMarketOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateDerivativeMarketOrderResponseAmino): MsgCreateDerivativeMarketOrderResponse {
    return {
      orderHash: object.order_hash,
      results: object?.results ? DerivativeMarketOrderResults.fromAmino(object.results) : undefined
    };
  },
  toAmino(message: MsgCreateDerivativeMarketOrderResponse): MsgCreateDerivativeMarketOrderResponseAmino {
    const obj: any = {};
    obj.order_hash = message.orderHash;
    obj.results = message.results ? DerivativeMarketOrderResults.toAmino(message.results) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDerivativeMarketOrderResponseAminoMsg): MsgCreateDerivativeMarketOrderResponse {
    return MsgCreateDerivativeMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDerivativeMarketOrderResponseProtoMsg): MsgCreateDerivativeMarketOrderResponse {
    return MsgCreateDerivativeMarketOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateDerivativeMarketOrderResponse): Uint8Array {
    return MsgCreateDerivativeMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDerivativeMarketOrderResponse): MsgCreateDerivativeMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse",
      value: MsgCreateDerivativeMarketOrderResponse.encode(message).finish()
    };
  }
};
function createBaseDerivativeMarketOrderResults(): DerivativeMarketOrderResults {
  return {
    quantity: "",
    price: "",
    fee: "",
    positionDelta: PositionDelta.fromPartial({}),
    payout: ""
  };
}
export const DerivativeMarketOrderResults = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderResults",
  encode(message: DerivativeMarketOrderResults, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(34).fork()).ldelim();
    }
    if (message.payout !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.payout, 18).atomics);
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
  },
  fromAmino(object: DerivativeMarketOrderResultsAmino): DerivativeMarketOrderResults {
    return {
      quantity: object.quantity,
      price: object.price,
      fee: object.fee,
      positionDelta: object?.position_delta ? PositionDelta.fromAmino(object.position_delta) : undefined,
      payout: object.payout
    };
  },
  toAmino(message: DerivativeMarketOrderResults): DerivativeMarketOrderResultsAmino {
    const obj: any = {};
    obj.quantity = message.quantity;
    obj.price = message.price;
    obj.fee = message.fee;
    obj.position_delta = message.positionDelta ? PositionDelta.toAmino(message.positionDelta) : undefined;
    obj.payout = message.payout;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketOrderResultsAminoMsg): DerivativeMarketOrderResults {
    return DerivativeMarketOrderResults.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketOrderResultsProtoMsg): DerivativeMarketOrderResults {
    return DerivativeMarketOrderResults.decode(message.value);
  },
  toProto(message: DerivativeMarketOrderResults): Uint8Array {
    return DerivativeMarketOrderResults.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketOrderResults): DerivativeMarketOrderResultsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderResults",
      value: DerivativeMarketOrderResults.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBinaryOptionsMarketOrder(): MsgCreateBinaryOptionsMarketOrder {
  return {
    sender: "",
    order: DerivativeOrder.fromPartial({})
  };
}
export const MsgCreateBinaryOptionsMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
  encode(message: MsgCreateBinaryOptionsMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateBinaryOptionsMarketOrderAmino): MsgCreateBinaryOptionsMarketOrder {
    return {
      sender: object.sender,
      order: object?.order ? DerivativeOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgCreateBinaryOptionsMarketOrder): MsgCreateBinaryOptionsMarketOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBinaryOptionsMarketOrderAminoMsg): MsgCreateBinaryOptionsMarketOrder {
    return MsgCreateBinaryOptionsMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBinaryOptionsMarketOrderProtoMsg): MsgCreateBinaryOptionsMarketOrder {
    return MsgCreateBinaryOptionsMarketOrder.decode(message.value);
  },
  toProto(message: MsgCreateBinaryOptionsMarketOrder): Uint8Array {
    return MsgCreateBinaryOptionsMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBinaryOptionsMarketOrder): MsgCreateBinaryOptionsMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
      value: MsgCreateBinaryOptionsMarketOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBinaryOptionsMarketOrderResponse(): MsgCreateBinaryOptionsMarketOrderResponse {
  return {
    orderHash: "",
    results: undefined
  };
}
export const MsgCreateBinaryOptionsMarketOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse",
  encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateBinaryOptionsMarketOrderResponseAmino): MsgCreateBinaryOptionsMarketOrderResponse {
    return {
      orderHash: object.order_hash,
      results: object?.results ? DerivativeMarketOrderResults.fromAmino(object.results) : undefined
    };
  },
  toAmino(message: MsgCreateBinaryOptionsMarketOrderResponse): MsgCreateBinaryOptionsMarketOrderResponseAmino {
    const obj: any = {};
    obj.order_hash = message.orderHash;
    obj.results = message.results ? DerivativeMarketOrderResults.toAmino(message.results) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBinaryOptionsMarketOrderResponseAminoMsg): MsgCreateBinaryOptionsMarketOrderResponse {
    return MsgCreateBinaryOptionsMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBinaryOptionsMarketOrderResponseProtoMsg): MsgCreateBinaryOptionsMarketOrderResponse {
    return MsgCreateBinaryOptionsMarketOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateBinaryOptionsMarketOrderResponse): Uint8Array {
    return MsgCreateBinaryOptionsMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBinaryOptionsMarketOrderResponse): MsgCreateBinaryOptionsMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse",
      value: MsgCreateBinaryOptionsMarketOrderResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
  encode(message: MsgCancelDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCancelDerivativeOrderAmino): MsgCancelDerivativeOrder {
    return {
      sender: object.sender,
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      orderHash: object.order_hash,
      orderMask: object.order_mask
    };
  },
  toAmino(message: MsgCancelDerivativeOrder): MsgCancelDerivativeOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.order_hash = message.orderHash;
    obj.order_mask = message.orderMask;
    return obj;
  },
  fromAminoMsg(object: MsgCancelDerivativeOrderAminoMsg): MsgCancelDerivativeOrder {
    return MsgCancelDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelDerivativeOrderProtoMsg): MsgCancelDerivativeOrder {
    return MsgCancelDerivativeOrder.decode(message.value);
  },
  toProto(message: MsgCancelDerivativeOrder): Uint8Array {
    return MsgCancelDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDerivativeOrder): MsgCancelDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
      value: MsgCancelDerivativeOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDerivativeOrderResponse(): MsgCancelDerivativeOrderResponse {
  return {};
}
export const MsgCancelDerivativeOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse",
  encode(_: MsgCancelDerivativeOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelDerivativeOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse {
    const message = createBaseMsgCancelDerivativeOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelDerivativeOrderResponseAmino): MsgCancelDerivativeOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelDerivativeOrderResponse): MsgCancelDerivativeOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelDerivativeOrderResponseAminoMsg): MsgCancelDerivativeOrderResponse {
    return MsgCancelDerivativeOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelDerivativeOrderResponseProtoMsg): MsgCancelDerivativeOrderResponse {
    return MsgCancelDerivativeOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelDerivativeOrderResponse): Uint8Array {
    return MsgCancelDerivativeOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDerivativeOrderResponse): MsgCancelDerivativeOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse",
      value: MsgCancelDerivativeOrderResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
  encode(message: MsgCancelBinaryOptionsOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCancelBinaryOptionsOrderAmino): MsgCancelBinaryOptionsOrder {
    return {
      sender: object.sender,
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      orderHash: object.order_hash,
      orderMask: object.order_mask
    };
  },
  toAmino(message: MsgCancelBinaryOptionsOrder): MsgCancelBinaryOptionsOrderAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.order_hash = message.orderHash;
    obj.order_mask = message.orderMask;
    return obj;
  },
  fromAminoMsg(object: MsgCancelBinaryOptionsOrderAminoMsg): MsgCancelBinaryOptionsOrder {
    return MsgCancelBinaryOptionsOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelBinaryOptionsOrderProtoMsg): MsgCancelBinaryOptionsOrder {
    return MsgCancelBinaryOptionsOrder.decode(message.value);
  },
  toProto(message: MsgCancelBinaryOptionsOrder): Uint8Array {
    return MsgCancelBinaryOptionsOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelBinaryOptionsOrder): MsgCancelBinaryOptionsOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
      value: MsgCancelBinaryOptionsOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelBinaryOptionsOrderResponse(): MsgCancelBinaryOptionsOrderResponse {
  return {};
}
export const MsgCancelBinaryOptionsOrderResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse",
  encode(_: MsgCancelBinaryOptionsOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelBinaryOptionsOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse {
    const message = createBaseMsgCancelBinaryOptionsOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelBinaryOptionsOrderResponseAmino): MsgCancelBinaryOptionsOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelBinaryOptionsOrderResponse): MsgCancelBinaryOptionsOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelBinaryOptionsOrderResponseAminoMsg): MsgCancelBinaryOptionsOrderResponse {
    return MsgCancelBinaryOptionsOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelBinaryOptionsOrderResponseProtoMsg): MsgCancelBinaryOptionsOrderResponse {
    return MsgCancelBinaryOptionsOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelBinaryOptionsOrderResponse): Uint8Array {
    return MsgCancelBinaryOptionsOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelBinaryOptionsOrderResponse): MsgCancelBinaryOptionsOrderResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse",
      value: MsgCancelBinaryOptionsOrderResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.OrderData",
  encode(message: OrderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: OrderDataAmino): OrderData {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      orderHash: object.order_hash,
      orderMask: object.order_mask
    };
  },
  toAmino(message: OrderData): OrderDataAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.order_hash = message.orderHash;
    obj.order_mask = message.orderMask;
    return obj;
  },
  fromAminoMsg(object: OrderDataAminoMsg): OrderData {
    return OrderData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderDataProtoMsg): OrderData {
    return OrderData.decode(message.value);
  },
  toProto(message: OrderData): Uint8Array {
    return OrderData.encode(message).finish();
  },
  toProtoMsg(message: OrderData): OrderDataProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OrderData",
      value: OrderData.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCancelDerivativeOrders(): MsgBatchCancelDerivativeOrders {
  return {
    sender: "",
    data: []
  };
}
export const MsgBatchCancelDerivativeOrders = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
  encode(message: MsgBatchCancelDerivativeOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCancelDerivativeOrdersAmino): MsgBatchCancelDerivativeOrders {
    return {
      sender: object.sender,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => OrderData.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBatchCancelDerivativeOrders): MsgBatchCancelDerivativeOrdersAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.data) {
      obj.data = message.data.map(e => e ? OrderData.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCancelDerivativeOrdersAminoMsg): MsgBatchCancelDerivativeOrders {
    return MsgBatchCancelDerivativeOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCancelDerivativeOrdersProtoMsg): MsgBatchCancelDerivativeOrders {
    return MsgBatchCancelDerivativeOrders.decode(message.value);
  },
  toProto(message: MsgBatchCancelDerivativeOrders): Uint8Array {
    return MsgBatchCancelDerivativeOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCancelDerivativeOrders): MsgBatchCancelDerivativeOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
      value: MsgBatchCancelDerivativeOrders.encode(message).finish()
    };
  }
};
function createBaseMsgBatchCancelDerivativeOrdersResponse(): MsgBatchCancelDerivativeOrdersResponse {
  return {
    success: []
  };
}
export const MsgBatchCancelDerivativeOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse",
  encode(message: MsgBatchCancelDerivativeOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBatchCancelDerivativeOrdersResponseAmino): MsgBatchCancelDerivativeOrdersResponse {
    return {
      success: Array.isArray(object?.success) ? object.success.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgBatchCancelDerivativeOrdersResponse): MsgBatchCancelDerivativeOrdersResponseAmino {
    const obj: any = {};
    if (message.success) {
      obj.success = message.success.map(e => e);
    } else {
      obj.success = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchCancelDerivativeOrdersResponseAminoMsg): MsgBatchCancelDerivativeOrdersResponse {
    return MsgBatchCancelDerivativeOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchCancelDerivativeOrdersResponseProtoMsg): MsgBatchCancelDerivativeOrdersResponse {
    return MsgBatchCancelDerivativeOrdersResponse.decode(message.value);
  },
  toProto(message: MsgBatchCancelDerivativeOrdersResponse): Uint8Array {
    return MsgBatchCancelDerivativeOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchCancelDerivativeOrdersResponse): MsgBatchCancelDerivativeOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse",
      value: MsgBatchCancelDerivativeOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubaccountTransfer(): MsgSubaccountTransfer {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgSubaccountTransfer = {
  typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
  encode(message: MsgSubaccountTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgSubaccountTransferAmino): MsgSubaccountTransfer {
    return {
      sender: object.sender,
      sourceSubaccountId: object.source_subaccount_id,
      destinationSubaccountId: object.destination_subaccount_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgSubaccountTransfer): MsgSubaccountTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.source_subaccount_id = message.sourceSubaccountId;
    obj.destination_subaccount_id = message.destinationSubaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubaccountTransferAminoMsg): MsgSubaccountTransfer {
    return MsgSubaccountTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubaccountTransferProtoMsg): MsgSubaccountTransfer {
    return MsgSubaccountTransfer.decode(message.value);
  },
  toProto(message: MsgSubaccountTransfer): Uint8Array {
    return MsgSubaccountTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgSubaccountTransfer): MsgSubaccountTransferProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
      value: MsgSubaccountTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgSubaccountTransferResponse(): MsgSubaccountTransferResponse {
  return {};
}
export const MsgSubaccountTransferResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse",
  encode(_: MsgSubaccountTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubaccountTransferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse {
    const message = createBaseMsgSubaccountTransferResponse();
    return message;
  },
  fromAmino(_: MsgSubaccountTransferResponseAmino): MsgSubaccountTransferResponse {
    return {};
  },
  toAmino(_: MsgSubaccountTransferResponse): MsgSubaccountTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubaccountTransferResponseAminoMsg): MsgSubaccountTransferResponse {
    return MsgSubaccountTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubaccountTransferResponseProtoMsg): MsgSubaccountTransferResponse {
    return MsgSubaccountTransferResponse.decode(message.value);
  },
  toProto(message: MsgSubaccountTransferResponse): Uint8Array {
    return MsgSubaccountTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubaccountTransferResponse): MsgSubaccountTransferResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse",
      value: MsgSubaccountTransferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExternalTransfer(): MsgExternalTransfer {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgExternalTransfer = {
  typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
  encode(message: MsgExternalTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgExternalTransferAmino): MsgExternalTransfer {
    return {
      sender: object.sender,
      sourceSubaccountId: object.source_subaccount_id,
      destinationSubaccountId: object.destination_subaccount_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgExternalTransfer): MsgExternalTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.source_subaccount_id = message.sourceSubaccountId;
    obj.destination_subaccount_id = message.destinationSubaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExternalTransferAminoMsg): MsgExternalTransfer {
    return MsgExternalTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExternalTransferProtoMsg): MsgExternalTransfer {
    return MsgExternalTransfer.decode(message.value);
  },
  toProto(message: MsgExternalTransfer): Uint8Array {
    return MsgExternalTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgExternalTransfer): MsgExternalTransferProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
      value: MsgExternalTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgExternalTransferResponse(): MsgExternalTransferResponse {
  return {};
}
export const MsgExternalTransferResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse",
  encode(_: MsgExternalTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgExternalTransferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgExternalTransferResponse>): MsgExternalTransferResponse {
    const message = createBaseMsgExternalTransferResponse();
    return message;
  },
  fromAmino(_: MsgExternalTransferResponseAmino): MsgExternalTransferResponse {
    return {};
  },
  toAmino(_: MsgExternalTransferResponse): MsgExternalTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExternalTransferResponseAminoMsg): MsgExternalTransferResponse {
    return MsgExternalTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExternalTransferResponseProtoMsg): MsgExternalTransferResponse {
    return MsgExternalTransferResponse.decode(message.value);
  },
  toProto(message: MsgExternalTransferResponse): Uint8Array {
    return MsgExternalTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExternalTransferResponse): MsgExternalTransferResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse",
      value: MsgExternalTransferResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
  encode(message: MsgLiquidatePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgLiquidatePositionAmino): MsgLiquidatePosition {
    return {
      sender: object.sender,
      subaccountId: object.subaccount_id,
      marketId: object.market_id,
      order: object?.order ? DerivativeOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: MsgLiquidatePosition): MsgLiquidatePositionAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidatePositionAminoMsg): MsgLiquidatePosition {
    return MsgLiquidatePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidatePositionProtoMsg): MsgLiquidatePosition {
    return MsgLiquidatePosition.decode(message.value);
  },
  toProto(message: MsgLiquidatePosition): Uint8Array {
    return MsgLiquidatePosition.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidatePosition): MsgLiquidatePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
      value: MsgLiquidatePosition.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidatePositionResponse(): MsgLiquidatePositionResponse {
  return {};
}
export const MsgLiquidatePositionResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse",
  encode(_: MsgLiquidatePositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLiquidatePositionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse {
    const message = createBaseMsgLiquidatePositionResponse();
    return message;
  },
  fromAmino(_: MsgLiquidatePositionResponseAmino): MsgLiquidatePositionResponse {
    return {};
  },
  toAmino(_: MsgLiquidatePositionResponse): MsgLiquidatePositionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLiquidatePositionResponseAminoMsg): MsgLiquidatePositionResponse {
    return MsgLiquidatePositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidatePositionResponseProtoMsg): MsgLiquidatePositionResponse {
    return MsgLiquidatePositionResponse.decode(message.value);
  },
  toProto(message: MsgLiquidatePositionResponse): Uint8Array {
    return MsgLiquidatePositionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidatePositionResponse): MsgLiquidatePositionResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse",
      value: MsgLiquidatePositionResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
  encode(message: MsgIncreasePositionMargin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(42).string(Decimal.fromUserInput(message.amount, 18).atomics);
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
  },
  fromAmino(object: MsgIncreasePositionMarginAmino): MsgIncreasePositionMargin {
    return {
      sender: object.sender,
      sourceSubaccountId: object.source_subaccount_id,
      destinationSubaccountId: object.destination_subaccount_id,
      marketId: object.market_id,
      amount: object.amount
    };
  },
  toAmino(message: MsgIncreasePositionMargin): MsgIncreasePositionMarginAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.source_subaccount_id = message.sourceSubaccountId;
    obj.destination_subaccount_id = message.destinationSubaccountId;
    obj.market_id = message.marketId;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgIncreasePositionMarginAminoMsg): MsgIncreasePositionMargin {
    return MsgIncreasePositionMargin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncreasePositionMarginProtoMsg): MsgIncreasePositionMargin {
    return MsgIncreasePositionMargin.decode(message.value);
  },
  toProto(message: MsgIncreasePositionMargin): Uint8Array {
    return MsgIncreasePositionMargin.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreasePositionMargin): MsgIncreasePositionMarginProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
      value: MsgIncreasePositionMargin.encode(message).finish()
    };
  }
};
function createBaseMsgIncreasePositionMarginResponse(): MsgIncreasePositionMarginResponse {
  return {};
}
export const MsgIncreasePositionMarginResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse",
  encode(_: MsgIncreasePositionMarginResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgIncreasePositionMarginResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse {
    const message = createBaseMsgIncreasePositionMarginResponse();
    return message;
  },
  fromAmino(_: MsgIncreasePositionMarginResponseAmino): MsgIncreasePositionMarginResponse {
    return {};
  },
  toAmino(_: MsgIncreasePositionMarginResponse): MsgIncreasePositionMarginResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIncreasePositionMarginResponseAminoMsg): MsgIncreasePositionMarginResponse {
    return MsgIncreasePositionMarginResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncreasePositionMarginResponseProtoMsg): MsgIncreasePositionMarginResponse {
    return MsgIncreasePositionMarginResponse.decode(message.value);
  },
  toProto(message: MsgIncreasePositionMarginResponse): Uint8Array {
    return MsgIncreasePositionMarginResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreasePositionMarginResponse): MsgIncreasePositionMarginResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse",
      value: MsgIncreasePositionMarginResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract",
  encode(message: MsgPrivilegedExecuteContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgPrivilegedExecuteContractAmino): MsgPrivilegedExecuteContract {
    return {
      sender: object.sender,
      funds: object.funds,
      contractAddress: object.contract_address,
      data: object.data
    };
  },
  toAmino(message: MsgPrivilegedExecuteContract): MsgPrivilegedExecuteContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.funds = message.funds;
    obj.contract_address = message.contractAddress;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgPrivilegedExecuteContractAminoMsg): MsgPrivilegedExecuteContract {
    return MsgPrivilegedExecuteContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPrivilegedExecuteContractProtoMsg): MsgPrivilegedExecuteContract {
    return MsgPrivilegedExecuteContract.decode(message.value);
  },
  toProto(message: MsgPrivilegedExecuteContract): Uint8Array {
    return MsgPrivilegedExecuteContract.encode(message).finish();
  },
  toProtoMsg(message: MsgPrivilegedExecuteContract): MsgPrivilegedExecuteContractProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract",
      value: MsgPrivilegedExecuteContract.encode(message).finish()
    };
  }
};
function createBaseMsgPrivilegedExecuteContractResponse(): MsgPrivilegedExecuteContractResponse {
  return {
    fundsDiff: []
  };
}
export const MsgPrivilegedExecuteContractResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContractResponse",
  encode(message: MsgPrivilegedExecuteContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgPrivilegedExecuteContractResponseAmino): MsgPrivilegedExecuteContractResponse {
    return {
      fundsDiff: Array.isArray(object?.funds_diff) ? object.funds_diff.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgPrivilegedExecuteContractResponse): MsgPrivilegedExecuteContractResponseAmino {
    const obj: any = {};
    if (message.fundsDiff) {
      obj.funds_diff = message.fundsDiff.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds_diff = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgPrivilegedExecuteContractResponseAminoMsg): MsgPrivilegedExecuteContractResponse {
    return MsgPrivilegedExecuteContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPrivilegedExecuteContractResponseProtoMsg): MsgPrivilegedExecuteContractResponse {
    return MsgPrivilegedExecuteContractResponse.decode(message.value);
  },
  toProto(message: MsgPrivilegedExecuteContractResponse): Uint8Array {
    return MsgPrivilegedExecuteContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPrivilegedExecuteContractResponse): MsgPrivilegedExecuteContractResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContractResponse",
      value: MsgPrivilegedExecuteContractResponse.encode(message).finish()
    };
  }
};
function createBaseSpotMarketParamUpdateProposal(): SpotMarketParamUpdateProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
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
  typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
  encode(message: SpotMarketParamUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1
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
  },
  fromAmino(object: SpotMarketParamUpdateProposalAmino): SpotMarketParamUpdateProposal {
    return {
      title: object.title,
      description: object.description,
      marketId: object.market_id,
      makerFeeRate: object?.maker_fee_rate,
      takerFeeRate: object?.taker_fee_rate,
      relayerFeeShareRate: object?.relayer_fee_share_rate,
      minPriceTickSize: object?.min_price_tick_size,
      minQuantityTickSize: object?.min_quantity_tick_size,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.market_id = message.marketId;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: SpotMarketParamUpdateProposalAminoMsg): SpotMarketParamUpdateProposal {
    return SpotMarketParamUpdateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketParamUpdateProposalProtoMsg): SpotMarketParamUpdateProposal {
    return SpotMarketParamUpdateProposal.decode(message.value);
  },
  toProto(message: SpotMarketParamUpdateProposal): Uint8Array {
    return SpotMarketParamUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
      value: SpotMarketParamUpdateProposal.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
  encode(message: ExchangeEnableProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      exchangeType: isSet(object.exchangeType) ? exchangeTypeFromJSON(object.exchangeType) : -1
    };
  },
  fromPartial(object: Partial<ExchangeEnableProposal>): ExchangeEnableProposal {
    const message = createBaseExchangeEnableProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.exchangeType = object.exchangeType ?? 0;
    return message;
  },
  fromAmino(object: ExchangeEnableProposalAmino): ExchangeEnableProposal {
    return {
      title: object.title,
      description: object.description,
      exchangeType: isSet(object.exchangeType) ? exchangeTypeFromJSON(object.exchangeType) : -1
    };
  },
  toAmino(message: ExchangeEnableProposal): ExchangeEnableProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.exchangeType = message.exchangeType;
    return obj;
  },
  fromAminoMsg(object: ExchangeEnableProposalAminoMsg): ExchangeEnableProposal {
    return ExchangeEnableProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ExchangeEnableProposalProtoMsg): ExchangeEnableProposal {
    return ExchangeEnableProposal.decode(message.value);
  },
  toProto(message: ExchangeEnableProposal): Uint8Array {
    return ExchangeEnableProposal.encode(message).finish();
  },
  toProtoMsg(message: ExchangeEnableProposal): ExchangeEnableProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
      value: ExchangeEnableProposal.encode(message).finish()
    };
  }
};
function createBaseBatchExchangeModificationProposal(): BatchExchangeModificationProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
    title: "",
    description: "",
    spotMarketParamUpdateProposals: [],
    derivativeMarketParamUpdateProposals: [],
    spotMarketLaunchProposals: [],
    perpetualMarketLaunchProposals: [],
    expiryFuturesMarketLaunchProposals: [],
    tradingRewardCampaignUpdateProposal: TradingRewardCampaignUpdateProposal.fromPartial({}),
    binaryOptionsMarketLaunchProposals: [],
    binaryOptionsParamUpdateProposals: [],
    denomDecimalsUpdateProposal: UpdateDenomDecimalsProposal.fromPartial({})
  };
}
export const BatchExchangeModificationProposal = {
  typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
  encode(message: BatchExchangeModificationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BatchExchangeModificationProposalAmino): BatchExchangeModificationProposal {
    return {
      title: object.title,
      description: object.description,
      spotMarketParamUpdateProposals: Array.isArray(object?.spot_market_param_update_proposals) ? object.spot_market_param_update_proposals.map((e: any) => SpotMarketParamUpdateProposal.fromAmino(e)) : [],
      derivativeMarketParamUpdateProposals: Array.isArray(object?.derivative_market_param_update_proposals) ? object.derivative_market_param_update_proposals.map((e: any) => DerivativeMarketParamUpdateProposal.fromAmino(e)) : [],
      spotMarketLaunchProposals: Array.isArray(object?.spot_market_launch_proposals) ? object.spot_market_launch_proposals.map((e: any) => SpotMarketLaunchProposal.fromAmino(e)) : [],
      perpetualMarketLaunchProposals: Array.isArray(object?.perpetual_market_launch_proposals) ? object.perpetual_market_launch_proposals.map((e: any) => PerpetualMarketLaunchProposal.fromAmino(e)) : [],
      expiryFuturesMarketLaunchProposals: Array.isArray(object?.expiry_futures_market_launch_proposals) ? object.expiry_futures_market_launch_proposals.map((e: any) => ExpiryFuturesMarketLaunchProposal.fromAmino(e)) : [],
      tradingRewardCampaignUpdateProposal: object?.trading_reward_campaign_update_proposal ? TradingRewardCampaignUpdateProposal.fromAmino(object.trading_reward_campaign_update_proposal) : undefined,
      binaryOptionsMarketLaunchProposals: Array.isArray(object?.binary_options_market_launch_proposals) ? object.binary_options_market_launch_proposals.map((e: any) => BinaryOptionsMarketLaunchProposal.fromAmino(e)) : [],
      binaryOptionsParamUpdateProposals: Array.isArray(object?.binary_options_param_update_proposals) ? object.binary_options_param_update_proposals.map((e: any) => BinaryOptionsMarketParamUpdateProposal.fromAmino(e)) : [],
      denomDecimalsUpdateProposal: object?.denom_decimals_update_proposal ? UpdateDenomDecimalsProposal.fromAmino(object.denom_decimals_update_proposal) : undefined
    };
  },
  toAmino(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.spotMarketParamUpdateProposals) {
      obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals.map(e => e ? SpotMarketParamUpdateProposal.toAmino(e) : undefined);
    } else {
      obj.spot_market_param_update_proposals = [];
    }
    if (message.derivativeMarketParamUpdateProposals) {
      obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals.map(e => e ? DerivativeMarketParamUpdateProposal.toAmino(e) : undefined);
    } else {
      obj.derivative_market_param_update_proposals = [];
    }
    if (message.spotMarketLaunchProposals) {
      obj.spot_market_launch_proposals = message.spotMarketLaunchProposals.map(e => e ? SpotMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.spot_market_launch_proposals = [];
    }
    if (message.perpetualMarketLaunchProposals) {
      obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals.map(e => e ? PerpetualMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.perpetual_market_launch_proposals = [];
    }
    if (message.expiryFuturesMarketLaunchProposals) {
      obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals.map(e => e ? ExpiryFuturesMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.expiry_futures_market_launch_proposals = [];
    }
    obj.trading_reward_campaign_update_proposal = message.tradingRewardCampaignUpdateProposal ? TradingRewardCampaignUpdateProposal.toAmino(message.tradingRewardCampaignUpdateProposal) : undefined;
    if (message.binaryOptionsMarketLaunchProposals) {
      obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals.map(e => e ? BinaryOptionsMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.binary_options_market_launch_proposals = [];
    }
    if (message.binaryOptionsParamUpdateProposals) {
      obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals.map(e => e ? BinaryOptionsMarketParamUpdateProposal.toAmino(e) : undefined);
    } else {
      obj.binary_options_param_update_proposals = [];
    }
    obj.denom_decimals_update_proposal = message.denomDecimalsUpdateProposal ? UpdateDenomDecimalsProposal.toAmino(message.denomDecimalsUpdateProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchExchangeModificationProposalAminoMsg): BatchExchangeModificationProposal {
    return BatchExchangeModificationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchExchangeModificationProposalProtoMsg): BatchExchangeModificationProposal {
    return BatchExchangeModificationProposal.decode(message.value);
  },
  toProto(message: BatchExchangeModificationProposal): Uint8Array {
    return BatchExchangeModificationProposal.encode(message).finish();
  },
  toProtoMsg(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
      value: BatchExchangeModificationProposal.encode(message).finish()
    };
  }
};
function createBaseSpotMarketLaunchProposal(): SpotMarketLaunchProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
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
  typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
  encode(message: SpotMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(50).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
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
  },
  fromAmino(object: SpotMarketLaunchProposalAmino): SpotMarketLaunchProposal {
    return {
      title: object.title,
      description: object.description,
      ticker: object.ticker,
      baseDenom: object.base_denom,
      quoteDenom: object.quote_denom,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size,
      makerFeeRate: object?.maker_fee_rate,
      takerFeeRate: object?.taker_fee_rate
    };
  },
  toAmino(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.ticker = message.ticker;
    obj.base_denom = message.baseDenom;
    obj.quote_denom = message.quoteDenom;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    return obj;
  },
  fromAminoMsg(object: SpotMarketLaunchProposalAminoMsg): SpotMarketLaunchProposal {
    return SpotMarketLaunchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketLaunchProposalProtoMsg): SpotMarketLaunchProposal {
    return SpotMarketLaunchProposal.decode(message.value);
  },
  toProto(message: SpotMarketLaunchProposal): Uint8Array {
    return SpotMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
      value: SpotMarketLaunchProposal.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketLaunchProposal(): PerpetualMarketLaunchProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
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
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
  encode(message: PerpetualMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(74).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
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
  },
  fromAmino(object: PerpetualMarketLaunchProposalAmino): PerpetualMarketLaunchProposal {
    return {
      title: object.title,
      description: object.description,
      ticker: object.ticker,
      quoteDenom: object.quote_denom,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleScaleFactor: object.oracle_scale_factor,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      initialMarginRatio: object.initial_margin_ratio,
      maintenanceMarginRatio: object.maintenance_margin_ratio,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.oracle_type = message.oracleType;
    obj.initial_margin_ratio = message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketLaunchProposalAminoMsg): PerpetualMarketLaunchProposal {
    return PerpetualMarketLaunchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketLaunchProposalProtoMsg): PerpetualMarketLaunchProposal {
    return PerpetualMarketLaunchProposal.decode(message.value);
  },
  toProto(message: PerpetualMarketLaunchProposal): Uint8Array {
    return PerpetualMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
      value: PerpetualMarketLaunchProposal.encode(message).finish()
    };
  }
};
function createBaseBinaryOptionsMarketLaunchProposal(): BinaryOptionsMarketLaunchProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
    title: "",
    description: "",
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    admin: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const BinaryOptionsMarketLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
  encode(message: BinaryOptionsMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(64).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(72).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(82).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(90).string(message.quoteDenom);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
      expirationTimestamp: isSet(object.expirationTimestamp) ? BigInt(object.expirationTimestamp.toString()) : BigInt(0),
      settlementTimestamp: isSet(object.settlementTimestamp) ? BigInt(object.settlementTimestamp.toString()) : BigInt(0),
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
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  },
  fromAmino(object: BinaryOptionsMarketLaunchProposalAmino): BinaryOptionsMarketLaunchProposal {
    return {
      title: object.title,
      description: object.description,
      ticker: object.ticker,
      oracleSymbol: object.oracle_symbol,
      oracleProvider: object.oracle_provider,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      oracleScaleFactor: object.oracle_scale_factor,
      expirationTimestamp: BigInt(object.expiration_timestamp),
      settlementTimestamp: BigInt(object.settlement_timestamp),
      admin: object.admin,
      quoteDenom: object.quote_denom,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.ticker = message.ticker;
    obj.oracle_symbol = message.oracleSymbol;
    obj.oracle_provider = message.oracleProvider;
    obj.oracle_type = message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.expiration_timestamp = message.expirationTimestamp ? message.expirationTimestamp.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp ? message.settlementTimestamp.toString() : undefined;
    obj.admin = message.admin;
    obj.quote_denom = message.quoteDenom;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: BinaryOptionsMarketLaunchProposalAminoMsg): BinaryOptionsMarketLaunchProposal {
    return BinaryOptionsMarketLaunchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BinaryOptionsMarketLaunchProposalProtoMsg): BinaryOptionsMarketLaunchProposal {
    return BinaryOptionsMarketLaunchProposal.decode(message.value);
  },
  toProto(message: BinaryOptionsMarketLaunchProposal): Uint8Array {
    return BinaryOptionsMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
      value: BinaryOptionsMarketLaunchProposal.encode(message).finish()
    };
  }
};
function createBaseExpiryFuturesMarketLaunchProposal(): ExpiryFuturesMarketLaunchProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    expiry: BigInt(0),
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}
export const ExpiryFuturesMarketLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
  encode(message: ExpiryFuturesMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.expiry !== BigInt(0)) {
      writer.uint32(72).int64(message.expiry);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0),
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
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  },
  fromAmino(object: ExpiryFuturesMarketLaunchProposalAmino): ExpiryFuturesMarketLaunchProposal {
    return {
      title: object.title,
      description: object.description,
      ticker: object.ticker,
      quoteDenom: object.quote_denom,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleScaleFactor: object.oracle_scale_factor,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      expiry: BigInt(object.expiry),
      initialMarginRatio: object.initial_margin_ratio,
      maintenanceMarginRatio: object.maintenance_margin_ratio,
      makerFeeRate: object.maker_fee_rate,
      takerFeeRate: object.taker_fee_rate,
      minPriceTickSize: object.min_price_tick_size,
      minQuantityTickSize: object.min_quantity_tick_size
    };
  },
  toAmino(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.oracle_type = message.oracleType;
    obj.expiry = message.expiry ? message.expiry.toString() : undefined;
    obj.initial_margin_ratio = message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    return obj;
  },
  fromAminoMsg(object: ExpiryFuturesMarketLaunchProposalAminoMsg): ExpiryFuturesMarketLaunchProposal {
    return ExpiryFuturesMarketLaunchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiryFuturesMarketLaunchProposalProtoMsg): ExpiryFuturesMarketLaunchProposal {
    return ExpiryFuturesMarketLaunchProposal.decode(message.value);
  },
  toProto(message: ExpiryFuturesMarketLaunchProposal): Uint8Array {
    return ExpiryFuturesMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
      value: ExpiryFuturesMarketLaunchProposal.encode(message).finish()
    };
  }
};
function createBaseDerivativeMarketParamUpdateProposal(): DerivativeMarketParamUpdateProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
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
    oracleParams: OracleParams.fromPartial({})
  };
}
export const DerivativeMarketParamUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
  encode(message: DerivativeMarketParamUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(34).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.HourlyInterestRate !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.HourlyInterestRate, 18).atomics);
    }
    if (message.HourlyFundingRateCap !== undefined) {
      writer.uint32(98).string(Decimal.fromUserInput(message.HourlyFundingRateCap, 18).atomics);
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
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
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
  },
  fromAmino(object: DerivativeMarketParamUpdateProposalAmino): DerivativeMarketParamUpdateProposal {
    return {
      title: object.title,
      description: object.description,
      marketId: object.market_id,
      initialMarginRatio: object?.initial_margin_ratio,
      maintenanceMarginRatio: object?.maintenance_margin_ratio,
      makerFeeRate: object?.maker_fee_rate,
      takerFeeRate: object?.taker_fee_rate,
      relayerFeeShareRate: object?.relayer_fee_share_rate,
      minPriceTickSize: object?.min_price_tick_size,
      minQuantityTickSize: object?.min_quantity_tick_size,
      HourlyInterestRate: object?.HourlyInterestRate,
      HourlyFundingRateCap: object?.HourlyFundingRateCap,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      oracleParams: object?.oracle_params ? OracleParams.fromAmino(object.oracle_params) : undefined
    };
  },
  toAmino(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.market_id = message.marketId;
    obj.initial_margin_ratio = message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    obj.HourlyInterestRate = message.HourlyInterestRate;
    obj.HourlyFundingRateCap = message.HourlyFundingRateCap;
    obj.status = message.status;
    obj.oracle_params = message.oracleParams ? OracleParams.toAmino(message.oracleParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketParamUpdateProposalAminoMsg): DerivativeMarketParamUpdateProposal {
    return DerivativeMarketParamUpdateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketParamUpdateProposalProtoMsg): DerivativeMarketParamUpdateProposal {
    return DerivativeMarketParamUpdateProposal.decode(message.value);
  },
  toProto(message: DerivativeMarketParamUpdateProposal): Uint8Array {
    return DerivativeMarketParamUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
      value: DerivativeMarketParamUpdateProposal.encode(message).finish()
    };
  }
};
function createBaseMarketForcedSettlementProposal(): MarketForcedSettlementProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
    title: "",
    description: "",
    marketId: "",
    settlementPrice: undefined
  };
}
export const MarketForcedSettlementProposal = {
  typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
  encode(message: MarketForcedSettlementProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(34).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
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
  },
  fromAmino(object: MarketForcedSettlementProposalAmino): MarketForcedSettlementProposal {
    return {
      title: object.title,
      description: object.description,
      marketId: object.market_id,
      settlementPrice: object?.settlement_price
    };
  },
  toAmino(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.market_id = message.marketId;
    obj.settlement_price = message.settlementPrice;
    return obj;
  },
  fromAminoMsg(object: MarketForcedSettlementProposalAminoMsg): MarketForcedSettlementProposal {
    return MarketForcedSettlementProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketForcedSettlementProposalProtoMsg): MarketForcedSettlementProposal {
    return MarketForcedSettlementProposal.decode(message.value);
  },
  toProto(message: MarketForcedSettlementProposal): Uint8Array {
    return MarketForcedSettlementProposal.encode(message).finish();
  },
  toProtoMsg(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
      value: MarketForcedSettlementProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateDenomDecimalsProposal(): UpdateDenomDecimalsProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
    title: "",
    description: "",
    denomDecimals: []
  };
}
export const UpdateDenomDecimalsProposal = {
  typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
  encode(message: UpdateDenomDecimalsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: UpdateDenomDecimalsProposalAmino): UpdateDenomDecimalsProposal {
    return {
      title: object.title,
      description: object.description,
      denomDecimals: Array.isArray(object?.denom_decimals) ? object.denom_decimals.map((e: any) => DenomDecimals.fromAmino(e)) : []
    };
  },
  toAmino(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.denomDecimals) {
      obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
    } else {
      obj.denom_decimals = [];
    }
    return obj;
  },
  fromAminoMsg(object: UpdateDenomDecimalsProposalAminoMsg): UpdateDenomDecimalsProposal {
    return UpdateDenomDecimalsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateDenomDecimalsProposalProtoMsg): UpdateDenomDecimalsProposal {
    return UpdateDenomDecimalsProposal.decode(message.value);
  },
  toProto(message: UpdateDenomDecimalsProposal): Uint8Array {
    return UpdateDenomDecimalsProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
      value: UpdateDenomDecimalsProposal.encode(message).finish()
    };
  }
};
function createBaseBinaryOptionsMarketParamUpdateProposal(): BinaryOptionsMarketParamUpdateProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    settlementPrice: undefined,
    admin: "",
    status: 0,
    oracleParams: ProviderOracleParams.fromPartial({})
  };
}
export const BinaryOptionsMarketParamUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
  encode(message: BinaryOptionsMarketParamUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
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
      expirationTimestamp: isSet(object.expirationTimestamp) ? BigInt(object.expirationTimestamp.toString()) : BigInt(0),
      settlementTimestamp: isSet(object.settlementTimestamp) ? BigInt(object.settlementTimestamp.toString()) : BigInt(0),
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : undefined,
      admin: isSet(object.admin) ? String(object.admin) : "",
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
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
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.admin = object.admin ?? "";
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? ProviderOracleParams.fromPartial(object.oracleParams) : undefined;
    return message;
  },
  fromAmino(object: BinaryOptionsMarketParamUpdateProposalAmino): BinaryOptionsMarketParamUpdateProposal {
    return {
      title: object.title,
      description: object.description,
      marketId: object.market_id,
      makerFeeRate: object?.maker_fee_rate,
      takerFeeRate: object?.taker_fee_rate,
      relayerFeeShareRate: object?.relayer_fee_share_rate,
      minPriceTickSize: object?.min_price_tick_size,
      minQuantityTickSize: object?.min_quantity_tick_size,
      expirationTimestamp: BigInt(object.expiration_timestamp),
      settlementTimestamp: BigInt(object.settlement_timestamp),
      settlementPrice: object?.settlement_price,
      admin: object.admin,
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1,
      oracleParams: object?.oracle_params ? ProviderOracleParams.fromAmino(object.oracle_params) : undefined
    };
  },
  toAmino(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.market_id = message.marketId;
    obj.maker_fee_rate = message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate;
    obj.min_price_tick_size = message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize;
    obj.expiration_timestamp = message.expirationTimestamp ? message.expirationTimestamp.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp ? message.settlementTimestamp.toString() : undefined;
    obj.settlement_price = message.settlementPrice;
    obj.admin = message.admin;
    obj.status = message.status;
    obj.oracle_params = message.oracleParams ? ProviderOracleParams.toAmino(message.oracleParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: BinaryOptionsMarketParamUpdateProposalAminoMsg): BinaryOptionsMarketParamUpdateProposal {
    return BinaryOptionsMarketParamUpdateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BinaryOptionsMarketParamUpdateProposalProtoMsg): BinaryOptionsMarketParamUpdateProposal {
    return BinaryOptionsMarketParamUpdateProposal.decode(message.value);
  },
  toProto(message: BinaryOptionsMarketParamUpdateProposal): Uint8Array {
    return BinaryOptionsMarketParamUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
      value: BinaryOptionsMarketParamUpdateProposal.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
  encode(message: ProviderOracleParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1
    };
  },
  fromPartial(object: Partial<ProviderOracleParams>): ProviderOracleParams {
    const message = createBaseProviderOracleParams();
    message.symbol = object.symbol ?? "";
    message.provider = object.provider ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  },
  fromAmino(object: ProviderOracleParamsAmino): ProviderOracleParams {
    return {
      symbol: object.symbol,
      provider: object.provider,
      oracleScaleFactor: object.oracle_scale_factor,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1
    };
  },
  toAmino(message: ProviderOracleParams): ProviderOracleParamsAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.provider = message.provider;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.oracle_type = message.oracleType;
    return obj;
  },
  fromAminoMsg(object: ProviderOracleParamsAminoMsg): ProviderOracleParams {
    return ProviderOracleParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderOracleParamsProtoMsg): ProviderOracleParams {
    return ProviderOracleParams.decode(message.value);
  },
  toProto(message: ProviderOracleParams): Uint8Array {
    return ProviderOracleParams.encode(message).finish();
  },
  toProtoMsg(message: ProviderOracleParams): ProviderOracleParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
      value: ProviderOracleParams.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.OracleParams",
  encode(message: OracleParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1
    };
  },
  fromPartial(object: Partial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  },
  fromAmino(object: OracleParamsAmino): OracleParams {
    return {
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleScaleFactor: object.oracle_scale_factor,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1
    };
  },
  toAmino(message: OracleParams): OracleParamsAmino {
    const obj: any = {};
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor;
    obj.oracle_type = message.oracleType;
    return obj;
  },
  fromAminoMsg(object: OracleParamsAminoMsg): OracleParams {
    return OracleParams.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleParamsProtoMsg): OracleParams {
    return OracleParams.decode(message.value);
  },
  toProto(message: OracleParams): Uint8Array {
    return OracleParams.encode(message).finish();
  },
  toProtoMsg(message: OracleParams): OracleParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OracleParams",
      value: OracleParams.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCampaignLaunchProposal(): TradingRewardCampaignLaunchProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
    title: "",
    description: "",
    campaignInfo: TradingRewardCampaignInfo.fromPartial({}),
    campaignRewardPools: []
  };
}
export const TradingRewardCampaignLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
  encode(message: TradingRewardCampaignLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TradingRewardCampaignLaunchProposalAmino): TradingRewardCampaignLaunchProposal {
    return {
      title: object.title,
      description: object.description,
      campaignInfo: object?.campaign_info ? TradingRewardCampaignInfo.fromAmino(object.campaign_info) : undefined,
      campaignRewardPools: Array.isArray(object?.campaign_reward_pools) ? object.campaign_reward_pools.map((e: any) => CampaignRewardPool.fromAmino(e)) : []
    };
  },
  toAmino(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
    if (message.campaignRewardPools) {
      obj.campaign_reward_pools = message.campaignRewardPools.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignLaunchProposalAminoMsg): TradingRewardCampaignLaunchProposal {
    return TradingRewardCampaignLaunchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignLaunchProposalProtoMsg): TradingRewardCampaignLaunchProposal {
    return TradingRewardCampaignLaunchProposal.decode(message.value);
  },
  toProto(message: TradingRewardCampaignLaunchProposal): Uint8Array {
    return TradingRewardCampaignLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
      value: TradingRewardCampaignLaunchProposal.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCampaignUpdateProposal(): TradingRewardCampaignUpdateProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
    title: "",
    description: "",
    campaignInfo: TradingRewardCampaignInfo.fromPartial({}),
    campaignRewardPoolsAdditions: [],
    campaignRewardPoolsUpdates: []
  };
}
export const TradingRewardCampaignUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
  encode(message: TradingRewardCampaignUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TradingRewardCampaignUpdateProposalAmino): TradingRewardCampaignUpdateProposal {
    return {
      title: object.title,
      description: object.description,
      campaignInfo: object?.campaign_info ? TradingRewardCampaignInfo.fromAmino(object.campaign_info) : undefined,
      campaignRewardPoolsAdditions: Array.isArray(object?.campaign_reward_pools_additions) ? object.campaign_reward_pools_additions.map((e: any) => CampaignRewardPool.fromAmino(e)) : [],
      campaignRewardPoolsUpdates: Array.isArray(object?.campaign_reward_pools_updates) ? object.campaign_reward_pools_updates.map((e: any) => CampaignRewardPool.fromAmino(e)) : []
    };
  },
  toAmino(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
    if (message.campaignRewardPoolsAdditions) {
      obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools_additions = [];
    }
    if (message.campaignRewardPoolsUpdates) {
      obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignUpdateProposalAminoMsg): TradingRewardCampaignUpdateProposal {
    return TradingRewardCampaignUpdateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignUpdateProposalProtoMsg): TradingRewardCampaignUpdateProposal {
    return TradingRewardCampaignUpdateProposal.decode(message.value);
  },
  toProto(message: TradingRewardCampaignUpdateProposal): Uint8Array {
    return TradingRewardCampaignUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
      value: TradingRewardCampaignUpdateProposal.encode(message).finish()
    };
  }
};
function createBaseRewardPointUpdate(): RewardPointUpdate {
  return {
    accountAddress: "",
    newPoints: ""
  };
}
export const RewardPointUpdate = {
  typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
  encode(message: RewardPointUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.newPoints !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.newPoints, 18).atomics);
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
  },
  fromAmino(object: RewardPointUpdateAmino): RewardPointUpdate {
    return {
      accountAddress: object.account_address,
      newPoints: object.new_points
    };
  },
  toAmino(message: RewardPointUpdate): RewardPointUpdateAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    obj.new_points = message.newPoints;
    return obj;
  },
  fromAminoMsg(object: RewardPointUpdateAminoMsg): RewardPointUpdate {
    return RewardPointUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPointUpdateProtoMsg): RewardPointUpdate {
    return RewardPointUpdate.decode(message.value);
  },
  toProto(message: RewardPointUpdate): Uint8Array {
    return RewardPointUpdate.encode(message).finish();
  },
  toProtoMsg(message: RewardPointUpdate): RewardPointUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
      value: RewardPointUpdate.encode(message).finish()
    };
  }
};
function createBaseTradingRewardPendingPointsUpdateProposal(): TradingRewardPendingPointsUpdateProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
    title: "",
    description: "",
    pendingPoolTimestamp: BigInt(0),
    rewardPointUpdates: []
  };
}
export const TradingRewardPendingPointsUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
  encode(message: TradingRewardPendingPointsUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pendingPoolTimestamp !== BigInt(0)) {
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
      pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0),
      rewardPointUpdates: Array.isArray(object?.rewardPointUpdates) ? object.rewardPointUpdates.map((e: any) => RewardPointUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal {
    const message = createBaseTradingRewardPendingPointsUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
    message.rewardPointUpdates = object.rewardPointUpdates?.map(e => RewardPointUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardPendingPointsUpdateProposalAmino): TradingRewardPendingPointsUpdateProposal {
    return {
      title: object.title,
      description: object.description,
      pendingPoolTimestamp: BigInt(object.pending_pool_timestamp),
      rewardPointUpdates: Array.isArray(object?.reward_point_updates) ? object.reward_point_updates.map((e: any) => RewardPointUpdate.fromAmino(e)) : []
    };
  },
  toAmino(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.pending_pool_timestamp = message.pendingPoolTimestamp ? message.pendingPoolTimestamp.toString() : undefined;
    if (message.rewardPointUpdates) {
      obj.reward_point_updates = message.rewardPointUpdates.map(e => e ? RewardPointUpdate.toAmino(e) : undefined);
    } else {
      obj.reward_point_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardPendingPointsUpdateProposalAminoMsg): TradingRewardPendingPointsUpdateProposal {
    return TradingRewardPendingPointsUpdateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardPendingPointsUpdateProposalProtoMsg): TradingRewardPendingPointsUpdateProposal {
    return TradingRewardPendingPointsUpdateProposal.decode(message.value);
  },
  toProto(message: TradingRewardPendingPointsUpdateProposal): Uint8Array {
    return TradingRewardPendingPointsUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
      value: TradingRewardPendingPointsUpdateProposal.encode(message).finish()
    };
  }
};
function createBaseFeeDiscountProposal(): FeeDiscountProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
    title: "",
    description: "",
    schedule: FeeDiscountSchedule.fromPartial({})
  };
}
export const FeeDiscountProposal = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
  encode(message: FeeDiscountProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeDiscountProposalAmino): FeeDiscountProposal {
    return {
      title: object.title,
      description: object.description,
      schedule: object?.schedule ? FeeDiscountSchedule.fromAmino(object.schedule) : undefined
    };
  },
  toAmino(message: FeeDiscountProposal): FeeDiscountProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.schedule = message.schedule ? FeeDiscountSchedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountProposalAminoMsg): FeeDiscountProposal {
    return FeeDiscountProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountProposalProtoMsg): FeeDiscountProposal {
    return FeeDiscountProposal.decode(message.value);
  },
  toProto(message: FeeDiscountProposal): Uint8Array {
    return FeeDiscountProposal.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountProposal): FeeDiscountProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
      value: FeeDiscountProposal.encode(message).finish()
    };
  }
};
function createBaseBatchCommunityPoolSpendProposal(): BatchCommunityPoolSpendProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
    title: "",
    description: "",
    proposals: []
  };
}
export const BatchCommunityPoolSpendProposal = {
  typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
  encode(message: BatchCommunityPoolSpendProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BatchCommunityPoolSpendProposalAmino): BatchCommunityPoolSpendProposal {
    return {
      title: object.title,
      description: object.description,
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => CommunityPoolSpendProposal.fromAmino(e)) : []
    };
  },
  toAmino(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? CommunityPoolSpendProposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchCommunityPoolSpendProposalAminoMsg): BatchCommunityPoolSpendProposal {
    return BatchCommunityPoolSpendProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCommunityPoolSpendProposalProtoMsg): BatchCommunityPoolSpendProposal {
    return BatchCommunityPoolSpendProposal.decode(message.value);
  },
  toProto(message: BatchCommunityPoolSpendProposal): Uint8Array {
    return BatchCommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
      value: BatchCommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
function createBaseMsgRewardsOptOut(): MsgRewardsOptOut {
  return {
    sender: ""
  };
}
export const MsgRewardsOptOut = {
  typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
  encode(message: MsgRewardsOptOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgRewardsOptOutAmino): MsgRewardsOptOut {
    return {
      sender: object.sender
    };
  },
  toAmino(message: MsgRewardsOptOut): MsgRewardsOptOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRewardsOptOutAminoMsg): MsgRewardsOptOut {
    return MsgRewardsOptOut.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRewardsOptOutProtoMsg): MsgRewardsOptOut {
    return MsgRewardsOptOut.decode(message.value);
  },
  toProto(message: MsgRewardsOptOut): Uint8Array {
    return MsgRewardsOptOut.encode(message).finish();
  },
  toProtoMsg(message: MsgRewardsOptOut): MsgRewardsOptOutProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
      value: MsgRewardsOptOut.encode(message).finish()
    };
  }
};
function createBaseMsgRewardsOptOutResponse(): MsgRewardsOptOutResponse {
  return {};
}
export const MsgRewardsOptOutResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse",
  encode(_: MsgRewardsOptOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRewardsOptOutResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse {
    const message = createBaseMsgRewardsOptOutResponse();
    return message;
  },
  fromAmino(_: MsgRewardsOptOutResponseAmino): MsgRewardsOptOutResponse {
    return {};
  },
  toAmino(_: MsgRewardsOptOutResponse): MsgRewardsOptOutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRewardsOptOutResponseAminoMsg): MsgRewardsOptOutResponse {
    return MsgRewardsOptOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRewardsOptOutResponseProtoMsg): MsgRewardsOptOutResponse {
    return MsgRewardsOptOutResponse.decode(message.value);
  },
  toProto(message: MsgRewardsOptOutResponse): Uint8Array {
    return MsgRewardsOptOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRewardsOptOutResponse): MsgRewardsOptOutResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse",
      value: MsgRewardsOptOutResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFunds",
  encode(message: MsgReclaimLockedFunds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgReclaimLockedFundsAmino): MsgReclaimLockedFunds {
    return {
      sender: object.sender,
      lockedAccountPubKey: object.lockedAccountPubKey,
      signature: object.signature
    };
  },
  toAmino(message: MsgReclaimLockedFunds): MsgReclaimLockedFundsAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lockedAccountPubKey = message.lockedAccountPubKey;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgReclaimLockedFundsAminoMsg): MsgReclaimLockedFunds {
    return MsgReclaimLockedFunds.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReclaimLockedFundsProtoMsg): MsgReclaimLockedFunds {
    return MsgReclaimLockedFunds.decode(message.value);
  },
  toProto(message: MsgReclaimLockedFunds): Uint8Array {
    return MsgReclaimLockedFunds.encode(message).finish();
  },
  toProtoMsg(message: MsgReclaimLockedFunds): MsgReclaimLockedFundsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFunds",
      value: MsgReclaimLockedFunds.encode(message).finish()
    };
  }
};
function createBaseMsgReclaimLockedFundsResponse(): MsgReclaimLockedFundsResponse {
  return {};
}
export const MsgReclaimLockedFundsResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFundsResponse",
  encode(_: MsgReclaimLockedFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgReclaimLockedFundsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReclaimLockedFundsResponse>): MsgReclaimLockedFundsResponse {
    const message = createBaseMsgReclaimLockedFundsResponse();
    return message;
  },
  fromAmino(_: MsgReclaimLockedFundsResponseAmino): MsgReclaimLockedFundsResponse {
    return {};
  },
  toAmino(_: MsgReclaimLockedFundsResponse): MsgReclaimLockedFundsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReclaimLockedFundsResponseAminoMsg): MsgReclaimLockedFundsResponse {
    return MsgReclaimLockedFundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReclaimLockedFundsResponseProtoMsg): MsgReclaimLockedFundsResponse {
    return MsgReclaimLockedFundsResponse.decode(message.value);
  },
  toProto(message: MsgReclaimLockedFundsResponse): Uint8Array {
    return MsgReclaimLockedFundsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReclaimLockedFundsResponse): MsgReclaimLockedFundsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFundsResponse",
      value: MsgReclaimLockedFundsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSignData(): MsgSignData {
  return {
    Signer: new Uint8Array(),
    Data: new Uint8Array()
  };
}
export const MsgSignData = {
  typeUrl: "/injective.exchange.v1beta1.MsgSignData",
  encode(message: MsgSignData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgSignDataAmino): MsgSignData {
    return {
      Signer: object.Signer,
      Data: object.Data
    };
  },
  toAmino(message: MsgSignData): MsgSignDataAmino {
    const obj: any = {};
    obj.Signer = message.Signer;
    obj.Data = message.Data;
    return obj;
  },
  fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData {
    return MsgSignData.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData {
    return MsgSignData.decode(message.value);
  },
  toProto(message: MsgSignData): Uint8Array {
    return MsgSignData.encode(message).finish();
  },
  toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgSignData",
      value: MsgSignData.encode(message).finish()
    };
  }
};
function createBaseMsgSignDoc(): MsgSignDoc {
  return {
    signType: "",
    value: MsgSignData.fromPartial({})
  };
}
export const MsgSignDoc = {
  typeUrl: "/injective.exchange.v1beta1.MsgSignDoc",
  encode(message: MsgSignDoc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgSignDocAmino): MsgSignDoc {
    return {
      signType: object.sign_type,
      value: object?.value ? MsgSignData.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: MsgSignDoc): MsgSignDocAmino {
    const obj: any = {};
    obj.sign_type = message.signType;
    obj.value = message.value ? MsgSignData.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSignDocAminoMsg): MsgSignDoc {
    return MsgSignDoc.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignDocProtoMsg): MsgSignDoc {
    return MsgSignDoc.decode(message.value);
  },
  toProto(message: MsgSignDoc): Uint8Array {
    return MsgSignDoc.encode(message).finish();
  },
  toProtoMsg(message: MsgSignDoc): MsgSignDocProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgSignDoc",
      value: MsgSignDoc.encode(message).finish()
    };
  }
};
function createBaseMsgAdminUpdateBinaryOptionsMarket(): MsgAdminUpdateBinaryOptionsMarket {
  return {
    sender: "",
    marketId: "",
    settlementPrice: undefined,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    status: 0
  };
}
export const MsgAdminUpdateBinaryOptionsMarket = {
  typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
  encode(message: MsgAdminUpdateBinaryOptionsMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
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
      expirationTimestamp: isSet(object.expirationTimestamp) ? BigInt(object.expirationTimestamp.toString()) : BigInt(0),
      settlementTimestamp: isSet(object.settlementTimestamp) ? BigInt(object.settlementTimestamp.toString()) : BigInt(0),
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket {
    const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgAdminUpdateBinaryOptionsMarketAmino): MsgAdminUpdateBinaryOptionsMarket {
    return {
      sender: object.sender,
      marketId: object.market_id,
      settlementPrice: object?.settlement_price,
      expirationTimestamp: BigInt(object.expiration_timestamp),
      settlementTimestamp: BigInt(object.settlement_timestamp),
      status: isSet(object.status) ? marketStatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: MsgAdminUpdateBinaryOptionsMarket): MsgAdminUpdateBinaryOptionsMarketAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.settlement_price = message.settlementPrice;
    obj.expiration_timestamp = message.expirationTimestamp ? message.expirationTimestamp.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp ? message.settlementTimestamp.toString() : undefined;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: MsgAdminUpdateBinaryOptionsMarketAminoMsg): MsgAdminUpdateBinaryOptionsMarket {
    return MsgAdminUpdateBinaryOptionsMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminUpdateBinaryOptionsMarketProtoMsg): MsgAdminUpdateBinaryOptionsMarket {
    return MsgAdminUpdateBinaryOptionsMarket.decode(message.value);
  },
  toProto(message: MsgAdminUpdateBinaryOptionsMarket): Uint8Array {
    return MsgAdminUpdateBinaryOptionsMarket.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminUpdateBinaryOptionsMarket): MsgAdminUpdateBinaryOptionsMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
      value: MsgAdminUpdateBinaryOptionsMarket.encode(message).finish()
    };
  }
};
function createBaseMsgAdminUpdateBinaryOptionsMarketResponse(): MsgAdminUpdateBinaryOptionsMarketResponse {
  return {};
}
export const MsgAdminUpdateBinaryOptionsMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse",
  encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAdminUpdateBinaryOptionsMarketResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse {
    const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
    return message;
  },
  fromAmino(_: MsgAdminUpdateBinaryOptionsMarketResponseAmino): MsgAdminUpdateBinaryOptionsMarketResponse {
    return {};
  },
  toAmino(_: MsgAdminUpdateBinaryOptionsMarketResponse): MsgAdminUpdateBinaryOptionsMarketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAdminUpdateBinaryOptionsMarketResponseAminoMsg): MsgAdminUpdateBinaryOptionsMarketResponse {
    return MsgAdminUpdateBinaryOptionsMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg): MsgAdminUpdateBinaryOptionsMarketResponse {
    return MsgAdminUpdateBinaryOptionsMarketResponse.decode(message.value);
  },
  toProto(message: MsgAdminUpdateBinaryOptionsMarketResponse): Uint8Array {
    return MsgAdminUpdateBinaryOptionsMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminUpdateBinaryOptionsMarketResponse): MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse",
      value: MsgAdminUpdateBinaryOptionsMarketResponse.encode(message).finish()
    };
  }
};
function createBaseAtomicMarketOrderFeeMultiplierScheduleProposal(): AtomicMarketOrderFeeMultiplierScheduleProposal {
  return {
    $typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
    title: "",
    description: "",
    marketFeeMultipliers: []
  };
}
export const AtomicMarketOrderFeeMultiplierScheduleProposal = {
  typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
  encode(message: AtomicMarketOrderFeeMultiplierScheduleProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AtomicMarketOrderFeeMultiplierScheduleProposalAmino): AtomicMarketOrderFeeMultiplierScheduleProposal {
    return {
      title: object.title,
      description: object.description,
      marketFeeMultipliers: Array.isArray(object?.market_fee_multipliers) ? object.market_fee_multipliers.map((e: any) => MarketFeeMultiplier.fromAmino(e)) : []
    };
  },
  toAmino(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.marketFeeMultipliers) {
      obj.market_fee_multipliers = message.marketFeeMultipliers.map(e => e ? MarketFeeMultiplier.toAmino(e) : undefined);
    } else {
      obj.market_fee_multipliers = [];
    }
    return obj;
  },
  fromAminoMsg(object: AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg): AtomicMarketOrderFeeMultiplierScheduleProposal {
    return AtomicMarketOrderFeeMultiplierScheduleProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg): AtomicMarketOrderFeeMultiplierScheduleProposal {
    return AtomicMarketOrderFeeMultiplierScheduleProposal.decode(message.value);
  },
  toProto(message: AtomicMarketOrderFeeMultiplierScheduleProposal): Uint8Array {
    return AtomicMarketOrderFeeMultiplierScheduleProposal.encode(message).finish();
  },
  toProtoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
      value: AtomicMarketOrderFeeMultiplierScheduleProposal.encode(message).finish()
    };
  }
};