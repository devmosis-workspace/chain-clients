import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodSDKType } from "./vesting";
import { BinaryWriter } from "../../../binary";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    endTime: bigint;
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
    from_address: string;
    to_address: string;
    amount: CoinAmino[];
    end_time: string;
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
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccount {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    fromAddress: string;
    /** to_address specifies the account to receive the funds */
    toAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: bigint;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
    /**
     * merge specifies a creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
     */
    merge: boolean;
}
export interface MsgCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount";
    value: Uint8Array;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountAmino {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    from_address: string;
    /** to_address specifies the account to receive the funds */
    to_address: string;
    /** start_time defines the time at which the vesting period begins */
    start_time: string;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockup_periods: PeriodAmino[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vesting_periods: PeriodAmino[];
    /**
     * merge specifies a creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
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
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {
}
export interface MsgCreateClawbackVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseAmino {
}
export interface MsgCreateClawbackVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateClawbackVestingAccountResponse";
    value: MsgCreateClawbackVestingAccountResponseAmino;
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
    /** address is the address of the ClawbackVestingAccount to claw back from. */
    address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    destAddress: string;
}
export interface MsgClawbackProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgClawback";
    value: Uint8Array;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackAmino {
    /** funder_address is the address which funded the account */
    funder_address: string;
    /** address is the address of the ClawbackVestingAccount to claw back from. */
    address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    dest_address: string;
}
export interface MsgClawbackAminoMsg {
    type: "cosmos-sdk/MsgClawback";
    value: MsgClawbackAmino;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
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
