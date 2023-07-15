import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    /** current annual expected provisions */
    annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    inflation: string;
    annual_provisions: string;
}
/** Params defines the parameters for the x/mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** maximum annual change in inflation rate */
    inflationRateChange: string;
    /** maximum inflation rate */
    inflationMax: string;
    /** minimum inflation rate */
    inflationMin: string;
    /** goal of percent bonded atoms */
    goalBonded: string;
    /** expected blocks per year */
    blocksPerYear: Long;
}
/** Params defines the parameters for the x/mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    inflation_rate_change: string;
    inflation_max: string;
    inflation_min: string;
    goal_bonded: string;
    blocks_per_year: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Minter;
    fromPartial(object: Partial<Minter>): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
