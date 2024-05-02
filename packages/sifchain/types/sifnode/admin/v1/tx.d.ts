import { AdminAccount, AdminAccountAmino, AdminAccountSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface MsgAddAccount {
    signer: string;
    account?: AdminAccount;
}
export interface MsgAddAccountProtoMsg {
    typeUrl: "/sifnode.admin.v1.MsgAddAccount";
    value: Uint8Array;
}
export interface MsgAddAccountAmino {
    signer?: string;
    account?: AdminAccountAmino;
}
export interface MsgAddAccountAminoMsg {
    type: "/sifnode.admin.v1.MsgAddAccount";
    value: MsgAddAccountAmino;
}
export interface MsgAddAccountSDKType {
    signer: string;
    account?: AdminAccountSDKType;
}
export interface MsgAddAccountResponse {
}
export interface MsgAddAccountResponseProtoMsg {
    typeUrl: "/sifnode.admin.v1.MsgAddAccountResponse";
    value: Uint8Array;
}
export interface MsgAddAccountResponseAmino {
}
export interface MsgAddAccountResponseAminoMsg {
    type: "/sifnode.admin.v1.MsgAddAccountResponse";
    value: MsgAddAccountResponseAmino;
}
export interface MsgAddAccountResponseSDKType {
}
export interface MsgRemoveAccount {
    signer: string;
    account?: AdminAccount;
}
export interface MsgRemoveAccountProtoMsg {
    typeUrl: "/sifnode.admin.v1.MsgRemoveAccount";
    value: Uint8Array;
}
export interface MsgRemoveAccountAmino {
    signer?: string;
    account?: AdminAccountAmino;
}
export interface MsgRemoveAccountAminoMsg {
    type: "/sifnode.admin.v1.MsgRemoveAccount";
    value: MsgRemoveAccountAmino;
}
export interface MsgRemoveAccountSDKType {
    signer: string;
    account?: AdminAccountSDKType;
}
export interface MsgRemoveAccountResponse {
}
export interface MsgRemoveAccountResponseProtoMsg {
    typeUrl: "/sifnode.admin.v1.MsgRemoveAccountResponse";
    value: Uint8Array;
}
export interface MsgRemoveAccountResponseAmino {
}
export interface MsgRemoveAccountResponseAminoMsg {
    type: "/sifnode.admin.v1.MsgRemoveAccountResponse";
    value: MsgRemoveAccountResponseAmino;
}
export interface MsgRemoveAccountResponseSDKType {
}
export interface MsgSetParams {
    signer: string;
    params?: Params;
}
export interface MsgSetParamsProtoMsg {
    typeUrl: "/sifnode.admin.v1.MsgSetParams";
    value: Uint8Array;
}
export interface MsgSetParamsAmino {
    signer?: string;
    params?: ParamsAmino;
}
export interface MsgSetParamsAminoMsg {
    type: "/sifnode.admin.v1.MsgSetParams";
    value: MsgSetParamsAmino;
}
export interface MsgSetParamsSDKType {
    signer: string;
    params?: ParamsSDKType;
}
export interface MsgSetParamsResponse {
}
export interface MsgSetParamsResponseProtoMsg {
    typeUrl: "/sifnode.admin.v1.MsgSetParamsResponse";
    value: Uint8Array;
}
export interface MsgSetParamsResponseAmino {
}
export interface MsgSetParamsResponseAminoMsg {
    type: "/sifnode.admin.v1.MsgSetParamsResponse";
    value: MsgSetParamsResponseAmino;
}
export interface MsgSetParamsResponseSDKType {
}
export declare const MsgAddAccount: {
    typeUrl: string;
    encode(message: MsgAddAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddAccount;
    fromPartial(object: Partial<MsgAddAccount>): MsgAddAccount;
    fromAmino(object: MsgAddAccountAmino): MsgAddAccount;
    toAmino(message: MsgAddAccount): MsgAddAccountAmino;
    fromAminoMsg(object: MsgAddAccountAminoMsg): MsgAddAccount;
    fromProtoMsg(message: MsgAddAccountProtoMsg): MsgAddAccount;
    toProto(message: MsgAddAccount): Uint8Array;
    toProtoMsg(message: MsgAddAccount): MsgAddAccountProtoMsg;
};
export declare const MsgAddAccountResponse: {
    typeUrl: string;
    encode(_: MsgAddAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddAccountResponse;
    fromPartial(_: Partial<MsgAddAccountResponse>): MsgAddAccountResponse;
    fromAmino(_: MsgAddAccountResponseAmino): MsgAddAccountResponse;
    toAmino(_: MsgAddAccountResponse): MsgAddAccountResponseAmino;
    fromAminoMsg(object: MsgAddAccountResponseAminoMsg): MsgAddAccountResponse;
    fromProtoMsg(message: MsgAddAccountResponseProtoMsg): MsgAddAccountResponse;
    toProto(message: MsgAddAccountResponse): Uint8Array;
    toProtoMsg(message: MsgAddAccountResponse): MsgAddAccountResponseProtoMsg;
};
export declare const MsgRemoveAccount: {
    typeUrl: string;
    encode(message: MsgRemoveAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveAccount;
    fromPartial(object: Partial<MsgRemoveAccount>): MsgRemoveAccount;
    fromAmino(object: MsgRemoveAccountAmino): MsgRemoveAccount;
    toAmino(message: MsgRemoveAccount): MsgRemoveAccountAmino;
    fromAminoMsg(object: MsgRemoveAccountAminoMsg): MsgRemoveAccount;
    fromProtoMsg(message: MsgRemoveAccountProtoMsg): MsgRemoveAccount;
    toProto(message: MsgRemoveAccount): Uint8Array;
    toProtoMsg(message: MsgRemoveAccount): MsgRemoveAccountProtoMsg;
};
export declare const MsgRemoveAccountResponse: {
    typeUrl: string;
    encode(_: MsgRemoveAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveAccountResponse;
    fromPartial(_: Partial<MsgRemoveAccountResponse>): MsgRemoveAccountResponse;
    fromAmino(_: MsgRemoveAccountResponseAmino): MsgRemoveAccountResponse;
    toAmino(_: MsgRemoveAccountResponse): MsgRemoveAccountResponseAmino;
    fromAminoMsg(object: MsgRemoveAccountResponseAminoMsg): MsgRemoveAccountResponse;
    fromProtoMsg(message: MsgRemoveAccountResponseProtoMsg): MsgRemoveAccountResponse;
    toProto(message: MsgRemoveAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveAccountResponse): MsgRemoveAccountResponseProtoMsg;
};
export declare const MsgSetParams: {
    typeUrl: string;
    encode(message: MsgSetParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetParams;
    fromPartial(object: Partial<MsgSetParams>): MsgSetParams;
    fromAmino(object: MsgSetParamsAmino): MsgSetParams;
    toAmino(message: MsgSetParams): MsgSetParamsAmino;
    fromAminoMsg(object: MsgSetParamsAminoMsg): MsgSetParams;
    fromProtoMsg(message: MsgSetParamsProtoMsg): MsgSetParams;
    toProto(message: MsgSetParams): Uint8Array;
    toProtoMsg(message: MsgSetParams): MsgSetParamsProtoMsg;
};
export declare const MsgSetParamsResponse: {
    typeUrl: string;
    encode(_: MsgSetParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetParamsResponse;
    fromPartial(_: Partial<MsgSetParamsResponse>): MsgSetParamsResponse;
    fromAmino(_: MsgSetParamsResponseAmino): MsgSetParamsResponse;
    toAmino(_: MsgSetParamsResponse): MsgSetParamsResponseAmino;
    fromAminoMsg(object: MsgSetParamsResponseAminoMsg): MsgSetParamsResponse;
    fromProtoMsg(message: MsgSetParamsResponseProtoMsg): MsgSetParamsResponse;
    toProto(message: MsgSetParamsResponse): Uint8Array;
    toProtoMsg(message: MsgSetParamsResponse): MsgSetParamsResponseProtoMsg;
};
