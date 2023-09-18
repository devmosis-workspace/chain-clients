import { BaseVestingAccount, BaseVestingAccountAmino, BaseVestingAccountSDKType, Period, PeriodAmino, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
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
    baseVestingAccount: BaseVestingAccount;
    /** funder_address specifies the account which can perform clawback */
    funderAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: Timestamp;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
}
export interface ClawbackVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v1.ClawbackVestingAccount";
    value: Uint8Array;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountAmino {
    /**
     * base_vesting_account implements the VestingAccount interface. It contains
     * all the necessary fields needed for any vesting account implementation
     */
    base_vesting_account?: BaseVestingAccountAmino;
    /** funder_address specifies the account which can perform clawback */
    funder_address: string;
    /** start_time defines the time at which the vesting period begins */
    start_time?: TimestampAmino;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockup_periods: PeriodAmino[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vesting_periods: PeriodAmino[];
}
export interface ClawbackVestingAccountAminoMsg {
    type: "/evmos.vesting.v1.ClawbackVestingAccount";
    value: ClawbackVestingAccountAmino;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
    funder_address: string;
    start_time: TimestampSDKType;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
}
export declare const ClawbackVestingAccount: {
    typeUrl: string;
    encode(message: ClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClawbackVestingAccount;
    fromPartial(object: Partial<ClawbackVestingAccount>): ClawbackVestingAccount;
    fromAmino(object: ClawbackVestingAccountAmino): ClawbackVestingAccount;
    toAmino(message: ClawbackVestingAccount): ClawbackVestingAccountAmino;
    fromAminoMsg(object: ClawbackVestingAccountAminoMsg): ClawbackVestingAccount;
    fromProtoMsg(message: ClawbackVestingAccountProtoMsg): ClawbackVestingAccount;
    toProto(message: ClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: ClawbackVestingAccount): ClawbackVestingAccountProtoMsg;
};
