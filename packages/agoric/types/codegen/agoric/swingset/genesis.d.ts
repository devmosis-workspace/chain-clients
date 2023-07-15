import { Params, ParamsSDKType, State, StateSDKType } from "./swingset";
import * as _m0 from "protobufjs/minimal";
/** The initial or exported state. */
export interface GenesisState {
    params?: Params;
    state?: State;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    state?: StateSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
