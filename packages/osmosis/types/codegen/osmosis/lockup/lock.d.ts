import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export declare enum LockQueryType {
    ByDuration = 0,
    ByTime = 1,
    NoLock = 2,
    UNRECOGNIZED = -1
}
export declare const LockQueryTypeSDKType: typeof LockQueryType;
export declare function lockQueryTypeFromJSON(object: any): LockQueryType;
export declare function lockQueryTypeToJSON(object: LockQueryType): string;
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
    /**
     * ID is the unique id of the lock.
     * The ID of the lock is decided upon lock creation, incrementing by 1 for
     * every lock.
     */
    ID: Long;
    /**
     * Owner is the account address of the lock owner.
     * Only the owner can modify the state of the lock.
     */
    owner: string;
    /**
     * Duration is the time needed for a lock to mature after unlocking has
     * started.
     */
    duration?: Duration;
    /**
     * EndTime refers to the time at which the lock would mature and get deleted.
     * This value is first initialized when an unlock has started for the lock,
     * end time being block time + duration.
     */
    endTime?: Timestamp;
    /** Coins are the tokens locked within the lock, kept in the module account. */
    coins: Coin[];
    /**
     * Reward Receiver Address is the address that would be receiving rewards for
     * the incentives for the lock. This is set to owner by default and can be
     * changed via separate msg.
     */
    rewardReceiverAddress: string;
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockSDKType {
    ID: Long;
    owner: string;
    duration?: DurationSDKType;
    end_time?: TimestampSDKType;
    coins: CoinSDKType[];
    reward_receiver_address: string;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
    /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
    lockQueryType: LockQueryType;
    /** Denom represents the token denomination we are looking to lock up */
    denom: string;
    /**
     * Duration is used to query locks with longer duration than the specified
     * duration. Duration field must not be nil when the lock query type is
     * `ByLockDuration`.
     */
    duration?: Duration;
    /**
     * Timestamp is used by locks started before the specified duration.
     * Timestamp field must not be nil when the lock query type is `ByLockTime`.
     * Querying locks with timestamp is currently not implemented.
     */
    timestamp?: Timestamp;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionSDKType {
    lock_query_type: LockQueryType;
    denom: string;
    duration?: DurationSDKType;
    timestamp?: TimestampSDKType;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
    /**
     * Underlying Lock ID is the underlying native lock's id for this synthetic
     * lockup. A synthetic lock MUST have an underlying lock.
     */
    underlyingLockId: Long;
    /**
     * SynthDenom is the synthetic denom that is a combination of
     * gamm share + bonding status + validator address.
     */
    synthDenom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     */
    endTime?: Timestamp;
    /**
     * Duration is the duration for a synthetic lock to mature
     * at the point of unbonding has started.
     */
    duration?: Duration;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockSDKType {
    underlying_lock_id: Long;
    synth_denom: string;
    end_time?: TimestampSDKType;
    duration?: DurationSDKType;
}
export declare const PeriodLock: {
    encode(message: PeriodLock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PeriodLock;
    fromPartial(object: Partial<PeriodLock>): PeriodLock;
};
export declare const QueryCondition: {
    encode(message: QueryCondition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCondition;
    fromPartial(object: Partial<QueryCondition>): QueryCondition;
};
export declare const SyntheticLock: {
    encode(message: SyntheticLock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SyntheticLock;
    fromPartial(object: Partial<SyntheticLock>): SyntheticLock;
};
