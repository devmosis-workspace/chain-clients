import { Super, SuperSDKType } from "./guardian";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the guardian module's genesis state */
export interface GenesisState {
    supers: Super[];
}
/** GenesisState defines the guardian module's genesis state */
export interface GenesisStateSDKType {
    supers: SuperSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
