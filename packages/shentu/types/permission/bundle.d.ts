import * as _100 from "../burrow/permission";
export declare const permission: {
    AccountPermissions: {
        typeUrl: string;
        encode(message: _100.AccountPermissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _100.AccountPermissions;
        fromPartial(object: Partial<_100.AccountPermissions>): _100.AccountPermissions;
        fromAmino(object: _100.AccountPermissionsAmino): _100.AccountPermissions;
        toAmino(message: _100.AccountPermissions): _100.AccountPermissionsAmino;
        fromAminoMsg(object: _100.AccountPermissionsAminoMsg): _100.AccountPermissions;
        fromProtoMsg(message: _100.AccountPermissionsProtoMsg): _100.AccountPermissions;
        toProto(message: _100.AccountPermissions): Uint8Array;
        toProtoMsg(message: _100.AccountPermissions): _100.AccountPermissionsProtoMsg;
    };
    BasePermissions: {
        typeUrl: string;
        encode(message: _100.BasePermissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _100.BasePermissions;
        fromPartial(object: Partial<_100.BasePermissions>): _100.BasePermissions;
        fromAmino(object: _100.BasePermissionsAmino): _100.BasePermissions;
        toAmino(message: _100.BasePermissions): _100.BasePermissionsAmino;
        fromAminoMsg(object: _100.BasePermissionsAminoMsg): _100.BasePermissions;
        fromProtoMsg(message: _100.BasePermissionsProtoMsg): _100.BasePermissions;
        toProto(message: _100.BasePermissions): Uint8Array;
        toProtoMsg(message: _100.BasePermissions): _100.BasePermissionsProtoMsg;
    };
    PermArgs: {
        typeUrl: string;
        encode(message: _100.PermArgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _100.PermArgs;
        fromPartial(object: Partial<_100.PermArgs>): _100.PermArgs;
        fromAmino(object: _100.PermArgsAmino): _100.PermArgs;
        toAmino(message: _100.PermArgs): _100.PermArgsAmino;
        fromAminoMsg(object: _100.PermArgsAminoMsg): _100.PermArgs;
        fromProtoMsg(message: _100.PermArgsProtoMsg): _100.PermArgs;
        toProto(message: _100.PermArgs): Uint8Array;
        toProtoMsg(message: _100.PermArgs): _100.PermArgsProtoMsg;
    };
};
