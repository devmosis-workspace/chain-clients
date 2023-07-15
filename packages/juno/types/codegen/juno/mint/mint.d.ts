import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    phase: Long;
    startPhaseBlock: Long;
    /** current annual expected provisions */
    annualProvisions: string;
    targetSupply: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    inflation: string;
    phase: Long;
    start_phase_block: Long;
    annual_provisions: string;
    target_supply: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** expected blocks per year */
    blocksPerYear: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
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
