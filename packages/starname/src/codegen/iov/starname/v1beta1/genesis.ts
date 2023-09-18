import { Domain, DomainAmino, DomainSDKType, Account, AccountAmino, AccountSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState - genesis state of x/starname */
export interface GenesisState {
  domains: Domain[];
  accounts: Account[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/starname */
export interface GenesisStateAmino {
  domains: DomainAmino[];
  accounts: AccountAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/starnamed.x.starname.v1beta1.GenesisState";
  value: GenesisStateAmino;
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
  typeUrl: "/starnamed.x.starname.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromAmino(e)) : [],
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map(e => e ? Domain.toAmino(e) : undefined);
    } else {
      obj.domains = [];
    }
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};