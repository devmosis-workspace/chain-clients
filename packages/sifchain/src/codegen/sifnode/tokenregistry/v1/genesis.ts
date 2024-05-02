import { SifnodeTokenRegistry, SifnodeTokenRegistryAmino, SifnodeTokenRegistrySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  registry?: SifnodeTokenRegistry;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  registry?: SifnodeTokenRegistryAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.tokenregistry.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  registry?: SifnodeTokenRegistrySDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    registry: undefined
  };
}
export const GenesisState = {
  typeUrl: "/sifnode.tokenregistry.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registry !== undefined) {
      SifnodeTokenRegistry.encode(message.registry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      registry: isSet(object.registry) ? SifnodeTokenRegistry.fromJSON(object.registry) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.registry = object.registry !== undefined && object.registry !== null ? SifnodeTokenRegistry.fromPartial(object.registry) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.registry !== undefined && object.registry !== null) {
      message.registry = SifnodeTokenRegistry.fromAmino(object.registry);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.registry = message.registry ? SifnodeTokenRegistry.toAmino(message.registry) : undefined;
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
      typeUrl: "/sifnode.tokenregistry.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};