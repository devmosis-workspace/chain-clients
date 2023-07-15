import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface GenesisState {
  accounts: GenesisAcc[];
}
export interface GenesisStateSDKType {
  accounts: GenesisAccSDKType[];
}
export interface GenesisAcc {
  address: string;
  mintable: Coin[];
}
export interface GenesisAccSDKType {
  address: string;
  mintable: CoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      GenesisAcc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => GenesisAcc.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => GenesisAcc.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisAcc(): GenesisAcc {
  return {
    address: "",
    mintable: []
  };
}
export const GenesisAcc = {
  encode(message: GenesisAcc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisAcc {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisAcc>): GenesisAcc {
    const message = createBaseGenesisAcc();
    message.address = object.address ?? "";
    message.mintable = object.mintable?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};