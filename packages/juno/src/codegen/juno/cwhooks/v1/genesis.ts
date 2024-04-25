import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState - initial state of module */
export interface GenesisState {
  /** Params of this module */
  params: Params;
  /** staking_contract_addresses */
  stakingContractAddresses: string[];
  /** gov_contract_addresses */
  govContractAddresses: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/juno.cwhooks.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - initial state of module */
export interface GenesisStateAmino {
  /** Params of this module */
  params?: ParamsAmino;
  /** staking_contract_addresses */
  staking_contract_addresses?: string[];
  /** gov_contract_addresses */
  gov_contract_addresses?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/juno.cwhooks.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  staking_contract_addresses: string[];
  gov_contract_addresses: string[];
}
/** Params defines the set of module parameters. */
export interface Params {
  /** contract_gas_limit is the contract call gas limit */
  contractGasLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/juno.cwhooks.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
  /** contract_gas_limit is the contract call gas limit */
  contract_gas_limit?: string;
}
export interface ParamsAminoMsg {
  type: "/juno.cwhooks.v1.Params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  contract_gas_limit: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakingContractAddresses: [],
    govContractAddresses: []
  };
}
export const GenesisState = {
  typeUrl: "/juno.cwhooks.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakingContractAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.govContractAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      stakingContractAddresses: Array.isArray(object?.stakingContractAddresses) ? object.stakingContractAddresses.map((e: any) => String(e)) : [],
      govContractAddresses: Array.isArray(object?.govContractAddresses) ? object.govContractAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakingContractAddresses = object.stakingContractAddresses?.map(e => e) || [];
    message.govContractAddresses = object.govContractAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.stakingContractAddresses = object.staking_contract_addresses?.map(e => e) || [];
    message.govContractAddresses = object.gov_contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.stakingContractAddresses) {
      obj.staking_contract_addresses = message.stakingContractAddresses.map(e => e);
    } else {
      obj.staking_contract_addresses = [];
    }
    if (message.govContractAddresses) {
      obj.gov_contract_addresses = message.govContractAddresses.map(e => e);
    } else {
      obj.gov_contract_addresses = [];
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
      typeUrl: "/juno.cwhooks.v1.GenesisState",
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
  typeUrl: "/juno.cwhooks.v1.Params",
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
      typeUrl: "/juno.cwhooks.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};