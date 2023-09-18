import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountAmino, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisState {
  params: Params;
  totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.feeburner.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  total_burned_neutrons_amount?: TotalBurnedNeutronsAmountAmino;
}
export interface GenesisStateAminoMsg {
  type: "/neutron.feeburner.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  total_burned_neutrons_amount: TotalBurnedNeutronsAmountSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/neutron.feeburner.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalBurnedNeutronsAmount !== undefined) {
      TotalBurnedNeutronsAmount.encode(message.totalBurnedNeutronsAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      totalBurnedNeutronsAmount: isSet(object.totalBurnedNeutronsAmount) ? TotalBurnedNeutronsAmount.fromJSON(object.totalBurnedNeutronsAmount) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.totalBurnedNeutronsAmount = object.totalBurnedNeutronsAmount !== undefined && object.totalBurnedNeutronsAmount !== null ? TotalBurnedNeutronsAmount.fromPartial(object.totalBurnedNeutronsAmount) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      totalBurnedNeutronsAmount: object?.total_burned_neutrons_amount ? TotalBurnedNeutronsAmount.fromAmino(object.total_burned_neutrons_amount) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.total_burned_neutrons_amount = message.totalBurnedNeutronsAmount ? TotalBurnedNeutronsAmount.toAmino(message.totalBurnedNeutronsAmount) : undefined;
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
      typeUrl: "/neutron.feeburner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};