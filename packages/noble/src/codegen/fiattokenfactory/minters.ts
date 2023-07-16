import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface Minters {
  address: string;
  allowance?: Coin;
}
export interface MintersSDKType {
  address: string;
  allowance?: CoinSDKType;
}
function createBaseMinters(): Minters {
  return {
    address: "",
    allowance: undefined
  };
}
export const Minters = {
  encode(message: Minters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.allowance !== undefined) {
      Coin.encode(message.allowance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Minters {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      allowance: isSet(object.allowance) ? Coin.fromJSON(object.allowance) : undefined
    };
  },
  fromPartial(object: Partial<Minters>): Minters {
    const message = createBaseMinters();
    message.address = object.address ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Coin.fromPartial(object.allowance) : undefined;
    return message;
  }
};