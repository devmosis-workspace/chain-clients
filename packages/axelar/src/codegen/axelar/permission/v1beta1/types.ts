import { Role, roleFromJSON } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface GovAccount {
  address: Uint8Array;
  role: Role;
}
export interface GovAccountProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.GovAccount";
  value: Uint8Array;
}
export interface GovAccountAmino {
  address?: string;
  role?: Role;
}
export interface GovAccountAminoMsg {
  type: "/axelar.permission.v1beta1.GovAccount";
  value: GovAccountAmino;
}
export interface GovAccountSDKType {
  address: Uint8Array;
  role: Role;
}
function createBaseGovAccount(): GovAccount {
  return {
    address: new Uint8Array(),
    role: 0
  };
}
export const GovAccount = {
  typeUrl: "/axelar.permission.v1beta1.GovAccount",
  encode(message: GovAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    return writer;
  },
  fromJSON(object: any): GovAccount {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      role: isSet(object.role) ? roleFromJSON(object.role) : -1
    };
  },
  fromPartial(object: Partial<GovAccount>): GovAccount {
    const message = createBaseGovAccount();
    message.address = object.address ?? new Uint8Array();
    message.role = object.role ?? 0;
    return message;
  },
  fromAmino(object: GovAccountAmino): GovAccount {
    const message = createBaseGovAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = roleFromJSON(object.role);
    }
    return message;
  },
  toAmino(message: GovAccount): GovAccountAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.role = message.role;
    return obj;
  },
  fromAminoMsg(object: GovAccountAminoMsg): GovAccount {
    return GovAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: GovAccountProtoMsg): GovAccount {
    return GovAccount.decode(message.value);
  },
  toProto(message: GovAccount): Uint8Array {
    return GovAccount.encode(message).finish();
  },
  toProtoMsg(message: GovAccount): GovAccountProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.GovAccount",
      value: GovAccount.encode(message).finish()
    };
  }
};