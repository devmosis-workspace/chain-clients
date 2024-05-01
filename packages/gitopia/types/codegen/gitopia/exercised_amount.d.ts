import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
export interface ExercisedAmount {
    address: string;
    amount: Coin;
}
export interface ExercisedAmountProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.ExercisedAmount";
    value: Uint8Array;
}
export interface ExercisedAmountAmino {
    address?: string;
    amount?: CoinAmino;
}
export interface ExercisedAmountAminoMsg {
    type: "/gitopia.gitopia.gitopia.ExercisedAmount";
    value: ExercisedAmountAmino;
}
export interface ExercisedAmountSDKType {
    address: string;
    amount: CoinSDKType;
}
export declare const ExercisedAmount: {
    typeUrl: string;
    encode(message: ExercisedAmount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExercisedAmount;
    fromPartial(object: Partial<ExercisedAmount>): ExercisedAmount;
    fromAmino(object: ExercisedAmountAmino): ExercisedAmount;
    toAmino(message: ExercisedAmount): ExercisedAmountAmino;
    fromAminoMsg(object: ExercisedAmountAminoMsg): ExercisedAmount;
    fromProtoMsg(message: ExercisedAmountProtoMsg): ExercisedAmount;
    toProto(message: ExercisedAmount): Uint8Array;
    toProtoMsg(message: ExercisedAmount): ExercisedAmountProtoMsg;
};
