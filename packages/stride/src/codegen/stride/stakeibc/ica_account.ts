import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export enum ICAAccountType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  UNRECOGNIZED = -1,
}
export const ICAAccountTypeSDKType = ICAAccountType;
export function iCAAccountTypeFromJSON(object: any): ICAAccountType {
  switch (object) {
    case 0:
    case "DELEGATION":
      return ICAAccountType.DELEGATION;
    case 1:
    case "FEE":
      return ICAAccountType.FEE;
    case 2:
    case "WITHDRAWAL":
      return ICAAccountType.WITHDRAWAL;
    case 3:
    case "REDEMPTION":
      return ICAAccountType.REDEMPTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ICAAccountType.UNRECOGNIZED;
  }
}
export function iCAAccountTypeToJSON(object: ICAAccountType): string {
  switch (object) {
    case ICAAccountType.DELEGATION:
      return "DELEGATION";
    case ICAAccountType.FEE:
      return "FEE";
    case ICAAccountType.WITHDRAWAL:
      return "WITHDRAWAL";
    case ICAAccountType.REDEMPTION:
      return "REDEMPTION";
    case ICAAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ICAAccount {
  address: string;
  target: ICAAccountType;
}
export interface ICAAccountSDKType {
  address: string;
  target: ICAAccountType;
}
function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    target: 0
  };
}
export const ICAAccount = {
  encode(message: ICAAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.target !== 0) {
      writer.uint32(24).int32(message.target);
    }
    return writer;
  },
  fromJSON(object: any): ICAAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      target: isSet(object.target) ? iCAAccountTypeFromJSON(object.target) : 0
    };
  },
  fromPartial(object: Partial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.target = object.target ?? 0;
    return message;
  }
};