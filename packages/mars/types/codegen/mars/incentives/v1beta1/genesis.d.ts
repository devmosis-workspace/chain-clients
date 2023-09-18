import { Schedule, ScheduleAmino, ScheduleSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the incentives module's genesis state */
export interface GenesisState {
    /** NextScheduleId is the id for the next incentives schedule to be created */
    nextScheduleId: bigint;
    /** Schedules is an array of active incentives schedules */
    schedules: Schedule[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the incentives module's genesis state */
export interface GenesisStateAmino {
    /** NextScheduleId is the id for the next incentives schedule to be created */
    next_schedule_id: string;
    /** Schedules is an array of active incentives schedules */
    schedules: ScheduleAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/mars.incentives.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the incentives module's genesis state */
export interface GenesisStateSDKType {
    next_schedule_id: bigint;
    schedules: ScheduleSDKType[];
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
