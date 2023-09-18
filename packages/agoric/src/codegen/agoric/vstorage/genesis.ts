import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** The initial or exported state. */
export interface GenesisState {
  data: DataEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/agoric.vstorage.GenesisState";
  value: Uint8Array;
}
/** The initial or exported state. */
export interface GenesisStateAmino {
  data: DataEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/agoric.vstorage.GenesisState";
  value: GenesisStateAmino;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
  data: DataEntrySDKType[];
}
/**
 * A vstorage entry.  The only necessary entries are those with data, as the
 * ancestor nodes are reconstructed on import.
 */
export interface DataEntry {
  /**
   * A "."-separated path with individual path elements matching
   * `[-_A-Za-z0-9]+`
   */
  path: string;
  value: string;
}
export interface DataEntryProtoMsg {
  typeUrl: "/agoric.vstorage.DataEntry";
  value: Uint8Array;
}
/**
 * A vstorage entry.  The only necessary entries are those with data, as the
 * ancestor nodes are reconstructed on import.
 */
export interface DataEntryAmino {
  /**
   * A "."-separated path with individual path elements matching
   * `[-_A-Za-z0-9]+`
   */
  path: string;
  value: string;
}
export interface DataEntryAminoMsg {
  type: "/agoric.vstorage.DataEntry";
  value: DataEntryAmino;
}
/**
 * A vstorage entry.  The only necessary entries are those with data, as the
 * ancestor nodes are reconstructed on import.
 */
export interface DataEntrySDKType {
  path: string;
  value: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    data: []
  };
}
export const GenesisState = {
  typeUrl: "/agoric.vstorage.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      DataEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => DataEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.data = object.data?.map(e => DataEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => DataEntry.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? DataEntry.toAmino(e) : undefined);
    } else {
      obj.data = [];
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
      typeUrl: "/agoric.vstorage.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseDataEntry(): DataEntry {
  return {
    path: "",
    value: ""
  };
}
export const DataEntry = {
  typeUrl: "/agoric.vstorage.DataEntry",
  encode(message: DataEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): DataEntry {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<DataEntry>): DataEntry {
    const message = createBaseDataEntry();
    message.path = object.path ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: DataEntryAmino): DataEntry {
    return {
      path: object.path,
      value: object.value
    };
  },
  toAmino(message: DataEntry): DataEntryAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: DataEntryAminoMsg): DataEntry {
    return DataEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: DataEntryProtoMsg): DataEntry {
    return DataEntry.decode(message.value);
  },
  toProto(message: DataEntry): Uint8Array {
    return DataEntry.encode(message).finish();
  },
  toProtoMsg(message: DataEntry): DataEntryProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.DataEntry",
      value: DataEntry.encode(message).finish()
    };
  }
};