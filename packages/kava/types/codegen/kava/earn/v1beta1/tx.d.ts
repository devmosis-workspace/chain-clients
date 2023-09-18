import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { StrategyType } from "./strategy";
import { VaultShare, VaultShareAmino, VaultShareSDKType } from "./vault";
import { BinaryWriter } from "../../../binary";
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDeposit {
    /** depositor represents the address to deposit funds from */
    depositor: string;
    /**
     * Amount represents the token to deposit. The vault corresponds to the denom
     * of the amount coin.
     */
    amount: Coin;
    /** Strategy is the vault strategy to use. */
    strategy: StrategyType;
}
export interface MsgDepositProtoMsg {
    typeUrl: "/kava.earn.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDepositAmino {
    /** depositor represents the address to deposit funds from */
    depositor: string;
    /**
     * Amount represents the token to deposit. The vault corresponds to the denom
     * of the amount coin.
     */
    amount?: CoinAmino;
    /** Strategy is the vault strategy to use. */
    strategy: StrategyType;
}
export interface MsgDepositAminoMsg {
    type: "/kava.earn.v1beta1.MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDepositSDKType {
    depositor: string;
    amount: CoinSDKType;
    strategy: StrategyType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
    shares: VaultShare;
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
    shares?: VaultShareAmino;
}
export interface MsgDepositResponseAminoMsg {
    type: "/kava.earn.v1beta1.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
    shares: VaultShareSDKType;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdraw {
    /** from represents the address we are withdrawing for */
    from: string;
    /**
     * Amount represents the token to withdraw. The vault corresponds to the denom
     * of the amount coin.
     */
    amount: Coin;
    /** Strategy is the vault strategy to use. */
    strategy: StrategyType;
}
export interface MsgWithdrawProtoMsg {
    typeUrl: "/kava.earn.v1beta1.MsgWithdraw";
    value: Uint8Array;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdrawAmino {
    /** from represents the address we are withdrawing for */
    from: string;
    /**
     * Amount represents the token to withdraw. The vault corresponds to the denom
     * of the amount coin.
     */
    amount?: CoinAmino;
    /** Strategy is the vault strategy to use. */
    strategy: StrategyType;
}
export interface MsgWithdrawAminoMsg {
    type: "/kava.earn.v1beta1.MsgWithdraw";
    value: MsgWithdrawAmino;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdrawSDKType {
    from: string;
    amount: CoinSDKType;
    strategy: StrategyType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
    shares: VaultShare;
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
    shares?: VaultShareAmino;
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/kava.earn.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
    shares: VaultShareSDKType;
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
    encode(message: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositResponse;
    fromPartial(object: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(object: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(message: MsgDepositResponse): MsgDepositResponseAmino;
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
    encode(message: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawResponse;
    fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(object: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(message: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
