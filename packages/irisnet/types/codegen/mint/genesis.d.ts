import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state */
export interface GenesisState {
    minter?: Minter;
    params?: Params;
}
/** GenesisState defines the mint module's genesis state */
export interface GenesisStateSDKType {
    minter?: MinterSDKType;
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
