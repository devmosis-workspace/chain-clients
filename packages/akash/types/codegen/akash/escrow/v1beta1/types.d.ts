import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** State stores state for an escrow account */
export declare enum Account_State {
    /** invalid - AccountStateInvalid is an invalid state */
    invalid = 0,
    /** open - AccountOpen is the state when an account is open */
    open = 1,
    /** closed - AccountClosed is the state when an account is closed */
    closed = 2,
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare const Account_StateSDKType: typeof Account_State;
export declare const Account_StateAmino: typeof Account_State;
export declare function account_StateFromJSON(object: any): Account_State;
export declare function account_StateToJSON(object: Account_State): string;
/** Payment State */
export declare enum Payment_State {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    invalid = 0,
    /** open - PaymentStateOpen is the state when the payment is open */
    open = 1,
    /** closed - PaymentStateClosed is the state when the payment is closed */
    closed = 2,
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare const Payment_StateSDKType: typeof Payment_State;
export declare const Payment_StateAmino: typeof Payment_State;
export declare function payment_StateFromJSON(object: any): Payment_State;
export declare function payment_StateToJSON(object: Payment_State): string;
/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}
export interface AccountIDProtoMsg {
    typeUrl: "/akash.escrow.v1beta1.AccountID";
    value: Uint8Array;
}
/** AccountID is the account identifier */
export interface AccountIDAmino {
    scope?: string;
    xid?: string;
}
export interface AccountIDAminoMsg {
    type: "/akash.escrow.v1beta1.AccountID";
    value: AccountIDAmino;
}
/** AccountID is the account identifier */
export interface AccountIDSDKType {
    scope: string;
    xid: string;
}
/** Account stores state for an escrow account */
export interface Account {
    /** unique identifier for this escrow account */
    id: AccountID;
    /** bech32 encoded account address of the owner of this escrow account */
    owner: string;
    /** current state of this escrow account */
    state: Account_State;
    /** unspent coins received from the owner's wallet */
    balance: Coin;
    /** total coins spent by this account */
    transferred: Coin;
    /** block height at which this account was last settled */
    settledAt: bigint;
}
export interface AccountProtoMsg {
    typeUrl: "/akash.escrow.v1beta1.Account";
    value: Uint8Array;
}
/** Account stores state for an escrow account */
export interface AccountAmino {
    /** unique identifier for this escrow account */
    id?: AccountIDAmino;
    /** bech32 encoded account address of the owner of this escrow account */
    owner?: string;
    /** current state of this escrow account */
    state?: Account_State;
    /** unspent coins received from the owner's wallet */
    balance?: CoinAmino;
    /** total coins spent by this account */
    transferred?: CoinAmino;
    /** block height at which this account was last settled */
    settled_at?: string;
}
export interface AccountAminoMsg {
    type: "/akash.escrow.v1beta1.Account";
    value: AccountAmino;
}
/** Account stores state for an escrow account */
export interface AccountSDKType {
    id: AccountIDSDKType;
    owner: string;
    state: Account_State;
    balance: CoinSDKType;
    transferred: CoinSDKType;
    settled_at: bigint;
}
/** Payment stores state for a payment */
export interface Payment {
    accountId: AccountID;
    paymentId: string;
    owner: string;
    state: Payment_State;
    rate: Coin;
    balance: Coin;
    withdrawn: Coin;
}
export interface PaymentProtoMsg {
    typeUrl: "/akash.escrow.v1beta1.Payment";
    value: Uint8Array;
}
/** Payment stores state for a payment */
export interface PaymentAmino {
    account_id?: AccountIDAmino;
    payment_id?: string;
    owner?: string;
    state?: Payment_State;
    rate?: CoinAmino;
    balance?: CoinAmino;
    withdrawn?: CoinAmino;
}
export interface PaymentAminoMsg {
    type: "/akash.escrow.v1beta1.Payment";
    value: PaymentAmino;
}
/** Payment stores state for a payment */
export interface PaymentSDKType {
    account_id: AccountIDSDKType;
    payment_id: string;
    owner: string;
    state: Payment_State;
    rate: CoinSDKType;
    balance: CoinSDKType;
    withdrawn: CoinSDKType;
}
export declare const AccountID: {
    typeUrl: string;
    encode(message: AccountID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountID;
    fromPartial(object: Partial<AccountID>): AccountID;
    fromAmino(object: AccountIDAmino): AccountID;
    toAmino(message: AccountID): AccountIDAmino;
    fromAminoMsg(object: AccountIDAminoMsg): AccountID;
    fromProtoMsg(message: AccountIDProtoMsg): AccountID;
    toProto(message: AccountID): Uint8Array;
    toProtoMsg(message: AccountID): AccountIDProtoMsg;
};
export declare const Account: {
    typeUrl: string;
    encode(message: Account, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
    fromAmino(object: AccountAmino): Account;
    toAmino(message: Account): AccountAmino;
    fromAminoMsg(object: AccountAminoMsg): Account;
    fromProtoMsg(message: AccountProtoMsg): Account;
    toProto(message: Account): Uint8Array;
    toProtoMsg(message: Account): AccountProtoMsg;
};
export declare const Payment: {
    typeUrl: string;
    encode(message: Payment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Payment;
    fromPartial(object: Partial<Payment>): Payment;
    fromAmino(object: PaymentAmino): Payment;
    toAmino(message: Payment): PaymentAmino;
    fromAminoMsg(object: PaymentAminoMsg): Payment;
    fromProtoMsg(message: PaymentProtoMsg): Payment;
    toProto(message: Payment): Uint8Array;
    toProtoMsg(message: Payment): PaymentProtoMsg;
};
