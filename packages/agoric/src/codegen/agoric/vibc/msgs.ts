import { Packet, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/** MsgSendPacket is an SDK message for sending an outgoing IBC packet */
export interface MsgSendPacket {
  packet?: Packet;
  sender: Uint8Array;
}
/** MsgSendPacket is an SDK message for sending an outgoing IBC packet */
export interface MsgSendPacketSDKType {
  packet?: PacketSDKType;
  sender: Uint8Array;
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponse {}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponseSDKType {}
function createBaseMsgSendPacket(): MsgSendPacket {
  return {
    packet: undefined,
    sender: new Uint8Array()
  };
}
export const MsgSendPacket = {
  encode(message: MsgSendPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgSendPacketResponse(): MsgSendPacketResponse {
  return {};
}
export const MsgSendPacketResponse = {
  encode(_: MsgSendPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSendPacketResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendPacketResponse>): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    return message;
  }
};