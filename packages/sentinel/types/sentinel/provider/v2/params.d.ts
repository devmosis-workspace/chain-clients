import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    deposit: Coin;
    stakingShare: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/sentinel.provider.v2.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    deposit?: CoinAmino;
    staking_share?: string;
}
export interface ParamsAminoMsg {
    type: "/sentinel.provider.v2.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    deposit: CoinSDKType;
    staking_share: string;
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
