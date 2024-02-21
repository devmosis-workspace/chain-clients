import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    feeTiers: bigint[];
    maxTrueTakerSpread: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.dex.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    fee_tiers?: string[];
    max_true_taker_spread?: string;
}
export interface ParamsAminoMsg {
    type: "/neutron.dex.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    fee_tiers: bigint[];
    max_true_taker_spread: string;
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
