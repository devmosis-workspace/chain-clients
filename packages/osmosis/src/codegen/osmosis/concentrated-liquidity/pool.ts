import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../helpers";
export interface Pool {
  $typeUrl?: string;
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  /** address holding spread rewards from swaps. */
  spreadRewardsAddress: string;
  id: bigint;
  /** Amount of total liquidity */
  currentTickLiquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: bigint;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tickSpacing: bigint;
  exponentAtPriceOne: bigint;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spreadFactor: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  lastLiquidityUpdate: Timestamp;
}
export interface PoolProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentives_address: string;
  /** address holding spread rewards from swaps. */
  spread_rewards_address: string;
  id: string;
  /** Amount of total liquidity */
  current_tick_liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: string;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tick_spacing: string;
  exponent_at_price_one: string;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spread_factor: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  last_liquidity_update?: TimestampAmino;
}
export interface PoolAminoMsg {
  type: "osmosis/concentratedliquidity/pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  $typeUrl?: string;
  address: string;
  incentives_address: string;
  spread_rewards_address: string;
  id: bigint;
  current_tick_liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: bigint;
  tick_spacing: bigint;
  exponent_at_price_one: bigint;
  spread_factor: string;
  last_liquidity_update: TimestampSDKType;
}
function createBasePool(): Pool {
  return {
    $typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
    address: "",
    incentivesAddress: "",
    spreadRewardsAddress: "",
    id: BigInt(0),
    currentTickLiquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: BigInt(0),
    tickSpacing: BigInt(0),
    exponentAtPriceOne: BigInt(0),
    spreadFactor: "",
    lastLiquidityUpdate: Timestamp.fromPartial({})
  };
}
export const Pool = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.spreadRewardsAddress !== "") {
      writer.uint32(26).string(message.spreadRewardsAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.currentTickLiquidity, 18).atomics);
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
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(72).int64(message.currentTick);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(80).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== BigInt(0)) {
      writer.uint32(88).int64(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.spreadFactor, 18).atomics);
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      currentTickLiquidity: isSet(object.currentTickLiquidity) ? String(object.currentTickLiquidity) : "",
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : "",
      currentSqrtPrice: isSet(object.currentSqrtPrice) ? String(object.currentSqrtPrice) : "",
      currentTick: isSet(object.currentTick) ? BigInt(object.currentTick.toString()) : BigInt(0),
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? BigInt(object.exponentAtPriceOne.toString()) : BigInt(0),
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : "",
      lastLiquidityUpdate: isSet(object.lastLiquidityUpdate) ? fromJsonTimestamp(object.lastLiquidityUpdate) : undefined
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.incentivesAddress = object.incentivesAddress ?? "";
    message.spreadRewardsAddress = object.spreadRewardsAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.currentTickLiquidity = object.currentTickLiquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? BigInt(object.currentTick.toString()) : BigInt(0);
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.exponentAtPriceOne = object.exponentAtPriceOne !== undefined && object.exponentAtPriceOne !== null ? BigInt(object.exponentAtPriceOne.toString()) : BigInt(0);
    message.spreadFactor = object.spreadFactor ?? "";
    message.lastLiquidityUpdate = object.lastLiquidityUpdate !== undefined && object.lastLiquidityUpdate !== null ? Timestamp.fromPartial(object.lastLiquidityUpdate) : undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      address: object.address,
      incentivesAddress: object.incentives_address,
      spreadRewardsAddress: object.spread_rewards_address,
      id: BigInt(object.id),
      currentTickLiquidity: object.current_tick_liquidity,
      token0: object.token0,
      token1: object.token1,
      currentSqrtPrice: object.current_sqrt_price,
      currentTick: BigInt(object.current_tick),
      tickSpacing: BigInt(object.tick_spacing),
      exponentAtPriceOne: BigInt(object.exponent_at_price_one),
      spreadFactor: object.spread_factor,
      lastLiquidityUpdate: object.last_liquidity_update
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.incentives_address = message.incentivesAddress;
    obj.spread_rewards_address = message.spreadRewardsAddress;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.current_tick_liquidity = message.currentTickLiquidity;
    obj.token0 = message.token0;
    obj.token1 = message.token1;
    obj.current_sqrt_price = message.currentSqrtPrice;
    obj.current_tick = message.currentTick ? message.currentTick.toString() : undefined;
    obj.tick_spacing = message.tickSpacing ? message.tickSpacing.toString() : undefined;
    obj.exponent_at_price_one = message.exponentAtPriceOne ? message.exponentAtPriceOne.toString() : undefined;
    obj.spread_factor = message.spreadFactor;
    obj.last_liquidity_update = message.lastLiquidityUpdate;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};