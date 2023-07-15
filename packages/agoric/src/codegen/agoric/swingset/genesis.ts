import { Params, ParamsSDKType, State, StateSDKType } from "./swingset";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** The initial or exported state. */
export interface GenesisState {
  params?: Params;
  state?: State;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  state?: StateSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    state: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.state = object.state !== undefined && object.state !== null ? State.fromPartial(object.state) : undefined;
    return message;
  }
};