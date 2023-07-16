import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface ClassRevealQueueEntry {
  revealTime?: Timestamp;
  classId: string;
}
export interface ClassRevealQueueEntrySDKType {
  reveal_time?: TimestampSDKType;
  class_id: string;
}
function createBaseClassRevealQueueEntry(): ClassRevealQueueEntry {
  return {
    revealTime: undefined,
    classId: ""
  };
}
export const ClassRevealQueueEntry = {
  encode(message: ClassRevealQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revealTime !== undefined) {
      Timestamp.encode(message.revealTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): ClassRevealQueueEntry {
    return {
      revealTime: isSet(object.revealTime) ? fromJsonTimestamp(object.revealTime) : undefined,
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<ClassRevealQueueEntry>): ClassRevealQueueEntry {
    const message = createBaseClassRevealQueueEntry();
    message.revealTime = object.revealTime !== undefined && object.revealTime !== null ? Timestamp.fromPartial(object.revealTime) : undefined;
    message.classId = object.classId ?? "";
    return message;
  }
};