import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeeAccrualCounters, FeeAccrualCountersAmino, FeeAccrualCountersSDKType } from "./cellarfees";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the cellarfees module's genesis state. */
export interface GenesisState {
  params: Params;
  feeAccrualCounters: FeeAccrualCounters;
  lastRewardSupplyPeak: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cellarfees.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cellarfees module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  fee_accrual_counters?: FeeAccrualCountersAmino;
  last_reward_supply_peak?: string;
}
export interface GenesisStateAminoMsg {
  type: "/cellarfees.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cellarfees module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_accrual_counters: FeeAccrualCountersSDKType;
  last_reward_supply_peak: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feeAccrualCounters: FeeAccrualCounters.fromPartial({}),
    lastRewardSupplyPeak: ""
  };
}
export const GenesisState = {
  typeUrl: "/cellarfees.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeAccrualCounters !== undefined) {
      FeeAccrualCounters.encode(message.feeAccrualCounters, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastRewardSupplyPeak !== "") {
      writer.uint32(26).string(message.lastRewardSupplyPeak);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feeAccrualCounters: isSet(object.feeAccrualCounters) ? FeeAccrualCounters.fromJSON(object.feeAccrualCounters) : undefined,
      lastRewardSupplyPeak: isSet(object.lastRewardSupplyPeak) ? String(object.lastRewardSupplyPeak) : ""
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feeAccrualCounters = object.feeAccrualCounters !== undefined && object.feeAccrualCounters !== null ? FeeAccrualCounters.fromPartial(object.feeAccrualCounters) : undefined;
    message.lastRewardSupplyPeak = object.lastRewardSupplyPeak ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.fee_accrual_counters !== undefined && object.fee_accrual_counters !== null) {
      message.feeAccrualCounters = FeeAccrualCounters.fromAmino(object.fee_accrual_counters);
    }
    if (object.last_reward_supply_peak !== undefined && object.last_reward_supply_peak !== null) {
      message.lastRewardSupplyPeak = object.last_reward_supply_peak;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.fee_accrual_counters = message.feeAccrualCounters ? FeeAccrualCounters.toAmino(message.feeAccrualCounters) : undefined;
    obj.last_reward_supply_peak = message.lastRewardSupplyPeak;
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
      typeUrl: "/cellarfees.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};