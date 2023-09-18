import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
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
function createBaseClassRevealQueueEntry(): ClassRevealQueueEntry {
  return {
    revealTime: Timestamp.fromPartial({}),
    classId: ""
  };
}
export const ClassRevealQueueEntry = {
  typeUrl: "/likechain.likenft.v1.ClassRevealQueueEntry",
  encode(message: ClassRevealQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClassRevealQueueEntryAmino): ClassRevealQueueEntry {
    return {
      revealTime: object.reveal_time,
      classId: object.class_id
    };
  },
  toAmino(message: ClassRevealQueueEntry): ClassRevealQueueEntryAmino {
    const obj: any = {};
    obj.reveal_time = message.revealTime;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: ClassRevealQueueEntryAminoMsg): ClassRevealQueueEntry {
    return ClassRevealQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassRevealQueueEntryProtoMsg): ClassRevealQueueEntry {
    return ClassRevealQueueEntry.decode(message.value);
  },
  toProto(message: ClassRevealQueueEntry): Uint8Array {
    return ClassRevealQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: ClassRevealQueueEntry): ClassRevealQueueEntryProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassRevealQueueEntry",
      value: ClassRevealQueueEntry.encode(message).finish()
    };
  }
};