import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export enum ICAAccountType {
  DELEGATION = 0,
  FEE = 1,
  WITHDRAWAL = 2,
  REDEMPTION = 3,
  UNRECOGNIZED = -1,
}
export const ICAAccountTypeSDKType = ICAAccountType;
export const ICAAccountTypeAmino = ICAAccountType;
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
export interface ICAAccountProtoMsg {
  typeUrl: "/stride.stakeibc.ICAAccount";
  value: Uint8Array;
}
export interface ICAAccountAmino {
  address: string;
  target: ICAAccountType;
}
export interface ICAAccountAminoMsg {
  type: "/stride.stakeibc.ICAAccount";
  value: ICAAccountAmino;
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
  typeUrl: "/stride.stakeibc.ICAAccount",
  encode(message: ICAAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      target: isSet(object.target) ? iCAAccountTypeFromJSON(object.target) : -1
    };
  },
  fromPartial(object: Partial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.target = object.target ?? 0;
    return message;
  },
  fromAmino(object: ICAAccountAmino): ICAAccount {
    return {
      address: object.address,
      target: isSet(object.target) ? iCAAccountTypeFromJSON(object.target) : -1
    };
  },
  toAmino(message: ICAAccount): ICAAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.target = message.target;
    return obj;
  },
  fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount {
    return ICAAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount {
    return ICAAccount.decode(message.value);
  },
  toProto(message: ICAAccount): Uint8Array {
    return ICAAccount.encode(message).finish();
  },
  toProtoMsg(message: ICAAccount): ICAAccountProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.ICAAccount",
      value: ICAAccount.encode(message).finish()
    };
  }
};