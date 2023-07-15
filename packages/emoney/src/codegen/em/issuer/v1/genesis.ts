import { Issuer, IssuerSDKType } from "./issuer";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
  issuers: Issuer[];
}
export interface GenesisStateSDKType {
  issuers: IssuerSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    issuers: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    return message;
  }
};