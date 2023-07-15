import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Pool {
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  /** address holding spread rewards from swaps. */
  spreadRewardsAddress: string;
  id: Long;
  /** Amount of total liquidity */
  currentTickLiquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: Long;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tickSpacing: Long;
  exponentAtPriceOne: Long;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spreadFactor: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  lastLiquidityUpdate?: Timestamp;
}
export interface PoolSDKType {
  address: string;
  incentives_address: string;
  spread_rewards_address: string;
  id: Long;
  current_tick_liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: Long;
  tick_spacing: Long;
  exponent_at_price_one: Long;
  spread_factor: string;
  last_liquidity_update?: TimestampSDKType;
}
function createBasePool(): Pool {
  return {
    address: "",
    incentivesAddress: "",
    spreadRewardsAddress: "",
    id: Long.UZERO,
    currentTickLiquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: Long.ZERO,
    tickSpacing: Long.UZERO,
    exponentAtPriceOne: Long.ZERO,
    spreadFactor: "",
    lastLiquidityUpdate: undefined
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.spreadRewardsAddress !== "") {
      writer.uint32(26).string(message.spreadRewardsAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(42).string(message.currentTickLiquidity);
    }
    if (message.token0 !== "") {
      writer.uint32(50).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(58).string(message.token1);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(66).string(message.currentSqrtPrice);
    }
    if (!message.currentTick.isZero()) {
      writer.uint32(72).int64(message.currentTick);
    }
    if (!message.tickSpacing.isZero()) {
      writer.uint32(80).uint64(message.tickSpacing);
    }
    if (!message.exponentAtPriceOne.isZero()) {
      writer.uint32(88).int64(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(98).string(message.spreadFactor);
    }
    if (message.lastLiquidityUpdate !== undefined) {
      Timestamp.encode(message.lastLiquidityUpdate, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      incentivesAddress: isSet(object.incentivesAddress) ? String(object.incentivesAddress) : "",
      spreadRewardsAddress: isSet(object.spreadRewardsAddress) ? String(object.spreadRewardsAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      currentTickLiquidity: isSet(object.currentTickLiquidity) ? String(object.currentTickLiquidity) : "",
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : "",
      currentSqrtPrice: isSet(object.currentSqrtPrice) ? String(object.currentSqrtPrice) : "",
      currentTick: isSet(object.currentTick) ? Long.fromValue(object.currentTick) : Long.ZERO,
      tickSpacing: isSet(object.tickSpacing) ? Long.fromValue(object.tickSpacing) : Long.UZERO,
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? Long.fromValue(object.exponentAtPriceOne) : Long.ZERO,
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : "",
      lastLiquidityUpdate: isSet(object.lastLiquidityUpdate) ? fromJsonTimestamp(object.lastLiquidityUpdate) : undefined
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.incentivesAddress = object.incentivesAddress ?? "";
    message.spreadRewardsAddress = object.spreadRewardsAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.currentTickLiquidity = object.currentTickLiquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? Long.fromValue(object.currentTick) : Long.ZERO;
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? Long.fromValue(object.tickSpacing) : Long.UZERO;
    message.exponentAtPriceOne = object.exponentAtPriceOne !== undefined && object.exponentAtPriceOne !== null ? Long.fromValue(object.exponentAtPriceOne) : Long.ZERO;
    message.spreadFactor = object.spreadFactor ?? "";
    message.lastLiquidityUpdate = object.lastLiquidityUpdate !== undefined && object.lastLiquidityUpdate !== null ? Timestamp.fromPartial(object.lastLiquidityUpdate) : undefined;
    return message;
  }
};