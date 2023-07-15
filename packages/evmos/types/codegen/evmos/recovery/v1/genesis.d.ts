import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
/** Params holds parameters for the recovery module */
export interface Params {
    /** enable_recovery IBC middleware */
    enableRecovery: boolean;
    /** packet_timeout_duration is the duration added to timeout timestamp for balances recovered via IBC packets */
    packetTimeoutDuration?: Duration;
}
/** Params holds parameters for the recovery module */
export interface ParamsSDKType {
    enable_recovery: boolean;
    packet_timeout_duration?: DurationSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
