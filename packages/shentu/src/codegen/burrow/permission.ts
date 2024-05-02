import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
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
function createBaseAccountPermissions(): AccountPermissions {
  return {
    Base: BasePermissions.fromPartial({}),
    Roles: []
  };
}
export const AccountPermissions = {
  typeUrl: "/permission.AccountPermissions",
  encode(message: AccountPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Base !== undefined) {
      BasePermissions.encode(message.Base, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Roles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): AccountPermissions {
    return {
      Base: isSet(object.Base) ? BasePermissions.fromJSON(object.Base) : undefined,
      Roles: Array.isArray(object?.Roles) ? object.Roles.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<AccountPermissions>): AccountPermissions {
    const message = createBaseAccountPermissions();
    message.Base = object.Base !== undefined && object.Base !== null ? BasePermissions.fromPartial(object.Base) : undefined;
    message.Roles = object.Roles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccountPermissionsAmino): AccountPermissions {
    const message = createBaseAccountPermissions();
    if (object.Base !== undefined && object.Base !== null) {
      message.Base = BasePermissions.fromAmino(object.Base);
    }
    message.Roles = object.Roles?.map(e => e) || [];
    return message;
  },
  toAmino(message: AccountPermissions): AccountPermissionsAmino {
    const obj: any = {};
    obj.Base = message.Base ? BasePermissions.toAmino(message.Base) : undefined;
    if (message.Roles) {
      obj.Roles = message.Roles.map(e => e);
    } else {
      obj.Roles = message.Roles;
    }
    return obj;
  },
  fromAminoMsg(object: AccountPermissionsAminoMsg): AccountPermissions {
    return AccountPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountPermissionsProtoMsg): AccountPermissions {
    return AccountPermissions.decode(message.value);
  },
  toProto(message: AccountPermissions): Uint8Array {
    return AccountPermissions.encode(message).finish();
  },
  toProtoMsg(message: AccountPermissions): AccountPermissionsProtoMsg {
    return {
      typeUrl: "/permission.AccountPermissions",
      value: AccountPermissions.encode(message).finish()
    };
  }
};
function createBaseBasePermissions(): BasePermissions {
  return {
    Perms: BigInt(0),
    SetBit: BigInt(0)
  };
}
export const BasePermissions = {
  typeUrl: "/permission.BasePermissions",
  encode(message: BasePermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Perms !== BigInt(0)) {
      writer.uint32(8).uint64(message.Perms);
    }
    if (message.SetBit !== BigInt(0)) {
      writer.uint32(16).uint64(message.SetBit);
    }
    return writer;
  },
  fromJSON(object: any): BasePermissions {
    return {
      Perms: isSet(object.Perms) ? BigInt(object.Perms.toString()) : BigInt(0),
      SetBit: isSet(object.SetBit) ? BigInt(object.SetBit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<BasePermissions>): BasePermissions {
    const message = createBaseBasePermissions();
    message.Perms = object.Perms !== undefined && object.Perms !== null ? BigInt(object.Perms.toString()) : BigInt(0);
    message.SetBit = object.SetBit !== undefined && object.SetBit !== null ? BigInt(object.SetBit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BasePermissionsAmino): BasePermissions {
    const message = createBaseBasePermissions();
    if (object.Perms !== undefined && object.Perms !== null) {
      message.Perms = BigInt(object.Perms);
    }
    if (object.SetBit !== undefined && object.SetBit !== null) {
      message.SetBit = BigInt(object.SetBit);
    }
    return message;
  },
  toAmino(message: BasePermissions): BasePermissionsAmino {
    const obj: any = {};
    obj.Perms = message.Perms !== BigInt(0) ? message.Perms.toString() : undefined;
    obj.SetBit = message.SetBit !== BigInt(0) ? message.SetBit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BasePermissionsAminoMsg): BasePermissions {
    return BasePermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: BasePermissionsProtoMsg): BasePermissions {
    return BasePermissions.decode(message.value);
  },
  toProto(message: BasePermissions): Uint8Array {
    return BasePermissions.encode(message).finish();
  },
  toProtoMsg(message: BasePermissions): BasePermissionsProtoMsg {
    return {
      typeUrl: "/permission.BasePermissions",
      value: BasePermissions.encode(message).finish()
    };
  }
};
function createBasePermArgs(): PermArgs {
  return {
    Action: BigInt(0),
    Target: new Uint8Array(),
    Permission: BigInt(0),
    Role: "",
    Value: false
  };
}
export const PermArgs = {
  typeUrl: "/permission.PermArgs",
  encode(message: PermArgs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Action !== BigInt(0)) {
      writer.uint32(8).uint64(message.Action);
    }
    if (message.Target.length !== 0) {
      writer.uint32(18).bytes(message.Target);
    }
    if (message.Permission !== BigInt(0)) {
      writer.uint32(24).uint64(message.Permission);
    }
    if (message.Role !== "") {
      writer.uint32(34).string(message.Role);
    }
    if (message.Value === true) {
      writer.uint32(40).bool(message.Value);
    }
    return writer;
  },
  fromJSON(object: any): PermArgs {
    return {
      Action: isSet(object.Action) ? BigInt(object.Action.toString()) : BigInt(0),
      Target: isSet(object.Target) ? bytesFromBase64(object.Target) : new Uint8Array(),
      Permission: isSet(object.Permission) ? BigInt(object.Permission.toString()) : BigInt(0),
      Role: isSet(object.Role) ? String(object.Role) : "",
      Value: isSet(object.Value) ? Boolean(object.Value) : false
    };
  },
  fromPartial(object: Partial<PermArgs>): PermArgs {
    const message = createBasePermArgs();
    message.Action = object.Action !== undefined && object.Action !== null ? BigInt(object.Action.toString()) : BigInt(0);
    message.Target = object.Target ?? new Uint8Array();
    message.Permission = object.Permission !== undefined && object.Permission !== null ? BigInt(object.Permission.toString()) : BigInt(0);
    message.Role = object.Role ?? "";
    message.Value = object.Value ?? false;
    return message;
  },
  fromAmino(object: PermArgsAmino): PermArgs {
    const message = createBasePermArgs();
    if (object.Action !== undefined && object.Action !== null) {
      message.Action = BigInt(object.Action);
    }
    if (object.Target !== undefined && object.Target !== null) {
      message.Target = bytesFromBase64(object.Target);
    }
    if (object.Permission !== undefined && object.Permission !== null) {
      message.Permission = BigInt(object.Permission);
    }
    if (object.Role !== undefined && object.Role !== null) {
      message.Role = object.Role;
    }
    if (object.Value !== undefined && object.Value !== null) {
      message.Value = object.Value;
    }
    return message;
  },
  toAmino(message: PermArgs): PermArgsAmino {
    const obj: any = {};
    obj.Action = message.Action !== BigInt(0) ? message.Action.toString() : undefined;
    obj.Target = message.Target ? base64FromBytes(message.Target) : undefined;
    obj.Permission = message.Permission !== BigInt(0) ? message.Permission.toString() : undefined;
    obj.Role = message.Role === "" ? undefined : message.Role;
    obj.Value = message.Value === false ? undefined : message.Value;
    return obj;
  },
  fromAminoMsg(object: PermArgsAminoMsg): PermArgs {
    return PermArgs.fromAmino(object.value);
  },
  fromProtoMsg(message: PermArgsProtoMsg): PermArgs {
    return PermArgs.decode(message.value);
  },
  toProto(message: PermArgs): Uint8Array {
    return PermArgs.encode(message).finish();
  },
  toProtoMsg(message: PermArgs): PermArgsProtoMsg {
    return {
      typeUrl: "/permission.PermArgs",
      value: PermArgs.encode(message).finish()
    };
  }
};