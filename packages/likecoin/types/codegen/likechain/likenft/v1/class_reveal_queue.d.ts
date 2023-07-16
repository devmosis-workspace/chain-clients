import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface ClassRevealQueueEntry {
    revealTime?: Timestamp;
    classId: string;
}
export interface ClassRevealQueueEntrySDKType {
    reveal_time?: TimestampSDKType;
    class_id: string;
}
export declare const ClassRevealQueueEntry: {
    encode(message: ClassRevealQueueEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassRevealQueueEntry;
    fromPartial(object: Partial<ClassRevealQueueEntry>): ClassRevealQueueEntry;
};
