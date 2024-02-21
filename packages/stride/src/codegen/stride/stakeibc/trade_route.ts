import { ICAAccount, ICAAccountAmino, ICAAccountSDKType } from "./ica_account";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** Stores pool information needed to execute the swap along a trade route */
export interface TradeConfig {
  /** Currently Osmosis is the only trade chain so this is an osmosis pool id */
  poolId: bigint;
  /**
   * Spot price in the pool to convert the reward denom to the host denom
   * output_tokens = swap_price * input tokens
   * This value may be slightly stale as it is updated by an ICQ
   */
  swapPrice: string;
  /** unix time in seconds that the price was last updated */
  priceUpdateTimestamp: bigint;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * 0.05 means the output from the trade can be no less than a 5% deviation
   * from the current value
   */
  maxAllowedSwapLossRate: string;
  /**
   * min and max set boundaries of reward denom on trade chain we will swap
   * min also decides when reward token transfers are worth it (transfer fees)
   */
  minSwapAmount: string;
  maxSwapAmount: string;
}
export interface TradeConfigProtoMsg {
  typeUrl: "/stride.stakeibc.TradeConfig";
  value: Uint8Array;
}
/** Stores pool information needed to execute the swap along a trade route */
export interface TradeConfigAmino {
  /** Currently Osmosis is the only trade chain so this is an osmosis pool id */
  pool_id?: string;
  /**
   * Spot price in the pool to convert the reward denom to the host denom
   * output_tokens = swap_price * input tokens
   * This value may be slightly stale as it is updated by an ICQ
   */
  swap_price?: string;
  /** unix time in seconds that the price was last updated */
  price_update_timestamp?: string;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * 0.05 means the output from the trade can be no less than a 5% deviation
   * from the current value
   */
  max_allowed_swap_loss_rate?: string;
  /**
   * min and max set boundaries of reward denom on trade chain we will swap
   * min also decides when reward token transfers are worth it (transfer fees)
   */
  min_swap_amount?: string;
  max_swap_amount?: string;
}
export interface TradeConfigAminoMsg {
  type: "/stride.stakeibc.TradeConfig";
  value: TradeConfigAmino;
}
/** Stores pool information needed to execute the swap along a trade route */
export interface TradeConfigSDKType {
  pool_id: bigint;
  swap_price: string;
  price_update_timestamp: bigint;
  max_allowed_swap_loss_rate: string;
  min_swap_amount: string;
  max_swap_amount: string;
}
/**
 * TradeRoute represents a round trip including info on transfer and how to do
 * the swap. It makes the assumption that the reward token is always foreign to
 * the host so therefore the first two hops are to unwind the ibc denom enroute
 * to the trade chain and the last hop is the return so funds start/end in the
 * withdrawl ICA on hostZone
 * The structure is key'd on reward denom and host denom in their native forms
 * (i.e. reward_denom_on_reward_zone and host_denom_on_host_zone)
 */
export interface TradeRoute {
  /** ibc denom for the reward on the host zone */
  rewardDenomOnHostZone: string;
  /** should be the native denom for the reward chain */
  rewardDenomOnRewardZone: string;
  /** ibc denom of the reward on the trade chain, input to the swap */
  rewardDenomOnTradeZone: string;
  /** ibc of the host denom on the trade chain, output from the swap */
  hostDenomOnTradeZone: string;
  /** should be the same as the native host denom on the host chain */
  hostDenomOnHostZone: string;
  /**
   * ICAAccount on the host zone with the reward tokens
   * This is the same as the host zone withdrawal ICA account
   */
  hostAccount: ICAAccount;
  /**
   * ICAAccount on the reward zone that is acts as the intermediate
   * receiver of the transfer from host zone to trade zone
   */
  rewardAccount: ICAAccount;
  /**
   * ICAAccount responsible for executing the swap of reward
   * tokens for host tokens
   */
  tradeAccount: ICAAccount;
  /**
   * Channel responsible for the transfer of reward tokens from the host
   * zone to the reward zone. This is the channel ID on the host zone side
   */
  hostToRewardChannelId: string;
  /**
   * Channel responsible for the transfer of reward tokens from the reward
   * zone to the trade zone. This is the channel ID on the reward zone side
   */
  rewardToTradeChannelId: string;
  /**
   * Channel responsible for the transfer of host tokens from the trade
   * zone, back to the host zone. This is the channel ID on the trade zone side
   */
  tradeToHostChannelId: string;
  /**
   * specifies the configuration needed to execute the swap
   * such as pool_id, slippage, min trade amount, etc.
   */
  tradeConfig: TradeConfig;
}
export interface TradeRouteProtoMsg {
  typeUrl: "/stride.stakeibc.TradeRoute";
  value: Uint8Array;
}
/**
 * TradeRoute represents a round trip including info on transfer and how to do
 * the swap. It makes the assumption that the reward token is always foreign to
 * the host so therefore the first two hops are to unwind the ibc denom enroute
 * to the trade chain and the last hop is the return so funds start/end in the
 * withdrawl ICA on hostZone
 * The structure is key'd on reward denom and host denom in their native forms
 * (i.e. reward_denom_on_reward_zone and host_denom_on_host_zone)
 */
