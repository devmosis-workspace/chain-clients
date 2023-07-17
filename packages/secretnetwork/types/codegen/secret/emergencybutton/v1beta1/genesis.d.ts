import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params?: Params;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
