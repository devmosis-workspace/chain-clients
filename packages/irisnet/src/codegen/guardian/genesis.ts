import { Super, SuperSDKType } from "./guardian";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the guardian module's genesis state */
export interface GenesisState {
  supers: Super[];
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};