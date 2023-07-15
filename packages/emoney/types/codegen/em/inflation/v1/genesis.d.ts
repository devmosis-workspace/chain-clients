import { InflationState, InflationStateSDKType } from "./inflation";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    /** todo (reviewer): yaml naming is a bit inconsistent. state contains assets */
    assets?: InflationState;
}
export interface GenesisStateSDKType {
    assets?: InflationStateSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
