import { BinaryWriter } from "../../../../binary";
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
export declare const GenesisState_InFlightPacketsEntry: {
    encode(message: GenesisState_InFlightPacketsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_InFlightPacketsEntry;
    fromPartial(object: Partial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry;
    fromAmino(object: GenesisState_InFlightPacketsEntryAmino): GenesisState_InFlightPacketsEntry;
    toAmino(message: GenesisState_InFlightPacketsEntry): GenesisState_InFlightPacketsEntryAmino;
    fromAminoMsg(object: GenesisState_InFlightPacketsEntryAminoMsg): GenesisState_InFlightPacketsEntry;
    fromProtoMsg(message: GenesisState_InFlightPacketsEntryProtoMsg): GenesisState_InFlightPacketsEntry;
    toProto(message: GenesisState_InFlightPacketsEntry): Uint8Array;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const InFlightPacket: {
    typeUrl: string;
    encode(message: InFlightPacket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InFlightPacket;
    fromPartial(object: Partial<InFlightPacket>): InFlightPacket;
    fromAmino(object: InFlightPacketAmino): InFlightPacket;
    toAmino(message: InFlightPacket): InFlightPacketAmino;
    fromAminoMsg(object: InFlightPacketAminoMsg): InFlightPacket;
    fromProtoMsg(message: InFlightPacketProtoMsg): InFlightPacket;
    toProto(message: InFlightPacket): Uint8Array;
    toProtoMsg(message: InFlightPacket): InFlightPacketProtoMsg;
};
