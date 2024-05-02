import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON } from "../../types/v1/status";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export enum SubscriptionType {
  TYPE_UNSPECIFIED = 0,
  TYPE_NODE = 1,
  TYPE_PLAN = 2,
  UNRECOGNIZED = -1,
}
export const SubscriptionTypeSDKType = SubscriptionType;
export const SubscriptionTypeAmino = SubscriptionType;
export function subscriptionTypeFromJSON(object: any): SubscriptionType {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return SubscriptionType.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_NODE":
      return SubscriptionType.TYPE_NODE;
    case 2:
    case "TYPE_PLAN":
      return SubscriptionType.TYPE_PLAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionType.UNRECOGNIZED;
  }
}
export function subscriptionTypeToJSON(object: SubscriptionType): string {
  switch (object) {
    case SubscriptionType.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case SubscriptionType.TYPE_NODE:
      return "TYPE_NODE";
    case SubscriptionType.TYPE_PLAN:
      return "TYPE_PLAN";
    case SubscriptionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface BaseSubscription {
  id: bigint;
  address: string;
  inactiveAt: Timestamp;
  status: Status;
  statusAt: Timestamp;
}
export interface BaseSubscriptionProtoMsg {
  typeUrl: "/sentinel.subscription.v2.BaseSubscription";
  value: Uint8Array;
}
export interface BaseSubscriptionAmino {
  id?: string;
  address?: string;
  inactive_at?: string;
  status?: Status;
  status_at?: string;
}
export interface BaseSubscriptionAminoMsg {
  type: "/sentinel.subscription.v2.BaseSubscription";
  value: BaseSubscriptionAmino;
}
export interface BaseSubscriptionSDKType {
  id: bigint;
  address: string;
  inactive_at: TimestampSDKType;
  status: Status;
  status_at: TimestampSDKType;
}
export interface NodeSubscription {
  base?: BaseSubscription;
  nodeAddress: string;
  gigabytes: bigint;
  hours: bigint;
  deposit: Coin;
}
export interface NodeSubscriptionProtoMsg {
  typeUrl: "/sentinel.subscription.v2.NodeSubscription";
  value: Uint8Array;
}
export interface NodeSubscriptionAmino {
  base?: BaseSubscriptionAmino;
  node_address?: string;
  gigabytes?: string;
  hours?: string;
  deposit?: CoinAmino;
}
export interface NodeSubscriptionAminoMsg {
  type: "/sentinel.subscription.v2.NodeSubscription";
  value: NodeSubscriptionAmino;
}
export interface NodeSubscriptionSDKType {
  base?: BaseSubscriptionSDKType;
  node_address: string;
  gigabytes: bigint;
  hours: bigint;
  deposit: CoinSDKType;
}
export interface PlanSubscription {
  base?: BaseSubscription;
  planId: bigint;
  denom: string;
}
export interface PlanSubscriptionProtoMsg {
  typeUrl: "/sentinel.subscription.v2.PlanSubscription";
  value: Uint8Array;
}
export interface PlanSubscriptionAmino {
  base?: BaseSubscriptionAmino;
  plan_id?: string;
  denom?: string;
}
export interface PlanSubscriptionAminoMsg {
  type: "/sentinel.subscription.v2.PlanSubscription";
  value: PlanSubscriptionAmino;
}
export interface PlanSubscriptionSDKType {
  base?: BaseSubscriptionSDKType;
  plan_id: bigint;
  denom: string;
}
function createBaseBaseSubscription(): BaseSubscription {
  return {
    id: BigInt(0),
    address: "",
    inactiveAt: Timestamp.fromPartial({}),
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const BaseSubscription = {
  typeUrl: "/sentinel.subscription.v2.BaseSubscription",
  encode(message: BaseSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(message.inactiveAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BaseSubscription {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<BaseSubscription>): BaseSubscription {
    const message = createBaseBaseSubscription();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.inactiveAt = object.inactiveAt !== undefined && object.inactiveAt !== null ? Timestamp.fromPartial(object.inactiveAt) : undefined;
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: BaseSubscriptionAmino): BaseSubscription {
    const message = createBaseBaseSubscription();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
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
  toAmino(message: BaseSubscription): BaseSubscriptionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.inactive_at = message.inactiveAt ? Timestamp.toAmino(message.inactiveAt) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_at = message.statusAt ? Timestamp.toAmino(message.statusAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseSubscriptionAminoMsg): BaseSubscription {
    return BaseSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseSubscriptionProtoMsg): BaseSubscription {
    return BaseSubscription.decode(message.value);
  },
  toProto(message: BaseSubscription): Uint8Array {
    return BaseSubscription.encode(message).finish();
  },
  toProtoMsg(message: BaseSubscription): BaseSubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.BaseSubscription",
      value: BaseSubscription.encode(message).finish()
    };
  }
};
function createBaseNodeSubscription(): NodeSubscription {
  return {
    base: undefined,
    nodeAddress: "",
    gigabytes: BigInt(0),
    hours: BigInt(0),
    deposit: Coin.fromPartial({})
  };
}
export const NodeSubscription = {
  typeUrl: "/sentinel.subscription.v2.NodeSubscription",
  encode(message: NodeSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== undefined) {
      BaseSubscription.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.gigabytes !== BigInt(0)) {
      writer.uint32(24).int64(message.gigabytes);
    }
    if (message.hours !== BigInt(0)) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): NodeSubscription {
    return {
      base: isSet(object.base) ? BaseSubscription.fromJSON(object.base) : undefined,
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      gigabytes: isSet(object.gigabytes) ? BigInt(object.gigabytes.toString()) : BigInt(0),
      hours: isSet(object.hours) ? BigInt(object.hours.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  fromPartial(object: Partial<NodeSubscription>): NodeSubscription {
    const message = createBaseNodeSubscription();
    message.base = object.base !== undefined && object.base !== null ? BaseSubscription.fromPartial(object.base) : undefined;
    message.nodeAddress = object.nodeAddress ?? "";
    message.gigabytes = object.gigabytes !== undefined && object.gigabytes !== null ? BigInt(object.gigabytes.toString()) : BigInt(0);
    message.hours = object.hours !== undefined && object.hours !== null ? BigInt(object.hours.toString()) : BigInt(0);
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: NodeSubscriptionAmino): NodeSubscription {
    const message = createBaseNodeSubscription();
    if (object.base !== undefined && object.base !== null) {
      message.base = BaseSubscription.fromAmino(object.base);
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.gigabytes !== undefined && object.gigabytes !== null) {
      message.gigabytes = BigInt(object.gigabytes);
    }
    if (object.hours !== undefined && object.hours !== null) {
      message.hours = BigInt(object.hours);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: NodeSubscription): NodeSubscriptionAmino {
    const obj: any = {};
    obj.base = message.base ? BaseSubscription.toAmino(message.base) : undefined;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.gigabytes = message.gigabytes !== BigInt(0) ? message.gigabytes.toString() : undefined;
    obj.hours = message.hours !== BigInt(0) ? message.hours.toString() : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: NodeSubscriptionAminoMsg): NodeSubscription {
    return NodeSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeSubscriptionProtoMsg): NodeSubscription {
    return NodeSubscription.decode(message.value);
  },
  toProto(message: NodeSubscription): Uint8Array {
    return NodeSubscription.encode(message).finish();
  },
  toProtoMsg(message: NodeSubscription): NodeSubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.NodeSubscription",
      value: NodeSubscription.encode(message).finish()
    };
  }
};
function createBasePlanSubscription(): PlanSubscription {
  return {
    base: undefined,
    planId: BigInt(0),
    denom: ""
  };
}
export const PlanSubscription = {
  typeUrl: "/sentinel.subscription.v2.PlanSubscription",
  encode(message: PlanSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== undefined) {
      BaseSubscription.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.planId !== BigInt(0)) {
      writer.uint32(16).uint64(message.planId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): PlanSubscription {
    return {
      base: isSet(object.base) ? BaseSubscription.fromJSON(object.base) : undefined,
      planId: isSet(object.planId) ? BigInt(object.planId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<PlanSubscription>): PlanSubscription {
    const message = createBasePlanSubscription();
    message.base = object.base !== undefined && object.base !== null ? BaseSubscription.fromPartial(object.base) : undefined;
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: PlanSubscriptionAmino): PlanSubscription {
    const message = createBasePlanSubscription();
    if (object.base !== undefined && object.base !== null) {
      message.base = BaseSubscription.fromAmino(object.base);
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: PlanSubscription): PlanSubscriptionAmino {
    const obj: any = {};
    obj.base = message.base ? BaseSubscription.toAmino(message.base) : undefined;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: PlanSubscriptionAminoMsg): PlanSubscription {
    return PlanSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: PlanSubscriptionProtoMsg): PlanSubscription {
    return PlanSubscription.decode(message.value);
  },
  toProto(message: PlanSubscription): Uint8Array {
    return PlanSubscription.encode(message).finish();
  },
  toProtoMsg(message: PlanSubscription): PlanSubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.PlanSubscription",
      value: PlanSubscription.encode(message).finish()
    };
  }
};