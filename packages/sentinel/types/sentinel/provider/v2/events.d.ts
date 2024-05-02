import { BinaryWriter } from "../../../binary";
export interface EventRegister {
    address: string;
}
export interface EventRegisterProtoMsg {
    typeUrl: "/sentinel.provider.v2.EventRegister";
    value: Uint8Array;
}
export interface EventRegisterAmino {
    address?: string;
}
export interface EventRegisterAminoMsg {
    type: "/sentinel.provider.v2.EventRegister";
    value: EventRegisterAmino;
}
export interface EventRegisterSDKType {
    address: string;
}
export interface EventUpdate {
    address: string;
}
export interface EventUpdateProtoMsg {
    typeUrl: "/sentinel.provider.v2.EventUpdate";
    value: Uint8Array;
}
export interface EventUpdateAmino {
    address?: string;
}
export interface EventUpdateAminoMsg {
    type: "/sentinel.provider.v2.EventUpdate";
    value: EventUpdateAmino;
}
export interface EventUpdateSDKType {
    address: string;
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
export declare const EventUpdate: {
    typeUrl: string;
    encode(message: EventUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdate;
    fromPartial(object: Partial<EventUpdate>): EventUpdate;
    fromAmino(object: EventUpdateAmino): EventUpdate;
    toAmino(message: EventUpdate): EventUpdateAmino;
    fromAminoMsg(object: EventUpdateAminoMsg): EventUpdate;
    fromProtoMsg(message: EventUpdateProtoMsg): EventUpdate;
    toProto(message: EventUpdate): Uint8Array;
    toProtoMsg(message: EventUpdate): EventUpdateProtoMsg;
};
