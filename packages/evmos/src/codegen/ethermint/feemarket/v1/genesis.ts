import { Params, ParamsSDKType } from "./feemarket";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the feemarket module. */
  params?: Params;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  blockGas: Long;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  block_gas: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    blockGas: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blockGas.isZero()) {
      writer.uint32(24).uint64(message.blockGas);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      blockGas: isSet(object.blockGas) ? Long.fromValue(object.blockGas) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.blockGas = object.blockGas !== undefined && object.blockGas !== null ? Long.fromValue(object.blockGas) : Long.UZERO;
    return message;
  }
};