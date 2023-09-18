import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the savings module. */
export interface Params {
    supportedDenoms: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.savings.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the savings module. */
export interface ParamsAmino {
    supported_denoms: string[];
}
export interface ParamsAminoMsg {
    type: "/kava.savings.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the savings module. */
export interface ParamsSDKType {
    supported_denoms: string[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface Deposit {
    depositor: string;
    amount: Coin[];
}
export interface DepositProtoMsg {
    typeUrl: "/kava.savings.v1beta1.Deposit";
    value: Uint8Array;
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface DepositAmino {
    depositor: string;
    amount: CoinAmino[];
}
export interface DepositAminoMsg {
    type: "/kava.savings.v1beta1.Deposit";
    value: DepositAmino;
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface DepositSDKType {
    depositor: string;
    amount: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Deposit: {
    typeUrl: string;
    encode(message: Deposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Deposit;
    fromPartial(object: Partial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
