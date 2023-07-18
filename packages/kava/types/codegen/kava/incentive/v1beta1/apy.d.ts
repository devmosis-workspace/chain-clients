import * as _m0 from "protobufjs/minimal";
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface Apy {
    collateralType: string;
    apy: string;
}
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface ApySDKType {
    collateral_type: string;
    apy: string;
}
export declare const Apy: {
    encode(message: Apy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Apy;
    fromPartial(object: Partial<Apy>): Apy;
};
