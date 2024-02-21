import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
export interface FeeProtoMsg {
    typeUrl: "/neutron.feerefunder.Fee";
    value: Uint8Array;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeAmino {
    /** the packet receive fee */
    recv_fee?: CoinAmino[];
    /** the packet acknowledgement fee */
    ack_fee?: CoinAmino[];
    /** the packet timeout fee */
    timeout_fee?: CoinAmino[];
}
export interface FeeAminoMsg {
    type: "/neutron.feerefunder.Fee";
    value: FeeAmino;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeSDKType {
    recv_fee: CoinSDKType[];
    ack_fee: CoinSDKType[];
    timeout_fee: CoinSDKType[];
}
export interface PacketID {
    channelId: string;
    portId: string;
    sequence: bigint;
}
export interface PacketIDProtoMsg {
    typeUrl: "/neutron.feerefunder.PacketID";
    value: Uint8Array;
}
export interface PacketIDAmino {
    channel_id?: string;
    port_id?: string;
    sequence?: string;
}
export interface PacketIDAminoMsg {
    type: "/neutron.feerefunder.PacketID";
    value: PacketIDAmino;
}
export interface PacketIDSDKType {
    channel_id: string;
    port_id: string;
    sequence: bigint;
}
export declare const Fee: {
    typeUrl: string;
    encode(message: Fee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Fee;
    fromPartial(object: Partial<Fee>): Fee;
    fromAmino(object: FeeAmino): Fee;
    toAmino(message: Fee): FeeAmino;
    fromAminoMsg(object: FeeAminoMsg): Fee;
    fromProtoMsg(message: FeeProtoMsg): Fee;
    toProto(message: Fee): Uint8Array;
    toProtoMsg(message: Fee): FeeProtoMsg;
};
export declare const PacketID: {
    typeUrl: string;
    encode(message: PacketID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PacketID;
    fromPartial(object: Partial<PacketID>): PacketID;
    fromAmino(object: PacketIDAmino): PacketID;
    toAmino(message: PacketID): PacketIDAmino;
    fromAminoMsg(object: PacketIDAminoMsg): PacketID;
    fromProtoMsg(message: PacketIDProtoMsg): PacketID;
    toProto(message: PacketID): Uint8Array;
    toProtoMsg(message: PacketID): PacketIDProtoMsg;
};
