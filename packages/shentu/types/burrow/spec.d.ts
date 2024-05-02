import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "./crypto";
import { Balance, BalanceAmino, BalanceSDKType } from "./balance";
import { BinaryWriter } from "../binary";
export interface TemplateAccount {
    Name: string;
    Address: Uint8Array;
    PublicKey?: PublicKey;
    Amounts: Balance[];
    Permissions: string[];
    Roles: string[];
    Code?: Uint8Array;
}
export interface TemplateAccountProtoMsg {
    typeUrl: "/spec.TemplateAccount";
    value: Uint8Array;
}
export interface TemplateAccountAmino {
    Name?: string;
    Address?: string;
    PublicKey?: PublicKeyAmino;
    Amounts?: BalanceAmino[];
    Permissions?: string[];
    Roles?: string[];
    Code?: string;
}
export interface TemplateAccountAminoMsg {
    type: "/spec.TemplateAccount";
    value: TemplateAccountAmino;
}
export interface TemplateAccountSDKType {
    Name: string;
    Address: Uint8Array;
    PublicKey?: PublicKeySDKType;
    Amounts: BalanceSDKType[];
    Permissions: string[];
    Roles: string[];
    Code?: Uint8Array;
}
export declare const TemplateAccount: {
    typeUrl: string;
    encode(message: TemplateAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TemplateAccount;
    fromPartial(object: Partial<TemplateAccount>): TemplateAccount;
    fromAmino(object: TemplateAccountAmino): TemplateAccount;
    toAmino(message: TemplateAccount): TemplateAccountAmino;
    fromAminoMsg(object: TemplateAccountAminoMsg): TemplateAccount;
    fromProtoMsg(message: TemplateAccountProtoMsg): TemplateAccount;
    toProto(message: TemplateAccount): Uint8Array;
    toProtoMsg(message: TemplateAccount): TemplateAccountProtoMsg;
};
