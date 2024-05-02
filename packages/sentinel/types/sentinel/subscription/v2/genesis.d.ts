import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Allocation, AllocationAmino, AllocationSDKType } from "./allocation";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface GenesisSubscription {
    subscription?: Any;
    allocations: Allocation[];
}
export interface GenesisSubscriptionProtoMsg {
    typeUrl: "/sentinel.subscription.v2.GenesisSubscription";
    value: Uint8Array;
}
export interface GenesisSubscriptionAmino {
    subscription?: AnyAmino;
    allocations?: AllocationAmino[];
}
export interface GenesisSubscriptionAminoMsg {
    type: "/sentinel.subscription.v2.GenesisSubscription";
    value: GenesisSubscriptionAmino;
}
export interface GenesisSubscriptionSDKType {
    subscription?: AnySDKType;
    allocations: AllocationSDKType[];
}
export interface GenesisState {
    subscriptions: GenesisSubscription[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sentinel.subscription.v2.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    subscriptions?: GenesisSubscriptionAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/sentinel.subscription.v2.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    subscriptions: GenesisSubscriptionSDKType[];
    params: ParamsSDKType;
}
export declare const GenesisSubscription: {
    typeUrl: string;
    encode(message: GenesisSubscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisSubscription;
    fromPartial(object: Partial<GenesisSubscription>): GenesisSubscription;
    fromAmino(object: GenesisSubscriptionAmino): GenesisSubscription;
    toAmino(message: GenesisSubscription): GenesisSubscriptionAmino;
    fromAminoMsg(object: GenesisSubscriptionAminoMsg): GenesisSubscription;
    fromProtoMsg(message: GenesisSubscriptionProtoMsg): GenesisSubscription;
    toProto(message: GenesisSubscription): Uint8Array;
    toProtoMsg(message: GenesisSubscription): GenesisSubscriptionProtoMsg;
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
