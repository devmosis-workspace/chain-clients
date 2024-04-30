import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
export interface Blacklisted {
  addressBz: Uint8Array;
}
export interface BlacklistedProtoMsg {
  typeUrl: "/noble.tokenfactory.Blacklisted";
  value: Uint8Array;
}
export interface BlacklistedAmino {
  addressBz?: string;
}
export interface BlacklistedAminoMsg {
  type: "/noble.tokenfactory.Blacklisted";
  value: BlacklistedAmino;
}
export interface BlacklistedSDKType {
  addressBz: Uint8Array;
}
function createBaseBlacklisted(): Blacklisted {
  return {
    addressBz: new Uint8Array()
  };
}
export const Blacklisted = {
  typeUrl: "/noble.tokenfactory.Blacklisted",
  encode(message: Blacklisted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressBz.length !== 0) {
      writer.uint32(10).bytes(message.addressBz);
    }
    return writer;
  },
  fromJSON(object: any): Blacklisted {
    return {
      addressBz: isSet(object.addressBz) ? bytesFromBase64(object.addressBz) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Blacklisted>): Blacklisted {
    const message = createBaseBlacklisted();
    message.addressBz = object.addressBz ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BlacklistedAmino): Blacklisted {
    const message = createBaseBlacklisted();
    if (object.addressBz !== undefined && object.addressBz !== null) {
      message.addressBz = bytesFromBase64(object.addressBz);
    }
    return message;
  },
  toAmino(message: Blacklisted): BlacklistedAmino {
    const obj: any = {};
    obj.addressBz = message.addressBz ? base64FromBytes(message.addressBz) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlacklistedAminoMsg): Blacklisted {
    return Blacklisted.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklistedProtoMsg): Blacklisted {
    return Blacklisted.decode(message.value);
  },
  toProto(message: Blacklisted): Uint8Array {
    return Blacklisted.encode(message).finish();
  },
  toProtoMsg(message: Blacklisted): BlacklistedProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.Blacklisted",
      value: Blacklisted.encode(message).finish()
    };
  }
};