import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Owner {
  address: string;
}
export interface OwnerProtoMsg {
  typeUrl: "/noble.tokenfactory.Owner";
  value: Uint8Array;
}
export interface OwnerAmino {
  address?: string;
}
export interface OwnerAminoMsg {
  type: "/noble.tokenfactory.Owner";
  value: OwnerAmino;
}
export interface OwnerSDKType {
  address: string;
}
function createBaseOwner(): Owner {
  return {
    address: ""
  };
}
export const Owner = {
  typeUrl: "/noble.tokenfactory.Owner",
  encode(message: Owner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): Owner {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<Owner>): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: OwnerAmino): Owner {
    const message = createBaseOwner();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: Owner): OwnerAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: OwnerAminoMsg): Owner {
    return Owner.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerProtoMsg): Owner {
    return Owner.decode(message.value);
  },
  toProto(message: Owner): Uint8Array {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message: Owner): OwnerProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.Owner",
      value: Owner.encode(message).finish()
    };
  }
};