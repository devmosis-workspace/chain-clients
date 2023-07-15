import { Provider, ProviderSDKType } from "./provider";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
  providers: Provider[];
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateSDKType {
  providers: ProviderSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    providers: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    return message;
  }
};