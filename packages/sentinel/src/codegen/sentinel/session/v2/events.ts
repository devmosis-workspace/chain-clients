import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventStart {
  address: string;
  nodeAddress: string;
  id: bigint;
  planId: bigint;
  subscriptionId: bigint;
}
export interface EventStartProtoMsg {
  typeUrl: "/sentinel.session.v2.EventStart";
  value: Uint8Array;
}
export interface EventStartAmino {
  address?: string;
  node_address?: string;
  id?: string;
  plan_id?: string;
  subscription_id?: string;
}
export interface EventStartAminoMsg {
  type: "/sentinel.session.v2.EventStart";
  value: EventStartAmino;
}
export interface EventStartSDKType {
  address: string;
  node_address: string;
  id: bigint;
  plan_id: bigint;
  subscription_id: bigint;
}
export interface EventUpdateDetails {
  address: string;
  nodeAddress: string;
  id: bigint;
  planId: bigint;
  subscriptionId: bigint;
}
export interface EventUpdateDetailsProtoMsg {
  typeUrl: "/sentinel.session.v2.EventUpdateDetails";
  value: Uint8Array;
}
export interface EventUpdateDetailsAmino {
  address?: string;
  node_address?: string;
  id?: string;
  plan_id?: string;
  subscription_id?: string;
}
export interface EventUpdateDetailsAminoMsg {
  type: "/sentinel.session.v2.EventUpdateDetails";
  value: EventUpdateDetailsAmino;
}
export interface EventUpdateDetailsSDKType {
  address: string;
  node_address: string;
  id: bigint;
  plan_id: bigint;
  subscription_id: bigint;
}
export interface EventUpdateStatus {
  status: Status;
  address: string;
  nodeAddress: string;
  id: bigint;
  planId: bigint;
  subscriptionId: bigint;
}
export interface EventUpdateStatusProtoMsg {
  typeUrl: "/sentinel.session.v2.EventUpdateStatus";
  value: Uint8Array;
}
export interface EventUpdateStatusAmino {
  status?: Status;
  address?: string;
  node_address?: string;
  id?: string;
  plan_id?: string;
  subscription_id?: string;
}
export interface EventUpdateStatusAminoMsg {
  type: "/sentinel.session.v2.EventUpdateStatus";
  value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
  status: Status;
  address: string;
  node_address: string;
  id: bigint;
  plan_id: bigint;
  subscription_id: bigint;
}
function createBaseEventStart(): EventStart {
  return {
    address: "",
    nodeAddress: "",
    id: BigInt(0),
    planId: BigInt(0),
    subscriptionId: BigInt(0)
  };
}
export const EventStart = {
  typeUrl: "/sentinel.session.v2.EventStart",
  encode(message: EventStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.planId !== BigInt(0)) {
      writer.uint32(32).uint64(message.planId);
    }
    if (message.subscriptionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): EventStart {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      planId: isSet(object.planId) ? BigInt(object.planId.toString()) : BigInt(0),
      subscriptionId: isSet(object.subscriptionId) ? BigInt(object.subscriptionId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventStart>): EventStart {
    const message = createBaseEventStart();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.subscriptionId = object.subscriptionId !== undefined && object.subscriptionId !== null ? BigInt(object.subscriptionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventStartAmino): EventStart {
    const message = createBaseEventStart();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = BigInt(object.subscription_id);
    }
    return message;
  },
  toAmino(message: EventStart): EventStartAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.subscription_id = message.subscriptionId !== BigInt(0) ? message.subscriptionId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventStartAminoMsg): EventStart {
    return EventStart.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStartProtoMsg): EventStart {
    return EventStart.decode(message.value);
  },
  toProto(message: EventStart): Uint8Array {
    return EventStart.encode(message).finish();
  },
  toProtoMsg(message: EventStart): EventStartProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.EventStart",
      value: EventStart.encode(message).finish()
    };
  }
};
function createBaseEventUpdateDetails(): EventUpdateDetails {
  return {
    address: "",
    nodeAddress: "",
    id: BigInt(0),
    planId: BigInt(0),
    subscriptionId: BigInt(0)
  };
}
export const EventUpdateDetails = {
  typeUrl: "/sentinel.session.v2.EventUpdateDetails",
  encode(message: EventUpdateDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.planId !== BigInt(0)) {
      writer.uint32(32).uint64(message.planId);
    }
    if (message.subscriptionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateDetails {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      planId: isSet(object.planId) ? BigInt(object.planId.toString()) : BigInt(0),
      subscriptionId: isSet(object.subscriptionId) ? BigInt(object.subscriptionId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUpdateDetails>): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.subscriptionId = object.subscriptionId !== undefined && object.subscriptionId !== null ? BigInt(object.subscriptionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventUpdateDetailsAmino): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = BigInt(object.subscription_id);
    }
    return message;
  },
  toAmino(message: EventUpdateDetails): EventUpdateDetailsAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.subscription_id = message.subscriptionId !== BigInt(0) ? message.subscriptionId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateDetailsAminoMsg): EventUpdateDetails {
    return EventUpdateDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateDetailsProtoMsg): EventUpdateDetails {
    return EventUpdateDetails.decode(message.value);
  },
  toProto(message: EventUpdateDetails): Uint8Array {
    return EventUpdateDetails.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateDetails): EventUpdateDetailsProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.EventUpdateDetails",
      value: EventUpdateDetails.encode(message).finish()
    };
  }
};
function createBaseEventUpdateStatus(): EventUpdateStatus {
  return {
    status: 0,
    address: "",
    nodeAddress: "",
    id: BigInt(0),
    planId: BigInt(0),
    subscriptionId: BigInt(0)
  };
}
export const EventUpdateStatus = {
  typeUrl: "/sentinel.session.v2.EventUpdateStatus",
  encode(message: EventUpdateStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.planId !== BigInt(0)) {
      writer.uint32(40).uint64(message.planId);
    }
    if (message.subscriptionId !== BigInt(0)) {
      writer.uint32(48).uint64(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateStatus {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      planId: isSet(object.planId) ? BigInt(object.planId.toString()) : BigInt(0),
      subscriptionId: isSet(object.subscriptionId) ? BigInt(object.subscriptionId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.subscriptionId = object.subscriptionId !== undefined && object.subscriptionId !== null ? BigInt(object.subscriptionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventUpdateStatusAmino): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = BigInt(object.subscription_id);
    }
    return message;
  },
  toAmino(message: EventUpdateStatus): EventUpdateStatusAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.subscription_id = message.subscriptionId !== BigInt(0) ? message.subscriptionId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateStatusAminoMsg): EventUpdateStatus {
    return EventUpdateStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateStatusProtoMsg): EventUpdateStatus {
    return EventUpdateStatus.decode(message.value);
  },
  toProto(message: EventUpdateStatus): Uint8Array {
    return EventUpdateStatus.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateStatus): EventUpdateStatusProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.EventUpdateStatus",
      value: EventUpdateStatus.encode(message).finish()
    };
  }
};