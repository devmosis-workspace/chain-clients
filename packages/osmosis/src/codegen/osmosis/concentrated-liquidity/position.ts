import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "../lockup/lock";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
  positionId: Long;
  address: string;
  poolId: Long;
  lowerTick: Long;
  upperTick: Long;
  joinTime?: Timestamp;
  liquidity: string;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface PositionSDKType {
  position_id: Long;
  address: string;
  pool_id: Long;
  lower_tick: Long;
  upper_tick: Long;
  join_time?: TimestampSDKType;
  liquidity: string;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdown {
  position?: Position;
  asset0?: Coin;
  asset1?: Coin;
  claimableSpreadRewards: Coin[];
  claimableIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdownSDKType {
  position?: PositionSDKType;
  asset0?: CoinSDKType;
  asset1?: CoinSDKType;
  claimable_spread_rewards: CoinSDKType[];
  claimable_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
export interface PositionWithPeriodLock {
  position?: Position;
  locks?: PeriodLock;
}
export interface PositionWithPeriodLockSDKType {
  position?: PositionSDKType;
  locks?: PeriodLockSDKType;
}
function createBasePosition(): Position {
  return {
    positionId: Long.UZERO,
    address: "",
    poolId: Long.UZERO,
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO,
    joinTime: undefined,
    liquidity: ""
  };
}
export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (!message.lowerTick.isZero()) {
      writer.uint32(32).int64(message.lowerTick);
    }
    if (!message.upperTick.isZero()) {
      writer.uint32(40).int64(message.upperTick);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(message.joinTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(58).string(message.liquidity);
    }
    return writer;
  },
  fromJSON(object: any): Position {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lowerTick: isSet(object.lowerTick) ? Long.fromValue(object.lowerTick) : Long.ZERO,
      upperTick: isSet(object.upperTick) ? Long.fromValue(object.upperTick) : Long.ZERO,
      joinTime: isSet(object.joinTime) ? fromJsonTimestamp(object.joinTime) : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : ""
    };
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    message.joinTime = object.joinTime !== undefined && object.joinTime !== null ? Timestamp.fromPartial(object.joinTime) : undefined;
    message.liquidity = object.liquidity ?? "";
    return message;
  }
};
function createBaseFullPositionBreakdown(): FullPositionBreakdown {
  return {
    position: undefined,
    asset0: undefined,
    asset1: undefined,
    claimableSpreadRewards: [],
    claimableIncentives: [],
    forfeitedIncentives: []
  };
}
export const FullPositionBreakdown = {
  encode(message: FullPositionBreakdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset0 !== undefined) {
      Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset1 !== undefined) {
      Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FullPositionBreakdown {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      asset0: isSet(object.asset0) ? Coin.fromJSON(object.asset0) : undefined,
      asset1: isSet(object.asset1) ? Coin.fromJSON(object.asset1) : undefined,
      claimableSpreadRewards: Array.isArray(object?.claimableSpreadRewards) ? object.claimableSpreadRewards.map((e: any) => Coin.fromJSON(e)) : [],
      claimableIncentives: Array.isArray(object?.claimableIncentives) ? object.claimableIncentives.map((e: any) => Coin.fromJSON(e)) : [],
      forfeitedIncentives: Array.isArray(object?.forfeitedIncentives) ? object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FullPositionBreakdown>): FullPositionBreakdown {
    const message = createBaseFullPositionBreakdown();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.asset0 = object.asset0 !== undefined && object.asset0 !== null ? Coin.fromPartial(object.asset0) : undefined;
    message.asset1 = object.asset1 !== undefined && object.asset1 !== null ? Coin.fromPartial(object.asset1) : undefined;
    message.claimableSpreadRewards = object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
    message.claimableIncentives = object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBasePositionWithPeriodLock(): PositionWithPeriodLock {
  return {
    position: undefined,
    locks: undefined
  };
}
export const PositionWithPeriodLock = {
  encode(message: PositionWithPeriodLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.locks !== undefined) {
      PeriodLock.encode(message.locks, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionWithPeriodLock {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      locks: isSet(object.locks) ? PeriodLock.fromJSON(object.locks) : undefined
    };
  },
  fromPartial(object: Partial<PositionWithPeriodLock>): PositionWithPeriodLock {
    const message = createBasePositionWithPeriodLock();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.locks = object.locks !== undefined && object.locks !== null ? PeriodLock.fromPartial(object.locks) : undefined;
    return message;
  }
};