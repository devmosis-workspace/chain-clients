import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryAddress {
  channel: string;
  recipient: string;
}
export interface QueryAddressProtoMsg {
  typeUrl: "/noble.forwarding.v1.QueryAddress";
  value: Uint8Array;
}
export interface QueryAddressAmino {
  channel?: string;
  recipient?: string;
}
export interface QueryAddressAminoMsg {
  type: "/noble.forwarding.v1.QueryAddress";
  value: QueryAddressAmino;
}
export interface QueryAddressSDKType {
  channel: string;
  recipient: string;
}
export interface QueryAddressResponse {
  address: string;
  exists: boolean;
}
export interface QueryAddressResponseProtoMsg {
  typeUrl: "/noble.forwarding.v1.QueryAddressResponse";
  value: Uint8Array;
}
export interface QueryAddressResponseAmino {
  address?: string;
  exists?: boolean;
}
export interface QueryAddressResponseAminoMsg {
  type: "/noble.forwarding.v1.QueryAddressResponse";
  value: QueryAddressResponseAmino;
}
export interface QueryAddressResponseSDKType {
  address: string;
  exists: boolean;
}
export interface QueryStatsByChannel {
  channel: string;
}
export interface QueryStatsByChannelProtoMsg {
  typeUrl: "/noble.forwarding.v1.QueryStatsByChannel";
  value: Uint8Array;
}
export interface QueryStatsByChannelAmino {
  channel?: string;
}
export interface QueryStatsByChannelAminoMsg {
  type: "/noble.forwarding.v1.QueryStatsByChannel";
  value: QueryStatsByChannelAmino;
}
export interface QueryStatsByChannelSDKType {
  channel: string;
}
export interface QueryStatsByChannelResponse {
  numOfAccounts: bigint;
  numOfForwards: bigint;
  totalForwarded: Coin[];
}
export interface QueryStatsByChannelResponseProtoMsg {
  typeUrl: "/noble.forwarding.v1.QueryStatsByChannelResponse";
  value: Uint8Array;
}
export interface QueryStatsByChannelResponseAmino {
  num_of_accounts?: string;
  num_of_forwards?: string;
  total_forwarded?: CoinAmino[];
}
export interface QueryStatsByChannelResponseAminoMsg {
  type: "/noble.forwarding.v1.QueryStatsByChannelResponse";
  value: QueryStatsByChannelResponseAmino;
}
export interface QueryStatsByChannelResponseSDKType {
  num_of_accounts: bigint;
  num_of_forwards: bigint;
  total_forwarded: CoinSDKType[];
}
function createBaseQueryAddress(): QueryAddress {
  return {
    channel: "",
    recipient: ""
  };
}
export const QueryAddress = {
  typeUrl: "/noble.forwarding.v1.QueryAddress",
  encode(message: QueryAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(10).string(message.channel);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): QueryAddress {
    return {
      channel: isSet(object.channel) ? String(object.channel) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<QueryAddress>): QueryAddress {
    const message = createBaseQueryAddress();
    message.channel = object.channel ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: QueryAddressAmino): QueryAddress {
    const message = createBaseQueryAddress();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: QueryAddress): QueryAddressAmino {
    const obj: any = {};
    obj.channel = message.channel;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: QueryAddressAminoMsg): QueryAddress {
    return QueryAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressProtoMsg): QueryAddress {
    return QueryAddress.decode(message.value);
  },
  toProto(message: QueryAddress): Uint8Array {
    return QueryAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryAddress): QueryAddressProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.QueryAddress",
      value: QueryAddress.encode(message).finish()
    };
  }
};
function createBaseQueryAddressResponse(): QueryAddressResponse {
  return {
    address: "",
    exists: false
  };
}
export const QueryAddressResponse = {
  typeUrl: "/noble.forwarding.v1.QueryAddressResponse",
  encode(message: QueryAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.exists === true) {
      writer.uint32(16).bool(message.exists);
    }
    return writer;
  },
  fromJSON(object: any): QueryAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      exists: isSet(object.exists) ? Boolean(object.exists) : false
    };
  },
  fromPartial(object: Partial<QueryAddressResponse>): QueryAddressResponse {
    const message = createBaseQueryAddressResponse();
    message.address = object.address ?? "";
    message.exists = object.exists ?? false;
    return message;
  },
  fromAmino(object: QueryAddressResponseAmino): QueryAddressResponse {
    const message = createBaseQueryAddressResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    return message;
  },
  toAmino(message: QueryAddressResponse): QueryAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.exists = message.exists;
    return obj;
  },
  fromAminoMsg(object: QueryAddressResponseAminoMsg): QueryAddressResponse {
    return QueryAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressResponseProtoMsg): QueryAddressResponse {
    return QueryAddressResponse.decode(message.value);
  },
  toProto(message: QueryAddressResponse): Uint8Array {
    return QueryAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressResponse): QueryAddressResponseProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.QueryAddressResponse",
      value: QueryAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStatsByChannel(): QueryStatsByChannel {
  return {
    channel: ""
  };
}
export const QueryStatsByChannel = {
  typeUrl: "/noble.forwarding.v1.QueryStatsByChannel",
  encode(message: QueryStatsByChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(10).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): QueryStatsByChannel {
    return {
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<QueryStatsByChannel>): QueryStatsByChannel {
    const message = createBaseQueryStatsByChannel();
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: QueryStatsByChannelAmino): QueryStatsByChannel {
    const message = createBaseQueryStatsByChannel();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message: QueryStatsByChannel): QueryStatsByChannelAmino {
    const obj: any = {};
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: QueryStatsByChannelAminoMsg): QueryStatsByChannel {
    return QueryStatsByChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatsByChannelProtoMsg): QueryStatsByChannel {
    return QueryStatsByChannel.decode(message.value);
  },
  toProto(message: QueryStatsByChannel): Uint8Array {
    return QueryStatsByChannel.encode(message).finish();
  },
  toProtoMsg(message: QueryStatsByChannel): QueryStatsByChannelProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.QueryStatsByChannel",
      value: QueryStatsByChannel.encode(message).finish()
    };
  }
};
function createBaseQueryStatsByChannelResponse(): QueryStatsByChannelResponse {
  return {
    numOfAccounts: BigInt(0),
    numOfForwards: BigInt(0),
    totalForwarded: []
  };
}
export const QueryStatsByChannelResponse = {
  typeUrl: "/noble.forwarding.v1.QueryStatsByChannelResponse",
  encode(message: QueryStatsByChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numOfAccounts !== BigInt(0)) {
      writer.uint32(8).uint64(message.numOfAccounts);
    }
    if (message.numOfForwards !== BigInt(0)) {
      writer.uint32(16).uint64(message.numOfForwards);
    }
    for (const v of message.totalForwarded) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStatsByChannelResponse {
    return {
      numOfAccounts: isSet(object.numOfAccounts) ? BigInt(object.numOfAccounts.toString()) : BigInt(0),
      numOfForwards: isSet(object.numOfForwards) ? BigInt(object.numOfForwards.toString()) : BigInt(0),
      totalForwarded: Array.isArray(object?.totalForwarded) ? object.totalForwarded.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryStatsByChannelResponse>): QueryStatsByChannelResponse {
    const message = createBaseQueryStatsByChannelResponse();
    message.numOfAccounts = object.numOfAccounts !== undefined && object.numOfAccounts !== null ? BigInt(object.numOfAccounts.toString()) : BigInt(0);
    message.numOfForwards = object.numOfForwards !== undefined && object.numOfForwards !== null ? BigInt(object.numOfForwards.toString()) : BigInt(0);
    message.totalForwarded = object.totalForwarded?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryStatsByChannelResponseAmino): QueryStatsByChannelResponse {
    const message = createBaseQueryStatsByChannelResponse();
    if (object.num_of_accounts !== undefined && object.num_of_accounts !== null) {
      message.numOfAccounts = BigInt(object.num_of_accounts);
    }
    if (object.num_of_forwards !== undefined && object.num_of_forwards !== null) {
      message.numOfForwards = BigInt(object.num_of_forwards);
    }
    message.totalForwarded = object.total_forwarded?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryStatsByChannelResponse): QueryStatsByChannelResponseAmino {
    const obj: any = {};
    obj.num_of_accounts = message.numOfAccounts ? message.numOfAccounts.toString() : undefined;
    obj.num_of_forwards = message.numOfForwards ? message.numOfForwards.toString() : undefined;
    if (message.totalForwarded) {
      obj.total_forwarded = message.totalForwarded.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_forwarded = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryStatsByChannelResponseAminoMsg): QueryStatsByChannelResponse {
    return QueryStatsByChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatsByChannelResponseProtoMsg): QueryStatsByChannelResponse {
    return QueryStatsByChannelResponse.decode(message.value);
  },
  toProto(message: QueryStatsByChannelResponse): Uint8Array {
    return QueryStatsByChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStatsByChannelResponse): QueryStatsByChannelResponseProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.QueryStatsByChannelResponse",
      value: QueryStatsByChannelResponse.encode(message).finish()
    };
  }
};