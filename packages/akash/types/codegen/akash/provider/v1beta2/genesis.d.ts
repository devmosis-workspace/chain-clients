import { Provider, ProviderSDKType } from "./provider";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
    providers: Provider[];
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateSDKType {
    providers: ProviderSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
