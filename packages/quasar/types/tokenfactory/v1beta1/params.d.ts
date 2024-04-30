import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    denomCreationFee: Coin[];
    /**
     * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
     * to the base cost.
     * https://github.com/CosmWasm/token-factory/issues/11
     */
    denomCreationGasConsume?: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.tokenfactory.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
    denom_creation_fee?: CoinAmino[];
    /**
     * if denom_creation_fee is an empty array, then this field is used to add more gas consumption
     * to the base cost.
     * https://github.com/CosmWasm/token-factory/issues/11
     */
    denom_creation_gas_consume?: string;
}
export interface ParamsAminoMsg {
    type: "/quasarlabs.quasarnode.tokenfactory.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
    denom_creation_gas_consume?: bigint;
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
