import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
export interface PacketPing {
}
export interface PacketPingSDKType {
}
export interface PacketPong {
}
export interface PacketPongSDKType {
}
export interface PacketMsg {
    channelId: number;
    eof: boolean;
    data: Uint8Array;
}
export interface PacketMsgSDKType {
    channel_id: number;
    eof: boolean;
    data: Uint8Array;
}
export interface Packet {
    packetPing?: PacketPing;
    packetPong?: PacketPong;
    packetMsg?: PacketMsg;
}
export interface PacketSDKType {
    packet_ping?: PacketPingSDKType;
    packet_pong?: PacketPongSDKType;
    packet_msg?: PacketMsgSDKType;
}
export interface AuthSigMessage {
    pubKey?: PublicKey;
    sig: Uint8Array;
}
export interface AuthSigMessageSDKType {
    pub_key?: PublicKeySDKType;
    sig: Uint8Array;
}
export declare const PacketPing: {
    encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PacketPing;
    fromPartial(_: Partial<PacketPing>): PacketPing;
};
export declare const PacketPong: {
    encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PacketPong;
    fromPartial(_: Partial<PacketPong>): PacketPong;
};
export declare const PacketMsg: {
    encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PacketMsg;
    fromPartial(object: Partial<PacketMsg>): PacketMsg;
};
export declare const Packet: {
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Packet;
    fromPartial(object: Partial<Packet>): Packet;
};
export declare const AuthSigMessage: {
    encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AuthSigMessage;
    fromPartial(object: Partial<AuthSigMessage>): AuthSigMessage;
};
