import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}
export interface FeeProtoMsg {
  typeUrl: "/neutron.feerefunder.Fee";
  value: Uint8Array;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeAmino {
  /** the packet receive fee */
  recv_fee: CoinAmino[];
  /** the packet acknowledgement fee */
  ack_fee: CoinAmino[];
  /** the packet timeout fee */
  timeout_fee: CoinAmino[];
}
export interface FeeAminoMsg {
  type: "/neutron.feerefunder.Fee";
  value: FeeAmino;
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
  sequence: bigint;
}
export interface PacketIDProtoMsg {
  typeUrl: "/neutron.feerefunder.PacketID";
  value: Uint8Array;
}
export interface PacketIDAmino {
  channel_id: string;
  port_id: string;
  sequence: string;
}
export interface PacketIDAminoMsg {
  type: "/neutron.feerefunder.PacketID";
  value: PacketIDAmino;
}
export interface PacketIDSDKType {
  channel_id: string;
  port_id: string;
  sequence: bigint;
}
function createBaseFee(): Fee {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: []
  };
}
export const Fee = {
  typeUrl: "/neutron.feerefunder.Fee",
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeAmino): Fee {
    return {
      recvFee: Array.isArray(object?.recv_fee) ? object.recv_fee.map((e: any) => Coin.fromAmino(e)) : [],
      ackFee: Array.isArray(object?.ack_fee) ? object.ack_fee.map((e: any) => Coin.fromAmino(e)) : [],
      timeoutFee: Array.isArray(object?.timeout_fee) ? object.timeout_fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Fee): FeeAmino {
    const obj: any = {};
    if (message.recvFee) {
      obj.recv_fee = message.recvFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.recv_fee = [];
    }
    if (message.ackFee) {
      obj.ack_fee = message.ackFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.ack_fee = [];
    }
    if (message.timeoutFee) {
      obj.timeout_fee = message.timeoutFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.timeout_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeeAminoMsg): Fee {
    return Fee.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeProtoMsg): Fee {
    return Fee.decode(message.value);
  },
  toProto(message: Fee): Uint8Array {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message: Fee): FeeProtoMsg {
    return {
      typeUrl: "/neutron.feerefunder.Fee",
      value: Fee.encode(message).finish()
    };
  }
};
function createBasePacketID(): PacketID {
  return {
    channelId: "",
    portId: "",
    sequence: BigInt(0)
  };
}
export const PacketID = {
  typeUrl: "/neutron.feerefunder.PacketID",
  encode(message: PacketID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  fromJSON(object: any): PacketID {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PacketID>): PacketID {
    const message = createBasePacketID();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketIDAmino): PacketID {
    return {
      channelId: object.channel_id,
      portId: object.port_id,
      sequence: BigInt(object.sequence)
    };
  },
  toAmino(message: PacketID): PacketIDAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.port_id = message.portId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketIDAminoMsg): PacketID {
    return PacketID.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketIDProtoMsg): PacketID {
    return PacketID.decode(message.value);
  },
  toProto(message: PacketID): Uint8Array {
    return PacketID.encode(message).finish();
  },
  toProtoMsg(message: PacketID): PacketIDProtoMsg {
    return {
      typeUrl: "/neutron.feerefunder.PacketID",
      value: PacketID.encode(message).finish()
    };
  }
};