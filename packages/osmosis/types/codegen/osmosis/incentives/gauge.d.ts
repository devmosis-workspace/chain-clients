import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface Gauge {
    /** id is the unique ID of a Gauge */
    id: Long;
    /**
     * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled, Intended for use with incentives that get refilled daily.
     */
    isPerpetual: boolean;
    /**
     * distribute_to is where the gauge rewards are distributed to.
     * This is queried via lock duration or by timestamp
     */
    distributeTo?: QueryCondition;
    /**
     * coins is the total amount of coins that have been in the gauge
     * Can distribute multiple coin denoms
     */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime?: Timestamp;
    /**
     * num_epochs_paid_over is the number of total epochs distribution will be
     * completed over
     */
    numEpochsPaidOver: Long;
    /**
     * filled_epochs is the number of epochs distribution has been completed on
     * already
     */
    filledEpochs: Long;
    /** distributed_coins are coins that have been distributed already */
    distributedCoins: Coin[];
}
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface GaugeSDKType {
    id: Long;
    is_perpetual: boolean;
    distribute_to?: QueryConditionSDKType;
    coins: CoinSDKType[];
    start_time?: TimestampSDKType;
    num_epochs_paid_over: Long;
    filled_epochs: Long;
    distributed_coins: CoinSDKType[];
}
export interface LockableDurationsInfo {
    /** List of incentivised durations that gauges will pay out to */
    lockableDurations: Duration[];
}
export interface LockableDurationsInfoSDKType {
    lockable_durations: DurationSDKType[];
}
export declare const Gauge: {
    encode(message: Gauge, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Gauge;
    fromPartial(object: Partial<Gauge>): Gauge;
};
export declare const LockableDurationsInfo: {
    encode(message: LockableDurationsInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LockableDurationsInfo;
    fromPartial(object: Partial<LockableDurationsInfo>): LockableDurationsInfo;
};
