import { Downtime } from "./downtime_duration";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface GenesisDowntimeEntry {
    duration: Downtime;
    lastDowntime: Timestamp;
}
export interface GenesisDowntimeEntryProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
    value: Uint8Array;
}
export interface GenesisDowntimeEntryAmino {
    duration: Downtime;
    last_downtime?: TimestampAmino;
}
export interface GenesisDowntimeEntryAminoMsg {
    type: "osmosis/downtimedetector/genesis-downtime-entry";
    value: GenesisDowntimeEntryAmino;
}
export interface GenesisDowntimeEntrySDKType {
    duration: Downtime;
    last_downtime: TimestampSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    downtimes: GenesisDowntimeEntry[];
    lastBlockTime: Timestamp;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
    downtimes: GenesisDowntimeEntryAmino[];
    last_block_time?: TimestampAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/downtimedetector/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
    downtimes: GenesisDowntimeEntrySDKType[];
    last_block_time: TimestampSDKType;
}
export declare const GenesisDowntimeEntry: {
    typeUrl: string;
    encode(message: GenesisDowntimeEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisDowntimeEntry;
    fromPartial(object: Partial<GenesisDowntimeEntry>): GenesisDowntimeEntry;
    fromAmino(object: GenesisDowntimeEntryAmino): GenesisDowntimeEntry;
    toAmino(message: GenesisDowntimeEntry): GenesisDowntimeEntryAmino;
    fromAminoMsg(object: GenesisDowntimeEntryAminoMsg): GenesisDowntimeEntry;
    toAminoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryAminoMsg;
    fromProtoMsg(message: GenesisDowntimeEntryProtoMsg): GenesisDowntimeEntry;
    toProto(message: GenesisDowntimeEntry): Uint8Array;
    toProtoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
