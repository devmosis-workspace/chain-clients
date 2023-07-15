import { GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
  authorization: GrantAuthorization[];
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateSDKType {
  authorization: GrantAuthorizationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    authorization: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GrantAuthorization.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  }
};