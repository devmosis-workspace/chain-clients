import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
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
    typeUrl: "/neutron.contractmanager.Failure";
    value: Uint8Array;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface FailureAmino {
    /** ChannelId */
    channel_id: string;
    /** Address of the failed contract */
    address: string;
    /** id of the failure under specific address */
    id: string;
    /** ACK id to restore */
    ack_id: string;
    /** Acknowledgement type */
    ack_type: string;
}
export interface FailureAminoMsg {
    type: "/neutron.contractmanager.Failure";
    value: FailureAmino;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface FailureSDKType {
    channel_id: string;
    address: string;
    id: bigint;
    ack_id: bigint;
    ack_type: string;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisState {
    params: Params;
    /** List of the contract failures */
    failuresList: Failure[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.contractmanager.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    /** List of the contract failures */
    failures_list: FailureAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/neutron.contractmanager.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    failures_list: FailureSDKType[];
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
