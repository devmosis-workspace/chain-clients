import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDeposit {
    depositor: string;
    amount: Coin[];
}
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDepositSDKType {
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdraw {
    depositor: string;
    amount: Coin[];
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdrawSDKType {
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrow {
    borrower: string;
    amount: Coin[];
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrowSDKType {
    borrower: string;
    amount: CoinSDKType[];
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {
}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepay {
    sender: string;
    owner: string;
    amount: Coin[];
}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepaySDKType {
    sender: string;
    owner: string;
    amount: CoinSDKType[];
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidate {
    keeper: string;
    borrower: string;
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidateSDKType {
    keeper: string;
    borrower: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDepositResponse;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawResponse;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgBorrow: {
    encode(message: MsgBorrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBorrow;
    fromPartial(object: Partial<MsgBorrow>): MsgBorrow;
};
export declare const MsgBorrowResponse: {
    encode(_: MsgBorrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBorrowResponse;
    fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse;
};
export declare const MsgRepay: {
    encode(message: MsgRepay, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRepay;
    fromPartial(object: Partial<MsgRepay>): MsgRepay;
};
export declare const MsgRepayResponse: {
    encode(_: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRepayResponse;
    fromPartial(_: Partial<MsgRepayResponse>): MsgRepayResponse;
};
export declare const MsgLiquidate: {
    encode(message: MsgLiquidate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLiquidate;
    fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate;
};
export declare const MsgLiquidateResponse: {
    encode(_: MsgLiquidateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgLiquidateResponse;
    fromPartial(_: Partial<MsgLiquidateResponse>): MsgLiquidateResponse;
};
