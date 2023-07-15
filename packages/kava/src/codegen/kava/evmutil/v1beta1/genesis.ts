import { ConversionPair, ConversionPairSDKType, AllowedCosmosCoinERC20Token, AllowedCosmosCoinERC20TokenSDKType } from "./conversion_pair";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisState {
  accounts: Account[];
  /** params defines all the parameters of the module. */
  params?: Params;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  params?: ParamsSDKType;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface Account {
  address: Uint8Array;
  /** balance indicates the amount of akava owned by the address. */
  balance: string;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface AccountSDKType {
  address: Uint8Array;
  balance: string;
}
/** Params defines the evmutil module params */
export interface Params {
  /**
   * enabled_conversion_pairs defines the list of conversion pairs allowed to be
   * converted between Kava ERC20 and sdk.Coin
   */
  enabledConversionPairs: ConversionPair[];
  /**
   * allowed_cosmos_denoms is a list of denom & erc20 token metadata pairs.
   * if a denom is in the list, it is allowed to be converted to an erc20 in the evm.
   */
  allowedCosmosDenoms: AllowedCosmosCoinERC20Token[];
}
/** Params defines the evmutil module params */
export interface ParamsSDKType {
  enabled_conversion_pairs: ConversionPairSDKType[];
  allowed_cosmos_denoms: AllowedCosmosCoinERC20TokenSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseAccount(): Account {
  return {
    address: new Uint8Array(),
    balance: ""
  };
}
export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    return writer;
  },
  fromJSON(object: any): Account {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  fromPartial(object: Partial<Account>): Account {
    const message = createBaseAccount();
    message.address = object.address ?? new Uint8Array();
    message.balance = object.balance ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    enabledConversionPairs: [],
    allowedCosmosDenoms: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.enabledConversionPairs) {
      ConversionPair.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.allowedCosmosDenoms) {
      AllowedCosmosCoinERC20Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enabledConversionPairs: Array.isArray(object?.enabledConversionPairs) ? object.enabledConversionPairs.map((e: any) => ConversionPair.fromJSON(e)) : [],
      allowedCosmosDenoms: Array.isArray(object?.allowedCosmosDenoms) ? object.allowedCosmosDenoms.map((e: any) => AllowedCosmosCoinERC20Token.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabledConversionPairs = object.enabledConversionPairs?.map(e => ConversionPair.fromPartial(e)) || [];
    message.allowedCosmosDenoms = object.allowedCosmosDenoms?.map(e => AllowedCosmosCoinERC20Token.fromPartial(e)) || [];
    return message;
  }
};