import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface Blacklister {
  address: string;
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
  encode(message: Blacklister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};