import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Bandwidth, BandwidthAmino, BandwidthSDKType } from "../../types/v1/bandwidth";
import { Status, statusFromJSON } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Session {
  id: bigint;
  subscription: bigint;
  node: string;
  address: string;
  duration: Duration;
  bandwidth: Bandwidth;
  status: Status;
  statusAt: Timestamp;
}
export interface SessionProtoMsg {
  typeUrl: "/sentinel.session.v1.Session";
  value: Uint8Array;
}
export interface SessionAmino {
  id?: string;
  subscription?: string;
  node?: string;
  address?: string;
  duration?: DurationAmino;
  bandwidth?: BandwidthAmino;
  status?: Status;
  status_at?: string;
}
export interface SessionAminoMsg {
  type: "/sentinel.session.v1.Session";
  value: SessionAmino;
}
export interface SessionSDKType {
  id: bigint;
  subscription: bigint;
  node: string;
  address: string;
  duration: DurationSDKType;
  bandwidth: BandwidthSDKType;
  status: Status;
  status_at: TimestampSDKType;
}
function createBaseSession(): Session {
  return {
    id: BigInt(0),
    subscription: BigInt(0),
    node: "",
    address: "",
    duration: Duration.fromPartial({}),
    bandwidth: Bandwidth.fromPartial({}),
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Session = {
  typeUrl: "/sentinel.session.v1.Session",
  encode(message: Session, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.subscription !== BigInt(0)) {
      writer.uint32(16).uint64(message.subscription);
    }
    if (message.node !== "") {
      writer.uint32(26).string(message.node);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (message.bandwidth !== undefined) {
      Bandwidth.encode(message.bandwidth, writer.uint32(50).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      subscription: isSet(object.subscription) ? BigInt(object.subscription.toString()) : BigInt(0),
      node: isSet(object.node) ? String(object.node) : "",
      address: isSet(object.address) ? String(object.address) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      bandwidth: isSet(object.bandwidth) ? Bandwidth.fromJSON(object.bandwidth) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Session>): Session {
    const message = createBaseSession();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.subscription = object.subscription !== undefined && object.subscription !== null ? BigInt(object.subscription.toString()) : BigInt(0);
    message.node = object.node ?? "";
    message.address = object.address ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.bandwidth = object.bandwidth !== undefined && object.bandwidth !== null ? Bandwidth.fromPartial(object.bandwidth) : undefined;
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: SessionAmino): Session {
    const message = createBaseSession();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = BigInt(object.subscription);
    }
    if (object.node !== undefined && object.node !== null) {
      message.node = object.node;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.bandwidth !== undefined && object.bandwidth !== null) {
      message.bandwidth = Bandwidth.fromAmino(object.bandwidth);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.status_at !== undefined && object.status_at !== null) {
      message.statusAt = Timestamp.fromAmino(object.status_at);
    }
    return message;
  },
  toAmino(message: Session): SessionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.subscription = message.subscription !== BigInt(0) ? message.subscription.toString() : undefined;
    obj.node = message.node === "" ? undefined : message.node;
    obj.address = message.address === "" ? undefined : message.address;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.bandwidth = message.bandwidth ? Bandwidth.toAmino(message.bandwidth) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_at = message.statusAt ? Timestamp.toAmino(message.statusAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: SessionAminoMsg): Session {
    return Session.fromAmino(object.value);
  },
  fromProtoMsg(message: SessionProtoMsg): Session {
    return Session.decode(message.value);
  },
  toProto(message: Session): Uint8Array {
    return Session.encode(message).finish();
  },
  toProtoMsg(message: Session): SessionProtoMsg {
    return {
      typeUrl: "/sentinel.session.v1.Session",
      value: Session.encode(message).finish()
    };
  }
};