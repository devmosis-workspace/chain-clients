import { Issuer, IssuerSDKType } from "./issuer";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    issuers: Issuer[];
}
export interface GenesisStateSDKType {
    issuers: IssuerSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
