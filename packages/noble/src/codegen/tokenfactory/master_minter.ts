import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface MasterMinter {
  address: string;
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
  encode(message: MasterMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};