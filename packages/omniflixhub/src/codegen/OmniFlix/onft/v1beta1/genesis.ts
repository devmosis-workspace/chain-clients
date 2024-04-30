import { Collection, CollectionAmino, CollectionSDKType } from "./onft";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  collections: Collection[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateAmino {
  collections?: CollectionAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/OmniFlix.onft.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
  collections: CollectionSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    collections: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.onft.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/OmniFlix.onft.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};