import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccount {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    fromAddress: string;
    /** to_address specifies the account to receive the funds */
    toAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime?: Timestamp;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
    /**
     * merge specifies a the creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
     */
    merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time?: TimestampSDKType;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
    merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseSDKType {
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
    /** funder_address is the address which funded the account */
    funderAddress: string;
    /**
     * account_address is the address of the ClawbackVestingAccount to claw back
     * from.
     */
    accountAddress: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    destAddress: string;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackSDKType {
    funder_address: string;
    account_address: string;
    dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunder {
    /** funder_address is the current funder address of the ClawbackVestingAccount */
    funderAddress: string;
    /** new_funder_address is the new address to replace the existing funder_address */
    newFunderAddress: string;
    /** vesting_address is the address of the ClawbackVestingAccount being updated */
    vestingAddress: string;
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunderSDKType {
    funder_address: string;
    new_funder_address: string;
    vesting_address: string;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponse {
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponseSDKType {
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccount {
    /** vesting_address is the address of the vesting account to convert */
    vestingAddress: string;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccountSDKType {
    vesting_address: string;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponse {
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseSDKType {
}
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
export declare const MsgUpdateVestingFunder: {
    encode(message: MsgUpdateVestingFunder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateVestingFunder;
    fromPartial(object: Partial<MsgUpdateVestingFunder>): MsgUpdateVestingFunder;
};
export declare const MsgUpdateVestingFunderResponse: {
    encode(_: MsgUpdateVestingFunderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateVestingFunderResponse;
    fromPartial(_: Partial<MsgUpdateVestingFunderResponse>): MsgUpdateVestingFunderResponse;
};
export declare const MsgConvertVestingAccount: {
    encode(message: MsgConvertVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertVestingAccount;
    fromPartial(object: Partial<MsgConvertVestingAccount>): MsgConvertVestingAccount;
};
export declare const MsgConvertVestingAccountResponse: {
    encode(_: MsgConvertVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertVestingAccountResponse;
    fromPartial(_: Partial<MsgConvertVestingAccountResponse>): MsgConvertVestingAccountResponse;
};
