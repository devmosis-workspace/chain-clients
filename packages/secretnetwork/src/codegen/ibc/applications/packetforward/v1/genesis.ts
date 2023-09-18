import { BinaryWriter } from "../../../../binary";
import { isSet, isObject, bytesFromBase64 } from "../../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface GenesisState_InFlightPacketsEntry {
  key: string;
  value: InFlightPacket;
}
export interface GenesisState_InFlightPacketsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_InFlightPacketsEntryAmino {
  key: string;
  value?: InFlightPacketAmino;
}
export interface GenesisState_InFlightPacketsEntryAminoMsg {
  type: string;
  value: GenesisState_InFlightPacketsEntryAmino;
}
export interface GenesisState_InFlightPacketsEntrySDKType {
  key: string;
  value: InFlightPacketSDKType;
}
/** GenesisState defines the packetforward genesis state */
export interface GenesisState {
  params: Params;
  /**
   * key - information about forwarded packet: src_channel
   * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
   * information about original packet for refunding if necessary: retries,
   * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
   */
  inFlightPackets: {
    [key: string]: InFlightPacket;
  };
}
export interface GenesisStateProtoMsg {
  typeUrl: "/packetforward.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the packetforward genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /**
   * key - information about forwarded packet: src_channel
   * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
   * information about original packet for refunding if necessary: retries,
   * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
   */
  in_flight_packets?: {
    [key: string]: InFlightPacketAmino;
  };
}
export interface GenesisStateAminoMsg {
  type: "/packetforward.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the packetforward genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  in_flight_packets: {
    [key: string]: InFlightPacketSDKType;
  };
}
/** Params defines the set of IBC packetforward parameters. */
export interface Params {
  feePercentage: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/packetforward.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of IBC packetforward parameters. */
export interface ParamsAmino {
  fee_percentage: string;
}
export interface ParamsAminoMsg {
  type: "/packetforward.v1.Params";
  value: ParamsAmino;
}
/** Params defines the set of IBC packetforward parameters. */
export interface ParamsSDKType {
  fee_percentage: string;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacket {
  originalSenderAddress: string;
  refundChannelId: string;
  refundPortId: string;
  packetSrcChannelId: string;
  packetSrcPortId: string;
  packetTimeoutTimestamp: bigint;
  packetTimeoutHeight: string;
  packetData: Uint8Array;
  refundSequence: bigint;
  retriesRemaining: number;
  timeout: bigint;
  nonrefundable: boolean;
}
export interface InFlightPacketProtoMsg {
  typeUrl: "/packetforward.v1.InFlightPacket";
  value: Uint8Array;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacketAmino {
  original_sender_address: string;
  refund_channel_id: string;
  refund_port_id: string;
  packet_src_channel_id: string;
  packet_src_port_id: string;
  packet_timeout_timestamp: string;
  packet_timeout_height: string;
  packet_data: Uint8Array;
  refund_sequence: string;
  retries_remaining: number;
  timeout: string;
  nonrefundable: boolean;
}
export interface InFlightPacketAminoMsg {
  type: "/packetforward.v1.InFlightPacket";
  value: InFlightPacketAmino;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacketSDKType {
  original_sender_address: string;
  refund_channel_id: string;
  refund_port_id: string;
  packet_src_channel_id: string;
  packet_src_port_id: string;
  packet_timeout_timestamp: bigint;
  packet_timeout_height: string;
  packet_data: Uint8Array;
  refund_sequence: bigint;
  retries_remaining: number;
  timeout: bigint;
  nonrefundable: boolean;
}
function createBaseGenesisState_InFlightPacketsEntry(): GenesisState_InFlightPacketsEntry {
  return {
    key: "",
    value: InFlightPacket.fromPartial({})
  };
}
export const GenesisState_InFlightPacketsEntry = {
  encode(message: GenesisState_InFlightPacketsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_InFlightPacketsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? InFlightPacket.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry {
    const message = createBaseGenesisState_InFlightPacketsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? InFlightPacket.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: GenesisState_InFlightPacketsEntryAmino): GenesisState_InFlightPacketsEntry {
    return {
      key: object.key,
      value: object?.value ? InFlightPacket.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: GenesisState_InFlightPacketsEntry): GenesisState_InFlightPacketsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? InFlightPacket.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_InFlightPacketsEntryAminoMsg): GenesisState_InFlightPacketsEntry {
    return GenesisState_InFlightPacketsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_InFlightPacketsEntryProtoMsg): GenesisState_InFlightPacketsEntry {
    return GenesisState_InFlightPacketsEntry.decode(message.value);
  },
  toProto(message: GenesisState_InFlightPacketsEntry): Uint8Array {
    return GenesisState_InFlightPacketsEntry.encode(message).finish();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    inFlightPackets: {}
  };
}
export const GenesisState = {
  typeUrl: "/packetforward.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.inFlightPackets).forEach(([key, value]) => {
      GenesisState_InFlightPacketsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      inFlightPackets: isObject(object.inFlightPackets) ? Object.entries(object.inFlightPackets).reduce<{
        [key: string]: InFlightPacket;
      }>((acc, [key, value]) => {
        acc[key] = InFlightPacket.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.inFlightPackets = Object.entries(object.inFlightPackets ?? {}).reduce<{
      [key: string]: InFlightPacket;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      inFlightPackets: isObject(object.in_flight_packets) ? Object.entries(object.in_flight_packets).reduce<{
        [key: string]: InFlightPacket;
      }>((acc, [key, value]) => {
        acc[key] = InFlightPacket.fromAmino(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.in_flight_packets = {};
    if (message.inFlightPackets) {
      Object.entries(message.inFlightPackets).forEach(([k, v]) => {
        obj.in_flight_packets[k] = InFlightPacket.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/packetforward.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    feePercentage: ""
  };
}
export const Params = {
  typeUrl: "/packetforward.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feePercentage !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.feePercentage, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.feePercentage = object.feePercentage ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      feePercentage: object.fee_percentage
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.fee_percentage = message.feePercentage;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/packetforward.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseInFlightPacket(): InFlightPacket {
  return {
    originalSenderAddress: "",
    refundChannelId: "",
    refundPortId: "",
    packetSrcChannelId: "",
    packetSrcPortId: "",
    packetTimeoutTimestamp: BigInt(0),
    packetTimeoutHeight: "",
    packetData: new Uint8Array(),
    refundSequence: BigInt(0),
    retriesRemaining: 0,
    timeout: BigInt(0),
    nonrefundable: false
  };
}
export const InFlightPacket = {
  typeUrl: "/packetforward.v1.InFlightPacket",
  encode(message: InFlightPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.originalSenderAddress !== "") {
      writer.uint32(10).string(message.originalSenderAddress);
    }
    if (message.refundChannelId !== "") {
      writer.uint32(18).string(message.refundChannelId);
    }
    if (message.refundPortId !== "") {
      writer.uint32(26).string(message.refundPortId);
    }
    if (message.packetSrcChannelId !== "") {
      writer.uint32(34).string(message.packetSrcChannelId);
    }
    if (message.packetSrcPortId !== "") {
      writer.uint32(42).string(message.packetSrcPortId);
    }
    if (message.packetTimeoutTimestamp !== BigInt(0)) {
      writer.uint32(48).uint64(message.packetTimeoutTimestamp);
    }
    if (message.packetTimeoutHeight !== "") {
      writer.uint32(58).string(message.packetTimeoutHeight);
    }
    if (message.packetData.length !== 0) {
      writer.uint32(66).bytes(message.packetData);
    }
    if (message.refundSequence !== BigInt(0)) {
      writer.uint32(72).uint64(message.refundSequence);
    }
    if (message.retriesRemaining !== 0) {
      writer.uint32(80).int32(message.retriesRemaining);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(88).uint64(message.timeout);
    }
    if (message.nonrefundable === true) {
      writer.uint32(96).bool(message.nonrefundable);
    }
    return writer;
  },
  fromJSON(object: any): InFlightPacket {
    return {
      originalSenderAddress: isSet(object.originalSenderAddress) ? String(object.originalSenderAddress) : "",
      refundChannelId: isSet(object.refundChannelId) ? String(object.refundChannelId) : "",
      refundPortId: isSet(object.refundPortId) ? String(object.refundPortId) : "",
      packetSrcChannelId: isSet(object.packetSrcChannelId) ? String(object.packetSrcChannelId) : "",
      packetSrcPortId: isSet(object.packetSrcPortId) ? String(object.packetSrcPortId) : "",
      packetTimeoutTimestamp: isSet(object.packetTimeoutTimestamp) ? BigInt(object.packetTimeoutTimestamp.toString()) : BigInt(0),
      packetTimeoutHeight: isSet(object.packetTimeoutHeight) ? String(object.packetTimeoutHeight) : "",
      packetData: isSet(object.packetData) ? bytesFromBase64(object.packetData) : new Uint8Array(),
      refundSequence: isSet(object.refundSequence) ? BigInt(object.refundSequence.toString()) : BigInt(0),
      retriesRemaining: isSet(object.retriesRemaining) ? Number(object.retriesRemaining) : 0,
      timeout: isSet(object.timeout) ? BigInt(object.timeout.toString()) : BigInt(0),
      nonrefundable: isSet(object.nonrefundable) ? Boolean(object.nonrefundable) : false
    };
  },
  fromPartial(object: Partial<InFlightPacket>): InFlightPacket {
    const message = createBaseInFlightPacket();
    message.originalSenderAddress = object.originalSenderAddress ?? "";
    message.refundChannelId = object.refundChannelId ?? "";
    message.refundPortId = object.refundPortId ?? "";
    message.packetSrcChannelId = object.packetSrcChannelId ?? "";
    message.packetSrcPortId = object.packetSrcPortId ?? "";
    message.packetTimeoutTimestamp = object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null ? BigInt(object.packetTimeoutTimestamp.toString()) : BigInt(0);
    message.packetTimeoutHeight = object.packetTimeoutHeight ?? "";
    message.packetData = object.packetData ?? new Uint8Array();
    message.refundSequence = object.refundSequence !== undefined && object.refundSequence !== null ? BigInt(object.refundSequence.toString()) : BigInt(0);
    message.retriesRemaining = object.retriesRemaining ?? 0;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
    message.nonrefundable = object.nonrefundable ?? false;
    return message;
  },
  fromAmino(object: InFlightPacketAmino): InFlightPacket {
    return {
      originalSenderAddress: object.original_sender_address,
      refundChannelId: object.refund_channel_id,
      refundPortId: object.refund_port_id,
      packetSrcChannelId: object.packet_src_channel_id,
      packetSrcPortId: object.packet_src_port_id,
      packetTimeoutTimestamp: BigInt(object.packet_timeout_timestamp),
      packetTimeoutHeight: object.packet_timeout_height,
      packetData: object.packet_data,
      refundSequence: BigInt(object.refund_sequence),
      retriesRemaining: object.retries_remaining,
      timeout: BigInt(object.timeout),
      nonrefundable: object.nonrefundable
    };
  },
  toAmino(message: InFlightPacket): InFlightPacketAmino {
    const obj: any = {};
    obj.original_sender_address = message.originalSenderAddress;
    obj.refund_channel_id = message.refundChannelId;
    obj.refund_port_id = message.refundPortId;
    obj.packet_src_channel_id = message.packetSrcChannelId;
    obj.packet_src_port_id = message.packetSrcPortId;
    obj.packet_timeout_timestamp = message.packetTimeoutTimestamp ? message.packetTimeoutTimestamp.toString() : undefined;
    obj.packet_timeout_height = message.packetTimeoutHeight;
    obj.packet_data = message.packetData;
    obj.refund_sequence = message.refundSequence ? message.refundSequence.toString() : undefined;
    obj.retries_remaining = message.retriesRemaining;
    obj.timeout = message.timeout ? message.timeout.toString() : undefined;
    obj.nonrefundable = message.nonrefundable;
    return obj;
  },
  fromAminoMsg(object: InFlightPacketAminoMsg): InFlightPacket {
    return InFlightPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: InFlightPacketProtoMsg): InFlightPacket {
    return InFlightPacket.decode(message.value);
  },
  toProto(message: InFlightPacket): Uint8Array {
    return InFlightPacket.encode(message).finish();
  },
  toProtoMsg(message: InFlightPacket): InFlightPacketProtoMsg {
    return {
      typeUrl: "/packetforward.v1.InFlightPacket",
      value: InFlightPacket.encode(message).finish()
    };
  }
};