import { BinaryWriter } from "../../../../binary";
import { isSet, isObject, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface GenesisState_InFlightPacketsEntry {
  key: string;
  value?: InFlightPacket;
}
export interface GenesisState_InFlightPacketsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_InFlightPacketsEntryAmino {
  key?: string;
  value?: InFlightPacketAmino;
}
export interface GenesisState_InFlightPacketsEntryAminoMsg {
  type: string;
  value: GenesisState_InFlightPacketsEntryAmino;
}
export interface GenesisState_InFlightPacketsEntrySDKType {
  key: string;
  value?: InFlightPacketSDKType;
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
  fee_percentage?: string;
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
  original_sender_address?: string;
  refund_channel_id?: string;
  refund_port_id?: string;
  packet_src_channel_id?: string;
  packet_src_port_id?: string;
  packet_timeout_timestamp?: string;
  packet_timeout_height?: string;
  packet_data?: string;
  refund_sequence?: string;
  retries_remaining?: number;
  timeout?: string;
  nonrefundable?: boolean;
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
    value: undefined
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
    const message = createBaseGenesisState_InFlightPacketsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = InFlightPacket.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: GenesisState_InFlightPacketsEntry): GenesisState_InFlightPacketsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
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
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.inFlightPackets = Object.entries(object.in_flight_packets ?? {}).reduce<{
      [key: string]: InFlightPacket;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
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
    const message = createBaseParams();
    if (object.fee_percentage !== undefined && object.fee_percentage !== null) {
      message.feePercentage = object.fee_percentage;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.fee_percentage = message.feePercentage === "" ? undefined : message.feePercentage;
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
    const message = createBaseInFlightPacket();
    if (object.original_sender_address !== undefined && object.original_sender_address !== null) {
      message.originalSenderAddress = object.original_sender_address;
    }
    if (object.refund_channel_id !== undefined && object.refund_channel_id !== null) {
      message.refundChannelId = object.refund_channel_id;
    }
    if (object.refund_port_id !== undefined && object.refund_port_id !== null) {
      message.refundPortId = object.refund_port_id;
    }
    if (object.packet_src_channel_id !== undefined && object.packet_src_channel_id !== null) {
      message.packetSrcChannelId = object.packet_src_channel_id;
    }
    if (object.packet_src_port_id !== undefined && object.packet_src_port_id !== null) {
      message.packetSrcPortId = object.packet_src_port_id;
    }
    if (object.packet_timeout_timestamp !== undefined && object.packet_timeout_timestamp !== null) {
      message.packetTimeoutTimestamp = BigInt(object.packet_timeout_timestamp);
    }
    if (object.packet_timeout_height !== undefined && object.packet_timeout_height !== null) {
      message.packetTimeoutHeight = object.packet_timeout_height;
    }
    if (object.packet_data !== undefined && object.packet_data !== null) {
      message.packetData = bytesFromBase64(object.packet_data);
    }
    if (object.refund_sequence !== undefined && object.refund_sequence !== null) {
      message.refundSequence = BigInt(object.refund_sequence);
    }
    if (object.retries_remaining !== undefined && object.retries_remaining !== null) {
      message.retriesRemaining = object.retries_remaining;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout);
    }
    if (object.nonrefundable !== undefined && object.nonrefundable !== null) {
      message.nonrefundable = object.nonrefundable;
    }
    return message;
  },
  toAmino(message: InFlightPacket): InFlightPacketAmino {
    const obj: any = {};
    obj.original_sender_address = message.originalSenderAddress === "" ? undefined : message.originalSenderAddress;
    obj.refund_channel_id = message.refundChannelId === "" ? undefined : message.refundChannelId;
    obj.refund_port_id = message.refundPortId === "" ? undefined : message.refundPortId;
    obj.packet_src_channel_id = message.packetSrcChannelId === "" ? undefined : message.packetSrcChannelId;
    obj.packet_src_port_id = message.packetSrcPortId === "" ? undefined : message.packetSrcPortId;
    obj.packet_timeout_timestamp = message.packetTimeoutTimestamp !== BigInt(0) ? message.packetTimeoutTimestamp.toString() : undefined;
    obj.packet_timeout_height = message.packetTimeoutHeight === "" ? undefined : message.packetTimeoutHeight;
    obj.packet_data = message.packetData ? base64FromBytes(message.packetData) : undefined;
    obj.refund_sequence = message.refundSequence !== BigInt(0) ? message.refundSequence.toString() : undefined;
    obj.retries_remaining = message.retriesRemaining === 0 ? undefined : message.retriesRemaining;
    obj.timeout = message.timeout !== BigInt(0) ? message.timeout.toString() : undefined;
    obj.nonrefundable = message.nonrefundable === false ? undefined : message.nonrefundable;
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