import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
export declare const FractionalPayment_StateAmino: typeof FractionalPayment_State;
export declare function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State;
export declare function fractionalPayment_StateToJSON(object: FractionalPayment_State): string;
/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}
export interface AccountIDProtoMsg {
    typeUrl: "/akash.escrow.v1beta2.AccountID";
    value: Uint8Array;
}
/** AccountID is the account identifier */
export interface AccountIDAmino {
    scope: string;
    xid: string;
}
export interface AccountIDAminoMsg {
    type: "/akash.escrow.v1beta2.AccountID";
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
    balance: DecCoin;
    /** total coins spent by this account */
    transferred: DecCoin;
    /** block height at which this account was last settled */
    settledAt: bigint;
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
    funds: DecCoin;
}
export interface AccountProtoMsg {
    typeUrl: "/akash.escrow.v1beta2.Account";
    value: Uint8Array;
}
/** Account stores state for an escrow account */
export interface AccountAmino {
    /** unique identifier for this escrow account */
    id?: AccountIDAmino;
    /** bech32 encoded account address of the owner of this escrow account */
    owner: string;
    /** current state of this escrow account */
    state: Account_State;
    /** unspent coins received from the owner's wallet */
    balance?: DecCoinAmino;
    /** total coins spent by this account */
    transferred?: DecCoinAmino;
    /** block height at which this account was last settled */
    settled_at: string;
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
    funds?: DecCoinAmino;
}
export interface AccountAminoMsg {
    type: "/akash.escrow.v1beta2.Account";
    value: AccountAmino;
}
/** Account stores state for an escrow account */
export interface AccountSDKType {
    id: AccountIDSDKType;
    owner: string;
    state: Account_State;
    balance: DecCoinSDKType;
    transferred: DecCoinSDKType;
    settled_at: bigint;
    depositor: string;
    funds: DecCoinSDKType;
}
/** Payment stores state for a payment */
export interface FractionalPayment {
    accountId: AccountID;
    paymentId: string;
    owner: string;
    state: FractionalPayment_State;
    rate: DecCoin;
    balance: DecCoin;
    withdrawn: Coin;
}
export interface FractionalPaymentProtoMsg {
    typeUrl: "/akash.escrow.v1beta2.FractionalPayment";
    value: Uint8Array;
}
/** Payment stores state for a payment */
export interface FractionalPaymentAmino {
    account_id?: AccountIDAmino;
    payment_id: string;
    owner: string;
    state: FractionalPayment_State;
    rate?: DecCoinAmino;
    balance?: DecCoinAmino;
    withdrawn?: CoinAmino;
}
export interface FractionalPaymentAminoMsg {
    type: "/akash.escrow.v1beta2.FractionalPayment";
    value: FractionalPaymentAmino;
}
/** Payment stores state for a payment */
export interface FractionalPaymentSDKType {
    account_id: AccountIDSDKType;
    payment_id: string;
    owner: string;
    state: FractionalPayment_State;
    rate: DecCoinSDKType;
    balance: DecCoinSDKType;
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
export declare const FractionalPayment: {
    typeUrl: string;
    encode(message: FractionalPayment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FractionalPayment;
    fromPartial(object: Partial<FractionalPayment>): FractionalPayment;
    fromAmino(object: FractionalPaymentAmino): FractionalPayment;
    toAmino(message: FractionalPayment): FractionalPaymentAmino;
    fromAminoMsg(object: FractionalPaymentAminoMsg): FractionalPayment;
    fromProtoMsg(message: FractionalPaymentProtoMsg): FractionalPayment;
    toProto(message: FractionalPayment): Uint8Array;
    toProtoMsg(message: FractionalPayment): FractionalPaymentProtoMsg;
};
