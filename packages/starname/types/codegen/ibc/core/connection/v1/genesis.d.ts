import { IdentifiedConnection, IdentifiedConnectionSDKType, ConnectionPaths, ConnectionPathsSDKType } from "./connection";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    clientConnectionPaths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    nextConnectionSequence: Long;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateSDKType {
    connections: IdentifiedConnectionSDKType[];
    client_connection_paths: ConnectionPathsSDKType[];
    next_connection_sequence: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
