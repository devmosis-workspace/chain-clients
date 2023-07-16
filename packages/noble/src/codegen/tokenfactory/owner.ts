import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface Owner {
  address: string;
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
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};