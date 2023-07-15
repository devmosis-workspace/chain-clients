import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Participant {
    address: Uint8Array;
    weight: Uint8Array;
}
export interface ParticipantSDKType {
    address: Uint8Array;
    weight: Uint8Array;
}
export interface Snapshot_ParticipantsEntry {
    key: string;
    value?: Participant;
}
export interface Snapshot_ParticipantsEntrySDKType {
    key: string;
    value?: ParticipantSDKType;
}
export interface Snapshot {
    timestamp?: Timestamp;
    height: Long;
    participants?: {
        [key: string]: Participant;
    };
    bondedWeight: Uint8Array;
}
export interface SnapshotSDKType {
    timestamp?: TimestampSDKType;
    height: Long;
    participants?: {
        [key: string]: ParticipantSDKType;
    };
    bonded_weight: Uint8Array;
}
export declare const Participant: {
    encode(message: Participant, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Participant;
    fromPartial(object: Partial<Participant>): Participant;
};
export declare const Snapshot_ParticipantsEntry: {
    encode(message: Snapshot_ParticipantsEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Snapshot_ParticipantsEntry;
    fromPartial(object: Partial<Snapshot_ParticipantsEntry>): Snapshot_ParticipantsEntry;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
};
