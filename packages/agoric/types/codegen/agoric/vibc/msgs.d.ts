import { Packet, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgSendPacketResponse {
}
/** Empty response for SendPacket. */
export interface MsgSendPacketResponseSDKType {
}
export declare const MsgSendPacket: {
    encode(message: MsgSendPacket, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSendPacket;
    fromPartial(object: Partial<MsgSendPacket>): MsgSendPacket;
};
export declare const MsgSendPacketResponse: {
    encode(_: MsgSendPacketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSendPacketResponse;
    fromPartial(_: Partial<MsgSendPacketResponse>): MsgSendPacketResponse;
};
