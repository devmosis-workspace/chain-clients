import { AllowedVault, AllowedVaultSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters of the earn module. */
export interface Params {
  allowedVaults: AllowedVault[];
}
/** Params defines the parameters of the earn module. */
export interface ParamsSDKType {
  allowed_vaults: AllowedVaultSDKType[];
}
function createBaseParams(): Params {
  return {
    allowedVaults: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedVaults) {
      AllowedVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      allowedVaults: Array.isArray(object?.allowedVaults) ? object.allowedVaults.map((e: any) => AllowedVault.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedVaults = object.allowedVaults?.map(e => AllowedVault.fromPartial(e)) || [];
    return message;
  }
};