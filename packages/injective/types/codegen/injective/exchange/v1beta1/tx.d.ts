import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { SpotOrder, SpotOrderSDKType, DerivativeOrder, DerivativeOrderSDKType, MarketStatus, PositionDelta, PositionDeltaSDKType, DenomDecimals, DenomDecimalsSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, MarketFeeMultiplier, MarketFeeMultiplierSDKType } from "./exchange";
import { Params, ParamsSDKType, CommunityPoolSpendProposal, CommunityPoolSpendProposalSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum ExchangeType {
    EXCHANGE_UNSPECIFIED = 0,
    SPOT = 1,
    DERIVATIVES = 2,
    UNRECOGNIZED = -1
}
export declare const ExchangeTypeSDKType: typeof ExchangeType;
export declare function exchangeTypeFromJSON(object: any): ExchangeType;
export declare function exchangeTypeToJSON(object: ExchangeType): string;
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
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
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
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
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
export interface MsgWithdrawResponse {
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
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
export interface MsgInstantSpotMarketLaunchResponse {
}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 */
export interface MsgInstantSpotMarketLaunchResponseSDKType {
}
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
export interface MsgInstantPerpetualMarketLaunchResponse {
}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 */
export interface MsgInstantPerpetualMarketLaunchResponseSDKType {
}
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
export interface MsgInstantBinaryOptionsMarketLaunchResponse {
}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 */
export interface MsgInstantBinaryOptionsMarketLaunchResponseSDKType {
}
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
export interface MsgInstantExpiryFuturesMarketLaunchResponse {
}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 */
export interface MsgInstantExpiryFuturesMarketLaunchResponseSDKType {
}
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
export interface MsgCancelSpotOrderResponse {
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseSDKType {
}
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
export interface MsgCancelDerivativeOrderResponse {
}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgCancelDerivativeOrderResponseSDKType {
}
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
export interface MsgCancelBinaryOptionsOrderResponse {
}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 */
export interface MsgCancelBinaryOptionsOrderResponseSDKType {
}
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
export interface MsgSubaccountTransferResponse {
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponseSDKType {
}
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
export interface MsgExternalTransferResponse {
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponseSDKType {
}
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
export interface MsgLiquidatePositionResponse {
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponseSDKType {
}
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
export interface MsgIncreasePositionMarginResponse {
}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 */
export interface MsgIncreasePositionMarginResponseSDKType {
}
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
export interface MsgRewardsOptOutResponse {
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponseSDKType {
}
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
export interface MsgReclaimLockedFundsResponse {
}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 */
export interface MsgReclaimLockedFundsResponseSDKType {
}
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
export interface MsgAdminUpdateBinaryOptionsMarketResponse {
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponseSDKType {
}
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
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDepositResponse;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawResponse;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgCreateSpotLimitOrder: {
    encode(message: MsgCreateSpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateSpotLimitOrder;
    fromPartial(object: Partial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder;
};
export declare const MsgCreateSpotLimitOrderResponse: {
    encode(message: MsgCreateSpotLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateSpotLimitOrderResponse;
    fromPartial(object: Partial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse;
};
export declare const MsgBatchCreateSpotLimitOrders: {
    encode(message: MsgBatchCreateSpotLimitOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCreateSpotLimitOrders;
    fromPartial(object: Partial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders;
};
export declare const MsgBatchCreateSpotLimitOrdersResponse: {
    encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCreateSpotLimitOrdersResponse;
    fromPartial(object: Partial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse;
};
export declare const MsgInstantSpotMarketLaunch: {
    encode(message: MsgInstantSpotMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstantSpotMarketLaunch;
    fromPartial(object: Partial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch;
};
export declare const MsgInstantSpotMarketLaunchResponse: {
    encode(_: MsgInstantSpotMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgInstantSpotMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse;
};
export declare const MsgInstantPerpetualMarketLaunch: {
    encode(message: MsgInstantPerpetualMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstantPerpetualMarketLaunch;
    fromPartial(object: Partial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch;
};
export declare const MsgInstantPerpetualMarketLaunchResponse: {
    encode(_: MsgInstantPerpetualMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgInstantPerpetualMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse;
};
export declare const MsgInstantBinaryOptionsMarketLaunch: {
    encode(message: MsgInstantBinaryOptionsMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstantBinaryOptionsMarketLaunch;
    fromPartial(object: Partial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch;
};
export declare const MsgInstantBinaryOptionsMarketLaunchResponse: {
    encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse;
};
export declare const MsgInstantExpiryFuturesMarketLaunch: {
    encode(message: MsgInstantExpiryFuturesMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstantExpiryFuturesMarketLaunch;
    fromPartial(object: Partial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch;
};
export declare const MsgInstantExpiryFuturesMarketLaunchResponse: {
    encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse;
};
export declare const MsgCreateSpotMarketOrder: {
    encode(message: MsgCreateSpotMarketOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateSpotMarketOrder;
    fromPartial(object: Partial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder;
};
export declare const MsgCreateSpotMarketOrderResponse: {
    encode(message: MsgCreateSpotMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateSpotMarketOrderResponse;
    fromPartial(object: Partial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse;
};
export declare const SpotMarketOrderResults: {
    encode(message: SpotMarketOrderResults, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotMarketOrderResults;
    fromPartial(object: Partial<SpotMarketOrderResults>): SpotMarketOrderResults;
};
export declare const MsgCreateDerivativeLimitOrder: {
    encode(message: MsgCreateDerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDerivativeLimitOrder;
    fromPartial(object: Partial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder;
};
export declare const MsgCreateDerivativeLimitOrderResponse: {
    encode(message: MsgCreateDerivativeLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDerivativeLimitOrderResponse;
    fromPartial(object: Partial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse;
};
export declare const MsgCreateBinaryOptionsLimitOrder: {
    encode(message: MsgCreateBinaryOptionsLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBinaryOptionsLimitOrder;
    fromPartial(object: Partial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder;
};
export declare const MsgCreateBinaryOptionsLimitOrderResponse: {
    encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBinaryOptionsLimitOrderResponse;
    fromPartial(object: Partial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse;
};
export declare const MsgBatchCreateDerivativeLimitOrders: {
    encode(message: MsgBatchCreateDerivativeLimitOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCreateDerivativeLimitOrders;
    fromPartial(object: Partial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders;
};
export declare const MsgBatchCreateDerivativeLimitOrdersResponse: {
    encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromPartial(object: Partial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse;
};
export declare const MsgCancelSpotOrder: {
    encode(message: MsgCancelSpotOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelSpotOrder;
    fromPartial(object: Partial<MsgCancelSpotOrder>): MsgCancelSpotOrder;
};
export declare const MsgCancelSpotOrderResponse: {
    encode(_: MsgCancelSpotOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelSpotOrderResponse;
    fromPartial(_: Partial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse;
};
export declare const MsgBatchCancelSpotOrders: {
    encode(message: MsgBatchCancelSpotOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCancelSpotOrders;
    fromPartial(object: Partial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders;
};
export declare const MsgBatchCancelSpotOrdersResponse: {
    encode(message: MsgBatchCancelSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCancelSpotOrdersResponse;
    fromPartial(object: Partial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse;
};
export declare const MsgBatchCancelBinaryOptionsOrders: {
    encode(message: MsgBatchCancelBinaryOptionsOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCancelBinaryOptionsOrders;
    fromPartial(object: Partial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders;
};
export declare const MsgBatchCancelBinaryOptionsOrdersResponse: {
    encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromPartial(object: Partial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse;
};
export declare const MsgBatchUpdateOrders: {
    encode(message: MsgBatchUpdateOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchUpdateOrders;
    fromPartial(object: Partial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders;
};
export declare const MsgBatchUpdateOrdersResponse: {
    encode(message: MsgBatchUpdateOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchUpdateOrdersResponse;
    fromPartial(object: Partial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse;
};
export declare const MsgCreateDerivativeMarketOrder: {
    encode(message: MsgCreateDerivativeMarketOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDerivativeMarketOrder;
    fromPartial(object: Partial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder;
};
export declare const MsgCreateDerivativeMarketOrderResponse: {
    encode(message: MsgCreateDerivativeMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDerivativeMarketOrderResponse;
    fromPartial(object: Partial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse;
};
export declare const DerivativeMarketOrderResults: {
    encode(message: DerivativeMarketOrderResults, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DerivativeMarketOrderResults;
    fromPartial(object: Partial<DerivativeMarketOrderResults>): DerivativeMarketOrderResults;
};
export declare const MsgCreateBinaryOptionsMarketOrder: {
    encode(message: MsgCreateBinaryOptionsMarketOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBinaryOptionsMarketOrder;
    fromPartial(object: Partial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder;
};
export declare const MsgCreateBinaryOptionsMarketOrderResponse: {
    encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBinaryOptionsMarketOrderResponse;
    fromPartial(object: Partial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse;
};
export declare const MsgCancelDerivativeOrder: {
    encode(message: MsgCancelDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelDerivativeOrder;
    fromPartial(object: Partial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder;
};
export declare const MsgCancelDerivativeOrderResponse: {
    encode(_: MsgCancelDerivativeOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelDerivativeOrderResponse;
    fromPartial(_: Partial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse;
};
export declare const MsgCancelBinaryOptionsOrder: {
    encode(message: MsgCancelBinaryOptionsOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelBinaryOptionsOrder;
    fromPartial(object: Partial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder;
};
export declare const MsgCancelBinaryOptionsOrderResponse: {
    encode(_: MsgCancelBinaryOptionsOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelBinaryOptionsOrderResponse;
    fromPartial(_: Partial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse;
};
export declare const OrderData: {
    encode(message: OrderData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OrderData;
    fromPartial(object: Partial<OrderData>): OrderData;
};
export declare const MsgBatchCancelDerivativeOrders: {
    encode(message: MsgBatchCancelDerivativeOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCancelDerivativeOrders;
    fromPartial(object: Partial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders;
};
export declare const MsgBatchCancelDerivativeOrdersResponse: {
    encode(message: MsgBatchCancelDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchCancelDerivativeOrdersResponse;
    fromPartial(object: Partial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse;
};
export declare const MsgSubaccountTransfer: {
    encode(message: MsgSubaccountTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubaccountTransfer;
    fromPartial(object: Partial<MsgSubaccountTransfer>): MsgSubaccountTransfer;
};
export declare const MsgSubaccountTransferResponse: {
    encode(_: MsgSubaccountTransferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubaccountTransferResponse;
    fromPartial(_: Partial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse;
};
export declare const MsgExternalTransfer: {
    encode(message: MsgExternalTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExternalTransfer;
    fromPartial(object: Partial<MsgExternalTransfer>): MsgExternalTransfer;
};
export declare const MsgExternalTransferResponse: {
    encode(_: MsgExternalTransferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgExternalTransferResponse;
    fromPartial(_: Partial<MsgExternalTransferResponse>): MsgExternalTransferResponse;
};
export declare const MsgLiquidatePosition: {
    encode(message: MsgLiquidatePosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLiquidatePosition;
    fromPartial(object: Partial<MsgLiquidatePosition>): MsgLiquidatePosition;
};
export declare const MsgLiquidatePositionResponse: {
    encode(_: MsgLiquidatePositionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgLiquidatePositionResponse;
    fromPartial(_: Partial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse;
};
export declare const MsgIncreasePositionMargin: {
    encode(message: MsgIncreasePositionMargin, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgIncreasePositionMargin;
    fromPartial(object: Partial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin;
};
export declare const MsgIncreasePositionMarginResponse: {
    encode(_: MsgIncreasePositionMarginResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgIncreasePositionMarginResponse;
    fromPartial(_: Partial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse;
};
export declare const MsgPrivilegedExecuteContract: {
    encode(message: MsgPrivilegedExecuteContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPrivilegedExecuteContract;
    fromPartial(object: Partial<MsgPrivilegedExecuteContract>): MsgPrivilegedExecuteContract;
};
export declare const MsgPrivilegedExecuteContractResponse: {
    encode(message: MsgPrivilegedExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPrivilegedExecuteContractResponse;
    fromPartial(object: Partial<MsgPrivilegedExecuteContractResponse>): MsgPrivilegedExecuteContractResponse;
};
export declare const SpotMarketParamUpdateProposal: {
    encode(message: SpotMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotMarketParamUpdateProposal;
    fromPartial(object: Partial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal;
};
export declare const ExchangeEnableProposal: {
    encode(message: ExchangeEnableProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExchangeEnableProposal;
    fromPartial(object: Partial<ExchangeEnableProposal>): ExchangeEnableProposal;
};
export declare const BatchExchangeModificationProposal: {
    encode(message: BatchExchangeModificationProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchExchangeModificationProposal;
    fromPartial(object: Partial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal;
};
export declare const SpotMarketLaunchProposal: {
    encode(message: SpotMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotMarketLaunchProposal;
    fromPartial(object: Partial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal;
};
export declare const PerpetualMarketLaunchProposal: {
    encode(message: PerpetualMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PerpetualMarketLaunchProposal;
    fromPartial(object: Partial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal;
};
export declare const BinaryOptionsMarketLaunchProposal: {
    encode(message: BinaryOptionsMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BinaryOptionsMarketLaunchProposal;
    fromPartial(object: Partial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal;
};
export declare const ExpiryFuturesMarketLaunchProposal: {
    encode(message: ExpiryFuturesMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExpiryFuturesMarketLaunchProposal;
    fromPartial(object: Partial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal;
};
export declare const DerivativeMarketParamUpdateProposal: {
    encode(message: DerivativeMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DerivativeMarketParamUpdateProposal;
    fromPartial(object: Partial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal;
};
export declare const MarketForcedSettlementProposal: {
    encode(message: MarketForcedSettlementProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MarketForcedSettlementProposal;
    fromPartial(object: Partial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal;
};
export declare const UpdateDenomDecimalsProposal: {
    encode(message: UpdateDenomDecimalsProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateDenomDecimalsProposal;
    fromPartial(object: Partial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal;
};
export declare const BinaryOptionsMarketParamUpdateProposal: {
    encode(message: BinaryOptionsMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BinaryOptionsMarketParamUpdateProposal;
    fromPartial(object: Partial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal;
};
export declare const ProviderOracleParams: {
    encode(message: ProviderOracleParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderOracleParams;
    fromPartial(object: Partial<ProviderOracleParams>): ProviderOracleParams;
};
export declare const OracleParams: {
    encode(message: OracleParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OracleParams;
    fromPartial(object: Partial<OracleParams>): OracleParams;
};
export declare const TradingRewardCampaignLaunchProposal: {
    encode(message: TradingRewardCampaignLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TradingRewardCampaignLaunchProposal;
    fromPartial(object: Partial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal;
};
export declare const TradingRewardCampaignUpdateProposal: {
    encode(message: TradingRewardCampaignUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TradingRewardCampaignUpdateProposal;
    fromPartial(object: Partial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal;
};
export declare const RewardPointUpdate: {
    encode(message: RewardPointUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardPointUpdate;
    fromPartial(object: Partial<RewardPointUpdate>): RewardPointUpdate;
};
export declare const TradingRewardPendingPointsUpdateProposal: {
    encode(message: TradingRewardPendingPointsUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TradingRewardPendingPointsUpdateProposal;
    fromPartial(object: Partial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal;
};
export declare const FeeDiscountProposal: {
    encode(message: FeeDiscountProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeDiscountProposal;
    fromPartial(object: Partial<FeeDiscountProposal>): FeeDiscountProposal;
};
export declare const BatchCommunityPoolSpendProposal: {
    encode(message: BatchCommunityPoolSpendProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchCommunityPoolSpendProposal;
    fromPartial(object: Partial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal;
};
export declare const MsgRewardsOptOut: {
    encode(message: MsgRewardsOptOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRewardsOptOut;
    fromPartial(object: Partial<MsgRewardsOptOut>): MsgRewardsOptOut;
};
export declare const MsgRewardsOptOutResponse: {
    encode(_: MsgRewardsOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRewardsOptOutResponse;
    fromPartial(_: Partial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse;
};
export declare const MsgReclaimLockedFunds: {
    encode(message: MsgReclaimLockedFunds, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgReclaimLockedFunds;
    fromPartial(object: Partial<MsgReclaimLockedFunds>): MsgReclaimLockedFunds;
};
export declare const MsgReclaimLockedFundsResponse: {
    encode(_: MsgReclaimLockedFundsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgReclaimLockedFundsResponse;
    fromPartial(_: Partial<MsgReclaimLockedFundsResponse>): MsgReclaimLockedFundsResponse;
};
export declare const MsgSignData: {
    encode(message: MsgSignData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSignData;
    fromPartial(object: Partial<MsgSignData>): MsgSignData;
};
export declare const MsgSignDoc: {
    encode(message: MsgSignDoc, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSignDoc;
    fromPartial(object: Partial<MsgSignDoc>): MsgSignDoc;
};
export declare const MsgAdminUpdateBinaryOptionsMarket: {
    encode(message: MsgAdminUpdateBinaryOptionsMarket, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAdminUpdateBinaryOptionsMarket;
    fromPartial(object: Partial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket;
};
export declare const MsgAdminUpdateBinaryOptionsMarketResponse: {
    encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromPartial(_: Partial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse;
};
export declare const AtomicMarketOrderFeeMultiplierScheduleProposal: {
    encode(message: AtomicMarketOrderFeeMultiplierScheduleProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AtomicMarketOrderFeeMultiplierScheduleProposal;
    fromPartial(object: Partial<AtomicMarketOrderFeeMultiplierScheduleProposal>): AtomicMarketOrderFeeMultiplierScheduleProposal;
};
