import { ConversionPair, ConversionPairAmino, ConversionPairSDKType, AllowedCosmosCoinERC20Token, AllowedCosmosCoinERC20TokenAmino, AllowedCosmosCoinERC20TokenSDKType } from "./conversion_pair";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisState {
  accounts: Account[];
  /** params defines all the parameters of the module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateAmino {
  accounts?: AccountAmino[];
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/kava.evmutil.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  params: ParamsSDKType;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface Account {
  address: Uint8Array;
  /** balance indicates the amount of akava owned by the address. */
  balance: string;
}
export interface AccountProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.Account";
  value: Uint8Array;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface AccountAmino {
  address?: string;
  /** balance indicates the amount of akava owned by the address. */
  balance?: string;
}
export interface AccountAminoMsg {
  type: "/kava.evmutil.v1beta1.Account";
  value: AccountAmino;
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
export interface ParamsProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the evmutil module params */
export interface ParamsAmino {
  /**
   * enabled_conversion_pairs defines the list of conversion pairs allowed to be
   * converted between Kava ERC20 and sdk.Coin
   */
  enabled_conversion_pairs?: ConversionPairAmino[];
  /**
   * allowed_cosmos_denoms is a list of denom & erc20 token metadata pairs.
   * if a denom is in the list, it is allowed to be converted to an erc20 in the evm.
   */
  allowed_cosmos_denoms?: AllowedCosmosCoinERC20TokenAmino[];
}
export interface ParamsAminoMsg {
  type: "/kava.evmutil.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the evmutil module params */
export interface ParamsSDKType {
  enabled_conversion_pairs: ConversionPairSDKType[];
  allowed_cosmos_denoms: AllowedCosmosCoinERC20TokenSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/kava.evmutil.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/kava.evmutil.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseAccount(): Account {
  return {
    address: new Uint8Array(),
    balance: ""
  };
}
export const Account = {
  typeUrl: "/kava.evmutil.v1beta1.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AccountAmino): Account {
    const message = createBaseAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: Account): AccountAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.balance = message.balance;
    return obj;
  },
  fromAminoMsg(object: AccountAminoMsg): Account {
    return Account.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountProtoMsg): Account {
    return Account.decode(message.value);
  },
  toProto(message: Account): Uint8Array {
    return Account.encode(message).finish();
  },
  toProtoMsg(message: Account): AccountProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.Account",
      value: Account.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enabledConversionPairs: [],
    allowedCosmosDenoms: []
  };
}
export const Params = {
  typeUrl: "/kava.evmutil.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.enabledConversionPairs = object.enabled_conversion_pairs?.map(e => ConversionPair.fromAmino(e)) || [];
    message.allowedCosmosDenoms = object.allowed_cosmos_denoms?.map(e => AllowedCosmosCoinERC20Token.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.enabledConversionPairs) {
      obj.enabled_conversion_pairs = message.enabledConversionPairs.map(e => e ? ConversionPair.toAmino(e) : undefined);
    } else {
      obj.enabled_conversion_pairs = [];
    }
    if (message.allowedCosmosDenoms) {
      obj.allowed_cosmos_denoms = message.allowedCosmosDenoms.map(e => e ? AllowedCosmosCoinERC20Token.toAmino(e) : undefined);
    } else {
      obj.allowed_cosmos_denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};