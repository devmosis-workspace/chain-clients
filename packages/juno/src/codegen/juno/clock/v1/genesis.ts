import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState - initial state of module */
export interface GenesisState {
  /** Params of this module */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/juno.clock.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - initial state of module */
export interface GenesisStateAmino {
  /** Params of this module */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/juno.clock.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
  /** contract_gas_limit defines the maximum amount of gas that can be used by a contract. */
  contractGasLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/juno.clock.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
  /** contract_gas_limit defines the maximum amount of gas that can be used by a contract. */
  contract_gas_limit?: string;
}
export interface ParamsAminoMsg {
  type: "/juno.clock.v1.Params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  contract_gas_limit: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/juno.clock.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
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
      typeUrl: "/juno.clock.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    contractGasLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/juno.clock.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.contractGasLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      contractGasLimit: isSet(object.contractGasLimit) ? BigInt(object.contractGasLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.contractGasLimit = object.contractGasLimit !== undefined && object.contractGasLimit !== null ? BigInt(object.contractGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.contract_gas_limit !== undefined && object.contract_gas_limit !== null) {
      message.contractGasLimit = BigInt(object.contract_gas_limit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.contract_gas_limit = message.contractGasLimit ? message.contractGasLimit.toString() : undefined;
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
      typeUrl: "/juno.clock.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};