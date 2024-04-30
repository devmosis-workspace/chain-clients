import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Pauser {
  address: string;
}
export interface PauserProtoMsg {
  typeUrl: "/noble.tokenfactory.Pauser";
  value: Uint8Array;
}
export interface PauserAmino {
  address?: string;
}
export interface PauserAminoMsg {
  type: "/noble.tokenfactory.Pauser";
  value: PauserAmino;
}
export interface PauserSDKType {
  address: string;
}
function createBasePauser(): Pauser {
  return {
    address: ""
  };
}
export const Pauser = {
  typeUrl: "/noble.tokenfactory.Pauser",
  encode(message: Pauser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): Pauser {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<Pauser>): Pauser {
    const message = createBasePauser();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: PauserAmino): Pauser {
    const message = createBasePauser();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: Pauser): PauserAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: PauserAminoMsg): Pauser {
    return Pauser.fromAmino(object.value);
  },
  fromProtoMsg(message: PauserProtoMsg): Pauser {
    return Pauser.decode(message.value);
  },
  toProto(message: Pauser): Uint8Array {
    return Pauser.encode(message).finish();
  },
  toProtoMsg(message: Pauser): PauserProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.Pauser",
      value: Pauser.encode(message).finish()
    };
  }
};