import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface EventStart {
    address: string;
    nodeAddress: string;
    id: bigint;
    planId: bigint;
    subscriptionId: bigint;
}
export interface EventStartProtoMsg {
    typeUrl: "/sentinel.session.v2.EventStart";
    value: Uint8Array;
}
export interface EventStartAmino {
    address?: string;
    node_address?: string;
    id?: string;
    plan_id?: string;
    subscription_id?: string;
}
export interface EventStartAminoMsg {
    type: "/sentinel.session.v2.EventStart";
    value: EventStartAmino;
}
export interface EventStartSDKType {
    address: string;
    node_address: string;
    id: bigint;
    plan_id: bigint;
    subscription_id: bigint;
}
export interface EventUpdateDetails {
    address: string;
    nodeAddress: string;
    id: bigint;
    planId: bigint;
    subscriptionId: bigint;
}
export interface EventUpdateDetailsProtoMsg {
    typeUrl: "/sentinel.session.v2.EventUpdateDetails";
    value: Uint8Array;
}
export interface EventUpdateDetailsAmino {
    address?: string;
    node_address?: string;
    id?: string;
    plan_id?: string;
    subscription_id?: string;
}
export interface EventUpdateDetailsAminoMsg {
    type: "/sentinel.session.v2.EventUpdateDetails";
    value: EventUpdateDetailsAmino;
}
export interface EventUpdateDetailsSDKType {
    address: string;
    node_address: string;
    id: bigint;
    plan_id: bigint;
    subscription_id: bigint;
}
export interface EventUpdateStatus {
    status: Status;
    address: string;
    nodeAddress: string;
    id: bigint;
    planId: bigint;
    subscriptionId: bigint;
}
export interface EventUpdateStatusProtoMsg {
    typeUrl: "/sentinel.session.v2.EventUpdateStatus";
    value: Uint8Array;
}
export interface EventUpdateStatusAmino {
    status?: Status;
    address?: string;
    node_address?: string;
    id?: string;
    plan_id?: string;
    subscription_id?: string;
}
export interface EventUpdateStatusAminoMsg {
    type: "/sentinel.session.v2.EventUpdateStatus";
    value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
    status: Status;
    address: string;
    node_address: string;
    id: bigint;
    plan_id: bigint;
    subscription_id: bigint;
}
export declare const EventStart: {
    typeUrl: string;
    encode(message: EventStart, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventStart;
    fromPartial(object: Partial<EventStart>): EventStart;
    fromAmino(object: EventStartAmino): EventStart;
    toAmino(message: EventStart): EventStartAmino;
    fromAminoMsg(object: EventStartAminoMsg): EventStart;
    fromProtoMsg(message: EventStartProtoMsg): EventStart;
    toProto(message: EventStart): Uint8Array;
    toProtoMsg(message: EventStart): EventStartProtoMsg;
};
export declare const EventUpdateDetails: {
    typeUrl: string;
    encode(message: EventUpdateDetails, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateDetails;
    fromPartial(object: Partial<EventUpdateDetails>): EventUpdateDetails;
    fromAmino(object: EventUpdateDetailsAmino): EventUpdateDetails;
    toAmino(message: EventUpdateDetails): EventUpdateDetailsAmino;
    fromAminoMsg(object: EventUpdateDetailsAminoMsg): EventUpdateDetails;
    fromProtoMsg(message: EventUpdateDetailsProtoMsg): EventUpdateDetails;
    toProto(message: EventUpdateDetails): Uint8Array;
    toProtoMsg(message: EventUpdateDetails): EventUpdateDetailsProtoMsg;
};
export declare const EventUpdateStatus: {
    typeUrl: string;
    encode(message: EventUpdateStatus, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateStatus;
    fromPartial(object: Partial<EventUpdateStatus>): EventUpdateStatus;
    fromAmino(object: EventUpdateStatusAmino): EventUpdateStatus;
    toAmino(message: EventUpdateStatus): EventUpdateStatusAmino;
    fromAminoMsg(object: EventUpdateStatusAminoMsg): EventUpdateStatus;
    fromProtoMsg(message: EventUpdateStatusProtoMsg): EventUpdateStatus;
    toProto(message: EventUpdateStatus): Uint8Array;
    toProtoMsg(message: EventUpdateStatus): EventUpdateStatusProtoMsg;
};
