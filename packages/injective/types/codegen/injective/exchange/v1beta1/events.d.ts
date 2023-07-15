import { ExecutionType, TradeLog, TradeLogSDKType, DerivativeTradeLog, DerivativeTradeLogSDKType, SubaccountPosition, SubaccountPositionSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, DepositUpdate, DepositUpdateSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, AccountRewards, AccountRewardsSDKType, DerivativeOrder, DerivativeOrderSDKType, MarketFeeMultiplier, MarketFeeMultiplierSDKType, Level, LevelSDKType } from "./exchange";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventBatchSpotExecution {
    marketId: string;
    isBuy: boolean;
    executionType: ExecutionType;
    trades: TradeLog[];
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
    cumulativeFunding: string;
    executionType: ExecutionType;
    trades: DerivativeTradeLog[];
}
export interface EventBatchDerivativeExecutionSDKType {
    market_id: string;
    is_buy: boolean;
    is_liquidation: boolean;
    cumulative_funding: string;
    executionType: ExecutionType;
    trades: DerivativeTradeLogSDKType[];
}
export interface EventLostFundsFromLiquidation {
    marketId: string;
    subaccountId: Uint8Array;
    lostFundsFromAvailableDuringPayout: string;
    lostFundsFromOrderCancels: string;
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
export interface EventAllPositionsHaircutSDKType {
    market_id: string;
    settle_price: string;
    missing_funds_rate: string;
}
export interface EventBinaryOptionsMarketUpdate {
    market?: BinaryOptionsMarket;
}
export interface EventBinaryOptionsMarketUpdateSDKType {
    market?: BinaryOptionsMarketSDKType;
}
export interface EventNewSpotOrders {
    marketId: string;
    buyOrders: SpotLimitOrder[];
    sellOrders: SpotLimitOrder[];
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
export interface EventNewDerivativeOrdersSDKType {
    market_id: string;
    buy_orders: DerivativeLimitOrderSDKType[];
    sell_orders: DerivativeLimitOrderSDKType[];
}
export interface EventCancelSpotOrder {
    marketId: string;
    order?: SpotLimitOrder;
}
export interface EventCancelSpotOrderSDKType {
    market_id: string;
    order?: SpotLimitOrderSDKType;
}
export interface EventSpotMarketUpdate {
    market?: SpotMarket;
}
export interface EventSpotMarketUpdateSDKType {
    market?: SpotMarketSDKType;
}
export interface EventPerpetualMarketUpdate {
    market?: DerivativeMarket;
    perpetualMarketInfo?: PerpetualMarketInfo;
    funding?: PerpetualMarketFunding;
}
export interface EventPerpetualMarketUpdateSDKType {
    market?: DerivativeMarketSDKType;
    perpetual_market_info?: PerpetualMarketInfoSDKType;
    funding?: PerpetualMarketFundingSDKType;
}
export interface EventExpiryFuturesMarketUpdate {
    market?: DerivativeMarket;
    expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo;
}
export interface EventExpiryFuturesMarketUpdateSDKType {
    market?: DerivativeMarketSDKType;
    expiry_futures_market_info?: ExpiryFuturesMarketInfoSDKType;
}
export interface EventPerpetualMarketFundingUpdate {
    marketId: string;
    funding?: PerpetualMarketFunding;
    isHourlyFunding: boolean;
    fundingRate: string;
    markPrice: string;
}
export interface EventPerpetualMarketFundingUpdateSDKType {
    market_id: string;
    funding?: PerpetualMarketFundingSDKType;
    is_hourly_funding: boolean;
    funding_rate: string;
    mark_price: string;
}
export interface EventSubaccountDeposit {
    srcAddress: string;
    subaccountId: Uint8Array;
    amount?: Coin;
}
export interface EventSubaccountDepositSDKType {
    src_address: string;
    subaccount_id: Uint8Array;
    amount?: CoinSDKType;
}
export interface EventSubaccountWithdraw {
    subaccountId: Uint8Array;
    dstAddress: string;
    amount?: Coin;
}
export interface EventSubaccountWithdrawSDKType {
    subaccount_id: Uint8Array;
    dst_address: string;
    amount?: CoinSDKType;
}
export interface EventSubaccountBalanceTransfer {
    srcSubaccountId: string;
    dstSubaccountId: string;
    amount?: Coin;
}
export interface EventSubaccountBalanceTransferSDKType {
    src_subaccount_id: string;
    dst_subaccount_id: string;
    amount?: CoinSDKType;
}
export interface EventBatchDepositUpdate {
    depositUpdates: DepositUpdate[];
}
export interface EventBatchDepositUpdateSDKType {
    deposit_updates: DepositUpdateSDKType[];
}
export interface DerivativeMarketOrderCancel {
    marketOrder?: DerivativeMarketOrder;
    cancelQuantity: string;
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
export interface EventCancelDerivativeOrderSDKType {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderSDKType;
    market_order_cancel?: DerivativeMarketOrderCancelSDKType;
}
export interface EventFeeDiscountSchedule {
    schedule?: FeeDiscountSchedule;
}
export interface EventFeeDiscountScheduleSDKType {
    schedule?: FeeDiscountScheduleSDKType;
}
export interface EventTradingRewardCampaignUpdate {
    campaignInfo?: TradingRewardCampaignInfo;
    campaignRewardPools: CampaignRewardPool[];
}
export interface EventTradingRewardCampaignUpdateSDKType {
    campaign_info?: TradingRewardCampaignInfoSDKType;
    campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface EventTradingRewardDistribution {
    accountRewards: AccountRewards[];
}
export interface EventTradingRewardDistributionSDKType {
    account_rewards: AccountRewardsSDKType[];
}
export interface EventNewConditionalDerivativeOrder {
    marketId: string;
    order?: DerivativeOrder;
    hash: Uint8Array;
    isMarket: boolean;
}
export interface EventNewConditionalDerivativeOrderSDKType {
    market_id: string;
    order?: DerivativeOrderSDKType;
    hash: Uint8Array;
    is_market: boolean;
}
export interface EventCancelConditionalDerivativeOrder {
    marketId: string;
    isLimitCancel: boolean;
    limitOrder?: DerivativeLimitOrder;
    marketOrder?: DerivativeMarketOrder;
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
export interface EventOrderFailSDKType {
    account: Uint8Array;
    hashes: Uint8Array[];
    flags: number[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdated {
    marketFeeMultipliers: MarketFeeMultiplier[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedSDKType {
    market_fee_multipliers: MarketFeeMultiplierSDKType[];
}
export interface EventOrderbookUpdate {
    spotUpdates: OrderbookUpdate[];
    derivativeUpdates: OrderbookUpdate[];
}
export interface EventOrderbookUpdateSDKType {
    spot_updates: OrderbookUpdateSDKType[];
    derivative_updates: OrderbookUpdateSDKType[];
}
export interface OrderbookUpdate {
    seq: Long;
    orderbook?: Orderbook;
}
export interface OrderbookUpdateSDKType {
    seq: Long;
    orderbook?: OrderbookSDKType;
}
export interface Orderbook {
    marketId: Uint8Array;
    buyLevels: Level[];
    sellLevels: Level[];
}
export interface OrderbookSDKType {
    market_id: Uint8Array;
    buy_levels: LevelSDKType[];
    sell_levels: LevelSDKType[];
}
export declare const EventBatchSpotExecution: {
    encode(message: EventBatchSpotExecution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchSpotExecution;
    fromPartial(object: Partial<EventBatchSpotExecution>): EventBatchSpotExecution;
};
export declare const EventBatchDerivativeExecution: {
    encode(message: EventBatchDerivativeExecution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchDerivativeExecution;
    fromPartial(object: Partial<EventBatchDerivativeExecution>): EventBatchDerivativeExecution;
};
export declare const EventLostFundsFromLiquidation: {
    encode(message: EventLostFundsFromLiquidation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventLostFundsFromLiquidation;
    fromPartial(object: Partial<EventLostFundsFromLiquidation>): EventLostFundsFromLiquidation;
};
export declare const EventBatchDerivativePosition: {
    encode(message: EventBatchDerivativePosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchDerivativePosition;
    fromPartial(object: Partial<EventBatchDerivativePosition>): EventBatchDerivativePosition;
};
export declare const EventDerivativeMarketPaused: {
    encode(message: EventDerivativeMarketPaused, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDerivativeMarketPaused;
    fromPartial(object: Partial<EventDerivativeMarketPaused>): EventDerivativeMarketPaused;
};
export declare const EventMarketBeyondBankruptcy: {
    encode(message: EventMarketBeyondBankruptcy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMarketBeyondBankruptcy;
    fromPartial(object: Partial<EventMarketBeyondBankruptcy>): EventMarketBeyondBankruptcy;
};
export declare const EventAllPositionsHaircut: {
    encode(message: EventAllPositionsHaircut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventAllPositionsHaircut;
    fromPartial(object: Partial<EventAllPositionsHaircut>): EventAllPositionsHaircut;
};
export declare const EventBinaryOptionsMarketUpdate: {
    encode(message: EventBinaryOptionsMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBinaryOptionsMarketUpdate;
    fromPartial(object: Partial<EventBinaryOptionsMarketUpdate>): EventBinaryOptionsMarketUpdate;
};
export declare const EventNewSpotOrders: {
    encode(message: EventNewSpotOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventNewSpotOrders;
    fromPartial(object: Partial<EventNewSpotOrders>): EventNewSpotOrders;
};
export declare const EventNewDerivativeOrders: {
    encode(message: EventNewDerivativeOrders, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventNewDerivativeOrders;
    fromPartial(object: Partial<EventNewDerivativeOrders>): EventNewDerivativeOrders;
};
export declare const EventCancelSpotOrder: {
    encode(message: EventCancelSpotOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCancelSpotOrder;
    fromPartial(object: Partial<EventCancelSpotOrder>): EventCancelSpotOrder;
};
export declare const EventSpotMarketUpdate: {
    encode(message: EventSpotMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSpotMarketUpdate;
    fromPartial(object: Partial<EventSpotMarketUpdate>): EventSpotMarketUpdate;
};
export declare const EventPerpetualMarketUpdate: {
    encode(message: EventPerpetualMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPerpetualMarketUpdate;
    fromPartial(object: Partial<EventPerpetualMarketUpdate>): EventPerpetualMarketUpdate;
};
export declare const EventExpiryFuturesMarketUpdate: {
    encode(message: EventExpiryFuturesMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventExpiryFuturesMarketUpdate;
    fromPartial(object: Partial<EventExpiryFuturesMarketUpdate>): EventExpiryFuturesMarketUpdate;
};
export declare const EventPerpetualMarketFundingUpdate: {
    encode(message: EventPerpetualMarketFundingUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPerpetualMarketFundingUpdate;
    fromPartial(object: Partial<EventPerpetualMarketFundingUpdate>): EventPerpetualMarketFundingUpdate;
};
export declare const EventSubaccountDeposit: {
    encode(message: EventSubaccountDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSubaccountDeposit;
    fromPartial(object: Partial<EventSubaccountDeposit>): EventSubaccountDeposit;
};
export declare const EventSubaccountWithdraw: {
    encode(message: EventSubaccountWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSubaccountWithdraw;
    fromPartial(object: Partial<EventSubaccountWithdraw>): EventSubaccountWithdraw;
};
export declare const EventSubaccountBalanceTransfer: {
    encode(message: EventSubaccountBalanceTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSubaccountBalanceTransfer;
    fromPartial(object: Partial<EventSubaccountBalanceTransfer>): EventSubaccountBalanceTransfer;
};
export declare const EventBatchDepositUpdate: {
    encode(message: EventBatchDepositUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchDepositUpdate;
    fromPartial(object: Partial<EventBatchDepositUpdate>): EventBatchDepositUpdate;
};
export declare const DerivativeMarketOrderCancel: {
    encode(message: DerivativeMarketOrderCancel, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DerivativeMarketOrderCancel;
    fromPartial(object: Partial<DerivativeMarketOrderCancel>): DerivativeMarketOrderCancel;
};
export declare const EventCancelDerivativeOrder: {
    encode(message: EventCancelDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCancelDerivativeOrder;
    fromPartial(object: Partial<EventCancelDerivativeOrder>): EventCancelDerivativeOrder;
};
export declare const EventFeeDiscountSchedule: {
    encode(message: EventFeeDiscountSchedule, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventFeeDiscountSchedule;
    fromPartial(object: Partial<EventFeeDiscountSchedule>): EventFeeDiscountSchedule;
};
export declare const EventTradingRewardCampaignUpdate: {
    encode(message: EventTradingRewardCampaignUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventTradingRewardCampaignUpdate;
    fromPartial(object: Partial<EventTradingRewardCampaignUpdate>): EventTradingRewardCampaignUpdate;
};
export declare const EventTradingRewardDistribution: {
    encode(message: EventTradingRewardDistribution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventTradingRewardDistribution;
    fromPartial(object: Partial<EventTradingRewardDistribution>): EventTradingRewardDistribution;
};
export declare const EventNewConditionalDerivativeOrder: {
    encode(message: EventNewConditionalDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventNewConditionalDerivativeOrder;
    fromPartial(object: Partial<EventNewConditionalDerivativeOrder>): EventNewConditionalDerivativeOrder;
};
export declare const EventCancelConditionalDerivativeOrder: {
    encode(message: EventCancelConditionalDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCancelConditionalDerivativeOrder;
    fromPartial(object: Partial<EventCancelConditionalDerivativeOrder>): EventCancelConditionalDerivativeOrder;
};
export declare const EventConditionalDerivativeOrderTrigger: {
    encode(message: EventConditionalDerivativeOrderTrigger, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventConditionalDerivativeOrderTrigger;
    fromPartial(object: Partial<EventConditionalDerivativeOrderTrigger>): EventConditionalDerivativeOrderTrigger;
};
export declare const EventOrderFail: {
    encode(message: EventOrderFail, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOrderFail;
    fromPartial(object: Partial<EventOrderFail>): EventOrderFail;
};
export declare const EventAtomicMarketOrderFeeMultipliersUpdated: {
    encode(message: EventAtomicMarketOrderFeeMultipliersUpdated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventAtomicMarketOrderFeeMultipliersUpdated;
    fromPartial(object: Partial<EventAtomicMarketOrderFeeMultipliersUpdated>): EventAtomicMarketOrderFeeMultipliersUpdated;
};
export declare const EventOrderbookUpdate: {
    encode(message: EventOrderbookUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOrderbookUpdate;
    fromPartial(object: Partial<EventOrderbookUpdate>): EventOrderbookUpdate;
};
export declare const OrderbookUpdate: {
    encode(message: OrderbookUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OrderbookUpdate;
    fromPartial(object: Partial<OrderbookUpdate>): OrderbookUpdate;
};
export declare const Orderbook: {
    encode(message: Orderbook, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Orderbook;
    fromPartial(object: Partial<Orderbook>): Orderbook;
};
