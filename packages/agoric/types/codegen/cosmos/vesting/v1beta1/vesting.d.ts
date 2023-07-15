import { BaseAccount, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount?: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    endTime: Long;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
    base_account?: BaseAccountSDKType;
    original_vesting: CoinSDKType[];
    delegated_free: CoinSDKType[];
    delegated_vesting: CoinSDKType[];
    end_time: Long;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    startTime: Long;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    start_time: Long;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * A sequence of periods defines a sequence of vesting events, with the
 * first period relative to an externally-provided start time,
 * and subsequent periods relatie to their predecessor.
 */
export interface Period {
    length: Long;
    amount: Coin[];
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * A sequence of periods defines a sequence of vesting events, with the
 * first period relative to an externally-provided start time,
 * and subsequent periods relatie to their predecessor.
 */
export interface PeriodSDKType {
    length: Long;
    amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    startTime: Long;
    /** unlocking schedule relative to the BaseVestingAccount start_time. */
    vestingPeriods: Period[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    start_time: Long;
    vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
    baseVestingAccount?: BaseVestingAccount;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    /** funder_address specifies the account which can perform clawback. */
    funderAddress: string;
    startTime: Long;
    /** unlocking schedule relative to the BaseVestingAccount start_time. */
    lockupPeriods: Period[];
    /** vesting (i.e. immunity from clawback) schedule relative to the BaseVestingAccount start_time. */
    vestingPeriods: Period[];
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    funder_address: string;
    start_time: Long;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
}
export declare const BaseVestingAccount: {
    encode(message: BaseVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BaseVestingAccount;
    fromPartial(object: Partial<BaseVestingAccount>): BaseVestingAccount;
};
export declare const ContinuousVestingAccount: {
    encode(message: ContinuousVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContinuousVestingAccount;
    fromPartial(object: Partial<ContinuousVestingAccount>): ContinuousVestingAccount;
};
export declare const DelayedVestingAccount: {
    encode(message: DelayedVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelayedVestingAccount;
    fromPartial(object: Partial<DelayedVestingAccount>): DelayedVestingAccount;
};
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Period;
    fromPartial(object: Partial<Period>): Period;
};
export declare const PeriodicVestingAccount: {
    encode(message: PeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PeriodicVestingAccount;
    fromPartial(object: Partial<PeriodicVestingAccount>): PeriodicVestingAccount;
};
export declare const PermanentLockedAccount: {
    encode(message: PermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PermanentLockedAccount;
    fromPartial(object: Partial<PermanentLockedAccount>): PermanentLockedAccount;
};
export declare const ClawbackVestingAccount: {
    encode(message: ClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClawbackVestingAccount;
    fromPartial(object: Partial<ClawbackVestingAccount>): ClawbackVestingAccount;
};
