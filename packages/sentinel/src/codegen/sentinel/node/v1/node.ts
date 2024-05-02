import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Node {
  address: string;
  provider: string;
  price: Coin[];
  remoteUrl: string;
  status: Status;
  statusAt: Timestamp;
}
export interface NodeProtoMsg {
  typeUrl: "/sentinel.node.v1.Node";
  value: Uint8Array;
}
export interface NodeAmino {
  address?: string;
  provider?: string;
  price?: CoinAmino[];
  remote_url?: string;
  status?: Status;
  status_at?: string;
}
export interface NodeAminoMsg {
  type: "/sentinel.node.v1.Node";
  value: NodeAmino;
}
export interface NodeSDKType {
  address: string;
  provider: string;
  price: CoinSDKType[];
  remote_url: string;
  status: Status;
  status_at: TimestampSDKType;
}
function createBaseNode(): Node {
  return {
    address: "",
    provider: "",
    price: [],
    remoteUrl: "",
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Node = {
  typeUrl: "/sentinel.node.v1.Node",
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Node {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Node>): Node {
    const message = createBaseNode();
    message.address = object.address ?? "";
    message.provider = object.provider ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: NodeAmino): Node {
    const message = createBaseNode();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.price = object.price?.map(e => Coin.fromAmino(e)) || [];
    if (object.remote_url !== undefined && object.remote_url !== null) {
      message.remoteUrl = object.remote_url;
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
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.price = message.price;
    }
    obj.remote_url = message.remoteUrl === "" ? undefined : message.remoteUrl;
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
      typeUrl: "/sentinel.node.v1.Node",
      value: Node.encode(message).finish()
    };
  }
};