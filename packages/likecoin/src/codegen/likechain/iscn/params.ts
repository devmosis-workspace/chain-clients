import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Params {
  registryName: string;
  feePerByte?: DecCoin;
}
export interface ParamsSDKType {
  registry_name: string;
  fee_per_byte?: DecCoinSDKType;
}
function createBaseParams(): Params {
  return {
    registryName: "",
    feePerByte: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryName !== "") {
      writer.uint32(10).string(message.registryName);
    }
    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      registryName: isSet(object.registryName) ? String(object.registryName) : "",
      feePerByte: isSet(object.feePerByte) ? DecCoin.fromJSON(object.feePerByte) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.registryName = object.registryName ?? "";
    message.feePerByte = object.feePerByte !== undefined && object.feePerByte !== null ? DecCoin.fromPartial(object.feePerByte) : undefined;
    return message;
  }
};