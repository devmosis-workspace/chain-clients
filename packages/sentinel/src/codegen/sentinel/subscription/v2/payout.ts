import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Payout {
  id: bigint;
  address: string;
  nodeAddress: string;
  hours: bigint;
  price: Coin;
  nextAt: Timestamp;
}
export interface PayoutProtoMsg {
  typeUrl: "/sentinel.subscription.v2.Payout";
  value: Uint8Array;
}
export interface PayoutAmino {
  id?: string;
  address?: string;
  node_address?: string;
  hours?: string;
  price?: CoinAmino;
  next_at?: string;
}
export interface PayoutAminoMsg {
  type: "/sentinel.subscription.v2.Payout";
  value: PayoutAmino;
}
export interface PayoutSDKType {
  id: bigint;
  address: string;
  node_address: string;
  hours: bigint;
  price: CoinSDKType;
  next_at: TimestampSDKType;
}
function createBasePayout(): Payout {
  return {
    id: BigInt(0),
    address: "",
    nodeAddress: "",
    hours: BigInt(0),
    price: Coin.fromPartial({}),
    nextAt: Timestamp.fromPartial({})
  };
}
export const Payout = {
  typeUrl: "/sentinel.subscription.v2.Payout",
  encode(message: Payout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    if (message.hours !== BigInt(0)) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.nextAt !== undefined) {
      Timestamp.encode(message.nextAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Payout {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      hours: isSet(object.hours) ? BigInt(object.hours.toString()) : BigInt(0),
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      nextAt: isSet(object.nextAt) ? fromJsonTimestamp(object.nextAt) : undefined
    };
  },
  fromPartial(object: Partial<Payout>): Payout {
    const message = createBasePayout();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.hours = object.hours !== undefined && object.hours !== null ? BigInt(object.hours.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.nextAt = object.nextAt !== undefined && object.nextAt !== null ? Timestamp.fromPartial(object.nextAt) : undefined;
    return message;
  },
  fromAmino(object: PayoutAmino): Payout {
    const message = createBasePayout();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.hours !== undefined && object.hours !== null) {
      message.hours = BigInt(object.hours);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.next_at !== undefined && object.next_at !== null) {
      message.nextAt = Timestamp.fromAmino(object.next_at);
    }
    return message;
  },
  toAmino(message: Payout): PayoutAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.hours = message.hours !== BigInt(0) ? message.hours.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.next_at = message.nextAt ? Timestamp.toAmino(message.nextAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: PayoutAminoMsg): Payout {
    return Payout.fromAmino(object.value);
  },
  fromProtoMsg(message: PayoutProtoMsg): Payout {
    return Payout.decode(message.value);
  },
  toProto(message: Payout): Uint8Array {
    return Payout.encode(message).finish();
  },
  toProtoMsg(message: Payout): PayoutProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.Payout",
      value: Payout.encode(message).finish()
    };
  }
};