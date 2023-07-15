import { Params, ParamsSDKType } from "./params";
import { ProxiedValidator, ProxiedValidatorSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params?: Params;
  proxiedValidators: ProxiedValidator[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  proxied_validators: ProxiedValidatorSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    proxiedValidators: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.proxiedValidators) {
      ProxiedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      proxiedValidators: Array.isArray(object?.proxiedValidators) ? object.proxiedValidators.map((e: any) => ProxiedValidator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.proxiedValidators = object.proxiedValidators?.map(e => ProxiedValidator.fromPartial(e)) || [];
    return message;
  }
};