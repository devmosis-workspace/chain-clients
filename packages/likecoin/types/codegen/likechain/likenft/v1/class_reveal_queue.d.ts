import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface ClassRevealQueueEntry {
    revealTime: Timestamp;
    classId: string;
}
export interface ClassRevealQueueEntryProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassRevealQueueEntry";
    value: Uint8Array;
}
export interface ClassRevealQueueEntryAmino {
    reveal_time?: TimestampAmino;
    class_id: string;
}
export interface ClassRevealQueueEntryAminoMsg {
    type: "/likechain.likenft.v1.ClassRevealQueueEntry";
    value: ClassRevealQueueEntryAmino;
}
export interface ClassRevealQueueEntrySDKType {
    reveal_time: TimestampSDKType;
    class_id: string;
}
export declare const ClassRevealQueueEntry: {
    typeUrl: string;
    encode(message: ClassRevealQueueEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassRevealQueueEntry;
    fromPartial(object: Partial<ClassRevealQueueEntry>): ClassRevealQueueEntry;
    fromAmino(object: ClassRevealQueueEntryAmino): ClassRevealQueueEntry;
    toAmino(message: ClassRevealQueueEntry): ClassRevealQueueEntryAmino;
    fromAminoMsg(object: ClassRevealQueueEntryAminoMsg): ClassRevealQueueEntry;
    fromProtoMsg(message: ClassRevealQueueEntryProtoMsg): ClassRevealQueueEntry;
    toProto(message: ClassRevealQueueEntry): Uint8Array;
    toProtoMsg(message: ClassRevealQueueEntry): ClassRevealQueueEntryProtoMsg;
};
