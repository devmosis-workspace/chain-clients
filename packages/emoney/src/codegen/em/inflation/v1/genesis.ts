import { InflationState, InflationStateSDKType } from "./inflation";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface GenesisState {
  /** todo (reviewer): yaml naming is a bit inconsistent. state contains assets */
  assets?: InflationState;
}
export interface GenesisStateSDKType {
  assets?: InflationStateSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    assets: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assets !== undefined) {
      InflationState.encode(message.assets, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      assets: isSet(object.assets) ? InflationState.fromJSON(object.assets) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets !== undefined && object.assets !== null ? InflationState.fromPartial(object.assets) : undefined;
    return message;
  }
};