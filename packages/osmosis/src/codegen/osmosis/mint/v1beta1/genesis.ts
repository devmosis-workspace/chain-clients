import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is an abstraction for holding current rewards information. */
  minter: Minter;
  /** params defines all the parameters of the mint module. */
  params: Params;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reductionStartedEpoch: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.mint.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
  /** minter is an abstraction for holding current rewards information. */
  minter?: MinterAmino;
  /** params defines all the parameters of the mint module. */
  params?: ParamsAmino;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reduction_started_epoch?: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/mint/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  minter: MinterSDKType;
  params: ParamsSDKType;
  reduction_started_epoch: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: Minter.fromPartial({}),
    params: Params.fromPartial({}),
    reductionStartedEpoch: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.mint.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.reductionStartedEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      reductionStartedEpoch: isSet(object.reductionStartedEpoch) ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromAmino(object.minter);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.reduction_started_epoch !== undefined && object.reduction_started_epoch !== null) {
      message.reductionStartedEpoch = BigInt(object.reduction_started_epoch);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.reduction_started_epoch = message.reductionStartedEpoch ? message.reductionStartedEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/mint/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};