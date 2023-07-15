import { Params, ParamsSDKType } from "./auth";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** accounts are the accounts present at genesis. */
  accounts: Any[];
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  accounts: AnySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    accounts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};