import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params holds parameters for the tokenfactory module */
export interface Params {
    /** DenomCreationFee is the fee required to create a new denom using the tokenfactory module */
    denomCreationFee: Coin[];
    /** FeeCollectorAddress is the address where fees collected from denom creation are sent to */
    feeCollectorAddress: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the tokenfactory module */
export interface ParamsAmino {
    /** DenomCreationFee is the fee required to create a new denom using the tokenfactory module */
    denom_creation_fee: CoinAmino[];
    /** FeeCollectorAddress is the address where fees collected from denom creation are sent to */
    fee_collector_address: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/tokenfactory/params";
    value: ParamsAmino;
}
/** Params holds parameters for the tokenfactory module */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
    fee_collector_address: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
