import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDeposit {
    depositor: string;
    amount: Coin[];
}
export interface MsgDepositProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDepositAmino {
    depositor: string;
    amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
    type: "/kava.hard.v1beta1.MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDepositSDKType {
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/kava.hard.v1beta1.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdraw {
    depositor: string;
    amount: Coin[];
}
export interface MsgWithdrawProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgWithdraw";
    value: Uint8Array;
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdrawAmino {
    depositor: string;
    amount: CoinAmino[];
}
export interface MsgWithdrawAminoMsg {
    type: "/kava.hard.v1beta1.MsgWithdraw";
    value: MsgWithdrawAmino;
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdrawSDKType {
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/kava.hard.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrow {
    borrower: string;
    amount: Coin[];
}
export interface MsgBorrowProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgBorrow";
    value: Uint8Array;
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrowAmino {
    borrower: string;
    amount: CoinAmino[];
}
export interface MsgBorrowAminoMsg {
    type: "/kava.hard.v1beta1.MsgBorrow";
    value: MsgBorrowAmino;
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrowSDKType {
    borrower: string;
    amount: CoinSDKType[];
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {
}
export interface MsgBorrowResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgBorrowResponse";
    value: Uint8Array;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseAmino {
}
export interface MsgBorrowResponseAminoMsg {
    type: "/kava.hard.v1beta1.MsgBorrowResponse";
    value: MsgBorrowResponseAmino;
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
export interface MsgRepayProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgRepay";
    value: Uint8Array;
}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepayAmino {
    sender: string;
    owner: string;
    amount: CoinAmino[];
}
export interface MsgRepayAminoMsg {
    type: "/kava.hard.v1beta1.MsgRepay";
    value: MsgRepayAmino;
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
export interface MsgRepayResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgRepayResponse";
    value: Uint8Array;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseAmino {
}
export interface MsgRepayResponseAminoMsg {
    type: "/kava.hard.v1beta1.MsgRepayResponse";
    value: MsgRepayResponseAmino;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidate {
    keeper: string;
    borrower: string;
}
export interface MsgLiquidateProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgLiquidate";
    value: Uint8Array;
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidateAmino {
    keeper: string;
    borrower: string;
}
export interface MsgLiquidateAminoMsg {
    type: "/kava.hard.v1beta1.MsgLiquidate";
    value: MsgLiquidateAmino;
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidateSDKType {
    keeper: string;
    borrower: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
}
export interface MsgLiquidateResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MsgLiquidateResponse";
    value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {
}
export interface MsgLiquidateResponseAminoMsg {
    type: "/kava.hard.v1beta1.MsgLiquidateResponse";
    value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
}
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositResponse;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgWithdraw: {
    typeUrl: string;
    encode(message: MsgWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
    fromAmino(object: MsgWithdrawAmino): MsgWithdraw;
    toAmino(message: MsgWithdraw): MsgWithdrawAmino;
    fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw;
    fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw;
    toProto(message: MsgWithdraw): Uint8Array;
    toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg;
};
export declare const MsgWithdrawResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawResponse;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
export declare const MsgBorrow: {
    typeUrl: string;
    encode(message: MsgBorrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBorrow;
    fromPartial(object: Partial<MsgBorrow>): MsgBorrow;
    fromAmino(object: MsgBorrowAmino): MsgBorrow;
    toAmino(message: MsgBorrow): MsgBorrowAmino;
    fromAminoMsg(object: MsgBorrowAminoMsg): MsgBorrow;
    fromProtoMsg(message: MsgBorrowProtoMsg): MsgBorrow;
    toProto(message: MsgBorrow): Uint8Array;
    toProtoMsg(message: MsgBorrow): MsgBorrowProtoMsg;
};
export declare const MsgBorrowResponse: {
    typeUrl: string;
    encode(_: MsgBorrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBorrowResponse;
    fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse;
    fromAmino(_: MsgBorrowResponseAmino): MsgBorrowResponse;
    toAmino(_: MsgBorrowResponse): MsgBorrowResponseAmino;
    fromAminoMsg(object: MsgBorrowResponseAminoMsg): MsgBorrowResponse;
    fromProtoMsg(message: MsgBorrowResponseProtoMsg): MsgBorrowResponse;
    toProto(message: MsgBorrowResponse): Uint8Array;
    toProtoMsg(message: MsgBorrowResponse): MsgBorrowResponseProtoMsg;
};
export declare const MsgRepay: {
    typeUrl: string;
    encode(message: MsgRepay, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRepay;
    fromPartial(object: Partial<MsgRepay>): MsgRepay;
    fromAmino(object: MsgRepayAmino): MsgRepay;
    toAmino(message: MsgRepay): MsgRepayAmino;
    fromAminoMsg(object: MsgRepayAminoMsg): MsgRepay;
    fromProtoMsg(message: MsgRepayProtoMsg): MsgRepay;
    toProto(message: MsgRepay): Uint8Array;
    toProtoMsg(message: MsgRepay): MsgRepayProtoMsg;
};
export declare const MsgRepayResponse: {
    typeUrl: string;
    encode(_: MsgRepayResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRepayResponse;
    fromPartial(_: Partial<MsgRepayResponse>): MsgRepayResponse;
    fromAmino(_: MsgRepayResponseAmino): MsgRepayResponse;
    toAmino(_: MsgRepayResponse): MsgRepayResponseAmino;
    fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse;
    fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse;
    toProto(message: MsgRepayResponse): Uint8Array;
    toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg;
};
export declare const MsgLiquidate: {
    typeUrl: string;
    encode(message: MsgLiquidate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLiquidate;
    fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate;
    fromAmino(object: MsgLiquidateAmino): MsgLiquidate;
    toAmino(message: MsgLiquidate): MsgLiquidateAmino;
    fromAminoMsg(object: MsgLiquidateAminoMsg): MsgLiquidate;
    fromProtoMsg(message: MsgLiquidateProtoMsg): MsgLiquidate;
    toProto(message: MsgLiquidate): Uint8Array;
    toProtoMsg(message: MsgLiquidate): MsgLiquidateProtoMsg;
};
export declare const MsgLiquidateResponse: {
    typeUrl: string;
    encode(_: MsgLiquidateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLiquidateResponse;
    fromPartial(_: Partial<MsgLiquidateResponse>): MsgLiquidateResponse;
    fromAmino(_: MsgLiquidateResponseAmino): MsgLiquidateResponse;
    toAmino(_: MsgLiquidateResponse): MsgLiquidateResponseAmino;
    fromAminoMsg(object: MsgLiquidateResponseAminoMsg): MsgLiquidateResponse;
    fromProtoMsg(message: MsgLiquidateResponseProtoMsg): MsgLiquidateResponse;
    toProto(message: MsgLiquidateResponse): Uint8Array;
    toProtoMsg(message: MsgLiquidateResponse): MsgLiquidateResponseProtoMsg;
};
