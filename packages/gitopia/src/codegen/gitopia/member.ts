import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum MemberRole {
  MEMBER = 0,
  OWNER = 1,
  UNRECOGNIZED = -1,
}
export const MemberRoleSDKType = MemberRole;
export const MemberRoleAmino = MemberRole;
export function memberRoleFromJSON(object: any): MemberRole {
  switch (object) {
    case 0:
    case "MEMBER":
      return MemberRole.MEMBER;
    case 1:
    case "OWNER":
      return MemberRole.OWNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberRole.UNRECOGNIZED;
  }
}
export function memberRoleToJSON(object: MemberRole): string {
  switch (object) {
    case MemberRole.MEMBER:
      return "MEMBER";
    case MemberRole.OWNER:
      return "OWNER";
    case MemberRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Member {
  id: bigint;
  address: string;
  daoAddress: string;
  role: MemberRole;
}
export interface MemberProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Member";
  value: Uint8Array;
}
export interface MemberAmino {
  id?: string;
  address?: string;
  daoAddress?: string;
  role?: MemberRole;
}
export interface MemberAminoMsg {
  type: "/gitopia.gitopia.gitopia.Member";
  value: MemberAmino;
}
export interface MemberSDKType {
  id: bigint;
  address: string;
  daoAddress: string;
  role: MemberRole;
}
function createBaseMember(): Member {
  return {
    id: BigInt(0),
    address: "",
    daoAddress: "",
    role: 0
  };
}
export const Member = {
  typeUrl: "/gitopia.gitopia.gitopia.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.daoAddress !== "") {
      writer.uint32(26).string(message.daoAddress);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },
  fromJSON(object: any): Member {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      daoAddress: isSet(object.daoAddress) ? String(object.daoAddress) : "",
      role: isSet(object.role) ? memberRoleFromJSON(object.role) : -1
    };
  },
  fromPartial(object: Partial<Member>): Member {
    const message = createBaseMember();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.daoAddress = object.daoAddress ?? "";
    message.role = object.role ?? 0;
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.daoAddress !== undefined && object.daoAddress !== null) {
      message.daoAddress = object.daoAddress;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.daoAddress = message.daoAddress === "" ? undefined : message.daoAddress;
    obj.role = message.role === 0 ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Member",
      value: Member.encode(message).finish()
    };
  }
};