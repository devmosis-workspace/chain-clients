import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDP {
    sender: string;
    collateral: Coin;
    principal: Coin;
    collateralType: string;
}
export interface MsgCreateCDPProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP";
    value: Uint8Array;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPAmino {
    sender?: string;
    collateral?: CoinAmino;
    principal?: CoinAmino;
    collateral_type?: string;
}
export interface MsgCreateCDPAminoMsg {
    type: "/kava.cdp.v1beta1.MsgCreateCDP";
    value: MsgCreateCDPAmino;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPSDKType {
    sender: string;
    collateral: CoinSDKType;
    principal: CoinSDKType;
    collateral_type: string;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponse {
    cdpId: bigint;
}
export interface MsgCreateCDPResponseProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgCreateCDPResponse";
    value: Uint8Array;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseAmino {
    cdp_id?: string;
}
export interface MsgCreateCDPResponseAminoMsg {
    type: "/kava.cdp.v1beta1.MsgCreateCDPResponse";
    value: MsgCreateCDPResponseAmino;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseSDKType {
    cdp_id: bigint;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDeposit {
    depositor: string;
    owner: string;
    collateral: Coin;
    collateralType: string;
}
export interface MsgDepositProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositAmino {
    depositor?: string;
    owner?: string;
    collateral?: CoinAmino;
    collateral_type?: string;
}
export interface MsgDepositAminoMsg {
    type: "/kava.cdp.v1beta1.MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositSDKType {
    depositor: string;
    owner: string;
    collateral: CoinSDKType;
    collateral_type: string;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/kava.cdp.v1beta1.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdraw {
    depositor: string;
    owner: string;
    collateral: Coin;
    collateralType: string;
}
export interface MsgWithdrawProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgWithdraw";
    value: Uint8Array;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawAmino {
    depositor?: string;
    owner?: string;
    collateral?: CoinAmino;
    collateral_type?: string;
}
export interface MsgWithdrawAminoMsg {
    type: "/kava.cdp.v1beta1.MsgWithdraw";
    value: MsgWithdrawAmino;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawSDKType {
    depositor: string;
    owner: string;
    collateral: CoinSDKType;
    collateral_type: string;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/kava.cdp.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebt {
    sender: string;
    collateralType: string;
    principal: Coin;
}
export interface MsgDrawDebtProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt";
    value: Uint8Array;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtAmino {
    sender?: string;
    collateral_type?: string;
    principal?: CoinAmino;
}
export interface MsgDrawDebtAminoMsg {
    type: "/kava.cdp.v1beta1.MsgDrawDebt";
    value: MsgDrawDebtAmino;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtSDKType {
    sender: string;
    collateral_type: string;
    principal: CoinSDKType;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponse {
}
export interface MsgDrawDebtResponseProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgDrawDebtResponse";
    value: Uint8Array;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseAmino {
}
export interface MsgDrawDebtResponseAminoMsg {
    type: "/kava.cdp.v1beta1.MsgDrawDebtResponse";
    value: MsgDrawDebtResponseAmino;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseSDKType {
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebt {
    sender: string;
    collateralType: string;
    payment: Coin;
}
export interface MsgRepayDebtProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt";
    value: Uint8Array;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtAmino {
    sender?: string;
    collateral_type?: string;
    payment?: CoinAmino;
}
export interface MsgRepayDebtAminoMsg {
    type: "/kava.cdp.v1beta1.MsgRepayDebt";
    value: MsgRepayDebtAmino;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtSDKType {
    sender: string;
    collateral_type: string;
    payment: CoinSDKType;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponse {
}
export interface MsgRepayDebtResponseProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgRepayDebtResponse";
    value: Uint8Array;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponseAmino {
}
export interface MsgRepayDebtResponseAminoMsg {
    type: "/kava.cdp.v1beta1.MsgRepayDebtResponse";
    value: MsgRepayDebtResponseAmino;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponseSDKType {
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidate {
    keeper: string;
    borrower: string;
    collateralType: string;
}
export interface MsgLiquidateProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgLiquidate";
    value: Uint8Array;
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidateAmino {
    keeper?: string;
    borrower?: string;
    collateral_type?: string;
}
export interface MsgLiquidateAminoMsg {
    type: "/kava.cdp.v1beta1.MsgLiquidate";
    value: MsgLiquidateAmino;
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidateSDKType {
    keeper: string;
    borrower: string;
    collateral_type: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
}
export interface MsgLiquidateResponseProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.MsgLiquidateResponse";
    value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {
}
export interface MsgLiquidateResponseAminoMsg {
    type: "/kava.cdp.v1beta1.MsgLiquidateResponse";
    value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
}
export declare const MsgCreateCDP: {
    typeUrl: string;
    encode(message: MsgCreateCDP, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateCDP;
    fromPartial(object: Partial<MsgCreateCDP>): MsgCreateCDP;
    fromAmino(object: MsgCreateCDPAmino): MsgCreateCDP;
    toAmino(message: MsgCreateCDP): MsgCreateCDPAmino;
    fromAminoMsg(object: MsgCreateCDPAminoMsg): MsgCreateCDP;
    fromProtoMsg(message: MsgCreateCDPProtoMsg): MsgCreateCDP;
    toProto(message: MsgCreateCDP): Uint8Array;
    toProtoMsg(message: MsgCreateCDP): MsgCreateCDPProtoMsg;
};
export declare const MsgCreateCDPResponse: {
    typeUrl: string;
    encode(message: MsgCreateCDPResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateCDPResponse;
    fromPartial(object: Partial<MsgCreateCDPResponse>): MsgCreateCDPResponse;
    fromAmino(object: MsgCreateCDPResponseAmino): MsgCreateCDPResponse;
    toAmino(message: MsgCreateCDPResponse): MsgCreateCDPResponseAmino;
    fromAminoMsg(object: MsgCreateCDPResponseAminoMsg): MsgCreateCDPResponse;
    fromProtoMsg(message: MsgCreateCDPResponseProtoMsg): MsgCreateCDPResponse;
    toProto(message: MsgCreateCDPResponse): Uint8Array;
    toProtoMsg(message: MsgCreateCDPResponse): MsgCreateCDPResponseProtoMsg;
};
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
export declare const MsgDrawDebt: {
    typeUrl: string;
    encode(message: MsgDrawDebt, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDrawDebt;
    fromPartial(object: Partial<MsgDrawDebt>): MsgDrawDebt;
    fromAmino(object: MsgDrawDebtAmino): MsgDrawDebt;
    toAmino(message: MsgDrawDebt): MsgDrawDebtAmino;
    fromAminoMsg(object: MsgDrawDebtAminoMsg): MsgDrawDebt;
    fromProtoMsg(message: MsgDrawDebtProtoMsg): MsgDrawDebt;
    toProto(message: MsgDrawDebt): Uint8Array;
    toProtoMsg(message: MsgDrawDebt): MsgDrawDebtProtoMsg;
};
export declare const MsgDrawDebtResponse: {
    typeUrl: string;
    encode(_: MsgDrawDebtResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDrawDebtResponse;
    fromPartial(_: Partial<MsgDrawDebtResponse>): MsgDrawDebtResponse;
    fromAmino(_: MsgDrawDebtResponseAmino): MsgDrawDebtResponse;
    toAmino(_: MsgDrawDebtResponse): MsgDrawDebtResponseAmino;
    fromAminoMsg(object: MsgDrawDebtResponseAminoMsg): MsgDrawDebtResponse;
    fromProtoMsg(message: MsgDrawDebtResponseProtoMsg): MsgDrawDebtResponse;
    toProto(message: MsgDrawDebtResponse): Uint8Array;
    toProtoMsg(message: MsgDrawDebtResponse): MsgDrawDebtResponseProtoMsg;
};
export declare const MsgRepayDebt: {
    typeUrl: string;
    encode(message: MsgRepayDebt, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRepayDebt;
    fromPartial(object: Partial<MsgRepayDebt>): MsgRepayDebt;
    fromAmino(object: MsgRepayDebtAmino): MsgRepayDebt;
    toAmino(message: MsgRepayDebt): MsgRepayDebtAmino;
    fromAminoMsg(object: MsgRepayDebtAminoMsg): MsgRepayDebt;
    fromProtoMsg(message: MsgRepayDebtProtoMsg): MsgRepayDebt;
    toProto(message: MsgRepayDebt): Uint8Array;
    toProtoMsg(message: MsgRepayDebt): MsgRepayDebtProtoMsg;
};
export declare const MsgRepayDebtResponse: {
    typeUrl: string;
    encode(_: MsgRepayDebtResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRepayDebtResponse;
    fromPartial(_: Partial<MsgRepayDebtResponse>): MsgRepayDebtResponse;
    fromAmino(_: MsgRepayDebtResponseAmino): MsgRepayDebtResponse;
    toAmino(_: MsgRepayDebtResponse): MsgRepayDebtResponseAmino;
    fromAminoMsg(object: MsgRepayDebtResponseAminoMsg): MsgRepayDebtResponse;
    fromProtoMsg(message: MsgRepayDebtResponseProtoMsg): MsgRepayDebtResponse;
    toProto(message: MsgRepayDebtResponse): Uint8Array;
    toProtoMsg(message: MsgRepayDebtResponse): MsgRepayDebtResponseProtoMsg;
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
