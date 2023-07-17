import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
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
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: Fee;
  /** the refund address for unspent fees */
  refundAddress: string;
  /** optional list of relayers permitted to receive fees */
  relayers: string[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFeeSDKType {
  fee?: FeeSDKType;
  refund_address: string;
  relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
  /** list of packet fees */
  packetFees: PacketFee[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFeesSDKType {
  packet_fees: PacketFeeSDKType[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
  /** list of packet fees */
  packetFees: PacketFee[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFeesSDKType {
  packet_id?: PacketIdSDKType;
  packet_fees: PacketFeeSDKType[];
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
function createBasePacketFee(): PacketFee {
  return {
    fee: undefined,
    refundAddress: "",
    relayers: []
  };
}
export const PacketFee = {
  encode(message: PacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): PacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<PacketFee>): PacketFee {
    const message = createBasePacketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.refundAddress = object.refundAddress ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }
};
function createBasePacketFees(): PacketFees {
  return {
    packetFees: []
  };
}
export const PacketFees = {
  encode(message: PacketFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PacketFees {
    return {
      packetFees: Array.isArray(object?.packetFees) ? object.packetFees.map((e: any) => PacketFee.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PacketFees>): PacketFees {
    const message = createBasePacketFees();
    message.packetFees = object.packetFees?.map(e => PacketFee.fromPartial(e)) || [];
    return message;
  }
};
function createBaseIdentifiedPacketFees(): IdentifiedPacketFees {
  return {
    packetId: undefined,
    packetFees: []
  };
}
export const IdentifiedPacketFees = {
  encode(message: IdentifiedPacketFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IdentifiedPacketFees {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      packetFees: Array.isArray(object?.packetFees) ? object.packetFees.map((e: any) => PacketFee.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<IdentifiedPacketFees>): IdentifiedPacketFees {
    const message = createBaseIdentifiedPacketFees();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.packetFees = object.packetFees?.map(e => PacketFee.fromPartial(e)) || [];
    return message;
  }
};