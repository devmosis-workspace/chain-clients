import { Params, ParamsSDKType } from "./params";
import { KeygenSession, KeygenSessionSDKType, SigningSession, SigningSessionSDKType, Key, KeySDKType, KeyEpoch, KeyEpochSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    keygenSessions: KeygenSession[];
    signingSessions: SigningSession[];
    keys: Key[];
    keyEpochs: KeyEpoch[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    keygen_sessions: KeygenSessionSDKType[];
    signing_sessions: SigningSessionSDKType[];
    keys: KeySDKType[];
    key_epochs: KeyEpochSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
