import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventCreate {
  address: string;
  id: bigint;
}
export interface EventCreateProtoMsg {
  typeUrl: "/sentinel.plan.v2.EventCreate";
  value: Uint8Array;
}
export interface EventCreateAmino {
  address?: string;
  id?: string;
}
export interface EventCreateAminoMsg {
  type: "/sentinel.plan.v2.EventCreate";
  value: EventCreateAmino;
}
export interface EventCreateSDKType {
  address: string;
  id: bigint;
}
export interface EventUpdateStatus {
  status: Status;
  address: string;
  id: bigint;
}
export interface EventUpdateStatusProtoMsg {
  typeUrl: "/sentinel.plan.v2.EventUpdateStatus";
  value: Uint8Array;
}
export interface EventUpdateStatusAmino {
  status?: Status;
  address?: string;
  id?: string;
}
export interface EventUpdateStatusAminoMsg {
  type: "/sentinel.plan.v2.EventUpdateStatus";
  value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
  status: Status;
  address: string;
  id: bigint;
}
export interface EventLinkNode {
  address: string;
  nodeAddress: string;
  id: bigint;
}
export interface EventLinkNodeProtoMsg {
  typeUrl: "/sentinel.plan.v2.EventLinkNode";
  value: Uint8Array;
}
export interface EventLinkNodeAmino {
  address?: string;
  node_address?: string;
  id?: string;
}
export interface EventLinkNodeAminoMsg {
  type: "/sentinel.plan.v2.EventLinkNode";
  value: EventLinkNodeAmino;
}
export interface EventLinkNodeSDKType {
  address: string;
  node_address: string;
  id: bigint;
}
export interface EventUnlinkNode {
  address: string;
  nodeAddress: string;
  id: bigint;
}
export interface EventUnlinkNodeProtoMsg {
  typeUrl: "/sentinel.plan.v2.EventUnlinkNode";
  value: Uint8Array;
}
export interface EventUnlinkNodeAmino {
  address?: string;
  node_address?: string;
  id?: string;
}
export interface EventUnlinkNodeAminoMsg {
  type: "/sentinel.plan.v2.EventUnlinkNode";
  value: EventUnlinkNodeAmino;
}
export interface EventUnlinkNodeSDKType {
  address: string;
  node_address: string;
  id: bigint;
}
export interface EventCreateSubscription {
  address: string;
  providerAddress: string;
  id: bigint;
  planId: bigint;
}
export interface EventCreateSubscriptionProtoMsg {
  typeUrl: "/sentinel.plan.v2.EventCreateSubscription";
  value: Uint8Array;
}
export interface EventCreateSubscriptionAmino {
  address?: string;
  provider_address?: string;
  id?: string;
  plan_id?: string;
}
export interface EventCreateSubscriptionAminoMsg {
  type: "/sentinel.plan.v2.EventCreateSubscription";
  value: EventCreateSubscriptionAmino;
}
export interface EventCreateSubscriptionSDKType {
  address: string;
  provider_address: string;
  id: bigint;
  plan_id: bigint;
}
function createBaseEventCreate(): EventCreate {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const EventCreate = {
  typeUrl: "/sentinel.plan.v2.EventCreate",
  encode(message: EventCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventCreate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateAmino): EventCreate {
    const message = createBaseEventCreate();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventCreate): EventCreateAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateAminoMsg): EventCreate {
    return EventCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateProtoMsg): EventCreate {
    return EventCreate.decode(message.value);
  },
  toProto(message: EventCreate): Uint8Array {
    return EventCreate.encode(message).finish();
  },
  toProtoMsg(message: EventCreate): EventCreateProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.EventCreate",
      value: EventCreate.encode(message).finish()
    };
  }
};
function createBaseEventUpdateStatus(): EventUpdateStatus {
  return {
    status: 0,
    address: "",
    id: BigInt(0)
  };
}
export const EventUpdateStatus = {
  typeUrl: "/sentinel.plan.v2.EventUpdateStatus",
  encode(message: EventUpdateStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateStatus {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
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
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventUpdateStatus): EventUpdateStatusAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
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
      typeUrl: "/sentinel.plan.v2.EventUpdateStatus",
      value: EventUpdateStatus.encode(message).finish()
    };
  }
};
function createBaseEventLinkNode(): EventLinkNode {
  return {
    address: "",
    nodeAddress: "",
    id: BigInt(0)
  };
}
export const EventLinkNode = {
  typeUrl: "/sentinel.plan.v2.EventLinkNode",
  encode(message: EventLinkNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventLinkNode {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventLinkNode>): EventLinkNode {
    const message = createBaseEventLinkNode();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventLinkNodeAmino): EventLinkNode {
    const message = createBaseEventLinkNode();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventLinkNode): EventLinkNodeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventLinkNodeAminoMsg): EventLinkNode {
    return EventLinkNode.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLinkNodeProtoMsg): EventLinkNode {
    return EventLinkNode.decode(message.value);
  },
  toProto(message: EventLinkNode): Uint8Array {
    return EventLinkNode.encode(message).finish();
  },
  toProtoMsg(message: EventLinkNode): EventLinkNodeProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.EventLinkNode",
      value: EventLinkNode.encode(message).finish()
    };
  }
};
function createBaseEventUnlinkNode(): EventUnlinkNode {
  return {
    address: "",
    nodeAddress: "",
    id: BigInt(0)
  };
}
export const EventUnlinkNode = {
  typeUrl: "/sentinel.plan.v2.EventUnlinkNode",
  encode(message: EventUnlinkNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventUnlinkNode {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUnlinkNode>): EventUnlinkNode {
    const message = createBaseEventUnlinkNode();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventUnlinkNodeAmino): EventUnlinkNode {
    const message = createBaseEventUnlinkNode();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventUnlinkNode): EventUnlinkNodeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUnlinkNodeAminoMsg): EventUnlinkNode {
    return EventUnlinkNode.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnlinkNodeProtoMsg): EventUnlinkNode {
    return EventUnlinkNode.decode(message.value);
  },
  toProto(message: EventUnlinkNode): Uint8Array {
    return EventUnlinkNode.encode(message).finish();
  },
  toProtoMsg(message: EventUnlinkNode): EventUnlinkNodeProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.EventUnlinkNode",
      value: EventUnlinkNode.encode(message).finish()
    };
  }
};
function createBaseEventCreateSubscription(): EventCreateSubscription {
  return {
    address: "",
    providerAddress: "",
    id: BigInt(0),
    planId: BigInt(0)
  };
}
export const EventCreateSubscription = {
  typeUrl: "/sentinel.plan.v2.EventCreateSubscription",
  encode(message: EventCreateSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.planId !== BigInt(0)) {
      writer.uint32(32).uint64(message.planId);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateSubscription {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      providerAddress: isSet(object.providerAddress) ? String(object.providerAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      planId: isSet(object.planId) ? BigInt(object.planId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventCreateSubscription>): EventCreateSubscription {
    const message = createBaseEventCreateSubscription();
    message.address = object.address ?? "";
    message.providerAddress = object.providerAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateSubscriptionAmino): EventCreateSubscription {
    const message = createBaseEventCreateSubscription();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.provider_address !== undefined && object.provider_address !== null) {
      message.providerAddress = object.provider_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    return message;
  },
  toAmino(message: EventCreateSubscription): EventCreateSubscriptionAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.provider_address = message.providerAddress === "" ? undefined : message.providerAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateSubscriptionAminoMsg): EventCreateSubscription {
    return EventCreateSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateSubscriptionProtoMsg): EventCreateSubscription {
    return EventCreateSubscription.decode(message.value);
  },
  toProto(message: EventCreateSubscription): Uint8Array {
    return EventCreateSubscription.encode(message).finish();
  },
  toProtoMsg(message: EventCreateSubscription): EventCreateSubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.EventCreateSubscription",
      value: EventCreateSubscription.encode(message).finish()
    };
  }
};