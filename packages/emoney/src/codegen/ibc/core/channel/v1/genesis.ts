import { IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  sendSequences: PacketSequence[];
  recvSequences: PacketSequence[];
  ackSequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */
  nextChannelSequence: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.channel.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateAmino {
  channels: IdentifiedChannelAmino[];
  acknowledgements: PacketStateAmino[];
  commitments: PacketStateAmino[];
  receipts: PacketStateAmino[];
  send_sequences: PacketSequenceAmino[];
  recv_sequences: PacketSequenceAmino[];
  ack_sequences: PacketSequenceAmino[];
  /** the sequence for the next generated channel identifier */
  next_channel_sequence: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateSDKType {
  channels: IdentifiedChannelSDKType[];
  acknowledgements: PacketStateSDKType[];
  commitments: PacketStateSDKType[];
  receipts: PacketStateSDKType[];
  send_sequences: PacketSequenceSDKType[];
  recv_sequences: PacketSequenceSDKType[];
  ack_sequences: PacketSequenceSDKType[];
  next_channel_sequence: bigint;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  portId: string;
  channelId: string;
  sequence: bigint;
}
export interface PacketSequenceProtoMsg {
  typeUrl: "/ibc.core.channel.v1.PacketSequence";
  value: Uint8Array;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceAmino {
  port_id: string;
  channel_id: string;
  sequence: string;
}
export interface PacketSequenceAminoMsg {
  type: "cosmos-sdk/PacketSequence";
  value: PacketSequenceAmino;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    sendSequences: [],
    recvSequences: [],
    ackSequences: [],
    nextChannelSequence: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.channel.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recvSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ackSequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nextChannelSequence !== BigInt(0)) {
      writer.uint32(64).uint64(message.nextChannelSequence);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e)) : [],
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromJSON(e)) : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => PacketState.fromJSON(e)) : [],
      sendSequences: Array.isArray(object?.sendSequences) ? object.sendSequences.map((e: any) => PacketSequence.fromJSON(e)) : [],
      recvSequences: Array.isArray(object?.recvSequences) ? object.recvSequences.map((e: any) => PacketSequence.fromJSON(e)) : [],
      ackSequences: Array.isArray(object?.ackSequences) ? object.ackSequences.map((e: any) => PacketSequence.fromJSON(e)) : [],
      nextChannelSequence: isSet(object.nextChannelSequence) ? BigInt(object.nextChannelSequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.recvSequences = object.recvSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.ackSequences = object.ackSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.nextChannelSequence = object.nextChannelSequence !== undefined && object.nextChannelSequence !== null ? BigInt(object.nextChannelSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromAmino(e)) : [],
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromAmino(e)) : [],
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromAmino(e)) : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => PacketState.fromAmino(e)) : [],
      sendSequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e: any) => PacketSequence.fromAmino(e)) : [],
      recvSequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e: any) => PacketSequence.fromAmino(e)) : [],
      ackSequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e: any) => PacketSequence.fromAmino(e)) : [],
      nextChannelSequence: BigInt(object.next_channel_sequence)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.sendSequences) {
      obj.send_sequences = message.sendSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.send_sequences = [];
    }
    if (message.recvSequences) {
      obj.recv_sequences = message.recvSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.recv_sequences = [];
    }
    if (message.ackSequences) {
      obj.ack_sequences = message.ackSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.ack_sequences = [];
    }
    obj.next_channel_sequence = message.nextChannelSequence ? message.nextChannelSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBasePacketSequence(): PacketSequence {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
export const PacketSequence = {
  typeUrl: "/ibc.core.channel.v1.PacketSequence",
  encode(message: PacketSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  fromJSON(object: any): PacketSequence {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketSequenceAmino): PacketSequence {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      sequence: BigInt(object.sequence)
    };
  },
  toAmino(message: PacketSequence): PacketSequenceAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketSequenceAminoMsg): PacketSequence {
    return PacketSequence.fromAmino(object.value);
  },
  toAminoMsg(message: PacketSequence): PacketSequenceAminoMsg {
    return {
      type: "cosmos-sdk/PacketSequence",
      value: PacketSequence.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketSequenceProtoMsg): PacketSequence {
    return PacketSequence.decode(message.value);
  },
  toProto(message: PacketSequence): Uint8Array {
    return PacketSequence.encode(message).finish();
  },
  toProtoMsg(message: PacketSequence): PacketSequenceProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketSequence",
      value: PacketSequence.encode(message).finish()
    };
  }
};