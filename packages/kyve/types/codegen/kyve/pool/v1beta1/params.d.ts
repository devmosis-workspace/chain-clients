import { BinaryWriter } from "../../../binary";
/** Params defines the pool module parameters. */
export interface Params {
    /** protocol_inflation_share ... */
    protocolInflationShare: string;
    /** pool_inflation_payout_rate ... */
    poolInflationPayoutRate: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the pool module parameters. */
export interface ParamsAmino {
    /** protocol_inflation_share ... */
    protocol_inflation_share?: string;
    /** pool_inflation_payout_rate ... */
    pool_inflation_payout_rate?: string;
}
export interface ParamsAminoMsg {
    type: "/kyve.pool.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the pool module parameters. */
export interface ParamsSDKType {
    protocol_inflation_share: string;
    pool_inflation_payout_rate: string;
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
