import * as _m0 from "protobufjs/minimal";
export interface Params {
  forceUnlockAllowedAddresses: string[];
}
export interface ParamsSDKType {
  force_unlock_allowed_addresses: string[];
}
function createBaseParams(): Params {
  return {
    forceUnlockAllowedAddresses: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.forceUnlockAllowedAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      forceUnlockAllowedAddresses: Array.isArray(object?.forceUnlockAllowedAddresses) ? object.forceUnlockAllowedAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map(e => e) || [];
    return message;
  }
};