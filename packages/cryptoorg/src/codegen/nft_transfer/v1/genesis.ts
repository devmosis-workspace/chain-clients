import { ClassTrace, ClassTraceSDKType } from "./trace";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisState {
  portId: string;
  traces: ClassTrace[];
}
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisStateSDKType {
  port_id: string;
  traces: ClassTraceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    traces: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.traces) {
      ClassTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      traces: Array.isArray(object?.traces) ? object.traces.map((e: any) => ClassTrace.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.portId = object.portId ?? "";
    message.traces = object.traces?.map(e => ClassTrace.fromPartial(e)) || [];
    return message;
  }
};