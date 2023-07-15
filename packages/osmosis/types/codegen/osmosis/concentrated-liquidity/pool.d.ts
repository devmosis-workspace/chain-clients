import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
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
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
};
