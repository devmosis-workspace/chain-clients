import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface MasterMinter {
  address: string;
}
export interface MasterMinterProtoMsg {
  typeUrl: "/noble.tokenfactory.MasterMinter";
  value: Uint8Array;
}
export interface MasterMinterAmino {
  address?: string;
}
export interface MasterMinterAminoMsg {
  type: "/noble.tokenfactory.MasterMinter";
  value: MasterMinterAmino;
}
export interface MasterMinterSDKType {
  address: string;
}
function createBaseMasterMinter(): MasterMinter {
  return {
    address: ""
  };
}
export const MasterMinter = {
  typeUrl: "/noble.tokenfactory.MasterMinter",
  encode(message: MasterMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MasterMinter {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MasterMinter>): MasterMinter {
    const message = createBaseMasterMinter();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MasterMinterAmino): MasterMinter {
    const message = createBaseMasterMinter();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MasterMinter): MasterMinterAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MasterMinterAminoMsg): MasterMinter {
    return MasterMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MasterMinterProtoMsg): MasterMinter {
    return MasterMinter.decode(message.value);
  },
  toProto(message: MasterMinter): Uint8Array {
    return MasterMinter.encode(message).finish();
  },
  toProtoMsg(message: MasterMinter): MasterMinterProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MasterMinter",
      value: MasterMinter.encode(message).finish()
    };
  }
};