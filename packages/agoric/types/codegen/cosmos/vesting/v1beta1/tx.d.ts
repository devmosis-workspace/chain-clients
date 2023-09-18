import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodSDKType } from "./vesting";
import { BinaryWriter } from "../../../binary";
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
    endTime: bigint;
    /**
     * If true, creates a DelayedVestingAccount,
     * otherwise creates a ContinuousVestingAccount.
     */
    delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    /** Address of the account providing the funds, which must also sign the request. */
    from_address: string;
    /** Address of the vesting account to create. */
    to_address: string;
    /** Amount to transfer to the new account. */
    amount: CoinAmino[];
    /** End time of the vesting duration. */
    end_time: string;
    /**
     * If true, creates a DelayedVestingAccount,
     * otherwise creates a ContinuousVestingAccount.
     */
    delayed: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: bigint;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the MsgCreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the MsgCreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
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
    startTime: bigint;
    /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
    vestingPeriods: Period[];
    /**
     * If true, merge this new grant into an existing PeriodicVestingAccount,
     * or create it if it does not exist. If false, creates a new account,
     * or fails if an account already exists
     */
    merge: boolean;
}
export interface MsgCreatePeriodicVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountAmino {
    /** Address of the account providing the funds, which must also sign the request. */
    from_address: string;
    /** Address of the account to receive the funds. */
    to_address: string;
    /** Start time of the vesting. Periods start relative to this time. */
    start_time: string;
    /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
    vesting_periods: PeriodAmino[];
    /**
     * If true, merge this new grant into an existing PeriodicVestingAccount,
     * or create it if it does not exist. If false, creates a new account,
     * or fails if an account already exists
     */
    merge: boolean;
}
export interface MsgCreatePeriodicVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
    value: MsgCreatePeriodicVestingAccountAmino;
}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: bigint;
    vesting_periods: PeriodSDKType[];
    merge: boolean;
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the MsgCreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
export interface MsgCreatePeriodicVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the MsgCreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseAmino {
}
export interface MsgCreatePeriodicVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse";
    value: MsgCreatePeriodicVestingAccountResponseAmino;
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
    startTime: bigint;
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
export interface MsgCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount";
    value: Uint8Array;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountAmino {
    /** Address of the account providing the funds, which must also sign the request. */
    from_address: string;
    /** Address of the account to receive the funds. */
    to_address: string;
    /** Start time of the vesting. Periods start relative to this time. */
    start_time: string;
    /** Unlocking events as a sequence of durations and amounts, starting relative to start_time. */
    lockup_periods: PeriodAmino[];
    /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
    vesting_periods: PeriodAmino[];
    /**
     * If true, merge this new grant into an existing ClawbackVestingAccount,
     * or create it if it does not exist. If false, creates a new account.
     * New grants to an existing account must be from the same from_address.
     */
    merge: boolean;
}
export interface MsgCreateClawbackVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateClawbackVestingAccount";
    value: MsgCreateClawbackVestingAccountAmino;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: bigint;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
    merge: boolean;
}
/** MsgCreateClawbackVestingAccountResponse defines the MsgCreateClawbackVestingAccount response type. */
export interface MsgCreateClawbackVestingAccountResponse {
}
export interface MsgCreateClawbackVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateClawbackVestingAccountResponse defines the MsgCreateClawbackVestingAccount response type. */
export interface MsgCreateClawbackVestingAccountResponseAmino {
}
export interface MsgCreateClawbackVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateClawbackVestingAccountResponse";
    value: MsgCreateClawbackVestingAccountResponseAmino;
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
export interface MsgClawbackProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgClawback";
    value: Uint8Array;
}
/** MsgClawback defines a message that removes unvested tokens from a ClawbackVestingAccount. */
export interface MsgClawbackAmino {
    /** funder_address is the address which funded the account */
    funder_address: string;
    /** address is the address of the ClawbackVestingAccount to claw back from. */
    address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred.
     * If empty, the tokens will be transferred back to the original funder of the account.
     */
    dest_address: string;
}
export interface MsgClawbackAminoMsg {
    type: "cosmos-sdk/MsgClawback";
    value: MsgClawbackAmino;
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
export interface MsgClawbackResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgClawbackResponse";
    value: Uint8Array;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseAmino {
}
export interface MsgClawbackResponseAminoMsg {
    type: "cosmos-sdk/MsgClawbackResponse";
    value: MsgClawbackResponseAmino;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateVestingAccount;
    fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
export declare const MsgCreatePeriodicVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreatePeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePeriodicVestingAccount;
    fromPartial(object: Partial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount;
    fromAmino(object: MsgCreatePeriodicVestingAccountAmino): MsgCreatePeriodicVestingAccount;
    toAmino(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAmino;
    fromAminoMsg(object: MsgCreatePeriodicVestingAccountAminoMsg): MsgCreatePeriodicVestingAccount;
    toAminoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreatePeriodicVestingAccountProtoMsg): MsgCreatePeriodicVestingAccount;
    toProto(message: MsgCreatePeriodicVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountProtoMsg;
};
export declare const MsgCreatePeriodicVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreatePeriodicVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse;
    fromPartial(_: Partial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse;
    fromAmino(_: MsgCreatePeriodicVestingAccountResponseAmino): MsgCreatePeriodicVestingAccountResponse;
    toAmino(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreatePeriodicVestingAccountResponseAminoMsg): MsgCreatePeriodicVestingAccountResponse;
    toAminoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePeriodicVestingAccountResponseProtoMsg): MsgCreatePeriodicVestingAccountResponse;
    toProto(message: MsgCreatePeriodicVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseProtoMsg;
};
export declare const MsgCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    fromPartial(object: Partial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount;
    fromAmino(object: MsgCreateClawbackVestingAccountAmino): MsgCreateClawbackVestingAccount;
    toAmino(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountAminoMsg): MsgCreateClawbackVestingAccount;
    toAminoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateClawbackVestingAccountProtoMsg): MsgCreateClawbackVestingAccount;
    toProto(message: MsgCreateClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountProtoMsg;
};
export declare const MsgCreateClawbackVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateClawbackVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateClawbackVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse;
    fromAmino(_: MsgCreateClawbackVestingAccountResponseAmino): MsgCreateClawbackVestingAccountResponse;
    toAmino(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountResponseAminoMsg): MsgCreateClawbackVestingAccountResponse;
    toAminoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateClawbackVestingAccountResponseProtoMsg): MsgCreateClawbackVestingAccountResponse;
    toProto(message: MsgCreateClawbackVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseProtoMsg;
};
export declare const MsgClawback: {
    typeUrl: string;
    encode(message: MsgClawback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClawback;
    fromPartial(object: Partial<MsgClawback>): MsgClawback;
    fromAmino(object: MsgClawbackAmino): MsgClawback;
    toAmino(message: MsgClawback): MsgClawbackAmino;
    fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback;
    toAminoMsg(message: MsgClawback): MsgClawbackAminoMsg;
    fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback;
    toProto(message: MsgClawback): Uint8Array;
    toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg;
};
export declare const MsgClawbackResponse: {
    typeUrl: string;
    encode(_: MsgClawbackResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClawbackResponse;
    fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse;
    fromAmino(_: MsgClawbackResponseAmino): MsgClawbackResponse;
    toAmino(_: MsgClawbackResponse): MsgClawbackResponseAmino;
    fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse;
    toAminoMsg(message: MsgClawbackResponse): MsgClawbackResponseAminoMsg;
    fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse;
    toProto(message: MsgClawbackResponse): Uint8Array;
    toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg;
};
