import { Domain, DomainSDKType, Account, AccountSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - genesis state of x/starname */
export interface GenesisState {
  domains: Domain[];
  accounts: Account[];
}
/** GenesisState - genesis state of x/starname */
export interface GenesisStateSDKType {
  domains: DomainSDKType[];
  accounts: AccountSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    domains: [],
    accounts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromJSON(e)) : [],
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.domains = object.domains?.map(e => Domain.fromPartial(e)) || [];
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    return message;
  }
};