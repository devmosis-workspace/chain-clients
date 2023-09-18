import { ExecutionType, TradeLog, TradeLogAmino, TradeLogSDKType, DerivativeTradeLog, DerivativeTradeLogAmino, DerivativeTradeLogSDKType, SubaccountPosition, SubaccountPositionAmino, SubaccountPositionSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType, SpotLimitOrder, SpotLimitOrderAmino, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderAmino, DerivativeLimitOrderSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, DepositUpdate, DepositUpdateAmino, DepositUpdateSDKType, DerivativeMarketOrder, DerivativeMarketOrderAmino, DerivativeMarketOrderSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, AccountRewards, AccountRewardsAmino, AccountRewardsSDKType, DerivativeOrder, DerivativeOrderAmino, DerivativeOrderSDKType, MarketFeeMultiplier, MarketFeeMultiplierAmino, MarketFeeMultiplierSDKType, Level, LevelAmino, LevelSDKType } from "./exchange";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface EventBatchSpotExecution {
    marketId: string;
    isBuy: boolean;
    executionType: ExecutionType;
    trades: TradeLog[];
}
export interface EventBatchSpotExecutionProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution";
    value: Uint8Array;
}
export interface EventBatchSpotExecutionAmino {
    market_id: string;
    is_buy: boolean;
    executionType: ExecutionType;
    trades: TradeLogAmino[];
}
export interface EventBatchSpotExecutionAminoMsg {
    type: "/injective.exchange.v1beta1.EventBatchSpotExecution";
    value: EventBatchSpotExecutionAmino;
}
export interface EventBatchSpotExecutionSDKType {
    market_id: string;
    is_buy: boolean;
    executionType: ExecutionType;
    trades: TradeLogSDKType[];
}
export interface EventBatchDerivativeExecution {
    marketId: string;
    isBuy: boolean;
    isLiquidation: boolean;
    /** nil for time expiry futures */
    cumulativeFunding?: string;
    executionType: ExecutionType;
    trades: DerivativeTradeLog[];
}
export interface EventBatchDerivativeExecutionProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution";
    value: Uint8Array;
}
export interface EventBatchDerivativeExecutionAmino {
    market_id: string;
    is_buy: boolean;
    is_liquidation: boolean;
    /** nil for time expiry futures */
    cumulative_funding: string;
    executionType: ExecutionType;
    trades: DerivativeTradeLogAmino[];
}
export interface EventBatchDerivativeExecutionAminoMsg {
    type: "/injective.exchange.v1beta1.EventBatchDerivativeExecution";
    value: EventBatchDerivativeExecutionAmino;
}
export interface EventBatchDerivativeExecutionSDKType {
    market_id: string;
    is_buy: boolean;
    is_liquidation: boolean;
    cumulative_funding?: string;
    executionType: ExecutionType;
    trades: DerivativeTradeLogSDKType[];
}
export interface EventLostFundsFromLiquidation {
    marketId: string;
    subaccountId: Uint8Array;
    lostFundsFromAvailableDuringPayout: string;
    lostFundsFromOrderCancels: string;
}
export interface EventLostFundsFromLiquidationProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation";
    value: Uint8Array;
}
export interface EventLostFundsFromLiquidationAmino {
    market_id: string;
    subaccount_id: Uint8Array;
    lost_funds_from_available_during_payout: string;
    lost_funds_from_order_cancels: string;
}
export interface EventLostFundsFromLiquidationAminoMsg {
    type: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation";
    value: EventLostFundsFromLiquidationAmino;
}
export interface EventLostFundsFromLiquidationSDKType {
    market_id: string;
    subaccount_id: Uint8Array;
    lost_funds_from_available_during_payout: string;
    lost_funds_from_order_cancels: string;
}
export interface EventBatchDerivativePosition {
    marketId: string;
    positions: SubaccountPosition[];
}
export interface EventBatchDerivativePositionProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition";
    value: Uint8Array;
}
export interface EventBatchDerivativePositionAmino {
    market_id: string;
    positions: SubaccountPositionAmino[];
}
export interface EventBatchDerivativePositionAminoMsg {
    type: "/injective.exchange.v1beta1.EventBatchDerivativePosition";
    value: EventBatchDerivativePositionAmino;
}
export interface EventBatchDerivativePositionSDKType {
    market_id: string;
    positions: SubaccountPositionSDKType[];
}
export interface EventDerivativeMarketPaused {
    marketId: string;
    settlePrice: string;
    totalMissingFunds: string;
    missingFundsRate: string;
}
export interface EventDerivativeMarketPausedProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused";
    value: Uint8Array;
}
export interface EventDerivativeMarketPausedAmino {
    market_id: string;
    settle_price: string;
    total_missing_funds: string;
    missing_funds_rate: string;
}
export interface EventDerivativeMarketPausedAminoMsg {
    type: "/injective.exchange.v1beta1.EventDerivativeMarketPaused";
    value: EventDerivativeMarketPausedAmino;
}
export interface EventDerivativeMarketPausedSDKType {
    market_id: string;
    settle_price: string;
    total_missing_funds: string;
    missing_funds_rate: string;
}
export interface EventMarketBeyondBankruptcy {
    marketId: string;
    settlePrice: string;
    missingMarketFunds: string;
}
export interface EventMarketBeyondBankruptcyProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventMarketBeyondBankruptcy";
    value: Uint8Array;
}
export interface EventMarketBeyondBankruptcyAmino {
    market_id: string;
    settle_price: string;
    missing_market_funds: string;
}
export interface EventMarketBeyondBankruptcyAminoMsg {
    type: "/injective.exchange.v1beta1.EventMarketBeyondBankruptcy";
    value: EventMarketBeyondBankruptcyAmino;
}
export interface EventMarketBeyondBankruptcySDKType {
    market_id: string;
    settle_price: string;
    missing_market_funds: string;
}
export interface EventAllPositionsHaircut {
    marketId: string;
    settlePrice: string;
    missingFundsRate: string;
}
export interface EventAllPositionsHaircutProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventAllPositionsHaircut";
    value: Uint8Array;
}
export interface EventAllPositionsHaircutAmino {
    market_id: string;
    settle_price: string;
    missing_funds_rate: string;
}
export interface EventAllPositionsHaircutAminoMsg {
    type: "/injective.exchange.v1beta1.EventAllPositionsHaircut";
    value: EventAllPositionsHaircutAmino;
}
export interface EventAllPositionsHaircutSDKType {
    market_id: string;
    settle_price: string;
    missing_funds_rate: string;
}
export interface EventBinaryOptionsMarketUpdate {
    market: BinaryOptionsMarket;
}
export interface EventBinaryOptionsMarketUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
    value: Uint8Array;
}
export interface EventBinaryOptionsMarketUpdateAmino {
    market?: BinaryOptionsMarketAmino;
}
export interface EventBinaryOptionsMarketUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
    value: EventBinaryOptionsMarketUpdateAmino;
}
export interface EventBinaryOptionsMarketUpdateSDKType {
    market: BinaryOptionsMarketSDKType;
}
export interface EventNewSpotOrders {
    marketId: string;
    buyOrders: SpotLimitOrder[];
    sellOrders: SpotLimitOrder[];
}
export interface EventNewSpotOrdersProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders";
    value: Uint8Array;
}
export interface EventNewSpotOrdersAmino {
    market_id: string;
    buy_orders: SpotLimitOrderAmino[];
    sell_orders: SpotLimitOrderAmino[];
}
export interface EventNewSpotOrdersAminoMsg {
    type: "/injective.exchange.v1beta1.EventNewSpotOrders";
    value: EventNewSpotOrdersAmino;
}
export interface EventNewSpotOrdersSDKType {
    market_id: string;
    buy_orders: SpotLimitOrderSDKType[];
    sell_orders: SpotLimitOrderSDKType[];
}
export interface EventNewDerivativeOrders {
    marketId: string;
    buyOrders: DerivativeLimitOrder[];
    sellOrders: DerivativeLimitOrder[];
}
export interface EventNewDerivativeOrdersProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders";
    value: Uint8Array;
}
export interface EventNewDerivativeOrdersAmino {
    market_id: string;
    buy_orders: DerivativeLimitOrderAmino[];
    sell_orders: DerivativeLimitOrderAmino[];
}
export interface EventNewDerivativeOrdersAminoMsg {
    type: "/injective.exchange.v1beta1.EventNewDerivativeOrders";
    value: EventNewDerivativeOrdersAmino;
}
export interface EventNewDerivativeOrdersSDKType {
    market_id: string;
    buy_orders: DerivativeLimitOrderSDKType[];
    sell_orders: DerivativeLimitOrderSDKType[];
}
export interface EventCancelSpotOrder {
    marketId: string;
    order: SpotLimitOrder;
}
export interface EventCancelSpotOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder";
    value: Uint8Array;
}
export interface EventCancelSpotOrderAmino {
    market_id: string;
    order?: SpotLimitOrderAmino;
}
export interface EventCancelSpotOrderAminoMsg {
    type: "/injective.exchange.v1beta1.EventCancelSpotOrder";
    value: EventCancelSpotOrderAmino;
}
export interface EventCancelSpotOrderSDKType {
    market_id: string;
    order: SpotLimitOrderSDKType;
}
export interface EventSpotMarketUpdate {
    market: SpotMarket;
}
export interface EventSpotMarketUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate";
    value: Uint8Array;
}
export interface EventSpotMarketUpdateAmino {
    market?: SpotMarketAmino;
}
export interface EventSpotMarketUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventSpotMarketUpdate";
    value: EventSpotMarketUpdateAmino;
}
export interface EventSpotMarketUpdateSDKType {
    market: SpotMarketSDKType;
}
export interface EventPerpetualMarketUpdate {
    market: DerivativeMarket;
    perpetualMarketInfo?: PerpetualMarketInfo;
    funding?: PerpetualMarketFunding;
}
export interface EventPerpetualMarketUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate";
    value: Uint8Array;
}
export interface EventPerpetualMarketUpdateAmino {
    market?: DerivativeMarketAmino;
    perpetual_market_info?: PerpetualMarketInfoAmino;
    funding?: PerpetualMarketFundingAmino;
}
export interface EventPerpetualMarketUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate";
    value: EventPerpetualMarketUpdateAmino;
}
export interface EventPerpetualMarketUpdateSDKType {
    market: DerivativeMarketSDKType;
    perpetual_market_info?: PerpetualMarketInfoSDKType;
    funding?: PerpetualMarketFundingSDKType;
}
export interface EventExpiryFuturesMarketUpdate {
    market: DerivativeMarket;
    expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo;
}
export interface EventExpiryFuturesMarketUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
    value: Uint8Array;
}
export interface EventExpiryFuturesMarketUpdateAmino {
    market?: DerivativeMarketAmino;
    expiry_futures_market_info?: ExpiryFuturesMarketInfoAmino;
}
export interface EventExpiryFuturesMarketUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
    value: EventExpiryFuturesMarketUpdateAmino;
}
export interface EventExpiryFuturesMarketUpdateSDKType {
    market: DerivativeMarketSDKType;
    expiry_futures_market_info?: ExpiryFuturesMarketInfoSDKType;
}
export interface EventPerpetualMarketFundingUpdate {
    marketId: string;
    funding: PerpetualMarketFunding;
    isHourlyFunding: boolean;
    fundingRate?: string;
    markPrice?: string;
}
export interface EventPerpetualMarketFundingUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
    value: Uint8Array;
}
export interface EventPerpetualMarketFundingUpdateAmino {
    market_id: string;
    funding?: PerpetualMarketFundingAmino;
    is_hourly_funding: boolean;
    funding_rate: string;
    mark_price: string;
}
export interface EventPerpetualMarketFundingUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
    value: EventPerpetualMarketFundingUpdateAmino;
}
export interface EventPerpetualMarketFundingUpdateSDKType {
    market_id: string;
    funding: PerpetualMarketFundingSDKType;
    is_hourly_funding: boolean;
    funding_rate?: string;
    mark_price?: string;
}
export interface EventSubaccountDeposit {
    srcAddress: string;
    subaccountId: Uint8Array;
    amount: Coin;
}
export interface EventSubaccountDepositProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit";
    value: Uint8Array;
}
export interface EventSubaccountDepositAmino {
    src_address: string;
    subaccount_id: Uint8Array;
    amount?: CoinAmino;
}
export interface EventSubaccountDepositAminoMsg {
    type: "/injective.exchange.v1beta1.EventSubaccountDeposit";
    value: EventSubaccountDepositAmino;
}
export interface EventSubaccountDepositSDKType {
    src_address: string;
    subaccount_id: Uint8Array;
    amount: CoinSDKType;
}
export interface EventSubaccountWithdraw {
    subaccountId: Uint8Array;
    dstAddress: string;
    amount: Coin;
}
export interface EventSubaccountWithdrawProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw";
    value: Uint8Array;
}
export interface EventSubaccountWithdrawAmino {
    subaccount_id: Uint8Array;
    dst_address: string;
    amount?: CoinAmino;
}
export interface EventSubaccountWithdrawAminoMsg {
    type: "/injective.exchange.v1beta1.EventSubaccountWithdraw";
    value: EventSubaccountWithdrawAmino;
}
export interface EventSubaccountWithdrawSDKType {
    subaccount_id: Uint8Array;
    dst_address: string;
    amount: CoinSDKType;
}
export interface EventSubaccountBalanceTransfer {
    srcSubaccountId: string;
    dstSubaccountId: string;
    amount: Coin;
}
export interface EventSubaccountBalanceTransferProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
    value: Uint8Array;
}
export interface EventSubaccountBalanceTransferAmino {
    src_subaccount_id: string;
    dst_subaccount_id: string;
    amount?: CoinAmino;
}
export interface EventSubaccountBalanceTransferAminoMsg {
    type: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
    value: EventSubaccountBalanceTransferAmino;
}
export interface EventSubaccountBalanceTransferSDKType {
    src_subaccount_id: string;
    dst_subaccount_id: string;
    amount: CoinSDKType;
}
export interface EventBatchDepositUpdate {
    depositUpdates: DepositUpdate[];
}
export interface EventBatchDepositUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate";
    value: Uint8Array;
}
export interface EventBatchDepositUpdateAmino {
    deposit_updates: DepositUpdateAmino[];
}
export interface EventBatchDepositUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventBatchDepositUpdate";
    value: EventBatchDepositUpdateAmino;
}
export interface EventBatchDepositUpdateSDKType {
    deposit_updates: DepositUpdateSDKType[];
}
export interface DerivativeMarketOrderCancel {
    marketOrder?: DerivativeMarketOrder;
    cancelQuantity: string;
}
export interface DerivativeMarketOrderCancelProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel";
    value: Uint8Array;
}
export interface DerivativeMarketOrderCancelAmino {
    market_order?: DerivativeMarketOrderAmino;
    cancel_quantity: string;
}
export interface DerivativeMarketOrderCancelAminoMsg {
    type: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel";
    value: DerivativeMarketOrderCancelAmino;
}
export interface DerivativeMarketOrderCancelSDKType {
    market_order?: DerivativeMarketOrderSDKType;
    cancel_quantity: string;
}
export interface EventCancelDerivativeOrder {
    marketId: string;
    isLimitCancel: boolean;
    limitOrder?: DerivativeLimitOrder;
    marketOrderCancel?: DerivativeMarketOrderCancel;
}
export interface EventCancelDerivativeOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder";
    value: Uint8Array;
}
export interface EventCancelDerivativeOrderAmino {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderAmino;
    market_order_cancel?: DerivativeMarketOrderCancelAmino;
}
export interface EventCancelDerivativeOrderAminoMsg {
    type: "/injective.exchange.v1beta1.EventCancelDerivativeOrder";
    value: EventCancelDerivativeOrderAmino;
}
export interface EventCancelDerivativeOrderSDKType {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderSDKType;
    market_order_cancel?: DerivativeMarketOrderCancelSDKType;
}
export interface EventFeeDiscountSchedule {
    schedule: FeeDiscountSchedule;
}
export interface EventFeeDiscountScheduleProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule";
    value: Uint8Array;
}
export interface EventFeeDiscountScheduleAmino {
    schedule?: FeeDiscountScheduleAmino;
}
export interface EventFeeDiscountScheduleAminoMsg {
    type: "/injective.exchange.v1beta1.EventFeeDiscountSchedule";
    value: EventFeeDiscountScheduleAmino;
}
export interface EventFeeDiscountScheduleSDKType {
    schedule: FeeDiscountScheduleSDKType;
}
export interface EventTradingRewardCampaignUpdate {
    campaignInfo: TradingRewardCampaignInfo;
    campaignRewardPools: CampaignRewardPool[];
}
export interface EventTradingRewardCampaignUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
    value: Uint8Array;
}
export interface EventTradingRewardCampaignUpdateAmino {
    campaign_info?: TradingRewardCampaignInfoAmino;
    campaign_reward_pools: CampaignRewardPoolAmino[];
}
export interface EventTradingRewardCampaignUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
    value: EventTradingRewardCampaignUpdateAmino;
}
export interface EventTradingRewardCampaignUpdateSDKType {
    campaign_info: TradingRewardCampaignInfoSDKType;
    campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface EventTradingRewardDistribution {
    accountRewards: AccountRewards[];
}
export interface EventTradingRewardDistributionProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution";
    value: Uint8Array;
}
export interface EventTradingRewardDistributionAmino {
    account_rewards: AccountRewardsAmino[];
}
export interface EventTradingRewardDistributionAminoMsg {
    type: "/injective.exchange.v1beta1.EventTradingRewardDistribution";
    value: EventTradingRewardDistributionAmino;
}
export interface EventTradingRewardDistributionSDKType {
    account_rewards: AccountRewardsSDKType[];
}
export interface EventNewConditionalDerivativeOrder {
    marketId: string;
    order: DerivativeOrder;
    hash: Uint8Array;
    isMarket: boolean;
}
export interface EventNewConditionalDerivativeOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
    value: Uint8Array;
}
export interface EventNewConditionalDerivativeOrderAmino {
    market_id: string;
    order?: DerivativeOrderAmino;
    hash: Uint8Array;
    is_market: boolean;
}
export interface EventNewConditionalDerivativeOrderAminoMsg {
    type: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
    value: EventNewConditionalDerivativeOrderAmino;
}
export interface EventNewConditionalDerivativeOrderSDKType {
    market_id: string;
    order: DerivativeOrderSDKType;
    hash: Uint8Array;
    is_market: boolean;
}
export interface EventCancelConditionalDerivativeOrder {
    marketId: string;
    isLimitCancel: boolean;
    limitOrder?: DerivativeLimitOrder;
    marketOrder?: DerivativeMarketOrder;
}
export interface EventCancelConditionalDerivativeOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
    value: Uint8Array;
}
export interface EventCancelConditionalDerivativeOrderAmino {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderAmino;
    market_order?: DerivativeMarketOrderAmino;
}
export interface EventCancelConditionalDerivativeOrderAminoMsg {
    type: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
    value: EventCancelConditionalDerivativeOrderAmino;
}
export interface EventCancelConditionalDerivativeOrderSDKType {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderSDKType;
    market_order?: DerivativeMarketOrderSDKType;
}
export interface EventConditionalDerivativeOrderTrigger {
    marketId: Uint8Array;
    isLimitTrigger: boolean;
    triggeredOrderHash: Uint8Array;
    placedOrderHash: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
    value: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerAmino {
    market_id: Uint8Array;
    isLimitTrigger: boolean;
    triggered_order_hash: Uint8Array;
    placed_order_hash: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerAminoMsg {
    type: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
    value: EventConditionalDerivativeOrderTriggerAmino;
}
export interface EventConditionalDerivativeOrderTriggerSDKType {
    market_id: Uint8Array;
    isLimitTrigger: boolean;
    triggered_order_hash: Uint8Array;
    placed_order_hash: Uint8Array;
}
export interface EventOrderFail {
    account: Uint8Array;
    hashes: Uint8Array[];
    flags: number[];
}
export interface EventOrderFailProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventOrderFail";
    value: Uint8Array;
}
export interface EventOrderFailAmino {
    account: Uint8Array;
    hashes: Uint8Array[];
    flags: number[];
}
export interface EventOrderFailAminoMsg {
    type: "/injective.exchange.v1beta1.EventOrderFail";
    value: EventOrderFailAmino;
}
export interface EventOrderFailSDKType {
    account: Uint8Array;
    hashes: Uint8Array[];
    flags: number[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdated {
    marketFeeMultipliers: MarketFeeMultiplier[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated";
    value: Uint8Array;
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedAmino {
    market_fee_multipliers: MarketFeeMultiplierAmino[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedAminoMsg {
    type: "/injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated";
    value: EventAtomicMarketOrderFeeMultipliersUpdatedAmino;
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedSDKType {
    market_fee_multipliers: MarketFeeMultiplierSDKType[];
}
export interface EventOrderbookUpdate {
    spotUpdates: OrderbookUpdate[];
    derivativeUpdates: OrderbookUpdate[];
}
export interface EventOrderbookUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EventOrderbookUpdate";
    value: Uint8Array;
}
export interface EventOrderbookUpdateAmino {
    spot_updates: OrderbookUpdateAmino[];
    derivative_updates: OrderbookUpdateAmino[];
}
export interface EventOrderbookUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.EventOrderbookUpdate";
    value: EventOrderbookUpdateAmino;
}
export interface EventOrderbookUpdateSDKType {
    spot_updates: OrderbookUpdateSDKType[];
    derivative_updates: OrderbookUpdateSDKType[];
}
export interface OrderbookUpdate {
    seq: bigint;
    orderbook: Orderbook;
}
export interface OrderbookUpdateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.OrderbookUpdate";
    value: Uint8Array;
}
export interface OrderbookUpdateAmino {
    seq: string;
    orderbook?: OrderbookAmino;
}
export interface OrderbookUpdateAminoMsg {
    type: "/injective.exchange.v1beta1.OrderbookUpdate";
    value: OrderbookUpdateAmino;
}
export interface OrderbookUpdateSDKType {
    seq: bigint;
    orderbook: OrderbookSDKType;
}
export interface Orderbook {
    marketId: Uint8Array;
    buyLevels: Level[];
    sellLevels: Level[];
}
export interface OrderbookProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.Orderbook";
    value: Uint8Array;
}
export interface OrderbookAmino {
    market_id: Uint8Array;
    buy_levels: LevelAmino[];
    sell_levels: LevelAmino[];
}
export interface OrderbookAminoMsg {
    type: "/injective.exchange.v1beta1.Orderbook";
    value: OrderbookAmino;
}
export interface OrderbookSDKType {
    market_id: Uint8Array;
    buy_levels: LevelSDKType[];
    sell_levels: LevelSDKType[];
}
export declare const EventBatchSpotExecution: {
    typeUrl: string;
    encode(message: EventBatchSpotExecution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchSpotExecution;
    fromPartial(object: Partial<EventBatchSpotExecution>): EventBatchSpotExecution;
    fromAmino(object: EventBatchSpotExecutionAmino): EventBatchSpotExecution;
    toAmino(message: EventBatchSpotExecution): EventBatchSpotExecutionAmino;
    fromAminoMsg(object: EventBatchSpotExecutionAminoMsg): EventBatchSpotExecution;
    fromProtoMsg(message: EventBatchSpotExecutionProtoMsg): EventBatchSpotExecution;
    toProto(message: EventBatchSpotExecution): Uint8Array;
    toProtoMsg(message: EventBatchSpotExecution): EventBatchSpotExecutionProtoMsg;
};
export declare const EventBatchDerivativeExecution: {
    typeUrl: string;
    encode(message: EventBatchDerivativeExecution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchDerivativeExecution;
    fromPartial(object: Partial<EventBatchDerivativeExecution>): EventBatchDerivativeExecution;
    fromAmino(object: EventBatchDerivativeExecutionAmino): EventBatchDerivativeExecution;
    toAmino(message: EventBatchDerivativeExecution): EventBatchDerivativeExecutionAmino;
    fromAminoMsg(object: EventBatchDerivativeExecutionAminoMsg): EventBatchDerivativeExecution;
    fromProtoMsg(message: EventBatchDerivativeExecutionProtoMsg): EventBatchDerivativeExecution;
    toProto(message: EventBatchDerivativeExecution): Uint8Array;
    toProtoMsg(message: EventBatchDerivativeExecution): EventBatchDerivativeExecutionProtoMsg;
};
export declare const EventLostFundsFromLiquidation: {
    typeUrl: string;
    encode(message: EventLostFundsFromLiquidation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventLostFundsFromLiquidation;
    fromPartial(object: Partial<EventLostFundsFromLiquidation>): EventLostFundsFromLiquidation;
    fromAmino(object: EventLostFundsFromLiquidationAmino): EventLostFundsFromLiquidation;
    toAmino(message: EventLostFundsFromLiquidation): EventLostFundsFromLiquidationAmino;
    fromAminoMsg(object: EventLostFundsFromLiquidationAminoMsg): EventLostFundsFromLiquidation;
    fromProtoMsg(message: EventLostFundsFromLiquidationProtoMsg): EventLostFundsFromLiquidation;
    toProto(message: EventLostFundsFromLiquidation): Uint8Array;
    toProtoMsg(message: EventLostFundsFromLiquidation): EventLostFundsFromLiquidationProtoMsg;
};
export declare const EventBatchDerivativePosition: {
    typeUrl: string;
    encode(message: EventBatchDerivativePosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchDerivativePosition;
    fromPartial(object: Partial<EventBatchDerivativePosition>): EventBatchDerivativePosition;
    fromAmino(object: EventBatchDerivativePositionAmino): EventBatchDerivativePosition;
    toAmino(message: EventBatchDerivativePosition): EventBatchDerivativePositionAmino;
    fromAminoMsg(object: EventBatchDerivativePositionAminoMsg): EventBatchDerivativePosition;
    fromProtoMsg(message: EventBatchDerivativePositionProtoMsg): EventBatchDerivativePosition;
    toProto(message: EventBatchDerivativePosition): Uint8Array;
    toProtoMsg(message: EventBatchDerivativePosition): EventBatchDerivativePositionProtoMsg;
};
export declare const EventDerivativeMarketPaused: {
    typeUrl: string;
    encode(message: EventDerivativeMarketPaused, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDerivativeMarketPaused;
    fromPartial(object: Partial<EventDerivativeMarketPaused>): EventDerivativeMarketPaused;
    fromAmino(object: EventDerivativeMarketPausedAmino): EventDerivativeMarketPaused;
    toAmino(message: EventDerivativeMarketPaused): EventDerivativeMarketPausedAmino;
    fromAminoMsg(object: EventDerivativeMarketPausedAminoMsg): EventDerivativeMarketPaused;
    fromProtoMsg(message: EventDerivativeMarketPausedProtoMsg): EventDerivativeMarketPaused;
    toProto(message: EventDerivativeMarketPaused): Uint8Array;
    toProtoMsg(message: EventDerivativeMarketPaused): EventDerivativeMarketPausedProtoMsg;
};
export declare const EventMarketBeyondBankruptcy: {
    typeUrl: string;
    encode(message: EventMarketBeyondBankruptcy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMarketBeyondBankruptcy;
    fromPartial(object: Partial<EventMarketBeyondBankruptcy>): EventMarketBeyondBankruptcy;
    fromAmino(object: EventMarketBeyondBankruptcyAmino): EventMarketBeyondBankruptcy;
    toAmino(message: EventMarketBeyondBankruptcy): EventMarketBeyondBankruptcyAmino;
    fromAminoMsg(object: EventMarketBeyondBankruptcyAminoMsg): EventMarketBeyondBankruptcy;
    fromProtoMsg(message: EventMarketBeyondBankruptcyProtoMsg): EventMarketBeyondBankruptcy;
    toProto(message: EventMarketBeyondBankruptcy): Uint8Array;
    toProtoMsg(message: EventMarketBeyondBankruptcy): EventMarketBeyondBankruptcyProtoMsg;
};
export declare const EventAllPositionsHaircut: {
    typeUrl: string;
    encode(message: EventAllPositionsHaircut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAllPositionsHaircut;
    fromPartial(object: Partial<EventAllPositionsHaircut>): EventAllPositionsHaircut;
    fromAmino(object: EventAllPositionsHaircutAmino): EventAllPositionsHaircut;
    toAmino(message: EventAllPositionsHaircut): EventAllPositionsHaircutAmino;
    fromAminoMsg(object: EventAllPositionsHaircutAminoMsg): EventAllPositionsHaircut;
    fromProtoMsg(message: EventAllPositionsHaircutProtoMsg): EventAllPositionsHaircut;
    toProto(message: EventAllPositionsHaircut): Uint8Array;
    toProtoMsg(message: EventAllPositionsHaircut): EventAllPositionsHaircutProtoMsg;
};
export declare const EventBinaryOptionsMarketUpdate: {
    typeUrl: string;
    encode(message: EventBinaryOptionsMarketUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBinaryOptionsMarketUpdate;
    fromPartial(object: Partial<EventBinaryOptionsMarketUpdate>): EventBinaryOptionsMarketUpdate;
    fromAmino(object: EventBinaryOptionsMarketUpdateAmino): EventBinaryOptionsMarketUpdate;
    toAmino(message: EventBinaryOptionsMarketUpdate): EventBinaryOptionsMarketUpdateAmino;
    fromAminoMsg(object: EventBinaryOptionsMarketUpdateAminoMsg): EventBinaryOptionsMarketUpdate;
    fromProtoMsg(message: EventBinaryOptionsMarketUpdateProtoMsg): EventBinaryOptionsMarketUpdate;
    toProto(message: EventBinaryOptionsMarketUpdate): Uint8Array;
    toProtoMsg(message: EventBinaryOptionsMarketUpdate): EventBinaryOptionsMarketUpdateProtoMsg;
};
export declare const EventNewSpotOrders: {
    typeUrl: string;
    encode(message: EventNewSpotOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventNewSpotOrders;
    fromPartial(object: Partial<EventNewSpotOrders>): EventNewSpotOrders;
    fromAmino(object: EventNewSpotOrdersAmino): EventNewSpotOrders;
    toAmino(message: EventNewSpotOrders): EventNewSpotOrdersAmino;
    fromAminoMsg(object: EventNewSpotOrdersAminoMsg): EventNewSpotOrders;
    fromProtoMsg(message: EventNewSpotOrdersProtoMsg): EventNewSpotOrders;
    toProto(message: EventNewSpotOrders): Uint8Array;
    toProtoMsg(message: EventNewSpotOrders): EventNewSpotOrdersProtoMsg;
};
export declare const EventNewDerivativeOrders: {
    typeUrl: string;
    encode(message: EventNewDerivativeOrders, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventNewDerivativeOrders;
    fromPartial(object: Partial<EventNewDerivativeOrders>): EventNewDerivativeOrders;
    fromAmino(object: EventNewDerivativeOrdersAmino): EventNewDerivativeOrders;
    toAmino(message: EventNewDerivativeOrders): EventNewDerivativeOrdersAmino;
    fromAminoMsg(object: EventNewDerivativeOrdersAminoMsg): EventNewDerivativeOrders;
    fromProtoMsg(message: EventNewDerivativeOrdersProtoMsg): EventNewDerivativeOrders;
    toProto(message: EventNewDerivativeOrders): Uint8Array;
    toProtoMsg(message: EventNewDerivativeOrders): EventNewDerivativeOrdersProtoMsg;
};
export declare const EventCancelSpotOrder: {
    typeUrl: string;
    encode(message: EventCancelSpotOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCancelSpotOrder;
    fromPartial(object: Partial<EventCancelSpotOrder>): EventCancelSpotOrder;
    fromAmino(object: EventCancelSpotOrderAmino): EventCancelSpotOrder;
    toAmino(message: EventCancelSpotOrder): EventCancelSpotOrderAmino;
    fromAminoMsg(object: EventCancelSpotOrderAminoMsg): EventCancelSpotOrder;
    fromProtoMsg(message: EventCancelSpotOrderProtoMsg): EventCancelSpotOrder;
    toProto(message: EventCancelSpotOrder): Uint8Array;
    toProtoMsg(message: EventCancelSpotOrder): EventCancelSpotOrderProtoMsg;
};
export declare const EventSpotMarketUpdate: {
    typeUrl: string;
    encode(message: EventSpotMarketUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSpotMarketUpdate;
    fromPartial(object: Partial<EventSpotMarketUpdate>): EventSpotMarketUpdate;
    fromAmino(object: EventSpotMarketUpdateAmino): EventSpotMarketUpdate;
    toAmino(message: EventSpotMarketUpdate): EventSpotMarketUpdateAmino;
    fromAminoMsg(object: EventSpotMarketUpdateAminoMsg): EventSpotMarketUpdate;
    fromProtoMsg(message: EventSpotMarketUpdateProtoMsg): EventSpotMarketUpdate;
    toProto(message: EventSpotMarketUpdate): Uint8Array;
    toProtoMsg(message: EventSpotMarketUpdate): EventSpotMarketUpdateProtoMsg;
};
export declare const EventPerpetualMarketUpdate: {
    typeUrl: string;
    encode(message: EventPerpetualMarketUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPerpetualMarketUpdate;
    fromPartial(object: Partial<EventPerpetualMarketUpdate>): EventPerpetualMarketUpdate;
    fromAmino(object: EventPerpetualMarketUpdateAmino): EventPerpetualMarketUpdate;
    toAmino(message: EventPerpetualMarketUpdate): EventPerpetualMarketUpdateAmino;
    fromAminoMsg(object: EventPerpetualMarketUpdateAminoMsg): EventPerpetualMarketUpdate;
    fromProtoMsg(message: EventPerpetualMarketUpdateProtoMsg): EventPerpetualMarketUpdate;
    toProto(message: EventPerpetualMarketUpdate): Uint8Array;
    toProtoMsg(message: EventPerpetualMarketUpdate): EventPerpetualMarketUpdateProtoMsg;
};
export declare const EventExpiryFuturesMarketUpdate: {
    typeUrl: string;
    encode(message: EventExpiryFuturesMarketUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventExpiryFuturesMarketUpdate;
    fromPartial(object: Partial<EventExpiryFuturesMarketUpdate>): EventExpiryFuturesMarketUpdate;
    fromAmino(object: EventExpiryFuturesMarketUpdateAmino): EventExpiryFuturesMarketUpdate;
    toAmino(message: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdateAmino;
    fromAminoMsg(object: EventExpiryFuturesMarketUpdateAminoMsg): EventExpiryFuturesMarketUpdate;
    fromProtoMsg(message: EventExpiryFuturesMarketUpdateProtoMsg): EventExpiryFuturesMarketUpdate;
    toProto(message: EventExpiryFuturesMarketUpdate): Uint8Array;
    toProtoMsg(message: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdateProtoMsg;
};
export declare const EventPerpetualMarketFundingUpdate: {
    typeUrl: string;
    encode(message: EventPerpetualMarketFundingUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPerpetualMarketFundingUpdate;
    fromPartial(object: Partial<EventPerpetualMarketFundingUpdate>): EventPerpetualMarketFundingUpdate;
    fromAmino(object: EventPerpetualMarketFundingUpdateAmino): EventPerpetualMarketFundingUpdate;
    toAmino(message: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdateAmino;
    fromAminoMsg(object: EventPerpetualMarketFundingUpdateAminoMsg): EventPerpetualMarketFundingUpdate;
    fromProtoMsg(message: EventPerpetualMarketFundingUpdateProtoMsg): EventPerpetualMarketFundingUpdate;
    toProto(message: EventPerpetualMarketFundingUpdate): Uint8Array;
    toProtoMsg(message: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdateProtoMsg;
};
export declare const EventSubaccountDeposit: {
    typeUrl: string;
    encode(message: EventSubaccountDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSubaccountDeposit;
    fromPartial(object: Partial<EventSubaccountDeposit>): EventSubaccountDeposit;
    fromAmino(object: EventSubaccountDepositAmino): EventSubaccountDeposit;
    toAmino(message: EventSubaccountDeposit): EventSubaccountDepositAmino;
    fromAminoMsg(object: EventSubaccountDepositAminoMsg): EventSubaccountDeposit;
    fromProtoMsg(message: EventSubaccountDepositProtoMsg): EventSubaccountDeposit;
    toProto(message: EventSubaccountDeposit): Uint8Array;
    toProtoMsg(message: EventSubaccountDeposit): EventSubaccountDepositProtoMsg;
};
export declare const EventSubaccountWithdraw: {
    typeUrl: string;
    encode(message: EventSubaccountWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSubaccountWithdraw;
    fromPartial(object: Partial<EventSubaccountWithdraw>): EventSubaccountWithdraw;
    fromAmino(object: EventSubaccountWithdrawAmino): EventSubaccountWithdraw;
    toAmino(message: EventSubaccountWithdraw): EventSubaccountWithdrawAmino;
    fromAminoMsg(object: EventSubaccountWithdrawAminoMsg): EventSubaccountWithdraw;
    fromProtoMsg(message: EventSubaccountWithdrawProtoMsg): EventSubaccountWithdraw;
    toProto(message: EventSubaccountWithdraw): Uint8Array;
    toProtoMsg(message: EventSubaccountWithdraw): EventSubaccountWithdrawProtoMsg;
};
export declare const EventSubaccountBalanceTransfer: {
    typeUrl: string;
    encode(message: EventSubaccountBalanceTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSubaccountBalanceTransfer;
    fromPartial(object: Partial<EventSubaccountBalanceTransfer>): EventSubaccountBalanceTransfer;
    fromAmino(object: EventSubaccountBalanceTransferAmino): EventSubaccountBalanceTransfer;
    toAmino(message: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransferAmino;
    fromAminoMsg(object: EventSubaccountBalanceTransferAminoMsg): EventSubaccountBalanceTransfer;
    fromProtoMsg(message: EventSubaccountBalanceTransferProtoMsg): EventSubaccountBalanceTransfer;
    toProto(message: EventSubaccountBalanceTransfer): Uint8Array;
    toProtoMsg(message: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransferProtoMsg;
};
export declare const EventBatchDepositUpdate: {
    typeUrl: string;
    encode(message: EventBatchDepositUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchDepositUpdate;
    fromPartial(object: Partial<EventBatchDepositUpdate>): EventBatchDepositUpdate;
    fromAmino(object: EventBatchDepositUpdateAmino): EventBatchDepositUpdate;
    toAmino(message: EventBatchDepositUpdate): EventBatchDepositUpdateAmino;
    fromAminoMsg(object: EventBatchDepositUpdateAminoMsg): EventBatchDepositUpdate;
    fromProtoMsg(message: EventBatchDepositUpdateProtoMsg): EventBatchDepositUpdate;
    toProto(message: EventBatchDepositUpdate): Uint8Array;
    toProtoMsg(message: EventBatchDepositUpdate): EventBatchDepositUpdateProtoMsg;
};
export declare const DerivativeMarketOrderCancel: {
    typeUrl: string;
    encode(message: DerivativeMarketOrderCancel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DerivativeMarketOrderCancel;
    fromPartial(object: Partial<DerivativeMarketOrderCancel>): DerivativeMarketOrderCancel;
    fromAmino(object: DerivativeMarketOrderCancelAmino): DerivativeMarketOrderCancel;
    toAmino(message: DerivativeMarketOrderCancel): DerivativeMarketOrderCancelAmino;
    fromAminoMsg(object: DerivativeMarketOrderCancelAminoMsg): DerivativeMarketOrderCancel;
    fromProtoMsg(message: DerivativeMarketOrderCancelProtoMsg): DerivativeMarketOrderCancel;
    toProto(message: DerivativeMarketOrderCancel): Uint8Array;
    toProtoMsg(message: DerivativeMarketOrderCancel): DerivativeMarketOrderCancelProtoMsg;
};
export declare const EventCancelDerivativeOrder: {
    typeUrl: string;
    encode(message: EventCancelDerivativeOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCancelDerivativeOrder;
    fromPartial(object: Partial<EventCancelDerivativeOrder>): EventCancelDerivativeOrder;
    fromAmino(object: EventCancelDerivativeOrderAmino): EventCancelDerivativeOrder;
    toAmino(message: EventCancelDerivativeOrder): EventCancelDerivativeOrderAmino;
    fromAminoMsg(object: EventCancelDerivativeOrderAminoMsg): EventCancelDerivativeOrder;
    fromProtoMsg(message: EventCancelDerivativeOrderProtoMsg): EventCancelDerivativeOrder;
    toProto(message: EventCancelDerivativeOrder): Uint8Array;
    toProtoMsg(message: EventCancelDerivativeOrder): EventCancelDerivativeOrderProtoMsg;
};
export declare const EventFeeDiscountSchedule: {
    typeUrl: string;
    encode(message: EventFeeDiscountSchedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventFeeDiscountSchedule;
    fromPartial(object: Partial<EventFeeDiscountSchedule>): EventFeeDiscountSchedule;
    fromAmino(object: EventFeeDiscountScheduleAmino): EventFeeDiscountSchedule;
    toAmino(message: EventFeeDiscountSchedule): EventFeeDiscountScheduleAmino;
    fromAminoMsg(object: EventFeeDiscountScheduleAminoMsg): EventFeeDiscountSchedule;
    fromProtoMsg(message: EventFeeDiscountScheduleProtoMsg): EventFeeDiscountSchedule;
    toProto(message: EventFeeDiscountSchedule): Uint8Array;
    toProtoMsg(message: EventFeeDiscountSchedule): EventFeeDiscountScheduleProtoMsg;
};
export declare const EventTradingRewardCampaignUpdate: {
    typeUrl: string;
    encode(message: EventTradingRewardCampaignUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTradingRewardCampaignUpdate;
    fromPartial(object: Partial<EventTradingRewardCampaignUpdate>): EventTradingRewardCampaignUpdate;
    fromAmino(object: EventTradingRewardCampaignUpdateAmino): EventTradingRewardCampaignUpdate;
    toAmino(message: EventTradingRewardCampaignUpdate): EventTradingRewardCampaignUpdateAmino;
    fromAminoMsg(object: EventTradingRewardCampaignUpdateAminoMsg): EventTradingRewardCampaignUpdate;
    fromProtoMsg(message: EventTradingRewardCampaignUpdateProtoMsg): EventTradingRewardCampaignUpdate;
    toProto(message: EventTradingRewardCampaignUpdate): Uint8Array;
    toProtoMsg(message: EventTradingRewardCampaignUpdate): EventTradingRewardCampaignUpdateProtoMsg;
};
export declare const EventTradingRewardDistribution: {
    typeUrl: string;
    encode(message: EventTradingRewardDistribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTradingRewardDistribution;
    fromPartial(object: Partial<EventTradingRewardDistribution>): EventTradingRewardDistribution;
    fromAmino(object: EventTradingRewardDistributionAmino): EventTradingRewardDistribution;
    toAmino(message: EventTradingRewardDistribution): EventTradingRewardDistributionAmino;
    fromAminoMsg(object: EventTradingRewardDistributionAminoMsg): EventTradingRewardDistribution;
    fromProtoMsg(message: EventTradingRewardDistributionProtoMsg): EventTradingRewardDistribution;
    toProto(message: EventTradingRewardDistribution): Uint8Array;
    toProtoMsg(message: EventTradingRewardDistribution): EventTradingRewardDistributionProtoMsg;
};
export declare const EventNewConditionalDerivativeOrder: {
    typeUrl: string;
    encode(message: EventNewConditionalDerivativeOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventNewConditionalDerivativeOrder;
    fromPartial(object: Partial<EventNewConditionalDerivativeOrder>): EventNewConditionalDerivativeOrder;
    fromAmino(object: EventNewConditionalDerivativeOrderAmino): EventNewConditionalDerivativeOrder;
    toAmino(message: EventNewConditionalDerivativeOrder): EventNewConditionalDerivativeOrderAmino;
    fromAminoMsg(object: EventNewConditionalDerivativeOrderAminoMsg): EventNewConditionalDerivativeOrder;
    fromProtoMsg(message: EventNewConditionalDerivativeOrderProtoMsg): EventNewConditionalDerivativeOrder;
    toProto(message: EventNewConditionalDerivativeOrder): Uint8Array;
    toProtoMsg(message: EventNewConditionalDerivativeOrder): EventNewConditionalDerivativeOrderProtoMsg;
};
export declare const EventCancelConditionalDerivativeOrder: {
    typeUrl: string;
    encode(message: EventCancelConditionalDerivativeOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCancelConditionalDerivativeOrder;
    fromPartial(object: Partial<EventCancelConditionalDerivativeOrder>): EventCancelConditionalDerivativeOrder;
    fromAmino(object: EventCancelConditionalDerivativeOrderAmino): EventCancelConditionalDerivativeOrder;
    toAmino(message: EventCancelConditionalDerivativeOrder): EventCancelConditionalDerivativeOrderAmino;
    fromAminoMsg(object: EventCancelConditionalDerivativeOrderAminoMsg): EventCancelConditionalDerivativeOrder;
    fromProtoMsg(message: EventCancelConditionalDerivativeOrderProtoMsg): EventCancelConditionalDerivativeOrder;
    toProto(message: EventCancelConditionalDerivativeOrder): Uint8Array;
    toProtoMsg(message: EventCancelConditionalDerivativeOrder): EventCancelConditionalDerivativeOrderProtoMsg;
};
export declare const EventConditionalDerivativeOrderTrigger: {
    typeUrl: string;
    encode(message: EventConditionalDerivativeOrderTrigger, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventConditionalDerivativeOrderTrigger;
    fromPartial(object: Partial<EventConditionalDerivativeOrderTrigger>): EventConditionalDerivativeOrderTrigger;
    fromAmino(object: EventConditionalDerivativeOrderTriggerAmino): EventConditionalDerivativeOrderTrigger;
    toAmino(message: EventConditionalDerivativeOrderTrigger): EventConditionalDerivativeOrderTriggerAmino;
    fromAminoMsg(object: EventConditionalDerivativeOrderTriggerAminoMsg): EventConditionalDerivativeOrderTrigger;
    fromProtoMsg(message: EventConditionalDerivativeOrderTriggerProtoMsg): EventConditionalDerivativeOrderTrigger;
    toProto(message: EventConditionalDerivativeOrderTrigger): Uint8Array;
    toProtoMsg(message: EventConditionalDerivativeOrderTrigger): EventConditionalDerivativeOrderTriggerProtoMsg;
};
export declare const EventOrderFail: {
    typeUrl: string;
    encode(message: EventOrderFail, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOrderFail;
    fromPartial(object: Partial<EventOrderFail>): EventOrderFail;
    fromAmino(object: EventOrderFailAmino): EventOrderFail;
    toAmino(message: EventOrderFail): EventOrderFailAmino;
    fromAminoMsg(object: EventOrderFailAminoMsg): EventOrderFail;
    fromProtoMsg(message: EventOrderFailProtoMsg): EventOrderFail;
    toProto(message: EventOrderFail): Uint8Array;
    toProtoMsg(message: EventOrderFail): EventOrderFailProtoMsg;
};
export declare const EventAtomicMarketOrderFeeMultipliersUpdated: {
    typeUrl: string;
    encode(message: EventAtomicMarketOrderFeeMultipliersUpdated, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAtomicMarketOrderFeeMultipliersUpdated;
    fromPartial(object: Partial<EventAtomicMarketOrderFeeMultipliersUpdated>): EventAtomicMarketOrderFeeMultipliersUpdated;
    fromAmino(object: EventAtomicMarketOrderFeeMultipliersUpdatedAmino): EventAtomicMarketOrderFeeMultipliersUpdated;
    toAmino(message: EventAtomicMarketOrderFeeMultipliersUpdated): EventAtomicMarketOrderFeeMultipliersUpdatedAmino;
    fromAminoMsg(object: EventAtomicMarketOrderFeeMultipliersUpdatedAminoMsg): EventAtomicMarketOrderFeeMultipliersUpdated;
    fromProtoMsg(message: EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg): EventAtomicMarketOrderFeeMultipliersUpdated;
    toProto(message: EventAtomicMarketOrderFeeMultipliersUpdated): Uint8Array;
    toProtoMsg(message: EventAtomicMarketOrderFeeMultipliersUpdated): EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg;
};
export declare const EventOrderbookUpdate: {
    typeUrl: string;
    encode(message: EventOrderbookUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOrderbookUpdate;
    fromPartial(object: Partial<EventOrderbookUpdate>): EventOrderbookUpdate;
    fromAmino(object: EventOrderbookUpdateAmino): EventOrderbookUpdate;
    toAmino(message: EventOrderbookUpdate): EventOrderbookUpdateAmino;
    fromAminoMsg(object: EventOrderbookUpdateAminoMsg): EventOrderbookUpdate;
    fromProtoMsg(message: EventOrderbookUpdateProtoMsg): EventOrderbookUpdate;
    toProto(message: EventOrderbookUpdate): Uint8Array;
    toProtoMsg(message: EventOrderbookUpdate): EventOrderbookUpdateProtoMsg;
};
export declare const OrderbookUpdate: {
    typeUrl: string;
    encode(message: OrderbookUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OrderbookUpdate;
    fromPartial(object: Partial<OrderbookUpdate>): OrderbookUpdate;
    fromAmino(object: OrderbookUpdateAmino): OrderbookUpdate;
    toAmino(message: OrderbookUpdate): OrderbookUpdateAmino;
    fromAminoMsg(object: OrderbookUpdateAminoMsg): OrderbookUpdate;
    fromProtoMsg(message: OrderbookUpdateProtoMsg): OrderbookUpdate;
    toProto(message: OrderbookUpdate): Uint8Array;
    toProtoMsg(message: OrderbookUpdate): OrderbookUpdateProtoMsg;
};
export declare const Orderbook: {
    typeUrl: string;
    encode(message: Orderbook, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Orderbook;
    fromPartial(object: Partial<Orderbook>): Orderbook;
    fromAmino(object: OrderbookAmino): Orderbook;
    toAmino(message: Orderbook): OrderbookAmino;
    fromAminoMsg(object: OrderbookAminoMsg): Orderbook;
    fromProtoMsg(message: OrderbookProtoMsg): Orderbook;
    toProto(message: Orderbook): Uint8Array;
    toProtoMsg(message: Orderbook): OrderbookProtoMsg;
};
