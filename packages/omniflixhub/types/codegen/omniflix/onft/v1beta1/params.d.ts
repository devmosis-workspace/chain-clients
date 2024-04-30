import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    denomCreationFee: Coin;
}
export interface ParamsProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    denom_creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
    type: "/OmniFlix.onft.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType;
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
