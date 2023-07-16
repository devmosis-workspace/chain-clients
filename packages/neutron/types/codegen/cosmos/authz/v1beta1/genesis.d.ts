import { GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
    authorization: GrantAuthorization[];
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateSDKType {
    authorization: GrantAuthorizationSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
