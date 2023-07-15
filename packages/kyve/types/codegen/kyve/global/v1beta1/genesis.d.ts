import { Params, ParamsSDKType } from "./global";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the global module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
}
/** GenesisState defines the global module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
