import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, HeightSDKType } from "../../ibc/core/client/v1/client";
import { Fee, FeeAmino, FeeSDKType } from "../../feerefunder/fee";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgTransfer {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** the tokens to be transferred */
  token: Coin;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: Height;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: bigint;
  memo: string;
  fee: Fee;
}
export interface MsgTransferProtoMsg {
  typeUrl: "/neutron.transfer.MsgTransfer";
  value: Uint8Array;
}
export interface MsgTransferAmino {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */
  source_channel: string;
  /** the tokens to be transferred */
  token?: CoinAmino;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height?: HeightAmino;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: string;
  memo: string;
  fee?: FeeAmino;
}
export interface MsgTransferAminoMsg {
  type: "/neutron.transfer.MsgTransfer";
  value: MsgTransferAmino;
}
export interface MsgTransferSDKType {
  source_port: string;
  source_channel: string;
  token: CoinSDKType;
  sender: string;
  receiver: string;
  timeout_height: HeightSDKType;
  timeout_timestamp: bigint;
  memo: string;
  fee: FeeSDKType;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: bigint;
  /** channel src channel on neutron side trasaction was submitted from */
  channel: string;
}
export interface MsgTransferResponseProtoMsg {
  typeUrl: "/neutron.transfer.MsgTransferResponse";
  value: Uint8Array;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponseAmino {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequence_id: string;
  /** channel src channel on neutron side trasaction was submitted from */
  channel: string;
}
export interface MsgTransferResponseAminoMsg {
  type: "/neutron.transfer.MsgTransferResponse";
  value: MsgTransferResponseAmino;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponseSDKType {
  sequence_id: bigint;
  channel: string;
}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: Coin.fromPartial({}),
    sender: "",
    receiver: "",
    timeoutHeight: Height.fromPartial({}),
    timeoutTimestamp: BigInt(0),
    memo: "",
    fee: Fee.fromPartial({})
  };
}
export const MsgTransfer = {
  typeUrl: "/neutron.transfer.MsgTransfer",
  encode(message: MsgTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgTransfer {
    return {
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0),
      memo: isSet(object.memo) ? String(object.memo) : "",
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.memo = object.memo ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgTransferAmino): MsgTransfer {
    return {
      sourcePort: object.source_port,
      sourceChannel: object.source_channel,
      token: object?.token ? Coin.fromAmino(object.token) : undefined,
      sender: object.sender,
      receiver: object.receiver,
      timeoutHeight: object?.timeout_height ? Height.fromAmino(object.timeout_height) : undefined,
      timeoutTimestamp: BigInt(object.timeout_timestamp),
      memo: object.memo,
      fee: object?.fee ? Fee.fromAmino(object.fee) : undefined
    };
  },
  toAmino(message: MsgTransfer): MsgTransferAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort;
    obj.source_channel = message.sourceChannel;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
    obj.memo = message.memo;
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
    return MsgTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
    return MsgTransfer.decode(message.value);
  },
  toProto(message: MsgTransfer): Uint8Array {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
    return {
      typeUrl: "/neutron.transfer.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {
    sequenceId: BigInt(0),
    channel: ""
  };
}
export const MsgTransferResponse = {
  typeUrl: "/neutron.transfer.MsgTransferResponse",
  encode(message: MsgTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? BigInt(object.sequenceId.toString()) : BigInt(0),
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.sequenceId = object.sequenceId !== undefined && object.sequenceId !== null ? BigInt(object.sequenceId.toString()) : BigInt(0);
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgTransferResponseAmino): MsgTransferResponse {
    return {
      sequenceId: BigInt(object.sequence_id),
      channel: object.channel
    };
  },
  toAmino(message: MsgTransferResponse): MsgTransferResponseAmino {
    const obj: any = {};
    obj.sequence_id = message.sequenceId ? message.sequenceId.toString() : undefined;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
    return MsgTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message: MsgTransferResponse): Uint8Array {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
    return {
      typeUrl: "/neutron.transfer.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  }
};