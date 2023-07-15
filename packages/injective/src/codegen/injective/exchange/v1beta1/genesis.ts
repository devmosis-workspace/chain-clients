import { Params, ParamsSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, DenomDecimals, DenomDecimalsSDKType, MarketFeeMultiplier, MarketFeeMultiplierSDKType, AggregateSubaccountVolumeRecord, AggregateSubaccountVolumeRecordSDKType, MarketVolume, MarketVolumeSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, Deposit, DepositSDKType, Position, PositionSDKType, SubaccountTradeNonce, SubaccountTradeNonceSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType } from "./exchange";
import { Long, isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    spotMarkets: [],
    derivativeMarkets: [],
    spotOrderbook: [],
    derivativeOrderbook: [],
    balances: [],
    positions: [],
    subaccountTradeNonces: [],
    expiryFuturesMarketInfoState: [],
    perpetualMarketInfo: [],
    perpetualMarketFundingState: [],
    derivativeMarketSettlementScheduled: [],
    isSpotExchangeEnabled: false,
    isDerivativesExchangeEnabled: false,
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    tradingRewardCampaignAccountPoints: [],
    feeDiscountSchedule: undefined,
    feeDiscountAccountTierTtl: [],
    feeDiscountBucketVolumeAccounts: [],
    isFirstFeeCycleFinished: false,
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTradingRewardCampaignAccountPoints: [],
    rewardsOptOutAddresses: [],
    historicalTradeRecords: [],
    binaryOptionsMarkets: [],
    binaryOptionsMarketIdsScheduledForSettlement: [],
    spotMarketIdsScheduledToForceClose: [],
    denomDecimals: [],
    conditionalDerivativeOrderbooks: [],
    marketFeeMultipliers: [],
    orderbookSequences: [],
    subaccountVolumes: [],
    marketVolumes: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.spotMarkets) {
      SpotMarket.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.derivativeMarkets) {
      DerivativeMarket.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.spotOrderbook) {
      SpotOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.derivativeOrderbook) {
      DerivativeOrderBook.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.positions) {
      DerivativePosition.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.subaccountTradeNonces) {
      SubaccountNonce.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.expiryFuturesMarketInfoState) {
      ExpiryFuturesMarketInfoState.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.perpetualMarketInfo) {
      PerpetualMarketInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.perpetualMarketFundingState) {
      PerpetualMarketFundingState.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.derivativeMarketSettlementScheduled) {
      DerivativeMarketSettlementInfo.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.isSpotExchangeEnabled === true) {
      writer.uint32(104).bool(message.isSpotExchangeEnabled);
    }
    if (message.isDerivativesExchangeEnabled === true) {
      writer.uint32(112).bool(message.isDerivativesExchangeEnabled);
    }
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.tradingRewardCampaignAccountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.feeDiscountAccountTierTtl) {
      FeeDiscountAccountTierTTL.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.feeDiscountBucketVolumeAccounts) {
      FeeDiscountBucketVolumeAccounts.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.isFirstFeeCycleFinished === true) {
      writer.uint32(168).bool(message.isFirstFeeCycleFinished);
    }
    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.pendingTradingRewardCampaignAccountPoints) {
      TradingRewardCampaignAccountPendingPoints.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.rewardsOptOutAddresses) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.historicalTradeRecords) {
      TradeRecords.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarkets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarketIdsScheduledForSettlement) {
      writer.uint32(218).string(v!);
    }
    for (const v of message.spotMarketIdsScheduledToForceClose) {
      writer.uint32(226).string(v!);
    }
    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    for (const v of message.conditionalDerivativeOrderbooks) {
      ConditionalDerivativeOrderBook.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    for (const v of message.marketFeeMultipliers) {
      MarketFeeMultiplier.encode(v!, writer.uint32(250).fork()).ldelim();
    }
    for (const v of message.orderbookSequences) {
      OrderbookSequence.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    for (const v of message.subaccountVolumes) {
      AggregateSubaccountVolumeRecord.encode(v!, writer.uint32(266).fork()).ldelim();
    }
    for (const v of message.marketVolumes) {
      MarketVolume.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      spotMarkets: Array.isArray(object?.spotMarkets) ? object.spotMarkets.map((e: any) => SpotMarket.fromJSON(e)) : [],
      derivativeMarkets: Array.isArray(object?.derivativeMarkets) ? object.derivativeMarkets.map((e: any) => DerivativeMarket.fromJSON(e)) : [],
      spotOrderbook: Array.isArray(object?.spotOrderbook) ? object.spotOrderbook.map((e: any) => SpotOrderBook.fromJSON(e)) : [],
      derivativeOrderbook: Array.isArray(object?.derivativeOrderbook) ? object.derivativeOrderbook.map((e: any) => DerivativeOrderBook.fromJSON(e)) : [],
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => DerivativePosition.fromJSON(e)) : [],
      subaccountTradeNonces: Array.isArray(object?.subaccountTradeNonces) ? object.subaccountTradeNonces.map((e: any) => SubaccountNonce.fromJSON(e)) : [],
      expiryFuturesMarketInfoState: Array.isArray(object?.expiryFuturesMarketInfoState) ? object.expiryFuturesMarketInfoState.map((e: any) => ExpiryFuturesMarketInfoState.fromJSON(e)) : [],
      perpetualMarketInfo: Array.isArray(object?.perpetualMarketInfo) ? object.perpetualMarketInfo.map((e: any) => PerpetualMarketInfo.fromJSON(e)) : [],
      perpetualMarketFundingState: Array.isArray(object?.perpetualMarketFundingState) ? object.perpetualMarketFundingState.map((e: any) => PerpetualMarketFundingState.fromJSON(e)) : [],
      derivativeMarketSettlementScheduled: Array.isArray(object?.derivativeMarketSettlementScheduled) ? object.derivativeMarketSettlementScheduled.map((e: any) => DerivativeMarketSettlementInfo.fromJSON(e)) : [],
      isSpotExchangeEnabled: isSet(object.isSpotExchangeEnabled) ? Boolean(object.isSpotExchangeEnabled) : false,
      isDerivativesExchangeEnabled: isSet(object.isDerivativesExchangeEnabled) ? Boolean(object.isDerivativesExchangeEnabled) : false,
      tradingRewardCampaignInfo: isSet(object.tradingRewardCampaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.tradingRewardCampaignInfo) : undefined,
      tradingRewardPoolCampaignSchedule: Array.isArray(object?.tradingRewardPoolCampaignSchedule) ? object.tradingRewardPoolCampaignSchedule.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      tradingRewardCampaignAccountPoints: Array.isArray(object?.tradingRewardCampaignAccountPoints) ? object.tradingRewardCampaignAccountPoints.map((e: any) => TradingRewardCampaignAccountPoints.fromJSON(e)) : [],
      feeDiscountSchedule: isSet(object.feeDiscountSchedule) ? FeeDiscountSchedule.fromJSON(object.feeDiscountSchedule) : undefined,
      feeDiscountAccountTierTtl: Array.isArray(object?.feeDiscountAccountTierTtl) ? object.feeDiscountAccountTierTtl.map((e: any) => FeeDiscountAccountTierTTL.fromJSON(e)) : [],
      feeDiscountBucketVolumeAccounts: Array.isArray(object?.feeDiscountBucketVolumeAccounts) ? object.feeDiscountBucketVolumeAccounts.map((e: any) => FeeDiscountBucketVolumeAccounts.fromJSON(e)) : [],
      isFirstFeeCycleFinished: isSet(object.isFirstFeeCycleFinished) ? Boolean(object.isFirstFeeCycleFinished) : false,
      pendingTradingRewardPoolCampaignSchedule: Array.isArray(object?.pendingTradingRewardPoolCampaignSchedule) ? object.pendingTradingRewardPoolCampaignSchedule.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      pendingTradingRewardCampaignAccountPoints: Array.isArray(object?.pendingTradingRewardCampaignAccountPoints) ? object.pendingTradingRewardCampaignAccountPoints.map((e: any) => TradingRewardCampaignAccountPendingPoints.fromJSON(e)) : [],
      rewardsOptOutAddresses: Array.isArray(object?.rewardsOptOutAddresses) ? object.rewardsOptOutAddresses.map((e: any) => String(e)) : [],
      historicalTradeRecords: Array.isArray(object?.historicalTradeRecords) ? object.historicalTradeRecords.map((e: any) => TradeRecords.fromJSON(e)) : [],
      binaryOptionsMarkets: Array.isArray(object?.binaryOptionsMarkets) ? object.binaryOptionsMarkets.map((e: any) => BinaryOptionsMarket.fromJSON(e)) : [],
      binaryOptionsMarketIdsScheduledForSettlement: Array.isArray(object?.binaryOptionsMarketIdsScheduledForSettlement) ? object.binaryOptionsMarketIdsScheduledForSettlement.map((e: any) => String(e)) : [],
      spotMarketIdsScheduledToForceClose: Array.isArray(object?.spotMarketIdsScheduledToForceClose) ? object.spotMarketIdsScheduledToForceClose.map((e: any) => String(e)) : [],
      denomDecimals: Array.isArray(object?.denomDecimals) ? object.denomDecimals.map((e: any) => DenomDecimals.fromJSON(e)) : [],
      conditionalDerivativeOrderbooks: Array.isArray(object?.conditionalDerivativeOrderbooks) ? object.conditionalDerivativeOrderbooks.map((e: any) => ConditionalDerivativeOrderBook.fromJSON(e)) : [],
      marketFeeMultipliers: Array.isArray(object?.marketFeeMultipliers) ? object.marketFeeMultipliers.map((e: any) => MarketFeeMultiplier.fromJSON(e)) : [],
      orderbookSequences: Array.isArray(object?.orderbookSequences) ? object.orderbookSequences.map((e: any) => OrderbookSequence.fromJSON(e)) : [],
      subaccountVolumes: Array.isArray(object?.subaccountVolumes) ? object.subaccountVolumes.map((e: any) => AggregateSubaccountVolumeRecord.fromJSON(e)) : [],
      marketVolumes: Array.isArray(object?.marketVolumes) ? object.marketVolumes.map((e: any) => MarketVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.spotMarkets = object.spotMarkets?.map(e => SpotMarket.fromPartial(e)) || [];
    message.derivativeMarkets = object.derivativeMarkets?.map(e => DerivativeMarket.fromPartial(e)) || [];
    message.spotOrderbook = object.spotOrderbook?.map(e => SpotOrderBook.fromPartial(e)) || [];
    message.derivativeOrderbook = object.derivativeOrderbook?.map(e => DerivativeOrderBook.fromPartial(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.positions = object.positions?.map(e => DerivativePosition.fromPartial(e)) || [];
    message.subaccountTradeNonces = object.subaccountTradeNonces?.map(e => SubaccountNonce.fromPartial(e)) || [];
    message.expiryFuturesMarketInfoState = object.expiryFuturesMarketInfoState?.map(e => ExpiryFuturesMarketInfoState.fromPartial(e)) || [];
    message.perpetualMarketInfo = object.perpetualMarketInfo?.map(e => PerpetualMarketInfo.fromPartial(e)) || [];
    message.perpetualMarketFundingState = object.perpetualMarketFundingState?.map(e => PerpetualMarketFundingState.fromPartial(e)) || [];
    message.derivativeMarketSettlementScheduled = object.derivativeMarketSettlementScheduled?.map(e => DerivativeMarketSettlementInfo.fromPartial(e)) || [];
    message.isSpotExchangeEnabled = object.isSpotExchangeEnabled ?? false;
    message.isDerivativesExchangeEnabled = object.isDerivativesExchangeEnabled ?? false;
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.tradingRewardCampaignAccountPoints = object.tradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    message.feeDiscountAccountTierTtl = object.feeDiscountAccountTierTtl?.map(e => FeeDiscountAccountTierTTL.fromPartial(e)) || [];
    message.feeDiscountBucketVolumeAccounts = object.feeDiscountBucketVolumeAccounts?.map(e => FeeDiscountBucketVolumeAccounts.fromPartial(e)) || [];
    message.isFirstFeeCycleFinished = object.isFirstFeeCycleFinished ?? false;
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTradingRewardCampaignAccountPoints = object.pendingTradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPendingPoints.fromPartial(e)) || [];
    message.rewardsOptOutAddresses = object.rewardsOptOutAddresses?.map(e => e) || [];
    message.historicalTradeRecords = object.historicalTradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    message.binaryOptionsMarkets = object.binaryOptionsMarkets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    message.binaryOptionsMarketIdsScheduledForSettlement = object.binaryOptionsMarketIdsScheduledForSettlement?.map(e => e) || [];
    message.spotMarketIdsScheduledToForceClose = object.spotMarketIdsScheduledToForceClose?.map(e => e) || [];
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    message.conditionalDerivativeOrderbooks = object.conditionalDerivativeOrderbooks?.map(e => ConditionalDerivativeOrderBook.fromPartial(e)) || [];
    message.marketFeeMultipliers = object.marketFeeMultipliers?.map(e => MarketFeeMultiplier.fromPartial(e)) || [];
    message.orderbookSequences = object.orderbookSequences?.map(e => OrderbookSequence.fromPartial(e)) || [];
    message.subaccountVolumes = object.subaccountVolumes?.map(e => AggregateSubaccountVolumeRecord.fromPartial(e)) || [];
    message.marketVolumes = object.marketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  }
};
function createBaseOrderbookSequence(): OrderbookSequence {
  return {
    sequence: Long.UZERO,
    marketId: ""
  };
}
export const OrderbookSequence = {
  encode(message: OrderbookSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): OrderbookSequence {
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<OrderbookSequence>): OrderbookSequence {
    const message = createBaseOrderbookSequence();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseFeeDiscountAccountTierTTL(): FeeDiscountAccountTierTTL {
  return {
    account: "",
    tierTtl: undefined
  };
}
export const FeeDiscountAccountTierTTL = {
  encode(message: FeeDiscountAccountTierTTL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.tierTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.tierTtl, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountAccountTierTTL {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      tierTtl: isSet(object.tierTtl) ? FeeDiscountTierTTL.fromJSON(object.tierTtl) : undefined
    };
  },
  fromPartial(object: Partial<FeeDiscountAccountTierTTL>): FeeDiscountAccountTierTTL {
    const message = createBaseFeeDiscountAccountTierTTL();
    message.account = object.account ?? "";
    message.tierTtl = object.tierTtl !== undefined && object.tierTtl !== null ? FeeDiscountTierTTL.fromPartial(object.tierTtl) : undefined;
    return message;
  }
};
function createBaseFeeDiscountBucketVolumeAccounts(): FeeDiscountBucketVolumeAccounts {
  return {
    bucketStartTimestamp: Long.ZERO,
    accountVolume: []
  };
}
export const FeeDiscountBucketVolumeAccounts = {
  encode(message: FeeDiscountBucketVolumeAccounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bucketStartTimestamp.isZero()) {
      writer.uint32(8).int64(message.bucketStartTimestamp);
    }
    for (const v of message.accountVolume) {
      AccountVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountBucketVolumeAccounts {
    return {
      bucketStartTimestamp: isSet(object.bucketStartTimestamp) ? Long.fromValue(object.bucketStartTimestamp) : Long.ZERO,
      accountVolume: Array.isArray(object?.accountVolume) ? object.accountVolume.map((e: any) => AccountVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts {
    const message = createBaseFeeDiscountBucketVolumeAccounts();
    message.bucketStartTimestamp = object.bucketStartTimestamp !== undefined && object.bucketStartTimestamp !== null ? Long.fromValue(object.bucketStartTimestamp) : Long.ZERO;
    message.accountVolume = object.accountVolume?.map(e => AccountVolume.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountVolume(): AccountVolume {
  return {
    account: "",
    volume: ""
  };
}
export const AccountVolume = {
  encode(message: AccountVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(message.volume);
    }
    return writer;
  },
  fromJSON(object: any): AccountVolume {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      volume: isSet(object.volume) ? String(object.volume) : ""
    };
  },
  fromPartial(object: Partial<AccountVolume>): AccountVolume {
    const message = createBaseAccountVolume();
    message.account = object.account ?? "";
    message.volume = object.volume ?? "";
    return message;
  }
};
function createBaseTradingRewardCampaignAccountPoints(): TradingRewardCampaignAccountPoints {
  return {
    account: "",
    points: ""
  };
}
export const TradingRewardCampaignAccountPoints = {
  encode(message: TradingRewardCampaignAccountPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.points !== "") {
      writer.uint32(18).string(message.points);
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignAccountPoints {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      points: isSet(object.points) ? String(object.points) : ""
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignAccountPoints>): TradingRewardCampaignAccountPoints {
    const message = createBaseTradingRewardCampaignAccountPoints();
    message.account = object.account ?? "";
    message.points = object.points ?? "";
    return message;
  }
};
function createBaseTradingRewardCampaignAccountPendingPoints(): TradingRewardCampaignAccountPendingPoints {
  return {
    rewardPoolStartTimestamp: Long.ZERO,
    accountPoints: []
  };
}
export const TradingRewardCampaignAccountPendingPoints = {
  encode(message: TradingRewardCampaignAccountPendingPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardPoolStartTimestamp.isZero()) {
      writer.uint32(8).int64(message.rewardPoolStartTimestamp);
    }
    for (const v of message.accountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignAccountPendingPoints {
    return {
      rewardPoolStartTimestamp: isSet(object.rewardPoolStartTimestamp) ? Long.fromValue(object.rewardPoolStartTimestamp) : Long.ZERO,
      accountPoints: Array.isArray(object?.accountPoints) ? object.accountPoints.map((e: any) => TradingRewardCampaignAccountPoints.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints {
    const message = createBaseTradingRewardCampaignAccountPendingPoints();
    message.rewardPoolStartTimestamp = object.rewardPoolStartTimestamp !== undefined && object.rewardPoolStartTimestamp !== null ? Long.fromValue(object.rewardPoolStartTimestamp) : Long.ZERO;
    message.accountPoints = object.accountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSpotOrderBook(): SpotOrderBook {
  return {
    marketId: "",
    isBuySide: false,
    orders: []
  };
}
export const SpotOrderBook = {
  encode(message: SpotOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuySide === true) {
      writer.uint32(16).bool(message.isBuySide);
    }
    for (const v of message.orders) {
      SpotLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SpotOrderBook {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuySide: isSet(object.isBuySide) ? Boolean(object.isBuySide) : false,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => SpotLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SpotOrderBook>): SpotOrderBook {
    const message = createBaseSpotOrderBook();
    message.marketId = object.marketId ?? "";
    message.isBuySide = object.isBuySide ?? false;
    message.orders = object.orders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDerivativeOrderBook(): DerivativeOrderBook {
  return {
    marketId: "",
    isBuySide: false,
    orders: []
  };
}
export const DerivativeOrderBook = {
  encode(message: DerivativeOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuySide === true) {
      writer.uint32(16).bool(message.isBuySide);
    }
    for (const v of message.orders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DerivativeOrderBook {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuySide: isSet(object.isBuySide) ? Boolean(object.isBuySide) : false,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => DerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DerivativeOrderBook>): DerivativeOrderBook {
    const message = createBaseDerivativeOrderBook();
    message.marketId = object.marketId ?? "";
    message.isBuySide = object.isBuySide ?? false;
    message.orders = object.orders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseConditionalDerivativeOrderBook(): ConditionalDerivativeOrderBook {
  return {
    marketId: "",
    limitBuyOrders: [],
    marketBuyOrders: [],
    limitSellOrders: [],
    marketSellOrders: []
  };
}
export const ConditionalDerivativeOrderBook = {
  encode(message: ConditionalDerivativeOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.limitBuyOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.marketBuyOrders) {
      DerivativeMarketOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitSellOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.marketSellOrders) {
      DerivativeMarketOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConditionalDerivativeOrderBook {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limitBuyOrders: Array.isArray(object?.limitBuyOrders) ? object.limitBuyOrders.map((e: any) => DerivativeLimitOrder.fromJSON(e)) : [],
      marketBuyOrders: Array.isArray(object?.marketBuyOrders) ? object.marketBuyOrders.map((e: any) => DerivativeMarketOrder.fromJSON(e)) : [],
      limitSellOrders: Array.isArray(object?.limitSellOrders) ? object.limitSellOrders.map((e: any) => DerivativeLimitOrder.fromJSON(e)) : [],
      marketSellOrders: Array.isArray(object?.marketSellOrders) ? object.marketSellOrders.map((e: any) => DerivativeMarketOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ConditionalDerivativeOrderBook>): ConditionalDerivativeOrderBook {
    const message = createBaseConditionalDerivativeOrderBook();
    message.marketId = object.marketId ?? "";
    message.limitBuyOrders = object.limitBuyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.marketBuyOrders = object.marketBuyOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
    message.limitSellOrders = object.limitSellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.marketSellOrders = object.marketSellOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBalance(): Balance {
  return {
    subaccountId: "",
    denom: "",
    deposits: undefined
  };
}
export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Balance {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      deposits: isSet(object.deposits) ? Deposit.fromJSON(object.deposits) : undefined
    };
  },
  fromPartial(object: Partial<Balance>): Balance {
    const message = createBaseBalance();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  }
};
function createBaseDerivativePosition(): DerivativePosition {
  return {
    subaccountId: "",
    marketId: "",
    position: undefined
  };
}
export const DerivativePosition = {
  encode(message: DerivativePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DerivativePosition {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined
    };
  },
  fromPartial(object: Partial<DerivativePosition>): DerivativePosition {
    const message = createBaseDerivativePosition();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  }
};
function createBaseSubaccountNonce(): SubaccountNonce {
  return {
    subaccountId: "",
    subaccountTradeNonce: undefined
  };
}
export const SubaccountNonce = {
  encode(message: SubaccountNonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.subaccountTradeNonce !== undefined) {
      SubaccountTradeNonce.encode(message.subaccountTradeNonce, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SubaccountNonce {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      subaccountTradeNonce: isSet(object.subaccountTradeNonce) ? SubaccountTradeNonce.fromJSON(object.subaccountTradeNonce) : undefined
    };
  },
  fromPartial(object: Partial<SubaccountNonce>): SubaccountNonce {
    const message = createBaseSubaccountNonce();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccountTradeNonce = object.subaccountTradeNonce !== undefined && object.subaccountTradeNonce !== null ? SubaccountTradeNonce.fromPartial(object.subaccountTradeNonce) : undefined;
    return message;
  }
};
function createBaseExpiryFuturesMarketInfoState(): ExpiryFuturesMarketInfoState {
  return {
    marketId: "",
    marketInfo: undefined
  };
}
export const ExpiryFuturesMarketInfoState = {
  encode(message: ExpiryFuturesMarketInfoState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.marketInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.marketInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ExpiryFuturesMarketInfoState {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      marketInfo: isSet(object.marketInfo) ? ExpiryFuturesMarketInfo.fromJSON(object.marketInfo) : undefined
    };
  },
  fromPartial(object: Partial<ExpiryFuturesMarketInfoState>): ExpiryFuturesMarketInfoState {
    const message = createBaseExpiryFuturesMarketInfoState();
    message.marketId = object.marketId ?? "";
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.marketInfo) : undefined;
    return message;
  }
};
function createBasePerpetualMarketFundingState(): PerpetualMarketFundingState {
  return {
    marketId: "",
    funding: undefined
  };
}
export const PerpetualMarketFundingState = {
  encode(message: PerpetualMarketFundingState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketFundingState {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      funding: isSet(object.funding) ? PerpetualMarketFunding.fromJSON(object.funding) : undefined
    };
  },
  fromPartial(object: Partial<PerpetualMarketFundingState>): PerpetualMarketFundingState {
    const message = createBasePerpetualMarketFundingState();
    message.marketId = object.marketId ?? "";
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    return message;
  }
};