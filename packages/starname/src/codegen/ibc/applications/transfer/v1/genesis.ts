import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
  portId: string;
  denomTraces: DenomTrace[];
  params?: Params;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateSDKType {
  port_id: string;
  denom_traces: DenomTraceSDKType[];
  params?: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    denomTraces: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      denomTraces: Array.isArray(object?.denomTraces) ? object.denomTraces.map((e: any) => DenomTrace.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.portId = object.portId ?? "";
    message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};