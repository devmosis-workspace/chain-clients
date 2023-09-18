import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
export interface Minters {
    address: string;
    allowance: Coin;
}
export interface MintersProtoMsg {
    typeUrl: "/noble.tokenfactory.Minters";
    value: Uint8Array;
}
export interface MintersAmino {
    address: string;
    allowance?: CoinAmino;
}
export interface MintersAminoMsg {
    type: "/noble.tokenfactory.Minters";
    value: MintersAmino;
}
export interface MintersSDKType {
    address: string;
    allowance: CoinSDKType;
}
export declare const Minters: {
    typeUrl: string;
    encode(message: Minters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Minters;
    fromPartial(object: Partial<Minters>): Minters;
    fromAmino(object: MintersAmino): Minters;
    toAmino(message: Minters): MintersAmino;
    fromAminoMsg(object: MintersAminoMsg): Minters;
    fromProtoMsg(message: MintersProtoMsg): Minters;
    toProto(message: Minters): Uint8Array;
    toProtoMsg(message: Minters): MintersProtoMsg;
};
