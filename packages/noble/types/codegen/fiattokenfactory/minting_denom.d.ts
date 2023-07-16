import * as _m0 from "protobufjs/minimal";
export interface MintingDenom {
    denom: string;
}
export interface MintingDenomSDKType {
    denom: string;
}
export declare const MintingDenom: {
    encode(message: MintingDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MintingDenom;
    fromPartial(object: Partial<MintingDenom>): MintingDenom;
};
