import { Params, ParamsAmino, ParamsSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoAmino, DerivativeMarketSettlementInfoSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsAmino, TradeRecordsSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType, DenomDecimals, DenomDecimalsAmino, DenomDecimalsSDKType, MarketFeeMultiplier, MarketFeeMultiplierAmino, MarketFeeMultiplierSDKType, AggregateSubaccountVolumeRecord, AggregateSubaccountVolumeRecordAmino, AggregateSubaccountVolumeRecordSDKType, MarketVolume, MarketVolumeAmino, MarketVolumeSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountTierTTLSDKType, SpotLimitOrder, SpotLimitOrderAmino, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderAmino, DerivativeLimitOrderSDKType, DerivativeMarketOrder, DerivativeMarketOrderAmino, DerivativeMarketOrderSDKType, Deposit, DepositAmino, DepositSDKType, Position, PositionAmino, PositionSDKType, SubaccountTradeNonce, SubaccountTradeNonceAmino, SubaccountTradeNonceSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType } from "./exchange";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to exchange. */
  params: Params;
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
  tradingRewardCampaignInfo: TradingRewardCampaignInfo;
  /** the current and upcoming trading reward campaign pools */
  tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  tradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPoints[];
  /** the fee discount schedule */
  feeDiscountSchedule: FeeDiscountSchedule;
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
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to exchange. */
  params?: ParamsAmino;
  /** spot_markets is an array containing the genesis trade pairs */
  spot_markets: SpotMarketAmino[];
  /** derivative_markets is an array containing the genesis derivative markets */
  derivative_markets: DerivativeMarketAmino[];
  /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
  spot_orderbook: SpotOrderBookAmino[];
  /**
   * derivative_orderbook defines the derivative exchange limit orderbook active
   * at genesis.
   */
  derivative_orderbook: DerivativeOrderBookAmino[];
  /** balances defines the exchange users balances active at genesis. */
  balances: BalanceAmino[];
  /** positions defines the exchange derivative positions at genesis */
  positions: DerivativePositionAmino[];
  /**
   * subaccount_trade_nonces defines the subaccount trade nonces for the
   * subaccounts at genesis
   */
  subaccount_trade_nonces: SubaccountNonceAmino[];
  /**
   * expiry_futures_market_info defines the market info for the expiry futures
   * markets at genesis
   */
  expiry_futures_market_info_state: ExpiryFuturesMarketInfoStateAmino[];
  /**
   * perpetual_market_info defines the market info for the perpetual derivative
   * markets at genesis
   */
  perpetual_market_info: PerpetualMarketInfoAmino[];
  /**
   * perpetual_market_funding_state defines the funding state for the perpetual
   * derivative markets at genesis
   */
  perpetual_market_funding_state: PerpetualMarketFundingStateAmino[];
  derivative_market_settlement_scheduled: DerivativeMarketSettlementInfoAmino[];
  /** sets spot markets as enabled */
  is_spot_exchange_enabled: boolean;
  /** sets derivative markets as enabled */
  is_derivatives_exchange_enabled: boolean;
  /** the current trading reward campaign info */
  trading_reward_campaign_info?: TradingRewardCampaignInfoAmino;
  /** the current and upcoming trading reward campaign pools */
  trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  trading_reward_campaign_account_points: TradingRewardCampaignAccountPointsAmino[];
  /** the fee discount schedule */
  fee_discount_schedule?: FeeDiscountScheduleAmino;
  /** the cached fee discount account tiers with TTL */
  fee_discount_account_tier_ttl: FeeDiscountAccountTierTTLAmino[];
  fee_discount_bucket_volume_accounts: FeeDiscountBucketVolumeAccountsAmino[];
  /** sets the first fee cycle as finished */
  is_first_fee_cycle_finished: boolean;
  pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  pending_trading_reward_campaign_account_points: TradingRewardCampaignAccountPendingPointsAmino[];
  /** the addresses opting out of trading rewards */
  rewards_opt_out_addresses: string[];
  historical_trade_records: TradeRecordsAmino[];
  /**
   * binary_options_markets is an array containing the genesis binary options
   * markets
   */
  binary_options_markets: BinaryOptionsMarketAmino[];
  /**
   * binary_options_markets_scheduled_for_settlement contains the marketIDs of
   * binary options markets scheduled for next-block settlement
   */
  binary_options_market_ids_scheduled_for_settlement: string[];
  /**
   * spot_market_ids_scheduled_to_force_close defines the scheduled markets for
   * forced closings at genesis
   */
  spot_market_ids_scheduled_to_force_close: string[];
  /** denom_decimals defines the denom decimals for the exchange. */
  denom_decimals: DenomDecimalsAmino[];
  conditional_derivative_orderbooks: ConditionalDerivativeOrderBookAmino[];
  /**
   * market_fee_multipliers contains any non-default atomic order fee
   * multipliers
   */
  market_fee_multipliers: MarketFeeMultiplierAmino[];
  orderbook_sequences: OrderbookSequenceAmino[];
  subaccount_volumes: AggregateSubaccountVolumeRecordAmino[];
  market_volumes: MarketVolumeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.exchange.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
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
  trading_reward_campaign_info: TradingRewardCampaignInfoSDKType;
  trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
  trading_reward_campaign_account_points: TradingRewardCampaignAccountPointsSDKType[];
  fee_discount_schedule: FeeDiscountScheduleSDKType;
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
  sequence: bigint;
  marketId: string;
}
export interface OrderbookSequenceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OrderbookSequence";
  value: Uint8Array;
}
export interface OrderbookSequenceAmino {
  sequence: string;
  market_id: string;
}
export interface OrderbookSequenceAminoMsg {
  type: "/injective.exchange.v1beta1.OrderbookSequence";
  value: OrderbookSequenceAmino;
}
export interface OrderbookSequenceSDKType {
  sequence: bigint;
  market_id: string;
}
export interface FeeDiscountAccountTierTTL {
  account: string;
  tierTtl: FeeDiscountTierTTL;
}
export interface FeeDiscountAccountTierTTLProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
  value: Uint8Array;
}
export interface FeeDiscountAccountTierTTLAmino {
  account: string;
  tier_ttl?: FeeDiscountTierTTLAmino;
}
export interface FeeDiscountAccountTierTTLAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
  value: FeeDiscountAccountTierTTLAmino;
}
export interface FeeDiscountAccountTierTTLSDKType {
  account: string;
  tier_ttl: FeeDiscountTierTTLSDKType;
}
export interface FeeDiscountBucketVolumeAccounts {
  bucketStartTimestamp: bigint;
  accountVolume: AccountVolume[];
}
export interface FeeDiscountBucketVolumeAccountsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
  value: Uint8Array;
}
export interface FeeDiscountBucketVolumeAccountsAmino {
  bucket_start_timestamp: string;
  account_volume: AccountVolumeAmino[];
}
export interface FeeDiscountBucketVolumeAccountsAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
  value: FeeDiscountBucketVolumeAccountsAmino;
}
export interface FeeDiscountBucketVolumeAccountsSDKType {
  bucket_start_timestamp: bigint;
  account_volume: AccountVolumeSDKType[];
}
export interface AccountVolume {
  account: string;
  volume: string;
}
export interface AccountVolumeProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AccountVolume";
  value: Uint8Array;
}
export interface AccountVolumeAmino {
  account: string;
  volume: string;
}
export interface AccountVolumeAminoMsg {
  type: "/injective.exchange.v1beta1.AccountVolume";
  value: AccountVolumeAmino;
}
export interface AccountVolumeSDKType {
  account: string;
  volume: string;
}
export interface TradingRewardCampaignAccountPoints {
  account: string;
  points: string;
}
export interface TradingRewardCampaignAccountPointsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
  value: Uint8Array;
}
export interface TradingRewardCampaignAccountPointsAmino {
  account: string;
  points: string;
}
export interface TradingRewardCampaignAccountPointsAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
  value: TradingRewardCampaignAccountPointsAmino;
}
export interface TradingRewardCampaignAccountPointsSDKType {
  account: string;
  points: string;
}
export interface TradingRewardCampaignAccountPendingPoints {
  rewardPoolStartTimestamp: bigint;
  accountPoints: TradingRewardCampaignAccountPoints[];
}
export interface TradingRewardCampaignAccountPendingPointsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
  value: Uint8Array;
}
export interface TradingRewardCampaignAccountPendingPointsAmino {
  reward_pool_start_timestamp: string;
  account_points: TradingRewardCampaignAccountPointsAmino[];
}
export interface TradingRewardCampaignAccountPendingPointsAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
  value: TradingRewardCampaignAccountPendingPointsAmino;
}
export interface TradingRewardCampaignAccountPendingPointsSDKType {
  reward_pool_start_timestamp: bigint;
  account_points: TradingRewardCampaignAccountPointsSDKType[];
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBook {
  marketId: string;
  isBuySide: boolean;
  orders: SpotLimitOrder[];
}
export interface SpotOrderBookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotOrderBook";
  value: Uint8Array;
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBookAmino {
  market_id: string;
  isBuySide: boolean;
  orders: SpotLimitOrderAmino[];
}
export interface SpotOrderBookAminoMsg {
  type: "/injective.exchange.v1beta1.SpotOrderBook";
  value: SpotOrderBookAmino;
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
export interface DerivativeOrderBookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook";
  value: Uint8Array;
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBookAmino {
  market_id: string;
  isBuySide: boolean;
  orders: DerivativeLimitOrderAmino[];
}
export interface DerivativeOrderBookAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeOrderBook";
  value: DerivativeOrderBookAmino;
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
export interface ConditionalDerivativeOrderBookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
  value: Uint8Array;
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBookAmino {
  market_id: string;
  limit_buy_orders: DerivativeLimitOrderAmino[];
  market_buy_orders: DerivativeMarketOrderAmino[];
  limit_sell_orders: DerivativeLimitOrderAmino[];
  market_sell_orders: DerivativeMarketOrderAmino[];
}
export interface ConditionalDerivativeOrderBookAminoMsg {
  type: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
  value: ConditionalDerivativeOrderBookAmino;
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
  deposits: Deposit;
}
export interface BalanceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Balance";
  value: Uint8Array;
}
export interface BalanceAmino {
  subaccount_id: string;
  denom: string;
  deposits?: DepositAmino;
}
export interface BalanceAminoMsg {
  type: "/injective.exchange.v1beta1.Balance";
  value: BalanceAmino;
}
export interface BalanceSDKType {
  subaccount_id: string;
  denom: string;
  deposits: DepositSDKType;
}
export interface DerivativePosition {
  subaccountId: string;
  marketId: string;
  position: Position;
}
export interface DerivativePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativePosition";
  value: Uint8Array;
}
export interface DerivativePositionAmino {
  subaccount_id: string;
  market_id: string;
  position?: PositionAmino;
}
export interface DerivativePositionAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativePosition";
  value: DerivativePositionAmino;
}
export interface DerivativePositionSDKType {
  subaccount_id: string;
  market_id: string;
  position: PositionSDKType;
}
export interface SubaccountNonce {
  subaccountId: string;
  subaccountTradeNonce: SubaccountTradeNonce;
}
export interface SubaccountNonceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountNonce";
  value: Uint8Array;
}
export interface SubaccountNonceAmino {
  subaccount_id: string;
  subaccount_trade_nonce?: SubaccountTradeNonceAmino;
}
export interface SubaccountNonceAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountNonce";
  value: SubaccountNonceAmino;
}
export interface SubaccountNonceSDKType {
  subaccount_id: string;
  subaccount_trade_nonce: SubaccountTradeNonceSDKType;
}
export interface ExpiryFuturesMarketInfoState {
  marketId: string;
  marketInfo: ExpiryFuturesMarketInfo;
}
export interface ExpiryFuturesMarketInfoStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
  value: Uint8Array;
}
export interface ExpiryFuturesMarketInfoStateAmino {
  market_id: string;
  market_info?: ExpiryFuturesMarketInfoAmino;
}
export interface ExpiryFuturesMarketInfoStateAminoMsg {
  type: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
  value: ExpiryFuturesMarketInfoStateAmino;
}
export interface ExpiryFuturesMarketInfoStateSDKType {
  market_id: string;
  market_info: ExpiryFuturesMarketInfoSDKType;
}
export interface PerpetualMarketFundingState {
  marketId: string;
  funding: PerpetualMarketFunding;
}
export interface PerpetualMarketFundingStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState";
  value: Uint8Array;
}
export interface PerpetualMarketFundingStateAmino {
  market_id: string;
  funding?: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketFundingStateAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketFundingState";
  value: PerpetualMarketFundingStateAmino;
}
export interface PerpetualMarketFundingStateSDKType {
  market_id: string;
  funding: PerpetualMarketFundingSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
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
    tradingRewardCampaignInfo: TradingRewardCampaignInfo.fromPartial({}),
    tradingRewardPoolCampaignSchedule: [],
    tradingRewardCampaignAccountPoints: [],
    feeDiscountSchedule: FeeDiscountSchedule.fromPartial({}),
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
  typeUrl: "/injective.exchange.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      spotMarkets: Array.isArray(object?.spot_markets) ? object.spot_markets.map((e: any) => SpotMarket.fromAmino(e)) : [],
      derivativeMarkets: Array.isArray(object?.derivative_markets) ? object.derivative_markets.map((e: any) => DerivativeMarket.fromAmino(e)) : [],
      spotOrderbook: Array.isArray(object?.spot_orderbook) ? object.spot_orderbook.map((e: any) => SpotOrderBook.fromAmino(e)) : [],
      derivativeOrderbook: Array.isArray(object?.derivative_orderbook) ? object.derivative_orderbook.map((e: any) => DerivativeOrderBook.fromAmino(e)) : [],
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromAmino(e)) : [],
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => DerivativePosition.fromAmino(e)) : [],
      subaccountTradeNonces: Array.isArray(object?.subaccount_trade_nonces) ? object.subaccount_trade_nonces.map((e: any) => SubaccountNonce.fromAmino(e)) : [],
      expiryFuturesMarketInfoState: Array.isArray(object?.expiry_futures_market_info_state) ? object.expiry_futures_market_info_state.map((e: any) => ExpiryFuturesMarketInfoState.fromAmino(e)) : [],
      perpetualMarketInfo: Array.isArray(object?.perpetual_market_info) ? object.perpetual_market_info.map((e: any) => PerpetualMarketInfo.fromAmino(e)) : [],
      perpetualMarketFundingState: Array.isArray(object?.perpetual_market_funding_state) ? object.perpetual_market_funding_state.map((e: any) => PerpetualMarketFundingState.fromAmino(e)) : [],
      derivativeMarketSettlementScheduled: Array.isArray(object?.derivative_market_settlement_scheduled) ? object.derivative_market_settlement_scheduled.map((e: any) => DerivativeMarketSettlementInfo.fromAmino(e)) : [],
      isSpotExchangeEnabled: object.is_spot_exchange_enabled,
      isDerivativesExchangeEnabled: object.is_derivatives_exchange_enabled,
      tradingRewardCampaignInfo: object?.trading_reward_campaign_info ? TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info) : undefined,
      tradingRewardPoolCampaignSchedule: Array.isArray(object?.trading_reward_pool_campaign_schedule) ? object.trading_reward_pool_campaign_schedule.map((e: any) => CampaignRewardPool.fromAmino(e)) : [],
      tradingRewardCampaignAccountPoints: Array.isArray(object?.trading_reward_campaign_account_points) ? object.trading_reward_campaign_account_points.map((e: any) => TradingRewardCampaignAccountPoints.fromAmino(e)) : [],
      feeDiscountSchedule: object?.fee_discount_schedule ? FeeDiscountSchedule.fromAmino(object.fee_discount_schedule) : undefined,
      feeDiscountAccountTierTtl: Array.isArray(object?.fee_discount_account_tier_ttl) ? object.fee_discount_account_tier_ttl.map((e: any) => FeeDiscountAccountTierTTL.fromAmino(e)) : [],
      feeDiscountBucketVolumeAccounts: Array.isArray(object?.fee_discount_bucket_volume_accounts) ? object.fee_discount_bucket_volume_accounts.map((e: any) => FeeDiscountBucketVolumeAccounts.fromAmino(e)) : [],
      isFirstFeeCycleFinished: object.is_first_fee_cycle_finished,
      pendingTradingRewardPoolCampaignSchedule: Array.isArray(object?.pending_trading_reward_pool_campaign_schedule) ? object.pending_trading_reward_pool_campaign_schedule.map((e: any) => CampaignRewardPool.fromAmino(e)) : [],
      pendingTradingRewardCampaignAccountPoints: Array.isArray(object?.pending_trading_reward_campaign_account_points) ? object.pending_trading_reward_campaign_account_points.map((e: any) => TradingRewardCampaignAccountPendingPoints.fromAmino(e)) : [],
      rewardsOptOutAddresses: Array.isArray(object?.rewards_opt_out_addresses) ? object.rewards_opt_out_addresses.map((e: any) => e) : [],
      historicalTradeRecords: Array.isArray(object?.historical_trade_records) ? object.historical_trade_records.map((e: any) => TradeRecords.fromAmino(e)) : [],
      binaryOptionsMarkets: Array.isArray(object?.binary_options_markets) ? object.binary_options_markets.map((e: any) => BinaryOptionsMarket.fromAmino(e)) : [],
      binaryOptionsMarketIdsScheduledForSettlement: Array.isArray(object?.binary_options_market_ids_scheduled_for_settlement) ? object.binary_options_market_ids_scheduled_for_settlement.map((e: any) => e) : [],
      spotMarketIdsScheduledToForceClose: Array.isArray(object?.spot_market_ids_scheduled_to_force_close) ? object.spot_market_ids_scheduled_to_force_close.map((e: any) => e) : [],
      denomDecimals: Array.isArray(object?.denom_decimals) ? object.denom_decimals.map((e: any) => DenomDecimals.fromAmino(e)) : [],
      conditionalDerivativeOrderbooks: Array.isArray(object?.conditional_derivative_orderbooks) ? object.conditional_derivative_orderbooks.map((e: any) => ConditionalDerivativeOrderBook.fromAmino(e)) : [],
      marketFeeMultipliers: Array.isArray(object?.market_fee_multipliers) ? object.market_fee_multipliers.map((e: any) => MarketFeeMultiplier.fromAmino(e)) : [],
      orderbookSequences: Array.isArray(object?.orderbook_sequences) ? object.orderbook_sequences.map((e: any) => OrderbookSequence.fromAmino(e)) : [],
      subaccountVolumes: Array.isArray(object?.subaccount_volumes) ? object.subaccount_volumes.map((e: any) => AggregateSubaccountVolumeRecord.fromAmino(e)) : [],
      marketVolumes: Array.isArray(object?.market_volumes) ? object.market_volumes.map((e: any) => MarketVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.spotMarkets) {
      obj.spot_markets = message.spotMarkets.map(e => e ? SpotMarket.toAmino(e) : undefined);
    } else {
      obj.spot_markets = [];
    }
    if (message.derivativeMarkets) {
      obj.derivative_markets = message.derivativeMarkets.map(e => e ? DerivativeMarket.toAmino(e) : undefined);
    } else {
      obj.derivative_markets = [];
    }
    if (message.spotOrderbook) {
      obj.spot_orderbook = message.spotOrderbook.map(e => e ? SpotOrderBook.toAmino(e) : undefined);
    } else {
      obj.spot_orderbook = [];
    }
    if (message.derivativeOrderbook) {
      obj.derivative_orderbook = message.derivativeOrderbook.map(e => e ? DerivativeOrderBook.toAmino(e) : undefined);
    } else {
      obj.derivative_orderbook = [];
    }
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.positions = [];
    }
    if (message.subaccountTradeNonces) {
      obj.subaccount_trade_nonces = message.subaccountTradeNonces.map(e => e ? SubaccountNonce.toAmino(e) : undefined);
    } else {
      obj.subaccount_trade_nonces = [];
    }
    if (message.expiryFuturesMarketInfoState) {
      obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState.map(e => e ? ExpiryFuturesMarketInfoState.toAmino(e) : undefined);
    } else {
      obj.expiry_futures_market_info_state = [];
    }
    if (message.perpetualMarketInfo) {
      obj.perpetual_market_info = message.perpetualMarketInfo.map(e => e ? PerpetualMarketInfo.toAmino(e) : undefined);
    } else {
      obj.perpetual_market_info = [];
    }
    if (message.perpetualMarketFundingState) {
      obj.perpetual_market_funding_state = message.perpetualMarketFundingState.map(e => e ? PerpetualMarketFundingState.toAmino(e) : undefined);
    } else {
      obj.perpetual_market_funding_state = [];
    }
    if (message.derivativeMarketSettlementScheduled) {
      obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled.map(e => e ? DerivativeMarketSettlementInfo.toAmino(e) : undefined);
    } else {
      obj.derivative_market_settlement_scheduled = [];
    }
    obj.is_spot_exchange_enabled = message.isSpotExchangeEnabled;
    obj.is_derivatives_exchange_enabled = message.isDerivativesExchangeEnabled;
    obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.trading_reward_pool_campaign_schedule = [];
    }
    if (message.tradingRewardCampaignAccountPoints) {
      obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints.map(e => e ? TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
    } else {
      obj.trading_reward_campaign_account_points = [];
    }
    obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
    if (message.feeDiscountAccountTierTtl) {
      obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl.map(e => e ? FeeDiscountAccountTierTTL.toAmino(e) : undefined);
    } else {
      obj.fee_discount_account_tier_ttl = [];
    }
    if (message.feeDiscountBucketVolumeAccounts) {
      obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts.map(e => e ? FeeDiscountBucketVolumeAccounts.toAmino(e) : undefined);
    } else {
      obj.fee_discount_bucket_volume_accounts = [];
    }
    obj.is_first_fee_cycle_finished = message.isFirstFeeCycleFinished;
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_pool_campaign_schedule = [];
    }
    if (message.pendingTradingRewardCampaignAccountPoints) {
      obj.pending_trading_reward_campaign_account_points = message.pendingTradingRewardCampaignAccountPoints.map(e => e ? TradingRewardCampaignAccountPendingPoints.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_campaign_account_points = [];
    }
    if (message.rewardsOptOutAddresses) {
      obj.rewards_opt_out_addresses = message.rewardsOptOutAddresses.map(e => e);
    } else {
      obj.rewards_opt_out_addresses = [];
    }
    if (message.historicalTradeRecords) {
      obj.historical_trade_records = message.historicalTradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
    } else {
      obj.historical_trade_records = [];
    }
    if (message.binaryOptionsMarkets) {
      obj.binary_options_markets = message.binaryOptionsMarkets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
    } else {
      obj.binary_options_markets = [];
    }
    if (message.binaryOptionsMarketIdsScheduledForSettlement) {
      obj.binary_options_market_ids_scheduled_for_settlement = message.binaryOptionsMarketIdsScheduledForSettlement.map(e => e);
    } else {
      obj.binary_options_market_ids_scheduled_for_settlement = [];
    }
    if (message.spotMarketIdsScheduledToForceClose) {
      obj.spot_market_ids_scheduled_to_force_close = message.spotMarketIdsScheduledToForceClose.map(e => e);
    } else {
      obj.spot_market_ids_scheduled_to_force_close = [];
    }
    if (message.denomDecimals) {
      obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
    } else {
      obj.denom_decimals = [];
    }
    if (message.conditionalDerivativeOrderbooks) {
      obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks.map(e => e ? ConditionalDerivativeOrderBook.toAmino(e) : undefined);
    } else {
      obj.conditional_derivative_orderbooks = [];
    }
    if (message.marketFeeMultipliers) {
      obj.market_fee_multipliers = message.marketFeeMultipliers.map(e => e ? MarketFeeMultiplier.toAmino(e) : undefined);
    } else {
      obj.market_fee_multipliers = [];
    }
    if (message.orderbookSequences) {
      obj.orderbook_sequences = message.orderbookSequences.map(e => e ? OrderbookSequence.toAmino(e) : undefined);
    } else {
      obj.orderbook_sequences = [];
    }
    if (message.subaccountVolumes) {
      obj.subaccount_volumes = message.subaccountVolumes.map(e => e ? AggregateSubaccountVolumeRecord.toAmino(e) : undefined);
    } else {
      obj.subaccount_volumes = [];
    }
    if (message.marketVolumes) {
      obj.market_volumes = message.marketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.market_volumes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseOrderbookSequence(): OrderbookSequence {
  return {
    sequence: BigInt(0),
    marketId: ""
  };
}
export const OrderbookSequence = {
  typeUrl: "/injective.exchange.v1beta1.OrderbookSequence",
  encode(message: OrderbookSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): OrderbookSequence {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<OrderbookSequence>): OrderbookSequence {
    const message = createBaseOrderbookSequence();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: OrderbookSequenceAmino): OrderbookSequence {
    return {
      sequence: BigInt(object.sequence),
      marketId: object.market_id
    };
  },
  toAmino(message: OrderbookSequence): OrderbookSequenceAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: OrderbookSequenceAminoMsg): OrderbookSequence {
    return OrderbookSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderbookSequenceProtoMsg): OrderbookSequence {
    return OrderbookSequence.decode(message.value);
  },
  toProto(message: OrderbookSequence): Uint8Array {
    return OrderbookSequence.encode(message).finish();
  },
  toProtoMsg(message: OrderbookSequence): OrderbookSequenceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OrderbookSequence",
      value: OrderbookSequence.encode(message).finish()
    };
  }
};
function createBaseFeeDiscountAccountTierTTL(): FeeDiscountAccountTierTTL {
  return {
    account: "",
    tierTtl: FeeDiscountTierTTL.fromPartial({})
  };
}
export const FeeDiscountAccountTierTTL = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
  encode(message: FeeDiscountAccountTierTTL, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeDiscountAccountTierTTLAmino): FeeDiscountAccountTierTTL {
    return {
      account: object.account,
      tierTtl: object?.tier_ttl ? FeeDiscountTierTTL.fromAmino(object.tier_ttl) : undefined
    };
  },
  toAmino(message: FeeDiscountAccountTierTTL): FeeDiscountAccountTierTTLAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.tier_ttl = message.tierTtl ? FeeDiscountTierTTL.toAmino(message.tierTtl) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountAccountTierTTLAminoMsg): FeeDiscountAccountTierTTL {
    return FeeDiscountAccountTierTTL.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountAccountTierTTLProtoMsg): FeeDiscountAccountTierTTL {
    return FeeDiscountAccountTierTTL.decode(message.value);
  },
  toProto(message: FeeDiscountAccountTierTTL): Uint8Array {
    return FeeDiscountAccountTierTTL.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountAccountTierTTL): FeeDiscountAccountTierTTLProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
      value: FeeDiscountAccountTierTTL.encode(message).finish()
    };
  }
};
function createBaseFeeDiscountBucketVolumeAccounts(): FeeDiscountBucketVolumeAccounts {
  return {
    bucketStartTimestamp: BigInt(0),
    accountVolume: []
  };
}
export const FeeDiscountBucketVolumeAccounts = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
  encode(message: FeeDiscountBucketVolumeAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bucketStartTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.bucketStartTimestamp);
    }
    for (const v of message.accountVolume) {
      AccountVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeDiscountBucketVolumeAccounts {
    return {
      bucketStartTimestamp: isSet(object.bucketStartTimestamp) ? BigInt(object.bucketStartTimestamp.toString()) : BigInt(0),
      accountVolume: Array.isArray(object?.accountVolume) ? object.accountVolume.map((e: any) => AccountVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts {
    const message = createBaseFeeDiscountBucketVolumeAccounts();
    message.bucketStartTimestamp = object.bucketStartTimestamp !== undefined && object.bucketStartTimestamp !== null ? BigInt(object.bucketStartTimestamp.toString()) : BigInt(0);
    message.accountVolume = object.accountVolume?.map(e => AccountVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeeDiscountBucketVolumeAccountsAmino): FeeDiscountBucketVolumeAccounts {
    return {
      bucketStartTimestamp: BigInt(object.bucket_start_timestamp),
      accountVolume: Array.isArray(object?.account_volume) ? object.account_volume.map((e: any) => AccountVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: FeeDiscountBucketVolumeAccounts): FeeDiscountBucketVolumeAccountsAmino {
    const obj: any = {};
    obj.bucket_start_timestamp = message.bucketStartTimestamp ? message.bucketStartTimestamp.toString() : undefined;
    if (message.accountVolume) {
      obj.account_volume = message.accountVolume.map(e => e ? AccountVolume.toAmino(e) : undefined);
    } else {
      obj.account_volume = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeeDiscountBucketVolumeAccountsAminoMsg): FeeDiscountBucketVolumeAccounts {
    return FeeDiscountBucketVolumeAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountBucketVolumeAccountsProtoMsg): FeeDiscountBucketVolumeAccounts {
    return FeeDiscountBucketVolumeAccounts.decode(message.value);
  },
  toProto(message: FeeDiscountBucketVolumeAccounts): Uint8Array {
    return FeeDiscountBucketVolumeAccounts.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountBucketVolumeAccounts): FeeDiscountBucketVolumeAccountsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
      value: FeeDiscountBucketVolumeAccounts.encode(message).finish()
    };
  }
};
function createBaseAccountVolume(): AccountVolume {
  return {
    account: "",
    volume: ""
  };
}
export const AccountVolume = {
  typeUrl: "/injective.exchange.v1beta1.AccountVolume",
  encode(message: AccountVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.volume, 18).atomics);
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
  },
  fromAmino(object: AccountVolumeAmino): AccountVolume {
    return {
      account: object.account,
      volume: object.volume
    };
  },
  toAmino(message: AccountVolume): AccountVolumeAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.volume = message.volume;
    return obj;
  },
  fromAminoMsg(object: AccountVolumeAminoMsg): AccountVolume {
    return AccountVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountVolumeProtoMsg): AccountVolume {
    return AccountVolume.decode(message.value);
  },
  toProto(message: AccountVolume): Uint8Array {
    return AccountVolume.encode(message).finish();
  },
  toProtoMsg(message: AccountVolume): AccountVolumeProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AccountVolume",
      value: AccountVolume.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCampaignAccountPoints(): TradingRewardCampaignAccountPoints {
  return {
    account: "",
    points: ""
  };
}
export const TradingRewardCampaignAccountPoints = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
  encode(message: TradingRewardCampaignAccountPoints, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.points !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.points, 18).atomics);
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
  },
  fromAmino(object: TradingRewardCampaignAccountPointsAmino): TradingRewardCampaignAccountPoints {
    return {
      account: object.account,
      points: object.points
    };
  },
  toAmino(message: TradingRewardCampaignAccountPoints): TradingRewardCampaignAccountPointsAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.points = message.points;
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignAccountPointsAminoMsg): TradingRewardCampaignAccountPoints {
    return TradingRewardCampaignAccountPoints.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignAccountPointsProtoMsg): TradingRewardCampaignAccountPoints {
    return TradingRewardCampaignAccountPoints.decode(message.value);
  },
  toProto(message: TradingRewardCampaignAccountPoints): Uint8Array {
    return TradingRewardCampaignAccountPoints.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignAccountPoints): TradingRewardCampaignAccountPointsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
      value: TradingRewardCampaignAccountPoints.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCampaignAccountPendingPoints(): TradingRewardCampaignAccountPendingPoints {
  return {
    rewardPoolStartTimestamp: BigInt(0),
    accountPoints: []
  };
}
export const TradingRewardCampaignAccountPendingPoints = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
  encode(message: TradingRewardCampaignAccountPendingPoints, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardPoolStartTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.rewardPoolStartTimestamp);
    }
    for (const v of message.accountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradingRewardCampaignAccountPendingPoints {
    return {
      rewardPoolStartTimestamp: isSet(object.rewardPoolStartTimestamp) ? BigInt(object.rewardPoolStartTimestamp.toString()) : BigInt(0),
      accountPoints: Array.isArray(object?.accountPoints) ? object.accountPoints.map((e: any) => TradingRewardCampaignAccountPoints.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints {
    const message = createBaseTradingRewardCampaignAccountPendingPoints();
    message.rewardPoolStartTimestamp = object.rewardPoolStartTimestamp !== undefined && object.rewardPoolStartTimestamp !== null ? BigInt(object.rewardPoolStartTimestamp.toString()) : BigInt(0);
    message.accountPoints = object.accountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignAccountPendingPointsAmino): TradingRewardCampaignAccountPendingPoints {
    return {
      rewardPoolStartTimestamp: BigInt(object.reward_pool_start_timestamp),
      accountPoints: Array.isArray(object?.account_points) ? object.account_points.map((e: any) => TradingRewardCampaignAccountPoints.fromAmino(e)) : []
    };
  },
  toAmino(message: TradingRewardCampaignAccountPendingPoints): TradingRewardCampaignAccountPendingPointsAmino {
    const obj: any = {};
    obj.reward_pool_start_timestamp = message.rewardPoolStartTimestamp ? message.rewardPoolStartTimestamp.toString() : undefined;
    if (message.accountPoints) {
      obj.account_points = message.accountPoints.map(e => e ? TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
    } else {
      obj.account_points = [];
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignAccountPendingPointsAminoMsg): TradingRewardCampaignAccountPendingPoints {
    return TradingRewardCampaignAccountPendingPoints.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignAccountPendingPointsProtoMsg): TradingRewardCampaignAccountPendingPoints {
    return TradingRewardCampaignAccountPendingPoints.decode(message.value);
  },
  toProto(message: TradingRewardCampaignAccountPendingPoints): Uint8Array {
    return TradingRewardCampaignAccountPendingPoints.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignAccountPendingPoints): TradingRewardCampaignAccountPendingPointsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
      value: TradingRewardCampaignAccountPendingPoints.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
  encode(message: SpotOrderBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SpotOrderBookAmino): SpotOrderBook {
    return {
      marketId: object.market_id,
      isBuySide: object.isBuySide,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => SpotLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: SpotOrderBook): SpotOrderBookAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.isBuySide = message.isBuySide;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: SpotOrderBookAminoMsg): SpotOrderBook {
    return SpotOrderBook.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderBookProtoMsg): SpotOrderBook {
    return SpotOrderBook.decode(message.value);
  },
  toProto(message: SpotOrderBook): Uint8Array {
    return SpotOrderBook.encode(message).finish();
  },
  toProtoMsg(message: SpotOrderBook): SpotOrderBookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
      value: SpotOrderBook.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
  encode(message: DerivativeOrderBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DerivativeOrderBookAmino): DerivativeOrderBook {
    return {
      marketId: object.market_id,
      isBuySide: object.isBuySide,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => DerivativeLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: DerivativeOrderBook): DerivativeOrderBookAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.isBuySide = message.isBuySide;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: DerivativeOrderBookAminoMsg): DerivativeOrderBook {
    return DerivativeOrderBook.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeOrderBookProtoMsg): DerivativeOrderBook {
    return DerivativeOrderBook.decode(message.value);
  },
  toProto(message: DerivativeOrderBook): Uint8Array {
    return DerivativeOrderBook.encode(message).finish();
  },
  toProtoMsg(message: DerivativeOrderBook): DerivativeOrderBookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
      value: DerivativeOrderBook.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
  encode(message: ConditionalDerivativeOrderBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConditionalDerivativeOrderBookAmino): ConditionalDerivativeOrderBook {
    return {
      marketId: object.market_id,
      limitBuyOrders: Array.isArray(object?.limit_buy_orders) ? object.limit_buy_orders.map((e: any) => DerivativeLimitOrder.fromAmino(e)) : [],
      marketBuyOrders: Array.isArray(object?.market_buy_orders) ? object.market_buy_orders.map((e: any) => DerivativeMarketOrder.fromAmino(e)) : [],
      limitSellOrders: Array.isArray(object?.limit_sell_orders) ? object.limit_sell_orders.map((e: any) => DerivativeLimitOrder.fromAmino(e)) : [],
      marketSellOrders: Array.isArray(object?.market_sell_orders) ? object.market_sell_orders.map((e: any) => DerivativeMarketOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: ConditionalDerivativeOrderBook): ConditionalDerivativeOrderBookAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    if (message.limitBuyOrders) {
      obj.limit_buy_orders = message.limitBuyOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.limit_buy_orders = [];
    }
    if (message.marketBuyOrders) {
      obj.market_buy_orders = message.marketBuyOrders.map(e => e ? DerivativeMarketOrder.toAmino(e) : undefined);
    } else {
      obj.market_buy_orders = [];
    }
    if (message.limitSellOrders) {
      obj.limit_sell_orders = message.limitSellOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.limit_sell_orders = [];
    }
    if (message.marketSellOrders) {
      obj.market_sell_orders = message.marketSellOrders.map(e => e ? DerivativeMarketOrder.toAmino(e) : undefined);
    } else {
      obj.market_sell_orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: ConditionalDerivativeOrderBookAminoMsg): ConditionalDerivativeOrderBook {
    return ConditionalDerivativeOrderBook.fromAmino(object.value);
  },
  fromProtoMsg(message: ConditionalDerivativeOrderBookProtoMsg): ConditionalDerivativeOrderBook {
    return ConditionalDerivativeOrderBook.decode(message.value);
  },
  toProto(message: ConditionalDerivativeOrderBook): Uint8Array {
    return ConditionalDerivativeOrderBook.encode(message).finish();
  },
  toProtoMsg(message: ConditionalDerivativeOrderBook): ConditionalDerivativeOrderBookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
      value: ConditionalDerivativeOrderBook.encode(message).finish()
    };
  }
};
function createBaseBalance(): Balance {
  return {
    subaccountId: "",
    denom: "",
    deposits: Deposit.fromPartial({})
  };
}
export const Balance = {
  typeUrl: "/injective.exchange.v1beta1.Balance",
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BalanceAmino): Balance {
    return {
      subaccountId: object.subaccount_id,
      denom: object.denom,
      deposits: object?.deposits ? Deposit.fromAmino(object.deposits) : undefined
    };
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.denom = message.denom;
    obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};
function createBaseDerivativePosition(): DerivativePosition {
  return {
    subaccountId: "",
    marketId: "",
    position: Position.fromPartial({})
  };
}
export const DerivativePosition = {
  typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
  encode(message: DerivativePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DerivativePositionAmino): DerivativePosition {
    return {
      subaccountId: object.subaccount_id,
      marketId: object.market_id,
      position: object?.position ? Position.fromAmino(object.position) : undefined
    };
  },
  toAmino(message: DerivativePosition): DerivativePositionAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativePositionAminoMsg): DerivativePosition {
    return DerivativePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativePositionProtoMsg): DerivativePosition {
    return DerivativePosition.decode(message.value);
  },
  toProto(message: DerivativePosition): Uint8Array {
    return DerivativePosition.encode(message).finish();
  },
  toProtoMsg(message: DerivativePosition): DerivativePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
      value: DerivativePosition.encode(message).finish()
    };
  }
};
function createBaseSubaccountNonce(): SubaccountNonce {
  return {
    subaccountId: "",
    subaccountTradeNonce: SubaccountTradeNonce.fromPartial({})
  };
}
export const SubaccountNonce = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
  encode(message: SubaccountNonce, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SubaccountNonceAmino): SubaccountNonce {
    return {
      subaccountId: object.subaccount_id,
      subaccountTradeNonce: object?.subaccount_trade_nonce ? SubaccountTradeNonce.fromAmino(object.subaccount_trade_nonce) : undefined
    };
  },
  toAmino(message: SubaccountNonce): SubaccountNonceAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.subaccount_trade_nonce = message.subaccountTradeNonce ? SubaccountTradeNonce.toAmino(message.subaccountTradeNonce) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountNonceAminoMsg): SubaccountNonce {
    return SubaccountNonce.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountNonceProtoMsg): SubaccountNonce {
    return SubaccountNonce.decode(message.value);
  },
  toProto(message: SubaccountNonce): Uint8Array {
    return SubaccountNonce.encode(message).finish();
  },
  toProtoMsg(message: SubaccountNonce): SubaccountNonceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
      value: SubaccountNonce.encode(message).finish()
    };
  }
};
function createBaseExpiryFuturesMarketInfoState(): ExpiryFuturesMarketInfoState {
  return {
    marketId: "",
    marketInfo: ExpiryFuturesMarketInfo.fromPartial({})
  };
}
export const ExpiryFuturesMarketInfoState = {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
  encode(message: ExpiryFuturesMarketInfoState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ExpiryFuturesMarketInfoStateAmino): ExpiryFuturesMarketInfoState {
    return {
      marketId: object.market_id,
      marketInfo: object?.market_info ? ExpiryFuturesMarketInfo.fromAmino(object.market_info) : undefined
    };
  },
  toAmino(message: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoStateAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.market_info = message.marketInfo ? ExpiryFuturesMarketInfo.toAmino(message.marketInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExpiryFuturesMarketInfoStateAminoMsg): ExpiryFuturesMarketInfoState {
    return ExpiryFuturesMarketInfoState.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiryFuturesMarketInfoStateProtoMsg): ExpiryFuturesMarketInfoState {
    return ExpiryFuturesMarketInfoState.decode(message.value);
  },
  toProto(message: ExpiryFuturesMarketInfoState): Uint8Array {
    return ExpiryFuturesMarketInfoState.encode(message).finish();
  },
  toProtoMsg(message: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
      value: ExpiryFuturesMarketInfoState.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketFundingState(): PerpetualMarketFundingState {
  return {
    marketId: "",
    funding: PerpetualMarketFunding.fromPartial({})
  };
}
export const PerpetualMarketFundingState = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
  encode(message: PerpetualMarketFundingState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PerpetualMarketFundingStateAmino): PerpetualMarketFundingState {
    return {
      marketId: object.market_id,
      funding: object?.funding ? PerpetualMarketFunding.fromAmino(object.funding) : undefined
    };
  },
  toAmino(message: PerpetualMarketFundingState): PerpetualMarketFundingStateAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketFundingStateAminoMsg): PerpetualMarketFundingState {
    return PerpetualMarketFundingState.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketFundingStateProtoMsg): PerpetualMarketFundingState {
    return PerpetualMarketFundingState.decode(message.value);
  },
  toProto(message: PerpetualMarketFundingState): Uint8Array {
    return PerpetualMarketFundingState.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketFundingState): PerpetualMarketFundingStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
      value: PerpetualMarketFundingState.encode(message).finish()
    };
  }
};