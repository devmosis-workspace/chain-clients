import { Collection, CollectionAmino, CollectionSDKType } from "./nft";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the NFT module's genesis state */
export interface GenesisState {
  collections: Collection[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/chainmain.nft.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the NFT module's genesis state */
export interface GenesisStateAmino {
  collections: CollectionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/chainmain.nft.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the NFT module's genesis state */
export interface GenesisStateSDKType {
  collections: CollectionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    collections: []
  };
}
export const GenesisState = {
  typeUrl: "/chainmain.nft.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = [];
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
      typeUrl: "/chainmain.nft.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};