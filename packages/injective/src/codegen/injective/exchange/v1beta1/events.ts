import { ExecutionType, TradeLog, TradeLogSDKType, DerivativeTradeLog, DerivativeTradeLogSDKType, SubaccountPosition, SubaccountPositionSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, DepositUpdate, DepositUpdateSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, AccountRewards, AccountRewardsSDKType, DerivativeOrder, DerivativeOrderSDKType, MarketFeeMultiplier, MarketFeeMultiplierSDKType, Level, LevelSDKType, executionTypeFromJSON } from "./exchange";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
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
function createBaseEventBatchSpotExecution(): EventBatchSpotExecution {
  return {
    marketId: "",
    isBuy: false,
    executionType: 0,
    trades: []
  };
}
export const EventBatchSpotExecution = {
  encode(message: EventBatchSpotExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.executionType !== 0) {
      writer.uint32(24).int32(message.executionType);
    }
    for (const v of message.trades) {
      TradeLog.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBatchSpotExecution {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      executionType: isSet(object.executionType) ? executionTypeFromJSON(object.executionType) : 0,
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => TradeLog.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventBatchSpotExecution>): EventBatchSpotExecution {
    const message = createBaseEventBatchSpotExecution();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.executionType = object.executionType ?? 0;
    message.trades = object.trades?.map(e => TradeLog.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventBatchDerivativeExecution(): EventBatchDerivativeExecution {
  return {
    marketId: "",
    isBuy: false,
    isLiquidation: false,
    cumulativeFunding: undefined,
    executionType: 0,
    trades: []
  };
}
export const EventBatchDerivativeExecution = {
  encode(message: EventBatchDerivativeExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.isLiquidation === true) {
      writer.uint32(24).bool(message.isLiquidation);
    }
    if (message.cumulativeFunding !== undefined) {
      writer.uint32(34).string(message.cumulativeFunding);
    }
    if (message.executionType !== 0) {
      writer.uint32(40).int32(message.executionType);
    }
    for (const v of message.trades) {
      DerivativeTradeLog.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBatchDerivativeExecution {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      isLiquidation: isSet(object.isLiquidation) ? Boolean(object.isLiquidation) : false,
      cumulativeFunding: isSet(object.cumulativeFunding) ? String(object.cumulativeFunding) : undefined,
      executionType: isSet(object.executionType) ? executionTypeFromJSON(object.executionType) : 0,
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => DerivativeTradeLog.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventBatchDerivativeExecution>): EventBatchDerivativeExecution {
    const message = createBaseEventBatchDerivativeExecution();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLiquidation = object.isLiquidation ?? false;
    message.cumulativeFunding = object.cumulativeFunding ?? undefined;
    message.executionType = object.executionType ?? 0;
    message.trades = object.trades?.map(e => DerivativeTradeLog.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventLostFundsFromLiquidation(): EventLostFundsFromLiquidation {
  return {
    marketId: "",
    subaccountId: new Uint8Array(),
    lostFundsFromAvailableDuringPayout: "",
    lostFundsFromOrderCancels: ""
  };
}
export const EventLostFundsFromLiquidation = {
  encode(message: EventLostFundsFromLiquidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    if (message.lostFundsFromAvailableDuringPayout !== "") {
      writer.uint32(26).string(message.lostFundsFromAvailableDuringPayout);
    }
    if (message.lostFundsFromOrderCancels !== "") {
      writer.uint32(34).string(message.lostFundsFromOrderCancels);
    }
    return writer;
  },
  fromJSON(object: any): EventLostFundsFromLiquidation {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
      lostFundsFromAvailableDuringPayout: isSet(object.lostFundsFromAvailableDuringPayout) ? String(object.lostFundsFromAvailableDuringPayout) : "",
      lostFundsFromOrderCancels: isSet(object.lostFundsFromOrderCancels) ? String(object.lostFundsFromOrderCancels) : ""
    };
  },
  fromPartial(object: Partial<EventLostFundsFromLiquidation>): EventLostFundsFromLiquidation {
    const message = createBaseEventLostFundsFromLiquidation();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.lostFundsFromAvailableDuringPayout = object.lostFundsFromAvailableDuringPayout ?? "";
    message.lostFundsFromOrderCancels = object.lostFundsFromOrderCancels ?? "";
    return message;
  }
};
function createBaseEventBatchDerivativePosition(): EventBatchDerivativePosition {
  return {
    marketId: "",
    positions: []
  };
}
export const EventBatchDerivativePosition = {
  encode(message: EventBatchDerivativePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.positions) {
      SubaccountPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBatchDerivativePosition {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => SubaccountPosition.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventBatchDerivativePosition>): EventBatchDerivativePosition {
    const message = createBaseEventBatchDerivativePosition();
    message.marketId = object.marketId ?? "";
    message.positions = object.positions?.map(e => SubaccountPosition.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventDerivativeMarketPaused(): EventDerivativeMarketPaused {
  return {
    marketId: "",
    settlePrice: "",
    totalMissingFunds: "",
    missingFundsRate: ""
  };
}
export const EventDerivativeMarketPaused = {
  encode(message: EventDerivativeMarketPaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.totalMissingFunds !== "") {
      writer.uint32(26).string(message.totalMissingFunds);
    }
    if (message.missingFundsRate !== "") {
      writer.uint32(34).string(message.missingFundsRate);
    }
    return writer;
  },
  fromJSON(object: any): EventDerivativeMarketPaused {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlePrice: isSet(object.settlePrice) ? String(object.settlePrice) : "",
      totalMissingFunds: isSet(object.totalMissingFunds) ? String(object.totalMissingFunds) : "",
      missingFundsRate: isSet(object.missingFundsRate) ? String(object.missingFundsRate) : ""
    };
  },
  fromPartial(object: Partial<EventDerivativeMarketPaused>): EventDerivativeMarketPaused {
    const message = createBaseEventDerivativeMarketPaused();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.totalMissingFunds = object.totalMissingFunds ?? "";
    message.missingFundsRate = object.missingFundsRate ?? "";
    return message;
  }
};
function createBaseEventMarketBeyondBankruptcy(): EventMarketBeyondBankruptcy {
  return {
    marketId: "",
    settlePrice: "",
    missingMarketFunds: ""
  };
}
export const EventMarketBeyondBankruptcy = {
  encode(message: EventMarketBeyondBankruptcy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.missingMarketFunds !== "") {
      writer.uint32(26).string(message.missingMarketFunds);
    }
    return writer;
  },
  fromJSON(object: any): EventMarketBeyondBankruptcy {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlePrice: isSet(object.settlePrice) ? String(object.settlePrice) : "",
      missingMarketFunds: isSet(object.missingMarketFunds) ? String(object.missingMarketFunds) : ""
    };
  },
  fromPartial(object: Partial<EventMarketBeyondBankruptcy>): EventMarketBeyondBankruptcy {
    const message = createBaseEventMarketBeyondBankruptcy();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.missingMarketFunds = object.missingMarketFunds ?? "";
    return message;
  }
};
function createBaseEventAllPositionsHaircut(): EventAllPositionsHaircut {
  return {
    marketId: "",
    settlePrice: "",
    missingFundsRate: ""
  };
}
export const EventAllPositionsHaircut = {
  encode(message: EventAllPositionsHaircut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.missingFundsRate !== "") {
      writer.uint32(26).string(message.missingFundsRate);
    }
    return writer;
  },
  fromJSON(object: any): EventAllPositionsHaircut {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlePrice: isSet(object.settlePrice) ? String(object.settlePrice) : "",
      missingFundsRate: isSet(object.missingFundsRate) ? String(object.missingFundsRate) : ""
    };
  },
  fromPartial(object: Partial<EventAllPositionsHaircut>): EventAllPositionsHaircut {
    const message = createBaseEventAllPositionsHaircut();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.missingFundsRate = object.missingFundsRate ?? "";
    return message;
  }
};
function createBaseEventBinaryOptionsMarketUpdate(): EventBinaryOptionsMarketUpdate {
  return {
    market: undefined
  };
}
export const EventBinaryOptionsMarketUpdate = {
  encode(message: EventBinaryOptionsMarketUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      BinaryOptionsMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBinaryOptionsMarketUpdate {
    return {
      market: isSet(object.market) ? BinaryOptionsMarket.fromJSON(object.market) : undefined
    };
  },
  fromPartial(object: Partial<EventBinaryOptionsMarketUpdate>): EventBinaryOptionsMarketUpdate {
    const message = createBaseEventBinaryOptionsMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? BinaryOptionsMarket.fromPartial(object.market) : undefined;
    return message;
  }
};
function createBaseEventNewSpotOrders(): EventNewSpotOrders {
  return {
    marketId: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const EventNewSpotOrders = {
  encode(message: EventNewSpotOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buyOrders) {
      SpotLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      SpotLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventNewSpotOrders {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => SpotLimitOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SpotLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventNewSpotOrders>): EventNewSpotOrders {
    const message = createBaseEventNewSpotOrders();
    message.marketId = object.marketId ?? "";
    message.buyOrders = object.buyOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventNewDerivativeOrders(): EventNewDerivativeOrders {
  return {
    marketId: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const EventNewDerivativeOrders = {
  encode(message: EventNewDerivativeOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buyOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventNewDerivativeOrders {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => DerivativeLimitOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => DerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventNewDerivativeOrders>): EventNewDerivativeOrders {
    const message = createBaseEventNewDerivativeOrders();
    message.marketId = object.marketId ?? "";
    message.buyOrders = object.buyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventCancelSpotOrder(): EventCancelSpotOrder {
  return {
    marketId: "",
    order: undefined
  };
}
export const EventCancelSpotOrder = {
  encode(message: EventCancelSpotOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      SpotLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventCancelSpotOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      order: isSet(object.order) ? SpotLimitOrder.fromJSON(object.order) : undefined
    };
  },
  fromPartial(object: Partial<EventCancelSpotOrder>): EventCancelSpotOrder {
    const message = createBaseEventCancelSpotOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotLimitOrder.fromPartial(object.order) : undefined;
    return message;
  }
};
function createBaseEventSpotMarketUpdate(): EventSpotMarketUpdate {
  return {
    market: undefined
  };
}
export const EventSpotMarketUpdate = {
  encode(message: EventSpotMarketUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSpotMarketUpdate {
    return {
      market: isSet(object.market) ? SpotMarket.fromJSON(object.market) : undefined
    };
  },
  fromPartial(object: Partial<EventSpotMarketUpdate>): EventSpotMarketUpdate {
    const message = createBaseEventSpotMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  }
};
function createBaseEventPerpetualMarketUpdate(): EventPerpetualMarketUpdate {
  return {
    market: undefined,
    perpetualMarketInfo: undefined,
    funding: undefined
  };
}
export const EventPerpetualMarketUpdate = {
  encode(message: EventPerpetualMarketUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualMarketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.perpetualMarketInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventPerpetualMarketUpdate {
    return {
      market: isSet(object.market) ? DerivativeMarket.fromJSON(object.market) : undefined,
      perpetualMarketInfo: isSet(object.perpetualMarketInfo) ? PerpetualMarketInfo.fromJSON(object.perpetualMarketInfo) : undefined,
      funding: isSet(object.funding) ? PerpetualMarketFunding.fromJSON(object.funding) : undefined
    };
  },
  fromPartial(object: Partial<EventPerpetualMarketUpdate>): EventPerpetualMarketUpdate {
    const message = createBaseEventPerpetualMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualMarketInfo = object.perpetualMarketInfo !== undefined && object.perpetualMarketInfo !== null ? PerpetualMarketInfo.fromPartial(object.perpetualMarketInfo) : undefined;
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    return message;
  }
};
function createBaseEventExpiryFuturesMarketUpdate(): EventExpiryFuturesMarketUpdate {
  return {
    market: undefined,
    expiryFuturesMarketInfo: undefined
  };
}
export const EventExpiryFuturesMarketUpdate = {
  encode(message: EventExpiryFuturesMarketUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiryFuturesMarketInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.expiryFuturesMarketInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventExpiryFuturesMarketUpdate {
    return {
      market: isSet(object.market) ? DerivativeMarket.fromJSON(object.market) : undefined,
      expiryFuturesMarketInfo: isSet(object.expiryFuturesMarketInfo) ? ExpiryFuturesMarketInfo.fromJSON(object.expiryFuturesMarketInfo) : undefined
    };
  },
  fromPartial(object: Partial<EventExpiryFuturesMarketUpdate>): EventExpiryFuturesMarketUpdate {
    const message = createBaseEventExpiryFuturesMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.expiryFuturesMarketInfo = object.expiryFuturesMarketInfo !== undefined && object.expiryFuturesMarketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.expiryFuturesMarketInfo) : undefined;
    return message;
  }
};
function createBaseEventPerpetualMarketFundingUpdate(): EventPerpetualMarketFundingUpdate {
  return {
    marketId: "",
    funding: undefined,
    isHourlyFunding: false,
    fundingRate: undefined,
    markPrice: undefined
  };
}
export const EventPerpetualMarketFundingUpdate = {
  encode(message: EventPerpetualMarketFundingUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }
    if (message.isHourlyFunding === true) {
      writer.uint32(24).bool(message.isHourlyFunding);
    }
    if (message.fundingRate !== undefined) {
      writer.uint32(34).string(message.fundingRate);
    }
    if (message.markPrice !== undefined) {
      writer.uint32(42).string(message.markPrice);
    }
    return writer;
  },
  fromJSON(object: any): EventPerpetualMarketFundingUpdate {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      funding: isSet(object.funding) ? PerpetualMarketFunding.fromJSON(object.funding) : undefined,
      isHourlyFunding: isSet(object.isHourlyFunding) ? Boolean(object.isHourlyFunding) : false,
      fundingRate: isSet(object.fundingRate) ? String(object.fundingRate) : undefined,
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : undefined
    };
  },
  fromPartial(object: Partial<EventPerpetualMarketFundingUpdate>): EventPerpetualMarketFundingUpdate {
    const message = createBaseEventPerpetualMarketFundingUpdate();
    message.marketId = object.marketId ?? "";
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    message.isHourlyFunding = object.isHourlyFunding ?? false;
    message.fundingRate = object.fundingRate ?? undefined;
    message.markPrice = object.markPrice ?? undefined;
    return message;
  }
};
function createBaseEventSubaccountDeposit(): EventSubaccountDeposit {
  return {
    srcAddress: "",
    subaccountId: new Uint8Array(),
    amount: undefined
  };
}
export const EventSubaccountDeposit = {
  encode(message: EventSubaccountDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcAddress !== "") {
      writer.uint32(10).string(message.srcAddress);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSubaccountDeposit {
    return {
      srcAddress: isSet(object.srcAddress) ? String(object.srcAddress) : "",
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<EventSubaccountDeposit>): EventSubaccountDeposit {
    const message = createBaseEventSubaccountDeposit();
    message.srcAddress = object.srcAddress ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventSubaccountWithdraw(): EventSubaccountWithdraw {
  return {
    subaccountId: new Uint8Array(),
    dstAddress: "",
    amount: undefined
  };
}
export const EventSubaccountWithdraw = {
  encode(message: EventSubaccountWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.dstAddress !== "") {
      writer.uint32(18).string(message.dstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSubaccountWithdraw {
    return {
      subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
      dstAddress: isSet(object.dstAddress) ? String(object.dstAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<EventSubaccountWithdraw>): EventSubaccountWithdraw {
    const message = createBaseEventSubaccountWithdraw();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.dstAddress = object.dstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventSubaccountBalanceTransfer(): EventSubaccountBalanceTransfer {
  return {
    srcSubaccountId: "",
    dstSubaccountId: "",
    amount: undefined
  };
}
export const EventSubaccountBalanceTransfer = {
  encode(message: EventSubaccountBalanceTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcSubaccountId !== "") {
      writer.uint32(10).string(message.srcSubaccountId);
    }
    if (message.dstSubaccountId !== "") {
      writer.uint32(18).string(message.dstSubaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSubaccountBalanceTransfer {
    return {
      srcSubaccountId: isSet(object.srcSubaccountId) ? String(object.srcSubaccountId) : "",
      dstSubaccountId: isSet(object.dstSubaccountId) ? String(object.dstSubaccountId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<EventSubaccountBalanceTransfer>): EventSubaccountBalanceTransfer {
    const message = createBaseEventSubaccountBalanceTransfer();
    message.srcSubaccountId = object.srcSubaccountId ?? "";
    message.dstSubaccountId = object.dstSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventBatchDepositUpdate(): EventBatchDepositUpdate {
  return {
    depositUpdates: []
  };
}
export const EventBatchDepositUpdate = {
  encode(message: EventBatchDepositUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.depositUpdates) {
      DepositUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBatchDepositUpdate {
    return {
      depositUpdates: Array.isArray(object?.depositUpdates) ? object.depositUpdates.map((e: any) => DepositUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventBatchDepositUpdate>): EventBatchDepositUpdate {
    const message = createBaseEventBatchDepositUpdate();
    message.depositUpdates = object.depositUpdates?.map(e => DepositUpdate.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDerivativeMarketOrderCancel(): DerivativeMarketOrderCancel {
  return {
    marketOrder: undefined,
    cancelQuantity: ""
  };
}
export const DerivativeMarketOrderCancel = {
  encode(message: DerivativeMarketOrderCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketOrder !== undefined) {
      DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.cancelQuantity !== "") {
      writer.uint32(18).string(message.cancelQuantity);
    }
    return writer;
  },
  fromJSON(object: any): DerivativeMarketOrderCancel {
    return {
      marketOrder: isSet(object.marketOrder) ? DerivativeMarketOrder.fromJSON(object.marketOrder) : undefined,
      cancelQuantity: isSet(object.cancelQuantity) ? String(object.cancelQuantity) : ""
    };
  },
  fromPartial(object: Partial<DerivativeMarketOrderCancel>): DerivativeMarketOrderCancel {
    const message = createBaseDerivativeMarketOrderCancel();
    message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
    message.cancelQuantity = object.cancelQuantity ?? "";
    return message;
  }
};
function createBaseEventCancelDerivativeOrder(): EventCancelDerivativeOrder {
  return {
    marketId: "",
    isLimitCancel: false,
    limitOrder: undefined,
    marketOrderCancel: undefined
  };
}
export const EventCancelDerivativeOrder = {
  encode(message: EventCancelDerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isLimitCancel === true) {
      writer.uint32(16).bool(message.isLimitCancel);
    }
    if (message.limitOrder !== undefined) {
      DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOrderCancel !== undefined) {
      DerivativeMarketOrderCancel.encode(message.marketOrderCancel, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventCancelDerivativeOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isLimitCancel: isSet(object.isLimitCancel) ? Boolean(object.isLimitCancel) : false,
      limitOrder: isSet(object.limitOrder) ? DerivativeLimitOrder.fromJSON(object.limitOrder) : undefined,
      marketOrderCancel: isSet(object.marketOrderCancel) ? DerivativeMarketOrderCancel.fromJSON(object.marketOrderCancel) : undefined
    };
  },
  fromPartial(object: Partial<EventCancelDerivativeOrder>): EventCancelDerivativeOrder {
    const message = createBaseEventCancelDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.isLimitCancel = object.isLimitCancel ?? false;
    message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
    message.marketOrderCancel = object.marketOrderCancel !== undefined && object.marketOrderCancel !== null ? DerivativeMarketOrderCancel.fromPartial(object.marketOrderCancel) : undefined;
    return message;
  }
};
function createBaseEventFeeDiscountSchedule(): EventFeeDiscountSchedule {
  return {
    schedule: undefined
  };
}
export const EventFeeDiscountSchedule = {
  encode(message: EventFeeDiscountSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      FeeDiscountSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventFeeDiscountSchedule {
    return {
      schedule: isSet(object.schedule) ? FeeDiscountSchedule.fromJSON(object.schedule) : undefined
    };
  },
  fromPartial(object: Partial<EventFeeDiscountSchedule>): EventFeeDiscountSchedule {
    const message = createBaseEventFeeDiscountSchedule();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
    return message;
  }
};
function createBaseEventTradingRewardCampaignUpdate(): EventTradingRewardCampaignUpdate {
  return {
    campaignInfo: undefined,
    campaignRewardPools: []
  };
}
export const EventTradingRewardCampaignUpdate = {
  encode(message: EventTradingRewardCampaignUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.campaignRewardPools) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventTradingRewardCampaignUpdate {
    return {
      campaignInfo: isSet(object.campaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
      campaignRewardPools: Array.isArray(object?.campaignRewardPools) ? object.campaignRewardPools.map((e: any) => CampaignRewardPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventTradingRewardCampaignUpdate>): EventTradingRewardCampaignUpdate {
    const message = createBaseEventTradingRewardCampaignUpdate();
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventTradingRewardDistribution(): EventTradingRewardDistribution {
  return {
    accountRewards: []
  };
}
export const EventTradingRewardDistribution = {
  encode(message: EventTradingRewardDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountRewards) {
      AccountRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventTradingRewardDistribution {
    return {
      accountRewards: Array.isArray(object?.accountRewards) ? object.accountRewards.map((e: any) => AccountRewards.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventTradingRewardDistribution>): EventTradingRewardDistribution {
    const message = createBaseEventTradingRewardDistribution();
    message.accountRewards = object.accountRewards?.map(e => AccountRewards.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventNewConditionalDerivativeOrder(): EventNewConditionalDerivativeOrder {
  return {
    marketId: "",
    order: undefined,
    hash: new Uint8Array(),
    isMarket: false
  };
}
export const EventNewConditionalDerivativeOrder = {
  encode(message: EventNewConditionalDerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    if (message.isMarket === true) {
      writer.uint32(32).bool(message.isMarket);
    }
    return writer;
  },
  fromJSON(object: any): EventNewConditionalDerivativeOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      isMarket: isSet(object.isMarket) ? Boolean(object.isMarket) : false
    };
  },
  fromPartial(object: Partial<EventNewConditionalDerivativeOrder>): EventNewConditionalDerivativeOrder {
    const message = createBaseEventNewConditionalDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.isMarket = object.isMarket ?? false;
    return message;
  }
};
function createBaseEventCancelConditionalDerivativeOrder(): EventCancelConditionalDerivativeOrder {
  return {
    marketId: "",
    isLimitCancel: false,
    limitOrder: undefined,
    marketOrder: undefined
  };
}
export const EventCancelConditionalDerivativeOrder = {
  encode(message: EventCancelConditionalDerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isLimitCancel === true) {
      writer.uint32(16).bool(message.isLimitCancel);
    }
    if (message.limitOrder !== undefined) {
      DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOrder !== undefined) {
      DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventCancelConditionalDerivativeOrder {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isLimitCancel: isSet(object.isLimitCancel) ? Boolean(object.isLimitCancel) : false,
      limitOrder: isSet(object.limitOrder) ? DerivativeLimitOrder.fromJSON(object.limitOrder) : undefined,
      marketOrder: isSet(object.marketOrder) ? DerivativeMarketOrder.fromJSON(object.marketOrder) : undefined
    };
  },
  fromPartial(object: Partial<EventCancelConditionalDerivativeOrder>): EventCancelConditionalDerivativeOrder {
    const message = createBaseEventCancelConditionalDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.isLimitCancel = object.isLimitCancel ?? false;
    message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
    message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
    return message;
  }
};
function createBaseEventConditionalDerivativeOrderTrigger(): EventConditionalDerivativeOrderTrigger {
  return {
    marketId: new Uint8Array(),
    isLimitTrigger: false,
    triggeredOrderHash: new Uint8Array(),
    placedOrderHash: new Uint8Array()
  };
}
export const EventConditionalDerivativeOrderTrigger = {
  encode(message: EventConditionalDerivativeOrderTrigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId.length !== 0) {
      writer.uint32(10).bytes(message.marketId);
    }
    if (message.isLimitTrigger === true) {
      writer.uint32(16).bool(message.isLimitTrigger);
    }
    if (message.triggeredOrderHash.length !== 0) {
      writer.uint32(26).bytes(message.triggeredOrderHash);
    }
    if (message.placedOrderHash.length !== 0) {
      writer.uint32(34).bytes(message.placedOrderHash);
    }
    return writer;
  },
  fromJSON(object: any): EventConditionalDerivativeOrderTrigger {
    return {
      marketId: isSet(object.marketId) ? bytesFromBase64(object.marketId) : new Uint8Array(),
      isLimitTrigger: isSet(object.isLimitTrigger) ? Boolean(object.isLimitTrigger) : false,
      triggeredOrderHash: isSet(object.triggeredOrderHash) ? bytesFromBase64(object.triggeredOrderHash) : new Uint8Array(),
      placedOrderHash: isSet(object.placedOrderHash) ? bytesFromBase64(object.placedOrderHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventConditionalDerivativeOrderTrigger>): EventConditionalDerivativeOrderTrigger {
    const message = createBaseEventConditionalDerivativeOrderTrigger();
    message.marketId = object.marketId ?? new Uint8Array();
    message.isLimitTrigger = object.isLimitTrigger ?? false;
    message.triggeredOrderHash = object.triggeredOrderHash ?? new Uint8Array();
    message.placedOrderHash = object.placedOrderHash ?? new Uint8Array();
    return message;
  }
};
function createBaseEventOrderFail(): EventOrderFail {
  return {
    account: new Uint8Array(),
    hashes: [],
    flags: []
  };
}
export const EventOrderFail = {
  encode(message: EventOrderFail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }
    for (const v of message.hashes) {
      writer.uint32(18).bytes(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.flags) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): EventOrderFail {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      hashes: Array.isArray(object?.hashes) ? object.hashes.map((e: any) => bytesFromBase64(e)) : [],
      flags: Array.isArray(object?.flags) ? object.flags.map((e: any) => Number(e)) : []
    };
  },
  fromPartial(object: Partial<EventOrderFail>): EventOrderFail {
    const message = createBaseEventOrderFail();
    message.account = object.account ?? new Uint8Array();
    message.hashes = object.hashes?.map(e => e) || [];
    message.flags = object.flags?.map(e => e) || [];
    return message;
  }
};
function createBaseEventAtomicMarketOrderFeeMultipliersUpdated(): EventAtomicMarketOrderFeeMultipliersUpdated {
  return {
    marketFeeMultipliers: []
  };
}
export const EventAtomicMarketOrderFeeMultipliersUpdated = {
  encode(message: EventAtomicMarketOrderFeeMultipliersUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.marketFeeMultipliers) {
      MarketFeeMultiplier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventAtomicMarketOrderFeeMultipliersUpdated {
    return {
      marketFeeMultipliers: Array.isArray(object?.marketFeeMultipliers) ? object.marketFeeMultipliers.map((e: any) => MarketFeeMultiplier.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventAtomicMarketOrderFeeMultipliersUpdated>): EventAtomicMarketOrderFeeMultipliersUpdated {
    const message = createBaseEventAtomicMarketOrderFeeMultipliersUpdated();
    message.marketFeeMultipliers = object.marketFeeMultipliers?.map(e => MarketFeeMultiplier.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventOrderbookUpdate(): EventOrderbookUpdate {
  return {
    spotUpdates: [],
    derivativeUpdates: []
  };
}
export const EventOrderbookUpdate = {
  encode(message: EventOrderbookUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spotUpdates) {
      OrderbookUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.derivativeUpdates) {
      OrderbookUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventOrderbookUpdate {
    return {
      spotUpdates: Array.isArray(object?.spotUpdates) ? object.spotUpdates.map((e: any) => OrderbookUpdate.fromJSON(e)) : [],
      derivativeUpdates: Array.isArray(object?.derivativeUpdates) ? object.derivativeUpdates.map((e: any) => OrderbookUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventOrderbookUpdate>): EventOrderbookUpdate {
    const message = createBaseEventOrderbookUpdate();
    message.spotUpdates = object.spotUpdates?.map(e => OrderbookUpdate.fromPartial(e)) || [];
    message.derivativeUpdates = object.derivativeUpdates?.map(e => OrderbookUpdate.fromPartial(e)) || [];
    return message;
  }
};
function createBaseOrderbookUpdate(): OrderbookUpdate {
  return {
    seq: Long.UZERO,
    orderbook: undefined
  };
}
export const OrderbookUpdate = {
  encode(message: OrderbookUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.orderbook !== undefined) {
      Orderbook.encode(message.orderbook, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): OrderbookUpdate {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      orderbook: isSet(object.orderbook) ? Orderbook.fromJSON(object.orderbook) : undefined
    };
  },
  fromPartial(object: Partial<OrderbookUpdate>): OrderbookUpdate {
    const message = createBaseOrderbookUpdate();
    message.seq = object.seq !== undefined && object.seq !== null ? Long.fromValue(object.seq) : Long.UZERO;
    message.orderbook = object.orderbook !== undefined && object.orderbook !== null ? Orderbook.fromPartial(object.orderbook) : undefined;
    return message;
  }
};
function createBaseOrderbook(): Orderbook {
  return {
    marketId: new Uint8Array(),
    buyLevels: [],
    sellLevels: []
  };
}
export const Orderbook = {
  encode(message: Orderbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId.length !== 0) {
      writer.uint32(10).bytes(message.marketId);
    }
    for (const v of message.buyLevels) {
      Level.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellLevels) {
      Level.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Orderbook {
    return {
      marketId: isSet(object.marketId) ? bytesFromBase64(object.marketId) : new Uint8Array(),
      buyLevels: Array.isArray(object?.buyLevels) ? object.buyLevels.map((e: any) => Level.fromJSON(e)) : [],
      sellLevels: Array.isArray(object?.sellLevels) ? object.sellLevels.map((e: any) => Level.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Orderbook>): Orderbook {
    const message = createBaseOrderbook();
    message.marketId = object.marketId ?? new Uint8Array();
    message.buyLevels = object.buyLevels?.map(e => Level.fromPartial(e)) || [];
    message.sellLevels = object.sellLevels?.map(e => Level.fromPartial(e)) || [];
    return message;
  }
};