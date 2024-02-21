import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** AccountType defines the super account type */
export enum AccountType {
  /** GENESIS - GENESIS defines a genesis account type */
  GENESIS = 0,
  /** ORDINARY - ORDINARY defines a ordinary account type */
  ORDINARY = 1,
  UNRECOGNIZED = -1,
}
export const AccountTypeSDKType = AccountType;
export const AccountTypeAmino = AccountType;
export function accountTypeFromJSON(object: any): AccountType {
  switch (object) {
    case 0:
    case "GENESIS":
      return AccountType.GENESIS;
    case 1:
    case "ORDINARY":
      return AccountType.ORDINARY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountType.UNRECOGNIZED;
  }
}
export function accountTypeToJSON(object: AccountType): string {
  switch (object) {
    case AccountType.GENESIS:
      return "GENESIS";
    case AccountType.ORDINARY:
      return "ORDINARY";
    case AccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Super defines the super standard */
export interface Super {
  description: string;
  accountType: AccountType;
  address: string;
  addedBy: string;
}
export interface SuperProtoMsg {
  typeUrl: "/irishub.guardian.Super";
  value: Uint8Array;
}
/** Super defines the super standard */
export interface SuperAmino {
  description?: string;
  account_type?: AccountType;
  address?: string;
  added_by?: string;
}
export interface SuperAminoMsg {
  type: "/irishub.guardian.Super";
  value: SuperAmino;
}
/** Super defines the super standard */
export interface SuperSDKType {
  description: string;
  account_type: AccountType;
  address: string;
  added_by: string;
}
function createBaseSuper(): Super {
  return {
    description: "",
    accountType: 0,
    address: "",
    addedBy: ""
  };
}
export const Super = {
  typeUrl: "/irishub.guardian.Super",
  encode(message: Super, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.accountType !== 0) {
      writer.uint32(16).int32(message.accountType);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.addedBy !== "") {
      writer.uint32(34).string(message.addedBy);
    }
    return writer;
  },
  fromJSON(object: any): Super {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : -1,
      address: isSet(object.address) ? String(object.address) : "",
      addedBy: isSet(object.addedBy) ? String(object.addedBy) : ""
    };
  },
  fromPartial(object: Partial<Super>): Super {
    const message = createBaseSuper();
    message.description = object.description ?? "";
    message.accountType = object.accountType ?? 0;
    message.address = object.address ?? "";
    message.addedBy = object.addedBy ?? "";
    return message;
  },
  fromAmino(object: SuperAmino): Super {
    const message = createBaseSuper();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.account_type !== undefined && object.account_type !== null) {
      message.accountType = accountTypeFromJSON(object.account_type);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.added_by !== undefined && object.added_by !== null) {
      message.addedBy = object.added_by;
    }
    return message;
  },
  toAmino(message: Super): SuperAmino {
    const obj: any = {};
    obj.description = message.description;
    obj.account_type = message.accountType;
    obj.address = message.address;
    obj.added_by = message.addedBy;
    return obj;
  },
  fromAminoMsg(object: SuperAminoMsg): Super {
    return Super.fromAmino(object.value);
  },
  fromProtoMsg(message: SuperProtoMsg): Super {
    return Super.decode(message.value);
  },
  toProto(message: Super): Uint8Array {
    return Super.encode(message).finish();
  },
  toProtoMsg(message: Super): SuperProtoMsg {
    return {
      typeUrl: "/irishub.guardian.Super",
      value: Super.encode(message).finish()
    };
  }
};