export interface TradeRouteAmino {
  /** ibc denom for the reward on the host zone */
  reward_denom_on_host_zone?: string;
  /** should be the native denom for the reward chain */
  reward_denom_on_reward_zone?: string;
  /** ibc denom of the reward on the trade chain, input to the swap */
  reward_denom_on_trade_zone?: string;
  /** ibc of the host denom on the trade chain, output from the swap */
  host_denom_on_trade_zone?: string;
  /** should be the same as the native host denom on the host chain */
  host_denom_on_host_zone?: string;
  /**
   * ICAAccount on the host zone with the reward tokens
   * This is the same as the host zone withdrawal ICA account
   */
  host_account?: ICAAccountAmino;
  /**
   * ICAAccount on the reward zone that is acts as the intermediate
   * receiver of the transfer from host zone to trade zone
   */
  reward_account?: ICAAccountAmino;
  /**
   * ICAAccount responsible for executing the swap of reward
   * tokens for host tokens
   */
  trade_account?: ICAAccountAmino;
  /**
   * Channel responsible for the transfer of reward tokens from the host
   * zone to the reward zone. This is the channel ID on the host zone side
   */
  host_to_reward_channel_id?: string;
  /**
   * Channel responsible for the transfer of reward tokens from the reward
   * zone to the trade zone. This is the channel ID on the reward zone side
   */
  reward_to_trade_channel_id?: string;
  /**
   * Channel responsible for the transfer of host tokens from the trade
   * zone, back to the host zone. This is the channel ID on the trade zone side
   */
  trade_to_host_channel_id?: string;
  /**
   * specifies the configuration needed to execute the swap
   * such as pool_id, slippage, min trade amount, etc.
   */
  trade_config?: TradeConfigAmino;
}
export interface TradeRouteAminoMsg {
  type: "/stride.stakeibc.TradeRoute";
  value: TradeRouteAmino;
}
/**
 * TradeRoute represents a round trip including info on transfer and how to do
 * the swap. It makes the assumption that the reward token is always foreign to
 * the host so therefore the first two hops are to unwind the ibc denom enroute
 * to the trade chain and the last hop is the return so funds start/end in the
 * withdrawl ICA on hostZone
 * The structure is key'd on reward denom and host denom in their native forms
 * (i.e. reward_denom_on_reward_zone and host_denom_on_host_zone)
 */
