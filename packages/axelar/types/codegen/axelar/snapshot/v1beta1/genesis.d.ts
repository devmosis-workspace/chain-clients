import { Params, ParamsSDKType } from "./params";
import { ProxiedValidator, ProxiedValidatorSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    proxiedValidators: ProxiedValidator[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    proxied_validators: ProxiedValidatorSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
