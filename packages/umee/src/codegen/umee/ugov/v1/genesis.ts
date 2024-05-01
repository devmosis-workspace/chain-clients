import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState of the ugov module. */
export interface GenesisState {
  minGasPrice: DecCoin;
  /** Emergency Group address */
  emergencyGroup: string;
  /** InflationParams is params for inflation rate changes */
  inflationParams: InflationParams;
  /** Time when the current inflation cycle will end */
  inflationCycleEnd: Timestamp;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.ugov.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState of the ugov module. */
export interface GenesisStateAmino {
  min_gas_price?: DecCoinAmino;
  /** Emergency Group address */
  emergency_group?: string;
  /** InflationParams is params for inflation rate changes */
  inflation_params?: InflationParamsAmino;
  /** Time when the current inflation cycle will end */
  inflation_cycle_end?: string;
}
export interface GenesisStateAminoMsg {
  type: "/umee.ugov.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState of the ugov module. */
export interface GenesisStateSDKType {
  min_gas_price: DecCoinSDKType;
  emergency_group: string;
  inflation_params: InflationParamsSDKType;
  inflation_cycle_end: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    minGasPrice: DecCoin.fromPartial({}),
    emergencyGroup: "",
    inflationParams: InflationParams.fromPartial({}),
    inflationCycleEnd: Timestamp.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/umee.ugov.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.emergencyGroup !== "") {
      writer.uint32(18).string(message.emergencyGroup);
    }
    if (message.inflationParams !== undefined) {
      InflationParams.encode(message.inflationParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.inflationCycleEnd !== undefined) {
      Timestamp.encode(message.inflationCycleEnd, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined,
      emergencyGroup: isSet(object.emergencyGroup) ? String(object.emergencyGroup) : "",
      inflationParams: isSet(object.inflationParams) ? InflationParams.fromJSON(object.inflationParams) : undefined,
      inflationCycleEnd: isSet(object.inflationCycleEnd) ? fromJsonTimestamp(object.inflationCycleEnd) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    message.emergencyGroup = object.emergencyGroup ?? "";
    message.inflationParams = object.inflationParams !== undefined && object.inflationParams !== null ? InflationParams.fromPartial(object.inflationParams) : undefined;
    message.inflationCycleEnd = object.inflationCycleEnd !== undefined && object.inflationCycleEnd !== null ? Timestamp.fromPartial(object.inflationCycleEnd) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.minGasPrice = DecCoin.fromAmino(object.min_gas_price);
    }
    if (object.emergency_group !== undefined && object.emergency_group !== null) {
      message.emergencyGroup = object.emergency_group;
    }
    if (object.inflation_params !== undefined && object.inflation_params !== null) {
      message.inflationParams = InflationParams.fromAmino(object.inflation_params);
    }
    if (object.inflation_cycle_end !== undefined && object.inflation_cycle_end !== null) {
      message.inflationCycleEnd = Timestamp.fromAmino(object.inflation_cycle_end);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
    obj.emergency_group = message.emergencyGroup === "" ? undefined : message.emergencyGroup;
    obj.inflation_params = message.inflationParams ? InflationParams.toAmino(message.inflationParams) : undefined;
    obj.inflation_cycle_end = message.inflationCycleEnd ? Timestamp.toAmino(message.inflationCycleEnd) : undefined;
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
      typeUrl: "/umee.ugov.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};