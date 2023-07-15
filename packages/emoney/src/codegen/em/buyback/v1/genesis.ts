import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface GenesisState {
  interval: string;
}
export interface GenesisStateSDKType {
  interval: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    interval: ""
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interval !== "") {
      writer.uint32(10).string(message.interval);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      interval: isSet(object.interval) ? String(object.interval) : ""
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.interval = object.interval ?? "";
    return message;
  }
};