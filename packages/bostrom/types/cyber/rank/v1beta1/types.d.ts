import { BinaryWriter } from "../../../binary";
export interface Params {
    calculationPeriod: bigint;
    dampingFactor: string;
    tolerance: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    calculation_period?: string;
    damping_factor?: string;
    tolerance?: string;
}
export interface ParamsAminoMsg {
    type: "/cyber.rank.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    calculation_period: bigint;
    damping_factor: string;
    tolerance: string;
}
export interface RankedParticle {
    particle: string;
    rank: bigint;
}
export interface RankedParticleProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.RankedParticle";
    value: Uint8Array;
}
export interface RankedParticleAmino {
    particle?: string;
    rank?: string;
}
export interface RankedParticleAminoMsg {
    type: "/cyber.rank.v1beta1.RankedParticle";
    value: RankedParticleAmino;
}
export interface RankedParticleSDKType {
    particle: string;
    rank: bigint;
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
export declare const RankedParticle: {
    typeUrl: string;
    encode(message: RankedParticle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RankedParticle;
    fromPartial(object: Partial<RankedParticle>): RankedParticle;
    fromAmino(object: RankedParticleAmino): RankedParticle;
    toAmino(message: RankedParticle): RankedParticleAmino;
    fromAminoMsg(object: RankedParticleAminoMsg): RankedParticle;
    fromProtoMsg(message: RankedParticleProtoMsg): RankedParticle;
    toProto(message: RankedParticle): Uint8Array;
    toProtoMsg(message: RankedParticle): RankedParticleProtoMsg;
};
