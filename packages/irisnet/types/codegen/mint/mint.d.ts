import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state */
export interface Minter {
    /** time which the last update was made to the minter */
    lastUpdate?: Timestamp;
    /** base inflation */
    inflationBase: string;
}
/** Minter represents the minting state */
export interface MinterSDKType {
    last_update?: TimestampSDKType;
    inflation_base: string;
}
/** Params defines mint module's parameters */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** inflation rate */
    inflation: string;
}
/** Params defines mint module's parameters */
export interface ParamsSDKType {
    mint_denom: string;
    inflation: string;
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
