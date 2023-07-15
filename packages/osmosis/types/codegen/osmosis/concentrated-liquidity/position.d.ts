import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "../lockup/lock";
import { Long } from "../../helpers";
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
export declare const Position: {
    encode(message: Position, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Position;
    fromPartial(object: Partial<Position>): Position;
};
export declare const FullPositionBreakdown: {
    encode(message: FullPositionBreakdown, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FullPositionBreakdown;
    fromPartial(object: Partial<FullPositionBreakdown>): FullPositionBreakdown;
};
export declare const PositionWithPeriodLock: {
    encode(message: PositionWithPeriodLock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionWithPeriodLock;
    fromPartial(object: Partial<PositionWithPeriodLock>): PositionWithPeriodLock;
};
