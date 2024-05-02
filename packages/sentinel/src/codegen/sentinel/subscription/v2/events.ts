import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventUpdateStatus {
  status: Status;
  address: string;
  id: bigint;
  planId: bigint;
}
export interface EventUpdateStatusProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventUpdateStatus";
  value: Uint8Array;
}
export interface EventUpdateStatusAmino {
  status?: Status;
  address?: string;
  id?: string;
  plan_id?: string;
}
export interface EventUpdateStatusAminoMsg {
  type: "/sentinel.subscription.v2.EventUpdateStatus";
  value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
  status: Status;
  address: string;
  id: bigint;
  plan_id: bigint;
}
export interface EventAllocate {
  address: string;
  grantedBytes: string;
  utilisedBytes: string;
  id: bigint;
}
export interface EventAllocateProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventAllocate";
  value: Uint8Array;
}
export interface EventAllocateAmino {
  address?: string;
  granted_bytes?: string;
  utilised_bytes?: string;
  id?: string;
}
export interface EventAllocateAminoMsg {
  type: "/sentinel.subscription.v2.EventAllocate";
  value: EventAllocateAmino;
}
export interface EventAllocateSDKType {
  address: string;
  granted_bytes: string;
  utilised_bytes: string;
  id: bigint;
}
export interface EventCreatePayout {
  address: string;
  nodeAddress: string;
  id: bigint;
}
export interface EventCreatePayoutProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventCreatePayout";
  value: Uint8Array;
}
export interface EventCreatePayoutAmino {
  address?: string;
  node_address?: string;
  id?: string;
}
export interface EventCreatePayoutAminoMsg {
  type: "/sentinel.subscription.v2.EventCreatePayout";
  value: EventCreatePayoutAmino;
}
export interface EventCreatePayoutSDKType {
  address: string;
  node_address: string;
  id: bigint;
}
export interface EventPayForPayout {
  address: string;
  nodeAddress: string;
  payment: string;
  stakingReward: string;
  id: bigint;
}
export interface EventPayForPayoutProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventPayForPayout";
  value: Uint8Array;
}
export interface EventPayForPayoutAmino {
  address?: string;
  node_address?: string;
  payment?: string;
  staking_reward?: string;
  id?: string;
}
export interface EventPayForPayoutAminoMsg {
  type: "/sentinel.subscription.v2.EventPayForPayout";
  value: EventPayForPayoutAmino;
}
export interface EventPayForPayoutSDKType {
  address: string;
  node_address: string;
  payment: string;
  staking_reward: string;
  id: bigint;
}
export interface EventPayForPlan {
  address: string;
  payment: string;
  providerAddress: string;
  stakingReward: string;
  id: bigint;
}
export interface EventPayForPlanProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventPayForPlan";
  value: Uint8Array;
}
export interface EventPayForPlanAmino {
  address?: string;
  payment?: string;
  provider_address?: string;
  staking_reward?: string;
  id?: string;
}
export interface EventPayForPlanAminoMsg {
  type: "/sentinel.subscription.v2.EventPayForPlan";
  value: EventPayForPlanAmino;
}
export interface EventPayForPlanSDKType {
  address: string;
  payment: string;
  provider_address: string;
  staking_reward: string;
  id: bigint;
}
export interface EventPayForSession {
  address: string;
  nodeAddress: string;
  payment: string;
  stakingReward: string;
  sessionId: bigint;
  subscriptionId: bigint;
}
export interface EventPayForSessionProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventPayForSession";
  value: Uint8Array;
}
export interface EventPayForSessionAmino {
  address?: string;
  node_address?: string;
  payment?: string;
  staking_reward?: string;
  session_id?: string;
  subscription_id?: string;
}
export interface EventPayForSessionAminoMsg {
  type: "/sentinel.subscription.v2.EventPayForSession";
  value: EventPayForSessionAmino;
}
export interface EventPayForSessionSDKType {
  address: string;
  node_address: string;
  payment: string;
  staking_reward: string;
  session_id: bigint;
  subscription_id: bigint;
}
export interface EventRefund {
  address: string;
  amount: string;
  id: bigint;
}
export interface EventRefundProtoMsg {
  typeUrl: "/sentinel.subscription.v2.EventRefund";
  value: Uint8Array;
}
export interface EventRefundAmino {
  address?: string;
  amount?: string;
  id?: string;
}
export interface EventRefundAminoMsg {
  type: "/sentinel.subscription.v2.EventRefund";
  value: EventRefundAmino;
}
export interface EventRefundSDKType {
  address: string;
  amount: string;
  id: bigint;
}
function createBaseEventUpdateStatus(): EventUpdateStatus {
  return {
    status: 0,
    address: "",
    id: BigInt(0),
    planId: BigInt(0)
  };
}
export const EventUpdateStatus = {
  typeUrl: "/sentinel.subscription.v2.EventUpdateStatus",
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
    if (message.planId !== BigInt(0)) {
      writer.uint32(32).uint64(message.planId);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateStatus {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      planId: isSet(object.planId) ? BigInt(object.planId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
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
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    return message;
  },
  toAmino(message: EventUpdateStatus): EventUpdateStatusAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
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
      typeUrl: "/sentinel.subscription.v2.EventUpdateStatus",
      value: EventUpdateStatus.encode(message).finish()
    };
  }
};
function createBaseEventAllocate(): EventAllocate {
  return {
    address: "",
    grantedBytes: "",
    utilisedBytes: "",
    id: BigInt(0)
  };
}
export const EventAllocate = {
  typeUrl: "/sentinel.subscription.v2.EventAllocate",
  encode(message: EventAllocate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.grantedBytes !== "") {
      writer.uint32(18).string(message.grantedBytes);
    }
    if (message.utilisedBytes !== "") {
      writer.uint32(26).string(message.utilisedBytes);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventAllocate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      grantedBytes: isSet(object.grantedBytes) ? String(object.grantedBytes) : "",
      utilisedBytes: isSet(object.utilisedBytes) ? String(object.utilisedBytes) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventAllocate>): EventAllocate {
    const message = createBaseEventAllocate();
    message.address = object.address ?? "";
    message.grantedBytes = object.grantedBytes ?? "";
    message.utilisedBytes = object.utilisedBytes ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAllocateAmino): EventAllocate {
    const message = createBaseEventAllocate();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.granted_bytes !== undefined && object.granted_bytes !== null) {
      message.grantedBytes = object.granted_bytes;
    }
    if (object.utilised_bytes !== undefined && object.utilised_bytes !== null) {
      message.utilisedBytes = object.utilised_bytes;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventAllocate): EventAllocateAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.granted_bytes = message.grantedBytes === "" ? undefined : message.grantedBytes;
    obj.utilised_bytes = message.utilisedBytes === "" ? undefined : message.utilisedBytes;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAllocateAminoMsg): EventAllocate {
    return EventAllocate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAllocateProtoMsg): EventAllocate {
    return EventAllocate.decode(message.value);
  },
  toProto(message: EventAllocate): Uint8Array {
    return EventAllocate.encode(message).finish();
  },
  toProtoMsg(message: EventAllocate): EventAllocateProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.EventAllocate",
      value: EventAllocate.encode(message).finish()
    };
  }
};
function createBaseEventCreatePayout(): EventCreatePayout {
  return {
    address: "",
    nodeAddress: "",
    id: BigInt(0)
  };
}
export const EventCreatePayout = {
  typeUrl: "/sentinel.subscription.v2.EventCreatePayout",
  encode(message: EventCreatePayout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): EventCreatePayout {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventCreatePayout>): EventCreatePayout {
    const message = createBaseEventCreatePayout();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreatePayoutAmino): EventCreatePayout {
    const message = createBaseEventCreatePayout();
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
  toAmino(message: EventCreatePayout): EventCreatePayoutAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreatePayoutAminoMsg): EventCreatePayout {
    return EventCreatePayout.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreatePayoutProtoMsg): EventCreatePayout {
    return EventCreatePayout.decode(message.value);
  },
  toProto(message: EventCreatePayout): Uint8Array {
    return EventCreatePayout.encode(message).finish();
  },
  toProtoMsg(message: EventCreatePayout): EventCreatePayoutProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.EventCreatePayout",
      value: EventCreatePayout.encode(message).finish()
    };
  }
};
function createBaseEventPayForPayout(): EventPayForPayout {
  return {
    address: "",
    nodeAddress: "",
    payment: "",
    stakingReward: "",
    id: BigInt(0)
  };
}
export const EventPayForPayout = {
  typeUrl: "/sentinel.subscription.v2.EventPayForPayout",
  encode(message: EventPayForPayout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.payment !== "") {
      writer.uint32(26).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(34).string(message.stakingReward);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventPayForPayout {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      payment: isSet(object.payment) ? String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? String(object.stakingReward) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPayForPayout>): EventPayForPayout {
    const message = createBaseEventPayForPayout();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPayForPayoutAmino): EventPayForPayout {
    const message = createBaseEventPayForPayout();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = object.payment;
    }
    if (object.staking_reward !== undefined && object.staking_reward !== null) {
      message.stakingReward = object.staking_reward;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventPayForPayout): EventPayForPayoutAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.payment = message.payment === "" ? undefined : message.payment;
    obj.staking_reward = message.stakingReward === "" ? undefined : message.stakingReward;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPayForPayoutAminoMsg): EventPayForPayout {
    return EventPayForPayout.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPayForPayoutProtoMsg): EventPayForPayout {
    return EventPayForPayout.decode(message.value);
  },
  toProto(message: EventPayForPayout): Uint8Array {
    return EventPayForPayout.encode(message).finish();
  },
  toProtoMsg(message: EventPayForPayout): EventPayForPayoutProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.EventPayForPayout",
      value: EventPayForPayout.encode(message).finish()
    };
  }
};
function createBaseEventPayForPlan(): EventPayForPlan {
  return {
    address: "",
    payment: "",
    providerAddress: "",
    stakingReward: "",
    id: BigInt(0)
  };
}
export const EventPayForPlan = {
  typeUrl: "/sentinel.subscription.v2.EventPayForPlan",
  encode(message: EventPayForPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.payment !== "") {
      writer.uint32(18).string(message.payment);
    }
    if (message.providerAddress !== "") {
      writer.uint32(26).string(message.providerAddress);
    }
    if (message.stakingReward !== "") {
      writer.uint32(34).string(message.stakingReward);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventPayForPlan {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      payment: isSet(object.payment) ? String(object.payment) : "",
      providerAddress: isSet(object.providerAddress) ? String(object.providerAddress) : "",
      stakingReward: isSet(object.stakingReward) ? String(object.stakingReward) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPayForPlan>): EventPayForPlan {
    const message = createBaseEventPayForPlan();
    message.address = object.address ?? "";
    message.payment = object.payment ?? "";
    message.providerAddress = object.providerAddress ?? "";
    message.stakingReward = object.stakingReward ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPayForPlanAmino): EventPayForPlan {
    const message = createBaseEventPayForPlan();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = object.payment;
    }
    if (object.provider_address !== undefined && object.provider_address !== null) {
      message.providerAddress = object.provider_address;
    }
    if (object.staking_reward !== undefined && object.staking_reward !== null) {
      message.stakingReward = object.staking_reward;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventPayForPlan): EventPayForPlanAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.payment = message.payment === "" ? undefined : message.payment;
    obj.provider_address = message.providerAddress === "" ? undefined : message.providerAddress;
    obj.staking_reward = message.stakingReward === "" ? undefined : message.stakingReward;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPayForPlanAminoMsg): EventPayForPlan {
    return EventPayForPlan.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPayForPlanProtoMsg): EventPayForPlan {
    return EventPayForPlan.decode(message.value);
  },
  toProto(message: EventPayForPlan): Uint8Array {
    return EventPayForPlan.encode(message).finish();
  },
  toProtoMsg(message: EventPayForPlan): EventPayForPlanProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.EventPayForPlan",
      value: EventPayForPlan.encode(message).finish()
    };
  }
};
function createBaseEventPayForSession(): EventPayForSession {
  return {
    address: "",
    nodeAddress: "",
    payment: "",
    stakingReward: "",
    sessionId: BigInt(0),
    subscriptionId: BigInt(0)
  };
}
export const EventPayForSession = {
  typeUrl: "/sentinel.subscription.v2.EventPayForSession",
  encode(message: EventPayForSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.payment !== "") {
      writer.uint32(26).string(message.payment);
    }
    if (message.stakingReward !== "") {
      writer.uint32(34).string(message.stakingReward);
    }
    if (message.sessionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.sessionId);
    }
    if (message.subscriptionId !== BigInt(0)) {
      writer.uint32(48).uint64(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): EventPayForSession {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      payment: isSet(object.payment) ? String(object.payment) : "",
      stakingReward: isSet(object.stakingReward) ? String(object.stakingReward) : "",
      sessionId: isSet(object.sessionId) ? BigInt(object.sessionId.toString()) : BigInt(0),
      subscriptionId: isSet(object.subscriptionId) ? BigInt(object.subscriptionId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPayForSession>): EventPayForSession {
    const message = createBaseEventPayForSession();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.payment = object.payment ?? "";
    message.stakingReward = object.stakingReward ?? "";
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? BigInt(object.sessionId.toString()) : BigInt(0);
    message.subscriptionId = object.subscriptionId !== undefined && object.subscriptionId !== null ? BigInt(object.subscriptionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPayForSessionAmino): EventPayForSession {
    const message = createBaseEventPayForSession();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = object.payment;
    }
    if (object.staking_reward !== undefined && object.staking_reward !== null) {
      message.stakingReward = object.staking_reward;
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = BigInt(object.session_id);
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = BigInt(object.subscription_id);
    }
    return message;
  },
  toAmino(message: EventPayForSession): EventPayForSessionAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.payment = message.payment === "" ? undefined : message.payment;
    obj.staking_reward = message.stakingReward === "" ? undefined : message.stakingReward;
    obj.session_id = message.sessionId !== BigInt(0) ? message.sessionId.toString() : undefined;
    obj.subscription_id = message.subscriptionId !== BigInt(0) ? message.subscriptionId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPayForSessionAminoMsg): EventPayForSession {
    return EventPayForSession.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPayForSessionProtoMsg): EventPayForSession {
    return EventPayForSession.decode(message.value);
  },
  toProto(message: EventPayForSession): Uint8Array {
    return EventPayForSession.encode(message).finish();
  },
  toProtoMsg(message: EventPayForSession): EventPayForSessionProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.EventPayForSession",
      value: EventPayForSession.encode(message).finish()
    };
  }
};
function createBaseEventRefund(): EventRefund {
  return {
    address: "",
    amount: "",
    id: BigInt(0)
  };
}
export const EventRefund = {
  typeUrl: "/sentinel.subscription.v2.EventRefund",
  encode(message: EventRefund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventRefund {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventRefund>): EventRefund {
    const message = createBaseEventRefund();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRefundAmino): EventRefund {
    const message = createBaseEventRefund();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventRefund): EventRefundAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRefundAminoMsg): EventRefund {
    return EventRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRefundProtoMsg): EventRefund {
    return EventRefund.decode(message.value);
  },
  toProto(message: EventRefund): Uint8Array {
    return EventRefund.encode(message).finish();
  },
  toProtoMsg(message: EventRefund): EventRefundProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.EventRefund",
      value: EventRefund.encode(message).finish()
    };
  }
};