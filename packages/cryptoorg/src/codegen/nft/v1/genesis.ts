import { Collection, CollectionSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the NFT module's genesis state */
export interface GenesisState {
  collections: Collection[];
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};