import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPair {
  /** ERC20 address of the token on the Kava EVM */
  kavaErc20Address: Uint8Array;
  /** Denom of the corresponding sdk.Coin */
  denom: string;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPairSDKType {
  kava_erc20_address: Uint8Array;
  denom: string;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20Token {
  /** Denom of the sdk.Coin */
  cosmosDenom: string;
  /** Name of ERC20 contract */
  name: string;
  /** Symbol of ERC20 contract */
  symbol: string;
  /** Number of decimals ERC20 contract is deployed with. */
  decimals: number;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20TokenSDKType {
  cosmos_denom: string;
  name: string;
  symbol: string;
  decimals: number;
}
function createBaseConversionPair(): ConversionPair {
  return {
    kavaErc20Address: new Uint8Array(),
    denom: ""
  };
}
export const ConversionPair = {
  encode(message: ConversionPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kavaErc20Address.length !== 0) {
      writer.uint32(10).bytes(message.kavaErc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): ConversionPair {
    return {
      kavaErc20Address: isSet(object.kavaErc20Address) ? bytesFromBase64(object.kavaErc20Address) : new Uint8Array(),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<ConversionPair>): ConversionPair {
    const message = createBaseConversionPair();
    message.kavaErc20Address = object.kavaErc20Address ?? new Uint8Array();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseAllowedCosmosCoinERC20Token(): AllowedCosmosCoinERC20Token {
  return {
    cosmosDenom: "",
    name: "",
    symbol: "",
    decimals: 0
  };
}
export const AllowedCosmosCoinERC20Token = {
  encode(message: AllowedCosmosCoinERC20Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosDenom !== "") {
      writer.uint32(10).string(message.cosmosDenom);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).uint32(message.decimals);
    }
    return writer;
  },
  fromJSON(object: any): AllowedCosmosCoinERC20Token {
    return {
      cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0
    };
  },
  fromPartial(object: Partial<AllowedCosmosCoinERC20Token>): AllowedCosmosCoinERC20Token {
    const message = createBaseAllowedCosmosCoinERC20Token();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    return message;
  }
};