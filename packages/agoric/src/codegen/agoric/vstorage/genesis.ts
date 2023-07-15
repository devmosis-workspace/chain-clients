import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** The initial or exported state. */
export interface GenesisState {
  data: DataEntry[];
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDataEntry(): DataEntry {
  return {
    path: "",
    value: ""
  };
}
export const DataEntry = {
  encode(message: DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};