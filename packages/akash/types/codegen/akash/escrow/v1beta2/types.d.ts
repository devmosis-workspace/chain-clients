import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
export declare enum FractionalPayment_State {
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
export declare const FractionalPayment_StateSDKType: typeof FractionalPayment_State;
export declare function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State;
export declare function fractionalPayment_StateToJSON(object: FractionalPayment_State): string;
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
    balance?: DecCoin;
    /** total coins spent by this account */
    transferred?: DecCoin;
    /** block height at which this account was last settled */
    settledAt: Long;
    /**
     * bech32 encoded account address of the depositor.
     * If depositor is same as the owner, then any incoming coins are added to the Balance.
     * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
     */
    depositor: string;
    /**
     * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
     * If there are any funds, they should be spent before spending the Balance.
     */
    funds?: DecCoin;
}
/** Account stores state for an escrow account */
export interface AccountSDKType {
    id?: AccountIDSDKType;
    owner: string;
    state: Account_State;
    balance?: DecCoinSDKType;
    transferred?: DecCoinSDKType;
    settled_at: Long;
    depositor: string;
    funds?: DecCoinSDKType;
}
/** Payment stores state for a payment */
export interface FractionalPayment {
    accountId?: AccountID;
    paymentId: string;
    owner: string;
    state: FractionalPayment_State;
    rate?: DecCoin;
    balance?: DecCoin;
    withdrawn?: Coin;
}
/** Payment stores state for a payment */
export interface FractionalPaymentSDKType {
    account_id?: AccountIDSDKType;
    payment_id: string;
    owner: string;
    state: FractionalPayment_State;
    rate?: DecCoinSDKType;
    balance?: DecCoinSDKType;
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
export declare const FractionalPayment: {
    encode(message: FractionalPayment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FractionalPayment;
    fromPartial(object: Partial<FractionalPayment>): FractionalPayment;
};
