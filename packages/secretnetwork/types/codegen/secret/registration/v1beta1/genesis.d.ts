import { RegistrationNodeInfo, RegistrationNodeInfoSDKType } from "./types";
import { MasterKey, MasterKeySDKType } from "./msg";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    registration: RegistrationNodeInfo[];
    nodeExchMasterKey?: MasterKey;
    ioMasterKey?: MasterKey;
}
export interface GenesisStateSDKType {
    registration: RegistrationNodeInfoSDKType[];
    node_exch_master_key?: MasterKeySDKType;
    io_master_key?: MasterKeySDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
