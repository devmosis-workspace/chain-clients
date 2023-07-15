import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp, isObject } from "../../../../helpers";
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
function createBaseParticipant(): Participant {
  return {
    address: new Uint8Array(),
    weight: new Uint8Array()
  };
}
export const Participant = {
  encode(message: Participant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.weight.length !== 0) {
      writer.uint32(18).bytes(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): Participant {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Participant>): Participant {
    const message = createBaseParticipant();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? new Uint8Array();
    return message;
  }
};
function createBaseSnapshot_ParticipantsEntry(): Snapshot_ParticipantsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const Snapshot_ParticipantsEntry = {
  encode(message: Snapshot_ParticipantsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Participant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Snapshot_ParticipantsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Participant.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<Snapshot_ParticipantsEntry>): Snapshot_ParticipantsEntry {
    const message = createBaseSnapshot_ParticipantsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Participant.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseSnapshot(): Snapshot {
  return {
    timestamp: undefined,
    height: Long.ZERO,
    participants: {},
    bondedWeight: new Uint8Array()
  };
}
export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    Object.entries(message.participants).forEach(([key, value]) => {
      Snapshot_ParticipantsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(66).fork()).ldelim();
    });
    if (message.bondedWeight.length !== 0) {
      writer.uint32(74).bytes(message.bondedWeight);
    }
    return writer;
  },
  fromJSON(object: any): Snapshot {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      participants: isObject(object.participants) ? Object.entries(object.participants).reduce<{
        [key: string]: Participant;
      }>((acc, [key, value]) => {
        acc[key] = Participant.fromJSON(value);
        return acc;
      }, {}) : {},
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: Participant;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Participant.fromPartial(value);
      }
      return acc;
    }, {});
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    return message;
  }
};