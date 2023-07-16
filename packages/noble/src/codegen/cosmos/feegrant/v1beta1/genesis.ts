import { Grant, GrantSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
  allowances: Grant[];
}
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisStateSDKType {
  allowances: GrantSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    allowances: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    return message;
  }
};