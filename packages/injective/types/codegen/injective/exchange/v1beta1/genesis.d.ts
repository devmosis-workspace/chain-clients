import { Params, ParamsSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, DenomDecimals, DenomDecimalsSDKType, MarketFeeMultiplier, MarketFeeMultiplierSDKType, AggregateSubaccountVolumeRecord, AggregateSubaccountVolumeRecordSDKType, MarketVolume, MarketVolumeSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, Deposit, DepositSDKType, Position, PositionSDKType, SubaccountTradeNonce, SubaccountTradeNonceSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType } from "./exchange";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to exchange. */
    params?: Params;
    /** spot_markets is an array containing the genesis trade pairs */
    spotMarkets: SpotMarket[];
    /** derivative_markets is an array containing the genesis derivative markets */
    derivativeMarkets: DerivativeMarket[];
    /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
    spotOrderbook: SpotOrderBook[];
    /**
     * derivative_orderbook defines the derivative exchange limit orderbook active
     * at genesis.
     */
    derivativeOrderbook: DerivativeOrderBook[];
    /** balances defines the exchange users balances active at genesis. */
    balances: Balance[];
    /** positions defines the exchange derivative positions at genesis */
    positions: DerivativePosition[];
    /**
     * subaccount_trade_nonces defines the subaccount trade nonces for the
     * subaccounts at genesis
     */
    subaccountTradeNonces: SubaccountNonce[];
    /**
     * expiry_futures_market_info defines the market info for the expiry futures
     * markets at genesis
     */
    expiryFuturesMarketInfoState: ExpiryFuturesMarketInfoState[];
    /**
     * perpetual_market_info defines the market info for the perpetual derivative
     * markets at genesis
     */
    perpetualMarketInfo: PerpetualMarketInfo[];
    /**
     * perpetual_market_funding_state defines the funding state for the perpetual
     * derivative markets at genesis
     */
    perpetualMarketFundingState: PerpetualMarketFundingState[];
    derivativeMarketSettlementScheduled: DerivativeMarketSettlementInfo[];
    /** sets spot markets as enabled */
    isSpotExchangeEnabled: boolean;
    /** sets derivative markets as enabled */
    isDerivativesExchangeEnabled: boolean;
    /** the current trading reward campaign info */
    tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
    /** the current and upcoming trading reward campaign pools */
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    tradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPoints[];
    /** the fee discount schedule */
    feeDiscountSchedule?: FeeDiscountSchedule;
    /** the cached fee discount account tiers with TTL */
    feeDiscountAccountTierTtl: FeeDiscountAccountTierTTL[];
    feeDiscountBucketVolumeAccounts: FeeDiscountBucketVolumeAccounts[];
    /** sets the first fee cycle as finished */
    isFirstFeeCycleFinished: boolean;
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    pendingTradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPendingPoints[];
    /** the addresses opting out of trading rewards */
    rewardsOptOutAddresses: string[];
    historicalTradeRecords: TradeRecords[];
    /**
     * binary_options_markets is an array containing the genesis binary options
     * markets
     */
    binaryOptionsMarkets: BinaryOptionsMarket[];
    /**
     * binary_options_markets_scheduled_for_settlement contains the marketIDs of
     * binary options markets scheduled for next-block settlement
     */
    binaryOptionsMarketIdsScheduledForSettlement: string[];
    /**
     * spot_market_ids_scheduled_to_force_close defines the scheduled markets for
     * forced closings at genesis
     */
    spotMarketIdsScheduledToForceClose: string[];
    /** denom_decimals defines the denom decimals for the exchange. */
    denomDecimals: DenomDecimals[];
    conditionalDerivativeOrderbooks: ConditionalDerivativeOrderBook[];
    /**
     * market_fee_multipliers contains any non-default atomic order fee
     * multipliers
     */
    marketFeeMultipliers: MarketFeeMultiplier[];
    orderbookSequences: OrderbookSequence[];
    subaccountVolumes: AggregateSubaccountVolumeRecord[];
    marketVolumes: MarketVolume[];
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    spot_markets: SpotMarketSDKType[];
    derivative_markets: DerivativeMarketSDKType[];
    spot_orderbook: SpotOrderBookSDKType[];
    derivative_orderbook: DerivativeOrderBookSDKType[];
    balances: BalanceSDKType[];
    positions: DerivativePositionSDKType[];
    subaccount_trade_nonces: SubaccountNonceSDKType[];
    expiry_futures_market_info_state: ExpiryFuturesMarketInfoStateSDKType[];
    perpetual_market_info: PerpetualMarketInfoSDKType[];
    perpetual_market_funding_state: PerpetualMarketFundingStateSDKType[];
    derivative_market_settlement_scheduled: DerivativeMarketSettlementInfoSDKType[];
    is_spot_exchange_enabled: boolean;
    is_derivatives_exchange_enabled: boolean;
    trading_reward_campaign_info?: TradingRewardCampaignInfoSDKType;
    trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    trading_reward_campaign_account_points: TradingRewardCampaignAccountPointsSDKType[];
    fee_discount_schedule?: FeeDiscountScheduleSDKType;
    fee_discount_account_tier_ttl: FeeDiscountAccountTierTTLSDKType[];
    fee_discount_bucket_volume_accounts: FeeDiscountBucketVolumeAccountsSDKType[];
    is_first_fee_cycle_finished: boolean;
    pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    pending_trading_reward_campaign_account_points: TradingRewardCampaignAccountPendingPointsSDKType[];
    rewards_opt_out_addresses: string[];
    historical_trade_records: TradeRecordsSDKType[];
    binary_options_markets: BinaryOptionsMarketSDKType[];
    binary_options_market_ids_scheduled_for_settlement: string[];
    spot_market_ids_scheduled_to_force_close: string[];
    denom_decimals: DenomDecimalsSDKType[];
    conditional_derivative_orderbooks: ConditionalDerivativeOrderBookSDKType[];
    market_fee_multipliers: MarketFeeMultiplierSDKType[];
    orderbook_sequences: OrderbookSequenceSDKType[];
    subaccount_volumes: AggregateSubaccountVolumeRecordSDKType[];
    market_volumes: MarketVolumeSDKType[];
}
export interface OrderbookSequence {
    sequence: Long;
    marketId: string;
}
export interface OrderbookSequenceSDKType {
    sequence: Long;
    market_id: string;
}
export interface FeeDiscountAccountTierTTL {
    account: string;
    tierTtl?: FeeDiscountTierTTL;
}
export interface FeeDiscountAccountTierTTLSDKType {
    account: string;
    tier_ttl?: FeeDiscountTierTTLSDKType;
}
export interface FeeDiscountBucketVolumeAccounts {
    bucketStartTimestamp: Long;
    accountVolume: AccountVolume[];
}
export interface FeeDiscountBucketVolumeAccountsSDKType {
    bucket_start_timestamp: Long;
    account_volume: AccountVolumeSDKType[];
}
export interface AccountVolume {
    account: string;
    volume: string;
}
export interface AccountVolumeSDKType {
    account: string;
    volume: string;
}
export interface TradingRewardCampaignAccountPoints {
    account: string;
    points: string;
}
export interface TradingRewardCampaignAccountPointsSDKType {
    account: string;
    points: string;
}
export interface TradingRewardCampaignAccountPendingPoints {
    rewardPoolStartTimestamp: Long;
    accountPoints: TradingRewardCampaignAccountPoints[];
}
export interface TradingRewardCampaignAccountPendingPointsSDKType {
    reward_pool_start_timestamp: Long;
    account_points: TradingRewardCampaignAccountPointsSDKType[];
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBook {
    marketId: string;
    isBuySide: boolean;
    orders: SpotLimitOrder[];
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBookSDKType {
    market_id: string;
    isBuySide: boolean;
    orders: SpotLimitOrderSDKType[];
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBook {
    marketId: string;
    isBuySide: boolean;
    orders: DerivativeLimitOrder[];
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBookSDKType {
    market_id: string;
    isBuySide: boolean;
    orders: DerivativeLimitOrderSDKType[];
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBook {
    marketId: string;
    limitBuyOrders: DerivativeLimitOrder[];
    marketBuyOrders: DerivativeMarketOrder[];
    limitSellOrders: DerivativeLimitOrder[];
    marketSellOrders: DerivativeMarketOrder[];
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBookSDKType {
    market_id: string;
    limit_buy_orders: DerivativeLimitOrderSDKType[];
    market_buy_orders: DerivativeMarketOrderSDKType[];
    limit_sell_orders: DerivativeLimitOrderSDKType[];
    market_sell_orders: DerivativeMarketOrderSDKType[];
}
export interface Balance {
    subaccountId: string;
    denom: string;
    deposits?: Deposit;
}
export interface BalanceSDKType {
    subaccount_id: string;
    denom: string;
    deposits?: DepositSDKType;
}
export interface DerivativePosition {
    subaccountId: string;
    marketId: string;
    position?: Position;
}
export interface DerivativePositionSDKType {
    subaccount_id: string;
    market_id: string;
    position?: PositionSDKType;
}
export interface SubaccountNonce {
    subaccountId: string;
    subaccountTradeNonce?: SubaccountTradeNonce;
}
export interface SubaccountNonceSDKType {
    subaccount_id: string;
    subaccount_trade_nonce?: SubaccountTradeNonceSDKType;
}
export interface ExpiryFuturesMarketInfoState {
    marketId: string;
    marketInfo?: ExpiryFuturesMarketInfo;
}
export interface ExpiryFuturesMarketInfoStateSDKType {
    market_id: string;
    market_info?: ExpiryFuturesMarketInfoSDKType;
}
export interface PerpetualMarketFundingState {
    marketId: string;
    funding?: PerpetualMarketFunding;
}
export interface PerpetualMarketFundingStateSDKType {
    market_id: string;
    funding?: PerpetualMarketFundingSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const OrderbookSequence: {
    encode(message: OrderbookSequence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OrderbookSequence;
    fromPartial(object: Partial<OrderbookSequence>): OrderbookSequence;
};
export declare const FeeDiscountAccountTierTTL: {
    encode(message: FeeDiscountAccountTierTTL, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeDiscountAccountTierTTL;
    fromPartial(object: Partial<FeeDiscountAccountTierTTL>): FeeDiscountAccountTierTTL;
};
export declare const FeeDiscountBucketVolumeAccounts: {
    encode(message: FeeDiscountBucketVolumeAccounts, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeDiscountBucketVolumeAccounts;
    fromPartial(object: Partial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts;
};
export declare const AccountVolume: {
    encode(message: AccountVolume, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountVolume;
    fromPartial(object: Partial<AccountVolume>): AccountVolume;
};
export declare const TradingRewardCampaignAccountPoints: {
    encode(message: TradingRewardCampaignAccountPoints, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TradingRewardCampaignAccountPoints;
    fromPartial(object: Partial<TradingRewardCampaignAccountPoints>): TradingRewardCampaignAccountPoints;
};
export declare const TradingRewardCampaignAccountPendingPoints: {
    encode(message: TradingRewardCampaignAccountPendingPoints, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TradingRewardCampaignAccountPendingPoints;
    fromPartial(object: Partial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints;
};
export declare const SpotOrderBook: {
    encode(message: SpotOrderBook, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotOrderBook;
    fromPartial(object: Partial<SpotOrderBook>): SpotOrderBook;
};
export declare const DerivativeOrderBook: {
    encode(message: DerivativeOrderBook, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DerivativeOrderBook;
    fromPartial(object: Partial<DerivativeOrderBook>): DerivativeOrderBook;
};
export declare const ConditionalDerivativeOrderBook: {
    encode(message: ConditionalDerivativeOrderBook, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConditionalDerivativeOrderBook;
    fromPartial(object: Partial<ConditionalDerivativeOrderBook>): ConditionalDerivativeOrderBook;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Balance;
    fromPartial(object: Partial<Balance>): Balance;
};
export declare const DerivativePosition: {
    encode(message: DerivativePosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DerivativePosition;
    fromPartial(object: Partial<DerivativePosition>): DerivativePosition;
};
export declare const SubaccountNonce: {
    encode(message: SubaccountNonce, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SubaccountNonce;
    fromPartial(object: Partial<SubaccountNonce>): SubaccountNonce;
};
export declare const ExpiryFuturesMarketInfoState: {
    encode(message: ExpiryFuturesMarketInfoState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExpiryFuturesMarketInfoState;
    fromPartial(object: Partial<ExpiryFuturesMarketInfoState>): ExpiryFuturesMarketInfoState;
};
export declare const PerpetualMarketFundingState: {
    encode(message: PerpetualMarketFundingState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PerpetualMarketFundingState;
    fromPartial(object: Partial<PerpetualMarketFundingState>): PerpetualMarketFundingState;
};
