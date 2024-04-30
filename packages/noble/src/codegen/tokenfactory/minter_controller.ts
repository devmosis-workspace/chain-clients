import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface MinterController {
  minter: string;
  controller: string;
}
export interface MinterControllerProtoMsg {
  typeUrl: "/noble.tokenfactory.MinterController";
  value: Uint8Array;
}
export interface MinterControllerAmino {
  minter?: string;
  controller?: string;
}
export interface MinterControllerAminoMsg {
  type: "/noble.tokenfactory.MinterController";
  value: MinterControllerAmino;
}
export interface MinterControllerSDKType {
  minter: string;
  controller: string;
}
function createBaseMinterController(): MinterController {
  return {
    minter: "",
    controller: ""
  };
}
export const MinterController = {
  typeUrl: "/noble.tokenfactory.MinterController",
  encode(message: MinterController, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    return writer;
  },
  fromJSON(object: any): MinterController {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      controller: isSet(object.controller) ? String(object.controller) : ""
    };
  },
  fromPartial(object: Partial<MinterController>): MinterController {
    const message = createBaseMinterController();
    message.minter = object.minter ?? "";
    message.controller = object.controller ?? "";
    return message;
  },
  fromAmino(object: MinterControllerAmino): MinterController {
    const message = createBaseMinterController();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    return message;
  },
  toAmino(message: MinterController): MinterControllerAmino {
    const obj: any = {};
    obj.minter = message.minter;
    obj.controller = message.controller;
    return obj;
  },
  fromAminoMsg(object: MinterControllerAminoMsg): MinterController {
    return MinterController.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterControllerProtoMsg): MinterController {
    return MinterController.decode(message.value);
  },
  toProto(message: MinterController): Uint8Array {
    return MinterController.encode(message).finish();
  },
  toProtoMsg(message: MinterController): MinterControllerProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MinterController",
      value: MinterController.encode(message).finish()
    };
  }
};