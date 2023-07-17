import { Domain, DomainSDKType, Account, AccountSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - genesis state of x/starname */
export interface GenesisState {
    domains: Domain[];
    accounts: Account[];
}
/** GenesisState - genesis state of x/starname */
export interface GenesisStateSDKType {
    domains: DomainSDKType[];
    accounts: AccountSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
