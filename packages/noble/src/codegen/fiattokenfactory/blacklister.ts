import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Blacklister {
  address: string;
}
export interface BlacklisterProtoMsg {
  typeUrl: "/noble.fiattokenfactory.Blacklister";
  value: Uint8Array;
}
export interface BlacklisterAmino {
  address: string;
}
export interface BlacklisterAminoMsg {
  type: "/noble.fiattokenfactory.Blacklister";
  value: BlacklisterAmino;
}
export interface BlacklisterSDKType {
  address: string;
}
function createBaseBlacklister(): Blacklister {
  return {
    address: ""
  };
}
export const Blacklister = {
  typeUrl: "/noble.fiattokenfactory.Blacklister",
  encode(message: Blacklister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): Blacklister {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<Blacklister>): Blacklister {
    const message = createBaseBlacklister();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: BlacklisterAmino): Blacklister {
    return {
      address: object.address
    };
  },
  toAmino(message: Blacklister): BlacklisterAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: BlacklisterAminoMsg): Blacklister {
    return Blacklister.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklisterProtoMsg): Blacklister {
    return Blacklister.decode(message.value);
  },
  toProto(message: Blacklister): Uint8Array {
    return Blacklister.encode(message).finish();
  },
  toProtoMsg(message: Blacklister): BlacklisterProtoMsg {
    return {
      typeUrl: "/noble.fiattokenfactory.Blacklister",
      value: Blacklister.encode(message).finish()
    };
  }
};