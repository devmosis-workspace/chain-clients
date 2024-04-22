import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ProxiedValidator, ProxiedValidatorAmino, ProxiedValidatorSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  proxiedValidators: ProxiedValidator[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  proxied_validators?: ProxiedValidatorAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelar.snapshot.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  proxied_validators: ProxiedValidatorSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    proxiedValidators: []
  };
}
export const GenesisState = {
  typeUrl: "/axelar.snapshot.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.proxiedValidators = object.proxied_validators?.map(e => ProxiedValidator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.proxiedValidators) {
      obj.proxied_validators = message.proxiedValidators.map(e => e ? ProxiedValidator.toAmino(e) : undefined);
    } else {
      obj.proxied_validators = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};