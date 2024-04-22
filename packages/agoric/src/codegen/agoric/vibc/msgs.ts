import { Packet, PacketAmino, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** MsgSendPacket is an SDK message for sending an outgoing IBC packet */
export interface MsgSendPacket {
  packet: Packet;
  sender: Uint8Array;
}
export interface MsgSendPacketProtoMsg {
  typeUrl: "/agoric.vibc.MsgSendPacket";
  value: Uint8Array;
}
/** MsgSendPacket is an SDK message for sending an outgoing IBC packet */
export interface MsgSendPacketAmino {
  packet?: PacketAmino;
  sender?: string;
}
export interface MsgSendPacketAminoMsg {
  type: "/agoric.vibc.MsgSendPacket";
  value: MsgSendPacketAmino;
}
/** MsgSendPacket is an SDK message for sending an outgoing IBC packet */
export interface MsgSendPacketSDKType {
  packet: PacketSDKType;
  sender: Uint8Array;
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponse {}
export interface MsgSendPacketResponseProtoMsg {
  typeUrl: "/agoric.vibc.MsgSendPacketResponse";
  value: Uint8Array;
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponseAmino {}
export interface MsgSendPacketResponseAminoMsg {
  type: "/agoric.vibc.MsgSendPacketResponse";
  value: MsgSendPacketResponseAmino;
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponseSDKType {}
function createBaseMsgSendPacket(): MsgSendPacket {
  return {
    packet: Packet.fromPartial({}),
    sender: new Uint8Array()
  };
}
export const MsgSendPacket = {
  typeUrl: "/agoric.vibc.MsgSendPacket",
  encode(message: MsgSendPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender.length !== 0) {
      writer.uint32(18).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgSendPacket {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgSendPacket>): MsgSendPacket {
    const message = createBaseMsgSendPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSendPacketAmino): MsgSendPacket {
    const message = createBaseMsgSendPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    return message;
  },
  toAmino(message: MsgSendPacket): MsgSendPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendPacketAminoMsg): MsgSendPacket {
    return MsgSendPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendPacketProtoMsg): MsgSendPacket {
    return MsgSendPacket.decode(message.value);
  },
  toProto(message: MsgSendPacket): Uint8Array {
    return MsgSendPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgSendPacket): MsgSendPacketProtoMsg {
    return {
      typeUrl: "/agoric.vibc.MsgSendPacket",
      value: MsgSendPacket.encode(message).finish()
    };
  }
};
function createBaseMsgSendPacketResponse(): MsgSendPacketResponse {
  return {};
}
export const MsgSendPacketResponse = {
  typeUrl: "/agoric.vibc.MsgSendPacketResponse",
  encode(_: MsgSendPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSendPacketResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendPacketResponse>): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    return message;
  },
  fromAmino(_: MsgSendPacketResponseAmino): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    return message;
  },
  toAmino(_: MsgSendPacketResponse): MsgSendPacketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendPacketResponseAminoMsg): MsgSendPacketResponse {
    return MsgSendPacketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendPacketResponseProtoMsg): MsgSendPacketResponse {
    return MsgSendPacketResponse.decode(message.value);
  },
  toProto(message: MsgSendPacketResponse): Uint8Array {
    return MsgSendPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendPacketResponse): MsgSendPacketResponseProtoMsg {
    return {
      typeUrl: "/agoric.vibc.MsgSendPacketResponse",
      value: MsgSendPacketResponse.encode(message).finish()
    };
  }
};