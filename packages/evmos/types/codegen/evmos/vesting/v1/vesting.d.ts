import { BaseVestingAccount, BaseVestingAccountSDKType, Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
    /**
     * base_vesting_account implements the VestingAccount interface. It contains
     * all the necessary fields needed for any vesting account implementation
     */
    baseVestingAccount?: BaseVestingAccount;
    /** funder_address specifies the account which can perform clawback */
    funderAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime?: Timestamp;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
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
    start_time?: TimestampSDKType;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
}
export declare const ClawbackVestingAccount: {
    encode(message: ClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClawbackVestingAccount;
    fromPartial(object: Partial<ClawbackVestingAccount>): ClawbackVestingAccount;
};
