import { Params, ParamsSDKType } from "./params";
import { Pool, PoolSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    pools: Pool[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    pools: PoolSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
