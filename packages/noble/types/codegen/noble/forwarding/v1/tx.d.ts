import { BinaryWriter } from "../../../binary";
export interface MsgRegisterAccount {
    signer: string;
    recipient: string;
    channel: string;
}
export interface MsgRegisterAccountProtoMsg {
    typeUrl: "/noble.forwarding.v1.MsgRegisterAccount";
    value: Uint8Array;
}
export interface MsgRegisterAccountAmino {
    signer?: string;
    recipient?: string;
    channel?: string;
}
export interface MsgRegisterAccountAminoMsg {
    type: "/noble.forwarding.v1.MsgRegisterAccount";
    value: MsgRegisterAccountAmino;
}
export interface MsgRegisterAccountSDKType {
    signer: string;
    recipient: string;
    channel: string;
}
export interface MsgRegisterAccountResponse {
    address: string;
}
export interface MsgRegisterAccountResponseProtoMsg {
    typeUrl: "/noble.forwarding.v1.MsgRegisterAccountResponse";
    value: Uint8Array;
}
export interface MsgRegisterAccountResponseAmino {
    address?: string;
}
export interface MsgRegisterAccountResponseAminoMsg {
    type: "/noble.forwarding.v1.MsgRegisterAccountResponse";
    value: MsgRegisterAccountResponseAmino;
}
export interface MsgRegisterAccountResponseSDKType {
    address: string;
}
export interface MsgClearAccount {
    signer: string;
    address: string;
}
export interface MsgClearAccountProtoMsg {
    typeUrl: "/noble.forwarding.v1.MsgClearAccount";
    value: Uint8Array;
}
export interface MsgClearAccountAmino {
    signer?: string;
    address?: string;
}
export interface MsgClearAccountAminoMsg {
    type: "/noble.forwarding.v1.MsgClearAccount";
    value: MsgClearAccountAmino;
}
export interface MsgClearAccountSDKType {
    signer: string;
    address: string;
}
export interface MsgClearAccountResponse {
}
export interface MsgClearAccountResponseProtoMsg {
    typeUrl: "/noble.forwarding.v1.MsgClearAccountResponse";
    value: Uint8Array;
}
export interface MsgClearAccountResponseAmino {
}
export interface MsgClearAccountResponseAminoMsg {
    type: "/noble.forwarding.v1.MsgClearAccountResponse";
    value: MsgClearAccountResponseAmino;
}
export interface MsgClearAccountResponseSDKType {
}
export declare const MsgRegisterAccount: {
    typeUrl: string;
    encode(message: MsgRegisterAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterAccount;
    fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount;
    fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount;
    toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino;
    fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount;
    fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount;
    toProto(message: MsgRegisterAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg;
};
export declare const MsgRegisterAccountResponse: {
    typeUrl: string;
    encode(message: MsgRegisterAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterAccountResponse;
    fromPartial(object: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
    fromAmino(object: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse;
    toAmino(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse;
    fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse;
    toProto(message: MsgRegisterAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg;
};
export declare const MsgClearAccount: {
    typeUrl: string;
    encode(message: MsgClearAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClearAccount;
    fromPartial(object: Partial<MsgClearAccount>): MsgClearAccount;
    fromAmino(object: MsgClearAccountAmino): MsgClearAccount;
    toAmino(message: MsgClearAccount): MsgClearAccountAmino;
    fromAminoMsg(object: MsgClearAccountAminoMsg): MsgClearAccount;
    fromProtoMsg(message: MsgClearAccountProtoMsg): MsgClearAccount;
    toProto(message: MsgClearAccount): Uint8Array;
    toProtoMsg(message: MsgClearAccount): MsgClearAccountProtoMsg;
};
export declare const MsgClearAccountResponse: {
    typeUrl: string;
    encode(_: MsgClearAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClearAccountResponse;
    fromPartial(_: Partial<MsgClearAccountResponse>): MsgClearAccountResponse;
    fromAmino(_: MsgClearAccountResponseAmino): MsgClearAccountResponse;
    toAmino(_: MsgClearAccountResponse): MsgClearAccountResponseAmino;
    fromAminoMsg(object: MsgClearAccountResponseAminoMsg): MsgClearAccountResponse;
    fromProtoMsg(message: MsgClearAccountResponseProtoMsg): MsgClearAccountResponse;
    toProto(message: MsgClearAccountResponse): Uint8Array;
    toProtoMsg(message: MsgClearAccountResponse): MsgClearAccountResponseProtoMsg;
};
