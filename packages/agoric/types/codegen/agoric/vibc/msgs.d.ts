import { Packet, PacketAmino, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import { BinaryWriter } from "../../binary";
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
    sender: Uint8Array;
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
export interface MsgSendPacketResponse {
}
export interface MsgSendPacketResponseProtoMsg {
    typeUrl: "/agoric.vibc.MsgSendPacketResponse";
    value: Uint8Array;
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponseAmino {
}
export interface MsgSendPacketResponseAminoMsg {
    type: "/agoric.vibc.MsgSendPacketResponse";
    value: MsgSendPacketResponseAmino;
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponseSDKType {
}
export declare const MsgSendPacket: {
    typeUrl: string;
    encode(message: MsgSendPacket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSendPacket;
    fromPartial(object: Partial<MsgSendPacket>): MsgSendPacket;
    fromAmino(object: MsgSendPacketAmino): MsgSendPacket;
    toAmino(message: MsgSendPacket): MsgSendPacketAmino;
    fromAminoMsg(object: MsgSendPacketAminoMsg): MsgSendPacket;
    fromProtoMsg(message: MsgSendPacketProtoMsg): MsgSendPacket;
    toProto(message: MsgSendPacket): Uint8Array;
    toProtoMsg(message: MsgSendPacket): MsgSendPacketProtoMsg;
};
export declare const MsgSendPacketResponse: {
    typeUrl: string;
    encode(_: MsgSendPacketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSendPacketResponse;
    fromPartial(_: Partial<MsgSendPacketResponse>): MsgSendPacketResponse;
    fromAmino(_: MsgSendPacketResponseAmino): MsgSendPacketResponse;
    toAmino(_: MsgSendPacketResponse): MsgSendPacketResponseAmino;
    fromAminoMsg(object: MsgSendPacketResponseAminoMsg): MsgSendPacketResponse;
    fromProtoMsg(message: MsgSendPacketResponseProtoMsg): MsgSendPacketResponse;
    toProto(message: MsgSendPacketResponse): Uint8Array;
    toProtoMsg(message: MsgSendPacketResponse): MsgSendPacketResponseProtoMsg;
};
