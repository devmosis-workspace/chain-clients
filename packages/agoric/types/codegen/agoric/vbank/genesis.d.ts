import { Params, ParamsSDKType, State, StateSDKType } from "./vbank";
import * as _m0 from "protobufjs/minimal";
/** The initial and exported module state. */
export interface GenesisState {
    /** parms defines all the parameters of the module. */
    params?: Params;
    /** state is the current operation state. */
    state?: State;
}
/** The initial and exported module state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    state?: StateSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
