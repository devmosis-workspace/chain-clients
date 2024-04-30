import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Paused {
  paused: boolean;
}
export interface PausedProtoMsg {
  typeUrl: "/noble.tokenfactory.Paused";
  value: Uint8Array;
}
export interface PausedAmino {
  paused?: boolean;
}
export interface PausedAminoMsg {
  type: "/noble.tokenfactory.Paused";
  value: PausedAmino;
}
export interface PausedSDKType {
  paused: boolean;
}
function createBasePaused(): Paused {
  return {
    paused: false
  };
}
export const Paused = {
  typeUrl: "/noble.tokenfactory.Paused",
  encode(message: Paused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  fromJSON(object: any): Paused {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  fromPartial(object: Partial<Paused>): Paused {
    const message = createBasePaused();
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: PausedAmino): Paused {
    const message = createBasePaused();
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: Paused): PausedAmino {
    const obj: any = {};
    obj.paused = message.paused;
    return obj;
  },
  fromAminoMsg(object: PausedAminoMsg): Paused {
    return Paused.fromAmino(object.value);
  },
  fromProtoMsg(message: PausedProtoMsg): Paused {
    return Paused.decode(message.value);
  },
  toProto(message: Paused): Uint8Array {
    return Paused.encode(message).finish();
  },
  toProtoMsg(message: Paused): PausedProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.Paused",
      value: Paused.encode(message).finish()
    };
  }
};