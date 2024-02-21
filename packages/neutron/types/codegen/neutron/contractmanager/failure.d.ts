import { BinaryWriter } from "../../binary";
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface Failure {
    /** Address of the failed contract */
    address: string;
    /** Id of the failure under specific address */
    id: bigint;
    /** Serialized MessageSudoCallback with Packet and Ack(if exists) */
    sudoPayload: Uint8Array;
    /** Redacted error response of the sudo call. Full error is emitted as an event */
    error: string;
}
export interface FailureProtoMsg {
    typeUrl: "/neutron.contractmanager.Failure";
    value: Uint8Array;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface FailureAmino {
    /** Address of the failed contract */
    address?: string;
    /** Id of the failure under specific address */
    id?: string;
    /** Serialized MessageSudoCallback with Packet and Ack(if exists) */
    sudo_payload?: string;
    /** Redacted error response of the sudo call. Full error is emitted as an event */
    error?: string;
}
export interface FailureAminoMsg {
    type: "/neutron.contractmanager.Failure";
    value: FailureAmino;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface FailureSDKType {
    address: string;
    id: bigint;
    sudo_payload: Uint8Array;
    error: string;
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
