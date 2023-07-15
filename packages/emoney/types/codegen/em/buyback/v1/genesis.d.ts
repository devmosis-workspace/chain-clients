import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    interval: string;
}
export interface GenesisStateSDKType {
    interval: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
