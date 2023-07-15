import { Role, roleFromJSON } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface GovAccount {
  address: Uint8Array;
  role: Role;
}
export interface GovAccountSDKType {
  address: Uint8Array;
  role: Role;
}
function createBaseGovAccount(): GovAccount {
  return {
    address: new Uint8Array(),
    role: 0
  };
}
export const GovAccount = {
  encode(message: GovAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    return writer;
  },
  fromJSON(object: any): GovAccount {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      role: isSet(object.role) ? roleFromJSON(object.role) : 0
    };
  },
  fromPartial(object: Partial<GovAccount>): GovAccount {
    const message = createBaseGovAccount();
    message.address = object.address ?? new Uint8Array();
    message.role = object.role ?? 0;
    return message;
  }
};