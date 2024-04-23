import { Packet, PacketAmino, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import { BinaryWriter } from "../../binary";
export declare enum RollappPacket_Status {
    PENDING = 0,
    ACCEPTED = 1,
    REJECTED = 2,
    UNRECOGNIZED = -1
}
export declare const RollappPacket_StatusSDKType: typeof RollappPacket_Status;
export declare const RollappPacket_StatusAmino: typeof RollappPacket_Status;
export declare function rollappPacket_StatusFromJSON(object: any): RollappPacket_Status;
export declare function rollappPacket_StatusToJSON(object: RollappPacket_Status): string;
export interface RollappPacket {
    packet?: Packet;
    status: RollappPacket_Status;
    ProofHeight: bigint;
    error: string;
    relayer: Uint8Array;
}
export interface RollappPacketProtoMsg {
    typeUrl: "/dymensionxyz.dymension.delayedack.RollappPacket";
    value: Uint8Array;
}
export interface RollappPacketAmino {
    packet?: PacketAmino;
    status?: RollappPacket_Status;
    ProofHeight?: string;
    error?: string;
    relayer?: string;
}
export interface RollappPacketAminoMsg {
    type: "/dymensionxyz.dymension.delayedack.RollappPacket";
    value: RollappPacketAmino;
}
export interface RollappPacketSDKType {
    packet?: PacketSDKType;
    status: RollappPacket_Status;
    ProofHeight: bigint;
    error: string;
    relayer: Uint8Array;
}
export declare const RollappPacket: {
    typeUrl: string;
    encode(message: RollappPacket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RollappPacket;
    fromPartial(object: Partial<RollappPacket>): RollappPacket;
    fromAmino(object: RollappPacketAmino): RollappPacket;
    toAmino(message: RollappPacket): RollappPacketAmino;
    fromAminoMsg(object: RollappPacketAminoMsg): RollappPacket;
    fromProtoMsg(message: RollappPacketProtoMsg): RollappPacket;
    toProto(message: RollappPacket): Uint8Array;
    toProtoMsg(message: RollappPacket): RollappPacketProtoMsg;
};
