import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the interchaintxs module's genesis state. */
export interface GenesisState {
    /** GenesisState defines the interchaintxs module's genesis state. */
    params?: Params;
}
/** GenesisState defines the interchaintxs module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
