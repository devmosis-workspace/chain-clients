import { Params, ParamsAmino, ParamsSDKType } from "./feemarket";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the feemarket module. */
  params: Params;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  blockGas: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the feemarket module. */
  params?: ParamsAmino;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  block_gas: string;
}
export interface GenesisStateAminoMsg {
  type: "/ethermint.feemarket.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  block_gas: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    blockGas: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ethermint.feemarket.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockGas);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      blockGas: isSet(object.blockGas) ? BigInt(object.blockGas.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.blockGas = object.blockGas !== undefined && object.blockGas !== null ? BigInt(object.blockGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      blockGas: BigInt(object.block_gas)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.block_gas = message.blockGas ? message.blockGas.toString() : undefined;
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
      typeUrl: "/ethermint.feemarket.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};