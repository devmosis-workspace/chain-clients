import { Lien, LienSDKType } from "./lien";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** The initial or exported state. */
export interface GenesisState {
  liens: AccountLien[];
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
  liens: AccountLienSDKType[];
}
/** The lien on a particular account */
export interface AccountLien {
  /** Account address, bech32-encoded. */
  address: string;
  /** The liened amount. Should be nonzero. */
  lien?: Lien;
}
/** The lien on a particular account */
export interface AccountLienSDKType {
  address: string;
  lien?: LienSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    liens: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liens) {
      AccountLien.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      liens: Array.isArray(object?.liens) ? object.liens.map((e: any) => AccountLien.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.liens = object.liens?.map(e => AccountLien.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAccountLien(): AccountLien {
  return {
    address: "",
    lien: undefined
  };
}
export const AccountLien = {
  encode(message: AccountLien, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.lien !== undefined) {
      Lien.encode(message.lien, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountLien {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      lien: isSet(object.lien) ? Lien.fromJSON(object.lien) : undefined
    };
  },
  fromPartial(object: Partial<AccountLien>): AccountLien {
    const message = createBaseAccountLien();
    message.address = object.address ?? "";
    message.lien = object.lien !== undefined && object.lien !== null ? Lien.fromPartial(object.lien) : undefined;
    return message;
  }
};