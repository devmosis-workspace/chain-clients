import { BinaryWriter } from "../binary";
export interface AccountPermissions {
    Base: BasePermissions;
    Roles: string[];
}
export interface AccountPermissionsProtoMsg {
    typeUrl: "/permission.AccountPermissions";
    value: Uint8Array;
}
export interface AccountPermissionsAmino {
    Base?: BasePermissionsAmino;
    Roles?: string[];
}
export interface AccountPermissionsAminoMsg {
    type: "/permission.AccountPermissions";
    value: AccountPermissionsAmino;
}
export interface AccountPermissionsSDKType {
    Base: BasePermissionsSDKType;
    Roles: string[];
}
export interface BasePermissions {
    Perms: bigint;
    SetBit: bigint;
}
export interface BasePermissionsProtoMsg {
    typeUrl: "/permission.BasePermissions";
    value: Uint8Array;
}
export interface BasePermissionsAmino {
    Perms?: string;
    SetBit?: string;
}
export interface BasePermissionsAminoMsg {
    type: "/permission.BasePermissions";
    value: BasePermissionsAmino;
}
export interface BasePermissionsSDKType {
    Perms: bigint;
    SetBit: bigint;
}
export interface PermArgs {
    /** The permission function */
    Action: bigint;
    /** The target of the action */
    Target: Uint8Array;
    /** Possible arguments */
    Permission: bigint;
    Role: string;
    Value: boolean;
}
export interface PermArgsProtoMsg {
    typeUrl: "/permission.PermArgs";
    value: Uint8Array;
}
export interface PermArgsAmino {
    /** The permission function */
    Action?: string;
    /** The target of the action */
    Target?: string;
    /** Possible arguments */
    Permission?: string;
    Role?: string;
    Value?: boolean;
}
export interface PermArgsAminoMsg {
    type: "/permission.PermArgs";
    value: PermArgsAmino;
}
export interface PermArgsSDKType {
    Action: bigint;
    Target: Uint8Array;
    Permission: bigint;
    Role: string;
    Value: boolean;
}
export declare const AccountPermissions: {
    typeUrl: string;
    encode(message: AccountPermissions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountPermissions;
    fromPartial(object: Partial<AccountPermissions>): AccountPermissions;
    fromAmino(object: AccountPermissionsAmino): AccountPermissions;
    toAmino(message: AccountPermissions): AccountPermissionsAmino;
    fromAminoMsg(object: AccountPermissionsAminoMsg): AccountPermissions;
    fromProtoMsg(message: AccountPermissionsProtoMsg): AccountPermissions;
    toProto(message: AccountPermissions): Uint8Array;
    toProtoMsg(message: AccountPermissions): AccountPermissionsProtoMsg;
};
export declare const BasePermissions: {
    typeUrl: string;
    encode(message: BasePermissions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BasePermissions;
    fromPartial(object: Partial<BasePermissions>): BasePermissions;
    fromAmino(object: BasePermissionsAmino): BasePermissions;
    toAmino(message: BasePermissions): BasePermissionsAmino;
    fromAminoMsg(object: BasePermissionsAminoMsg): BasePermissions;
    fromProtoMsg(message: BasePermissionsProtoMsg): BasePermissions;
    toProto(message: BasePermissions): Uint8Array;
    toProtoMsg(message: BasePermissions): BasePermissionsProtoMsg;
};
export declare const PermArgs: {
    typeUrl: string;
    encode(message: PermArgs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PermArgs;
    fromPartial(object: Partial<PermArgs>): PermArgs;
    fromAmino(object: PermArgsAmino): PermArgs;
    toAmino(message: PermArgs): PermArgsAmino;
    fromAminoMsg(object: PermArgsAminoMsg): PermArgs;
    fromProtoMsg(message: PermArgsProtoMsg): PermArgs;
    toProto(message: PermArgs): Uint8Array;
    toProtoMsg(message: PermArgs): PermArgsProtoMsg;
};
