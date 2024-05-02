import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Node {
  address: string;
  gigabytePrices: Coin[];
  hourlyPrices: Coin[];
  remoteUrl: string;
  inactiveAt: Timestamp;
  status: Status;
  statusAt: Timestamp;
}
export interface NodeProtoMsg {
  typeUrl: "/sentinel.node.v2.Node";
  value: Uint8Array;
}
export interface NodeAmino {
  address?: string;
  gigabyte_prices?: CoinAmino[];
  hourly_prices?: CoinAmino[];
  remote_url?: string;
  inactive_at?: string;
  status?: Status;
  status_at?: string;
}
export interface NodeAminoMsg {
  type: "/sentinel.node.v2.Node";
  value: NodeAmino;
}
export interface NodeSDKType {
  address: string;
  gigabyte_prices: CoinSDKType[];
  hourly_prices: CoinSDKType[];
  remote_url: string;
  inactive_at: TimestampSDKType;
  status: Status;
  status_at: TimestampSDKType;
}
function createBaseNode(): Node {
  return {
    address: "",
    gigabytePrices: [],
    hourlyPrices: [],
    remoteUrl: "",
    inactiveAt: Timestamp.fromPartial({}),
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Node = {
  typeUrl: "/sentinel.node.v2.Node",
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.gigabytePrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    if (message.inactiveAt !== undefined) {
      Timestamp.encode(message.inactiveAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Node {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      gigabytePrices: Array.isArray(object?.gigabytePrices) ? object.gigabytePrices.map((e: any) => Coin.fromJSON(e)) : [],
      hourlyPrices: Array.isArray(object?.hourlyPrices) ? object.hourlyPrices.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : "",
      inactiveAt: isSet(object.inactiveAt) ? fromJsonTimestamp(object.inactiveAt) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Node>): Node {
    const message = createBaseNode();
    message.address = object.address ?? "";
    message.gigabytePrices = object.gigabytePrices?.map(e => Coin.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    message.inactiveAt = object.inactiveAt !== undefined && object.inactiveAt !== null ? Timestamp.fromPartial(object.inactiveAt) : undefined;
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: NodeAmino): Node {
    const message = createBaseNode();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.gigabytePrices = object.gigabyte_prices?.map(e => Coin.fromAmino(e)) || [];
    message.hourlyPrices = object.hourly_prices?.map(e => Coin.fromAmino(e)) || [];
    if (object.remote_url !== undefined && object.remote_url !== null) {
      message.remoteUrl = object.remote_url;
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
  toAmino(message: Node): NodeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.gigabytePrices) {
      obj.gigabyte_prices = message.gigabytePrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gigabyte_prices = message.gigabytePrices;
    }
    if (message.hourlyPrices) {
      obj.hourly_prices = message.hourlyPrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.hourly_prices = message.hourlyPrices;
    }
    obj.remote_url = message.remoteUrl === "" ? undefined : message.remoteUrl;
    obj.inactive_at = message.inactiveAt ? Timestamp.toAmino(message.inactiveAt) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_at = message.statusAt ? Timestamp.toAmino(message.statusAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: NodeAminoMsg): Node {
    return Node.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeProtoMsg): Node {
    return Node.decode(message.value);
  },
  toProto(message: Node): Uint8Array {
    return Node.encode(message).finish();
  },
  toProtoMsg(message: Node): NodeProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.Node",
      value: Node.encode(message).finish()
    };
  }
};