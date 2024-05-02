import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Subscription {
  id: bigint;
  owner: string;
  node: string;
  price: Coin;
  deposit: Coin;
  plan: bigint;
  denom: string;
  expiry: Timestamp;
  free: string;
  status: Status;
  statusAt: Timestamp;
}
export interface SubscriptionProtoMsg {
  typeUrl: "/sentinel.subscription.v1.Subscription";
  value: Uint8Array;
}
export interface SubscriptionAmino {
  id?: string;
  owner?: string;
  node?: string;
  price?: CoinAmino;
  deposit?: CoinAmino;
  plan?: string;
  denom?: string;
  expiry?: string;
  free?: string;
  status?: Status;
  status_at?: string;
}
export interface SubscriptionAminoMsg {
  type: "/sentinel.subscription.v1.Subscription";
  value: SubscriptionAmino;
}
export interface SubscriptionSDKType {
  id: bigint;
  owner: string;
  node: string;
  price: CoinSDKType;
  deposit: CoinSDKType;
  plan: bigint;
  denom: string;
  expiry: TimestampSDKType;
  free: string;
  status: Status;
  status_at: TimestampSDKType;
}
function createBaseSubscription(): Subscription {
  return {
    id: BigInt(0),
    owner: "",
    node: "",
    price: Coin.fromPartial({}),
    deposit: Coin.fromPartial({}),
    plan: BigInt(0),
    denom: "",
    expiry: Timestamp.fromPartial({}),
    free: "",
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Subscription = {
  typeUrl: "/sentinel.subscription.v1.Subscription",
  encode(message: Subscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.node !== "") {
      writer.uint32(26).string(message.node);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(42).fork()).ldelim();
    }
    if (message.plan !== BigInt(0)) {
      writer.uint32(48).uint64(message.plan);
    }
    if (message.denom !== "") {
      writer.uint32(58).string(message.denom);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(66).fork()).ldelim();
    }
    if (message.free !== "") {
      writer.uint32(74).string(message.free);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Subscription {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      node: isSet(object.node) ? String(object.node) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      plan: isSet(object.plan) ? BigInt(object.plan.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
      free: isSet(object.free) ? String(object.free) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Subscription>): Subscription {
    const message = createBaseSubscription();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.node = object.node ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.plan = object.plan !== undefined && object.plan !== null ? BigInt(object.plan.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    message.free = object.free ?? "";
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: SubscriptionAmino): Subscription {
    const message = createBaseSubscription();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.node !== undefined && object.node !== null) {
      message.node = object.node;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = BigInt(object.plan);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = Timestamp.fromAmino(object.expiry);
    }
    if (object.free !== undefined && object.free !== null) {
      message.free = object.free;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.status_at !== undefined && object.status_at !== null) {
      message.statusAt = Timestamp.fromAmino(object.status_at);
    }
    return message;
  },
  toAmino(message: Subscription): SubscriptionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.node = message.node === "" ? undefined : message.node;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.plan = message.plan !== BigInt(0) ? message.plan.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.expiry = message.expiry ? Timestamp.toAmino(message.expiry) : undefined;
    obj.free = message.free === "" ? undefined : message.free;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_at = message.statusAt ? Timestamp.toAmino(message.statusAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubscriptionAminoMsg): Subscription {
    return Subscription.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscriptionProtoMsg): Subscription {
    return Subscription.decode(message.value);
  },
  toProto(message: Subscription): Uint8Array {
    return Subscription.encode(message).finish();
  },
  toProtoMsg(message: Subscription): SubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v1.Subscription",
      value: Subscription.encode(message).finish()
    };
  }
};