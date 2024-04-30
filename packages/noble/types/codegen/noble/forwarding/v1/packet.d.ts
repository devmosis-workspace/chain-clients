import { BinaryWriter } from "../../../binary";
export interface RegisterAccountData {
    recipient: string;
    channel: string;
}
export interface RegisterAccountDataProtoMsg {
    typeUrl: "/noble.forwarding.v1.RegisterAccountData";
    value: Uint8Array;
}
export interface RegisterAccountDataAmino {
    recipient?: string;
    channel?: string;
}
export interface RegisterAccountDataAminoMsg {
    type: "/noble.forwarding.v1.RegisterAccountData";
    value: RegisterAccountDataAmino;
}
export interface RegisterAccountDataSDKType {
    recipient: string;
    channel: string;
}
export interface RegisterAccountMemo {
    noble?: RegisterAccountMemo_RegisterAccountDataWrapper;
}
export interface RegisterAccountMemoProtoMsg {
    typeUrl: "/noble.forwarding.v1.RegisterAccountMemo";
    value: Uint8Array;
}
export interface RegisterAccountMemoAmino {
    noble?: RegisterAccountMemo_RegisterAccountDataWrapperAmino;
}
export interface RegisterAccountMemoAminoMsg {
    type: "/noble.forwarding.v1.RegisterAccountMemo";
    value: RegisterAccountMemoAmino;
}
export interface RegisterAccountMemoSDKType {
    noble?: RegisterAccountMemo_RegisterAccountDataWrapperSDKType;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapper {
    forwarding?: RegisterAccountData;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg {
    typeUrl: "/noble.forwarding.v1.RegisterAccountDataWrapper";
    value: Uint8Array;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperAmino {
    forwarding?: RegisterAccountDataAmino;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperAminoMsg {
    type: "/noble.forwarding.v1.RegisterAccountDataWrapper";
    value: RegisterAccountMemo_RegisterAccountDataWrapperAmino;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperSDKType {
    forwarding?: RegisterAccountDataSDKType;
}
export declare const RegisterAccountData: {
    typeUrl: string;
    encode(message: RegisterAccountData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterAccountData;
    fromPartial(object: Partial<RegisterAccountData>): RegisterAccountData;
    fromAmino(object: RegisterAccountDataAmino): RegisterAccountData;
    toAmino(message: RegisterAccountData): RegisterAccountDataAmino;
    fromAminoMsg(object: RegisterAccountDataAminoMsg): RegisterAccountData;
    fromProtoMsg(message: RegisterAccountDataProtoMsg): RegisterAccountData;
    toProto(message: RegisterAccountData): Uint8Array;
    toProtoMsg(message: RegisterAccountData): RegisterAccountDataProtoMsg;
};
export declare const RegisterAccountMemo: {
    typeUrl: string;
    encode(message: RegisterAccountMemo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterAccountMemo;
    fromPartial(object: Partial<RegisterAccountMemo>): RegisterAccountMemo;
    fromAmino(object: RegisterAccountMemoAmino): RegisterAccountMemo;
    toAmino(message: RegisterAccountMemo): RegisterAccountMemoAmino;
    fromAminoMsg(object: RegisterAccountMemoAminoMsg): RegisterAccountMemo;
    fromProtoMsg(message: RegisterAccountMemoProtoMsg): RegisterAccountMemo;
    toProto(message: RegisterAccountMemo): Uint8Array;
    toProtoMsg(message: RegisterAccountMemo): RegisterAccountMemoProtoMsg;
};
export declare const RegisterAccountMemo_RegisterAccountDataWrapper: {
    typeUrl: string;
    encode(message: RegisterAccountMemo_RegisterAccountDataWrapper, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterAccountMemo_RegisterAccountDataWrapper;
    fromPartial(object: Partial<RegisterAccountMemo_RegisterAccountDataWrapper>): RegisterAccountMemo_RegisterAccountDataWrapper;
    fromAmino(object: RegisterAccountMemo_RegisterAccountDataWrapperAmino): RegisterAccountMemo_RegisterAccountDataWrapper;
    toAmino(message: RegisterAccountMemo_RegisterAccountDataWrapper): RegisterAccountMemo_RegisterAccountDataWrapperAmino;
    fromAminoMsg(object: RegisterAccountMemo_RegisterAccountDataWrapperAminoMsg): RegisterAccountMemo_RegisterAccountDataWrapper;
    fromProtoMsg(message: RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg): RegisterAccountMemo_RegisterAccountDataWrapper;
    toProto(message: RegisterAccountMemo_RegisterAccountDataWrapper): Uint8Array;
    toProtoMsg(message: RegisterAccountMemo_RegisterAccountDataWrapper): RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg;
};
