import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDeposit {
    depositor: string;
    amount: Coin[];
}
export interface MsgDepositProtoMsg {
    typeUrl: "/kava.savings.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDepositAmino {
    depositor: string;
    amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
    type: "/kava.savings.v1beta1.MsgDeposit";
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
    typeUrl: "/kava.savings.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/kava.savings.v1beta1.MsgDepositResponse";
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
    typeUrl: "/kava.savings.v1beta1.MsgWithdraw";
    value: Uint8Array;
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdrawAmino {
    depositor: string;
    amount: CoinAmino[];
}
export interface MsgWithdrawAminoMsg {
    type: "/kava.savings.v1beta1.MsgWithdraw";
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
    typeUrl: "/kava.savings.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/kava.savings.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
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
