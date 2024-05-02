import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "./crypto";
import { Balance, BalanceAmino, BalanceSDKType } from "./balance";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
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
function createBaseTemplateAccount(): TemplateAccount {
  return {
    Name: "",
    Address: new Uint8Array(),
    PublicKey: undefined,
    Amounts: [],
    Permissions: [],
    Roles: [],
    Code: undefined
  };
}
export const TemplateAccount = {
  typeUrl: "/spec.TemplateAccount",
  encode(message: TemplateAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.Address.length !== 0) {
      writer.uint32(18).bytes(message.Address);
    }
    if (message.PublicKey !== undefined) {
      PublicKey.encode(message.PublicKey, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.Amounts) {
      Balance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.Permissions) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.Roles) {
      writer.uint32(50).string(v!);
    }
    if (message.Code !== undefined) {
      writer.uint32(58).bytes(message.Code);
    }
    return writer;
  },
  fromJSON(object: any): TemplateAccount {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      PublicKey: isSet(object.PublicKey) ? PublicKey.fromJSON(object.PublicKey) : undefined,
      Amounts: Array.isArray(object?.Amounts) ? object.Amounts.map((e: any) => Balance.fromJSON(e)) : [],
      Permissions: Array.isArray(object?.Permissions) ? object.Permissions.map((e: any) => String(e)) : [],
      Roles: Array.isArray(object?.Roles) ? object.Roles.map((e: any) => String(e)) : [],
      Code: isSet(object.Code) ? bytesFromBase64(object.Code) : undefined
    };
  },
  fromPartial(object: Partial<TemplateAccount>): TemplateAccount {
    const message = createBaseTemplateAccount();
    message.Name = object.Name ?? "";
    message.Address = object.Address ?? new Uint8Array();
    message.PublicKey = object.PublicKey !== undefined && object.PublicKey !== null ? PublicKey.fromPartial(object.PublicKey) : undefined;
    message.Amounts = object.Amounts?.map(e => Balance.fromPartial(e)) || [];
    message.Permissions = object.Permissions?.map(e => e) || [];
    message.Roles = object.Roles?.map(e => e) || [];
    message.Code = object.Code ?? undefined;
    return message;
  },
  fromAmino(object: TemplateAccountAmino): TemplateAccount {
    const message = createBaseTemplateAccount();
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    }
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = PublicKey.fromAmino(object.PublicKey);
    }
    message.Amounts = object.Amounts?.map(e => Balance.fromAmino(e)) || [];
    message.Permissions = object.Permissions?.map(e => e) || [];
    message.Roles = object.Roles?.map(e => e) || [];
    if (object.Code !== undefined && object.Code !== null) {
      message.Code = bytesFromBase64(object.Code);
    }
    return message;
  },
  toAmino(message: TemplateAccount): TemplateAccountAmino {
    const obj: any = {};
    obj.Name = message.Name === "" ? undefined : message.Name;
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.PublicKey = message.PublicKey ? PublicKey.toAmino(message.PublicKey) : undefined;
    if (message.Amounts) {
      obj.Amounts = message.Amounts.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.Amounts = message.Amounts;
    }
    if (message.Permissions) {
      obj.Permissions = message.Permissions.map(e => e);
    } else {
      obj.Permissions = message.Permissions;
    }
    if (message.Roles) {
      obj.Roles = message.Roles.map(e => e);
    } else {
      obj.Roles = message.Roles;
    }
    obj.Code = message.Code ? base64FromBytes(message.Code) : undefined;
    return obj;
  },
  fromAminoMsg(object: TemplateAccountAminoMsg): TemplateAccount {
    return TemplateAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: TemplateAccountProtoMsg): TemplateAccount {
    return TemplateAccount.decode(message.value);
  },
  toProto(message: TemplateAccount): Uint8Array {
    return TemplateAccount.encode(message).finish();
  },
  toProtoMsg(message: TemplateAccount): TemplateAccountProtoMsg {
    return {
      typeUrl: "/spec.TemplateAccount",
      value: TemplateAccount.encode(message).finish()
    };
  }
};