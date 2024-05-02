import { BinaryWriter } from "../binary";
export interface Balance {
    Type: number;
    Amount: bigint;
}
export interface BalanceProtoMsg {
    typeUrl: "/balance.Balance";
    value: Uint8Array;
}
export interface BalanceAmino {
    Type?: number;
    Amount?: string;
}
export interface BalanceAminoMsg {
    type: "/balance.Balance";
    value: BalanceAmino;
}
export interface BalanceSDKType {
    Type: number;
    Amount: bigint;
}
export declare const Balance: {
    typeUrl: string;
    encode(message: Balance, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Balance;
    fromPartial(object: Partial<Balance>): Balance;
    fromAmino(object: BalanceAmino): Balance;
    toAmino(message: Balance): BalanceAmino;
    fromAminoMsg(object: BalanceAminoMsg): Balance;
    fromProtoMsg(message: BalanceProtoMsg): Balance;
    toProto(message: Balance): Uint8Array;
    toProtoMsg(message: Balance): BalanceProtoMsg;
};
