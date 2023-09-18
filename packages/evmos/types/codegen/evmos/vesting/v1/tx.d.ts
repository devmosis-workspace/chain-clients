import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodAmino, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BinaryWriter } from "../../../binary";
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
    startTime: Timestamp;
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
export interface MsgCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountAmino {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    from_address: string;
    /** to_address specifies the account to receive the funds */
    to_address: string;
    /** start_time defines the time at which the vesting period begins */
    start_time?: TimestampAmino;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockup_periods: PeriodAmino[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vesting_periods: PeriodAmino[];
    /**
     * merge specifies a the creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
     */
    merge: boolean;
}
export interface MsgCreateClawbackVestingAccountAminoMsg {
    type: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
    value: MsgCreateClawbackVestingAccountAmino;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: TimestampSDKType;
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
    typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseAmino {
}
export interface MsgCreateClawbackVestingAccountResponseAminoMsg {
    type: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse";
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
export interface MsgClawbackProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgClawback";
    value: Uint8Array;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackAmino {
    /** funder_address is the address which funded the account */
    funder_address: string;
    /**
     * account_address is the address of the ClawbackVestingAccount to claw back
     * from.
     */
    account_address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    dest_address: string;
}
export interface MsgClawbackAminoMsg {
    type: "/evmos.vesting.v1.MsgClawback";
    value: MsgClawbackAmino;
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
export interface MsgClawbackResponseProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgClawbackResponse";
    value: Uint8Array;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseAmino {
}
export interface MsgClawbackResponseAminoMsg {
    type: "/evmos.vesting.v1.MsgClawbackResponse";
    value: MsgClawbackResponseAmino;
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
export interface MsgUpdateVestingFunderProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder";
    value: Uint8Array;
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunderAmino {
    /** funder_address is the current funder address of the ClawbackVestingAccount */
    funder_address: string;
    /** new_funder_address is the new address to replace the existing funder_address */
    new_funder_address: string;
    /** vesting_address is the address of the ClawbackVestingAccount being updated */
    vesting_address: string;
}
export interface MsgUpdateVestingFunderAminoMsg {
    type: "/evmos.vesting.v1.MsgUpdateVestingFunder";
    value: MsgUpdateVestingFunderAmino;
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
export interface MsgUpdateVestingFunderResponseProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunderResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponseAmino {
}
export interface MsgUpdateVestingFunderResponseAminoMsg {
    type: "/evmos.vesting.v1.MsgUpdateVestingFunderResponse";
    value: MsgUpdateVestingFunderResponseAmino;
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
export interface MsgConvertVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount";
    value: Uint8Array;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccountAmino {
    /** vesting_address is the address of the vesting account to convert */
    vesting_address: string;
}
export interface MsgConvertVestingAccountAminoMsg {
    type: "/evmos.vesting.v1.MsgConvertVestingAccount";
    value: MsgConvertVestingAccountAmino;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccountSDKType {
    vesting_address: string;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponse {
}
export interface MsgConvertVestingAccountResponseProtoMsg {
    typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccountResponse";
    value: Uint8Array;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseAmino {
}
export interface MsgConvertVestingAccountResponseAminoMsg {
    type: "/evmos.vesting.v1.MsgConvertVestingAccountResponse";
    value: MsgConvertVestingAccountResponseAmino;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseSDKType {
}
export declare const MsgCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    fromPartial(object: Partial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount;
    fromAmino(object: MsgCreateClawbackVestingAccountAmino): MsgCreateClawbackVestingAccount;
    toAmino(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountAminoMsg): MsgCreateClawbackVestingAccount;
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
    fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse;
    toProto(message: MsgClawbackResponse): Uint8Array;
    toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg;
};
export declare const MsgUpdateVestingFunder: {
    typeUrl: string;
    encode(message: MsgUpdateVestingFunder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateVestingFunder;
    fromPartial(object: Partial<MsgUpdateVestingFunder>): MsgUpdateVestingFunder;
    fromAmino(object: MsgUpdateVestingFunderAmino): MsgUpdateVestingFunder;
    toAmino(message: MsgUpdateVestingFunder): MsgUpdateVestingFunderAmino;
    fromAminoMsg(object: MsgUpdateVestingFunderAminoMsg): MsgUpdateVestingFunder;
    fromProtoMsg(message: MsgUpdateVestingFunderProtoMsg): MsgUpdateVestingFunder;
    toProto(message: MsgUpdateVestingFunder): Uint8Array;
    toProtoMsg(message: MsgUpdateVestingFunder): MsgUpdateVestingFunderProtoMsg;
};
export declare const MsgUpdateVestingFunderResponse: {
    typeUrl: string;
    encode(_: MsgUpdateVestingFunderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateVestingFunderResponse;
    fromPartial(_: Partial<MsgUpdateVestingFunderResponse>): MsgUpdateVestingFunderResponse;
    fromAmino(_: MsgUpdateVestingFunderResponseAmino): MsgUpdateVestingFunderResponse;
    toAmino(_: MsgUpdateVestingFunderResponse): MsgUpdateVestingFunderResponseAmino;
    fromAminoMsg(object: MsgUpdateVestingFunderResponseAminoMsg): MsgUpdateVestingFunderResponse;
    fromProtoMsg(message: MsgUpdateVestingFunderResponseProtoMsg): MsgUpdateVestingFunderResponse;
    toProto(message: MsgUpdateVestingFunderResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateVestingFunderResponse): MsgUpdateVestingFunderResponseProtoMsg;
};
export declare const MsgConvertVestingAccount: {
    typeUrl: string;
    encode(message: MsgConvertVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertVestingAccount;
    fromPartial(object: Partial<MsgConvertVestingAccount>): MsgConvertVestingAccount;
    fromAmino(object: MsgConvertVestingAccountAmino): MsgConvertVestingAccount;
    toAmino(message: MsgConvertVestingAccount): MsgConvertVestingAccountAmino;
    fromAminoMsg(object: MsgConvertVestingAccountAminoMsg): MsgConvertVestingAccount;
    fromProtoMsg(message: MsgConvertVestingAccountProtoMsg): MsgConvertVestingAccount;
    toProto(message: MsgConvertVestingAccount): Uint8Array;
    toProtoMsg(message: MsgConvertVestingAccount): MsgConvertVestingAccountProtoMsg;
};
export declare const MsgConvertVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgConvertVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertVestingAccountResponse;
    fromPartial(_: Partial<MsgConvertVestingAccountResponse>): MsgConvertVestingAccountResponse;
    fromAmino(_: MsgConvertVestingAccountResponseAmino): MsgConvertVestingAccountResponse;
    toAmino(_: MsgConvertVestingAccountResponse): MsgConvertVestingAccountResponseAmino;
    fromAminoMsg(object: MsgConvertVestingAccountResponseAminoMsg): MsgConvertVestingAccountResponse;
    fromProtoMsg(message: MsgConvertVestingAccountResponseProtoMsg): MsgConvertVestingAccountResponse;
    toProto(message: MsgConvertVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgConvertVestingAccountResponse): MsgConvertVestingAccountResponseProtoMsg;
};
