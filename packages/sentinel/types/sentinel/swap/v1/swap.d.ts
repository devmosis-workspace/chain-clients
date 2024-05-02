import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Swap {
    txHash: Uint8Array;
    receiver: string;
    amount: Coin;
}
export interface SwapProtoMsg {
    typeUrl: "/sentinel.swap.v1.Swap";
    value: Uint8Array;
}
export interface SwapAmino {
    tx_hash?: string;
    receiver?: string;
    amount?: CoinAmino;
}
export interface SwapAminoMsg {
    type: "/sentinel.swap.v1.Swap";
    value: SwapAmino;
}
export interface SwapSDKType {
    tx_hash: Uint8Array;
    receiver: string;
    amount: CoinSDKType;
}
export declare const Swap: {
    typeUrl: string;
    encode(message: Swap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Swap;
    fromPartial(object: Partial<Swap>): Swap;
    fromAmino(object: SwapAmino): Swap;
    toAmino(message: Swap): SwapAmino;
    fromAminoMsg(object: SwapAminoMsg): Swap;
    fromProtoMsg(message: SwapProtoMsg): Swap;
    toProto(message: Swap): Uint8Array;
    toProtoMsg(message: Swap): SwapProtoMsg;
};
