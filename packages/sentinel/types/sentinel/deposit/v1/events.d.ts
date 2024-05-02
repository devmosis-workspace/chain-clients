import { BinaryWriter } from "../../../binary";
export interface EventAdd {
    address: string;
    coins: string;
}
export interface EventAddProtoMsg {
    typeUrl: "/sentinel.deposit.v1.EventAdd";
    value: Uint8Array;
}
export interface EventAddAmino {
    address?: string;
    coins?: string;
}
export interface EventAddAminoMsg {
    type: "/sentinel.deposit.v1.EventAdd";
    value: EventAddAmino;
}
export interface EventAddSDKType {
    address: string;
    coins: string;
}
export interface EventSubtract {
    address: string;
    coins: string;
}
export interface EventSubtractProtoMsg {
    typeUrl: "/sentinel.deposit.v1.EventSubtract";
    value: Uint8Array;
}
export interface EventSubtractAmino {
    address?: string;
    coins?: string;
}
export interface EventSubtractAminoMsg {
    type: "/sentinel.deposit.v1.EventSubtract";
    value: EventSubtractAmino;
}
export interface EventSubtractSDKType {
    address: string;
    coins: string;
}
export declare const EventAdd: {
    typeUrl: string;
    encode(message: EventAdd, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAdd;
    fromPartial(object: Partial<EventAdd>): EventAdd;
    fromAmino(object: EventAddAmino): EventAdd;
    toAmino(message: EventAdd): EventAddAmino;
    fromAminoMsg(object: EventAddAminoMsg): EventAdd;
    fromProtoMsg(message: EventAddProtoMsg): EventAdd;
    toProto(message: EventAdd): Uint8Array;
    toProtoMsg(message: EventAdd): EventAddProtoMsg;
};
export declare const EventSubtract: {
    typeUrl: string;
    encode(message: EventSubtract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSubtract;
    fromPartial(object: Partial<EventSubtract>): EventSubtract;
    fromAmino(object: EventSubtractAmino): EventSubtract;
    toAmino(message: EventSubtract): EventSubtractAmino;
    fromAminoMsg(object: EventSubtractAminoMsg): EventSubtract;
    fromProtoMsg(message: EventSubtractProtoMsg): EventSubtract;
    toProto(message: EventSubtract): Uint8Array;
    toProtoMsg(message: EventSubtract): EventSubtractProtoMsg;
};
