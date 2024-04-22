import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
  providers: Provider[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.provider.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateAmino {
  providers?: ProviderAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/akash.provider.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateSDKType {
  providers: ProviderSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    providers: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.provider.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = [];
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
      typeUrl: "/akash.provider.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};