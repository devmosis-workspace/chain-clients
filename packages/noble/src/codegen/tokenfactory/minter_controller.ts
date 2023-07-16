import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface MinterController {
  minter: string;
  controller: string;
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
  encode(message: MinterController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};