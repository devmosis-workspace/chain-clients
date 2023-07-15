import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    /** Address of the account providing the funds, which must also sign the request. */
    fromAddress: string;
    /** Address of the vesting account to create. */
    toAddress: string;
    /** Amount to transfer to the new account. */
    amount: Coin[];
    /** End time of the vesting duration. */
    endTime: Long;
    /**
     * If true, creates a DelayedVestingAccount,
     * otherwise creates a ContinuousVestingAccount.
     */
    delayed: boolean;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: Long;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the MsgCreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
/** MsgCreateVestingAccountResponse defines the MsgCreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
    /** Address of the account providing the funds, which must also sign the request. */
    fromAddress: string;
    /** Address of the account to receive the funds. */
    toAddress: string;
    /** Start time of the vesting. Periods start relative to this time. */
    startTime: Long;
    /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
    vestingPeriods: Period[];
    /**
     * If true, merge this new grant into an existing PeriodicVestingAccount,
     * or create it if it does not exist. If false, creates a new account,
     * or fails if an account already exists
     */
    merge: boolean;
}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: Long;
    vesting_periods: PeriodSDKType[];
    merge: boolean;
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the MsgCreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the MsgCreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseSDKType {
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccount {
    /** Address of the account providing the funds, which must also sign the request. */
    fromAddress: string;
    /** Address of the account to receive the funds. */
    toAddress: string;
    /** Start time of the vesting. Periods start relative to this time. */
    startTime: Long;
    /** Unlocking events as a sequence of durations and amounts, starting relative to start_time. */
    lockupPeriods: Period[];
    /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
    vestingPeriods: Period[];
    /**
     * If true, merge this new grant into an existing ClawbackVestingAccount,
     * or create it if it does not exist. If false, creates a new account.
     * New grants to an existing account must be from the same from_address.
     */
    merge: boolean;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: Long;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
    merge: boolean;
}
/** MsgCreateClawbackVestingAccountResponse defines the MsgCreateClawbackVestingAccount response type. */
export interface MsgCreateClawbackVestingAccountResponse {
}
/** MsgCreateClawbackVestingAccountResponse defines the MsgCreateClawbackVestingAccount response type. */
export interface MsgCreateClawbackVestingAccountResponseSDKType {
}
/** MsgClawback defines a message that removes unvested tokens from a ClawbackVestingAccount. */
export interface MsgClawback {
    /** funder_address is the address which funded the account */
    funderAddress: string;
    /** address is the address of the ClawbackVestingAccount to claw back from. */
    address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred.
     * If empty, the tokens will be transferred back to the original funder of the account.
     */
    destAddress: string;
}
/** MsgClawback defines a message that removes unvested tokens from a ClawbackVestingAccount. */
export interface MsgClawbackSDKType {
    funder_address: string;
    address: string;
    dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    encode(message: MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateVestingAccount;
    fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
};
export declare const MsgCreateVestingAccountResponse: {
    encode(_: MsgCreateVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
};
export declare const MsgCreatePeriodicVestingAccount: {
    encode(message: MsgCreatePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreatePeriodicVestingAccount;
    fromPartial(object: Partial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount;
};
export declare const MsgCreatePeriodicVestingAccountResponse: {
    encode(_: MsgCreatePeriodicVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse;
    fromPartial(_: Partial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse;
};
export declare const MsgCreateClawbackVestingAccount: {
    encode(message: MsgCreateClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    fromPartial(object: Partial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount;
};
export declare const MsgCreateClawbackVestingAccountResponse: {
    encode(_: MsgCreateClawbackVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateClawbackVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse;
};
export declare const MsgClawback: {
    encode(message: MsgClawback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClawback;
    fromPartial(object: Partial<MsgClawback>): MsgClawback;
};
export declare const MsgClawbackResponse: {
    encode(_: MsgClawbackResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClawbackResponse;
    fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse;
};
