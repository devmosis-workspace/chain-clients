import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../helpers";
export interface Blacklisted {
  addressBz: Uint8Array;
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
  encode(message: Blacklisted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};