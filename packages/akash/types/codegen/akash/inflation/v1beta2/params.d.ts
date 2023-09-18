import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the x/deployment package */
export interface Params {
    /** InflationDecayFactor is the number of years it takes inflation to halve. */
    inflationDecayFactor: string;
    /**
     * InitialInflation is the rate at which inflation starts at genesis.
     * It is a decimal value in the range [0.0, 100.0].
     */
    initialInflation: string;
    /**
     * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
     * It is a decimal value in the range [0.0, 1.0].
     */
    variance: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/akash.inflation.v1beta2.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
    /** InflationDecayFactor is the number of years it takes inflation to halve. */
    inflation_decay_factor: string;
    /**
     * InitialInflation is the rate at which inflation starts at genesis.
     * It is a decimal value in the range [0.0, 100.0].
     */
    initial_inflation: string;
    /**
     * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
     * It is a decimal value in the range [0.0, 1.0].
     */
    variance: string;
}
export interface ParamsAminoMsg {
    type: "/akash.inflation.v1beta2.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
    inflation_decay_factor: string;
    initial_inflation: string;
    variance: string;
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
