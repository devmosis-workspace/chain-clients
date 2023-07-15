import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** AccountType defines the super account type */
export enum AccountType {
  /** GENESIS - GENESIS defines a genesis account type */
  GENESIS = 0,
  /** ORDINARY - ORDINARY defines a ordinary account type */
  ORDINARY = 1,
  UNRECOGNIZED = -1,
}
export const AccountTypeSDKType = AccountType;
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
  encode(message: Super, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
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
  }
};