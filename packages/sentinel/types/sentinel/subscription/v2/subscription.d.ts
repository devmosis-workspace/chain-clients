import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status } from "../../types/v1/status";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export declare enum SubscriptionType {
    TYPE_UNSPECIFIED = 0,
    TYPE_NODE = 1,
    TYPE_PLAN = 2,
    UNRECOGNIZED = -1
}
export declare const SubscriptionTypeSDKType: typeof SubscriptionType;
export declare const SubscriptionTypeAmino: typeof SubscriptionType;
export declare function subscriptionTypeFromJSON(object: any): SubscriptionType;
export declare function subscriptionTypeToJSON(object: SubscriptionType): string;
export interface BaseSubscription {
    id: bigint;
    address: string;
    inactiveAt: Timestamp;
    status: Status;
    statusAt: Timestamp;
}
export interface BaseSubscriptionProtoMsg {
    typeUrl: "/sentinel.subscription.v2.BaseSubscription";
    value: Uint8Array;
}
export interface BaseSubscriptionAmino {
    id?: string;
    address?: string;
    inactive_at?: string;
    status?: Status;
    status_at?: string;
}
export interface BaseSubscriptionAminoMsg {
    type: "/sentinel.subscription.v2.BaseSubscription";
    value: BaseSubscriptionAmino;
}
export interface BaseSubscriptionSDKType {
    id: bigint;
    address: string;
    inactive_at: TimestampSDKType;
    status: Status;
    status_at: TimestampSDKType;
}
export interface NodeSubscription {
    base?: BaseSubscription;
    nodeAddress: string;
    gigabytes: bigint;
    hours: bigint;
    deposit: Coin;
}
export interface NodeSubscriptionProtoMsg {
    typeUrl: "/sentinel.subscription.v2.NodeSubscription";
    value: Uint8Array;
}
export interface NodeSubscriptionAmino {
    base?: BaseSubscriptionAmino;
    node_address?: string;
    gigabytes?: string;
    hours?: string;
    deposit?: CoinAmino;
}
export interface NodeSubscriptionAminoMsg {
    type: "/sentinel.subscription.v2.NodeSubscription";
    value: NodeSubscriptionAmino;
}
export interface NodeSubscriptionSDKType {
    base?: BaseSubscriptionSDKType;
    node_address: string;
    gigabytes: bigint;
    hours: bigint;
    deposit: CoinSDKType;
}
export interface PlanSubscription {
    base?: BaseSubscription;
    planId: bigint;
    denom: string;
}
export interface PlanSubscriptionProtoMsg {
    typeUrl: "/sentinel.subscription.v2.PlanSubscription";
    value: Uint8Array;
}
export interface PlanSubscriptionAmino {
    base?: BaseSubscriptionAmino;
    plan_id?: string;
    denom?: string;
}
export interface PlanSubscriptionAminoMsg {
    type: "/sentinel.subscription.v2.PlanSubscription";
    value: PlanSubscriptionAmino;
}
export interface PlanSubscriptionSDKType {
    base?: BaseSubscriptionSDKType;
    plan_id: bigint;
    denom: string;
}
export declare const BaseSubscription: {
    typeUrl: string;
    encode(message: BaseSubscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseSubscription;
    fromPartial(object: Partial<BaseSubscription>): BaseSubscription;
    fromAmino(object: BaseSubscriptionAmino): BaseSubscription;
    toAmino(message: BaseSubscription): BaseSubscriptionAmino;
    fromAminoMsg(object: BaseSubscriptionAminoMsg): BaseSubscription;
    fromProtoMsg(message: BaseSubscriptionProtoMsg): BaseSubscription;
    toProto(message: BaseSubscription): Uint8Array;
    toProtoMsg(message: BaseSubscription): BaseSubscriptionProtoMsg;
};
export declare const NodeSubscription: {
    typeUrl: string;
    encode(message: NodeSubscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NodeSubscription;
    fromPartial(object: Partial<NodeSubscription>): NodeSubscription;
    fromAmino(object: NodeSubscriptionAmino): NodeSubscription;
    toAmino(message: NodeSubscription): NodeSubscriptionAmino;
    fromAminoMsg(object: NodeSubscriptionAminoMsg): NodeSubscription;
    fromProtoMsg(message: NodeSubscriptionProtoMsg): NodeSubscription;
    toProto(message: NodeSubscription): Uint8Array;
    toProtoMsg(message: NodeSubscription): NodeSubscriptionProtoMsg;
};
export declare const PlanSubscription: {
    typeUrl: string;
    encode(message: PlanSubscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PlanSubscription;
    fromPartial(object: Partial<PlanSubscription>): PlanSubscription;
    fromAmino(object: PlanSubscriptionAmino): PlanSubscription;
    toAmino(message: PlanSubscription): PlanSubscriptionAmino;
    fromAminoMsg(object: PlanSubscriptionAminoMsg): PlanSubscription;
    fromProtoMsg(message: PlanSubscriptionProtoMsg): PlanSubscription;
    toProto(message: PlanSubscription): Uint8Array;
    toProtoMsg(message: PlanSubscription): PlanSubscriptionProtoMsg;
};