export interface TradeRouteSDKType {
  reward_denom_on_host_zone: string;
  reward_denom_on_reward_zone: string;
  reward_denom_on_trade_zone: string;
  host_denom_on_trade_zone: string;
  host_denom_on_host_zone: string;
  host_account: ICAAccountSDKType;
  reward_account: ICAAccountSDKType;
  trade_account: ICAAccountSDKType;
  host_to_reward_channel_id: string;
  reward_to_trade_channel_id: string;
  trade_to_host_channel_id: string;
  trade_config: TradeConfigSDKType;
}
function createBaseTradeConfig(): TradeConfig {
  return {
    poolId: BigInt(0),
    swapPrice: "",
    priceUpdateTimestamp: BigInt(0),
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: ""
  };
}
export const TradeConfig = {
  typeUrl: "/stride.stakeibc.TradeConfig",
  encode(message: TradeConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.swapPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapPrice, 18).atomics);
    }
    if (message.priceUpdateTimestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.priceUpdateTimestamp);
    }
    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxAllowedSwapLossRate, 18).atomics);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(42).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(50).string(message.maxSwapAmount);
    }
    return writer;
  },
  fromJSON(object: any): TradeConfig {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      swapPrice: isSet(object.swapPrice) ? String(object.swapPrice) : "",
      priceUpdateTimestamp: isSet(object.priceUpdateTimestamp) ? BigInt(object.priceUpdateTimestamp.toString()) : BigInt(0),
      maxAllowedSwapLossRate: isSet(object.maxAllowedSwapLossRate) ? String(object.maxAllowedSwapLossRate) : "",
      minSwapAmount: isSet(object.minSwapAmount) ? String(object.minSwapAmount) : "",
      maxSwapAmount: isSet(object.maxSwapAmount) ? String(object.maxSwapAmount) : ""
    };
  },
  fromPartial(object: Partial<TradeConfig>): TradeConfig {
    const message = createBaseTradeConfig();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapPrice = object.swapPrice ?? "";
    message.priceUpdateTimestamp = object.priceUpdateTimestamp !== undefined && object.priceUpdateTimestamp !== null ? BigInt(object.priceUpdateTimestamp.toString()) : BigInt(0);
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    return message;
  },
  fromAmino(object: TradeConfigAmino): TradeConfig {
    const message = createBaseTradeConfig();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_price !== undefined && object.swap_price !== null) {
      message.swapPrice = object.swap_price;
    }
    if (object.price_update_timestamp !== undefined && object.price_update_timestamp !== null) {
      message.priceUpdateTimestamp = BigInt(object.price_update_timestamp);
    }
    if (object.max_allowed_swap_loss_rate !== undefined && object.max_allowed_swap_loss_rate !== null) {
      message.maxAllowedSwapLossRate = object.max_allowed_swap_loss_rate;
    }
    if (object.min_swap_amount !== undefined && object.min_swap_amount !== null) {
      message.minSwapAmount = object.min_swap_amount;
    }
    if (object.max_swap_amount !== undefined && object.max_swap_amount !== null) {
      message.maxSwapAmount = object.max_swap_amount;
    }
    return message;
  },
  toAmino(message: TradeConfig): TradeConfigAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.swap_price = message.swapPrice;
    obj.price_update_timestamp = message.priceUpdateTimestamp ? message.priceUpdateTimestamp.toString() : undefined;
    obj.max_allowed_swap_loss_rate = message.maxAllowedSwapLossRate;
    obj.min_swap_amount = message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount;
    return obj;
  },
  fromAminoMsg(object: TradeConfigAminoMsg): TradeConfig {
    return TradeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeConfigProtoMsg): TradeConfig {
    return TradeConfig.decode(message.value);
  },
  toProto(message: TradeConfig): Uint8Array {
    return TradeConfig.encode(message).finish();
  },
  toProtoMsg(message: TradeConfig): TradeConfigProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.TradeConfig",
      value: TradeConfig.encode(message).finish()
    };
  }
};
function createBaseTradeRoute(): TradeRoute {
  return {
    rewardDenomOnHostZone: "",
    rewardDenomOnRewardZone: "",
    rewardDenomOnTradeZone: "",
    hostDenomOnTradeZone: "",
    hostDenomOnHostZone: "",
    hostAccount: ICAAccount.fromPartial({}),
    rewardAccount: ICAAccount.fromPartial({}),
    tradeAccount: ICAAccount.fromPartial({}),
    hostToRewardChannelId: "",
    rewardToTradeChannelId: "",
    tradeToHostChannelId: "",
    tradeConfig: TradeConfig.fromPartial({})
  };
}
export const TradeRoute = {
  typeUrl: "/stride.stakeibc.TradeRoute",
  encode(message: TradeRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardDenomOnHostZone !== "") {
      writer.uint32(10).string(message.rewardDenomOnHostZone);
    }
    if (message.rewardDenomOnRewardZone !== "") {
      writer.uint32(18).string(message.rewardDenomOnRewardZone);
    }
    if (message.rewardDenomOnTradeZone !== "") {
      writer.uint32(26).string(message.rewardDenomOnTradeZone);
    }
    if (message.hostDenomOnTradeZone !== "") {
      writer.uint32(34).string(message.hostDenomOnTradeZone);
    }
    if (message.hostDenomOnHostZone !== "") {
      writer.uint32(42).string(message.hostDenomOnHostZone);
    }
    if (message.hostAccount !== undefined) {
      ICAAccount.encode(message.hostAccount, writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardAccount !== undefined) {
      ICAAccount.encode(message.rewardAccount, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradeAccount !== undefined) {
      ICAAccount.encode(message.tradeAccount, writer.uint32(66).fork()).ldelim();
    }
    if (message.hostToRewardChannelId !== "") {
      writer.uint32(74).string(message.hostToRewardChannelId);
    }
    if (message.rewardToTradeChannelId !== "") {
      writer.uint32(82).string(message.rewardToTradeChannelId);
    }
    if (message.tradeToHostChannelId !== "") {
      writer.uint32(90).string(message.tradeToHostChannelId);
    }
    if (message.tradeConfig !== undefined) {
      TradeConfig.encode(message.tradeConfig, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TradeRoute {
    return {
      rewardDenomOnHostZone: isSet(object.rewardDenomOnHostZone) ? String(object.rewardDenomOnHostZone) : "",
      rewardDenomOnRewardZone: isSet(object.rewardDenomOnRewardZone) ? String(object.rewardDenomOnRewardZone) : "",
      rewardDenomOnTradeZone: isSet(object.rewardDenomOnTradeZone) ? String(object.rewardDenomOnTradeZone) : "",
      hostDenomOnTradeZone: isSet(object.hostDenomOnTradeZone) ? String(object.hostDenomOnTradeZone) : "",
      hostDenomOnHostZone: isSet(object.hostDenomOnHostZone) ? String(object.hostDenomOnHostZone) : "",
      hostAccount: isSet(object.hostAccount) ? ICAAccount.fromJSON(object.hostAccount) : undefined,
      rewardAccount: isSet(object.rewardAccount) ? ICAAccount.fromJSON(object.rewardAccount) : undefined,
      tradeAccount: isSet(object.tradeAccount) ? ICAAccount.fromJSON(object.tradeAccount) : undefined,
      hostToRewardChannelId: isSet(object.hostToRewardChannelId) ? String(object.hostToRewardChannelId) : "",
      rewardToTradeChannelId: isSet(object.rewardToTradeChannelId) ? String(object.rewardToTradeChannelId) : "",
      tradeToHostChannelId: isSet(object.tradeToHostChannelId) ? String(object.tradeToHostChannelId) : "",
      tradeConfig: isSet(object.tradeConfig) ? TradeConfig.fromJSON(object.tradeConfig) : undefined
    };
  },
  fromPartial(object: Partial<TradeRoute>): TradeRoute {
    const message = createBaseTradeRoute();
    message.rewardDenomOnHostZone = object.rewardDenomOnHostZone ?? "";
    message.rewardDenomOnRewardZone = object.rewardDenomOnRewardZone ?? "";
    message.rewardDenomOnTradeZone = object.rewardDenomOnTradeZone ?? "";
    message.hostDenomOnTradeZone = object.hostDenomOnTradeZone ?? "";
    message.hostDenomOnHostZone = object.hostDenomOnHostZone ?? "";
    message.hostAccount = object.hostAccount !== undefined && object.hostAccount !== null ? ICAAccount.fromPartial(object.hostAccount) : undefined;
    message.rewardAccount = object.rewardAccount !== undefined && object.rewardAccount !== null ? ICAAccount.fromPartial(object.rewardAccount) : undefined;
    message.tradeAccount = object.tradeAccount !== undefined && object.tradeAccount !== null ? ICAAccount.fromPartial(object.tradeAccount) : undefined;
    message.hostToRewardChannelId = object.hostToRewardChannelId ?? "";
    message.rewardToTradeChannelId = object.rewardToTradeChannelId ?? "";
    message.tradeToHostChannelId = object.tradeToHostChannelId ?? "";
    message.tradeConfig = object.tradeConfig !== undefined && object.tradeConfig !== null ? TradeConfig.fromPartial(object.tradeConfig) : undefined;
    return message;
  },
  fromAmino(object: TradeRouteAmino): TradeRoute {
    const message = createBaseTradeRoute();
    if (object.reward_denom_on_host_zone !== undefined && object.reward_denom_on_host_zone !== null) {
      message.rewardDenomOnHostZone = object.reward_denom_on_host_zone;
    }
    if (object.reward_denom_on_reward_zone !== undefined && object.reward_denom_on_reward_zone !== null) {
      message.rewardDenomOnRewardZone = object.reward_denom_on_reward_zone;
    }
    if (object.reward_denom_on_trade_zone !== undefined && object.reward_denom_on_trade_zone !== null) {
      message.rewardDenomOnTradeZone = object.reward_denom_on_trade_zone;
    }
    if (object.host_denom_on_trade_zone !== undefined && object.host_denom_on_trade_zone !== null) {
      message.hostDenomOnTradeZone = object.host_denom_on_trade_zone;
    }
    if (object.host_denom_on_host_zone !== undefined && object.host_denom_on_host_zone !== null) {
      message.hostDenomOnHostZone = object.host_denom_on_host_zone;
    }
    if (object.host_account !== undefined && object.host_account !== null) {
      message.hostAccount = ICAAccount.fromAmino(object.host_account);
    }
    if (object.reward_account !== undefined && object.reward_account !== null) {
      message.rewardAccount = ICAAccount.fromAmino(object.reward_account);
    }
    if (object.trade_account !== undefined && object.trade_account !== null) {
      message.tradeAccount = ICAAccount.fromAmino(object.trade_account);
    }
    if (object.host_to_reward_channel_id !== undefined && object.host_to_reward_channel_id !== null) {
      message.hostToRewardChannelId = object.host_to_reward_channel_id;
    }
    if (object.reward_to_trade_channel_id !== undefined && object.reward_to_trade_channel_id !== null) {
      message.rewardToTradeChannelId = object.reward_to_trade_channel_id;
    }
    if (object.trade_to_host_channel_id !== undefined && object.trade_to_host_channel_id !== null) {
      message.tradeToHostChannelId = object.trade_to_host_channel_id;
    }
    if (object.trade_config !== undefined && object.trade_config !== null) {
      message.tradeConfig = TradeConfig.fromAmino(object.trade_config);
    }
    return message;
  },
  toAmino(message: TradeRoute): TradeRouteAmino {
    const obj: any = {};
    obj.reward_denom_on_host_zone = message.rewardDenomOnHostZone;
    obj.reward_denom_on_reward_zone = message.rewardDenomOnRewardZone;
    obj.reward_denom_on_trade_zone = message.rewardDenomOnTradeZone;
    obj.host_denom_on_trade_zone = message.hostDenomOnTradeZone;
    obj.host_denom_on_host_zone = message.hostDenomOnHostZone;
    obj.host_account = message.hostAccount ? ICAAccount.toAmino(message.hostAccount) : undefined;
    obj.reward_account = message.rewardAccount ? ICAAccount.toAmino(message.rewardAccount) : undefined;
    obj.trade_account = message.tradeAccount ? ICAAccount.toAmino(message.tradeAccount) : undefined;
    obj.host_to_reward_channel_id = message.hostToRewardChannelId;
    obj.reward_to_trade_channel_id = message.rewardToTradeChannelId;
    obj.trade_to_host_channel_id = message.tradeToHostChannelId;
    obj.trade_config = message.tradeConfig ? TradeConfig.toAmino(message.tradeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: TradeRouteAminoMsg): TradeRoute {
    return TradeRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeRouteProtoMsg): TradeRoute {
    return TradeRoute.decode(message.value);
  },
  toProto(message: TradeRoute): Uint8Array {
    return TradeRoute.encode(message).finish();
  },
  toProtoMsg(message: TradeRoute): TradeRouteProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.TradeRoute",
      value: TradeRoute.encode(message).finish()
    };
  }
};