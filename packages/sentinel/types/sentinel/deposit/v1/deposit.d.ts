import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Deposit {
    address: string;
    coins: Coin[];
}
export interface DepositProtoMsg {
    typeUrl: "/sentinel.deposit.v1.Deposit";
    value: Uint8Array;
}
export interface DepositAmino {
    address?: string;
    coins?: CoinAmino[];
}
export interface DepositAminoMsg {
    type: "/sentinel.deposit.v1.Deposit";
    value: DepositAmino;
}
export interface DepositSDKType {
    address: string;
    coins: CoinSDKType[];
}
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
