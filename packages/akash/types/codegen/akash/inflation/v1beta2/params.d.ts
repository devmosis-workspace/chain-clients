import * as _m0 from "protobufjs/minimal";
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
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
    inflation_decay_factor: string;
    initial_inflation: string;
    variance: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
