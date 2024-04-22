import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, isObject } from "../../../../helpers";
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
function createBaseParticipant(): Participant {
  return {
    address: new Uint8Array(),
    weight: new Uint8Array()
  };
}
export const Participant = {
  typeUrl: "/axelar.snapshot.exported.v1beta1.Participant",
  encode(message: Participant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParticipantAmino): Participant {
    const message = createBaseParticipant();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = bytesFromBase64(object.weight);
    }
    return message;
  },
  toAmino(message: Participant): ParticipantAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.weight = message.weight ? base64FromBytes(message.weight) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParticipantAminoMsg): Participant {
    return Participant.fromAmino(object.value);
  },
  fromProtoMsg(message: ParticipantProtoMsg): Participant {
    return Participant.decode(message.value);
  },
  toProto(message: Participant): Uint8Array {
    return Participant.encode(message).finish();
  },
  toProtoMsg(message: Participant): ParticipantProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.exported.v1beta1.Participant",
      value: Participant.encode(message).finish()
    };
  }
};
function createBaseSnapshot_ParticipantsEntry(): Snapshot_ParticipantsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const Snapshot_ParticipantsEntry = {
  encode(message: Snapshot_ParticipantsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: Snapshot_ParticipantsEntryAmino): Snapshot_ParticipantsEntry {
    const message = createBaseSnapshot_ParticipantsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Participant.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Snapshot_ParticipantsEntry): Snapshot_ParticipantsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? Participant.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: Snapshot_ParticipantsEntryAminoMsg): Snapshot_ParticipantsEntry {
    return Snapshot_ParticipantsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Snapshot_ParticipantsEntryProtoMsg): Snapshot_ParticipantsEntry {
    return Snapshot_ParticipantsEntry.decode(message.value);
  },
  toProto(message: Snapshot_ParticipantsEntry): Uint8Array {
    return Snapshot_ParticipantsEntry.encode(message).finish();
  }
};
function createBaseSnapshot(): Snapshot {
  return {
    timestamp: Timestamp.fromPartial({}),
    height: BigInt(0),
    participants: {},
    bondedWeight: new Uint8Array()
  };
}
export const Snapshot = {
  typeUrl: "/axelar.snapshot.exported.v1beta1.Snapshot",
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
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
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
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
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: Participant;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Participant.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.bonded_weight !== undefined && object.bonded_weight !== null) {
      message.bondedWeight = bytesFromBase64(object.bonded_weight);
    }
    return message;
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.participants = {};
    if (message.participants) {
      Object.entries(message.participants).forEach(([k, v]) => {
        obj.participants[k] = Participant.toAmino(v);
      });
    }
    obj.bonded_weight = message.bondedWeight ? base64FromBytes(message.bondedWeight) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.exported.v1beta1.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};