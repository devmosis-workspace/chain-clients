import { Params, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisState {
  params?: Params;
  totalBurnedNeutronsAmount?: TotalBurnedNeutronsAmount;
}
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  total_burned_neutrons_amount?: TotalBurnedNeutronsAmountSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    totalBurnedNeutronsAmount: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};