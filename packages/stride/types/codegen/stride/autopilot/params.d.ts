import * as _m0 from "protobufjs/minimal";
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface Params {
    /** optionally, turn off each module */
    stakeibcActive: boolean;
    claimActive: boolean;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsSDKType {
    stakeibc_active: boolean;
    claim_active: boolean;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
