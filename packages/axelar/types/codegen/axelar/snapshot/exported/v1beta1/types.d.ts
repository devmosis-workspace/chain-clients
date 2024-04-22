import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../../binary";
export interface Participant {
    address: Uint8Array;
    weight: Uint8Array;
}
export interface ParticipantProtoMsg {
    typeUrl: "/axelar.snapshot.exported.v1beta1.Participant";
    value: Uint8Array;
}
export interface ParticipantAmino {
    address?: string;
    weight?: string;
}
export interface ParticipantAminoMsg {
    type: "/axelar.snapshot.exported.v1beta1.Participant";
    value: ParticipantAmino;
}
export interface ParticipantSDKType {
    address: Uint8Array;
    weight: Uint8Array;
}
export interface Snapshot_ParticipantsEntry {
    key: string;
    value?: Participant;
}
export interface Snapshot_ParticipantsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface Snapshot_ParticipantsEntryAmino {
    key?: string;
    value?: ParticipantAmino;
}
export interface Snapshot_ParticipantsEntryAminoMsg {
    type: string;
    value: Snapshot_ParticipantsEntryAmino;
}
export interface Snapshot_ParticipantsEntrySDKType {
    key: string;
    value?: ParticipantSDKType;
}
export interface Snapshot {
    timestamp: Timestamp;
    height: bigint;
    participants: {
        [key: string]: Participant;
    };
    bondedWeight: Uint8Array;
}
export interface SnapshotProtoMsg {
    typeUrl: "/axelar.snapshot.exported.v1beta1.Snapshot";
    value: Uint8Array;
}
export interface SnapshotAmino {
    timestamp?: string;
    height?: string;
    participants?: {
        [key: string]: ParticipantAmino;
    };
    bonded_weight?: string;
}
export interface SnapshotAminoMsg {
    type: "/axelar.snapshot.exported.v1beta1.Snapshot";
    value: SnapshotAmino;
}
export interface SnapshotSDKType {
    timestamp: TimestampSDKType;
    height: bigint;
    participants: {
        [key: string]: ParticipantSDKType;
    };
    bonded_weight: Uint8Array;
}
export declare const Participant: {
    typeUrl: string;
    encode(message: Participant, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Participant;
    fromPartial(object: Partial<Participant>): Participant;
    fromAmino(object: ParticipantAmino): Participant;
    toAmino(message: Participant): ParticipantAmino;
    fromAminoMsg(object: ParticipantAminoMsg): Participant;
    fromProtoMsg(message: ParticipantProtoMsg): Participant;
    toProto(message: Participant): Uint8Array;
    toProtoMsg(message: Participant): ParticipantProtoMsg;
};
export declare const Snapshot_ParticipantsEntry: {
    encode(message: Snapshot_ParticipantsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Snapshot_ParticipantsEntry;
    fromPartial(object: Partial<Snapshot_ParticipantsEntry>): Snapshot_ParticipantsEntry;
    fromAmino(object: Snapshot_ParticipantsEntryAmino): Snapshot_ParticipantsEntry;
    toAmino(message: Snapshot_ParticipantsEntry): Snapshot_ParticipantsEntryAmino;
    fromAminoMsg(object: Snapshot_ParticipantsEntryAminoMsg): Snapshot_ParticipantsEntry;
    fromProtoMsg(message: Snapshot_ParticipantsEntryProtoMsg): Snapshot_ParticipantsEntry;
    toProto(message: Snapshot_ParticipantsEntry): Uint8Array;
};
export declare const Snapshot: {
    typeUrl: string;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
    fromAmino(object: SnapshotAmino): Snapshot;
    toAmino(message: Snapshot): SnapshotAmino;
    fromAminoMsg(object: SnapshotAminoMsg): Snapshot;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
