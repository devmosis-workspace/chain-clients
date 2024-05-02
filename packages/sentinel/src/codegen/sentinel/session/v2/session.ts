import { Bandwidth, BandwidthAmino, BandwidthSDKType } from "../../types/v1/bandwidth";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Session {
  id: bigint;
  subscriptionId: bigint;
  nodeAddress: string;
  address: string;
  bandwidth: Bandwidth;
  duration: Duration;
  inactiveAt: Timestamp;
  status: Status;
  statusAt: Timestamp;
}
export interface SessionProtoMsg {
  typeUrl: "/sentinel.session.v2.Session";
  value: Uint8Array;
}
export interface SessionAmino {
  id?: string;
  subscription_id?: string;
  node_address?: string;
  address?: string;
  bandwidth?: BandwidthAmino;
  duration?: DurationAmino;
  inactive_at?: string;
  status?: Status;
  status_at?: string;
}
export interface SessionAminoMsg {
  type: "/sentinel.session.v2.Session";
  value: SessionAmino;
}
export interface SessionSDKType {
  id: bigint;
  subscription_id: bigint;
  node_address: string;
  address: string;
  bandwidth: BandwidthSDKType;
  duration: DurationSDKType;
  inactive_at: TimestampSDKType;
  status: Status;
  status_at: TimestampSDKType;
}
function createBaseSession(): Session {
  return {
    id: BigInt(0),
    subscriptionId: BigInt(0),
    nodeAddress: "",
    address: "",
    bandwidth: Bandwidth.fromPartial({}),
    duration: Duration.fromPartial({}),
    inactiveAt: Timestamp.fromPartial({}),
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Session = {
  typeUrl: "/sentinel.session.v2.Session",
  encode(message: Session, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.subscriptionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.subscriptionId);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.bandwidth !== undefined) {
      Bandwidth.encode(message.bandwidth, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(50).fork()).ldelim();
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(message.inactiveAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      subscriptionId: isSet(object.subscriptionId) ? BigInt(object.subscriptionId.toString()) : BigInt(0),
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      address: isSet(object.address) ? String(object.address) : "",
      bandwidth: isSet(object.bandwidth) ? Bandwidth.fromJSON(object.bandwidth) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Session>): Session {
    const message = createBaseSession();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.subscriptionId = object.subscriptionId !== undefined && object.subscriptionId !== null ? BigInt(object.subscriptionId.toString()) : BigInt(0);
    message.nodeAddress = object.nodeAddress ?? "";
    message.address = object.address ?? "";
    message.bandwidth = object.bandwidth !== undefined && object.bandwidth !== null ? Bandwidth.fromPartial(object.bandwidth) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.inactiveAt = object.inactiveAt !== undefined && object.inactiveAt !== null ? Timestamp.fromPartial(object.inactiveAt) : undefined;
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: SessionAmino): Session {
    const message = createBaseSession();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = BigInt(object.subscription_id);
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.bandwidth !== undefined && object.bandwidth !== null) {
      message.bandwidth = Bandwidth.fromAmino(object.bandwidth);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.inactive_at !== undefined && object.inactive_at !== null) {
      message.inactiveAt = Timestamp.fromAmino(object.inactive_at);
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
    obj.subscription_id = message.subscriptionId !== BigInt(0) ? message.subscriptionId.toString() : undefined;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.address = message.address === "" ? undefined : message.address;
    obj.bandwidth = message.bandwidth ? Bandwidth.toAmino(message.bandwidth) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.inactive_at = message.inactiveAt ? Timestamp.toAmino(message.inactiveAt) : undefined;
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
      typeUrl: "/sentinel.session.v2.Session",
      value: Session.encode(message).finish()
    };
  }
};