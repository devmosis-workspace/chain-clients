import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeSDKType {
  recv_fee: CoinSDKType[];
  ack_fee: CoinSDKType[];
  timeout_fee: CoinSDKType[];
}
export interface PacketID {
  channelId: string;
  portId: string;
  sequence: Long;
}
export interface PacketIDSDKType {
  channel_id: string;
  port_id: string;
  sequence: Long;
}
function createBaseFee(): Fee {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: []
  };
}
export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Fee {
    return {
      recvFee: Array.isArray(object?.recvFee) ? object.recvFee.map((e: any) => Coin.fromJSON(e)) : [],
      ackFee: Array.isArray(object?.ackFee) ? object.ackFee.map((e: any) => Coin.fromJSON(e)) : [],
      timeoutFee: Array.isArray(object?.timeoutFee) ? object.timeoutFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Fee>): Fee {
    const message = createBaseFee();
    message.recvFee = object.recvFee?.map(e => Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map(e => Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBasePacketID(): PacketID {
  return {
    channelId: "",
    portId: "",
    sequence: Long.UZERO
  };
}
export const PacketID = {
  encode(message: PacketID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  fromJSON(object: any): PacketID {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PacketID>): PacketID {
    const message = createBasePacketID();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};