import { VestEntry, VestEntryAmino, VestEntrySDKType } from "./vest_entry";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the vest module's genesis state. */
export interface GenesisState {
  /** The vest entries at genesis. */
  vestEntries: VestEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.vest.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the vest module's genesis state. */
export interface GenesisStateAmino {
  /** The vest entries at genesis. */
  vest_entries?: VestEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dydxprotocol.vest.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the vest module's genesis state. */
export interface GenesisStateSDKType {
  vest_entries: VestEntrySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    vestEntries: []
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.vest.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vestEntries) {
      VestEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      vestEntries: Array.isArray(object?.vestEntries) ? object.vestEntries.map((e: any) => VestEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.vestEntries = object.vestEntries?.map(e => VestEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.vestEntries = object.vest_entries?.map(e => VestEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.vestEntries) {
      obj.vest_entries = message.vestEntries.map(e => e ? VestEntry.toAmino(e) : undefined);
    } else {
      obj.vest_entries = [];
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
      typeUrl: "/dydxprotocol.vest.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};