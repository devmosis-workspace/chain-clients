import { BinaryWriter } from "../../binary";
export interface MsgEmitIBCAck {
    sender: string;
    packetSequence: bigint;
    channel: string;
}
export interface MsgEmitIBCAckProtoMsg {
    typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck";
    value: Uint8Array;
}
export interface MsgEmitIBCAckAmino {
    sender?: string;
    packet_sequence?: string;
    channel?: string;
}
export interface MsgEmitIBCAckAminoMsg {
    type: "osmosis/ibchooks/emit-ibc-ack";
    value: MsgEmitIBCAckAmino;
}
export interface MsgEmitIBCAckSDKType {
    sender: string;
    packet_sequence: bigint;
    channel: string;
}
export interface MsgEmitIBCAckResponse {
    contractResult: string;
    ibcAck: string;
}
export interface MsgEmitIBCAckResponseProtoMsg {
    typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse";
    value: Uint8Array;
}
export interface MsgEmitIBCAckResponseAmino {
    contract_result?: string;
    ibc_ack?: string;
}
export interface MsgEmitIBCAckResponseAminoMsg {
    type: "osmosis/ibchooks/emit-ibc-ack-response";
    value: MsgEmitIBCAckResponseAmino;
}
export interface MsgEmitIBCAckResponseSDKType {
    contract_result: string;
    ibc_ack: string;
}
export declare const MsgEmitIBCAck: {
    typeUrl: string;
    encode(message: MsgEmitIBCAck, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEmitIBCAck;
    fromPartial(object: Partial<MsgEmitIBCAck>): MsgEmitIBCAck;
    fromAmino(object: MsgEmitIBCAckAmino): MsgEmitIBCAck;
    toAmino(message: MsgEmitIBCAck): MsgEmitIBCAckAmino;
    fromAminoMsg(object: MsgEmitIBCAckAminoMsg): MsgEmitIBCAck;
    toAminoMsg(message: MsgEmitIBCAck): MsgEmitIBCAckAminoMsg;
    fromProtoMsg(message: MsgEmitIBCAckProtoMsg): MsgEmitIBCAck;
    toProto(message: MsgEmitIBCAck): Uint8Array;
    toProtoMsg(message: MsgEmitIBCAck): MsgEmitIBCAckProtoMsg;
};
export declare const MsgEmitIBCAckResponse: {
    typeUrl: string;
    encode(message: MsgEmitIBCAckResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEmitIBCAckResponse;
    fromPartial(object: Partial<MsgEmitIBCAckResponse>): MsgEmitIBCAckResponse;
    fromAmino(object: MsgEmitIBCAckResponseAmino): MsgEmitIBCAckResponse;
    toAmino(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseAmino;
    fromAminoMsg(object: MsgEmitIBCAckResponseAminoMsg): MsgEmitIBCAckResponse;
    toAminoMsg(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseAminoMsg;
    fromProtoMsg(message: MsgEmitIBCAckResponseProtoMsg): MsgEmitIBCAckResponse;
    toProto(message: MsgEmitIBCAckResponse): Uint8Array;
    toProtoMsg(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseProtoMsg;
};
