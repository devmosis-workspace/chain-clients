import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface Pauser {
  address: string;
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
  encode(message: Pauser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};