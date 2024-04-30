import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
export interface Params {
    registryName: string;
    feePerByte: DecCoin;
}
export interface ParamsProtoMsg {
    typeUrl: "/likechain.iscn.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    registry_name?: string;
    fee_per_byte?: DecCoinAmino;
}
export interface ParamsAminoMsg {
    type: "/likechain.iscn.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    registry_name: string;
    fee_per_byte: DecCoinSDKType;
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
