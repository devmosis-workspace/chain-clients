import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.recovery.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/evmos.recovery.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
}
/** Params holds parameters for the recovery module */
export interface Params {
    /** enable_recovery IBC middleware */
    enableRecovery: boolean;
    /** packet_timeout_duration is the duration added to timeout timestamp for balances recovered via IBC packets */
    packetTimeoutDuration: Duration;
}
export interface ParamsProtoMsg {
    typeUrl: "/evmos.recovery.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the recovery module */
export interface ParamsAmino {
    /** enable_recovery IBC middleware */
    enable_recovery: boolean;
    /** packet_timeout_duration is the duration added to timeout timestamp for balances recovered via IBC packets */
    packet_timeout_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
    type: "/evmos.recovery.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the recovery module */
export interface ParamsSDKType {
    enable_recovery: boolean;
    packet_timeout_duration: DurationSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
