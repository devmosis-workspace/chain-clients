import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the market module. */
export interface Params {
    basePool: Uint8Array;
    poolRecoveryPeriod: bigint;
    minStabilitySpread: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: "/terra.market.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the market module. */
export interface ParamsAmino {
    base_pool?: string;
    pool_recovery_period?: string;
    min_stability_spread?: string;
}
export interface ParamsAminoMsg {
    type: "/terra.market.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the market module. */
export interface ParamsSDKType {
    base_pool: Uint8Array;
    pool_recovery_period: bigint;
    min_stability_spread: Uint8Array;
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
