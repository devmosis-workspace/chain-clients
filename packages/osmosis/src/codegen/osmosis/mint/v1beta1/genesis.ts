import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is an abstraction for holding current rewards information. */
  minter?: Minter;
  /** params defines all the paramaters of the mint module. */
  params?: Params;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reductionStartedEpoch: Long;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  minter?: MinterSDKType;
  params?: ParamsSDKType;
  reduction_started_epoch: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: undefined,
    params: undefined,
    reductionStartedEpoch: Long.ZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (!message.reductionStartedEpoch.isZero()) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      reductionStartedEpoch: isSet(object.reductionStartedEpoch) ? Long.fromValue(object.reductionStartedEpoch) : Long.ZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? Long.fromValue(object.reductionStartedEpoch) : Long.ZERO;
    return message;
  }
};