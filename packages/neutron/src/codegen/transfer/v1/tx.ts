import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { Fee, FeeSDKType } from "../../feerefunder/fee";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTransfer {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** the tokens to be transferred */
  token?: Coin;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight?: Height;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: Long;
  memo: string;
  fee?: Fee;
}
export interface MsgTransferSDKType {
  source_port: string;
  source_channel: string;
  token?: CoinSDKType;
  sender: string;
  receiver: string;
  timeout_height?: HeightSDKType;
  timeout_timestamp: Long;
  memo: string;
  fee?: FeeSDKType;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: Long;
  /** channel src channel on neutron side trasaction was submitted from */
  channel: string;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponseSDKType {
  sequence_id: Long;
  channel: string;
}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: undefined,
    sender: "",
    receiver: "",
    timeoutHeight: undefined,
    timeoutTimestamp: Long.UZERO,
    memo: "",
    fee: undefined
  };
}
export const MsgTransfer = {
  encode(message: MsgTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.timeoutTimestamp.isZero()) {
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
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO,
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
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    message.memo = object.memo ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {
    sequenceId: Long.UZERO,
    channel: ""
  };
}
export const MsgTransferResponse = {
  encode(message: MsgTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequenceId.isZero()) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? Long.fromValue(object.sequenceId) : Long.UZERO,
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.sequenceId = object.sequenceId !== undefined && object.sequenceId !== null ? Long.fromValue(object.sequenceId) : Long.UZERO;
    message.channel = object.channel ?? "";
    return message;
  }
};