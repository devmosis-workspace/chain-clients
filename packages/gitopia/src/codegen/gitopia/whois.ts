import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum OwnerType {
  USER = 0,
  DAO = 1,
  UNRECOGNIZED = -1,
}
export const OwnerTypeSDKType = OwnerType;
export const OwnerTypeAmino = OwnerType;
export function ownerTypeFromJSON(object: any): OwnerType {
  switch (object) {
    case 0:
    case "USER":
      return OwnerType.USER;
    case 1:
    case "DAO":
      return OwnerType.DAO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OwnerType.UNRECOGNIZED;
  }
}
export function ownerTypeToJSON(object: OwnerType): string {
  switch (object) {
    case OwnerType.USER:
      return "USER";
    case OwnerType.DAO:
      return "DAO";
    case OwnerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Whois {
  creator: string;
  id: bigint;
  name: string;
  address: string;
  ownerType: OwnerType;
}
export interface WhoisProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Whois";
  value: Uint8Array;
}
export interface WhoisAmino {
  creator?: string;
  id?: string;
  name?: string;
  address?: string;
  ownerType?: OwnerType;
}
export interface WhoisAminoMsg {
  type: "/gitopia.gitopia.gitopia.Whois";
  value: WhoisAmino;
}
export interface WhoisSDKType {
  creator: string;
  id: bigint;
  name: string;
  address: string;
  ownerType: OwnerType;
}
function createBaseWhois(): Whois {
  return {
    creator: "",
    id: BigInt(0),
    name: "",
    address: "",
    ownerType: 0
  };
}
export const Whois = {
  typeUrl: "/gitopia.gitopia.gitopia.Whois",
  encode(message: Whois, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.ownerType !== 0) {
      writer.uint32(40).int32(message.ownerType);
    }
    return writer;
  },
  fromJSON(object: any): Whois {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      ownerType: isSet(object.ownerType) ? ownerTypeFromJSON(object.ownerType) : -1
    };
  },
  fromPartial(object: Partial<Whois>): Whois {
    const message = createBaseWhois();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.ownerType = object.ownerType ?? 0;
    return message;
  },
  fromAmino(object: WhoisAmino): Whois {
    const message = createBaseWhois();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.ownerType !== undefined && object.ownerType !== null) {
      message.ownerType = object.ownerType;
    }
    return message;
  },
  toAmino(message: Whois): WhoisAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.address = message.address === "" ? undefined : message.address;
    obj.ownerType = message.ownerType === 0 ? undefined : message.ownerType;
    return obj;
  },
  fromAminoMsg(object: WhoisAminoMsg): Whois {
    return Whois.fromAmino(object.value);
  },
  fromProtoMsg(message: WhoisProtoMsg): Whois {
    return Whois.decode(message.value);
  },
  toProto(message: Whois): Uint8Array {
    return Whois.encode(message).finish();
  },
  toProtoMsg(message: Whois): WhoisProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Whois",
      value: Whois.encode(message).finish()
    };
  }
};