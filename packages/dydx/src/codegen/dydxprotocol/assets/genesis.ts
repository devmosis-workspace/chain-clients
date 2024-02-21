import { Asset, AssetSDKType } from "./asset";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the assets module's genesis state. */
export interface GenesisState {
  assets: Asset[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.assets.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the assets module's genesis state. */
export interface GenesisStateSDKType {
  assets: AssetSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    assets: []
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.assets.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
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
      typeUrl: "/dydxprotocol.assets.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};