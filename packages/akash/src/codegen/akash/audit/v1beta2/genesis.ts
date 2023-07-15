import { AuditedAttributes, AuditedAttributesSDKType } from "./audit";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisState {
  attributes: AuditedAttributes[];
}
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisStateSDKType {
  attributes: AuditedAttributesSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    attributes: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
    return message;
  }
};