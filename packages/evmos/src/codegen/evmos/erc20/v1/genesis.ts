import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the erc20 module parameters at genesis */
  params: Params;
  /** token_pairs is a slice of the registered token pairs at genesis */
  tokenPairs: TokenPair[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.erc20.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** params are the erc20 module parameters at genesis */
  params?: ParamsAmino;
  /** token_pairs is a slice of the registered token pairs at genesis */
  token_pairs: TokenPairAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.erc20.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pairs: TokenPairSDKType[];
}
/** Params defines the erc20 module params */
export interface Params {
  /** enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
  enableErc20: boolean;
  /**
   * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
   */
  enableEvmHook: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.erc20.v1.Params";
  value: Uint8Array;
}
/** Params defines the erc20 module params */
export interface ParamsAmino {
  /** enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
  enable_erc20: boolean;
  /**
   * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
   */
  enable_evm_hook: boolean;
}
export interface ParamsAminoMsg {
  type: "/evmos.erc20.v1.Params";
  value: ParamsAmino;
}
/** Params defines the erc20 module params */
export interface ParamsSDKType {
  enable_erc20: boolean;
  enable_evm_hook: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairs: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.erc20.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e: any) => TokenPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = [];
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
      typeUrl: "/evmos.erc20.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableErc20: false,
    enableEvmHook: false
  };
}
export const Params = {
  typeUrl: "/evmos.erc20.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableErc20 === true) {
      writer.uint32(8).bool(message.enableErc20);
    }
    if (message.enableEvmHook === true) {
      writer.uint32(16).bool(message.enableEvmHook);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableErc20: isSet(object.enableErc20) ? Boolean(object.enableErc20) : false,
      enableEvmHook: isSet(object.enableEvmHook) ? Boolean(object.enableEvmHook) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableErc20 = object.enableErc20 ?? false;
    message.enableEvmHook = object.enableEvmHook ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enableErc20: object.enable_erc20,
      enableEvmHook: object.enable_evm_hook
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_erc20 = message.enableErc20;
    obj.enable_evm_hook = message.enableEvmHook;
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
      typeUrl: "/evmos.erc20.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};