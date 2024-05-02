import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface EventCreate {
    address: string;
    id: bigint;
}
export interface EventCreateProtoMsg {
    typeUrl: "/sentinel.plan.v2.EventCreate";
    value: Uint8Array;
}
export interface EventCreateAmino {
    address?: string;
    id?: string;
}
export interface EventCreateAminoMsg {
    type: "/sentinel.plan.v2.EventCreate";
    value: EventCreateAmino;
}
export interface EventCreateSDKType {
    address: string;
    id: bigint;
}
export interface EventUpdateStatus {
    status: Status;
    address: string;
    id: bigint;
}
export interface EventUpdateStatusProtoMsg {
    typeUrl: "/sentinel.plan.v2.EventUpdateStatus";
    value: Uint8Array;
}
export interface EventUpdateStatusAmino {
    status?: Status;
    address?: string;
    id?: string;
}
export interface EventUpdateStatusAminoMsg {
    type: "/sentinel.plan.v2.EventUpdateStatus";
    value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
    status: Status;
    address: string;
    id: bigint;
}
export interface EventLinkNode {
    address: string;
    nodeAddress: string;
    id: bigint;
}
export interface EventLinkNodeProtoMsg {
    typeUrl: "/sentinel.plan.v2.EventLinkNode";
    value: Uint8Array;
}
export interface EventLinkNodeAmino {
    address?: string;
    node_address?: string;
    id?: string;
}
export interface EventLinkNodeAminoMsg {
    type: "/sentinel.plan.v2.EventLinkNode";
    value: EventLinkNodeAmino;
}
export interface EventLinkNodeSDKType {
    address: string;
    node_address: string;
    id: bigint;
}
export interface EventUnlinkNode {
    address: string;
    nodeAddress: string;
    id: bigint;
}
export interface EventUnlinkNodeProtoMsg {
    typeUrl: "/sentinel.plan.v2.EventUnlinkNode";
    value: Uint8Array;
}
export interface EventUnlinkNodeAmino {
    address?: string;
    node_address?: string;
    id?: string;
}
export interface EventUnlinkNodeAminoMsg {
    type: "/sentinel.plan.v2.EventUnlinkNode";
    value: EventUnlinkNodeAmino;
}
export interface EventUnlinkNodeSDKType {
    address: string;
    node_address: string;
    id: bigint;
}
export interface EventCreateSubscription {
    address: string;
    providerAddress: string;
    id: bigint;
    planId: bigint;
}
export interface EventCreateSubscriptionProtoMsg {
    typeUrl: "/sentinel.plan.v2.EventCreateSubscription";
    value: Uint8Array;
}
export interface EventCreateSubscriptionAmino {
    address?: string;
    provider_address?: string;
    id?: string;
    plan_id?: string;
}
export interface EventCreateSubscriptionAminoMsg {
    type: "/sentinel.plan.v2.EventCreateSubscription";
    value: EventCreateSubscriptionAmino;
}
export interface EventCreateSubscriptionSDKType {
    address: string;
    provider_address: string;
    id: bigint;
    plan_id: bigint;
}
export declare const EventCreate: {
    typeUrl: string;
    encode(message: EventCreate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreate;
    fromPartial(object: Partial<EventCreate>): EventCreate;
    fromAmino(object: EventCreateAmino): EventCreate;
    toAmino(message: EventCreate): EventCreateAmino;
    fromAminoMsg(object: EventCreateAminoMsg): EventCreate;
    fromProtoMsg(message: EventCreateProtoMsg): EventCreate;
    toProto(message: EventCreate): Uint8Array;
    toProtoMsg(message: EventCreate): EventCreateProtoMsg;
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
export declare const EventLinkNode: {
    typeUrl: string;
    encode(message: EventLinkNode, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventLinkNode;
    fromPartial(object: Partial<EventLinkNode>): EventLinkNode;
    fromAmino(object: EventLinkNodeAmino): EventLinkNode;
    toAmino(message: EventLinkNode): EventLinkNodeAmino;
    fromAminoMsg(object: EventLinkNodeAminoMsg): EventLinkNode;
    fromProtoMsg(message: EventLinkNodeProtoMsg): EventLinkNode;
    toProto(message: EventLinkNode): Uint8Array;
    toProtoMsg(message: EventLinkNode): EventLinkNodeProtoMsg;
};
export declare const EventUnlinkNode: {
    typeUrl: string;
    encode(message: EventUnlinkNode, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUnlinkNode;
    fromPartial(object: Partial<EventUnlinkNode>): EventUnlinkNode;
    fromAmino(object: EventUnlinkNodeAmino): EventUnlinkNode;
    toAmino(message: EventUnlinkNode): EventUnlinkNodeAmino;
    fromAminoMsg(object: EventUnlinkNodeAminoMsg): EventUnlinkNode;
    fromProtoMsg(message: EventUnlinkNodeProtoMsg): EventUnlinkNode;
    toProto(message: EventUnlinkNode): Uint8Array;
    toProtoMsg(message: EventUnlinkNode): EventUnlinkNodeProtoMsg;
};
export declare const EventCreateSubscription: {
    typeUrl: string;
    encode(message: EventCreateSubscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateSubscription;
    fromPartial(object: Partial<EventCreateSubscription>): EventCreateSubscription;
    fromAmino(object: EventCreateSubscriptionAmino): EventCreateSubscription;
    toAmino(message: EventCreateSubscription): EventCreateSubscriptionAmino;
    fromAminoMsg(object: EventCreateSubscriptionAminoMsg): EventCreateSubscription;
    fromProtoMsg(message: EventCreateSubscriptionProtoMsg): EventCreateSubscription;
    toProto(message: EventCreateSubscription): Uint8Array;
    toProtoMsg(message: EventCreateSubscription): EventCreateSubscriptionProtoMsg;
};
