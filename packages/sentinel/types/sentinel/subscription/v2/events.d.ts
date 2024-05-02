import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface EventUpdateStatus {
    status: Status;
    address: string;
    id: bigint;
    planId: bigint;
}
export interface EventUpdateStatusProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventUpdateStatus";
    value: Uint8Array;
}
export interface EventUpdateStatusAmino {
    status?: Status;
    address?: string;
    id?: string;
    plan_id?: string;
}
export interface EventUpdateStatusAminoMsg {
    type: "/sentinel.subscription.v2.EventUpdateStatus";
    value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
    status: Status;
    address: string;
    id: bigint;
    plan_id: bigint;
}
export interface EventAllocate {
    address: string;
    grantedBytes: string;
    utilisedBytes: string;
    id: bigint;
}
export interface EventAllocateProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventAllocate";
    value: Uint8Array;
}
export interface EventAllocateAmino {
    address?: string;
    granted_bytes?: string;
    utilised_bytes?: string;
    id?: string;
}
export interface EventAllocateAminoMsg {
    type: "/sentinel.subscription.v2.EventAllocate";
    value: EventAllocateAmino;
}
export interface EventAllocateSDKType {
    address: string;
    granted_bytes: string;
    utilised_bytes: string;
    id: bigint;
}
export interface EventCreatePayout {
    address: string;
    nodeAddress: string;
    id: bigint;
}
export interface EventCreatePayoutProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventCreatePayout";
    value: Uint8Array;
}
export interface EventCreatePayoutAmino {
    address?: string;
    node_address?: string;
    id?: string;
}
export interface EventCreatePayoutAminoMsg {
    type: "/sentinel.subscription.v2.EventCreatePayout";
    value: EventCreatePayoutAmino;
}
export interface EventCreatePayoutSDKType {
    address: string;
    node_address: string;
    id: bigint;
}
export interface EventPayForPayout {
    address: string;
    nodeAddress: string;
    payment: string;
    stakingReward: string;
    id: bigint;
}
export interface EventPayForPayoutProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventPayForPayout";
    value: Uint8Array;
}
export interface EventPayForPayoutAmino {
    address?: string;
    node_address?: string;
    payment?: string;
    staking_reward?: string;
    id?: string;
}
export interface EventPayForPayoutAminoMsg {
    type: "/sentinel.subscription.v2.EventPayForPayout";
    value: EventPayForPayoutAmino;
}
export interface EventPayForPayoutSDKType {
    address: string;
    node_address: string;
    payment: string;
    staking_reward: string;
    id: bigint;
}
export interface EventPayForPlan {
    address: string;
    payment: string;
    providerAddress: string;
    stakingReward: string;
    id: bigint;
}
export interface EventPayForPlanProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventPayForPlan";
    value: Uint8Array;
}
export interface EventPayForPlanAmino {
    address?: string;
    payment?: string;
    provider_address?: string;
    staking_reward?: string;
    id?: string;
}
export interface EventPayForPlanAminoMsg {
    type: "/sentinel.subscription.v2.EventPayForPlan";
    value: EventPayForPlanAmino;
}
export interface EventPayForPlanSDKType {
    address: string;
    payment: string;
    provider_address: string;
    staking_reward: string;
    id: bigint;
}
export interface EventPayForSession {
    address: string;
    nodeAddress: string;
    payment: string;
    stakingReward: string;
    sessionId: bigint;
    subscriptionId: bigint;
}
export interface EventPayForSessionProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventPayForSession";
    value: Uint8Array;
}
export interface EventPayForSessionAmino {
    address?: string;
    node_address?: string;
    payment?: string;
    staking_reward?: string;
    session_id?: string;
    subscription_id?: string;
}
export interface EventPayForSessionAminoMsg {
    type: "/sentinel.subscription.v2.EventPayForSession";
    value: EventPayForSessionAmino;
}
export interface EventPayForSessionSDKType {
    address: string;
    node_address: string;
    payment: string;
    staking_reward: string;
    session_id: bigint;
    subscription_id: bigint;
}
export interface EventRefund {
    address: string;
    amount: string;
    id: bigint;
}
export interface EventRefundProtoMsg {
    typeUrl: "/sentinel.subscription.v2.EventRefund";
    value: Uint8Array;
}
export interface EventRefundAmino {
    address?: string;
    amount?: string;
    id?: string;
}
export interface EventRefundAminoMsg {
    type: "/sentinel.subscription.v2.EventRefund";
    value: EventRefundAmino;
}
export interface EventRefundSDKType {
    address: string;
    amount: string;
    id: bigint;
}
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
export declare const EventAllocate: {
    typeUrl: string;
    encode(message: EventAllocate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAllocate;
    fromPartial(object: Partial<EventAllocate>): EventAllocate;
    fromAmino(object: EventAllocateAmino): EventAllocate;
    toAmino(message: EventAllocate): EventAllocateAmino;
    fromAminoMsg(object: EventAllocateAminoMsg): EventAllocate;
    fromProtoMsg(message: EventAllocateProtoMsg): EventAllocate;
    toProto(message: EventAllocate): Uint8Array;
    toProtoMsg(message: EventAllocate): EventAllocateProtoMsg;
};
export declare const EventCreatePayout: {
    typeUrl: string;
    encode(message: EventCreatePayout, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreatePayout;
    fromPartial(object: Partial<EventCreatePayout>): EventCreatePayout;
    fromAmino(object: EventCreatePayoutAmino): EventCreatePayout;
    toAmino(message: EventCreatePayout): EventCreatePayoutAmino;
    fromAminoMsg(object: EventCreatePayoutAminoMsg): EventCreatePayout;
    fromProtoMsg(message: EventCreatePayoutProtoMsg): EventCreatePayout;
    toProto(message: EventCreatePayout): Uint8Array;
    toProtoMsg(message: EventCreatePayout): EventCreatePayoutProtoMsg;
};
export declare const EventPayForPayout: {
    typeUrl: string;
    encode(message: EventPayForPayout, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPayForPayout;
    fromPartial(object: Partial<EventPayForPayout>): EventPayForPayout;
    fromAmino(object: EventPayForPayoutAmino): EventPayForPayout;
    toAmino(message: EventPayForPayout): EventPayForPayoutAmino;
    fromAminoMsg(object: EventPayForPayoutAminoMsg): EventPayForPayout;
    fromProtoMsg(message: EventPayForPayoutProtoMsg): EventPayForPayout;
    toProto(message: EventPayForPayout): Uint8Array;
    toProtoMsg(message: EventPayForPayout): EventPayForPayoutProtoMsg;
};
export declare const EventPayForPlan: {
    typeUrl: string;
    encode(message: EventPayForPlan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPayForPlan;
    fromPartial(object: Partial<EventPayForPlan>): EventPayForPlan;
    fromAmino(object: EventPayForPlanAmino): EventPayForPlan;
    toAmino(message: EventPayForPlan): EventPayForPlanAmino;
    fromAminoMsg(object: EventPayForPlanAminoMsg): EventPayForPlan;
    fromProtoMsg(message: EventPayForPlanProtoMsg): EventPayForPlan;
    toProto(message: EventPayForPlan): Uint8Array;
    toProtoMsg(message: EventPayForPlan): EventPayForPlanProtoMsg;
};
export declare const EventPayForSession: {
    typeUrl: string;
    encode(message: EventPayForSession, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPayForSession;
    fromPartial(object: Partial<EventPayForSession>): EventPayForSession;
    fromAmino(object: EventPayForSessionAmino): EventPayForSession;
    toAmino(message: EventPayForSession): EventPayForSessionAmino;
    fromAminoMsg(object: EventPayForSessionAminoMsg): EventPayForSession;
    fromProtoMsg(message: EventPayForSessionProtoMsg): EventPayForSession;
    toProto(message: EventPayForSession): Uint8Array;
    toProtoMsg(message: EventPayForSession): EventPayForSessionProtoMsg;
};
export declare const EventRefund: {
    typeUrl: string;
    encode(message: EventRefund, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRefund;
    fromPartial(object: Partial<EventRefund>): EventRefund;
    fromAmino(object: EventRefundAmino): EventRefund;
    toAmino(message: EventRefund): EventRefundAmino;
    fromAminoMsg(object: EventRefundAminoMsg): EventRefund;
    fromProtoMsg(message: EventRefundProtoMsg): EventRefund;
    toProto(message: EventRefund): Uint8Array;
    toProtoMsg(message: EventRefund): EventRefundProtoMsg;
};
