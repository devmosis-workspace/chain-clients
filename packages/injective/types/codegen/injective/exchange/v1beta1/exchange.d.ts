import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { BinaryWriter } from "../../../binary";
export declare enum AtomicMarketOrderAccessLevel {
    Nobody = 0,
    /** BeginBlockerSmartContractsOnly - currently unsupported */
    BeginBlockerSmartContractsOnly = 1,
    SmartContractsOnly = 2,
    Everyone = 3,
    UNRECOGNIZED = -1
}
export declare const AtomicMarketOrderAccessLevelSDKType: typeof AtomicMarketOrderAccessLevel;
export declare const AtomicMarketOrderAccessLevelAmino: typeof AtomicMarketOrderAccessLevel;
export declare function atomicMarketOrderAccessLevelFromJSON(object: any): AtomicMarketOrderAccessLevel;
export declare function atomicMarketOrderAccessLevelToJSON(object: AtomicMarketOrderAccessLevel): string;
export declare enum MarketStatus {
    Unspecified = 0,
    Active = 1,
    Paused = 2,
    Demolished = 3,
    Expired = 4,
    UNRECOGNIZED = -1
}
export declare const MarketStatusSDKType: typeof MarketStatus;
export declare const MarketStatusAmino: typeof MarketStatus;
export declare function marketStatusFromJSON(object: any): MarketStatus;
export declare function marketStatusToJSON(object: MarketStatus): string;
export declare enum OrderType {
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
    UNRECOGNIZED = -1
}
export declare const OrderTypeSDKType: typeof OrderType;
export declare const OrderTypeAmino: typeof OrderType;
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare enum ExecutionType {
    UnspecifiedExecutionType = 0,
    Market = 1,
    LimitFill = 2,
    LimitMatchRestingOrder = 3,
    LimitMatchNewOrder = 4,
    MarketLiquidation = 5,
    ExpiryMarketSettlement = 6,
    UNRECOGNIZED = -1
}
export declare const ExecutionTypeSDKType: typeof ExecutionType;
export declare const ExecutionTypeAmino: typeof ExecutionType;
export declare function executionTypeFromJSON(object: any): ExecutionType;
export declare function executionTypeToJSON(object: ExecutionType): string;
export declare enum OrderMask {
    UNUSED = 0,
    ANY = 1,
    REGULAR = 2,
    CONDITIONAL = 4,
    DIRECTION_BUY_OR_HIGHER = 8,
    DIRECTION_SELL_OR_LOWER = 16,
    TYPE_MARKET = 32,
    TYPE_LIMIT = 64,
    UNRECOGNIZED = -1
}
export declare const OrderMaskSDKType: typeof OrderMask;
export declare const OrderMaskAmino: typeof OrderMask;
export declare function orderMaskFromJSON(object: any): OrderMask;
export declare function orderMaskToJSON(object: OrderMask): string;
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const MarketFeeMultiplier: {
    typeUrl: string;
    encode(message: MarketFeeMultiplier, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MarketFeeMultiplier;
    fromPartial(object: Partial<MarketFeeMultiplier>): MarketFeeMultiplier;
    fromAmino(object: MarketFeeMultiplierAmino): MarketFeeMultiplier;
    toAmino(message: MarketFeeMultiplier): MarketFeeMultiplierAmino;
    fromAminoMsg(object: MarketFeeMultiplierAminoMsg): MarketFeeMultiplier;
    fromProtoMsg(message: MarketFeeMultiplierProtoMsg): MarketFeeMultiplier;
    toProto(message: MarketFeeMultiplier): Uint8Array;
    toProtoMsg(message: MarketFeeMultiplier): MarketFeeMultiplierProtoMsg;
};
export declare const DerivativeMarket: {
    typeUrl: string;
    encode(message: DerivativeMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeMarket;
    fromPartial(object: Partial<DerivativeMarket>): DerivativeMarket;
    fromAmino(object: DerivativeMarketAmino): DerivativeMarket;
    toAmino(message: DerivativeMarket): DerivativeMarketAmino;
    fromAminoMsg(object: DerivativeMarketAminoMsg): DerivativeMarket;
    fromProtoMsg(message: DerivativeMarketProtoMsg): DerivativeMarket;
    toProto(message: DerivativeMarket): Uint8Array;
    toProtoMsg(message: DerivativeMarket): DerivativeMarketProtoMsg;
};
export declare const BinaryOptionsMarket: {
    typeUrl: string;
    encode(message: BinaryOptionsMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BinaryOptionsMarket;
    fromPartial(object: Partial<BinaryOptionsMarket>): BinaryOptionsMarket;
    fromAmino(object: BinaryOptionsMarketAmino): BinaryOptionsMarket;
    toAmino(message: BinaryOptionsMarket): BinaryOptionsMarketAmino;
    fromAminoMsg(object: BinaryOptionsMarketAminoMsg): BinaryOptionsMarket;
    fromProtoMsg(message: BinaryOptionsMarketProtoMsg): BinaryOptionsMarket;
    toProto(message: BinaryOptionsMarket): Uint8Array;
    toProtoMsg(message: BinaryOptionsMarket): BinaryOptionsMarketProtoMsg;
};
export declare const ExpiryFuturesMarketInfo: {
    typeUrl: string;
    encode(message: ExpiryFuturesMarketInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExpiryFuturesMarketInfo;
    fromPartial(object: Partial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo;
    fromAmino(object: ExpiryFuturesMarketInfoAmino): ExpiryFuturesMarketInfo;
    toAmino(message: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfoAmino;
    fromAminoMsg(object: ExpiryFuturesMarketInfoAminoMsg): ExpiryFuturesMarketInfo;
    fromProtoMsg(message: ExpiryFuturesMarketInfoProtoMsg): ExpiryFuturesMarketInfo;
    toProto(message: ExpiryFuturesMarketInfo): Uint8Array;
    toProtoMsg(message: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfoProtoMsg;
};
export declare const PerpetualMarketInfo: {
    typeUrl: string;
    encode(message: PerpetualMarketInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PerpetualMarketInfo;
    fromPartial(object: Partial<PerpetualMarketInfo>): PerpetualMarketInfo;
    fromAmino(object: PerpetualMarketInfoAmino): PerpetualMarketInfo;
    toAmino(message: PerpetualMarketInfo): PerpetualMarketInfoAmino;
    fromAminoMsg(object: PerpetualMarketInfoAminoMsg): PerpetualMarketInfo;
    fromProtoMsg(message: PerpetualMarketInfoProtoMsg): PerpetualMarketInfo;
    toProto(message: PerpetualMarketInfo): Uint8Array;
    toProtoMsg(message: PerpetualMarketInfo): PerpetualMarketInfoProtoMsg;
};
export declare const PerpetualMarketFunding: {
    typeUrl: string;
    encode(message: PerpetualMarketFunding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PerpetualMarketFunding;
    fromPartial(object: Partial<PerpetualMarketFunding>): PerpetualMarketFunding;
    fromAmino(object: PerpetualMarketFundingAmino): PerpetualMarketFunding;
    toAmino(message: PerpetualMarketFunding): PerpetualMarketFundingAmino;
    fromAminoMsg(object: PerpetualMarketFundingAminoMsg): PerpetualMarketFunding;
    fromProtoMsg(message: PerpetualMarketFundingProtoMsg): PerpetualMarketFunding;
    toProto(message: PerpetualMarketFunding): Uint8Array;
    toProtoMsg(message: PerpetualMarketFunding): PerpetualMarketFundingProtoMsg;
};
export declare const DerivativeMarketSettlementInfo: {
    typeUrl: string;
    encode(message: DerivativeMarketSettlementInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeMarketSettlementInfo;
    fromPartial(object: Partial<DerivativeMarketSettlementInfo>): DerivativeMarketSettlementInfo;
    fromAmino(object: DerivativeMarketSettlementInfoAmino): DerivativeMarketSettlementInfo;
    toAmino(message: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfoAmino;
    fromAminoMsg(object: DerivativeMarketSettlementInfoAminoMsg): DerivativeMarketSettlementInfo;
    fromProtoMsg(message: DerivativeMarketSettlementInfoProtoMsg): DerivativeMarketSettlementInfo;
    toProto(message: DerivativeMarketSettlementInfo): Uint8Array;
    toProtoMsg(message: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfoProtoMsg;
};
export declare const NextFundingTimestamp: {
    typeUrl: string;
    encode(message: NextFundingTimestamp, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NextFundingTimestamp;
    fromPartial(object: Partial<NextFundingTimestamp>): NextFundingTimestamp;
    fromAmino(object: NextFundingTimestampAmino): NextFundingTimestamp;
    toAmino(message: NextFundingTimestamp): NextFundingTimestampAmino;
    fromAminoMsg(object: NextFundingTimestampAminoMsg): NextFundingTimestamp;
    fromProtoMsg(message: NextFundingTimestampProtoMsg): NextFundingTimestamp;
    toProto(message: NextFundingTimestamp): Uint8Array;
    toProtoMsg(message: NextFundingTimestamp): NextFundingTimestampProtoMsg;
};
export declare const MidPriceAndTOB: {
    typeUrl: string;
    encode(message: MidPriceAndTOB, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MidPriceAndTOB;
    fromPartial(object: Partial<MidPriceAndTOB>): MidPriceAndTOB;
    fromAmino(object: MidPriceAndTOBAmino): MidPriceAndTOB;
    toAmino(message: MidPriceAndTOB): MidPriceAndTOBAmino;
    fromAminoMsg(object: MidPriceAndTOBAminoMsg): MidPriceAndTOB;
    fromProtoMsg(message: MidPriceAndTOBProtoMsg): MidPriceAndTOB;
    toProto(message: MidPriceAndTOB): Uint8Array;
    toProtoMsg(message: MidPriceAndTOB): MidPriceAndTOBProtoMsg;
};
export declare const SpotMarket: {
    typeUrl: string;
    encode(message: SpotMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotMarket;
    fromPartial(object: Partial<SpotMarket>): SpotMarket;
    fromAmino(object: SpotMarketAmino): SpotMarket;
    toAmino(message: SpotMarket): SpotMarketAmino;
    fromAminoMsg(object: SpotMarketAminoMsg): SpotMarket;
    fromProtoMsg(message: SpotMarketProtoMsg): SpotMarket;
    toProto(message: SpotMarket): Uint8Array;
    toProtoMsg(message: SpotMarket): SpotMarketProtoMsg;
};
export declare const Deposit: {
    typeUrl: string;
    encode(message: Deposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Deposit;
    fromPartial(object: Partial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
export declare const SubaccountTradeNonce: {
    typeUrl: string;
    encode(message: SubaccountTradeNonce, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountTradeNonce;
    fromPartial(object: Partial<SubaccountTradeNonce>): SubaccountTradeNonce;
    fromAmino(object: SubaccountTradeNonceAmino): SubaccountTradeNonce;
    toAmino(message: SubaccountTradeNonce): SubaccountTradeNonceAmino;
    fromAminoMsg(object: SubaccountTradeNonceAminoMsg): SubaccountTradeNonce;
    fromProtoMsg(message: SubaccountTradeNonceProtoMsg): SubaccountTradeNonce;
    toProto(message: SubaccountTradeNonce): Uint8Array;
    toProtoMsg(message: SubaccountTradeNonce): SubaccountTradeNonceProtoMsg;
};
export declare const OrderInfo: {
    typeUrl: string;
    encode(message: OrderInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OrderInfo;
    fromPartial(object: Partial<OrderInfo>): OrderInfo;
    fromAmino(object: OrderInfoAmino): OrderInfo;
    toAmino(message: OrderInfo): OrderInfoAmino;
    fromAminoMsg(object: OrderInfoAminoMsg): OrderInfo;
    fromProtoMsg(message: OrderInfoProtoMsg): OrderInfo;
    toProto(message: OrderInfo): Uint8Array;
    toProtoMsg(message: OrderInfo): OrderInfoProtoMsg;
};
export declare const SpotOrder: {
    typeUrl: string;
    encode(message: SpotOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotOrder;
    fromPartial(object: Partial<SpotOrder>): SpotOrder;
    fromAmino(object: SpotOrderAmino): SpotOrder;
    toAmino(message: SpotOrder): SpotOrderAmino;
    fromAminoMsg(object: SpotOrderAminoMsg): SpotOrder;
    fromProtoMsg(message: SpotOrderProtoMsg): SpotOrder;
    toProto(message: SpotOrder): Uint8Array;
    toProtoMsg(message: SpotOrder): SpotOrderProtoMsg;
};
export declare const SpotLimitOrder: {
    typeUrl: string;
    encode(message: SpotLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotLimitOrder;
    fromPartial(object: Partial<SpotLimitOrder>): SpotLimitOrder;
    fromAmino(object: SpotLimitOrderAmino): SpotLimitOrder;
    toAmino(message: SpotLimitOrder): SpotLimitOrderAmino;
    fromAminoMsg(object: SpotLimitOrderAminoMsg): SpotLimitOrder;
    fromProtoMsg(message: SpotLimitOrderProtoMsg): SpotLimitOrder;
    toProto(message: SpotLimitOrder): Uint8Array;
    toProtoMsg(message: SpotLimitOrder): SpotLimitOrderProtoMsg;
};
export declare const SpotMarketOrder: {
    typeUrl: string;
    encode(message: SpotMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotMarketOrder;
    fromPartial(object: Partial<SpotMarketOrder>): SpotMarketOrder;
    fromAmino(object: SpotMarketOrderAmino): SpotMarketOrder;
    toAmino(message: SpotMarketOrder): SpotMarketOrderAmino;
    fromAminoMsg(object: SpotMarketOrderAminoMsg): SpotMarketOrder;
    fromProtoMsg(message: SpotMarketOrderProtoMsg): SpotMarketOrder;
    toProto(message: SpotMarketOrder): Uint8Array;
    toProtoMsg(message: SpotMarketOrder): SpotMarketOrderProtoMsg;
};
export declare const DerivativeOrder: {
    typeUrl: string;
    encode(message: DerivativeOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeOrder;
    fromPartial(object: Partial<DerivativeOrder>): DerivativeOrder;
    fromAmino(object: DerivativeOrderAmino): DerivativeOrder;
    toAmino(message: DerivativeOrder): DerivativeOrderAmino;
    fromAminoMsg(object: DerivativeOrderAminoMsg): DerivativeOrder;
    fromProtoMsg(message: DerivativeOrderProtoMsg): DerivativeOrder;
    toProto(message: DerivativeOrder): Uint8Array;
    toProtoMsg(message: DerivativeOrder): DerivativeOrderProtoMsg;
};
export declare const SubaccountOrderbookMetadata: {
    typeUrl: string;
    encode(message: SubaccountOrderbookMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountOrderbookMetadata;
    fromPartial(object: Partial<SubaccountOrderbookMetadata>): SubaccountOrderbookMetadata;
    fromAmino(object: SubaccountOrderbookMetadataAmino): SubaccountOrderbookMetadata;
    toAmino(message: SubaccountOrderbookMetadata): SubaccountOrderbookMetadataAmino;
    fromAminoMsg(object: SubaccountOrderbookMetadataAminoMsg): SubaccountOrderbookMetadata;
    fromProtoMsg(message: SubaccountOrderbookMetadataProtoMsg): SubaccountOrderbookMetadata;
    toProto(message: SubaccountOrderbookMetadata): Uint8Array;
    toProtoMsg(message: SubaccountOrderbookMetadata): SubaccountOrderbookMetadataProtoMsg;
};
export declare const SubaccountOrder: {
    typeUrl: string;
    encode(message: SubaccountOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountOrder;
    fromPartial(object: Partial<SubaccountOrder>): SubaccountOrder;
    fromAmino(object: SubaccountOrderAmino): SubaccountOrder;
    toAmino(message: SubaccountOrder): SubaccountOrderAmino;
    fromAminoMsg(object: SubaccountOrderAminoMsg): SubaccountOrder;
    fromProtoMsg(message: SubaccountOrderProtoMsg): SubaccountOrder;
    toProto(message: SubaccountOrder): Uint8Array;
    toProtoMsg(message: SubaccountOrder): SubaccountOrderProtoMsg;
};
export declare const SubaccountOrderData: {
    typeUrl: string;
    encode(message: SubaccountOrderData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountOrderData;
    fromPartial(object: Partial<SubaccountOrderData>): SubaccountOrderData;
    fromAmino(object: SubaccountOrderDataAmino): SubaccountOrderData;
    toAmino(message: SubaccountOrderData): SubaccountOrderDataAmino;
    fromAminoMsg(object: SubaccountOrderDataAminoMsg): SubaccountOrderData;
    fromProtoMsg(message: SubaccountOrderDataProtoMsg): SubaccountOrderData;
    toProto(message: SubaccountOrderData): Uint8Array;
    toProtoMsg(message: SubaccountOrderData): SubaccountOrderDataProtoMsg;
};
export declare const DerivativeLimitOrder: {
    typeUrl: string;
    encode(message: DerivativeLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeLimitOrder;
    fromPartial(object: Partial<DerivativeLimitOrder>): DerivativeLimitOrder;
    fromAmino(object: DerivativeLimitOrderAmino): DerivativeLimitOrder;
    toAmino(message: DerivativeLimitOrder): DerivativeLimitOrderAmino;
    fromAminoMsg(object: DerivativeLimitOrderAminoMsg): DerivativeLimitOrder;
    fromProtoMsg(message: DerivativeLimitOrderProtoMsg): DerivativeLimitOrder;
    toProto(message: DerivativeLimitOrder): Uint8Array;
    toProtoMsg(message: DerivativeLimitOrder): DerivativeLimitOrderProtoMsg;
};
export declare const DerivativeMarketOrder: {
    typeUrl: string;
    encode(message: DerivativeMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeMarketOrder;
    fromPartial(object: Partial<DerivativeMarketOrder>): DerivativeMarketOrder;
    fromAmino(object: DerivativeMarketOrderAmino): DerivativeMarketOrder;
    toAmino(message: DerivativeMarketOrder): DerivativeMarketOrderAmino;
    fromAminoMsg(object: DerivativeMarketOrderAminoMsg): DerivativeMarketOrder;
    fromProtoMsg(message: DerivativeMarketOrderProtoMsg): DerivativeMarketOrder;
    toProto(message: DerivativeMarketOrder): Uint8Array;
    toProtoMsg(message: DerivativeMarketOrder): DerivativeMarketOrderProtoMsg;
};
export declare const Position: {
    typeUrl: string;
    encode(message: Position, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Position;
    fromPartial(object: Partial<Position>): Position;
    fromAmino(object: PositionAmino): Position;
    toAmino(message: Position): PositionAmino;
    fromAminoMsg(object: PositionAminoMsg): Position;
    fromProtoMsg(message: PositionProtoMsg): Position;
    toProto(message: Position): Uint8Array;
    toProtoMsg(message: Position): PositionProtoMsg;
};
export declare const MarketOrderIndicator: {
    typeUrl: string;
    encode(message: MarketOrderIndicator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MarketOrderIndicator;
    fromPartial(object: Partial<MarketOrderIndicator>): MarketOrderIndicator;
    fromAmino(object: MarketOrderIndicatorAmino): MarketOrderIndicator;
    toAmino(message: MarketOrderIndicator): MarketOrderIndicatorAmino;
    fromAminoMsg(object: MarketOrderIndicatorAminoMsg): MarketOrderIndicator;
    fromProtoMsg(message: MarketOrderIndicatorProtoMsg): MarketOrderIndicator;
    toProto(message: MarketOrderIndicator): Uint8Array;
    toProtoMsg(message: MarketOrderIndicator): MarketOrderIndicatorProtoMsg;
};
export declare const TradeLog: {
    typeUrl: string;
    encode(message: TradeLog, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradeLog;
    fromPartial(object: Partial<TradeLog>): TradeLog;
    fromAmino(object: TradeLogAmino): TradeLog;
    toAmino(message: TradeLog): TradeLogAmino;
    fromAminoMsg(object: TradeLogAminoMsg): TradeLog;
    fromProtoMsg(message: TradeLogProtoMsg): TradeLog;
    toProto(message: TradeLog): Uint8Array;
    toProtoMsg(message: TradeLog): TradeLogProtoMsg;
};
export declare const PositionDelta: {
    typeUrl: string;
    encode(message: PositionDelta, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionDelta;
    fromPartial(object: Partial<PositionDelta>): PositionDelta;
    fromAmino(object: PositionDeltaAmino): PositionDelta;
    toAmino(message: PositionDelta): PositionDeltaAmino;
    fromAminoMsg(object: PositionDeltaAminoMsg): PositionDelta;
    fromProtoMsg(message: PositionDeltaProtoMsg): PositionDelta;
    toProto(message: PositionDelta): Uint8Array;
    toProtoMsg(message: PositionDelta): PositionDeltaProtoMsg;
};
export declare const DerivativeTradeLog: {
    typeUrl: string;
    encode(message: DerivativeTradeLog, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeTradeLog;
    fromPartial(object: Partial<DerivativeTradeLog>): DerivativeTradeLog;
    fromAmino(object: DerivativeTradeLogAmino): DerivativeTradeLog;
    toAmino(message: DerivativeTradeLog): DerivativeTradeLogAmino;
    fromAminoMsg(object: DerivativeTradeLogAminoMsg): DerivativeTradeLog;
    fromProtoMsg(message: DerivativeTradeLogProtoMsg): DerivativeTradeLog;
    toProto(message: DerivativeTradeLog): Uint8Array;
    toProtoMsg(message: DerivativeTradeLog): DerivativeTradeLogProtoMsg;
};
export declare const SubaccountPosition: {
    typeUrl: string;
    encode(message: SubaccountPosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountPosition;
    fromPartial(object: Partial<SubaccountPosition>): SubaccountPosition;
    fromAmino(object: SubaccountPositionAmino): SubaccountPosition;
    toAmino(message: SubaccountPosition): SubaccountPositionAmino;
    fromAminoMsg(object: SubaccountPositionAminoMsg): SubaccountPosition;
    fromProtoMsg(message: SubaccountPositionProtoMsg): SubaccountPosition;
    toProto(message: SubaccountPosition): Uint8Array;
    toProtoMsg(message: SubaccountPosition): SubaccountPositionProtoMsg;
};
export declare const SubaccountDeposit: {
    typeUrl: string;
    encode(message: SubaccountDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountDeposit;
    fromPartial(object: Partial<SubaccountDeposit>): SubaccountDeposit;
    fromAmino(object: SubaccountDepositAmino): SubaccountDeposit;
    toAmino(message: SubaccountDeposit): SubaccountDepositAmino;
    fromAminoMsg(object: SubaccountDepositAminoMsg): SubaccountDeposit;
    fromProtoMsg(message: SubaccountDepositProtoMsg): SubaccountDeposit;
    toProto(message: SubaccountDeposit): Uint8Array;
    toProtoMsg(message: SubaccountDeposit): SubaccountDepositProtoMsg;
};
export declare const DepositUpdate: {
    typeUrl: string;
    encode(message: DepositUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositUpdate;
    fromPartial(object: Partial<DepositUpdate>): DepositUpdate;
    fromAmino(object: DepositUpdateAmino): DepositUpdate;
    toAmino(message: DepositUpdate): DepositUpdateAmino;
    fromAminoMsg(object: DepositUpdateAminoMsg): DepositUpdate;
    fromProtoMsg(message: DepositUpdateProtoMsg): DepositUpdate;
    toProto(message: DepositUpdate): Uint8Array;
    toProtoMsg(message: DepositUpdate): DepositUpdateProtoMsg;
};
export declare const PointsMultiplier: {
    typeUrl: string;
    encode(message: PointsMultiplier, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PointsMultiplier;
    fromPartial(object: Partial<PointsMultiplier>): PointsMultiplier;
    fromAmino(object: PointsMultiplierAmino): PointsMultiplier;
    toAmino(message: PointsMultiplier): PointsMultiplierAmino;
    fromAminoMsg(object: PointsMultiplierAminoMsg): PointsMultiplier;
    fromProtoMsg(message: PointsMultiplierProtoMsg): PointsMultiplier;
    toProto(message: PointsMultiplier): Uint8Array;
    toProtoMsg(message: PointsMultiplier): PointsMultiplierProtoMsg;
};
export declare const TradingRewardCampaignBoostInfo: {
    typeUrl: string;
    encode(message: TradingRewardCampaignBoostInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingRewardCampaignBoostInfo;
    fromPartial(object: Partial<TradingRewardCampaignBoostInfo>): TradingRewardCampaignBoostInfo;
    fromAmino(object: TradingRewardCampaignBoostInfoAmino): TradingRewardCampaignBoostInfo;
    toAmino(message: TradingRewardCampaignBoostInfo): TradingRewardCampaignBoostInfoAmino;
    fromAminoMsg(object: TradingRewardCampaignBoostInfoAminoMsg): TradingRewardCampaignBoostInfo;
    fromProtoMsg(message: TradingRewardCampaignBoostInfoProtoMsg): TradingRewardCampaignBoostInfo;
    toProto(message: TradingRewardCampaignBoostInfo): Uint8Array;
    toProtoMsg(message: TradingRewardCampaignBoostInfo): TradingRewardCampaignBoostInfoProtoMsg;
};
export declare const CampaignRewardPool: {
    typeUrl: string;
    encode(message: CampaignRewardPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CampaignRewardPool;
    fromPartial(object: Partial<CampaignRewardPool>): CampaignRewardPool;
    fromAmino(object: CampaignRewardPoolAmino): CampaignRewardPool;
    toAmino(message: CampaignRewardPool): CampaignRewardPoolAmino;
    fromAminoMsg(object: CampaignRewardPoolAminoMsg): CampaignRewardPool;
    fromProtoMsg(message: CampaignRewardPoolProtoMsg): CampaignRewardPool;
    toProto(message: CampaignRewardPool): Uint8Array;
    toProtoMsg(message: CampaignRewardPool): CampaignRewardPoolProtoMsg;
};
export declare const TradingRewardCampaignInfo: {
    typeUrl: string;
    encode(message: TradingRewardCampaignInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingRewardCampaignInfo;
    fromPartial(object: Partial<TradingRewardCampaignInfo>): TradingRewardCampaignInfo;
    fromAmino(object: TradingRewardCampaignInfoAmino): TradingRewardCampaignInfo;
    toAmino(message: TradingRewardCampaignInfo): TradingRewardCampaignInfoAmino;
    fromAminoMsg(object: TradingRewardCampaignInfoAminoMsg): TradingRewardCampaignInfo;
    fromProtoMsg(message: TradingRewardCampaignInfoProtoMsg): TradingRewardCampaignInfo;
    toProto(message: TradingRewardCampaignInfo): Uint8Array;
    toProtoMsg(message: TradingRewardCampaignInfo): TradingRewardCampaignInfoProtoMsg;
};
export declare const FeeDiscountTierInfo: {
    typeUrl: string;
    encode(message: FeeDiscountTierInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeDiscountTierInfo;
    fromPartial(object: Partial<FeeDiscountTierInfo>): FeeDiscountTierInfo;
    fromAmino(object: FeeDiscountTierInfoAmino): FeeDiscountTierInfo;
    toAmino(message: FeeDiscountTierInfo): FeeDiscountTierInfoAmino;
    fromAminoMsg(object: FeeDiscountTierInfoAminoMsg): FeeDiscountTierInfo;
    fromProtoMsg(message: FeeDiscountTierInfoProtoMsg): FeeDiscountTierInfo;
    toProto(message: FeeDiscountTierInfo): Uint8Array;
    toProtoMsg(message: FeeDiscountTierInfo): FeeDiscountTierInfoProtoMsg;
};
export declare const FeeDiscountSchedule: {
    typeUrl: string;
    encode(message: FeeDiscountSchedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeDiscountSchedule;
    fromPartial(object: Partial<FeeDiscountSchedule>): FeeDiscountSchedule;
    fromAmino(object: FeeDiscountScheduleAmino): FeeDiscountSchedule;
    toAmino(message: FeeDiscountSchedule): FeeDiscountScheduleAmino;
    fromAminoMsg(object: FeeDiscountScheduleAminoMsg): FeeDiscountSchedule;
    fromProtoMsg(message: FeeDiscountScheduleProtoMsg): FeeDiscountSchedule;
    toProto(message: FeeDiscountSchedule): Uint8Array;
    toProtoMsg(message: FeeDiscountSchedule): FeeDiscountScheduleProtoMsg;
};
export declare const FeeDiscountTierTTL: {
    typeUrl: string;
    encode(message: FeeDiscountTierTTL, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeDiscountTierTTL;
    fromPartial(object: Partial<FeeDiscountTierTTL>): FeeDiscountTierTTL;
    fromAmino(object: FeeDiscountTierTTLAmino): FeeDiscountTierTTL;
    toAmino(message: FeeDiscountTierTTL): FeeDiscountTierTTLAmino;
    fromAminoMsg(object: FeeDiscountTierTTLAminoMsg): FeeDiscountTierTTL;
    fromProtoMsg(message: FeeDiscountTierTTLProtoMsg): FeeDiscountTierTTL;
    toProto(message: FeeDiscountTierTTL): Uint8Array;
    toProtoMsg(message: FeeDiscountTierTTL): FeeDiscountTierTTLProtoMsg;
};
export declare const VolumeRecord: {
    typeUrl: string;
    encode(message: VolumeRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VolumeRecord;
    fromPartial(object: Partial<VolumeRecord>): VolumeRecord;
    fromAmino(object: VolumeRecordAmino): VolumeRecord;
    toAmino(message: VolumeRecord): VolumeRecordAmino;
    fromAminoMsg(object: VolumeRecordAminoMsg): VolumeRecord;
    fromProtoMsg(message: VolumeRecordProtoMsg): VolumeRecord;
    toProto(message: VolumeRecord): Uint8Array;
    toProtoMsg(message: VolumeRecord): VolumeRecordProtoMsg;
};
export declare const AccountRewards: {
    typeUrl: string;
    encode(message: AccountRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountRewards;
    fromPartial(object: Partial<AccountRewards>): AccountRewards;
    fromAmino(object: AccountRewardsAmino): AccountRewards;
    toAmino(message: AccountRewards): AccountRewardsAmino;
    fromAminoMsg(object: AccountRewardsAminoMsg): AccountRewards;
    fromProtoMsg(message: AccountRewardsProtoMsg): AccountRewards;
    toProto(message: AccountRewards): Uint8Array;
    toProtoMsg(message: AccountRewards): AccountRewardsProtoMsg;
};
export declare const TradeRecords: {
    typeUrl: string;
    encode(message: TradeRecords, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradeRecords;
    fromPartial(object: Partial<TradeRecords>): TradeRecords;
    fromAmino(object: TradeRecordsAmino): TradeRecords;
    toAmino(message: TradeRecords): TradeRecordsAmino;
    fromAminoMsg(object: TradeRecordsAminoMsg): TradeRecords;
    fromProtoMsg(message: TradeRecordsProtoMsg): TradeRecords;
    toProto(message: TradeRecords): Uint8Array;
    toProtoMsg(message: TradeRecords): TradeRecordsProtoMsg;
};
export declare const SubaccountIDs: {
    typeUrl: string;
    encode(message: SubaccountIDs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountIDs;
    fromPartial(object: Partial<SubaccountIDs>): SubaccountIDs;
    fromAmino(object: SubaccountIDsAmino): SubaccountIDs;
    toAmino(message: SubaccountIDs): SubaccountIDsAmino;
    fromAminoMsg(object: SubaccountIDsAminoMsg): SubaccountIDs;
    fromProtoMsg(message: SubaccountIDsProtoMsg): SubaccountIDs;
    toProto(message: SubaccountIDs): Uint8Array;
    toProtoMsg(message: SubaccountIDs): SubaccountIDsProtoMsg;
};
export declare const TradeRecord: {
    typeUrl: string;
    encode(message: TradeRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradeRecord;
    fromPartial(object: Partial<TradeRecord>): TradeRecord;
    fromAmino(object: TradeRecordAmino): TradeRecord;
    toAmino(message: TradeRecord): TradeRecordAmino;
    fromAminoMsg(object: TradeRecordAminoMsg): TradeRecord;
    fromProtoMsg(message: TradeRecordProtoMsg): TradeRecord;
    toProto(message: TradeRecord): Uint8Array;
    toProtoMsg(message: TradeRecord): TradeRecordProtoMsg;
};
export declare const Level: {
    typeUrl: string;
    encode(message: Level, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Level;
    fromPartial(object: Partial<Level>): Level;
    fromAmino(object: LevelAmino): Level;
    toAmino(message: Level): LevelAmino;
    fromAminoMsg(object: LevelAminoMsg): Level;
    fromProtoMsg(message: LevelProtoMsg): Level;
    toProto(message: Level): Uint8Array;
    toProtoMsg(message: Level): LevelProtoMsg;
};
export declare const AggregateSubaccountVolumeRecord: {
    typeUrl: string;
    encode(message: AggregateSubaccountVolumeRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AggregateSubaccountVolumeRecord;
    fromPartial(object: Partial<AggregateSubaccountVolumeRecord>): AggregateSubaccountVolumeRecord;
    fromAmino(object: AggregateSubaccountVolumeRecordAmino): AggregateSubaccountVolumeRecord;
    toAmino(message: AggregateSubaccountVolumeRecord): AggregateSubaccountVolumeRecordAmino;
    fromAminoMsg(object: AggregateSubaccountVolumeRecordAminoMsg): AggregateSubaccountVolumeRecord;
    fromProtoMsg(message: AggregateSubaccountVolumeRecordProtoMsg): AggregateSubaccountVolumeRecord;
    toProto(message: AggregateSubaccountVolumeRecord): Uint8Array;
    toProtoMsg(message: AggregateSubaccountVolumeRecord): AggregateSubaccountVolumeRecordProtoMsg;
};
export declare const AggregateAccountVolumeRecord: {
    typeUrl: string;
    encode(message: AggregateAccountVolumeRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AggregateAccountVolumeRecord;
    fromPartial(object: Partial<AggregateAccountVolumeRecord>): AggregateAccountVolumeRecord;
    fromAmino(object: AggregateAccountVolumeRecordAmino): AggregateAccountVolumeRecord;
    toAmino(message: AggregateAccountVolumeRecord): AggregateAccountVolumeRecordAmino;
    fromAminoMsg(object: AggregateAccountVolumeRecordAminoMsg): AggregateAccountVolumeRecord;
    fromProtoMsg(message: AggregateAccountVolumeRecordProtoMsg): AggregateAccountVolumeRecord;
    toProto(message: AggregateAccountVolumeRecord): Uint8Array;
    toProtoMsg(message: AggregateAccountVolumeRecord): AggregateAccountVolumeRecordProtoMsg;
};
export declare const MarketVolume: {
    typeUrl: string;
    encode(message: MarketVolume, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MarketVolume;
    fromPartial(object: Partial<MarketVolume>): MarketVolume;
    fromAmino(object: MarketVolumeAmino): MarketVolume;
    toAmino(message: MarketVolume): MarketVolumeAmino;
    fromAminoMsg(object: MarketVolumeAminoMsg): MarketVolume;
    fromProtoMsg(message: MarketVolumeProtoMsg): MarketVolume;
    toProto(message: MarketVolume): Uint8Array;
    toProtoMsg(message: MarketVolume): MarketVolumeProtoMsg;
};
export declare const DenomDecimals: {
    typeUrl: string;
    encode(message: DenomDecimals, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DenomDecimals;
    fromPartial(object: Partial<DenomDecimals>): DenomDecimals;
    fromAmino(object: DenomDecimalsAmino): DenomDecimals;
    toAmino(message: DenomDecimals): DenomDecimalsAmino;
    fromAminoMsg(object: DenomDecimalsAminoMsg): DenomDecimals;
    fromProtoMsg(message: DenomDecimalsProtoMsg): DenomDecimals;
    toProto(message: DenomDecimals): Uint8Array;
    toProtoMsg(message: DenomDecimals): DenomDecimalsProtoMsg;
};
