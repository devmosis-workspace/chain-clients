import { Super, SuperAmino, SuperSDKType } from "./guardian";
import { BinaryWriter } from "../binary";
/** GenesisState defines the guardian module's genesis state */
export interface GenesisState {
  supers: Super[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/irishub.guardian.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the guardian module's genesis state */
export interface GenesisStateAmino {
  supers: SuperAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/irishub.guardian.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the guardian module's genesis state */
export interface GenesisStateSDKType {
  supers: SuperSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    supers: []
  };
}
export const GenesisState = {
  typeUrl: "/irishub.guardian.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supers) {
      Super.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.supers = object.supers?.map(e => Super.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.supers) {
      obj.supers = message.supers.map(e => e ? Super.toAmino(e) : undefined);
    } else {
      obj.supers = [];
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
      typeUrl: "/irishub.guardian.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};