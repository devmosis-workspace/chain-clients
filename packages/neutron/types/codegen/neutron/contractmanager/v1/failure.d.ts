import { BinaryWriter } from "../../../binary";
/** Deprecated. Used only for migration purposes. */
export interface Failure {
    /** ChannelId */
    channelId: string;
    /** Address of the failed contract */
    address: string;
    /** id of the failure under specific address */
    id: bigint;
    /** ACK id to restore */
    ackId: bigint;
    /** Acknowledgement type */
    ackType: string;
}
export interface FailureProtoMsg {
    typeUrl: "/neutron.contractmanager.v1.Failure";
    value: Uint8Array;
}
/** Deprecated. Used only for migration purposes. */
export interface FailureAmino {
    /** ChannelId */
    channel_id?: string;
    /** Address of the failed contract */
    address?: string;
    /** id of the failure under specific address */
    id?: string;
    /** ACK id to restore */
    ack_id?: string;
    /** Acknowledgement type */
    ack_type?: string;
}
export interface FailureAminoMsg {
    type: "/neutron.contractmanager.v1.Failure";
    value: FailureAmino;
}
/** Deprecated. Used only for migration purposes. */
export interface FailureSDKType {
    channel_id: string;
    address: string;
    id: bigint;
    ack_id: bigint;
    ack_type: string;
}
export declare const Failure: {
    typeUrl: string;
    encode(message: Failure, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Failure;
    fromPartial(object: Partial<Failure>): Failure;
    fromAmino(object: FailureAmino): Failure;
    toAmino(message: Failure): FailureAmino;
    fromAminoMsg(object: FailureAminoMsg): Failure;
    fromProtoMsg(message: FailureProtoMsg): Failure;
    toProto(message: Failure): Uint8Array;
    toProtoMsg(message: Failure): FailureProtoMsg;
};
