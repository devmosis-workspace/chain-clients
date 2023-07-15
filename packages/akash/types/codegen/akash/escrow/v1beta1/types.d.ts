import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare function payment_StateFromJSON(object: any): Payment_State;
export declare function payment_StateToJSON(object: Payment_State): string;
/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}
/** AccountID is the account identifier */
export interface AccountIDSDKType {
    scope: string;
    xid: string;
}
/** Account stores state for an escrow account */
export interface Account {
    /** unique identifier for this escrow account */
    id?: AccountID;
    /** bech32 encoded account address of the owner of this escrow account */
    owner: string;
    /** current state of this escrow account */
    state: Account_State;
    /** unspent coins received from the owner's wallet */
    balance?: Coin;
    /** total coins spent by this account */
    transferred?: Coin;
    /** block height at which this account was last settled */
    settledAt: Long;
}
/** Account stores state for an escrow account */
export interface AccountSDKType {
    id?: AccountIDSDKType;
    owner: string;
    state: Account_State;
    balance?: CoinSDKType;
    transferred?: CoinSDKType;
    settled_at: Long;
}
/** Payment stores state for a payment */
export interface Payment {
    accountId?: AccountID;
    paymentId: string;
    owner: string;
    state: Payment_State;
    rate?: Coin;
    balance?: Coin;
    withdrawn?: Coin;
}
/** Payment stores state for a payment */
export interface PaymentSDKType {
    account_id?: AccountIDSDKType;
    payment_id: string;
    owner: string;
    state: Payment_State;
    rate?: CoinSDKType;
    balance?: CoinSDKType;
    withdrawn?: CoinSDKType;
}
export declare const AccountID: {
    encode(message: AccountID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountID;
    fromPartial(object: Partial<AccountID>): AccountID;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
};
export declare const Payment: {
    encode(message: Payment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Payment;
    fromPartial(object: Partial<Payment>): Payment;
};
