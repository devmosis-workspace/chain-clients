import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface MintingDenom {
  denom: string;
}
export interface MintingDenomSDKType {
  denom: string;
}
function createBaseMintingDenom(): MintingDenom {
  return {
    denom: ""
  };
}
export const MintingDenom = {
  encode(message: MintingDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MintingDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MintingDenom>): MintingDenom {
    const message = createBaseMintingDenom();
    message.denom = object.denom ?? "";
    return message;
  }
};