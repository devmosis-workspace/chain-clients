import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { SpotOrder, SpotOrderAmino, SpotOrderSDKType, DerivativeOrder, DerivativeOrderAmino, DerivativeOrderSDKType, MarketStatus, PositionDelta, PositionDeltaAmino, PositionDeltaSDKType, DenomDecimals, DenomDecimalsAmino, DenomDecimalsSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, MarketFeeMultiplier, MarketFeeMultiplierAmino, MarketFeeMultiplierSDKType } from "./exchange";
import { Params, ParamsAmino, ParamsSDKType, CommunityPoolSpendProposal, CommunityPoolSpendProposalAmino, CommunityPoolSpendProposalSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { BinaryWriter } from "../../../binary";
export declare enum ExchangeType {
    EXCHANGE_UNSPECIFIED = 0,
    SPOT = 1,
    DERIVATIVES = 2,
    UNRECOGNIZED = -1
}
export declare const ExchangeTypeSDKType: typeof ExchangeType;
export declare const ExchangeTypeAmino: typeof ExchangeType;
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
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
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
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgDepositResponse";
    value: MsgDepositResponseAmino;
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
export interface MsgWithdrawResponse {
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
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
export interface MsgInstantSpotMarketLaunchResponse {
}
export interface MsgInstantSpotMarketLaunchResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse";
    value: Uint8Array;
}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 */
export interface MsgInstantSpotMarketLaunchResponseAmino {
}
export interface MsgInstantSpotMarketLaunchResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse";
    value: MsgInstantSpotMarketLaunchResponseAmino;
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
export interface MsgInstantPerpetualMarketLaunchResponse {
}
export interface MsgInstantPerpetualMarketLaunchResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse";
    value: Uint8Array;
}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 */
export interface MsgInstantPerpetualMarketLaunchResponseAmino {
}
export interface MsgInstantPerpetualMarketLaunchResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse";
    value: MsgInstantPerpetualMarketLaunchResponseAmino;
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
export interface MsgInstantBinaryOptionsMarketLaunchResponse {
}
export interface MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse";
    value: Uint8Array;
}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 */
export interface MsgInstantBinaryOptionsMarketLaunchResponseAmino {
}
export interface MsgInstantBinaryOptionsMarketLaunchResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse";
    value: MsgInstantBinaryOptionsMarketLaunchResponseAmino;
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
export interface MsgInstantExpiryFuturesMarketLaunchResponse {
}
export interface MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse";
    value: Uint8Array;
}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 */
export interface MsgInstantExpiryFuturesMarketLaunchResponseAmino {
}
export interface MsgInstantExpiryFuturesMarketLaunchResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse";
    value: MsgInstantExpiryFuturesMarketLaunchResponseAmino;
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
export interface MsgCancelSpotOrderResponse {
}
export interface MsgCancelSpotOrderResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse";
    value: Uint8Array;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseAmino {
}
export interface MsgCancelSpotOrderResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse";
    value: MsgCancelSpotOrderResponseAmino;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseSDKType {
}
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
export interface MsgCancelDerivativeOrderResponse {
}
export interface MsgCancelDerivativeOrderResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse";
    value: Uint8Array;
}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgCancelDerivativeOrderResponseAmino {
}
export interface MsgCancelDerivativeOrderResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse";
    value: MsgCancelDerivativeOrderResponseAmino;
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
export interface MsgCancelBinaryOptionsOrderResponse {
}
export interface MsgCancelBinaryOptionsOrderResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse";
    value: Uint8Array;
}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 */
export interface MsgCancelBinaryOptionsOrderResponseAmino {
}
export interface MsgCancelBinaryOptionsOrderResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse";
    value: MsgCancelBinaryOptionsOrderResponseAmino;
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
export interface MsgSubaccountTransferResponse {
}
export interface MsgSubaccountTransferResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse";
    value: Uint8Array;
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponseAmino {
}
export interface MsgSubaccountTransferResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse";
    value: MsgSubaccountTransferResponseAmino;
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
export interface MsgExternalTransferResponse {
}
export interface MsgExternalTransferResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse";
    value: Uint8Array;
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponseAmino {
}
export interface MsgExternalTransferResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgExternalTransferResponse";
    value: MsgExternalTransferResponseAmino;
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
export interface MsgLiquidatePositionResponse {
}
export interface MsgLiquidatePositionResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse";
    value: Uint8Array;
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponseAmino {
}
export interface MsgLiquidatePositionResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse";
    value: MsgLiquidatePositionResponseAmino;
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
export interface MsgIncreasePositionMarginResponse {
}
export interface MsgIncreasePositionMarginResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse";
    value: Uint8Array;
}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 */
export interface MsgIncreasePositionMarginResponseAmino {
}
export interface MsgIncreasePositionMarginResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse";
    value: MsgIncreasePositionMarginResponseAmino;
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
export interface MsgRewardsOptOutResponse {
}
export interface MsgRewardsOptOutResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse";
    value: Uint8Array;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponseAmino {
}
export interface MsgRewardsOptOutResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse";
    value: MsgRewardsOptOutResponseAmino;
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
export interface MsgReclaimLockedFundsResponse {
}
export interface MsgReclaimLockedFundsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgReclaimLockedFundsResponse";
    value: Uint8Array;
}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 */
export interface MsgReclaimLockedFundsResponseAmino {
}
export interface MsgReclaimLockedFundsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgReclaimLockedFundsResponse";
    value: MsgReclaimLockedFundsResponseAmino;
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
export interface MsgAdminUpdateBinaryOptionsMarketResponse {
}
export interface MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse";
    value: Uint8Array;
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponseAmino {
}
export interface MsgAdminUpdateBinaryOptionsMarketResponseAminoMsg {
    type: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse";
    value: MsgAdminUpdateBinaryOptionsMarketResponseAmino;
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
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositResponse;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgWithdraw: {
    typeUrl: string;
    encode(message: MsgWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
    fromAmino(object: MsgWithdrawAmino): MsgWithdraw;
    toAmino(message: MsgWithdraw): MsgWithdrawAmino;
    fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw;
    fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw;
    toProto(message: MsgWithdraw): Uint8Array;
    toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg;
};
export declare const MsgWithdrawResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawResponse;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
export declare const MsgCreateSpotLimitOrder: {
    typeUrl: string;
    encode(message: MsgCreateSpotLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateSpotLimitOrder;
    fromPartial(object: Partial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder;
    fromAmino(object: MsgCreateSpotLimitOrderAmino): MsgCreateSpotLimitOrder;
    toAmino(message: MsgCreateSpotLimitOrder): MsgCreateSpotLimitOrderAmino;
    fromAminoMsg(object: MsgCreateSpotLimitOrderAminoMsg): MsgCreateSpotLimitOrder;
    fromProtoMsg(message: MsgCreateSpotLimitOrderProtoMsg): MsgCreateSpotLimitOrder;
    toProto(message: MsgCreateSpotLimitOrder): Uint8Array;
    toProtoMsg(message: MsgCreateSpotLimitOrder): MsgCreateSpotLimitOrderProtoMsg;
};
export declare const MsgCreateSpotLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgCreateSpotLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateSpotLimitOrderResponse;
    fromPartial(object: Partial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse;
    fromAmino(object: MsgCreateSpotLimitOrderResponseAmino): MsgCreateSpotLimitOrderResponse;
    toAmino(message: MsgCreateSpotLimitOrderResponse): MsgCreateSpotLimitOrderResponseAmino;
    fromAminoMsg(object: MsgCreateSpotLimitOrderResponseAminoMsg): MsgCreateSpotLimitOrderResponse;
    fromProtoMsg(message: MsgCreateSpotLimitOrderResponseProtoMsg): MsgCreateSpotLimitOrderResponse;
    toProto(message: MsgCreateSpotLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateSpotLimitOrderResponse): MsgCreateSpotLimitOrderResponseProtoMsg;
};
export declare const MsgBatchCreateSpotLimitOrders: {
    typeUrl: string;
    encode(message: MsgBatchCreateSpotLimitOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCreateSpotLimitOrders;
    fromPartial(object: Partial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders;
    fromAmino(object: MsgBatchCreateSpotLimitOrdersAmino): MsgBatchCreateSpotLimitOrders;
    toAmino(message: MsgBatchCreateSpotLimitOrders): MsgBatchCreateSpotLimitOrdersAmino;
    fromAminoMsg(object: MsgBatchCreateSpotLimitOrdersAminoMsg): MsgBatchCreateSpotLimitOrders;
    fromProtoMsg(message: MsgBatchCreateSpotLimitOrdersProtoMsg): MsgBatchCreateSpotLimitOrders;
    toProto(message: MsgBatchCreateSpotLimitOrders): Uint8Array;
    toProtoMsg(message: MsgBatchCreateSpotLimitOrders): MsgBatchCreateSpotLimitOrdersProtoMsg;
};
export declare const MsgBatchCreateSpotLimitOrdersResponse: {
    typeUrl: string;
    encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCreateSpotLimitOrdersResponse;
    fromPartial(object: Partial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse;
    fromAmino(object: MsgBatchCreateSpotLimitOrdersResponseAmino): MsgBatchCreateSpotLimitOrdersResponse;
    toAmino(message: MsgBatchCreateSpotLimitOrdersResponse): MsgBatchCreateSpotLimitOrdersResponseAmino;
    fromAminoMsg(object: MsgBatchCreateSpotLimitOrdersResponseAminoMsg): MsgBatchCreateSpotLimitOrdersResponse;
    fromProtoMsg(message: MsgBatchCreateSpotLimitOrdersResponseProtoMsg): MsgBatchCreateSpotLimitOrdersResponse;
    toProto(message: MsgBatchCreateSpotLimitOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgBatchCreateSpotLimitOrdersResponse): MsgBatchCreateSpotLimitOrdersResponseProtoMsg;
};
export declare const MsgInstantSpotMarketLaunch: {
    typeUrl: string;
    encode(message: MsgInstantSpotMarketLaunch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstantSpotMarketLaunch;
    fromPartial(object: Partial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch;
    fromAmino(object: MsgInstantSpotMarketLaunchAmino): MsgInstantSpotMarketLaunch;
    toAmino(message: MsgInstantSpotMarketLaunch): MsgInstantSpotMarketLaunchAmino;
    fromAminoMsg(object: MsgInstantSpotMarketLaunchAminoMsg): MsgInstantSpotMarketLaunch;
    fromProtoMsg(message: MsgInstantSpotMarketLaunchProtoMsg): MsgInstantSpotMarketLaunch;
    toProto(message: MsgInstantSpotMarketLaunch): Uint8Array;
    toProtoMsg(message: MsgInstantSpotMarketLaunch): MsgInstantSpotMarketLaunchProtoMsg;
};
export declare const MsgInstantSpotMarketLaunchResponse: {
    typeUrl: string;
    encode(_: MsgInstantSpotMarketLaunchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInstantSpotMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse;
    fromAmino(_: MsgInstantSpotMarketLaunchResponseAmino): MsgInstantSpotMarketLaunchResponse;
    toAmino(_: MsgInstantSpotMarketLaunchResponse): MsgInstantSpotMarketLaunchResponseAmino;
    fromAminoMsg(object: MsgInstantSpotMarketLaunchResponseAminoMsg): MsgInstantSpotMarketLaunchResponse;
    fromProtoMsg(message: MsgInstantSpotMarketLaunchResponseProtoMsg): MsgInstantSpotMarketLaunchResponse;
    toProto(message: MsgInstantSpotMarketLaunchResponse): Uint8Array;
    toProtoMsg(message: MsgInstantSpotMarketLaunchResponse): MsgInstantSpotMarketLaunchResponseProtoMsg;
};
export declare const MsgInstantPerpetualMarketLaunch: {
    typeUrl: string;
    encode(message: MsgInstantPerpetualMarketLaunch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstantPerpetualMarketLaunch;
    fromPartial(object: Partial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch;
    fromAmino(object: MsgInstantPerpetualMarketLaunchAmino): MsgInstantPerpetualMarketLaunch;
    toAmino(message: MsgInstantPerpetualMarketLaunch): MsgInstantPerpetualMarketLaunchAmino;
    fromAminoMsg(object: MsgInstantPerpetualMarketLaunchAminoMsg): MsgInstantPerpetualMarketLaunch;
    fromProtoMsg(message: MsgInstantPerpetualMarketLaunchProtoMsg): MsgInstantPerpetualMarketLaunch;
    toProto(message: MsgInstantPerpetualMarketLaunch): Uint8Array;
    toProtoMsg(message: MsgInstantPerpetualMarketLaunch): MsgInstantPerpetualMarketLaunchProtoMsg;
};
export declare const MsgInstantPerpetualMarketLaunchResponse: {
    typeUrl: string;
    encode(_: MsgInstantPerpetualMarketLaunchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInstantPerpetualMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse;
    fromAmino(_: MsgInstantPerpetualMarketLaunchResponseAmino): MsgInstantPerpetualMarketLaunchResponse;
    toAmino(_: MsgInstantPerpetualMarketLaunchResponse): MsgInstantPerpetualMarketLaunchResponseAmino;
    fromAminoMsg(object: MsgInstantPerpetualMarketLaunchResponseAminoMsg): MsgInstantPerpetualMarketLaunchResponse;
    fromProtoMsg(message: MsgInstantPerpetualMarketLaunchResponseProtoMsg): MsgInstantPerpetualMarketLaunchResponse;
    toProto(message: MsgInstantPerpetualMarketLaunchResponse): Uint8Array;
    toProtoMsg(message: MsgInstantPerpetualMarketLaunchResponse): MsgInstantPerpetualMarketLaunchResponseProtoMsg;
};
export declare const MsgInstantBinaryOptionsMarketLaunch: {
    typeUrl: string;
    encode(message: MsgInstantBinaryOptionsMarketLaunch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstantBinaryOptionsMarketLaunch;
    fromPartial(object: Partial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch;
    fromAmino(object: MsgInstantBinaryOptionsMarketLaunchAmino): MsgInstantBinaryOptionsMarketLaunch;
    toAmino(message: MsgInstantBinaryOptionsMarketLaunch): MsgInstantBinaryOptionsMarketLaunchAmino;
    fromAminoMsg(object: MsgInstantBinaryOptionsMarketLaunchAminoMsg): MsgInstantBinaryOptionsMarketLaunch;
    fromProtoMsg(message: MsgInstantBinaryOptionsMarketLaunchProtoMsg): MsgInstantBinaryOptionsMarketLaunch;
    toProto(message: MsgInstantBinaryOptionsMarketLaunch): Uint8Array;
    toProtoMsg(message: MsgInstantBinaryOptionsMarketLaunch): MsgInstantBinaryOptionsMarketLaunchProtoMsg;
};
export declare const MsgInstantBinaryOptionsMarketLaunchResponse: {
    typeUrl: string;
    encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromAmino(_: MsgInstantBinaryOptionsMarketLaunchResponseAmino): MsgInstantBinaryOptionsMarketLaunchResponse;
    toAmino(_: MsgInstantBinaryOptionsMarketLaunchResponse): MsgInstantBinaryOptionsMarketLaunchResponseAmino;
    fromAminoMsg(object: MsgInstantBinaryOptionsMarketLaunchResponseAminoMsg): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromProtoMsg(message: MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg): MsgInstantBinaryOptionsMarketLaunchResponse;
    toProto(message: MsgInstantBinaryOptionsMarketLaunchResponse): Uint8Array;
    toProtoMsg(message: MsgInstantBinaryOptionsMarketLaunchResponse): MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg;
};
export declare const MsgInstantExpiryFuturesMarketLaunch: {
    typeUrl: string;
    encode(message: MsgInstantExpiryFuturesMarketLaunch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstantExpiryFuturesMarketLaunch;
    fromPartial(object: Partial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch;
    fromAmino(object: MsgInstantExpiryFuturesMarketLaunchAmino): MsgInstantExpiryFuturesMarketLaunch;
    toAmino(message: MsgInstantExpiryFuturesMarketLaunch): MsgInstantExpiryFuturesMarketLaunchAmino;
    fromAminoMsg(object: MsgInstantExpiryFuturesMarketLaunchAminoMsg): MsgInstantExpiryFuturesMarketLaunch;
    fromProtoMsg(message: MsgInstantExpiryFuturesMarketLaunchProtoMsg): MsgInstantExpiryFuturesMarketLaunch;
    toProto(message: MsgInstantExpiryFuturesMarketLaunch): Uint8Array;
    toProtoMsg(message: MsgInstantExpiryFuturesMarketLaunch): MsgInstantExpiryFuturesMarketLaunchProtoMsg;
};
export declare const MsgInstantExpiryFuturesMarketLaunchResponse: {
    typeUrl: string;
    encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromPartial(_: Partial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromAmino(_: MsgInstantExpiryFuturesMarketLaunchResponseAmino): MsgInstantExpiryFuturesMarketLaunchResponse;
    toAmino(_: MsgInstantExpiryFuturesMarketLaunchResponse): MsgInstantExpiryFuturesMarketLaunchResponseAmino;
    fromAminoMsg(object: MsgInstantExpiryFuturesMarketLaunchResponseAminoMsg): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromProtoMsg(message: MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg): MsgInstantExpiryFuturesMarketLaunchResponse;
    toProto(message: MsgInstantExpiryFuturesMarketLaunchResponse): Uint8Array;
    toProtoMsg(message: MsgInstantExpiryFuturesMarketLaunchResponse): MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg;
};
export declare const MsgCreateSpotMarketOrder: {
    typeUrl: string;
    encode(message: MsgCreateSpotMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateSpotMarketOrder;
    fromPartial(object: Partial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder;
    fromAmino(object: MsgCreateSpotMarketOrderAmino): MsgCreateSpotMarketOrder;
    toAmino(message: MsgCreateSpotMarketOrder): MsgCreateSpotMarketOrderAmino;
    fromAminoMsg(object: MsgCreateSpotMarketOrderAminoMsg): MsgCreateSpotMarketOrder;
    fromProtoMsg(message: MsgCreateSpotMarketOrderProtoMsg): MsgCreateSpotMarketOrder;
    toProto(message: MsgCreateSpotMarketOrder): Uint8Array;
    toProtoMsg(message: MsgCreateSpotMarketOrder): MsgCreateSpotMarketOrderProtoMsg;
};
export declare const MsgCreateSpotMarketOrderResponse: {
    typeUrl: string;
    encode(message: MsgCreateSpotMarketOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateSpotMarketOrderResponse;
    fromPartial(object: Partial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse;
    fromAmino(object: MsgCreateSpotMarketOrderResponseAmino): MsgCreateSpotMarketOrderResponse;
    toAmino(message: MsgCreateSpotMarketOrderResponse): MsgCreateSpotMarketOrderResponseAmino;
    fromAminoMsg(object: MsgCreateSpotMarketOrderResponseAminoMsg): MsgCreateSpotMarketOrderResponse;
    fromProtoMsg(message: MsgCreateSpotMarketOrderResponseProtoMsg): MsgCreateSpotMarketOrderResponse;
    toProto(message: MsgCreateSpotMarketOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateSpotMarketOrderResponse): MsgCreateSpotMarketOrderResponseProtoMsg;
};
export declare const SpotMarketOrderResults: {
    typeUrl: string;
    encode(message: SpotMarketOrderResults, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotMarketOrderResults;
    fromPartial(object: Partial<SpotMarketOrderResults>): SpotMarketOrderResults;
    fromAmino(object: SpotMarketOrderResultsAmino): SpotMarketOrderResults;
    toAmino(message: SpotMarketOrderResults): SpotMarketOrderResultsAmino;
    fromAminoMsg(object: SpotMarketOrderResultsAminoMsg): SpotMarketOrderResults;
    fromProtoMsg(message: SpotMarketOrderResultsProtoMsg): SpotMarketOrderResults;
    toProto(message: SpotMarketOrderResults): Uint8Array;
    toProtoMsg(message: SpotMarketOrderResults): SpotMarketOrderResultsProtoMsg;
};
export declare const MsgCreateDerivativeLimitOrder: {
    typeUrl: string;
    encode(message: MsgCreateDerivativeLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDerivativeLimitOrder;
    fromPartial(object: Partial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder;
    fromAmino(object: MsgCreateDerivativeLimitOrderAmino): MsgCreateDerivativeLimitOrder;
    toAmino(message: MsgCreateDerivativeLimitOrder): MsgCreateDerivativeLimitOrderAmino;
    fromAminoMsg(object: MsgCreateDerivativeLimitOrderAminoMsg): MsgCreateDerivativeLimitOrder;
    fromProtoMsg(message: MsgCreateDerivativeLimitOrderProtoMsg): MsgCreateDerivativeLimitOrder;
    toProto(message: MsgCreateDerivativeLimitOrder): Uint8Array;
    toProtoMsg(message: MsgCreateDerivativeLimitOrder): MsgCreateDerivativeLimitOrderProtoMsg;
};
export declare const MsgCreateDerivativeLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgCreateDerivativeLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDerivativeLimitOrderResponse;
    fromPartial(object: Partial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse;
    fromAmino(object: MsgCreateDerivativeLimitOrderResponseAmino): MsgCreateDerivativeLimitOrderResponse;
    toAmino(message: MsgCreateDerivativeLimitOrderResponse): MsgCreateDerivativeLimitOrderResponseAmino;
    fromAminoMsg(object: MsgCreateDerivativeLimitOrderResponseAminoMsg): MsgCreateDerivativeLimitOrderResponse;
    fromProtoMsg(message: MsgCreateDerivativeLimitOrderResponseProtoMsg): MsgCreateDerivativeLimitOrderResponse;
    toProto(message: MsgCreateDerivativeLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDerivativeLimitOrderResponse): MsgCreateDerivativeLimitOrderResponseProtoMsg;
};
export declare const MsgCreateBinaryOptionsLimitOrder: {
    typeUrl: string;
    encode(message: MsgCreateBinaryOptionsLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBinaryOptionsLimitOrder;
    fromPartial(object: Partial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder;
    fromAmino(object: MsgCreateBinaryOptionsLimitOrderAmino): MsgCreateBinaryOptionsLimitOrder;
    toAmino(message: MsgCreateBinaryOptionsLimitOrder): MsgCreateBinaryOptionsLimitOrderAmino;
    fromAminoMsg(object: MsgCreateBinaryOptionsLimitOrderAminoMsg): MsgCreateBinaryOptionsLimitOrder;
    fromProtoMsg(message: MsgCreateBinaryOptionsLimitOrderProtoMsg): MsgCreateBinaryOptionsLimitOrder;
    toProto(message: MsgCreateBinaryOptionsLimitOrder): Uint8Array;
    toProtoMsg(message: MsgCreateBinaryOptionsLimitOrder): MsgCreateBinaryOptionsLimitOrderProtoMsg;
};
export declare const MsgCreateBinaryOptionsLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBinaryOptionsLimitOrderResponse;
    fromPartial(object: Partial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse;
    fromAmino(object: MsgCreateBinaryOptionsLimitOrderResponseAmino): MsgCreateBinaryOptionsLimitOrderResponse;
    toAmino(message: MsgCreateBinaryOptionsLimitOrderResponse): MsgCreateBinaryOptionsLimitOrderResponseAmino;
    fromAminoMsg(object: MsgCreateBinaryOptionsLimitOrderResponseAminoMsg): MsgCreateBinaryOptionsLimitOrderResponse;
    fromProtoMsg(message: MsgCreateBinaryOptionsLimitOrderResponseProtoMsg): MsgCreateBinaryOptionsLimitOrderResponse;
    toProto(message: MsgCreateBinaryOptionsLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBinaryOptionsLimitOrderResponse): MsgCreateBinaryOptionsLimitOrderResponseProtoMsg;
};
export declare const MsgBatchCreateDerivativeLimitOrders: {
    typeUrl: string;
    encode(message: MsgBatchCreateDerivativeLimitOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCreateDerivativeLimitOrders;
    fromPartial(object: Partial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders;
    fromAmino(object: MsgBatchCreateDerivativeLimitOrdersAmino): MsgBatchCreateDerivativeLimitOrders;
    toAmino(message: MsgBatchCreateDerivativeLimitOrders): MsgBatchCreateDerivativeLimitOrdersAmino;
    fromAminoMsg(object: MsgBatchCreateDerivativeLimitOrdersAminoMsg): MsgBatchCreateDerivativeLimitOrders;
    fromProtoMsg(message: MsgBatchCreateDerivativeLimitOrdersProtoMsg): MsgBatchCreateDerivativeLimitOrders;
    toProto(message: MsgBatchCreateDerivativeLimitOrders): Uint8Array;
    toProtoMsg(message: MsgBatchCreateDerivativeLimitOrders): MsgBatchCreateDerivativeLimitOrdersProtoMsg;
};
export declare const MsgBatchCreateDerivativeLimitOrdersResponse: {
    typeUrl: string;
    encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromPartial(object: Partial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromAmino(object: MsgBatchCreateDerivativeLimitOrdersResponseAmino): MsgBatchCreateDerivativeLimitOrdersResponse;
    toAmino(message: MsgBatchCreateDerivativeLimitOrdersResponse): MsgBatchCreateDerivativeLimitOrdersResponseAmino;
    fromAminoMsg(object: MsgBatchCreateDerivativeLimitOrdersResponseAminoMsg): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromProtoMsg(message: MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg): MsgBatchCreateDerivativeLimitOrdersResponse;
    toProto(message: MsgBatchCreateDerivativeLimitOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgBatchCreateDerivativeLimitOrdersResponse): MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg;
};
export declare const MsgCancelSpotOrder: {
    typeUrl: string;
    encode(message: MsgCancelSpotOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelSpotOrder;
    fromPartial(object: Partial<MsgCancelSpotOrder>): MsgCancelSpotOrder;
    fromAmino(object: MsgCancelSpotOrderAmino): MsgCancelSpotOrder;
    toAmino(message: MsgCancelSpotOrder): MsgCancelSpotOrderAmino;
    fromAminoMsg(object: MsgCancelSpotOrderAminoMsg): MsgCancelSpotOrder;
    fromProtoMsg(message: MsgCancelSpotOrderProtoMsg): MsgCancelSpotOrder;
    toProto(message: MsgCancelSpotOrder): Uint8Array;
    toProtoMsg(message: MsgCancelSpotOrder): MsgCancelSpotOrderProtoMsg;
};
export declare const MsgCancelSpotOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelSpotOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelSpotOrderResponse;
    fromPartial(_: Partial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse;
    fromAmino(_: MsgCancelSpotOrderResponseAmino): MsgCancelSpotOrderResponse;
    toAmino(_: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponseAmino;
    fromAminoMsg(object: MsgCancelSpotOrderResponseAminoMsg): MsgCancelSpotOrderResponse;
    fromProtoMsg(message: MsgCancelSpotOrderResponseProtoMsg): MsgCancelSpotOrderResponse;
    toProto(message: MsgCancelSpotOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponseProtoMsg;
};
export declare const MsgBatchCancelSpotOrders: {
    typeUrl: string;
    encode(message: MsgBatchCancelSpotOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCancelSpotOrders;
    fromPartial(object: Partial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders;
    fromAmino(object: MsgBatchCancelSpotOrdersAmino): MsgBatchCancelSpotOrders;
    toAmino(message: MsgBatchCancelSpotOrders): MsgBatchCancelSpotOrdersAmino;
    fromAminoMsg(object: MsgBatchCancelSpotOrdersAminoMsg): MsgBatchCancelSpotOrders;
    fromProtoMsg(message: MsgBatchCancelSpotOrdersProtoMsg): MsgBatchCancelSpotOrders;
    toProto(message: MsgBatchCancelSpotOrders): Uint8Array;
    toProtoMsg(message: MsgBatchCancelSpotOrders): MsgBatchCancelSpotOrdersProtoMsg;
};
export declare const MsgBatchCancelSpotOrdersResponse: {
    typeUrl: string;
    encode(message: MsgBatchCancelSpotOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCancelSpotOrdersResponse;
    fromPartial(object: Partial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse;
    fromAmino(object: MsgBatchCancelSpotOrdersResponseAmino): MsgBatchCancelSpotOrdersResponse;
    toAmino(message: MsgBatchCancelSpotOrdersResponse): MsgBatchCancelSpotOrdersResponseAmino;
    fromAminoMsg(object: MsgBatchCancelSpotOrdersResponseAminoMsg): MsgBatchCancelSpotOrdersResponse;
    fromProtoMsg(message: MsgBatchCancelSpotOrdersResponseProtoMsg): MsgBatchCancelSpotOrdersResponse;
    toProto(message: MsgBatchCancelSpotOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgBatchCancelSpotOrdersResponse): MsgBatchCancelSpotOrdersResponseProtoMsg;
};
export declare const MsgBatchCancelBinaryOptionsOrders: {
    typeUrl: string;
    encode(message: MsgBatchCancelBinaryOptionsOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCancelBinaryOptionsOrders;
    fromPartial(object: Partial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders;
    fromAmino(object: MsgBatchCancelBinaryOptionsOrdersAmino): MsgBatchCancelBinaryOptionsOrders;
    toAmino(message: MsgBatchCancelBinaryOptionsOrders): MsgBatchCancelBinaryOptionsOrdersAmino;
    fromAminoMsg(object: MsgBatchCancelBinaryOptionsOrdersAminoMsg): MsgBatchCancelBinaryOptionsOrders;
    fromProtoMsg(message: MsgBatchCancelBinaryOptionsOrdersProtoMsg): MsgBatchCancelBinaryOptionsOrders;
    toProto(message: MsgBatchCancelBinaryOptionsOrders): Uint8Array;
    toProtoMsg(message: MsgBatchCancelBinaryOptionsOrders): MsgBatchCancelBinaryOptionsOrdersProtoMsg;
};
export declare const MsgBatchCancelBinaryOptionsOrdersResponse: {
    typeUrl: string;
    encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromPartial(object: Partial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromAmino(object: MsgBatchCancelBinaryOptionsOrdersResponseAmino): MsgBatchCancelBinaryOptionsOrdersResponse;
    toAmino(message: MsgBatchCancelBinaryOptionsOrdersResponse): MsgBatchCancelBinaryOptionsOrdersResponseAmino;
    fromAminoMsg(object: MsgBatchCancelBinaryOptionsOrdersResponseAminoMsg): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromProtoMsg(message: MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg): MsgBatchCancelBinaryOptionsOrdersResponse;
    toProto(message: MsgBatchCancelBinaryOptionsOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgBatchCancelBinaryOptionsOrdersResponse): MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg;
};
export declare const MsgBatchUpdateOrders: {
    typeUrl: string;
    encode(message: MsgBatchUpdateOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchUpdateOrders;
    fromPartial(object: Partial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders;
    fromAmino(object: MsgBatchUpdateOrdersAmino): MsgBatchUpdateOrders;
    toAmino(message: MsgBatchUpdateOrders): MsgBatchUpdateOrdersAmino;
    fromAminoMsg(object: MsgBatchUpdateOrdersAminoMsg): MsgBatchUpdateOrders;
    fromProtoMsg(message: MsgBatchUpdateOrdersProtoMsg): MsgBatchUpdateOrders;
    toProto(message: MsgBatchUpdateOrders): Uint8Array;
    toProtoMsg(message: MsgBatchUpdateOrders): MsgBatchUpdateOrdersProtoMsg;
};
export declare const MsgBatchUpdateOrdersResponse: {
    typeUrl: string;
    encode(message: MsgBatchUpdateOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchUpdateOrdersResponse;
    fromPartial(object: Partial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse;
    fromAmino(object: MsgBatchUpdateOrdersResponseAmino): MsgBatchUpdateOrdersResponse;
    toAmino(message: MsgBatchUpdateOrdersResponse): MsgBatchUpdateOrdersResponseAmino;
    fromAminoMsg(object: MsgBatchUpdateOrdersResponseAminoMsg): MsgBatchUpdateOrdersResponse;
    fromProtoMsg(message: MsgBatchUpdateOrdersResponseProtoMsg): MsgBatchUpdateOrdersResponse;
    toProto(message: MsgBatchUpdateOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgBatchUpdateOrdersResponse): MsgBatchUpdateOrdersResponseProtoMsg;
};
export declare const MsgCreateDerivativeMarketOrder: {
    typeUrl: string;
    encode(message: MsgCreateDerivativeMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDerivativeMarketOrder;
    fromPartial(object: Partial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder;
    fromAmino(object: MsgCreateDerivativeMarketOrderAmino): MsgCreateDerivativeMarketOrder;
    toAmino(message: MsgCreateDerivativeMarketOrder): MsgCreateDerivativeMarketOrderAmino;
    fromAminoMsg(object: MsgCreateDerivativeMarketOrderAminoMsg): MsgCreateDerivativeMarketOrder;
    fromProtoMsg(message: MsgCreateDerivativeMarketOrderProtoMsg): MsgCreateDerivativeMarketOrder;
    toProto(message: MsgCreateDerivativeMarketOrder): Uint8Array;
    toProtoMsg(message: MsgCreateDerivativeMarketOrder): MsgCreateDerivativeMarketOrderProtoMsg;
};
export declare const MsgCreateDerivativeMarketOrderResponse: {
    typeUrl: string;
    encode(message: MsgCreateDerivativeMarketOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDerivativeMarketOrderResponse;
    fromPartial(object: Partial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse;
    fromAmino(object: MsgCreateDerivativeMarketOrderResponseAmino): MsgCreateDerivativeMarketOrderResponse;
    toAmino(message: MsgCreateDerivativeMarketOrderResponse): MsgCreateDerivativeMarketOrderResponseAmino;
    fromAminoMsg(object: MsgCreateDerivativeMarketOrderResponseAminoMsg): MsgCreateDerivativeMarketOrderResponse;
    fromProtoMsg(message: MsgCreateDerivativeMarketOrderResponseProtoMsg): MsgCreateDerivativeMarketOrderResponse;
    toProto(message: MsgCreateDerivativeMarketOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDerivativeMarketOrderResponse): MsgCreateDerivativeMarketOrderResponseProtoMsg;
};
export declare const DerivativeMarketOrderResults: {
    typeUrl: string;
    encode(message: DerivativeMarketOrderResults, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeMarketOrderResults;
    fromPartial(object: Partial<DerivativeMarketOrderResults>): DerivativeMarketOrderResults;
    fromAmino(object: DerivativeMarketOrderResultsAmino): DerivativeMarketOrderResults;
    toAmino(message: DerivativeMarketOrderResults): DerivativeMarketOrderResultsAmino;
    fromAminoMsg(object: DerivativeMarketOrderResultsAminoMsg): DerivativeMarketOrderResults;
    fromProtoMsg(message: DerivativeMarketOrderResultsProtoMsg): DerivativeMarketOrderResults;
    toProto(message: DerivativeMarketOrderResults): Uint8Array;
    toProtoMsg(message: DerivativeMarketOrderResults): DerivativeMarketOrderResultsProtoMsg;
};
export declare const MsgCreateBinaryOptionsMarketOrder: {
    typeUrl: string;
    encode(message: MsgCreateBinaryOptionsMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBinaryOptionsMarketOrder;
    fromPartial(object: Partial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder;
    fromAmino(object: MsgCreateBinaryOptionsMarketOrderAmino): MsgCreateBinaryOptionsMarketOrder;
    toAmino(message: MsgCreateBinaryOptionsMarketOrder): MsgCreateBinaryOptionsMarketOrderAmino;
    fromAminoMsg(object: MsgCreateBinaryOptionsMarketOrderAminoMsg): MsgCreateBinaryOptionsMarketOrder;
    fromProtoMsg(message: MsgCreateBinaryOptionsMarketOrderProtoMsg): MsgCreateBinaryOptionsMarketOrder;
    toProto(message: MsgCreateBinaryOptionsMarketOrder): Uint8Array;
    toProtoMsg(message: MsgCreateBinaryOptionsMarketOrder): MsgCreateBinaryOptionsMarketOrderProtoMsg;
};
export declare const MsgCreateBinaryOptionsMarketOrderResponse: {
    typeUrl: string;
    encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBinaryOptionsMarketOrderResponse;
    fromPartial(object: Partial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse;
    fromAmino(object: MsgCreateBinaryOptionsMarketOrderResponseAmino): MsgCreateBinaryOptionsMarketOrderResponse;
    toAmino(message: MsgCreateBinaryOptionsMarketOrderResponse): MsgCreateBinaryOptionsMarketOrderResponseAmino;
    fromAminoMsg(object: MsgCreateBinaryOptionsMarketOrderResponseAminoMsg): MsgCreateBinaryOptionsMarketOrderResponse;
    fromProtoMsg(message: MsgCreateBinaryOptionsMarketOrderResponseProtoMsg): MsgCreateBinaryOptionsMarketOrderResponse;
    toProto(message: MsgCreateBinaryOptionsMarketOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBinaryOptionsMarketOrderResponse): MsgCreateBinaryOptionsMarketOrderResponseProtoMsg;
};
export declare const MsgCancelDerivativeOrder: {
    typeUrl: string;
    encode(message: MsgCancelDerivativeOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelDerivativeOrder;
    fromPartial(object: Partial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder;
    fromAmino(object: MsgCancelDerivativeOrderAmino): MsgCancelDerivativeOrder;
    toAmino(message: MsgCancelDerivativeOrder): MsgCancelDerivativeOrderAmino;
    fromAminoMsg(object: MsgCancelDerivativeOrderAminoMsg): MsgCancelDerivativeOrder;
    fromProtoMsg(message: MsgCancelDerivativeOrderProtoMsg): MsgCancelDerivativeOrder;
    toProto(message: MsgCancelDerivativeOrder): Uint8Array;
    toProtoMsg(message: MsgCancelDerivativeOrder): MsgCancelDerivativeOrderProtoMsg;
};
export declare const MsgCancelDerivativeOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelDerivativeOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelDerivativeOrderResponse;
    fromPartial(_: Partial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse;
    fromAmino(_: MsgCancelDerivativeOrderResponseAmino): MsgCancelDerivativeOrderResponse;
    toAmino(_: MsgCancelDerivativeOrderResponse): MsgCancelDerivativeOrderResponseAmino;
    fromAminoMsg(object: MsgCancelDerivativeOrderResponseAminoMsg): MsgCancelDerivativeOrderResponse;
    fromProtoMsg(message: MsgCancelDerivativeOrderResponseProtoMsg): MsgCancelDerivativeOrderResponse;
    toProto(message: MsgCancelDerivativeOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelDerivativeOrderResponse): MsgCancelDerivativeOrderResponseProtoMsg;
};
export declare const MsgCancelBinaryOptionsOrder: {
    typeUrl: string;
    encode(message: MsgCancelBinaryOptionsOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelBinaryOptionsOrder;
    fromPartial(object: Partial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder;
    fromAmino(object: MsgCancelBinaryOptionsOrderAmino): MsgCancelBinaryOptionsOrder;
    toAmino(message: MsgCancelBinaryOptionsOrder): MsgCancelBinaryOptionsOrderAmino;
    fromAminoMsg(object: MsgCancelBinaryOptionsOrderAminoMsg): MsgCancelBinaryOptionsOrder;
    fromProtoMsg(message: MsgCancelBinaryOptionsOrderProtoMsg): MsgCancelBinaryOptionsOrder;
    toProto(message: MsgCancelBinaryOptionsOrder): Uint8Array;
    toProtoMsg(message: MsgCancelBinaryOptionsOrder): MsgCancelBinaryOptionsOrderProtoMsg;
};
export declare const MsgCancelBinaryOptionsOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelBinaryOptionsOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelBinaryOptionsOrderResponse;
    fromPartial(_: Partial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse;
    fromAmino(_: MsgCancelBinaryOptionsOrderResponseAmino): MsgCancelBinaryOptionsOrderResponse;
    toAmino(_: MsgCancelBinaryOptionsOrderResponse): MsgCancelBinaryOptionsOrderResponseAmino;
    fromAminoMsg(object: MsgCancelBinaryOptionsOrderResponseAminoMsg): MsgCancelBinaryOptionsOrderResponse;
    fromProtoMsg(message: MsgCancelBinaryOptionsOrderResponseProtoMsg): MsgCancelBinaryOptionsOrderResponse;
    toProto(message: MsgCancelBinaryOptionsOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelBinaryOptionsOrderResponse): MsgCancelBinaryOptionsOrderResponseProtoMsg;
};
export declare const OrderData: {
    typeUrl: string;
    encode(message: OrderData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OrderData;
    fromPartial(object: Partial<OrderData>): OrderData;
    fromAmino(object: OrderDataAmino): OrderData;
    toAmino(message: OrderData): OrderDataAmino;
    fromAminoMsg(object: OrderDataAminoMsg): OrderData;
    fromProtoMsg(message: OrderDataProtoMsg): OrderData;
    toProto(message: OrderData): Uint8Array;
    toProtoMsg(message: OrderData): OrderDataProtoMsg;
};
export declare const MsgBatchCancelDerivativeOrders: {
    typeUrl: string;
    encode(message: MsgBatchCancelDerivativeOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCancelDerivativeOrders;
    fromPartial(object: Partial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders;
    fromAmino(object: MsgBatchCancelDerivativeOrdersAmino): MsgBatchCancelDerivativeOrders;
    toAmino(message: MsgBatchCancelDerivativeOrders): MsgBatchCancelDerivativeOrdersAmino;
    fromAminoMsg(object: MsgBatchCancelDerivativeOrdersAminoMsg): MsgBatchCancelDerivativeOrders;
    fromProtoMsg(message: MsgBatchCancelDerivativeOrdersProtoMsg): MsgBatchCancelDerivativeOrders;
    toProto(message: MsgBatchCancelDerivativeOrders): Uint8Array;
    toProtoMsg(message: MsgBatchCancelDerivativeOrders): MsgBatchCancelDerivativeOrdersProtoMsg;
};
export declare const MsgBatchCancelDerivativeOrdersResponse: {
    typeUrl: string;
    encode(message: MsgBatchCancelDerivativeOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchCancelDerivativeOrdersResponse;
    fromPartial(object: Partial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse;
    fromAmino(object: MsgBatchCancelDerivativeOrdersResponseAmino): MsgBatchCancelDerivativeOrdersResponse;
    toAmino(message: MsgBatchCancelDerivativeOrdersResponse): MsgBatchCancelDerivativeOrdersResponseAmino;
    fromAminoMsg(object: MsgBatchCancelDerivativeOrdersResponseAminoMsg): MsgBatchCancelDerivativeOrdersResponse;
    fromProtoMsg(message: MsgBatchCancelDerivativeOrdersResponseProtoMsg): MsgBatchCancelDerivativeOrdersResponse;
    toProto(message: MsgBatchCancelDerivativeOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgBatchCancelDerivativeOrdersResponse): MsgBatchCancelDerivativeOrdersResponseProtoMsg;
};
export declare const MsgSubaccountTransfer: {
    typeUrl: string;
    encode(message: MsgSubaccountTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubaccountTransfer;
    fromPartial(object: Partial<MsgSubaccountTransfer>): MsgSubaccountTransfer;
    fromAmino(object: MsgSubaccountTransferAmino): MsgSubaccountTransfer;
    toAmino(message: MsgSubaccountTransfer): MsgSubaccountTransferAmino;
    fromAminoMsg(object: MsgSubaccountTransferAminoMsg): MsgSubaccountTransfer;
    fromProtoMsg(message: MsgSubaccountTransferProtoMsg): MsgSubaccountTransfer;
    toProto(message: MsgSubaccountTransfer): Uint8Array;
    toProtoMsg(message: MsgSubaccountTransfer): MsgSubaccountTransferProtoMsg;
};
export declare const MsgSubaccountTransferResponse: {
    typeUrl: string;
    encode(_: MsgSubaccountTransferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubaccountTransferResponse;
    fromPartial(_: Partial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse;
    fromAmino(_: MsgSubaccountTransferResponseAmino): MsgSubaccountTransferResponse;
    toAmino(_: MsgSubaccountTransferResponse): MsgSubaccountTransferResponseAmino;
    fromAminoMsg(object: MsgSubaccountTransferResponseAminoMsg): MsgSubaccountTransferResponse;
    fromProtoMsg(message: MsgSubaccountTransferResponseProtoMsg): MsgSubaccountTransferResponse;
    toProto(message: MsgSubaccountTransferResponse): Uint8Array;
    toProtoMsg(message: MsgSubaccountTransferResponse): MsgSubaccountTransferResponseProtoMsg;
};
export declare const MsgExternalTransfer: {
    typeUrl: string;
    encode(message: MsgExternalTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExternalTransfer;
    fromPartial(object: Partial<MsgExternalTransfer>): MsgExternalTransfer;
    fromAmino(object: MsgExternalTransferAmino): MsgExternalTransfer;
    toAmino(message: MsgExternalTransfer): MsgExternalTransferAmino;
    fromAminoMsg(object: MsgExternalTransferAminoMsg): MsgExternalTransfer;
    fromProtoMsg(message: MsgExternalTransferProtoMsg): MsgExternalTransfer;
    toProto(message: MsgExternalTransfer): Uint8Array;
    toProtoMsg(message: MsgExternalTransfer): MsgExternalTransferProtoMsg;
};
export declare const MsgExternalTransferResponse: {
    typeUrl: string;
    encode(_: MsgExternalTransferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgExternalTransferResponse;
    fromPartial(_: Partial<MsgExternalTransferResponse>): MsgExternalTransferResponse;
    fromAmino(_: MsgExternalTransferResponseAmino): MsgExternalTransferResponse;
    toAmino(_: MsgExternalTransferResponse): MsgExternalTransferResponseAmino;
    fromAminoMsg(object: MsgExternalTransferResponseAminoMsg): MsgExternalTransferResponse;
    fromProtoMsg(message: MsgExternalTransferResponseProtoMsg): MsgExternalTransferResponse;
    toProto(message: MsgExternalTransferResponse): Uint8Array;
    toProtoMsg(message: MsgExternalTransferResponse): MsgExternalTransferResponseProtoMsg;
};
export declare const MsgLiquidatePosition: {
    typeUrl: string;
    encode(message: MsgLiquidatePosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLiquidatePosition;
    fromPartial(object: Partial<MsgLiquidatePosition>): MsgLiquidatePosition;
    fromAmino(object: MsgLiquidatePositionAmino): MsgLiquidatePosition;
    toAmino(message: MsgLiquidatePosition): MsgLiquidatePositionAmino;
    fromAminoMsg(object: MsgLiquidatePositionAminoMsg): MsgLiquidatePosition;
    fromProtoMsg(message: MsgLiquidatePositionProtoMsg): MsgLiquidatePosition;
    toProto(message: MsgLiquidatePosition): Uint8Array;
    toProtoMsg(message: MsgLiquidatePosition): MsgLiquidatePositionProtoMsg;
};
export declare const MsgLiquidatePositionResponse: {
    typeUrl: string;
    encode(_: MsgLiquidatePositionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLiquidatePositionResponse;
    fromPartial(_: Partial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse;
    fromAmino(_: MsgLiquidatePositionResponseAmino): MsgLiquidatePositionResponse;
    toAmino(_: MsgLiquidatePositionResponse): MsgLiquidatePositionResponseAmino;
    fromAminoMsg(object: MsgLiquidatePositionResponseAminoMsg): MsgLiquidatePositionResponse;
    fromProtoMsg(message: MsgLiquidatePositionResponseProtoMsg): MsgLiquidatePositionResponse;
    toProto(message: MsgLiquidatePositionResponse): Uint8Array;
    toProtoMsg(message: MsgLiquidatePositionResponse): MsgLiquidatePositionResponseProtoMsg;
};
export declare const MsgIncreasePositionMargin: {
    typeUrl: string;
    encode(message: MsgIncreasePositionMargin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgIncreasePositionMargin;
    fromPartial(object: Partial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin;
    fromAmino(object: MsgIncreasePositionMarginAmino): MsgIncreasePositionMargin;
    toAmino(message: MsgIncreasePositionMargin): MsgIncreasePositionMarginAmino;
    fromAminoMsg(object: MsgIncreasePositionMarginAminoMsg): MsgIncreasePositionMargin;
    fromProtoMsg(message: MsgIncreasePositionMarginProtoMsg): MsgIncreasePositionMargin;
    toProto(message: MsgIncreasePositionMargin): Uint8Array;
    toProtoMsg(message: MsgIncreasePositionMargin): MsgIncreasePositionMarginProtoMsg;
};
export declare const MsgIncreasePositionMarginResponse: {
    typeUrl: string;
    encode(_: MsgIncreasePositionMarginResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgIncreasePositionMarginResponse;
    fromPartial(_: Partial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse;
    fromAmino(_: MsgIncreasePositionMarginResponseAmino): MsgIncreasePositionMarginResponse;
    toAmino(_: MsgIncreasePositionMarginResponse): MsgIncreasePositionMarginResponseAmino;
    fromAminoMsg(object: MsgIncreasePositionMarginResponseAminoMsg): MsgIncreasePositionMarginResponse;
    fromProtoMsg(message: MsgIncreasePositionMarginResponseProtoMsg): MsgIncreasePositionMarginResponse;
    toProto(message: MsgIncreasePositionMarginResponse): Uint8Array;
    toProtoMsg(message: MsgIncreasePositionMarginResponse): MsgIncreasePositionMarginResponseProtoMsg;
};
export declare const MsgPrivilegedExecuteContract: {
    typeUrl: string;
    encode(message: MsgPrivilegedExecuteContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPrivilegedExecuteContract;
    fromPartial(object: Partial<MsgPrivilegedExecuteContract>): MsgPrivilegedExecuteContract;
    fromAmino(object: MsgPrivilegedExecuteContractAmino): MsgPrivilegedExecuteContract;
    toAmino(message: MsgPrivilegedExecuteContract): MsgPrivilegedExecuteContractAmino;
    fromAminoMsg(object: MsgPrivilegedExecuteContractAminoMsg): MsgPrivilegedExecuteContract;
    fromProtoMsg(message: MsgPrivilegedExecuteContractProtoMsg): MsgPrivilegedExecuteContract;
    toProto(message: MsgPrivilegedExecuteContract): Uint8Array;
    toProtoMsg(message: MsgPrivilegedExecuteContract): MsgPrivilegedExecuteContractProtoMsg;
};
export declare const MsgPrivilegedExecuteContractResponse: {
    typeUrl: string;
    encode(message: MsgPrivilegedExecuteContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPrivilegedExecuteContractResponse;
    fromPartial(object: Partial<MsgPrivilegedExecuteContractResponse>): MsgPrivilegedExecuteContractResponse;
    fromAmino(object: MsgPrivilegedExecuteContractResponseAmino): MsgPrivilegedExecuteContractResponse;
    toAmino(message: MsgPrivilegedExecuteContractResponse): MsgPrivilegedExecuteContractResponseAmino;
    fromAminoMsg(object: MsgPrivilegedExecuteContractResponseAminoMsg): MsgPrivilegedExecuteContractResponse;
    fromProtoMsg(message: MsgPrivilegedExecuteContractResponseProtoMsg): MsgPrivilegedExecuteContractResponse;
    toProto(message: MsgPrivilegedExecuteContractResponse): Uint8Array;
    toProtoMsg(message: MsgPrivilegedExecuteContractResponse): MsgPrivilegedExecuteContractResponseProtoMsg;
};
export declare const SpotMarketParamUpdateProposal: {
    typeUrl: string;
    encode(message: SpotMarketParamUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotMarketParamUpdateProposal;
    fromPartial(object: Partial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal;
    fromAmino(object: SpotMarketParamUpdateProposalAmino): SpotMarketParamUpdateProposal;
    toAmino(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalAmino;
    fromAminoMsg(object: SpotMarketParamUpdateProposalAminoMsg): SpotMarketParamUpdateProposal;
    fromProtoMsg(message: SpotMarketParamUpdateProposalProtoMsg): SpotMarketParamUpdateProposal;
    toProto(message: SpotMarketParamUpdateProposal): Uint8Array;
    toProtoMsg(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalProtoMsg;
};
export declare const ExchangeEnableProposal: {
    typeUrl: string;
    encode(message: ExchangeEnableProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExchangeEnableProposal;
    fromPartial(object: Partial<ExchangeEnableProposal>): ExchangeEnableProposal;
    fromAmino(object: ExchangeEnableProposalAmino): ExchangeEnableProposal;
    toAmino(message: ExchangeEnableProposal): ExchangeEnableProposalAmino;
    fromAminoMsg(object: ExchangeEnableProposalAminoMsg): ExchangeEnableProposal;
    fromProtoMsg(message: ExchangeEnableProposalProtoMsg): ExchangeEnableProposal;
    toProto(message: ExchangeEnableProposal): Uint8Array;
    toProtoMsg(message: ExchangeEnableProposal): ExchangeEnableProposalProtoMsg;
};
export declare const BatchExchangeModificationProposal: {
    typeUrl: string;
    encode(message: BatchExchangeModificationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchExchangeModificationProposal;
    fromPartial(object: Partial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal;
    fromAmino(object: BatchExchangeModificationProposalAmino): BatchExchangeModificationProposal;
    toAmino(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalAmino;
    fromAminoMsg(object: BatchExchangeModificationProposalAminoMsg): BatchExchangeModificationProposal;
    fromProtoMsg(message: BatchExchangeModificationProposalProtoMsg): BatchExchangeModificationProposal;
    toProto(message: BatchExchangeModificationProposal): Uint8Array;
    toProtoMsg(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalProtoMsg;
};
export declare const SpotMarketLaunchProposal: {
    typeUrl: string;
    encode(message: SpotMarketLaunchProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotMarketLaunchProposal;
    fromPartial(object: Partial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal;
    fromAmino(object: SpotMarketLaunchProposalAmino): SpotMarketLaunchProposal;
    toAmino(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalAmino;
    fromAminoMsg(object: SpotMarketLaunchProposalAminoMsg): SpotMarketLaunchProposal;
    fromProtoMsg(message: SpotMarketLaunchProposalProtoMsg): SpotMarketLaunchProposal;
    toProto(message: SpotMarketLaunchProposal): Uint8Array;
    toProtoMsg(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalProtoMsg;
};
export declare const PerpetualMarketLaunchProposal: {
    typeUrl: string;
    encode(message: PerpetualMarketLaunchProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PerpetualMarketLaunchProposal;
    fromPartial(object: Partial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal;
    fromAmino(object: PerpetualMarketLaunchProposalAmino): PerpetualMarketLaunchProposal;
    toAmino(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalAmino;
    fromAminoMsg(object: PerpetualMarketLaunchProposalAminoMsg): PerpetualMarketLaunchProposal;
    fromProtoMsg(message: PerpetualMarketLaunchProposalProtoMsg): PerpetualMarketLaunchProposal;
    toProto(message: PerpetualMarketLaunchProposal): Uint8Array;
    toProtoMsg(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalProtoMsg;
};
export declare const BinaryOptionsMarketLaunchProposal: {
    typeUrl: string;
    encode(message: BinaryOptionsMarketLaunchProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BinaryOptionsMarketLaunchProposal;
    fromPartial(object: Partial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal;
    fromAmino(object: BinaryOptionsMarketLaunchProposalAmino): BinaryOptionsMarketLaunchProposal;
    toAmino(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalAmino;
    fromAminoMsg(object: BinaryOptionsMarketLaunchProposalAminoMsg): BinaryOptionsMarketLaunchProposal;
    fromProtoMsg(message: BinaryOptionsMarketLaunchProposalProtoMsg): BinaryOptionsMarketLaunchProposal;
    toProto(message: BinaryOptionsMarketLaunchProposal): Uint8Array;
    toProtoMsg(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalProtoMsg;
};
export declare const ExpiryFuturesMarketLaunchProposal: {
    typeUrl: string;
    encode(message: ExpiryFuturesMarketLaunchProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExpiryFuturesMarketLaunchProposal;
    fromPartial(object: Partial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal;
    fromAmino(object: ExpiryFuturesMarketLaunchProposalAmino): ExpiryFuturesMarketLaunchProposal;
    toAmino(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalAmino;
    fromAminoMsg(object: ExpiryFuturesMarketLaunchProposalAminoMsg): ExpiryFuturesMarketLaunchProposal;
    fromProtoMsg(message: ExpiryFuturesMarketLaunchProposalProtoMsg): ExpiryFuturesMarketLaunchProposal;
    toProto(message: ExpiryFuturesMarketLaunchProposal): Uint8Array;
    toProtoMsg(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalProtoMsg;
};
export declare const DerivativeMarketParamUpdateProposal: {
    typeUrl: string;
    encode(message: DerivativeMarketParamUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeMarketParamUpdateProposal;
    fromPartial(object: Partial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal;
    fromAmino(object: DerivativeMarketParamUpdateProposalAmino): DerivativeMarketParamUpdateProposal;
    toAmino(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalAmino;
    fromAminoMsg(object: DerivativeMarketParamUpdateProposalAminoMsg): DerivativeMarketParamUpdateProposal;
    fromProtoMsg(message: DerivativeMarketParamUpdateProposalProtoMsg): DerivativeMarketParamUpdateProposal;
    toProto(message: DerivativeMarketParamUpdateProposal): Uint8Array;
    toProtoMsg(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalProtoMsg;
};
export declare const MarketForcedSettlementProposal: {
    typeUrl: string;
    encode(message: MarketForcedSettlementProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MarketForcedSettlementProposal;
    fromPartial(object: Partial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal;
    fromAmino(object: MarketForcedSettlementProposalAmino): MarketForcedSettlementProposal;
    toAmino(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalAmino;
    fromAminoMsg(object: MarketForcedSettlementProposalAminoMsg): MarketForcedSettlementProposal;
    fromProtoMsg(message: MarketForcedSettlementProposalProtoMsg): MarketForcedSettlementProposal;
    toProto(message: MarketForcedSettlementProposal): Uint8Array;
    toProtoMsg(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalProtoMsg;
};
export declare const UpdateDenomDecimalsProposal: {
    typeUrl: string;
    encode(message: UpdateDenomDecimalsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateDenomDecimalsProposal;
    fromPartial(object: Partial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal;
    fromAmino(object: UpdateDenomDecimalsProposalAmino): UpdateDenomDecimalsProposal;
    toAmino(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalAmino;
    fromAminoMsg(object: UpdateDenomDecimalsProposalAminoMsg): UpdateDenomDecimalsProposal;
    fromProtoMsg(message: UpdateDenomDecimalsProposalProtoMsg): UpdateDenomDecimalsProposal;
    toProto(message: UpdateDenomDecimalsProposal): Uint8Array;
    toProtoMsg(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalProtoMsg;
};
export declare const BinaryOptionsMarketParamUpdateProposal: {
    typeUrl: string;
    encode(message: BinaryOptionsMarketParamUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BinaryOptionsMarketParamUpdateProposal;
    fromPartial(object: Partial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal;
    fromAmino(object: BinaryOptionsMarketParamUpdateProposalAmino): BinaryOptionsMarketParamUpdateProposal;
    toAmino(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalAmino;
    fromAminoMsg(object: BinaryOptionsMarketParamUpdateProposalAminoMsg): BinaryOptionsMarketParamUpdateProposal;
    fromProtoMsg(message: BinaryOptionsMarketParamUpdateProposalProtoMsg): BinaryOptionsMarketParamUpdateProposal;
    toProto(message: BinaryOptionsMarketParamUpdateProposal): Uint8Array;
    toProtoMsg(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalProtoMsg;
};
export declare const ProviderOracleParams: {
    typeUrl: string;
    encode(message: ProviderOracleParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderOracleParams;
    fromPartial(object: Partial<ProviderOracleParams>): ProviderOracleParams;
    fromAmino(object: ProviderOracleParamsAmino): ProviderOracleParams;
    toAmino(message: ProviderOracleParams): ProviderOracleParamsAmino;
    fromAminoMsg(object: ProviderOracleParamsAminoMsg): ProviderOracleParams;
    fromProtoMsg(message: ProviderOracleParamsProtoMsg): ProviderOracleParams;
    toProto(message: ProviderOracleParams): Uint8Array;
    toProtoMsg(message: ProviderOracleParams): ProviderOracleParamsProtoMsg;
};
export declare const OracleParams: {
    typeUrl: string;
    encode(message: OracleParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OracleParams;
    fromPartial(object: Partial<OracleParams>): OracleParams;
    fromAmino(object: OracleParamsAmino): OracleParams;
    toAmino(message: OracleParams): OracleParamsAmino;
    fromAminoMsg(object: OracleParamsAminoMsg): OracleParams;
    fromProtoMsg(message: OracleParamsProtoMsg): OracleParams;
    toProto(message: OracleParams): Uint8Array;
    toProtoMsg(message: OracleParams): OracleParamsProtoMsg;
};
export declare const TradingRewardCampaignLaunchProposal: {
    typeUrl: string;
    encode(message: TradingRewardCampaignLaunchProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingRewardCampaignLaunchProposal;
    fromPartial(object: Partial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal;
    fromAmino(object: TradingRewardCampaignLaunchProposalAmino): TradingRewardCampaignLaunchProposal;
    toAmino(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalAmino;
    fromAminoMsg(object: TradingRewardCampaignLaunchProposalAminoMsg): TradingRewardCampaignLaunchProposal;
    fromProtoMsg(message: TradingRewardCampaignLaunchProposalProtoMsg): TradingRewardCampaignLaunchProposal;
    toProto(message: TradingRewardCampaignLaunchProposal): Uint8Array;
    toProtoMsg(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalProtoMsg;
};
export declare const TradingRewardCampaignUpdateProposal: {
    typeUrl: string;
    encode(message: TradingRewardCampaignUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingRewardCampaignUpdateProposal;
    fromPartial(object: Partial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal;
    fromAmino(object: TradingRewardCampaignUpdateProposalAmino): TradingRewardCampaignUpdateProposal;
    toAmino(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalAmino;
    fromAminoMsg(object: TradingRewardCampaignUpdateProposalAminoMsg): TradingRewardCampaignUpdateProposal;
    fromProtoMsg(message: TradingRewardCampaignUpdateProposalProtoMsg): TradingRewardCampaignUpdateProposal;
    toProto(message: TradingRewardCampaignUpdateProposal): Uint8Array;
    toProtoMsg(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalProtoMsg;
};
export declare const RewardPointUpdate: {
    typeUrl: string;
    encode(message: RewardPointUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardPointUpdate;
    fromPartial(object: Partial<RewardPointUpdate>): RewardPointUpdate;
    fromAmino(object: RewardPointUpdateAmino): RewardPointUpdate;
    toAmino(message: RewardPointUpdate): RewardPointUpdateAmino;
    fromAminoMsg(object: RewardPointUpdateAminoMsg): RewardPointUpdate;
    fromProtoMsg(message: RewardPointUpdateProtoMsg): RewardPointUpdate;
    toProto(message: RewardPointUpdate): Uint8Array;
    toProtoMsg(message: RewardPointUpdate): RewardPointUpdateProtoMsg;
};
export declare const TradingRewardPendingPointsUpdateProposal: {
    typeUrl: string;
    encode(message: TradingRewardPendingPointsUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingRewardPendingPointsUpdateProposal;
    fromPartial(object: Partial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal;
    fromAmino(object: TradingRewardPendingPointsUpdateProposalAmino): TradingRewardPendingPointsUpdateProposal;
    toAmino(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalAmino;
    fromAminoMsg(object: TradingRewardPendingPointsUpdateProposalAminoMsg): TradingRewardPendingPointsUpdateProposal;
    fromProtoMsg(message: TradingRewardPendingPointsUpdateProposalProtoMsg): TradingRewardPendingPointsUpdateProposal;
    toProto(message: TradingRewardPendingPointsUpdateProposal): Uint8Array;
    toProtoMsg(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalProtoMsg;
};
export declare const FeeDiscountProposal: {
    typeUrl: string;
    encode(message: FeeDiscountProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeDiscountProposal;
    fromPartial(object: Partial<FeeDiscountProposal>): FeeDiscountProposal;
    fromAmino(object: FeeDiscountProposalAmino): FeeDiscountProposal;
    toAmino(message: FeeDiscountProposal): FeeDiscountProposalAmino;
    fromAminoMsg(object: FeeDiscountProposalAminoMsg): FeeDiscountProposal;
    fromProtoMsg(message: FeeDiscountProposalProtoMsg): FeeDiscountProposal;
    toProto(message: FeeDiscountProposal): Uint8Array;
    toProtoMsg(message: FeeDiscountProposal): FeeDiscountProposalProtoMsg;
};
export declare const BatchCommunityPoolSpendProposal: {
    typeUrl: string;
    encode(message: BatchCommunityPoolSpendProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchCommunityPoolSpendProposal;
    fromPartial(object: Partial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal;
    fromAmino(object: BatchCommunityPoolSpendProposalAmino): BatchCommunityPoolSpendProposal;
    toAmino(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalAmino;
    fromAminoMsg(object: BatchCommunityPoolSpendProposalAminoMsg): BatchCommunityPoolSpendProposal;
    fromProtoMsg(message: BatchCommunityPoolSpendProposalProtoMsg): BatchCommunityPoolSpendProposal;
    toProto(message: BatchCommunityPoolSpendProposal): Uint8Array;
    toProtoMsg(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalProtoMsg;
};
export declare const MsgRewardsOptOut: {
    typeUrl: string;
    encode(message: MsgRewardsOptOut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRewardsOptOut;
    fromPartial(object: Partial<MsgRewardsOptOut>): MsgRewardsOptOut;
    fromAmino(object: MsgRewardsOptOutAmino): MsgRewardsOptOut;
    toAmino(message: MsgRewardsOptOut): MsgRewardsOptOutAmino;
    fromAminoMsg(object: MsgRewardsOptOutAminoMsg): MsgRewardsOptOut;
    fromProtoMsg(message: MsgRewardsOptOutProtoMsg): MsgRewardsOptOut;
    toProto(message: MsgRewardsOptOut): Uint8Array;
    toProtoMsg(message: MsgRewardsOptOut): MsgRewardsOptOutProtoMsg;
};
export declare const MsgRewardsOptOutResponse: {
    typeUrl: string;
    encode(_: MsgRewardsOptOutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRewardsOptOutResponse;
    fromPartial(_: Partial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse;
    fromAmino(_: MsgRewardsOptOutResponseAmino): MsgRewardsOptOutResponse;
    toAmino(_: MsgRewardsOptOutResponse): MsgRewardsOptOutResponseAmino;
    fromAminoMsg(object: MsgRewardsOptOutResponseAminoMsg): MsgRewardsOptOutResponse;
    fromProtoMsg(message: MsgRewardsOptOutResponseProtoMsg): MsgRewardsOptOutResponse;
    toProto(message: MsgRewardsOptOutResponse): Uint8Array;
    toProtoMsg(message: MsgRewardsOptOutResponse): MsgRewardsOptOutResponseProtoMsg;
};
export declare const MsgReclaimLockedFunds: {
    typeUrl: string;
    encode(message: MsgReclaimLockedFunds, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgReclaimLockedFunds;
    fromPartial(object: Partial<MsgReclaimLockedFunds>): MsgReclaimLockedFunds;
    fromAmino(object: MsgReclaimLockedFundsAmino): MsgReclaimLockedFunds;
    toAmino(message: MsgReclaimLockedFunds): MsgReclaimLockedFundsAmino;
    fromAminoMsg(object: MsgReclaimLockedFundsAminoMsg): MsgReclaimLockedFunds;
    fromProtoMsg(message: MsgReclaimLockedFundsProtoMsg): MsgReclaimLockedFunds;
    toProto(message: MsgReclaimLockedFunds): Uint8Array;
    toProtoMsg(message: MsgReclaimLockedFunds): MsgReclaimLockedFundsProtoMsg;
};
export declare const MsgReclaimLockedFundsResponse: {
    typeUrl: string;
    encode(_: MsgReclaimLockedFundsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgReclaimLockedFundsResponse;
    fromPartial(_: Partial<MsgReclaimLockedFundsResponse>): MsgReclaimLockedFundsResponse;
    fromAmino(_: MsgReclaimLockedFundsResponseAmino): MsgReclaimLockedFundsResponse;
    toAmino(_: MsgReclaimLockedFundsResponse): MsgReclaimLockedFundsResponseAmino;
    fromAminoMsg(object: MsgReclaimLockedFundsResponseAminoMsg): MsgReclaimLockedFundsResponse;
    fromProtoMsg(message: MsgReclaimLockedFundsResponseProtoMsg): MsgReclaimLockedFundsResponse;
    toProto(message: MsgReclaimLockedFundsResponse): Uint8Array;
    toProtoMsg(message: MsgReclaimLockedFundsResponse): MsgReclaimLockedFundsResponseProtoMsg;
};
export declare const MsgSignData: {
    typeUrl: string;
    encode(message: MsgSignData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSignData;
    fromPartial(object: Partial<MsgSignData>): MsgSignData;
    fromAmino(object: MsgSignDataAmino): MsgSignData;
    toAmino(message: MsgSignData): MsgSignDataAmino;
    fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData;
    fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData;
    toProto(message: MsgSignData): Uint8Array;
    toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg;
};
export declare const MsgSignDoc: {
    typeUrl: string;
    encode(message: MsgSignDoc, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSignDoc;
    fromPartial(object: Partial<MsgSignDoc>): MsgSignDoc;
    fromAmino(object: MsgSignDocAmino): MsgSignDoc;
    toAmino(message: MsgSignDoc): MsgSignDocAmino;
    fromAminoMsg(object: MsgSignDocAminoMsg): MsgSignDoc;
    fromProtoMsg(message: MsgSignDocProtoMsg): MsgSignDoc;
    toProto(message: MsgSignDoc): Uint8Array;
    toProtoMsg(message: MsgSignDoc): MsgSignDocProtoMsg;
};
export declare const MsgAdminUpdateBinaryOptionsMarket: {
    typeUrl: string;
    encode(message: MsgAdminUpdateBinaryOptionsMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAdminUpdateBinaryOptionsMarket;
    fromPartial(object: Partial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket;
    fromAmino(object: MsgAdminUpdateBinaryOptionsMarketAmino): MsgAdminUpdateBinaryOptionsMarket;
    toAmino(message: MsgAdminUpdateBinaryOptionsMarket): MsgAdminUpdateBinaryOptionsMarketAmino;
    fromAminoMsg(object: MsgAdminUpdateBinaryOptionsMarketAminoMsg): MsgAdminUpdateBinaryOptionsMarket;
    fromProtoMsg(message: MsgAdminUpdateBinaryOptionsMarketProtoMsg): MsgAdminUpdateBinaryOptionsMarket;
    toProto(message: MsgAdminUpdateBinaryOptionsMarket): Uint8Array;
    toProtoMsg(message: MsgAdminUpdateBinaryOptionsMarket): MsgAdminUpdateBinaryOptionsMarketProtoMsg;
};
export declare const MsgAdminUpdateBinaryOptionsMarketResponse: {
    typeUrl: string;
    encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromPartial(_: Partial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromAmino(_: MsgAdminUpdateBinaryOptionsMarketResponseAmino): MsgAdminUpdateBinaryOptionsMarketResponse;
    toAmino(_: MsgAdminUpdateBinaryOptionsMarketResponse): MsgAdminUpdateBinaryOptionsMarketResponseAmino;
    fromAminoMsg(object: MsgAdminUpdateBinaryOptionsMarketResponseAminoMsg): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromProtoMsg(message: MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg): MsgAdminUpdateBinaryOptionsMarketResponse;
    toProto(message: MsgAdminUpdateBinaryOptionsMarketResponse): Uint8Array;
    toProtoMsg(message: MsgAdminUpdateBinaryOptionsMarketResponse): MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg;
};
export declare const AtomicMarketOrderFeeMultiplierScheduleProposal: {
    typeUrl: string;
    encode(message: AtomicMarketOrderFeeMultiplierScheduleProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AtomicMarketOrderFeeMultiplierScheduleProposal;
    fromPartial(object: Partial<AtomicMarketOrderFeeMultiplierScheduleProposal>): AtomicMarketOrderFeeMultiplierScheduleProposal;
    fromAmino(object: AtomicMarketOrderFeeMultiplierScheduleProposalAmino): AtomicMarketOrderFeeMultiplierScheduleProposal;
    toAmino(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalAmino;
    fromAminoMsg(object: AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg): AtomicMarketOrderFeeMultiplierScheduleProposal;
    fromProtoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg): AtomicMarketOrderFeeMultiplierScheduleProposal;
    toProto(message: AtomicMarketOrderFeeMultiplierScheduleProposal): Uint8Array;
    toProtoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg;
};
