import { RegistryEntry, RegistryEntryAmino, RegistryEntrySDKType, SifnodeTokenRegistry, SifnodeTokenRegistryAmino, SifnodeTokenRegistrySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface MsgRegister {
    from: string;
    entry?: RegistryEntry;
}
export interface MsgRegisterProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.MsgRegister";
    value: Uint8Array;
}
export interface MsgRegisterAmino {
    from?: string;
    entry?: RegistryEntryAmino;
}
export interface MsgRegisterAminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgRegister";
    value: MsgRegisterAmino;
}
export interface MsgRegisterSDKType {
    from: string;
    entry?: RegistryEntrySDKType;
}
export interface MsgRegisterResponse {
}
export interface MsgRegisterResponseProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.MsgRegisterResponse";
    value: Uint8Array;
}
export interface MsgRegisterResponseAmino {
}
export interface MsgRegisterResponseAminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgRegisterResponse";
    value: MsgRegisterResponseAmino;
}
export interface MsgRegisterResponseSDKType {
}
export interface MsgSetRegistry {
    from: string;
    registry?: SifnodeTokenRegistry;
}
export interface MsgSetRegistryProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry";
    value: Uint8Array;
}
export interface MsgSetRegistryAmino {
    from?: string;
    registry?: SifnodeTokenRegistryAmino;
}
export interface MsgSetRegistryAminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgSetRegistry";
    value: MsgSetRegistryAmino;
}
export interface MsgSetRegistrySDKType {
    from: string;
    registry?: SifnodeTokenRegistrySDKType;
}
export interface MsgSetRegistryResponse {
}
export interface MsgSetRegistryResponseProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistryResponse";
    value: Uint8Array;
}
export interface MsgSetRegistryResponseAmino {
}
export interface MsgSetRegistryResponseAminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgSetRegistryResponse";
    value: MsgSetRegistryResponseAmino;
}
export interface MsgSetRegistryResponseSDKType {
}
export interface MsgDeregister {
    from: string;
    denom: string;
}
export interface MsgDeregisterProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister";
    value: Uint8Array;
}
export interface MsgDeregisterAmino {
    from?: string;
    denom?: string;
}
export interface MsgDeregisterAminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgDeregister";
    value: MsgDeregisterAmino;
}
export interface MsgDeregisterSDKType {
    from: string;
    denom: string;
}
export interface MsgDeregisterResponse {
}
export interface MsgDeregisterResponseProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.MsgDeregisterResponse";
    value: Uint8Array;
}
export interface MsgDeregisterResponseAmino {
}
export interface MsgDeregisterResponseAminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgDeregisterResponse";
    value: MsgDeregisterResponseAmino;
}
export interface MsgDeregisterResponseSDKType {
}
export declare const MsgRegister: {
    typeUrl: string;
    encode(message: MsgRegister, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegister;
    fromPartial(object: Partial<MsgRegister>): MsgRegister;
    fromAmino(object: MsgRegisterAmino): MsgRegister;
    toAmino(message: MsgRegister): MsgRegisterAmino;
    fromAminoMsg(object: MsgRegisterAminoMsg): MsgRegister;
    fromProtoMsg(message: MsgRegisterProtoMsg): MsgRegister;
    toProto(message: MsgRegister): Uint8Array;
    toProtoMsg(message: MsgRegister): MsgRegisterProtoMsg;
};
export declare const MsgRegisterResponse: {
    typeUrl: string;
    encode(_: MsgRegisterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterResponse;
    fromPartial(_: Partial<MsgRegisterResponse>): MsgRegisterResponse;
    fromAmino(_: MsgRegisterResponseAmino): MsgRegisterResponse;
    toAmino(_: MsgRegisterResponse): MsgRegisterResponseAmino;
    fromAminoMsg(object: MsgRegisterResponseAminoMsg): MsgRegisterResponse;
    fromProtoMsg(message: MsgRegisterResponseProtoMsg): MsgRegisterResponse;
    toProto(message: MsgRegisterResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterResponse): MsgRegisterResponseProtoMsg;
};
export declare const MsgSetRegistry: {
    typeUrl: string;
    encode(message: MsgSetRegistry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetRegistry;
    fromPartial(object: Partial<MsgSetRegistry>): MsgSetRegistry;
    fromAmino(object: MsgSetRegistryAmino): MsgSetRegistry;
    toAmino(message: MsgSetRegistry): MsgSetRegistryAmino;
    fromAminoMsg(object: MsgSetRegistryAminoMsg): MsgSetRegistry;
    fromProtoMsg(message: MsgSetRegistryProtoMsg): MsgSetRegistry;
    toProto(message: MsgSetRegistry): Uint8Array;
    toProtoMsg(message: MsgSetRegistry): MsgSetRegistryProtoMsg;
};
export declare const MsgSetRegistryResponse: {
    typeUrl: string;
    encode(_: MsgSetRegistryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetRegistryResponse;
    fromPartial(_: Partial<MsgSetRegistryResponse>): MsgSetRegistryResponse;
    fromAmino(_: MsgSetRegistryResponseAmino): MsgSetRegistryResponse;
    toAmino(_: MsgSetRegistryResponse): MsgSetRegistryResponseAmino;
    fromAminoMsg(object: MsgSetRegistryResponseAminoMsg): MsgSetRegistryResponse;
    fromProtoMsg(message: MsgSetRegistryResponseProtoMsg): MsgSetRegistryResponse;
    toProto(message: MsgSetRegistryResponse): Uint8Array;
    toProtoMsg(message: MsgSetRegistryResponse): MsgSetRegistryResponseProtoMsg;
};
export declare const MsgDeregister: {
    typeUrl: string;
    encode(message: MsgDeregister, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeregister;
    fromPartial(object: Partial<MsgDeregister>): MsgDeregister;
    fromAmino(object: MsgDeregisterAmino): MsgDeregister;
    toAmino(message: MsgDeregister): MsgDeregisterAmino;
    fromAminoMsg(object: MsgDeregisterAminoMsg): MsgDeregister;
    fromProtoMsg(message: MsgDeregisterProtoMsg): MsgDeregister;
    toProto(message: MsgDeregister): Uint8Array;
    toProtoMsg(message: MsgDeregister): MsgDeregisterProtoMsg;
};
export declare const MsgDeregisterResponse: {
    typeUrl: string;
    encode(_: MsgDeregisterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeregisterResponse;
    fromPartial(_: Partial<MsgDeregisterResponse>): MsgDeregisterResponse;
    fromAmino(_: MsgDeregisterResponseAmino): MsgDeregisterResponse;
    toAmino(_: MsgDeregisterResponse): MsgDeregisterResponseAmino;
    fromAminoMsg(object: MsgDeregisterResponseAminoMsg): MsgDeregisterResponse;
    fromProtoMsg(message: MsgDeregisterResponseProtoMsg): MsgDeregisterResponse;
    toProto(message: MsgDeregisterResponse): Uint8Array;
    toProtoMsg(message: MsgDeregisterResponse): MsgDeregisterResponseProtoMsg;
};
