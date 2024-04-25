import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
export interface ConversionPairProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.ConversionPair";
  value: Uint8Array;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPairAmino {
  /** ERC20 address of the token on the Kava EVM */
  kava_erc20_address?: string;
  /** Denom of the corresponding sdk.Coin */
  denom?: string;
}
export interface ConversionPairAminoMsg {
  type: "/kava.evmutil.v1beta1.ConversionPair";
  value: ConversionPairAmino;
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
export interface AllowedCosmosCoinERC20TokenProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.AllowedCosmosCoinERC20Token";
  value: Uint8Array;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20TokenAmino {
  /** Denom of the sdk.Coin */
  cosmos_denom?: string;
  /** Name of ERC20 contract */
  name?: string;
  /** Symbol of ERC20 contract */
  symbol?: string;
  /** Number of decimals ERC20 contract is deployed with. */
  decimals?: number;
}
export interface AllowedCosmosCoinERC20TokenAminoMsg {
  type: "/kava.evmutil.v1beta1.AllowedCosmosCoinERC20Token";
  value: AllowedCosmosCoinERC20TokenAmino;
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
  typeUrl: "/kava.evmutil.v1beta1.ConversionPair",
  encode(message: ConversionPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConversionPairAmino): ConversionPair {
    const message = createBaseConversionPair();
    if (object.kava_erc20_address !== undefined && object.kava_erc20_address !== null) {
      message.kavaErc20Address = bytesFromBase64(object.kava_erc20_address);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: ConversionPair): ConversionPairAmino {
    const obj: any = {};
    obj.kava_erc20_address = message.kavaErc20Address ? base64FromBytes(message.kavaErc20Address) : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: ConversionPairAminoMsg): ConversionPair {
    return ConversionPair.fromAmino(object.value);
  },
  fromProtoMsg(message: ConversionPairProtoMsg): ConversionPair {
    return ConversionPair.decode(message.value);
  },
  toProto(message: ConversionPair): Uint8Array {
    return ConversionPair.encode(message).finish();
  },
  toProtoMsg(message: ConversionPair): ConversionPairProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.ConversionPair",
      value: ConversionPair.encode(message).finish()
    };
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
  typeUrl: "/kava.evmutil.v1beta1.AllowedCosmosCoinERC20Token",
  encode(message: AllowedCosmosCoinERC20Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AllowedCosmosCoinERC20TokenAmino): AllowedCosmosCoinERC20Token {
    const message = createBaseAllowedCosmosCoinERC20Token();
    if (object.cosmos_denom !== undefined && object.cosmos_denom !== null) {
      message.cosmosDenom = object.cosmos_denom;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    }
    return message;
  },
  toAmino(message: AllowedCosmosCoinERC20Token): AllowedCosmosCoinERC20TokenAmino {
    const obj: any = {};
    obj.cosmos_denom = message.cosmosDenom;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.decimals = message.decimals;
    return obj;
  },
  fromAminoMsg(object: AllowedCosmosCoinERC20TokenAminoMsg): AllowedCosmosCoinERC20Token {
    return AllowedCosmosCoinERC20Token.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedCosmosCoinERC20TokenProtoMsg): AllowedCosmosCoinERC20Token {
    return AllowedCosmosCoinERC20Token.decode(message.value);
  },
  toProto(message: AllowedCosmosCoinERC20Token): Uint8Array {
    return AllowedCosmosCoinERC20Token.encode(message).finish();
  },
  toProtoMsg(message: AllowedCosmosCoinERC20Token): AllowedCosmosCoinERC20TokenProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.AllowedCosmosCoinERC20Token",
      value: AllowedCosmosCoinERC20Token.encode(message).finish()
    };
  }
};