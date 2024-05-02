import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface EventRegister {
    address: string;
}
export interface EventRegisterProtoMsg {
    typeUrl: "/sentinel.node.v2.EventRegister";
    value: Uint8Array;
}
export interface EventRegisterAmino {
    address?: string;
}
export interface EventRegisterAminoMsg {
    type: "/sentinel.node.v2.EventRegister";
    value: EventRegisterAmino;
}
export interface EventRegisterSDKType {
    address: string;
}
export interface EventUpdateDetails {
    address: string;
}
export interface EventUpdateDetailsProtoMsg {
    typeUrl: "/sentinel.node.v2.EventUpdateDetails";
    value: Uint8Array;
}
export interface EventUpdateDetailsAmino {
    address?: string;
}
export interface EventUpdateDetailsAminoMsg {
    type: "/sentinel.node.v2.EventUpdateDetails";
    value: EventUpdateDetailsAmino;
}
export interface EventUpdateDetailsSDKType {
    address: string;
}
export interface EventUpdateStatus {
    status: Status;
    address: string;
}
export interface EventUpdateStatusProtoMsg {
    typeUrl: "/sentinel.node.v2.EventUpdateStatus";
    value: Uint8Array;
}
export interface EventUpdateStatusAmino {
    status?: Status;
    address?: string;
}
export interface EventUpdateStatusAminoMsg {
    type: "/sentinel.node.v2.EventUpdateStatus";
    value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
    status: Status;
    address: string;
}
export interface EventCreateSubscription {
    address: string;
    nodeAddress: string;
    id: bigint;
}
export interface EventCreateSubscriptionProtoMsg {
    typeUrl: "/sentinel.node.v2.EventCreateSubscription";
    value: Uint8Array;
}
export interface EventCreateSubscriptionAmino {
    address?: string;
    node_address?: string;
    id?: string;
}
export interface EventCreateSubscriptionAminoMsg {
    type: "/sentinel.node.v2.EventCreateSubscription";
    value: EventCreateSubscriptionAmino;
}
export interface EventCreateSubscriptionSDKType {
    address: string;
    node_address: string;
    id: bigint;
}
export declare const EventRegister: {
    typeUrl: string;
    encode(message: EventRegister, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRegister;
    fromPartial(object: Partial<EventRegister>): EventRegister;
    fromAmino(object: EventRegisterAmino): EventRegister;
    toAmino(message: EventRegister): EventRegisterAmino;
    fromAminoMsg(object: EventRegisterAminoMsg): EventRegister;
    fromProtoMsg(message: EventRegisterProtoMsg): EventRegister;
    toProto(message: EventRegister): Uint8Array;
    toProtoMsg(message: EventRegister): EventRegisterProtoMsg;
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
